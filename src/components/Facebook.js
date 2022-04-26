import React, { useState, useEffect } from 'react';
import { FacebookLoginWithButton, FacebookLogin } from 'facebook-login-react';
function FacebookLogins() {
  const initialState = {
    isLoggedIn: false,
    crateLoginWindow: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  const [data, setData] = useState(initialState);
  const responseFacebook = resp => {
    // console.log(resp);
    if (resp.status === 'unknown') {
      setData({
        ...data,
        crateLoginWindow: false,
        isLoggedIn: false,
      });
    } else {
      setData({
        ...data,
        crateLoginWindow: true,
        userID: resp.userID,
        isLoggedIn: true,
        name: resp.name,
        email: resp.email,
        picture: resp.picture,
      });
    }
  };
  const componentClicked = () => {
    console.log('clicked');
  };

  return (
    <div>
      {data.isLoggedIn && data.crateLoginWindow ? (
        <div
          style={{
            width: '200px',
            height: '50px',
            margin: 'auto',
            backgroundColor: '#3b5998',
            padding: '40px',
          }}
        >
          <div>
            <img
              src={data.picture?.data.url}
              style={{
                width: '65px',
                borderRadius: '50%',
              }}
            />
            <div style={{ display: 'inline-block', margin: '10px' }}>
              Welcome <h3>{data.name}</h3>
            </div>
          </div>
          <br />
          {/* {JSON.stringify(data)} */}
        </div>
      ) : (
        <FacebookLoginWithButton
          appId="1017552449195386"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
      <br />
    </div>
  );
}

export default FacebookLogins;
