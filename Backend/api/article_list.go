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

type CreateArticleSuccessResponse struct {
	Massage string `json:"massage"`
	Article ArticleName `json:"article"`
}

type ArticleExistResponse struct {
	Massage string `json:"massage"`
	Article ArticleExist `json:"article"`
}

type ArticleExist struct {
	Article string `json: "article"`
}

type ArticleListSuccessResponse struct {
	Articles []Article `json:"articles"`
}

type ArticleName struct {
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
	res, _ := api.articleRepo.FetchArticleByTitle(article.Title)

	w.Header().Set("Content-Type", "application/json")

	if article.Title == "" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if article.Title == *res {
		// log.Println(Articleexist{Article: *res})
		json.NewEncoder(w).Encode(ArticleExistResponse{Massage: "article is exist", 
		Article: ArticleExist{*res}})
	}else {
	err = api.articleRepo.InsertArticle(article.Title,article.Subject)
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	// log.Println(CreateArticleSuccessResponse{Title: article.Title, Subject: article.Subject})

	encoder.Encode(CreateArticleSuccessResponse{Massage: "upload succes !!!, thank you :)",
	Article: ArticleName{Title: article.Title,Subject: article.Subject},})
}
}