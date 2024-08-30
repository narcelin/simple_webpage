import { CreatorModel } from "../types/creator";

import { useEffect, useState } from "react";

import { supabase } from "../config/client";

import CreatorsCard from "../components/CreatorsCard";

function ShowCreators() {
  const [creators, setCreators] = useState<CreatorModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>();

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("Creators").select("*");
      // console.log(data);

      if (error) {
        setIsError(error.message);
        console.log("Error fetching data: ", error);
      } else {
        setCreators(data || []);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid grid-cols-2 place-items-center gap-5">
      {creators.map((creator, index) => (
        <CreatorsCard key={index} creator={creator} />
      ))}
    </div>
  );
}

export default ShowCreators;
