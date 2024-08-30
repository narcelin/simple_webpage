import { useLocation } from "react-router-dom";
import CreatorsCard from "../components/CreatorsCard";
import { CreatorModel } from "../types/Creator";

function ShowCreators() {
  const location = useLocation();
  const object = location.state as CreatorModel;
  console.log(object);

  const exampleCreator: CreatorModel = {
    name: "John Doe",
    description: "An example creator",
    URL: ["youtube", "instagram", "twitter"],
    img: "jDoe.png",
  };

  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid grid-cols-2 place-items-center">
      <CreatorsCard creator={exampleCreator} />

      {/* <div>{object.name}</div> */}
    </div>
  );
}

export default ShowCreators;
