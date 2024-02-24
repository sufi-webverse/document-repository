import { createBrowserRouter } from "react-router-dom";
import AuthorLayout from "@/pages/layouts/AuthorLayout";
import { lazy } from "react";
const OnboardingLayout = lazy(() => import("@/pages/onboarding/OnboardingLayout"));

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
            <OnboardingLayout></OnboardingLayout>
          </>
        ),
      },
    ],
  },
]);

export default router;
