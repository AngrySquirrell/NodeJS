const fs = require('fs')
const http = require('http')
const { Transform } = require('stream')
//Import des fonctions fs et http

function duplicate(filename){
    const s =fs.createReadStream(filename)
    //créer la cont s qui créer le flux de sortie depuis le filename
    const d =fs.createWriteStream('./duplicate.txt')
    //créer la const d qui créer le flux d'entrée vers duplicate.txt
    s.pipe(d)
// lie la sortie du flux (s) à l'entrée du flux (d) (filename)[s]==>==[d](duplicate.txt)
}

function transform(filename, re, fn){
    const s1 =fs.createReadStream(filename)

}

module.exports = {
    duplicate,
    // ou duplicate : duplicate;
    transform,
}