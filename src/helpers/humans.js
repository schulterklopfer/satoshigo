/*
 * MIT License
 *
 * Copyright (c) 2021 schulterklopfer/__escapee__
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILIT * Y, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const humanAnims = {
  Aristocrat: {
    name: 'Aristocrat',
    anims: {
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Aristocrat/Aristocrat.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 40,
            width: 120,
            height: 200,
          },
        ],
      },
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Aristocrat/BoredAristocratAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 340,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 570,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 810,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 1050,
            y: 60,
            width: 120,
            height: 200,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Aristocrat/WalkAristocratAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 40,
            width: 120,
            height: 200,
          },
          {
            x: 390,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 580,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 770,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 1060,
            y: 40,
            width: 120,
            height: 200,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Aristocrat/YawnAristocratAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 260,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 450,
            y: 60,
            width: 120,
            height: 200,
          },
        ],
      },
    },
  },
  BGRBoy: {
    name: 'BGRBoy',
    anims: {
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/BGRBoy/BGRBoy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/BGRBoy/BoredBGRBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 150,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 370,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 810,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1040,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/BGRBoy/WalkBGRBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 400,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/BGRBoy/YawnBGRBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  BWMan: {
    name: 'BWMan',
    anims: {
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/BWMan/BWMan.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/BWMan/BoredBWManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 340,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1080,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/BWMan/WalkBWManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 380,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 800,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/BWMan/YawnBWManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 480,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  BlueCapBoy: {
    name: 'BlueCapBoy',
    anims: {
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/BlueCapBoy/YawBlueCapBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 260,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 450,
            y: 70,
            width: 130,
            height: 180,
          },
        ],
      },
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/BlueCapBoy/BoredBlueCapBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 340,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 570,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 810,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 1050,
            y: 70,
            width: 130,
            height: 180,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/BlueCapBoy/WalkBlueCapBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1920,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 700,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 890,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 1090,
            y: 69,
            width: 130,
            height: 180,
          },
          {
            x: 1350,
            y: 70,
            width: 130,
            height: 180,
          },
        ],
      },
    },
  },
  BlueHood: {
    name: 'BlueHood',
    anims: {
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/BlueHood/BlueHood.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 60,
            width: 120,
            height: 180,
          },
        ],
      },
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/BlueHood/BoredBlueHoodAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 330,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 550,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 780,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 1020,
            y: 70,
            width: 120,
            height: 180,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/BlueHood/WalkBlueHoodAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 60,
            width: 120,
            height: 180,
          },
          {
            x: 390,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 580,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 770,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 1060,
            y: 60,
            width: 120,
            height: 180,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/BlueHood/YawnBlueHoodAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 260,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 460,
            y: 70,
            width: 120,
            height: 180,
          },
        ],
      },
    },
  },
  Builder: {
    name: 'Builder',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Builder/BoredBuilderAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 120,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 350,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 590,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 830,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 1050,
            y: 60,
            width: 130,
            height: 190,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Builder/Builder.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 50,
            width: 130,
            height: 190,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Builder/WalkBuilderAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 50,
            width: 130,
            height: 190,
          },
          {
            x: 370,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 570,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 780,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 1060,
            y: 50,
            width: 130,
            height: 190,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Builder/YawnBuilderAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 50,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 260,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 460,
            y: 60,
            width: 130,
            height: 190,
          },
        ],
      },
    },
  },
  BusinessMan: {
    name: 'BusinessMan',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/BusinessMan/BoredBusinessManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 120,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 360,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 600,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1050,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/BusinessMan/BusinessMan.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/BusinessMan/WalkBusinessManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 380,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/BusinessMan/YawnBusinessManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 80,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Chef: {
    name: 'Chef',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Chef/BoredChefAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 340,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 590,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 840,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 1090,
            y: 50,
            width: 100,
            height: 210,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Chef/Chef.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 30,
            width: 100,
            height: 210,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Chef/WalkChefAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 30,
            width: 100,
            height: 210,
          },
          {
            x: 380,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 590,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 800,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 1070,
            y: 30,
            width: 100,
            height: 210,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Chef/YawnChefAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 50,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 270,
            y: 50,
            width: 100,
            height: 210,
          },
          {
            x: 490,
            y: 50,
            width: 100,
            height: 210,
          },
        ],
      },
    },
  },
  Cowboy: {
    name: 'Cowboy',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Cowboy/BoredCowboyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 320,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 560,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 810,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 1060,
            y: 60,
            width: 120,
            height: 200,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Cowboy/Cowboy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 40,
            width: 120,
            height: 200,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Cowboy/WalkCowboyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 40,
            width: 120,
            height: 200,
          },
          {
            x: 380,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 580,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 780,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 1060,
            y: 40,
            width: 120,
            height: 200,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Cowboy/YawnCowboyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 260,
            y: 60,
            width: 120,
            height: 200,
          },
          {
            x: 460,
            y: 60,
            width: 120,
            height: 200,
          },
        ],
      },
    },
  },
  Cyborg: {
    name: 'Cyborg',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Cyborg/BoredCyborgAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 130,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 340,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 560,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1030,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Cyborg/Cyborg.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Cyborg/WalkCyborgAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 389,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Cyborg/YawnCyborgAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 80,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 470,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  FEZ: {
    name: 'FEZ',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/FEZ/BoredFEZAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 330,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 590,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 840,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 1080,
            y: 60,
            width: 100,
            height: 200,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/FEZ/FEZ.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 40,
            width: 100,
            height: 200,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/FEZ/WalkFEZAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 40,
            width: 100,
            height: 200,
          },
          {
            x: 370,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 590,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 800,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 1070,
            y: 40,
            width: 100,
            height: 200,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/FEZ/YawnFEZAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 270,
            y: 60,
            width: 100,
            height: 200,
          },
          {
            x: 470,
            y: 60,
            width: 100,
            height: 200,
          },
        ],
      },
    },
  },
  Frost: {
    name: 'Frost',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Frost/BoredFrostAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 330,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 560,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 800,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1030,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Frost/Frost.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Frost/WalkFrostAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Frost/YawnFrostAnim 1.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 250,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 440,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
    },
  },
  GBMan: {
    name: 'GBMan',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/GBMan/BoredGBManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 330,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 570,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 820,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1080,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/GBMan/GBMan.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/GBMan/WalkGBManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/GBMan/YawnGBManAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 260,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 470,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  KarateBoy: {
    name: 'KarateBoy',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/KarateBoy/BoredKarateBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 110,
            height: 160,
          },
          {
            x: 320,
            y: 80,
            width: 110,
            height: 160,
          },
          {
            x: 560,
            y: 80,
            width: 110,
            height: 160,
          },
          {
            x: 810,
            y: 80,
            width: 110,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 110,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/KarateBoy/KarateBoy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/KarateBoy/WalkKarateBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 800,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/KarateBoy/YawnKarateBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 80,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  NerdBoy: {
    name: 'NerdBoy',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/NerdBoy/BoredNerdBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 330,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 570,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 810,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1050,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/NerdBoy/NerdBoy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/NerdBoy/WalkNerdBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 770,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1060,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/NerdBoy/YawnNerdBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 260,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
    },
  },
  NerdGirl: {
    name: 'NerdGirl',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/NerdGirl/BoredNerdGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 320,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 570,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 810,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 1050,
            y: 70,
            width: 120,
            height: 170,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/NerdGirl/NerdGirl.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 70,
            width: 120,
            height: 170,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/NerdGirl/WalkNerdGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 380,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 570,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 770,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 1060,
            y: 70,
            width: 120,
            height: 170,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/NerdGirl/YawnNerdGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 260,
            y: 70,
            width: 120,
            height: 170,
          },
          {
            x: 460,
            y: 70,
            width: 120,
            height: 170,
          },
        ],
      },
    },
  },
  Ninja: {
    name: 'Ninja',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Ninja/BoredNinjaAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 330,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 570,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 800,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1040,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Ninja/Ninja.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Ninja/WalkNinjaAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 410,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Ninja/YawnNinjaAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 470,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Oldster_1: {
    name: 'Oldster_1',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Oldster_1/BoredOldster_1Anim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 120,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 350,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Oldster_1/Oldster_1.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Oldster_1/WalkOldster_1Anim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Oldster_1/YawnOldster_1Anim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 80,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 470,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Oldster_2: {
    name: 'Oldster_2',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Oldster_2/BoredOldster_2Anim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 140,
            height: 160,
          },
          {
            x: 340,
            y: 80,
            width: 150,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 150,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 150,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 140,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Oldster_2/Oldster_2.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Oldster_2/WalkOldster_2Anim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Oldster_2/YawnOldster_2Anim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Pirate: {
    name: 'Pirate',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Pirate/BoredPirateAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 330,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 800,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1040,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Pirate/Pirate.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Pirate/WalkPirateAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 370,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 770,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1050,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Pirate/YawnPirateAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 260,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 450,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
    },
  },
  Plumber: {
    name: 'Plumber',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Plumber/BoredPlumberAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 340,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 590,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 830,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 1070,
            y: 60,
            width: 130,
            height: 190,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Plumber/Plumber.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 50,
            width: 130,
            height: 190,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Plumber/WalkPlumberAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 50,
            width: 130,
            height: 190,
          },
          {
            x: 380,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 580,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 780,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 1060,
            y: 50,
            width: 130,
            height: 190,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Plumber/YawnPlumberAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 260,
            y: 60,
            width: 130,
            height: 190,
          },
          {
            x: 450,
            y: 60,
            width: 130,
            height: 190,
          },
        ],
      },
    },
  },
  Punk: {
    name: 'Punk',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Punk/BoredPunkAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 130,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 360,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 600,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 840,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 1060,
            y: 70,
            width: 100,
            height: 180,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Punk/Punk.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 100,
            height: 180,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Punk/WalkPunkAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 100,
            height: 180,
          },
          {
            x: 400,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 590,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 790,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 1070,
            y: 60,
            width: 100,
            height: 180,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Punk/YawnPunkAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 260,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 470,
            y: 70,
            width: 100,
            height: 180,
          },
        ],
      },
    },
  },
  RGboy: {
    name: 'RGboy',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/RGboy/BoredRGboyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 150,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 370,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 810,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1020,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/RGboy/RGboy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/RGboy/WalkRGboyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/RGboy/YawnRGboyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 450,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  RYGirl: {
    name: 'RYGirl',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/RYGirl/BoredRYGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 320,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 570,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1090,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/RYGirl/RYGirl.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/RYGirl/WalkRYGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/RYGirl/YawnRYGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 480,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Robot: {
    name: 'Robot',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Robot/BoredRobotAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 130,
            y: 90,
            width: 100,
            height: 140,
          },
          {
            x: 350,
            y: 110,
            width: 100,
            height: 120,
          },
          {
            x: 590,
            y: 110,
            width: 100,
            height: 120,
          },
          {
            x: 830,
            y: 110,
            width: 100,
            height: 120,
          },
          {
            x: 1070,
            y: 90,
            width: 100,
            height: 140,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Robot/Robot.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Robot/WalkRobotAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 410,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Robot/YawnRobotAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 470,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Rogue: {
    name: 'Rogue',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Rogue/BoredRogueAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 120,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 340,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 590,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 830,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 1060,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Rogue/Rogue.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Rogue/WalkRogueAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 400,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 590,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 780,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 1070,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Rogue/YawnRogueAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 80,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 270,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 460,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
    },
  },
  Scientist: {
    name: 'Scientist',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Scientist/BoredScientistAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 300,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 560,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1090,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Scientist/Scientist.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Scientist/WalkScientistAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 370,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 1060,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Scientist/YawnScientistAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 260,
            y: 80,
            width: 120,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 120,
            height: 160,
          },
        ],
      },
    },
  },
  Stanley: {
    name: 'Stanley',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Stanley/BoredStanleyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 130,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 360,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 590,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 830,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 1070,
            y: 70,
            width: 100,
            height: 180,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Stanley/Stanley.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 100,
            height: 180,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Stanley/WalkStanleyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 60,
            width: 100,
            height: 180,
          },
          {
            x: 400,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 590,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 790,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 1070,
            y: 60,
            width: 100,
            height: 180,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Stanley/YawnStanleyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 270,
            y: 70,
            width: 100,
            height: 180,
          },
          {
            x: 480,
            y: 70,
            width: 100,
            height: 180,
          },
        ],
      },
    },
  },
  SunGirl: {
    name: 'SunGirl',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/SunGirl/BoredSunGirlAnim 1.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 340,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/SunGirl/SunGirl.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/SunGirl/WalkSunGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 400,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 780,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/SunGirl/YawnSunGirlAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Thief: {
    name: 'Thief',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Thief/BoredThiefAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 320,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 580,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 830,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 1050,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Thief/Thief.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Thief/WalkThiefAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 380,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 590,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 790,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 1070,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Thief/YawnThiefAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 270,
            y: 70,
            width: 100,
            height: 170,
          },
          {
            x: 470,
            y: 70,
            width: 100,
            height: 170,
          },
        ],
      },
    },
  },
  VGBoy: {
    name: 'VGBoy',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/VGBoy/BoredVGBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 340,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 580,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 830,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1090,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/VGBoy/VGBoy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/VGBoy/WalkVGBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 400,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 790,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/VGBoy/YawnVGBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 80,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 460,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  Whiskered: {
    name: 'Whiskered',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/Whiskered/BoredWhiskeredAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 330,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 570,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 810,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1050,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/Whiskered/WalkWhiskeredAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 390,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 590,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 800,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 1070,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/Whiskered/Whiskered.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 110,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/Whiskered/YawnWhiskeredAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 70,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 270,
            y: 80,
            width: 100,
            height: 160,
          },
          {
            x: 470,
            y: 80,
            width: 100,
            height: 160,
          },
        ],
      },
    },
  },
  WhiteHood: {
    name: 'WhiteHood',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/WhiteHood/BoredWhiteHoodAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 330,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 580,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 830,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 1080,
            y: 70,
            width: 120,
            height: 180,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/WhiteHood/WalkWhiteHoodAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 60,
            width: 120,
            height: 180,
          },
          {
            x: 400,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 580,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 770,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 1060,
            y: 60,
            width: 120,
            height: 180,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/WhiteHood/WhiteHood.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 60,
            width: 120,
            height: 180,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/WhiteHood/YawnWhiteHoodAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 50,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 260,
            y: 70,
            width: 120,
            height: 180,
          },
          {
            x: 460,
            y: 70,
            width: 120,
            height: 180,
          },
        ],
      },
    },
  },
  YBBoy: {
    name: 'YBBoy',
    anims: {
      bored: {
        type: 'bored',
        animType: 'forward',
        source: require('../res/humans/YBBoy/BoredYBBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 90,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 330,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 570,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 800,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 1050,
            y: 70,
            width: 130,
            height: 180,
          },
        ],
      },
      walk: {
        type: 'walk',
        animType: 'bounce',
        source: require('../res/humans/YBBoy/WalkYBBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 1280,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 60,
            width: 130,
            height: 180,
          },
          {
            x: 370,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 570,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 770,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 1060,
            y: 60,
            width: 130,
            height: 180,
          },
        ],
      },
      static: {
        type: 'static',
        animType: 'none',
        source: require('../res/humans/YBBoy/YBBoy.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 320,
          type: 'png',
        },
        frames: [
          {
            x: 100,
            y: 60,
            width: 130,
            height: 180,
          },
        ],
      },
      yawn: {
        type: 'yawn',
        animType: 'bounce',
        source: require('../res/humans/YBBoy/YawnYBBoyAnim.png'),
        frameTime: 150,
        showStatic: false,
        dimensions: {
          height: 320,
          width: 640,
          type: 'png',
        },
        frames: [
          {
            x: 60,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 250,
            y: 70,
            width: 130,
            height: 180,
          },
          {
            x: 450,
            y: 70,
            width: 130,
            height: 180,
          },
        ],
      },
    },
  },
};

export const humans = [
  'Aristocrat',
  'BGRBoy',
  'BWMan',
  'BlueHood',
  'Builder',
  'BusinessMan',
  'Chef',
  'Cowboy',
  'Cyborg',
  'FEZ',
  'Frost',
  'GBMan',
  'KarateBoy',
  'NerdBoy',
  'NerdGirl',
  'Ninja',
  'Oldster_1',
  'Oldster_2',
  'Pirate',
  'Plumber',
  'Punk',
  'RGboy',
  'RYGirl',
  'Robot',
  'Rogue',
  'Scientist',
  'Stanley',
  'SunGirl',
  'Thief',
  'VGBoy',
  'Whiskered',
  'WhiteHood',
  'YBBoy',
];

export function getRandomHumanAnim(animType) {
  return getHumanAnim(
    humans[Math.floor(Math.random() * humans.length)],
    animType,
  );
}

export function getRandomHuman() {
  return getHuman(humans[Math.floor(Math.random() * humans.length)]);
}

export function getHumanAnim(humanType, animType) {
  const human = getHuman(humanType);

  if (!human || !human.anims[animType]) {
    return null;
  }
  return human.anims[animType];
}

export function getHuman(humanType) {
  if (!humanAnims[humanType]) {
    return null;
  }
  return humanAnims[humanType];
}
