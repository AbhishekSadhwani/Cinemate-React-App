import { Link } from "react-router-dom";

export const Footer = () => {
  
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto p-4 sm:p-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.instagram.com/abhisadhwani1304/" className="hover:underline me-4 md:me-6" target="_blank" rel="noreferrer">Instagram</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/abhishek-sadhwani-50a497167/" className="hover:underline me-4 md:me-6" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li>
                <a href="https://x.com/abhi_0413" className="hover:underline me-4 md:me-6" target="_blank" rel="noreferrer">Twitter</a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCrIG3L0KtpqnVDKggp4ISqA" className="hover:underline" target="_blank" rel="noreferrer">YouTube</a>
            </li>
        </ul>
      </div>
    </footer>
  );
}
