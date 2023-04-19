function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
  
    if (nombre == "") {
      // Mostrar una alerta indicando qué el campo nombre esta vacío
      alert("Por favor, Ingrese su Nombre.");
      return false;
    }

    if (correo == "") {
        // Mostrar una alerta indicando qué el campo nombre esta vacío
        alert("Por favor, Ingrese su Correo.");
        return false;
    }

    if (mensaje == "") {
        // Mostrar una alerta indicando qué el campo nombre esta vacío
        alert("Por favor, Ingrese su Mensaje.");
        return false;
      }
  
    // Si todos los campos están completos, enviar el formulario
    return true;
}
$(document).ready(function () {
  $('#tabla').DataTable();
  console.log("la funcion se ejecuto")
});