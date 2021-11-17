// quote logic
callquote();
function callquote()
{
    var arr = ["Every moment is a fresh beginning.", "Die with memories, not dreams.", "Aspire to inspire before we expire.", "What we think, we become.", "All limitations are self-imposed."];
    var  len=arr.length;
    var n=Math.random()*len;
    n=Math.floor(n);
    document.getElementById("quote").innerHTML = arr[n];
}
function countevent()
{
    var input;
    var done;
    var d,i;
    input=document.getElementsByTagName("li");
    done=document.getElementsByClassName("checked");
    i=input.length;
    d=done.length
    if(i==d)
    {
        // document.getElementById("donetask").style.display="none";
        document.getElementById("donetask").innerText="Target Achived";
        // document.getElementById("remevent").style.backgroundColor=" rgb(221, 178, 241)";
    }
    else
    {
        var con="Done Task "+done.length;
        document.getElementById("donetask").innerHTML=con;
        
    }
}
date();
function date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var month;
    if (mm == '01') {
        month = 'Jan';
    }
    else if (mm == '02') {
        month = 'Feb';
    }
    else if (mm == '03') {
        month = 'March';
    }
    else if (mm == '04') {
        month = 'April';
    }
    else if (mm == '05') {
        month = 'May';
    }
    else if (mm == '06') {
        month = 'June';
    }
    else if (mm == '07') {
        month = 'July';
    }
    else if (mm == '08') {
        month = 'Aug';
    }
    else if (mm == '09') {
        month = 'Sept';
    }
    else if (mm == '10') {
        month = 'Oct';
    }
    else if (mm == '11') {
        month = 'Nov';
    }
    else if (mm == '12') {
        month = 'Dec';
    }
    today = dd + '-' + month + '-' + yyyy;
    document.querySelector("#date").innerHTML=today;
    // alert(today);
}


day();
function day()
{
    var today = new Date();
    var d=today.getDay();
    // alert(d);
    if(d==0)
    {
        document.querySelector("#days").innerHTML='Sunday';    
    }
    else if(d==1)
    {
        document.querySelector("#days").innerHTML='Monday';
    }
    else if(d==2)
    {
        document.querySelector("#days").innerHTML='Tuesday';
    }
    else if(d==3)
    {
        document.querySelector("#days").innerHTML='Wednesday';
    }
    else if(d==4)
    {
        document.querySelector("#days").innerHTML='Thrusday';
    }
    else if(d==5)
    {
        document.querySelector("#days").innerHTML='Friday';
    }
    else if(d==6)
    {
        document.querySelector("#days").innerHTML='Saturday';
    }
}
function addtask()
{
        var fir=document.getElementById("add").value;
        if(fir=="")
        {
            alert("enter the task");
        }
        // var t=document.getElementById("text1");
        // t.value=fir;
        else
        {
            
            var x = document.createElement("LI");
            var t = document.createTextNode(fir);
            x.appendChild(t);
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            x.appendChild(span);
            document.getElementById("listeve").appendChild(x);
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
        document.getElementById("add").value="";
        countevent();
}
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') 
    {
    ev.target.classList.toggle('checked');
    countevent();
    }
    }, false);
function clearall()
{
    var close=document.getElementById("listeve");
    while(close.hasChildNodes()){
        root.removeChild('li');
    } 
}