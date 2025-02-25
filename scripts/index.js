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