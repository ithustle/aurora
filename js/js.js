$(function (){

    $("#btnLogin").on('click', function (){
        window.location.href = "login/index.html";
    });
    
    $("#btnEntrar").on('click', function (){
        window.location.href = "../main/index.html";
    });

    carregarPacotesCursos();
    
    function carregarPacotesCursos(){
        $.getJSON("admin/controller/controllerPacoteCursos.php", function(data){
            for (var i=0; i<data.length; i++){
                $(".cursos_container")
                        .append("<div class='cursos'>\n\
                                    <div id='icon_pacote'>\n\
                                        <img height='78' src=\""+ data[i][1] + "\" />\n\
                                    </div>\n\
                                    <h5>"+data[i][0]+"</h5>\n\
                                    <p>"+data[i][2]+"</p>\n\
                                    <div class='details'>7 Cursos</div>\n\
                                    <div id='ver_curso_php'></div>\n\
                                </div>");
            }
        });
    }
});