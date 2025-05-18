CREATE TABLE "professional" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"specialty" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "review" (
	"id" serial PRIMARY KEY NOT NULL,
	"score" integer NOT NULL,
	"comment" varchar(256) NOT NULL,
	"date_review" date NOT NULL,
	"id_professional" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "review" ADD CONSTRAINT "review_id_professional_professional_id_fk" FOREIGN KEY ("id_professional") REFERENCES "public"."professional"("id") ON DELETE cascade ON UPDATE no action;