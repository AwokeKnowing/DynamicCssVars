# dynamicCssVars
dynamically create and modify css variables

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
elVars = new dynamicCssVars(el)

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


