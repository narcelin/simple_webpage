import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid place-items-center">
      <h1 className="border border-red-500 text-center">Welcome</h1>
      <Link className="border border-green-500 mx-auto" to={`../ShowCreators`}>
        View Creator
      </Link>
      {/* <Link>View Creator</Link>
        <Link>Edit Creator</Link>
        <Link>Add Creator</Link> */}
    </div>
  );
}

export default Welcome;
