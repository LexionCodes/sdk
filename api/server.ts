import express from "express"
import { LexionSDK } from "../sdk/lexionSDK"

const app = express()
app.use(express.json())

const lexion = new LexionSDK()

app.post("/verify", (req, res) => {

  const { code } = req.body

  const result = lexion.verify(code)

  res.json(result)

})

app.get("/monitor/:id", (req, res) => {

  const report = lexion.monitor(req.params.id)

  res.json(report)

})

app.listen(3000, () => {
  console.log("Lexion API running on port 3000")
})
