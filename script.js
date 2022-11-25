function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function switchTheme() {
    var check = document.getElementById("navbar").style.backgroundColor;
    
    if (check === "#ddd") {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}