/* ===========================================
   FOREVER & ALWAYS
   A Romantic Film
   Written & Directed by Engineer Nerrick
=========================================== */

// Background Music
const music = document.getElementById("music");

// Most browsers require a user interaction before playing audio
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

/* ===========================================
   FLOATING HEARTS
=========================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration = (6 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,500);

/* ===========================================
   MOVIE STORY
=========================================== */

const scenes = [

{
title:"Every Great Story Begins...",
text:"Some people walk into our lives unexpectedly. At first, they seem like just another person. But somehow, without realizing it, they become someone we never want to lose."
},

{
title:"The Little Things",
text:"Love isn't always about grand gestures. Sometimes it's found in a simple good morning, a late-night conversation, a shared laugh, or someone asking if you've eaten today."
},

{
title:"The Smile",
text:"There is something magical about seeing someone smile because of you. It reminds you that happiness can be created in the smallest moments."
},

{
title:"A Safe Place",
text:"The right person doesn't just make your heart race... they make your heart feel at home. They become your comfort during difficult days and your peace during quiet nights."
},

{
title:"Time",
text:"The most precious gift anyone can give isn't money or expensive presents. It's time. Because time is something we can never get back."
},

{
title:"Appreciation",
text:"Thank you for every conversation, every laugh, every memory, and every little moment that made ordinary days feel extraordinary."
},

{
title:"Today",
text:"Today isn't just another day. It's a reminder to celebrate someone who brings joy, kindness, and warmth into the lives of others."
},

{
title:"Happy Girlfriend's Day",
text:"May your heart always know happiness. May your dreams continue to grow. And may you always remember that you are appreciated more than words can ever express. ❤️"
}

];

const title = document.getElementById("title");
const story = document.getElementById("story");
const movie = document.getElementById("movie");

let index = 0;

function showScene(){

    if(index >= scenes.length){

        movie.style.opacity = 0;

        setTimeout(()=>{
            document.getElementById("ending").style.opacity = 1;
        },2000);

        return;
    }

    movie.style.opacity = 0;

    setTimeout(()=>{

        title.textContent = scenes[index].title;
        story.textContent = scenes[index].text;

        movie.style.opacity = 1;

        index++;

    },1000);

}

setTimeout(()=>{

    showScene();

    setInterval(showScene,9000);

},10000);
