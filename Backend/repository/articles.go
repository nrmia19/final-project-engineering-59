package repository

import (
	"database/sql"
	"log"
)

type ArticleRepository struct {
	db *sql.DB
}

func NewArticleRepository(db *sql.DB) *ArticleRepository {
	return &ArticleRepository{db: db}
}

func (a *ArticleRepository) FetchArticleByID(id int64) (Article, error) {
	//TODO: You must implement this function fot fetch product by id

	// query
	sql := `
		SELECT * FROM articles WHERE id = ?
	;`

	// variabel penampung
	var article Article

	// execute query
	datas, err := a.db.Query(sql, id)
	if err != nil {
		return article, nil
	}

	// defer
	defer datas.Close()

	// binding
	for datas.Next() {
		datas.Scan(
			&article.ID,
			&article.Title,
			&article.Subject,
		)

		if err != nil {
			return article, nil
		}
	}

	return article, nil
}

func (a *ArticleRepository) FetchArticleByTitle(articleTitle string) (*string, error) {
	// TODO: You must implement this function for fetch product by name

	// query
	sql := `SELECT * FROM articles WHERE title = ?;`

	// variable penampung
	var article Article

	// execute query
	data := a.db.QueryRow(sql, articleTitle)

	// binding
	err := data.Scan(
		&article.ID,
		&article.Title,
		&article.Subject,
	)

	if err != nil {
		return &article.Title, err
	}

	return &article.Title, nil
}

func (a *ArticleRepository) FetchArticles() ([]Article, error) {
	// TODO: You must implement this function for fetch all products

	// query
	sql := `SELECT * FROM articles`

	// variable penampung
	var allArticle []Article

	// execute query
	datas, err := a.db.Query(sql)
	if err != nil {
		return nil, err
	}

	// defer
	defer datas.Scan()

	// binding
	for datas.Next() {
		var a Article
		datas.Scan(
			&a.ID,
			&a.Title,
			&a.Subject,
		)

		allArticle = append(allArticle, a)
	}
	log.Println(allArticle)
	return allArticle, nil
}

func (a *ArticleRepository) InsertArticle(title string, subject string) error {

	// query
	sql := `
		INSERT INTO articles
		(title, subject)
		VALUES
		(?, ?)
	;`

	_, err := a.db.Exec(sql, title, subject)
	
	if err != nil {
		log.Fatal("error disini")
		return err
	}
	log.Println("sukses insert")

	return nil
}