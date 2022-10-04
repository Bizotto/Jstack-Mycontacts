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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({ email, name, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        email,
        name,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { email, name, phone, category_id }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        email,
        name,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) =>
        contact.id === id ? updateContact : contact,
      );
      resolve(updateContact);
    });
  }
}

module.exports = new contactsRepository();
