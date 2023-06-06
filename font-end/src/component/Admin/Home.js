import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import * as Store from "../store";
import { Row, Table, Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar, faPlus,faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
function Home(props) {
    const [products, setProducts] = useState([]);
    const { dispatch } = useContext(Store.AppContext);
    const [newprod, setNewprod] = useState({});
    const [show, setShow] = useState(false);
    const [addProd, setAddProd] = useState({});
    useEffect(() => {
        axios.get("/api/PetMart").then(function (response) {
            setProducts(response.data.data.products.reverse());
            dispatch({ type: "Get_All_Products", payload: products })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);
    const Delete = (id_product) => {
        axios.delete(`/api/PetMart/${id_product}`)
            .then(function (response) {
                toast.error("Sản phẩm được xóa thành công!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch((err) => { console.log("lỗi") });

    }
    const onChange = (e) => {
        setNewprod({ ...newprod, [e.target.name]: e.target.value });
        setAddProd({ ...addProd, [e.target.name]: e.target.value });
    }
    const Edit = (id_product) => {
        // console.log(id_product);
        newprod.image = newprod.image.slice(12);
        axios.put(`/api/PetMart/${id_product}`, {
            name: newprod.name,
            price: newprod.price,
            image: newprod.image,
            class:newprod.class,
            describe:newprod.describe
        }).then(function (response) {
            toast.success("Sản phẩm được cập nhật thành công!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }).catch((err) => {
            toast.error("Vui lòng kiểm tra lại thông tin!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }
    const addProducts = () => {
        if (addProd.name !== null && addProd.price > 0 && addProd.class !== null && addProd.describe !== null && addProd.image !== null) {
            addProd.image = addProd.image.slice(12);
            axios.post("/api/PetMart", {
                name: addProd.name,
                price: addProd.price,
                class: addProd.class,
                describle: addProd.describle,
                image: addProd.image
            }).then(function (response) {
                toast.success("Thêm sản phẩm thành công!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }).catch((err) => {
                toast.error("Vui lòng kiểm tra lại thông tin!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            setShow(false);
        }
        else {
            toast.error("Vui lòng kiểm tra lại thông tin!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }
    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <span><ToastContainer /></span>
                <Row>
                    <h2 className="tilte-h2"> Danh sách sản phẩm</h2>
                    <span className="line"></span>
                    <div className="btn-admin">
                        <Button variant="primary" ><Link to={'/bills'} style={{ color: "white", textDecoration: "none" }}>Quản lý hóa đơn <FontAwesomeIcon icon={faFileInvoiceDollar} /></Link></Button>
                        <Button variant="success" onClick={() => setShow(true)}>Thêm sản phẩm mới <FontAwesomeIcon icon={faPlus} /></Button>
                        <Modal show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thêm sản phẩm mới</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name product</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="New name product ?"
                                            name="name"
                                            onChange={onChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="New price ?"
                                            name="price"
                                            onChange={onChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select aria-label="Default select example" name="class" onChange={onChange}>
                                            <option value="636614dc488332706c53ca5a">Betta</option>
                                            <option value="636614f6488332706c53ca5b">Tôm</option>
                                            <option value="6366158e488332706c53ca5d">cá koi</option>
                                            <option value="636615ac488332706c53ca5e">Cá lóc</option>
                                            <option value="63661645488332706c53ca63">Cá vàng</option>
                                            <option value="6366169f488332706c53ca64">Cá rồng</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="formFileMultiple">
                                        <Form.Label >Hình ảnh</Form.Label>
                                        <Form.Control
                                            type="file"
                                            multiple
                                            name="image"
                                            onChange={onChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Describe</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="New type ?"
                                            name="describe"
                                            onChange={onChange}
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary">
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => addProducts()}>
                                    Thêm
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <Table striped bordered hover variant="dark" className="align-middle text-center">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Loại</th>
                                <th>Giá</th>
                                <th>Chỉnh sữa</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                products.map((product, i) => (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{product.name}</td>
                                        <td><img src={`/images/products/${product.image}`} className="rounded" alt="" style={{ width: "150px", height: "100px" }} /></td>
                                        <td>{product.class.name}</td>
                                        <td>{new Intl.NumberFormat("ja-Jp").format(product.price)}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target={"#abc" + i} data-bs-whatever="@getbootstrap"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                            <div className="modal fade" id={"abc" + i} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                Chỉnh sửa sản phẩm
                                                            </h1>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">
                                                                        Name
                                                                    </label>
                                                                    <input type="text" className="form-control" id="recipient-name" onChange={onChange} name="name" placeholder={product.name} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">
                                                                        Price
                                                                    </label>
                                                                    <input type="number" className="form-control" id="recipient-name" onChange={onChange} name="price" placeholder={product.price} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">
                                                                        Hình ảnh
                                                                    </label>
                                                                    <input type="file" className="form-control" id="recipient-name" onChange={onChange} name="image" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">
                                                                        Thể loại
                                                                    </label>
                                                                    <select className="form-select" aria-label="Default select example" onChange={onChange} name="class" >
                                                                        <option value="636614dc488332706c53ca5a">Betta</option>
                                                                        <option value="636614f6488332706c53ca5b">Tôm</option>
                                                                        <option value="6366158e488332706c53ca5d">cá koi</option>
                                                                        <option value="636615ac488332706c53ca5e">Cá lóc</option>
                                                                        <option value="63661645488332706c53ca63">Cá vàng</option>
                                                                        <option value="6366169f488332706c53ca64">Cá rồng</option>
                                                                    </select>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">
                                                                        Mô tả
                                                                    </label>
                                                                    <input type="text" className="form-control" id="recipient-name" onChange={onChange} name="describle"  />
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button type="button" className="btn btn-primary" onClick={() => Edit(product._id)} data-bs-dismiss="modal">
                                                               Lưu thay đổi
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button"className="btn btn-danger"data-bs-toggle="modal"data-bs-target={"#abcd" + i}><FontAwesomeIcon icon={faTrashCan} /></button>
                                            <div
                                                className="modal fade"
                                                id={"abcd" + i}
                                                tabIndex={-1}
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                Delete products ?
                                                            </h1>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">Bạn có thật sự muôn xóa sản phẩm này ra khỏi của hàng của bạn ?</div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                No
                                                            </button>
                                                            <button type="button" className="btn btn-primary" onClick={() => Delete(product._id)} data-bs-dismiss="modal">
                                                                Yes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}
export default Home;