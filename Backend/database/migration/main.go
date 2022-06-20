package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "./database.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
INSERT INTO articles(title, subject) VALUES
    ('tips menghafal cepat','jangan sambil main handphone');`)

	if err != nil {
		panic(err)
	}
}
