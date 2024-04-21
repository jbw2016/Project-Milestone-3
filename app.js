const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); // send HTML file on GET request
});

app.post('/submit_form', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const message = req.body.message; // access form data and requires all of the fields to be completed to submit
    res.send(`Submission Successful`);// prints to user that the submission was successful
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
