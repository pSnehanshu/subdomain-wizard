# Subdomains for Express
[![NPM](https://nodei.co/npm/subdomain-wizard.png)](https://nodei.co/npm/subdomain-wizard/)

Easily manage and delegate routes to subdomains.

## Usage
Example express boilerplate:

```javascript
const express   = require('express')
const subdomain = require('subdomain-wizard')
const app       = express() 
```

Basic usage

```javascript
app.get(subdomain('foo', function(req, res){
    res.send('Hello there')
}))

// Visit: foo.example.com
// Hello there
```

Use wildcard (`*`)

```javascript
app.get(subdomain('*.foo', function(req, res){
    res.send('Hello pretty')
}))

// Visit: foo.example.com
// Hello pretty

// Visit: bar.foo.example.com
// Hello pretty
```

## Caveat
If your domain is ending at a second level TLD like `.co.in`, then use `app.set('subdomain offset', 3)` before using `subdomain.`

Refer [Express docs](https://expressjs.com/en/api.html#req.subdomains) for more information.

## Licensing
Licensed under MIT License.
