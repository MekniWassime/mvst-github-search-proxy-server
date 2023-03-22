# mvst-github-search-proxy-server
 
A Proxy server that is used when trying to get an access token from Github

The reason behind this is to get an accessToken there is a very sensitive secret that i get from github and writing it on the front end in any shape or form would have been a major security flaw

That is why this proxy is here to append that header to the login request and sends it to github, which then sends an access token back and the proxy sends that to the client

after that the client can finally use Github's GraphQl API (without the need to go through this proxy, this is only for getting the accesss token)
