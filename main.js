function init() {
    var centreCog = document.getElementsByClassName('centre');

    centreCog.style.width = "10%";
    centreCog.style.height = "10%";

    centreCog.style.left = window.innerWidth / 2 + "px";
    centreCog.style.top = window.innerHeight / 2 + "px";
}

var udGear = document.registerElement("UD-Gear");
document.body.appendChild(new udGear());
