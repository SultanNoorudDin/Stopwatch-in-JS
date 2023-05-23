const clock = document.querySelector(".clock")
let s = 0, min = 0, hr = 0;
let intId;

const start = () => {
    intId = setInterval(() => {
        
        if (s < 59) {
            s++;
        }
        else if (min >= 59) {
            min=0;
            hr++
        }
        else {
            s = 0;
            min++;
        }

         hr = String(hr).padStart(2,0);
         min = String(min).padStart(2,0);
         s = String(s).padStart(2,0);


        clock.innerText = (`${hr} : ${min}:${s}`)
    }, 1000);
}
const stop = () => {
    clearInterval(intId)
}