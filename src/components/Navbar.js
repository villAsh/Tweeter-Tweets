// import { Routes,Route,NavLink } from "react-router-dom";
import Navbarlogo from './Navbarlogo';
import  {SiTwitter} from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import {AiOutlineBell} from 'react-icons/ai'
import {BiHash} from 'react-icons/bi'
import {BiMessageDots} from 'react-icons/bi'
import {BiBookmark} from 'react-icons/bi'
import {SlNotebook} from 'react-icons/sl'
import {BiUser} from 'react-icons/bi'
import {CiCircleMore} from 'react-icons/ci'
import React from 'react';

//JSON data for Navbar
const logos = [
    {
        id: 1,
        logoName: <AiFillHome className="mr-4"/>,
        text:'Home'
    },
    {
        id: 2,
        logoName: <BiHash className="mr-4"/> ,
        text:'Explore'
    },
    {
        id: 3,
        logoName: <AiOutlineBell className="mr-4"/> ,
        text:'Notification'
    },
    {
        id: 4,
        logoName: <BiMessageDots className="mr-4"/> ,
        text:'Messages'
    },
    {
        id: 5,
        logoName: <BiBookmark className="mr-4"/> ,
        text:'Bookmarks'
    },
    {
        id: 6,
        logoName: <SlNotebook className="mr-4"/> ,
        text:'Lists'
    },
    {
        id: 7,
        logoName: <BiUser className="mr-4"/> ,
        text:'Profile'
    },
    {
        id: 8,
        logoName: <CiCircleMore className="mr-4"/> ,
        text:'More'
    },
    
    
]

 function Navbar(){ 

    //Function to Reuse the Navbarlogo component....
    const sidebar = logos.map((items) =>{
        //console.log(data)
        return <Navbarlogo item={items} key={items.id}/>
    }) 
    return(
        <div className='hidden md:flex md:flex-col md:justify-around md:items-center md:h-screen'>
            <div className='text-5xl bg-white text-[#00acee] mt-8 items-start p-4 rounded-[50px] hover:bg-blue-100'>
                <SiTwitter />
            </div>
            <div className='mt-5 text-2xl space-y-6 text-start text-gray-600'>
            
            {/*Re-Usable Component function */}
            { sidebar }
            {/* Hard Code */}
                {/* <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>Home</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>Explore</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>Notification</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>Messages</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>Bookmarks</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>List</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>profiles</h1>
                </div>
                <div className="flex justify-center items-center">
                    <AiFillHome className="mr-4"/><h1>Bookmarks</h1>
                </div> */}

            </div>
            <div className='md:mt-5'>
                <button className='px-20 py-2 bg-[#60A5FA] rounded-full text-xl font-semibold text-white'>
                    Tweet
                </button>
            </div>
        </div>
    );
}

export default React.memo(Navbar)