module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory',
    {},
    { timestamps: false });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      onDelete: 'CASCADE' });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      onDelete: 'CASCADE' });
  };

  return PostsCategory;
};