CREATE TABLE "place" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"direction" varchar(256) NOT NULL,
	"category" varchar(256) NOT NULL,
	"href" varchar(256) NOT NULL
);
