import React from "react";
import { data } from "./Data";

function index() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {data.map((index) => (
          <div className="columns-1 p-3 shadow-md" id={index.id}>
            <img
              className="rounded mb-2"
              src={index.coverimg}
              alt={index.coveralt}
            />
            <div className="text-[10px] -mb-2 text-slate-600 uppercase font-bold tracking-wider">
              {index.category}
            </div>
            <div className="font-bold text-slate-700 leading-snug capitalize">
              {index.title}
            </div>
            <p className="mt-2 text-sm text-slate-600 text-justify ">
              {index.description[0].content.substring(0, 150)}
            </p>
            <button className="text-xs font-bold hover:italic rounded-md border-0 text-green-600 mt-2 mb-1">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
