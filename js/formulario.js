const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	cedula:  /^[0-9]{1,10}$/,
	fecha:  /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
	hora: 	/^(?:0?[1-9]|1[0-2]):[0-5][0-9]\s?(?:[aApP](\.?)[mM]\1)?$/,
	password: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    serial: /^[0-9]{10}$/,
    serial2: /^[0-9]{10}$/,
	direccion: /^[a-zA-ZÀ-ÿ\s0-9\_\-]{4,100}$/,
	titulo:	/^[a-zA-ZÀ-ÿ\s0-9\_\-]{4,30}$/,
	lugar: /^[a-zA-ZÀ-ÿ\s0-9\_\-]{4,100}$/
}
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const campos = {
	usuario: false,
    nombre: false,
	apellido: false,
	nombre2: false,
	apellido2: false,
	cedula: false,
	cedula2: false,
	fecha2: false,
	cedula_na: false,
	password: false,
	correo: false,
    telefono: false,
    serial: false,
    serial2: false,
	direccion: false,
	titulo: false,
	lugar: false,
	fecha: false,
	hora: false,
	radioOptions: false,
	options: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido' );
        break;
        case "cedula":
			validarCampo(expresiones.cedula, e.target, 'cedula' );
		break;
		case "cedula2":
			validarCampo(expresiones.cedula, e.target, 'cedula2');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "serial": 
            validarCampo(expresiones.serial, e.target, 'serial' );
        break;
        case "serial2":
            validarCampo(expresiones.serial2, e.target, 'serial2');
        break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "fecha":
			validarFecha();
		break;
		case "fecha2":
			validarFecha2();
		break;
		case "titulo":
			validarCampo(expresiones.titulo, e.target, 'titulo' );
		break;
		case "lugar":
			validarCampo(expresiones.lugar, e.target, 'lugar' );
		break;
		case "fecha":
			validarFecha();
		break;
		case "hora":
			hora();
		break;
		case "radioOptions":
			radio();
		break;
		case "options":
			radio2();
		break;
		case "nombre2":
			validarCampo(expresiones.nombre, e.target, 'nombre2');
		break;
		case "apellido2":
			validarCampo(expresiones.apellido, e.target, 'apellido2');
		break;
	}
}
	
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

const validarCampo = (expresion, input, campo) => {
	
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		//document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		//document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo_password2`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_password2`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_password2 .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo_password2`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_password2`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_password2 .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos['password'] = true;
	}
}
	function validarCedula(){
	  	const identidad = document.getElementById('cedula_na');
	 	 if (identidad.value == 0){
		    document.getElementById('opcion').classList.add('formulario_input-error-activo');
			campos['cedula_na'] = false;
		} else{
			document.getElementById('opcion').classList.remove('formulario_input-error-activo');
			campos['cedula_na'] = true;
		}
	}
	function validarCedula2(){
		const identidad = document.getElementById('cedula_na');
		if (identidad.value == 1){
		  document.getElementById('opcion').classList.add('formulario_input-error-activo');
		  campos['cedula_na'] = false;
	  } else{
		  document.getElementById('opcion').classList.remove('formulario_input-error-activo');
		  campos['cedula_na'] = true;
	  }
  }

    function validarFecha(){
		const fech=document.getElementById('fecha');
		if(fecha!== 1){
			campos['fecha']= true;
		}
		else{
			campos['fecha']= false;
		}
	}
	function validarFecha2(){
		const fech=document.getElementById('fecha2');
		if(fecha!== 1){
			campos['fecha2']= true;
		}
		else{
			campos['fecha2']= false;
		}
	}
	function hora(){
		const time=document.getElementById('hora');
		if(time!== 1){
			campos['hora']= true;
		}
		else{
			campos['hora']= false;
		}
	}
	function radio(){
		var s="no";
		for(var i=0 ; i< document.getElementsByName('radioOptions').length;i++){
			if(document.getElementsByName('radioOptions')[i].checked){
				campos['radioOptions']= true;
				s="si";
			}
		}
		if(s=="no"){
			campos['radioOptions']= false;
		}
	}
	function radio2(){
		var s="no";
		for(var i=0 ; i< document.getElementsByName('options').length;i++){
			if(document.getElementsByName('options')[i].checked){
				campos['options']= true;
				s="si";
			}
		}
		if(s=="no"){
			campos['options']= false;
		}
	}
	function mostrarContrasena(){
		var tipo = document.getElementById("password");
		if(tipo.type == "password"){
			tipo.type = "text";
		}else{
			tipo.type = "password";
		}
	}



