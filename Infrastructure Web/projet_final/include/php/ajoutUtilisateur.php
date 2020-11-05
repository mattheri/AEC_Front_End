<?php
  session_start();
  if(isset($_POST['connexion']) && isset($_POST['mot_de_passe']) && isset($_POST['email'])) { 
    $mysqli = new mysqli($host, $username, $password, $database);
    if ($mysqli -> connect_errno) {
      exit();
    }
  if ($requete = $mysqli->prepare("SELECT mot_de_passe FROM utilisateurs WHERE email = ?")) {

    $requete->bind_param("s", $_POST['email']);
    if ($requete->execute()) {
      $resultat = $requete->get_result();
      $utilisateur = $resultat->fetch_assoc();

      if (password_verify($_POST["mot_de_passe"], $utilisateur["mot_de_passe"])) {
        $_SESSION["utilisateur"] = $_POST["email"];
      }
    }
    $requete->close();
  } else  {
    $message = "";
  }

    $mysqli->close();
  }

  if (isset($_POST["deconnexion"])) {
    unset($_SESSION["utilisateur"]);
  }
?>