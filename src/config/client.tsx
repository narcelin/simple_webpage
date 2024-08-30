import { createClient } from "@supabase/supabase-js";

const URL: string = import.meta.env.VITE_SUPABASE_URL;
// console.log("SUBABASE URL", URL);
const KEY: string = import.meta.env.VITE_SUPABASE_KEY;
// console.log("SUBABSE KEY: ", KEY);

export const supabase = createClient(URL, KEY);
