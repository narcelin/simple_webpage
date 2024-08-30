import { useState } from "react";
import { CreatorModel } from "../types/creator";
import { supabase } from "../config/client";

function AddCreator() {
  const [creator, setCreator] = useState<CreatorModel | null>({
    name: "",
    description: "",
    img_url: "",
    youtubeAt: "",
    instagramAt: "",
    twitterAt: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(creator);

    const { error } = await supabase.from("Creators").insert(creator);

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
            // value={creator?.name}
            placeholder={creator?.name}
            onChange={(e) =>
              setCreator((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            placeholder={creator?.description}
            onChange={(e) =>
              setCreator((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="youtubeAt">YoutubeAt: </label>
          <input
            type="text"
            id="youtubeAt"
            placeholder={creator?.youtubeAt}
            onChange={(e) =>
              setCreator((prev) => ({ ...prev, youtubeAt: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="instagramAt">InstagramAt: </label>
          <input
            type="text"
            id="instagramAt"
            placeholder={creator?.instagramAt}
            onChange={(e) =>
              setCreator((prev) => ({ ...prev, instagramAt: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="twitterAt">TwitterAt: </label>
          <input
            type="text"
            id="twitterAt"
            placeholder={creator?.twitterAt}
            onChange={(e) =>
              setCreator((prev) => ({ ...prev, twitterAt: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="img_url">Img URL: </label>
          <input
            type="text"
            id="img_url"
            // value={creator?.img_url}
            placeholder={creator?.img_url}
            onChange={(e) =>
              setCreator((prev) => ({ ...prev, img_url: e.target.value }))
            }
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddCreator;
