function openMenu(){
    var links = document.querySelector(".links");
    links.style.right = 0;
}

function closeMenu(){
    var links = document.querySelector(".links");
    links.style.right = "-100%";
}

function mapsBudapest() {
    var map = document.querySelector("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86168.72714528914!2d18.90700431640624!3d47.552752000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d92f53a3b2b5%3A0xff5e46b8eed38b07!2sAudi%20Centrum%20Budapest!5e0!3m2!1shu!2shu!4v1670847106743!5m2!1shu!2shu";
}

function mapsGyőr() {
    var map = document.querySelector("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21480.986406479988!2d17.65053224961475!3d47.70144365012903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbf000a744e99%3A0x55a0afcde246cab6!2sAudi%20Hungaria%20Zrt.!5e0!3m2!1shu!2shu!4v1670847435201!5m2!1shu!2shu";
}

function mapsDebrecen() {
    var map = document.querySelector("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43097.71228130103!2d21.580643369119795!3d47.5365134166292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470e5c53e37723%3A0xe096a44bf946a578!2sDebrecen%20Aut%C3%B3!5e0!3m2!1shu!2shu!4v1670847696862!5m2!1shu!2shu";
}