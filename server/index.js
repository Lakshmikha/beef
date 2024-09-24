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

app.get('/api/episodes/:id', async (req, res) => {
    
        const episode = await Episode.findById(req.params.id);
        if (!episode) return res.status(404).json({ message: 'Episode not found' });
        res.json(episode);
    } 
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

