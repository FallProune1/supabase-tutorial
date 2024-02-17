"use client";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!supabaseUrl) {
  throw new Error("SUPABASE_URL no está definido");
}

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseKey) {
  throw new Error("SUPABASE_ANON_KEY no está definido");
}

export const supabase = createBrowserClient(supabaseUrl, supabaseKey);
