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
	CREATE TABLE IF NOT EXISTS users (
		id integer not null primary key AUTOINCREMENT,
		username varchar(255) not null,
		email varchar(255) not null,
		password varchar(255) not null,
		role varchar(255) not null,
		loggedin boolean not null
);

INSERT INTO users(username, email, password, role, loggedin) VALUES
    ('aditira', 'aditira@gmail.com','1234', 'admin', false),
    ('dina', 'dina@gmail.com','4321', 'user', false),
    ('dito', 'dito@gamil.com','2552', 'user', false);`)

	if err != nil {
		panic(err)
	}
}
