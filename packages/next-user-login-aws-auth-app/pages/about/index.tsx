import NavBar from "../../components/NavBar";

const About = () => {
  return (
    <div className='d-flex flex-column justify-content-start'>
      <NavBar />
      <div>
        <h1 className='d-flex flex-row justify-content-center mt-5 p-5'>
          Techstack
        </h1>
        <h4 className='d-flex flex-row justify-content-center'>
          This demo uses the following AWS services
        </h4>
        <ul>
          <li>
            Amplify
          </li>
          <li>
            AppSync
          </li>
          <li>
            Cognito
          </li>
          <li>
            DynamoDB
          </li>
          <li>
            S3
          </li>
        </ul>

      </div>
    </div >
  );
};
export default About;
