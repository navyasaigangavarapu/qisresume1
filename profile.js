function loadJSON(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
  }
  loadJSON("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    //define a function
  indexed(data.index);
});
var cards=document.querySelector(".cards");
function indexed(details){
  for(i in details){
  var card=document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);
  var image=document.createElement("img");
  image.src=details[i].image;
  image.alt="image";
  card.appendChild(image);
  var name=document.createElement("h2");
  name.textContent=details[i].name;
  card.appendChild(name);
  var a=document.createElement("a");
  a.href="resume.html";
  card.appendChild(a);
var profile=document.createElement("profile");
profile.textContent=details[i].profile;
a.appendChild(profile);

}
}
