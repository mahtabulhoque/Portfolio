"use client";
import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

interface Blog {
  id: number;
  title: string;
  description: string;
}

interface CardItem {
  quote: string;
  name: string;
  title: string;
}

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("/blogs.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Blog[] = await response.json();
        setBlogData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  const cardItems: CardItem[] = blogData.map((blog) => ({
    quote: blog.description,
    name: `Blog ${blog.id}`,
    title: blog.title,
  }));

  return (
    <div>
      <h1 className="text-white text-5xl text-center font-bold mb-8 py-10">Blogs</h1>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg- dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={cardItems} direction="right" speed="slow" />
    </div>
    </div>
  );
};

export default Blogs;
