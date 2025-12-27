const express = require("express");
const app = express();
const port = 4000;
const sequelize = require("./utils/database");
const expenseRouter = require("./routes/expenseRoutes");
const cors = require("cors");

app.use(cors({
  origin: '*',   // allow all origins (dev only)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/expense", expenseRouter);



app.get("/" , (req,res)=>{
    res.send("App working!")
})

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})


