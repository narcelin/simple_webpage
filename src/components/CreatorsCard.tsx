import { CreatorProps } from "../types/Creator";

function CreatorsCard({ creator }: CreatorProps) {
  // console.log("CREATORS CARD COMPONENT: ", creator.name);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 border border-gray-300 rounded-md p-2">
        <div className="flex place-content-between">
          <div>{creator.name}</div>
          <div>
            <ul className="flex flex-row gap-5">
              <li>Info</li>
              <li>Edit</li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>{creator.URL[0]}</li>
            <li>{creator.URL[1]}</li>
            <li>{creator.URL[2]}</li>
          </ul>
        </div>
        <div>{creator.description}</div>
      </div>
    </div>
  );
}

export default CreatorsCard;
