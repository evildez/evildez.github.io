var marker = document.getElementsByClassName("markC");

var gText = document.getElementsByClassName("gallery");
var nText = document.getElementsByClassName("navigation");

var links = document.getElementsByClassName("links");

var dropMenu = document.getElementsByClassName("drop-content");

var secret = document.getElementsByClassName("secret_mod");

var counter = 0;

var check;
var toggled = false;

function displayAdd() {
    dropMenu[0].classList.toggle("showClass");
}

window.onclick = function (event) {
    if (!event.target.matches('.buttonClicked')) {
        dropMenu[0].classList.remove("showClass");
    }
}

window.onload = function () {

    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })
        (navigator.userAgent || navigator.vendor || window.opera);
    document.getElementById('cursor').hidden = check;
}

function timingMark() {
    if (counter == 1) {
        for (let i = 0; i < marker.length; i++) {
            marker[i].style.color = "rgb(15, 15, 15, 1)";
        }
    } else if (counter == 0) {
        for (let i = 0; i < marker.length; i++) {
            marker[i].style.color = "rgb(255, 255, 255, 1)";
        }
    }
}

function changeBGColor() {

    if (counter == 0) {

        document.body.style.background = "rgb(15, 15, 15)";
        document.body.style.color = "white";

        for (let i = 0; i < marker.length; i++) {
            secret[i].style.color = "rgb(15, 15, 15)";
        }

        for (let i = 0; i < marker.length; i++) {
            marker[i].style.color = "rgb(15, 15, 15, 0)";
        }

        gText[0].style.color = "white";
        document.getElementById('gal').style.borderBottomColor = "white";
        nText[0].style.color = "white";
        nText[0].style.backgroundColor = "rgb(15, 15, 15, 0.75)";

        for (let j = 0; j < links.length; j++) {
            links[j].style.color = "white";
        }

        dropMenu[0].style.backgroundColor = "rgb(15, 15, 15, 0.75)";

        counter = counter + 1;

    } else if (counter == 1) {
        document.body.style.background = "white";
        document.body.style.color = "black";
        for (let i = 0; i < marker.length; i++) {
            marker[i].style.color = "rgb(255, 255, 255, 0)";
        }

        gText[0].style.color = "rgb(15, 15, 15, 1)";
        document.getElementById('gal').style.borderBottomColor = "rgb(15, 15, 15, 1)";
        nText[0].style.backgroundColor = "rgb(255, 255, 255, 0.7)";

        for (let j = 0; j < links.length; j++) {
            links[j].style.color = "rgb(15, 15, 15, 1)";
        }

        dropMenu[0].style.backgroundColor = "rgb(255, 255, 255, 0.75)";

        for (let j = 0; j < links.length; j++) {
            secret[j].style.color = "white";
        }

        counter = 0;
    }
}

function togglePlay() {
    var toggle = document.getElementById('buttonToggle');
    var audioPlay = document.getElementById('audio1');
    if (toggle.className == "fa fa-play") {
        toggle.className = "fa fa-pause";
        audioPlay.play();
    } else if (toggle.className == "fa fa-pause") {
        toggle.className = "fa fa-play";
        audioPlay.pause();
    }

}

function displayCursor(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('cursor').style.left = (x - 17.5) + "px";
    document.getElementById('cursor').style.top = (y - 17.5) + "px";
}

function volumeUp() {
    var audioPlay = document.getElementById('audio1');
    if (audioPlay.volume < 1.0) {
        audioPlay.volume += 0.1;
    }
}

function volumeDown() {
    var audioPlay = document.getElementById('audio1');
    if (audioPlay.volume > 0.0) {
        audioPlay.volume -= 0.1;
    }
}