<?php

class PacoteCursos {
    
    private $pacote;
    private $logotipo;
    private $descricao;
    private $conexao;

    public function __construct() {
        $this->conexao = new Conexao();
    } 
    
    function getPacote() {
        return $this->pacote;
    }

    function getLogotipo() {
        return $this->logotipo;
    }

    function getDescricao() {
        return $this->descricao;
    }

    function setPacote($pacote) {
        $this->pacote = $pacote;
    }

    function setLogotipo($logotipo) {
        $this->logotipo = $logotipo;
    }

    function setDescricao($descricao) {
        $this->descricao = $descricao;
    }

        
    public function adicionarPacotes(){
        $sql = "INSERT INTO pacote_cursos (pacote, logotipo, descricao) VALUES (:pacote, :logotipo, :descricao);";
        $processarSQL = $this->conexao->prepare($sql);
        $processarSQL->bindValue(':pacote', $this->getPacote());
        $processarSQL->bindValue(':logotipo', $this->getLogotipo());
        $processarSQL->bindValue(':descricao', $this->getDescricao());
        $processarSQL->execute();
        
        return "Pacote inserido com sucesso";
        
    }
    
    public function pegaTodosPacotes(){
        $sql = "SELECT * FROM pacote_cursos";
        $processarSQL = $this->conexao->prepare($sql);
        $processarSQL->execute();
        
        return $processarSQL->fetchAll(PDO::FETCH_ASSOC);
    }
}