import React from 'react';
import SignIn from './SignIn';
import Signup from './SignUp';

class LoginPage extends React.Component {
    render() {
        return (
            <>  
              <div className="flex justify-start bg-gray-700">
                 <div><img style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)'}}  className="h-screen " src="https://miro.medium.com/max/1400/1*remeFh9GIPtsHfzpWsI6zQ.jpeg"></img></div>
                <Signup></Signup>
                {/* <SignIn></SignIn> */}
              </div>
            </>
        );
    }
}

export default LoginPage;