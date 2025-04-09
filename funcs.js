let isopen = false;

function funcmenu() {

    document.getElementById("menuicon").classList.toggle("change");
    isopen = !isopen;

    if (isopen) {
        document.getElementById("menu").style.width = "30%";
        console.log("меню открылось");
    }
    else {
        document.getElementById("menu").style.width = "0%";
        console.log("меню закрылось");
    }
}