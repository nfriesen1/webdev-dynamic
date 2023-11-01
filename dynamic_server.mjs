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
    let fips_query = "select * from Climate where fips=?"
    let p1 = dbSelect(fips_query, [standard]);
    let p2 = fs.promises.readFile(path.join(template,'state_template.html'), 'utf-8')
    Promise.all([p1, p2]).then((results) => {
        let response = results[1].replace('$$FIPS$$', us.lookup(results[0][0].fips).name)
        let table_body = '';
        let chartValues = [];
        results[0].forEach((object) => {
            let table_row = '<tr>';
            table_row += '<td>' + object.year + '</td>';
            table_row += '<td>' + Math.round(object.temp * 100) / 100 + '</td>';
            table_row += '<td>' + Math.round(object.tempc * 100) / 100 + '</td>';
            table_body += table_row;
            });
            results[0].forEach((object) => {
                    chartValues.push('{"x": ' + object.year + ', "y": ' + Math.round(object.temp * 100) / 100 + '}')
            });
        response = response.replace('$$DATA$$', chartValues)
        response = response.replace('$$TABLE_BODY$$', table_body)
        //console.log(response)
        res.status(200).type('html').send(response)
        }).catch((error) => {
            console.error('Error: ' , error)
            res.status(404).type('text').send("Error: No data for fips number " + standard)
        })
    })

app.get('/year/:year', (req,res) => {
    let year = req.params.year;
    let year_query = "select * from Climate where year=?"
    let p1 = dbSelect(year_query, [year]);
    let p2 = fs.promises.readFile(path.join(template,'year_template.html'), 'utf-8')
    Promise.all([p1, p2]).then((results) => {
        let response = results[1].replace('$$YEAR$$', results[0][0].year)
        let table_body = '';
        results[0].forEach((object) => {
            let table_row = '<tr>';
            table_row += '<td>' + us.lookup(object.fips).name + '</td>';
            table_row += '<td>' + Math.round(object.temp * 100) / 100, + '</td>';
            table_row += '<td>' + Math.round(object.tempc * 100) / 100 + '</td>';
            table_body += table_row;
            });
        response = response.replace('$$TABLE_BODY$$', table_body)
        res.status(200).type('html').send(response)
        }).catch((error) => {
            console.error('Error: ' , error)
            res.status(404).type('text').send("Error: No data for year " + year)
        })
})
app.get('/temp/:temp1/:temp2', (req, res) => {
    let temp1 = req.params.temp1;
    let temp2 = req.params.temp2;
    let temp_query = "select * from Climate where temp >= ? AND temp <= ?";

    dbSelect(temp_query, [temp1, temp2])
        .then((results) => {
            if (results.length === 0) {
                res.status(404).type('text').send("Error: No data for temperature between " + temp1 + " and " + temp2);
                return;
            }

            let p2 = fs.promises.readFile(path.join(template, 'temp_template.html'), 'utf-8');
            return Promise.all([results, p2]);
        })
        .then((results) => {
            let response = results[1].replace('$$TEMP1$$', temp1);
            response = response.replace('$$TEMP2$$', temp2);
            let table_body = '';
            results[0].forEach((object) => {
                let table_row = '<tr>';
                table_row += '<td>' + object.year + '</td>';
                table_row += '<td>' + us.lookup(object.fips).name + '</td>';
                table_row += '</tr>';
                table_body += table_row;
            });
            response = response.replace('$$TABLE_BODY$$', table_body);
            res.status(200).type('html').send(response);
        })
        .catch((error) => {
            console.error('Error: ', error);
            res.status(404).type('text').send("Error: No data for temperature between " + temp1 + " and " + temp2);
        });
});





   

app.listen(port, () => {
    console.log('Now listening on port ' + port);
});
