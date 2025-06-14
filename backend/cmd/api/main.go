package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	// TODO: Инициализация конфигурации
	// TODO: Инициализация базы данных
	// TODO: Инициализация Redis
	// TODO: Инициализация роутера

	server := &http.Server{
		Addr:    ":8080",
		Handler: nil, // TODO: Добавить роутер
	}

	// Graceful shutdown
	go func() {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to start server: %v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	// TODO: Graceful shutdown
	log.Println("Shutting down server...")
} 