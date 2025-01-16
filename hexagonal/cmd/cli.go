/*
Copyright © 2025 Tállyto Rodrigues <rodrigues.tallyto@hotmail.com>
*/
package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/tallyto/full-cycle/hexagonal/adapters/cli"
)

var action string
var productId string
var productName string
var productPrice float64

// cliCmd represents the cli command
var cliCmd = &cobra.Command{
	Use:   "cli",
	Short: "Manage product actions",
	Long: `A CLI tool for enabling and disabling products.

Usage:
  cli [command] [options]

Commands:
  enable     Enable a product
  disable    Disable a product
  create     Create a product

Options:
  -a, --action      Action to perform (enable/disable)
  -i, --id          Product ID
  -n, --name        Product name
  -p, --price       Product price

Examples:
  # Enable a product with ID 12345
  cli enable -i 12345
  
  # Disable a product named "Smart Speaker"
  cli disable -n "Smart Speaker"`,
	Run: func(cmd *cobra.Command, args []string) {
		res, err := cli.Run(&productService, action, productId, productName, productPrice)
		if err != nil {
			fmt.Println(err.Error())
		}
		fmt.Println(res)
	},
}

func init() {
	rootCmd.AddCommand(cliCmd)
	cliCmd.Flags().StringVarP(&action, "action", "a", "enable", "Enable / Disable a product")
	cliCmd.Flags().StringVarP(&productId, "id", "i", "", "Product ID")
	cliCmd.Flags().StringVarP(&productName, "product", "n", "", "Product name")
	cliCmd.Flags().Float64VarP(&productPrice, "price", "p", 0, "Product price")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// cliCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// cliCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
