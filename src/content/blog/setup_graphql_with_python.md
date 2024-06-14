---
title: "Setting Up Simple GraphQL Server with Python"
description: 'Setting up a GraphQL Servr with Python, Flask, Graphene'
pubDate: 'Jun 14 2024'
heroImage: '/blog-placeholder-2.jpg'
---

I am writing this article after trying to follow this guide [Using GraphQL with Python - A Complete Guide](https://www.apollographql.com/blog/complete-api-guide) and failing to do it.
This article serves as a note to my future self and maybe a helpful guide to others who are learning how to setup GraphQL with Python. In this article, I will be using:
- Python 3.10.14 (no particular reason, I just have this version installed)
- Flask 3.0.3 (as a server)
- Ariadne 0.23.0
- SQLite (I'm not here to learn how to setup an SQL server, so SQLite should be the simplest to use)
- Bash as shell interface

Before you read this article, I am going to assume you have already know about:
- Python basics
- [Python SQLite3 module](https://docs.python.org/3/library/sqlite3.html)
- [GraphQL: Schemas and Types](https://graphql.org/learn/schema/)
- A little bit about [Flask](https://flask.palletsprojects.com/en/3.0.x/quickstart/)

Here is the plan for setting up the GraphQL server:
1. [Environment Setup](#environment-setup)
2. [The Minimal Setup](#the-minimal-setup)
3. [Connecting To SQLite](#connecting-to-sqlite)
4. [A More Sophisticated Setup](#a-more-sophisticated-setup)

## Environment Setup
Use Python virtual environment, so it does not mess with your other packages or Python installation. And don't forget to activate the virtual environment.

```bash
python -m venv venv
source venv/bin/activate
```

Install the packages
```bash
pip install flask ariadne 
```

## The Minimal Setup
This will be the minimum setup to "run a GraphQL server". Here is the full code, for you busy people.
```python
# /app.py

# Code originally from 
# https://ariadnegraphql.org/docs/flask-integration

from ariadne import QueryType, graphql_sync, make_executable_schema
from flask import Flask, jsonify, request

type_defs = """
    type Query {
        hello: String!
    }
"""

query = QueryType()


@query.field("hello")
def resolve_hello(_, info):
    request = info.context
    user_agent = request.headers["User-Agent"] or "Guest"
    return "Hello, %s!" % user_agent


schema = make_executable_schema(type_defs, query)

app = Flask(__name__)


@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()
    headers = dict(request.headers)

    success, result = graphql_sync(
        schema,
        data,
        context_value={"request": request, "headers": headers},
        debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code


if __name__ == "__main__":
    app.run(debug=True)
```

Let's breakdown the minimal setup bit by bit. Skipping the import statement, there is this part of the code. The code below is defining the GraphQL schema that will be used in the endpoint. Or in simple terms, this line is responsible for determining what is valid and invalid query. In this case, we can `Query` for `hello` and expect a `String` in return.
```python
type_defs = """
    type Query {
        hello: String!
    }

"""
```

Next up is this group of lines. The snippet below is setting up what the mapping between the query and resolvers. When you send a query to the GraphQL endpoint, your server needs to be told what to do and how to respond to a query. We define those in what is called resolver. The `@query.field("hello")` is just telling our server, to bind the `resolver_hello` function as the resolver for the query `hello`. The function `resolve_hello` itself just return data (that matches the schema). Then there is the `schema = make_executable_schema(type_defs, query)`, gonna be honest with you, I got no idea what this thing does; You can see the [source code](https://github.com/mirumee/ariadne/blob/main/ariadne/executable_schema.py) if you are curious tho.

```python
query = QueryType()


@query.field("hello")
def resolve_hello(_, info):
    request = info.context
    user_agent = request.headers["User-Agent"] or "Guest"
    return "Hello, %s!" % user_agent


schema = make_executable_schema(type_defs, query)
```

Then there is this part. This part pretty much tell Flask to let Ariadne handle all response when someone makes a request to the GraphQL endpoint (in this case '/graphql'). The `graphql_sync` function is responsible for executing the request's query and returning a response data. How it does that? I don't know, go read the Ariadne source code if you're interested.

```python
@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()
    headers = dict(request.headers)

    success, result = graphql_sync(
        schema,
        data,
        context_value={"request": request, "headers": headers},
        debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code


if __name__ == "__main__":
    app.run(debug=True)
```

## Connecting To SQLite

To get the example database [Northwind sample SQLite DB](https://en.wikiversity.org/wiki/Database_Examples/Northwind/SQLite) and copy and paste its content into `seed.sql`, and then run the python code below to create the SQLite db file. After you run the file, you should have a file named `Northwind.db` on the root of your folder.

```python
import sqlite3

with open('seed.sql', 'r') as f:
    query = f.read()

con = sqlite3.connect('Northwind.db')
cur = con.cursor()

cur.executescript(query)
con.commit()
con.close()
```

Below is the Entity-Relationship Diagram for the Northwind database.
![Northwind DB ER Diagram](https://upload.wikimedia.org/wikiversity/en/a/ac/Northwind_E-R_Diagram.png)


Using the previously created `Northwind.db`, make a `database.py` file to store all the database functions. This file will be responsible for querying to the SQLite database. 

```python
# database.py

```

