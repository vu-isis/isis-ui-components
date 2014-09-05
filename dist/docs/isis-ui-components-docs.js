(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 * angular-markdown-directive v0.3.0
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  provider('markdownConverter', function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new Showdown.converter(opts);
      }
    };
  }).
  directive('btfMarkdown', function ($sanitize, markdownConverter) {
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            var html = newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : '';
            element.html(html);
          });
        } else {
          var html = $sanitize(markdownConverter.makeHtml(element.text()));
          element.html(html);
        }
      }
    };
  });

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/angular-markdown-directive/markdown.js","/../../node_modules/angular-markdown-directive")
},{"buffer":3,"rH1JPG":6}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.10
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,h,q){'use strict';function E(a){var e=[];s(e,h.noop).chars(a);return e.join("")}function k(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,g){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)c("",f.last());v[b]&&f.last()==b&&c("",b);(g=w[b]||!!g)||f.push(b);var l={};d.replace(G,function(a,b,e,c,d){l[b]=r(e||c||d||"")});e.start&&e.start(b,l,g)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}var b,g,f=[],l=a;for(f.last=function(){return f[f.length-1]};a;){g=!0;if(f.last()&&x[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(b,a){a=a.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(r(a));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&e.comment(a.substring(4,b)),a=a.substring(b+3),g=!1);else if(y.test(a)){if(b=a.match(y))a=
a.replace(b[0],""),g=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,c),g=!1}else K.test(a)&&(b=a.match(A))&&(a=a.substring(b[0].length),b[0].replace(A,d),g=!1);g&&(b=a.indexOf("<"),g=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(r(g)))}if(a==l)throw L("badparse",a);l=a}c()}function r(a){if(!a)return"";var e=M.exec(a);a=e[1];var d=e[3];if(e=e[2])n.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in n?n.textContent:n.innerText;return a+e+d}function B(a){return a.replace(/&/g,
"&amp;").replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,g,f){a=h.lowercase(a);!d&&x[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(g,function(d,f){var g=h.lowercase(f),k="img"===a&&"src"===g||"background"===g;!0!==O[g]||!0===D[g]&&!e(d,k)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||
c(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,z=/^<\s*\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\s*\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/([^\#-~| |!])/g,w=k("area,br,col,hr,img,wbr");p=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");q=k("rp,rt");var v=h.extend({},q,p),t=h.extend({},p,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
u=h.extend({},q,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=k("script,style"),C=h.extend({},w,t,u,v),D=k("background,cite,href,longdesc,src,usemap"),O=h.extend({},D,k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
n=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,s(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,d=/^mailto:/;return function(c,b){function g(a){a&&m.push(E(a))}function f(a,c){m.push("<a ");h.isDefined(b)&&
(m.push('target="'),m.push(b),m.push('" '));m.push('href="');m.push(a);m.push('">');g(c);m.push("</a>")}if(!c)return c;for(var l,k=c,m=[],n,p;l=k.match(e);)n=l[0],l[2]==l[3]&&(n="mailto:"+n),p=l.index,g(k.substr(0,p)),f(n,l[0].replace(d,"")),k=k.substring(p+l[0].length);g(k);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/angular-sanitize/angular-sanitize.min.js","/../../node_modules/angular-sanitize")
},{"buffer":3,"rH1JPG":6}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
},{"base64-js":4,"buffer":3,"ieee754":5,"rH1JPG":6}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"buffer":3,"rH1JPG":6}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"buffer":3,"rH1JPG":6}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/process/browser.js","/../../node_modules/process")
},{"buffer":3,"rH1JPG":6}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals angular, require*/
'use strict';

var components = [
  'simpleDialog',
  'hierarchicalMenu',
  'contextmenu',
  'dropdownNavigator',
  'treeNavigator'
];

require( '../library/simpleDialog/docs/demo.js' );
require( '../library/hierarchicalMenu/docs/demo.js' );
require( '../library/contextmenu/docs/demo.js' );
require( '../library/dropdownNavigator/docs/demo.js' );
require( '../library/treeNavigator/docs/demo.js' );

require( 'angular-sanitize' );
window.Showdown = require( 'showdown' );
require( 'angular-markdown-directive' );


var demoApp = angular.module(
  'isis.ui.demoApp', [
    'isis.ui.demoApp.templates',
    'btford.markdown'
  ].concat( components.map( function ( e ) {
    return 'isis.ui.' + e + '.demo';
  } ) )
);

demoApp.run( function () {
  console.log( 'DemoApp run...' );
} );

demoApp.controller(
  'UIComponentsDemoController',
  function ( $scope ) {

    $scope.components = components.map( function ( component ) {
      return {
        name: component,
        template: '/library/' + component + '/docs/demo.html',
        docs: '/library/' + component + '/docs/readme.md'
      };
    } );

  } );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/docs_app.js","/")
},{"../library/contextmenu/docs/demo.js":8,"../library/dropdownNavigator/docs/demo.js":9,"../library/hierarchicalMenu/docs/demo.js":10,"../library/simpleDialog/docs/demo.js":11,"../library/treeNavigator/docs/demo.js":12,"angular-markdown-directive":1,"angular-sanitize":2,"buffer":3,"rH1JPG":6,"showdown":13}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals console, angular*/

'use strict';

var demoApp = angular.module( 'isis.ui.contextmenu.demo', [ 'isis.ui.contextmenu' ] );

demoApp.controller( 'ContextmenuDemoController', function ( $scope, contextmenuService ) {

  var menuData = [ {
    id: 'top',
    items: [ {
      id: 'newProject',
      label: 'New project ...',
      iconClass: 'glyphicon glyphicon-plus',
      action: function () {
        console.log( 'New project clicked' );
      },
      actionData: {}
    }, {
      id: 'importProject',
      label: 'Import project ...',
      iconClass: 'glyphicon glyphicon-import',
      action: function () {
        console.log( 'Import project clicked' );
      },
      actionData: {}
    } ]
  }, {
    id: 'projects',
    label: 'Recent projects',
    totalItems: 20,
    items: [],
    showAllItems: function () {
      console.log( 'Recent projects clicked' );
    }
  }, {
    id: 'preferences',
    label: 'preferences',
    items: [ {
      id: 'showPreferences',
      label: 'Show preferences',
      action: function () {
        console.log( 'Show preferences' );
      },
      menu: [ {
        items: [ {
          id: 'preferences 1',
          label: 'Preferences 1'
        }, {
          id: 'preferences 2',
          label: 'Preferences 2'
        }, {
          id: 'preferences 3',
          label: 'Preferences 3',
          menu: [ {
            items: [ {
              id: 'sub_preferences 1',
              label: 'Sub preferences 1'
            }, {
              id: 'sub_preferences 2',
              label: 'Sub preferences 2'
            } ]
          } ]
        } ]
      } ]
    } ]
  } ];

  $scope.menuConfig1 = {
    triggerEvent: 'click',
    position: 'right bottom'
  };

  $scope.menuConfig2 = {
    triggerEvent: 'mouseover',
    position: 'left bottom',
    contentTemplateUrl: 'contextmenu-custom-content.html',
    doNotAutoClose: true
  };

  $scope.menuData = menuData;

  $scope.preContextMenu = function ( e ) {
    console.log( 'In preContextMenu ', e );
  };

  $scope.customData = {

    closeClick: function () {
      console.log( 'closing this manuyally' );
      contextmenuService.close();
    }
  };

} );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../library/contextmenu/docs/demo.js","/../library/contextmenu/docs")
},{"buffer":3,"rH1JPG":6}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals console, angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.dropdownNavigator.demo', [ 'isis.ui.dropdownNavigator' ] );

demoApp.controller( 'DropdownDemoController', function ( $scope ) {
  var firstMenu,
    secondMenu;

  firstMenu = {
    id: 'root',
    label: 'GME',
    //            isSelected: true,
    itemClass: 'gme-root',
    menu: []
  };

  secondMenu = {
    id: 'secondItem',
    label: 'Projects',
    menu: []
  };

  firstMenu.menu = [ {
    id: 'top',
    items: [ {
      id: 'newProject',
      label: 'New project ...',
      iconClass: 'glyphicon glyphicon-plus',
      action: function () {
        console.log( 'New project clicked' );
      },
      actionData: {}
    }, {
      id: 'importProject',
      label: 'Import project ...',
      iconClass: 'glyphicon glyphicon-import',
      action: function () {
        console.log( 'Import project clicked' );
      },
      actionData: {}
    } ]
  }, {
    id: 'projects',
    label: 'Recent projects',
    totalItems: 20,
    items: [],
    showAllItems: function () {
      console.log( 'Recent projects clicked' );
    }
  }, {
    id: 'preferences',
    label: 'preferences',
    items: [ {
      id: 'showPreferences',
      label: 'Show preferences',
      action: function () {
        console.log( 'Show preferences' );
      },
      menu: [ {
        items: [ {
          id: 'preferences 1',
          label: 'Preferences 1'
        }, {
          id: 'preferences 2',
          label: 'Preferences 2'
        }, {
          id: 'preferences 3',
          label: 'Preferences 3',
          menu: [ {
            items: [ {
              id: 'sub_preferences 1',
              label: 'Sub preferences 1'
            }, {
              id: 'sub_preferences 2',
              label: 'Sub preferences 2'
            } ]
          } ]
        } ]
      } ]
    } ]
  } ];


  secondMenu = {
    id: 'secondItem',
    label: 'Projects',
    menu: []
  };

  secondMenu.menu = [ {
    id: 'secondMenuMenu',
    items: [

      {
        id: 'showPreferences',
        label: 'Show preferences',
        action: function () {
          console.log( 'Show preferences' );
        },
        menu: [ {
          items: [ {
            id: 'preferences 1',
            label: 'Preferences 1'
          }, {
            id: 'preferences 2',
            label: 'Preferences 2'
          }, {
            id: 'preferences 3',
            label: 'Preferences 3',
            menu: [ {
              items: [ {
                id: 'sub_preferences 1',
                label: 'Sub preferences 1'
              }, {
                id: 'sub_preferences 2',
                label: 'Sub preferences 2'
              } ]
            } ]
          } ]
        } ]
      }
    ]
  } ];

  $scope.navigator = {
    items: [
      firstMenu,
      secondMenu
    ],
    separator: true
  };


} );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../library/dropdownNavigator/docs/demo.js","/../library/dropdownNavigator/docs")
},{"buffer":3,"rH1JPG":6}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals console, angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.hierarchicalMenu.demo', [ 'ui.bootstrap',
  'isis.ui.hierarchicalMenu'
] );

demoApp.controller( 'HierarchicalMenuDemoController', function ( $scope ) {

  var menu;

  menu = [ {
    id: 'top',
    items: [ {
      id: 'newProject',
      label: 'New project ...',
      iconClass: 'glyphicon glyphicon-plus',
      action: function () {
        console.log( 'New project clicked' );
      },
      actionData: {}
    }, {
      id: 'importProject',
      label: 'Import project ...',
      iconClass: 'glyphicon glyphicon-import',
      action: function () {
        console.log( 'Import project clicked' );
      },
      actionData: {}
    } ]
  }, {
    id: 'projects',
    label: 'Recent projects',
    totalItems: 20,
    items: [],
    showAllItems: function () {
      console.log( 'Recent projects clicked' );
    }
  }, {
    id: 'preferences',
    label: 'preferences',
    items: [ {
      id: 'showPreferences',
      label: 'Show preferences',
      action: function () {
        console.log( 'Show preferences' );
      },
      menu: [ {
        items: [ {
          id: 'preferences 1',
          label: 'Preferences 1'
        }, {
          id: 'preferences 2',
          label: 'Preferences 2'
        }, {
          id: 'preferences 3',
          label: 'Preferences 3',
          menu: [ {
            items: [ {
              id: 'sub_preferences 1',
              label: 'Sub preferences 1'
            }, {
              id: 'sub_preferences 2',
              label: 'Sub preferences 2'
            } ]
          } ]
        } ]
      } ]
    } ]
  } ];

  $scope.menu = menu;

} );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../library/hierarchicalMenu/docs/demo.js","/../library/hierarchicalMenu/docs")
},{"buffer":3,"rH1JPG":6}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals console, angular*/

'use strict';

var isValid,
  demoApp = angular.module( 'isis.ui.simpleDialog.demo', [ 'isis.ui.simpleDialog' ] ),

  parameter = {
    value: 10,
    invalid: true
  };

demoApp.controller( 'ConfirmDialogDemoController', function ( $scope, $simpleDialog ) {

  isValid = function () {

    var result = ( Number( parameter.value ) === 4 );

    console.log( 'Validator was called' );
    console.log( 'Sum is: ' + parameter.value, result );
    parameter.invalid = !result;

    return result;

  };


  $scope.parameter = parameter;

  $scope.isValid = function () {
    isValid();
    if ( !$scope.$$phase ) {
      $scope.$apply();
    }
  };

  $scope.openDialog = function () {

    $simpleDialog.open( {
      dialogTitle: 'Are you sure?',
      dialogContentTemplate: 'confirm-content-template',
      onOk: function () {
        console.log( 'OK was picked' );
      },
      onCancel: function () {
        console.log( 'This was canceled' );
      },
      validator: isValid,
      size: 'lg', // can be sm or lg
      scope: $scope
    } );

  };


} );

demoApp.controller( 'ConfirmDialogDemoDataController', function () {

} );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../library/simpleDialog/docs/demo.js","/../library/simpleDialog/docs")
},{"buffer":3,"rH1JPG":6}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.treeNavigator.demo', [ 'ui.bootstrap' ] );

demoApp.controller( 'TreeNavigatorDemoController', function ( $scope, $log, $q ) {

  var config,
    treeNodes = {},

    addNode,
    removeNode,
    getNodeContextmenu,
    dummyTreeDataGenerator,
    sortChildren;

  getNodeContextmenu = function(node) {

    var defaultNodeContextmenu = [
        {
          items: [
            {
              id: 'create',
              label: 'Create new',
              disabled: true,
              iconClass: 'fa fa-plus',
              menu: []
            },
            {
              id: 'dummy',
              label: 'Just for test ' + node.id,

              actionData: node,

              action: function ( data ) {
                $log.log( 'testing ', data );
              }

            },
            {
              id: 'rename',
              label: 'Rename'
            },
            {
              id: 'delete',
              label: 'Delete',
              iconClass: 'fa fa-minus',
              actionData: {
                id: node.id
              },
              action: function ( data ) {
                removeNode( data.id );
              }
            },
            {
              id: 'preferences 3',
              label: 'Preferences 3',
              menu: [
                {
                  items: [
                    {
                      id: 'sub_preferences 1',
                      label: 'Sub preferences 1'
                    },
                    {
                      id: 'sub_preferences 2',
                      label: 'Sub preferences 2',
                      action: function ( data ) {
                        $log.log( 'testing2 ', data );
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ];

    return defaultNodeContextmenu;

  };

  dummyTreeDataGenerator = function ( treeNode, name, maxCount, levels ) {
    var i,
      id,
      count,
      childNode;

    levels = levels || 0;

    count = Math.round(
      Math.random() * maxCount
    ) + 1;

    for ( i = 0; i < count; i += 1 ) {
      id = name + i;

      childNode = addNode( treeNode, id );

      if ( levels > 0 ) {
        dummyTreeDataGenerator( childNode, id + '.', maxCount, levels - 1 );
      }
    }
  };

  addNode = function ( parentTreeNode, id ) {
    var newTreeNode,
      children = [],

      nodeClick,
      nodeDblclick,
      expanderClick;

//    $log.log( 'Adding a new node ' + id + ( parentTreeNode ? ' to ' + parentTreeNode.id :
//      ' as ROOT' ) );

    nodeDblclick = function ( $event, theNode ) {

      nodeClick( $event, theNode );
      expanderClick( $event, theNode );

      // one active node
      $scope.state.activeNode = theNode.id;

      // one selected node
      $scope.state.selectedNodes = [ theNode.id ];
    };




    // node structure
    newTreeNode = {
      label: id,
      extraInfo: 'Extra info',
      children: children,
      childrenCount: 0,
      nodeData: {},
      nodeDblclick: nodeDblclick,
      iconClass: 'fa fa-file-o',
      contextMenu: [], // defined below
      onContextMenu: $scope.onContextMenu
    };

    newTreeNode.id = id;

    // add the new node to the map
    treeNodes[ newTreeNode.id ] = newTreeNode;


    if ( parentTreeNode ) {
      // if a parent was given add the new node as a child node
      parentTreeNode.iconClass = undefined;
      parentTreeNode.children.push( newTreeNode );


      parentTreeNode.childrenCount = parentTreeNode.children.length;

      if ( newTreeNode.childrenCount === 0 ) {
        newTreeNode.childrenCount = Math.round( Math.random() );
      }


      if ( newTreeNode.childrenCount ) {
        newTreeNode.iconClass = undefined;
      }

      sortChildren( parentTreeNode.children );

      newTreeNode.parentId = parentTreeNode.id;
    } else {

      // if no parent is given replace the current root node with this node
      $scope.treeData = newTreeNode;
      $scope.treeData.unCollapsible = true;
      newTreeNode.parentId = null;
    }

    return newTreeNode;
  };

  removeNode = function ( id ) {
    var
      parentNode,
      nodeToDelete = treeNodes[ id ];

    $log.debug( 'Removing a node ' + id );

    if ( nodeToDelete ) {
      if ( nodeToDelete.parentId !== null && treeNodes[ nodeToDelete.parentId ] !== undefined ) {
        // find parent node
        parentNode = treeNodes[ nodeToDelete.parentId ];

        // remove nodeToDelete from parent node's children
        parentNode.children = parentNode.children.filter( function ( el ) {
          return el.id !== id;
        } );

        parentNode.childrenCount = parentNode.children.length;

        if ( parentNode.childrenCount === 0 ) {
          parentNode.iconClass = 'fa fa-file-o';
        }
      }

      delete treeNodes[ id ];
    }

  };

  sortChildren = function ( values ) {
    var orderBy = ['label', 'id'];

    values.sort( function ( a, b ) {
      var i,
        key,
        result;

      for ( i = 0; i < orderBy.length; i += 1 ) {
        key = orderBy[i];
        if ( a.hasOwnProperty( key ) && b.hasOwnProperty( key ) ) {
          result = a[key].toLowerCase().localeCompare( b[key].toLowerCase() );
          if ( result !== 0 ) {
            return result;
          }
        }
      }

      // a must be equal to b
      return 0;
    } );

    return values;
  };

  config = {

    scopeMenu: [
      {
        items: [
          {
            id: 'project',
            label: 'Project Hierarchy',
            action: function () {
              $scope.state.activeScope = 'project';
              $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 0 ];
            }
          },
          {
            id: 'composition',
            label: 'Composition',
            action: function () {
              $scope.state.activeScope = 'composition';
              $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 1 ];
            }
          }
        ]
      }

    ],

    scopeMenuConfig: {
      triggerEvent: 'click',
      position: 'left bottom'
    },

    preferencesMenuConfig: {
      triggerEvent: 'click',
      position: 'right bottom'
    },

    selectedScope: null,

    preferencesMenu: [
      {
        items: [
          {
            id: 'preferences 1',
            label: 'Preferences 1'
          },

          {
            id: 'preferences 2',
            label: 'Preferences 2'
          },

          {
            id: 'preferences 3',
            label: 'Preferences 3',
            menu: [
              {
                items: [
                  {
                    id: 'sub_preferences 1',
                    label: 'Sub preferences 1'
                  },
                  {
                    id: 'sub_preferences 2',
                    label: 'Sub preferences 2',
                    action: function ( data ) {
                      $log.log( data );
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    collapsedIconClass: 'icon-arrow-right',
    expandedIconClass: 'icon-arrow-down',
    showRootLabel: true,

    // Tree Event callbacks

    nodeClick: function(e, node) {
      console.log('Node was clicked:', node);
    },

    nodeDblclick: function(e, node) {
      console.log('Node was double-clicked:', node);
    },

    nodeContextmenuRenderer: function(e, node) {
      console.log('Contextmenu was triggered for node:', node);

      return getNodeContextmenu(node);

    },

    nodeExpanderClick: function(e, node, isExpand) {
      console.log('Expander was clicked for node:', node, isExpand);
    },

    loadChildren: function(e, node) {
      var deferred = $q.defer();

      setTimeout(
      function () {
        dummyTreeDataGenerator( node, 'Async ' + node.id, 5, 0 );
        deferred.resolve();
      },
      2000
      );

      return deferred.promise;
    }


  };

  $scope.config = config;
  $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 0 ];
  $scope.treeData = {};
  $scope.config.state = {
    // id of activeNode
    activeNode: 'Node item 0.0',

    // ids of selected nodes
    selectedNodes: ['Node item 0.0'],

    expandedNodes: [ 'Node item 0', 'Node item 0.1'],

    // id of active scope
    activeScope: 'project'
  };


  addNode( null, 'ROOT' );
  dummyTreeDataGenerator( $scope.treeData, 'Node item ', 5, 3 );

} );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../library/treeNavigator/docs/demo.js","/../library/treeNavigator/docs")
},{"buffer":3,"rH1JPG":6}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


//
// Showdown namespace
//
var Showdown = { extensions: {} };

//
// forEach
//
var forEach = Showdown.forEach = function(obj, callback) {
	if (typeof obj.forEach === 'function') {
		obj.forEach(callback);
	} else {
		var i, len = obj.length;
		for (i = 0; i < len; i++) {
			callback(obj[i], i, obj);
		}
	}
};

//
// Standard extension naming
//
var stdExtName = function(s) {
	return s.replace(/[_-]||\s/g, '').toLowerCase();
};

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Showdown.converter = function(converter_options) {

//
// Globals:
//

// Global hashes, used by various utility routines
var g_urls;
var g_titles;
var g_html_blocks;

// Used to track when we're inside an ordered or unordered list
// (see _ProcessListItems() for details):
var g_list_level = 0;

// Global extensions
var g_lang_extensions = [];
var g_output_modifiers = [];


//
// Automatic Extension Loading (node only):
//

/*if (typeof module !== 'undefind' && typeof exports !== 'undefined' && typeof require !== 'undefind') {
	var fs = require('fs');

	if (fs) {
		// Search extensions folder
		var extensions = fs.readdirSync((__dirname || '.')+'/extensions').filter(function(file){
			return ~file.indexOf('.js');
		}).map(function(file){
			return file.replace(/\.js$/, '');
		});
		// Load extensions into Showdown namespace
		Showdown.forEach(extensions, function(ext){
			var name = stdExtName(ext);
			Showdown.extensions[name] = require('./extensions/' + ext);
		});
	}
}*/

this.makeHtml = function(text) {
//
// Main function. The order in which other subs are called here is
// essential. Link and image substitutions need to happen before
// _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
// and <img> tags get encoded.
//

	// Clear the global hashes. If we don't clear these, you get conflicts
	// from other articles when generating a page which contains more than
	// one article (e.g. an index page that shows the N most recent
	// articles):
	g_urls = {};
	g_titles = {};
	g_html_blocks = [];

	// attacklab: Replace ~ with ~T
	// This lets us use tilde as an escape char to avoid md5 hashes
	// The choice of character is arbitray; anything that isn't
	// magic in Markdown will work.
	text = text.replace(/~/g,"~T");

	// attacklab: Replace $ with ~D
	// RegExp interprets $ as a special character
	// when it's in a replacement string
	text = text.replace(/\$/g,"~D");

	// Standardize line endings
	text = text.replace(/\r\n/g,"\n"); // DOS to Unix
	text = text.replace(/\r/g,"\n"); // Mac to Unix

	// Make sure text begins and ends with a couple of newlines:
	text = "\n\n" + text + "\n\n";

	// Convert all tabs to spaces.
	text = _Detab(text);

	// Strip any lines consisting only of spaces and tabs.
	// This makes subsequent regexen easier to write, because we can
	// match consecutive blank lines with /\n+/ instead of something
	// contorted like /[ \t]*\n+/ .
	text = text.replace(/^[ \t]+$/mg,"");

	// Run language extensions
	Showdown.forEach(g_lang_extensions, function(x){
		text = _ExecuteExtension(x, text);
	});

	// Handle github codeblocks prior to running HashHTML so that
	// HTML contained within the codeblock gets escaped propertly
	text = _DoGithubCodeBlocks(text);

	// Turn block-level HTML blocks into hash entries
	text = _HashHTMLBlocks(text);

	// Strip link definitions, store in hashes.
	text = _StripLinkDefinitions(text);

	text = _RunBlockGamut(text);

	text = _UnescapeSpecialChars(text);

	// attacklab: Restore dollar signs
	text = text.replace(/~D/g,"$$");

	// attacklab: Restore tildes
	text = text.replace(/~T/g,"~");

	// Run output modifiers
	Showdown.forEach(g_output_modifiers, function(x){
		text = _ExecuteExtension(x, text);
	});

	return text;
};
//
// Options:
//

// Parse extensions options into separate arrays
if (converter_options && converter_options.extensions) {

  var self = this;

	// Iterate over each plugin
	Showdown.forEach(converter_options.extensions, function(plugin){

		// Assume it's a bundled plugin if a string is given
		if (typeof plugin === 'string') {
			plugin = Showdown.extensions[stdExtName(plugin)];
		}

		if (typeof plugin === 'function') {
			// Iterate over each extension within that plugin
			Showdown.forEach(plugin(self), function(ext){
				// Sort extensions by type
				if (ext.type) {
					if (ext.type === 'language' || ext.type === 'lang') {
						g_lang_extensions.push(ext);
					} else if (ext.type === 'output' || ext.type === 'html') {
						g_output_modifiers.push(ext);
					}
				} else {
					// Assume language extension
					g_output_modifiers.push(ext);
				}
			});
		} else {
			throw "Extension '" + plugin + "' could not be loaded.  It was either not found or is not a valid extension.";
		}
	});
}


var _ExecuteExtension = function(ext, text) {
	if (ext.regex) {
		var re = new RegExp(ext.regex, 'g');
		return text.replace(re, ext.replace);
	} else if (ext.filter) {
		return ext.filter(text);
	}
};

var _StripLinkDefinitions = function(text) {
//
// Strips link definitions from text, stores the URLs and titles in
// hash references.
//

	// Link defs are in the form: ^[id]: url "optional title"

	/*
		var text = text.replace(/
				^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
				  [ \t]*
				  \n?				// maybe *one* newline
				  [ \t]*
				<?(\S+?)>?			// url = $2
				  [ \t]*
				  \n?				// maybe one newline
				  [ \t]*
				(?:
				  (\n*)				// any lines skipped = $3 attacklab: lookbehind removed
				  ["(]
				  (.+?)				// title = $4
				  [")]
				  [ \t]*
				)?					// title is optional
				(?:\n+|$)
			  /gm,
			  function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,
		function (wholeMatch,m1,m2,m3,m4) {
			m1 = m1.toLowerCase();
			g_urls[m1] = _EncodeAmpsAndAngles(m2);  // Link IDs are case-insensitive
			if (m3) {
				// Oops, found blank lines, so it's not a title.
				// Put back the parenthetical statement we stole.
				return m3+m4;
			} else if (m4) {
				g_titles[m1] = m4.replace(/"/g,"&quot;");
			}

			// Completely remove the definition from the text
			return "";
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}


var _HashHTMLBlocks = function(text) {
	// attacklab: Double up blank lines to reduce lookaround
	text = text.replace(/\n/g,"\n\n");

	// Hashify HTML blocks:
	// We only want to do this for block-level HTML tags, such as headers,
	// lists, and tables. That's because we still want to wrap <p>s around
	// "paragraphs" that are wrapped in non-block-level tags, such as anchors,
	// phrase emphasis, and spans. The list of tags we're looking for is
	// hard-coded:
	var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
	var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";

	// First, look for nested blocks, e.g.:
	//   <div>
	//     <div>
	//     tags for inner block must be indented.
	//     </div>
	//   </div>
	//
	// The outermost tags must start at the left margin for this to match, and
	// the inner nested divs must be indented.
	// We need to do this before the next, more liberal match, because the next
	// match will start at the first `<div>` and stop at the first `</div>`.

	// attacklab: This regex can be expensive when it fails.
	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_a)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?\n			// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,hashElement);

	//
	// Now match more liberally, simply from `\n<tag>` to `</tag>\n`
	//

	/*
		var text = text.replace(/
		(						// save in $1
			^					// start of line  (with /m)
			<($block_tags_b)	// start tag = $2
			\b					// word break
								// attacklab: hack around khtml/pcre bug...
			[^\r]*?				// any number of lines, minimally matching
			</\2>				// the matching end tag
			[ \t]*				// trailing spaces/tabs
			(?=\n+)				// followed by a newline
		)						// attacklab: there are sentinel newlines at end of document
		/gm,function(){...}};
	*/
	text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,hashElement);

	// Special case just for <hr />. It was easier to make a special case than
	// to make the other regex more complicated.

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}
			(<(hr)				// start tag = $2
			\b					// word break
			([^<>])*?			//
			\/?>)				// the matching end tag
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,hashElement);

	// Special case for standalone HTML comments:

	/*
		text = text.replace(/
		(						// save in $1
			\n\n				// Starting after a blank line
			[ ]{0,3}			// attacklab: g_tab_width - 1
			<!
			(--[^\r]*?--\s*)+
			>
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,hashElement);

	// PHP and ASP-style processor instructions (<?...?> and <%...%>)

	/*
		text = text.replace(/
		(?:
			\n\n				// Starting after a blank line
		)
		(						// save in $1
			[ ]{0,3}			// attacklab: g_tab_width - 1
			(?:
				<([?%])			// $2
				[^\r]*?
				\2>
			)
			[ \t]*
			(?=\n{2,})			// followed by a blank line
		)
		/g,hashElement);
	*/
	text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,hashElement);

	// attacklab: Undo double lines (see comment at top of this function)
	text = text.replace(/\n\n/g,"\n");
	return text;
}

var hashElement = function(wholeMatch,m1) {
	var blockText = m1;

	// Undo double lines
	blockText = blockText.replace(/\n\n/g,"\n");
	blockText = blockText.replace(/^\n/,"");

	// strip trailing blank lines
	blockText = blockText.replace(/\n+$/g,"");

	// Replace the element text with a marker ("~KxK" where x is its key)
	blockText = "\n\n~K" + (g_html_blocks.push(blockText)-1) + "K\n\n";

	return blockText;
};

var _RunBlockGamut = function(text) {
//
// These are all the transformations that form block-level
// tags like paragraphs, headers, and list items.
//
	text = _DoHeaders(text);

	// Do Horizontal Rules:
	var key = hashBlock("<hr />");
	text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,key);
	text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,key);

	text = _DoLists(text);
	text = _DoCodeBlocks(text);
	text = _DoBlockQuotes(text);

	// We already ran _HashHTMLBlocks() before, in Markdown(), but that
	// was to escape raw HTML in the original Markdown source. This time,
	// we're escaping the markup we've just created, so that we don't wrap
	// <p> tags around block-level tags.
	text = _HashHTMLBlocks(text);
	text = _FormParagraphs(text);

	return text;
};


var _RunSpanGamut = function(text) {
//
// These are all the transformations that occur *within* block-level
// tags like paragraphs, headers, and list items.
//

	text = _DoCodeSpans(text);
	text = _EscapeSpecialCharsWithinTagAttributes(text);
	text = _EncodeBackslashEscapes(text);

	// Process anchor and image tags. Images must come first,
	// because ![foo][f] looks like an anchor.
	text = _DoImages(text);
	text = _DoAnchors(text);

	// Make links out of things like `<http://example.com/>`
	// Must come after _DoAnchors(), because you can use < and >
	// delimiters in inline links like [this](<url>).
	text = _DoAutoLinks(text);
	text = _EncodeAmpsAndAngles(text);
	text = _DoItalicsAndBold(text);

	// Do hard breaks:
	text = text.replace(/  +\n/g," <br />\n");

	return text;
}

var _EscapeSpecialCharsWithinTagAttributes = function(text) {
//
// Within tags -- meaning between < and > -- encode [\ ` * _] so they
// don't conflict with their use in Markdown for code, italics and strong.
//

	// Build a regex to find HTML tags and comments.  See Friedl's
	// "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

	text = text.replace(regex, function(wholeMatch) {
		var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g,"$1`");
		tag = escapeCharacters(tag,"\\`*_");
		return tag;
	});

	return text;
}

var _DoAnchors = function(text) {
//
// Turn Markdown link shortcuts into XHTML <a> tags.
//
	//
	// First, handle reference-style links: [link text] [id]
	//

	/*
		text = text.replace(/
		(							// wrap whole match in $1
			\[
			(
				(?:
					\[[^\]]*\]		// allow brackets nested one level
					|
					[^\[]			// or anything else
				)*
			)
			\]

			[ ]?					// one optional space
			(?:\n[ ]*)?				// one optional newline followed by spaces

			\[
			(.*?)					// id = $3
			\]
		)()()()()					// pad remaining backreferences
		/g,_DoAnchors_callback);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeAnchorTag);

	//
	// Next, inline-style links: [link text](url "optional title")
	//

	/*
		text = text.replace(/
			(						// wrap whole match in $1
				\[
				(
					(?:
						\[[^\]]*\]	// allow brackets nested one level
					|
					[^\[\]]			// or anything else
				)
			)
			\]
			\(						// literal paren
			[ \t]*
			()						// no id, so leave $3 empty
			<?(.*?)>?				// href = $4
			[ \t]*
			(						// $5
				(['"])				// quote char = $6
				(.*?)				// Title = $7
				\6					// matching quote
				[ \t]*				// ignore any spaces/tabs between closing quote and )
			)?						// title is optional
			\)
		)
		/g,writeAnchorTag);
	*/
	text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeAnchorTag);

	//
	// Last, handle reference-style shortcuts: [link text]
	// These must come last in case you've also got [link test][1]
	// or [link test](/foo)
	//

	/*
		text = text.replace(/
		(		 					// wrap whole match in $1
			\[
			([^\[\]]+)				// link text = $2; can't contain '[' or ']'
			\]
		)()()()()()					// pad rest of backreferences
		/g, writeAnchorTag);
	*/
	text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

	return text;
}

var writeAnchorTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	if (m7 == undefined) m7 = "";
	var whole_match = m1;
	var link_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = link_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;

		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			if (whole_match.search(/\(\s*\)$/m)>-1) {
				// Special case for explicit empty url
				url = "";
			} else {
				return whole_match;
			}
		}
	}

	url = escapeCharacters(url,"*_");
	var result = "<a href=\"" + url + "\"";

	if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	}

	result += ">" + link_text + "</a>";

	return result;
}


var _DoImages = function(text) {
//
// Turn Markdown image shortcuts into <img> tags.
//

	//
	// First, handle reference-style labeled images: ![alt text][id]
	//

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]

			[ ]?				// one optional space
			(?:\n[ ]*)?			// one optional newline followed by spaces

			\[
			(.*?)				// id = $3
			\]
		)()()()()				// pad rest of backreferences
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,writeImageTag);

	//
	// Next, handle inline images:  ![alt text](url "optional title")
	// Don't forget: encode * and _

	/*
		text = text.replace(/
		(						// wrap whole match in $1
			!\[
			(.*?)				// alt text = $2
			\]
			\s?					// One optional whitespace character
			\(					// literal paren
			[ \t]*
			()					// no id, so leave $3 empty
			<?(\S+?)>?			// src url = $4
			[ \t]*
			(					// $5
				(['"])			// quote char = $6
				(.*?)			// title = $7
				\6				// matching quote
				[ \t]*
			)?					// title is optional
		\)
		)
		/g,writeImageTag);
	*/
	text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,writeImageTag);

	return text;
}

