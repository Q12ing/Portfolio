gsap.registerPlugin(ScrollTrigger);

const profileItems1 = document.querySelectorAll("#profile .pf_btm > li"); //프로필 하단
const profileLineBar = document.querySelector('#education .edu .edu_line .bar');
const year=document.querySelectorAll('#education .edu .edu_num li')
console.log(year[1]);
const labtopL = document.querySelectorAll ('.wrap .webL .web_bnr .center .labtop')
const labtopR = document.querySelectorAll ('.wrap .webR .web_bnr .center .labtop')
console.log(labtopL[1],labtopR[1])


/* ★★★★★ 기본설정:등장 전 안보이게하기 */
for(let i of profileItems1) i.style.opacity = '0'
for(let i of year) i.style.opacity = '0' 
profileLineBar.style.width = '0%'
profileLineBar.style.opacity = '0'
for(let i of labtopL) i.style.opacity = '0'
for(let i of labtopR) i.style.opacity = '0' 

// labtopL에 대해 개별적으로 애니메이션 적용
labtopL.forEach(l => {
    gsap.to(l, {
        scrollTrigger: {
            trigger:l, // 현재 반복되는 요소를 트리거로 설정
            start:"top 80%",
            end:"top 20%",
            scrub:true,
            toggleActions: "play reverse restart reverse",
            markers:false, // 디버깅 마커
            onEnter:() => {
                gsap.to(l, {
                    opacity:1,
                    x:100,
                });
            },
            onLeaveBack:() => {
                gsap.to(l, {
                    opacity:0,
                    x:-100,
                });
            },
            onEnterBack:() => {
                gsap.to(l, {
                    opacity:1,
                    x:100,
                });
            },
            onLeave:() => {
                gsap.to(l, {
                    opacity:0,
                    x:-100,
                });
            },
        },
    });
});

// labtopR에 대해 개별적으로 애니메이션 적용
labtopR.forEach(r => {
    gsap.to(r, {
        scrollTrigger: {
            trigger:r, // 현재 반복되는 요소를 트리거로 설정
            start:"top 80%",
            end:"top 20%",
            scrub:true,
            toggleActions:"play reverse restart reverse",
            markers:false, // 디버깅 마커
            onEnter:() => {
                gsap.to(r, {
                    opacity:1,
                    x:100,
                });
            },
            onLeaveBack:() => {
                gsap.to(r, {
                    opacity:0,
                    x:-100,
                });
            },
            onEnterBack:() => {
                gsap.to(r, {
                    opacity:1,
                    x:100,
                });
            },
            onLeave:() => {
                gsap.to(r, {
                    opacity:0,
                    x:-100,
                });
            },
        },
    });
});

