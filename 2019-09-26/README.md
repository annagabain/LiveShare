# ToDo API Express

* saves the db in a json file

## Tech Spec

* readFileSync
* writeFileSync
* props: id, text, marked
* POST returns the new post, including the new id.
* No error handling

## Implements
```
* get    /todos
* get    /todos/:id
* post   /todos
* patch  /todos/:id
* put    /todos/:id
* delete /todos/:id
```
## Start

nodemon js/index
node js/assert

## Original

[165 lines](https://github.com/foocoding/Node.js/tree/master/week3/lecture)

## Quirks

* Using extension db.json makes the nodemon start to loop, as the db save makes nodemon restart the server.

* Had to Monky Patch Put as it was not implemented in 'curl-request'

* await can only be used inside functions. 

## Patch

* Using PUT you must also send the data that didn't change.
* Using PATCH, you only have to send the changed data.

[Difference explanation](https://www.testingexcellence.com/difference-put-patch-requests/)

## Postman

* Hard to use
* Import File
* Don't forget to save (no tabs with red dots)
* Strange assertion feedback
* collection.json 645 lines
* test_run.json   720 lines
* How to run
	* todos
	* triangle
	* Run
	* scroll down
	* Run todos

## Postman test definition
```
pm.test("patch todos/6", function () {
    pm.expect(pm.response.json()).to.deep.equal({id:6,text:"Klipp grässet",done:false});
});
```
## Postman test result
```
FAIL patch todos/6 | AssertionError: expected { Object (id, text, ...) } to deeply equal { Object (id, text, ...) }
```
## My test definition
```
await PATCH  '/todos/6',{},                      {id:6,text:"Klipp grässet",done:false}
```
## My test result
```
{"id":6,"text":"Klipp gräset","done":false}
==========================!
{"id":6,"text":"Klipp grässet","done":false}
```