const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Nicolas',
    email: 'nicolas@email.com',
    phone: 999999999,
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Carlos',
    email: 'carlos@email.com',
    phone: 888888888,
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'jean',
    email: 'jean@email.com',
    phone: 888888888,
    category_id: v4(),
  },
];

class contactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new contactsRepository();
