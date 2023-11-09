import Award from "./components/Award";
import Biography from "./components/Biography";
import Experience from "./components/Experience";
import FollowInsta from "./components/FollowInsta";
import Footer from "./components/Footer";
import Funfact from "./components/Funfact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SkillSet from "./components/SkillSet";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="wrapper">
      <Hero />
      <Biography />
      <SkillSet />
      <Portfolio />
      <Funfact />
      <Team />
      <Experience />
      <Testimonial />
      <Award />
      <FollowInsta />
      <Footer />
    </div>
  );
}
