<?php include_once('include/header.php'); ?>
<?php include_once 'include/config.php'; ?>

  <!-- Page Content -->
  <div class="container">
  
  <?php 
    $mysqli = new mysqli($host, $username, $password, $database);
    if ($mysqli -> connect_errno) {
      echo $mysqli -> connect_error;
        exit();
    }
    if (isset($_GET['id'])) {
      if ($res = $mysqli->prepare(
        "SELECT cat.id, 
          cat.categorie as categorie, 
          n.id as id, 
          n.titre as titre, 
          n.description_courte as short, 
          n.date_nouvelle as nouvelle_date, 
          n.actif,
          n.fk_categorie 
          FROM categories as cat
          INNER JOIN nouvelles as n ON n.fk_categorie = cat.id 
          WHERE cat.id = ? AND n.actif = 1
          ORDER BY date_nouvelle DESC")) {
        $res->bind_param("s", $_GET["id"]);
        if ($res->execute()) {
          $resultat = $res->get_result();
          $count = 0;
          while ($row = $resultat->fetch_assoc()) {
            if ($count == 0) {
              echo "<h1 class='my-4'>" . $row["categorie"] . "</h1>";
            }

            $count ++;
  ?> 
	<!-- Afficher la liste de toutes nouvelles ACTIVES appartenant à la catégorie sélectionnée en ordre chronologique (de la plus récente à la plus ancienne) -->
	<!-- L'affichage est à votre discrétion -->
  <ul class="list-group">
    <?php 
              echo "
                <li class='list-group-item d-flex justify-content-between'>
                  <span class='w-25'><h5>" . $row["titre"] . "</h5></span>
                  <span class='w-50'>" . $row["short"] . "</span>
                  <span>" . $row["nouvelle_date"] . "</span>
                  <span><a role='button' class='btn btn-primary' href='nouvelle.php?id=" . $row["id"] . "'>Plus de détails</a></span>
                </li>
              ";
            }
          }

          $res->close();
        }
      }

      $mysqli->close();
    ?>
  </ul>
  </div>

<?php include_once('include/footer.php'); ?>

