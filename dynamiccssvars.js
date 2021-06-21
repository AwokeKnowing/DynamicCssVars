class DynamicCssVars
{
    constructor(el, className)
    {
        this.id = className || "dynVars-"+~~(Math.random()*100000);
        this.isDynamicId = !el.classList.contains(this.id)
        this.el = el
        this.el.classList.add(this.id)
        this.vars = {}
        this.style = document.createElement("style");
        this.style.appendChild(document.createTextNode(""));//webkit fix
        document.head.appendChild(this.style);
    }
  
    setVar(varName, varVal)
    {
        if(varName in this.vars) {
            this.vars[varName].val = '' + varVal
            this.style.sheet.deleteRule(this.vars[varName].idx)
            this.vars[varName].idx = this.makeRule(varName, varVal)
        } else {
            this.vars[varName] = {
                val: '' + varVal,
                idx: this.makeRule(varName, varVal)
            }
        }
    }
  
    getVar(varName)
    {
        this.vars[varName].val
    }
  
    deleteVar(varName)
    {
        this.style.sheet.deleteRule(this.vars[varName].idx)
        delete this.vars[varName]
    }
  
    makeRule(varName,varVal){
        let rule = "."+this.id+"{--"+varName+":"+varVal+"}"
        return this.style.sheet.insertRule(rule)
    }
  
    dispose()
    {
        if(this.isDynamicId)
            this.el.classList.remove(this.id)
        this.style.remove()
    }
}