const accordianBtn1 = document.querySelector('.accordian-btnG');
const accordianBtn2 = document.querySelector('.accordian-btnC');
const accordianBtn3 = document.querySelector('.accordian-btnT');
const accordian1 = document.querySelector('.accordianG')
const accordian2 = document.querySelector('.accordianC')
const accordian3 = document.querySelector('.accordianT')
const content = document.querySelector('.accordian-content')





function addClass1(){
    accordian1.classList.add('active');
}  

function removeClass1(){
    accordian1.classList.remove('active')
}

function addClass2(){
    console.log('Working')
    accordian2.classList.add('active');
}  

function removeClass2(){
    console.log('Working')
    accordian2.classList.remove('active')
}

function addClass3(){
    accordian3.classList.add('active');
}  

function removeClass3(){
    accordian3.classList.remove('active')
}





accordianBtn1.addEventListener('click', () => {
    const isActive = accordian1.classList.contains('active');

    if(isActive){
        removeClass1();
    }else{
        addClass1();
    }
});




accordianBtn2.addEventListener('click', () => {
    console.log('Working')
    const isActive = accordian2.classList.contains('active');

    if(isActive){
        removeClass2();
    }else{
        addClass2();
    }
});


accordianBtn3.addEventListener('click', () => {
    const isActive = accordian3.classList.contains('active');

    if(isActive){
        removeClass3();
    }else{
        addClass3();
    }
});
