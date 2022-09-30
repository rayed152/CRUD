const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const { application } = require('express');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',  
    password: '',
    database: 'holever_db',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlSelect = "Select * From holever_stats"; 
    db.query(sqlSelect,(err, result) =>{
    res.send(result);
    })
})

app.post('/api/insert', (req, res) =>{
    
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const ign = req.body.ign;
    const tag = req.body.tag;
    const fav_agent = req.body.favAgent;
    const fav_map = req.body.favMap;

    const sqlInsert = 
        "INSERT INTO holever_stats (first_name, last_name, ign, tag, fav_agent, fav_map) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [first_name, last_name, ign, tag, fav_agent, fav_map], 
        (err, result) =>{
        if (err) {
            console.error(err);
            res.send(500);
            return
        }
        console.log(result);
    })
})



//signup/registration

app.post('/api/insert', (req, res) =>{
    
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const ign = req.body.ign;
    const tag = req.body.tag;
    const fav_agent = req.body.favAgent;
    const fav_map = req.body.favMap;

    const sqlInsert = 
        "INSERT INTO holever_stats (first_name, last_name, ign, tag, fav_agent, fav_map) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [first_name, last_name, ign, tag, fav_agent, fav_map], 
        (err, result) =>{
        if (err) {
            console.error(err);
            res.send(500);
            return
        }
        console.log(result);
    })
})

app.listen(3001, () =>{
    console.log("running on port 3001");
})