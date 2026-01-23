const hero = document.querySelector("#Hulk");
console.log(hero)

const stance = "Assets/Hero/hulk-win.gif"
const walkFarward = "Assets/Hero/hulk-walk.gif"
const walkBackward = "Assets/Hero/hulk-walkBack.gif"
const wins = "Assets/Hero/hulk-win.gif"

window.addEventListener("keydown",(e)=>
{
    if(e.key === "ArrowRight")
    {
        alert("keyRight");
    }
    if(e.key === "ArrowLeft")
    {
        alert("keyDown");
    }
     if(e.key === " ")
    {
        alert("Space");
    }

})