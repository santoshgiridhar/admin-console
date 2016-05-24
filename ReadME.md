# admin-console - Simple canjs login and navigation console

This project is an application for a typical CanJS web app.

## Getting Started

To get you started you can simply clone the admin-console repository and install the dependencies:

### Prerequisites

You need git to clone the admin-console repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone admin-console

Clone the admin-console repository using [git][git]:

```
git clone https://github.com/santoshgiridhar/admin-console.git
cd admin-console
```

### Install Dependencies

```
npm install
```

* `node_consoles` - contains the npm packages for the tools we need

### Run the Application

To run the server, you have install http-server.
```
http-server
```

Now browse to the app at `http://localhost:8000/index.html`.


## Directory Layout

```
admin-console/                    --> all of the source files for the application
  index.css               --> default stylesheet
  index.less               --> default stylesheet
  components/           --> all app specific consoles
    page-login
      page-login
      template.stache
      style.less
      view-model.js
      demo.html
      test.js
      test.html    
  index.js                --> main application console
  index.html            --> app layout file (the main html template file of the app)
```

## Testing

```
npm test
```

### End to end testing

## Contact

For more information on CanJS please check out http://canjs.com/

[git]: http://git-scm.com/
[canjs]: http://canjs.com/
[stealjs]: http://stealjs.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[http-server]: https://github.com/nodeapps/http-server
