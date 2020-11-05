<?php include_once 'config.php'; ?>
<?php 
    $mysqli = new mysqli($host, $username, $password, $database);
    if ($mysqli -> connect_errno) {
      exit();
    }
    $res = $mysqli->query("SELECT id, titre, date_nouvelle, description_courte FROM nouvelles WHERE actif = 1 ORDER BY date_nouvelle DESC LIMIT 3");
    while ($row = $res->fetch_assoc()) {
        echo "
        <div class='col-lg-4 mb-4'>
        <div class='card h-100'>
            <h4 class='card-header'>" . $row["titre"] . "</h4>
            <div class='card-body'>
        <h6 class='card-title'>" . $row["date_nouvelle"] . "</h6>
            <p class='card-text'>" . $row["description_courte"] . "</p>
            </div>
            <div class='card-footer'>
            <a href='nouvelle.php?id=" . $row["id"] . "' class='btn btn-primary'>Plus d'information</a>
            </div>
        </div>
        </div>
        ";
    }
    $mysqli->close();
?>