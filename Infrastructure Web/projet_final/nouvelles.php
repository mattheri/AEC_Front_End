<?php include_once('include/header.php'); ?>

  <!-- Page Content -->
  <div class="container">
  
	<h1 class="my-4">Toutes les nouvelles</h1>
	<!-- Afficher la liste de toutes nouvelles ACTIVES en ordre chronologique (de la plus récente à la plus ancienne) -->
	<!-- L'affichage doit être le même que celui utilisé pour l'affichage des nouvelles par catégorie -->
    <?php
      $mysqli = new mysqli($host, $username, $password, $database);
      if ($mysqli -> connect_errno) {
          exit();
      }
      $res = $mysqli->query("SELECT * FROM nouvelles WHERE actif = 1 ORDER BY date_nouvelle DESC");
    ?>
    <ul class="list-group">
      <?php
        while ($row = $res->fetch_assoc()) {
          echo "
            <li class='list-group-item d-flex justify-content-between'>
              <span class='w-25'><h5>" . $row["titre"] . "</h5></span>
              <span class='w-50'>" . $row["description_courte"] . "</span>
              <span>" . $row["date_nouvelle"] . "</span>
              <span><a role='button' class='btn btn-primary' href='nouvelle.php?id=" . $row["id"] . "'>Plus de détails</a></span>
            </li>
          ";
        }
        $mysqli->close();
      ?>
    </ul>
	
  </div>

<?php include_once('include/footer.php'); ?>

</html>

