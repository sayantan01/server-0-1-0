#Server Side Backend version 0.1.0

Usage Instructions:
===================

Installation
------------

- Clone the repo.
- ``cd`` into the cloned folder.
- run ``npm install``
- add the file ``config/dev.js`` with the following content:      
      
      module.exports={ 
        mongodbURI: <your-mongodb-connection-string>
      };

Usage
-----
- Run the node.js app:
  ``npx nodemon``
- In your browser, go to ``http://localhost:5000``
