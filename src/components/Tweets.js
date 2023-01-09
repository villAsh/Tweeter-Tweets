import profile from '../assets/Images/profile.svg'
import { BsEmojiSmile } from 'react-icons/bs'
import { useState } from 'react';
export default function Tweets(props) {

    const [text, setText] = useState({
        text: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.text === '') {
            alert("please enter tweet...")
        } else {
            console.log(text)
            props.attGetData(text)
            setText({ text: '' })
        }

    }
    return (
        <div className='p-4 flex flex-row items-start'>
            <img src={profile} alt="profile" className='w-[15vw] md:w-[5vw] mr-5' />
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    placeholder="What's happening ?"
                    value={text.text}
                    onChange={(e) => setText(e.target.value)}
                    rows={2} className="min-w-[70vw] md:min-w-[40vw]"/>
                <hr />
                <div className='flex justify-between items-center md:mt-4'>
                    <BsEmojiSmile className='text-3xl text-blue-500' />
                    <input type="submit" value="Tweet"   className='px-6 py-2 bg-[#60A5FA] rounded-full text-white font-semibold' 
                     />
                </div>
            </form>
        </div>
    );
}