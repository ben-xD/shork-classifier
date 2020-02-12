const brain = require('brain.js')
const fs = require('fs')

const shorkURLS = [
  "./images/shork_1.JPG",
  "./images/shork_2.JPG",
  "./images/shork_3.JPG",
  "./images/shork_4.JPG",
  "./images/shork_5.JPG",
  "./images/shork_6.JPG",
  "./images/shork_7.JPG",
  "./images/shork_8.JPG",
  "./images/shork_9.JPG",
  "./images/shork_10.JPG",
]

const notShorkURLS = [
  "./images/notshork_1.JPG",
  "./images/notshork_2.JPG",
  "./images/notshork_3.JPG",
  "./images/notshork_4.JPG",
  "./images/notshork_5.JPG",
  "./images/notshork_6.JPG",
  "./images/notshork_7.JPG",
  "./images/notshork_8.JPG",
  "./images/notshork_9.JPG",
  "./images/notshork_10.JPG",
]

const trainingData = []

// const notShorkURLS = [
//   "./images/"
// ]

// Load images
shorkURLS.map(url => {
  const imageBuffer = fs.readFileSync(url)

  trainingData.push({
    input: imageBuffer,
    output: [1]
  })
})

notShorkURLS.map(url => {
  const imageBuffer = fs.readFileSync(url)
  trainingData.push({
    input: imageBuffer,
    output: [0]
  })
})
// console.log(trainingData)

const net = new brain.NeuralNetworkGPU()
// const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

// NEURAL NETWORKS?: Training:
// containing forward propagation: prediction
// backward propagation: measuring, then learning (determing step). 

// No need to back propagate? when training is completed.
net.train(trainingData, {
  log: (err) => console.log(err),
  logPeriod: 1
})

// let output = net.run([0.1, 0.1])
// console.log(output)

// output = net.run([5, 5])
// console.log(output)

const image = fs.readFileSync(shorkURLS[0])
const output = net.run(image)
console.log(output[0])