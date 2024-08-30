import { Link } from "react-router-dom";

function Welcome() {
  const exampleCreator = {
    name: "John Doe",
    Description: "An example creator",
    URL: ["youtube", "instagram", "twitter"],
    img: "jDoe.png",
  };

  return (
    <div>
      <h1>Welcome</h1>
      <Link to={`../ViewCreator`} state={exampleCreator}>
        View Creator
      </Link>
      {/* <Link>View Creator</Link>
      <Link>Edit Creator</Link>
      <Link>Add Creator</Link> */}
    </div>
  );
}

export default Welcome;
