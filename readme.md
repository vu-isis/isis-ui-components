This is a collection of Angular ui-components originally developed for WebGME.

## [Preview and Documentation](http://vu-isis.github.io/isis-ui-components/dist/docs/isis-ui-components-docs.html)

## Install

```
bower install isis-ui-components
```

## Use

Include library and template scripts:

```
<script src="dist/isis-ui-components.js"></script>
<script src="dist/isis-ui-components-templates.js"></script>
```

Include library CSS:

```
<link type="text/css" rel="stylesheet" href="dist/isis-ui-components.css">
```

## Library-dependencies

- jQuery
- Angular (1.3.13)
- jQuery UI
- Bootstrap


## Development

Key gulp tasks:

- clean-build
- compile-all
- register-watchers

By default gulp runs in debug mode and generates source maps.

For example the following can be used to visualize the project elements:
```bash
git clone git@github.com:vu-isis/isis-ui-components.git
cd isis-ui-components
gulp clean-build
gulp compile-all
python -m SimpleHTTPServer
```
The navigate to the following link in the browser:
  http://127.0.0.1:8000/dist/docs/isis-ui-components-docs.html

Use gulp with the `--production` flag to not to run in debug mode.
