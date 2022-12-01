import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Store from "../store";
function Register(props) {
  const { dispatch } = useContext(Store.AppContext);
  const [userInput, setUserInput] = useState({ name: "", email: "", account: "", password: "", phone: "", avt: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const Navigate = useNavigate();
  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const onSubmitHandle = async (e) => {
    try {
      console.log(userInput);
      e.preventDefault();
      const user = await axios.post("/api/register", userInput).then((res) => {
        console.log(res.data.data);
      });
      dispatch({ type: "Current_user", payload: { user } });
      Navigate("/login", { replace: true });
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <Container>
      <div className="register">
        <div className="register-container">
          <h4
            style={{
              color: "#FF00CC",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "120px"
            }}
          >
            Đăng ký tài khoản mới
          </h4>
          <span className="Error">{errorMessage}</span>
          <Form method="post" onSubmit={onSubmitHandle}>
            <Form.Group>
              <Form.Label
                htmlFor="name"
                className="control-label"
              >
                {" "}
                Name
              </Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                className="form-control"
                placeholder="your name"
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                htmlFor="email"
                className="control-label"
              >
                Email
              </Form.Label>
              <Form.Control
                required
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                htmlFor="taikhoan"
                className="control-label"

              >
                Account
              </Form.Label>
              <Form.Control
                required
                type="text"
                className="form-control"
                placeholder="account"
                name="account"
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                htmlFor="password"
                className="control-label"

              >
                Password
              </Form.Label>
              <Form.Control
                required
                type="text"
                className="form-control"
                placeholder="password"
                name="password"
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                htmlFor="sdt"
                className="control-label"

              >
                Phone
              </Form.Label>
              <Form.Control
                required
                type="text"
                className="form-control"
                placeholder="phone number"

                name="phone"
                onChange={onChangeHandle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group controlId="formFileMultiple">
                <Form.Label >Avatar</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  name="avt"
                  onChange={onChangeHandle}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="my-2"
              >
                Đăng ký
              </Button>
              <div>
                <span style={{ fontWeight: "bold", paddingRight: "30px", color: "red", fontSize: "20px" }}>
                  Bạn đã có tài khoản ?
                </span>
                <Button
                  variant="success"
                  type="submit"
                >
                  <Link style={{ textDecoration: "none", color: "white" }}
                    to="/login">
                    Đăng nhập ngay!!!
                  </Link>
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Register;
