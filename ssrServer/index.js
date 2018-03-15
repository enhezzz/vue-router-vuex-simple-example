const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const path = require('path')
// const createApp = require('./app')
// const createApp = require('../dist/entryServer')
console.log(path.resolve(__dirname, '../dist/entryServer.js'))
const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/entryServer.js'), 'utf-8'); 
const renderer = require('vue-server-renderer').createBundleRenderer(bundle,{
    template: fs.readFileSync('ssrServer/index.template.html', 'utf-8')
})
// console.log(createApp)
server.get('/', (req, res) => {
  const context = { url: req.url }
  console.log(context)
  // createApp.default(context).then(app => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })

server.listen(80,'localhost',function(){console.log('watch ssr server succeed..')});