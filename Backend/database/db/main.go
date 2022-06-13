package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main () {
	db, err := sql.Open ("sqlite3", "Backend/database/test.db")
	if err != nil {
		panic (err)
	}
	defer db.Close ()
	
	_, err := db.Exec (`
		CREATE TABLE IF NOT EXISTS users (
		id integer not null primary key autoincrement,
		username varchar(200) not null,
		password varchar(200) not null,
		email varchar(200) not null,
		role varchar(200) not null,
		created_at datetime not null
	);
	
	CREATE TABLE IF NOT EXISTS layanan mentoring (
	mentoring_id integer not null primary key autoincrement,
	nama_mentoring varchar(200) not null,
	deskripsi_mentoring varchar(200) not null,
	FOREIGN KEY (mentoring_id) REFERENCES users(id)
	);
	
	CREATE TABLE IF NOT EXISTS layanan tips&trik (
	tips_id integer not null primary key autoincrement,
	nama_tips varchar(200) not null,
	deskripsi_tips varchar(200) not null,
	FOREIGN KEY (tips_id) REFERENCES users(id)
	);
	
	CREATE TABLE IF NOT EXISTS layanan tes_psikologi (
	tes_id integer not null primary key autoincrement,
	nama_tes varchar(200) not null,
	deskripsi_tes varchar(200) not null,
	FOREIGN KEY (tes_id) REFERENCES users(id)
	);
	
	CREATE TABLE IF NOT EXISTS layanan komentar (
	komentar_id integer not null primary key autoincrement,
	nama_komentar varchar(200) not null,
	deskripsi_komentar varchar(200) not null,
	FOREIGN KEY (komentar_id) REFERENCES users(id)`)

	if err != nil {
		panic (err)
	}


}