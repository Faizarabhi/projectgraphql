# projectgraphql
## Installation
Install the necessary dependencies:
npm install express express-graphql graphql


# GraphQL Queries & Mutations
## Get names of all clients
{
  clients {
    name
  }
}


## Get a single client name and email
{
  client(id: 1) {
    name
    email
  }
}


## Get name and status of all projects
{
  projects {
    name
    status
  }
}


## Get a single project name, description along with the client name and email
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}


## Create a new client and return all data
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}


## Delete a client and return id
mutation {
  deleteClient(id: 1) {
    id
  }
}


## Create a new project and return name and description
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: "new", clientId: "1") {
   name
   description
  }
}


## Update a project status and return name and status
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}



## for client side 
npm i @apollo/client graphql react-router-dom react-icons


# Create Docker image

1 - Create a Dockerfile in the root directory of the project
    
docker build -t my-image .

2 - Run the image
docker run -p 3000:3000 my-image

3 - Open the browser and go to http://localhost:5000/graphql

# Create Docker compose
1 - Create a docker-compose.yml file in the root directory of the project
 docker c

ompose up
