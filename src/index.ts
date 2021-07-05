import express, {Application} from "express";
import router from "./routes";

const app: Application = express();
app.use(router);
const port: number = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});