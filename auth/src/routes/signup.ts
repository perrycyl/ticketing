import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    res.send('HI There!');
});

export { router as signupRouter };