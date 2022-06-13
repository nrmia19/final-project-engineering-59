package api

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	UsersRepo     repository.UserRepository
	MentoringRepo repository.MentoringRepository
	TipsRepo      repository.TipsRepository
	TesRepo       repository.TesRepository
	KomentarRepo  repository.KomentarRepository
	mux 		 *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, mentoringRepo repository.MentoringRepository, tipsRepo repository.TipsRepository, tesRepo repository.TesRepository, komentarRepo repository.KomentarRepository) *API {
	mux := http.NewServeMux()
	api := &API{
		usersRepo, mentoringRepo, tipsRepo, tesRepo, komentarRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/user/update", api.POST(http.HandlerFunc(api.update)))
	mux.Handle("/api/user/delete", api.POST(http.HandlerFunc(api.delete)))
	mux.Handle("/api/user/get", api.POST(http.HandlerFunc(api.get)))
	mux.Handle("/api/user/getall", api.POST(http.HandlerFunc(api.getall)))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}