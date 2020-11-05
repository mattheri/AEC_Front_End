<?php 
	include_once 'include/config.php';
	include_once 'include/header.php';
	include_once 'include/php/ajout.php';
	include_once 'include/php/supprime.php';
	include_once 'include/php/maj.php';
?>

  <!-- Page Content -->
  <div class="container">
  
	<h1 class="my-4">Administration - Nouvelles</h1>
	
	<!-- Cette section doit permettre de gérer (lister, ajouter, modifier et supprimer) des nouvelles. -->
	<!-- Vous pouvez réaliser cette demande en utilisant plusieurs pages php (une pour l'ajout, une pour l'édition et une pour la suppression) ou utiliser des composants Modals -->
	<!-- Il doit être impossible d'accéder à cette page sans être préalablement connecté. Si un utilisateur non connecté essaie d'accéder à la page, un message d'erreur doit s'afficher -->
		<?php
			if (!isset($_SESSION["utilisateur"])) {
				echo '
					<div class="alert alert-warning alert-dismissible fade show" role="alert">
						Vous devez vous connecter pour accéder à cette section.
					</div>
				';
			} else {
				echo $message;
				$mysqli = new mysqli($host, $username, $password, $database);
				if ($mysqli -> connect_errno) {
					exit();
				}
				$res = $mysqli->query("SELECT id, titre, description_courte, date_nouvelle FROM nouvelles ORDER BY date_nouvelle DESC");
				$mysqli->close();
				echo '
					<button class="btn btn-primary mb-3" data-toggle="modal" data-target="#modalAjout">
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
							<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
						</svg>
					</button>
				';
				echo '	<ul class="list-group">';
				while ($row = $res->fetch_assoc()) {
					echo '
						<li class="list-group-item">
							<div class="row">
								<div class="col-2">
									<span><strong>' . $row["titre"] . '</strong></span>
								</div>
								<div class="col-6">
									<span class="w-50">' . $row["description_courte"] . '</span>
								</div>
								<div class="col-2">
									<span>' . $row["date_nouvelle"] . '</span>
								</div>
								<div class="col-2">
									<div>
										<button class="btn btn-primary boutonMAJ" data-toggle="modal" data-target="#modalMAJ" data-id="' . $row["id"] . '">
											<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
											</svg>
										</button>
										<button class="btn btn-danger boutonSuppr" data-toggle="modal" data-target="#modalSuppr" data-id="'. $row["id"] .'">
											<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M3.18 4l1.528 9.164a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836L12.82 4H3.18zm.541 9.329A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671L14 3H2l1.721 10.329z"/>
												<path d="M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"/>
												<path fill-rule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</li>
					';
				}

				echo '</ul>';
			}
		?>
  </div>
<?php 
	include_once 'include/modal/ajout.php';
	include_once 'include/modal/supprime.php';
	include_once 'include/modal/maj.php';
?>
<?php include_once 'include/footer.php'; ?>
<script>
	var $ = jQuery.noConflict();
	(function() {
		'use strict';
		window.addEventListener('load', function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
			});
		}, false);
	})();

	$(".boutonSuppr").click(function() {
		$("#idSuppr").val($(this).data("id"));
	});

	$(".boutonMAJ").click(function() {
		var url = `get.php?id=${$(this).data("id")}`;
		$.get(url, function(data) {
			$("#MAJtitre").val(data.titre);
			$("#MAJdate_nouvelle").val(data.date_nouvelle);
			$("#MAJdescription_courte").val(data.description_courte);
			$("#MAJcategories").val(data.fk_categorie);
			$("#MAJdescription_longue").val(data.description_longue);
			$("#MAJactif").val(data.actif);
			$("#MAJid").val(data.id);
		});
	});
</script>