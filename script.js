let shet = 0

function menu() {
    if(shet == 0){
        let menu = document.getElementById("menu")
        menu.style.marginLeft = "-55%"
        shet = 1
    }
    else if(shet == 1){
        let menu = document.getElementById("menu")
        menu.style.marginLeft = "-10%"
        shet = 0
    }
}