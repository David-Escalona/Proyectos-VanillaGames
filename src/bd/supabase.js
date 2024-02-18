import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'xxxxxx'
const supabaseKey = 'xxxxxx'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
