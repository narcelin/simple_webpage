import { useLocation } from "react-router-dom";

function ShowCreators() {
  const location = useLocation();
  const object = location.state;
  console.log(object);

  return (
    <div>
      <h1>ShowCreators</h1>
      {/* <div>{object.name}</div> */}
    </div>
  );
}

export default ShowCreators;
