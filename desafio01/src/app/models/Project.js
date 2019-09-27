import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        title: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Project;
