import './style.css'
import c from './config'
import puzzle from './puzzle'

function init() {
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
  function startNewGame(this: HTMLImageElement) {
    puzzle(this.src)
    c.el.list && c.el.list.classList.remove('show')
    c.el.puzzle && c.el.puzzle.classList.add('show')
  }

  /**
   * Render list of puzzles
   */
  // TODO responsive layout
  for (let i in c.images) {
    const [k, v] = [i, c.images[i]]
    const imgEl = document.createElement('img')

    imgEl.src = v + c.cropParams
    imgEl.alt = k
    imgEl.classList.add('clickable')
    imgEl.addEventListener('click', startNewGame)

    c.el.list && c.el.list.append(imgEl)
  }
}

init()
