# aws-lambda-myip
lambda function which returns the ip address of the client (in conjunction with API Gateway


## other ressources

#### lambda sample event
```
{
  "ip": "99.99.99.98"
}
```

####API Gateway Configuration:

#####Resources

######Method Request

  * Auth: NONE
  
  * Headers: X-Forwarded-For
  
######Integration Request**

  * Type: LAMBDA
  
  * Region: eu-west-1

  * Mapping Templates:
  
    * Content-Type: application/json
  
    * Template:
  ```  
    {
      "caller_ip" : "$input.params('X-Forwarded-For')",
      "Body" : "$input.json('$')"
    }
  ```
