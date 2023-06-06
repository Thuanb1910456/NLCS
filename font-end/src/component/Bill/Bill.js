import { React, useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faXmark } from '@fortawesome/free-solid-svg-icons';
function Bill() {
    const [Bill, setBill] = useState();
    const [load, setLoad] = useState(0);
    const users = JSON.parse(localStorage.getItem("token"));
    useLayoutEffect(() => {
        async function fecthData() {
            setBill((await axios.get("/api/bill/user", {
                params: { user: users._id }
            })).data.data.reverse())
        }
        fecthData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load]);
    const deleteBill = (id) => {
        axios.delete(`/api/bill/${id}`)
            .then(function (res) {
                setLoad((prev)=>prev+1);
            })
    }
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='show-Bill'>
                                <h2 className="tilte-h2">ĐƠN ĐẶT HÀNG CỦA BẠN</h2>
                                <Table striped bordered hover className="align-middle text-center">
                                    <thead>
                                        <tr>
                                            <th >STT</th>
                                            <th >Tên sản phẩm</th>
                                            <th >Hình ảnh</th>
                                            <th >Số lượng</th>
                                            <th >Giá sản phẩm</th>
                                            <th >Thành tiền</th>
                                            <th >Ngày đặt</th>
                                            <th >Ngày nhận hàng dự kiến</th>
                                            <th >Trạng thái </th>
                                        </tr>
                                    </thead>
                                    {Bill !== undefined ? <tbody>
                                        {Bill.map((value, index) => {
                                            value.updatedAt = new Date(value.updatedAt).toLocaleDateString();
                                            let day = new Date().setDate(new Date(value.updatedAt).getDate() + 3);
                                            let dateRe = new Date(day);
                                            dateRe = new Date(dateRe).toLocaleDateString("vi-vn");
                                            let dayGive = new Date(value.updatedAt).toLocaleDateString("vi-vn");
                                            var status = ""
                                            if (value.status !== false && value.content === false) {
                                                status = "Đang giao hàng"
                                            }
                                            else if (value.status !== true && value.content === true) {
                                                status = "Đơn hàng của bạn bị từ chối."
                                            }
                                            else {
                                                status = "Đang chờ xác nhận"
                                            }
                                            return [
                                                value.products.map((e, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{i + 1}</td>
                                                            <td>{e.id_product.name}</td>
                                                            <td><img src={"/images/products/" + e.id_product.image} alt="..." /></td>
                                                            <td>{e.quantity}</td>
                                                            <td>{new Intl.NumberFormat('vi').format(e.id_product.price)}</td>
                                                            <td>{new Intl.NumberFormat('vi').format(e.id_product.price * e.quantity)}</td>
                                                            <td>{dayGive}</td>
                                                            <td>{dateRe}</td>
                                                            {value.content === false ?
                                                                <td>
                                                                    {value.status !== true ?
                                                                        <div>
                                                                            <span style={{ color: "tomato" }}>{status}</span>
                                                                            <button className='text-danger' style={{ marginLeft: "30px", fontWeight: "bold" }} onClick={() => deleteBill(value._id, e.id_product._id)} ><FontAwesomeIcon icon={faXmark} /></button>
                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            <span className='text-success'>{status}</span>
                                                                            <FontAwesomeIcon icon={faTruckFast} className="mx-2 text-success" />
                                                                        </div>
                                                                    }
                                                                </td> :
                                                                <td><span className='text-danger'>{status} <br />Do không thể liên lạc. </span></td>
                                                            }

                                                        </tr>
                                                    )
                                                }),
                                                <tr key={index} style={{ fontWeight: "bold" }}>
                                                    <td colSpan={5}>Tổng tiền</td>
                                                    <td>{new Intl.NumberFormat('vi').format(value.total)}</td>
                                                </tr>
                                            ]
                                        }

                                        )}
                                    </tbody> : null}
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Bill;