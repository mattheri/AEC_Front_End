<div id="modalMAJ" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter une nouvelle</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="col-6 mb-3">
                <label for="titre">Titre *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="MAJtitre" name="MAJtitre" maxlength="50" required>
                <div class="invalid-feedback">
                  Un titre est requis pour ajouter une nouvelle.
                </div>
              </div>
              
              <div class="col-6 mb-3">
                <label for="date_nouvelle">Date *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="date" class="form-control" id="MAJdate_nouvelle" name="MAJdate_nouvelle" <?php echo "value='" . date('Y-m-d') . "'" ?> required>
                <div class="invalid-feedback">
                  La date de publication est requise.
                </div>
              </div>

            </div> 
            <div class="form-row align-items-center">
              <div class="col-9 mb-3">
                <label for="description_courte">Description courte *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="MAJdescription_courte" name="MAJdescription_courte" maxlength="125" required>
                <div class="invalid-feedback">
                  Une courte description de la nouvelle est requise.
                </div>
              </div>
              <div class="col-3 mt-3">
                <select class="custom-select" id="MAJcategories" name="MAJfk_categorie">
                  <?php 
                    $mysqli = new mysqli($host, $username, $password, $database);
                    if ($mysqli -> connect_errno) {
                      exit();
                    }
                    $res = $mysqli->query("SELECT * FROM categories");
                    $mysqli->close();
                    while ($row = $res->fetch_assoc()) {
                      echo "<option name='fk_categorie' value=" . $row["id"] . ">" . $row["categorie"] . "</option>";
                    }
                  ?>
                </select>
              </div>
            </div>
            <div class="form-row">

              <div class="col-12 mb-3">
                <label for="description_longue">Description longue *</label>
                <textarea class="form-control" id="MAJdescription_longue" name="MAJdescription_longue" required></textarea>
                <div class="invalid-feedback">
                  La description longue est requise.
                </div>
              </div>
      
            </div>
            
            <label for="actif">Active</label>
            <select class="custom-select" id="MAJactif" name="MAJactif">
              <option value="1">Oui</option>
              <option value="0">Non</option>
            </select>
          </div>
          <div class="modal-footer">
            <input type="hidden" id="MAJid" name="MAJid">
            <button class="btn btn-primary" type="submit" name="MAJSubmit">Modifier la nouvelle</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>