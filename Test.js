const fs = require('fs')
const http = require('http');
const { stringify } = require('querystring');
const { Transform } = require('stream')
const TransformStream = new Transform();

function test(taille){
// yaml 2 json

  const content = fs.readFileSync('at-taux.yaml', 'utf-8')
  const lines = content.split('\r\n')
  const reg = null ;
  
  const json = []
  let result = ''
  for (let i = 2; i<lines.length; i++){
    const jsonRecord = {}
    const splited = lines[i].split(': ')
    const key = splited[0].replace('-', '').replace('    ','')
    const value = splited[1]
    if ( key !== '' ){
      const lignes = '"'+key+'"'+' : '+'"'+value+'"'
      result += lignes
    }
    for (let f=0; f < stringify(value).length; f++) {
      jsonRecord[key[f]] = value[f]
    }
  json.push(jsonRecord)
  } 
  console.log(result)  
  fs.writeFileSync("YAML2JSON.json",JSON.stringify(json, null, 2))
}


module.exports = {
  test
}