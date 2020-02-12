const brain = require('brain.js')

const net = new brain.NeuralNetworkGPU({ hiddenLayers: [2, 2] })
// const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
]

// NEURAL NETWORKS?: Training:
// containing forward propagation: prediction
// backward propagation: measuring, then learning (determing step). 

// No need to back propagate? when training is completed.
net.train(trainingData, {
  log: (err) => console.log(err),
  logPeriod: 100
})

let output = net.run([0.1, 0.1])
console.log(output)

// output = net.run([5, 5])
// console.log(output)

// output = net.run([-5, -5])
// console.log(output)