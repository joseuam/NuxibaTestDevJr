
var users;
getUsers();

$("button[name=posts]").on('click', function(event) {
	document.getElementById("todos").setAttribute("hidden","");
	document.getElementById("posts").innerHTML = "";
	if(event.target.id!="")
		getPosts(event.target.id);
});


$("button[name=todos]").on('click', function(event) {
	document.getElementById("posts").innerHTML = "";
	document.getElementById("todos").removeAttribute("hidden");
	if(event.target.id!="")
		getTodos(event.target.id);
});

$("#AddTarea").on("submit",function(event){

	var tarea={};
	tarea["title"] = event.target[0].value;
	tarea["completed"] = event.target[1].checked;

	var idUser = document.getElementsByName("posts")[0].id;
	if(idUser!="" && tarea["title"]!="")
		addTarea( document.getElementsByName("posts")[0].id , tarea);

	return false;
});



function dibujarPost(postId,comments){

	var aux = postT.find(e=>e.id == postId);

	var main = document.createElement("div");
	main.setAttribute("class", "col-12 mt-5");
	main.innerHTML = "<p>"+aux.title+"</p>";

	for(var i=0; i<comments.length;i++){
		var com = document.createElement("div");
		com.setAttribute("class", "ml-4 mt-2 border shadow rounded");
		com.innerHTML = comments[i].body;
		main.appendChild(com);
	}

	document.getElementById("posts").appendChild(main);
}


function mostrarDatos(user){

	var aux = users.find(e=>e.id == user.id);

	var body = document.getElementById("body");
	body.innerHTML = "";
	document.getElementById("posts").innerHTML = "";
	document.getElementById("todos").setAttribute("hidden","");


	tr = document.createElement("tr");
	td1 = document.createElement("td");
	td1.innerHTML = aux.name;
	td2 = document.createElement("td");
	td2.innerHTML = aux.username;
	td3 = document.createElement("td");
	td3.innerHTML = aux.email;
	td4 = document.createElement("td");
	td4.innerHTML = aux.company.name;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	body.appendChild(tr);


	//cambia el atributo de los botones
	var b = document.getElementsByName("posts")[0];
	b.setAttribute("id",user.id);
	var com = document.getElementsByName("todos")[0];
	com.setAttribute("id",user.id);
}

function listar_usuarios(){
	var divmain = document.getElementById("users");
	for(var j=0; j<users.length; j++ ){
		var div = document.createElement("div");
		div.setAttribute("class","col-3 m-2 p-2");
		div.setAttribute("onclick","mostrarDatos(this)");
		div.setAttribute("id",users[j].id);
		div.innerHTML = "User " + users[j].id;
		divmain.appendChild(div);
	}
}


function dibujarTodos(tdos){

	//ordenamiento
	ordenarDesc(tdos,"id");
	var ulmain = document.createElement("ul");
	for(var i = 0; i<tdos.length; i++){
		var li1 = document.createElement("li");
		li1.innerHTML = tdos[i].title;
		ulmain.appendChild(li1);
	}

	document.getElementById("uno").appendChild(ulmain);
}



//.... funciones adicionales.........
function ordenarAsc(p_array_json, p_key) {
   p_array_json.sort(function (a, b) {
      return a[p_key] > b[p_key];
   });
}
function ordenarDesc(p_array_json, p_key) {
   ordenarAsc(p_array_json, p_key); p_array_json.reverse(); 
}