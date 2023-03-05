import express from "express";
import cors from "cors";
import 'mysql-plus';


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.listen(port, () => {
    console.log(`Стартовало на http://localhost:${port}`)
})
