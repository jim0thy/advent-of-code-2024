import * as fs from 'node:fs'

fs.readFile('input1.txt', 'utf-8', (err, data) => {
  const lines = data.split('\n')
  const left: number[] = []
  const right: number[] = []

  for (const line of lines) {
    if (!line.trim()) continue

    const [l, r] = line.split(/\s+/)
    left.push(+l)
    right.push(+r)
  }

  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  const distance = left.reduce((acc:number ,cur: number, i: number) => {
    return acc + Math.abs(cur - right[i])
  }, 0)

  console.log(distance)
})
