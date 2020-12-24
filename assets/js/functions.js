// JavaScript Document
var listHoraNo =[];
var listaServicios =[];
var ban=true;
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
	x.style.display = "block";
		  /*if (x.style.display === "none") {
			x.style.display = "block";
		  } else {
			x.style.display = "none";
		  }*/
	
	var fecha = $("#fecha").val();
	var split= fecha.split('-');
	
	
	
	var newfecha = split[2] +'/' + split[1]+'/' +split[0];
		
		$.ajax({
            type:'post', //aqui puede ser igual get
            url: 'php/getCitasByFechaOnlyHora.php',//aqui va tu direccion donde esta tu funcion php
            data: {fecha:newfecha},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
               		var datos= response;
				 	var select = document.getElementById("selHora");
						//$("selHora:option").css{"background", "#33ff52"}
				        $('option').css('background', '#33ff52');
						select.className ='verde-option';
				listHoraNo = [];
					 for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
							
						
						 
					listHoraNo.push(product);	 
						 switch (product){
							 case "9":
								 select[1].style.backgroundColor='#ff3933';
								 break;
							 case "10":
								 select[2].style.backgroundColor='#ff3933';
								 break;
							 case "11":
								 select[3].style.backgroundColor='#ff3933';
								 break;
							 case "12":
								 select[4].style.backgroundColor='#ff3933';
								 break;
							 case "13":
								 select[5].style.backgroundColor='#ff3933';
								 break;
							 case "14":
								 select[6].style.backgroundColor='#ff3933';
								 break;
							 case "15":
								 select[7].style.backgroundColor='#ff3933';
								 break;
							 case "16":
								 select[8].style.backgroundColor='#ff3933';
								 break;
							 case "17":
								 select[9].style.backgroundColor='#ff3933';
								 break;
							 case "18":
								 select[10].style.backgroundColor='#ff3933';
								 break;
							 case "19":
								 select[11].style.backgroundColor='#ff3933';
								 break;
							  case "20":
								 select[12].style.backgroundColor='#ff3933';
								 break;
								 
						}
						 
						 
						 
						 
					 }
				
                }
           });
	
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

function selectTime(){
	var select = document.getElementById("selHora");
	var hora = select.options[select.selectedIndex].value;
	/*var found = listHoraNo.find(function (element) { 
        return element = hora; 
    }); */
	 if(listHoraNo.includes(hora)){
		 ban =false;
		 document.getElementById("divAlerta").style.display = "inline";
	 }else{
		ban =true;
		 document.getElementById("divAlerta").style.display = "none"; 
	 }
}

function agregarcita(){
	"use strict";
	
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var fecha = $("#fecha").val();
	//var hora = $("#hora").val();
	var telefono =$("#telefono").val();
	var email = $("#correo").val();
	var e = document.getElementById("selServicio");
	var valor = e.options[e.selectedIndex].value;
	
	var ee = document.getElementById("selHora");
	var hora = ee.options[ee.selectedIndex].value;
	
	
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
	if(hora === "0"){
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
	
	var split= fecha.split('-');
	
	var newfecha = split[2] +'/' + split[1]+'/' +split[0];
	
	if(ban === true){
	
	$.ajax({
            type:'POST', //aqui puede ser igual get
            url: 'php/addCita.php',//aqui va tu direccion donde esta tu funcion php
            data: {nombre:nombre.toUpperCase(),apellido:apellido.toUpperCase(),fecha:newfecha,hora:hora,telefono:telefono,email:email,servicio:valor},//aqui tus datos
		 	//dataType: 'JSON',
			dataType: 'html',
            success:function(response){
                //lo que devuelve tu archivo mifuncion.php
				clearFill();
				var datos = response;
                var target = $("#tableCitas");
                //target.empty();
              
                for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
							/*if(product['titulo'] !== ""){
                    target.append("<tr><td>"+ product['id'] +"</td><td>"+ product['titulo'] +"</td><td>"+ product['tipo'] +"</td><td><img src=\"images/ic_edit.png\" style=\"height: 15px;width: 15px\"></td><td><img src=\"images/if_Delete.png\" style=\"height: 15px;width: 15px\"></td></tr>");
					
							}*/
					
					
					//$('#selServicio option[value="0"]').attr("selected",true);
					$('#selServicio').val("0");
					//$('#selHora option[value="0"]').attr("selected",true);
					$("#selHora").val("0");
					var x = document.getElementById("divCalendario");

					x.style.display = "none";
					var xx = document.getElementById("divTable");
						xx.style.display = "none";
						  
					document.getElementById("fecha").valueAsDate = new Date();
						$("#btnCerrarModalCita").click();
					alert("Cita agendada");
					 }
                }
           });
	}else{
		 ban =false;
		 document.getElementById("divAlerta").style.display = "inline";
	}
}

function clearFill(){
	$("#nombre").val('');
	$("#apellido").val('');
	$("#telefono").val('');
	$("#correo").val('');
}

