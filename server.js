const express = require('express')
const app = express()

// date = (req,res,next)=>{
// let requestAt = new Date()
// console.log(requestAt)
// next()
// }

app.use(date = (req, res, next) => {
      let requestAt = new Date().getHours();

      requestAt > 17 || requestAt < 8
        ? res.send("We are closed ! ")
        : next();
    }
  );

app.use(express.static(__dirname  + '/public'))



// app.get('/home', date ,(req, res)=>{
//     res.sendfile(__dirname + '/public/index.html') 
// })

app.listen(3000 ,(err)=>{
    if (err) console.log('An error has occured')
    else console.log('Running on 3000')
})