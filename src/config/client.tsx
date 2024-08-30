import { createClient } from "@supabase/supabase-js";

const URL: string = import.meta.env.SUPABASE_URL;
console.log(URL);
const KEY: string = import.meta.env.SUPABASE_KEY;
console.log(KEY);

export const supabase = createClient(URL, KEY);
