// ajax in js
//asynchronus javascript and xml
//technique for creating dynamic and fast web pages

function loadData() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      document.getElementById("demo").innerHTML = this.responseText;
    } else if (this.readyState == 4 && this.status == 404) {
      document.getElementById("demo").innerHTML = "File Not Found!!!";
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // true - asynchronus mode
  xhttp.send();
}
