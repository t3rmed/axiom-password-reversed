package main

import (
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"golang.org/x/crypto/pbkdf2"
)

const (
	port = ":3000"
)

var (
	salt = []byte{
		217, 3, 161, 123, 53, 200, 206, 36, 143, 2, 220, 252, 240, 109, 204, 23,
		217, 174, 79, 158, 18, 76, 149, 117, 73, 40, 207, 77, 34, 194, 196, 163,
	}
	iterations = 600000
	keyLength  = 32 // 256 bits
)

// hashPassword hashes a password using PBKDF2 with SHA-256
func hashPassword(password string) string {
	passwordBytes := []byte(password)
	derivedKey := pbkdf2.Key(passwordBytes, salt, iterations, keyLength, sha256.New)
	return base64.StdEncoding.EncodeToString(derivedKey)
}

// solveHandler handles the password hashing request
func solveHandler(w http.ResponseWriter, r *http.Request) {
	var request struct {
		Password string `json:"password"`
	}

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, `{"error": "Invalid request body"}`, http.StatusBadRequest)
		return
	}

	if request.Password == "" {
		http.Error(w, `{"error": "Password is required"}`, http.StatusBadRequest)
		return
	}

	hashedPassword := hashPassword(request.Password)
	response := map[string]string{"hashedPassword": hashedPassword}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, `{"error": "Internal Server Error"}`, http.StatusInternalServerError)
	}
}

func main() {
	http.HandleFunc("/solve", solveHandler)

	server := &http.Server{
		Addr:         port,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	log.Printf("Server running on http://localhost%s\n", port)
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
