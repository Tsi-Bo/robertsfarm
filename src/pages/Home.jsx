import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import MeetTheFamily from "../components/MeetTheFamily";
import Feedback from "../components/Feedback";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <MeetTheFamily />
      <Feedback />
      <Gallery />
    </>
  );
}

export default Home;
