import { CreatorProps } from "../types/Creator";

function CreatorsCard({ creator }: CreatorProps) {
  console.log("CREATORS CARD COMPONENT: ", creator.name);

  return (
    <div>
      <h2>CreatorsCard</h2>
      <div>
        <div>IMG</div>
        <div>
          <div>{creator.name}</div>
          <div>{creator.description}</div>
          <div>{creator.URL[0]}</div>
          <div>{creator.URL[1]}</div>
          <div>{creator.URL[2]}</div>
        </div>
      </div>
      <div className="flex place-content-around">
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </div>
  );
}

export default CreatorsCard;
