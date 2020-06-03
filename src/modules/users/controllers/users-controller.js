import users from 'modules/users/models/user';

// GET /users
async function list(request, response) {    
    response.send({
        records: await users.get(),
    });
}

// GET /users/:id
function show(request, response) {
    response.send(request.params.id);
}

// POST /users
function create(request, response) {

}

// PUT /users
function update(request, response) {

}

// DELETE /users
function remove(request, response) {
}

const UsersController = {
    list,
    show,
    create,
    update,
    remove,
};

export default UsersController;