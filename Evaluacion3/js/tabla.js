// Cuando la página esté lista...
$(document).ready(function () {

  // Pedimos los usuarios a la API pública
  $.getJSON("https://jsonplaceholder.typicode.com/users", function (usuarios) {

    // Referencia al <tbody> de la tabla
    const cuerpoTabla = $("#tablaUsuarios tbody");

    // Recorremos cada usuario (arreglo de objetos) y armamos una fila
    usuarios.forEach(function (usuario) {
      const fila = `
        <tr>
          <td>${usuario.id}</td>
          <td>${usuario.name}</td>
          <td>${usuario.username}</td>
          <td>${usuario.email}</td>
          <td>${usuario.phone}</td>
          <td>${usuario.website}</td>
        </tr>
      `;
      cuerpoTabla.append(fila);
    });

    // Recién ahora, con las filas ya puestas, activamos DataTables
    $("#tablaUsuarios").DataTable({
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.13.8/i18n/es-ES.json"
      }
    });
  });

});
