import { BsStars } from 'react-icons/bs';
import Tweets from './Tweets';
import MyTweets from './MyTweets';
import { useState } from 'react';

export default function MainSection() {
   // const STORAGE = 'tweets'
    const [tweets,setTweets] = useState([
        {
            id: 11,
            text: 'Tumhe jo mene dekha,Tumhe jo mene jana jo hosh tha wo to gayaaaa....'
        },
        {
            id:12,
            text:"a Man is made by his belief's, As he believes so he becomes"
        }
    ])

//...........WE CAN STORE DATA IN LOCAL STORAGE USING FOLLOWING LINES OF CODE.......... 
//    useEffect(()=>{
//     const storedTweets = JSON.parse(localStorage.getItem(STORAGE));
//     if(storedTweets) 
//     {
//         setTweets(storedTweets)
//     }
//    },[]) 

 //TO set tweets on local storage....   
//  useEffect(()=>{
//     localStorage.setItem(STORAGE,JSON.stringify(tweets))
//  },[tweets])

//......................................................................................

//   console.log(tweets)
   const getData = (text) =>{
    //console.log(text)
    setTweets([{id:Math.floor(Math.random()* 100),text},...tweets])
    //console.log(tweets)
    }
    const removeData = (dataID) =>{
      const newTweets = tweets.filter(did => did.id !== dataID)
      setTweets(newTweets)
    }
    
    const RenderMyTweets = tweets.map((data) =>{
        //    console.log(data)
            return <MyTweets 
            attData={data} 
            key={data.id} 
            attRemoveData={()=> removeData(data.id)} />
           })
    
    return (
        <div className="border-x-2 border-gray-200 col-span-2 w-screen md:w-[50vw]">
            <div className="flex justify-between p-5">
                <h1 className='text-2xl font-semibold'>Home</h1>
                <BsStars className='text-4xl font-bold' />
            </div>
            <hr />
            <Tweets attGetData={getData}  />
            <hr />
            {/* <MyTweets tweets={tweet}/> */}
            {RenderMyTweets}
        <hr />
        </div>
    );
}