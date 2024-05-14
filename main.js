const clock = document.querySelector('.clock');


const tick = () => {


    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const html = `
    
    <span>${hours}</span> : 
    <span>${minutes}</span> : 
    <span>${seconds}</span>

    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);




// stuff from last lesson of the section re: datefns.org
// const now = new Date();

// // console.log(dateFns.isToday(now));


// console.log(dateFns.format(now, 'YYYY'));

