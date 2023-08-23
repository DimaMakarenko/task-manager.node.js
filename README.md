# Task manager

Welcome to the Node.js Task manager API project! This repository houses a simple yet powerful task management API built using Node.js.


## Introduction

This project aims to provide a robust API for managing tasks. Whether you're building a to-do list application, a project management tool, or anything in between, this Node.js-based API can seamlessly integrate into your project, offering endpoints to interact with tasks efficiently.

## Installation

To get started with the Node.js Task API on your local machine, follow these steps:

1. Clone this repository to your local machine using:
```
git clone https://github.com/DimaMakarenko/task-manager.node.js.git
```

2. Navigate to the project directory:
```
cd task-manager.node.js
```

3. Install the required dependencies:
```
npm install
```

4. Need to add ```.env``` file with ```MONGO_URL``` value

5. Run the application:

```
npm start
```

Now you have the API up and running locally!


## Endpoints

The following endpoints are available:

```GET /api/v1/tasks```: Get a list of all tasks.

```POST /api/v1/tasks```: Create a new task.

```GET /api/v1/tasks/:id```: Get details of a specific task.

```PATCH /api/v1/tasks/:id```: Update a task's details.

```DELETE /api/v1/tasks/:id```: Delete a task.
