import React from 'react';
import './Styles/Home.css';
import { Button, Modal, ModalHeader, 
    ModalBody, ModalFooter,InputGroup, 
    InputGroupAddon, InputGroupText, Input,
    Form, FormGroup, Label, FormText
} from 'reactstrap';
import { API_URL } from '../helper/apiurl';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
    login,
    onInputLoginForm
} from '../Actions';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

    state={
        isOpen: false,
        char: false,
        number: false
    }

    //function to open/close modal popup
    modalToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    // REGISTER FUNCTION
    // onBtnRegister = () => {
    //     let { char, number } = this.state
    //     let num = /[0-9]/
    //     let username = this.refs.username.value;
    //     let email = this.refs.email.value;
    //     let password = this.refs.password.value;
    //     if(username && password && email){ // Cek Kolom form pendaftaran
    //         this.setState({
    //             number: num.test(password),
    //             char: password.length > 7 && password.length < 21 // Cek password karakter minimal 8 maks 20
    //         })
    //             Axios.get(API_URL +`/users?username=${username}`)
    //             .then((res) => {
    //                 if(res.data.length === 0){
    //                     if(char && number){
    //                         Axios.post(API_URL +`/users`, {
    //                             username,
    //                             password,
    //                             email,
    //                         })
    //                         .then((res) => {
    //                             this.props.Login(res.data)
    //                             alert('Registration Success')
    //                         })
    //                     }else{
    //                         alert('Invalid Password! \n Password must be 8 or more character)
    //                     }
    //                 }else{
    //                     alert('Username has been taken!')
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }else{
    //         alert('Please fill in all the forms!')
    //     }
    // }

    // Function untuk login
    onBtnLogin = () => {
        this.props.login(this.props.loginform)
    }

    render() {
        // Redirect ke halaman dashboard apabila berhasil login
        if (this.props.user.username) {
            return(
            <Redirect to='/'>

            </Redirect>
            )
        }
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.modalToggle}>
                    <div className="d-flex" style={{ justifyContent: "flex-end", marginBottom: 10, marginTop: 10 }}>
                        <button style={{ border: "none", backgroundColor: "transparent" }}>
                            <img src={"/Assets/close-24px.svg"} style={{ width: "24px" }} onClick={this.modalToggle}/>
                        </button>
                    </div>
                    <div className="d-flex container">
                        <img src={"/Assets/login-illustration.svg"} width="50%"/>
                        <div>
                            <Form className="d-flex flex-column">
                                <h3>Buat Akun</h3>
                                <InputGroup className="input-container">
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText style={{ backgroundColor: "transparent", border: "none" }}><img src={"/Assets/face-24px.svg"} width="24px"/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input ref="username" style={{ border: "none", borderRadius: "50px" }} placeholder="Nama" />
                                </InputGroup>
                                <InputGroup className="input-container">
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText style={{ backgroundColor: "transparent", border: "none" }}><img src={"/Assets/email-24px.svg"} width="24px"/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input ref="email" style={{ border: "none", borderRadius: "50px" }} placeholder="Email" />
                                </InputGroup>
                                <InputGroup className="input-container">
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText style={{ backgroundColor: "transparent", border: "none" }}><img src={"/Assets/password-24px.svg"} width="24px"/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input ref="password" style={{ border: "none", borderRadius: "50px" }} placeholder="Password" />
                                </InputGroup>
                                <Button className="btn btn-danger submit-btn">Daftar</Button>
                                <p className="p-register">Sudah punya akun?<a className="a-register">Masuk</a></p>
                            </Form>
                        </div>
                    </div>
                </Modal>
                <Modal isOpen={this.state.isOpen} toggle={this.modalToggle}>
                    <div className="d-flex" style={{ justifyContent: "flex-end", marginBottom: 10, marginTop: 10 }}>
                        <button style={{ border: "none", backgroundColor: "transparent" }}>
                            <img src={"/Assets/close-24px.svg"} style={{ width: "24px" }} onClick={this.modalToggle}/>
                        </button>
                    </div>
                    <div className="d-flex container">
                        <img src={"/Assets/login-illustration.svg"} width="50%"/>
                        <div>
                            <Form className="d-flex flex-column">
                                <h3>Masuk</h3>
                                <InputGroup className="input-container">
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText style={{ backgroundColor: "transparent", border: "none" }}><img src={"/Assets/email-24px.svg"} width="24px"/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input 
                                        style={{ border: "none", borderRadius: "50px" }} 
                                        placeholder="Email"
                                        onChange={(val) => this.props.onInputLoginForm('email', val.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup className="input-container">
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText style={{ backgroundColor: "transparent", border: "none" }}><img src={"/Assets/password-24px.svg"} width="24px"/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input 
                                        style={{ border: "none", borderRadius: "50px" }} 
                                        placeholder="Password"
                                        onChange={(val) => this.props.onInputLoginForm('password', val.target.value)} 
                                    />
                                </InputGroup>
                                <FormGroup check style={{ marginBottom: "15px"}}>
                                    <Label check>
                                    <Input type="checkbox" />{' '}
                                    Ingat Saya
                                    </Label>
                                </FormGroup>
                                <Button className="btn btn-danger submit-btn" onClick={this.onBtnLogin}>Daftar</Button>
                                <p className="p-register">Sudah punya akun?<a className="a-register">Masuk</a></p>
                            </Form>
                        </div>
                    </div>
                </Modal>
                <section className="d-flex jumbotron hero-section container">
                    <div className="d-flex flex-column" style={{ justifyContent: "space-around", padding: "3rem"}}>
                        <div>
                            <h2 className="col-12">Solusi terbaik untuk <span style ={{ color: "#d9534f" }}>mengelola usaha</span> kamu!</h2>
                        </div>
                        <div className="d-flex flex-column justify-space-around">
                            <div style={{ marginBottom: "10px",}}>
                                <button className="reg-button" onClick={this.modalToggle}>
                                    Daftar Sekarang
                                </button>
                            </div>
                            <div>
                                <button className="pelajari-button">
                                    <a href="#berlangganan" style={{ color: "red"}}>
                                        Pelajari Dulu!
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src={'/Assets/hero-section-illustration.svg'} width="50%"/>
                </section>
                <section className="berlangganan" id="berlangganan">
                    <div className="container">
                        <h2>Daftar sekarang dan nikmati fiturnya!</h2>
                        <div className="row card-package">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic</h5>
                                    <div style={{ width: "max-content", margin: "0 auto" }}>
                                        <div className="d-flex" style={{ lineHeight: 0, justifyContent: "end"}}>
                                            <p style={{ fontSize: 'large'}}>Rp</p>
                                            <p className="package-price">45.000</p>
                                        </div>
                                            <p style={{ textAlign: 'right'}}>/bulan</p>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Kelola stok produk dengan mudah</p>
                                        </div>
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p class="card-text">Laporan penjualan</p>
                                        </div>
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p class="card-text">Jual produk digital</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" class="btn btn-danger aku-btn">Aku mau!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Premium</h5>
                                    <div style={{ width: "max-content", margin: "0 auto" }}>
                                        <div className="d-flex" style={{ lineHeight: 0, justifyContent: "end"}}>
                                            <p style={{ fontSize: 'large'}}>Rp</p>
                                            <p className="package-price">50.000</p>
                                        </div>
                                            <p style={{ textAlign: 'right'}}>/bulan</p>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Semua fitur pada paket basic</p>
                                        </div>
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Dukungan printer struk</p>
                                        </div>
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Live support 24 jam</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-danger aku-btn">Aku mau!</a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">Super POS!</h5>
                                    <div style={{ width: "max-content", margin: "0 auto" }}>
                                        <div className="d-flex" style={{ lineHeight: 0, justifyContent: "end"}}>
                                            <p style={{ fontSize: 'large'}}>Rp</p>
                                            <p className="package-price">70.000</p>
                                        </div>
                                            <p style={{ textAlign: 'right'}}>/bulan</p>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Semua fitur pada paket premium</p>
                                        </div>
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Laporan penjualan</p>
                                        </div>
                                        <div className="d-flex package-benefit-container">
                                            <img className="img-package-benefit" src={"/Assets/check_circle-24px.svg"}/>
                                            <p className="card-text">Jual produk digital</p>
                                        </div>
                                    </div>
                                    <a href="#" class="btn btn-danger aku-btn">Aku mau!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    &copy; PT XYZ Indonesia 2020
                </footer>
            </div>
        )
    }
}

const mapStateToProps = ({ loginform, user }) => {
    return { loginform, user }
}

export default connect(mapStateToProps, { onInputLoginForm, login })(Home);