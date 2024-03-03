const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const logon_user = req.headers;//["x-iisnode-logon_user"]
    const AUTH_USER = req.headers["x-iisnode-auth_user"]
    const SERVER_NAME = req.headers["x-iisnode-server_name"]
    console.log(JSON.stringify(req.headers))
    res.render('pages/index', {
        logon_user: JSON.stringify(req.headers),
        AUTH_USER,
        SERVER_NAME
    });
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})