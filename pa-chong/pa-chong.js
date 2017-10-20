const request = require('request')
const fs = require('fs')
const debug = require('debug')('myapp:update')
debug('现在的时间是:%s', new Date())
const cheerio = require('cheerio')
const async = require('async')


request('https://angularjs.shujuwajue.com/shu_ju_dao_mo_ban.html', function (err, res) {
    if (err) return console.error(err)
    const body = res.body.toString()
    var $ = cheerio.load(body);

    let classList = []
    $(' li a ').each(function () {
        let $me = $(this)
        var item = {
            name:$me.text().trim(),
        }
        classList.push(item)
    })


    fs.writeFile('input.json',{
        name:'熊明才',
        age:'23'
    } ,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");

    });
    console.log("准备写入文件");
})


/*var monk = require('monk')
 var db = monk('localhost:27017/test')
 var users = db.get('user')
 users.find({}, (err, Result) => {
 res.json({
 error: 0,
 Result
 })
 })*/
/*

 var express = require('express');
 var app = express();
 app.listen(3000);*/
