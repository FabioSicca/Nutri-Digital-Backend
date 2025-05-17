CREATE TABLE "micronutrient_goals" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_user" integer NOT NULL,
	"saturated_fat" real,
	"polyunsaturated_fat" real,
	"monounsaturated_fat" real,
	"trans_fat" real,
	"cholesterol" real,
	"sodium" real,
	"potassium" real,
	"fiber" real,
	"sugar" real,
	"vitamin_a" real,
	"vitamin_c" real,
	"calcium" real,
	"iron" real
);
--> statement-breakpoint
ALTER TABLE "micronutrient_goals" ADD CONSTRAINT "micronutrient_goals_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;