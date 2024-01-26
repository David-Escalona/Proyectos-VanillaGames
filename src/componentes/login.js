import { perfiles } from "../bd/datosPrueba"

export default {
  template: // html
  `...`,

  script: () => {
    console.log('vista login cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formulario')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
        console.log('No valida')
      } else {
        enviarDatos(formulario)
      }
      
    })

    // Función para enviar datos a la bd
    function enviarDatos (formulario) {
        const email = formulario.email.value
        const pass = formulario.password.value
  
        // buscamos el indice del email en el array perfiles
        const indexUser = perfiles.findIndex((user) => user.email === email) // 1
        // Si encuentra un usuario
        if (indexUser > 0) {
          // Si la contraseña es correcta
          if (perfiles[indexUser].contraseña === pass) {
            console.log('¡login correcto!')
            const usuario = {
              nombre: perfiles[indexUser].nombre,
              apellidos: perfiles[indexUser].apellidos,
              email: perfiles[indexUser].email,
              rol: perfiles[indexUser].rol,
              avatar: perfiles[indexUser].avatar,
              user_id: perfiles[indexUser].user_id
            }
            // Guardamos datos de usaurio en localstorage
            ls.setUsuario(usuario)
            // Cargamos página home
            window.location = '#/proyectos'
            // Actualizamos el header para que se muestren los menús que corresponden al rol
            header.script()
          } else {
            // console.log('La contraseña no corresponde')
            alert('El usuario no existe o la contraseña no es correcta')
          }
        } else {
          // console.log('El usuario no existe')
          alert('El usuario no existe o la contraseña no es correcta')
        }
      }
    }
}