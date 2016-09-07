---
layout: default
title: Praqma Mail Signature
author: Lars Kruse
organization: Praqma
repo: praqma.github.io
---

The mail signature creator is designed to generate some nice-looking html, which you can use as a mail signature in your gmail.
{: .cuff}

## Select your banner:

<script type="text/javascript" src="/javascripts/jquery-1.11.1.js"></script>

<form action="./create.html" method="get">
  <div style="width: 140px;display: block;float: left;">Employee:</div>
  <select id="user-options" type="text" name="user" style="width:250px;">
    <script type="text/javascript">
       $.getJSON('./persons.json', function(persons) {
         for (var initials in persons) {
             var person = persons[initials];
           document.getElementById("user-options").insertAdjacentHTML('beforeend', '<option value="'+initials+'">'+person.name+'</option>');
         }
       });
    </script>
 </select>
<br>
  <div style="width: 140px;display: block;float: left;">Banner:</div>
  <select id="banner-options" type="text" name="banner" style="width:250px;">
  <script type="text/javascript">
     $.getJSON('./banners.json', function(designs) {
       for (var id in designs) {
           var design = designs[id];
           document.getElementById("banner-options").insertAdjacentHTML('beforeend', '<option value="'+id+'">'+design.title+'</option>');
       }
     });
  </script>
  </select><br>
  <div>&nbsp;</div>
  <div style="width: 140px;display: block;float: left;">&nbsp;</div><input type="submit" value="Submit">
</form>

## What do I do?

* Create the mail signature you want to use, simply choose _employee_ and _banner_ in the form above.
* You'll be taken to a new page, showing your signature. Copy everything into the clip board: _Select all + copy_
* Goto you [gmail](http://gmail.google.com){: target="\_blank"} and in _settings >> General >> Signature_  replace whatever is already there, with the content of your clipboard: _paste_.


## How to create new entries?
Hack'em yourself: The valid entries for users are defined in the `JSON` file named [`persons.json`](https://github.com/Praqma/praqma.github.io/blob/master/mailsignature/persons.json) and the valid entries for banners are defined in the `JSON` file named [`banners.json`](https://github.com/Praqma/praqma.github.io/blob/master/mailsignature/banners.json). A note on JSON - It's not very forgivin': If you screw up the syntax in any of the two files, the signature creator stops working.

In the `banner.json` you must specify as path to the image (`.png`, `.svg` or `.jpg`) it should be 600x75px or 600x100px and placed in the [`/mailsignature/banners`](https://github.com/Praqma/praqma.github.io/tree/master/mailsignature/banners) folder in the [`praqma/praqma.github.io`](https://github.com/Praqma/praqma.github.io) repo.
 
