package repository_test

import (
	"database/sql"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	_ "github.com/mattn/go-sqlite3"

	"ruangEdukasi/Backend/repository"
)

// create unit test for repository
var _ = Describe("Repository", func() {
	var (
		db        *sql.DB
		err       error
		usersRepo *repository.UserRepository
	)

	BeforeEach(func() {
		db, err = sql.Open("sqlite3", "./database.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id integer not null primary key AUTOINCREMENT,
			username varchar(255) not null,
			email varchar(255) not null,
			password varchar(255) not null,
			role varchar(255) not null,
			loggedin boolean not null
		);
		INSERT INTO users(username, email, password, role, loggedin) VALUES
		('aditira', 'aditira@gmail.com','1234', 'admin', false),
		('dina', 'dina@gmail.com','4321', 'employee', false),
		('dito', 'dito@gmail.com','2552', 'employee', false);
		`)

		if err != nil {
			panic(err)
		}
		usersRepo = repository.NewUserRepository(db)

	})

	AfterEach(func() {
		db, err = sql.Open("sqlite3", "./database.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
			DROP TABLE IF EXISTS users;
			`)
		if err != nil {
			panic(err)
		}
	})

	Describe("Select All Users", func() {
		When("Get All Users List From Database", func() {
			It("Should Return All Users List", func() {
				usersList, err := usersRepo.FetchUsers()
				Expect(err).ToNot(HaveOccurred())

				Expect(usersList[0].Username).To(Equal("aditira"))
				Expect(usersList[0].Email).To(Equal("aditira@gmail.com"))
				Expect(usersList[0].Password).To(Equal("1234"))
				Expect(usersList[0].Role).To(Equal("admin"))
				Expect(usersList[0].Loggedin).To(Equal(false))
				Expect(usersList[1].Username).To(Equal("dina"))
				Expect(usersList[1].Email).To(Equal("dina@gmail.com"))
				Expect(usersList[1].Password).To(Equal("4321"))
				Expect(usersList[1].Role).To(Equal("employee"))
				Expect(usersList[1].Loggedin).To(Equal(false))
				Expect(usersList[2].Username).To(Equal("dito"))
				Expect(usersList[2].Email).To(Equal("dito@gmail.com"))
				Expect(usersList[2].Password).To(Equal("2552"))
				Expect(usersList[2].Role).To(Equal("employee"))
				Expect(usersList[2].Loggedin).To(Equal(false))
			})
		})
	})

	// Describe("Select User By Username", func() {
	// 	When("Get User By Username", func() {
	// 		It("Should Return User By Username", func() {
	// 			user, err := usersRepo.FetchUserByUsername("aditira")
	// 			Expect(err).ToNot(HaveOccurred())

	// 			Expect(user.Username).To(Equal("aditira"))
	// 			Expect(user.Email).To(Equal("aditira@gmail.com"))
	// 			Expect(user.Password).To(Equal("123456"))
	// 			Expect(user.Role).To(Equal("admin"))
	// 			Expect(user.Loggedin).To(Equal(false))
	// 		})
	// 	})
	// })

	Describe("Login User", func() {
		When("Username and Password is correct", func() {
			It("accepts the login", func() {
				res, err := usersRepo.Login("aditira", "1234")
				Expect(err).ToNot(HaveOccurred())
				Expect(*res).To(Equal("aditira"))
			})
		})
		When("Username is correct but Password is wrong", func() {
			It("rejects the login", func() {
				_, err := usersRepo.Login("aditira", "12345")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
		When("Username and Password is wrong", func() {
			It("rejects the login", func() {
				_, err := usersRepo.Login("raka", "12347")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
	})
})