const path = require('path')
const glob = require('glob')
const fs = require('fs')

const uri_pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const entry = {}
const rootPath = path.join(__dirname, 'src')
const files = glob.sync(path.join(rootPath, '**/*.+(js|scss)'))

const result = {}

files.forEach(file => {
  const content = fs.readFileSync(file)
  const r = content.toString().match(uri_pattern)
  if (r) {
    r.forEach(item => {
      if (item.indexOf('.mp3') !== -1 || item.indexOf('.wav') !== -1) {
        return
      }
      result[item] = true
    })
  }
})
const output = Object.keys(result).map((src, index) => ({ src, name: index }))
fs.writeFile(path.join(__dirname, 'src/resources.js'), `export default {list: '${JSON.stringify(output)}'}`)
