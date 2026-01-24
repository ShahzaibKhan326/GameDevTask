const hero = document.querySelector(".hero");
const heroImg = document.querySelector("#Hulk")

const stance = "Assets/Hero/hulk-stance.gif"
const walkFarward = "Assets/Hero/hulk-walk.gif"
const walkBackward = "Assets/Hero/hulk-walkBack.gif"
const wins = "Assets/Hero/hulk-win.gif"
const onJump = "Assets/Hero/hulk-intocrouch.gif"

let playerX = 0;
let playerY = 0;
let speed = 5 ;
let keys = {}

 
document.addEventListener("keydown", e => keys[e.key] = true)
document.addEventListener("keyup" , e => keys[e.key] = false)


function gameLoop()
{
    if(keys["ArrowRight"])
    {
        playerX += speed;
    }
    if(keys["ArrowLeft"])
    {
        playerX -= speed;
    }
     hero.style.left = playerX+"px";
     



     requestAnimationFrame(gameLoop)
}

gameLoop()
