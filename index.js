
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours =  hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    /*let tt = document.getElementById('clock');
    tt.textContent = timeString;*/

    document.getElementById('clock').textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);

