import FeaturedBlogs from "@/components/FeaturedBlogs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-700 to-black min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedBlogs />
      <Reviews />
    </div>
  );
}
