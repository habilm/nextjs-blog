import GlobalPageFooter from "@/components/GlobalFooter";
import GlobalPageHeader from "@/components/GlobalHeader";
import Link from "next/link";
import internal from "stream";
import BlogInterface from "@/interfaces/blog";
import BlogCard
 from "@/components/BlogCard";
// import Image from "next/image";

async function  getAllPosts(){
    const apiReq = fetch( "https://jsonplaceholder.typicode.com/posts" );
    if( (await apiReq).ok ){
        const apiBody = (await apiReq).json()
    
        return apiBody;
    }else{
        return false;
    }
   
}

export default async function Home() {
    const blogs  = await getAllPosts();
  return (
    <>
    <GlobalPageHeader />
    <div className="container text-center py-20">
      <h1 className="mb-6 text-5xl"> All Blogs </h1>
      <p className="mb-6">Find all my blogs here..</p>
    </div>
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blogs.map(function (b:BlogInterface){
                return <div key={b.id.toString()}>
                    <BlogCard userId={b.userId} title={b.title} body={b.body} id={b.id} />
                    </div>
                
            }) }
        </div>
    </div>
    
    <GlobalPageFooter />
    </>
  );
}
