const hero = document.querySelector("#Hulk");
console.log(hero)

const stance = "Assets/Hero/hulk-stance.gif"
const walkFarward = "Assets/Hero/hulk-walk.gif"
const walkBackward = "Assets/Hero/hulk-walkBack.gif"
const wins = "Assets/Hero/hulk-win.gif"
const onJump = "Assets/Hero/hulk-intocrouch.gif"



window.addEventListener("keydown",(e)=>
{
    if(e.key === "ArrowRight")
    {
        hero.src = walkFarward;
    }
    if(e.key === "ArrowLeft")
    {
        hero.src = walkBackward;
    }
     if(e.key === " ")
    {
     hero.src = onJump
    }

})