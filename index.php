<?php
$servername = "localhost";
$username = "root";
$database = "ayuda";

// Crear conexión
$conn = new mysqli($servername, $username, "", $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "creando...";
