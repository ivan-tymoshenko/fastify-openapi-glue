// this file contains a test harness that was auto-generated by fastify-openapi-glue
// running the tests directly after generation will probably fail as the parameters
// need to be manually added.

import { strict as assert } from "node:assert/strict";
import { test } from "node:test";
import Fastify from "fastify";
import fastifyPlugin from "../index.js";
import service from "../service.js";

const specification = "../openApi.json";

const opts = {
	specification,
	service,
};
//
// Operation: addPet
// URL: /pet
// summary:	Add a new pet to the store
// req.body
//   type: object
//   required:
//     - name
//     - photoUrls
//   properties:
//     id:
//       type: integer
//       format: int64
//     category:
//       type: object
//       properties:
//         id:
//           type: integer
//           format: int64
//         name:
//           type: string
//       xml:
//         name: Category
//     name:
//       type: string
//       example: doggie
//     photoUrls:
//       type: array
//       xml:
//         name: photoUrl
//         wrapped: true
//       items:
//         type: string
//     tags:
//       type: array
//       xml:
//         name: tag
//         wrapped: true
//       items:
//         type: object
//         properties:
//           id:
//             type: integer
//             format: int64
//           name:
//             type: string
//         xml:
//           name: Tag
//     status:
//       type: string
//       description: pet status in the store
//       enum:
//         - available
//         - pending
//         - sold
//   xml:
//     name: Pet
//
// valid responses
//   '405':
//     description: Invalid input
//

