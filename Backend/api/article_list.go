package api

import (
	"encoding/json"
	"log"
	"net/http"
)

type ArticleListErrorResponse struct {
	Error string `json:"error"`
}

type Article struct {
	Title string `json:"title"`
	Subject string `json:"subject"`
}

type ArticleListSuccessResponse struct {
	Articles []Article `json:"articles"`
}

func (api *API) articleList(w http.ResponseWriter, req *http.Request) {
	
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := ArticleListSuccessResponse{}
	response.Articles = make([]Article, 0)

	articles, err := api.articleRepo.FetchArticles()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, article := range articles {
		response.Articles = append(response.Articles, Article{
			Title: article.Title,
			Subject: article.Subject,
		})
		log.Println("respon articles :",response.Articles)
	}
	w.Header().Set("Content-Type", "application/json")
	encoder.Encode(response)
	log.Println("article list :" ,response)
}