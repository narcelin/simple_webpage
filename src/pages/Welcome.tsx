import { Link } from "react-router-dom";
import { supabase } from "../config/client";

function Welcome() {
  const exampleCreator = {
    name: "John Doe",
    Description: "An example creator",
    URL: ["youtube", "instagram", "twitter"],
    img: "jDoe.png",
  };

  // async function featchData() {
  //   const { data, error } = await supabase.from("ceators").select("*");
  // }

  const url = import.meta.env.VITE_SUPABASE_URL;

  console.log("SUPABASE URL: ", url);

  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid place-items-center">
      <h1 className="border border-red-500 text-center">Welcome</h1>
      <Link
        className="border border-green-500 mx-auto"
        to={`../ViewCreator`}
        state={exampleCreator}
      >
        View Creator
      </Link>
      {/* <Link>View Creator</Link>
        <Link>Edit Creator</Link>
        <Link>Add Creator</Link> */}
    </div>
  );
}

export default Welcome;
