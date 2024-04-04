"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ListItemComponent from "./ListItemComponent";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

export default function ListComponent() {
  const [allposts, setAllPosts] = useState<Post[] | null>(null);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getPosts");
      if (!res) {
        console.log("Posts not found");
        alert("No item found!");
        return;
      }
      console.log(res.data.posts);
      setAllPosts(res.data.posts);
    } catch (error) {
      //   console.log(error);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {allposts
        ?.slice(0)
        .reverse()
        .map((post, index) => {
          return (
            // <ListItemComponent data={post} index={index} />
            <ListItemComponent
              item_title={post.title}
              item_body={post.body}
              item_tags={post.tags}
              item_reactions={post.reactions}
              index={index}
            />
          );
        })}
    </>
  );
}
