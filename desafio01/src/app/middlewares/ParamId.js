import Project from '../models/Project';

export default async (req, res, next) => {
  try {
    const projectExist = await Project.findByPk(req.params.id);

    if (projectExist !== null) {
      return next();
    }

    return res.status(401).json({
      error: `The id parameter passed was not found in the system. Are you seure uoy passed the correct value?`,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
