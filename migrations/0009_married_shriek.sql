CREATE TABLE "exercise_goals" (
	"id_user" integer NOT NULL,
	"calories_burned_goal" real NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exercise_done" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_user" integer NOT NULL,
	"id_exercise_type" integer NOT NULL,
	"calories_burned" real NOT NULL,
	"date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exercise_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "exercise_goals" ADD CONSTRAINT "exercise_goals_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exercise_done" ADD CONSTRAINT "exercise_done_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exercise_done" ADD CONSTRAINT "exercise_done_id_exercise_type_exercise_types_id_fk" FOREIGN KEY ("id_exercise_type") REFERENCES "public"."exercise_types"("id") ON DELETE cascade ON UPDATE no action;