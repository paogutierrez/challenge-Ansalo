const button = document.querySelectorAll('.botonnumeroyletra');
const putNumber = document.querySelector('#point1');
const putLetter = document.querySelector('#point2');
const clear = document.querySelector('#clear');

clear.addEventListener('click', ()=>{
    putNumber.innerHTML=''
    putLetter.innerHTML=''
})

const buttons = (array)=>{
    const btnInner = array.target.innerText
    const btnID = array.target.id
    // const numberID = parseInt(btnID)
    const number = btnInner[2]
    const letter = btnInner[0]
    let numeros = putNumber.innerText;
    let letras = putLetter.innerText
    const lettersArray = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    // console.log(lettersArray)
    if(numeros === ''){
        if(number === '1'){
            putNumber.innerHTML= number
        }else{
            alert('Comienza por el número 1')
        }
    }else{
        if (numeros !== '') {
            if(number === '0' && numeros[numeros.length -1] === '9'){
                putNumber.innerHTML= numeros + ', ' + number
            }else{
                if(numeros[numeros.length -1] === '0' && letras ==='' && letter !== 'A'){
                    alert('Comienza por la letra A')
                }else if(number-1 > numeros[numeros.length -1] && letras ==='' ){
                    alert('No es el número que sigue')
                }else if(number <= numeros[numeros.length -1] && letras ===''){
                    alert('No es el número que sigue')
                }else{
                    putNumber.innerHTML= numeros + ', ' + number
                }
            }
        }
    }
    if(numeros[numeros.length-1] === '0' && letras===''){
        if(letter === 'A'){
            putLetter.innerHTML= letter
            putNumber.innerHTML= numeros
        }
    }else{
        if (letras !== '') {
            if(letter === 'J' && letras[letras.length -1] === 'I'){
                putLetter.innerHTML= letras + ', ' + letter
                putNumber.innerHTML= numeros
            }else{
                if( lettersArray.indexOf(letter)-1 > lettersArray.indexOf(letras[letras.length -1])){
                    putNumber.innerHTML= numeros
                    alert('No es la letra que sigue ')
                }else if(letter <= letras[letras.length -1]){
                    putNumber.innerHTML= numeros
                    alert('No es la letra que sigue')
                }else{
                    putLetter.innerHTML= letras + ', ' + letter
                    putNumber.innerHTML= numeros;
                }
            }
        }
    }
}
for(let i=0; i < button.length; i += 1){
    button[i].addEventListener('click', buttons)
}