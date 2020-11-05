<?php
    if (
        isset($_POST['supprSubmit']) && isset($_POST['id'])) {
        include_once "include/config.php";
        $mysqli = new mysqli($host, $username, $password, $database);
        if ($mysqli -> connect_errno) {
          exit();
        }
        if ($requete = $mysqli->prepare("DELETE FROM nouvelles WHERE id=?")) {      

            $requete->bind_param("i", $_POST['id']);

            if($requete->execute()) {
                $message = "<div class='alert alert-success text-center'>Suppression effectuée</div>";  // Message ajouté dans la page en cas d'ajout réussi
            } else {
                $message =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de la suppression.</div>";  // Message ajouté dans la page en cas d’échec
            }
                $requete->close();
        } else  {
            echo $mysqli->error;
        }
        $mysqli->close();
    }
?>