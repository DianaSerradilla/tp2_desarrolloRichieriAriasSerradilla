function enviarFormulario() {
  // Obtener el formulario
  var formulario = document.getElementById("formulario_contacto");

  // Verificar si el formulario es válido
  if (formulario.checkValidity()) {
    // Obtener los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Aquí puedes hacer algo con los datos, como enviarlos a un servidor
    // En este ejemplo, solo los mostraremos en la consola
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);

    // Puedes agregar aquí la lógica para enviar los datos a un servidor
  } else {
    // Si el formulario no es válido, mostrar mensajes de validación
    formulario.reportValidity();
  }
}