// 获得输入的文字
function getInput()
{
    var a=document.getElementById("inputText").value;
    if(a.empty())
        return;
    return a;
}
function show()
{
    var a=document.getElementById("inputText").value;
    // alert(a);
    document.getElementById('wenyanwen').innerText = a;
    document.getElementById('xiandaiwen').innerText = a;
    return a;
}
function str_to_html(str) {
    var html = '';
    if (!!str) {
        for (var i = 0; i < str.length; i++) {
            html += '<span>' + str.charAt(i) + '</span>';
        }
    }
    document.getElementById('wenyanwen').innerText = html;
    document.getElementById('xiandaiwen').innerText = html;
}
function KeySearch()
{
    if (event.keyCode==13)  //回车键的键值为13
        show();
    return ;
}
