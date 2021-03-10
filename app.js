let express =require('express')
let app = express()



//Route template engine as ejs
 app.set('view engine', 'ejs')

//serving Static Files
app.use(express.static('public'))

//Middlware
const auth =require('./Middlware/auth')






//Route for '/'
app.get('/',(req,res)=>{

    res.render('Home',{value: 'Hello User !'})
})

//Route for '/services'  page
app.get('/services',auth,(req,res)=>{
    res.render('Services')
})
//Route for '/contact'  page
app.get('/contact' ,(req,res)=>{
    res.render('Contact')
})


let port = process.env.PORT || 4000
app.listen(port,()=>{console.log('SERVER IS RUNNING ....')})