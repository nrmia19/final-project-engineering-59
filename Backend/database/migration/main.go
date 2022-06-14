package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "./database/migration/database.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS articles (
    id integer not null primary key AUTOINCREMENT,
    title varchar(255) not null,
    subject varchar(255) not null
);

INSERT INTO articles(title, subject) VALUES
    ('tips bangun pagi', 'nyalakan alarm saat bangun pagi'),
    ('tips mengerjakan tugas', 'usahakan belajar terlebih dahulu sebelum mengerjakan tugas');`)

	if err != nil {
		panic(err)
	}
}
