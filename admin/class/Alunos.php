<?php

class Alunos {
    private $nome;
    private $numeroBi;
    private $conexao;
    
    public function __construct($nome, $numeroBi) {
        $this->nome = $nome;
        $this->numeroBi = $numeroBi;
        $this->conexao = new Conexao();
    }
    
    public function matricularAlunos(){
        $sql = "INSERT INTO alunos (aluno, bi) VALUES (:aluno, :bi)";
        $processaSQL = $this->conexao->prepare($sql);
        $processaSQL->bindValue(':aluno', $this->nome);
        $processaSQL->bindValue(':bi', $this->numeroBi);
        
        $processaSQL->execute();   
        
        echo "Aluno matriculado com sucesso";
    }
}
