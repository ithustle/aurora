$(function (){
    
    var telaMatricularAlunos = new $("#addAlunos");
    var telaCadastrarPacotes = new $("#addPacotes");
    var telaPrincipal = new $("#main");
    var page;
    
    var matricularAlunos = new $("#mAlunos");
    var cadastrarPacotes = new $("#cPacotes");
    
    matricularAlunos.on('click', function (e){
        e.preventDefault();
        page = "#addAlunos";
        $.fn.paginas(page);
    });
    
    cadastrarPacotes.on('click', function (e){
        e.preventDefault();
        page = "#addPacotes";
        $.fn.paginas(page);
    });
        
    $.fn.paginas = function (page){
        
        if (page === "#addAlunos"){
            telaMatricularAlunos.css('display', 'block');
            telaCadastrarPacotes.css('display', 'none');
            telaPrincipal.css('display', 'none');
        }else if (page === "#addPacotes" ){
            telaMatricularAlunos.css('display', 'none');
            telaCadastrarPacotes.css('display', 'block');
            telaPrincipal.css('display', 'none');
        }else{
            telaMatricularAlunos.css('display', 'none');
            telaCadastrarPacotes.css('display', 'none');
            telaPrincipal.css('display', 'block');
        }
    };
    
}); 