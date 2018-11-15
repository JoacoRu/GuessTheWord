<?php 
 class DB{
    public $conexion;

    public function __construct()
    //Nuestro constructor es basicamente PDO
    {

        // NOTE: db local:
        $dsn = 'mysql:host=localhost;dbname=gigidb;
        charset=utf8mb4;port=3306';
        $username ="root";
        $password = "";
        // NOTE: db hosting
        /*$dsn = 'mysql:host=localhost;dbname=id6873172_singleriders;
        charset=utf8mb4;port=3306';
        $username ="id6873172_root";
        $password = "agostoeighteen";*/

        try {
            $this->conexion = new PDO($dsn, $username, $password);
            //A nuestro atributo $conexion le asignamos el new PDO, y de aca en mas solamente tenemos que escribir "conexion" y con "->" accedamos a los metodos que necesitemos y sean propios de PDO.
        }

        catch(Exception $e)
        {
            echo "La conexion a la base de datos falló: " . $e->getMessage();
        }

 }
?>