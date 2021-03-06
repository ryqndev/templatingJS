var tJSObj = {
    'startToken' : '{{',
    'endToken' : '}}',
}

/**
 * 
 * @param fileName (String) Path to html template file
 * 
 * @param variables (JSON) JSON array of keys and values
 * 
 * @param dom (String) id name of dom element to insert template
 */
function templatingJS(fileName, variables, dom){
    let tJSxhr = new XMLHttpRequest();
    tJSxhr.onreadystatechange = function () {
        if (tJSxhr.readyState === tJSxhr.DONE){
            if (tJSxhr.status === 200) {
                let domObj = document.getElementById(dom);
                domObj.innerHTML += tJSparseFile(tJSxhr.responseText, variables);
            }
        }
    };
    tJSxhr.open('GET', fileName, true);
    tJSxhr.send();
}
function tJSparseFile(template, variables){
    let keys = Object.keys(variables);
    let keyArr = tJSsepKeys(variables, keys);
    for(let i = 0; i < keyArr.length; i++){
        let regObj = new RegExp(keyArr[i], 'g')
        template = template.replace(regObj, variables[keys[i]]);
    }
    return template;
}
function tJSsepKeys(variables, keys){
    let keyArr = [];
    for(let i = 0; i < keys.length; i++){
        keyArr.push( tJSObj.startToken + keys[i] + tJSObj.endToken );
    }
    return keyArr;
}
function changeToken(start, end){
    tJSObj.startToken = start;
    tJSObj.endToken = end;
}