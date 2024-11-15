"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedBlogPost from "@/components/featured-blog-post";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogPost = ({ post }) => (
  <Link
    href={`/blogs/${post.link}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 "
  >
    <Image
      src={post.image}
      alt={post.title}
      width={358}
      height={200}
      className="w-full h-[200px] object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-gray font-lato text-base font-medium leading-6 mb-2">
        {post.author} • {post.date}
      </div>
      <h3 className="text-black font-lexend text-2xl font-bold leading-8 mb-2">
        {post.title}
      </h3>
      <p className="text-gray font-lato text-lg font-medium leading-7 mb-4 flex-grow">
        {post.description}
      </p>
    </div>
  </Link>
);

const BlogCarousel = ({ blogPosts }) => {
  const [activePage, setActivePage] = useState(0);
  const postsPerPage = 9;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageIndex) => {
    setActivePage(Math.max(0, Math.min(pageIndex, totalPages - 1)));
  };

  const handlePrev = () => {
    handlePageChange(activePage - 1);
  };

  const handleNext = () => {
    handlePageChange(activePage + 1);
  };

  return (
    <div className="relative overflow-hidden max-w-[1440px] mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activePage * 100}%)`,
        }}
      >
        {[...Array(totalPages)].map((_, pageIndex) => (
          <div key={pageIndex} className="flex-shrink-0 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts
                .slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage)
                .map((post) => (
                  <BlogPost key={post.id} post={post} />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 mb-[70px] gap-4">
        <button
          onClick={handlePrev}
          disabled={activePage === 0}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full disabled:opacity-50 border-primary border"
        >
          <ChevronLeft size={24} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`border-primary border rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium ${
              activePage === index
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={activePage === totalPages - 1}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full disabled:opacity-50 border-primary border"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const aboutUsContent = {
    header: {
      title: "Blog Posts",
      subtitle:
        "Ready to transform your lives? Choose the online nutrition coaching that's right for you.",
    },
    images: {
      headerDecoration: "/ornament-dots.svg",
      mainImage: "/about-intro.svg",
      decorationExplosive: "/ornament-dots-explosive.svg",
    },
  };
  // TODO: Important keep this comments
  // const blogPosts = Array(36).fill({
  //   id: 1,
  //   title:
  //     "Unlock the Secrets to Effective Weight Loss: Science-Backed Strategies",
  //   description:
  //     "Discover science-backed weight loss strategies like drinking water before meals, HIIT workouts, and intermittent fasting. Learn how melatonin, dairy, and healthy fats can aid in fat loss.",
  //   author: "Arpan Khehra",
  //   date: "09 October, 2024",
  //   image: "/blog-01-ways-to-lost-weight.webp",
  //   link: "/blogs/effective-weight-loss-strategy",
  // });
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

  const featuredPost = {
    date: "09 October, 2024",
    title: "5-easy-steps-for-healthy-lifestyle",
    description:
      "Transform your well-being with five simple steps: improve mobility, reduce stress, and boost gut health. Incorporate easy habits like hanging, squatting, and enjoying fermented foods for lasting results.",
    image: "/blog-02-healthy-lifestyle-tips.webp",
    link: "/5-easy-steps-for-healthy-lifestyle",
    author: "Arpan Khehra",
    authorImage: "/avatar-arpan.svg",
    readTime: "4 min",
  };

  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden py-20 md:py-32 px-20 bg-orange-50 max-md:px-5 !pb-12">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-6xl font-semibold leading-none text-primary max-md:text-4xl text-center mt-10 font-lexend">
          {aboutUsContent.header.title}
        </h2>
        <p className="font-lexend mt-7 text-lg text-gray max-md:max-w-full max-w-[60%] text-center m-auto leading-[32px]">
          {aboutUsContent.header.subtitle}
        </p>
      </section>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.5625rem] font-semibold mb-4 leading-none text-primary md:text-[3.5rem] text-center">
            Featured Blogs
          </h2>
          <FeaturedBlogPost post={featuredPost} />
        </div>
      </section>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.5625rem] font-semibold mb-4 leading-none text-primary md:text-[3.5rem] text-center">
            Latest Blogs
          </h2>
          <BlogCarousel blogPosts={blogPosts} />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
