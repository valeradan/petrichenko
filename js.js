"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let secondQuestion = prompt("Один из последних просмотренных фильмов?");
        let thirdQuestion = prompt("На сколько вы его оцените??");

        if (secondQuestion != null && thirdQuestion != null && secondQuestion != "" && thirdQuestion != "" && secondQuestion.length < 50) {
            personalMovieDB.movies[secondQuestion] = thirdQuestion;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMyFilms();

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно много фильмов')
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    alert('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман')
} else {
    alert('Ошибочка')
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно много фильмов')
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
        alert('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман')
    } else {
        alert('Ошибочка')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYorGenres() {
    const genres = {
    }
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    }
}
writeYorGenres()