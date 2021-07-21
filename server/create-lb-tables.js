// This script will create MYSQL TABLES
var server = require('./server');
var ds = server.dataSources.dbAppointment;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'appointment'];
ds.automigrate(lbTables, function(er) {
    if (er) throw er;
    console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
    ds.disconnect();
});