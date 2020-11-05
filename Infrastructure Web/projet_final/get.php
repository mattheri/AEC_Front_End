<?php
    header('Content-Type: application/json');
    
    include_once 'include/config.php'; 
    
    if(!isset($_GET['id'])) {
      echo 'Identifiant manquant';
      exit();
    }

    $mysqli = new mysqli($host, $username, $password, $database);
    if ($mysqli -> connect_errno) {
      exit();
    } 

    if ($requete = $mysqli->prepare("SELECT * FROM nouvelles WHERE id = ?")) {

        $requete->bind_param("s", $_GET['id']);
        $requete->execute();
  
        $result = $requete->get_result();
        $nouvelle = $result->fetch_assoc();
  
        $nouvelleJSON = json_encode($nouvelle);
        echo $nouvelleJSON;

        $requete->close();
      }
  
      $mysqli->close();

?>