const Express = require("express");
const app = Express();
const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`You are listening on Port ${PORT}.`)
})


// let pageParams = (req, res, next)=>{
//     message=(`You are on page: ${req.path}`)
//     next(message)
// }
// app.use(pageParams)
//* from hello-express


app.use(Express.static(__dirname + "/public"))


let paths = ["/", "/nerds", "/ostrich", "/activate"]
paths.forEach((path)=>{
    if(path==="/"){app.get(path, (req, res)=>{
        res.sendFile("index.html", {root:__dirname + "/public"})
    })}
    app.get(path, (req, res)=>{
        res.sendFile(path.slice(1)+".html", {root: __dirname+"/public"})
    })
})
//* pre-forEach() reqs
// app.get("/", (req, res)=>{
//     res.sendFile("index")
// })
// app.get("/nerds", (req, res)=>{
//     res.sendFile(getHTML(req.path), {root: __dirname+"/public"})
//     console.log(req.path)
// })
// app.get("/ostrich", (req, res)=>{
//     res.sendFile("ostrich.html", {root: __dirname+"/public"})
//     console.log("ostrich")
// })
// app.get("/activate", (req, res)=>{
//     res.sendFile("activate.html", {root: __dirname+"/public"})
//     console.log("activated")
// })

// app.get( `/:key`, (req, res)=>{
//     res(`<h1>${message}<h1>`)
// })
 //* if i navigate to localhost:5000.dog, it console.logs {key: dog} (from hello-express)

 