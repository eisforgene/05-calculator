const express = require('express')

const app = express()
const port = 3000


//when parsing data that comes from an HTML form, used to parse JSON bodies
app.use(express.json())

// extended to true allows us to post nested objects 
// allows us you to go into any routes and can tap into something called req.body
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html") // __dirname prints out the path of the current file, add "/index.html" to add html file
})

app.post('/', (req, res) => { //handles any post requests that come to our '/' home route
    let num1 = Number(req.body.num1); //parses it as text
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send('The result of the calculation is ' + result);
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let result = (weight / (height * height)) * 703
    res.send('Your BMI is ' + result);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})