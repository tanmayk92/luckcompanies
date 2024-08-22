import Logo from '../../assets/luckcompany-logo.png'
import IntervisionLogo from '../../assets/intervision_logo.png'

function Header() {
  return (
    <nav className="border-b border-gray-200 bg-gray-50 bg-gray-700 border-gray-600">
      <div className="flex flex-wrap items-center justify-between pl-9 pr-9 pt-2 pb-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Luck Companies Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-full h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <a href="#" className="flex space-x-3 rtl:space-x-reverse">
            <img
              src={IntervisionLogo}
              className="h-10 w-full"
              alt="Intervision Logo"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
