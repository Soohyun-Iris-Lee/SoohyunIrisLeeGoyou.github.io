import Replicate from 'replicate'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})
const model = 'soohyun-iris-lee/korean_tradition_generator:67f8a355672fca7ccf31b3ccb5ff0635ce2253412fac53939c854db7c3fbf716'



app.post('/', async function (req, res) {
  const input = {
    prompt: req.body.prompt,
    refine: 'expert_ensemble_refiner',
    scheduler: 'K_EULER',
    lora_scale: 0.6,
    num_outputs: 1,
    guidance_scale: 7.5,
    apply_watermark: false,
    high_noise_frac: 0.8,
    negative_prompt: '',
    prompt_strength: 0.8,
    num_inference_steps: 25,
    }
    console.log(req.body)
    const [output] = await replicate.run(model, { input })
    console.log(output.url())
    res.send(output.url())
})

app.listen(3000)