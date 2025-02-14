import AboutUs from "@/components/pages/home/about-us-page";
import Home from "@/components/pages/home/home-page";
import IndustriesPage from "@/components/pages/home/industries-page";

export default function HomePage() {
  
  return (
    <div> 
      <Home />
      <IndustriesPage />
      <AboutUs />
    </div>
  );
}
