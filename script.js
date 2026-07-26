/* ===========================================================
   MORNING LUXURY
   script.js
   PART 1
=========================================================== */


/* ===========================================================
   LOADER
=========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.transition = "1.5s";

    setTimeout(() => {

        loader.style.display = "none";

    }, 1500);

});


/* ===========================================================
   LIVE CLOCK
=========================================================== */

function updateClock() {

    const clock = document.getElementById("clock");

    const date = document.getElementById("date");

    const now = new Date();

    const options = {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    };

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    clock.innerHTML =

        hours +

        ":" +

        minutes +

        " " +

        ampm;

    date.innerHTML =

        now.toLocaleDateString(

            "en-US",

            options

        );

}

updateClock();

setInterval(updateClock,1000);


/* ===========================================================
   GREETING
=========================================================== */

function greeting(){

    const greet =

    document.getElementById("greeting");

    const hour =

    new Date().getHours();

    if(hour < 5){

        greet.innerHTML =

        "Rest peacefully 🌙";

    }

    else if(hour < 12){

        greet.innerHTML =

        "Good Morning Beautiful ☀️";

    }

    else if(hour < 17){

        greet.innerHTML =

        "Good Afternoon ✨";

    }

    else{

        greet.innerHTML =

        "Have a Beautiful Evening 🌅";

    }

}

greeting();


/* ===========================================================
   DAILY QUOTES
=========================================================== */

const quotes=[

"Luxury is your normal.",

"Everything always works out for you.",

"Money flows to you effortlessly.",

"You attract abundance every day.",

"You deserve extraordinary love.",

"Peace follows you everywhere.",

"You radiate confidence.",

"Success is inevitable.",

"You are creating an extraordinary life.",

"Your future is brighter than your past.",

"Every sunrise brings new opportunities."

];

const quoteBox=

document.getElementById("dailyQuote");

const today=

new Date().getDate();

quoteBox.innerHTML=

quotes[today%quotes.length];


/* ===========================================================
   SMOOTH NAVIGATION
=========================================================== */

document

.querySelectorAll("nav a")

.forEach(link=>{

link.addEventListener("click",

function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute("href")

);

target.scrollIntoView({

behavior:"smooth"

});

});

});


/* ===========================================================
   HERO PARALLAX
=========================================================== */

window.addEventListener(

"scroll",

()=>{

const scrolled=

window.pageYOffset;

const hero=

document.querySelector(

".hero-background img"

);

hero.style.transform=

"translateY("+

(scrolled*.25)+

"px) scale(1.18)";

});


/* ===========================================================
   HERO TEXT FADE
=========================================================== */

window.addEventListener(

"scroll",

()=>{

const hero=

document.querySelector(

".hero-content"

);

hero.style.opacity=

1-(window.scrollY/700);

});


/* ===========================================================
   INTERSECTION ANIMATIONS
=========================================================== */

const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(

"visible"

);

}

});

},

{

threshold:.2

}

);

document

.querySelectorAll(

"section"

)

.forEach(section=>{

observer.observe(section);

});


/* ===========================================================
   GRATITUDE JOURNAL
=========================================================== */

const journalButton=

document.getElementById(

"saveJournal"

);

journalButton.addEventListener(

"click",

()=>{

localStorage.setItem(

"gratitude1",

document.getElementById(

"gratitude1"

).value

);

localStorage.setItem(

"gratitude2",

document.getElementById(

"gratitude2"

).value

);

localStorage.setItem(

"gratitude3",

document.getElementById(

"gratitude3"

).value

);

alert(

"✨ Gratitude Saved"

);

});


window.onload=function(){

if(localStorage.getItem(

"gratitude1"

)){

document.getElementById(

"gratitude1"

).value=

localStorage.getItem(

"gratitude1"

);

}

if(localStorage.getItem(

"gratitude2"

)){

document.getElementById(

"gratitude2"

).value=

localStorage.getItem(

"gratitude2"

);

}

if(localStorage.getItem(

"gratitude3"

)){

document.getElementById(

"gratitude3"

).value=

localStorage.getItem(

"gratitude3"

);

}

};


