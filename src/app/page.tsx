"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MainFeed from "../components/MainFeed";
import postsData from '../../public/PostData.json';
import { Loader, Loader2 } from "lucide-react";

interface Post {
  id: number;
  userPhoto: string;
  username: string;
  time: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Main Feed */}
      <main className="w-full md:w-3/4 bg-gray-50 p-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <MainFeed key={post.id} post={post} />
          ))
        ) : (
          <div className="flex flex-col h-screen justify-center items-center">
            <Loader2 className="animate-spin" />
            <p>Please wait, fetching latest data....</p>
          </div>
        )}
      </main>
    </div>
  );
}
