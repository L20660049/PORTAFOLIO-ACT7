// Seleccionar el área de texto y los elementos de resultado
const areaTexto = document.getElementById('texto');
const contadorPalabras = document.getElementById('contadorPalabras');
const contadorCaracteres = document.getElementById('contadorCaracteres');

// Función para contar las palabras y caracteres
function contarTexto() {
  const texto = areaTexto.value.trim(); // Obtener el texto y eliminar espacios extra

  // Contar palabras: Dividir el texto por espacios en blanco y filtrar vacíos
  const palabras = texto.length > 0 ? texto.split(/\s+/).filter(palabra => palabra.length > 0).length : 0;

  // Contar caracteres
  const caracteres = texto.length;

  // Actualizar el contenido en los elementos
  contadorPalabras.textContent = `Palabras: ${palabras}`;
  contadorCaracteres.textContent = `Caracteres: ${caracteres}`;
}

// Escuchar cambios en el área de texto y actualizar en tiempo real
areaTexto.addEventListener('input', contarTexto);
