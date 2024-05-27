// Claus
const keys = {
    api_key: 'a3d461455eb19a2c6dc6abe2ce3f0428',
    session_id: 'cf901bed16b3c6572d3df1489e3e1f46e7213d56',
    account_id: '21290823'
}
let current_query = "";
let moviesResult = document.getElementById("moviesResult");
let gifCargando = document.getElementById("load");
let total_pages = 1;
let current_page = 1;

async function setFav(id, favBool) {
    const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite?api_key=${keys.api_key}&session_id=${keys.session_id}`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ media_type: 'movie', media_id: id, favorite: favBool })
    };

    try {
        await fetch(url, options);
        console.log(`ID ${id} marked as ${favBool}`);
        await showFavs();
    } catch (error) {
        console.error(error);
    }
}

async function showFavs() {
    current_page = 1;
    total_pages = 1;
    moviesResult.innerHTML = "";

    const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?language=en-US&page=1&api_key=${keys.api_key}&session_id=${keys.session_id}&sort_by=created_at.asc`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        data.results.forEach(movie => printMovie(movie, true, false));
    } catch (error) {
        console.error(error);
    }
}

async function searchMovies(query) {
    clearInput();
    removeActive();

    if (current_query !== query) {
        current_page = 1;
        moviesResult.innerHTML = "";
    }

    current_query = query;
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${current_page}&api_key=${keys.api_key}&session_id=${keys.session_id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (current_page === 1) {
            total_pages = data.total_pages;
        }
        for (const movie of data.results) {
            const isFavorite = await favorito(movie.id);
            printMovie(movie, isFavorite, false);
        }
        gifCargando.style.display = "none";
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++;

        gifCargando.style.display = "block";
        searchMovies(current_query);
    }
});

async function favorito(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/account_states?api_key=${keys.api_key}&session_id=${keys.session_id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.favorite;
    } catch (error) {
        console.error(error);
        return false;
    }
}
    

/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

