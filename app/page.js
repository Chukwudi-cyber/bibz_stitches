import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#FBF4EA]">
      <Navbar />
      <Home />
      <Portfolio />
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </main>
  );
}
