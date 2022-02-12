DROP TABLE IF EXISTS friends CASCADE;

CREATE TABLE friends(
  id SERIAL PRIMARY KEY NOT NULL,
  follow_date DATE NOT NULL,

  user_id_1 INTEGER REFERENCES users(id) ON DELETE CASCADE,
  user_id_2 INTEGER REFERENCES users(id) ON DELETE CASCADE
);