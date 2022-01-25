import React from 'react';
import { Route, Switch} from 'react-router-dom'
import "./Sass/style.scss";
import Login from "./components/Login";
import SignUp from './components/SignUp'
import Upload from './components/TakePicture';
import ChoosePlan from './components/ChoosePlan';
import ForgotPassword from './components/ForgotPassword'
import CreateNewpassword from "./components/CreateNewpassword";
import PasswordChanged from "./components/PasswordChanged";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact element={<Login />}>
          <Login />
        </Route>
        <Route path='/signUp' element={<SignUp />}>
          <SignUp />
        </Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}>
          <ForgotPassword />
        </Route>
        <Route path='/createNewPassword' element={<CreateNewpassword />}>
          <CreateNewpassword />
        </Route>
        <Route path='/passwordChanged' element={<PasswordChanged />}>
          <PasswordChanged />
        </Route>
        <Route path='/upload' element={<Upload />}>
          <Upload />
        </Route>
        <Route path='/chooseplan' element={<ChoosePlan />}>
          <ChoosePlan />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
