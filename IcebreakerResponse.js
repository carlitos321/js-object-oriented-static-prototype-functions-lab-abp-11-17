function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.filter(function(responseData){
    return new IcebreakerResponse(responseData[0])
  })
}
