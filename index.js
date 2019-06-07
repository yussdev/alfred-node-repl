const { output, input: q } = require('alfy')
result = eval(q)
output([
  {
    title: result,
    subtitle: `Copy to clipboard`,
    arg: result,
  },
])
