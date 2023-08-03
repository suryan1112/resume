var arr=document.querySelectorAll("#nav-bar a");
for(let i=0;i<arr.length;i++){
    arr[i].addEventListener('click',function(event){
        var min_top;
        if(i>4) min_top=400
        else min_top=20
        event.preventDefault();
        var element=document.getElementById(this.getAttribute("href").substring(1));
        // console.log(element)
        function scroll(){
            var target=element.getBoundingClientRect();
        if(target.top<=min_top){
            clearInterval(id);
        }
        window.scrollBy(0,20);
        }
        var id=setInterval(scroll,1)
    })
}
var container=document.querySelector("#skill .subjects");
var objects=document.querySelectorAll("#skill .outer>div");
var animationdone=false;
window.addEventListener('scroll',checkanimation)
var arr,j=0,t=0;

function initialize(){
    for(let i of objects){
        // console.log(i.style.width.replace(i.style.width[i.style.width.length-1],""))
        arr[j]=i.style.width; j++;
        i.style.width=0+'%';
    }
}
function fillbars(){
    for(let i of objects){
        // console.log("asdf")
        var attribute=50
        var initial=0;
        t++;
        var id=setInterval(function scroll(){
            if(initial>=attribute){clearInterval(id); return;}
            initial+=.2
            i.style.width=initial+'%';
        },10);
    }
}
function checkanimation(){
    var target=container.getBoundingClientRect();
    var isin=false;
    if(target.top<window.innerHeight || target.top>(-1*target.height)) isin=true;
    
if((target.top<window.innerHeight || target.top>(-1*target.height)) && !animationdone){
    animationdone=true;
     fillbars();
}else if(target.top>window.innerHeight || target.top<(-1*target.height)) {
    animationdone=false;
    initialize();
}
// window.addEventListener('scroll',checkanimation())
// else if(target.bottom>window.innerHeight){
//     initialize();
// }
}
    // var scrollid=setInterval(function(){
    //     window.scrollBy(0,10)
    //     if(document.getElementById("skill").getBoundingClientRect().top<=50)
    //      clearInterval(scrollid);
    // },1)   
 
// if(window.pageYOffset>=1500) clearInterval(scrollid);
