const myObject = {
    fruit: ['apples', 'oranges'],
  
  }

  const users ="{'users':[{'name':'Rahul','age':'23','address':'ADDRESS1'},{'name':'Dravid','age':'33','address':'ADRESS2'}]}" 

  const myJsonObject = JSON.parse(users)

console.log(myJsonObject)