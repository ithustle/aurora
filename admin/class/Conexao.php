<?php

class Conexao extends PDO {
    private $dsn = 'mysql:host=localhost;dbname=aurora';
    private $user = 'root';
    private $pass = '';
    private $cnn;
    
    public function __construct() {
        try {
            
            if ($this->cnn == NULL){
                
                $cnn = parent::__construct($this->dsn, $this->user, $this->pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
                    /*,PDO::MYSQL_ATTR_SSL_KEY    =>'/etc/mysql/ssl/client-key.pem',
                    PDO::MYSQL_ATTR_SSL_CERT=>'/etc/mysql/ssl/client-cert.pem',
                    PDO::MYSQL_ATTR_SSL_CA    =>'/etc/mysql/ssl/ca-cert.pem' 
                    
                    )*/));
                $this->handle = $cnn;
                
                return $this->handle;
            }
            
        } catch (PDOException $exc) {
            
            throw new Exception ("Mensagem: ". $exc->getMessage(). "Código de erro: ". $exc->getCode());
            return FALSE;
        }
    }
}
