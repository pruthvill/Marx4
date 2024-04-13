"use client";
import React from 'react';
import DisplayRedditPosts from "@/components/reddit/DisplayRedditPosts";
import DisplayYoutubePosts from "@/components/youtube/DisplayYoutubePosts";
import DisplayTwitterPosts from "@/components/twitter/DisplayTwitterPosts";
import DisplayGoodreads from "@/components/goodreads/DisplayGoodreads";
import Gallery from "@/components/pinterest/Gallery";
import DisplayGithub from "@/components/github/DisplayGithub";
import LikedSubmissions from "@/components/hackernews/LikedSubmissions";
import Note from '@/components/notes/Note';

export default function Home() {
  return (
    <div className="flex flex-row gap-4 p-4 overflow-hidden">
      <DisplayYoutubePosts />
      <DisplayRedditPosts />
      <DisplayGithub />
   
      <Gallery />
       {/* <DisplayGoodreads />  */}
       {/* <DisplayTwitterPosts />  */}
    </div>
  );
}