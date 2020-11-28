function toggleNav() {
    var element = document.getElementById("mySidenav");
    var menu = document.getElementById("menu");
    console.log(element.classList);

    if (element.classList.contains("openSidenav")) {
        element.classList.remove("openSidenav");
        document.getElementById("logo").style.paddingLeft = "5px";
        menu.classList.add("hideMenu");
        element.classList.add("closedSidenav");
    } else {
        element.classList.add("openSidenav");
        document.getElementById("logo").style.paddingLeft = "60px";
        element.classList.remove("closedSidenav");
        menu.classList.remove("hideMenu");
    }
    

}