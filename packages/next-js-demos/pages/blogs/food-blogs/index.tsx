import BackToBlogsHome from "../../../components/back-to-blogs-home/BackToBlogsHome";

const FoodBlogs = () => {
    return (
        <div className='d-flex flex-column justify-content-start'>
            Food blogs home
            <div>
                <h6 className='d-flex flex-row justify-content-center p-4'>
                    Recipe List
                </h6>
            </div>
            <BackToBlogsHome />
        </div>
    );
};
export default FoodBlogs;