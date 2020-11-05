<div id="modalSuppr" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Supprimer une nouvelle</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row justify-content-center mb-3">
                <h4>Êtes-vous sûre de vouloir supprimer cette nouvelle?</h4>
            </div>
            <div class="form-row justify-content-center">
                <button class="btn btn-danger" type="submit" name="supprSubmit">Supprimer</div>
            </div>
          <div class="modal-footer">
            <input type="hidden" id="idSuppr" name="id">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
          </div>
        </div>
      </div>
    </form>
</div>