const fs = require('fs')
const http = require('http')
const { Transform } = require('stream')
const TransformStream = new Transform();

function test(){

  const content = fs.readFileSync('at-taux.csv', 'utf-8')
  const raw = content.split('\r\n')
  const header = raw.shift().toLowerCase()
  const records = raw
  const json = []

  for (let i = 0; i < records.length; i++) {
    const jsonRecord = {}
    const record = records[i]
    const fields = record.split(';')
    //console.log(fields)
    const head = header.split(';')
    //console.log(head)

    for (let f=0; f < fields.length; f++) {
      jsonRecord[head[f]] = fields[f]
    }

    json.push(jsonRecord)
  }

fs.writeFileSync("resultat.json",JSON.stringify(json, null, 2))
}

module.exports = {
  test
}