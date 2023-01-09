import {BsSearch} from 'react-icons/bs'
import React from 'react'
 function Trends(){
    //Static JSON data for Trends section
    const trends_data = [
        {
            id: 1,
            trend: '#ReactJs',
            num: '3M tweets'
        },
        {
            id: 2,
            trend: '#JavaScript',
            num: '2M tweets'
        },
        {
            id: 3,
            trend: '#GOWRagnarok',
            num: '1M tweets'
        },
    ]
    //Mapping over trends_data
    const trends_list = trends_data.map((data)=>{
        return  <li key={data.id}>
                <p className='text-gray-400 text-sm'>{data.id}. Trending</p>
                <h1 className='text-xl font-semibold font-sans'>{data.trend}</h1>
                <p className='text-gray-400 text-sm'>{data.num}</p>
                </li>
    })
    return(
        <div className='hidden md:block md:ml-2'>
            <div className="flex flex-col p-4">
                <form>
                    <BsSearch className='inline-block mr-4 absolute z-10 mt-3 ml-3 text-gray-600'/>
                    <input type="text" placeholder="Search Twitter" className='relative z-0 pl-10 p-2 rounded-full bg-gray-100 ' />
                </form>
                <div className='bg-gray-100 mt-3 min-w-[20] max-w-[17vw] rounded-xl p-3 max-h-[100vh] min-h-[50vh]'>
                    <div className=''>
                        <h1 className='font-bold text-xl font-sans text-gray-700'>World Trends</h1>
                       <ul className='list-none mt-5 space-y-7'>
                            {trends_list}
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Trends);