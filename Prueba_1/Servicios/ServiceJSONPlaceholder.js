function getUsers(){
    $.ajax({
        type : "GET",
        url : "https://jsonplaceholder.typicode.com/users",
        success : function(result) {
            console.log(result);
            users = result;
            listar_usuarios();
        },
        error: function(e){
            console.log(e);
        }
     });    
}


function getPosts(id){
    $.ajax({
        type : "GET",
        url : "https://jsonplaceholder.typicode.com/users/"+id+"/posts",
        success : function(postRe) {

            
            for(i = 0; i<postRe.length; i++){
                var j = i;
                console.log(postRe[j].id);
                console.log(j);
                $.ajax({
                    type : "GET",
                    url : "https://jsonplaceholder.typicode.com/post/"+postRe[j].id+"/comments",
                    success: function(comments){
                  
                        dibujarPosts(postRe[j],comments);
                    }
                })
            }

               
        },
        error: function(e){
            console.log(e);
        }
     });
}

function getTodos(id){
    $.ajax({
        type : "GET",
        url : "https://jsonplaceholder.typicode.com/users/"+id+"/todos",
        success: function(tdos){
            dibujarTodos(tdos);
        },
        error: function(e){
            console.log(e);
        }
    });
}

function addTarea(userId,json){

    $.ajax({
        type : "POST",
        url : "https://jsonplaceholder.typicode.com/users/"+userId+"/todos",
        success: function(re){

            if(re.id == 201){
                alert("Tarea almacenada con exito\n"+ JSON.stringify(re));
            }

            document.getElementById("title").value = "";
            document.getElementById("completed").checked = false;

        }
    });

}







