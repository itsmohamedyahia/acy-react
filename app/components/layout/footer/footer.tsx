export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white border-t tab:mb-[3.5rem] footer">
      <div className="flex items-center justify-between w-full max-w-screen-xl p-4 ">
        <span
          id="footer__text-container"
          className="text-sm text-gray-500 sm:text-center "
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
          className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0"
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
