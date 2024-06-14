import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';


export const Header = () => {
    // classes for nav links
    const activeClass="block py-2 px-3 text-white bg-blue-700 font-normal md:font-medium rounded md:border-0 md:bg-transparent md:text-blue-700 dark:text-white md:p-0";
    const inActiveClass = "block py-2 px-3 font-normal border-b text-gray-700 md:font-medium md:border-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    
    // for hidden nav menu when screen is minimized
    const [hidden,setHidden] = useState(true);

    // handling dark theme

    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("darkTheme")) || false);
    // using useEffect so function inside it will always execute whenever the value of darkTheme is changed
    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

        if(darkTheme){
            document.documentElement.classList.add("dark");    
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[darkTheme])

    // handling search
    const navigate = useNavigate();

    const handleSearchFormSubmit = (Event) => {
        Event.preventDefault();
        const searchQuery = Event.target.search.value;
        Event.target.reset();
        // navigate to search page with query
        navigate(`/search/movie?q=${searchQuery}`);    
    };

    return (
        <header>
            <nav className="border-b-2 bg-white border-gray-200 dark:bg-gray-900 px-2 sm:px-4 py-4 dark:border-b-1 dark:border-gray-900">
                <div className="flex flex-wrap items-center justify-between mx-auto">   

                    {/* logo and name */}   
                    <Link to="/movies" className="flex items-center rtl:space-x-reverse">
                        <img src={logo} className="h-8 sm:h-9 mr-2" alt="Cinemate Logo" />
                        <span className="mx-auto self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
                    </Link>

                    {/* search */}
                    <div className="flex md:order-2">
                        <div className="self-center">
                            <button onClick={() => setDarkTheme(!darkTheme)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                {
                                    darkTheme ? 
                                        (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) 
                                        : 
                                        (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>)
                                }
                            </button>
                        </div>
                        <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/200/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            {/* <span className="sr-only">Search</span> */}
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <form onSubmit={handleSearchFormSubmit}>
                                <input type="text" id="search-navbar" name='search' className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off' />
                            </form>
                        </div>
                        <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    {/* hidden nav */}
                    <div className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            </div>
                            <form onSubmit={handleSearchFormSubmit}>
                                <input type="text" id="search-navbar" name='search' className="block w-full p-2 pl-10 sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off' />
                            </form>
                        </div>

                        {/* nav items */}
                        <ul className="flex flex-col p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-0">
                            <li>
                            <NavLink to="/movies" className={({isActive}) => isActive ? activeClass : inActiveClass} aria-current="page" end>Home</NavLink>
                            </li>
                            <li>
                            <NavLink to="/movies/popular" className={({isActive}) => isActive ? activeClass : inActiveClass}>Popular</NavLink>
                            </li>
                            <li>
                            <NavLink to="/movies/top-rated" className={({isActive}) => isActive ? activeClass : inActiveClass}>Top Rated</NavLink>
                            </li>
                            <li>
                            <NavLink to="/movies/upcoming" className={({isActive}) => isActive ? activeClass : inActiveClass}>Upcoming</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