/* ===========================================================
   GOALS
=========================================================== */

const goalInputs=

document.querySelectorAll(

"#goals input"

);

goalInputs.forEach(

(input,index)=>{

input.value=

localStorage.getItem(

"goal"+index

)||"";

input.addEventListener(

"keyup",

()=>{

localStorage.setItem(

"goal"+index,

input.value

);

});

});


/* ===========================================================
   WATER TRACKER
=========================================================== */

let waterLevel=0;

const water=

document.querySelector(

".water-level"

);

document

.getElementById(

"drinkWater"

)

.addEventListener(

"click",

()=>{

if(waterLevel<100){

waterLevel+=10;

water.style.height=

waterLevel+"%";

}

});


/* ===========================================================
   MUSIC
=========================================================== */

const music=

document.getElementById(

"backgroundMusic"

);

music.volume=.25;

document.body.addEventListener(

"click",

()=>{

music.play().catch(()=>{});

},

{

once:true

});
/* ===========================================================
   PART 2
   ADVANCED ANIMATIONS
=========================================================== */


/* ===========================================================
   SECTION FADE ANIMATION
=========================================================== */

const fadeElements = document.querySelectorAll(

".content, .vision-card, .affirmation-card, .dashboard-card"

);

const fadeObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

fadeElements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(80px)";

element.style.transition="1s ease";

fadeObserver.observe(element);

});


/* ===========================================================
   NAVIGATION BACKGROUND
=========================================================== */

const nav=document.querySelector("nav");

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>120){

nav.style.background="rgba(5,15,25,.75)";

nav.style.backdropFilter="blur(25px)";

}

else{

nav.style.background="rgba(255,255,255,.08)";

}

});


/* ===========================================================
   PARALLAX FOR ALL BACKGROUNDS
=========================================================== */

window.addEventListener(

"scroll",

()=>{

document.querySelectorAll(

".background-image img"

).forEach(image=>{

const speed=.18;

image.style.transform=

`translateY(${window.scrollY*speed}px) scale(1.08)`;

});

});


/* ===========================================================
   BUTTON GLOW
=========================================================== */

document.querySelectorAll(

".primary-button"

).forEach(button=>{

button.addEventListener(

"mousemove",

(e)=>{

const x=e.offsetX;

const y=e.offsetY;

button.style.background=

`radial-gradient(circle at ${x}px ${y}px,

#fff6c0,

#D4AF37 35%,

#b8860b)`;

});

button.addEventListener(

"mouseleave",

()=>{

button.style.background=

"linear-gradient(135deg,#D4AF37,#F8E08A)";

});

});


/* ===========================================================
   RANDOM DAILY AFFIRMATION
=========================================================== */

const affirmationCards=

document.querySelectorAll(

".affirmation-card"

);

affirmationCards.forEach(card=>{

card.addEventListener(

"click",

()=>{

card.classList.toggle("active");

});

});


/* ===========================================================
   HERO TITLE GLOW
=========================================================== */

setInterval(()=>{

const title=document.querySelector(

".hero-content h1"

);

title.style.textShadow=

`0 0 ${20+Math.random()*30}px rgba(212,175,55,.8)`;

},800);


/* ===========================================================
   FLOATING EFFECT
=========================================================== */

document.querySelectorAll(

".vision-card"

).forEach((card,index)=>{

setInterval(()=>{

card.style.transform=

`translateY(${Math.sin(Date.now()/1200+index)*8}px)`;

},40);

});


/* ===========================================================
   RANDOM QUOTE EVERY 20 SECONDS
=========================================================== */

setInterval(()=>{

const random=

Math.floor(

Math.random()*quotes.length

);

quoteBox.innerHTML=

quotes[random];

},20000);


