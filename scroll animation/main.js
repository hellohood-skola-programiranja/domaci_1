const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBox);


function showBox (){
    const triger = (window.innerHeight / 5) * 4;

    boxes.forEach((box)=>{
        const topBox = box.getBoundingClientRect().top;

        if (topBox < triger){
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }

    })
}

showBox();