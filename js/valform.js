function validarForm(){
    
    var verificar = true;
    
    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/; 
    
    
         var formulario = document.getElementById("contacto-frm");
         var nombre = document.getElementById("nombre");
         var apellido = document.getElementById("apellido");
         var correo = document.getElementById("email");
         var asunto = document.getElementById("asunto");
         var comentarios = document.getElementById("mensaje");
    //Campo nombre
         if(!nombre.value)
         {
          alert("El campo nombre es requerido");
          nombre.focus();
          verificar=false;
          console.log(verificar);
         }
         else if (!expRegNombre.exec(nombre.value))
         {
            alert("El campo nombre admite letras y espacios.")
            nombre.focus();
            verificar=false;
            console.log(verificar);
    
         }
    //CAmpo apellido
    
        else if(!apellido.value)
         {
          alert("El campo apellidos es requerido");
          apellido.focus();
          verificar=false;
          console.log(verificar);
         }
         else if(!expRegApellidos.exec(apellido.value))
         {
           alert("El campo apellidos admite letras y espacios.")
           apellido.focus();
           verificar=false;
           console.log(verificar);
         }
    
    //campo email
        else if(!email.value)
         {
          alert("El campo correo es requerido");
          correo.focus();
          verificar=false;
          console.log(verificar);
         }
         else if(!expRegCorreo.exec(email.value))
         {
           alert("El campo e-mail admite letras y espacios.")
           correo.focus();
           verificar=false;
           console.log(verificar);
         }
    // campo asunto
        else if(!asunto.value)
         {
          alert("El campo asunto es requerido");
          asunto.focus();
          verificar=false;
          console.log(verificar);
         }
    //campo comentarios
        else if(!mensaje.value)
         {
          alert("El campo comentarios es requerido");
          mensaje.focus();
          verificar=false;
          console.log(verificar);
         }
    
        if(verificar)
        {
          alert("Se ha enviado el formulario");
        // document.contacto_frm.submit();
        }
        else { alert("No se ha enviado formulario");}
    
    
    
     //alert("Enviando");
    
     //document.contacto_frm.submit();
    
      }
      // asociacion del boton enviar con el formulario en html//
      window.onload = function()
      { 
        var botonEnviar; 
        botonEnviar = document.contacto_frm.enviar_btn;
        botonEnviar.onclick = validarForm;
      }