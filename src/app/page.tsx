"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MainFeed from "./components/MainFeed";
import postsData from '../../public/PostData.json';

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
    <div className="flex flex-col md:flex-row">
     
      <aside className="md:block hidden w-64 bg-gray-100 p-4 h-[calc(100vh-3rem)] sticky top-12">
        <h2 className="font-bold text-lg mb-4">Sidebar</h2>
      </aside>

      {/* Main Feed */}
      <main className="w-full md:w-3/4 bg-gray-50 p-4 mt-7">
        {posts.length > 0 ? (
          posts.map((post) => (
            <MainFeed key={post.id} post={post} />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </main>
    </div>
  );
}
