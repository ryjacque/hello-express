const Express = require("express");
const app = Express();
const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`You are listening on Port ${PORT}.`)
})
app.get("/", (req, res)=>{
    console.log("<h1>this is home<h1>")
})
app.get("/nerds", (req, res)=>{
    res.send("<h3>You are nerd<h3>")
    console.log("nerds")
})
app.get("/ostrich", (req, res)=>{
    res.send("<h1>You are ostrich<h1>")
    console.log("ostrich")
})
app.get("/activat", (req, res)=>{
    sessionStorage.send("<h1>YOU ARE NOW ACTIVATED</h1>");
    console.log("activated")
})
