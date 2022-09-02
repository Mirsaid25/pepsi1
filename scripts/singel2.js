window.onload= () =>{
    document.body.style.transition = ".6s ease"
    document.body.style.transform = "translateX(0%)"
    
    let btn_in_head = document.querySelector(".btn_in_head")

    btn_in_head.onclick=()=>{
        window.location.href = "page1.html"
    }
}