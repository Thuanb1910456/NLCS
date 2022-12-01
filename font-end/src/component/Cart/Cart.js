import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Col, Row, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
function Cart(props) {
    const users = JSON.parse(localStorage.getItem("token"));
    const [prods, setProds] = useState([])
    const [idCart, setIdCart] = useState('')
    const Navigate = useNavigate();
    let [number,setNumber] = useState(0)
    const [load, setLoad] = useState(0);
    useEffect(() => {
        axios.get("/api/cart/user", {
            params: { user: users._id }
        }).then(function (res) {
            // console.log(res)
            setProds(res.data.data.products.reverse());
            setIdCart(res.data.data._id)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load]);

    // console.log(prods)
    const totalValue = () => {
        var total = 0
        if (prods !== null && prods !== undefined) {
            prods.forEach(element => {
                total += element.id_product.price * element.quantity
            });
        }
        return total;
    }
    var total = totalValue();
    const addBill = (idCart) => {
        axios.post("/api/bill", {
            id_user: users._id,
            products: prods,
            total: total,
            status: false,
            content:false,
        }).then(function (res) {
            axios.put(`/api/cart/${idCart}`, {
                products: []
            }).then(function (res) { })
            toast.success("Đặt hàng thành công!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }).catch((err) => { })
        Navigate("/bill", { replace: true });
    }
    // console.log(prods)
    const getLocated = (products = [], id_prod) => {
        // console.log(prods)
        for (let i = 0; i < products.length; i++) {
            if (products[i].id_product._id === id_prod) {
                return i;
            }
        }
        return null;
    }
    // console.log(prods[0]._id)
    const onChangeHandle = (e) => {
        setNumber({number, [e.target.name]: e.target.value });
      };
    
    const updateQuantity = (id_product) => {
        const located = getLocated(prods, id_product)
        let SL = prods[located].quantity + parseInt(number.SL);
        // console.log(typeof prods[located].quantity);
        axios.put(`/api/cart/${idCart}/${prods[located]._id}`, {
            products: prods[located].quantity = SL
        }).then(function (res) {
            // console.log("thanh cong")
            setLoad((prev)=>prev+1);
        }).catch((err) => {
            console.log("loi");
        })
    }

    return (
        <><Container className="my-3">
            <Row>
                <Col lg={12}>
                    <div className="show-Cart">
                        <h2 className="tilte-h2">GIỎ HÀNG CỦA BẠN</h2>
                        <Table striped bordered hover variant="light" className="align-middle text-center">
                            <thead>
                                <tr>
                                    <th >STT</th>
                                    <th >Tên sản phẩm</th>
                                    <th >Hình ảnh</th>
                                    <th colSpan={2}>Số lượng</th>
                                    <th >Giá sản phẩm</th>
                                    <th >Tổng tiền</th>
                                </tr>
                            </thead>
                            {prods !== undefined && prods !== null ? <tbody>
                                {prods.map((prod, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{prod.id_product.name}</td>
                                        <td><img src={`/images/products/${prod.id_product.image}`} className="rounded" alt="" /></td>
                                        <td colSpan={2}>
                                            <input placeholder={prod.quantity} type="number" min={0} onChange={onChangeHandle} name="SL"/>
                                            <Button onClick={()=>updateQuantity(prod.id_product._id)} size="sm" >Cập nhật</Button>
                                        </td>
                                        <td>{new Intl.NumberFormat('vi').format(prod.id_product.price)}</td>
                                        <td>{new Intl.NumberFormat('vi').format(prod.id_product.price * prod.quantity)}</td>
                                    </tr>
                                ))}
                            </tbody> : null}
                        </Table>
                        <div className="pay">
                            <h4>Tổng số tiền cẩn phải thanh toán:</h4>
                            <h4 style={{ float:"right" }}>{new Intl.NumberFormat('vi').format(total)} VNĐ</h4>
                        </div>
                        <Button variant="success" style={{ float: "right", margin: "10px 50px 10px " }} onClick={() => addBill(idCart)}> Đặt hàng </Button>
                        <ToastContainer />
                    </div>
                </Col>
            </Row>

        </Container>
        </>
    );
}

export default Cart;