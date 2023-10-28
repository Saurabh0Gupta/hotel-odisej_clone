var tl=gsap.timeline()
tl.from("#page1 svg",{
    y:-40,
    opacity:0,
    delay:1,
    duration:1
})
tl.from("#page1 img",{
    scale:0.4,
    ease:Power4.easeOut,
    duration:1.3,
    delay:-0.1,
    borderRadius:"10px",
    
})
.from("#nav",{
    opacity:0,
    y:-50,
    duration:1,
})
var h2data=document.querySelectorAll("#page2 h2")

h2data.forEach(function(elem){
    var textdata=elem.textContent
    var spilted=textdata.split("")
    var clutter=""
    spilted.forEach(function(e){
        clutter+=`<span>${e}</span>`
    })
    // console.log(clutter)
    // document.querySelector("#page2 h2").innerHTML=clutter
    elem.innerHTML = clutter;
})
gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 h2 span",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 0%",
        scrub:3
    }

})
gsap.to("#page2 #svg2,#page2 #svg1",{
    left:"-50vw",
    stagger:0.5,
    duration:4,
    scrollTrigger:{
                scroll:"body",
                trigger:"#page2 #svg2",
                // markers:true,
                start:"top 80%",
                end:"top 0%",
                scrub:5
            }
})
// var tl2=gsap.timeline()
gsap.from("#page3 #bottom-part1 p, #bottom-part2 #image img",{
    opacity:0,
    y:50,
    // stagger:0.3,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #bottom-part1 p",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:1
    }
})
var h1data=document.querySelectorAll("#text-page3 h1")
h1data.forEach(function(elem){
    var h1text=elem.textContent
    var splited_h1=h1text.split("")
    var clutter_h1=""
    splited_h1.forEach(function(e){
        clutter_h1+=`<span>${e}</span>`
    })
    // document.querySelector("#text-page3 h1").textContent=clutter_h1
    elem.innerHTML=clutter_h1
    // console.log(elem)
})
gsap.to("#text-page3 h1 span",{
    color:"#434B34",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page3 h1 span",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#bottom-part1-explore",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #bottom-part1-explore",
        // markers:true,
        start:"top 85%",
        end:"top 80%",
        scrub:1
    }

})
gsap.from("#page3 #bottom-part1-img",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #bottom-part1-img",
        // markers:true,
        start:"top 82%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#page3 #image2",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #image2",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:1
    }
})
gsap.from("#page5-part1 #part1-image",{
    opacity:0,
    y:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page5-part1 #part1-image",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:1
    }

})
gsap.from("#page5-part2 #part2-image",{
    opacity:0,
    y:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page5-part2 #part2-image",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:1
    }

})
gsap.from("#page5-svg #p5-svg1",{
    x:-500,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page5-svg #p5-svg1",
        // markers:true,
        start:"top 90%",
        end:"top 10%",
        scrub:3
    }

})
gsap.from("#page5-svg #p5-svg2",{
    x:-500,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page5-svg #p5-svg2",
        // markers:true,
        start:"top 90%",
        end:"top 10%",
        scrub:3
    }

})
gsap.from("#page6 #page6-head p",{
    opacity:0,
    y:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page6-head p",
        // markers:true,
        start:"top 95%",
        end:"top 70%",
        scrub:1
    }
})
var p6_h2=document.querySelectorAll("#page6 h2")
p6_h2.forEach(function(elem){
    var p6_h2_text=elem.textContent
    var splited_p6=p6_h2_text.split("")
    var clutter_p6=""
    splited_p6.forEach(function(e){
        clutter_p6+=`<span>${e}</span>`
    })
    console.log(clutter_p6)
    elem.innerHTML=clutter_p6
})
gsap.to("#page6 h2 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page6 h2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#page6 #page6-center #one, #page6 #page6-center #third",{
    opacity:0,
    y:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page6 #page6-center #one ",
        // markers:true,
        start:"top 95%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#page6 #page6-center #two",{
    opacity:0,
    y:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page6 #page6-center #two",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#page6 h5",{
    opacity:0,
    y:40,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page6 h5",
        // markers:true,
        start:"top 95%",
        end:"top 70%",
        scrub:1
    }
})
gsap.to("#page6 #page6-svg1",{
    x:500,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page6 #page6-svg1",
        // markers:true,
        start:"top 95%",
        end:"top 0%",
        scrub:2
    }

})
gsap.to("#page6 #page6-svg2",{
    x:500,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page6 #page6-svg2",
        // markers:true,
        start:"top 95%",
        end:"top 0%",
        scrub:2
    }

})
var p7_h2=document.querySelectorAll("#page7-text h2")
p7_h2.forEach(function(elem){
    var p7_h2text=elem.textContent
    var p7_splited=p7_h2text.split("")
    var clutter_p7=""
    p7_splited.forEach(function(e){
        clutter_p7+=`<span>${e}</span>`
    })
    elem.innerHTML=clutter_p7
    // console.log(elem)
})
gsap.to("#page7-text h2 span",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page7-text h2 span",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 55%",
        scrub:3
    }
})
gsap.to("#page7-center ",{
    gap:"100vh",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page7-center",
        // markers:true,
        start:"top 85%",
        end:"top 40%",
        scrub:3
    }
    // width:"30%"
})
gsap.to("#page7-center #mid ",{
    opacity:1,
    top:"40%",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page7-center #mid",
        // markers:true,
        start:"top 65%",
        end:"top 50%",
        scrub:3
    }
    // width:"30%"
})
gsap.to("#mid-bottom ",{
    opacity:1,
    // top:"40%",
    // marginTop:"10vh",
    y:-12,
    scrollTrigger:{
        scroller:"body",
        trigger:" #mid-bottom",
        // markers:true,
        start:"top 85%",
        end:"top 60%",
        scrub:3
    }
    // width:"30%"
})
gsap.to("#page8 #page8-top",{
    height:"0vh",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page8 #image8",
        // markers:true,
        start:"top 99%",
        end:"top -10%",
        scrub:2
    }
})
gsap.from("#page8-svg1",{
    x:"-500",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page8-svg1",
        // markers:true,
        start:"top 95%",
        end:"top 0%",
        scrub:2
    }
})
gsap.from("#page8-svg2",{
    x:"-500",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page8-svg2",
        // markers:true,
        start:"top 95%",
        end:"top 0%",
        scrub:2
    }
})
var p8_h2=document.querySelectorAll("#page7-text h2")
p7_h2.forEach(function(elem){
    var p7_h2text=elem.textContent
    var p7_splited=p7_h2text.split("")
    var clutter_p7=""
    p7_splited.forEach(function(e){
        clutter_p7+=`<span>${e}</span>`
    })
    elem.innerHTML=clutter_p7
    // console.log(elem)
})
gsap.to("#page7-text h2 span",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page7-text h2 span",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 55%",
        scrub:3
    }
})
var p9_h1=document.querySelectorAll("#page9-center h1")
p9_h1.forEach(function(elem){
    var p9_h1_text=elem.textContent
    var p9_h1_split=p9_h1_text.split("")
    var clutter_p9=""
    p9_h1_split.forEach(function(e){
        clutter_p9+=`<span>${e}</span>`
    })
    elem.innerHTML=clutter_p9
    console.log(elem)
})
gsap.to("#page9-center h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page9-center h1 span",
        // markers:true,
        start:"top 80%",
        end:"top 55%",
        scrub:3,

    }
})
gsap.from("#page9-center p",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page9-center p",
        // markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#page9-last h5",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page9-last h5",
        // markers:true,
        start:"top 85%",
        end:"top 75%",
        scrub:2
    }
})
gsap.from("#page10-text h1",{
    y:50,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10-text h1",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:2
    }
})
gsap.from("#page10-text p",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10-text p",
        // markers:true,
        start:"top 90%",
        end:"top 85%",
        scrub:2
    }
})
gsap.from("#page10 #top-1",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10  #top-1",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#page10 #top-1b h3",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10  #top-1b h3",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#page10 #top-1b p",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10  #top-1b p",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#top-1b #page10-last",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#top-1b #page10-last",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#page10 #top-2",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10  #top-2",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#page10 #top-2a h3",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10  #top-2a h3",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#page10 #top-2a p",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page10  #top-2a p",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from("#top-2a #page10-last1",{
    y:40,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#top-2a #page10-last1",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})
gsap.to("#page11 #top-11",{
    height:"0vh",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page11",
        // markers:true,
        start:"top 99%",
        end:"top -10%",
        scrub:2
    }
})
gsap.from("#upper-11",{
    y:50,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#upper-11",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:2
    }
})