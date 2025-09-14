import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../../layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login').then((m) => m.Login),
        title: 'Login - Clinic Booking Dashboard',
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up').then((m) => m.SignUp),
        title: 'Sign Up - Clinic Booking Dashboard',
      },
      {
        path: 'forgot-password',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./forget-password/forget-password').then((m) => m.ForgetPassword),
            title: 'Forgot Password - Clinic Booking Dashboard',
          },
          {
            path: 'confirm-sent',
            loadComponent: () =>
              import('./confirm-forget-password/confirm-forget-password').then(
                (m) => m.ConfirmForgetPassword
              ),
            title: 'Confirm Password Reset - Clinic Booking Dashboard',
          },
        ],
      },
      {
        path: 'reset-password',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./reset-password/reset-password').then((m) => m.ResetPassword),
            title: 'Reset Password - Clinic Booking Dashboard',
          },
          {
            path: 'confirm-sent',
            loadComponent: () =>
              import('./confirm-reset-password/confirm-reset-password').then(
                (m) => m.ConfirmResetPassword
              ),
            title: 'Confirm Password Reset - Clinic Booking Dashboard',
          },
        ],
      },
    ],
  },
];
