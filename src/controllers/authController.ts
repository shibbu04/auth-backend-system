import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/authService';
import { SignupRequest, LoginRequest } from '../types';

export class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const signupData: SignupRequest = req.body;
      const result = await AuthService.signup(signupData);

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const loginData: LoginRequest = req.body;
      const result = await AuthService.login(loginData);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id;
      const user = await AuthService.getCurrentUser(userId);

      res.status(200).json({
        success: true,
        message: 'User retrieved successfully',
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }

  static async requestPasswordReset(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const result = await AuthService.requestPasswordReset(email);

      res.status(200).json({
        success: true,
        message: 'Password reset token generated successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, newPassword } = req.body;
      const result = await AuthService.resetPassword(token, newPassword);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Admin only route example
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      // This would be implemented for admin panel
      res.status(200).json({
        success: true,
        message: 'Admin route - Get all users',
        data: { message: 'This is an admin-only route' },
      });
    } catch (error) {
      next(error);
    }
  }
}