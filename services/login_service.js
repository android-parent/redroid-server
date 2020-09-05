class LoginService {

  constructor() {
    const K8sUtil = require('./k8s_util');
    this.k8sUtil = new K8sUtil();
  }

  login = (call, callback) => {
    const {username, password} = call.request;
    console.log("%s login", username);

    this.k8sUtil.createInstance({});

    var response = {
      token: "sssss",
    }
    return response;
  }

  logout = (call, callback) => {
    this.k8sUtil.stopInstance();
    console.log("logout called");
  }

  check = (call, callback) => {
    const inst = this.k8sUtil.getInstance();
    console.log("check called");
    call.write(inst ? "" : null);
  }
}

module.exports = LoginService
