`isisContextmenu` is a directive for displaying contextual-menu-like call-outs. Attachit as an attribute on triggering object.

Use the following attributes along:

 * `contextmenuConfig` - configuration options:
    - `triggerEvent` - the DOM event triggering appearance
    - `contentTemplateUrl` - url of template for content (should be cached already). Uses a `hierarchical-menu` as default.
    - `position` - mouse coordinates by default but with this option you can override menu position to `'left bottom'` or `'right bottom'` of triggering element
 * `contextmenuData` - data passed to shell directive in template. By default, specify a menu structure for `hierarchical-menu`.
 * `contextmenu-disabled` - if set, will be evaluated before showing menu

It also registers the `contextmenuService` for opening and closing menus manually. Exposed methods:

 * `open` with arguments:
    - triggerElement, contentTemplateUrl, aScope, position, doNotAutocloseOnClick
 * `close` - no arguments