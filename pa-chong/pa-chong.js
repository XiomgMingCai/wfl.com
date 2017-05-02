const request = require('request')
const debug = require('debug')('myapp:main')
const cheerio = require('cheerio')
const async = require('async')
request('https://angularjs.shujuwajue.com/shu_ju_dao_mo_ban.html', (error, response, body) => {
    var $ = cheerio.load(body)

    // console.log($('ul li ').text());
})
debug('现在的时间是:%s', new Date())



