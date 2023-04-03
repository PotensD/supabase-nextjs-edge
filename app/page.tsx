import { supabase } from "~/lib/supabaseClient";

export default async function Home() {
  const { data } = await supabase.from('countries').select('uuid , name , max(id), id');

  return <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
}

export const runtime = "edge";