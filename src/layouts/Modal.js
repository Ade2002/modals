function Modal(props) {
  function continueHandler(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  return (
    <div className="modal">
      <span className="flex_btn">
        <button className="login">
          Login to continue
        </button>
        <button className="signUp active">
          Sign up to continue
        </button>
      </span>
      <form action="post">
        <span className="form-group">
          <label for="Name"> Full Name </label>
          <input type="text" name="name" placeholder="Enter your full name" />
        </span>
        <span className="form-group">
          <label for="Email"> Email </label>
          <input type="email" name="email" placeholder="Enter your email" />
        </span>
        <span className="form-group">
          <label for="Address"> Home Address </label>
          <input type="address" name="address" placeholder="Enter your full address" />
        </span>
        <span className="form-group">
          <label for="phone"> Phone Number </label>
          <input type="tel" name="phone" placeholder="Enter phone number" />
        </span>
        <span className="form-group">
          <label for="password"> Create  Password </label>
          <input type="password" name="password" placeholder="Enter password" />
        </span>
        <span className="form-group">
          <label for="password"> Confirm  Password </label>
          <input type="password" name="confirmPassword" placeholder="Confirm password" />
        </span>
        <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
          <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg></button>
      </form>
    </div>
  );
}
export default Modal;