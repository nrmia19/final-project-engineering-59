package api

type DashboardErrorResponse struct {
	Error string `json:"error"`
}

type AdminUser struct {
	Username string `json:"username"`
	Password string `json:"password"`
}