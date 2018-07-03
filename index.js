module.exports = function(subdomain, fn){
    if(!subdomain || typeof subdomain !== "string") {
    throw new Error("The first parameter must be a string representing the subdomain")
    }
  
    //check fn handles three params..
    if(!fn || typeof fn !== "function" || fn.length < 3) {
        throw new Error("The second parameter must be a function that handles fn(req, res, next) params.")
    }
  
    // The middleware
    return function(req, res, next){
        var givenSubdomains = subdomain.split('.').reverse()
        var match = false, matchByAsterisk = false
  
        givenSubdomains.every((sd, i) => {
            sd = sd.toLocaleLowerCase()
            
            if (typeof req.subdomains[i] == 'undefined'){
                //match = false
                return false
            }
            else{
                var actual = req.subdomains[i].toLocaleLowerCase()
            }
  
            if (sd == '*'){
              match = true
              matchByAsterisk = true
            }
            else{
              match = sd == actual
              matchByAsterisk = false
            }
  
            return match
        })
  
        if (req.subdomains.length > givenSubdomains.length && !matchByAsterisk){
          match = false
        }
  
        if (match){
            fn(req, res, next)
        }
        else{
            next()
        }
    }
  }
  
