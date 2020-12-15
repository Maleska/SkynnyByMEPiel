// JavaScript Document
function showsections (id){
	
	switch(id){
			
		case 1:
			if ($("#radiofrecuencia").is(":visible")) {
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="inline";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}else{
				document.getElementById("radiofrecuencia").style.display = "inline";
				document.getElementById("divBienvenida").style.display="none";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}
			break;
			 
		case 2:
			if ($("#Maderoterapia").is(":visible")) {
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="inline";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}else{
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="none";
				document.getElementById("Maderoterapia").style.display="inline";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}
			break;
		case 3:
			if ($("#Carboxiterapia").is(":visible")) {
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="inline";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}else{
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="none";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="inline";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}
			break;
		case 4:
			if ($("#Ultrasonido").is(":visible")) {
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="inline";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}else{
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="none";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="inline";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}
			break;
		case 5:
			if ($("#Enzimas").is(":visible")) {
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="inline";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}else{
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="none";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="inline";
				document.getElementById("Electrodos").style.display="none";
			}
			break;
		case 6:
			if ($("#Electrodos").is(":visible")) {
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="inline";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="none";
			}else{
				document.getElementById("radiofrecuencia").style.display = "none";
				document.getElementById("divBienvenida").style.display="none";
				document.getElementById("Maderoterapia").style.display="none";
				document.getElementById("Carboxiterapia").style.display="none";
				document.getElementById("Ultrasonido").style.display="none";
				document.getElementById("Enzimas").style.display="none";
				document.getElementById("Electrodos").style.display="inline";
			}
			break;
			
			 }
	
	
	
}

function getCitas(){
	"use strict";
	$.ajax({
            type:'get', //aqui puede ser igual get
            url: 'php/getCitas.php',//aqui va tu direccion donde esta tu funcion php
            //data: {pregunta:pregunta},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
                //lo que devuelve tu archivo mifuncion.php
				var datos = response;
                var target = $("#tableCitas");
                //target.empty();
              
                for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
							/*if(product['titulo'] !== ""){
                    target.append("<tr><td>"+ product['id'] +"</td><td>"+ product['titulo'] +"</td><td>"+ product['tipo'] +"</td><td><img src=\"images/ic_edit.png\" style=\"height: 15px;width: 15px\"></td><td><img src=\"images/if_Delete.png\" style=\"height: 15px;width: 15px\"></td></tr>");
							}*/
					 }
                }
           });
	
}

function changeCombo(){
	var e = document.getElementById("selServicio");
	var valor = e.options[e.selectedIndex].value;

	if(valor != "0"){
		
		var x = document.getElementById("divCalendario");
		  if (x.style.display === "none") {
			x.style.display = "block";
		  } else {
			x.style.display = "none";
		  }
	}
}

function selectDate(){
	var x = document.getElementById("divTable");
		  if (x.style.display === "none") {
			x.style.display = "block";
		  } else {
			x.style.display = "none";
		  }
}

function getHorasxDia(){
	"use strict";
	$.ajax({
            type:'get', //aqui puede ser igual get
            url: 'php/getCitas.php',//aqui va tu direccion donde esta tu funcion php
            //data: {pregunta:pregunta},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
                //lo que devuelve tu archivo mifuncion.php
				var datos = response;
                var target = $("#tableCitas");
                //target.empty();
              
                for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
							/*if(product['titulo'] !== ""){
                    target.append("<tr><td>"+ product['id'] +"</td><td>"+ product['titulo'] +"</td><td>"+ product['tipo'] +"</td><td><img src=\"images/ic_edit.png\" style=\"height: 15px;width: 15px\"></td><td><img src=\"images/if_Delete.png\" style=\"height: 15px;width: 15px\"></td></tr>");
							}*/
					 }
                }
           });
	
}

function selectTime(hora){
	$("#hora").val(hora);
}

function agregarcita(){
	"use strict";
	
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var fecha = $("#fecha").val();
	var hora = $("#hora").val();
	var telefono =$("#telefono").val();
	var email = $("#correo").val();
	var e = document.getElementById("selServicio");
	var valor = e.options[e.selectedIndex].value;
	
	if(nombre === ""){
		alert("favor de agregar un nombre");
		return;
	}
	if(apellido === ""){
		alert("Favor de agregar un apellido");
		return;
	}
	if(fecha === ""){
		alert("Favor de agregar una fecha");
		return;
	}
	if(hora === ""){
		alert("Favor de agregar una hora");
		return;
	}
	if(telefono === ""){
		alert("Favor de agregar un teléfono");
		return;
	}
	if(email ===""){
		alert("Favor de agregar un email");
		return;
	}
	
	$.ajax({
            type:'POST', //aqui puede ser igual get
            url: 'php/addCita.php',//aqui va tu direccion donde esta tu funcion php
            data: {nombre:nombre,apellido:apellido,fecha:fecha,hora:hora,telefono:telefono,email:email,servicio:valor},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
                //lo que devuelve tu archivo mifuncion.php
				var datos = response;
                var target = $("#tableCitas");
                //target.empty();
              
                for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
							/*if(product['titulo'] !== ""){
                    target.append("<tr><td>"+ product['id'] +"</td><td>"+ product['titulo'] +"</td><td>"+ product['tipo'] +"</td><td><img src=\"images/ic_edit.png\" style=\"height: 15px;width: 15px\"></td><td><img src=\"images/if_Delete.png\" style=\"height: 15px;width: 15px\"></td></tr>");
							}*/
					 }
                }
           });
	
}


