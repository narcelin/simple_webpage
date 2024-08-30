import CreatorsCard from "../components/CreatorsCard";
import { useLocation } from "react-router-dom";
import { CreatorModel } from "../types/Creator";

function ViewCreator() {
  const location = useLocation();
  const exampleCreator = location.state as CreatorModel;
  console.log("VIEW CREATOR COMPONENT: ", exampleCreator);

  return (
    <div>
      <h1>ViewCreator</h1>
      <CreatorsCard creator={exampleCreator} />
    </div>
  );
}

export default ViewCreator;
