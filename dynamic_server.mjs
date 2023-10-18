import * as fs from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';

import { default as express } from 'express';
import { default as sqlite3 } from 'sqlite3';
import { default as us } from 'us';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));


const port = 8080;
const root = path.join(__dirname, 'public');
const template = path.join(__dirname, 'templates');

const db = new sqlite3.Database(path.join(__dirname, "climate.sqlite3"), sqlite3.OPEN_READONLY, (err) => {
    if(err) {
        console.log("Error connecting to database")
    } else {
        console.log("Successfully connected to database")
    }
})

function dbSelect(query, params) {
    let p = new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if(err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
    return p
}



let app = express();
app.use(express.static(root));

app.get('/fips/:standard', (req, res) => {
    let standard = req.params.standard;
    let state = ""
    console.log(standard)
    let fips_query = "select * from Climate where fips=?"
    state = us.lookup('01')
    console.log(state)
    let p1 = dbSelect(fips_query, [standard]);
    let p2 = fs.promises.readFile(path.join(template,'temp.html'), 'utf-8')
    Promise.all([p1, p2]).then((results) => {
        console.log(results[1])
        let response = results[1].replace('$$FIPS$$', us.lookup(results[0][0].fips).name)
        res.status(200).type('html').send(response)
        }).catch((error) => {
            res.status(404).type('text').send("File not found")
        })
    })
   

app.listen(port, () => {
    console.log('Now listening on port ' + port);
});
