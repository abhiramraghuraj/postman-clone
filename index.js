var menu = document.querySelector('.icon').addEventListener('click',optionsfunc);
var signin = document.querySelector('.member');
function optionsfunc(){
    console.log("123");
    var vanish1 = document.querySelector('.showcase');
    var x = document.querySelector('.menu');
    //var show = document.querySelector('#list');
    if(x.className === 'menu'){
        signin.style.display = 'none';
        var vanish1 = document.querySelector('.showcase');
        vanish1.style.display = 'none';
        x.className += ' active';
    }
    else{
        signin.style.display = '';
        vanish1.style.display = '';
        x.className = 'menu';
    }

}
