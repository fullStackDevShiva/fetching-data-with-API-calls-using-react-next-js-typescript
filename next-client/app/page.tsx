"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export default function Home() {
  const [allposts, setAllPosts] = useState<Posts[]>();

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getPosts");
      console.log(res.data.posts);
      setAllPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="page-layout">
      <h1>All Posts</h1>
      {allposts?.map((post) => {
        return (
          <div className="card mt-2" key={post.id}>
            <h4>{post.title}</h4>
            <p className="info text-left">{post.body}</p>
            <p className="info mt-4">Liked: {post.reactions}</p>
            <ul className="post-tags list-none mt-2">
              {post.tags?.map((tag) => {
                return (
                  <li
                    className="info inline-block mx-1 px-1 py-0.5 border border-gray-500 rounded"
                    key={tag}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
