// function good() {
//     document.getElementById(emoji-base).style.color = 'green';  
// }


function good(){
    document.querySelector('i.bi:nth-child(1)').style.display = 'none';
    document.querySelector('i.bi:nth-child(2)').style.display = 'flex';
    document.querySelector('i.bi:nth-child(3)').style.display = 'none';
    document.querySelector('.theOneWithTheText').style.color = 'green';
    document.querySelector('.theOneWithTheText').innerHTML = 'Good choice!';
}


function bad() {
    document.querySelector('i.bi:nth-child(1)').style.display = 'none';
    document.querySelector('i.bi:nth-child(2)').style.display = 'none';
    document.querySelector('i.bi:nth-child(3)').style.display = 'flex';
    document.querySelector('.theOneWithTheText').style.color = 'red';
    document.querySelector('.theOneWithTheText').innerHTML = 'Oh no! So sad!';
}