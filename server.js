var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

const server = new grpc.Server()

var packageDefinition = protoLoader.loadSync(
    __dirname + '/protos/login_service.proto',
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var service = grpc.loadPackageDefinition(packageDefinition).loginservice;

var LoginService = require('./services/login_service');
var serviceImp = new LoginService()
server.addService(service.LoginService.service, {
    login: serviceImp.login,
    logout: serviceImp.logout,
    check: serviceImp.check,
});

packageDefinition = protoLoader.loadSync(
    __dirname + '/protos/event_service.proto',
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
service = grpc.loadPackageDefinition(packageDefinition).eventservice;
var EventService = require('./services/event_service');
serviceImp = new EventService();
server.addService(service.EventService.service, {
    sendEvent: serviceImp.sendEvent,
});

server.bind('0.0.0.0:8000', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://:8000')

server.start()