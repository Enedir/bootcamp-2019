import * as Yup from 'yup';

import Task from '../models/Task';

class TaskController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const project_id = req.params.id;
    const { title } = req.body;

    const task = await Task.create({
      project_id,
      title,
    });

    return res.json(task);
  }
}

export default new TaskController();
