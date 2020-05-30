// GET /users
function list(request, response) {
    response.send('Listing Users...');
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

export default {
    list,
    show,
    create,
    update,
    remove,
};