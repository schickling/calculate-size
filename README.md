calculate-size [![Build Status](https://travis-ci.org/schickling/calculate-size.svg?branch=master)](https://travis-ci.org/schickling/calculate-size) [![npm version](https://badge.fury.io/js/calculate-size.svg)](https://badge.fury.io/js/calculate-size)
==============

Calculate the pixel size (width/height) of a string (with integrated caching)

## Install

> This package supports Typescript out-of-the-box

```sh
$ npm install calculate-size
```

## Usage

```js
const size = calculateSize('Hello world!', {
   font: 'Arial',
   fontSize: '12px'
})

### Options

* `font: string`
* `fontSize: string`
* `fontWeight: string`
* `width: string` (Constraint width by a fixed value to calc height)

console.log(size.width) // 140
console.log(size.height) // 20
```
