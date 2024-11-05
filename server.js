const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

app.get('/api/text/?', async (req, res) => {
    const { n, t } = req.query;
    console.log("req object received is: " + req);
    console.log("query parameter in req object: " + req.query);
    console.log("n and t extracted are n: " + n + " t: " + t); chrom
    try {
        const response = await axios.get(`https://loremipsum.io/generator?n=${n}&t=${t}`);
        console.log("resonse receoved: " + response)
        res.json(response.data);
    }
    catch (error) {
        res.statusCode(500).send("error fetching data: " + error)
    }

})

app.listen(5000, () => {
    console.log("server started successfully")
});