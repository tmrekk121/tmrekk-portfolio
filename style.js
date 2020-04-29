const about = document.getElementById('about');

const about_path = "about.html";
const works_path = "works.html";

about.addEventListener('click', {file_path: about_path, handleEvent: fetchHTML});

function fetchHTML(e) {
    var xmlhr = new XMLHttpRequest();
    xmlhr.onreadystatechange = function() {
        if (xmlhr.readyState == 4 && xmlhr.status==200) {
            var content = xmlhr.responseText;
            // document.getElementById("slide").setAttribute("style", "display: none;");
            console.log(this.file_path);
            console.log(content);
            document.getElementById("item-content").innerHTML = content;
        }
    }
    xmlhr.open("GET", this.file_path, true);
    xmlhr.send(null);
}