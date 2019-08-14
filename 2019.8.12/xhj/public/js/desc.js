let right=document.querySelector('.right');
let buy=document.querySelector('#buy');
let name1=document.getElementById('name1');
let pic1=document.getElementById('pic1');
let money1=document.getElementById('money1');
let size=['金秋黄 M','静蓝 L','浆果蓝 均码','暗红 L','苹果绿 均码'];
let size1=size[ran(0,4)]
//购买跳转购物车页面
right.onclick=function(){
    ajaxP('/v1/api/shopCarAll',{
            id:right.dataset.id,
            name:name1.innerText,
            pic1:pic1.src,
            money1:money1.innerText,
            size:size1
        },function(data){
            //判断购物车里是不是有重复的，没有添加
            if(JSON.parse(data).length===0){
                ajaxP('/v1/api/shopCar',{
                    id:right.dataset.id,
                    name:name1.innerText,
                    pic1:pic1.src,
                    money1:money1.innerText,
                    size:size1
                },function(data){
                    if(JSON.parse(data)===0){
                        location.href='/index_shop'
                    }
                })
            }else{
                //有则数量加1
                ajaxP('/v1/api/isChangenum1',{
                    isChange:JSON.parse(data)[0].num*1+1,
                    id:JSON.parse(data)[0].id,
                },function(data){
                    if(JSON.parse(data)===0){
                        location.href='/index_shop'                        
                    }
                })
            }
        })
    
}
buy.onclick=function(){
    location.href='/index_shop'
}
//随机数
function ran(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}