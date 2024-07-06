import logo from './../assets/Image/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
<nav className="bg-gray-500">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex items-center">
        <div className="flex-shrink-0">
        <img className="h-8 w-8" src={logo} alt=""></img>
        
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            
            <Link to='ViewAccount' className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">View Account</Link>
            <Link to='AddAccount' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Add Account</Link>
            
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center md:ml-6">
        <div className="relative ml-3">
            <div>
              <button type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
       
        <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-300 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>


  <div className="md:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
     
      <a href="#" className="bg-gray-300 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">View Account</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Add Account</a>
    </div>
    <div className="border-t border-gray-700 pb-3 pt-4">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
        </div>
        
        
      </div>
          </div>
  </div>
</nav>

<header className="bg-white shadow">
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Password Manager</h1>
  </div>
</header>
    </>
  )
}

export default Navbar
