/* ==========================================
   FOREVER & ALWAYS
   Written & Directed by Engineer Nerrick
========================================== */

// ---------- MUSIC ----------

const music = document.getElementById("music");

document.body.addEventListener("click", () => {
    music.volume = 0.15;
    music.play().catch(() => {});
}, { once: true });


// ---------- STORY ----------

const scenes = [

{
title:"Prologue",
text:"Every unforgettable story begins quietly. No fireworks. No grand announcement. Just one unexpected moment that changes everything."
},

{
title:"A Simple Hello",
text:"Sometimes one conversation becomes the beginning of memories that last much longer than either person ever imagined."
},

{
title:"The Little Things",
text:"The best moments are often the smallest ones: a smile, a kind word, a laugh that arrives at exactly the right time."
},

{
title:"Growing Closer",
text:"Without realizing it, ordinary days slowly become extraordinary because someone special becomes part of them."
},

{
title:"Trust",
text:"Real love grows through patience, understanding, kindness, and choosing to care even on ordinary days."
},

{
title:"Memories",
text:"Some moments become photographs. Others become permanent memories inside the heart."
},

{
title:"Distance",
text:"Even when people aren't standing side by side, appreciation and genuine care can still remain close."
},

{
title:"Gratitude",
text:"Thank you for every smile, every conversation, every laugh, and every moment that made life feel a little brighter."
},

{
title:"Today",
text:"Today is simply a reminder to celebrate someone wonderful and to appreciate the happiness they bring."
},

{
title:"Happy Girlfriend's Day",
text:"May your dreams continue to grow, may your smile never fade, and may your days always be filled with joy. ❤️"
}

];

const title = document.getElementById("sceneTitle");
const text = document.getElementById("sceneText");
const story = document.getElementById("storySection");

let scene = 0;

function showScene(){

    if(scene >= scenes.length){

        ending();

        return;

    }

    story.style.opacity = 0;

    setTimeout(()=>{

        title.textContent = scenes[scene].title;

        typeWriter(scenes[scene].text);

        story.style.opacity = 1;

        scene++;

    },1000);

}

function typeWriter(sentence){

    text.innerHTML="";

    let i=0;

    function write(){

        if(i<sentence.length){

            text.innerHTML += sentence.charAt(i);

            i++;

            setTimeout(write,30);

        }

    }

    write();

}

setTimeout(()=>{

    showScene();

    setInterval(showScene,9000);

},10000);


// ---------- ENDING ----------

function ending(){

story.style.opacity=0;

setTimeout(()=>{

const end=document.getElementById("ending");

const endingText=document.getElementById("endingText");

end.style.opacity=1;

endingText.innerHTML=`

Every beautiful story leaves something behind.

Some leave memories.

Some leave smiles.

Some leave hope.

If this short film has made you smile even once...

then it has fulfilled its purpose.

Happy Girlfriend's Day.

May your heart always be surrounded by kindness, laughter, and love.

❤️

`;

setTimeout(startCredits,12000);

},2000);

}


// ---------- CREDITS ----------

function startCredits(){

document.getElementById("ending").style.opacity=0;

const credits=document.getElementById("credits");

credits.style.opacity=1;

document
.getElementById("creditsContent")
.classList.add("creditScroll");

}
