import { Box, Container, Flex, FormControl, Grid, GridItem, Heading, Img, Input, Text } from '@chakra-ui/react';
import '../css/RecipeListPage.css';
import React, { useState } from 'react';
import { data } from '../utils/data';
import ExactRecipes from './ExactRecipes.jsx';

// All the recipes

export const recipes = Object.values(data.hits);

function RecipeListPage() {
  
  const [search, setSearch] = useState('');

  // Removing the recipes

  function deleteFunction(search, recipes) {
    if (!search) {
      return recipes;
    } else {
      return recipes.filter((remove) => remove.recipe.label.includes(search));
    }
  }

  const deleteActions = deleteFunction(search, recipes);

  const showRecipes = deleteActions.map((recipe) => {
    return <Placeholders key={recipe.label} recipes={recipe.recipe}/>;
  });

  // Centers the last recipe

  const theFinalRecipe = {
    margin: 'auto'
  };

  return (
    <Container>
      <Box>
        <Heading as='h1' className='heading'>Winc Recipe Checker</Heading>
      </Box>
      <FormControl as='form' className='form'>
        <Input as='input' placeholder='Search recipes' value={search} onChange={(e) => setSearch(e.target.value)}></Input>
      </FormControl>
      <Flex className='recipes-flex'>
       {showRecipes.length === 1 ? <Box sx={theFinalRecipe}>{showRecipes}</Box> : showRecipes}
      </Flex>
    </Container>
  );
}

// The recipe placholder

