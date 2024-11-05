import express from 'express';

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Check credentials (simple validation example)
  if (username === 'testuser' && password === 'testpass') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

export default router;
