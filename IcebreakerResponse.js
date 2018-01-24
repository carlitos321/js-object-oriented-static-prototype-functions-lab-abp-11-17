function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(responseData){
    return new IcebreakerResponse(responseData)
  })
}
