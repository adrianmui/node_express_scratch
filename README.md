# This is a simple Node ExpressJS application
# to demonstrate the simple functionality of Node/Express without any # middleware.

## From what I understand so far:

* ExpressJS is similarity to that of a micro-backend framework such as Sinatra
* Unlike Rails, .NET, Spring, ExpressJS requires you to choose your middleware stacks(which are basically javascript functions that handle the request, filters it with js functions, and adds a callback to another middleware stack and/or returns a response)
* alternatives are Hapi, Sails, Koa
    - Hapi: server-side APIs, html rendering as well..(I HATE THIS)
    - Sails: opposite of Express. Sails is like Ruby, has ORM, pretty much full BE stack. Doesn't have much support tho.
    - Koa: created generator-based API. Nowadays uses promises and asynch requests.