const slides=document.querySelectorAll('.wrap > .swiper-wrapper > .swiper-slide')
const nav=document.querySelectorAll('nav a');

const pfWrap = new Swiper ('.wrap',{
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on : {
        slideChangeTransitionEnd : function () {
            for(let i of nav) i.classList.remove('active')
                nav[this.activeIndex].classList.add('active')
            setTimeout(()=>{
                scrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
            }, 0);
        }
    },
})

const popup_bg = document.querySelector('.popup_bg');
popup_bg.style.display = 'none' //팝업 숨기기

const banner = new Swiper ('.design1',{
    autoplay:{delay:0,},
    loop:true,
    speed:4000,
    slidesPerView:3,
});
const sns = new Swiper ('.design2',{
    autoplay:{delay:0,},
    loop:true,
    speed:6000,
    slidesPerView:3,
});
const longImg = new Swiper ('.design3',{
    autoplay:{delay:3000,},
    effect:'fade',
    loop:true,
    pagination:{
        el:'.design3_set .swiper-pagination',
        type:'bullets',
    },
});