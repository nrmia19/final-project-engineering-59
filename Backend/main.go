package main

import (
	"net/http"
	"ruangEdukasi/Backend/handler"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	// router.POST("/home", Homehandler)
	router.POST("/create", handler.CreateHandler)
	http.HandleFunc("/login",handler.LoginHandler)
	http.HandleFunc("/loginauth",handler.LoginAuthHandler)
	http.HandleFunc("/register",handler.RegistHandler)
	http.HandleFunc("/registerauth", handler.RegisterAuthHandler)


	router.Run()
}


