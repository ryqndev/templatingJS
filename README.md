# What is templatingJS?

tl;dr: the simplest html templating library using javascript

One Sentence Startup Pitch: It's like a CMS but for individual pages

# What are the use cases?

Let's say you have a website that shows the stats/data of every single basketball player on cards. Since the cards are all largely the same, instead of having to add a new block of html code, you can just edit the JSON information and templateJS will spit out the corresponding html code. 

The concept behind this is write the html/css code for it once and don't worry about it again. Furthermore, if you need to edit your code, you only need to edit the html code once and you're done, instead of having to go through every single block again.

# Why templateJS?

* **Simplicity** 
<br> 

Compared to other html templating engines, such as Underscore.js or Backbone.js, templateJS serves only one function and it is to provide html templating with Javascript and you can expect to fully master it in only a couple minutes.

* **Ease of use**
<br>

There is only 1 function in the entire library and it's to produce html code with a template and some variables.

* **Small file size**
<br>

The source file is so small, I can count the number of bytes by counting the characters and that's not using a minified file

# How to use templateJS

###

* Step 1: Add templateJS to your workspace. 
    * Copy the templateJS.js file from the src/ folder and paste it into your working html files

* Step 2: Create a template html file
    * Don't include html/head/meta/body tags in your template. Remember that the template file will be the exact code inserted into your DOM.
    * In your template, when you want to add variables use '{{variable-name}}'
    * See the examples to fully understand how the library works.

* Step 3: Call the template function
> template(url, variables, 'display');

    The first paramater is the url - which is the path to the template.html file from the html source

    The second paramter is the JSON schema used to denote variable names and their values
    
    The third parameter is the id tag of the div that you want to insert the templated code

And you're done!!