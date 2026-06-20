
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Products from "../components/Products";
import Industries from "../components/Industries";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Industries />
      <Process />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <About />
      <Stats />
      <Contact />
      
    </>
  );
}