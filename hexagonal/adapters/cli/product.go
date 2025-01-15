package cli

import (
	"fmt"

	"github.com/tallyto/full-cycle/hexagonal/application"
)

func Run(service application.ProductServiceInterface, action string, productId string, productName string, price float64) (string, error) {
	var result = ""

	switch action {
	case "create":
		product, err := service.Create(productName, price)
		if err != nil {
			return result, err
		}
		result = fmt.Sprintf("Product ID %s with the name %s has been created with the price %f and status %s", product.GetID(), product.GetName(), product.GetPrice(), product.GetStatus())
	case "enable":
		product, err := service.Get(productId)
		if err != nil {
			return result, err
		}
		err = product.Enable()
		if err != nil {
			return result, err
		}
		result = fmt.Sprintf("Product %s enabled", product.GetName())
	case "disable":
		product, err := service.Get(productId)
		if err != nil {
			return result, err
		}
		err = product.Disable()
		if err != nil {
			return result, err
		}

		result = fmt.Sprintf("Product %s disabled", product.GetName())
	default:
		res, err := service.Get(productId)
		if err != nil {
			return result, err
		}
		result = fmt.Sprintf("Product ID %s with the name %s has the price %f and status %s", res.GetID(), res.GetName(), res.GetPrice(), res.GetStatus())
	}
	return result, nil
}
