var menu = document.querySelector('.icon').addEventListener('click',optionsfunc);
function optionsfunc(){
    console.log("123");
    var vanish1 = document.querySelector('.showcase');
    var x = document.querySelector('.menu');
    //var show = document.querySelector('#list');
    if(x.className === 'menu'){
        var vanish1 = document.querySelector('.showcase');
        vanish1.style.display = 'none';
        x.className += ' active';
    }
    else{
        vanish1.style.display = '';
        x.className = 'menu';
    }

}