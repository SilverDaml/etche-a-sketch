// Creating main variables
const gridContainer = document.getElementById('grid-container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnErase = document.createElement('button')
const btnSize = document.createElement('button')
const colors = document.querySelector('#colors')
const buttonsContainer = document.querySelector('.buttons')
const h1Container = document.querySelector('.h1-div')
buttonsContainer.insertBefore(colors, buttonsContainer.firstChild)




//Creating 16x16 grid container
function gridFiller(col , rows) {
    for(let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        div.classList.add('square')
        div.style.backgroundColor = '#fff'
        div.style.border = '1px solid #000'
        gridContainer.style.borderRadius = '10px' 
        gridContainer.style.border = '3px solid #000'
        gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        gridContainer.style.margin = '2.5rem 0'
        gridContainer.appendChild(div)
    }
}
gridFiller(16,16)


//Creating a color Picking wheel
function color() {
    const squares = gridContainer.querySelectorAll('.square')
    colors.style.fontFamily = 'Comic Neue, cursive'
    colors.style.fontSize = '2em'
    colors.style.width = '100%'
    colors.style.height = '100%'
    colors.backgroundColor = 'rbg(239, 239,239)'
    
    colors.addEventListener('mouseover', () => {
        colors.style.cursor = 'pointer'
    })
    
    colors.addEventListener('change', () => {
        
        squares.forEach(square => square.addEventListener('mouseover', ()=> {
               
                square.style.backgroundColor = colors.value;
            
        }))
    }) 
    colors.classList.add('btn')
    
    

    
}
color();

//Creating and appending Black button to button container
function blackColor() { 
    
    const squares = gridContainer.querySelectorAll('.square')
    btnBlack.textContent = "BLACK"
    btnBlack.style.fontSize = '2em'
    btnBlack.style.width = '100%'
    btnBlack.style.height = '100%'
    btnBlack.style.border = '1px solid black'
    btnBlack.style.fontFamily = 'Comic Neue, cursive'

    btnBlack.addEventListener('mouseover', () => {
        btnBlack.style.backgroundColor = 'black'
        btnBlack.style.color = 'white'
        btnBlack.style.cursor = 'pointer'
    })
    btnBlack.addEventListener('mouseout', () => {
        btnBlack.style.backgroundColor ='rgb(239,239,239)'
        btnBlack.style.color = '#000'
       
    })


    
    btnBlack.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', ()=> {
            square.style.background = '#000';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
    
}
blackColor();



//Creating and appending Gray button to button container
function grayColor() { 
    
    const squares = gridContainer.querySelectorAll('.square')
    btnGray.textContent = "GRAY"
    btnGray.style.fontSize = '2em'
    btnGray.style.fontFamily = 'Comic Neue, cursive'
    btnGray.style.width = '100%'
    btnGray.style.height = '100%'
    btnGray.style.border = '1px solid black'
    
    btnGray.addEventListener('mouseover', () => {
        btnGray.style.backgroundColor = 'gray'
        btnGray.style.cursor = 'pointer'
    })
    btnGray.addEventListener('mouseout', () => {
        btnGray.style.backgroundColor = 'rgb(239,239,239)'
    })

    
    
    
    btnGray.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            square.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor();



//Creating and appending RGB button to button container
function rgbColor() { 
    
    const squares = gridContainer.querySelectorAll('.square')
    btnRGB.textContent = "RAINBOW"
    btnRGB.style.fontSize = '2em'
    btnRGB.style.fontFamily = 'Comic Neue, cursive'
    btnRGB.style.width = '100%'
    btnRGB.style.height = '100%'
    btnRGB.style.border = '1px solid black'
    
    btnRGB.addEventListener('mouseover', () => {
        btnRGB.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)'
        btnRGB.style.color = 'white'
        btnRGB.style.cursor = 'pointer'
    })
    btnRGB.addEventListener('mouseout', () => {
        btnRGB.style.background = 'rgb(239,239,239)'
        btnRGB.style.color = 'black'
    })


    
    btnRGB.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', ()=> {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            square.style.background = RGB;
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}
rgbColor();


//Creating and appending Eraser button to button container
function erase() {
    const squares = gridContainer.querySelectorAll('.square')
    btnErase.textContent = "ERASER"
    btnErase.style.fontSize = '2em'
    btnErase.style.fontFamily = 'Comic Neue, cursive'
    btnErase.style.width = '100%'
    btnErase.style.height = '100%'
    btnErase.style.border = '1px solid black'
    
    btnErase.addEventListener('mouseover', () => {

        btnErase.style.cursor = 'pointer'
    })
    

    btnErase.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', ()=> {
            square.style.background = '#fff';
        }))
    })
    buttonsContainer.appendChild(btnErase).classList.add('btn')
}
erase();

//Creating grid reseting function
function reSet() {
    const squares = gridContainer.querySelectorAll('.square')
    
    squares.forEach(square => {
        square.remove();
    })
       
}








//Reseting and resizing GRID container
function reSize() {
    //Styling
    btnSize.textContent = 'RESET'
    btnSize.style.height = '100%'
    btnSize.style.fontFamily = 'Comic Neue, cursive'
    btnSize.style.fontSize = '2em'
    btnSize.style.width = '100%'
    btnSize.style.border = '1px solid black'
    
    //Hover effects
    btnSize.addEventListener('mouseover', () => {
        btnSize.style.background = 'linear-gradient(90deg, #333333, #dd1818)'
        btnSize.style.color = 'white'
        btnSize.style.cursor = 'pointer'
    })
    btnSize.addEventListener('mouseout', () => {
        btnSize.style.background = 'rgb(239,239,239)'
        btnSize.style.color = 'black'
    })
    

   
    
    //Functionality
    btnSize.addEventListener('click', () => {
        let user = prompt('CHOOSE YOUR GRID SIZE')
        if(user === null || user < 1 || user > 100){
            reSet();
            gridFiller(16,16);
            blackColor();
            grayColor();
            rgbColor();
            erase();
            color()
            buttonsContainer.appendChild(btnSize);
        } else { 
            reSet();
            gridFiller(user,user);
            blackColor();
            grayColor();
            rgbColor();
            erase();
            color()
            buttonsContainer.appendChild(btnSize);
           
            
        }
    })
    buttonsContainer.appendChild(btnSize, btnRGB.nextSibling).classList.add('btn')

}
reSize()



