
const articuloInput = document.getElementById('idArticulo');
const botonAnadir = document.getElementById('idAnadir');

const listaCompras = document.getElementById('lista');
const listaArticulos = document.getElementById('idListaArticulos');


botonAnadir.addEventListener('click', () => {
    // obtiene el valor del input
    const articuloSeleccionado = articuloInput.value;

   //verificaciones
    if (articuloSeleccionado.trim() !== '') {

        // meter en lista
        const nuevoArticulo = document.createElement('li');
        nuevoArticulo.textContent = articuloSeleccionado;

        listaCompras.appendChild(nuevoArticulo);

        //nuevo event para borrar
          nuevoArticulo.addEventListener('click', () => {
            listaCompras.removeChild(nuevoArticulo);
        });

        // limpiar campo input
        articuloInput.value = '';
    } else {
        alert('error!, por favor selecciona un articulo para añadir.');
    }
});
// llamar al json
function cargarArticulos() {
    
    return fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('error al cargar productos.json');
            }
            return response.json();
        })
        .then(data => {

            data.articulos.forEach(articulo => {
                const opcion = document.createElement('option');
                opcion.value = articulo;

                opcion.textContent = articulo;
                articuloInput.appendChild(opcion);
            });
        })
        .catch(error => {
            console.error('error al cargar los articulos:', error);
        });
}

cargarArticulos();





















