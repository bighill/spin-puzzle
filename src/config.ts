interface Config {
  images: {
    [key: string]: string
  }
  cropParams200: string
  cropParams600: string
  el: {
    h1: HTMLElement | null
    list: HTMLElement | null
    puzzle: HTMLElement | null
  }
}

const config: Config = {
  images: {
    mountain: 'https://images.unsplash.com/photo-1605460516895-bc095b6b66a7',
    desert: 'https://images.unsplash.com/photo-1671961878559-4a8975418640',
    building: 'https://images.unsplash.com/photo-1671705449511-06c390d6417f',
    jungle: 'https://images.unsplash.com/photo-1669166717463-38a78c93412b',
    sunrise: 'https://images.unsplash.com/photo-1671227498016-93aa927686f8',
  },

  cropParams200: '?fit=crop&w=200&h=200',
  cropParams600: '?fit=crop&w=600&h=600',

  el: {
    h1: document.querySelector('h1'),
    list: document.getElementById('list'),
    puzzle: document.getElementById('puzzle'),
  },
}

export default config
