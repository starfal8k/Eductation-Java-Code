window.onload = function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("log").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "Changelog_design.txt", true);
  xmlhttp.send();
};