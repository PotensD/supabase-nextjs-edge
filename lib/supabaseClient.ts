import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	// rome-ignore lint/style/noNonNullAssertion: <explanation>
	process.env.SUPABASE_URL!,
	// rome-ignore lint/style/noNonNullAssertion: <explanation>
	process.env.SUPABASE_ANON_KEY!,
);
