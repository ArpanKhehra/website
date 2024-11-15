import { blogPosts } from "@/data/blog-data"; // Static blog posts data
import Image from "next/image";

// This function will be used by Next.js during the build process
export async function generateStaticParams() {
  // Generate a list of all the slugs for each blog post
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params; // Get the slug from dynamic route parameters
  const post = blogPosts.find((post) => post.slug === slug); // Find the blog post by slug

  if (!post) {
    return <p>Blog post not found.</p>; // Show this if no blog post matches the slug
  }

  return (
    <main className="relative overflow-hidden mb-16">
      <section className="relative overflow-hidden py-20 md:py-40 bg-orange-50 px-20 !pb-12 min-h-[400px] md:min-h-[600px]">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament-dots.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament-dots.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>{" "}
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-primary max-md:max-w-full">
          By {post.author} • {post.date}
        </p>
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center mt-10 font-lexend">
          {post.title}
        </h2>
      </section>
      <div className="max-w-max md:max-w-4xl mx-auto box-border px-8 py-12">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={200}
          className="w-full rounded-lg relative -top-32 md:-top-48"
        />
        {/* Render the content here */}
        <div className="-mt-16 text-lg font-lato text-gray leading-relaxed">
          {post.content()}
        </div>
      </div>
    </main>
  );
}
