import NavBackToHome from "../../components/back-to-home";

const About = () => {
  return (
    <div className='d-flex flex-column justify-content-start'>
      <h1 className='d-flex flex-row justify-content-center mt-5 p-5'>About</h1>
      <h4 className='d-flex flex-row justify-content-center'>
        This is an About page
      </h4>
      <NavBackToHome />
    </div>
  );
};
export default About;
