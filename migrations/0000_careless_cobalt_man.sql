CREATE TABLE "food" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"brand" varchar(256) NOT NULL,
	"serving" varchar(256) NOT NULL,
	"calories" integer NOT NULL,
	"href" varchar(256) NOT NULL,
	"external_id" varchar(256) NOT NULL,
	"searchTerm" varchar(256) NOT NULL,
	"sodium" varchar(256) NOT NULL,
	"total_fat" varchar(256) NOT NULL,
	"potassium" varchar(256) NOT NULL,
	"saturated" varchar(256) NOT NULL,
	"total_carbs" varchar(256) NOT NULL,
	"polyunsaturated" varchar(256) NOT NULL,
	"dietary_fiber" varchar(256) NOT NULL,
	"monounsaturated" varchar(256) NOT NULL,
	"sugars" varchar(256) NOT NULL,
	"trans" varchar(256) NOT NULL,
	"protein" varchar(256) NOT NULL,
	"cholesterol" varchar(256) NOT NULL,
	"vitamin_a" varchar(256) NOT NULL,
	"calcium" varchar(256) NOT NULL,
	"vitamin_c" varchar(256) NOT NULL,
	"iron" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"lastname" varchar(256) NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "user_unique" ON "users" USING btree ("user");