const Placeholders = ({ recipes, removeRecipe }) => {
  const { image, mealType, label, dietLabels, dishType, cautions} = recipes;

  const [eventState, setEventState] = useState(false);
  const [selectExactRecipe, setSelectExactRecipe] = useState();

  // Checks if the recipe is vegan or vegetarian

  const dietLabelsList = Object.values(recipes.healthLabels);

  const isVegan = dietLabelsList.find((vegan) => vegan.includes('Vegan'));
  
  const isVegetarian = dietLabelsList.find((vegetarian) => vegetarian.includes('Vegetarian'));

  let stateVeganVegetarian = undefined;
  if (isVegan && isVegetarian) {
    stateVeganVegetarian = ['VEGAN', 'VEGETARIAN'];
  } else if (isVegetarian) {
    stateVeganVegetarian = ['VEGETARIAN'];
  } else {
    stateVeganVegetarian = [];
  }

  // The hover effect

  function hover() {
    stop();
    return setEventState((eventState) => eventState = true);
  }

  // The stop effect

  function stop() {
    return setEventState((eventState) => eventState = false);
  }

  // Showing the diffrent recipes

  const exactRecipeFunction = (label) => {
    switch (label) {
      case 'Paleo Chocolate Covered Caramels':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[0].recipe.image} mealType={data.hits[0].recipe.mealType} label={data.hits[0].recipe.label} totalTime={data.hits[0].recipe.totalTime} servings={data.hits[0].recipe.yield} ingredientLines={data.hits[0].recipe.ingredientLines} healthLabels={data.hits[0].recipe.healthLabels} dietLabels={data.hits[0].recipe.dietLabels} cautions={data.hits[0].recipe.cautions} calories={data.hits[0].recipe.calories} totalNutrients={data.hits[1].recipe.totalNutrients}/>);
        break;
      case 'Grilled Pork Chops with Chipotle Sauce':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[1].recipe.image} mealType={data.hits[1].recipe.mealType} label={data.hits[1].recipe.label} totalTime={data.hits[1].recipe.totalTime} servings={data.hits[1].recipe.yield} ingredientLines={data.hits[1].recipe.ingredientLines} healthLabels={data.hits[1].recipe.healthLabels} dietLabels={data.hits[1].recipe.dietLabels} cautions={data.hits[1].recipe.cautions} calories={data.hits[1].recipe.calories} totalNutrients={data.hits[1].recipe.totalNutrients} />);
        break;
      case 'Slow Cooker Turkey Dip Sandwiches recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[2].recipe.image} mealType={data.hits[2].recipe.mealType} label={data.hits[2].recipe.label} totalTime={data.hits[2].recipe.totalTime} servings={data.hits[2].recipe.yield} ingredientLines={data.hits[2].recipe.ingredientLines} healthLabels={data.hits[2].recipe.healthLabels} dietLabels={data.hits[2].recipe.dietLabels} cautions={data.hits[2].recipe.cautions} calories={data.hits[2].recipe.calories} totalNutrients={data.hits[2].recipe.totalNutrients} />);
        break;
      case 'Blueberry Basil Margarita Cocktail recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[3].recipe.image} mealType={data.hits[3].recipe.mealType} label={data.hits[3].recipe.label} totalTime={data.hits[3].recipe.totalTime} servings={data.hits[3].recipe.yield} ingredientLines={data.hits[3].recipe.ingredientLines} healthLabels={data.hits[3].recipe.healthLabels} dietLabels={data.hits[3].recipe.dietLabels} cautions={data.hits[3].recipe.cautions} calories={data.hits[3].recipe.calories} totalNutrients={data.hits[3].recipe.totalNutrients} />);
        break;
      case 'Potato Gratin':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[4].recipe.image} mealType={data.hits[4].recipe.mealType} label={data.hits[4].recipe.label} totalTime={data.hits[4].recipe.totalTime} servings={data.hits[4].recipe.yield} ingredientLines={data.hits[4].recipe.ingredientLines} healthLabels={data.hits[4].recipe.healthLabels} dietLabels={data.hits[4].recipe.dietLabels} cautions={data.hits[4].recipe.cautions} calories={data.hits[4].recipe.calories} totalNutrients={data.hits[4].recipe.totalNutrients} />);
        break;
      case 'Seafood Casserole':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[5].recipe.image} mealType={data.hits[5].recipe.mealType} label={data.hits[5].recipe.label} totalTime={data.hits[5].recipe.totalTime} servings={data.hits[5].recipe.yield} ingredientLines={data.hits[5].recipe.ingredientLines} healthLabels={data.hits[5].recipe.healthLabels} dietLabels={data.hits[5].recipe.dietLabels} cautions={data.hits[5].recipe.cautions} calories={data.hits[5].recipe.calories} totalNutrients={data.hits[5].recipe.totalNutrients} />);
        break;
      case 'Green coconut curry with salmon':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[6].recipe.image} mealType={data.hits[6].recipe.mealType} label={data.hits[6].recipe.label} totalTime={data.hits[6].recipe.totalTime} servings={data.hits[6].recipe.yield} ingredientLines={data.hits[6].recipe.ingredientLines} healthLabels={data.hits[6].recipe.healthLabels} dietLabels={data.hits[6].recipe.dietLabels} cautions={data.hits[6].recipe.cautions} calories={data.hits[6].recipe.calories} totalNutrients={data.hits[6].recipe.totalNutrients} />);
        break;
      case 'Vegan Herb Crackers recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[7].recipe.image} mealType={data.hits[7].recipe.mealType} label={data.hits[7].recipe.label} totalTime={data.hits[7].recipe.totalTime} servings={data.hits[7].recipe.yield} ingredientLines={data.hits[7].recipe.ingredientLines} healthLabels={data.hits[7].recipe.healthLabels} dietLabels={data.hits[7].recipe.dietLabels} cautions={data.hits[7].recipe.cautions} calories={data.hits[7].recipe.calories} totalNutrients={data.hits[7].recipe.totalNutrients} />);
        break;
      case 'Baked Chicken Parm':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[8].recipe.image} mealType={data.hits[8].recipe.mealType} label={data.hits[8].recipe.label} totalTime={data.hits[8].recipe.totalTime} servings={data.hits[8].recipe.yield} ingredientLines={data.hits[8].recipe.ingredientLines} healthLabels={data.hits[8].recipe.healthLabels} dietLabels={data.hits[8].recipe.dietLabels} cautions={data.hits[8].recipe.cautions} calories={data.hits[8].recipe.calories} totalNutrients={data.hits[8].recipe.totalNutrients} />);
        break;
      case 'Parmesan grissini':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[9].recipe.image} mealType={data.hits[9].recipe.mealType} label={data.hits[9].recipe.label} totalTime={data.hits[9].recipe.totalTime} servings={data.hits[9].recipe.yield} ingredientLines={data.hits[9].recipe.ingredientLines} healthLabels={data.hits[9].recipe.healthLabels} dietLabels={data.hits[9].recipe.dietLabels} cautions={data.hits[9].recipe.cautions} calories={data.hits[9].recipe.calories} totalNutrients={data.hits[9].recipe.totalNutrients} />);
        break;
      case 'Easy Chili Almonds recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[10].recipe.image} mealType={data.hits[10].recipe.mealType} label={data.hits[10].recipe.label} totalTime={data.hits[10].recipe.totalTime} servings={data.hits[10].recipe.yield} ingredientLines={data.hits[10].recipe.ingredientLines} healthLabels={data.hits[10].recipe.healthLabels} dietLabels={data.hits[10].recipe.dietLabels} cautions={data.hits[10].recipe.cautions} calories={data.hits[10].recipe.calories} totalNutrients={data.hits[10].recipe.totalNutrients} />);
        break;
      case 'Korean Seasoned Potatoes (감자 조&':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[11].recipe.image} mealType={data.hits[11].recipe.mealType} label={data.hits[11].recipe.label} totalTime={data.hits[11].recipe.totalTime} servings={data.hits[11].recipe.yield} ingredientLines={data.hits[11].recipe.ingredientLines} healthLabels={data.hits[11].recipe.healthLabels} dietLabels={data.hits[11].recipe.dietLabels} cautions={data.hits[11].recipe.cautions} calories={data.hits[11].recipe.calories} totalNutrients={data.hits[11].recipe.totalNutrients} />);
        break;
      case 'Oven Baked Mexican Rice recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[12].recipe.image} mealType={data.hits[12].recipe.mealType} label={data.hits[12].recipe.label} totalTime={data.hits[12].recipe.totalTime} servings={data.hits[12].recipe.yield} ingredientLines={data.hits[12].recipe.ingredientLines} healthLabels={data.hits[12].recipe.healthLabels} dietLabels={data.hits[12].recipe.dietLabels} cautions={data.hits[12].recipe.cautions} calories={data.hits[12].recipe.calories} totalNutrients={data.hits[12].recipe.totalNutrients} />);
        break;
      case 'Swedish Pancakes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[13].recipe.image} mealType={data.hits[13].recipe.mealType} label={data.hits[13].recipe.label} totalTime={data.hits[13].recipe.totalTime} servings={data.hits[13].recipe.yield} ingredientLines={data.hits[13].recipe.ingredientLines} healthLabels={data.hits[13].recipe.healthLabels} dietLabels={data.hits[13].recipe.dietLabels} cautions={data.hits[13].recipe.cautions} calories={data.hits[13].recipe.calories} totalNutrients={data.hits[13].recipe.totalNutrients} />);
        break;
      case 'Pizza with taleggio, prosciutto and pear':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[14].recipe.image} mealType={data.hits[14].recipe.mealType} label={data.hits[14].recipe.label} totalTime={data.hits[14].recipe.totalTime} servings={data.hits[14].recipe.yield} ingredientLines={data.hits[14].recipe.ingredientLines} healthLabels={data.hits[14].recipe.healthLabels} dietLabels={data.hits[14].recipe.dietLabels} cautions={data.hits[14].recipe.cautions} calories={data.hits[14].recipe.calories} totalNutrients={data.hits[14].recipe.totalNutrients} />);
        break;
      case 'Strawberry Cheesecake recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[15].recipe.image} mealType={data.hits[15].recipe.mealType} label={data.hits[15].recipe.label} totalTime={data.hits[15].recipe.totalTime} servings={data.hits[15].recipe.yield} ingredientLines={data.hits[15].recipe.ingredientLines} healthLabels={data.hits[15].recipe.healthLabels} dietLabels={data.hits[15].recipe.dietLabels} cautions={data.hits[15].recipe.cautions} calories={data.hits[15].recipe.calories} totalNutrients={data.hits[15].recipe.totalNutrients} />);
        break;
      case 'Mushroom and Spinach Ravioli':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[16].recipe.image} mealType={data.hits[16].recipe.mealType} label={data.hits[16].recipe.label} totalTime={data.hits[16].recipe.totalTime} servings={data.hits[16].recipe.yield} ingredientLines={data.hits[16].recipe.ingredientLines} healthLabels={data.hits[16].recipe.healthLabels} dietLabels={data.hits[16].recipe.dietLabels} cautions={data.hits[16].recipe.cautions} calories={data.hits[16].recipe.calories} totalNutrients={data.hits[16].recipe.totalNutrients} />);
        break;
      case 'Cajun Pork Pinwheels':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[17].recipe.image} mealType={data.hits[17].recipe.mealType} label={data.hits[17].recipe.label} totalTime={data.hits[17].recipe.totalTime} servings={data.hits[17].recipe.yield} ingredientLines={data.hits[17].recipe.ingredientLines} healthLabels={data.hits[17].recipe.healthLabels} dietLabels={data.hits[17].recipe.dietLabels} cautions={data.hits[17].recipe.cautions} calories={data.hits[17].recipe.calories} totalNutrients={data.hits[17].recipe.totalNutrients} />);
        break;
      case 'Fire Roasted Tomato Soup recipes':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[18].recipe.image} mealType={data.hits[18].recipe.mealType} label={data.hits[18].recipe.label} totalTime={data.hits[18].recipe.totalTime} servings={data.hits[18].recipe.yield} ingredientLines={data.hits[18].recipe.ingredientLines} healthLabels={data.hits[18].recipe.healthLabels} dietLabels={data.hits[18].recipe.dietLabels} cautions={data.hits[18].recipe.cautions} calories={data.hits[18].recipe.calories} totalNutrients={data.hits[18].recipe.totalNutrients} />);
        break;
      case 'Homemade Sweet Spaghetti Sauce':
        return setSelectExactRecipe((selectExactRecipe) => selectExactRecipe = <ExactRecipes image={data.hits[19].recipe.image} mealType={data.hits[19].recipe.mealType} label={data.hits[19].recipe.label} totalTime={data.hits[19].recipe.totalTime} servings={data.hits[19].recipe.yield} ingredientLines={data.hits[19].recipe.ingredientLines} healthLabels={data.hits[19].recipe.healthLabels} dietLabels={data.hits[19].recipe.dietLabels} cautions={data.hits[19].recipe.cautions} calories={data.hits[19].recipe.calories} totalNutrients={data.hits[19].recipe.totalNutrients} />);
        break;
      default:
        return null;
        break;
    }
  }

  return (
    <>
    <Box as='address' className={eventState ? 'hover' : 'recipes'} onMouseOver={hover} onMouseLeave={stop} onClick={() => exactRecipeFunction(label)}>
      <Grid>
        <GridItem>
         <Img className='image' src={image} alt={label} />
        </GridItem>
        <GridItem>
         <Text className='meal-type'>{mealType}</Text>
        </GridItem>
        <GridItem>
         <Text className='label'>{label}</Text>
        </GridItem>
        <GridItem>
          <Box as='section' className='vegan-vegetarian-grid'>
            {
              stateVeganVegetarian.map((label, index) => {
                return <Box key={index} className={stateVeganVegetarian.length > 1 ? 'vegan' : 'vegetarian'}>{label}</Box>
              })
            }
          </Box>
        </GridItem>
        <GridItem>
          <Box as='section' className='diets'>
           {
            dietLabels.map((label, index) => {
              return <Box key={index} className={dietLabels.length > 1 ? 'diet-labels' : 'diet-label'}>{label}</Box>;
            })
           }
          </Box>
        </GridItem>
        <GridItem>
          <Text className='dish'>Dish:</Text>
          <Text className='dish-type'>{dishType}</Text>
        </GridItem>
        <GridItem>
          <Text className='cautions-label'>Cautions:</Text>
          <Box as='section' className='cautions-grid'>
           {
            cautions.map((label, index) => {
              return <Box key={index} className={cautions.length > 1 ? 'cautions' : 'caution'}>{label}</Box>;
            })
           }
          </Box>
        </GridItem>
      </Grid>
    </Box>
    {/* Selects the exact recipe */}
    {selectExactRecipe}
    </>
   );
}

export default RecipeListPage;