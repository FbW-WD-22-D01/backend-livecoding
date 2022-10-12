# Workshop

## HTTP - Hypertext Transfer Protocol
(Wikipedia:
  [ENG](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol),
  [DEU](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
)

- HTTP-Versions
  - [RFC 2616 - HTTP/1.1 (IETF)](https://datatracker.ietf.org/doc/html/rfc2616)
  - until and including [HTTP/2](https://en.wikipedia.org/wiki/HTTP/3) run over TCP
  - [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) runs over QUIC/UDP
  - [HTTP Semantics (RFC 9110)](https://datatracker.ietf.org/doc/rfc9110/)
- application layer protocol
- client - server
  - HTTP Server
    - Apache
    - nginx
    - node-express
    - ...
- browser - web server
- but also: proxy
- request response
- stateless
  - More or less, - where are the limits of statelessness, in other words, where could some form of state be hidden?
- standard ports (connection to networking and cryptography):
  - http  - port 80
  - https - port 443
- user agent (HTTP-Client)
  - browser (Firefox, Chrome, Chromium, Edge, Safari, lynx)
  - Postman
  - web crawler (wget, curl, ...)
  - mobile apps
  - ...
- message
  - status
  - headers
    - encoding
    - Set-Cookie
    - ...
  - body
- Tim Berners-Lee (1991, CERN)
- Roy Fielding
- [**URL**](https://en.wikipedia.org/wiki/URL)
- [**HTML (w3c)**](https://html.spec.whatwg.org/multipage/)

---

### HTTP Methods
- GET
- PUT
- POST
- DELETE
- ...

---

### HTTP Status Codes 
(Wikipedia: 
  [ENG](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), 
  [DEU](https://de.wikipedia.org/wiki/HTTP-Statuscode)
)

  - 1xx - informational response
  - 2xx - success
    - 200 OK
    - 201 Created
    - 202 Accepted
    - 204 No Content
  - 3xx - redirection
    - 300 Multiple Choices
    - 301 Moved Permanently
    - 302 Found (previously "Moved temporarily")
    - 303 See Other
    - 304 Not Modified
    - 307 Temporary Redirect
    - 308 Permanent Redirect
  - 4xx - client errors
    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 404 Not Found
    - 405 Method Not Allowed
    - 406 Not Acceptable
    - 408 Request Timeout
    - 429 Too Many Requests
  - 5xx - server errors
    - 500 Internal Server Error
    - 501 Not Implemented
    - 502 Bad Gateway

---
---

### URL - Uniform Resource Locator
(Wikipedia: 
  [ENG](https://en.wikipedia.org/wiki/URL),
  [DEU](https://de.wikipedia.org/wiki/Uniform_Resource_Locator)
)

Uniform Resource Locator

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/URI_syntax_diagram.svg/1280px-URI_syntax_diagram.svg.png)

---
---

## Architecture of a Web Application 

### Single Server
e. g. with `node express`:
- browser
- web server
  - server for static client
  - server providing a REST-API
  - database

### Sample Architectures:

---
[Architecture of a Web Application:](https://litslink.com/blog/web-application-architecture)

![](https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/static/optimized/rev-2ca8b9c/wp-content/uploads/2021/04/What_Is_Web_Application_Architecture_.png)


![](https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/static/optimized/rev-2ca8b9c/wp-content/uploads/2021/04/Web_Application_Architecture_Diagram__diagram_.png)

---

[Paper on: Development of "Virtual Office Model"](https://www.researchgate.net/figure/Web-application-system-architecture_fig2_301787928)

![](https://www.researchgate.net/profile/Md-Rafiquzzaman/publication/301787928/figure/fig2/AS:357552459141124@1462258557606/Web-application-system-architecture.png)

---

[Web App Architecture (DZone)](https://dzone.com/articles/web-app-architecture-trends-best-practices-and-more)

![](https://stackify.com/wp-content/uploads/2017/05/web-application-architecture-example-diagram.png)

---

## Links
- HTTP
  - [Hypertext Transfer Protocol (Wikipedia)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
  - [HTTP (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  - [Evolution of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
- [Representation State Transfer (REST)](https://en.wikipedia.org/wiki/Representational_state_transfer)
- architecture of a web project
  - [Scalable web application (Microsoft)](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/app-service-web-app/scalable-web-app)
- debugging
- [Open Web Application Security Project (OWASP)](https://owasp.org/www-project-top-ten/)
