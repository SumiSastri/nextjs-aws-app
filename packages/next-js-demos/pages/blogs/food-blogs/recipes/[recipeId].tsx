import { useRouter } from 'next/router'

const RecipeCard = () => {
    const router = useRouter()
    const recipeId = router.query.recipeId
    return (
        <div className='d-flex flex-column justify-content-start'>
            Recipe Number: {recipeId}
        </div>
    );
};
export default RecipeCard;