/* ★★★★★ 프로필 하단 등장 + 스킬 등장 */
gsap.to(profileItems1, {
    scrollTrigger:{
        trigger:"#profile .pf_btm > li",
        start: "top 60%",
        end: "top 20%",
        scrub:true,
        toggleActions:"play reverse restart reverse",
        markers:false,
        onEnter:() => {
            gsap.to(profileItems1,{
                opacity:1,
                y:50,
                duration:0.8,
                stagger:0.2, // ★ 순차적으로 등장 ★
            });
            //==============================skill
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(1) .level .level_bar", {
                width:"90%",
                opacity:1,
                duration:0.3,
                delay:0.8,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(2) .level .level_bar", {
                width:"30%",
                opacity:1,
                duration:0.3,
                delay:0.8,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(3) .level .level_bar", {
                width:"90%",
                opacity:1,
                duration:0.4,
                delay:0.9,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(4) .level .level_bar", {
                width:"50%",
                opacity:1,
                duration:0.4,
                delay:0.9,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(5) .level .level_bar", {
                width:"70%",
                opacity:1,
                duration:0.5,
                delay:1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(6) .level .level_bar", {
                width:"50%",
                opacity:1,
                duration:0.5,
                delay:1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(7) .level .level_bar", {
                width:"70%",
                opacity:1,
                duration:0.6,
                delay:1.1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(8) .level .level_bar", {
                width:"30%",
                opacity:1,
                duration:0.6,
                delay:1.1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(9) .level .level_bar", {
                width:"50%",
                opacity:1,
                duration:0.7,
                delay:1.2,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(10) .level .level_bar", {
                width: "30%",
                opacity:1,
                duration:0.7,
                delay:1.2,
            });
        },
        onLeaveBack: () => {
            gsap.to(profileItems1, {
                opacity:0,
                y:0,
                duration:0.5,
                stagger:0.1, // ★ 사라질 때도 순차적으로 ★
            });
            //==============================skill
            gsap.to(".wrap #profile .pf_btm .skill ul li .level .level_bar", {
                width:"0%",
                opacity:0,
                duration:0.3,
            });
        },
        onEnterBack: () => {
            gsap.to(profileItems1,{
                opacity:1,
                y:50,
                duration:0.8,
                stagger:0.2, // ★ 순차적으로 등장 ★
            });
            //==============================skill
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(1) .level .level_bar", {
                width:"90%",
                opacity:1,
                duration:0.3,
                delay:0.8,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(2) .level .level_bar", {
                width:"30%",
                opacity:1,
                duration:0.3,
                delay:0.8,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(3) .level .level_bar", {
                width:"90%",
                opacity:1,
                duration:0.4,
                delay:0.9,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(4) .level .level_bar", {
                width:"50%",
                opacity:1,
                duration:0.4,
                delay:0.9,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(5) .level .level_bar", {
                width: "70%",
                opacity:1,
                duration:0.5,
                delay:1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(6) .level .level_bar", {
                width:"50%",
                opacity:1,
                duration:0.5,
                delay:1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(7) .level .level_bar", {
                width:"70%",
                opacity:1,
                duration:0.6,
                delay:1.1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(8) .level .level_bar", {
                width:"30%",
                opacity:1,
                duration:0.6,
                delay:1.1,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(9) .level .level_bar", {
                width:"50%",
                opacity:1,
                duration:0.7,
                delay:1.2,
            });
            gsap.to(".wrap #profile .pf_btm .skill ul li:nth-child(10) .level .level_bar", {
                width:"30%",
                opacity:1,
                duration:0.7,
                delay:1.2,
            });
        },
        onLeave: () => {
            gsap.to(profileItems1, {
                opacity:0,
                y:0,
                duration:0.5,
                stagger:0.1, // ★ 사라질 때도 순차적으로 ★
            });
            //==============================skill
            gsap.to(".wrap #profile .pf_btm .skill ul li .level .level_bar", {
                width:"0%",
                opacity:0,
                duration:0.3,
            });
        },
    }
})

/* ★★★★★ 프로필 경력 연혁 + 라인 등장 */
gsap.to(year, {
    scrollTrigger: {
        trigger: "#education .edu .edu_num li",
        start: "top 80%",
        end: "top 20%",
        scrub:true,
        toggleActions: "play reverse restart reverse",
        markers: false,
        onEnter: () => {
            gsap.to(year,{
                opacity: 1,
                duration: 0.8,
            });
            /* Line */
            gsap.to("#education .edu .edu_line .bar", {
                width:"100%",
                opacity:1,
                duration:1,
                scrub: true,
                delay:0.4,
                scrollTrigger:{
                    trigger:"#education .edu .edu_line .bar",
                    start: "top 80%",
                    end:"top 20%",
                    toggleActions:"play reverse restart reverse",
                    markers:false,
                },
            });
        },
        onLeaveBack: () => {
            gsap.to(year, {
                opacity: 0,
                duration: 0.5,
            });
            /* Line */
            gsap.to("#education .edu .edu_line .bar", {
                width:"0%",
                opacity:0,
                duration:0.3,
            });
        },
        onEnterBack: () => {
            gsap.to(year,{
                opacity: 1,
                duration: 0.8,
            });
            /* Line */
            gsap.to("#education .edu .edu_line .bar", {
                width:"100%",
                opacity:1,
                duration:1,
                scrub: true,
                delay:0.4,
                scrollTrigger:{
                    trigger:"#education .edu .edu_line .bar",
                    start: "top 80%",
                    end:"top 20%",
                    toggleActions:"play reverse restart reverse",
                    markers:false,
                },
            });
        },
        onLeave: () => {
            gsap.to(year, {
                opacity: 0,
                duration: 0.5,
            });
            /* Line */
            gsap.to("#education .edu .edu_line .bar", {
                width:"0%",
                opacity:0,
                duration:0.3,
            });
        },
    },
});
