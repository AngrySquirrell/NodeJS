const fs = require('fs')
const http = require('http')
const Stream = require('stream')
const { Transform, Readable, Writable } = require('stream')
const TransformStream = new Transform()
const readableStream = new Stream.Readable({read()})
const writableStream = new Stream.Writable()
//Import des fonctions

function duplicate(filename){
    const [name, extension] = ('.')
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
/*
function transform2(filename, re, fn, in_stdout = true){
    TransformStream._transform = 
    //change la fonction (._transform) en ma propre fonction
    function(chunk, encoding, callback) {
        TransformStream.push(chunk.toString().split(re).join(fn(re)))
        //sépare en chunk le texte, coupe le 're' (.split(re)) et remplace pas le résultat de la fonction fn (.join(fn(re)))
        callback();
        //signifie qu'il a fini et attend les nouvelles données à traiter 
    }

    writableStream._write = 
    function(chunk, encoding, next){
        console.log(chunk.toString())
        next()
    }

    const s = fs.createReadStream(filename);
    const p = fs.createWriteStream('log.txt');


    s.pipe(TransformStream).pipe(p)
}
*/
module.exports = {
    duplicate,
    // ou duplicate : duplicate;
    transform,
    transform2,
}
