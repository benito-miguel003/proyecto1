function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    if (nombre === '' || email === '') {
        alert('Todos los campos son obligatorios.');
        return false;
    }
    alert('Enviado exitosamente');
    document.getElementById("formulario").reset();
    return true;
}

