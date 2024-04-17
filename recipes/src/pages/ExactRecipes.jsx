import '../css/ExactRecipes.css';
import { Container, Flex, Grid, GridItem, Text, Box, Img } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { data } from '../utils/data';

// The recipes

const recipes = Object.values(data.hits);

// The lesser than sign

const sign = '<';

export let exactRecipe = [];

function ExactRecipes(props) {
    const { image, mealType, label, totalTime, servings, ingredientLines, healthLabels, dietLabels, cautions, calories, totalNutrients } = props;

    const [hover, setHover] = useState(false);
    const [goBack, setGoBack] = useState(undefined);

    // The events effect

const effect = () => {
    setHover((hover) => hover = true);
}

const back = () => {
    setGoBack((goBack) => goBack = window.location.reload());
}

// The nutrients

const { CHOCDF, PROCNT, FAT, CHOLE, NA } = totalNutrients;

const nutriens = [
    `${Math.round(calories) + ' ' + 'calories'.toUpperCase()}`,
    `${Math.round(CHOCDF.quantity) + ' ' + CHOCDF.unit + '\n' + CHOCDF.label.toUpperCase()}`,
    `${Math.round(PROCNT.quantity) + ' ' + PROCNT.unit + '\n' + PROCNT.label.toUpperCase()}`,
    `${Math.round(FAT.quantity) + ' ' + FAT.unit + '\n' + FAT.label.toUpperCase()}`,
    `${Math.round(CHOLE.quantity) + ' ' + CHOLE.unit + '\n' + CHOLE.label.toUpperCase()}`,
    `${Math.round(NA.quantity) + ' ' + NA.unit + '\n' + NA.label.toUpperCase()}`
];

    return (
        <Container>
            {/* The recipe */}
            <Box as='section' className='recipe'>
            {/* The header */}
            <Box as='header' className='menu'>
                <Box as='div' className={hover ? 'hover-style' : 'sign'} onMouseOver={effect} onClick={back}>
                    {sign}
                </Box>
                <Box as='div'>
                    <Img className='logo' src={logo} alt='Logo' />
                </Box>
            </Box>
            {/* The `props` */}
                <Grid>
                    {/* The image */}
                    <GridItem>
                     <Img className='recipe-image' src={image} alt={label} />
                    </GridItem>
                    {/* The meal type*/}
                    <GridItem>
                        <Text className='recipe-meal-types'>{mealType}</Text>
                    </GridItem>
                    {/* The label */}
                    <GridItem>
                        <Text className='recipe-label'>{label}</Text>
                    </GridItem>
                    {/* The total cooking time */}
                    <GridItem>
                        <Box className='total-time' as='div'>Total cooking time: <Text className='minutes'>{totalTime} Minutes</Text></Box>
                    </GridItem>
                    {/* The servings */}
                    <GridItem>
                        <Box className='servings' as='div'>Servings: <Text className='total-servings'>{servings}</Text></Box>
                    </GridItem>
                    {/* The ingredients */}
                    <GridItem>
                        <Text className='ingredients-label'>Ingredients:</Text>
                        <Flex className='ingredients-lines'>
                            {
                            ingredientLines.map((ingredient, index) => {
                                return <Box key={index}>{ingredient}</Box>;
                            })
                            }
                        </Flex>
                    </GridItem>
                    {/* The health labels */}
                    <GridItem>
                        <Text className='health'>Health labels:</Text>
                         <Flex className='health-labels'>
                          {
                          healthLabels.map((label) => {
                            return <Box className='recipe-health-labels'>{label}</Box>;
                          })
                          }
                         </Flex>
                    </GridItem>
                    {/* The diet labels */}
                    <GridItem>
                        <Text className='diet'>Diet:</Text>
                         <Box className='diet-labels-grid'>
                            {
                                dietLabels.map((label, index) => {
                                    return <Box key={index} className='diet-labels'>{label}</Box>;
                                })
                            }
                         </Box>
                    </GridItem>
                          {/* The caution labels */}
                          <GridItem>
                           <Text className='recipe-cautions'>Cautions:</Text>
                           <Box className='recipe-cautions-grid'>
                            {
                                cautions.map((label, index) => {
                                    return <Box key={index} className='recipe-cautions-labels'>{label}</Box>;
                                })
                            }
                            </Box>
                          </GridItem>
                    <GridItem>
                     {/* The total nutrients*/}
                      <Text className='total-nutrients'>Total nutrients:</Text>
                        <Flex className='nutrients'>
                            {
                                nutriens.map((nutrien) => {
                                    return <Box className='nutrien-labels-flex'>
                                        <Box className='nutrien-labels'>{nutrien}</Box>
                                    </Box>;
                                  })
                            }
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Container>
    );
}

export default ExactRecipes;