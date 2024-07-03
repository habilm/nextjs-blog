import GlobalPageFooter from "@/components/GlobalFooter";
import GlobalPageHeader from "@/components/GlobalHeader";
import Link from "next/link";
import CommetsInterface from "@/interfaces/commets";

async function  getAllPost(id:Number):Promise<any|false>{
    const apiReq = fetch( "https://jsonplaceholder.typicode.com/posts/" + id );
    if( (await apiReq).ok ){
        const apiBody = (await apiReq).json()
    
        return apiBody;
    }else{
        return false
    }
   
}
async function  getComments(postId:Number):Promise<any|false>{
    const apiReq = fetch( "https://jsonplaceholder.typicode.com//comments?postId=" + postId);
    if( (await apiReq).ok ){
        const apiBody = (await apiReq).json()
    
        return apiBody;
    }else{
        return false;
    }
   
}

export default async function Home({params}:{params:{id:Number}}) {

    const blog = await getAllPost(params.id);
    const commets = await getComments(params.id);
    
    return (
      <>
      <GlobalPageHeader />
      <div className="container  text-center py-20">
        <h1 className="mb-6 text-5xl"> {blog.title} </h1>
        <p className="mb-6">{blog.body}</p>
        <Link href="/posts" className="btn ">Back to Blogs</Link>
        
      </div>
      <div className="container coment-continer">
        <h2 className="text-2xl mb-5" >Comments</h2>
        <div className="">
        {commets.map(function (b:CommetsInterface){
                return (<div className="mb-5 max-w-4xl h-full flex flex-col justify-between border border-solid border-gray-400 rounded-lg p-3" key={b?.id?.toString()}>
                    <div>
                        <h2 className="mb-2 font-bold text-lg">{b.name}</h2>
                        <h4 className="mb-4 font-bold text-sm">{b.email}</h4>
                        <p className="mb-6 text-sm">{b?.body}</p>

                    </div>

                </div>)
                
            }) }
        </div>
      </div>
      <GlobalPageFooter />
      </>
    );
  }