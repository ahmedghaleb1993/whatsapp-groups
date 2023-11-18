import Link from "next/link"

const Footer = () => {
    return ( <footer className="flex justify-between items-center bg-[#053966] p-5 text-white">
        <p> copyright &copy; 2023</p>
        <Link href="/privacy-policy" className="text-white hover:text-gray-400 ">سياسة الخصوصية</Link>
    </footer> );
}
 
export default Footer;