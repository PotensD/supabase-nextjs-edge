import { supabase } from "~/lib/supabaseClient";

export default async function Home() {
  const { data } = await supabase.from('countries').select('id, name, uuid')
    .is('uuid', null)

  return <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
}

export const runtime = "edge";