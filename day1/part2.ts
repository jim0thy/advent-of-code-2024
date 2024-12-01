import * as fs from 'node:fs'

fs.readFile('input1.txt', 'utf-8', (err, data) => {
  const lines = data.split('\n')
  const left: number[] = []
  const right: Map<number, number> = new Map()

  lines.forEach((line) => {
    if (line.length === 0) return

    const [l, r] = line.split(/\s+/)
    left.push(+l)
    right.set(+r, (right.get(+r) ?? 0) + 1)
  })

  const distance = left.reduce((acc:number ,cur: number, i: number) => {
    const count = right.get(cur) ?? 0
    return acc + (cur * count)
  }, 0)

  console.log(distance)
})
