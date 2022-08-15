window.addEventListener('DOMContentLoaded ', navigator, false);
window.addEventListener('hashchange ', navigator, false);

function navigator() {

    if (location.hash.startsWith('#trends')) {
      trendingPage(); 
    }
    else if(location.hash.startsWith('#search=')){
        searchPage(); 

    }
    else if(location.hash.startsWith('#movie')){
       moviePage(); 

    }
    else if(location.hash.startsWith('#category')){
       categoryPage(); 
        
    }
    else {
       homePage();
     

    }
}



function trendingPage() {
    console.log("Probando Trendring");
}

function searchPage() {
    console.log("Probando Search");
}

function moviePage() {
    console.log("Probando movie");
}

function categoryPage() {
    console.log("Probando category");
}


function homePage() {
    console.log("Probando home");
    
}

navigator();