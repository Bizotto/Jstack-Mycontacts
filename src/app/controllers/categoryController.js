const categoryRepository = require('../repositories/categoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await categoryRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await categoryRepository.create({ name });

    response.json(category);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await categoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: "category doesn't exist" });
    }
    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await categoryRepository.delete(id);
    response.sendStatus(204);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    const categoryExists = await categoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ error: "category doesn't exist" });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await categoryRepository.update(id, { name });
    response.json(category);
  }
}

module.exports = new CategoryController();
