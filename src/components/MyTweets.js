import { AiOutlineMessage, AiFillHeart } from 'react-icons/ai';
import { BiTrash, BiShareAlt } from 'react-icons/bi';
import {GrUpdate} from 'react-icons/gr'
import profile from '../assets/Images/profile.svg'
import moment from 'moment/moment';
import { useState } from 'react';


export default function MyTweets(props) {
    const date = moment().format("MMM D H:MM A ");
    
    const [active,setActive] = useState(false)
    // const currentRef = useRef(props.attData.text)
    // console.log('currentRef = ',currentRef)


    function fillRed(){
        setActive(!active);
    }
    return (
        <>
        <div className='flex mb-8' >
            <div className='p-4 items-start flex-[0.1]'>
                <img src={profile} alt="profile" className='w-[15vw] md:w-[5vw]' />
            </div>
            <div className='md:mt-4 flex-[0.9] font-serif'>
                <div className='profileDiv flex justify-between items-center'>
                    <div className='inline-flex '>
                        <h1 className='text-xl font-medium mr-2'>Anonymous</h1>
                        <h2 className='text-sm font-medium text-gray-500 mr-3 hidden md:inline-block'>@anonymous</h2> -
                        <h3 className='text-xs md:text-base font-medium ml-3'>{date}</h3>
                    </div>
                    <h3 className='text-3xl font-bold mr-5 mb-4'>&middot;&middot;&middot;</h3>
                </div>
                <div className='mt-2'>
                    <p className='text-start text-lg '>{props.attData.text}</p>
                </div>
                <div className='mt-5 mr-5 text-2xl flex justify-between'>
                    <button ><AiOutlineMessage  /></button>
                    <button  onClick={props.attRemoveData}> <BiTrash /></button>
                    <button onClick={fillRed} ><AiFillHeart className='' style={{fill: active ? 'red' : 'black'}}/></button>
                    <button ><BiShareAlt /></button>
                    <button><GrUpdate /></button>
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}