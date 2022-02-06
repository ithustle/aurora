<?php

require '../class/Conexao.php';
require '../class/PacoteCursos.php';

$pacotes = new PacoteCursos();

if (filter_input(INPUT_POST, 'pacote') !== NULL){
    
    $nomeDoPacote = filter_input(INPUT_POST, 'pacote');
    $descricaoPacote = filter_input(INPUT_POST, 'descricaoPacote');
    $logotipo = $_FILES["logotipo"]['tmp_name'];
    $nomeLogotipo = $_FILES["logotipo"]['name'];
    
    $extensaoFicheiro = ['.png', '.jpg', '.jpeg'];
    $caminho = "img/imgcursos/";

    if (!in_array(strrchr($nomeLogotipo, "."), $extensaoFicheiro)){
        echo "O tipo de ficheiro selecionado é inválido!";
    }

    $caminhoCompleto = $caminho . "aurora_".$nomeLogotipo;

    move_uploaded_file($logotipo, $caminhoCompleto);
    $pacotes->setPacote($nomeDoPacote);
    $pacotes->setDescricao($descricaoPacote);
    $pacotes->setLogotipo($caminhoCompleto);
    $pacotes->adicionarPacotes();
}

$i=0;
foreach ($pacotes->pegaTodosPacotes() as $p){
    
    $arrayPacotes[] = array($p['pacote'], $p['logotipo'], $p['descricao']);
    $i++;
}  

echo json_encode($arrayPacotes);