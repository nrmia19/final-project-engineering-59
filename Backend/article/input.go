package article

type CreateArt struct{
	Title string `json:"title":binding:"required"`
	Article string `json:"article":binding:"required"`
}