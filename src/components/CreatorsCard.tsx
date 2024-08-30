import { CreatorProps } from "../types/creator";
import { Link } from "react-router-dom";

function CreatorsCard({ creator }: CreatorProps) {
  console.log("CREATORS CARD COMPONENT: ", creator.img_url);

  return (
    <div className="w-full">
      <div
        className={`flex flex-col gap-5 border border-gray-300 rounded-md p-2 bg-cover bg-center bg-[url('${creator.img_url}')]`}
      >
        <div className="flex place-content-between">
          <div>{creator.name}</div>
          <div>
            <ul className="flex flex-row gap-5">
              <li>
                <Link to={"../ViewCreator"} state={creator}>
                  Info
                </Link>
              </li>
              <li>
                <Link to={"../EditCreator"} state={creator}>
                  Edit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>{creator.youtubeAt}</li>
            <li>{creator.instagramAt}</li>
            <li>{creator.twitterAt}</li>
          </ul>
        </div>
        <div>{creator.description}</div>
      </div>
    </div>
  );
}

export default CreatorsCard;
