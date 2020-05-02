# GistPad Contrib 📘

GistPad Contrib adds extra capabilities to GistPad, so that GistPad can remain "universally applicable", but enable new/rich experiences. For example, GistPad Contrib adds support for using [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc) and [Haml](https://npmjs.org/npm) as the markup language in a [GistPad playground](https://github.com/vsls-contrib/gistpad#playgrounds). 

<img width="600px" src="https://user-images.githubusercontent.com/116461/79127194-4c5c5380-7d56-11ea-8ae4-7cd2b4d9cb3b.png" />

[_Sample playground showing the use of Haml_](https://gist.github.com/lostintangent/dfcf334a99e07fd289a199a0358163e1)

## Contributed Playground Languages (Markup)

When you install this install, your playgrounds can take advantage of the following markup languages:

- `AsciiDoc` - Create a GistPad playground, and rename `index.html` to `index.adoc`. As you edit your AsciiDoc code, it will be automatically compiled and rendered in the preview window.
  
- `Haml` - Create a GistPad playground, and rename `index.html` to `index.haml`. As you edit your Haml code, it will be automatically compiled and rendered in the preview window.

## Contributed Playground Template Galleries

When you install this extension, you'll have a new playground template gallery called `Contrib`. It's not enable by default, so you'll need to configure your template galleries and enable the new `Contrib` gallery. Once enabled, this gallery contributes the following new template galleries:

- `HAML/CSS/JavaScript` - Allows creating a new playground using Haml as the markup language.
