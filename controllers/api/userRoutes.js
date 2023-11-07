const router = require('express').Router();
const { Project, User } = require('../../models')
const withAuth = require('../../utils/auth');

// Existing GET routes (unchanged)

router.get('/', async (req, res) => {
  // ... (existing code)
});

router.get('/project/:id', async (req, res) => {
  // ... (existing code)
});

router.get('/profile', withAuth, async (req, res) => {
  // ... (existing code)
});

router.get('/login', (req, res) => {
  // ... (existing code)
});

// Add POST routes

// Create a new project (POST)
router.post('/project', withAuth, async (req, res) => {
  try {
    // Assuming you have a request body with project data
    const newProjectData = req.body;

    // Add the logged-in user's ID to the new project data
    newProjectData.UserId = req.session.user_id;

    // Create the new project in the database
    const newProject = await Project.create(newProjectData);

    res.status(200).json(newProject); // Respond with the newly created project
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user profile (POST)
router.post('/profile/update', withAuth, async (req, res) => {
  try {
    // Assuming you have a request body with updated user data
    const updatedUserData = req.body;

    // Find and update the logged-in user's data in the database
    await User.update(updatedUserData, {
      where: {
        id: req.session.user_id
      }
    });

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
