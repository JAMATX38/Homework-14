const User = require('./User');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogComment');

BlogPost.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(BlogComment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

BlogComment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  BlogComment,
  BlogPost
};