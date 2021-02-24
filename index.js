// document.addEventListener("keydown", function(e)
// {
//     if (e.key === "ArrowLeft") 
//     {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);
//         dodger.style.left = `${left - 1}px`;
//     }
// });

let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e)
{
    if (e.key === "ArrowLeft")
    {
        moveDodgerLeft();
    } 
    else if (e.key === "ArrowRight")
    {
        moveDodgerRight();
    }
});

function moveDodgerLeft()
{
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0)
    {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight()
{
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);
    if (left < 360)
    {
        dodger.style.left = `${left + 1}px`;
    }
}