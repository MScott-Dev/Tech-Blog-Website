const router = require('express').Router();
const { BlogPost } = require('../..models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
   try {
     const newBlog = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
    });
   } catch (err) {
    res.status(400).json(err);
   }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No Blog found with that id!'});
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;