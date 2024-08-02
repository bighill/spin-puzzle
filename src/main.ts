import './style.css'
import c from './config'
import list from './list'

/*










  TODO move `.git` from old repo dir to this new repo dir










*/

const init = async () => {
  c.el.h1?.addEventListener('click', () => {
    c.el.puzzle?.classList.remove('show')
    c.el.list?.classList.add('show')
  })

  list()
}

init()
