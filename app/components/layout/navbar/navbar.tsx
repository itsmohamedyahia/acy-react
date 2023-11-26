// template at end of the page =>  https://preline.co/examples/layouts-application.html
import NavNotifications from "./components/notifications";
import NavProfile from "./components/profile";

export default function Navbar() {
  return (
    <header
      id="navbar"
      className={`navbar py-2.5 border-b sticky top-0 left-0 right-0 z-10 bg-white h-[3.5rem] shadow`}
    >
      <nav
        id="navbar__nav"
        className="flex items-center w-full px-4 mx-auto basis-full sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-end w-full mr-auto sm:gap-x-3 sm:order-3">
          <div className="flex flex-row items-center justify-end gap-2">
            <NavNotifications />

            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <NavProfile />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
