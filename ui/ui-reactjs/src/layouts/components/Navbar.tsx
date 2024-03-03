import { useEffect } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
// const navigation = [
//   {
//     title: "Dashboard",
//     link: "/",
//   },
//   {
//     title: "Account",
//     link: "/account",
//   },
// ];

export default function Navbar() {

  useEffect(() => {
    const earlierTheme = localStorage.getItem("theme");
    if (earlierTheme)
      document.getElementById("div_main")?.classList.add(earlierTheme ?? "");
  }, []);

  function toggleTheme() {
    const earlierTheme = localStorage.getItem("theme");
    const toggledTheme = earlierTheme == "dark" ? "light" : "dark";
    if (earlierTheme)
      document.getElementById("div_main")?.classList.remove(earlierTheme ?? "");
    if (toggledTheme)
      document.getElementById("div_main")?.classList.add(toggledTheme);
    localStorage.setItem("theme", toggledTheme);
  }

  return (
    <>
      <nav className="bg-white border-b dark:bg-black">
        <div className="h-16 w-full px-6 mx-auto flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="flex gap-6">
              <Link
                className="text-sm md:text-lg font-bold  text-gray-800 dark:text-white"
                to={'/'}
              >
                LC-FileStorage
              </Link>
            </div>
          </div>
          <div>
            <a
              className="text-sm md:text-lg font-bold  text-gray-800"
              href="#"
              onClick={() => toggleTheme()}
            >
              <WbSunnyOutlinedIcon className="dark:text-white" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
