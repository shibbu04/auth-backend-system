import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authenticate, authorize } from '../middleware/auth';
import { validate, signupSchema, loginSchema, resetPasswordSchema, updatePasswordSchema } from '../middleware/validation';

const router = Router();

// Public routes
router.post('/signup', validate(signupSchema), AuthController.signup);
router.post('/login', validate(loginSchema), AuthController.login);
router.post('/request-password-reset', validate(resetPasswordSchema), AuthController.requestPasswordReset);
router.post('/reset-password', validate(updatePasswordSchema), AuthController.resetPassword);

// Protected routes
router.get('/me', authenticate, AuthController.getCurrentUser);

// Admin only routes
router.get('/admin/users', authenticate, authorize('ADMIN'), AuthController.getAllUsers);

export default router;