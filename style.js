const about = document.getElementById('about');
const works = document.getElementById('works');
const title = document.getElementById('title');

const about_path = "about.html";
const works_path = "works.html";

about.addEventListener('click', {file_path: about_path, handleEvent: fetchHTML});
works.addEventListener('click', {file_path: works_path, handleEvent: fetchHTML});
title.addEventListener('click', transTop);

function fetchHTML(e) {
    let xmlhr = new XMLHttpRequest();
    xmlhr.onreadystatechange = function() {
        if (xmlhr.readyState == 4 && xmlhr.status==200) {
            let content = xmlhr.responseText;
            document.getElementById("slide").setAttribute("style", "display: none;");
            document.getElementById("okinawa-scenery").setAttribute("style", "display: none;");
            document.getElementById("item-content").setAttribute("style", "display: block;");
            console.log(this.file_path);
            console.log(content);
            document.getElementById("item-content").innerHTML = content;
        }
    }
    xmlhr.open("GET", this.file_path, true);
    xmlhr.send(null);
}

function transTop() {
    document.getElementById("item-content").setAttribute("style", "display: none;");
    document.getElementById("slide").setAttribute("style", "display: block;");
    document.getElementById("okinawa-scenery").setAttribute("style", "display: block;");
}