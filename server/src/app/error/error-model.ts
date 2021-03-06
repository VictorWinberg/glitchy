import { DataTypes } from "sequelize";

export default (sequelize: any) => {
  const Error = sequelize.define(
    "Error",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      type: DataTypes.STRING,
      stacktrace: DataTypes.TEXT
    },
    {}
  );
  Error.associate = function(models: any) {
    Error.belongsTo(models.Project, {});
  };
  return Error;
};
