import express, {Router, Request, Response} from "express";
import { userRoute } from "./src/routes/user.route";

const app = express();

app.use(express.json());
app.use("/user", userRoute);

const port: number = 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));