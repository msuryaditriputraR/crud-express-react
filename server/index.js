import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));
