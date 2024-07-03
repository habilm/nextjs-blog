import GlobalPageFooter from "@/components/GlobalFooter";
import GlobalPageHeader from "@/components/GlobalHeader";
import Link from "next/link";
// import Image from "next/image";


export default function Home() {
  return (
    <>
    <GlobalPageHeader />
    <div className="h-screen text-center py-20">
      <h1 className="mb-6 text-5xl"> Welcome to Habil's Blog </h1>
      <p className="mb-6">The App where you are find all your interstes</p>
      <Link href={'/posts'} className="btn ">Expore More</Link>
      
    </div>
    <GlobalPageFooter />
    </>
  );
}
