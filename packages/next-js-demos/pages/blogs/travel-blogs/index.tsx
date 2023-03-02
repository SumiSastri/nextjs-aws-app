import BackToBlogsHome from "../../../components/back-to-blogs-home/BackToBlogsHome";

const TravelBlogs = () => {
    return (
        <div className='d-flex flex-column justify-content-start'>
            Travel blogs home
            <div>
                <h6 className='d-flex flex-row justify-content-center p-4'>
                    Country list
                </h6>
            </div>
            <BackToBlogsHome />
        </div>
    );
};
export default TravelBlogs;