document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const width = 10;
    const scoreDisp = document.querySelector('#score');
    const startButton = document.querySelector('#start-button');
    
    const L_tetris = [
    [1, width+1, width*2 + 1, 2],
    [1, width+1, width*2 + 1, width*2],
    [width, width+1, width+2, width*2+2],
    [width, width*2, width*2+1, width*2+2]
    ]

    const Z_tetris = [
    [0, width, width+1, width*2+1],
    [width+1, width+ 2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
    ]

    const T_tetris = [
    [1, width, width+1, width+2],
    [1, width+ 1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
    ]

    const O_tetris = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
    ]

    const I_tetris = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
    ]
})
