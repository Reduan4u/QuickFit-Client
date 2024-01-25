import Banner from "@/components/Home/banner/Banner";
import Counter from "@/components/Home/counter/Counter";
import DietPlan from "@/components/Home/diet-plan/dietPlan";
import FitnessClasses from "@/components/Home/fitnessClasses/FitnessClasses";
import Footer from "@/components/Home/footer/Footer";
import HealthAndFitness from "@/components/Home/healthAndFitness/HealthAndFitness";
import JanuaryPicks from "@/components/Home/januaryPicks/JanuaryPicks";
import Navbar from "@/components/Home/navbar/Navbar";
import NewStories from "@/components/Home/newStories/NewStories";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <NewStories></NewStories>
      <JanuaryPicks></JanuaryPicks>
      <HealthAndFitness></HealthAndFitness>
      <DietPlan></DietPlan>
      <FitnessClasses></FitnessClasses>
      <Counter></Counter>
      <Footer></Footer>
    </div>
  );
}
