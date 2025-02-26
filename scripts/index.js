const slides=document.querySelectorAll('.wrap > .swiper-wrapper > .swiper-slide')
const nav=document.querySelectorAll('nav a');

const pfWrap = new Swiper ('.wrap',{
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on : {
        slideChangeTransitionEnd : function () {
        for(let i of nav) i.classList.remove('active');
        if (this.activeIndex === 0) {
            nav[0].classList.add('active');
        } else if (this.activeIndex <= 2) {
            nav[1].classList.add('active');
        } else if (this.activeIndex <= 6) {
            nav[2].classList.add('active');
        } else if (this.activeIndex === 7) {
            nav[3].classList.add('active');
        };

        setTimeout(() => {
            ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
        }, 0);
        }
    },
});

/* =================header 클릭이벤트 모음 */
const contact = document.querySelector ('header .contact');
const navBar = document.querySelector ('nav');

console.log(navBar.children[0]) //홈
console.log(navBar.children[1]) //프로필
console.log(navBar.children[2]) //웹프로젝트
console.log(navBar.children[3]) //디자인


navBar.children[0].addEventListener ('click',function(e){
    e.preventDefault();
    pfWrap.slideTo(0, 1000); //1번째 슬라이드
});
navBar.children[1].addEventListener ('click',function(e){
    e.preventDefault();
    pfWrap.slideTo(1, 1000); //2번째 슬라이드
});
navBar.children[2].addEventListener ('click',function(e){
    e.preventDefault();
    pfWrap.slideTo(3, 1000); //4번째 슬라이드
});
navBar.children[3].addEventListener ('click',function(e){
    e.preventDefault();
    pfWrap.slideTo(7, 1000); //8번째 슬라이드
});

contact.addEventListener ('click',function(e){//Contact Me, 소현 클릭시 마지막 페이지 이동
    e.preventDefault();
    pfWrap.slideTo(8, 1000); //마지막 (9번째 슬라이드)
});


/* =================그래픽 디자인 스와이퍼 */

const banner = new Swiper ('.design1',{
    autoplay:{delay:0,},
    loop:true,
    speed:4000,
    slidesPerView:3,
    spaceBetween:10,
});
const sns = new Swiper ('.design2',{
    autoplay:{delay:0,},
    loop:true,
    speed:6000,
    slidesPerView:3,
    spaceBetween:10,
});
const longImg = new Swiper ('.design3',{
    autoplay:{delay:3000,},
    effect:'fade',
    loop:true,
    spaceBetween:10,
    pagination:{
        el:'.design3_set .swiper-pagination',
        type:'bullets',
    },
});

/* ================그래픽 디자인 클릭시 팝업 이벤트 */


const bannerProject = document.querySelectorAll('.grp_contents .banner img')
const designProject = document.querySelectorAll('.grp_contents .snsDetail img')
const popup_bg = document.querySelector('.popup_bg');
popup_bg.style.display = 'none' //팝업 숨기기

console.log(bannerProject,designProject)

for(let i of bannerProject){/* 배너디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'block'
        popup_bg.children[0].style.marginTop = '300px';
        popup_bg.children[0].style.width = '1000px';/* 배너디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = 'max-content';
        popup_bg.children[0].children[0].src = i.src;
        pfWrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}

for(let i of designProject){/* SNS디자인, 상세디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'block'
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.children[0].style.marginTop = '100px';
        popup_bg.children[0].style.width = '800px';/* SNS,상세디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = '800px';
        popup_bg.children[0].children[0].src = i.src;
        pfWrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}

popup_bg.addEventListener('click',()=>{ popup_bg.style.display = 'none'; pfWrap.mousewheel.enable(); })/* 마우스 휠 풀기 */