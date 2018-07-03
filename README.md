# Subdomains for Express
Easily manage and delegate routes to certain subdomains.
## Installation
`npm i subdomain-wizard --save`

## Usage
Example express boilerplate:

<pre>
<code>
var express = require('express')
var subdomain = require('subdomain-wizard')
var app = express() 
</code>
</pre>

Basic usage

<pre>
<code>
app.get(subdomain('foo', function(req, res, next){
    res.send('Hello there')
}))

// Visit: foo.example.com
// Hello there
</code>
</pre>

Use wildcard (`*`)

<pre>
<code>
app.get(subdomain('*.foo', unction(req, res, next){
    res.send('Hello pretty')
}))

// Visit: foo.example.com
// Hello pretty

// Visit: bar.foo.example.com
// Hello pretty
</code>
</pre>

## Caveat
If your domain is ending at a second level TLD like `.co.in`, then use `app.set('subdomain offset', 3)` before using `subdomain.`

Refer [Express docs](https://expressjs.com/en/api.html#req.subdomains) for more information.
