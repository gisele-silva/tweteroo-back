import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {console.log(`Servidor rodando na porta ${PORT}`)})

const newUsers = []
const newTweet = [];

app.get("/tweets", (req, res) => {
    const { username } = req.body;
    const novoArray = newTweet.map((tweet) =>{
        const user = newUsers.find((usuario) => usuario.username === username);
        const imagem = user.avatar;
        return {...tweet, avatar: imagem}
    })

    res.send(novoArray.slice(-10))
})

app.post("/tweets", (req, res) => {
    const { username, tweet} = req.body;
    const user = newUsers.find((usuario) => usuario.username === username);
    
    if (!username || !tweet){
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
    if (!username || !avatar){
        res.status(400).send("Todos os campos são obrigatórios")
        return
    }

    const userExist = newUsers.find((usuario) => usuario.username === username)
    if (userExist) {
        res.sendStatus(400)
        return
    }

    newUsers.push({username, avatar})
    res.send("ok")
})

app.get('tweets/:username', (req, res) => {
    const { username } = req.params
    const tweetsUser = tweets.filter(t => t.username === username)
    res.status(200).send(tweetsUser)
})