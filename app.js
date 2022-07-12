const Express = require("express");
const app = Express();
const PORT = 5000
let message

app.listen(PORT, ()=>{
    console.log(`You are listening on Port ${PORT}.`)
})
let pageParams = (req, res, next)=>{
    message=(`You are on page: ${req.path}`)
    next()
}
app.use(pageParams)


app.get("/nerds", (req, res)=>{
    res.send(`<h1>${message}<h1>`)
    console.log("nerds")
    
})
app.get("/ostrich", (req, res)=>{
    res.send(`<h1>${message}<h1>`)
    console.log("ostrich")
})
app.get("/activat", (req, res)=>{
    sessionStorage.send(`<h1>${message}<h1>`);
    console.log("activated")
})
app.get( `/:key`, (req, res)=>{
    res(`<h1>${message}<h1>`)
})
// if i navigate to localhost:5000.dog, it console.logs {key: dog}

 