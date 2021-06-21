# DynamicCssVars
Dynamically create and modify css variables. Make the variables scoped to the specified element. Use the variables in your css.

### calm down, it's for special cases ;)
Normally you'd just toggle a few classes with CSS variables to change the values of the variables.  This class is needed only when you need to modify the values, such as when a margin value is calculated in js and needs to be applied in css, or when a color comes dynamically in js and will likely change later, or an image name is specified in code.  If your vars don't need to change to abritrary values throughout the program execution, you should just create a stylesheet and insert it, or make several values and use css classes to toggle them.

## example

```js
/* 

<style>
.mystuff {
  background:var(--bcolor, blue);
  height:200px
}
</style>  
<div class="mystuff">

*/


let el = document.querySelector(".mystuff")
elVars = new DynamicCssVars(el)

elVars.setVar("bcolor", "brown")
elVars.setVar("mSize", "35px")
elVars.setVar("bcolor", "red")
elVars.deleteVar("mSize")

elVArs.dispose()

```

## api

```js
// create an object to manage the css vars, setting the element as scope
constructor(element)

// set a css var (the -- prefix is added)
setVar(varName, varVal)

// get the value you set (ie can't get arbitrary vars, only the ones you set)
getVar(varName)

// remove a css var that you added
deleteVar(varName)

// get rid of the dynamic stylesheet
dispose()

```

## codepen
https://codepen.io/AwokeKnowing/pen/wvJboJR


