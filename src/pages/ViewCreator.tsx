import { useLocation } from "react-router-dom";
import { CreatorModel } from "../types/creator";

function ViewCreator() {
  const location = useLocation();
  const creator = location.state as CreatorModel;
  console.log("VIEW CREATOR COMPONENT: ", creator);

  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid place-items-center">
      <div className="w-full">
        <h2 className="flex place-content-around">CreatorsCard</h2>
        <div className="flex place-content-around border border-green-500">
          <div>IMG</div>
          <div className="flex flex-col border border-red-500 gap-3">
            <div>{creator.name}</div>
            <div>{creator.description}</div>
            <div>
              Youtube:
              <a href={`www.youtube.com/@${creator.youtubeAt}`}>
                {creator.youtubeAt}
              </a>
            </div>
            <div>
              Instagram:
              <a href={`www.twitter.com/@${creator.instagramAt}`}>
                {creator.instagramAt}
              </a>
            </div>
            <div>
              Twitter:
              <a href={`www.instagram.com/@${creator.twitterAt}`}>
                {creator.twitterAt}
              </a>
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
