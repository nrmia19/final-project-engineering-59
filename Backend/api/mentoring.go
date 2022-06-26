package api

import (
    
    // "log"
    "net/http"
    "encoding/json"

)
type MentoringSuccessResponse struct{
    Massage string `json:"massage"`
    Link string `json:"link"`
}

// type M map[string]interface{}

// const MESSAGE_NEW_USER = "New User"
// const MESSAGE_CHAT = "Chat"
// const MESSAGE_LEAVE = "Leave"

// var connections = make([]*WebSocketConnection, 0)

// type SocketPayload struct {
// 	Message string
// }

// type SocketResponse struct {
// 	From    string
// 	Type    string
// 	Message string
// }

// type WebSocketConnection struct {
// 	*websocket.Conn
// 	Username string
// }

func mentoring(w http.ResponseWriter, req *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(MentoringSuccessResponse{Massage : "This Link to Access Mentoring", Link: "https://t.me/ruangedukasi01"})
}

// 	currentGorillaConn, err := websocket.Upgrade(w, req, w.Header(), 1024, 1024)
//     if err != nil {
//         http.Error(w, "Could not open websocket connection", http.StatusBadRequest)
//     }

//     username := req.URL.Query().Get("username")
//     currentConn := WebSocketConnection{Conn: currentGorillaConn, Username: username}
//     connections = append(connections, &currentConn)

//     go handleIO(&currentConn, connections)
// }

// func handleIO(currentConn *WebSocketConnection, connections []*WebSocketConnection) {
//     defer func() {
//         if r := recover(); r != nil {
//             log.Println("ERROR", fmt.Sprintf("%v", r))
//         }
//     }()

//     broadcastMessage(currentConn, MESSAGE_NEW_USER, "")

//     for {
//         payload := SocketPayload{}
//         err := currentConn.ReadJSON(&payload)
//         if err != nil {
//             if strings.Contains(err.Error(), "websocket: close") {
//                 broadcastMessage(currentConn, MESSAGE_LEAVE, "")
//                 ejectConnection(currentConn)
//                 return
//             }

//             log.Println("ERROR", err.Error())
//             continue
//         }

//         broadcastMessage(currentConn, MESSAGE_CHAT, payload.Message)
//     }
// }

// func ejectConnection(currentConn *WebSocketConnection) {
// 	filtered := gubrak.From(connections).Reject(func(each *WebSocketConnection) bool {
// 		return each == currentConn
// 	}).Result()
// 	connections = filtered.([]*WebSocketConnection)
// }

// func broadcastMessage(currentConn *WebSocketConnection, kind, message string) {
// 	for _, eachConn := range connections {
// 		if eachConn == currentConn {
// 			continue
// 		}

// 		eachConn.WriteJSON(SocketResponse{
// 			From:    currentConn.Username,
// 			Type:    kind,
// 			Message: message,
// 		})
// 	}