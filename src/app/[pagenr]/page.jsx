import axios from "axios"
import GroupCard from "../components/GroupCard"
import Link from "next/link"
const NextPage = async ({ params }) => {
    const PageNumber = params.pagenr
    //console.log(PageNumber)

    const response = await axios.post('https://groups.ahmedghaleb.com/api/groups',{
        page:PageNumber
    })
    const allGroups = response.data
    //console.log(allGroups.length)


    return ( <div className='container max-w-6xl mx-auto h-[calc(100vh-135px)] pt-16'>

    <div className='flex flex-wrap justify-around gap-2 sm:gap-4 p-1 sm:p-4 '>
      {
        allGroups.map((group) => (
          <GroupCard key={group.id} name={group.name} link={group.link} imageUrl={group.imageUrl} />
        ))
      }
       
    </div>
    <div className="flex justify-center gap-4 p-1 sm:p-4 ">
      {
        allGroups.length < 16 ? (
          <Link 
        className="bg-[#053966] hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        href={'/'} >الرئيسية</Link>
        ) : (
          <Link 
        className="bg-[#053966] hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        href={`/${parseInt(PageNumber) + 1}`} >... المزيد</Link>
        )
      }
        
    </div>
  </div> );
}
 
export default NextPage;