import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    account: "",
    password: "",
  };
  handleChangeForm = (e) => {
    console.log(e.target.name);
    let { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.account,
        matKhau: this.state.password,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg",
      },
    })
      .then((res) => {
        console.log(res);
        message.success("dang nhap thanh cong");
        setTimeout(() => {
          //delay 3s trc khi chuyen trang
          window.location.href = "/";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error("dang nhap that bai");
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div class="form-group">
            <label for="">Acount</label>
            <input
              name="account"
              onChange={this.handleChangeForm}
              type="text"
              class="form-control"
              value={this.state.account}
              id=""
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input
              name="password"
              onChange={this.handleChangeForm}
              type="text"
              class="form-control"
              value={this.state.password}
              id=""
              placeholder=""
            />
          </div>
          <button onClick={this.handleLogin} className="btn btn-info">
            Login
          </button>
        </div>
      </div>
    );
  }
}

// let key = "name";
// user[key] = "bob";

// => linh động

// message antd

// antd npm
// thư viện ant design
/** đây là 1 món quà đến từ pháp sư trung hoa */
