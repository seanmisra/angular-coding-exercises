const express = require('express');
const cors = require('cors');
const PORT = 8080;

const app = express();

app.use(cors({
    origin: "*"
}));

app.get("/fetchAnimals", (req, res) => {
    res.send([
        {
            name: 'lion',
            id: 1,
            canFly: false
        },
        {
            name: 'tiger',
            id: 2,
            canFly: false
        },
        {
            name: 'zebra',
            id: 3,
            canFly: false
        },
        {
            name: 'bird',
            id: 4,
            canFly: true
        },
        {
            name: 'hummingbird',
            id: 5,
            canFly: true
        },
        {
            name: 'insect',
            id: 6,
            canFly: true
        }
    ]);
})

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})