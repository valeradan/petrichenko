"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let secondQuestion = prompt("Один из последних просмотренных фильмов?").trim();
            let thirdQuestion = prompt("На сколько вы его оцените??");

            if (secondQuestion != null && thirdQuestion != null && secondQuestion != "" && thirdQuestion != "" && secondQuestion.length < 50) {
                personalMovieDB.movies[secondQuestion] = thirdQuestion;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно много фильмов')
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
            alert('Вы классический зритель')
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман')
        } else {
            alert('Ошибочка')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYorGenres: function () {
        const genres = {
        }
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre == "") {
                console.log("Вы не ввели данные");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((el, i) => {
            console.log(`Ваш любимый жанр #${i + 1} - это ${el}`)
        })

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

}

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYorGenres()