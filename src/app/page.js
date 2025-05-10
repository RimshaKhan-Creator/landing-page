import Image from "next/image";
import Header from "./Header/page";
// import AlbumCarousel from "./AlbumCarousel"
import TopSample from "./TopSample/page";
import TopnewSamples from "./TopnewSamples/page";
import Footer from "./Footer/page";
import AlbumCarousel from "./AlbumCarousel/page";
import Hero from "./Hero/page";
export default function Home() {
  return (
   

  

  <main className="row-start-2 flex flex-col gap-10 w-full max-w-7xl mx-auto">
    {/* Replace/Add components here */}
       <Header />
   <Hero/>
    <AlbumCarousel/>
       <TopnewSamples />
    <TopSample />
    <Footer />
  </main>

  );
}
