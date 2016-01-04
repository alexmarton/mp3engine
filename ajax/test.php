<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 03/01/2016
 * Time: 23:33
 */
include '../config/functions.php';


$var = $_POST['dsend'];

    sql();
$table = "date_personale";

$consulta = "select * from {$table} where nume='Marton'";


if ($resultado = $con->query($consulta)) {

    while ($fila = $resultado->fetch_assoc()) {

       $obj =  json_encode($fila,JSON_PRETTY_PRINT);


        echo $obj;
    }
    //$obj = json_decode($test);
    //echo $obj->nume;



    $resultado->close();
}



?>