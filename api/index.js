//stuff that I need to import
const express = require('express');
const bodyParser = require('body-parser');

// routers go here
const recipesRouter = require('./routers/recipes');
const assetsRouter = require('./routers/assets');

// declarative stuff
const app = express();

// actual code here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', recipesRouter);
app.use('/api', assetsRouter);


app.listen(3000, () => {
    console.log('listening at port 3000');
});
