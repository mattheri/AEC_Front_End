<?php include_once('include/header.php'); ?>

  <!-- Page Content -->
  <div class="container">
  
	<h1 class="my-4">Module personnel</h1>	
	<p>J'affiche différents channels YouTube que j'aime ainsi que leurs dernières vidéo disponible (en date de la création de cette page).</p>
	
	<!-- Affichez les enregistrement de la table que vous avez ajoutée à la base de données. -->

  <?php 
    include_once "include/config.php";
    $mysqli = new mysqli($host, $username, $password, $database);
    if ($mysqli -> connect_errno) {
      exit();
    }
    $res = $mysqli->query("SELECT cc.id, cc.categorie as cat, c.id as cId, c.nom as nom, c.fk_categorie, v.id, v.url as v_url, v.nom as v_nom, v.fk_channel 
    FROM categories_channels as cc
    INNER JOIN channels as c ON c.fk_categorie = cc.id
    INNER JOIN videos as v ON v.fk_channel = c.id
    ORDER BY c.id ASC
    ");
  ?>
	<ul class="list-group">
    <?php 
      while ($row = $res->fetch_assoc()) {
        echo "
              <li class='list-group-item row d-flex'>
                <span class='col-1'><h5>" . $row["cId"] . "</h5></span>
                <span class='col-3'>" . $row["nom"] . "</span>
                <span class='col-5'><a href='" . $row["v_url"] . "'>" . $row["v_nom"] . "</a></span>
                <span class='col-3'>" . $row["cat"] . "</span>
              </li>
              ";
      }
    ?>
  </ul>
  </div>

<?php include_once('include/footer.php'); ?>
