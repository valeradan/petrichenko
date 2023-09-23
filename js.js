"use strict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let secondQuestion = prompt("Один из последних просмотренных фильмов?");
let thirdQuestion = prompt("На сколько вы его оцените??");

personalMovieDB.movies[secondQuestion] = thirdQuestion;
