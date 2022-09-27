function display(val){
    document.getElementById("id1").value+=val;
}
function remove()
{
    document.getElementById("id1").value=" ";
}
function solve()
{
    let x=document.getElementById("id1").value;
    let y=eval(x);
    document.getElementById("id1").value=y;

}