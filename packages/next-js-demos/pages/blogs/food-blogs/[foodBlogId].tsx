import { useRouter } from 'next/router'
import React from 'react';

const FoodBlogCard = () => {
    const router = useRouter()
    const foodBlogId = router.query.foodBlogId
    return (
        <div className='d-flex flex-column justify-content-start'>

            Food Blog No: {foodBlogId}
        </div>
    );
};
export default FoodBlogCard;