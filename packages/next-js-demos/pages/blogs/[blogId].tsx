import { useRouter } from 'next/router'

const BlogCard = () => {
    const router = useRouter()
    const blogId = router.query.blogId
    return (
        <div className='d-flex flex-column justify-content-start'>
            Blog Number: {blogId}
        </div>
    );
};
export default BlogCard;




