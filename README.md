Author: Adrian Mui
# This is a simple Node ExpressJS application (not currently hooked up to a FE-framework)
### to demonstrate the simple functionality of Node/Express and using our own 'middleware' stacks.
### Full-Stack App from Scratch. 

`http://localhost:3000/hello`

## TODO

```
    npm install
    npm update
    grunt
```

### QuickHelpers
```
    // untrack files/directories
    git rm -r --cached <file>
    // delete untracked files/directories from git
    git clean -n -d
```

## From what I understand so far:

* ExpressJS is similarity to that of a micro-framework to handle HTTP requests such as Sinatra
* Unlike Rails, .NET, Spring, ExpressJS requires you to choose your middleware stacks(which are basically javascript functions that handle the request, filters it with js functions, and adds a callback to another middleware stack and/or returns a response)
* alternatives are Hapi, Sails, Koa
    - Hapi: server-side APIs, html rendering as well..(I HATE THIS)
    - Sails: opposite of Express. Sails is like Ruby, has ORM, pretty much full BE stack. Doesn't have much support tho.
    - Koa: created generator-based API. Nowadays uses promises and asynch requests.
* change the request response headers to provide more security
* Grunt as a Tasks Manager/Builder
    - alternatives are: gulp[newer], webpack[js recompile, but u can combine it w/grunt], etc)
    - because of its specialty in synchronous tasks.
    - tons of plugins

