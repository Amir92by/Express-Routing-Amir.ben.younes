
var auth =  (req, res, next)=> {
    const d = new Date()
    var n = d.getDay()
    var h = d.getHours();

        if (n != 0 && n != 6 && h>8 && h<18 ){ 
        next()
     }
        else{
            res.send('page not found')
        }

}


  module.exports =auth


  
