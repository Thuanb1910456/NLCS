import { React, useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
function Bills() {
    const [Bill, setBill] = useState();
    const [load, setLoad] = useState(0);
    useLayoutEffect(() => {
        async function fecthData() {
            setBill((await axios.get("/api/bill")).data.data.reverse())
        }
        fecthData(load);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load]);
    // console.log(Bill);
    const confirm = (id) =>{
        axios.put(`/api/bill/${id}`,{
            status: true,
        }).then(function(res){console.log("success");})
        setLoad((prev)=>prev+1);
    }
    const destroy = (id) =>{
        axios.put(`/api/bill/${id}`,{
            content: true,
        }).then(function(res){console.log("success");})
        setLoad((prev)=>prev+1);
    }
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='show-Bill'>
                                <h2 className="tilte-h2">DANH SÁCH ĐƠN HÀNG</h2>
                                <Table striped bordered hover className="align-middle text-center">
                                    <thead>
                                        <tr>
                                            <th >STT</th>
                                            <th >Tên sản phẩm</th>
                                            <th >Hình ảnh</th>
                                            <th >Số lượng</th>
                                            <th >Giá sản phẩm</th>
                                            <th >Thành tiền</th>
                                            <th > Khách hàng</th>
                                            <th >Thao tác </th>
                                        </tr>
                                    </thead>
                                    {Bill !== undefined ? <tbody>
                                        {Bill.map((value, index) => {
                                            if(value.status === false){
                                                var toggle = ("Đang chờ liên hệ")
                                            } else{
                                                toggle = ("Đã liên hệ thành công")
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
                                                            <td>{value.id_user.name}</td>
                                                            {value.content === false ? 
                                                            <td >
                                                               {value.status !== true ? 
                                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                                    <span className='text-warning'>{toggle}</span>
                                                                    <button className='text-danger' onClick={()=>destroy(value._id)}><FontAwesomeIcon icon={faXmark} /></button>
                                                                    <button className='text-success' onClick={()=>confirm(value._id)}><FontAwesomeIcon icon={faCheck} /></button>
                                                                </div> : <span className='text-success'>{toggle}</span>
                                                               }
                                                            </td>: <td><span className='text-danger'>Không liên lạc được</span></td>}
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

export default Bills;