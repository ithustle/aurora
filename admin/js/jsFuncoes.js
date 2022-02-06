$(function (){
    
    $.fn.matricularAlunos = function (){
        $.post("controller/controllerAlunos.php", $("#frmMatricularAlunos").serialize(), function (data){
            $(".msg").addClass('msgSucesso');
            $(".msg").html(data);
            $("#aluno").val("");
            $("#bi").val("");
        });
    };
});