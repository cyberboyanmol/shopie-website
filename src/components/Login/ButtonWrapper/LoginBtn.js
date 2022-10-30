import React from "react";

const LoginBtn = (props) => {
  const { btnText, clickEventHandler, google } = props;
  let loader = false;

  return (
    <button className={`LoginBtn `} onClick={clickEventHandler}>
      {loader && <i className="loader_spin"></i>}
      {google && (
        <img
          width="20px"
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
      )}

      <span>{btnText}</span>
    </button>
  );
};

export default LoginBtn;
