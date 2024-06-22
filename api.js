var exp = require('express');
var app = exp();
app.get("/",(req,res)=>{
res.json({"message":"sample"});
})
app.listen(80)