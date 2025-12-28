console.dir(window)

​/* part of the exercise was to find the document object of my browser's window object
(BOM - browswer object model). 

For reference, I inspected the newTab home page in the firefox browser

After entering console.dir(window) in the console tab, I found
the document object under <default.properties> which was listed near the end of the window's
sub objects. The document object looked like below 

Document: function Document()
​​​
length: 0
​​​
name: "Document"
​​​
parseHTMLUnsafe: function parseHTMLUnsafe()
​​​
prototype: DocumentPrototype { getElementsByTagName: getElementsByTagName(), getElementsByTagNameNS: getElementsByTagNameNS(), getElementsByClassName: getElementsByClassName(), … }
​​​
<prototype>: function Node() 

*/

/* likewise I was asked to find the screen subobject. It was also under <default.properties>
but it was just another function. I got screen details with console.dir(window.screen) */