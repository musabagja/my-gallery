# My-Gallery

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /photos`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "email": "string",
    "access_token": "jwt string"
}
```

### GET /photos

description: 
  get all user photo

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
  "photos": [
    {
      "id": 1,
      "imageUrl": "https://unsplash.com/photos/yC-Yzbqy7PY",
      "userId": 1,
      "createdAt": "2020-06-12T16:22:40.469Z",
      "updatedAt": "2020-06-12T16:22:40.469Z"
    }
  ]
}
```