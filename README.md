# cwdemo

## REST API for Member Information CRUD Operations

This application provides a REST API to search, register, update, and delete member information.

### API Endpoints

- `GET /api/members`: Search for members
- `POST /api/members`: Register a new member
- `PUT /api/members/:id`: Update member information
- `DELETE /api/members/:id`: Delete a member

### Usage

1. Start the application.
2. Use the following endpoints to perform CRUD operations on member information.

### Examples

#### Search for Members

```
GET /api/members
```

Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]
```

#### Register a New Member

```
POST /api/members
```

Request Body:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

Response:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### Update Member Information

```
PUT /api/members/:id
```

Request Body:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

Response:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### Delete a Member

```
DELETE /api/members/:id
```

Response:
```json
{
  "message": "Member deleted successfully"
}
```
