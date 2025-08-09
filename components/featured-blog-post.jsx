'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const FeaturedBlogPost = ({ post }) => {
  return (
    <Link
      href={post.link}
      className="no-underline"
    >
      <div className="bg-[var(--Gray-00)] rounded-[32px] shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)] cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-row gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                <p className="font-lato text-base font-semibold mb-4 text-[#061C3D]">
                  {post.date}
                </p>
              </div>
              <h2 className="text-black font-lexend text-2xl md:text-3xl font-bold mb-4">
                {post.title}
              </h2>
              <p className="text-gray font-lato text-lg mb-6">
                {post.description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4">
              <div className="bg-primary text-white font-lato text-base font-semibold py-3 px-6 rounded-md inline-flex items-center transition-all hover:bg-primary-dark justify-center text-lexend">
                Read More{' '}
                <ArrowRight
                  size={20}
                  className="ml-2"
                />
              </div>

              <div className="flex items-center border-none md:border-l pl-0 md:pl-4 border-r-0 border-[#CDD2D8] border-t-0 border-b-0">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="text-black font-lexend text-sm font-semibold">
                    {post.author}
                  </p>
                  <p className="text-gray font-lato text-xs">
                    {post.readTime} read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedBlogPost
