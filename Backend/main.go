package main

import (
	"database/sql"
	"ruangEdukasi/Backend/api"
	"ruangEdukasi/Backend/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "database/migration/database.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	articleRepo := repository.NewArticleRepository(db)

	mainAPI := api.NewAPI(*usersRepo,*articleRepo)
	mainAPI.Start()
}
