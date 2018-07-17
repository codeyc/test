import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  
  try {
    const thing = await Promise.resolve({ one: 'one998' }) // async/await!
    return res.json({...thing, hello: 'ethan66'}) // object-rest-spread!
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

  console.log(`> listening on port ${port}`);
  // console.log('dd');
})

// 本地添加1

//远程添加1

