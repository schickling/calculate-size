calculate-size [![Build Status](https://travis-ci.org/schickling/calculate-size.svg?branch=master)](https://travis-ci.org/schickling/calculate-size) [![npm version](https://badge.fury.io/js/calculate-size.svg)](https://badge.fury.io/js/calculate-size)
==============

Calculate the pixel size of a string (with integrated caching)

## Install

```sh
$ npm install calculate-size
```

## Usage

```js
const size = calculateSize('Hello world!', {
   font: 'Arial',
   fontSize: '12px'
})

console.log(size.width) // 140
console.log(size.height) // 20
```
