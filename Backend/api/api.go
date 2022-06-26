package api

import (
	"fmt"
	"log"
	"net/http"
	"ruangEdukasi/Backend/repository"
)

type API struct {
	usersRepo  		repository.UserRepository
	articleRepo 	repository.ArticleRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, articleRepo repository.ArticleRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo,articleRepo,mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	

	// API with AuthMiddleware:
	mux.Handle("/api/articles", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.articleList))))
	mux.Handle("/api/article/create", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.insertArticle))))
	mux.Handle("/api/mentoring", api.AuthMiddleWare(http.HandlerFunc(mentoring)))

	// // API with AuthMiddleware and AdminMiddleware
	// mux.Handle("/api/admin/sales", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getDashboard)))))
	log.Println("api :" ,api)
	return api
	
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}