# What is templatingJS?

tl;dr: the simplest html templating library using javascript

One Sentence Startup Pitch: It's like a CMS but for individual pages

# What are the use cases?

Let's say you have a website that shows the stats/data of every single basketball player on cards. Since the cards are all largely the same, instead of having to add a new block of html code, you can just edit the JSON information and templateJS will spit out the corresponding html code. 

The concept behind this is write the html/css code for it once and don't worry about it again. Furthermore, if you need to edit your code, you only need to edit the html code once and you're done, instead of having to go through every single block again.

# Why templateJS?

* **Simplicity**  -
Compared to other html templating engines, such as Underscore.js or Backbone.js, templateJS serves only one function and it is to provide html templating with Javascript and you can expect to fully master it in only a couple minutes.
<br> 

* **Ease of use** -
There are only 2 public functions in the entire library and it's all related to templating
<br>

* **Small file size** -
The source file is so small, I can count the number of bytes by counting the characters and that's not using a minified file. I just counted.. it's about 1 kb.
<br>

# How to use templateJS

###

* Step 1: Add templateJS to your workspace. 
    * Copy the templateJS.js file from the src/ folder and paste it into your working html files

* Step 2: Create a template html file
    * Don't include html/head/meta/body tags in your template. Remember that the template file will be the exact code inserted into your DOM.
    * In your template, when you want to add variables use '{{variable-name}}'
    * See the examples to fully understand how the library works.

* Step 3: Call the template function
> templatingJS( url, variables, 'display');

    The first paramater is the url - which is the path to the template.html file from the html source

    The second paramter is the JSON schema used to denote variable names and their values
    
    The third parameter is the id tag of the div that you want to insert the templated code

And you're done!!

# tJS functions

templatingJS(fileName, variables, dom);

changeToken(start, end); 

# Simple example of calling library


javascript file
```
var path = 'template.html';
var schema = { "name" : "stuff" };
var dom = 'display';
```
template.html file code
```
<p> My name is {{name}} and only {{name}} </p>
```
index.html file code
```
<!DOCTYPE html>
<html>
    <head>
        <title>
            example
        </title>
    </head>
    <body onload="callJavascriptLoadFunc();">
        <div id="display">
        </div>
    </body>
</html>
```
End result: 
```
<!DOCTYPE html>
<html>
    <head>
        <title>
            example
        </title>
    </head>
    <body onload="callJavascriptLoadFunc();">
        <div id="display">
        <p> My name is stuff and only stuff </p>
        </div>
    </body>
</html>
```

# Final Important Notes

* The path to the template.html file is the path from your main html file (not the javascript function that calls the library or the library itself) if you attach the function as an onload for the body tag.

* Another note: The library is meant for templating small sections of a website, not entire webpages served through a server. If this is your intention, it will be better off to use a complete js framework that is built to do that.