import { Model, Sequelize, DataTypes } from "sequelize";
import { connection } from "../database/config";

class Import extends Model {
  public id!: number;
  public name: string;
  public address: string;
  public birthDate: string;
  public appointmentDate: string;
  public doctorName: string;
}

Import.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    birthDate: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    doctorName: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    appointmentDate: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
  },
  {
    sequelize: connection,
  }
);

Import.sync();

export default Import;
