# User api

The following steps are to be followed to run the project:
 - `npm install`
 - `npm start`
 - The server will be running on http://localhost:3000/


The following api endpoints are available:

You can  use postman to interact with the server
### Auth routes
  
  - `POST` http://localhost:3000/api/v1/auth/register
    ```
        example req body:

        {
          "name": "susan",
          "email": "susan@gmail.com",
          "password": "secret",
          "address": {
            "localAddress": "Karan Nagar",
            "stateCode": "MH",
            "city": "Mumbai"
          },
          "phoneNumber": "7889639011"
        }

      ```
  
  - `POST` http://localhost:3000/api/v1/auth/login
    ```
      example req body:

      {
        "email": "susan@gmail.com",
        "password": "secret"
      }

    ```
  
  - `GET` http://localhost:3000/api/v1/auth/logout
  
  - `GET` http://localhost:3000/api/v1/auth/verify-email/:token
    - The token has been sent through email.
    - To see the emails, go to https://ethereal.email and login with:
      ```
        user: p2g23fc6y72qbt2z@ethereal.email
        pass: c4pTKBWgfVRJn74ue4

      ```
  
  - `GET` http://localhost:3000/api/v1/auth/reset-password
  
  - `PATCH` http://localhost:3000/api/v1/auth/reset-password

      ```
      example req body:

        {
          
            "newPassword": "secret",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VzYW4iLCJlbWFpbCI6InN1c2FuQGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciIsInVzZXJJZCI6IjYyODRkMDEyNTQ2NGIwYzkzZWU3NWZjMSIsImlhdCI6MTY1Mjg3MTMyNywiZXhwIjoxNjUyODc0OTI3fQ.Uxc1xieu5tm1bjXTQ1J0BZoKTCVQ5rSIhshJN7rgDng"

        }
          
      ```


### User routes
- `GET` http://localhost:3000/api/v1/users/show-current-user