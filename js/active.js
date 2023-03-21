const header = document.getElementById("navigation");
const lists = header.getElementsByClassName("list");

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}