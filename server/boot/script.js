// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(app) {
    var User = app.models.User;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Team = app.models.Team;

    User.create([
        { username: 'John', email: 'john@doe.com', password: 'opensesame' },
        { username: 'Jane', email: 'jane@doe.com', password: 'opensesame' },
        { username: 'Bob', email: 'bob@projects.com', password: 'opensesame' }
    ], function(err, users) {
        if (err) return console.log(err)

        //create the admin role
        Role.create({
            name: 'admin'
        }, function(err, role) {
            if (err) console.log(err)

            //make bob an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: users[2].id
            }, function(err, principal) {
                console.log(err)
            });
        });
    });

}