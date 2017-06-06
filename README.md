# ![Drizzle LTE](https://raw.githubusercontent.com/ZippyMagic/Drizzle/master/images/drizzle.png)
Open-source Software for your website

## What is Drizzle?
Drizzle is an open-source, powerful tool for your website to help optimize loading and reduce lag.

It does this by loading code externally through javascript, decreasing lag and increasing performance. Drizzle automatically logs website crashes and sends it to the email address coded into the website HTML.

## How do I install this?
To install Drizzle, first add
```
<script src="src/minified/error.min.js"></script>
<script src="https://raw.githubusercontent.com/ZippyMagic/Drizzle/master/src/external/loader/drizzle.min.js"></script>
```
to your website. Then, add in the code, as shown in the example below:
```
{{examples/1.html}}
<div class="drizzle" style="display: none;">
  <code id="drizzle-web-top-array">
    {
    "display":"Home",
    "url":"/index.html"
    },
    {
    "display":"This is a test",
    "url":"#"
    }
  </code>
  <code id="drizzle-contact-email">
    youremail@youremail.com
  </code>
</div>
<noscript>
<h1 style="color: purple;">Drizzle</h1>
<p>Drizzle requires Javascript to run. Please reactivate javascript and reload this page</p>
<div id="body"></div>
```
This will create a header with a Home tab and a "This is a test" tab. One will take you to index.html, and the other will not bring you anywhere. The div element with the "body" id is required for drizzle to work.
