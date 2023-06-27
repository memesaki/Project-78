var arr=[];
function submit(){ 
var display=[];
for( j=1;j<=4;j++){
    var name=document.getElementById("name_of_the_student_"+j).value;
    console.log(name);
    arr.push(name)
}
var len=arr.length;
for(i=0;1<len;1++){
    display.push("<h4>name- "+arr[i]+"</h4>")

}
document.getElementById("display_name_with_commas").innerHTML=display;
var removecomma=display.join( " " );
document.getElementById("display_name_without_commas").innerHTML=removecomma;
}
