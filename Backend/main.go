package main

import (
	"database/sql"
	"ruangEdukasi/Backend/api"
	"ruangEdukasi/Backend/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "Backend/database/migration/database.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
}
