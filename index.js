import express from 'express';
const app = express();

const port = process.env.PORT || 8080

//create routes
app.get('/', (req, res) => {
    res.send("Welcome to our website")
})

app.listen(port, () => {
    console.log("server is running port ${port}")
})