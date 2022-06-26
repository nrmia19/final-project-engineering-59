package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type Register struct {
	Username string `json:"username"`
	Email string `json:"email"`
	Password string `json:"password"`
}

type LoginSuccessResponse struct {
	Massage string `json:"massage"`
	Account LoginSuccess `json: "account"`
}

type LoginSuccess struct{
	Username string `json:"username"`
	Token    string `json:"token"`
}

type UserExistResponse struct {
	Massage string `json:"massage"`
	Username UserExist `json:"username"`
}

type UserExist struct{
	Username string `json:"username"`
}

type RegistSuccessResponse struct {
	Massage string `json:"massage"`
	Account Data `json:"account"`
}

type Data struct{
	Username string `json:"username"`
	Password    string `json:"password"`
	Email string `json:"email"`
}

type AuthErrorResponse struct {
	Error string `json:"error"`
}

// Jwt key yang akan dipakai untuk membuat signature
var jwtKey = []byte("key")

// Struct claim digunakan sebagai object yang akan di encode oleh jwt
// jwt.StandardClaims ditambahkan sebagai embedded type untuk provide standart claim yang biasanya ada pada JWT
type Claims struct {
	Username string
	Role     string
	jwt.StandardClaims
}

func (api *API) login(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := api.usersRepo.Login(user.Username, user.Password)
	log.Println(res)

	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	userRole, _ := api.usersRepo.FetchUserRole(*res)

	// Deklarasi expiry time untuk token jwt
	expirationTime := time.Now().Add(60 * time.Minute)

	// Buat claim menggunakan variable yang sudah didefinisikan diatas
	claims := &Claims{
		Username: *res,
		Role:     *userRole,
		StandardClaims: jwt.StandardClaims{
			// expiry time menggunakan time millisecond
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Buat jwt string dari token yang sudah dibuat menggunakan JWT key yang telah dideklarasikan
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		fmt.Println("gak ada jwt")
		// return internal error ketika ada kesalahan ketika pembuatan JWT string
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Set token string kedalam cookie response
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
		Path:    "/",
	})

	json.NewEncoder(w).Encode(LoginSuccessResponse{Massage: "login success !!!!", Account: 
	LoginSuccess{Username: *res, Token: tokenString}})
}

func (api *API) logout(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)

	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if token.Value == "" {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	c := http.Cookie{
		Name:   "token",
		MaxAge: -1,
	}
	http.SetCookie(w, &c)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("logged out"))
}

func (api *API) register(w http.ResponseWriter, req *http.Request) {


	api.AllowOrigin(w, req)
	var register Register
	var role = "user"
	var logged = false
	err := json.NewDecoder(req.Body).Decode(&register)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	encoder := json.NewEncoder(w)
	res, err := api.usersRepo.FetchUserByUsername(register.Username)

	w.Header().Set("Content-Type", "application/json")

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}
	if register.Username == *res {
		json.NewEncoder(w).Encode(UserExistResponse{Massage: "user is exist", Username: UserExist{*res}})
	}else {

	err = api.usersRepo.InsertUser(register.Username, register.Email, register.Password, role, logged)
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}
	json.NewEncoder(w).Encode(RegistSuccessResponse{Massage : "register success !!!",
	Account: Data{Username: register.Username,Email: register.Email,Password: register.Password}})
}
}