const express = require('express')
const connectdb = require('./db')
const Episode = require('./models/episodes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

connectdb()

app.get('/api/episodes', async (req,res) => {
    const episodes = await Episode.find()
    res.json(episodes)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

