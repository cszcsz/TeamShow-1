window.onload = function () {
  var li = document.getElementsByTagName("li");
  console.log(li.length);
  for(var i = 0; i< li.length;i++){
    console.log(li[i].className);
    li[i].onclick = function () {
      for(var j=0;j<li.length;j++){
        li[j].className ="";
      }
      this.className +=" active";
    }
  }
}
