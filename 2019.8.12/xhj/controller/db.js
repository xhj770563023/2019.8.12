const mysql = require('mysql');
const config = require('../config')
const connection = mysql.createConnection(
    config.database
);

connection.connect((err) => {
    err && console.log(err);
    console.log('数据库连接成功')
});
//查购物车数据是否重复
async function findShopTorf(opt) {
    var sql='SELECT * FROM `shoplist` WHERE '+Object.keys(opt).map(k=>{
        return `${k} LIKE '${opt[k]}'`
    }).join('AND ');
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
//查数据购物车数据
async function findShop() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `shoplist`', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
//查找allcheck
async function findAll() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `allcheck`', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
//更新allcheck
async function findAll1(opt) {
    let sqlM = `UPDATE allcheck SET  cla='${opt.isChange}' WHERE (id='1')`;
    return new Promise((resolve, reject) => {
        connection.query(sqlM, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(0);
            }
        });
    })
};
//查数据总列表数据
async function findbike() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `bikelist`', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
//查单个数据总列表数据
async function shopdesc(opt) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM bikelist WHERE (id='${opt.id}')`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};
//删除shoplist数据
async function delshoplist(opt) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM shoplist WHERE (id='${opt.id}')`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(0);
            }
        });
    })
};


//更新单选框选中状态更改
async function upshopMsg(opt) {
    let sqlM = `UPDATE shoplist SET  isChange='${opt.isChange}' WHERE (id='${opt.id}')`;
    return new Promise((resolve, reject) => {
        connection.query(sqlM, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(0);
            }
        });
    })
};
//更新数量
async function upshopMsg1(opt) {
    console.log(opt, 11111)
    let sqlM = `UPDATE shoplist SET  num='${opt.isChange}' WHERE (id='${opt.id}')`;
    return new Promise((resolve, reject) => {
        connection.query(sqlM, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(0);
            }
        });
    })
};
//全选更新单选框数据状态
async function upshopMsg3(opt) {
    let sqlM = `UPDATE shoplist SET  isChange='${opt.isChange}'`;
    return new Promise((resolve, reject) => {
        connection.query(sqlM, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(0);
            }
        });
    })
};
//添加购物车列表
//INSERT INTO shoplist (shopPic, title, subTitle, money, num, isChange) VALUES ('2', '2', '2', '2', '1', 'active1')
async function upshopMsg5(opt) {
    
    let sqlM = `INSERT INTO shoplist (shopid, shopPic, title, subTitle, money, num, isChange) VALUES ('${opt.id}', '${opt.pic1}', '${opt.name}', '${opt.size}', '${opt.money1}', '1', 'active1')`;
    return new Promise((resolve, reject) => {
        connection.query(sqlM, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(0);
            }
        });
    })
};
module.exports = {
    findShopTorf,
    findShop,
    findbike,
    delshoplist,
    upshopMsg,
    upshopMsg1,
    upshopMsg3,
    shopdesc,
    upshopMsg5,
    findAll,
    findAll1,
}