/* ===========================================================
   AUTO SCROLL INDICATOR HIDE
=========================================================== */

const scrollIndicator=

document.querySelector(

".scroll-indicator"

);

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>150){

scrollIndicator.style.opacity="0";

}

else{

scrollIndicator.style.opacity="1";

}

});


/* ===========================================================
   CURSOR GLOW
=========================================================== */

const cursor=document.createElement("div");

cursor.id="cursorGlow";

document.body.appendChild(cursor);

document.addEventListener(

"mousemove",

(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


/* ===========================================================
   SUN COLOR TRANSITION
=========================================================== */

window.addEventListener(

"scroll",

()=>{

const sun=document.getElementById("sun");

const progress=

Math.min(window.scrollY/1000,1);

const hue=45-progress*15;

sun.style.filter=

`blur(4px) hue-rotate(${hue}deg)`;

});


/* ===========================================================
   MUSIC VOLUME FADE
=========================================================== */

window.addEventListener(

"scroll",

()=>{

if(window.scrollY<400){

music.volume=.25;

}

else if(window.scrollY<1200){

music.volume=.18;

}

else{

music.volume=.10;

}

});


/* ===========================================================
   END OF PART 2
=========================================================== */
/* ===========================================================
   GOLD PARTICLES
=========================================================== */

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 150; i++) {

    const particle = document.createElement("div");

    particle.className = "gold-particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay = Math.random() * 10 + "s";

    particle.style.animationDuration =
        8 + Math.random() * 12 + "s";

    particle.style.opacity =
        0.2 + Math.random() * 0.8;

    particle.style.transform =
        `scale(${0.3 + Math.random()})`;

    particleContainer.appendChild(particle);

}
/* ===========================================
   GOLD PARTICLES
=========================================== */

.gold-particle{

    position:absolute;

    width:4px;

    height:4px;

    border-radius:50%;

    background:#FFD54A;

    box-shadow:

    0 0 8px #FFD54A,

    0 0 15px #FFD54A;

    animation:

    floatingParticle linear infinite;

}

@keyframes floatingParticle{

    0%{

        transform:

        translateY(80px);

        opacity:0;

    }

    20%{

        opacity:1;

    }

    80%{

        opacity:1;

    }

    100%{

        transform:

        translateY(-110vh);

        opacity:0;

    }

}
/* ===========================================================
   PALM TREE MOVEMENT
=========================================================== */

const palms = document.querySelectorAll(".palm");

palms.forEach((tree,index)=>{

    setInterval(()=>{

        const angle =
            Math.sin(Date.now()/1800+index)*2;

        tree.style.transform =
            `rotate(${angle}deg)`;

    },40);

});
/* ===========================================================
   SUN PULSE
=========================================================== */

const sun = document.getElementById("sun");

setInterval(()=>{

    const size =
        250 + Math.sin(Date.now()/900)*15;

    sun.style.width = size+"px";

    sun.style.height = size+"px";

},40);
/* ===========================================================
   OCEAN PARALLAX
=========================================================== */

const heroImage = document.querySelector(".hero-background img");

window.addEventListener("mousemove",(e)=>{

    const x =
        (e.clientX/window.innerWidth-.5)*12;

    const y =
        (e.clientY/window.innerHeight-.5)*12;

    heroImage.style.transform =

    `translate(${x}px,${y}px) scale(1.18)`;

});
/* ===========================================================
   GOLD COINS
=========================================================== */

const coinContainer =
document.querySelector(".coins");

for(let i=0;i<80;i++){

    const coin=document.createElement("div");

    coin.className="coin";

    coin.style.left=Math.random()*100+"%";

    coin.style.top=Math.random()*100+"%";

    coin.style.animationDelay=Math.random()*10+"s";

    coin.style.animationDuration=

    6+Math.random()*8+"s";

    coinContainer.appendChild(coin);

}
