"use client";


import { FaThumbsUp, FaThumbsDown, FaComment, FaShare, FaFlag } from "react-icons/fa";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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

  const MainFeed: React.FC<{post: Post | undefined }> = ({ post }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!post) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={"https://avatars.githubusercontent.com/u/124599?v=4"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{post.username}</h4>
            <p className="text-gray-500 text-sm">{post.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-600">
            Join Now
          </button>
          <div className="relative">
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              ...
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button className="flex items-center px-4 py-2 w-full hover:bg-gray-100">
                  <FaFlag className="mr-2 text-red-500" />
                  Feedback
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="my-4">{post.caption}</p>

      {post.image && (
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-auto rounded-lg object-cover"
        />
      )}

      <div className="flex items-center justify-between mt-4 text-gray-600">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-blue-500">
            <FaThumbsUp />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-red-500">
            <FaThumbsDown />
          </button>
          <button className="flex items-center gap-1 hover:text-green-500">
            <FaComment />
            <span>{post.comments}</span>
          </button>
        </div>
        <button className="flex items-center gap-1 hover:text-purple-500">
          <FaShare />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default MainFeed;
