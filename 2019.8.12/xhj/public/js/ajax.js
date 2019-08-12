
function ajaxP(url,data,callBack){
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
            callBack&&callBack(xhr.responseText)
        }
    }
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(data))
}
// function ajaxG(url,data,callBack){
//     let xhr=new XMLHttpRequest();
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState===4&&xhr.status===200){
//             callBack&&callBack(xhr.responseText)
//         }
//     }
//     xhr.open('GET',url+`/?id=${data.id}`)
//     xhr.send(null)
// }