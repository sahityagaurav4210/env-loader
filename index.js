const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        msg: 'Hello world'
    });
});

app.listen(8000, () => console.log(`Server started on port 8000`));