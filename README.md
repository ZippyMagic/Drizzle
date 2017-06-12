# ![Drizzle LTE](https://raw.githubusercontent.com/ZippyMagic/Drizzle/master/images/drizzle.png)
Open-source Software for your website

## What is Drizzle?
Drizzle is an open-source, powerful tool for your website to help optimize loading and reduce lag.

It does this by loading code externally through javascript, decreasing lag and increasing performance. Drizzle automatically logs website crashes and sends it to the email address coded into the website HTML.

>"Drizzle is one of the greatest peices of software I have ever seen" - My Mom

## What are the features of Drizzle?
Current drizzle features include:
- Website Control
- Easy to make website
- Header Supports

Upcoming features include:
- The entire website can be made with easy to use html
- Login support for admin editing
- Custom CSS User Input

## How do I install this?
To install Drizzle, first add
```
<script src="https://raw.githubusercontent.com/ZippyMagic/Drizzle/master/src/minified/error.min.js"></script>
<script src="https://raw.githubusercontent.com/ZippyMagic/Drizzle/master/src/external/loader/drizzle.min.js"></script>
```
to your website. Then, add in the code, as shown in the example below:
```
{{examples/1.html}}(Do not add this. This is the file location in the repository)
<script src="src/minified/error.min.js"></script>
<script src="src/external/loader/drizzle.min.js"></script>
<div class="drizzle" style="display: none;">
  <code class="drizzle-input-top">
    HOME
  </code>
</div>
  <code id="drizzle-contact-email">
    youremail@youremail.com
  </code>
</div>
<noscript>
<h1 style="color: purple;">Drizzle</h1>
<p>Drizzle requires Javascript to run. Please reactivate javascript and reload this page</p>
</noscript>
<div id="body"></div>
```
This will create a header with the word 'Home'. To see if Drizzle is working properly, type `javascript:checkDrizzle();` in the bar.
