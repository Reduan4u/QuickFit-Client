import RecipesForEatBetter from "@/components/Home/RecipesForEatBetter/RecipesForEatBetter";
import Route1Heading from "@/components/Route1/route1Heading/Route1Heading";
import Route1MoreStories from "@/components/Route1/route1MoreStories/Route1MoreStories";
import Route1SpotLight from "@/components/Route1/route1SpotLight/Route1SpotLight";

const EatBetter = () => {
  return (
    <div>
      <Route1Heading></Route1Heading>
      <Route1SpotLight></Route1SpotLight>
      <Route1MoreStories></Route1MoreStories>
      <RecipesForEatBetter></RecipesForEatBetter>
    </div>
  );
};

export default EatBetter;
