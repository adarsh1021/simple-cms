import { supabase } from "../utils/supabaseClient";

const create = async (project) => {
  return await supabase
    .from("project")
    .insert([project], { returning: "minimal" });
};

const list = async () => {
  return await supabase.from("project").select();
};

export default {
  create,
  list,
};
