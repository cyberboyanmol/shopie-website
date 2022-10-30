import React, { useState } from "react";
import InputField from "./InputField";
import useInput from "../hooks/useInput";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import LoginBtn from "../ButtonWrapper/LoginBtn";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Redux store/UI Reducer/uiReducer";
const LoginMain = () => {
  const dispatch = useDispatch();
  const nameIsValid = (value) => value.trim() !== "";
  const emailIsValid = (value) =>
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const passwordIsValid = (value) => value.trim().length >= 6;

  //Name Field Validation checking
  const {
    value: NameValue,
    isValid: NameIsvalid,
    hasError: NameHasError,
    valueChangeHandler: NameValueChangeHandler,
    inputBlurHandler: NameBulrChangeHandler,
    reset: NameReset,
  } = useInput(nameIsValid);
  //Email Field Validation Checking
  const {
    value: EmailValue,
    isValid: EmailIsvalid,
    hasError: EmailHasError,
    valueChangeHandler: EmailValueChangeHandler,
    inputBlurHandler: EmailBulrChangeHandler,
    reset: EmailReset,
  } = useInput(emailIsValid);
  // Password Field Validation checking
  const {
    value: PasswordValue,
    isValid: PasswordIsvalid,
    hasError: PasswordHasError,
    valueChangeHandler: PasswordValueChangeHandler,
    inputBlurHandler: PasswordBulrChangeHandler,
    reset: PasswordReset,
  } = useInput(passwordIsValid);

  //cofirm password is valid checking
  const confirmPasswordIsValid = (value) =>
    value === PasswordValue && value.trim().length !== 0;
  const {
    value: ConfirmPasswordValue,
    isValid: ConfirmPasswordIsValid,
    hasError: ConfirmPasswordHasError,
    valueChangeHandler: ConfirmPasswordValueChangeHandler,
    inputBlurHandler: ConfirmPasswordBulrChangeHandler,
    reset: ConfirmPasswordReset,
  } = useInput(confirmPasswordIsValid);

  const [hasaccount, setHasaccount] = useState(false);
  const [forgotpassword, setForgotpassword] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  //   console.log(NameValue);
  //   console.log(InputHasError);
  const NameErrorMessage = NameHasError ? "This field is required." : "";
  const EmailErrorMessage = EmailHasError
    ? "Please enter a valid Email Id"
    : "";
  const PasswordErrorMessage = PasswordHasError
    ? "Passwords must be at least 6 characters."
    : "";
  const ConfirmPasswordErrorMessage = ConfirmPasswordHasError
    ? "Please enter valid password"
    : "";
  const clear = () => {
    ConfirmPasswordReset();
    PasswordReset();
    EmailReset();
    NameReset();
  };
  const validation = () => {
    if (
      NameIsvalid &&
      EmailIsvalid &&
      PasswordIsvalid &&
      ConfirmPasswordIsValid
    ) {
      return true;
    }
    return false;
  };

  const ResetEmailHandler = () => {};

  const SignupHandler = () => {
    if (!validation()) {
      dispatch(uiActions.isloginEmpty(true));
    }
    console.log(NameValue);
    console.log(EmailValue);
    console.log(PasswordValue);
  };
  const LoginHandler = () => {};
  const SignWithGoogle = () => {
    console.log("google");
  };
  return (
    <div className="login__main__conatiner">
      <div className="login__main__container__title">
        <h2>Welcome to Shopie</h2>
        <span>
          {forgotpassword
            ? "Reset your password"
            : hasaccount
            ? "Sign In"
            : "Create  Account"}
        </span>
      </div>
      <form
        className="login__main__conatiner__form"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Field */}
        {!forgotpassword && (
          <>
            {!hasaccount && (
              <InputField
                value={NameValue}
                setValue={NameValueChangeHandler}
                bulrHandlder={NameBulrChangeHandler}
                icon="fal fa-user"
                placeholder="First and Last name"
                error={{
                  error: NameHasError,
                  message: NameErrorMessage,
                }}
              />
            )}
          </>
        )}
        {/* Email Field */}
        <InputField
          value={EmailValue}
          setValue={EmailValueChangeHandler}
          bulrHandlder={EmailBulrChangeHandler}
          placeholder="Email Id"
          icon="fal fa-envelope"
          error={{ error: EmailHasError, message: EmailErrorMessage }}
        />
        {!forgotpassword && (
          <>
            {(hasaccount || !hasaccount) && (
              <>
                <InputField
                  value={PasswordValue}
                  setValue={PasswordValueChangeHandler}
                  bulrHandlder={PasswordBulrChangeHandler}
                  placeholder="Enter Password"
                  type={!showpassword && "password"}
                  icon="fal fa-lock"
                  hide={true}
                  showpassword={showpassword}
                  Event={() => setShowpassword(!showpassword)}
                  error={{
                    error: PasswordHasError,
                    message: PasswordErrorMessage,
                  }}
                />
                {!hasaccount && (
                  <InputField
                    value={ConfirmPasswordValue}
                    setValue={ConfirmPasswordValueChangeHandler}
                    bulrHandlder={ConfirmPasswordBulrChangeHandler}
                    placeholder="Confirm Password"
                    type={!showpassword && "password"}
                    icon="fal fa-lock"
                    error={{
                      error: ConfirmPasswordHasError,
                      message: ConfirmPasswordErrorMessage,
                    }}
                  />
                )}
                {hasaccount && !forgotpassword && (
                  <div className="forgetPassword">
                    <span
                      className="forget"
                      onClick={() => setForgotpassword(true)}
                    >
                      Forget Password ?
                    </span>
                  </div>
                )}
              </>
            )}
          </>
        )}
        {forgotpassword ? (
          <ButtonWrapper
            btnText="Reset Password"
            resetPassword={true}
            text2="Back to Login"
            changeState={() => {
              clear();
              setForgotpassword(false);
            }}
            clickEventHandler={ResetEmailHandler}
          />
        ) : !hasaccount ? (
          <ButtonWrapper
            btnText="Create Account"
            text2="Login"
            text1="Already have a account ?"
            changeState={() => {
              clear();
              setHasaccount(!hasaccount);
            }}
            clickEventHandler={SignupHandler}
          />
        ) : (
          <ButtonWrapper
            btnText="Continue"
            text2="Create Account"
            text1="New Customer ?"
            changeState={() => {
              clear();
              setHasaccount(!hasaccount);
            }}
            clickEventHandler={LoginHandler}
          />
        )}
      </form>
      {!forgotpassword && (
        <div className="google">
          <span className="span">
            <hr /> or Sign in with
            <hr />
          </span>
          <LoginBtn
            btnText="Sign In with Google"
            google={true}
            clickEventHandler={SignWithGoogle}
          />
        </div>
      )}
    </div>
  );
};

export default LoginMain;
