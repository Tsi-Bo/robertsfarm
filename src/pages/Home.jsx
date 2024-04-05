import Hero from "../components/Hero";
import MeetTheFamily from "../components/MeetTheFamily";
import Feedback from "../components/Feedback";
// import Gallery from "../components/Gallery";

const testimonies = [
  {
    title: "Testimony 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
  },
  {
    title: "Testimony 2",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
  },
  {
    title: "Testimony 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Joe Biden Smith",
  },
  {
    title: "Testimony 4",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jacob Jabobsen",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <MeetTheFamily />
      <Feedback data={testimonies} />
      {/* <Gallery /> */}
    </>
  );
}

export default Home;
