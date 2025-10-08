import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Student extends Model {}

Student.init(
  {
    cardId: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
      field: "card_id",
      primaryKey: true,
    },
    studentName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "student_name",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "address",
    },
    tel: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: "tel",
    },
  },
  {
    sequelize: sequelize,
    modelName: "students",
    timestamps: false,
  }
);
