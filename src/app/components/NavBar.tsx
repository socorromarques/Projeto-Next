import Link from "next/link";
function NavBar() {
    return (
        <nav className='fixed top-0 w-full flex items-center py-2 p-x-8 justify-between z-50 bg-slate-800 text-gray-50'>
        <Link
        href='/' 
        className='uppercase font-bold text-ml h-12 flex items-center'
        >
          NEXT STORE
        </Link>
       </nav>
   ) 
}
export default NavBar;