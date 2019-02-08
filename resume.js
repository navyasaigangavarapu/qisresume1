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
    personal(data.PersonalDetails);
    career(data.careerobject);
    education(data.education);
    technical(data.technicalskills);

  });
  var main=document.querySelector(".main");
  function personal(details){
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

  var left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);

  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);
  var myname=document.createElement("h2");
  myname.textContent=details.myname;
  left1.appendChild(myname);

  var designation=document.createElement("h3");
  designation.textContent=details.designation;
  left1.appendChild(designation);

  var left2=document.createElement("div");
  left.classList.add("left2");
  left.appendChild(left2);

  var fathername=document.createElement("h3");
  fathername.textContent=details.fname;
  left2.appendChild(fathername);

  var gmail=document.createElement("h3");
  gmail.textContent=details.gmail;
  left2.appendChild(gmail);

  var phoneno=document.createElement("h3");
  phoneno.textContent=details.phoneno;
  left2.appendChild(phoneno);

  var address=document.createElement("h3");
  address.textContent=details.address;
  left2.appendChild(address);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);

    function career(details1){

      var Careerobject=document.createElement("div");
      Careerobject.classList.add("Careerobject");
      right.appendChild(Careerobject);

      var obj=document.createElement("h4");
      obj.textContent=details1.obj;
      Careerobject.appendChild(obj);
      Careerobject.appendChild(document.createElement("hr"));


      var co=document.createElement("p");
      co.textContent=details1.co;
      Careerobject.appendChild(co);

    }
    function education(edu) {
var educate=document.createElement("div");
  var h3=document.createElement("h3");
  h3.textContent="Educational Qualification:";

  right.appendChild(educate);
  educate.appendChild(h3);
  educate.appendChild(document.createElement("hr"));

  for (i in edu) {

    var h1=document.createElement("h4");
    h1.textContent=edu[i].qualifications;
    educate.appendChild(h1);

    var inst=document.createElement("p");
    inst.textContent=edu[i].inst;
    educate.appendChild(inst);
}
}
function technical(ts){
  var h2=document.createElement("h2");
  h2.textContent="technical skills:";
  right.appendChild(h2);
  h2.appendChild(document.createElement("hr"));

  for(i in ts)
  {
    var technicalskills=document.createElement("h4");
    technicalskills.classList.add("Technicalskills");
    right.appendChild(technicalskills);


    var name=document.createElement("h3");
    name.textContent=ts[i].name;
    technicalskills.appendChild(name);


    var org=document.createElement("pre");
    org.textContent=ts[i].org;
    technicalskills.appendChild(org);
  }
  }
