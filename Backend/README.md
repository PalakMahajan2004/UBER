/**
# User Registration API Documentation

## Register User Endpoint

*URL:* /users/register  
*Method:* POST

### Description

Registers a new user by creating a user account with the provided information.

### Request Body

The request body should be a JSON object with the following fields:

- fullname: An object containing:
    - firstname: A string with a minimum length of 3 characters (required).
    - lastname: A string with a minimum length of 3 characters (optional).
-    email: A string representing the user's email
    address (required, must be a valid email).
- password: A string with a minimum length of 6 characters (required).
### Response

The response will be a JSON object with the following fields:

- token: A string representing the authentication token.
- user: An object containing:
    - id: A unique identifier for the user.
    - fullname: An object containing:
        - firstname: The user's first name.
        - lastname: The user's last name.
    - email: The user's email address.

Example:

json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1234567890",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}


