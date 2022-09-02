window.onload = () => {
    let startBTN = document.querySelector('.play')
    let pepsiBottle = document.querySelector('.pepsi-bg')
    let contBottom = document.querySelector('.cont-bottom')
    let textBox = document.querySelector('.box')


    console.log(pepsiBottle);

    startBTN.onclick = () => {
        pepsiBottle.classList.add('bottle-down')
        setTimeout(() => {
            textBox.classList.add('bottle-down')
            setTimeout(() => {
                contBottom.classList.add('cont-down')
                setTimeout(() => {
                    window.location.href = "index.html"
                }, 300);

            }, 150);

        }, 170);
    }



}


