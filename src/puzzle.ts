import c from './config'

/**
 * Rotation values
 */
const ROTATION = ['0deg', '90deg', '180deg', '270deg']

/**
 * Random rotation
 */
const randRotation = () => Math.floor(Math.random() * ROTATION.length)

/**
 * Data
 */
const data = [
  { x: 0, y: 0, r: randRotation() },
  { x: 0, y: 1, r: randRotation() },
  { x: 0, y: 2, r: randRotation() },
  { x: 0, y: 3, r: randRotation() },
  { x: 0, y: 4, r: randRotation() },
  { x: 0, y: 5, r: randRotation() },
  { x: 1, y: 0, r: randRotation() },
  { x: 1, y: 1, r: randRotation() },
  { x: 1, y: 2, r: randRotation() },
  { x: 1, y: 3, r: randRotation() },
  { x: 1, y: 4, r: randRotation() },
  { x: 1, y: 5, r: randRotation() },
  { x: 2, y: 0, r: randRotation() },
  { x: 2, y: 1, r: randRotation() },
  { x: 2, y: 2, r: randRotation() },
  { x: 2, y: 3, r: randRotation() },
  { x: 2, y: 4, r: randRotation() },
  { x: 2, y: 5, r: randRotation() },
  { x: 3, y: 0, r: randRotation() },
  { x: 3, y: 1, r: randRotation() },
  { x: 3, y: 2, r: randRotation() },
  { x: 3, y: 3, r: randRotation() },
  { x: 3, y: 4, r: randRotation() },
  { x: 3, y: 5, r: randRotation() },
  { x: 4, y: 0, r: randRotation() },
  { x: 4, y: 1, r: randRotation() },
  { x: 4, y: 2, r: randRotation() },
  { x: 4, y: 3, r: randRotation() },
  { x: 4, y: 4, r: randRotation() },
  { x: 4, y: 5, r: randRotation() },
  { x: 5, y: 0, r: randRotation() },
  { x: 5, y: 1, r: randRotation() },
  { x: 5, y: 2, r: randRotation() },
  { x: 5, y: 3, r: randRotation() },
  { x: 5, y: 4, r: randRotation() },
  { x: 5, y: 5, r: randRotation() },
]

/**
 * Cheat
 */
const cheat = (blocks: HTMLElement[]): HTMLElement[] => {
  blocks.forEach((b, i) => {
    if (i < 4) {
      return
    }
    b.dataset.r = '0'
    b.style['transform'] = 'rotate( 0deg )'
  })

  return blocks
}

/**
 * Make blocks
 */
// TODO perc sizing for narrow screen, max puzzle width 600px
const makeBlocks = (imgUrl: string) => {
  const blocks = data.map((d) => {
    const block = document.createElement('div')

    block.classList.add('block')
    block.dataset.r = d.r.toString()
    block.dataset.x = d.x.toString()
    block.dataset.y = d.y.toString()

    block.style['top'] = `${d.y * 100}px`
    block.style['left'] = `${d.x * 100}px`
    block.style['transform'] = `rotate( ${ROTATION[d.r]} )`
    block.style['background'] = `url( ${imgUrl} )`
    block.style['background-position' as any] = `top ${d.y * -100}px left ${
      d.x * -100
    }px`

    return block
  })

  // NOTE toggle cheat mode here
  const isCheatMode = false
  return isCheatMode ? cheat(blocks) : blocks
}

/**
 * Rotate
 */
const rotate = (target: HTMLElement) => {
  const r = parseInt(target.dataset.r || '0')

  const newRotation = r === ROTATION.length - 1 ? 0 : r + 1

  target.dataset.r = newRotation.toString()
  target.style['transform'] = `rotate( ${ROTATION[newRotation]} )`
  console.log(target.dataset)
}

/**
 * Handle win
 */
const handleWin = () => {
  console.log('You Won!')
  alert('You Won!')
  c.el.list?.classList.toggle('show')
  c.el.puzzle?.classList.toggle('show')
}

/**
 * Check for win
 */
const checkWin = (): void => {
  type Block = HTMLElement
  const _blocks = c.el.puzzle?.getElementsByClassName('block') || []
  const blocks: Block[] = Array.from(_blocks) as Block[]

  if (!blocks) {
    return
  }

  // is win when all blocks have a rotation index (r) of 0
  for (let i = 0; i < blocks.length; i++) {
    const r = parseInt(blocks[i].dataset.r || '1')

    if (r) {
      // first `r` that is not 0, means not a win
      return
    }
  }

  handleWin()
}

/**
 * Handle click
 */
const handleClick = (ev: MouseEvent) => {
  const target = ev.target as HTMLElement

  rotate(target)
  setTimeout(checkWin, 0)
}

/**
 * Puzzle
 */
const puzzle = (imgUrl: string) => {
  const blocks = makeBlocks(imgUrl)

  // Reset
  c.el.puzzle && (c.el.puzzle.innerHTML = '')

  // Render
  blocks.forEach((b) => c.el.puzzle && c.el.puzzle.append(b))

  // TODO photo credits

  // Listen
  blocks.forEach((b) => b.addEventListener('click', handleClick))
}

export default puzzle
