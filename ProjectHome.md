I was looking for a facebook style autocomplete jquery plugin. All the plugins I found managed to look like facebook, but really lacked the keyboard shortcuts that make the facebook input so impressive.

This plugin implements keyboard shortcuts for add, delete and move between selected inputs. It also has mouse controls for all these operations

## Usage ##

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