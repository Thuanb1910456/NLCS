import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import * as Store from "../store";
function Login(props) {
  const { dispatch } = useContext(Store.AppContext);
  const [userInput, setUserInput] = useState({ account: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const Navigate = useNavigate();
  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const onSubmitHandle = async (e) => {
    try {
      // console.log(userInput);
      e.preventDefault();
      const option = {
        method: "post",
        url: "/api/login",
        data: userInput,
      };
      const response = await axios(option);
      const user = response.data.data.user;
      // console.log(user);
      localStorage.setItem("token", JSON.stringify(user));
      dispatch({ type: "Current_User", payload: { user } });
      if(user._id === "638427e0b668b5404ecfa821"){
        Navigate("/admin",{replace:true})
      }
      else{
        Navigate("/", { replace: true });
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div>
      <Container>
        <div className="login">
          <div className="login-container">
            <h4 style={{ color: "#FF00CC", fontWeight: "bold",marginLeft:"70px",marginTop:"10px"}}>
              Well come to PetShop
            </h4>
            <Form method="post" onSubmit={onSubmitHandle}>
              
              <Form.Group>
                <Form.Label
                  htmlFor="username"
                  className="control-label"

                >
                  Tài khoản
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  name="account"
                  placeholder="Username/Email"
                  style={{width:"55%"}}
                  onChange={onChangeHandle}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="username" className="control-label">
                  Mật khẩu
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="password"
                  style={{width:"55%"}}
                  onChange={onChangeHandle}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <input type="checkbox"></input> check me out!
                  <Link to="/login" style={{marginLeft:"80px",textDecoration:"none",fontStyle:"oblique"}}>Forgot password?</Link>
                </Form.Label>
              </Form.Group>
              {errorMessage && (
                <span className="Error">* Error: {errorMessage}</span>
              )}
              <div direction="horizontal">
                <Button type="submit">Đăng nhập</Button>
                <br></br>
                <span>
                  Hoặc đăng nhập bằng
                </span>
                <div>
                  <Button variant="outline-dark">
                    <FontAwesomeIcon icon={faFacebookF} color="blue" />
                    <Link
                      to="https://www.facebook.com/"
                      style={{ textDecoration: "none", fontWeight: "bolder" }}
                    >
                      {" "}
                      Facebook
                    </Link>
                  </Button>
                  <Button variant="outline-danger" className = "mx-2">
                    <FontAwesomeIcon icon={faGoogle} color="red" />
                    <Link
                      to="https://accounts.google.com/signin"
                      style={{ textDecoration: "none", fontWeight: "bolder" }}
                    >
                      {" "}
                      Google
                    </Link>
                  </Button>
                  <Button variant="outline-info">
                    <FontAwesomeIcon icon={faTwitter}/>
                    <Link
                      to="https://twitter.com/i/flow/login"
                      style={{ textDecoration: "none", fontWeight: "bolder" }}
                    >
                      {" "}
                      Twitter
                    </Link>
                  </Button>
                </div>

                <div>
                  <span>
                    Bạn chưa có tài khoản ?
                  </span>
                </div>

                <Button
                  type="submit"
                  style={{ background: "#c98548" }}
                >
                  <Link
                    to="/register"
                    className="text-decoration-none text-white"
                    style={{
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Đăng ký ngay!!!
                  </Link>
                </Button>
              </div>
            </Form>
          </div>


        </div>
      </Container>
    </div>
  );
}

export default Login;
