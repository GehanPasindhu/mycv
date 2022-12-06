import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./Data";

function BlogPost() {
  const { id } = useParams();
  console.log("id", id);
  const blog = data.filter((blog) => blog.id === id);
  console.log("blog", blog);

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="text-[10px] -mb-2 text-slate-600 uppercase font-bold tracking-wider">
        {blog[0].category}
      </div>
      <div className="font-bold text-slate-700 leading-snug capitalize text-2xl md:text-5xl">
        {blog[0].title}
      </div>
      <div className="text-xs -mt-1 uppercase font-bold tracking-wider">
        <span className="flex">
          <img
            src="https://api.iconify.design/mdi:calendar-month-outline.svg"
            className="pr-1"
          />
          {blog[0].datecreated}
        </span>
      </div>
      <div className="text-justify mt-2 text-sm">
        {blog[0].description.map((des) => (
          <div className="pt-2" key={des.id}>{des.content}</div>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
