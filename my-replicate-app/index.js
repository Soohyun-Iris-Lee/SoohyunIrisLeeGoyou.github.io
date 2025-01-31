import Replicate from 'replicate'
import dotenv from 'dotenv'
dotenv.config()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})
const model = 'soohyun-iris-lee/korean_tradition_generator:67f8a355672fca7ccf31b3ccb5ff0635ce2253412fac53939c854db7c3fbf716'
const input = {
  prompt: 'Create a geometric and symmetrical hexagonal pattern inspired by traditional Korean designs in a style of TOK, incorporating motifs randomly selected from dragon, cloud, lotus, tiger, leaves, and flower, utilizing a color palette sourced directly from TOK.',
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

console.log('Using model: %s', model)
console.log('With input: %O', input)

console.log('Running...')
const [output] = await replicate.run(model, { input })

import { writeFile } from "node:fs/promises";
 
await writeFile("./output.png", output);
console.log('Done!', output)
