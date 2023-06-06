import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import * as Store from "../store";
import { Row, Card, Col, Container, ListGroup, Button, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { useNavigate, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PetMart(props) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [type, setType] = useState([]);
  const { dispatch } = useContext(Store.AppContext);
  const Navigate = useNavigate();
  // const [productType, setProductType] = useState([]);
  useEffect(() => {
    axios.get("/api/PetMart").then(function (response) {
      setProduct(response.data.data.products);
      setProducts(response.data.data.products);
      dispatch({ type: "Get_All_Products", payload: products })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    axios.get("/api/class").then(function (response) {
      setType(response.data.data.classP)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  const AddCart = (id_product) => {
    const users = JSON.parse(localStorage.getItem("token"));
    if (users === null) {
      toast.error("Vui lòng đăng nhập trước khi đặt hàng!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        Navigate("/login", { replace: true });
      }, 4000)
    }
    else {
      axios.get("/api/cart/user", {
        params: { user: users._id }
      }).then(function (res) {
        // console.log(res.data.data);
        const result = res.data.data.products;
        const i_prod = getLocated(result, id_product)
        // console.log(id_product);
        const quantity = (i_prod !== null) ? res.data.data.products[i_prod].quantity : 0;
        if (i_prod !== null) {
          result[i_prod] = { id_product: id_product, quantity: quantity + 1 }
        } else {
          result.push({ id_product: id_product, quantity: 1 })
        }
        axios.put(`/api/cart/${res.data.data._id}`, {
          products: result
        }).then(function (res) {
          toast.success("Sản phẩm được thêm vào giỏ hàng thành công!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
      }).catch((err) => {
        axios.post("/api/cart", {
          id_user: users._id,
          products: products[0] = { id_product: id_product, quantity: 1 }
        })
        toast.success("Sản phẩm được thêm vào giỏ hàng thành công!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
    }
  }
  const getLocated = (prods = [], id_prod) => {
    // console.log(prods)
    for (let i = 0; i < prods.length; i++) {
      if (prods[i].id_product._id === id_prod) {
        return i;
      }
    }
    return null;
  }
  const onChange = (e) => {
    // console.log(product);
    const temp = product.filter(element => element.name.toLowerCase().includes(e.target.value.toLowerCase()));
    // console.log(temp);
    setProducts(temp);
  }
  const onSubmit = (name) => {
    const temp = product.filter(element => element.class.name === name);
    // console.log(temp);
    setProducts(temp);
  }
  return (
    <>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <div className="mx-auto col-6">
            <div className="input-group ">
              <input type="text"
                className="form-control"
                placeholder="Nhập thông tin cần tìm"
                name="valueInput"
                onChange={onChange}
              />
              <div className="input-group-append mx-2">
                <button className="btn btn-outline-success"
                  type="button" onClick={() => { }}>
                  <i className="fas fa-search"></i>Tìm kiếm
                </button>
              </div>
            </div >
          </div>
        </Row>
        <Row>
          <Col lg={3} style={{ boxSizing: "border-box" }}>
            <h2 className="tilte-h2">Menu Shop</h2>
            <DropdownButton id="dropdown-basic-button" title="Danh sách các loại sản phẩm">
              {type.map((i, index) => (
                <div className="brand" key={index}>
                  <Button variant="outline-warning" className="my-2 text-danger" onClick={()=>onSubmit(i.name)} >{i.name}</Button>
                </div>
              ))}
            </DropdownButton>
          </Col>
          <Col lg={9} style={{ boxSizing: "border-box" }}>
            <Row>
              <h2 className="tilte-h2"> Sản phẩm được tìm kiếm nhiều nhất</h2>
              <span className="line"></span>
              {products.map((product, index) => (
                <Col lg={4} style={{ boxSizing: "border-box", border: "none" }} className="card" key={index}>
                  <div className="products" >
                    <Card style={{ height: "100%" }}>
                      <Card.Img variant="top" src={"/images/products/" + product.image} />
                      <Card.Body>
                        <Card.Title>Tên: {product.name}</Card.Title>
                        <Card.Text className="text-line">
                          Mô tả: {product.describle}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item style={{ marginTop: "auto" }}>Giá: {new Intl.NumberFormat('vi').format(product.price)} VND</ListGroup.Item>
                      </ListGroup>
                      <Card.Body style={{ flex: "0" }}>
                        <Card.Link ><Button variant="outline-success" style={{ height: "20px", marginTop: "5px" }} onClick={() => AddCart(product._id)}>Thêm giỏ hàng <FontAwesomeIcon icon={faShopify} /></Button></Card.Link>
                        <span><ToastContainer /></span>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

      </Container>
    </>
  );
}
export default PetMart;
