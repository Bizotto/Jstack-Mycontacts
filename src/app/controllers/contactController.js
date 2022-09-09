class ContactController {
  index(request, response) {
    // listar
    response.send('send from contact controller');
  }

  show() {
    // obter um
  }

  store() {
    // criar novo
  }

  update() {
    // editar um
  }

  delete() {
    // deletar UM
  }
}

module.exports = new ContactController();
