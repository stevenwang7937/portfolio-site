import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import "@/styles/home_hero.css";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";
import HomeHero from "@/components/homehero";
import HomeDescription from "@/components/homedescription";
import HomeWork from "@/components/homework";
import HomeSideB from "@/components/homesideb";
import Form from "@/components/form";
import HomeFooter from "@/components/homefooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <HomeHero />
      <HomeDescription />
      <HomeWork />
      <HomeSideB />
      <HomeFooter />
    </main>
  );
}
