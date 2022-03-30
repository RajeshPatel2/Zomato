const express = require('express');
const app = express();
const config = require('./src/config');
require('express-async-errors');
const PORT = process.env.PORT || 9000;
app.use(express.json());
require('./app')(app)

app.listen(PORT, async () => {
    console.log(`
    ###########################################
     🚀 Server's listening on port: ${PORT} 🚀
    `);
    console.log(`           ✅ Database is connected ✅
    ###########################################`)
})
