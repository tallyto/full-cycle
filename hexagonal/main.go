package main

import (
	"database/sql"

	"github.com/tallyto/full-cycle/hexagonal/adapters/db"
	"github.com/tallyto/full-cycle/hexagonal/application"
)

func main() {
	database, _ := sql.Open("sqlite3", "sqlite.db")
	productDbAdapter := db.NewProductDb(database)
	productService := application.NewProductService(productDbAdapter)
	product, _ := productService.Create("Product 1", 10)

	productService.Enable(product)
}
