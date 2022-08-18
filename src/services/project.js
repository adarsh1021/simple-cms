import { supabase } from "../utils/supabaseClient";

const create = async (project) => {
  return await supabase
    .from("project")
    .insert([project], { returning: "minimal" });
};

const list = async () => {
  return await supabase.from("project").select();
};

const get = async (id) => {
  const { data, err } = await supabase.from("project").select().eq("id", id);
  return { data: data[0], err };
};

export default {
  create,
  list,
  get,
};
