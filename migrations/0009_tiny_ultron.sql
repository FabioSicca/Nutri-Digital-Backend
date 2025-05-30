CREATE TABLE "exercise_goals" (
	"id_user" integer NOT NULL,
	"calories_burned_goal" real NOT NULL
);
--> statement-breakpoint
ALTER TABLE "exercise_goals" ADD CONSTRAINT "exercise_goals_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;