convertTimeToBinary=(timeString)=>{  
    var binary = timeString.split('').map((time) => parseInt(time, 10).toString(2).padStart(4, '0'));
    console.log(binary);
}

getCurrentTime=()=>{
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}${minutes}${seconds}`;
}

convertTimeToBinary(getCurrentTime());