CREATE TABLE "patient" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_user" integer NOT NULL,
	"id_professional" bigint NOT NULL
);
--> statement-breakpoint
ALTER TABLE "patient" ADD CONSTRAINT "patient_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "patient" ADD CONSTRAINT "patient_id_professional_professional_id_fk" FOREIGN KEY ("id_professional") REFERENCES "public"."professional"("id") ON DELETE cascade ON UPDATE no action;