import Navbar from "@/pages/dashboard/components/Navbar";
import { Outlet } from "react-router-dom";

export default function AuthorLayout() {
  return (
    <>
      <div className=" dark:bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto h-[100vh] mt-4">
        <main className="p-6 w-full  bg-white  dark:bg-black dark:text-white">
          <Outlet />
        </main>
      </div>
      </div>
    </>
  );
}
