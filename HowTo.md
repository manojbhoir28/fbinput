# Introduction #

This Provides a good ui for an input field that uses only a comma separated list.


# Details #

Usage

```
$(document).ready(function(){
  $("#one, #three").fbInput({data:["one","two","three"]});
});
```

data is the auto-complete suggestion data

#one and #three are inputs where you want this applied.

You can get the csv list of data by calling

```
$("#one").list()
```