package repository


type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Role     string `db:"role"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}

type Article struct{
	ID int64 `db:"id"`
	Title string `db:"title"`
	Subject string `db:"subject"`
}