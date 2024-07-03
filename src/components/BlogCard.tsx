import React from "react";
import BlogInterface from "@/interfaces/blog";
import Link from "next/link";

export default function BlogCard(b:BlogInterface){

    return <div className="h-full flex flex-col justify-between border border-solid border-gray-400 rounded-lg p-3 transition-transform hover:scale-105" key={b?.id?.toString()}>
        <div>
            <h2 className="mb-4 font-bold text-lg">{b.title}</h2>
            <p className="mb-6 text-sm">{b?.body?.substring(0,100)}{b?.body?.length > 100 ? "..." : ""}</p>

        </div>
        <div  className="mb-4">

        <Link className="btn" href={"/posts/" + b?.id } > Read More... </Link>
        </div>

    </div>
}