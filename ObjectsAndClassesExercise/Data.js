class Request {
// • method (String)
    #method;
// • url (String)
    #uri;
// • version (String)
    #version;
// • message (String)
    #message;
// • response (String)
    #response
// • fulfilled (Boolean)
    #fulfilled

    constructor(method, uri, version, message) {
        this.#method = method;
        this.#uri = uri;
        this.#version = version;
        this.#message = message;
        this.#response = undefined;
        this.#fulfilled = false;
    }

    toString(){
        return `Request {
  method: '${this.#method}',
  uri: '${this.#uri}',
  version: '${this.#version}',
  message: '${this.#message}',
  response: ${this.#response},
  fulfilled: ${this.#fulfilled}`;

    }
}

let req = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(req.toString());