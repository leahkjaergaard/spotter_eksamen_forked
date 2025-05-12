import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("spotter_produkter").select("*");

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }

  return data;
}
