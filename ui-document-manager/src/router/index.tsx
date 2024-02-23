import { createBrowserRouter } from "react-router-dom";
import AuthorLayout from "@/views/layouts/AuthorLayout";
import { lazy } from "react";
const OnboardingLayout = lazy(() => import("@/views/onboarding/OnboardingLayout"));

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
