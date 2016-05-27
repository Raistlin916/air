const path = require('path')
const glob = require('glob')
const fs = require('fs')

const uri_pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig

const entry = {}
const rootPath = path.join(__dirname, 'src')
const files = glob.sync(path.join(rootPath, '**/*.+(js|scss)'))

const result = {}

files.forEach(file => {
  const content = fs.readFileSync(file)
  const r = content.toString().match(uri_pattern)
  if (r) {
    r.forEach(item => {
      result[item] = true
    })
  }
})

const output = Object.keys(result).map((src, index) => ({ src, name: index }))
fs.writeFile(path.join(__dirname, 'src/resources.js'), `export default {list: '${JSON.stringify(output)}'}`)
