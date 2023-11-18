import Image from "next/image";
import Link from "next/link";
const GroupCard = ({name , link , imageUrl}) => {
    return ( 
        <div className='flex flex-col gap-2 px-1 sm:px-4 py-4 border items-center  bg-white rounded-xl shadow-lg w-44 sm:w-64'>
          <Image src={imageUrl} width={150} height={150} alt="random image" className='w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-2xl shadow-slate-700'  />
          <h2 className='text-lg sm:text-xl font-bold mt-5'>{name}</h2>
          <p>#</p>
          <Link href={link}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 sm:px-4 rounded transition-all duration-300'
          >الانضمام</Link>
        </div>
   );
}
 
export default GroupCard;