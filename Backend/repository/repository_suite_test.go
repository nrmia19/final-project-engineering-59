package repository_test

import (
	"testing"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func TestRepositorySuite(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Repository Suite")
}