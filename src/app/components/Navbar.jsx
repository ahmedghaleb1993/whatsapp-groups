import Link from "next/link";
const Navbar = () => {
    return ( 
    <nav className=" w-full px-7 sm:px-16 py-4 flex justify-between flex-row-reverse gap-4 items-center  bg-[#0288D1]">
        <Link href="/" ><h1 className="text-3xl font-semibold text-white" >
            قروبات
        </h1>
        </Link>
            <Link 
            href="/new"
            className="bg-green-500 hover:bg-green-700 text-white text-2xl font-bold py-2 px-4 rounded transition-all duration-300"
            >Add a new group</Link>
        
    </nav> );
}
 
export default Navbar;