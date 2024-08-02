import c from './config'
import puzzle from './puzzle'

/**
 * List of images
 */
const list = () => {
  for (let i in c.images) {
    const [k, v] = [i, c.images[i]]
    const imgEl = document.createElement('img')

    imgEl.src = v + c.cropParams
    imgEl.alt = k
    imgEl.classList.add('clickable')
    imgEl.addEventListener('click', handleClick)

    c.el.list && c.el.list.append(imgEl)
  }
}

export default list

/**
 * Handle click
 */
function handleClick(this: HTMLImageElement) {
  puzzle(this.src)
  c.el.list && c.el.list.classList.remove('show')
  c.el.puzzle && c.el.puzzle.classList.add('show')
}
