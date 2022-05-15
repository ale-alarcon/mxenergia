function formulario_envia() {

    if (document.formulario.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.formulario.nombre.focus()
        return 0;
    }

    if (document.formulario.apellidos.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.formulario.apellidos.focus()
        return 0;
    }

    if (document.formulario.email.value.length == 0) {
        alert("Tiene que escribir su email")
        document.formulario.email.focus()
        return 0;
    }

    alert("Muchas gracias por su contacto");
    document.formulario.submit();


}