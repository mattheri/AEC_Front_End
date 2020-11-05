<?php 
    include_once 'include/header.php';
    include_once 'include/config.php';

    $mysqli = new mysqli($host, $username, $password, $database);
    if ($mysqli -> connect_errno) {
        exit();
    }

    if (isset($_GET["id"])) {
        if ($res = $mysqli->prepare("SELECT titre, description_longue, date_nouvelle FROM nouvelles WHERE id=?")) {
            $res->bind_param("s", $id);
            $id = $_GET["id"];
            if ($res->execute()) {
                $res->bind_result($titre, $description_longue, $date);
                if ($res->fetch()) {
                    echo "
                        <div class='container'>
                            <h1 class='mt-5'>" . $titre . "</h1>
                            <hr>
                            <h5>" . $date . "</h5>
                            <hr>
                            <p class='my-5'>" . $description_longue . "</p>
                        </div>
                    ";
                }
                $res->close();
            }
        }
        $mysqli->close();
    }



    include_once 'include/footer.php';
?>