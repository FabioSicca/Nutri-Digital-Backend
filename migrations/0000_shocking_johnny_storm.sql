CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user" varchar(256),
	"name" varchar(256),
	"lastname" varchar(256),
	"password" text,
	"role" text
);
