# Not to do full stack app

This is buld with MerN Stack.'

... weit about the app what it does ...

## How to use

1. Run `get clone <putgitpath>`
   Run `cd <repo name>`
   Run `npm install `
   Run `npm run dev`.Note, you must have `nodemon`, if not run `npm i nodemon -g` first

Now your server will run at `http://localhost:800`

## APIs

THis api server handels all the task request and allow clinet to run `CRUD`
operation.

### Task Router

Task router follow the follwing url path `{rootUrl}/api/v1/tasks`. Nire details as follow

| #   | PATH    | METHOD | IS PRIVATE | DISCRIPTION                                                                                                |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 1.  | `/`     | POST   | False      | This api allows clent to send taskobject and store in db the following sturucture `{task:", hr:0, type:'}` |
| 2.  | `/`     | GET    | False      | This api allows clent fetch all the task form database                                                     |
| 3.  | `/`     | PATCH  | False      | This api allows clent switch the task type in following id                                                 |
| 4.  | `/:_id` | DELETE | False      | This api allows clent to delete a task based on the given `_id` from                                       |
| 5.  | `/`     | DELETE | False      | This api allows clent switch to send multiple `ids` of tasks to delete multiple items form                 |
