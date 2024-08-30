import CreatorsCard from "../components/CreatorsCard";
import { useLocation } from "react-router-dom";
import { CreatorModel } from "../types/Creator";

function ViewCreator() {
  const location = useLocation();
  const exampleCreator = location.state as CreatorModel;
  console.log("VIEW CREATOR COMPONENT: ", exampleCreator);

  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid place-items-center">
      <div className="w-full">
        <h2 className="flex place-content-around">CreatorsCard</h2>
        <div className="flex place-content-around border border-green-500">
          <div>IMG</div>
          <div className="flex flex-col border border-red-500 gap-3">
            <div>{exampleCreator.name}</div>
            <div>{exampleCreator.description}</div>
            <div>
              Instagram:{" "}
              <a href={`${exampleCreator.URL[0]}`}>{exampleCreator.URL[0]}</a>
            </div>
            <div>
              Youtube:{" "}
              <a href={`${exampleCreator.URL[1]}`}>{exampleCreator.URL[1]}</a>
            </div>
            <div>
              Twitter:{" "}
              <a href={`${exampleCreator.URL[2]}`}>{exampleCreator.URL[2]}</a>
            </div>
          </div>
        </div>
        <div className="flex place-content-around">
          <button onClick={() => console.log("Clicked")}>Edit</button>
          <button onClick={() => console.log("Clicked")}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;
