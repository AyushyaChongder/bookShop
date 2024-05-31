import express from "express"
import dotenv from "dotenv"

const app = express()

dotenv.config();

const PORT=process.env.PORT || 4000

//connect to mongoDB server


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})