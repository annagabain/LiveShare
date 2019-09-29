# ToDo API Express

* saves the db in a json file

## Tech Spec

* readFileSync
* writeFileSync
* props: id, text, done
* POST returns the new post, including the new id.
* No error handling

## Implements
```
* get    /todos
* get    /todos/1
* post   /todos
* put    /todos/1
* patch  /todos/1
* delete /todos
* delete /todos/1
```
## Start

nodemon js/index
node js/assert

## Original

[165 lines](https://github.com/foocoding/Node.js/tree/master/week3/lecture)

## Quirks

* Using extension db.json makes the nodemon start to loop, as the db save makes nodemon restart the server.