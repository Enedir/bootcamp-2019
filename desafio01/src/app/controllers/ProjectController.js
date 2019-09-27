import * as Yup from 'yup';

import Project from '../models/Project';

class ProjectController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const projects = await Project.findAll({
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id, title } = req.body;

    const projecIdExists = await Project.findByPk(id, {
      attributes: ['id'],
    });

    if (projecIdExists) {
      return res.status(401).json({
        error:
          'This record already exist in system. Please insert a new record.',
      });
    }

    const projecTitleExists = await Project.findOne({
      where: { title },
      attributes: ['title'],
    });

    if (projecTitleExists) {
      return res.status(401).json({
        error:
          'This record already exist in system with same title. Please insert a new record with a diferent title.',
      });
    }

    const project = await Project.create(req.body);

    return res.json(project);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { title } = req.body;

    const project = await Project.findByPk(req.params.id, {
      attributes: ['title'],
    });

    if (project.title === title) {
      return res.status(401).json({
        error: `No changes were identified in the project title. Please change this title.`,
      });
    }

    await Project.update({ title }, { where: { id: req.params.id } });

    return res.json({
      title,
    });
  }

  async delete(req, res) {
    const operationResult = await Project.destroy({
      where: { id: req.params.id },
    });

    const isdelete = operationResult === 1;

    return res.json(isdelete);
  }
}

export default new ProjectController();
