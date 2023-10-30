// document.querySelector('#icon').addEventListener('click', lightMode)

// let theButton = document.querySelector(".lightDark")


// let checker = document.querySelector('.lightDark').value

// function lightMode(){
//     document.querySelector('body').style.backgroundColor = 'whitesmoke'
//     document.querySelector('html').style.color = 'black'
//     document.querySelector('h1').style.color = 'black'
//     document.querySelector('img').style.border = '1px solid black'
//     document.querySelector('.left').style.backgroundColor = 'black'
//     document.querySelector('.right').style.backgroundColor = 'black'
//     document.querySelector('.left').style.border = '1px solid black'
//     document.querySelector('.right').style.border = '1px solid black'
//     document.querySelector('section img').style.border = '1px solid black'
//     document.querySelector('.extraRecipes').style.backgroundColor = 'gray'
//     document.querySelector('lightDark').innerText = ''
//     document.querySelector('lightDark').innerText = 'Dark Mode'
// }

// function darkMode(){
//     document.querySelector('body').style.backgroundColor = 'Gray'
//     document.querySelector('html').style.color = 'whiteSmoke'
//     document.querySelector('h1').style.color = 'whiteSmoke'
//     document.querySelector('img').style.border = '1px solid whiteSmoke'
//     document.querySelector('.left').style.backgroundColor = 'whiteSmoke'
//     document.querySelector('.right').style.backgroundColor = 'whiteSmoke'
//     document.querySelector('.left').style.border = '1px solid whiteSmoke'
//     document.querySelector('.right').style.border = '1px solid whiteSmoke'
//     document.querySelector('section img').style.border = '1px solid whiteSmoke'
//     document.querySelector('.extraRecipes').style.backgroundColor = 'gray'
//     document.querySelector('lightDark').innerText = ""
//     document.querySelector('lightDark').innerText = 'Light Mode'

// }

// let darkCheck = document.querySelector('body').style.backgroundColor = 'whitesmoke'
// let lightCheck = document.querySelector('body').style.backgroundColor = 'gray' 

// let checkerMe = document.querySelector('.lightDark').innerText  -----This equals 'Light Mode'


//******************************** LIGHT MODE / DARK MODE SWITCHER****************************************** */
//*********************************************************************************************************** */

document.querySelector('.lightDark').addEventListener('click', lightDarkModes) //Makes it all possible, listens for the click to execute evrything below



function lightDarkModes() {
    // alert('The Event Listener Works')
    if(document.querySelector('.lightDark').innerText === "Light Mode"){
        // if(1+1 === 2){  //Primarily checking to see if my conditional worked, it does now
        // lightMode Doesn't seem to be able to grab the function from outside this scope
        document.querySelector('body').style.backgroundColor = 'whitesmoke'
        document.querySelector('html').style.color = 'black'
        document.querySelector('h1').style.color = 'black'
        document.querySelector('img').style.border = '1px solid black'
        document.querySelector('.left').style.backgroundColor = 'black'
        document.querySelector('.right').style.backgroundColor = 'black'
        document.querySelector('.left').style.border = '1px solid black'
        document.querySelector('.right').style.border = '1px solid black'
        document.querySelector('section img').style.border = '1px solid black'
        document.querySelector('.extraRecipes').style.backgroundColor = 'gray'
        
        document.querySelector('.lightDark').innerHTML = 'Dark Mode' //This replaces any text within the Element with whatever I choose. It's the same down in the Dark Mode function
        document.querySelector('.fa-rotate-180').className = 'fa-solid fa-circle-half-stroke flipped' //This is broken but it's pickinng it up properly, it just doesn't flip back to the original. I think we need completely unique classes.

    }

    else if(document.querySelector('.lightDark').innerText === "Dark Mode") {
        // else if(1+1 === 3) {

        // darkMode //Doesn't seem to grab it outside this scope
        document.querySelector('body').style.backgroundColor = 'Gray'
        document.querySelector('html').style.color = 'whiteSmoke'
        document.querySelector('h1').style.color = 'whiteSmoke'
        document.querySelector('img').style.border = '1px solid whiteSmoke'
        document.querySelector('.left').style.backgroundColor = 'whiteSmoke'
        document.querySelector('.right').style.backgroundColor = 'whiteSmoke'
        document.querySelector('.left').style.border = '1px solid whiteSmoke'
        document.querySelector('.right').style.border = '1px solid whiteSmoke'
        document.querySelector('section img').style.border = '1px solid whiteSmoke'
        document.querySelector('.extraRecipes').style.backgroundColor = 'whiteSmoke'
        document.querySelector('.lightDark').innerHTML = 'Light Mode'
        document.querySelector('.flipped').className = 'fa-solid fa-circle-half-stroke fa-rotate-180' //I believe the problem is with the "lightMode" conditional, still this is broken but it's picking it up properly, it just doesn't flip back to the original.
    }

    else {
        alert('ERROR 010: BROKEN LIGHT/DARK PROGRAM') //Get it? 010, off on off. heheh
    }
}



//*********************************************************************************************************** */
//*********************************************************************************************************** */




