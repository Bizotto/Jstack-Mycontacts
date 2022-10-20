const { v4 } = require('uuid');
const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ]);
    return row;
  }

  async create({ email, name, phone, category_id }) {
    const [row] = await db.query(
      `
      INSERT INTO contacts(email, name, phone, category_id)
      VALUES($1, $2, $3, $4 )
      RETURNING *
      `,
      [email, name, phone, category_id],
    );

    return row;
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
