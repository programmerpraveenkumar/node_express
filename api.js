var exp = require('express');
var app = exp();
var cors = cors();
app.use(cors());
app.get("/",(req,res)=>{
res.json({"message":"sample"});
})
app.listen(80)