//Probamos la api de las tablas
//función para Leer perfiles
const leerPerfiles = async ()=>{
  try {
    let { data: perfiles, error } = await supabase
  .from('perfiles')
  .select('*')
  console.log('perfiles', perfiles);
  } catch (error) {
    console.log(error);
  }
}
// Ejecutamos la función
await leerPerfiles()

// Probamos a logearnos
const login = async ()=>{
  try {
    //USER LOGIN
    let { data, error } = await supabase.auth.signInWithPassword({
    email: 'escalonagarciadavid@fpllefia.com',
    password: '1234'
    })
    console.log('login', data);
  } catch (error) {
    console.log(error);
  }
}

await login()

const getUser = async ()=>{
  try {
    //GET USER
    const { data: { user } } = await supabase.auth.getUser()
    console.log('Consultamos datos de usuario con getUser(): ', user);
  } catch (error) {
    console.log(error);
  }
}

await getUser()

// Probamos a cerrar sesión
const logout = async ()=>{
  try {
    let { error } = await supabase.auth.signOut()
    console.log('Sesión cerrada con exito: ');
  } catch (error) {
    console.log(error);
  }
}
// Cerramos sesión 
await logout()
// Probamos a mostrar datos de usuario logueado. Debería darnos null 
await getUser()


//Probamos la api de las funciones
const proyectoDetalleTodos = async ()=>{
  try {
    let { data, error } = await supabase
    .rpc('proyecto_detalle_todos')
    console.log('Consulta a la función proyecto_detalle_todos: ', data);
  } catch (error) {
    console.log(error);
  }

}
await proyectoDetalleTodos()



console.log("PRUEBAS SUPABASE")

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://llhbmtojtjtbiptzizts.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsaGJtdG9qdGp0YmlwdHppenRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MjYxMDYsImV4cCI6MjAyMjQwMjEwNn0.DEV4kjtJ1SFMgnR1ewYJITILzlk65q29oVdAu9lRBrw'
const supabase = createClient(supabaseUrl, supabaseKey)

// Mostramos por consola la conexión establecida
console.log('conexión', supabase)


