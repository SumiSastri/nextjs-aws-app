import BlogsNav from "../../components/blogs-nav";
import NavBackToHome from "../../components/back-to-home";

const Blogs = () => {
  return (
    <div className='d-flex flex-column justify-content-start'>
      <div>
        <BlogsNav />
        <NavBackToHome />
      </div>
    </div>
  );
};
export default Blogs;
