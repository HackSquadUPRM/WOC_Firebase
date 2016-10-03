# README #

### What is this repository for? ###

Angular-2 boilperplate code with gulp building your tasks, handling the transpilation of your typescript into javascript, compiling your sass into css, and starting a local web server at http://localhost:8000. 

This library provides the basic building blocks for building Angular-2 applications transpiled from Transcript, complete with src and app scaffolding for components, directives, services, pipes, sass, javascript, and assets. 

It also comes initialized with npm commands to easily build components, directives, services, and pipes through the command line. More on that later in the readme.

* v2.3.0
    - now updated for the stable release of Angular 2.0.0!

### How do I get set up? ###

Prerequisites: node, gulp, typescript, typings.

(skip these steps if you already have the prerequisites)

If you don't have these installed, fetch 'em. 
How? Download node from the homepage at https://nodejs.org/ or install node through Homebrew if you have it. 

make sure you have node and npm installed
```
node -v
"version number"
```
```
npm -v
"version number"
```
then
```
sudo npm install -g gulp typescript typings
```

### App Installation and Getting Started ###
Install the package using npm or git:
```
sudo npm i jumanjijs
```
or
```
git clone git@bitbucket.org:rafay826/jumanjijs.git
```
Change into your project directory and run the following command line installs
```
sudo npm install
```
```
typings install
```
Run the application, starting up http://localhost:3000
```
npm start
```

### What commands come with this library? ###

All components, directives, services, pipes, and respective templates that are created from the script commands get automatically placed into it's respective directory.

all new Typescript files that get created through this CLI **must** end in .ts
all new HTML templates that get created through this CLI **must** end in .html

### Creating new components: ###
```
npm run component myComponent.ts
```

### Creating new component templates: ###
```
npm run component-template myComponent.html
```

### Creating new directives: ###
```
npm run directive myDirective.ts
```

### Creating new directive templates: ###
```
npm run directive-template myDirective.html
```

### Creating new services: ###
```
npm run service myService.ts
```

### Creating new pipes: ###
```
npm run pipe myPipe.ts
```

### Who do I talk to? ###

Rafay Choudhury
info@fywave.com