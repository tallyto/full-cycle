https://grpc.io/docs/languages/go/quickstart/

protoc --go_out=. --go-grpc_out=. proto/course_category.proto  


go install github.com/ktr0731/evans@latest

evans -r repl

package pb

service CategoryService

call CreateCategory