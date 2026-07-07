$(document).ready(function () {

  // ---------- FUNCIONES DE VALIDACIÓN (una por campo) ----------

  function validarNombre() {
    const valor = $("#nombre").val().trim();
    const esValido = valor.length > 0;
    $("#nombre").toggleClass("is-invalid", !esValido);
    return esValido;
  }

  function validarUsuario() {
    const valor = $("#usuario").val().trim();
    const esValido = valor.length > 0;
    $("#usuario").toggleClass("is-invalid", !esValido);
    return esValido;
  }

  function validarFecha() {
    const valor = $("#fechaIngreso").val(); // formato yyyy-mm-dd que entrega el input date
    // Expresión regular que confirma que sea una fecha real aaaa-mm-dd
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    const esValido = valor.length > 0 && regexFecha.test(valor);
    $("#fechaIngreso").toggleClass("is-invalid", !esValido);
    return esValido;
  }

  function validarEmail() {
    const valor = $("#email").val().trim();
    // Regex simple para formato usuario@servidor.dom
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const esValido = regexEmail.test(valor);
    $("#email").toggleClass("is-invalid", !esValido);
    return esValido;
  }

  function validarSitioWeb() {
    const valor = $("#sitioWeb").val().trim();
    // Regex simple para validar que empiece con http:// o https://
    const regexUrl = /^(https?:\/\/)[^\s]+\.[^\s]+$/;
    const esValido = regexUrl.test(valor);
    $("#sitioWeb").toggleClass("is-invalid", !esValido);
    return esValido;
  }

  // Arreglo con todas las funciones de validación, para recorrerlas juntas
  const validadores = [validarNombre, validarUsuario, validarFecha, validarEmail, validarSitioWeb];

  // Recorre el arreglo de validadores y devuelve true solo si TODOS pasan
  function validarFormulario() {
    let todoValido = true;
    validadores.forEach(function (validar) {
      if (!validar()) {
        todoValido = false;
      }
    });
    return todoValido;
  }

  // ---------- LIMPIAR FORMULARIO ----------
  function limpiarFormulario() {
    $("#formUsuario")[0].reset();
    $("#formUsuario input").removeClass("is-invalid");
  }

  // ---------- BOTÓN CANCELAR ----------
  $("#btnCancelar").on("click", function () {
    limpiarFormulario();
  });

  // ---------- BOTÓN ENVIAR ----------
  $("#btnEnviar").on("click", function () {
    if (validarFormulario()) {

      // Objeto que junta los datos ingresados (simula el "envío")
      const nuevoUsuario = {
        nombre: $("#nombre").val().trim(),
        usuario: $("#usuario").val().trim(),
        fechaIngreso: $("#fechaIngreso").val(),
        email: $("#email").val().trim(),
        sitioWeb: $("#sitioWeb").val().trim()
      };

      console.log("Usuario simulado a enviar:", nuevoUsuario);
      alert("¡Usuario registrado correctamente!");

      limpiarFormulario();
      window.location.href = "index.html"; // volvemos a la página principal
    }
  });

});
