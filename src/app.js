import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {console.log(`Servidor rodando na porta ${PORT}`)})

const newUsers = []
const newTweet = []

app.get("/tweets", (req, res) => {
    
})

app.post("/tweets", (req, res) => {
    const { username, tweet} = req.body;
    const user = newUsers.find((usuario) => usuario.username === username);
    
    if (!username, !tweet){
        res.status(400).send("Todos os campos são obrigatórios")
        return
    }

    if(!user){
        res.send("UNAUTHORIZED")
        return;
    }

    newTweet.push({username, tweet});
    res.status(201).send("OK")
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