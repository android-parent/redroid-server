
class K8sUtil {

  constructor() {
    const k8s = require('@kubernetes/client-node');
    const kc = new k8s.KubeConfig();
    kc.loadFromCluster()
    
    this.k8sApi = kc.makeApiClient(k8s.CoreV1Api);
  }

  createInstance = ({}) => {};

  stopInstance = (username) => {
    this.k8sApi.deleteNamespacedPod(
      
    );
  };

  getInstance = (username) => {
    this.k8sApi.listNamespacedPod(
      this._getK8sNamespace(),
      false,
      false,
      null,
      "username=" + username,
      null,
      50,
      null,
      10,
      false,
      null
      );
  };

  patchInstance = ({}) => {};

  _getK8sNamespace = () => { return "default"; };
}

module.exports = K8sUtil;
