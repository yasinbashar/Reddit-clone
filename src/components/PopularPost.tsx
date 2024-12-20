"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const popularPosts = [
  {
    id: 1,
    title: "Amazing sunset at the beach",
    image: "https://images.unsplash.com/photo-1616036740257-9449ea1f6605",
    subreddit: "r/NaturePhotography",
    upvotes: "15.2k"
  },
  {
    id: 2,
    title: "My cat being derpy",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    subreddit: "r/cats",
    upvotes: "12.8k"
  },
  {
    id: 3,
    title: "First time baking bread!",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    subreddit: "r/Breadit",
    upvotes: "9.4k"
  },
  {
    id: 4,
    title: "Spring in Tokyo",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
    subreddit: "r/Japan",
    upvotes: "18.6k"
  }
];

export default function PopularPosts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">Popular Posts</h2>
      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {popularPosts.map((post) => (
            <Card key={post.id} className="flex-shrink-0 w-72 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">{post.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.subreddit}</span>
                  <span>{post.upvotes} upvotes</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}