import Hero from "../components/Hero";
import MeetTheFamily from "../components/MeetTheFamily";
import Feedback from "../components/Feedback";
// import Gallery from "../components/Gallery";

const testimonies = [
  {
    title: "Testimony 1",
    text: `"Visiting the farm was like stepping into a picture-perfect postcard of rural life. The aroma of fresh herbs and the sight of free-range chickens wandering happily made me feel instantly at peace. I loved strolling through the fields, handpicking vegetables alongside the friendly farmers. The highlight was definitely the tasting session – those organic strawberries were the juiciest I've ever had! This farm truly embodies the essence of traditional Quebecois agriculture."`,
    author: "Marie-Claire L.",
  },
  {
    title: "Testimony 2",
    text: `"As a nature enthusiast, visiting the farm was a dream come true. The sprawling landscape, dotted with grazing cows and frolicking lambs, felt like a breath of fresh air away from the city hustle. I was impressed by the farmers' dedication to organic practices and their deep respect for the land and animals. Helping with the daily chores was both educational and rewarding. This is more than just a farm; it's a sanctuary of sustainable living and wholesome experiences."`,
    author: "Jean-Luc B.",
  },
  {
    title: "Testimony 3",
    text: `"My family and I had the most delightful day at the farm! From collecting eggs with the farmer's children to petting the friendly goats, every moment was filled with joy and connection to nature. We indulged in a picnic made from farm-fresh produce, and it was a taste sensation! The authenticity of the experience was unparalleled – no fancy gimmicks, just pure, honest farming. We left with hearts full of gratitude and baskets full of organic goodies."`,
    author: "Sophie D.",
  },
  {
    title: "Testimony 4",
    text: `"Being a skeptic of commercial agriculture, I was pleasantly surprised by my visit to the farm. The commitment to organic principles was evident in every aspect, from the lush vegetable patches to the contented pigs rooting in the mud. I appreciated the farmers' transparency and willingness to share their knowledge about sustainable farming practices. It was inspiring to see how a family-run operation could thrive while prioritizing ethics and quality. This farm has earned my utmost respect and admiration."`,
    author: "Marc-André F.",
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
