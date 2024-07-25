package main

import (
	"database/sql"
	"log"
	"net"

	_ "github.com/lib/pq"
	"github.com/tallyto/full-cycle/gRPC/internal/database"
	"github.com/tallyto/full-cycle/gRPC/internal/pb"
	"github.com/tallyto/full-cycle/gRPC/internal/service"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {

	db, err := sql.Open("postgres", "postgres://gograph:gograph@db:5432/gograph?sslmode=disable")

	if err != nil {
		log.Fatalf("failed to open database: %v", err)
	}

	defer db.Close()

	categoryDb := database.NewCategory(db)
	categoryService := service.NewCategoryService(*categoryDb)

	grpcServer := grpc.NewServer()
	pb.RegisterCategoryServiceServer(grpcServer, categoryService)
	reflection.Register(grpcServer)

	lis, err := net.Listen("tpc", ":50051")
	if err != nil {
		panic(err)
	}

	if err := grpcServer.Serve(lis); err != nil {
		panic(err)
	}

}
