import { supabase } from "../utils/supabaseClient";

const create = async (collection) => {
  return await supabase.from("collection").insert([collection]);
};

const list = async (projectId) => {
  return await supabase.from("collection").select().eq("project_id", projectId);
};

const get = async (id) => {
  const { data, err } = await supabase.from("collection").select().eq("id", id);
  return { data: data[0], err };
};

export default {
  create,
  list,
  get,
};
