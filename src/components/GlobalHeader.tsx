import React from "react";

import Link from "next/link";

export default function GlobalPageHeader(){
    return <>
        <header className="global-header  shadow-lg">
            <div className="container ">
                <div className="flex flex-wrap justify-between py-4 ">
                    <div className="">
                        <span><strong><Link href="/">Habil's Blog</Link></strong></span>
                    </div>
                    <div>
                        <ul className="flex gap-4 justify-end">
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
}