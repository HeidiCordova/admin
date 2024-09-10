import { Routes } from '@angular/router';
import { browserCategoriesResolver } from './features/landing/resolver/browser-categories.resolver';
import { authGuard } from './core/guards/auth.guard';
import { ROUTES_PATH } from './core/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES_PATH.LANDING_HOME,
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/layout/landing-layout/landing-layout.component'),
    children: [
      {
        path: ROUTES_PATH.LANDING_HOME,
        title: 'Inicio',
        loadComponent: () => import('./features/landing/pages/home/home.component'),
      },
      {
        path: '',
        redirectTo: ROUTES_PATH.LANDING_BROWSER,
        pathMatch: 'full',
      },
      {
        path: ROUTES_PATH.LANDING_BROWSER,
        title: 'Explorar',
        loadComponent: () => import('./features/landing/pages/browser/browser.component'),
      },
      {
        path: ROUTES_PATH.LANDING_BROWSER_CATEGORIES_ID,
        title: 'Explorar',
        resolve: {
          categories: browserCategoriesResolver,
        },
        loadComponent: () =>
          import('./features/landing/pages/browser-category/browser-category.component'),
      },
      // {
      //   path: 'como-funciona',
      //   title: 'Como funciona',
      //   loadComponent: () => import('./features/landing/pages/how-it-works/how-it-works.component'),
      // },
      // {
      //   path: 'professional-profile/:professionalId/:professionalName',
      //   title: 'Perfil profesional',
      //   loadComponent: () =>
      //     import('./features/landing/pages/professional-profile/professional-profile.component'),
      // },
      {
        path: '',
        loadComponent: () => import('./features/auth/layout/layout.component'),
        canActivate: [authGuard],
        children: [
          {
            path: '',
            redirectTo: ROUTES_PATH.AUTH_LOGIN,
            pathMatch: 'full',
          },
          {
            path: ROUTES_PATH.AUTH_LOGIN,
            title: 'Iniciar sesión',
            loadComponent: () => import('./features/auth/pages/login/login.component'),
          },
          {
            path: ROUTES_PATH.AUTH_REGISTER,
            title: 'Registrarse',
            loadComponent: () => import('./features/auth/pages/register/register.component'),
          },
          {
            path: ROUTES_PATH.AUTH_REGISTER_PROFESSIONAL,
            title: 'Registrarse como profesional',
            loadComponent: () =>
              import('./features/auth/pages/register-professional/register-professional.component'),
          },
          {
            path: ROUTES_PATH.AUTH_FORGOT_PASSWORD,
            title: 'Restablecer contraseña',
            loadComponent: () => import('./features/auth/pages/forgot/forgot.component'),
          },
        ],
      },
    ],
  },
  {
    path: ROUTES_PATH.DASHBOARD_HOME,
    loadComponent: () => import('./features/dashboard/layout/layout-dashboard/layout-dashboard.component'),
  //   canActivate: [dashboardGuard],
    children: [
      {
        path: '',
        redirectTo: ROUTES_PATH.DASHBOARD_MESSAGES, //TODO: cambiar al perfil o ruta que estaría por defecto
        pathMatch: 'full',
      },
      {
        path: ROUTES_PATH.DASHBOARD_MESSAGES,
        title: 'Mensajes',
        loadComponent: () => import('./features/dashboard/pages/dashboard-messages/dashboard-messages.component'),
      },
      {
        path: ROUTES_PATH.DASHBOARD_MESSAGES_INBOX,
        title: 'Mensajes',
        loadComponent: () => import('./features/dashboard/pages/dashboard-messages/dashboard-messages.component'),
      },
      {
        path: '**',
        redirectTo: ROUTES_PATH.DASHBOARD_MESSAGES,
        pathMatch: 'full',
      },
  //     {
  //       path: 'profile',
  //       title: 'Perfil',
  //       loadComponent: () => import('./features/dashboard/pages/profile/profile.component'),
  //     },
  //     {
  //       path: 'rating-history',
  //       title: 'Historial de calificaciones',
  //       loadComponent: () =>
  //         import('./features/dashboard/pages/rating-history/rating-history.component'),
  //     },
  //     {
  //       path: 'mis-servicios',
  //       title: 'Mis Servicios',
  //       loadComponent: () =>
  //         import('./features/dashboard/pages/management-services/management-services.component'),
  //     },
  //     {
  //       path: 'gestionar-servicios/:serviceId',
  //       title: 'Servicios',
  //       loadComponent: () =>
  //         import('./features/dashboard/pages/management-services/management-services.component'),
  //     },
    ],
  },
  // {
  //   path: '**',
  //   loadComponent: () => import('./features/landing/pages/not-found/not-found.component'),
  // },

  {
    path: ROUTES_PATH.ADMIN,
    loadComponent: () =>
      import('./features/admin/layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard, adminGuard],
    children: [
      {
        path: '',
        redirectTo: ROUTES_PATH.ADMIN_CATEGORIES,
        pathMatch: 'full',
      },
      {
        path: ROUTES_PATH.ADMIN_CATEGORIES,
        title: 'Gestionar Categorías',
        loadComponent: () =>
          import('./features/admin/components/categorias-dashboard/categorias-dashboard.component').then(m => m.CategoriasDashboardComponent),
      },
      {
        path: ROUTES_PATH.ADMIN_TRADES,
        title: 'Gestionar Oficios',
        loadComponent: () =>
          import('./features/admin/components/oficios-dashboard/oficios-dashboard.component').then(m => m.OficiosDashboardComponent),
      },
      {
        path: ROUTES_PATH.ADMIN_USERS,
        title: 'Gestionar Usuarios',
        loadComponent: () =>
          import('./features/admin/components/usuarios-dashboard/usuarios-dashboard.component').then(m => m.UsuariosDashboardComponent),
      },
      {
        path: '**',
        redirectTo: ROUTES_PATH.ADMIN_CATEGORIES,
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '/' }, 
];
