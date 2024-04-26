
import { createClient } from '@supabase/supabase-js'

const supabaseURL = "https://owbmgfexablklljwydlm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Ym1nZmV4YWJsa2xsand5ZGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MTQyOTQsImV4cCI6MjAyOTQ5MDI5NH0.iXttQ_vbqXIQd6SI7gaK7rty7kDDGM1Kvtxa5Ugq4QQ";


// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseURL, supabaseAnonKey);
