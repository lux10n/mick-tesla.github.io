var touche=[...document.querySelectorAll('.bouton')];
var listeKeycode=touche.map(touche => touche.dataset.key);
var ecran=document.querySelector('.ecran');

document.addEventListener('keydown', (e)=>{
    var valeur=e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click',(e)=>{
    var valeur=e.target.dataset.key;
    calculer(valeur);
})

var calculer=(valeur)=>{
    if(listeKeycode.includes(valeur))
    {
        switch(valeur){
            case '67':
                ecran.textContent="";
                break;
            case '187':
                var calcul=eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default:
                var indexKeycode=listeKeycode.indexOf(valeur);
                var touches=touche[indexKeycode];
                ecran.textContent+=touches.innerHTML;
        }
    }
}

window.addEventListener('error',(e)=>{
    alert("MATH ERROR");
})