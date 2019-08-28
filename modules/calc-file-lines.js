const fs = require('fs')

async function calcFileLines (filePath) {
  let count = 0
  const stream = fs.createReadStream(filePath)
    .on('data', (chunk) => {
      for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] === 10) {
          count++
        }
      }
    })

  return new Promise((resolve, reject) => {
    stream.on('end', () => resolve(count))
    stream.on('error', reject)
  })
}

module.exports = calcFileLines
