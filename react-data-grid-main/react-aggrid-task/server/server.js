//npm install --save express   //also check players.html, in html-css folder
const { response } = require('express')
const express = require('express')
const app = express()
const port =3000

const cors = require("cors")
app.use(cors())

// this enables express application to read the incoming json data
app.use(express.json())

//Router Handler
//app.METHOD(Path/url, Handler)


const students = [
    {id:1, name:'sachin', hometown:'bangalore'},
    {id:2, name:'virat', hometown:'mysore'},
    {id:3, name:'sam', hometown:'bijapur'},
    {id:4, name:'samuel', hometown:'bijapur'},
    {id:5, name:'kiran', hometown: 'tumkur'}
]

const products = [
    {id:1, name:'marker'},
    {id:2, name:'scale'},
    {id:3, name:'eraser'},
    {id:4, name:'whiteboard'},
    {id:5, name:'table'}
]
app.get('/', function(request, response){
    console.log(request.method)
    console.log(request.url)
    response.send('welcome to website')
})

app.get('/about', function(request, response){ 
    console.log(request.method)
    console.log(request.url)
    response.send('<h2>About us page</h2>')
})

app.get('/users',function(request,response){
    response.send([
        {id:1, name:'arjun'},
        {id:2, name:'saurav'}
    ])
})

app.get('/students',function(request,response){
    response.send(students)
})

//named parameters
app.get('/students/:sid',function(request,response){
    // console.log('incoming methods',request.method)
    // console.log('request url', request.url)
    // console.log(request.params)
   // response.send(`you selected student with id, ${request.params.sid}`)
   let student = students.find(function(stud){
       return stud.id == request.params.sid
   })
   if(student){
       response.send(student)
   } else {
       //response.send(`no user id found ${request.params.sid}`)
       response.send({})
   }
})

// using map to loop inside that array of object to get hometown
// app.get('/students',function(request,response){
//     response.send(students.map(function(stud){
//        return  `${stud.hometown}`
//     }))
// })

app.get('/products',function(request,response){
    response.send(products)
})

app.get('/products/:name',function(request,response){
    let product = products.find(function(prod){
        return prod.name == request.params.name
    })
    response.send(product)
})
 
// -------------------------------------------------------
let players = [
    {id:1, name:'sachin'}
]

app.get('/players',function(req,res){
    console.log(req.method, req.url)
    res.send(players)
})

app.get('/players/:id',function(req,res){
    let player = players.find(function(player){
        return player.id == req.params.id
    })
    if(player){
        res.send(player)
    } else {
        res.send({})
    }
})
app.post('/players', function(req,res){
    console.log('incoming data', req.body)
    const data= req.body
    players.push(data)
    res.send({
        player : data,
        notice:'sucessfully data submitted'
    })
})

app.put('/players/:id',function(req,res){
   // console.log(req.method,req.url)
   let id = req.params.id
   let body = req.body
   let player = players.find(function(player){
       return player.id == id
   })
   if(player){
       player.name = body.name
       res.send({
           player,
           notice:'data updated succesfully'
       })
   } else {
       res.send({})
   }
})

app.delete('/players/:id',function(req,res){
    let id = req.params.id 
    players = players.filter(function(p){
        return p.id != id
    })
    res.send(players)

})
     

app.listen(port,function(){
    console.log('server up.. listen to port',port)
})

