db.createUser({
    user: 'nobody',
    pwd:  'secrets',
    roles: [
        {
            role: 'readWrite',
            db:   'test',
        },
    ],
});
