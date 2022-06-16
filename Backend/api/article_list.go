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

type CreateArticle struct {
	Title string `json:"title"`
	Subject string `json:"subject"`
}

type Articleexist struct {
	Article string `json: "article"`
}

type ArticleListSuccessResponse struct {
	Articles []Article `json:"articles"`
}

type CreateArticleSuccessResponse struct {
	Title string `json:"title"`
	Subject string `json:"subject"`
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

func (api *API) insertArticle(w http.ResponseWriter, req *http.Request) {

	api.AllowOrigin(w, req)
	var article CreateArticle
	err := json.NewDecoder(req.Body).Decode(&article)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	encoder := json.NewEncoder(w)
	res, err := api.articleRepo.FetchArticleByTitle(article.Title)

	w.Header().Set("Content-Type", "application/json")

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}
	if article.Title == *res {
		log.Println(Articleexist{Article: *res})
		json.NewEncoder(w).Encode(Articleexist{Article: *res})
		json.NewEncoder(w).Encode("article is exist")
	}else {

	err = api.articleRepo.InsertArticle(article.Title,article.Subject)
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	log.Println(CreateArticleSuccessResponse{Title: article.Title, Subject: article.Subject})

	encoder.Encode(CreateArticleSuccessResponse{Title: article.Title, Subject: article.Subject})
	encoder.Encode("Upload succes !!!, Thank you :)")
}
}