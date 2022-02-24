export const ROUTES = {
  RECIPE : {
    CREATE : 'Recipe/CreateRecipe',
    UPDATE : 'Recipe/UpdateRecipe/:recipeId'
  }
}

export function getData(url:string, ...params:any){
  let hostUrl = getHostURL();
  
  return fetch( url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.          
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(function(response){
        console.log('first data',response)
        return response.json();
    })
    // .then(function(myJson) {
    //     console.log('second data',myJson);
    //     console.log('second data response',myJson.data);
    // })
    .catch(error => {
        console.error('Error:', error);
    });
}

export async function postDataAsync<TModelRequest>(pathRoute:string, data : TModelRequest){
  let hostUrl = getHostURL();
  return fetch( hostUrl+ pathRoute, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.          
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  })
  .then(function(response){
      console.log('first data',response)
      return response.json();
  })
  // .then(function(myJson) {
  //     console.log('second data',myJson);
  //     console.log('second data response',myJson.data);
  // })
  .catch(error => {
      console.error('Error:', error);
  });
}

const getHostURL = () : string =>  process.env.API_URL??'https://localhost:7242/api/';