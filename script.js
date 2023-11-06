// We need to make sure the time in Hours Minutes and Seconds move automatically.
//We need to make sure that its in real time as well.
//We need to make sure that they auto update, each time the project is opened.

//We are trying to call the constant current, which is set to new date,
//So we need to assign current to hours, minutes... and then and then get the time in hours minutes and seconds.
//Dont forget to Convert to string and pad it, just so if it less than 2 characters long it can be padded with zero
function updateClock() {

    const current = new Date();

    const hours = current.getHours().toString().padStart(2, '0');
    const minutes = current.getMinutes().toString().padStart(2, '0');
    const seconds = current.getSeconds().toString().padStart(2, '0');

    //This is to grab teh ID and set the new date and time to hours, min and seconds. 
    document.getElementById('Hrs').textContent = hours;
    document.getElementById('Mins').textContent = minutes;
    document.getElementById('Sec').textContent = seconds;
}
 

setInterval(updateClock, 1000);

updateClock();
