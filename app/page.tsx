import FeaturedBlogs from "@/components/FeaturedBlogs";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import MessageFromDeveloper from "@/components/Message";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-indigo-900 via-blue-900 to-blue-8000">
      <Navbar />
      <Hero />
      <FeaturedBlogs />
      <Reviews />
      <MessageFromDeveloper/>
      <Footer/>
    </div>
  );
}
