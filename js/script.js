window.alert("در رزولوشن کمتر از 820 پیکسل . ایکون های بالا سمت راست به داخل منوی user وارد میشوند ")


let userMenuBtn = document.querySelector('.user-menu-btn')



userMenuBtn.addEventListener('click' , function(e){
    e.preventDefault();

    let userMenu = document.querySelector('.user-menu')

    userMenu.classList.toggle('none')
})




let scrollBox = document.querySelector('.ssi-items-box');

if(scrollBox){

    let itemNext = document.querySelector('.item-next');
    let itemPrev = document.querySelector('.item-prev');


    itemNext.addEventListener('click' , function(e){
        e.preventDefault();

        scrollBox.scrollLeft -= 200
        
    })

    itemPrev.addEventListener('click' , function(e){
        e.preventDefault();

        scrollBox.scrollLeft += 200
    })

}

console.log(scrollBox.scrollLeft)



