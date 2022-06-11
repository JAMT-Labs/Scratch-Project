SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.decks (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "decks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.cards (
	"id" serial NOT NULL,
	"front" varchar NOT NULL,
	"back" varchar NOT NULL,
	"created_at" timestamp NOT NULL,
	"deck_id" bigint NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.cards ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("deck_id") REFERENCES  public.decks("id");

--
--

INSERT INTO public.decks VALUES (1, 'Javascript - Basics', NOW());
INSERT INTO public.decks VALUES (2, 'US States and Capitals', NOW());

INSERT INTO public.cards VALUES (1, 'How are template literals formatted?', 'Using backticks instead of quotation marks.', NOW(), 1);
INSERT INTO public.cards VALUES (2, 'What is the most condensed form of function declarations called?', 'Concise body', NOW(), 1);
INSERT INTO public.cards VALUES (3, 'What are the increment and decrement assignment operators?', '++ and --', NOW(), 1);

INSERT INTO public.cards VALUES (4, '	Ohio', 'Columbus', NOW(), 2);
INSERT INTO public.cards VALUES (5, 'West Virginia', '	Charleston', NOW(), 2);
INSERT INTO public.cards VALUES (6, 'Hawaii', 'Honolulu', NOW(), 2);


--
-- PostgreSQL database dump complete
--

