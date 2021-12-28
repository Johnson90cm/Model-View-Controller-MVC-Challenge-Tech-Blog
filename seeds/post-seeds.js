const { Post } = require('../models');

const postData = [{
        title: 'Post1',
        content: 'post1',
        user_id: 1

    },
    {
        title: 'Post2',
        content: 'post2',
        user_id: 2
    },
    {
        title: 'Post3',
        content: 'post3',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;