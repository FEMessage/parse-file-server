const Koa = require('koa')
const cors = require('@koa/cors')
const app = new Koa()
const axios = require('axios')
const fs = require('fs')
const pdf = require('pdf-parse')
const utils = require('./utils')

app.use(cors())
app.listen(process.env.PORT || 3000)

app.use(async (ctx, next) => {
  if (ctx.path == '/parse-resume') {
    let url = ctx.query.fileUrl

    ctx.assert(url, 400, 'the query: `fileUrl` cannot be null')

    if (!url.includes('http')) url = 'https:' + url

    console.log(`------ parsing doc: ${url} ------`)

    let resp = await axios({
      url: encodeURI(url),
      responseType: 'arraybuffer',
    })

    let data = await pdf(resp.data, {max: 1})

    ctx.body = {
      name: utils.getName(url),
      phone: utils.getPhone(data.text),
      email: utils.getEmail(data.text),
    }
  } else ctx.res.status = 404
})
