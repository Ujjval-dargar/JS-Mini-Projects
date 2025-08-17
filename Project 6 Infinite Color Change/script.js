const start = document.querySelector("#start-btn");
const stop = document.querySelector("#stop-btn");


let intervalId;

start.addEventListener("click", 
    () => 
    {
        intervalId = setInterval(
            () => 
                {
                    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                    document.querySelector(".canva").style.backgroundColor = randomColor;
                }
            , 500
        );
        start.disabled = true;
        stop.disabled = false;
    }
);

stop.addEventListener("click", 
    () => 
    {
        clearInterval(intervalId);
        start.disabled = false;
        stop.disabled = true;
    }
);