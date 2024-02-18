
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://llhbmtojtjtbiptzizts.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsaGJtdG9qdGp0YmlwdHppenRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MjYxMDYsImV4cCI6MjAyMjQwMjEwNn0.DEV4kjtJ1SFMgnR1ewYJITILzlk65q29oVdAu9lRBrw'
export const supabase = createClient(supabaseUrl, supabaseKey)
