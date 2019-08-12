window.onload = function () {
    var bscroll_leftY = new BScroll('.left_menu-wrap', {
        scrollY: true,
        click:true,
    })
    var bscroll_rightY = new BScroll('.right_bscroll_wrap', {
        scrollY: true,
        click:true,
        probeType:3 
    });

    //切换table
    let tabs=document.querySelectorAll('.tab');
    let lis=document.querySelectorAll('#section_left_ul li');
    let bike_content=document.getElementsByClassName('bike_content');
    for(var i=0;i<lis.length;i++){
        (function(k){
            lis[k].onclick=function(){
                for(var j=0;j<lis.length;j++){
                    lis[j].classList.remove('liactive');
                    tabs[j].classList.remove('active_p');
                }
                lis[k].classList.add('liactive')
                tabs[k].classList.add('active_p')
            }
        })(i)
    }
    for(var i=0;i<bike_content.length;i++){
        (function(k){
            bike_content[k].onclick=function(){
                // ajaxG('/shopdesc',{
                //     id:this.dataset.id
                // },function(data){
                //     console.log(data)
                // })
                location.href=`/shopdesc/?id=${this.dataset.id}`
            }
        })(i)
    }
}