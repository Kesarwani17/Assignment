const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

const postRouter = require('./routes/posts');
app.use('/posts', authMiddleware, postRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
