convertTimeToBinary=()=>{    
    var timeString = '221435';
    return timeString.split('').map((time) => parseInt(time, 10).toString(2).padStart(4, '0'));
}