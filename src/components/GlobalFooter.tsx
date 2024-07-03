import React from "react";

export default function GlobalPageFooter(){
    return <>
    <footer  className="mt-10">
        <hr/>
        <p className="text-xs text-center py-4">Habil's Blog, Copyright © {new Date().getFullYear()}  </p>
    </footer>
    </>
}