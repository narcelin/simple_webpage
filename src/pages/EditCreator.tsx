import { useState } from "react";
import { supabase } from "../config/client";
import { CreatorModel } from "../types/creator";

import { useLocation } from "react-router-dom";

function EditCreator() {
  // Object being transfered from previous page
  const location = useLocation();
  const creator = location.state as CreatorModel;
  // console.log("VIEW CREATOR COMPONENT: ", creator);

  const [creatorToEdit, setCreatorToEdit] = useState<CreatorModel | null>(
    creator
  );
  // const [name, setName] = useState<string>(creator.name);

  const creatorId = creator.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(creatorToEdit);

    const { error } = await supabase
      .from("Creators")
      .update({
        name: creatorToEdit?.name,
        description: creatorToEdit?.description,
        youtubeAt: creatorToEdit?.youtubeAt,
        instagramAt: creatorToEdit?.instagramAt,
        twitterAt: creatorToEdit?.twitterAt,
        img_url: creatorToEdit?.img_url,
      })
      .eq("id", creatorId);

    if (error) console.error("Error updating profile:", error);
    else alert("Profile updated successfully!");
  };

  return (
    <div className="w-screen px-16 py-10 border border-red-500 grid place-items-center">
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col py-5 gap-5">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            // value={creatorToEdit?.name}
            placeholder={creatorToEdit?.name}
            onChange={(e) =>
              setCreatorToEdit({ ...creator, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            placeholder={creatorToEdit?.description}
            onChange={(e) =>
              setCreatorToEdit({ ...creator, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="youtubeAt">YoutubeAt: </label>
          <input
            type="text"
            id="youtubeAt"
            placeholder={creatorToEdit?.youtubeAt}
            onChange={(e) =>
              setCreatorToEdit({ ...creator, youtubeAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="instagramAt">InstagramAt: </label>
          <input
            type="text"
            id="instagramAt"
            placeholder={creatorToEdit?.instagramAt}
            onChange={(e) =>
              setCreatorToEdit({ ...creator, instagramAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="twitterAt">TwitterAt: </label>
          <input
            type="text"
            id="twitterAt"
            placeholder={creatorToEdit?.twitterAt}
            onChange={(e) =>
              setCreatorToEdit({ ...creator, twitterAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="img_url">Img URL: </label>
          <input
            type="text"
            id="img_url"
            // value={creatorToEdit?.img_url}
            placeholder={creatorToEdit?.img_url}
            onChange={(e) =>
              setCreatorToEdit({ ...creator, img_url: e.target.value })
            }
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditCreator;
