package api

import (
	"fmt"
	"log"
	"net/http"
	"ruangEdukasi/Backend/repository"
)

type API struct {
	usersRepo  repository.UserRepository
	articleRepo repository.ArticleRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, articleRepo repository.ArticleRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo,articleRepo,mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))

	// API with AuthMiddleware:
	mux.Handle("/api/articles", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.articleList))))
	// mux.Handle("/api/cart/add", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.addToCart))))
	// mux.Handle("/api/cart/clear", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.clearCart))))
	// mux.Handle("/api/carts", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.cartList))))
	// mux.Handle("/api/pay", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.pay))))

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