test("testing addPet", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/pet",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: updatePet
// URL: /pet
// summary:	Update an existing pet
// req.body
//   type: object
//   required:
//     - name
//     - photoUrls
//   properties:
//     id:
//       type: integer
//       format: int64
//     category:
//       type: object
//       properties:
//         id:
//           type: integer
//           format: int64
//         name:
//           type: string
//       xml:
//         name: Category
//     name:
//       type: string
//       example: doggie
//     photoUrls:
//       type: array
//       xml:
//         name: photoUrl
//         wrapped: true
//       items:
//         type: string
//     tags:
//       type: array
//       xml:
//         name: tag
//         wrapped: true
//       items:
//         type: object
//         properties:
//           id:
//             type: integer
//             format: int64
//           name:
//             type: string
//         xml:
//           name: Tag
//     status:
//       type: string
//       description: pet status in the store
//       enum:
//         - available
//         - pending
//         - sold
//   xml:
//     name: Pet
//
// valid responses
//   '400':
//     description: Invalid ID supplied
//   '404':
//     description: Pet not found
//   '405':
//     description: Validation exception
//

test("testing updatePet", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "PUT",
			url: "/v2/pet",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: findPetsByStatus
// URL: /pet/findByStatus
// summary:	Finds Pets by status
// req.query
//   type: object
//   properties:
//     status:
//       description: Status values that need to be considered for filter
//       type: array
//       items:
//         type: string
//         enum:
//           - available
//           - pending
//           - sold
//         default: available
//       collectionFormat: multi
//   required:
//     - status
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: array
//       items:
//         type: object
//         required:
//           - name
//           - photoUrls
//         properties:
//           id:
//             type: integer
//             format: int64
//           category:
//             type: object
//             properties:
//               id:
//                 type: integer
//                 format: int64
//               name:
//                 type: string
//             xml:
//               name: Category
//           name:
//             type: string
//             example: doggie
//           photoUrls:
//             type: array
//             xml:
//               name: photoUrl
//               wrapped: true
//             items:
//               type: string
//           tags:
//             type: array
//             xml:
//               name: tag
//               wrapped: true
//             items:
//               type: object
//               properties:
//                 id:
//                   type: integer
//                   format: int64
//                 name:
//                   type: string
//               xml:
//                 name: Tag
//           status:
//             type: string
//             description: pet status in the store
//             enum:
//               - available
//               - pending
//               - sold
//         xml:
//           name: Pet
//   '400':
//     description: Invalid status value
//

test("testing findPetsByStatus", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/pet/findByStatus",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: findPetsByTags
// URL: /pet/findByTags
// summary:	Finds Pets by tags
// req.query
//   type: object
//   properties:
//     tags:
//       description: Tags to filter by
//       type: array
//       items:
//         type: string
//       collectionFormat: multi
//   required:
//     - tags
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: array
//       items:
//         type: object
//         required:
//           - name
//           - photoUrls
//         properties:
//           id:
//             type: integer
//             format: int64
//           category:
//             type: object
//             properties:
//               id:
//                 type: integer
//                 format: int64
//               name:
//                 type: string
//             xml:
//               name: Category
//           name:
//             type: string
//             example: doggie
//           photoUrls:
//             type: array
//             xml:
//               name: photoUrl
//               wrapped: true
//             items:
//               type: string
//           tags:
//             type: array
//             xml:
//               name: tag
//               wrapped: true
//             items:
//               type: object
//               properties:
//                 id:
//                   type: integer
//                   format: int64
//                 name:
//                   type: string
//               xml:
//                 name: Tag
//           status:
//             type: string
//             description: pet status in the store
//             enum:
//               - available
//               - pending
//               - sold
//         xml:
//           name: Pet
//   '400':
//     description: Invalid tag value
//

test("testing findPetsByTags", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/pet/findByTags",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: getPetById
// URL: /pet/:petId
// summary:	Find pet by ID
// req.params
//   type: object
//   properties:
//     petId:
//       description: ID of pet to return
//       type: integer
//       format: int64
//   required:
//     - petId
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: object
//       required:
//         - name
//         - photoUrls
//       properties:
//         id:
//           type: integer
//           format: int64
//         category:
//           type: object
//           properties:
//             id:
//               type: integer
//               format: int64
//             name:
//               type: string
//           xml:
//             name: Category
//         name:
//           type: string
//           example: doggie
//         photoUrls:
//           type: array
//           xml:
//             name: photoUrl
//             wrapped: true
//           items:
//             type: string
//         tags:
//           type: array
//           xml:
//             name: tag
//             wrapped: true
//           items:
//             type: object
//             properties:
//               id:
//                 type: integer
//                 format: int64
//               name:
//                 type: string
//             xml:
//               name: Tag
//         status:
//           type: string
//           description: pet status in the store
//           enum:
//             - available
//             - pending
//             - sold
//       xml:
//         name: Pet
//   '400':
//     description: Invalid ID supplied
//   '404':
//     description: Pet not found
//

test("testing getPetById", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/pet/:petId",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: updatePetWithForm
// URL: /pet/:petId
// summary:	Updates a pet in the store with form data
// req.params
//   type: object
//   properties:
//     petId:
//       description: ID of pet that needs to be updated
//       type: integer
//       format: int64
//   required:
//     - petId
//
// req.body
//   type: object
//   properties:
//     name:
//       description: Updated name of the pet
//       type: string
//     status:
//       description: Updated status of the pet
//       type: string
//
// valid responses
//   '405':
//     description: Invalid input
//

test("testing updatePetWithForm", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/pet/:petId",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: deletePet
// URL: /pet/:petId
// summary:	Deletes a pet
// req.headers
//   type: object
//   properties:
//     api_key:
//       type: string
//
// req.params
//   type: object
//   properties:
//     petId:
//       description: Pet id to delete
//       type: integer
//       format: int64
//   required:
//     - petId
//
// valid responses
//   '400':
//     description: Invalid ID supplied
//   '404':
//     description: Pet not found
//

test("testing deletePet", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "DELETE",
			url: "/v2/pet/:petId",
			payload: undefined,
			headers: undefined, //insert headers here!!
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: uploadFile
// URL: /pet/:petId/uploadImage
// summary:	uploads an image
// req.params
//   type: object
//   properties:
//     petId:
//       description: ID of pet to update
//       type: integer
//       format: int64
//   required:
//     - petId
//
// req.body
//   type: object
//   properties:
//     additionalMetadata:
//       description: Additional data to pass to server
//       type: string
//     file:
//       description: file to upload
//       type: string
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: object
//       properties:
//         code:
//           type: integer
//           format: int32
//         type:
//           type: string
//         message:
//           type: string
//

test("testing uploadFile", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/pet/:petId/uploadImage",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: getInventory
// URL: /store/inventory
// summary:	Returns pet inventories by status
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: object
//       additionalProperties:
//         type: integer
//         format: int32
//

test("testing getInventory", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/store/inventory",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: placeOrder
// URL: /store/order
// summary:	Place an order for a pet
// req.body
//   type: object
//   properties:
//     id:
//       type: integer
//       format: int64
//     petId:
//       type: integer
//       format: int64
//     quantity:
//       type: integer
//       format: int32
//     shipDate:
//       type: string
//       format: date-time
//     status:
//       type: string
//       description: Order Status
//       enum:
//         - placed
//         - approved
//         - delivered
//     complete:
//       type: boolean
//       default: false
//   xml:
//     name: Order
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: object
//       properties:
//         id:
//           type: integer
//           format: int64
//         petId:
//           type: integer
//           format: int64
//         quantity:
//           type: integer
//           format: int32
//         shipDate:
//           type: string
//           format: date-time
//         status:
//           type: string
//           description: Order Status
//           enum:
//             - placed
//             - approved
//             - delivered
//         complete:
//           type: boolean
//           default: false
//       xml:
//         name: Order
//   '400':
//     description: Invalid Order
//

test("testing placeOrder", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/store/order",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: getOrderById
// URL: /store/order/:orderId
// summary:	Find purchase order by ID
// req.params
//   type: object
//   properties:
//     orderId:
//       description: ID of pet that needs to be fetched
//       type: integer
//       maximum: 10
//       minimum: 1
//       format: int64
//   required:
//     - orderId
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: object
//       properties:
//         id:
//           type: integer
//           format: int64
//         petId:
//           type: integer
//           format: int64
//         quantity:
//           type: integer
//           format: int32
//         shipDate:
//           type: string
//           format: date-time
//         status:
//           type: string
//           description: Order Status
//           enum:
//             - placed
//             - approved
//             - delivered
//         complete:
//           type: boolean
//           default: false
//       xml:
//         name: Order
//   '400':
//     description: Invalid ID supplied
//   '404':
//     description: Order not found
//

test("testing getOrderById", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/store/order/:orderId",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: deleteOrder
// URL: /store/order/:orderId
// summary:	Delete purchase order by ID
// req.params
//   type: object
//   properties:
//     orderId:
//       description: ID of the order that needs to be deleted
//       type: integer
//       minimum: 1
//       format: int64
//   required:
//     - orderId
//
// valid responses
//   '400':
//     description: Invalid ID supplied
//   '404':
//     description: Order not found
//

test("testing deleteOrder", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "DELETE",
			url: "/v2/store/order/:orderId",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: createUser
// URL: /user
// summary:	Create user
// req.body
//   type: object
//   properties:
//     id:
//       type: integer
//       format: int64
//     username:
//       type: string
//     firstName:
//       type: string
//     lastName:
//       type: string
//     email:
//       type: string
//     password:
//       type: string
//     phone:
//       type: string
//     userStatus:
//       type: integer
//       format: int32
//       description: User Status
//   xml:
//     name: User
//
// valid responses
//   default:
//     description: successful operation
//

test("testing createUser", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/user",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: createUsersWithArrayInput
// URL: /user/createWithArray
// summary:	Creates list of users with given input array
// req.body
//   type: array
//   items:
//     type: object
//     properties:
//       id:
//         type: integer
//         format: int64
//       username:
//         type: string
//       firstName:
//         type: string
//       lastName:
//         type: string
//       email:
//         type: string
//       password:
//         type: string
//       phone:
//         type: string
//       userStatus:
//         type: integer
//         format: int32
//         description: User Status
//     xml:
//       name: User
//
// valid responses
//   default:
//     description: successful operation
//

test("testing createUsersWithArrayInput", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/user/createWithArray",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: createUsersWithListInput
// URL: /user/createWithList
// summary:	Creates list of users with given input array
// req.body
//   type: array
//   items:
//     type: object
//     properties:
//       id:
//         type: integer
//         format: int64
//       username:
//         type: string
//       firstName:
//         type: string
//       lastName:
//         type: string
//       email:
//         type: string
//       password:
//         type: string
//       phone:
//         type: string
//       userStatus:
//         type: integer
//         format: int32
//         description: User Status
//     xml:
//       name: User
//
// valid responses
//   default:
//     description: successful operation
//

test("testing createUsersWithListInput", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "POST",
			url: "/v2/user/createWithList",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: loginUser
// URL: /user/login
// summary:	Logs user into the system
// req.query
//   type: object
//   properties:
//     username:
//       description: The user name for login
//       type: string
//     password:
//       description: The password for login in clear text
//       type: string
//   required:
//     - username
//     - password
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: string
//     headers:
//       X-Rate-Limit:
//         type: integer
//         format: int32
//         description: calls per hour allowed by the user
//       X-Expires-After:
//         type: string
//         format: date-time
//         description: date in UTC when token expires
//   '400':
//     description: Invalid username/password supplied
//

test("testing loginUser", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/user/login",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: logoutUser
// URL: /user/logout
// summary:	Logs out current logged in user session
// valid responses
//   default:
//     description: successful operation
//

test("testing logoutUser", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/user/logout",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: getUserByName
// URL: /user/:username
// summary:	Get user by user name
// req.params
//   type: object
//   properties:
//     username:
//       description: 'The name that needs to be fetched. Use user1 for testing. '
//       type: string
//   required:
//     - username
//
// valid responses
//   '200':
//     description: successful operation
//     schema:
//       type: object
//       properties:
//         id:
//           type: integer
//           format: int64
//         username:
//           type: string
//         firstName:
//           type: string
//         lastName:
//           type: string
//         email:
//           type: string
//         password:
//           type: string
//         phone:
//           type: string
//         userStatus:
//           type: integer
//           format: int32
//           description: User Status
//       xml:
//         name: User
//   '400':
//     description: Invalid username supplied
//   '404':
//     description: User not found
//

test("testing getUserByName", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "GET",
			url: "/v2/user/:username",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: updateUser
// URL: /user/:username
// summary:	Updated user
// req.params
//   type: object
//   properties:
//     username:
//       description: name that need to be updated
//       type: string
//   required:
//     - username
//
// req.body
//   type: object
//   properties:
//     id:
//       type: integer
//       format: int64
//     username:
//       type: string
//     firstName:
//       type: string
//     lastName:
//       type: string
//     email:
//       type: string
//     password:
//       type: string
//     phone:
//       type: string
//     userStatus:
//       type: integer
//       format: int32
//       description: User Status
//   xml:
//     name: User
//
// valid responses
//   '400':
//     description: Invalid user supplied
//   '404':
//     description: User not found
//

test("testing updateUser", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "PUT",
			url: "/v2/user/:username",
			payload: undefined, //insert body data here!!
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});

// Operation: deleteUser
// URL: /user/:username
// summary:	Delete user
// req.params
//   type: object
//   properties:
//     username:
//       description: The name that needs to be deleted
//       type: string
//   required:
//     - username
//
// valid responses
//   '400':
//     description: Invalid username supplied
//   '404':
//     description: User not found
//

test("testing deleteUser", (t) => {
	const fastify = Fastify();
	fastify.register(fastifyPlugin, opts);

	fastify.inject(
		{
			method: "DELETE",
			url: "/v2/user/:username",
			payload: undefined,
			headers: undefined,
		},
		(err, res) => {
			assert.ifError(err);
			assert.equal(res.statusCode, 200);
		},
	);
});
