(function(){ 'use strict';

  const Config = {}

  Config.images = {
    mountain  : 'https://images.unsplash.com/photo-1605460516895-bc095b6b66a7',
    desert    : 'https://images.unsplash.com/photo-1671961878559-4a8975418640',
    building  : 'https://images.unsplash.com/photo-1671705449511-06c390d6417f',
    jungle    : 'https://images.unsplash.com/photo-1669166717463-38a78c93412b',
    sunrise   : 'https://images.unsplash.com/photo-1671227498016-93aa927686f8',
  }

  Config.crop = '?fit=crop&w=600&h=600'

  Config.el = {
    list    : document.getElementById( 'list' ),
    puzzle  : document.getElementById( 'puzzle' ),
  }

  window.Config = Config
})();
