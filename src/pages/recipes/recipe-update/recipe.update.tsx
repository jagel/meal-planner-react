import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";
import { useEffect } from "react";
import { getData } from "../../../utils/api-request";

export default function RecipeUpdate(){
    const textValue = SetLocalizationText;

    let { recipeId } = useParams();
    console.log('recipeId:', recipeId)

    useEffect(()=>{
        getData('https://localhost:7242/api/recipe/getrecipebyid/1');
    },[])


    return <Container>

    </Container>
}