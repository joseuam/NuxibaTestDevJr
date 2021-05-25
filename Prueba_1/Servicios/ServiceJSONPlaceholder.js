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

var postT;
var relaciones = {};
function getPosts(id){
    $.ajax({
        type : "GET",
        url : "https://jsonplaceholder.typicode.com/users/"+id+"/posts",
        success : function(postRe) {
            postT = postRe;
            getComments(postRe);             
        },
        error: function(e){
            console.log(e);
        }
     });
}

function getComments(postRe){
    for(var i=0; i<postRe.length;i++){
        $.ajax({
            type : "GET",
            url : "https://jsonplaceholder.typicode.com/post/"+postRe[i].id+"/comments",
            success: function(comments){
                relaciones[ comments[0].postId ] = comments;
                dibujarPost(comments[0].postId, comments);
            },
            error: function(e){
               console.log(e); 
            }
        });
    }
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







