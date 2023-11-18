import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import GroupCard from './components/GroupCard'


export default async function Home() {

  const response = await fetch('https://groups.ahmedghaleb.com/api/groups',
  {method: "POST"} , { cache: 'no-store' })
  const allGroups = await response.json()
  console.log(allGroups)
  return (
    
    <div className='container max-w-6xl mx-auto min-h-screen mt-16'>

      <div className='flex flex-wrap justify-around  gap-4 p-1 sm:p-4 '>
        {
          allGroups.map((group) => (
            <GroupCard key={group.id} name={group.name} link={group.link} imageUrl={group.imageUrl} />
          ))
        }
         
      </div>
      <div className='flex justify-center gap-4 p-1 sm:p-4'>
      <Link 
      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
      href='/2' >التالي</Link>
      </div>
    </div>
  )
}
