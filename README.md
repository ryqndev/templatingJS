# templatingJS

## What is templatingJS?

**TL;DR** - the simplest HTML templating library using JavaScript.

**One sentence startup pitch** - It's like a CMS but for individual pages.

## What are the use cases?

Let's say you have a website that shows the stats/data of every single basketball player on cards. Since the cards are all largely the same, instead of having to add a new block of HTML code, you can just edit the JSON information and templatingJS will spit out the corresponding HTML code.

The concept behind this is write the HTML/CSS code for it once and don't worry about it again. Furthermore, if you need to edit your code, you only need to edit the HTML code once and you're done, instead of having to go through every single block again.

## Why templatingJS?

* **Simplicity**  - Compared to other HTML templating engines, such as Underscore.js or Backbone.js, templatingJS serves only one function and it is to provide HTML templating with JavaScript and you can expect to fully master it in only a couple minutes.

* **Ease of use** - There are only 2 public functions in the entire library and it's all related to templating.

* **Small file size** - The source file is so small, I can count the number of bytes by counting the characters and that's not using a minified file. I just counted... it's about 1 kB.

## How to use templatingJS

1. Add templatingJS to your workspace.
    * Copy the ```templating.js``` file from the ```src``` folder and paste it into your working HTML files.

2. Create a template HTML file.
    * Don't include html/head/meta/body tags in your template. Remember that the template file will be the exact code inserted into your DOM.
    * In your template, when you want to add variables use ```{{<variable>}}```
    * See the examples to fully understand how the library works.

3. Call the template function
    * ```templatingJS(url, variables, display);```
    * **url** - the path to the ```template.html``` file from the HTML source.
    * **variables** - the JSON schema used to denote variable names and their values.
    * **display** - the id tag of the div that you want to insert the templated code.

And you're done!!

## templatingJS functions

* ```templatingJS(fileName, variables, dom);```
* ```changeToken(start, end);```

## Simple example of calling library

**JavaScript file:**

```javascript
var path = 'template.html';
var schema = { "name" : "stuff" };
var dom = 'display';
```

**```template.html``` file:**

```html
<p>My name is {{name}} and only {{name}}</p>
```

**```index.html``` file:**

```html
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

```html
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

## Final Important Notes

* The path to the ```template.html``` file is the path from your main HTML file (not the JavaScript function that calls the library or the library itself) if you attach the function as an onload for the body tag.

* Another note: The library is meant for templating small sections of a website, not entire webpages served through a server. If this is your intention, it will be better off to use a complete JavaScript framework that is built to do that.
