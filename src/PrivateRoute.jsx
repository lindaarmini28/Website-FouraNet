/* eslint-disable react/prop-types */
import MainLayout from "./Components/mainn";


const PrivateRoute = ({ component }) => {

  return <MainLayout> {component} </MainLayout>;
};

export default PrivateRoute;
