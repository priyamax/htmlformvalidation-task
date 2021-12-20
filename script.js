let firstname = document.getElementById("validationDefault01");
let age = document.getElementById("validationDefault03");
let email = document.getElementById("validationDefault04");
let password= document.getElementById("validationDefault05");
let button = document.getElementById("btn1");
let jsform = document.getElementById("form1");
function username(name){
    let pattern = /^[a-zA-Z]+$/;
    if(pattern.test(name))
    {
        return 1;
    }
    else{
        return 0;
    }
}
function userage(ag){
  if((ag>=1)&&(ag<=99))
  return 1;
  else
  return 0;
}
function useremail(mail){
    let pattern = /^([a-zA-Z0-9_.])+\@([a-z])+\.([a-z])+$/;
    if(pattern.test(mail))
    {
        return 1;
    }
    else{
        return 0;
    }
}
function userpassword(passwrd){
    errors = [];
    if (passwrd.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (passwrd.length > 15) {
        errors.push("Your password must be 15 characters length");
    }
    if (passwrd.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one small letter."); 
    }
    if (passwrd.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one capital letter."); 
    }
    if (passwrd.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (passwrd.search(/[@#!$%^&*]/) < 0) {
        errors.push("Your password must contain at least one special character.");
    }
    if (errors.length > 0) {
        return 0;
    }
    return 1;
}
button.addEventListener('click',(ev)=>{
    ev.preventDefault();
    var n = username(firstname.value);
    var a = userage(age.value);
    var e = useremail(email.value);
    var p = userpassword(password.value);
    if(n===0 || a===0 || e===0 || p===0 )
    {
    if(n===0)
    {
        alert("invalid name");
    } 
    if(a===0)
    {
        alert("invalid age");
       
    }
    if(e===0)
    {
        alert("invalid email");
       
    }
    if(p===0)
    {
        alert(errors.join("\n"));
       
    }
}
else
    {  
       var dv1 = document.createElement("div");
       dv1.className="text-center p-5 divcls1";
       dv1.id="divid1";
       jsform.appendChild(dv1);
       var para1 = document.createElement('p');
       para1.class="pcls1";
       para1.id="pid1";
       dv1.appendChild(para1);
       document.getElementById("pid1").innerHTML="<center> <h2>REGISTRATION SUCCESSFULL<h2> </center>";

       var dv2 = document.createElement("div");
       dv2.className="col-md-4 pt-3  divcls2";
       dv2.id=" div2";
       jsform.appendChild(dv2);
       var label1 = document.createElement('label');
       label1.className="me-4 form-label labelcls1";
       label1.id="validationDefault011"
       label1.innerHTML='<b>Name:</b>';
       dv2.appendChild(label1);
       var label11 = document.createElement('label');
       label11.className="form-label labelcls11";
       label11.innerText=firstname.value;
       dv2.appendChild(label11);
      
        var dv3 = document.createElement("div");
        dv3.className="col-md-4 pt-3 divcls3";
        dv3.id="div3";
        jsform.appendChild(dv3);
        var label2 = document.createElement('label');
        label2.className="me-4 pe-3 form-label labelcls2";
        label2.id="validationDefault012";
        label2.innerHTML="<b> Age: </b>";
        dv3.appendChild(label2);
        var label21 = document.createElement('label');
        label21.className="form-label labelcls11";
        label21.innerText=age.value;
        dv3.appendChild(label21);
   
        var dv4 = document.createElement("div");
        dv4.className="col-md-4 pt-3 divcls4";
        dv4.id="div4";
        jsform.appendChild(dv4);
        var label3 = document.createElement('label');
        label3.className="me-3 form-label labelcls3";
        label3.id="validationDefault013";
        label3.innerHTML="<b> Email: </b>";
        dv4.appendChild(label3);
        var label31 = document.createElement('label');
        label31.className="form-label labelcls11";
        label31.innerText=email.value;
        dv4.appendChild(label31);
   
        var dv5= document.createElement("div");
        dv5.className="col-md-4 pt-3 divcls5";
        dv5.id="div5";
        jsform.appendChild(dv5);
        var label4 = document.createElement('label');
        label4.className="me-3  form-label labelcls4";
        label4.id="validationDefault014"
        label4.innerHTML="<b>Password:</b>";
        dv5.appendChild(label4);
        var label41 = document.createElement('label');
        label41.className="form-label labelcls11";
        label41.innerText=password.value;
        dv5.appendChild(label41);
    
    }
 })


