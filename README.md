# semantic-ui-stylus
stylus port of semanticUI

### Installation

bower:
```sh
$ bower install semantic-ui-stylus --save-dev
```

### info
A complete, fully functional and unaltered convert of the default semantic.css to stylus.  
No learning curve and no repeats. build it how you want it or just use it as an easy way to exclude unused css.

### Instructions
semantic.css has been converted, broken down into smaller .styl includes and the include files are named accordingly.

Simply edit as you see fit, comment out or remove unwanted includes in `semantic.styl` file then compile.

````
stylus semantic.styl -o dist/css
````

or
````
gulp
````
done.
