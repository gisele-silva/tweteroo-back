import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {console.log(`Servidor rodando na porta ${PORT}`)})

const newUsers = []

app.get("/tweets", (req, res) => {
    
})

app.post("/tweets", (req, res) => {

})

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    if (!username, !avatar){
        res.status(400).send("Todos os campos são obrigatórios")
        return
    }
    newUsers.push({username, avatar})
    res.send("ok")
})