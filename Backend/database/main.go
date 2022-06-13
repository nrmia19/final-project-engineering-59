package main

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
)

func main () {
	db, err := sql.Open("sqlite3", "Backend/database/test.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	usersRepo := repository.NewUserRepository(db)
	mentoringRepo := repository.NewMentoringRepository(db)
	tipsRepo := repository.NewTipsRepository(db)
	tesRepo := repository.NewTesRepository(db)
	komentarRepo := repository.NewKomentarRepository(db)

	mainAPI := api.NewAPI(*usersRepo, *mentoringRepo, *tipsRepo, *tesRepo, *komentarRepo)
	mainAPI.Start()
}