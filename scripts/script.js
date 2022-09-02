window.onload = () => {
    let photo = document.querySelectorAll(`.photo`)
    let block = document.querySelector(`.products`)
    let btn = document.querySelector(".btn")
    
    photo.forEach(pic => {
        pic.onmouseover = () => {
            pic.src = "../images/double.png"
        }
        pic.onmouseout = () => {
            pic.src = "../images/pngwing.com.png"
        }
    })

    block.classList.add('products-right')

    btn.onclick=()=>{
        block.classList.remove('products-right')
        block.classList.add('block_to_bottom')
        setTimeout(() => {
            window.location.href = "singlePage.html"
        }, 150);
    }

}






