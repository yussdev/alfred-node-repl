const { output, input: q } = require('alfy')
const evaluation = eval(q)
const result = JSON.stringify(evaluation)
output([
  {
    title: result,
    subtitle: `Copy to clipboard`,
    arg: result,
  },
])
