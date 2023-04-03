import { createClient } from "@supabase/supabase-js";
import { Database } from "~/supabase";

export const supabase = createClient<Database>(
	// rome-ignore lint/style/noNonNullAssertion: <explanation>
	process.env.SUPABASE_URL!,
	// rome-ignore lint/style/noNonNullAssertion: <explanation>
	process.env.SUPABASE_ANON_KEY!,
);
