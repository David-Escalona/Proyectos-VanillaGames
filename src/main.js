import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Import our custom CSS
import './scss/styles.scss'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/registroVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
  vista.script()
}
cargarVista()

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template

observadorRutas: () => {
  document.body.addEventListener('click', event => {
    // Evitamos que se cargue la página
    const link = event.target
    if (link.classList.contains('router-link')) {
      console.log('router-link')
      event.preventDefault()
      // Obtenemos la ruta del enlace sin el .html
      const href = link.getAttribute('href')
      // Añadimos la nueva ruta al historial

      // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
      window.history.pushState({ path: href }, '', href)
      // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
      enrutador.router()
    }
  })

  // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
  window.addEventListener('popstate', (e) => {
    console.log('evento popstate - Te estás moviendo por el historial')
    enrutador.router()
  })
}
