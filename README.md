# Animated Hamburger 

This is a simple component I have created for my React / TypeScript free online course

## GOALS

* Learn React / TypeScript
* dynamic styling
* handle state with hooks by using `useState`
* load data with Axios and `useEffect`
* dynamic list creation
* Typed components
* Work with props
* Create reusable components
* Simple Router with React Router

## DEMO
![Preview with routes](https://github.com/fabiobiondi/react-demo-animated-hamburger/blob/master/previews/animated-preview-with-routes.gif)



## USAGE

```javascript
const items = [
  { icon: 'fa fa-google', url: 'http://www.google.com'},
  { icon: 'fa fa-windows', url: 'http://www.microsoft.com'},
  { icon: 'fa fa-facebook', url: 'http://www.facebook.com'},
  { icon: 'fa fa-linkedin', url: 'http://www.linkedin.com'},
  { icon: 'fa fa-instagram', url: 'http://www.instagram.com'},
  { icon: 'fa fa-youtube', url: 'http://www.youtube.com'},
];
```

```html
<AnimatedHamburger items={items} iconClick={doSomething} />
```

## HTML, CSS and SVG
[Inspired by this pen](https://codepen.io/lbebber/pen/RNgBPP)


## Installation

```
npm install
```

## Run server

Run the local server to load data from JSON

```
npm run server
```

## Run Application

Runs the app in the development mode.

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
