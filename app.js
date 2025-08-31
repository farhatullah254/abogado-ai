import express from 'express'
import getAIReply from './models/openaiResponser.js'
import ejs from 'ejs'
const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set
const port = 3000
app.get('/', (req, res) => {
  res.render('index', )
})


app.post('/post-message', async (req, res, next)=>{

  try {
    const data=req.body.text
    const aiResponse= await getAIReply(data)
    res.json({ ok: true, text: req.body.text , aiResponse});
  
  
    
  } catch (error) {

    next(error)
    
  }

})
app.listen(port, () => {
  console.log(`Spanish Law AI app listening on port ${port} http://localhost:3000/`)
  
})