var writeImageTag = function(wholeMatch,m1,m2,m3,m4,m5,m6,m7) {
	var whole_match = m1;
	var alt_text   = m2;
	var link_id	 = m3.toLowerCase();
	var url		= m4;
	var title	= m7;

	if (!title) title = "";

	if (url == "") {
		if (link_id == "") {
			// lower-case and turn embedded newlines into spaces
			link_id = alt_text.toLowerCase().replace(/ ?\n/g," ");
		}
		url = "#"+link_id;

		if (g_urls[link_id] != undefined) {
			url = g_urls[link_id];
			if (g_titles[link_id] != undefined) {
				title = g_titles[link_id];
			}
		}
		else {
			return whole_match;
		}
	}

	alt_text = alt_text.replace(/"/g,"&quot;");
	url = escapeCharacters(url,"*_");
	var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

	// attacklab: Markdown.pl adds empty title attributes to images.
	// Replicate this bug.

	//if (title != "") {
		title = title.replace(/"/g,"&quot;");
		title = escapeCharacters(title,"*_");
		result +=  " title=\"" + title + "\"";
	//}

	result += " />";

	return result;
}


var _DoHeaders = function(text) {

	// Setext-style headers:
	//	Header 1
	//	========
	//
	//	Header 2
	//	--------
	//
	text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
		function(wholeMatch,m1){return hashBlock('<h1 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h1>");});

	text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
		function(matchFound,m1){return hashBlock('<h2 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h2>");});

	// atx-style headers:
	//  # Header 1
	//  ## Header 2
	//  ## Header 2 with closing hashes ##
	//  ...
	//  ###### Header 6
	//

	/*
		text = text.replace(/
			^(\#{1,6})				// $1 = string of #'s
			[ \t]*
			(.+?)					// $2 = Header text
			[ \t]*
			\#*						// optional closing #'s (not counted)
			\n+
		/gm, function() {...});
	*/

	text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
		function(wholeMatch,m1,m2) {
			var h_level = m1.length;
			return hashBlock("<h" + h_level + ' id="' + headerId(m2) + '">' + _RunSpanGamut(m2) + "</h" + h_level + ">");
		});

	function headerId(m) {
		return m.replace(/[^\w]/g, '').toLowerCase();
	}
	return text;
}

// This declaration keeps Dojo compressor from outputting garbage:
var _ProcessListItems;

var _DoLists = function(text) {
//
// Form HTML ordered (numbered) and unordered (bulleted) lists.
//

	// attacklab: add sentinel to hack around khtml/safari bug:
	// http://bugs.webkit.org/show_bug.cgi?id=11231
	text += "~0";

	// Re-usable pattern to match any entirel ul or ol list:

	/*
		var whole_list = /
		(									// $1 = whole list
			(								// $2
				[ ]{0,3}					// attacklab: g_tab_width - 1
				([*+-]|\d+[.])				// $3 = first list item marker
				[ \t]+
			)
			[^\r]+?
			(								// $4
				~0							// sentinel for workaround; should be $
			|
				\n{2,}
				(?=\S)
				(?!							// Negative lookahead for another list item marker
					[ \t]*
					(?:[*+-]|\d+[.])[ \t]+
				)
			)
		)/g
	*/
	var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

	if (g_list_level) {
		text = text.replace(whole_list,function(wholeMatch,m1,m2) {
			var list = m1;
			var list_type = (m2.search(/[*+-]/g)>-1) ? "ul" : "ol";

			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);

			// Trim any trailing whitespace, to put the closing `</$list_type>`
			// up on the preceding line, to get it past the current stupid
			// HTML block parser. This is a hack to work around the terrible
			// hack that is the HTML block parser.
			result = result.replace(/\s+$/,"");
			result = "<"+list_type+">" + result + "</"+list_type+">\n";
			return result;
		});
	} else {
		whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
		text = text.replace(whole_list,function(wholeMatch,m1,m2,m3) {
			var runup = m1;
			var list = m2;

			var list_type = (m3.search(/[*+-]/g)>-1) ? "ul" : "ol";
			// Turn double returns into triple returns, so that we can make a
			// paragraph for the last item in a list, if necessary:
			var list = list.replace(/\n{2,}/g,"\n\n\n");;
			var result = _ProcessListItems(list);
			result = runup + "<"+list_type+">\n" + result + "</"+list_type+">\n";
			return result;
		});
	}

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

_ProcessListItems = function(list_str) {
//
//  Process the contents of a single ordered or unordered list, splitting it
//  into individual list items.
//
	// The $g_list_level global keeps track of when we're inside a list.
	// Each time we enter a list, we increment it; when we leave a list,
	// we decrement. If it's zero, we're not in a list anymore.
	//
	// We do this because when we're not inside a list, we want to treat
	// something like this:
	//
	//    I recommend upgrading to version
	//    8. Oops, now this line is treated
	//    as a sub-list.
	//
	// As a single paragraph, despite the fact that the second line starts
	// with a digit-period-space sequence.
	//
	// Whereas when we're inside a list (or sub-list), that line will be
	// treated as the start of a sub-list. What a kludge, huh? This is
	// an aspect of Markdown's syntax that's hard to parse perfectly
	// without resorting to mind-reading. Perhaps the solution is to
	// change the syntax rules such that sub-lists must start with a
	// starting cardinal number; e.g. "1." or "a.".

	g_list_level++;

	// trim trailing blank lines:
	list_str = list_str.replace(/\n{2,}$/,"\n");

	// attacklab: add sentinel to emulate \z
	list_str += "~0";

	/*
		list_str = list_str.replace(/
			(\n)?							// leading line = $1
			(^[ \t]*)						// leading whitespace = $2
			([*+-]|\d+[.]) [ \t]+			// list marker = $3
			([^\r]+?						// list item text   = $4
			(\n{1,2}))
			(?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
		/gm, function(){...});
	*/
	list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
		function(wholeMatch,m1,m2,m3,m4){
			var item = m4;
			var leading_line = m1;
			var leading_space = m2;

			if (leading_line || (item.search(/\n{2,}/)>-1)) {
				item = _RunBlockGamut(_Outdent(item));
			}
			else {
				// Recursion for sub-lists:
				item = _DoLists(_Outdent(item));
				item = item.replace(/\n$/,""); // chomp(item)
				item = _RunSpanGamut(item);
			}

			return  "<li>" + item + "</li>\n";
		}
	);

	// attacklab: strip sentinel
	list_str = list_str.replace(/~0/g,"");

	g_list_level--;
	return list_str;
}


var _DoCodeBlocks = function(text) {
//
//  Process Markdown `<pre><code>` blocks.
//

	/*
		text = text.replace(text,
			/(?:\n\n|^)
			(								// $1 = the code block -- one or more lines, starting with a space/tab
				(?:
					(?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
					.*\n+
				)+
			)
			(\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
		/g,function(){...});
	*/

	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,
		function(wholeMatch,m1,m2) {
			var codeblock = m1;
			var nextChar = m2;

			codeblock = _EncodeCode( _Outdent(codeblock));
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock) + nextChar;
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
};

var _DoGithubCodeBlocks = function(text) {
//
//  Process Github-style code blocks
//  Example:
//  ```ruby
//  def hello_world(x)
//    puts "Hello, #{x}"
//  end
//  ```
//


	// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	text += "~0";

	text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,
		function(wholeMatch,m1,m2) {
			var language = m1;
			var codeblock = m2;

			codeblock = _EncodeCode(codeblock);
			codeblock = _Detab(codeblock);
			codeblock = codeblock.replace(/^\n+/g,""); // trim leading newlines
			codeblock = codeblock.replace(/\n+$/g,""); // trim trailing whitespace

			codeblock = "<pre><code" + (language ? " class=\"" + language + '"' : "") + ">" + codeblock + "\n</code></pre>";

			return hashBlock(codeblock);
		}
	);

	// attacklab: strip sentinel
	text = text.replace(/~0/,"");

	return text;
}

var hashBlock = function(text) {
	text = text.replace(/(^\n+|\n+$)/g,"");
	return "\n\n~K" + (g_html_blocks.push(text)-1) + "K\n\n";
}

var _DoCodeSpans = function(text) {
//
//   *  Backtick quotes are used for <code></code> spans.
//
//   *  You can use multiple backticks as the delimiters if you want to
//	 include literal backticks in the code span. So, this input:
//
//		 Just type ``foo `bar` baz`` at the prompt.
//
//	   Will translate to:
//
//		 <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
//
//	There's no arbitrary limit to the number of backticks you
//	can use as delimters. If you need three consecutive backticks
//	in your code, use four for delimiters, etc.
//
//  *  You can use spaces to get literal backticks at the edges:
//
//		 ... type `` `bar` `` ...
//
//	   Turns to:
//
//		 ... type <code>`bar`</code> ...
//

	/*
		text = text.replace(/
			(^|[^\\])					// Character before opening ` can't be a backslash
			(`+)						// $2 = Opening run of `
			(							// $3 = The code block
				[^\r]*?
				[^`]					// attacklab: work around lack of lookbehind
			)
			\2							// Matching closer
			(?!`)
		/gm, function(){...});
	*/

	text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
		function(wholeMatch,m1,m2,m3,m4) {
			var c = m3;
			c = c.replace(/^([ \t]*)/g,"");	// leading whitespace
			c = c.replace(/[ \t]*$/g,"");	// trailing whitespace
			c = _EncodeCode(c);
			return m1+"<code>"+c+"</code>";
		});

	return text;
}

var _EncodeCode = function(text) {
//
// Encode/escape certain characters inside Markdown code runs.
// The point is that in code, these characters are literals,
// and lose their special Markdown meanings.
//
	// Encode all ampersands; HTML entities are not
	// entities within a Markdown code span.
	text = text.replace(/&/g,"&amp;");

	// Do the angle bracket song and dance:
	text = text.replace(/</g,"&lt;");
	text = text.replace(/>/g,"&gt;");

	// Now, escape characters that are magic in Markdown:
	text = escapeCharacters(text,"\*_{}[]\\",false);

// jj the line above breaks this:
//---

//* Item

//   1. Subitem

//            special char: *
//---

	return text;
}


var _DoItalicsAndBold = function(text) {

	// <strong> must go first:
	text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,
		"<strong>$2</strong>");

	text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,
		"<em>$2</em>");

	return text;
}


var _DoBlockQuotes = function(text) {

	/*
		text = text.replace(/
		(								// Wrap whole match in $1
			(
				^[ \t]*>[ \t]?			// '>' at the start of a line
				.+\n					// rest of the first line
				(.+\n)*					// subsequent consecutive lines
				\n*						// blanks
			)+
		)
		/gm, function(){...});
	*/

	text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
		function(wholeMatch,m1) {
			var bq = m1;

			// attacklab: hack around Konqueror 3.5.4 bug:
			// "----------bug".replace(/^-/g,"") == "bug"

			bq = bq.replace(/^[ \t]*>[ \t]?/gm,"~0");	// trim one level of quoting

			// attacklab: clean up hack
			bq = bq.replace(/~0/g,"");

			bq = bq.replace(/^[ \t]+$/gm,"");		// trim whitespace-only lines
			bq = _RunBlockGamut(bq);				// recurse

			bq = bq.replace(/(^|\n)/g,"$1  ");
			// These leading spaces screw with <pre> content, so we need to fix that:
			bq = bq.replace(
					/(\s*<pre>[^\r]+?<\/pre>)/gm,
				function(wholeMatch,m1) {
					var pre = m1;
					// attacklab: hack around Konqueror 3.5.4 bug:
					pre = pre.replace(/^  /mg,"~0");
					pre = pre.replace(/~0/g,"");
					return pre;
				});

			return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
		});
	return text;
}


var _FormParagraphs = function(text) {
//
//  Params:
//    $text - string to process with html <p> tags
//

	// Strip leading and trailing lines:
	text = text.replace(/^\n+/g,"");
	text = text.replace(/\n+$/g,"");

	var grafs = text.split(/\n{2,}/g);
	var grafsOut = [];

	//
	// Wrap <p> tags.
	//
	var end = grafs.length;
	for (var i=0; i<end; i++) {
		var str = grafs[i];

		// if this is an HTML marker, copy it
		if (str.search(/~K(\d+)K/g) >= 0) {
			grafsOut.push(str);
		}
		else if (str.search(/\S/) >= 0) {
			str = _RunSpanGamut(str);
			str = str.replace(/^([ \t]*)/g,"<p>");
			str += "</p>"
			grafsOut.push(str);
		}

	}

	//
	// Unhashify HTML blocks
	//
	end = grafsOut.length;
	for (var i=0; i<end; i++) {
		// if this is a marker for an html block...
		while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
			var blockText = g_html_blocks[RegExp.$1];
			blockText = blockText.replace(/\$/g,"$$$$"); // Escape any dollar signs
			grafsOut[i] = grafsOut[i].replace(/~K\d+K/,blockText);
		}
	}

	return grafsOut.join("\n\n");
}


var _EncodeAmpsAndAngles = function(text) {
// Smart processing for ampersands and angle brackets that need to be encoded.

	// Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	//   http://bumppo.net/projects/amputator/
	text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");

	// Encode naked <'s
	text = text.replace(/<(?![a-z\/?\$!])/gi,"&lt;");

	return text;
}


var _EncodeBackslashEscapes = function(text) {
//
//   Parameter:  String.
//   Returns:	The string, with after processing the following backslash
//			   escape sequences.
//

	// attacklab: The polite way to do this is with the new
	// escapeCharacters() function:
	//
	// 	text = escapeCharacters(text,"\\",true);
	// 	text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	//
	// ...but we're sidestepping its use of the (slow) RegExp constructor
	// as an optimization for Firefox.  This function gets called a LOT.

	text = text.replace(/\\(\\)/g,escapeCharacters_callback);
	text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g,escapeCharacters_callback);
	return text;
}


var _DoAutoLinks = function(text) {

	text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,"<a href=\"$1\">$1</a>");

	// Email addresses: <address@domain.foo>

	/*
		text = text.replace(/
			<
			(?:mailto:)?
			(
				[-.\w]+
				\@
				[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
			)
			>
		/gi, _DoAutoLinks_callback());
	*/
	text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
		function(wholeMatch,m1) {
			return _EncodeEmailAddress( _UnescapeSpecialChars(m1) );
		}
	);

	return text;
}


var _EncodeEmailAddress = function(addr) {
//
//  Input: an email address, e.g. "foo@example.com"
//
//  Output: the email address as a mailto link, with each character
//	of the address encoded as either a decimal or hex entity, in
//	the hopes of foiling most address harvesting spam bots. E.g.:
//
//	<a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
//	   x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
//	   &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
//
//  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
//  mailing list: <http://tinyurl.com/yu7ue>
//

	var encode = [
		function(ch){return "&#"+ch.charCodeAt(0)+";";},
		function(ch){return "&#x"+ch.charCodeAt(0).toString(16)+";";},
		function(ch){return ch;}
	];

	addr = "mailto:" + addr;

	addr = addr.replace(/./g, function(ch) {
		if (ch == "@") {
		   	// this *must* be encoded. I insist.
			ch = encode[Math.floor(Math.random()*2)](ch);
		} else if (ch !=":") {
			// leave ':' alone (to spot mailto: later)
			var r = Math.random();
			// roughly 10% raw, 45% hex, 45% dec
			ch =  (
					r > .9  ?	encode[2](ch)   :
					r > .45 ?	encode[1](ch)   :
								encode[0](ch)
				);
		}
		return ch;
	});

	addr = "<a href=\"" + addr + "\">" + addr + "</a>";
	addr = addr.replace(/">.+:/g,"\">"); // strip the mailto: from the visible part

	return addr;
}


var _UnescapeSpecialChars = function(text) {
//
// Swap back in all the special characters we've hidden.
//
	text = text.replace(/~E(\d+)E/g,
		function(wholeMatch,m1) {
			var charCodeToReplace = parseInt(m1);
			return String.fromCharCode(charCodeToReplace);
		}
	);
	return text;
}


var _Outdent = function(text) {
//
// Remove one level of line-leading tabs or spaces
//

	// attacklab: hack around Konqueror 3.5.4 bug:
	// "----------bug".replace(/^-/g,"") == "bug"

	text = text.replace(/^(\t|[ ]{1,4})/gm,"~0"); // attacklab: g_tab_width

	// attacklab: clean up hack
	text = text.replace(/~0/g,"")

	return text;
}

var _Detab = function(text) {
// attacklab: Detab's completely rewritten for speed.
// In perl we could fix it by anchoring the regexp with \G.
// In javascript we're less fortunate.

	// expand first n-1 tabs
	text = text.replace(/\t(?=\t)/g,"    "); // attacklab: g_tab_width

	// replace the nth with two sentinels
	text = text.replace(/\t/g,"~A~B");

	// use the sentinel to anchor our regex so it doesn't explode
	text = text.replace(/~B(.+?)~A/g,
		function(wholeMatch,m1,m2) {
			var leadingText = m1;
			var numSpaces = 4 - leadingText.length % 4;  // attacklab: g_tab_width

			// there *must* be a better way to do this:
			for (var i=0; i<numSpaces; i++) leadingText+=" ";

			return leadingText;
		}
	);

	// clean up sentinels
	text = text.replace(/~A/g,"    ");  // attacklab: g_tab_width
	text = text.replace(/~B/g,"");

	return text;
}


//
//  attacklab: Utility functions
//


var escapeCharacters = function(text, charsToEscape, afterBackslash) {
	// First we have to escape the escape characters so that
	// we can build a character class out of them
	var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g,"\\$1") + "])";

	if (afterBackslash) {
		regexString = "\\\\" + regexString;
	}

	var regex = new RegExp(regexString,"g");
	text = text.replace(regex,escapeCharacters_callback);

	return text;
}


var escapeCharacters_callback = function(wholeMatch,m1) {
	var charCodeToEscape = m1.charCodeAt(0);
	return "~E"+charCodeToEscape+"E";
}

} // end of Showdown.converter


