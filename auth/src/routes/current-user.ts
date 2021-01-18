import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('HI There!');
});

export { router as currentUserRouter };