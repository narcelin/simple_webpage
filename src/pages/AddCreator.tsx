import { Link } from "react-router-dom";

function AddCreator() {
  const objectOne = { name: "John", apples: "Eww" };

  return (
    <div>
      <div>AddCreator</div>
      <Link to={`../viewall`} state={objectOne}>
        ViewAll
      </Link>
    </div>
  );
}

export default AddCreator;
