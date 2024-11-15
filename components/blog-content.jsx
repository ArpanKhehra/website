"use client";

import Image from "next/image";

export default function BlogContent({ post }) {
  return (
    <section className="padding-container flex flex-col items-center max-w-6xl mx-auto py-12">
      {/* Main Blog Image */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Blog Body */}
      <div className="flex flex-col space-y-6 text-left max-w-3xl mx-auto">
        <p className="text-base leading-relaxed font-lato text-gray">
          {post.content}
        </p>

        {/* Sample Blockquote */}
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
          {post.quote}
          <cite className="block text-primary mt-2 font-semibold">
            — {post.author}, {post.authorRole}
          </cite>
        </blockquote>

        <h2 className="text-2xl font-bold text-primary">Header 1</h2>
        <p className="text-base leading-relaxed font-lato text-gray">
          {post.section1}
        </p>

        {/* Image 2 */}
        <div className="relative w-full h-[400px] my-10">
          <Image
            src={post.image2}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-bold text-primary">Header 2</h2>
        <p className="text-base leading-relaxed font-lato text-gray">
          {post.section2}
        </p>

        {/* Ordered List */}
        <ol className="list-decimal pl-5">
          {post.list.map((item, index) => (
            <li key={index} className="text-gray mb-2">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
