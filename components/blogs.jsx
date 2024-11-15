"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title:
      "Unlock the Secrets to Effective Weight Loss: Science-Backed Strategies",
    description:
      "Discover science-backed weight loss strategies like drinking water before meals, HIIT workouts, and intermittent fasting. Learn how melatonin, dairy, and healthy fats can aid in fat loss.",
    author: "Arpan Khehra",
    date: "09 October, 2024",
    image: "/blog-01-ways-to-lost-weight.webp",
    link: "/effective-weight-loss-strategy",
  },
  {
    id: 2,
    title: "5-easy-steps-for-healthy-lifestyle",
    description:
      "Transform your well-being with five simple steps: improve mobility, reduce stress, and boost gut health. Incorporate easy habits like hanging, squatting, and enjoying fermented foods for lasting results.",
    author: "Arpan Khehra",
    date: "09 October, 2024",
    image: "/blog-02-healthy-lifestyle-tips.webp",
    link: "/5-easy-steps-for-healthy-lifestyle",
  },
];

const BlogPost = ({ post }) => (
  <Link
    // href={post.link}
    href={`/blogs/${post.link}`} // link to the dynamic route using slug
    className="flex flex-col w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow transition-transform duration-300 transform hover:scale-105"
  >
    <Image
      src={post.image}
      alt={post.title}
      width={358}
      height={200}
      className="w-full h-[200px] object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-gray font-lato text-[0.75rem] md:text-base font-medium leading-6 mb-2">
        {post.author} • {post.date}
      </div>
      <h3 className="text-black font-lexend text-lg md:text-2xl leading-6 font-bold md:leading-8 mb-2">
        {post.title}
      </h3>
      <p className="text-gray font-lato text-xs leading-4 md:text-lg font-medium md:leading-7 mb-4 flex-grow">
        {post.description}
      </p>
    </div>
  </Link>
);

export default function Blog() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const descriptionRef = useRef(null);
  const postsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;
    const description = descriptionRef.current;
    const posts = postsRef.current;

    if (!section || !title || !button || !description || !posts) return;

    const animateElement = (element, direction) => {
      gsap.fromTo(
        element,
        {
          x: direction === "left" ? -50 : 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    };

    const resetElement = (element, direction) => {
      gsap.set(element, {
        x: direction === "left" ? -50 : 50,
        opacity: 0,
      });
    };

    const createTrigger = (element, direction) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => animateElement(element, direction),
        once: true,
        // onLeave: () => resetElement(element, direction),
        // onEnterBack: () => animateElement(element, direction),
        // onLeaveBack: () => resetElement(element, direction),
      });
    };

    createTrigger(title, "left");
    createTrigger(button, "right");
    createTrigger(description, "left");

    // For blog posts, we'll use a staggered animation
    ScrollTrigger.create({
      trigger: posts,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.fromTo(
          posts.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power3.out" }
        );
      },
      onLeave: () => {
        gsap.set(posts.children, { y: 50, opacity: 0 });
      },
      onEnterBack: () => {
        gsap.fromTo(
          posts.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power3.out" }
        );
      },
      onLeaveBack: () => {
        gsap.set(posts.children, { y: 50, opacity: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section ref={sectionRef} className="padding-container bg-white">
      <div className="mx-auto">
        <div className="flex flex-row justify-between items-start lg:items-center mb-8">
          {/* This shud appear from left whenever in view  */}
          <h2
            ref={titleRef}
            className="text-[1.5625rem] md:text-[3.5rem] font-semibold leading-none text-primary font-lexend"
          >
            Blog posts
          </h2>
          {/* This shud appear from right whenever in view  */}
          <div ref={buttonRef}>
            <Button
              href="/blogs"
              variant="primary"
              className="mt-0 inline-flex px-4 py-2 justify-center items-center gap-1.5 bg-primary text-white font-lato text-xs md:text-sm font-medium leading-5 rounded-md transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
            >
              View All Posts
            </Button>
          </div>
        </div>
        {/* This shud appear from left whenever in view  */}
        <p
          ref={descriptionRef}
          className="text-[0.75rem] leading-[20px] text-gray font-lato md:text-xl font-medium md:leading-[30px] mb-12 max-w-3xl"
        >
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage your business in one secure
          platform.
        </p>
        <div
          ref={postsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
