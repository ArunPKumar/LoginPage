function user(){
    alert("This page was created by me")
}

var myname = {
    firstname :"Arun",
    lastname :"Kumar",
    Speed : "slowly",
    fullname = function full(){
        return this.firstname + "" + this.lastname + "" + "is learning" + this.speed;
    }
}

var terms = ["Upper case not allowed","Special Characters not allowed","Only lowercase and numbers are allowed"]
termlen = terms.length;

text = "<ul>";
for (i = 0;i < termlen;i++) {
    text += "<li>" + terms[i] + "</li>";     
}
text += "<ul>";
document.getElementById("terms").innerHTML = text;

