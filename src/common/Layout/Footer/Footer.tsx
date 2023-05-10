export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t shadow dark:bg-gray-800">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
        <span
          id="footer__text-container"
          className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >
          © 2023{" "}
          <a href="#" className="hover:underline">
            Acy LLC
          </a>
          <span className="ml-3">All Rights Reserved.</span>
        </span>
        {/* ----------Footer Links----------- */}
        <ul
          id="footer__nav"
          className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        {/* ----------End of Footer Links----------- */}
      </div>
    </footer>
  );
}