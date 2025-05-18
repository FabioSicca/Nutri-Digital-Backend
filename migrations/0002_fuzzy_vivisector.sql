CREATE TABLE "nutrition_goals" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_user" integer NOT NULL,
	"calories" real,
	"total_fat" real,
	"total_carbs" real,
	"protein" real
);
--> statement-breakpoint
ALTER TABLE "nutrition_goals" ADD CONSTRAINT "nutrition_goals_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;