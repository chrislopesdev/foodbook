import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ results }) => {
  const parsedRecipes =
    results.length > 0 &&
    results.map((recipe) => {
      return (
        <RecipeListItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image_link={recipe.image_link}
          id={recipe.id}
          cuisine={recipe.cuisine}
          restrictions={recipe.dietary_restriction}
          prepTime={recipe.prep_minutes}
          difficulty={recipe.difficulty}
          first_name={recipe.first_name}
          last={recipe.last_name}
          avatar={recipe.avatar}
          creator_id={recipe.creator_id}
        />
      );
    });

  return (
    <Box
      sx={{
        flexGrow: 3,
        paddingLeft:'8rem'
      }}>
      {parsedRecipes}
    </Box>
  );
};

export default RecipeList;
