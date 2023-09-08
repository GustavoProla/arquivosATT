const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "projetopp"
})

app.use(cors())
app.use(express.json())

app.post("/register", (req,res)=>{
    const {ds_nome} = req.body;
    const {ds_password} = req.body;

    db.query("SELECT * FROM users WHERE ds_nome = ?", [ds_nome],
    (err,result)=>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO users (ds_nome, ds_password) VALUES ( ?,? )",[ds_nome, ds_password],(err,result)=>{
                if(err){
                    res.send(err)
                }
            })
        }   
    })
})




app.listen(3001, ()=>{
    console.log("rodando servidor")
})