export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: Omit<User, 'password'>;
    token: string;
  };
}

export interface ApiError {
  success: false;
  message: string;
  statusCode: number;
  errors?: string[];
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface UpdatePasswordRequest {
  token: string;
  newPassword: string;
}