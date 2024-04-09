
var timer = 0;
var timeInfo = setInterval (()=>{
    timer++;
    console.log(timer);
}, 1000)

var tl = gsap.timeline();

tl.to(".frame-1-pic-3", {opacity: 1, duration: 0.3})
tl.to(".frame-1-pic-4", {opacity: 1, duration: 0.3})
tl.to(".frame-1-pic-1", {opacity: 1, duration: 0.3})
tl.to(".frame-1-pic-2", {opacity: 1, duration: 0.3})
tl.to(".lenovo-logo", {top: 0, duration: 0.3})
tl.to(".lenovo-logo", {opacity: 1, delay: -0.25, duration: 0.3})
tl.to(".frame-1-pic-1, .frame-1-pic-2", {top: 550, delay: 1})
tl.to(".frame-2-text-1", {left: 0, opacity: 1, ease: "back.out(1.5)", delay: -0.3})
tl.to(".frame-2-text-2", {left: 0, opacity: 1, ease: "back.out(1.5)"})
tl.to(".frame-2-text-1, .frame-2-text-2", {left: 281, delay: 1.5, opacity: 0, ease: "power4.out"})
tl.to(".frame-1-pic-4, .frame-1-pic-3", {top: -395, duration: 0.4})
tl.to(".frame-1-pic-1, .frame-1-pic-2", {top: 0, duration: 0.4, delay: -0.25})
tl.to(".frame-3-text-1", {left: 0, opacity: 1,  duration: 0.4, ease: "back.out(1)"})

tl.to(".lenovo-logo", {top: -40, opacity: 0, delay: 1.5})
tl.to(".frame-3-text-1", {opacity: 0, delay: -0.5})
tl.to(".frame-1-pic-1, .frame-1-pic-2", {top: 550, duration: 0.4, delay: -0.5})


tl.to(".award-logo", {opacity: 1, delay: -0.5})

tl.to(".lenovo_thinkpad, .lenovo_thinkpad_x1_yoga ", {top: 0, left: 0, scale: 1, opacity: 1, duration: 0.4, delay: -0.5})
tl.to(".lenovo_thinkpad", {top: -200, left: -210, scale: 0.5, delay: 1, duration: 0.4})
tl.to(".lenovo_thinkpad_x1_yoga", {opacity: 0, delay: -0.4})

tl.to(".lenovo_yoga, .lenovo_yoga_900 ", {top: 0, left: 0, scale: 1, opacity: 1, duration: 0.4, delay: -0.5})
tl.to(".lenovo_yoga", {top: -200, left: -210, scale: 0.5, delay: 1, duration: 0.4})
tl.to(".lenovo_yoga_900", {opacity: 0, delay: -0.4})

tl.to(".lenovo_yoga_home, .lenovo_yoga_home_900 ", {top: 0, left: 0, scale: 1, opacity: 1, duration: 0.4, delay: -0.5})
tl.to(".lenovo_yoga_home", {top: -200, left: -210, scale: 0.5, delay: 1, duration: 0.4})
tl.to(".lenovo_yoga_home_900", {opacity: 0, delay: -0.4})

tl.to(".lenovo_thinkpad_tablet, .lenovo_thinkpad_x1_tablet ", {top: 0, left: 0, scale: 1, opacity: 1, delay: -0.5})
tl.to(".lenovo_thinkpad_tablet", {top: -200, left: -210, scale: 0.5, delay: 1, duration: 0.4})
tl.to(".lenovo_thinkpad_x1_tablet, .award-logo", {opacity: 0, delay: -0.4})

tl.to(".lenovo-logo", {top: 0, opacity: 1, delay: -0.5})
tl.to(".vendor_logo", {opacity: 1})
tl.to(".product_frame", {opacity: 1})
tl.to(".cta", {opacity: 1, onComplete(){
    console.log("Finish", timer)
    clearInterval(timeInfo);
}})