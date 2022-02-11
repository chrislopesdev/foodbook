DROP TABLE IF EXISTS ingredients CASCADE;

CREATE TABLE ingredients(
  id SERIAL PRIMARY KEY NOT NULL,
  ingredient_name VARCHAR(255) NOT NULL,
  amount NUMERIC NOT NULL,

  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
);