function validSesionInicio(){
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();

	var fecha= day +"/"+month +"/"+year;

	var ca = document.cookie.split(';');
	var cal = localStorage.name;
	
	if(cal === undefined){
		//if()
		location.href='index.html';
		
	/*$.ajax({
            type:'POST', //aqui puede ser igual get
            url: 'php/validSesion.php',//aqui va tu direccion donde esta tu funcion php
            data: {fecha:fecha},//aqui tus datos
		 	//dataType: 'JSON',
			dataType: 'html',
            success:function(response){
                //lo que devuelve tu archivo mifuncion.php
				var datos = response;
				if(datos !== ""){
					//window.location.href = "../index.html";
				}
			}
           });*/

	}

}

function createCookie(){
	"use strict";
	//document.cookie = "user=John"; 
	 localStorage.setItem("name", "recepcionista");
	//alert(document.cookie);
	location.href='../inicio.html';
}

function destroyCookie(){
	delete localStorage.name;
	location.href='index.html';
}

function getCitasByFecha(){
	
	var fecha = document.getElementById("txbdate").value;
	
	var split= fecha.split('-');
	
	
	var newfecha = split[2] +'/' + split[1]+'/' +split[0];
	 var target = $("#tbodyCitas");
	
	$.ajax({
            type:'post', //aqui puede ser igual get
            url: 'php/getCitasByFecha.php',//aqui va tu direccion donde esta tu funcion php
            data: {fecha:newfecha},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
               		var datos =response;
				 	
                	target.empty();
					/*target.append("<thead>"+
				    "<tr>"+
					"<th>Nombre</th>"+
					"<th>Apellido</th>"+
					"<th>Fecha</th>"+
					"<th>Hora</th>"+
					"<th>modificaciones</th>"+
						"</tr>"+
					"</thead>");*/
              		//target.append("<tbody>");
                for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
					
                    /*target.append("<tr><td>"+ product['nombre'] +"</td><td>"+ product['apellido'] +"</td><td>"+ product['servicio'] +"</td><td>"+product['fecha']+"</td><td>"+product['hora']+"</td><td>"+ product['status'] +"</td></tr>");*/
					target.append("<tr><td>"+ product['hora'] +":00</td><td>"+ product['nombre'] +"</td><td>"+product['apellido']+"</td><td>"+ product['telefono'] +"</td>"+product['email']+"<td></td><td><input type='button' class='appointment-btn scrollto' value='modificar' data-toggle='modal' data-target='#exampleModal' onclick='cargarInfo("+product['id']+")'> </td></tr>")
					/*target.append("<tr><td>" + product['nombre'] +"</td><td>" + product['apellido'] +"</td><td>" +product['servicio'] + "</td><td>" + product['fecha'] +"</td><td>" + product['hora'] + "</td><td>" + product['status'] +"</td></tr>");*/
					}
					//target.append("</tbody>");
                }
		
				
           });
	
	return target;
			/*var table = $('#tableCitas').DataTable();
		
				setInterval( function () {
					table.ajax.reload();
				}, 30000);*/
	//$('#tbodyCitas').DataTable();
	
}

function cargarInfo(id){
	$.ajax({
            type:'post', //aqui puede ser igual get
            url: 'php/getCitasById.php',//aqui va tu direccion donde esta tu funcion php
            data: {citaid:id},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
               		var datos =response;
				 	
                	
               // for (var i = 0; i < datos.length; i++) {
                   
                    //var product = datos[i];
					
					document.getElementById('lblNombre').innerText = datos['nombres'] ;
					document.getElementById('lblApellido').innerText = datos['apellidos'] ;
					document.getElementById('lblServicio').innerText = datos['servicio'] ;
					document.getElementById('lblFecha').innerText = datos['fecha'] ;
					document.getElementById('lblHora').innerText = datos['hora'] ;
					//document.getElementById('lblNombre').innerText = product['nombres'] ;
					document.getElementById('lblid').innerText=datos['id'];
				
				//	}
                }
		
				
           });
}

function getServicios(){
	var servicios = document.getElementById("selServicio");
	//var valor = e.options[e.selectedIndex].value;
	$.ajax({
            type:'post', //aqui puede ser igual get
            url: 'php/getServicios.php',//aqui va tu direccion donde esta tu funcion php
            //data: {citaid:id},//aqui tus datos
		 	dataType: 'JSON',
            success:function(response){
               		var datos =response;
				 	
                	//servicios.append('<option value=\'0\'> -- SELECCIONE UNA OPCIÓN -- </option>');
				listaServicios.push("<option value=\'0\'> -- SELECCIONE UNA OPCIÓN -- </option>");
               for (var i = 0; i < datos.length; i++) {
                   
                    var product = datos[i];
					
						listaServicios.push("<option value='"+product['id']+"'>"+product['descripcion']+"</option>");
				
					}
				 servicios.innerHTML = listaServicios;
                }
		
				
           });	
}

function uloadFile(){
	var rchivs = document.getElementById('files').file[0];
}
