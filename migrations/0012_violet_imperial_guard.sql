CREATE TABLE "planning" (
	"id" serial PRIMARY KEY NOT NULL,
	"portion" varchar(256) NOT NULL,
	"name_food" varchar(256) NOT NULL,
	"day" varchar(256) NOT NULL,
	"fecha" date NOT NULL,
	"id_user" integer NOT NULL,
	"id_food" bigint NOT NULL
);
--> statement-breakpoint
ALTER TABLE "planning" ADD CONSTRAINT "planning_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "planning" ADD CONSTRAINT "planning_id_food_food_id_fk" FOREIGN KEY ("id_food") REFERENCES "public"."food"("id") ON DELETE cascade ON UPDATE no action;