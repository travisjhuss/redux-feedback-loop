-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Dummy feedback items
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!'),
VALUES (1, 1, 5, 'HAAALLLPPPP!'),
VALUES (5, 5, 5, 'Just peachy.'),
VALUES (3, 3, 2, 'Something ain''t clicking');

