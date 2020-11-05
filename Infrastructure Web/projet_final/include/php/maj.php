<?php
    if(
        isset($_POST['MAJSubmit']) &&
        isset($_POST['MAJtitre']) &&
        isset($_POST['MAJdescription_courte']) &&
        isset($_POST['MAJdescription_longue']) && 
        isset($_POST['MAJdate_nouvelle']) && 
        isset($_POST['MAJactif']) && 
        isset($_POST['MAJfk_categorie']) &&
        isset($_POST["MAJid"])
    )  {
        $mysqli = new mysqli($host, $username, $password, $database);
        if ($mysqli -> connect_errno) {
            exit();
        } 
        
        if ($requete = $mysqli->prepare("UPDATE nouvelles SET titre=?, description_courte=?, description_longue=?, date_nouvelle=?, actif=?, fk_categorie=? WHERE id=?")) {
            $requete->bind_param("ssssiii", $_POST['MAJtitre'], $_POST['MAJdescription_courte'], $_POST['MAJdescription_longue'], $_POST['MAJdate_nouvelle'], $_POST['MAJactif'], $_POST['MAJfk_categorie'], $_POST["MAJid"]); // Envoi des paramètres à la requête. 

            if($requete->execute()) {
            $message = "<div class='alert alert-success'>Nouvelle mise à jour</div>";
            } else {
            $message =  "<div class='alert alert-danger'>Une erreur est survenue lors de la mise à jour.</div>";
            }

            $requete->close();
        } else  {
            echo $mysqli->error;
        }

        $mysqli->close();

    }

?>