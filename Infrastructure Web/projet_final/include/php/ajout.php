<?php
    if (
        isset($_POST['ajoutSubmit']) &&
        isset($_POST['titre']) &&
        isset($_POST['description_courte']) &&
        isset($_POST['description_longue']) && 
        isset($_POST['date_nouvelle']) && 
        isset($_POST['actif']) && 
        isset($_POST['fk_categorie'])
    ) {
        $mysqli = new mysqli($host, $username, $password, $database);
        if ($mysqli -> connect_errno) {
          exit();
        }
        if ($requete = $mysqli->prepare("INSERT INTO nouvelles (titre, description_courte, date_nouvelle, description_longue, actif, fk_categorie) VALUES(?, ?, ?, ?, ?, ?)")) {      

            $requete->bind_param("ssssii", $_POST['titre'], $_POST['description_courte'], $_POST['date_nouvelle'], $_POST['description_longue'], $_POST['actif'], $_POST['fk_categorie']);

            if($requete->execute()) {
                $message = "<div class='alert alert-success text-center'>Nouvelle ajoutée</div>";  // Message é dans la page en cas d' réussi
            } else {
                $message =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de l'.</div>";  // Message é dans la page en cas d’échec
            }
            $requete->close();
        } else  {
            echo $mysqli->error;
        }
        $mysqli->close();
    }

?>