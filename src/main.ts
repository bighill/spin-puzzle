import './style.css'
import c from './config'
import puzzle from './puzzle'

function init(): void {
  /**
   * Reset on h1 click
   */
  c.el.h1?.addEventListener('click', () => {
    c.el.puzzle?.classList.remove('show')
    c.el.list?.classList.add('show')
  })

  /**
   * Start new game
   */
  function startNewGame(this: HTMLImageElement): void {
    const imageId = this.dataset.imageId
    if (!imageId) {
      console.error('No imageId found')
      return
    }

    // Nav
    c.el.list && c.el.list.classList.remove('show')
    c.el.puzzle && c.el.puzzle.classList.add('show')

    // New game
    puzzle(imageId)
  }

  /**
   * Render list of puzzles
   */
  for (let i in c.images) {
    const [k, v] = [i, c.images[i]]
    const imgEl = document.createElement('img')

    imgEl.src = v + c.cropParams200
    imgEl.alt = k
    imgEl.dataset.imageId = k
    imgEl.classList.add('clickable')
    imgEl.addEventListener('click', startNewGame)

    c.el.list && c.el.list.append(imgEl)
  }
}

init()
