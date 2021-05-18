var menu = document.querySelector('.icon').addEventListener('click',optionsfunc);
var signin = document.querySelector('.member');
var bars = document.querySelector('#bars');
function optionsfunc(){
    var vanish1 = document.querySelector('.showcase');
    var x = document.querySelector('.menu');
    //var show = document.querySelector('#list');
    if(x.className === 'menu'){
        signin.style.display = 'none';
        bars.className = 'fa fa-close';
        var vanish1 = document.querySelector('.showcase');
        vanish1.style.display = 'none';
        x.className += ' active';
    }
    else{
        signin.style.display = '';
        vanish1.style.display = '';
        x.className = 'menu';
        bars.className = 'fa fa-bars';
    }

}
