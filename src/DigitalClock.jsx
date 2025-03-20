import React , {useState , useEffect} from "react";

const DigitalClock = () =>{

const [time,setTime] = useState(new Date());

useEffect(()=> {
    const intervalId = setInterval(() =>{
        setTime(new Date())
    },1000)

    return () =>{
        clearInterval(intervalId)
    }
}, [])

const formatTime =() =>{

    let hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const meridium = hour >= 12 ? 'PM' : 'AM'   

    hour = hour % 12 || 12 ;

    return `${padZero(hour)}:${padZero(minute)}:${padZero(seconds)} ${meridium}`;
}

 const padZero = (number) =>{
    return (number < 10 ? '0' : '') + number
 }


    return(
        <div className="Clock-container">
            <img src="./assets/image.png" alt="" />

            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
    
}



export default DigitalClock