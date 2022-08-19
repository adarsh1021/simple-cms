import { supabase } from "../utils/supabaseClient";

const create = async (item) => {
  return await supabase.from("item").insert([item]);
};

const list = async (collectionId) => {
  return await supabase.from("item").select().eq("collection_id", collectionId);
};

const get = async (id) => {
  const { data, err } = await supabase.from("item").select().eq("id", id);
  return { data: data[0], err };
};

export default {
  create,
  list,
  get,
};
