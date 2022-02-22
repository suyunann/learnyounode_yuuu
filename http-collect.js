const http = require('http')
const bl = require('bl')

http.get(url,function(response){
    response.pipe(bl(function (err, data) { 
        if (err) return console.log(err)
        console.log(data)
})).setEncoding('utf8')
})