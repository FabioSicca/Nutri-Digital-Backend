CREATE TABLE "hidratate" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_user" integer NOT NULL,
	"mililiters" integer NOT NULL,
	"fecha" date NOT NULL
);
--> statement-breakpoint
ALTER TABLE "consumed" ALTER COLUMN "fecha" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "hidratate" ADD CONSTRAINT "hidratate_id_user_users_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;