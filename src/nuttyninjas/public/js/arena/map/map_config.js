MapConfig = {};
MapConfig.limits = {
  healthtile : 5,
  speedtile : 2,
  guntile : 5
};

MapConfig.tiles = {
  terrain: '/images/terrain/jungle/',
  powerup: '/images/powerups/',
  image: '/images/',
  1: {image:'rock.png', w: 360, h: 180, tileW: 1, tileH: 1},
  2: {image:'rock-3.png', w: 360, h: 360, tileW: 1, tileH: 1},
  3: {image:'rock-4.png', w: 360, h: 360, tileW: 1, tileH: 1},
  4: {image:'tree-2.png', w: 360, h: 345, tileW: 2, tileH: 2},
  1: {image:'hut.png', w: 600, h: 600, tileW: 1, tileH: 1},
  5: {image:'hut-2.png', w: 600, h: 600, tileW: 1, tileH: 1},
  6: {image:'tree.png', w: 360, h: 345, tileW: 1, tileH: 1},
  // 1: {image:'tree.png', w: 360, h: 345, tileW: 1, tileH: 1},
  // 2: {image:'rock-2.png', w: 240, h: 240},
  health: {image:'first-aid-kit.png', w: 300, h: 256},
  speed: {image:'haste-boots.png', w: 300, h: 300}
};

MapConfig.maps = [
  {id: 'iceworld', src: '/js/arena/map/iceworld.txt', type: createjs.LoadQueue.TEXT}
];

MapConfig.ascii = {
  'blank' : ['0'],
  'iceworld' : ['0000000',
                '0101010',
                '0000000',
                '0101010',
                '0000000',
                '0101010',
                '0000000'
                ],
  'dota' : ['0000000000',
            '0111110010',
            '0100100110',
            '0101001010',
            '0110010010',
            '0100111110',
            '0000000000'],

  'bomberman' : ['000',
                 '010',
                 '000'],
  'spiral' : ['111111111111100',
              '000000000000100',
              '000000000000100',
              '001111111100100',
              '001000000100100',
              '001000000100100',
              '001001100100100',
              '001001000100100',
              '001001000100100',
              '001001001100100',
              '001001000000100',
              '001001000000100',
              '001001111111100',
              '001000000000000',
              '001000000000000',
              '001111111111111'
              ],
  'maze':
   ['111111111111111111111111111111111111111111111111111111111111111111111111111', 
    '111111111111111111111111111111111111111111111111111111111111111111111111111', 
    '110000000000000011000000110000001100000001100000011000000110000000000000011', 
    '110000000000000011000000110000001100000001100000011000000110000000000000011',
    '110011111111110011001100110011001100111001100110011001100110011111111110011',
    '110011111111110011001100110011001100111001100110011001100110011111111110011',
    '110011000000110011001100000011000000111000000110000001100110011000000110011',
    '110011000000110011001100000011000000111000000110000001100110011000000110011',
    '110011000000110011001100110011111100111001111110011001100110011000000110011',
    '110011000000110011001100110011111100111001111110011001100110011000000110011',
    '110011000000000011000000110000000000111000000000011000000110000000000110011',
    '110011000000000011000000110000000000111000000000011000000110000000000110011',
    '110011111100110011001111110011111100111001111110011111100110011001111110011',
    '110011111100110011001111110011111100111001111110011111100110011001111110011',
    '110000000000000000000000110011000000111000000110011000000000000000000000011',
    '110000000000000000000000110011000000111000000110011000000000000000000000011',
    '111111111111110011001100110011001100111001100110011001100110011111111111111',
    '111111111111110011001100110011001100111001100110011001100110011111111111111',
    '110000000000110011000000000000001100111001100000000000000110011000000000011',
    '110000000000110011000000000000001100111001100000000000000110011000000000011',
    '110011111100110011001111111111001100111001100111111111100110011001111110011',
    '110011111100110011001111111111001100111001100111111111100110011001111110011',
    '110000000000000011000000000000000000000000000000000000000110000000000000011',
    '110000000000000011000000000000000000000000000000000000000110000000000000011',
    '111111111111110011001100110011111100111001111110011001100110011111111111111',
    '111111111111110011001100110011111100111001111110011001100110011111111111111',
    '110000000000000000000000110011000000111000000110011000000000000000000000011',
    '110000000000000000000000110011000000111000000110011000000000000000000000011',
    '110011111100110011001111110011001111111111100110011111100110011001111110011',
    '110011111100110011001111110011001111111111100110011111100110011001111110011',
    '110011000000000011000000110011000000000000000110011000000110000000000110011',
    '110011000000000011000000110011000000000000000110011000000110000000000110011',
    '110011000000110011001100110011111100111001111110011001100110011000000110011',
    '110011000000110011001100110011111100111001111110011001100110011000000110011',
    '110011000000110011001100000000000000111000000000000001100110011000000110011',
    '110011000000110011001100000000000000111000000000000001100110011000000110011',
    '110011111111110011001100110011111111111111111110011001100110011111111110011',
    '110011111111110011001100110011111111111111111110011001100110011111111110011',
    '110000000000000011000000110000000000000000000000011000000110000000000000011', 
    '110000000000000011000000110000000000000000000000011000000110000000000000011', 
    '111111111111111111111111111111111111111111111111111111111111111111111111111', 
    '111111111111111111111111111111111111111111111111111111111111111111111111111']
};