; browserify_shim__define__module__export__(typeof Showdown != "undefined" ? Showdown : window.Showdown);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../vendor/showdown_for_browserify.js","/../../vendor")
},{"buffer":3,"rH1JPG":6}]},{},[7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9ub2RlX21vZHVsZXMvYW5ndWxhci1tYXJrZG93bi1kaXJlY3RpdmUvbWFya2Rvd24uanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9hbmd1bGFyLXNhbml0aXplL2FuZ3VsYXItc2FuaXRpemUubWluLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2RvY3MvZG9jc19hcHAuanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL3NyYy9saWJyYXJ5L2NvbnRleHRtZW51L2RvY3MvZGVtby5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2xpYnJhcnkvZHJvcGRvd25OYXZpZ2F0b3IvZG9jcy9kZW1vLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9zcmMvbGlicmFyeS9oaWVyYXJjaGljYWxNZW51L2RvY3MvZGVtby5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2xpYnJhcnkvc2ltcGxlRGlhbG9nL2RvY3MvZGVtby5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2xpYnJhcnkvdHJlZU5hdmlnYXRvci9kb2NzL2RlbW8uanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL3ZlbmRvci9zaG93ZG93bl9mb3JfYnJvd3NlcmlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiAqIGFuZ3VsYXItbWFya2Rvd24tZGlyZWN0aXZlIHYwLjMuMFxuICogKGMpIDIwMTMtMjAxNCBCcmlhbiBGb3JkIGh0dHA6Ly9icmlhbnRmb3JkLmNvbVxuICogTGljZW5zZTogTUlUXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYnRmb3JkLm1hcmtkb3duJywgWyduZ1Nhbml0aXplJ10pLlxuICBwcm92aWRlcignbWFya2Rvd25Db252ZXJ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBmdW5jdGlvbiAobmV3T3B0cykge1xuICAgICAgICBvcHRzID0gbmV3T3B0cztcbiAgICAgIH0sXG4gICAgICAkZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2hvd2Rvd24uY29udmVydGVyKG9wdHMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pLlxuICBkaXJlY3RpdmUoJ2J0Zk1hcmtkb3duJywgZnVuY3Rpb24gKCRzYW5pdGl6ZSwgbWFya2Rvd25Db252ZXJ0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRycy5idGZNYXJrZG93bikge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5idGZNYXJrZG93biwgZnVuY3Rpb24gKG5ld1ZhbCkge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBuZXdWYWwgPyAkc2FuaXRpemUobWFya2Rvd25Db252ZXJ0ZXIubWFrZUh0bWwobmV3VmFsKSkgOiAnJztcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbChodG1sKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaHRtbCA9ICRzYW5pdGl6ZShtYXJrZG93bkNvbnZlcnRlci5tYWtlSHRtbChlbGVtZW50LnRleHQoKSkpO1xuICAgICAgICAgIGVsZW1lbnQuaHRtbChodG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLW1hcmtkb3duLWRpcmVjdGl2ZS9tYXJrZG93bi5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLW1hcmtkb3duLWRpcmVjdGl2ZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4gQW5ndWxhckpTIHYxLjIuMTBcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihwLGgscSl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIEUoYSl7dmFyIGU9W107cyhlLGgubm9vcCkuY2hhcnMoYSk7cmV0dXJuIGUuam9pbihcIlwiKX1mdW5jdGlvbiBrKGEpe3ZhciBlPXt9O2E9YS5zcGxpdChcIixcIik7dmFyIGQ7Zm9yKGQ9MDtkPGEubGVuZ3RoO2QrKyllW2FbZF1dPSEwO3JldHVybiBlfWZ1bmN0aW9uIEYoYSxlKXtmdW5jdGlvbiBkKGEsYixkLGcpe2I9aC5sb3dlcmNhc2UoYik7aWYodFtiXSlmb3IoO2YubGFzdCgpJiZ1W2YubGFzdCgpXTspYyhcIlwiLGYubGFzdCgpKTt2W2JdJiZmLmxhc3QoKT09YiYmYyhcIlwiLGIpOyhnPXdbYl18fCEhZyl8fGYucHVzaChiKTt2YXIgbD17fTtkLnJlcGxhY2UoRyxmdW5jdGlvbihhLGIsZSxjLGQpe2xbYl09cihlfHxjfHxkfHxcIlwiKX0pO2Uuc3RhcnQmJmUuc3RhcnQoYixsLGcpfWZ1bmN0aW9uIGMoYSxiKXt2YXIgYz0wLGQ7aWYoYj1oLmxvd2VyY2FzZShiKSlmb3IoYz1mLmxlbmd0aC0xOzA8PWMmJmZbY10hPWI7Yy0tKTtcbmlmKDA8PWMpe2ZvcihkPWYubGVuZ3RoLTE7ZD49YztkLS0pZS5lbmQmJmUuZW5kKGZbZF0pO2YubGVuZ3RoPWN9fXZhciBiLGcsZj1bXSxsPWE7Zm9yKGYubGFzdD1mdW5jdGlvbigpe3JldHVybiBmW2YubGVuZ3RoLTFdfTthOyl7Zz0hMDtpZihmLmxhc3QoKSYmeFtmLmxhc3QoKV0pYT1hLnJlcGxhY2UoUmVnRXhwKFwiKC4qKTxcXFxccypcXFxcL1xcXFxzKlwiK2YubGFzdCgpK1wiW14+XSo+XCIsXCJpXCIpLGZ1bmN0aW9uKGIsYSl7YT1hLnJlcGxhY2UoSCxcIiQxXCIpLnJlcGxhY2UoSSxcIiQxXCIpO2UuY2hhcnMmJmUuY2hhcnMocihhKSk7cmV0dXJuXCJcIn0pLGMoXCJcIixmLmxhc3QoKSk7ZWxzZXtpZigwPT09YS5pbmRleE9mKFwiXFx4M2MhLS1cIikpYj1hLmluZGV4T2YoXCItLVwiLDQpLDA8PWImJmEubGFzdEluZGV4T2YoXCItLVxceDNlXCIsYik9PT1iJiYoZS5jb21tZW50JiZlLmNvbW1lbnQoYS5zdWJzdHJpbmcoNCxiKSksYT1hLnN1YnN0cmluZyhiKzMpLGc9ITEpO2Vsc2UgaWYoeS50ZXN0KGEpKXtpZihiPWEubWF0Y2goeSkpYT1cbmEucmVwbGFjZShiWzBdLFwiXCIpLGc9ITF9ZWxzZSBpZihKLnRlc3QoYSkpe2lmKGI9YS5tYXRjaCh6KSlhPWEuc3Vic3RyaW5nKGJbMF0ubGVuZ3RoKSxiWzBdLnJlcGxhY2UoeixjKSxnPSExfWVsc2UgSy50ZXN0KGEpJiYoYj1hLm1hdGNoKEEpKSYmKGE9YS5zdWJzdHJpbmcoYlswXS5sZW5ndGgpLGJbMF0ucmVwbGFjZShBLGQpLGc9ITEpO2cmJihiPWEuaW5kZXhPZihcIjxcIiksZz0wPmI/YTphLnN1YnN0cmluZygwLGIpLGE9MD5iP1wiXCI6YS5zdWJzdHJpbmcoYiksZS5jaGFycyYmZS5jaGFycyhyKGcpKSl9aWYoYT09bCl0aHJvdyBMKFwiYmFkcGFyc2VcIixhKTtsPWF9YygpfWZ1bmN0aW9uIHIoYSl7aWYoIWEpcmV0dXJuXCJcIjt2YXIgZT1NLmV4ZWMoYSk7YT1lWzFdO3ZhciBkPWVbM107aWYoZT1lWzJdKW4uaW5uZXJIVE1MPWUucmVwbGFjZSgvPC9nLFwiJmx0O1wiKSxlPVwidGV4dENvbnRlbnRcImluIG4/bi50ZXh0Q29udGVudDpuLmlubmVyVGV4dDtyZXR1cm4gYStlK2R9ZnVuY3Rpb24gQihhKXtyZXR1cm4gYS5yZXBsYWNlKC8mL2csXG5cIiZhbXA7XCIpLnJlcGxhY2UoTixmdW5jdGlvbihhKXtyZXR1cm5cIiYjXCIrYS5jaGFyQ29kZUF0KDApK1wiO1wifSkucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpfWZ1bmN0aW9uIHMoYSxlKXt2YXIgZD0hMSxjPWguYmluZChhLGEucHVzaCk7cmV0dXJue3N0YXJ0OmZ1bmN0aW9uKGEsZyxmKXthPWgubG93ZXJjYXNlKGEpOyFkJiZ4W2FdJiYoZD1hKTtkfHwhMCE9PUNbYV18fChjKFwiPFwiKSxjKGEpLGguZm9yRWFjaChnLGZ1bmN0aW9uKGQsZil7dmFyIGc9aC5sb3dlcmNhc2UoZiksaz1cImltZ1wiPT09YSYmXCJzcmNcIj09PWd8fFwiYmFja2dyb3VuZFwiPT09ZzshMCE9PU9bZ118fCEwPT09RFtnXSYmIWUoZCxrKXx8KGMoXCIgXCIpLGMoZiksYygnPVwiJyksYyhCKGQpKSxjKCdcIicpKX0pLGMoZj9cIi8+XCI6XCI+XCIpKX0sZW5kOmZ1bmN0aW9uKGEpe2E9aC5sb3dlcmNhc2UoYSk7ZHx8ITAhPT1DW2FdfHwoYyhcIjwvXCIpLGMoYSksYyhcIj5cIikpO2E9PWQmJihkPSExKX0sY2hhcnM6ZnVuY3Rpb24oYSl7ZHx8XG5jKEIoYSkpfX19dmFyIEw9aC4kJG1pbkVycihcIiRzYW5pdGl6ZVwiKSxBPS9ePFxccyooW1xcdzotXSspKCg/OlxccytbXFx3Oi1dKyg/Olxccyo9XFxzKig/Oig/OlwiW15cIl0qXCIpfCg/OidbXiddKicpfFtePlxcc10rKSk/KSopXFxzKihcXC8/KVxccyo+Lyx6PS9ePFxccypcXC9cXHMqKFtcXHc6LV0rKVtePl0qPi8sRz0vKFtcXHc6LV0rKSg/Olxccyo9XFxzKig/Oig/OlwiKCg/OlteXCJdKSopXCIpfCg/OicoKD86W14nXSkqKScpfChbXj5cXHNdKykpKT8vZyxLPS9ePC8sSj0vXjxcXHMqXFwvLyxIPS9cXHgzYyEtLSguKj8pLS1cXHgzZS9nLHk9LzwhRE9DVFlQRShbXj5dKj8pPi9pLEk9LzwhXFxbQ0RBVEFcXFsoLio/KV1dXFx4M2UvZyxOPS8oW15cXCMtfnwgfCFdKS9nLHc9ayhcImFyZWEsYnIsY29sLGhyLGltZyx3YnJcIik7cD1rKFwiY29sZ3JvdXAsZGQsZHQsbGkscCx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0clwiKTtxPWsoXCJycCxydFwiKTt2YXIgdj1oLmV4dGVuZCh7fSxxLHApLHQ9aC5leHRlbmQoe30scCxrKFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJsb2NrcXVvdGUsY2FwdGlvbixjZW50ZXIsZGVsLGRpcixkaXYsZGwsZmlndXJlLGZpZ2NhcHRpb24sZm9vdGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaW5zLG1hcCxtZW51LG5hdixvbCxwcmUsc2NyaXB0LHNlY3Rpb24sdGFibGUsdWxcIikpLFxudT1oLmV4dGVuZCh7fSxxLGsoXCJhLGFiYnIsYWNyb255bSxiLGJkaSxiZG8sYmlnLGJyLGNpdGUsY29kZSxkZWwsZGZuLGVtLGZvbnQsaSxpbWcsaW5zLGtiZCxsYWJlbCxtYXAsbWFyayxxLHJ1YnkscnAscnQscyxzYW1wLHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRpbWUsdHQsdSx2YXJcIikpLHg9ayhcInNjcmlwdCxzdHlsZVwiKSxDPWguZXh0ZW5kKHt9LHcsdCx1LHYpLEQ9ayhcImJhY2tncm91bmQsY2l0ZSxocmVmLGxvbmdkZXNjLHNyYyx1c2VtYXBcIiksTz1oLmV4dGVuZCh7fSxELGsoXCJhYmJyLGFsaWduLGFsdCxheGlzLGJnY29sb3IsYm9yZGVyLGNlbGxwYWRkaW5nLGNlbGxzcGFjaW5nLGNsYXNzLGNsZWFyLGNvbG9yLGNvbHMsY29sc3Bhbixjb21wYWN0LGNvb3JkcyxkaXIsZmFjZSxoZWFkZXJzLGhlaWdodCxocmVmbGFuZyxoc3BhY2UsaXNtYXAsbGFuZyxsYW5ndWFnZSxub2hyZWYsbm93cmFwLHJlbCxyZXYscm93cyxyb3dzcGFuLHJ1bGVzLHNjb3BlLHNjcm9sbGluZyxzaGFwZSxzaXplLHNwYW4sc3RhcnQsc3VtbWFyeSx0YXJnZXQsdGl0bGUsdHlwZSx2YWxpZ24sdmFsdWUsdnNwYWNlLHdpZHRoXCIpKSxcbm49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKSxNPS9eKFxccyopKFtcXHNcXFNdKj8pKFxccyopJC87aC5tb2R1bGUoXCJuZ1Nhbml0aXplXCIsW10pLnByb3ZpZGVyKFwiJHNhbml0aXplXCIsZnVuY3Rpb24oKXt0aGlzLiRnZXQ9W1wiJCRzYW5pdGl6ZVVyaVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgZD1bXTtGKGUscyhkLGZ1bmN0aW9uKGMsYil7cmV0dXJuIS9edW5zYWZlLy50ZXN0KGEoYyxiKSl9KSk7cmV0dXJuIGQuam9pbihcIlwiKX19XX0pO2gubW9kdWxlKFwibmdTYW5pdGl6ZVwiKS5maWx0ZXIoXCJsaW5reVwiLFtcIiRzYW5pdGl6ZVwiLGZ1bmN0aW9uKGEpe3ZhciBlPS8oKGZ0cHxodHRwcz8pOlxcL1xcL3wobWFpbHRvOik/W0EtWmEtejAtOS5fJSstXStAKVxcUypbXlxccy47LCgpe308Pl0vLGQ9L15tYWlsdG86LztyZXR1cm4gZnVuY3Rpb24oYyxiKXtmdW5jdGlvbiBnKGEpe2EmJm0ucHVzaChFKGEpKX1mdW5jdGlvbiBmKGEsYyl7bS5wdXNoKFwiPGEgXCIpO2guaXNEZWZpbmVkKGIpJiZcbihtLnB1c2goJ3RhcmdldD1cIicpLG0ucHVzaChiKSxtLnB1c2goJ1wiICcpKTttLnB1c2goJ2hyZWY9XCInKTttLnB1c2goYSk7bS5wdXNoKCdcIj4nKTtnKGMpO20ucHVzaChcIjwvYT5cIil9aWYoIWMpcmV0dXJuIGM7Zm9yKHZhciBsLGs9YyxtPVtdLG4scDtsPWsubWF0Y2goZSk7KW49bFswXSxsWzJdPT1sWzNdJiYobj1cIm1haWx0bzpcIituKSxwPWwuaW5kZXgsZyhrLnN1YnN0cigwLHApKSxmKG4sbFswXS5yZXBsYWNlKGQsXCJcIikpLGs9ay5zdWJzdHJpbmcocCtsWzBdLmxlbmd0aCk7ZyhrKTtyZXR1cm4gYShtLmpvaW4oXCJcIikpfX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXNhbml0aXplLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1zYW5pdGl6ZS9hbmd1bGFyLXNhbml0aXplLm1pbi5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLXNhbml0aXplXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKmdsb2JhbHMgYW5ndWxhciwgcmVxdWlyZSovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjb21wb25lbnRzID0gW1xuICAnc2ltcGxlRGlhbG9nJyxcbiAgJ2hpZXJhcmNoaWNhbE1lbnUnLFxuICAnY29udGV4dG1lbnUnLFxuICAnZHJvcGRvd25OYXZpZ2F0b3InLFxuICAndHJlZU5hdmlnYXRvcidcbl07XG5cbnJlcXVpcmUoICcuLi9saWJyYXJ5L3NpbXBsZURpYWxvZy9kb2NzL2RlbW8uanMnICk7XG5yZXF1aXJlKCAnLi4vbGlicmFyeS9oaWVyYXJjaGljYWxNZW51L2RvY3MvZGVtby5qcycgKTtcbnJlcXVpcmUoICcuLi9saWJyYXJ5L2NvbnRleHRtZW51L2RvY3MvZGVtby5qcycgKTtcbnJlcXVpcmUoICcuLi9saWJyYXJ5L2Ryb3Bkb3duTmF2aWdhdG9yL2RvY3MvZGVtby5qcycgKTtcbnJlcXVpcmUoICcuLi9saWJyYXJ5L3RyZWVOYXZpZ2F0b3IvZG9jcy9kZW1vLmpzJyApO1xuXG5yZXF1aXJlKCAnYW5ndWxhci1zYW5pdGl6ZScgKTtcbndpbmRvdy5TaG93ZG93biA9IHJlcXVpcmUoICdzaG93ZG93bicgKTtcbnJlcXVpcmUoICdhbmd1bGFyLW1hcmtkb3duLWRpcmVjdGl2ZScgKTtcblxuXG52YXIgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKFxuICAnaXNpcy51aS5kZW1vQXBwJywgW1xuICAgICdpc2lzLnVpLmRlbW9BcHAudGVtcGxhdGVzJyxcbiAgICAnYnRmb3JkLm1hcmtkb3duJ1xuICBdLmNvbmNhdCggY29tcG9uZW50cy5tYXAoIGZ1bmN0aW9uICggZSApIHtcbiAgICByZXR1cm4gJ2lzaXMudWkuJyArIGUgKyAnLmRlbW8nO1xuICB9ICkgKVxuKTtcblxuZGVtb0FwcC5ydW4oIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coICdEZW1vQXBwIHJ1bi4uLicgKTtcbn0gKTtcblxuZGVtb0FwcC5jb250cm9sbGVyKFxuICAnVUlDb21wb25lbnRzRGVtb0NvbnRyb2xsZXInLFxuICBmdW5jdGlvbiAoICRzY29wZSApIHtcblxuICAgICRzY29wZS5jb21wb25lbnRzID0gY29tcG9uZW50cy5tYXAoIGZ1bmN0aW9uICggY29tcG9uZW50ICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogY29tcG9uZW50LFxuICAgICAgICB0ZW1wbGF0ZTogJy9saWJyYXJ5LycgKyBjb21wb25lbnQgKyAnL2RvY3MvZGVtby5odG1sJyxcbiAgICAgICAgZG9jczogJy9saWJyYXJ5LycgKyBjb21wb25lbnQgKyAnL2RvY3MvcmVhZG1lLm1kJ1xuICAgICAgfTtcbiAgICB9ICk7XG5cbiAgfSApO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kb2NzX2FwcC5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qZ2xvYmFscyBjb25zb2xlLCBhbmd1bGFyKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKCAnaXNpcy51aS5jb250ZXh0bWVudS5kZW1vJywgWyAnaXNpcy51aS5jb250ZXh0bWVudScgXSApO1xuXG5kZW1vQXBwLmNvbnRyb2xsZXIoICdDb250ZXh0bWVudURlbW9Db250cm9sbGVyJywgZnVuY3Rpb24gKCAkc2NvcGUsIGNvbnRleHRtZW51U2VydmljZSApIHtcblxuICB2YXIgbWVudURhdGEgPSBbIHtcbiAgICBpZDogJ3RvcCcsXG4gICAgaXRlbXM6IFsge1xuICAgICAgaWQ6ICduZXdQcm9qZWN0JyxcbiAgICAgIGxhYmVsOiAnTmV3IHByb2plY3QgLi4uJyxcbiAgICAgIGljb25DbGFzczogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdOZXcgcHJvamVjdCBjbGlja2VkJyApO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbkRhdGE6IHt9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbXBvcnRQcm9qZWN0JyxcbiAgICAgIGxhYmVsOiAnSW1wb3J0IHByb2plY3QgLi4uJyxcbiAgICAgIGljb25DbGFzczogJ2dseXBoaWNvbiBnbHlwaGljb24taW1wb3J0JyxcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ0ltcG9ydCBwcm9qZWN0IGNsaWNrZWQnICk7XG4gICAgICB9LFxuICAgICAgYWN0aW9uRGF0YToge31cbiAgICB9IF1cbiAgfSwge1xuICAgIGlkOiAncHJvamVjdHMnLFxuICAgIGxhYmVsOiAnUmVjZW50IHByb2plY3RzJyxcbiAgICB0b3RhbEl0ZW1zOiAyMCxcbiAgICBpdGVtczogW10sXG4gICAgc2hvd0FsbEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyggJ1JlY2VudCBwcm9qZWN0cyBjbGlja2VkJyApO1xuICAgIH1cbiAgfSwge1xuICAgIGlkOiAncHJlZmVyZW5jZXMnLFxuICAgIGxhYmVsOiAncHJlZmVyZW5jZXMnLFxuICAgIGl0ZW1zOiBbIHtcbiAgICAgIGlkOiAnc2hvd1ByZWZlcmVuY2VzJyxcbiAgICAgIGxhYmVsOiAnU2hvdyBwcmVmZXJlbmNlcycsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdTaG93IHByZWZlcmVuY2VzJyApO1xuICAgICAgfSxcbiAgICAgIG1lbnU6IFsge1xuICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAxJyxcbiAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICBtZW51OiBbIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbIHtcbiAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAyJ1xuICAgICAgICAgICAgfSBdXG4gICAgICAgICAgfSBdXG4gICAgICAgIH0gXVxuICAgICAgfSBdXG4gICAgfSBdXG4gIH0gXTtcblxuICAkc2NvcGUubWVudUNvbmZpZzEgPSB7XG4gICAgdHJpZ2dlckV2ZW50OiAnY2xpY2snLFxuICAgIHBvc2l0aW9uOiAncmlnaHQgYm90dG9tJ1xuICB9O1xuXG4gICRzY29wZS5tZW51Q29uZmlnMiA9IHtcbiAgICB0cmlnZ2VyRXZlbnQ6ICdtb3VzZW92ZXInLFxuICAgIHBvc2l0aW9uOiAnbGVmdCBib3R0b20nLFxuICAgIGNvbnRlbnRUZW1wbGF0ZVVybDogJ2NvbnRleHRtZW51LWN1c3RvbS1jb250ZW50Lmh0bWwnLFxuICAgIGRvTm90QXV0b0Nsb3NlOiB0cnVlXG4gIH07XG5cbiAgJHNjb3BlLm1lbnVEYXRhID0gbWVudURhdGE7XG5cbiAgJHNjb3BlLnByZUNvbnRleHRNZW51ID0gZnVuY3Rpb24gKCBlICkge1xuICAgIGNvbnNvbGUubG9nKCAnSW4gcHJlQ29udGV4dE1lbnUgJywgZSApO1xuICB9O1xuXG4gICRzY29wZS5jdXN0b21EYXRhID0ge1xuXG4gICAgY2xvc2VDbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coICdjbG9zaW5nIHRoaXMgbWFudXlhbGx5JyApO1xuICAgICAgY29udGV4dG1lbnVTZXJ2aWNlLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG59ICk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL2xpYnJhcnkvY29udGV4dG1lbnUvZG9jcy9kZW1vLmpzXCIsXCIvLi4vbGlicmFyeS9jb250ZXh0bWVudS9kb2NzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypnbG9iYWxzIGNvbnNvbGUsIGFuZ3VsYXIqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKCAnaXNpcy51aS5kcm9wZG93bk5hdmlnYXRvci5kZW1vJywgWyAnaXNpcy51aS5kcm9wZG93bk5hdmlnYXRvcicgXSApO1xuXG5kZW1vQXBwLmNvbnRyb2xsZXIoICdEcm9wZG93bkRlbW9Db250cm9sbGVyJywgZnVuY3Rpb24gKCAkc2NvcGUgKSB7XG4gIHZhciBmaXJzdE1lbnUsXG4gICAgc2Vjb25kTWVudTtcblxuICBmaXJzdE1lbnUgPSB7XG4gICAgaWQ6ICdyb290JyxcbiAgICBsYWJlbDogJ0dNRScsXG4gICAgLy8gICAgICAgICAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgIGl0ZW1DbGFzczogJ2dtZS1yb290JyxcbiAgICBtZW51OiBbXVxuICB9O1xuXG4gIHNlY29uZE1lbnUgPSB7XG4gICAgaWQ6ICdzZWNvbmRJdGVtJyxcbiAgICBsYWJlbDogJ1Byb2plY3RzJyxcbiAgICBtZW51OiBbXVxuICB9O1xuXG4gIGZpcnN0TWVudS5tZW51ID0gWyB7XG4gICAgaWQ6ICd0b3AnLFxuICAgIGl0ZW1zOiBbIHtcbiAgICAgIGlkOiAnbmV3UHJvamVjdCcsXG4gICAgICBsYWJlbDogJ05ldyBwcm9qZWN0IC4uLicsXG4gICAgICBpY29uQ2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCAnTmV3IHByb2plY3QgY2xpY2tlZCcgKTtcbiAgICAgIH0sXG4gICAgICBhY3Rpb25EYXRhOiB7fVxuICAgIH0sIHtcbiAgICAgIGlkOiAnaW1wb3J0UHJvamVjdCcsXG4gICAgICBsYWJlbDogJ0ltcG9ydCBwcm9qZWN0IC4uLicsXG4gICAgICBpY29uQ2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLWltcG9ydCcsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdJbXBvcnQgcHJvamVjdCBjbGlja2VkJyApO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbkRhdGE6IHt9XG4gICAgfSBdXG4gIH0sIHtcbiAgICBpZDogJ3Byb2plY3RzJyxcbiAgICBsYWJlbDogJ1JlY2VudCBwcm9qZWN0cycsXG4gICAgdG90YWxJdGVtczogMjAsXG4gICAgaXRlbXM6IFtdLFxuICAgIHNob3dBbGxJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coICdSZWNlbnQgcHJvamVjdHMgY2xpY2tlZCcgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBpZDogJ3ByZWZlcmVuY2VzJyxcbiAgICBsYWJlbDogJ3ByZWZlcmVuY2VzJyxcbiAgICBpdGVtczogWyB7XG4gICAgICBpZDogJ3Nob3dQcmVmZXJlbmNlcycsXG4gICAgICBsYWJlbDogJ1Nob3cgcHJlZmVyZW5jZXMnLFxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCAnU2hvdyBwcmVmZXJlbmNlcycgKTtcbiAgICAgIH0sXG4gICAgICBtZW51OiBbIHtcbiAgICAgICAgaXRlbXM6IFsge1xuICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAxJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgbWVudTogWyB7XG4gICAgICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDEnLFxuICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAxJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBpZDogJ3N1Yl9wcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMidcbiAgICAgICAgICAgIH0gXVxuICAgICAgICAgIH0gXVxuICAgICAgICB9IF1cbiAgICAgIH0gXVxuICAgIH0gXVxuICB9IF07XG5cblxuICBzZWNvbmRNZW51ID0ge1xuICAgIGlkOiAnc2Vjb25kSXRlbScsXG4gICAgbGFiZWw6ICdQcm9qZWN0cycsXG4gICAgbWVudTogW11cbiAgfTtcblxuICBzZWNvbmRNZW51Lm1lbnUgPSBbIHtcbiAgICBpZDogJ3NlY29uZE1lbnVNZW51JyxcbiAgICBpdGVtczogW1xuXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2hvd1ByZWZlcmVuY2VzJyxcbiAgICAgICAgbGFiZWw6ICdTaG93IHByZWZlcmVuY2VzJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coICdTaG93IHByZWZlcmVuY2VzJyApO1xuICAgICAgICB9LFxuICAgICAgICBtZW51OiBbIHtcbiAgICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDEnLFxuICAgICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAxJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDInXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICBtZW51OiBbIHtcbiAgICAgICAgICAgICAgaXRlbXM6IFsge1xuICAgICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDEnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogJ3N1Yl9wcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAyJ1xuICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgIH0gXVxuICAgICAgICAgIH0gXVxuICAgICAgICB9IF1cbiAgICAgIH1cbiAgICBdXG4gIH0gXTtcblxuICAkc2NvcGUubmF2aWdhdG9yID0ge1xuICAgIGl0ZW1zOiBbXG4gICAgICBmaXJzdE1lbnUsXG4gICAgICBzZWNvbmRNZW51XG4gICAgXSxcbiAgICBzZXBhcmF0b3I6IHRydWVcbiAgfTtcblxuXG59ICk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL2xpYnJhcnkvZHJvcGRvd25OYXZpZ2F0b3IvZG9jcy9kZW1vLmpzXCIsXCIvLi4vbGlicmFyeS9kcm9wZG93bk5hdmlnYXRvci9kb2NzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypnbG9iYWxzIGNvbnNvbGUsIGFuZ3VsYXIqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKCAnaXNpcy51aS5oaWVyYXJjaGljYWxNZW51LmRlbW8nLCBbICd1aS5ib290c3RyYXAnLFxuICAnaXNpcy51aS5oaWVyYXJjaGljYWxNZW51J1xuXSApO1xuXG5kZW1vQXBwLmNvbnRyb2xsZXIoICdIaWVyYXJjaGljYWxNZW51RGVtb0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoICRzY29wZSApIHtcblxuICB2YXIgbWVudTtcblxuICBtZW51ID0gWyB7XG4gICAgaWQ6ICd0b3AnLFxuICAgIGl0ZW1zOiBbIHtcbiAgICAgIGlkOiAnbmV3UHJvamVjdCcsXG4gICAgICBsYWJlbDogJ05ldyBwcm9qZWN0IC4uLicsXG4gICAgICBpY29uQ2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCAnTmV3IHByb2plY3QgY2xpY2tlZCcgKTtcbiAgICAgIH0sXG4gICAgICBhY3Rpb25EYXRhOiB7fVxuICAgIH0sIHtcbiAgICAgIGlkOiAnaW1wb3J0UHJvamVjdCcsXG4gICAgICBsYWJlbDogJ0ltcG9ydCBwcm9qZWN0IC4uLicsXG4gICAgICBpY29uQ2xhc3M6ICdnbHlwaGljb24gZ2x5cGhpY29uLWltcG9ydCcsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdJbXBvcnQgcHJvamVjdCBjbGlja2VkJyApO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbkRhdGE6IHt9XG4gICAgfSBdXG4gIH0sIHtcbiAgICBpZDogJ3Byb2plY3RzJyxcbiAgICBsYWJlbDogJ1JlY2VudCBwcm9qZWN0cycsXG4gICAgdG90YWxJdGVtczogMjAsXG4gICAgaXRlbXM6IFtdLFxuICAgIHNob3dBbGxJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coICdSZWNlbnQgcHJvamVjdHMgY2xpY2tlZCcgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBpZDogJ3ByZWZlcmVuY2VzJyxcbiAgICBsYWJlbDogJ3ByZWZlcmVuY2VzJyxcbiAgICBpdGVtczogWyB7XG4gICAgICBpZDogJ3Nob3dQcmVmZXJlbmNlcycsXG4gICAgICBsYWJlbDogJ1Nob3cgcHJlZmVyZW5jZXMnLFxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCAnU2hvdyBwcmVmZXJlbmNlcycgKTtcbiAgICAgIH0sXG4gICAgICBtZW51OiBbIHtcbiAgICAgICAgaXRlbXM6IFsge1xuICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAxJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgbWVudTogWyB7XG4gICAgICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDEnLFxuICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAxJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBpZDogJ3N1Yl9wcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMidcbiAgICAgICAgICAgIH0gXVxuICAgICAgICAgIH0gXVxuICAgICAgICB9IF1cbiAgICAgIH0gXVxuICAgIH0gXVxuICB9IF07XG5cbiAgJHNjb3BlLm1lbnUgPSBtZW51O1xuXG59ICk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL2xpYnJhcnkvaGllcmFyY2hpY2FsTWVudS9kb2NzL2RlbW8uanNcIixcIi8uLi9saWJyYXJ5L2hpZXJhcmNoaWNhbE1lbnUvZG9jc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qZ2xvYmFscyBjb25zb2xlLCBhbmd1bGFyKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNWYWxpZCxcbiAgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKCAnaXNpcy51aS5zaW1wbGVEaWFsb2cuZGVtbycsIFsgJ2lzaXMudWkuc2ltcGxlRGlhbG9nJyBdICksXG5cbiAgcGFyYW1ldGVyID0ge1xuICAgIHZhbHVlOiAxMCxcbiAgICBpbnZhbGlkOiB0cnVlXG4gIH07XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0NvbmZpcm1EaWFsb2dEZW1vQ29udHJvbGxlcicsIGZ1bmN0aW9uICggJHNjb3BlLCAkc2ltcGxlRGlhbG9nICkge1xuXG4gIGlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgcmVzdWx0ID0gKCBOdW1iZXIoIHBhcmFtZXRlci52YWx1ZSApID09PSA0ICk7XG5cbiAgICBjb25zb2xlLmxvZyggJ1ZhbGlkYXRvciB3YXMgY2FsbGVkJyApO1xuICAgIGNvbnNvbGUubG9nKCAnU3VtIGlzOiAnICsgcGFyYW1ldGVyLnZhbHVlLCByZXN1bHQgKTtcbiAgICBwYXJhbWV0ZXIuaW52YWxpZCA9ICFyZXN1bHQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gIH07XG5cblxuICAkc2NvcGUucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuXG4gICRzY29wZS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgIGlzVmFsaWQoKTtcbiAgICBpZiAoICEkc2NvcGUuJCRwaGFzZSApIHtcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAkc2ltcGxlRGlhbG9nLm9wZW4oIHtcbiAgICAgIGRpYWxvZ1RpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG4gICAgICBkaWFsb2dDb250ZW50VGVtcGxhdGU6ICdjb25maXJtLWNvbnRlbnQtdGVtcGxhdGUnLFxuICAgICAgb25PazogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ09LIHdhcyBwaWNrZWQnICk7XG4gICAgICB9LFxuICAgICAgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdUaGlzIHdhcyBjYW5jZWxlZCcgKTtcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0b3I6IGlzVmFsaWQsXG4gICAgICBzaXplOiAnbGcnLCAvLyBjYW4gYmUgc20gb3IgbGdcbiAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICB9ICk7XG5cbiAgfTtcblxuXG59ICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0NvbmZpcm1EaWFsb2dEZW1vRGF0YUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoKSB7XG5cbn0gKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbGlicmFyeS9zaW1wbGVEaWFsb2cvZG9jcy9kZW1vLmpzXCIsXCIvLi4vbGlicmFyeS9zaW1wbGVEaWFsb2cvZG9jc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qZ2xvYmFscyBhbmd1bGFyKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGRlbW9BcHAgPSBhbmd1bGFyLm1vZHVsZSggJ2lzaXMudWkudHJlZU5hdmlnYXRvci5kZW1vJywgWyAndWkuYm9vdHN0cmFwJyBdICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ1RyZWVOYXZpZ2F0b3JEZW1vQ29udHJvbGxlcicsIGZ1bmN0aW9uICggJHNjb3BlLCAkbG9nLCAkcSApIHtcblxuICB2YXIgY29uZmlnLFxuICAgIHRyZWVOb2RlcyA9IHt9LFxuXG4gICAgYWRkTm9kZSxcbiAgICByZW1vdmVOb2RlLFxuICAgIGdldE5vZGVDb250ZXh0bWVudSxcbiAgICBkdW1teVRyZWVEYXRhR2VuZXJhdG9yLFxuICAgIHNvcnRDaGlsZHJlbjtcblxuICBnZXROb2RlQ29udGV4dG1lbnUgPSBmdW5jdGlvbihub2RlKSB7XG5cbiAgICB2YXIgZGVmYXVsdE5vZGVDb250ZXh0bWVudSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnY3JlYXRlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGUgbmV3JyxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXBsdXMnLFxuICAgICAgICAgICAgICBtZW51OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdkdW1teScsXG4gICAgICAgICAgICAgIGxhYmVsOiAnSnVzdCBmb3IgdGVzdCAnICsgbm9kZS5pZCxcblxuICAgICAgICAgICAgICBhY3Rpb25EYXRhOiBub2RlLFxuXG4gICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKCAndGVzdGluZyAnLCBkYXRhICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdyZW5hbWUnLFxuICAgICAgICAgICAgICBsYWJlbDogJ1JlbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1taW51cycsXG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogbm9kZS5pZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICggZGF0YSApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKCBkYXRhLmlkICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICAgIG1lbnU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5sb2coICd0ZXN0aW5nMiAnLCBkYXRhICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgcmV0dXJuIGRlZmF1bHROb2RlQ29udGV4dG1lbnU7XG5cbiAgfTtcblxuICBkdW1teVRyZWVEYXRhR2VuZXJhdG9yID0gZnVuY3Rpb24gKCB0cmVlTm9kZSwgbmFtZSwgbWF4Q291bnQsIGxldmVscyApIHtcbiAgICB2YXIgaSxcbiAgICAgIGlkLFxuICAgICAgY291bnQsXG4gICAgICBjaGlsZE5vZGU7XG5cbiAgICBsZXZlbHMgPSBsZXZlbHMgfHwgMDtcblxuICAgIGNvdW50ID0gTWF0aC5yb3VuZChcbiAgICAgIE1hdGgucmFuZG9tKCkgKiBtYXhDb3VudFxuICAgICkgKyAxO1xuXG4gICAgZm9yICggaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxICkge1xuICAgICAgaWQgPSBuYW1lICsgaTtcblxuICAgICAgY2hpbGROb2RlID0gYWRkTm9kZSggdHJlZU5vZGUsIGlkICk7XG5cbiAgICAgIGlmICggbGV2ZWxzID4gMCApIHtcbiAgICAgICAgZHVtbXlUcmVlRGF0YUdlbmVyYXRvciggY2hpbGROb2RlLCBpZCArICcuJywgbWF4Q291bnQsIGxldmVscyAtIDEgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYWRkTm9kZSA9IGZ1bmN0aW9uICggcGFyZW50VHJlZU5vZGUsIGlkICkge1xuICAgIHZhciBuZXdUcmVlTm9kZSxcbiAgICAgIGNoaWxkcmVuID0gW10sXG5cbiAgICAgIG5vZGVDbGljayxcbiAgICAgIG5vZGVEYmxjbGljayxcbiAgICAgIGV4cGFuZGVyQ2xpY2s7XG5cbi8vICAgICRsb2cubG9nKCAnQWRkaW5nIGEgbmV3IG5vZGUgJyArIGlkICsgKCBwYXJlbnRUcmVlTm9kZSA/ICcgdG8gJyArIHBhcmVudFRyZWVOb2RlLmlkIDpcbi8vICAgICAgJyBhcyBST09UJyApICk7XG5cbiAgICBub2RlRGJsY2xpY2sgPSBmdW5jdGlvbiAoICRldmVudCwgdGhlTm9kZSApIHtcblxuICAgICAgbm9kZUNsaWNrKCAkZXZlbnQsIHRoZU5vZGUgKTtcbiAgICAgIGV4cGFuZGVyQ2xpY2soICRldmVudCwgdGhlTm9kZSApO1xuXG4gICAgICAvLyBvbmUgYWN0aXZlIG5vZGVcbiAgICAgICRzY29wZS5zdGF0ZS5hY3RpdmVOb2RlID0gdGhlTm9kZS5pZDtcblxuICAgICAgLy8gb25lIHNlbGVjdGVkIG5vZGVcbiAgICAgICRzY29wZS5zdGF0ZS5zZWxlY3RlZE5vZGVzID0gWyB0aGVOb2RlLmlkIF07XG4gICAgfTtcblxuXG5cblxuICAgIC8vIG5vZGUgc3RydWN0dXJlXG4gICAgbmV3VHJlZU5vZGUgPSB7XG4gICAgICBsYWJlbDogaWQsXG4gICAgICBleHRyYUluZm86ICdFeHRyYSBpbmZvJyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuQ291bnQ6IDAsXG4gICAgICBub2RlRGF0YToge30sXG4gICAgICBub2RlRGJsY2xpY2s6IG5vZGVEYmxjbGljayxcbiAgICAgIGljb25DbGFzczogJ2ZhIGZhLWZpbGUtbycsXG4gICAgICBjb250ZXh0TWVudTogW10sIC8vIGRlZmluZWQgYmVsb3dcbiAgICAgIG9uQ29udGV4dE1lbnU6ICRzY29wZS5vbkNvbnRleHRNZW51XG4gICAgfTtcblxuICAgIG5ld1RyZWVOb2RlLmlkID0gaWQ7XG5cbiAgICAvLyBhZGQgdGhlIG5ldyBub2RlIHRvIHRoZSBtYXBcbiAgICB0cmVlTm9kZXNbIG5ld1RyZWVOb2RlLmlkIF0gPSBuZXdUcmVlTm9kZTtcblxuXG4gICAgaWYgKCBwYXJlbnRUcmVlTm9kZSApIHtcbiAgICAgIC8vIGlmIGEgcGFyZW50IHdhcyBnaXZlbiBhZGQgdGhlIG5ldyBub2RlIGFzIGEgY2hpbGQgbm9kZVxuICAgICAgcGFyZW50VHJlZU5vZGUuaWNvbkNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgcGFyZW50VHJlZU5vZGUuY2hpbGRyZW4ucHVzaCggbmV3VHJlZU5vZGUgKTtcblxuXG4gICAgICBwYXJlbnRUcmVlTm9kZS5jaGlsZHJlbkNvdW50ID0gcGFyZW50VHJlZU5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICBpZiAoIG5ld1RyZWVOb2RlLmNoaWxkcmVuQ291bnQgPT09IDAgKSB7XG4gICAgICAgIG5ld1RyZWVOb2RlLmNoaWxkcmVuQ291bnQgPSBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICk7XG4gICAgICB9XG5cblxuICAgICAgaWYgKCBuZXdUcmVlTm9kZS5jaGlsZHJlbkNvdW50ICkge1xuICAgICAgICBuZXdUcmVlTm9kZS5pY29uQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHNvcnRDaGlsZHJlbiggcGFyZW50VHJlZU5vZGUuY2hpbGRyZW4gKTtcblxuICAgICAgbmV3VHJlZU5vZGUucGFyZW50SWQgPSBwYXJlbnRUcmVlTm9kZS5pZDtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBpZiBubyBwYXJlbnQgaXMgZ2l2ZW4gcmVwbGFjZSB0aGUgY3VycmVudCByb290IG5vZGUgd2l0aCB0aGlzIG5vZGVcbiAgICAgICRzY29wZS50cmVlRGF0YSA9IG5ld1RyZWVOb2RlO1xuICAgICAgJHNjb3BlLnRyZWVEYXRhLnVuQ29sbGFwc2libGUgPSB0cnVlO1xuICAgICAgbmV3VHJlZU5vZGUucGFyZW50SWQgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdUcmVlTm9kZTtcbiAgfTtcblxuICByZW1vdmVOb2RlID0gZnVuY3Rpb24gKCBpZCApIHtcbiAgICB2YXJcbiAgICAgIHBhcmVudE5vZGUsXG4gICAgICBub2RlVG9EZWxldGUgPSB0cmVlTm9kZXNbIGlkIF07XG5cbiAgICAkbG9nLmRlYnVnKCAnUmVtb3ZpbmcgYSBub2RlICcgKyBpZCApO1xuXG4gICAgaWYgKCBub2RlVG9EZWxldGUgKSB7XG4gICAgICBpZiAoIG5vZGVUb0RlbGV0ZS5wYXJlbnRJZCAhPT0gbnVsbCAmJiB0cmVlTm9kZXNbIG5vZGVUb0RlbGV0ZS5wYXJlbnRJZCBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIC8vIGZpbmQgcGFyZW50IG5vZGVcbiAgICAgICAgcGFyZW50Tm9kZSA9IHRyZWVOb2Rlc1sgbm9kZVRvRGVsZXRlLnBhcmVudElkIF07XG5cbiAgICAgICAgLy8gcmVtb3ZlIG5vZGVUb0RlbGV0ZSBmcm9tIHBhcmVudCBub2RlJ3MgY2hpbGRyZW5cbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGRyZW4uZmlsdGVyKCBmdW5jdGlvbiAoIGVsICkge1xuICAgICAgICAgIHJldHVybiBlbC5pZCAhPT0gaWQ7XG4gICAgICAgIH0gKTtcblxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuQ291bnQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICBpZiAoIHBhcmVudE5vZGUuY2hpbGRyZW5Db3VudCA9PT0gMCApIHtcbiAgICAgICAgICBwYXJlbnROb2RlLmljb25DbGFzcyA9ICdmYSBmYS1maWxlLW8nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0cmVlTm9kZXNbIGlkIF07XG4gICAgfVxuXG4gIH07XG5cbiAgc29ydENoaWxkcmVuID0gZnVuY3Rpb24gKCB2YWx1ZXMgKSB7XG4gICAgdmFyIG9yZGVyQnkgPSBbJ2xhYmVsJywgJ2lkJ107XG5cbiAgICB2YWx1ZXMuc29ydCggZnVuY3Rpb24gKCBhLCBiICkge1xuICAgICAgdmFyIGksXG4gICAgICAgIGtleSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IG9yZGVyQnkubGVuZ3RoOyBpICs9IDEgKSB7XG4gICAgICAgIGtleSA9IG9yZGVyQnlbaV07XG4gICAgICAgIGlmICggYS5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgJiYgYi5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYVtrZXldLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZSggYltrZXldLnRvTG93ZXJDYXNlKCkgKTtcbiAgICAgICAgICBpZiAoIHJlc3VsdCAhPT0gMCApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICByZXR1cm4gMDtcbiAgICB9ICk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIGNvbmZpZyA9IHtcblxuICAgIHNjb3BlTWVudTogW1xuICAgICAge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJvamVjdCcsXG4gICAgICAgICAgICBsYWJlbDogJ1Byb2plY3QgSGllcmFyY2h5JyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkc2NvcGUuc3RhdGUuYWN0aXZlU2NvcGUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICAgICRzY29wZS5jb25maWcuc2VsZWN0ZWRTY29wZSA9ICRzY29wZS5jb25maWcuc2NvcGVNZW51WyAwIF0uaXRlbXNbIDAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnY29tcG9zaXRpb24nLFxuICAgICAgICAgICAgbGFiZWw6ICdDb21wb3NpdGlvbicsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLnN0YXRlLmFjdGl2ZVNjb3BlID0gJ2NvbXBvc2l0aW9uJztcbiAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpZy5zZWxlY3RlZFNjb3BlID0gJHNjb3BlLmNvbmZpZy5zY29wZU1lbnVbIDAgXS5pdGVtc1sgMSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgXSxcblxuICAgIHNjb3BlTWVudUNvbmZpZzoge1xuICAgICAgdHJpZ2dlckV2ZW50OiAnY2xpY2snLFxuICAgICAgcG9zaXRpb246ICdsZWZ0IGJvdHRvbSdcbiAgICB9LFxuXG4gICAgcHJlZmVyZW5jZXNNZW51Q29uZmlnOiB7XG4gICAgICB0cmlnZ2VyRXZlbnQ6ICdjbGljaycsXG4gICAgICBwb3NpdGlvbjogJ3JpZ2h0IGJvdHRvbSdcbiAgICB9LFxuXG4gICAgc2VsZWN0ZWRTY29wZTogbnVsbCxcblxuICAgIHByZWZlcmVuY2VzTWVudTogW1xuICAgICAge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDInXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgICAgbWVudTogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N1Yl9wcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cubG9nKCBkYXRhICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgY29sbGFwc2VkSWNvbkNsYXNzOiAnaWNvbi1hcnJvdy1yaWdodCcsXG4gICAgZXhwYW5kZWRJY29uQ2xhc3M6ICdpY29uLWFycm93LWRvd24nLFxuICAgIHNob3dSb290TGFiZWw6IHRydWUsXG5cbiAgICAvLyBUcmVlIEV2ZW50IGNhbGxiYWNrc1xuXG4gICAgbm9kZUNsaWNrOiBmdW5jdGlvbihlLCBub2RlKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm9kZSB3YXMgY2xpY2tlZDonLCBub2RlKTtcbiAgICB9LFxuXG4gICAgbm9kZURibGNsaWNrOiBmdW5jdGlvbihlLCBub2RlKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm9kZSB3YXMgZG91YmxlLWNsaWNrZWQ6Jywgbm9kZSk7XG4gICAgfSxcblxuICAgIG5vZGVDb250ZXh0bWVudVJlbmRlcmVyOiBmdW5jdGlvbihlLCBub2RlKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29udGV4dG1lbnUgd2FzIHRyaWdnZXJlZCBmb3Igbm9kZTonLCBub2RlKTtcblxuICAgICAgcmV0dXJuIGdldE5vZGVDb250ZXh0bWVudShub2RlKTtcblxuICAgIH0sXG5cbiAgICBub2RlRXhwYW5kZXJDbGljazogZnVuY3Rpb24oZSwgbm9kZSwgaXNFeHBhbmQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFeHBhbmRlciB3YXMgY2xpY2tlZCBmb3Igbm9kZTonLCBub2RlLCBpc0V4cGFuZCk7XG4gICAgfSxcblxuICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oZSwgbm9kZSkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgc2V0VGltZW91dChcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZHVtbXlUcmVlRGF0YUdlbmVyYXRvciggbm9kZSwgJ0FzeW5jICcgKyBub2RlLmlkLCA1LCAwICk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgIH0sXG4gICAgICAyMDAwXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG5cblxuICB9O1xuXG4gICRzY29wZS5jb25maWcgPSBjb25maWc7XG4gICRzY29wZS5jb25maWcuc2VsZWN0ZWRTY29wZSA9ICRzY29wZS5jb25maWcuc2NvcGVNZW51WyAwIF0uaXRlbXNbIDAgXTtcbiAgJHNjb3BlLnRyZWVEYXRhID0ge307XG4gICRzY29wZS5jb25maWcuc3RhdGUgPSB7XG4gICAgLy8gaWQgb2YgYWN0aXZlTm9kZVxuICAgIGFjdGl2ZU5vZGU6ICdOb2RlIGl0ZW0gMC4wJyxcblxuICAgIC8vIGlkcyBvZiBzZWxlY3RlZCBub2Rlc1xuICAgIHNlbGVjdGVkTm9kZXM6IFsnTm9kZSBpdGVtIDAuMCddLFxuXG4gICAgZXhwYW5kZWROb2RlczogWyAnTm9kZSBpdGVtIDAnLCAnTm9kZSBpdGVtIDAuMSddLFxuXG4gICAgLy8gaWQgb2YgYWN0aXZlIHNjb3BlXG4gICAgYWN0aXZlU2NvcGU6ICdwcm9qZWN0J1xuICB9O1xuXG5cbiAgYWRkTm9kZSggbnVsbCwgJ1JPT1QnICk7XG4gIGR1bW15VHJlZURhdGFHZW5lcmF0b3IoICRzY29wZS50cmVlRGF0YSwgJ05vZGUgaXRlbSAnLCA1LCAzICk7XG5cbn0gKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbGlicmFyeS90cmVlTmF2aWdhdG9yL2RvY3MvZGVtby5qc1wiLFwiLy4uL2xpYnJhcnkvdHJlZU5hdmlnYXRvci9kb2NzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuO19fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbi8vXG4vLyBzaG93ZG93bi5qcyAtLSBBIGphdmFzY3JpcHQgcG9ydCBvZiBNYXJrZG93bi5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDcgSm9obiBGcmFzZXIuXG4vL1xuLy8gT3JpZ2luYWwgTWFya2Rvd24gQ29weXJpZ2h0IChjKSAyMDA0LTIwMDUgSm9obiBHcnViZXJcbi8vICAgPGh0dHA6Ly9kYXJpbmdmaXJlYmFsbC5uZXQvcHJvamVjdHMvbWFya2Rvd24vPlxuLy9cbi8vIFJlZGlzdHJpYnV0YWJsZSB1bmRlciBhIEJTRC1zdHlsZSBvcGVuIHNvdXJjZSBsaWNlbnNlLlxuLy8gU2VlIGxpY2Vuc2UudHh0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuLy9cbi8vIFRoZSBmdWxsIHNvdXJjZSBkaXN0cmlidXRpb24gaXMgYXQ6XG4vL1xuLy9cdFx0XHRcdEEgQSBMXG4vL1x0XHRcdFx0VCBDIEFcbi8vXHRcdFx0XHRUIEsgQlxuLy9cbi8vICAgPGh0dHA6Ly93d3cuYXR0YWNrbGFiLm5ldC8+XG4vL1xuXG4vL1xuLy8gV2hlcmV2ZXIgcG9zc2libGUsIFNob3dkb3duIGlzIGEgc3RyYWlnaHQsIGxpbmUtYnktbGluZSBwb3J0XG4vLyBvZiB0aGUgUGVybCB2ZXJzaW9uIG9mIE1hcmtkb3duLlxuLy9cbi8vIFRoaXMgaXMgbm90IGEgbm9ybWFsIHBhcnNlciBkZXNpZ247IGl0J3MgYmFzaWNhbGx5IGp1c3QgYVxuLy8gc2VyaWVzIG9mIHN0cmluZyBzdWJzdGl0dXRpb25zLiAgSXQncyBoYXJkIHRvIHJlYWQgYW5kXG4vLyBtYWludGFpbiB0aGlzIHdheSwgIGJ1dCBrZWVwaW5nIFNob3dkb3duIGNsb3NlIHRvIHRoZSBvcmlnaW5hbFxuLy8gZGVzaWduIG1ha2VzIGl0IGVhc2llciB0byBwb3J0IG5ldyBmZWF0dXJlcy5cbi8vXG4vLyBNb3JlIGltcG9ydGFudGx5LCBTaG93ZG93biBiZWhhdmVzIGxpa2UgbWFya2Rvd24ucGwgaW4gbW9zdFxuLy8gZWRnZSBjYXNlcy4gIFNvIHdlYiBhcHBsaWNhdGlvbnMgY2FuIGRvIGNsaWVudC1zaWRlIHByZXZpZXdcbi8vIGluIEphdmFzY3JpcHQsIGFuZCB0aGVuIGJ1aWxkIGlkZW50aWNhbCBIVE1MIG9uIHRoZSBzZXJ2ZXIuXG4vL1xuLy8gVGhpcyBwb3J0IG5lZWRzIHRoZSBuZXcgUmVnRXhwIGZ1bmN0aW9uYWxpdHkgb2YgRUNNQSAyNjIsXG4vLyAzcmQgRWRpdGlvbiAoaS5lLiBKYXZhc2NyaXB0IDEuNSkuICBNb3N0IG1vZGVybiB3ZWIgYnJvd3NlcnNcbi8vIHNob3VsZCBkbyBmaW5lLiAgRXZlbiB3aXRoIHRoZSBuZXcgcmVndWxhciBleHByZXNzaW9uIGZlYXR1cmVzLFxuLy8gV2UgZG8gYSBsb3Qgb2Ygd29yayB0byBlbXVsYXRlIFBlcmwncyByZWdleCBmdW5jdGlvbmFsaXR5LlxuLy8gVGhlIHRyaWNreSBjaGFuZ2VzIGluIHRoaXMgZmlsZSBtb3N0bHkgaGF2ZSB0aGUgXCJhdHRhY2tsYWI6XCJcbi8vIGxhYmVsLiAgTWFqb3Igb3Igc2VsZi1leHBsYW5hdG9yeSBjaGFuZ2VzIGRvbid0LlxuLy9cbi8vIFNtYXJ0IGRpZmYgdG9vbHMgbGlrZSBBcmF4aXMgTWVyZ2Ugd2lsbCBiZSBhYmxlIHRvIG1hdGNoIHVwXG4vLyB0aGlzIGZpbGUgd2l0aCBtYXJrZG93bi5wbCBpbiBhIHVzZWZ1bCB3YXkuICBBIGxpdHRsZSB0d2Vha2luZ1xuLy8gaGVscHM6IGluIGEgY29weSBvZiBtYXJrZG93bi5wbCwgcmVwbGFjZSBcIiNcIiB3aXRoIFwiLy9cIiBhbmRcbi8vIHJlcGxhY2UgXCIkdGV4dFwiIHdpdGggXCJ0ZXh0XCIuICBCZSBzdXJlIHRvIGlnbm9yZSB3aGl0ZXNwYWNlXG4vLyBhbmQgbGluZSBlbmRpbmdzLlxuLy9cblxuXG4vL1xuLy8gU2hvd2Rvd24gdXNhZ2U6XG4vL1xuLy8gICB2YXIgdGV4dCA9IFwiTWFya2Rvd24gKnJvY2tzKi5cIjtcbi8vXG4vLyAgIHZhciBjb252ZXJ0ZXIgPSBuZXcgU2hvd2Rvd24uY29udmVydGVyKCk7XG4vLyAgIHZhciBodG1sID0gY29udmVydGVyLm1ha2VIdG1sKHRleHQpO1xuLy9cbi8vICAgYWxlcnQoaHRtbCk7XG4vL1xuLy8gTm90ZTogbW92ZSB0aGUgc2FtcGxlIGNvZGUgdG8gdGhlIGJvdHRvbSBvZiB0aGlzXG4vLyBmaWxlIGJlZm9yZSB1bmNvbW1lbnRpbmcgaXQuXG4vL1xuXG5cbi8vXG4vLyBTaG93ZG93biBuYW1lc3BhY2Vcbi8vXG52YXIgU2hvd2Rvd24gPSB7IGV4dGVuc2lvbnM6IHt9IH07XG5cbi8vXG4vLyBmb3JFYWNoXG4vL1xudmFyIGZvckVhY2ggPSBTaG93ZG93bi5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjaykge1xuXHRpZiAodHlwZW9mIG9iai5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0b2JqLmZvckVhY2goY2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBpLCBsZW4gPSBvYmoubGVuZ3RoO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0Y2FsbGJhY2sob2JqW2ldLCBpLCBvYmopO1xuXHRcdH1cblx0fVxufTtcblxuLy9cbi8vIFN0YW5kYXJkIGV4dGVuc2lvbiBuYW1pbmdcbi8vXG52YXIgc3RkRXh0TmFtZSA9IGZ1bmN0aW9uKHMpIHtcblx0cmV0dXJuIHMucmVwbGFjZSgvW18tXXx8XFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLy9cbi8vIGNvbnZlcnRlclxuLy9cbi8vIFdyYXBzIGFsbCBcImdsb2JhbHNcIiBzbyB0aGF0IHRoZSBvbmx5IHRoaW5nXG4vLyBleHBvc2VkIGlzIG1ha2VIdG1sKCkuXG4vL1xuU2hvd2Rvd24uY29udmVydGVyID0gZnVuY3Rpb24oY29udmVydGVyX29wdGlvbnMpIHtcblxuLy9cbi8vIEdsb2JhbHM6XG4vL1xuXG4vLyBHbG9iYWwgaGFzaGVzLCB1c2VkIGJ5IHZhcmlvdXMgdXRpbGl0eSByb3V0aW5lc1xudmFyIGdfdXJscztcbnZhciBnX3RpdGxlcztcbnZhciBnX2h0bWxfYmxvY2tzO1xuXG4vLyBVc2VkIHRvIHRyYWNrIHdoZW4gd2UncmUgaW5zaWRlIGFuIG9yZGVyZWQgb3IgdW5vcmRlcmVkIGxpc3Rcbi8vIChzZWUgX1Byb2Nlc3NMaXN0SXRlbXMoKSBmb3IgZGV0YWlscyk6XG52YXIgZ19saXN0X2xldmVsID0gMDtcblxuLy8gR2xvYmFsIGV4dGVuc2lvbnNcbnZhciBnX2xhbmdfZXh0ZW5zaW9ucyA9IFtdO1xudmFyIGdfb3V0cHV0X21vZGlmaWVycyA9IFtdO1xuXG5cbi8vXG4vLyBBdXRvbWF0aWMgRXh0ZW5zaW9uIExvYWRpbmcgKG5vZGUgb25seSk6XG4vL1xuXG4vKmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmQnICYmIHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5kJykge1xuXHR2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5cdGlmIChmcykge1xuXHRcdC8vIFNlYXJjaCBleHRlbnNpb25zIGZvbGRlclxuXHRcdHZhciBleHRlbnNpb25zID0gZnMucmVhZGRpclN5bmMoKF9fZGlybmFtZSB8fCAnLicpKycvZXh0ZW5zaW9ucycpLmZpbHRlcihmdW5jdGlvbihmaWxlKXtcblx0XHRcdHJldHVybiB+ZmlsZS5pbmRleE9mKCcuanMnKTtcblx0XHR9KS5tYXAoZnVuY3Rpb24oZmlsZSl7XG5cdFx0XHRyZXR1cm4gZmlsZS5yZXBsYWNlKC9cXC5qcyQvLCAnJyk7XG5cdFx0fSk7XG5cdFx0Ly8gTG9hZCBleHRlbnNpb25zIGludG8gU2hvd2Rvd24gbmFtZXNwYWNlXG5cdFx0U2hvd2Rvd24uZm9yRWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHQpe1xuXHRcdFx0dmFyIG5hbWUgPSBzdGRFeHROYW1lKGV4dCk7XG5cdFx0XHRTaG93ZG93bi5leHRlbnNpb25zW25hbWVdID0gcmVxdWlyZSgnLi9leHRlbnNpb25zLycgKyBleHQpO1xuXHRcdH0pO1xuXHR9XG59Ki9cblxudGhpcy5tYWtlSHRtbCA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBNYWluIGZ1bmN0aW9uLiBUaGUgb3JkZXIgaW4gd2hpY2ggb3RoZXIgc3VicyBhcmUgY2FsbGVkIGhlcmUgaXNcbi8vIGVzc2VudGlhbC4gTGluayBhbmQgaW1hZ2Ugc3Vic3RpdHV0aW9ucyBuZWVkIHRvIGhhcHBlbiBiZWZvcmVcbi8vIF9Fc2NhcGVTcGVjaWFsQ2hhcnNXaXRoaW5UYWdBdHRyaWJ1dGVzKCksIHNvIHRoYXQgYW55IConcyBvciBfJ3MgaW4gdGhlIDxhPlxuLy8gYW5kIDxpbWc+IHRhZ3MgZ2V0IGVuY29kZWQuXG4vL1xuXG5cdC8vIENsZWFyIHRoZSBnbG9iYWwgaGFzaGVzLiBJZiB3ZSBkb24ndCBjbGVhciB0aGVzZSwgeW91IGdldCBjb25mbGljdHNcblx0Ly8gZnJvbSBvdGhlciBhcnRpY2xlcyB3aGVuIGdlbmVyYXRpbmcgYSBwYWdlIHdoaWNoIGNvbnRhaW5zIG1vcmUgdGhhblxuXHQvLyBvbmUgYXJ0aWNsZSAoZS5nLiBhbiBpbmRleCBwYWdlIHRoYXQgc2hvd3MgdGhlIE4gbW9zdCByZWNlbnRcblx0Ly8gYXJ0aWNsZXMpOlxuXHRnX3VybHMgPSB7fTtcblx0Z190aXRsZXMgPSB7fTtcblx0Z19odG1sX2Jsb2NrcyA9IFtdO1xuXG5cdC8vIGF0dGFja2xhYjogUmVwbGFjZSB+IHdpdGggflRcblx0Ly8gVGhpcyBsZXRzIHVzIHVzZSB0aWxkZSBhcyBhbiBlc2NhcGUgY2hhciB0byBhdm9pZCBtZDUgaGFzaGVzXG5cdC8vIFRoZSBjaG9pY2Ugb2YgY2hhcmFjdGVyIGlzIGFyYml0cmF5OyBhbnl0aGluZyB0aGF0IGlzbid0XG5cdC8vIG1hZ2ljIGluIE1hcmtkb3duIHdpbGwgd29yay5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvfi9nLFwiflRcIik7XG5cblx0Ly8gYXR0YWNrbGFiOiBSZXBsYWNlICQgd2l0aCB+RFxuXHQvLyBSZWdFeHAgaW50ZXJwcmV0cyAkIGFzIGEgc3BlY2lhbCBjaGFyYWN0ZXJcblx0Ly8gd2hlbiBpdCdzIGluIGEgcmVwbGFjZW1lbnQgc3RyaW5nXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcJC9nLFwifkRcIik7XG5cblx0Ly8gU3RhbmRhcmRpemUgbGluZSBlbmRpbmdzXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpOyAvLyBET1MgdG8gVW5peFxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHIvZyxcIlxcblwiKTsgLy8gTWFjIHRvIFVuaXhcblxuXHQvLyBNYWtlIHN1cmUgdGV4dCBiZWdpbnMgYW5kIGVuZHMgd2l0aCBhIGNvdXBsZSBvZiBuZXdsaW5lczpcblx0dGV4dCA9IFwiXFxuXFxuXCIgKyB0ZXh0ICsgXCJcXG5cXG5cIjtcblxuXHQvLyBDb252ZXJ0IGFsbCB0YWJzIHRvIHNwYWNlcy5cblx0dGV4dCA9IF9EZXRhYih0ZXh0KTtcblxuXHQvLyBTdHJpcCBhbnkgbGluZXMgY29uc2lzdGluZyBvbmx5IG9mIHNwYWNlcyBhbmQgdGFicy5cblx0Ly8gVGhpcyBtYWtlcyBzdWJzZXF1ZW50IHJlZ2V4ZW4gZWFzaWVyIHRvIHdyaXRlLCBiZWNhdXNlIHdlIGNhblxuXHQvLyBtYXRjaCBjb25zZWN1dGl2ZSBibGFuayBsaW5lcyB3aXRoIC9cXG4rLyBpbnN0ZWFkIG9mIHNvbWV0aGluZ1xuXHQvLyBjb250b3J0ZWQgbGlrZSAvWyBcXHRdKlxcbisvIC5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlsgXFx0XSskL21nLFwiXCIpO1xuXG5cdC8vIFJ1biBsYW5ndWFnZSBleHRlbnNpb25zXG5cdFNob3dkb3duLmZvckVhY2goZ19sYW5nX2V4dGVuc2lvbnMsIGZ1bmN0aW9uKHgpe1xuXHRcdHRleHQgPSBfRXhlY3V0ZUV4dGVuc2lvbih4LCB0ZXh0KTtcblx0fSk7XG5cblx0Ly8gSGFuZGxlIGdpdGh1YiBjb2RlYmxvY2tzIHByaW9yIHRvIHJ1bm5pbmcgSGFzaEhUTUwgc28gdGhhdFxuXHQvLyBIVE1MIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGNvZGVibG9jayBnZXRzIGVzY2FwZWQgcHJvcGVydGx5XG5cdHRleHQgPSBfRG9HaXRodWJDb2RlQmxvY2tzKHRleHQpO1xuXG5cdC8vIFR1cm4gYmxvY2stbGV2ZWwgSFRNTCBibG9ja3MgaW50byBoYXNoIGVudHJpZXNcblx0dGV4dCA9IF9IYXNoSFRNTEJsb2Nrcyh0ZXh0KTtcblxuXHQvLyBTdHJpcCBsaW5rIGRlZmluaXRpb25zLCBzdG9yZSBpbiBoYXNoZXMuXG5cdHRleHQgPSBfU3RyaXBMaW5rRGVmaW5pdGlvbnModGV4dCk7XG5cblx0dGV4dCA9IF9SdW5CbG9ja0dhbXV0KHRleHQpO1xuXG5cdHRleHQgPSBfVW5lc2NhcGVTcGVjaWFsQ2hhcnModGV4dCk7XG5cblx0Ly8gYXR0YWNrbGFiOiBSZXN0b3JlIGRvbGxhciBzaWduc1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+RC9nLFwiJCRcIik7XG5cblx0Ly8gYXR0YWNrbGFiOiBSZXN0b3JlIHRpbGRlc1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+VC9nLFwiflwiKTtcblxuXHQvLyBSdW4gb3V0cHV0IG1vZGlmaWVyc1xuXHRTaG93ZG93bi5mb3JFYWNoKGdfb3V0cHV0X21vZGlmaWVycywgZnVuY3Rpb24oeCl7XG5cdFx0dGV4dCA9IF9FeGVjdXRlRXh0ZW5zaW9uKHgsIHRleHQpO1xuXHR9KTtcblxuXHRyZXR1cm4gdGV4dDtcbn07XG4vL1xuLy8gT3B0aW9uczpcbi8vXG5cbi8vIFBhcnNlIGV4dGVuc2lvbnMgb3B0aW9ucyBpbnRvIHNlcGFyYXRlIGFycmF5c1xuaWYgKGNvbnZlcnRlcl9vcHRpb25zICYmIGNvbnZlcnRlcl9vcHRpb25zLmV4dGVuc2lvbnMpIHtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cblx0Ly8gSXRlcmF0ZSBvdmVyIGVhY2ggcGx1Z2luXG5cdFNob3dkb3duLmZvckVhY2goY29udmVydGVyX29wdGlvbnMuZXh0ZW5zaW9ucywgZnVuY3Rpb24ocGx1Z2luKXtcblxuXHRcdC8vIEFzc3VtZSBpdCdzIGEgYnVuZGxlZCBwbHVnaW4gaWYgYSBzdHJpbmcgaXMgZ2l2ZW5cblx0XHRpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHBsdWdpbiA9IFNob3dkb3duLmV4dGVuc2lvbnNbc3RkRXh0TmFtZShwbHVnaW4pXTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gSXRlcmF0ZSBvdmVyIGVhY2ggZXh0ZW5zaW9uIHdpdGhpbiB0aGF0IHBsdWdpblxuXHRcdFx0U2hvd2Rvd24uZm9yRWFjaChwbHVnaW4oc2VsZiksIGZ1bmN0aW9uKGV4dCl7XG5cdFx0XHRcdC8vIFNvcnQgZXh0ZW5zaW9ucyBieSB0eXBlXG5cdFx0XHRcdGlmIChleHQudHlwZSkge1xuXHRcdFx0XHRcdGlmIChleHQudHlwZSA9PT0gJ2xhbmd1YWdlJyB8fCBleHQudHlwZSA9PT0gJ2xhbmcnKSB7XG5cdFx0XHRcdFx0XHRnX2xhbmdfZXh0ZW5zaW9ucy5wdXNoKGV4dCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChleHQudHlwZSA9PT0gJ291dHB1dCcgfHwgZXh0LnR5cGUgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0Z19vdXRwdXRfbW9kaWZpZXJzLnB1c2goZXh0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQXNzdW1lIGxhbmd1YWdlIGV4dGVuc2lvblxuXHRcdFx0XHRcdGdfb3V0cHV0X21vZGlmaWVycy5wdXNoKGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBcIkV4dGVuc2lvbiAnXCIgKyBwbHVnaW4gKyBcIicgY291bGQgbm90IGJlIGxvYWRlZC4gIEl0IHdhcyBlaXRoZXIgbm90IGZvdW5kIG9yIGlzIG5vdCBhIHZhbGlkIGV4dGVuc2lvbi5cIjtcblx0XHR9XG5cdH0pO1xufVxuXG5cbnZhciBfRXhlY3V0ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uKGV4dCwgdGV4dCkge1xuXHRpZiAoZXh0LnJlZ2V4KSB7XG5cdFx0dmFyIHJlID0gbmV3IFJlZ0V4cChleHQucmVnZXgsICdnJyk7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZShyZSwgZXh0LnJlcGxhY2UpO1xuXHR9IGVsc2UgaWYgKGV4dC5maWx0ZXIpIHtcblx0XHRyZXR1cm4gZXh0LmZpbHRlcih0ZXh0KTtcblx0fVxufTtcblxudmFyIF9TdHJpcExpbmtEZWZpbml0aW9ucyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBTdHJpcHMgbGluayBkZWZpbml0aW9ucyBmcm9tIHRleHQsIHN0b3JlcyB0aGUgVVJMcyBhbmQgdGl0bGVzIGluXG4vLyBoYXNoIHJlZmVyZW5jZXMuXG4vL1xuXG5cdC8vIExpbmsgZGVmcyBhcmUgaW4gdGhlIGZvcm06IF5baWRdOiB1cmwgXCJvcHRpb25hbCB0aXRsZVwiXG5cblx0Lypcblx0XHR2YXIgdGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0XHRcdF5bIF17MCwzfVxcWyguKylcXF06ICAvLyBpZCA9ICQxICBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoIC0gMVxuXHRcdFx0XHQgIFsgXFx0XSpcblx0XHRcdFx0ICBcXG4/XHRcdFx0XHQvLyBtYXliZSAqb25lKiBuZXdsaW5lXG5cdFx0XHRcdCAgWyBcXHRdKlxuXHRcdFx0XHQ8PyhcXFMrPyk+P1x0XHRcdC8vIHVybCA9ICQyXG5cdFx0XHRcdCAgWyBcXHRdKlxuXHRcdFx0XHQgIFxcbj9cdFx0XHRcdC8vIG1heWJlIG9uZSBuZXdsaW5lXG5cdFx0XHRcdCAgWyBcXHRdKlxuXHRcdFx0XHQoPzpcblx0XHRcdFx0ICAoXFxuKilcdFx0XHRcdC8vIGFueSBsaW5lcyBza2lwcGVkID0gJDMgYXR0YWNrbGFiOiBsb29rYmVoaW5kIHJlbW92ZWRcblx0XHRcdFx0ICBbXCIoXVxuXHRcdFx0XHQgICguKz8pXHRcdFx0XHQvLyB0aXRsZSA9ICQ0XG5cdFx0XHRcdCAgW1wiKV1cblx0XHRcdFx0ICBbIFxcdF0qXG5cdFx0XHRcdCk/XHRcdFx0XHRcdC8vIHRpdGxlIGlzIG9wdGlvbmFsXG5cdFx0XHRcdCg/Olxcbit8JClcblx0XHRcdCAgL2dtLFxuXHRcdFx0ICBmdW5jdGlvbigpey4uLn0pO1xuXHQqL1xuXG5cdC8vIGF0dGFja2xhYjogc2VudGluZWwgd29ya2Fyb3VuZHMgZm9yIGxhY2sgb2YgXFxBIGFuZCBcXFosIHNhZmFyaVxca2h0bWwgYnVnXG5cdHRleHQgKz0gXCJ+MFwiO1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL15bIF17MCwzfVxcWyguKylcXF06WyBcXHRdKlxcbj9bIFxcdF0qPD8oXFxTKz8pPj9bIFxcdF0qXFxuP1sgXFx0XSooPzooXFxuKilbXCIoXSguKz8pW1wiKV1bIFxcdF0qKT8oPzpcXG4rfCg/PX4wKSkvZ20sXG5cdFx0ZnVuY3Rpb24gKHdob2xlTWF0Y2gsbTEsbTIsbTMsbTQpIHtcblx0XHRcdG0xID0gbTEudG9Mb3dlckNhc2UoKTtcblx0XHRcdGdfdXJsc1ttMV0gPSBfRW5jb2RlQW1wc0FuZEFuZ2xlcyhtMik7ICAvLyBMaW5rIElEcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0aWYgKG0zKSB7XG5cdFx0XHRcdC8vIE9vcHMsIGZvdW5kIGJsYW5rIGxpbmVzLCBzbyBpdCdzIG5vdCBhIHRpdGxlLlxuXHRcdFx0XHQvLyBQdXQgYmFjayB0aGUgcGFyZW50aGV0aWNhbCBzdGF0ZW1lbnQgd2Ugc3RvbGUuXG5cdFx0XHRcdHJldHVybiBtMyttNDtcblx0XHRcdH0gZWxzZSBpZiAobTQpIHtcblx0XHRcdFx0Z190aXRsZXNbbTFdID0gbTQucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGxldGVseSByZW1vdmUgdGhlIGRlZmluaXRpb24gZnJvbSB0aGUgdGV4dFxuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHQpO1xuXG5cdC8vIGF0dGFja2xhYjogc3RyaXAgc2VudGluZWxcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvfjAvLFwiXCIpO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbnZhciBfSGFzaEhUTUxCbG9ja3MgPSBmdW5jdGlvbih0ZXh0KSB7XG5cdC8vIGF0dGFja2xhYjogRG91YmxlIHVwIGJsYW5rIGxpbmVzIHRvIHJlZHVjZSBsb29rYXJvdW5kXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLFwiXFxuXFxuXCIpO1xuXG5cdC8vIEhhc2hpZnkgSFRNTCBibG9ja3M6XG5cdC8vIFdlIG9ubHkgd2FudCB0byBkbyB0aGlzIGZvciBibG9jay1sZXZlbCBIVE1MIHRhZ3MsIHN1Y2ggYXMgaGVhZGVycyxcblx0Ly8gbGlzdHMsIGFuZCB0YWJsZXMuIFRoYXQncyBiZWNhdXNlIHdlIHN0aWxsIHdhbnQgdG8gd3JhcCA8cD5zIGFyb3VuZFxuXHQvLyBcInBhcmFncmFwaHNcIiB0aGF0IGFyZSB3cmFwcGVkIGluIG5vbi1ibG9jay1sZXZlbCB0YWdzLCBzdWNoIGFzIGFuY2hvcnMsXG5cdC8vIHBocmFzZSBlbXBoYXNpcywgYW5kIHNwYW5zLiBUaGUgbGlzdCBvZiB0YWdzIHdlJ3JlIGxvb2tpbmcgZm9yIGlzXG5cdC8vIGhhcmQtY29kZWQ6XG5cdHZhciBibG9ja190YWdzX2EgPSBcInB8ZGl2fGhbMS02XXxibG9ja3F1b3RlfHByZXx0YWJsZXxkbHxvbHx1bHxzY3JpcHR8bm9zY3JpcHR8Zm9ybXxmaWVsZHNldHxpZnJhbWV8bWF0aHxpbnN8ZGVsfHN0eWxlfHNlY3Rpb258aGVhZGVyfGZvb3RlcnxuYXZ8YXJ0aWNsZXxhc2lkZVwiO1xuXHR2YXIgYmxvY2tfdGFnc19iID0gXCJwfGRpdnxoWzEtNl18YmxvY2txdW90ZXxwcmV8dGFibGV8ZGx8b2x8dWx8c2NyaXB0fG5vc2NyaXB0fGZvcm18ZmllbGRzZXR8aWZyYW1lfG1hdGh8c3R5bGV8c2VjdGlvbnxoZWFkZXJ8Zm9vdGVyfG5hdnxhcnRpY2xlfGFzaWRlXCI7XG5cblx0Ly8gRmlyc3QsIGxvb2sgZm9yIG5lc3RlZCBibG9ja3MsIGUuZy46XG5cdC8vICAgPGRpdj5cblx0Ly8gICAgIDxkaXY+XG5cdC8vICAgICB0YWdzIGZvciBpbm5lciBibG9jayBtdXN0IGJlIGluZGVudGVkLlxuXHQvLyAgICAgPC9kaXY+XG5cdC8vICAgPC9kaXY+XG5cdC8vXG5cdC8vIFRoZSBvdXRlcm1vc3QgdGFncyBtdXN0IHN0YXJ0IGF0IHRoZSBsZWZ0IG1hcmdpbiBmb3IgdGhpcyB0byBtYXRjaCwgYW5kXG5cdC8vIHRoZSBpbm5lciBuZXN0ZWQgZGl2cyBtdXN0IGJlIGluZGVudGVkLlxuXHQvLyBXZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIHRoZSBuZXh0LCBtb3JlIGxpYmVyYWwgbWF0Y2gsIGJlY2F1c2UgdGhlIG5leHRcblx0Ly8gbWF0Y2ggd2lsbCBzdGFydCBhdCB0aGUgZmlyc3QgYDxkaXY+YCBhbmQgc3RvcCBhdCB0aGUgZmlyc3QgYDwvZGl2PmAuXG5cblx0Ly8gYXR0YWNrbGFiOiBUaGlzIHJlZ2V4IGNhbiBiZSBleHBlbnNpdmUgd2hlbiBpdCBmYWlscy5cblx0Lypcblx0XHR2YXIgdGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHRcdFx0XHRcdC8vIHNhdmUgaW4gJDFcblx0XHRcdF5cdFx0XHRcdFx0Ly8gc3RhcnQgb2YgbGluZSAgKHdpdGggL20pXG5cdFx0XHQ8KCRibG9ja190YWdzX2EpXHQvLyBzdGFydCB0YWcgPSAkMlxuXHRcdFx0XFxiXHRcdFx0XHRcdC8vIHdvcmQgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHQvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIGtodG1sL3BjcmUgYnVnLi4uXG5cdFx0XHRbXlxccl0qP1xcblx0XHRcdC8vIGFueSBudW1iZXIgb2YgbGluZXMsIG1pbmltYWxseSBtYXRjaGluZ1xuXHRcdFx0PC9cXDI+XHRcdFx0XHQvLyB0aGUgbWF0Y2hpbmcgZW5kIHRhZ1xuXHRcdFx0WyBcXHRdKlx0XHRcdFx0Ly8gdHJhaWxpbmcgc3BhY2VzL3RhYnNcblx0XHRcdCg/PVxcbispXHRcdFx0XHQvLyBmb2xsb3dlZCBieSBhIG5ld2xpbmVcblx0XHQpXHRcdFx0XHRcdFx0Ly8gYXR0YWNrbGFiOiB0aGVyZSBhcmUgc2VudGluZWwgbmV3bGluZXMgYXQgZW5kIG9mIGRvY3VtZW50XG5cdFx0L2dtLGZ1bmN0aW9uKCl7Li4ufX07XG5cdCovXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL14oPChwfGRpdnxoWzEtNl18YmxvY2txdW90ZXxwcmV8dGFibGV8ZGx8b2x8dWx8c2NyaXB0fG5vc2NyaXB0fGZvcm18ZmllbGRzZXR8aWZyYW1lfG1hdGh8aW5zfGRlbClcXGJbXlxccl0qP1xcbjxcXC9cXDI+WyBcXHRdKig/PVxcbispKS9nbSxoYXNoRWxlbWVudCk7XG5cblx0Ly9cblx0Ly8gTm93IG1hdGNoIG1vcmUgbGliZXJhbGx5LCBzaW1wbHkgZnJvbSBgXFxuPHRhZz5gIHRvIGA8L3RhZz5cXG5gXG5cdC8vXG5cblx0Lypcblx0XHR2YXIgdGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHRcdFx0XHRcdC8vIHNhdmUgaW4gJDFcblx0XHRcdF5cdFx0XHRcdFx0Ly8gc3RhcnQgb2YgbGluZSAgKHdpdGggL20pXG5cdFx0XHQ8KCRibG9ja190YWdzX2IpXHQvLyBzdGFydCB0YWcgPSAkMlxuXHRcdFx0XFxiXHRcdFx0XHRcdC8vIHdvcmQgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHQvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIGtodG1sL3BjcmUgYnVnLi4uXG5cdFx0XHRbXlxccl0qP1x0XHRcdFx0Ly8gYW55IG51bWJlciBvZiBsaW5lcywgbWluaW1hbGx5IG1hdGNoaW5nXG5cdFx0XHQ8L1xcMj5cdFx0XHRcdC8vIHRoZSBtYXRjaGluZyBlbmQgdGFnXG5cdFx0XHRbIFxcdF0qXHRcdFx0XHQvLyB0cmFpbGluZyBzcGFjZXMvdGFic1xuXHRcdFx0KD89XFxuKylcdFx0XHRcdC8vIGZvbGxvd2VkIGJ5IGEgbmV3bGluZVxuXHRcdClcdFx0XHRcdFx0XHQvLyBhdHRhY2tsYWI6IHRoZXJlIGFyZSBzZW50aW5lbCBuZXdsaW5lcyBhdCBlbmQgb2YgZG9jdW1lbnRcblx0XHQvZ20sZnVuY3Rpb24oKXsuLi59fTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXig8KHB8ZGl2fGhbMS02XXxibG9ja3F1b3RlfHByZXx0YWJsZXxkbHxvbHx1bHxzY3JpcHR8bm9zY3JpcHR8Zm9ybXxmaWVsZHNldHxpZnJhbWV8bWF0aHxzdHlsZXxzZWN0aW9ufGhlYWRlcnxmb290ZXJ8bmF2fGFydGljbGV8YXNpZGUpXFxiW15cXHJdKj88XFwvXFwyPlsgXFx0XSooPz1cXG4rKVxcbikvZ20saGFzaEVsZW1lbnQpO1xuXG5cdC8vIFNwZWNpYWwgY2FzZSBqdXN0IGZvciA8aHIgLz4uIEl0IHdhcyBlYXNpZXIgdG8gbWFrZSBhIHNwZWNpYWwgY2FzZSB0aGFuXG5cdC8vIHRvIG1ha2UgdGhlIG90aGVyIHJlZ2V4IG1vcmUgY29tcGxpY2F0ZWQuXG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHQoXHRcdFx0XHRcdFx0Ly8gc2F2ZSBpbiAkMVxuXHRcdFx0XFxuXFxuXHRcdFx0XHQvLyBTdGFydGluZyBhZnRlciBhIGJsYW5rIGxpbmVcblx0XHRcdFsgXXswLDN9XG5cdFx0XHQoPChocilcdFx0XHRcdC8vIHN0YXJ0IHRhZyA9ICQyXG5cdFx0XHRcXGJcdFx0XHRcdFx0Ly8gd29yZCBicmVha1xuXHRcdFx0KFtePD5dKSo/XHRcdFx0Ly9cblx0XHRcdFxcLz8+KVx0XHRcdFx0Ly8gdGhlIG1hdGNoaW5nIGVuZCB0YWdcblx0XHRcdFsgXFx0XSpcblx0XHRcdCg/PVxcbnsyLH0pXHRcdFx0Ly8gZm9sbG93ZWQgYnkgYSBibGFuayBsaW5lXG5cdFx0KVxuXHRcdC9nLGhhc2hFbGVtZW50KTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcblsgXXswLDN9KDwoaHIpXFxiKFtePD5dKSo/XFwvPz4pWyBcXHRdKig/PVxcbnsyLH0pKS9nLGhhc2hFbGVtZW50KTtcblxuXHQvLyBTcGVjaWFsIGNhc2UgZm9yIHN0YW5kYWxvbmUgSFRNTCBjb21tZW50czpcblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdChcdFx0XHRcdFx0XHQvLyBzYXZlIGluICQxXG5cdFx0XHRcXG5cXG5cdFx0XHRcdC8vIFN0YXJ0aW5nIGFmdGVyIGEgYmxhbmsgbGluZVxuXHRcdFx0WyBdezAsM31cdFx0XHQvLyBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoIC0gMVxuXHRcdFx0PCFcblx0XHRcdCgtLVteXFxyXSo/LS1cXHMqKStcblx0XHRcdD5cblx0XHRcdFsgXFx0XSpcblx0XHRcdCg/PVxcbnsyLH0pXHRcdFx0Ly8gZm9sbG93ZWQgYnkgYSBibGFuayBsaW5lXG5cdFx0KVxuXHRcdC9nLGhhc2hFbGVtZW50KTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcblxcblsgXXswLDN9PCEoLS1bXlxccl0qPy0tXFxzKikrPlsgXFx0XSooPz1cXG57Mix9KSkvZyxoYXNoRWxlbWVudCk7XG5cblx0Ly8gUEhQIGFuZCBBU1Atc3R5bGUgcHJvY2Vzc29yIGluc3RydWN0aW9ucyAoPD8uLi4/PiBhbmQgPCUuLi4lPilcblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdCg/OlxuXHRcdFx0XFxuXFxuXHRcdFx0XHQvLyBTdGFydGluZyBhZnRlciBhIGJsYW5rIGxpbmVcblx0XHQpXG5cdFx0KFx0XHRcdFx0XHRcdC8vIHNhdmUgaW4gJDFcblx0XHRcdFsgXXswLDN9XHRcdFx0Ly8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aCAtIDFcblx0XHRcdCg/OlxuXHRcdFx0XHQ8KFs/JV0pXHRcdFx0Ly8gJDJcblx0XHRcdFx0W15cXHJdKj9cblx0XHRcdFx0XFwyPlxuXHRcdFx0KVxuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KD89XFxuezIsfSlcdFx0XHQvLyBmb2xsb3dlZCBieSBhIGJsYW5rIGxpbmVcblx0XHQpXG5cdFx0L2csaGFzaEVsZW1lbnQpO1xuXHQqL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oPzpcXG5cXG4pKFsgXXswLDN9KD86PChbPyVdKVteXFxyXSo/XFwyPilbIFxcdF0qKD89XFxuezIsfSkpL2csaGFzaEVsZW1lbnQpO1xuXG5cdC8vIGF0dGFja2xhYjogVW5kbyBkb3VibGUgbGluZXMgKHNlZSBjb21tZW50IGF0IHRvcCBvZiB0aGlzIGZ1bmN0aW9uKVxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXG5cXG4vZyxcIlxcblwiKTtcblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciBoYXNoRWxlbWVudCA9IGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEpIHtcblx0dmFyIGJsb2NrVGV4dCA9IG0xO1xuXG5cdC8vIFVuZG8gZG91YmxlIGxpbmVzXG5cdGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9cXG5cXG4vZyxcIlxcblwiKTtcblx0YmxvY2tUZXh0ID0gYmxvY2tUZXh0LnJlcGxhY2UoL15cXG4vLFwiXCIpO1xuXG5cdC8vIHN0cmlwIHRyYWlsaW5nIGJsYW5rIGxpbmVzXG5cdGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9cXG4rJC9nLFwiXCIpO1xuXG5cdC8vIFJlcGxhY2UgdGhlIGVsZW1lbnQgdGV4dCB3aXRoIGEgbWFya2VyIChcIn5LeEtcIiB3aGVyZSB4IGlzIGl0cyBrZXkpXG5cdGJsb2NrVGV4dCA9IFwiXFxuXFxufktcIiArIChnX2h0bWxfYmxvY2tzLnB1c2goYmxvY2tUZXh0KS0xKSArIFwiS1xcblxcblwiO1xuXG5cdHJldHVybiBibG9ja1RleHQ7XG59O1xuXG52YXIgX1J1bkJsb2NrR2FtdXQgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gVGhlc2UgYXJlIGFsbCB0aGUgdHJhbnNmb3JtYXRpb25zIHRoYXQgZm9ybSBibG9jay1sZXZlbFxuLy8gdGFncyBsaWtlIHBhcmFncmFwaHMsIGhlYWRlcnMsIGFuZCBsaXN0IGl0ZW1zLlxuLy9cblx0dGV4dCA9IF9Eb0hlYWRlcnModGV4dCk7XG5cblx0Ly8gRG8gSG9yaXpvbnRhbCBSdWxlczpcblx0dmFyIGtleSA9IGhhc2hCbG9jayhcIjxociAvPlwiKTtcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlsgXXswLDJ9KFsgXT9cXCpbIF0/KXszLH1bIFxcdF0qJC9nbSxrZXkpO1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eWyBdezAsMn0oWyBdP1xcLVsgXT8pezMsfVsgXFx0XSokL2dtLGtleSk7XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL15bIF17MCwyfShbIF0/XFxfWyBdPyl7Myx9WyBcXHRdKiQvZ20sa2V5KTtcblxuXHR0ZXh0ID0gX0RvTGlzdHModGV4dCk7XG5cdHRleHQgPSBfRG9Db2RlQmxvY2tzKHRleHQpO1xuXHR0ZXh0ID0gX0RvQmxvY2tRdW90ZXModGV4dCk7XG5cblx0Ly8gV2UgYWxyZWFkeSByYW4gX0hhc2hIVE1MQmxvY2tzKCkgYmVmb3JlLCBpbiBNYXJrZG93bigpLCBidXQgdGhhdFxuXHQvLyB3YXMgdG8gZXNjYXBlIHJhdyBIVE1MIGluIHRoZSBvcmlnaW5hbCBNYXJrZG93biBzb3VyY2UuIFRoaXMgdGltZSxcblx0Ly8gd2UncmUgZXNjYXBpbmcgdGhlIG1hcmt1cCB3ZSd2ZSBqdXN0IGNyZWF0ZWQsIHNvIHRoYXQgd2UgZG9uJ3Qgd3JhcFxuXHQvLyA8cD4gdGFncyBhcm91bmQgYmxvY2stbGV2ZWwgdGFncy5cblx0dGV4dCA9IF9IYXNoSFRNTEJsb2Nrcyh0ZXh0KTtcblx0dGV4dCA9IF9Gb3JtUGFyYWdyYXBocyh0ZXh0KTtcblxuXHRyZXR1cm4gdGV4dDtcbn07XG5cblxudmFyIF9SdW5TcGFuR2FtdXQgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gVGhlc2UgYXJlIGFsbCB0aGUgdHJhbnNmb3JtYXRpb25zIHRoYXQgb2NjdXIgKndpdGhpbiogYmxvY2stbGV2ZWxcbi8vIHRhZ3MgbGlrZSBwYXJhZ3JhcGhzLCBoZWFkZXJzLCBhbmQgbGlzdCBpdGVtcy5cbi8vXG5cblx0dGV4dCA9IF9Eb0NvZGVTcGFucyh0ZXh0KTtcblx0dGV4dCA9IF9Fc2NhcGVTcGVjaWFsQ2hhcnNXaXRoaW5UYWdBdHRyaWJ1dGVzKHRleHQpO1xuXHR0ZXh0ID0gX0VuY29kZUJhY2tzbGFzaEVzY2FwZXModGV4dCk7XG5cblx0Ly8gUHJvY2VzcyBhbmNob3IgYW5kIGltYWdlIHRhZ3MuIEltYWdlcyBtdXN0IGNvbWUgZmlyc3QsXG5cdC8vIGJlY2F1c2UgIVtmb29dW2ZdIGxvb2tzIGxpa2UgYW4gYW5jaG9yLlxuXHR0ZXh0ID0gX0RvSW1hZ2VzKHRleHQpO1xuXHR0ZXh0ID0gX0RvQW5jaG9ycyh0ZXh0KTtcblxuXHQvLyBNYWtlIGxpbmtzIG91dCBvZiB0aGluZ3MgbGlrZSBgPGh0dHA6Ly9leGFtcGxlLmNvbS8+YFxuXHQvLyBNdXN0IGNvbWUgYWZ0ZXIgX0RvQW5jaG9ycygpLCBiZWNhdXNlIHlvdSBjYW4gdXNlIDwgYW5kID5cblx0Ly8gZGVsaW1pdGVycyBpbiBpbmxpbmUgbGlua3MgbGlrZSBbdGhpc10oPHVybD4pLlxuXHR0ZXh0ID0gX0RvQXV0b0xpbmtzKHRleHQpO1xuXHR0ZXh0ID0gX0VuY29kZUFtcHNBbmRBbmdsZXModGV4dCk7XG5cdHRleHQgPSBfRG9JdGFsaWNzQW5kQm9sZCh0ZXh0KTtcblxuXHQvLyBEbyBoYXJkIGJyZWFrczpcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvICArXFxuL2csXCIgPGJyIC8+XFxuXCIpO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG52YXIgX0VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gV2l0aGluIHRhZ3MgLS0gbWVhbmluZyBiZXR3ZWVuIDwgYW5kID4gLS0gZW5jb2RlIFtcXCBgICogX10gc28gdGhleVxuLy8gZG9uJ3QgY29uZmxpY3Qgd2l0aCB0aGVpciB1c2UgaW4gTWFya2Rvd24gZm9yIGNvZGUsIGl0YWxpY3MgYW5kIHN0cm9uZy5cbi8vXG5cblx0Ly8gQnVpbGQgYSByZWdleCB0byBmaW5kIEhUTUwgdGFncyBhbmQgY29tbWVudHMuICBTZWUgRnJpZWRsJ3Ncblx0Ly8gXCJNYXN0ZXJpbmcgUmVndWxhciBFeHByZXNzaW9uc1wiLCAybmQgRWQuLCBwcC4gMjAwLTIwMS5cblx0dmFyIHJlZ2V4ID0gLyg8W2EtelxcLyEkXShcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPnw8ISgtLS4qPy0tXFxzKikrPikvZ2k7XG5cblx0dGV4dCA9IHRleHQucmVwbGFjZShyZWdleCwgZnVuY3Rpb24od2hvbGVNYXRjaCkge1xuXHRcdHZhciB0YWcgPSB3aG9sZU1hdGNoLnJlcGxhY2UoLyguKTxcXC8/Y29kZT4oPz0uKS9nLFwiJDFgXCIpO1xuXHRcdHRhZyA9IGVzY2FwZUNoYXJhY3RlcnModGFnLFwiXFxcXGAqX1wiKTtcblx0XHRyZXR1cm4gdGFnO1xuXHR9KTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxudmFyIF9Eb0FuY2hvcnMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gVHVybiBNYXJrZG93biBsaW5rIHNob3J0Y3V0cyBpbnRvIFhIVE1MIDxhPiB0YWdzLlxuLy9cblx0Ly9cblx0Ly8gRmlyc3QsIGhhbmRsZSByZWZlcmVuY2Utc3R5bGUgbGlua3M6IFtsaW5rIHRleHRdIFtpZF1cblx0Ly9cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdChcdFx0XHRcdFx0XHRcdC8vIHdyYXAgd2hvbGUgbWF0Y2ggaW4gJDFcblx0XHRcdFxcW1xuXHRcdFx0KFxuXHRcdFx0XHQoPzpcblx0XHRcdFx0XHRcXFtbXlxcXV0qXFxdXHRcdC8vIGFsbG93IGJyYWNrZXRzIG5lc3RlZCBvbmUgbGV2ZWxcblx0XHRcdFx0XHR8XG5cdFx0XHRcdFx0W15cXFtdXHRcdFx0Ly8gb3IgYW55dGhpbmcgZWxzZVxuXHRcdFx0XHQpKlxuXHRcdFx0KVxuXHRcdFx0XFxdXG5cblx0XHRcdFsgXT9cdFx0XHRcdFx0Ly8gb25lIG9wdGlvbmFsIHNwYWNlXG5cdFx0XHQoPzpcXG5bIF0qKT9cdFx0XHRcdC8vIG9uZSBvcHRpb25hbCBuZXdsaW5lIGZvbGxvd2VkIGJ5IHNwYWNlc1xuXG5cdFx0XHRcXFtcblx0XHRcdCguKj8pXHRcdFx0XHRcdC8vIGlkID0gJDNcblx0XHRcdFxcXVxuXHRcdCkoKSgpKCkoKVx0XHRcdFx0XHQvLyBwYWQgcmVtYWluaW5nIGJhY2tyZWZlcmVuY2VzXG5cdFx0L2csX0RvQW5jaG9yc19jYWxsYmFjayk7XG5cdCovXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXFsoKD86XFxbW15cXF1dKlxcXXxbXlxcW1xcXV0pKilcXF1bIF0/KD86XFxuWyBdKik/XFxbKC4qPylcXF0pKCkoKSgpKCkvZyx3cml0ZUFuY2hvclRhZyk7XG5cblx0Ly9cblx0Ly8gTmV4dCwgaW5saW5lLXN0eWxlIGxpbmtzOiBbbGluayB0ZXh0XSh1cmwgXCJvcHRpb25hbCB0aXRsZVwiKVxuXHQvL1xuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0XHQoXHRcdFx0XHRcdFx0Ly8gd3JhcCB3aG9sZSBtYXRjaCBpbiAkMVxuXHRcdFx0XHRcXFtcblx0XHRcdFx0KFxuXHRcdFx0XHRcdCg/OlxuXHRcdFx0XHRcdFx0XFxbW15cXF1dKlxcXVx0Ly8gYWxsb3cgYnJhY2tldHMgbmVzdGVkIG9uZSBsZXZlbFxuXHRcdFx0XHRcdHxcblx0XHRcdFx0XHRbXlxcW1xcXV1cdFx0XHQvLyBvciBhbnl0aGluZyBlbHNlXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHRcdFxcXVxuXHRcdFx0XFwoXHRcdFx0XHRcdFx0Ly8gbGl0ZXJhbCBwYXJlblxuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KClcdFx0XHRcdFx0XHQvLyBubyBpZCwgc28gbGVhdmUgJDMgZW1wdHlcblx0XHRcdDw/KC4qPyk+P1x0XHRcdFx0Ly8gaHJlZiA9ICQ0XG5cdFx0XHRbIFxcdF0qXG5cdFx0XHQoXHRcdFx0XHRcdFx0Ly8gJDVcblx0XHRcdFx0KFsnXCJdKVx0XHRcdFx0Ly8gcXVvdGUgY2hhciA9ICQ2XG5cdFx0XHRcdCguKj8pXHRcdFx0XHQvLyBUaXRsZSA9ICQ3XG5cdFx0XHRcdFxcNlx0XHRcdFx0XHQvLyBtYXRjaGluZyBxdW90ZVxuXHRcdFx0XHRbIFxcdF0qXHRcdFx0XHQvLyBpZ25vcmUgYW55IHNwYWNlcy90YWJzIGJldHdlZW4gY2xvc2luZyBxdW90ZSBhbmQgKVxuXHRcdFx0KT9cdFx0XHRcdFx0XHQvLyB0aXRsZSBpcyBvcHRpb25hbFxuXHRcdFx0XFwpXG5cdFx0KVxuXHRcdC9nLHdyaXRlQW5jaG9yVGFnKTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcWygoPzpcXFtbXlxcXV0qXFxdfFteXFxbXFxdXSkqKVxcXVxcKFsgXFx0XSooKTw/KC4qPyg/OlxcKC4qP1xcKS4qPyk/KT4/WyBcXHRdKigoWydcIl0pKC4qPylcXDZbIFxcdF0qKT9cXCkpL2csd3JpdGVBbmNob3JUYWcpO1xuXG5cdC8vXG5cdC8vIExhc3QsIGhhbmRsZSByZWZlcmVuY2Utc3R5bGUgc2hvcnRjdXRzOiBbbGluayB0ZXh0XVxuXHQvLyBUaGVzZSBtdXN0IGNvbWUgbGFzdCBpbiBjYXNlIHlvdSd2ZSBhbHNvIGdvdCBbbGluayB0ZXN0XVsxXVxuXHQvLyBvciBbbGluayB0ZXN0XSgvZm9vKVxuXHQvL1xuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHQgXHRcdFx0XHRcdC8vIHdyYXAgd2hvbGUgbWF0Y2ggaW4gJDFcblx0XHRcdFxcW1xuXHRcdFx0KFteXFxbXFxdXSspXHRcdFx0XHQvLyBsaW5rIHRleHQgPSAkMjsgY2FuJ3QgY29udGFpbiAnWycgb3IgJ10nXG5cdFx0XHRcXF1cblx0XHQpKCkoKSgpKCkoKVx0XHRcdFx0XHQvLyBwYWQgcmVzdCBvZiBiYWNrcmVmZXJlbmNlc1xuXHRcdC9nLCB3cml0ZUFuY2hvclRhZyk7XG5cdCovXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXFsoW15cXFtcXF1dKylcXF0pKCkoKSgpKCkoKS9nLCB3cml0ZUFuY2hvclRhZyk7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciB3cml0ZUFuY2hvclRhZyA9IGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIsbTMsbTQsbTUsbTYsbTcpIHtcblx0aWYgKG03ID09IHVuZGVmaW5lZCkgbTcgPSBcIlwiO1xuXHR2YXIgd2hvbGVfbWF0Y2ggPSBtMTtcblx0dmFyIGxpbmtfdGV4dCAgID0gbTI7XG5cdHZhciBsaW5rX2lkXHQgPSBtMy50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgdXJsXHRcdD0gbTQ7XG5cdHZhciB0aXRsZVx0PSBtNztcblxuXHRpZiAodXJsID09IFwiXCIpIHtcblx0XHRpZiAobGlua19pZCA9PSBcIlwiKSB7XG5cdFx0XHQvLyBsb3dlci1jYXNlIGFuZCB0dXJuIGVtYmVkZGVkIG5ld2xpbmVzIGludG8gc3BhY2VzXG5cdFx0XHRsaW5rX2lkID0gbGlua190ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvID9cXG4vZyxcIiBcIik7XG5cdFx0fVxuXHRcdHVybCA9IFwiI1wiK2xpbmtfaWQ7XG5cblx0XHRpZiAoZ191cmxzW2xpbmtfaWRdICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dXJsID0gZ191cmxzW2xpbmtfaWRdO1xuXHRcdFx0aWYgKGdfdGl0bGVzW2xpbmtfaWRdICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aXRsZSA9IGdfdGl0bGVzW2xpbmtfaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh3aG9sZV9tYXRjaC5zZWFyY2goL1xcKFxccypcXCkkL20pPi0xKSB7XG5cdFx0XHRcdC8vIFNwZWNpYWwgY2FzZSBmb3IgZXhwbGljaXQgZW1wdHkgdXJsXG5cdFx0XHRcdHVybCA9IFwiXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gd2hvbGVfbWF0Y2g7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dXJsID0gZXNjYXBlQ2hhcmFjdGVycyh1cmwsXCIqX1wiKTtcblx0dmFyIHJlc3VsdCA9IFwiPGEgaHJlZj1cXFwiXCIgKyB1cmwgKyBcIlxcXCJcIjtcblxuXHRpZiAodGl0bGUgIT0gXCJcIikge1xuXHRcdHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKTtcblx0XHR0aXRsZSA9IGVzY2FwZUNoYXJhY3RlcnModGl0bGUsXCIqX1wiKTtcblx0XHRyZXN1bHQgKz0gIFwiIHRpdGxlPVxcXCJcIiArIHRpdGxlICsgXCJcXFwiXCI7XG5cdH1cblxuXHRyZXN1bHQgKz0gXCI+XCIgKyBsaW5rX3RleHQgKyBcIjwvYT5cIjtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbnZhciBfRG9JbWFnZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gVHVybiBNYXJrZG93biBpbWFnZSBzaG9ydGN1dHMgaW50byA8aW1nPiB0YWdzLlxuLy9cblxuXHQvL1xuXHQvLyBGaXJzdCwgaGFuZGxlIHJlZmVyZW5jZS1zdHlsZSBsYWJlbGVkIGltYWdlczogIVthbHQgdGV4dF1baWRdXG5cdC8vXG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHQoXHRcdFx0XHRcdFx0Ly8gd3JhcCB3aG9sZSBtYXRjaCBpbiAkMVxuXHRcdFx0IVxcW1xuXHRcdFx0KC4qPylcdFx0XHRcdC8vIGFsdCB0ZXh0ID0gJDJcblx0XHRcdFxcXVxuXG5cdFx0XHRbIF0/XHRcdFx0XHQvLyBvbmUgb3B0aW9uYWwgc3BhY2Vcblx0XHRcdCg/OlxcblsgXSopP1x0XHRcdC8vIG9uZSBvcHRpb25hbCBuZXdsaW5lIGZvbGxvd2VkIGJ5IHNwYWNlc1xuXG5cdFx0XHRcXFtcblx0XHRcdCguKj8pXHRcdFx0XHQvLyBpZCA9ICQzXG5cdFx0XHRcXF1cblx0XHQpKCkoKSgpKClcdFx0XHRcdC8vIHBhZCByZXN0IG9mIGJhY2tyZWZlcmVuY2VzXG5cdFx0L2csd3JpdGVJbWFnZVRhZyk7XG5cdCovXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyghXFxbKC4qPylcXF1bIF0/KD86XFxuWyBdKik/XFxbKC4qPylcXF0pKCkoKSgpKCkvZyx3cml0ZUltYWdlVGFnKTtcblxuXHQvL1xuXHQvLyBOZXh0LCBoYW5kbGUgaW5saW5lIGltYWdlczogICFbYWx0IHRleHRdKHVybCBcIm9wdGlvbmFsIHRpdGxlXCIpXG5cdC8vIERvbid0IGZvcmdldDogZW5jb2RlICogYW5kIF9cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdChcdFx0XHRcdFx0XHQvLyB3cmFwIHdob2xlIG1hdGNoIGluICQxXG5cdFx0XHQhXFxbXG5cdFx0XHQoLio/KVx0XHRcdFx0Ly8gYWx0IHRleHQgPSAkMlxuXHRcdFx0XFxdXG5cdFx0XHRcXHM/XHRcdFx0XHRcdC8vIE9uZSBvcHRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlclxuXHRcdFx0XFwoXHRcdFx0XHRcdC8vIGxpdGVyYWwgcGFyZW5cblx0XHRcdFsgXFx0XSpcblx0XHRcdCgpXHRcdFx0XHRcdC8vIG5vIGlkLCBzbyBsZWF2ZSAkMyBlbXB0eVxuXHRcdFx0PD8oXFxTKz8pPj9cdFx0XHQvLyBzcmMgdXJsID0gJDRcblx0XHRcdFsgXFx0XSpcblx0XHRcdChcdFx0XHRcdFx0Ly8gJDVcblx0XHRcdFx0KFsnXCJdKVx0XHRcdC8vIHF1b3RlIGNoYXIgPSAkNlxuXHRcdFx0XHQoLio/KVx0XHRcdC8vIHRpdGxlID0gJDdcblx0XHRcdFx0XFw2XHRcdFx0XHQvLyBtYXRjaGluZyBxdW90ZVxuXHRcdFx0XHRbIFxcdF0qXG5cdFx0XHQpP1x0XHRcdFx0XHQvLyB0aXRsZSBpcyBvcHRpb25hbFxuXHRcdFxcKVxuXHRcdClcblx0XHQvZyx3cml0ZUltYWdlVGFnKTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKCFcXFsoLio/KVxcXVxccz9cXChbIFxcdF0qKCk8PyhcXFMrPyk+P1sgXFx0XSooKFsnXCJdKSguKj8pXFw2WyBcXHRdKik/XFwpKS9nLHdyaXRlSW1hZ2VUYWcpO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG52YXIgd3JpdGVJbWFnZVRhZyA9IGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIsbTMsbTQsbTUsbTYsbTcpIHtcblx0dmFyIHdob2xlX21hdGNoID0gbTE7XG5cdHZhciBhbHRfdGV4dCAgID0gbTI7XG5cdHZhciBsaW5rX2lkXHQgPSBtMy50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgdXJsXHRcdD0gbTQ7XG5cdHZhciB0aXRsZVx0PSBtNztcblxuXHRpZiAoIXRpdGxlKSB0aXRsZSA9IFwiXCI7XG5cblx0aWYgKHVybCA9PSBcIlwiKSB7XG5cdFx0aWYgKGxpbmtfaWQgPT0gXCJcIikge1xuXHRcdFx0Ly8gbG93ZXItY2FzZSBhbmQgdHVybiBlbWJlZGRlZCBuZXdsaW5lcyBpbnRvIHNwYWNlc1xuXHRcdFx0bGlua19pZCA9IGFsdF90ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvID9cXG4vZyxcIiBcIik7XG5cdFx0fVxuXHRcdHVybCA9IFwiI1wiK2xpbmtfaWQ7XG5cblx0XHRpZiAoZ191cmxzW2xpbmtfaWRdICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dXJsID0gZ191cmxzW2xpbmtfaWRdO1xuXHRcdFx0aWYgKGdfdGl0bGVzW2xpbmtfaWRdICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aXRsZSA9IGdfdGl0bGVzW2xpbmtfaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB3aG9sZV9tYXRjaDtcblx0XHR9XG5cdH1cblxuXHRhbHRfdGV4dCA9IGFsdF90ZXh0LnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIik7XG5cdHVybCA9IGVzY2FwZUNoYXJhY3RlcnModXJsLFwiKl9cIik7XG5cdHZhciByZXN1bHQgPSBcIjxpbWcgc3JjPVxcXCJcIiArIHVybCArIFwiXFxcIiBhbHQ9XFxcIlwiICsgYWx0X3RleHQgKyBcIlxcXCJcIjtcblxuXHQvLyBhdHRhY2tsYWI6IE1hcmtkb3duLnBsIGFkZHMgZW1wdHkgdGl0bGUgYXR0cmlidXRlcyB0byBpbWFnZXMuXG5cdC8vIFJlcGxpY2F0ZSB0aGlzIGJ1Zy5cblxuXHQvL2lmICh0aXRsZSAhPSBcIlwiKSB7XG5cdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpO1xuXHRcdHRpdGxlID0gZXNjYXBlQ2hhcmFjdGVycyh0aXRsZSxcIipfXCIpO1xuXHRcdHJlc3VsdCArPSAgXCIgdGl0bGU9XFxcIlwiICsgdGl0bGUgKyBcIlxcXCJcIjtcblx0Ly99XG5cblx0cmVzdWx0ICs9IFwiIC8+XCI7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG52YXIgX0RvSGVhZGVycyA9IGZ1bmN0aW9uKHRleHQpIHtcblxuXHQvLyBTZXRleHQtc3R5bGUgaGVhZGVyczpcblx0Ly9cdEhlYWRlciAxXG5cdC8vXHQ9PT09PT09PVxuXHQvL1xuXHQvL1x0SGVhZGVyIDJcblx0Ly9cdC0tLS0tLS0tXG5cdC8vXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL14oLispWyBcXHRdKlxcbj0rWyBcXHRdKlxcbisvZ20sXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSl7cmV0dXJuIGhhc2hCbG9jaygnPGgxIGlkPVwiJyArIGhlYWRlcklkKG0xKSArICdcIj4nICsgX1J1blNwYW5HYW11dChtMSkgKyBcIjwvaDE+XCIpO30pO1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL14oLispWyBcXHRdKlxcbi0rWyBcXHRdKlxcbisvZ20sXG5cdFx0ZnVuY3Rpb24obWF0Y2hGb3VuZCxtMSl7cmV0dXJuIGhhc2hCbG9jaygnPGgyIGlkPVwiJyArIGhlYWRlcklkKG0xKSArICdcIj4nICsgX1J1blNwYW5HYW11dChtMSkgKyBcIjwvaDI+XCIpO30pO1xuXG5cdC8vIGF0eC1zdHlsZSBoZWFkZXJzOlxuXHQvLyAgIyBIZWFkZXIgMVxuXHQvLyAgIyMgSGVhZGVyIDJcblx0Ly8gICMjIEhlYWRlciAyIHdpdGggY2xvc2luZyBoYXNoZXMgIyNcblx0Ly8gIC4uLlxuXHQvLyAgIyMjIyMjIEhlYWRlciA2XG5cdC8vXG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHRcdF4oXFwjezEsNn0pXHRcdFx0XHQvLyAkMSA9IHN0cmluZyBvZiAjJ3Ncblx0XHRcdFsgXFx0XSpcblx0XHRcdCguKz8pXHRcdFx0XHRcdC8vICQyID0gSGVhZGVyIHRleHRcblx0XHRcdFsgXFx0XSpcblx0XHRcdFxcIypcdFx0XHRcdFx0XHQvLyBvcHRpb25hbCBjbG9zaW5nICMncyAobm90IGNvdW50ZWQpXG5cdFx0XHRcXG4rXG5cdFx0L2dtLCBmdW5jdGlvbigpIHsuLi59KTtcblx0Ki9cblxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKFxcI3sxLDZ9KVsgXFx0XSooLis/KVsgXFx0XSpcXCMqXFxuKy9nbSxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xLG0yKSB7XG5cdFx0XHR2YXIgaF9sZXZlbCA9IG0xLmxlbmd0aDtcblx0XHRcdHJldHVybiBoYXNoQmxvY2soXCI8aFwiICsgaF9sZXZlbCArICcgaWQ9XCInICsgaGVhZGVySWQobTIpICsgJ1wiPicgKyBfUnVuU3BhbkdhbXV0KG0yKSArIFwiPC9oXCIgKyBoX2xldmVsICsgXCI+XCIpO1xuXHRcdH0pO1xuXG5cdGZ1bmN0aW9uIGhlYWRlcklkKG0pIHtcblx0XHRyZXR1cm4gbS5yZXBsYWNlKC9bXlxcd10vZywgJycpLnRvTG93ZXJDYXNlKCk7XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59XG5cbi8vIFRoaXMgZGVjbGFyYXRpb24ga2VlcHMgRG9qbyBjb21wcmVzc29yIGZyb20gb3V0cHV0dGluZyBnYXJiYWdlOlxudmFyIF9Qcm9jZXNzTGlzdEl0ZW1zO1xuXG52YXIgX0RvTGlzdHMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gRm9ybSBIVE1MIG9yZGVyZWQgKG51bWJlcmVkKSBhbmQgdW5vcmRlcmVkIChidWxsZXRlZCkgbGlzdHMuXG4vL1xuXG5cdC8vIGF0dGFja2xhYjogYWRkIHNlbnRpbmVsIHRvIGhhY2sgYXJvdW5kIGtodG1sL3NhZmFyaSBidWc6XG5cdC8vIGh0dHA6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTExMjMxXG5cdHRleHQgKz0gXCJ+MFwiO1xuXG5cdC8vIFJlLXVzYWJsZSBwYXR0ZXJuIHRvIG1hdGNoIGFueSBlbnRpcmVsIHVsIG9yIG9sIGxpc3Q6XG5cblx0Lypcblx0XHR2YXIgd2hvbGVfbGlzdCA9IC9cblx0XHQoXHRcdFx0XHRcdFx0XHRcdFx0Ly8gJDEgPSB3aG9sZSBsaXN0XG5cdFx0XHQoXHRcdFx0XHRcdFx0XHRcdC8vICQyXG5cdFx0XHRcdFsgXXswLDN9XHRcdFx0XHRcdC8vIGF0dGFja2xhYjogZ190YWJfd2lkdGggLSAxXG5cdFx0XHRcdChbKistXXxcXGQrWy5dKVx0XHRcdFx0Ly8gJDMgPSBmaXJzdCBsaXN0IGl0ZW0gbWFya2VyXG5cdFx0XHRcdFsgXFx0XStcblx0XHRcdClcblx0XHRcdFteXFxyXSs/XG5cdFx0XHQoXHRcdFx0XHRcdFx0XHRcdC8vICQ0XG5cdFx0XHRcdH4wXHRcdFx0XHRcdFx0XHQvLyBzZW50aW5lbCBmb3Igd29ya2Fyb3VuZDsgc2hvdWxkIGJlICRcblx0XHRcdHxcblx0XHRcdFx0XFxuezIsfVxuXHRcdFx0XHQoPz1cXFMpXG5cdFx0XHRcdCg/IVx0XHRcdFx0XHRcdFx0Ly8gTmVnYXRpdmUgbG9va2FoZWFkIGZvciBhbm90aGVyIGxpc3QgaXRlbSBtYXJrZXJcblx0XHRcdFx0XHRbIFxcdF0qXG5cdFx0XHRcdFx0KD86WyorLV18XFxkK1suXSlbIFxcdF0rXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpL2dcblx0Ki9cblx0dmFyIHdob2xlX2xpc3QgPSAvXigoWyBdezAsM30oWyorLV18XFxkK1suXSlbIFxcdF0rKVteXFxyXSs/KH4wfFxcbnsyLH0oPz1cXFMpKD8hWyBcXHRdKig/OlsqKy1dfFxcZCtbLl0pWyBcXHRdKykpKS9nbTtcblxuXHRpZiAoZ19saXN0X2xldmVsKSB7XG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSh3aG9sZV9saXN0LGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIpIHtcblx0XHRcdHZhciBsaXN0ID0gbTE7XG5cdFx0XHR2YXIgbGlzdF90eXBlID0gKG0yLnNlYXJjaCgvWyorLV0vZyk+LTEpID8gXCJ1bFwiIDogXCJvbFwiO1xuXG5cdFx0XHQvLyBUdXJuIGRvdWJsZSByZXR1cm5zIGludG8gdHJpcGxlIHJldHVybnMsIHNvIHRoYXQgd2UgY2FuIG1ha2UgYVxuXHRcdFx0Ly8gcGFyYWdyYXBoIGZvciB0aGUgbGFzdCBpdGVtIGluIGEgbGlzdCwgaWYgbmVjZXNzYXJ5OlxuXHRcdFx0bGlzdCA9IGxpc3QucmVwbGFjZSgvXFxuezIsfS9nLFwiXFxuXFxuXFxuXCIpOztcblx0XHRcdHZhciByZXN1bHQgPSBfUHJvY2Vzc0xpc3RJdGVtcyhsaXN0KTtcblxuXHRcdFx0Ly8gVHJpbSBhbnkgdHJhaWxpbmcgd2hpdGVzcGFjZSwgdG8gcHV0IHRoZSBjbG9zaW5nIGA8LyRsaXN0X3R5cGU+YFxuXHRcdFx0Ly8gdXAgb24gdGhlIHByZWNlZGluZyBsaW5lLCB0byBnZXQgaXQgcGFzdCB0aGUgY3VycmVudCBzdHVwaWRcblx0XHRcdC8vIEhUTUwgYmxvY2sgcGFyc2VyLiBUaGlzIGlzIGEgaGFjayB0byB3b3JrIGFyb3VuZCB0aGUgdGVycmlibGVcblx0XHRcdC8vIGhhY2sgdGhhdCBpcyB0aGUgSFRNTCBibG9jayBwYXJzZXIuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXFxzKyQvLFwiXCIpO1xuXHRcdFx0cmVzdWx0ID0gXCI8XCIrbGlzdF90eXBlK1wiPlwiICsgcmVzdWx0ICsgXCI8L1wiK2xpc3RfdHlwZStcIj5cXG5cIjtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2hvbGVfbGlzdCA9IC8oXFxuXFxufF5cXG4/KSgoWyBdezAsM30oWyorLV18XFxkK1suXSlbIFxcdF0rKVteXFxyXSs/KH4wfFxcbnsyLH0oPz1cXFMpKD8hWyBcXHRdKig/OlsqKy1dfFxcZCtbLl0pWyBcXHRdKykpKS9nO1xuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uod2hvbGVfbGlzdCxmdW5jdGlvbih3aG9sZU1hdGNoLG0xLG0yLG0zKSB7XG5cdFx0XHR2YXIgcnVudXAgPSBtMTtcblx0XHRcdHZhciBsaXN0ID0gbTI7XG5cblx0XHRcdHZhciBsaXN0X3R5cGUgPSAobTMuc2VhcmNoKC9bKistXS9nKT4tMSkgPyBcInVsXCIgOiBcIm9sXCI7XG5cdFx0XHQvLyBUdXJuIGRvdWJsZSByZXR1cm5zIGludG8gdHJpcGxlIHJldHVybnMsIHNvIHRoYXQgd2UgY2FuIG1ha2UgYVxuXHRcdFx0Ly8gcGFyYWdyYXBoIGZvciB0aGUgbGFzdCBpdGVtIGluIGEgbGlzdCwgaWYgbmVjZXNzYXJ5OlxuXHRcdFx0dmFyIGxpc3QgPSBsaXN0LnJlcGxhY2UoL1xcbnsyLH0vZyxcIlxcblxcblxcblwiKTs7XG5cdFx0XHR2YXIgcmVzdWx0ID0gX1Byb2Nlc3NMaXN0SXRlbXMobGlzdCk7XG5cdFx0XHRyZXN1bHQgPSBydW51cCArIFwiPFwiK2xpc3RfdHlwZStcIj5cXG5cIiArIHJlc3VsdCArIFwiPC9cIitsaXN0X3R5cGUrXCI+XFxuXCI7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gYXR0YWNrbGFiOiBzdHJpcCBzZW50aW5lbFxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+MC8sXCJcIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbl9Qcm9jZXNzTGlzdEl0ZW1zID0gZnVuY3Rpb24obGlzdF9zdHIpIHtcbi8vXG4vLyAgUHJvY2VzcyB0aGUgY29udGVudHMgb2YgYSBzaW5nbGUgb3JkZXJlZCBvciB1bm9yZGVyZWQgbGlzdCwgc3BsaXR0aW5nIGl0XG4vLyAgaW50byBpbmRpdmlkdWFsIGxpc3QgaXRlbXMuXG4vL1xuXHQvLyBUaGUgJGdfbGlzdF9sZXZlbCBnbG9iYWwga2VlcHMgdHJhY2sgb2Ygd2hlbiB3ZSdyZSBpbnNpZGUgYSBsaXN0LlxuXHQvLyBFYWNoIHRpbWUgd2UgZW50ZXIgYSBsaXN0LCB3ZSBpbmNyZW1lbnQgaXQ7IHdoZW4gd2UgbGVhdmUgYSBsaXN0LFxuXHQvLyB3ZSBkZWNyZW1lbnQuIElmIGl0J3MgemVybywgd2UncmUgbm90IGluIGEgbGlzdCBhbnltb3JlLlxuXHQvL1xuXHQvLyBXZSBkbyB0aGlzIGJlY2F1c2Ugd2hlbiB3ZSdyZSBub3QgaW5zaWRlIGEgbGlzdCwgd2Ugd2FudCB0byB0cmVhdFxuXHQvLyBzb21ldGhpbmcgbGlrZSB0aGlzOlxuXHQvL1xuXHQvLyAgICBJIHJlY29tbWVuZCB1cGdyYWRpbmcgdG8gdmVyc2lvblxuXHQvLyAgICA4LiBPb3BzLCBub3cgdGhpcyBsaW5lIGlzIHRyZWF0ZWRcblx0Ly8gICAgYXMgYSBzdWItbGlzdC5cblx0Ly9cblx0Ly8gQXMgYSBzaW5nbGUgcGFyYWdyYXBoLCBkZXNwaXRlIHRoZSBmYWN0IHRoYXQgdGhlIHNlY29uZCBsaW5lIHN0YXJ0c1xuXHQvLyB3aXRoIGEgZGlnaXQtcGVyaW9kLXNwYWNlIHNlcXVlbmNlLlxuXHQvL1xuXHQvLyBXaGVyZWFzIHdoZW4gd2UncmUgaW5zaWRlIGEgbGlzdCAob3Igc3ViLWxpc3QpLCB0aGF0IGxpbmUgd2lsbCBiZVxuXHQvLyB0cmVhdGVkIGFzIHRoZSBzdGFydCBvZiBhIHN1Yi1saXN0LiBXaGF0IGEga2x1ZGdlLCBodWg/IFRoaXMgaXNcblx0Ly8gYW4gYXNwZWN0IG9mIE1hcmtkb3duJ3Mgc3ludGF4IHRoYXQncyBoYXJkIHRvIHBhcnNlIHBlcmZlY3RseVxuXHQvLyB3aXRob3V0IHJlc29ydGluZyB0byBtaW5kLXJlYWRpbmcuIFBlcmhhcHMgdGhlIHNvbHV0aW9uIGlzIHRvXG5cdC8vIGNoYW5nZSB0aGUgc3ludGF4IHJ1bGVzIHN1Y2ggdGhhdCBzdWItbGlzdHMgbXVzdCBzdGFydCB3aXRoIGFcblx0Ly8gc3RhcnRpbmcgY2FyZGluYWwgbnVtYmVyOyBlLmcuIFwiMS5cIiBvciBcImEuXCIuXG5cblx0Z19saXN0X2xldmVsKys7XG5cblx0Ly8gdHJpbSB0cmFpbGluZyBibGFuayBsaW5lczpcblx0bGlzdF9zdHIgPSBsaXN0X3N0ci5yZXBsYWNlKC9cXG57Mix9JC8sXCJcXG5cIik7XG5cblx0Ly8gYXR0YWNrbGFiOiBhZGQgc2VudGluZWwgdG8gZW11bGF0ZSBcXHpcblx0bGlzdF9zdHIgKz0gXCJ+MFwiO1xuXG5cdC8qXG5cdFx0bGlzdF9zdHIgPSBsaXN0X3N0ci5yZXBsYWNlKC9cblx0XHRcdChcXG4pP1x0XHRcdFx0XHRcdFx0Ly8gbGVhZGluZyBsaW5lID0gJDFcblx0XHRcdCheWyBcXHRdKilcdFx0XHRcdFx0XHQvLyBsZWFkaW5nIHdoaXRlc3BhY2UgPSAkMlxuXHRcdFx0KFsqKy1dfFxcZCtbLl0pIFsgXFx0XStcdFx0XHQvLyBsaXN0IG1hcmtlciA9ICQzXG5cdFx0XHQoW15cXHJdKz9cdFx0XHRcdFx0XHQvLyBsaXN0IGl0ZW0gdGV4dCAgID0gJDRcblx0XHRcdChcXG57MSwyfSkpXG5cdFx0XHQoPz0gXFxuKiAofjAgfCBcXDIgKFsqKy1dfFxcZCtbLl0pIFsgXFx0XSspKVxuXHRcdC9nbSwgZnVuY3Rpb24oKXsuLi59KTtcblx0Ki9cblx0bGlzdF9zdHIgPSBsaXN0X3N0ci5yZXBsYWNlKC8oXFxuKT8oXlsgXFx0XSopKFsqKy1dfFxcZCtbLl0pWyBcXHRdKyhbXlxccl0rPyhcXG57MSwyfSkpKD89XFxuKih+MHxcXDIoWyorLV18XFxkK1suXSlbIFxcdF0rKSkvZ20sXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMixtMyxtNCl7XG5cdFx0XHR2YXIgaXRlbSA9IG00O1xuXHRcdFx0dmFyIGxlYWRpbmdfbGluZSA9IG0xO1xuXHRcdFx0dmFyIGxlYWRpbmdfc3BhY2UgPSBtMjtcblxuXHRcdFx0aWYgKGxlYWRpbmdfbGluZSB8fCAoaXRlbS5zZWFyY2goL1xcbnsyLH0vKT4tMSkpIHtcblx0XHRcdFx0aXRlbSA9IF9SdW5CbG9ja0dhbXV0KF9PdXRkZW50KGl0ZW0pKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBSZWN1cnNpb24gZm9yIHN1Yi1saXN0czpcblx0XHRcdFx0aXRlbSA9IF9Eb0xpc3RzKF9PdXRkZW50KGl0ZW0pKTtcblx0XHRcdFx0aXRlbSA9IGl0ZW0ucmVwbGFjZSgvXFxuJC8sXCJcIik7IC8vIGNob21wKGl0ZW0pXG5cdFx0XHRcdGl0ZW0gPSBfUnVuU3BhbkdhbXV0KGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gIFwiPGxpPlwiICsgaXRlbSArIFwiPC9saT5cXG5cIjtcblx0XHR9XG5cdCk7XG5cblx0Ly8gYXR0YWNrbGFiOiBzdHJpcCBzZW50aW5lbFxuXHRsaXN0X3N0ciA9IGxpc3Rfc3RyLnJlcGxhY2UoL34wL2csXCJcIik7XG5cblx0Z19saXN0X2xldmVsLS07XG5cdHJldHVybiBsaXN0X3N0cjtcbn1cblxuXG52YXIgX0RvQ29kZUJsb2NrcyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyAgUHJvY2VzcyBNYXJrZG93biBgPHByZT48Y29kZT5gIGJsb2Nrcy5cbi8vXG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHRleHQsXG5cdFx0XHQvKD86XFxuXFxufF4pXG5cdFx0XHQoXHRcdFx0XHRcdFx0XHRcdC8vICQxID0gdGhlIGNvZGUgYmxvY2sgLS0gb25lIG9yIG1vcmUgbGluZXMsIHN0YXJ0aW5nIHdpdGggYSBzcGFjZS90YWJcblx0XHRcdFx0KD86XG5cdFx0XHRcdFx0KD86WyBdezR9fFxcdClcdFx0XHQvLyBMaW5lcyBtdXN0IHN0YXJ0IHdpdGggYSB0YWIgb3IgYSB0YWItd2lkdGggb2Ygc3BhY2VzIC0gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXHRcdFx0XHRcdC4qXFxuK1xuXHRcdFx0XHQpK1xuXHRcdFx0KVxuXHRcdFx0KFxcbipbIF17MCwzfVteIFxcdFxcbl18KD89fjApKVx0Ly8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXHRcdC9nLGZ1bmN0aW9uKCl7Li4ufSk7XG5cdCovXG5cblx0Ly8gYXR0YWNrbGFiOiBzZW50aW5lbCB3b3JrYXJvdW5kcyBmb3IgbGFjayBvZiBcXEEgYW5kIFxcWiwgc2FmYXJpXFxraHRtbCBidWdcblx0dGV4dCArPSBcIn4wXCI7XG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKD86XFxuXFxufF4pKCg/Oig/OlsgXXs0fXxcXHQpLipcXG4rKSspKFxcbipbIF17MCwzfVteIFxcdFxcbl18KD89fjApKS9nLFxuXHRcdGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIpIHtcblx0XHRcdHZhciBjb2RlYmxvY2sgPSBtMTtcblx0XHRcdHZhciBuZXh0Q2hhciA9IG0yO1xuXG5cdFx0XHRjb2RlYmxvY2sgPSBfRW5jb2RlQ29kZSggX091dGRlbnQoY29kZWJsb2NrKSk7XG5cdFx0XHRjb2RlYmxvY2sgPSBfRGV0YWIoY29kZWJsb2NrKTtcblx0XHRcdGNvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC9eXFxuKy9nLFwiXCIpOyAvLyB0cmltIGxlYWRpbmcgbmV3bGluZXNcblx0XHRcdGNvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC9cXG4rJC9nLFwiXCIpOyAvLyB0cmltIHRyYWlsaW5nIHdoaXRlc3BhY2VcblxuXHRcdFx0Y29kZWJsb2NrID0gXCI8cHJlPjxjb2RlPlwiICsgY29kZWJsb2NrICsgXCJcXG48L2NvZGU+PC9wcmU+XCI7XG5cblx0XHRcdHJldHVybiBoYXNoQmxvY2soY29kZWJsb2NrKSArIG5leHRDaGFyO1xuXHRcdH1cblx0KTtcblxuXHQvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL34wLyxcIlwiKTtcblxuXHRyZXR1cm4gdGV4dDtcbn07XG5cbnZhciBfRG9HaXRodWJDb2RlQmxvY2tzID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vICBQcm9jZXNzIEdpdGh1Yi1zdHlsZSBjb2RlIGJsb2Nrc1xuLy8gIEV4YW1wbGU6XG4vLyAgYGBgcnVieVxuLy8gIGRlZiBoZWxsb193b3JsZCh4KVxuLy8gICAgcHV0cyBcIkhlbGxvLCAje3h9XCJcbi8vICBlbmRcbi8vICBgYGBcbi8vXG5cblxuXHQvLyBhdHRhY2tsYWI6IHNlbnRpbmVsIHdvcmthcm91bmRzIGZvciBsYWNrIG9mIFxcQSBhbmQgXFxaLCBzYWZhcmlcXGtodG1sIGJ1Z1xuXHR0ZXh0ICs9IFwifjBcIjtcblxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oPzpefFxcbilgYGAoLiopXFxuKFtcXHNcXFNdKj8pXFxuYGBgL2csXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMikge1xuXHRcdFx0dmFyIGxhbmd1YWdlID0gbTE7XG5cdFx0XHR2YXIgY29kZWJsb2NrID0gbTI7XG5cblx0XHRcdGNvZGVibG9jayA9IF9FbmNvZGVDb2RlKGNvZGVibG9jayk7XG5cdFx0XHRjb2RlYmxvY2sgPSBfRGV0YWIoY29kZWJsb2NrKTtcblx0XHRcdGNvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC9eXFxuKy9nLFwiXCIpOyAvLyB0cmltIGxlYWRpbmcgbmV3bGluZXNcblx0XHRcdGNvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC9cXG4rJC9nLFwiXCIpOyAvLyB0cmltIHRyYWlsaW5nIHdoaXRlc3BhY2VcblxuXHRcdFx0Y29kZWJsb2NrID0gXCI8cHJlPjxjb2RlXCIgKyAobGFuZ3VhZ2UgPyBcIiBjbGFzcz1cXFwiXCIgKyBsYW5ndWFnZSArICdcIicgOiBcIlwiKSArIFwiPlwiICsgY29kZWJsb2NrICsgXCJcXG48L2NvZGU+PC9wcmU+XCI7XG5cblx0XHRcdHJldHVybiBoYXNoQmxvY2soY29kZWJsb2NrKTtcblx0XHR9XG5cdCk7XG5cblx0Ly8gYXR0YWNrbGFiOiBzdHJpcCBzZW50aW5lbFxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+MC8sXCJcIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciBoYXNoQmxvY2sgPSBmdW5jdGlvbih0ZXh0KSB7XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyheXFxuK3xcXG4rJCkvZyxcIlwiKTtcblx0cmV0dXJuIFwiXFxuXFxufktcIiArIChnX2h0bWxfYmxvY2tzLnB1c2godGV4dCktMSkgKyBcIktcXG5cXG5cIjtcbn1cblxudmFyIF9Eb0NvZGVTcGFucyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyAgICogIEJhY2t0aWNrIHF1b3RlcyBhcmUgdXNlZCBmb3IgPGNvZGU+PC9jb2RlPiBzcGFucy5cbi8vXG4vLyAgICogIFlvdSBjYW4gdXNlIG11bHRpcGxlIGJhY2t0aWNrcyBhcyB0aGUgZGVsaW1pdGVycyBpZiB5b3Ugd2FudCB0b1xuLy9cdCBpbmNsdWRlIGxpdGVyYWwgYmFja3RpY2tzIGluIHRoZSBjb2RlIHNwYW4uIFNvLCB0aGlzIGlucHV0OlxuLy9cbi8vXHRcdCBKdXN0IHR5cGUgYGBmb28gYGJhcmAgYmF6YGAgYXQgdGhlIHByb21wdC5cbi8vXG4vL1x0ICAgV2lsbCB0cmFuc2xhdGUgdG86XG4vL1xuLy9cdFx0IDxwPkp1c3QgdHlwZSA8Y29kZT5mb28gYGJhcmAgYmF6PC9jb2RlPiBhdCB0aGUgcHJvbXB0LjwvcD5cbi8vXG4vL1x0VGhlcmUncyBubyBhcmJpdHJhcnkgbGltaXQgdG8gdGhlIG51bWJlciBvZiBiYWNrdGlja3MgeW91XG4vL1x0Y2FuIHVzZSBhcyBkZWxpbXRlcnMuIElmIHlvdSBuZWVkIHRocmVlIGNvbnNlY3V0aXZlIGJhY2t0aWNrc1xuLy9cdGluIHlvdXIgY29kZSwgdXNlIGZvdXIgZm9yIGRlbGltaXRlcnMsIGV0Yy5cbi8vXG4vLyAgKiAgWW91IGNhbiB1c2Ugc3BhY2VzIHRvIGdldCBsaXRlcmFsIGJhY2t0aWNrcyBhdCB0aGUgZWRnZXM6XG4vL1xuLy9cdFx0IC4uLiB0eXBlIGBgIGBiYXJgIGBgIC4uLlxuLy9cbi8vXHQgICBUdXJucyB0bzpcbi8vXG4vL1x0XHQgLi4uIHR5cGUgPGNvZGU+YGJhcmA8L2NvZGU+IC4uLlxuLy9cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdFx0KF58W15cXFxcXSlcdFx0XHRcdFx0Ly8gQ2hhcmFjdGVyIGJlZm9yZSBvcGVuaW5nIGAgY2FuJ3QgYmUgYSBiYWNrc2xhc2hcblx0XHRcdChgKylcdFx0XHRcdFx0XHQvLyAkMiA9IE9wZW5pbmcgcnVuIG9mIGBcblx0XHRcdChcdFx0XHRcdFx0XHRcdC8vICQzID0gVGhlIGNvZGUgYmxvY2tcblx0XHRcdFx0W15cXHJdKj9cblx0XHRcdFx0W15gXVx0XHRcdFx0XHQvLyBhdHRhY2tsYWI6IHdvcmsgYXJvdW5kIGxhY2sgb2YgbG9va2JlaGluZFxuXHRcdFx0KVxuXHRcdFx0XFwyXHRcdFx0XHRcdFx0XHQvLyBNYXRjaGluZyBjbG9zZXJcblx0XHRcdCg/IWApXG5cdFx0L2dtLCBmdW5jdGlvbigpey4uLn0pO1xuXHQqL1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhefFteXFxcXF0pKGArKShbXlxccl0qP1teYF0pXFwyKD8hYCkvZ20sXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMixtMyxtNCkge1xuXHRcdFx0dmFyIGMgPSBtMztcblx0XHRcdGMgPSBjLnJlcGxhY2UoL14oWyBcXHRdKikvZyxcIlwiKTtcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuXHRcdFx0YyA9IGMucmVwbGFjZSgvWyBcXHRdKiQvZyxcIlwiKTtcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdGMgPSBfRW5jb2RlQ29kZShjKTtcblx0XHRcdHJldHVybiBtMStcIjxjb2RlPlwiK2MrXCI8L2NvZGU+XCI7XG5cdFx0fSk7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciBfRW5jb2RlQ29kZSA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBFbmNvZGUvZXNjYXBlIGNlcnRhaW4gY2hhcmFjdGVycyBpbnNpZGUgTWFya2Rvd24gY29kZSBydW5zLlxuLy8gVGhlIHBvaW50IGlzIHRoYXQgaW4gY29kZSwgdGhlc2UgY2hhcmFjdGVycyBhcmUgbGl0ZXJhbHMsXG4vLyBhbmQgbG9zZSB0aGVpciBzcGVjaWFsIE1hcmtkb3duIG1lYW5pbmdzLlxuLy9cblx0Ly8gRW5jb2RlIGFsbCBhbXBlcnNhbmRzOyBIVE1MIGVudGl0aWVzIGFyZSBub3Rcblx0Ly8gZW50aXRpZXMgd2l0aGluIGEgTWFya2Rvd24gY29kZSBzcGFuLlxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mL2csXCImYW1wO1wiKTtcblxuXHQvLyBEbyB0aGUgYW5nbGUgYnJhY2tldCBzb25nIGFuZCBkYW5jZTpcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvPC9nLFwiJmx0O1wiKTtcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvPi9nLFwiJmd0O1wiKTtcblxuXHQvLyBOb3csIGVzY2FwZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG1hZ2ljIGluIE1hcmtkb3duOlxuXHR0ZXh0ID0gZXNjYXBlQ2hhcmFjdGVycyh0ZXh0LFwiXFwqX3t9W11cXFxcXCIsZmFsc2UpO1xuXG4vLyBqaiB0aGUgbGluZSBhYm92ZSBicmVha3MgdGhpczpcbi8vLS0tXG5cbi8vKiBJdGVtXG5cbi8vICAgMS4gU3ViaXRlbVxuXG4vLyAgICAgICAgICAgIHNwZWNpYWwgY2hhcjogKlxuLy8tLS1cblxuXHRyZXR1cm4gdGV4dDtcbn1cblxuXG52YXIgX0RvSXRhbGljc0FuZEJvbGQgPSBmdW5jdGlvbih0ZXh0KSB7XG5cblx0Ly8gPHN0cm9uZz4gbXVzdCBnbyBmaXJzdDpcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcKlxcKnxfXykoPz1cXFMpKFteXFxyXSo/XFxTWypfXSopXFwxL2csXG5cdFx0XCI8c3Ryb25nPiQyPC9zdHJvbmc+XCIpO1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXCp8XykoPz1cXFMpKFteXFxyXSo/XFxTKVxcMS9nLFxuXHRcdFwiPGVtPiQyPC9lbT5cIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cblxudmFyIF9Eb0Jsb2NrUXVvdGVzID0gZnVuY3Rpb24odGV4dCkge1xuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHRcdFx0XHRcdFx0XHQvLyBXcmFwIHdob2xlIG1hdGNoIGluICQxXG5cdFx0XHQoXG5cdFx0XHRcdF5bIFxcdF0qPlsgXFx0XT9cdFx0XHQvLyAnPicgYXQgdGhlIHN0YXJ0IG9mIGEgbGluZVxuXHRcdFx0XHQuK1xcblx0XHRcdFx0XHQvLyByZXN0IG9mIHRoZSBmaXJzdCBsaW5lXG5cdFx0XHRcdCguK1xcbikqXHRcdFx0XHRcdC8vIHN1YnNlcXVlbnQgY29uc2VjdXRpdmUgbGluZXNcblx0XHRcdFx0XFxuKlx0XHRcdFx0XHRcdC8vIGJsYW5rc1xuXHRcdFx0KStcblx0XHQpXG5cdFx0L2dtLCBmdW5jdGlvbigpey4uLn0pO1xuXHQqL1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLygoXlsgXFx0XSo+WyBcXHRdPy4rXFxuKC4rXFxuKSpcXG4qKSspL2dtLFxuXHRcdGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEpIHtcblx0XHRcdHZhciBicSA9IG0xO1xuXG5cdFx0XHQvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIEtvbnF1ZXJvciAzLjUuNCBidWc6XG5cdFx0XHQvLyBcIi0tLS0tLS0tLS1idWdcIi5yZXBsYWNlKC9eLS9nLFwiXCIpID09IFwiYnVnXCJcblxuXHRcdFx0YnEgPSBicS5yZXBsYWNlKC9eWyBcXHRdKj5bIFxcdF0/L2dtLFwifjBcIik7XHQvLyB0cmltIG9uZSBsZXZlbCBvZiBxdW90aW5nXG5cblx0XHRcdC8vIGF0dGFja2xhYjogY2xlYW4gdXAgaGFja1xuXHRcdFx0YnEgPSBicS5yZXBsYWNlKC9+MC9nLFwiXCIpO1xuXG5cdFx0XHRicSA9IGJxLnJlcGxhY2UoL15bIFxcdF0rJC9nbSxcIlwiKTtcdFx0Ly8gdHJpbSB3aGl0ZXNwYWNlLW9ubHkgbGluZXNcblx0XHRcdGJxID0gX1J1bkJsb2NrR2FtdXQoYnEpO1x0XHRcdFx0Ly8gcmVjdXJzZVxuXG5cdFx0XHRicSA9IGJxLnJlcGxhY2UoLyhefFxcbikvZyxcIiQxICBcIik7XG5cdFx0XHQvLyBUaGVzZSBsZWFkaW5nIHNwYWNlcyBzY3JldyB3aXRoIDxwcmU+IGNvbnRlbnQsIHNvIHdlIG5lZWQgdG8gZml4IHRoYXQ6XG5cdFx0XHRicSA9IGJxLnJlcGxhY2UoXG5cdFx0XHRcdFx0LyhcXHMqPHByZT5bXlxccl0rPzxcXC9wcmU+KS9nbSxcblx0XHRcdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSkge1xuXHRcdFx0XHRcdHZhciBwcmUgPSBtMTtcblx0XHRcdFx0XHQvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIEtvbnF1ZXJvciAzLjUuNCBidWc6XG5cdFx0XHRcdFx0cHJlID0gcHJlLnJlcGxhY2UoL14gIC9tZyxcIn4wXCIpO1xuXHRcdFx0XHRcdHByZSA9IHByZS5yZXBsYWNlKC9+MC9nLFwiXCIpO1xuXHRcdFx0XHRcdHJldHVybiBwcmU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gaGFzaEJsb2NrKFwiPGJsb2NrcXVvdGU+XFxuXCIgKyBicSArIFwiXFxuPC9ibG9ja3F1b3RlPlwiKTtcblx0XHR9KTtcblx0cmV0dXJuIHRleHQ7XG59XG5cblxudmFyIF9Gb3JtUGFyYWdyYXBocyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyAgUGFyYW1zOlxuLy8gICAgJHRleHQgLSBzdHJpbmcgdG8gcHJvY2VzcyB3aXRoIGh0bWwgPHA+IHRhZ3Ncbi8vXG5cblx0Ly8gU3RyaXAgbGVhZGluZyBhbmQgdHJhaWxpbmcgbGluZXM6XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL15cXG4rL2csXCJcIik7XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbiskL2csXCJcIik7XG5cblx0dmFyIGdyYWZzID0gdGV4dC5zcGxpdCgvXFxuezIsfS9nKTtcblx0dmFyIGdyYWZzT3V0ID0gW107XG5cblx0Ly9cblx0Ly8gV3JhcCA8cD4gdGFncy5cblx0Ly9cblx0dmFyIGVuZCA9IGdyYWZzLmxlbmd0aDtcblx0Zm9yICh2YXIgaT0wOyBpPGVuZDsgaSsrKSB7XG5cdFx0dmFyIHN0ciA9IGdyYWZzW2ldO1xuXG5cdFx0Ly8gaWYgdGhpcyBpcyBhbiBIVE1MIG1hcmtlciwgY29weSBpdFxuXHRcdGlmIChzdHIuc2VhcmNoKC9+SyhcXGQrKUsvZykgPj0gMCkge1xuXHRcdFx0Z3JhZnNPdXQucHVzaChzdHIpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChzdHIuc2VhcmNoKC9cXFMvKSA+PSAwKSB7XG5cdFx0XHRzdHIgPSBfUnVuU3BhbkdhbXV0KHN0cik7XG5cdFx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXihbIFxcdF0qKS9nLFwiPHA+XCIpO1xuXHRcdFx0c3RyICs9IFwiPC9wPlwiXG5cdFx0XHRncmFmc091dC5wdXNoKHN0cik7XG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBVbmhhc2hpZnkgSFRNTCBibG9ja3Ncblx0Ly9cblx0ZW5kID0gZ3JhZnNPdXQubGVuZ3RoO1xuXHRmb3IgKHZhciBpPTA7IGk8ZW5kOyBpKyspIHtcblx0XHQvLyBpZiB0aGlzIGlzIGEgbWFya2VyIGZvciBhbiBodG1sIGJsb2NrLi4uXG5cdFx0d2hpbGUgKGdyYWZzT3V0W2ldLnNlYXJjaCgvfksoXFxkKylLLykgPj0gMCkge1xuXHRcdFx0dmFyIGJsb2NrVGV4dCA9IGdfaHRtbF9ibG9ja3NbUmVnRXhwLiQxXTtcblx0XHRcdGJsb2NrVGV4dCA9IGJsb2NrVGV4dC5yZXBsYWNlKC9cXCQvZyxcIiQkJCRcIik7IC8vIEVzY2FwZSBhbnkgZG9sbGFyIHNpZ25zXG5cdFx0XHRncmFmc091dFtpXSA9IGdyYWZzT3V0W2ldLnJlcGxhY2UoL35LXFxkK0svLGJsb2NrVGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYWZzT3V0LmpvaW4oXCJcXG5cXG5cIik7XG59XG5cblxudmFyIF9FbmNvZGVBbXBzQW5kQW5nbGVzID0gZnVuY3Rpb24odGV4dCkge1xuLy8gU21hcnQgcHJvY2Vzc2luZyBmb3IgYW1wZXJzYW5kcyBhbmQgYW5nbGUgYnJhY2tldHMgdGhhdCBuZWVkIHRvIGJlIGVuY29kZWQuXG5cblx0Ly8gQW1wZXJzYW5kLWVuY29kaW5nIGJhc2VkIGVudGlyZWx5IG9uIE5hdCBJcm9ucydzIEFtcHV0YXRvciBNVCBwbHVnaW46XG5cdC8vICAgaHR0cDovL2J1bXBwby5uZXQvcHJvamVjdHMvYW1wdXRhdG9yL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mKD8hIz9beFhdPyg/OlswLTlhLWZBLUZdK3xcXHcrKTspL2csXCImYW1wO1wiKTtcblxuXHQvLyBFbmNvZGUgbmFrZWQgPCdzXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwoPyFbYS16XFwvP1xcJCFdKS9naSxcIiZsdDtcIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cblxudmFyIF9FbmNvZGVCYWNrc2xhc2hFc2NhcGVzID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vICAgUGFyYW1ldGVyOiAgU3RyaW5nLlxuLy8gICBSZXR1cm5zOlx0VGhlIHN0cmluZywgd2l0aCBhZnRlciBwcm9jZXNzaW5nIHRoZSBmb2xsb3dpbmcgYmFja3NsYXNoXG4vL1x0XHRcdCAgIGVzY2FwZSBzZXF1ZW5jZXMuXG4vL1xuXG5cdC8vIGF0dGFja2xhYjogVGhlIHBvbGl0ZSB3YXkgdG8gZG8gdGhpcyBpcyB3aXRoIHRoZSBuZXdcblx0Ly8gZXNjYXBlQ2hhcmFjdGVycygpIGZ1bmN0aW9uOlxuXHQvL1xuXHQvLyBcdHRleHQgPSBlc2NhcGVDaGFyYWN0ZXJzKHRleHQsXCJcXFxcXCIsdHJ1ZSk7XG5cdC8vIFx0dGV4dCA9IGVzY2FwZUNoYXJhY3RlcnModGV4dCxcImAqX3t9W10oKT4jKy0uIVwiLHRydWUpO1xuXHQvL1xuXHQvLyAuLi5idXQgd2UncmUgc2lkZXN0ZXBwaW5nIGl0cyB1c2Ugb2YgdGhlIChzbG93KSBSZWdFeHAgY29uc3RydWN0b3Jcblx0Ly8gYXMgYW4gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiAgVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhIExPVC5cblxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFxcKFxcXFwpL2csZXNjYXBlQ2hhcmFjdGVyc19jYWxsYmFjayk7XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwoW2AqX3t9XFxbXFxdKCk+IystLiFdKS9nLGVzY2FwZUNoYXJhY3RlcnNfY2FsbGJhY2spO1xuXHRyZXR1cm4gdGV4dDtcbn1cblxuXG52YXIgX0RvQXV0b0xpbmtzID0gZnVuY3Rpb24odGV4dCkge1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwoKGh0dHBzP3xmdHB8ZGljdCk6W14nXCI+XFxzXSspPi9naSxcIjxhIGhyZWY9XFxcIiQxXFxcIj4kMTwvYT5cIik7XG5cblx0Ly8gRW1haWwgYWRkcmVzc2VzOiA8YWRkcmVzc0Bkb21haW4uZm9vPlxuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0XHQ8XG5cdFx0XHQoPzptYWlsdG86KT9cblx0XHRcdChcblx0XHRcdFx0Wy0uXFx3XStcblx0XHRcdFx0XFxAXG5cdFx0XHRcdFstYS16MC05XSsoXFwuWy1hLXowLTldKykqXFwuW2Etel0rXG5cdFx0XHQpXG5cdFx0XHQ+XG5cdFx0L2dpLCBfRG9BdXRvTGlua3NfY2FsbGJhY2soKSk7XG5cdCovXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwoPzptYWlsdG86KT8oWy0uXFx3XStcXEBbLWEtejAtOV0rKFxcLlstYS16MC05XSspKlxcLlthLXpdKyk+L2dpLFxuXHRcdGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEpIHtcblx0XHRcdHJldHVybiBfRW5jb2RlRW1haWxBZGRyZXNzKCBfVW5lc2NhcGVTcGVjaWFsQ2hhcnMobTEpICk7XG5cdFx0fVxuXHQpO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbnZhciBfRW5jb2RlRW1haWxBZGRyZXNzID0gZnVuY3Rpb24oYWRkcikge1xuLy9cbi8vICBJbnB1dDogYW4gZW1haWwgYWRkcmVzcywgZS5nLiBcImZvb0BleGFtcGxlLmNvbVwiXG4vL1xuLy8gIE91dHB1dDogdGhlIGVtYWlsIGFkZHJlc3MgYXMgYSBtYWlsdG8gbGluaywgd2l0aCBlYWNoIGNoYXJhY3RlclxuLy9cdG9mIHRoZSBhZGRyZXNzIGVuY29kZWQgYXMgZWl0aGVyIGEgZGVjaW1hbCBvciBoZXggZW50aXR5LCBpblxuLy9cdHRoZSBob3BlcyBvZiBmb2lsaW5nIG1vc3QgYWRkcmVzcyBoYXJ2ZXN0aW5nIHNwYW0gYm90cy4gRS5nLjpcbi8vXG4vL1x0PGEgaHJlZj1cIiYjeDZEOyYjOTc7JiMxMDU7JiMxMDg7JiN4NzQ7JiMxMTE7OiYjMTAyOyYjMTExOyYjMTExOyYjNjQ7JiMxMDE7XG4vL1x0ICAgeCYjeDYxOyYjMTA5OyYjeDcwOyYjMTA4OyYjeDY1OyYjeDJFOyYjOTk7JiMxMTE7JiMxMDk7XCI+JiMxMDI7JiMxMTE7JiMxMTE7XG4vL1x0ICAgJiM2NDsmIzEwMTt4JiN4NjE7JiMxMDk7JiN4NzA7JiMxMDg7JiN4NjU7JiN4MkU7JiM5OTsmIzExMTsmIzEwOTs8L2E+XG4vL1xuLy8gIEJhc2VkIG9uIGEgZmlsdGVyIGJ5IE1hdHRoZXcgV2lja2xpbmUsIHBvc3RlZCB0byB0aGUgQkJFZGl0LVRhbGtcbi8vICBtYWlsaW5nIGxpc3Q6IDxodHRwOi8vdGlueXVybC5jb20veXU3dWU+XG4vL1xuXG5cdHZhciBlbmNvZGUgPSBbXG5cdFx0ZnVuY3Rpb24oY2gpe3JldHVybiBcIiYjXCIrY2guY2hhckNvZGVBdCgwKStcIjtcIjt9LFxuXHRcdGZ1bmN0aW9uKGNoKXtyZXR1cm4gXCImI3hcIitjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KStcIjtcIjt9LFxuXHRcdGZ1bmN0aW9uKGNoKXtyZXR1cm4gY2g7fVxuXHRdO1xuXG5cdGFkZHIgPSBcIm1haWx0bzpcIiArIGFkZHI7XG5cblx0YWRkciA9IGFkZHIucmVwbGFjZSgvLi9nLCBmdW5jdGlvbihjaCkge1xuXHRcdGlmIChjaCA9PSBcIkBcIikge1xuXHRcdCAgIFx0Ly8gdGhpcyAqbXVzdCogYmUgZW5jb2RlZC4gSSBpbnNpc3QuXG5cdFx0XHRjaCA9IGVuY29kZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildKGNoKTtcblx0XHR9IGVsc2UgaWYgKGNoICE9XCI6XCIpIHtcblx0XHRcdC8vIGxlYXZlICc6JyBhbG9uZSAodG8gc3BvdCBtYWlsdG86IGxhdGVyKVxuXHRcdFx0dmFyIHIgPSBNYXRoLnJhbmRvbSgpO1xuXHRcdFx0Ly8gcm91Z2hseSAxMCUgcmF3LCA0NSUgaGV4LCA0NSUgZGVjXG5cdFx0XHRjaCA9ICAoXG5cdFx0XHRcdFx0ciA+IC45ICA/XHRlbmNvZGVbMl0oY2gpICAgOlxuXHRcdFx0XHRcdHIgPiAuNDUgP1x0ZW5jb2RlWzFdKGNoKSAgIDpcblx0XHRcdFx0XHRcdFx0XHRlbmNvZGVbMF0oY2gpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBjaDtcblx0fSk7XG5cblx0YWRkciA9IFwiPGEgaHJlZj1cXFwiXCIgKyBhZGRyICsgXCJcXFwiPlwiICsgYWRkciArIFwiPC9hPlwiO1xuXHRhZGRyID0gYWRkci5yZXBsYWNlKC9cIj4uKzovZyxcIlxcXCI+XCIpOyAvLyBzdHJpcCB0aGUgbWFpbHRvOiBmcm9tIHRoZSB2aXNpYmxlIHBhcnRcblxuXHRyZXR1cm4gYWRkcjtcbn1cblxuXG52YXIgX1VuZXNjYXBlU3BlY2lhbENoYXJzID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vIFN3YXAgYmFjayBpbiBhbGwgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyB3ZSd2ZSBoaWRkZW4uXG4vL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+RShcXGQrKUUvZyxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xKSB7XG5cdFx0XHR2YXIgY2hhckNvZGVUb1JlcGxhY2UgPSBwYXJzZUludChtMSk7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZVRvUmVwbGFjZSk7XG5cdFx0fVxuXHQpO1xuXHRyZXR1cm4gdGV4dDtcbn1cblxuXG52YXIgX091dGRlbnQgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gUmVtb3ZlIG9uZSBsZXZlbCBvZiBsaW5lLWxlYWRpbmcgdGFicyBvciBzcGFjZXNcbi8vXG5cblx0Ly8gYXR0YWNrbGFiOiBoYWNrIGFyb3VuZCBLb25xdWVyb3IgMy41LjQgYnVnOlxuXHQvLyBcIi0tLS0tLS0tLS1idWdcIi5yZXBsYWNlKC9eLS9nLFwiXCIpID09IFwiYnVnXCJcblxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKFxcdHxbIF17MSw0fSkvZ20sXCJ+MFwiKTsgLy8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXG5cdC8vIGF0dGFja2xhYjogY2xlYW4gdXAgaGFja1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+MC9nLFwiXCIpXG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciBfRGV0YWIgPSBmdW5jdGlvbih0ZXh0KSB7XG4vLyBhdHRhY2tsYWI6IERldGFiJ3MgY29tcGxldGVseSByZXdyaXR0ZW4gZm9yIHNwZWVkLlxuLy8gSW4gcGVybCB3ZSBjb3VsZCBmaXggaXQgYnkgYW5jaG9yaW5nIHRoZSByZWdleHAgd2l0aCBcXEcuXG4vLyBJbiBqYXZhc2NyaXB0IHdlJ3JlIGxlc3MgZm9ydHVuYXRlLlxuXG5cdC8vIGV4cGFuZCBmaXJzdCBuLTEgdGFic1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQoPz1cXHQpL2csXCIgICAgXCIpOyAvLyBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoXG5cblx0Ly8gcmVwbGFjZSB0aGUgbnRoIHdpdGggdHdvIHNlbnRpbmVsc1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQvZyxcIn5BfkJcIik7XG5cblx0Ly8gdXNlIHRoZSBzZW50aW5lbCB0byBhbmNob3Igb3VyIHJlZ2V4IHNvIGl0IGRvZXNuJ3QgZXhwbG9kZVxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+QiguKz8pfkEvZyxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xLG0yKSB7XG5cdFx0XHR2YXIgbGVhZGluZ1RleHQgPSBtMTtcblx0XHRcdHZhciBudW1TcGFjZXMgPSA0IC0gbGVhZGluZ1RleHQubGVuZ3RoICUgNDsgIC8vIGF0dGFja2xhYjogZ190YWJfd2lkdGhcblxuXHRcdFx0Ly8gdGhlcmUgKm11c3QqIGJlIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzOlxuXHRcdFx0Zm9yICh2YXIgaT0wOyBpPG51bVNwYWNlczsgaSsrKSBsZWFkaW5nVGV4dCs9XCIgXCI7XG5cblx0XHRcdHJldHVybiBsZWFkaW5nVGV4dDtcblx0XHR9XG5cdCk7XG5cblx0Ly8gY2xlYW4gdXAgc2VudGluZWxzXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL35BL2csXCIgICAgXCIpOyAgLy8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+Qi9nLFwiXCIpO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbi8vXG4vLyAgYXR0YWNrbGFiOiBVdGlsaXR5IGZ1bmN0aW9uc1xuLy9cblxuXG52YXIgZXNjYXBlQ2hhcmFjdGVycyA9IGZ1bmN0aW9uKHRleHQsIGNoYXJzVG9Fc2NhcGUsIGFmdGVyQmFja3NsYXNoKSB7XG5cdC8vIEZpcnN0IHdlIGhhdmUgdG8gZXNjYXBlIHRoZSBlc2NhcGUgY2hhcmFjdGVycyBzbyB0aGF0XG5cdC8vIHdlIGNhbiBidWlsZCBhIGNoYXJhY3RlciBjbGFzcyBvdXQgb2YgdGhlbVxuXHR2YXIgcmVnZXhTdHJpbmcgPSBcIihbXCIgKyBjaGFyc1RvRXNjYXBlLnJlcGxhY2UoLyhbXFxbXFxdXFxcXF0pL2csXCJcXFxcJDFcIikgKyBcIl0pXCI7XG5cblx0aWYgKGFmdGVyQmFja3NsYXNoKSB7XG5cdFx0cmVnZXhTdHJpbmcgPSBcIlxcXFxcXFxcXCIgKyByZWdleFN0cmluZztcblx0fVxuXG5cdHZhciByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcsXCJnXCIpO1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHJlZ2V4LGVzY2FwZUNoYXJhY3RlcnNfY2FsbGJhY2spO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbnZhciBlc2NhcGVDaGFyYWN0ZXJzX2NhbGxiYWNrID0gZnVuY3Rpb24od2hvbGVNYXRjaCxtMSkge1xuXHR2YXIgY2hhckNvZGVUb0VzY2FwZSA9IG0xLmNoYXJDb2RlQXQoMCk7XG5cdHJldHVybiBcIn5FXCIrY2hhckNvZGVUb0VzY2FwZStcIkVcIjtcbn1cblxufSAvLyBlbmQgb2YgU2hvd2Rvd24uY29udmVydGVyXG5cblxuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgU2hvd2Rvd24gIT0gXCJ1bmRlZmluZWRcIiA/IFNob3dkb3duIDogd2luZG93LlNob3dkb3duKTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL3ZlbmRvci9zaG93ZG93bl9mb3JfYnJvd3NlcmlmeS5qc1wiLFwiLy4uLy4uL3ZlbmRvclwiKSJdfQ==
