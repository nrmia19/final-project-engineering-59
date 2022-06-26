package repository

import (
	"database/sql"
	"errors"
	"log"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByUsername(username string) (*string, error) {

	// query
	sql := `
		SELECT * FROM users WHERE username = ?
	;`

	// execute query
	data := u.db.QueryRow(sql, username)

	// variable penampung
	var allUser User

	// binding
	err := data.Scan(
		&allUser.ID,
		&allUser.Username,
		&allUser.Email,
		&allUser.Password,
		&allUser.Loggedin,
		&allUser.Token,
	)

	if err != nil {
		return &allUser.Username, nil
	}

	return &allUser.Username, nil
}

func (u *UserRepository) FetchUsers() ([]User, error) {

	// query
	sql := `SELECT 
		*
	 FROM users;`

	// execute query
	datas, err := u.db.Query(sql)
	if err != nil {
		return nil, err
	}

	// variable penampung
	var allUsers []User

	// binding
	for datas.Next() {
		var alluser User
		datas.Scan(
			&alluser.ID,
			&alluser.Username,
			&alluser.Email,
			&alluser.Password,
			&alluser.Role,
			&alluser.Loggedin,
		)

		allUsers = append(allUsers, alluser)
	}

	return allUsers, nil

}

func (u *UserRepository) Login(username string, password string) (*string, error) {

	// variable penampung
	var errMSG = "Login Failed"
	var user User

	// query
	sql := `
		SELECT username,password FROM users WHERE username = ? OR password = ?
	;`

	// execute query
	data := u.db.QueryRow(sql, username, password)

	// binding
	err := data.Scan(&user.Username, &user.Password)
	if err != nil {
		return nil, errors.New(errMSG)
	}

	// cek userame dan password
	if user.Username == username && user.Password == password {
		log.Println(user)
		return &user.Username, nil
	} else {
		return nil, errors.New(errMSG)
	}
}

func (u *UserRepository) InsertUser(username string, email string, password string, role string, loggedin bool) error {

	// query
	sql := `
		INSERT INTO users 
		(username, email, password, role, loggedin)
		VALUES
		(?, ?, ?, ?, ?)
	;`

	_, err := u.db.Exec(sql, username, email, password, role, loggedin)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {

	// query
	sql := `SELECT role FROM users WHERE username = ?;`

	// execute query
	data := u.db.QueryRow(sql, username)

	// variable penampung
	var roleUser string
	err := data.Scan(&roleUser)
	if err != nil {
		return nil, err
	}

	return &roleUser, nil
}