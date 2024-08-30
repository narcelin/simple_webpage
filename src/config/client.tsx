import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.SUPABASE_URL;
console.log(URL);
const KEY = process.env.SUPABASE_KEY;
console.log(KEY);

export const supabase = createClient(URL, KEY);
