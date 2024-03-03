import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Files = lazy(() => import("@/pages/files"));
const Teams = lazy(() => import("@/pages/teams"));
const Workspaces = lazy(() => import("@/pages/workspaces"));
const Login = lazy(() => import("@/pages/auth/sign-in"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const UserLayout = lazy(() => import("@/layouts/UserLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Suspense>
          <UserLayout />
        </Suspense>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Suspense>
              <Teams />
            </Suspense>
          </>
        ),
      },
    ],
  },
  {
    path: "/teams",
    element: (
      <>
        <Suspense>
          <UserLayout />
        </Suspense>
      </>
    ),
    children: [
      {
        path: "/teams",
        element: (
          <>
            <Suspense>
              <Teams />
            </Suspense>
          </>
        ),
      },
      {
        path: "/teams/:id",
        element: <>ROUTED</>,
      },
      {
        path: "/teams/:id/workspaces",
        element: (
          <>
            <Suspense>
              <Workspaces></Workspaces>
            </Suspense>
          </>
        ),
      },
      {
        path: "/teams/:teamId/workspaces/:workspaceId/files",
        element: (
          <>
            <Suspense>
              <Files></Files>
            </Suspense>
          </>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <>
        <AuthLayout />
      </>
    ),
    children: [
      {
        path: "sign-in",
        element: (
          <>
            <Login />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <>404</>,
  },
]);

export default router;
