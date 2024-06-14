import { Link } from "react-router-dom"
import { useCustomTitle } from "../hooks/useCustomTitle";
import pagenotfound from '../assets/pagenotfound.jpg';

export const PageNotFound = ({title}) => {

  // using useCustomTitle hook to set the title of the page
  useCustomTitle(title);

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center">
          <div className=" flex flex-col items-center">
            <p className="text-6xl m-3 p-4 text-gray-700 dark:text-white">404, OOPS!</p>
            <div className="max-w-sm sm:max-w-lg">
              <img className="rounded" src={pagenotfound} alt="404 page not found" />
            </div>
          </div>
          <div className="self-center m-10">
            <Link to={"/"}>
              <button className="text-white text-xl py-1 px-5 rounded-md bg-gray-800 dark:bg-gradient-to-br from-blue-500 to-blue-800  hover:bg-gradient-to-bl">Back to Home</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
