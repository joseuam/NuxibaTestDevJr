function crear(data2){
    console.log(data2);
    var col = 3;
    var filas = 20;
    var tabla="<table border=\"0\">"
    for(i=0;i<filas;i++)
    {
        tabla+="<tr>";
        for(j=0;j<col;j++)
        {
            if (j == 0)
            {
                tabla+="<td>"+"<p>" + data2[i][j] + "<\p>" + "</td>";
            }
            if (j == 1)
            {
                tabla+="<Td>"+"<p>" + data[i].Publisher + "<\p>"+ "</td>";
            }
            if (j == 2)
            {
                tabla+="<td>"+"<p>" + data2[i][alter_ego] + "<\p>"+ "</td>";
            }
            
        }
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("root").innerHTML=tabla;
}

function crear2(){
    readTextFile("superher0es.json", function(text){
        var data = JSON.parse(text);
        //console.log(data);
        crear(data);
    });

}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType("Application/Json");
    rawFile.open("Get", file, true)
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(raWFile.responseText);
        }
    }
    rawFile.Send(null);
}