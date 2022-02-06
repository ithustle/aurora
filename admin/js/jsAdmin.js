$(function (){
    
    var pacote = $("#pacote");
    var descricao = $("#descricaoPacote");
    
    
    var logotipo = new $("#logotipo");
    var btnGuardar = new $("#btnGuardar");
    var btnGuardarAlunos = new $("#btnGuardarAluno");
    var fr = new FileReader();
   
   
    // BOTÃO GUARDAR
    
    btnGuardar.on('click', function (){
        guardar();
    });
    
    //Botão guardar alunos
    btnGuardarAlunos.on('click', function (){
        $.fn.matricularAlunos();
    });
    
    logotipo.on('change', function (){
        $(this).previewFile();
    });  
    
   /* function preparaArmazenamentoDoPacote(){
        var img = document.querySelector('input[type=file]').files[0];
        fr.onload = guardar;
        if (pacote.val() === ""){
            $("#msg").addClass('msgErro');
            $("#msg").html("Introduza o nome do pacote.");
        }else{
            if (descricao.val() === ""){
                $("#msg").addClass('msgErro');
                $("#msg").html("Introduza a descrição do pacote.");
            }else{
                if (img){
                    fr.readAsDataURL(img);
                }else{
                    $("#msg").addClass('msgErro');
                    $("#msg").html("Introduza o logotipo do pacote.");
                }
            }
        }
    } */
     
    function guardar(){
        var img = document.querySelector('input[type=file]').files[0];
        
        if (pacote.val() === ""){
            $(".msg").addClass('msgErro');
            $(".msg").html("Introduza o nome do pacote.");
        }else{
            if (descricao.val() === ""){
                $(".msg").addClass('msgErro');
                $(".msg").html("Introduza a descrição do pacote.");
            }else{
                if (img){
                    $(".msg").addClass('load');
        
                    var url = "controller/controllerPacoteCursos.php";
                    var formData = new FormData(document.getElementById("frmAddPacotes"));
                    var xhr = new XMLHttpRequest();    
                    xhr.open("POST", url, true);

                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4 && xhr.status == 200){
                            $(".msg").addClass('msgSucesso');
                            $(".msg").html(xhr.responseText);
                            console.log(xhr.responseText);
                        }
                    };

                    xhr.send(formData); //Send to server
                }else{
                    $(".msg").addClass('msgErro');
                    $(".msg").html("Introduza o logotipo do pacote.");
                }
            }
        }
    }
    
    $.fn.previewFile = function(){
        var preview = document.querySelector('img');
        var logotipo = document.querySelector('input[type=file]').files[0];
        var reader   = new FileReader();

        reader.onloadend = function (){
            preview.src = reader.result;
        };

        if (logotipo) {
            reader.readAsDataURL(logotipo);
        } else {
            preview.src = "";
        }
    };
    

});

