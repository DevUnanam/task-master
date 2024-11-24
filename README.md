<u>__Taskmaster__</u>

This is a repo dedicated to the backend functionalities for the Task Management System **Taskmaster**

The endpoints are below 
POST /api/auth/register -> To register a new user
POST /api/auth/login    -> To Login and get a token
POST /api/tasks         -> Create a new task
GET  /api/tasks         -> Get all tasks
GET  /api/tasks/:id     -> Get  task by ID
PUT  /api/tasks/:id     -> Update a task
DELETE /api/tasks/:id   -> Delete a task

**All task routes are protected by Middleware.**
