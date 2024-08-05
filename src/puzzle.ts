import c from './config'

type Data = {
  x: number
  y: number
  r: number
}

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
const data: Data[] = [
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
 * Initialize blocks
 */
const initBlocks = (imgUrl: string) => {
  const blocks = data.map((d) => {
    const block = document.createElement('div')

    block.classList.add('block')
    block.dataset.r = d.r.toString()
    block.dataset.x = d.x.toString()
    block.dataset.y = d.y.toString()
    block.style['transform'] = `rotate( ${ROTATION[d.r]} )`
    block.style['background'] = `url( ${imgUrl} )`

    return block
  })

  // NOTE toggle cheat mode here
  const isCheatMode = false
  return isCheatMode ? cheat(blocks) : blocks
}

/**
 * Resize blocks (mutate)
 */
const resizeBlocks = (blocks: HTMLElement[]) => {
  const IMAGE_SIZE = 600
  const puzzleSize = c.el.puzzle?.clientWidth || 0
  const offset = Math.floor((IMAGE_SIZE - puzzleSize) / 2)

  blocks.forEach((block) => {
    const x = parseInt(block.dataset.x || '0')
    const y = parseInt(block.dataset.y || '0')
    const blockSize = Math.floor(puzzleSize / 6)

    block.style['top'] = `${y * blockSize}px`
    block.style['left'] = `${x * blockSize}px`
    block.style['width'] = `${blockSize}px`
    block.style['height'] = `${blockSize}px`
    block.style['background-position' as any] = `top ${
      y * -blockSize - offset
    }px left ${x * -blockSize - offset}px`
  })
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
// TODO photo credits
const puzzle = (imageId: string) => {
  const imgUrl = c.images[imageId] + c.cropParams600
  const blocks = initBlocks(imgUrl)

  // Resize blocks (mutate)
  resizeBlocks(blocks)

  // Listen for clicks
  blocks.forEach((b) => b.addEventListener('click', handleClick))

  // Reset puzzle
  c.el.puzzle && (c.el.puzzle.innerHTML = '')

  // Render blocks to puzzle
  blocks.forEach((b) => c.el.puzzle && c.el.puzzle.append(b))

  // Listen for window resize
  window.addEventListener('resize', () => {
    resizeBlocks(blocks)
  })
}

export default puzzle
