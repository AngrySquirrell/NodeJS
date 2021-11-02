const fs = require('fs')
const http = require('http')
const { Transform } = require('stream')
const TransformStream = new Transform();

function test(){
// yaml 2 json

   const content = fs.readFileSync('at-taux.yaml', 'utf-8')
   const reg = /(?<key>[a-zA-z]+): (?<value>[0-9-.]+)/gm;
   const raw = content.split(': \r\n')
  //  const header = raw.shift().toLowerCase()
  //  const records = raw
   const json = []
   console.log(raw)

//    for (let i = 0; i < records.length; i++) {
//      const jsonRecord = {}
//      const record = records[i]
//      const fields = record.split(';')
//      //console.log(fields)
//      const head = header.split(';')
//      //console.log(head)

//      for (let f=0; f < fields.length; f++) {
//        jsonRecord[head[f]] = fields[f]
//       }
//      json.push(jsonRecord)
//     }
//  fs.writeFileSync("YAML2JSON.json",JSON.stringify(json, null, 2))
}

module.exports = {
  test
}
//function test(){
//   const content = fs.readFileSync('at-taux.csv', 'utf-8')
//   const raw = content.split('\r\n')
//   const header = raw.shift().toLowerCase()
//   const records = raw
//   const json = []

//   for (let i = 0; i < records.length; i++) {
//     const jsonRecord = {}
//     const record = records[i]
//     const fields = record.split(';')
//     //console.log(fields)
//     const head = header.split(';')
//     //console.log(head)

//     for (let f=0; f < fields.length; f++) {
//       jsonRecord[head[f]] = fields[f]
//     }

//     json.push(jsonRecord)
//   }

// fs.writeFileSync("CSV2JSON.json",JSON.stringify(json, null, 2))
//}