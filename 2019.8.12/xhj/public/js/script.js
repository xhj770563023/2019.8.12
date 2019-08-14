window.onload = function () {
    //实例化bscroll
    var shopCar_wrap = new BScroll('.shopCar_wrap', {
        scrollY: true,
        click: true,
    })
    addEvent()
    //绑定事件
    function addEvent() {
        let shop_content = document.getElementsByClassName('shop_content')[0];
        let shop_list = document.getElementsByClassName('shop_list');
        let checkAllbtn = document.querySelector('.checkAllbtn');
        let allcheck = document.getElementsByClassName('allcheck')[0];
        let checkbtn = document.getElementsByClassName('checkbtn');
        let bbb = document.getElementsByClassName('bbb');
        let inputVal = document.getElementsByClassName('size');
        let shop_right_delbtn = document.getElementsByClassName('shop_right_delbtn')
        let count = document.getElementsByClassName('count');
        let add = document.getElementsByClassName('add');
        //全选按钮
        allcheck.onclick = function () {
            this.classList.toggle('active1');
            var flag = this.classList.contains('active1');
            ajaxP('/v1/api/isChangeAll', {
                isChange: flag ? "active1" : '',
            }, function (data) {
                console.log(data)
                if (JSON.parse(data) === 0) {
                    location.href = '/index_shop'
                }
            })
            ajaxP('/v1/api/isChange3', {
                isChange: flag ? "active1" : '',
            }, function (data) {
                if (data === 0) {
                    location.href = '/'
                }
            })
        }
        //底部全选
        checkAllbtn.onclick = function () {
            this.classList.toggle('active1');
            var flag = this.classList.contains('active1');
            ajaxP('/v1/api/isChangeAll', {
                isChange: flag ? "active1" : '',
            }, function (data) {
                console.log(data)
                if (JSON.parse(data) === 0) {
                    location.href = '/index_shop'
                }
            })
            ajaxP('/v1/api/isChange3', {
                isChange: flag ? "active1" : '',
            }, function (data) {
                if (data === 0) {
                    location.href = '/'
                }
            })
        }
        for (var i = 0; i < checkbtn.length; i++) {
            (function (k) {
                //单选
                checkbtn[k].onclick = function () {
                    this.classList.toggle('active1')
                    var flag = this.classList.contains('active1');
                    ajaxP('/v1/api/isChange', {
                        isChange: flag ? "active1" : '',
                        id: this.dataset.id,
                    }, function (data) {
                        if (JSON.parse(data) === 0) {
                            allMoney()
                            allTrue()
                        }
                    })
                }
                //减数量
                count[k].onclick = function () {
                    inputVal[k].value--
                    inputVal[k].value = inputVal[k].value <= 0 ? 1 : inputVal[k].value--
                    var val = inputVal[k].value;
                    ajaxP('/v1/api/isChangenum1', {
                        isChange: val,
                        id: this.dataset.id,
                    }, function (data) {
                        if (JSON.parse(data) === 0) {
                            allMoney()
                        }
                    })
                }
                //加数量
                add[k].onclick = function () {
                    inputVal[k].value++
                    inputVal[k].value = inputVal[k].value <= 0 ? 1 : inputVal[k].value++
                    var val = inputVal[k].value;
                    ajaxP('/v1/api/isChangenum1', {
                        isChange: val,
                        id: this.dataset.id,
                    }, function (data) {
                        if (JSON.parse(data) === 0) {
                            allMoney()
                        }
                    })
                }
                //删除
                shop_right_delbtn[k].onclick = function () {
                    ajaxP('/v1/api/isChange2', {
                        id: this.dataset.id,
                    }, function (data) {
                        if (JSON.parse(data) === 0) {
                            //删除节点
                            shop_content.removeChild(shop_list[k]);
                            addEvent()
                        }
                    })
                }
            })(i)
        }
        //计算价格
        function allMoney() {
            b = 0,
                c = 0;
            for (var i = 0; i < checkbtn.length; i++) {
                if (checkbtn[i].classList.contains('active1')) {
                    b += inputVal[i].value * 1;
                    c += inputVal[i].value * 1 * bbb[i].innerText * 1;
                }
            }
            sumAll.innerHTML = b;
            allshopmoney.innerHTML = c;

        }
        allMoney();
        //全选则全选为真
        function allTrue() {
            let data = [];
            for (var i = 0; i < checkbtn.length; i++) {
                if (checkbtn[i].classList.contains('active1')) {
                    data.push(true)
                } else {
                    data.push(false)
                }
            }
            let res = data.every(function (k) {
                return k
            })
            ajaxP('/v1/api/isChangeAll', {
                isChange: res ? "active1" : '',
            }, function (data) {
                if (JSON.parse(data) === 0) {
                    location.href = '/index_shop'
                }
            })
        }
    }
}
