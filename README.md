Below are the cURLs to test,

auth/register
curl --location 'localhost:3000/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Gaurav",
"dob":"2024-01-01",
"email":"gaurav@email.com",
"password":"123456",
"profile_image":"http:image.com"
}'

auth/login
curl --location 'localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "gaurav@email.com",
    "password": "123456"
}'

posts/user
curl --location --request GET 'localhost:3000/posts/user' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkdhdXJhdiIsImRvYiI6IjIwMjMtMTItMzFUMTg6MzA6MDAuMDAwWiIsImVtYWlsIjoiZ2F1cmF2QGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJERwTXJxVGJpM1dldGFHWWxIQVJqcXVMSFZacmYxa2syaEdDaG9hdGVSYklYbGRqNmtPL00uIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6aW1hZ2UuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDYtMDNUMDU6MDM6MzYuMDAwWiIsInVwZGF0ZWRfYXQiOm51bGwsImlhdCI6MTcxNzQzOTc0OCwiZXhwIjoxNzE3NTI2MTQ4fQ.BTxfn4K5YiMW7lEMlqUHKdn1iFVuXMudnAO1_O7cCGE' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Gaurav",
"dob":"2024-01-01",
"email":"gaurav@email.com",
"password":"123456",
"profile_image":"http:image.com"
}'

/posts
curl --location 'localhost:3000/posts' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkdhdXJhdiIsImRvYiI6IjIwMjMtMTItMzFUMTg6MzA6MDAuMDAwWiIsImVtYWlsIjoiZ2F1cmF2QGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJERwTXJxVGJpM1dldGFHWWxIQVJqcXVMSFZacmYxa2syaEdDaG9hdGVSYklYbGRqNmtPL00uIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6aW1hZ2UuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDYtMDNUMDU6MDM6MzYuMDAwWiIsInVwZGF0ZWRfYXQiOm51bGwsImlhdCI6MTcxNzQzOTc0OCwiZXhwIjoxNzE3NTI2MTQ4fQ.BTxfn4K5YiMW7lEMlqUHKdn1iFVuXMudnAO1_O7cCGE' \
--header 'Content-Type: application/json' \
--data '{
    "title": "some psit",
    "description": "jrnrf",
    "image": "djenieniw"
}'

/posts/:post_id
curl --location --request PUT 'localhost:3000/posts/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkdhdXJhdiIsImRvYiI6IjIwMjMtMTItMzFUMTg6MzA6MDAuMDAwWiIsImVtYWlsIjoiZ2F1cmF2QGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJERwTXJxVGJpM1dldGFHWWxIQVJqcXVMSFZacmYxa2syaEdDaG9hdGVSYklYbGRqNmtPL00uIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6aW1hZ2UuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDYtMDNUMDU6MDM6MzYuMDAwWiIsInVwZGF0ZWRfYXQiOm51bGwsImlhdCI6MTcxNzQzOTc0OCwiZXhwIjoxNzE3NTI2MTQ4fQ.BTxfn4K5YiMW7lEMlqUHKdn1iFVuXMudnAO1_O7cCGE' \
--header 'Content-Type: application/json' \
--data '{
    "title": "some psit",
    "description": "jrnrf",
    "image": "djenieniw"
}'

DELETE posts/:post_id
curl --location --request DELETE 'localhost:3000/posts/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkdhdXJhdiIsImRvYiI6IjIwMjMtMTItMzFUMTg6MzA6MDAuMDAwWiIsImVtYWlsIjoiZ2F1cmF2QGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJERwTXJxVGJpM1dldGFHWWxIQVJqcXVMSFZacmYxa2syaEdDaG9hdGVSYklYbGRqNmtPL00uIiwicHJvZmlsZV9pbWFnZSI6Imh0dHA6aW1hZ2UuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDYtMDNUMDU6MDM6MzYuMDAwWiIsInVwZGF0ZWRfYXQiOm51bGwsImlhdCI6MTcxNzQzOTc0OCwiZXhwIjoxNzE3NTI2MTQ4fQ.BTxfn4K5YiMW7lEMlqUHKdn1iFVuXMudnAO1_O7cCGE' \
--header 'Content-Type: application/json' \
--data '{
    "title": "some psit",
    "description": "jrnrf",
    "image": "djenieniw"
}'
