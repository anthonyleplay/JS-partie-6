let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
languages.forEach(myFunction);

function myFunction(item){
  document.getElementById('myText').innerHTML += item +'<br>';
}
