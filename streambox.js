const fs = require('fs')
const http = require('http')
const { Transform } = require('stream')
const TransformStream = new Transform();
//Import des fonctions fs et http

function duplicate(filename){
    //const [name, extension] = ('.')
    const s =fs.createReadStream(filename)
    //créer la cont s qui créer le flux de sortie depuis le filename
    const d =fs.createWriteStream(name + '-copie' + extension)
    //créer la const d qui créer le flux d'entrée vers duplicate.txt
    s.pipe(d)
// lie la sortie du flux (s) à l'entrée du flux (d) (filename)[s]==>==[d](duplicate.txt)
}

function transform(filename, re, fn){
    TransformStream._transform = 
    //change la fonction (._transform) en ma propre fonction
    function(chunk, encoding, callback) {
        TransformStream.push(chunk.toString().split(re).join(fn(re)))
        //sépare en chunk le texte, coupe le 're' (.split(re)) et remplace pas le résultat de la fonction fn (.join(fn(re)))
        callback();
        //signifie qu'il a fini et attend les nouvelles données à traiter 
    }
    
    const s = fs.createReadStream(filename);
    const p = fs.createWriteStream('log.txt')
  
    s.pipe(TransformStream).pipe(p)
    
  }

  function transformin(filename, re, fn, in_stout = true){
    TransformStream._transform = 
    //change la fonction (._transform) en ma propre fonction
    function(chunk, encoding, callback) {
        TransformStream.push(chunk.toString().split(re).join(fn(re)))
        //sépare en chunk le texte, coupe le 're' (.split(re)) et remplace pas le résultat de la fonction fn (.join(fn(re)))
        callback();
        //signifie qu'il a fini et attend les nouvelles données à traiter 
    }
    
    const s = fs.createReadStream(filename);
    const p = fs.createWriteStream('log.txt')
  
    s.pipe(TransformStream).pipe(p)
    if (in_stout==true){
      s.pipe(TransformStream).pipe(process.stdout)
    }
  }

  function csvtojson(){

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
    duplicate,
    // ou duplicate : duplicate;
    transform,
    csvtojson,
    transformin,
}