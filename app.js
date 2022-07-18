const express = require('express');
const app = express();
const clusters = require("./routes/api/clusters")
const PORT = process.env.PORT || 4000;;

app.use( express.json() );
app.use("/api/cluster", clusters);

app.listen(
    PORT,
    () => console.log(`App live on http:localhost:${PORT}`)
)


