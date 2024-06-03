const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const validation = require('../utils/validation');

router.post('/', async (req, res) => {
    try {
        const { error } = validation.validatePost(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const newPost = new Post({ ...req.body, user_id: req.user.id });
        await newPost.save();

        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/user', async (req, res) => {
    try {
        const userId = req.user.id;
        const posts = await Post.getByUserId(userId);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.getById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const { error } = validation.validatePost(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const post = await Post.getById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }


        if (post.user_id !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized to update this post' });
        }

        await Post.update({ ...req.body, id: post.id });
        res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.getById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }


        if (post.user_id !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized to delete this post' });
        }

        await Post.delete(req.user.id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
