import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Experiences from "../components/experiences";
import Excellence from "../components/Excellence";
import SignatureCollection from "@/components/SignatureCollection";
import ClientStories from "@/components/ClientStories";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Experiences />
      <Excellence />
      <SignatureCollection />
      <ClientStories />
      <FinalCTA />
    </main>
  );
}
