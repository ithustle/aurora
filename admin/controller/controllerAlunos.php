<?php

require '../class/Conexao.php';
require '../class/Alunos.php';


$nome = filter_input(INPUT_POST, 'aluno');
$numeroBi = filter_input(INPUT_POST, 'bi');

$aluno = new Alunos($nome, $numeroBi);
$aluno->matricularAlunos();