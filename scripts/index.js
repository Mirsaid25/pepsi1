window.onload = () =>{
    let block_right1 = document.querySelector(".block-right1")
    let block_right2 = document.querySelector(".block-right2")
    let block_right3 = document.querySelector(".block-right3")
    let btn = document.querySelector(".btn")

    block_right1.classList.add("block-right_to_top")
    setTimeout(() => {
        block_right2.classList.add("block-right_to_top")
        setTimeout(() => {
            block_right3.classList.add("block-right_to_top")
        }, 100);
    }, 150);
 
    btn.onclick=()=>{
        document.body.style.transform = "translateX(-100%)" 
        document.body.style.transition = ".9s ease" 
        setTimeout(() => {
            window.location.href = "../pages/single2.html"
        }, 400);
    }
}