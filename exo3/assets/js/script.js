let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];

let idList = document.getElementById("list");

var text = "";
var i;
for (i = 0; i < languages.length; i++) {

    text += i+1 + " : " + languages[i] + "<br>";

}
idList.innerHTML = text;