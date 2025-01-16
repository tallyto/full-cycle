package server

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/tallyto/full-cycle/hexagonal/application"
	"github.com/urfave/negroni"
)

type WebServer struct {
	Service application.ProductServiceInterface
}

func NewWebServer() *WebServer {
	return &WebServer{}
}

func (s *WebServer) Serve() {
	r := mux.NewRouter()
	n := negroni.New(
		negroni.NewLogger(),
	)
	server := &http.Server{
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		Addr:         ":9000",
		Handler:      http.DefaultServeMux,
		ErrorLog:     log.New(os.Stderr, "log: ", log.Ldate|log.Ltime|log.Lshortfile),
	}
	err := server.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
