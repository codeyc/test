import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  try {
    const thing = await Promise.resolve({ one: 'two' }) // async/await!
    return res.json({...thing, hello: '7world999998888'}) // object-rest-spread!
  } catch (e) {
    return res.json({ error: e.message })
  }
})
const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }

  if (__DEV__) { // webpack flags!
    console.log('> in development')
  }

  console.log(`> listening on port ${port}`)
})
//远程添加1
