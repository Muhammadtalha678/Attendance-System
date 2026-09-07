import express from 'express'
import cors from 'cors';
const app = express()

app.use(cors({
    origin:"*"
}))

app.use(express.json()) //parsing the request (mtlb JavaScript object ma convert krta ha js sy hm req.body krskty hain)

app.get("/",(req,res) => {
    res.json("Hello World")
})


app.listen("3000",() => {
    console.log("App running on port 3000");
    
})