---
layout: default
title: Mailsignature
author: Lars Kruse
---

The mail signature creator is designed to generate some nice-looking html, which you can use as a mail signature in your gmail.

The process is as follows:

* Create the mail signature you want to use, simply choose __user__ and __banner__ in the form below.
* Yopu'll be taken to a new page, showing your signature. Copy everything into the clip board: _Select all + copy_
* Goto you [gmail](http://gmail.google.com){: target="\_blank"} and in _settings >> General >> Signature_  replace whatever is already there, with the content of your clipboard: _paste_.

## Give it a spin: 

<script type="text/javascript" src="/javascripts/jquery-1.11.1.js"></script>

<form action="./create.html" method="get">
  <div style="width: 100px;display: block;float: left;">User initials:</div>
  <select id="user-options" type="text" name="user" style="width:200px;">
    <script type="text/javascript">
       $.getJSON('./persons.json', function(persons) {
         for (var user in persons) {
             document.getElementById("user-options").insertAdjacentHTML('beforeend', '<option value="'+user+'">'+user+'</option>');
         }
       });
    </script>
 </select>
<br>
  <div style="width: 100px;display: block;float: left;">Banner:</div>
  <select id="banner-options" type="text" name="banner" style="width:200px;">
  <script type="text/javascript">
     $.getJSON('./banners.json', function(designs) {
       for (var design in designs) {
           document.getElementById("banner-options").insertAdjacentHTML('beforeend', '<option value="'+design+'">'+design+'</option>');
       }
     });
  </script>
  </select><br>
  <div>&nbsp;</div>
  <div style="width: 100px;display: block;float: left;">&nbsp;</div><input type="submit" value="Submit">
</form>


##How to create new entries?
Hack'em yourself: The valid entries for users are defined in the `JSON` file named [persons.json](https://github.com/Praqma/pinside/blob/master/mailsignature/persons.json) and the valid entries for banners are defined in the `JSON` file named [banners.json](https://github.com/Praqma/pinside/blob/master/mailsignature/banners.json). A note on JSON - It's not very forgivin': If you screw up the syntax in any of the two files, the signature creator stops working.

In the `banner.json` you must specify as path to the `.png` it should be 600x75px and placed in the [`banners`](https://github.com/Praqma/pinside/tree/master/mailsignature/banners) folder.
