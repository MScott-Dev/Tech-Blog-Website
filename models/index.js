// imports models
const User = require('./User');
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

// Users has many Blog posts
User.hasMany(BlogPost, {
  foreignKey: "user_id",
});
// Blog posts belong to user
BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});
// Blog posts has many comments
BlogPost.hasMany(Comment, {
  foreignKey: "blog_id",
});
// Comments belong to Blog post
Comment.belongsTo(BlogPost, {
  foreignKey: "blog_id",
});


module.exports = {
    User,
    BlogPost,
    Comment,
};