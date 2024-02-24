import { createBrowserRouter } from "react-router-dom";
import AuthorLayout from "@/pages/layouts/AuthorLayout";
import { lazy } from "react";
const Files = lazy(() => import("@/pages/files"));
const Teams = lazy(() => import("@/pages/teams"));
const Workspaces = lazy(() => import("@/pages/workspaces"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AuthorLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Teams />
          </>
        ),
      },
      {
        path: "/files",
        element: (
          <>
            <Files></Files>
          </>
        ),
      },
      {
        path: "/workspaces",
        element: (
          <>
            <Workspaces></Workspaces>
          </>
        ),
      },
    ],
  },
]);

export default router;
