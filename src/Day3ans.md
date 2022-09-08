1- Difference between Axios and fetch
  Axios: 
  👉Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it
    supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables
    client-side protection against XSRF. It also has the ability to cancel requests.  EX:: axios.get('url')
    .then((response) => {
  		// Code for handling the response
      })
      .catch((error) => {
      
        // Code for handling the error
      })
  Fetch: 
  👉The Fetch API provides a fetch() method defined on the window object. It also provides a JavaScript interface for
    accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory
    argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the
    response of the request. EX:: fetch('path-to-the-resource-to-be-fetched') .then((response) => {

  
  	// Code for handling the response
      })
      .catch((error) => {
      
        // Code for handling the error
      });
  
    
      Difference Between Axios & Fetch
    
    
      Axios has url in request object.
      Fetch has no url in request object.

    
    
      Axios is a stand-alone third party package that can be easily installed.
      Fetch is built into most modern browsers; no installation is required as such.

    
    
      Axios enjoys built-in XSRF protection.
      Fetch does not.

    
    
      Axios uses the data property.
      Fetch uses the body property.

    
    
      Axios’ data contains the object.
       Fetch’s body has to be stringified.

    
    
      Axios request is ok when status is 200 and statusText is ‘OK’.
      Fetch request is ok when response object contains the ok property.

    
    
      Axios performs automatic transforms of JSON data.
      Fetch is a two-step process when handling JSON data- first, to make the actual  request; second, to call
        the .json() method on the response.

    
    
      Axios allows cancelling request and request timeout.
       Fetch does not.

    
    
      Axios has the ability to intercept HTTP requests.
      Fetch, by default, doesn’t provide a way to intercept requests.

    
    
      Axios has built-in support for download progress.
      Fetch does not support upload progress.

    
  
  3- What is useEffect Hook ?(Implementation)
  
    👉 useEffect :It allows us to implement all of the lifecycle hooks from within a single function API. // this will
    run when the component mounts and anytime the stateful data changes React.useEffect(() => { alert('Hey, Nads
    here!'); }); 

    👉this will run, when the component is first initialized React.useEffect(() => { alert('Hey, Nads here!'); }, []);
    


    👉this will run only when count state changes React.useEffect(() => { fetch('nads').then(() => setLoaded(true)); },
    [count]); 

    👉this will run when the component is destroyed or before the component is removed from UI. React.useEffect(() => {
    alert('Hey, Nads here'); return () => alert('Goodbye Component'); });
  