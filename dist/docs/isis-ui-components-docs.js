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
  'itemList',
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
require( '../library/itemList/docs/demo.js' );

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
},{"../library/contextmenu/docs/demo.js":8,"../library/dropdownNavigator/docs/demo.js":9,"../library/hierarchicalMenu/docs/demo.js":10,"../library/itemList/docs/demo.js":11,"../library/simpleDialog/docs/demo.js":12,"../library/treeNavigator/docs/demo.js":13,"angular-markdown-directive":1,"angular-sanitize":2,"buffer":3,"rH1JPG":6,"showdown":14}],8:[function(require,module,exports){
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
/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.itemList.demo', [ 'isis.ui.itemList' ] );

demoApp.controller( 'ItemListDemoController', function ( $scope ) {


  var
  i,

  items = [],
  itemGenerator,
  getItemContextmenu,
  config;

  itemGenerator = function ( id ) {
    return {
      id: id,
      title: 'List item ' + id,
      toolTip: 'Open item',
      description: 'This is description here',
      lastUpdated: {
        time: Date.now(),
        user: 'N/A'

      },
      stats: [
        {
          value: id,
          tooltip: 'Orders',
          iconClass: 'fa fa-cubes'
        }
      ],
      hasDetails: Math.random() < 0.5,
      details: null,
      detailsCollapsible: true
    };
  };

  for ( i = 0; i < 20; i++ ) {
    items.push( itemGenerator( i ) );
  }

  getItemContextmenu = function ( item ) {

    var defaultItemContextmenu = [
      {
        items: [
          {
            id: 'create',
            label: 'Create new',
            disabled: true,
            iconClass: 'fa fa-plus',
          },
          {
            id: 'dummy',
            label: 'Just for test ' + item.id,

            actionData: item,

            action: function ( data ) {
              console.log( 'testing ', data );
            }

          },
          {
            id: 'rename',
            label: 'Rename'
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
                      console.log( 'testing2 ', data );
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    return defaultItemContextmenu;

  };

  config = {

    sortable: true,
    secondaryItemMenu: true,

    // Event handlers

    itemSort: function ( jQEvent, ui ) {
      console.log( 'Sort happened', jQEvent, ui );
    },

    itemClick: function ( event, item ) {
      console.log( 'Clicked: ' + item );
    },

    itemContextmenuRenderer: function ( e, item ) {
      console.log( 'Contextmenu was triggered for node:', item );

      return getItemContextmenu( item );
    },

    detailsRenderer: function(item) {
      item.details = 'My details are here now!';
    },

    newItemForm: {
      title: 'Create new item',
      itemTemplateUrl: '/library/itemList/docs/newItemTemplate.html',
      expanded: false,
      controller: function ( $scope ) {
        $scope.createItem = function ( newItem ) {

          newItem.url = 'something';
          newItem.toolTip = newItem.title;

          items.push( newItem );

          $scope.newItem = {};

          config.newItemForm.expanded = false; // this is how you close the form itself

        };
      }
    },

    filter: {}

  };

  $scope.listData = {
    items: items
  };

  $scope.config = config;

} );
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../library/itemList/docs/demo.js","/../library/itemList/docs")
},{"buffer":3,"rH1JPG":6}],12:[function(require,module,exports){
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
},{"buffer":3,"rH1JPG":6}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.treeNavigator.demo', [ 'isis.ui.treeNavigator' ] );

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
      children = [];


    // node structure
    newTreeNode = {
      label: id,
      extraInfo: 'Extra info',
      children: children,
      childrenCount: 0,
      nodeData: {},
      iconClass: 'fa fa-file-o',

      draggable: true,
      dragChannel: 'a',
      dropChannel: (Math.random() > 0.5) ? 'a' : 'b'
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
              $scope.config.state.activeScope = 'project';
              $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 0 ];
            }
          },
          {
            id: 'composition',
            label: 'Composition',
            action: function () {
              $scope.config.state.activeScope = 'composition';
              $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 1 ];
            }
          }
        ]
      }

    ],

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
},{"buffer":3,"rH1JPG":6}],14:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9ub2RlX21vZHVsZXMvYW5ndWxhci1tYXJrZG93bi1kaXJlY3RpdmUvbWFya2Rvd24uanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9hbmd1bGFyLXNhbml0aXplL2FuZ3VsYXItc2FuaXRpemUubWluLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2RvY3MvZG9jc19hcHAuanMiLCIvVm9sdW1lcy9Qcm9qZWN0cy93ZWJnbWUvaXNpcy11aS1jb21wb25lbnRzL3NyYy9saWJyYXJ5L2NvbnRleHRtZW51L2RvY3MvZGVtby5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2xpYnJhcnkvZHJvcGRvd25OYXZpZ2F0b3IvZG9jcy9kZW1vLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9zcmMvbGlicmFyeS9oaWVyYXJjaGljYWxNZW51L2RvY3MvZGVtby5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvc3JjL2xpYnJhcnkvaXRlbUxpc3QvZG9jcy9kZW1vLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9zcmMvbGlicmFyeS9zaW1wbGVEaWFsb2cvZG9jcy9kZW1vLmpzIiwiL1ZvbHVtZXMvUHJvamVjdHMvd2ViZ21lL2lzaXMtdWktY29tcG9uZW50cy9zcmMvbGlicmFyeS90cmVlTmF2aWdhdG9yL2RvY3MvZGVtby5qcyIsIi9Wb2x1bWVzL1Byb2plY3RzL3dlYmdtZS9pc2lzLXVpLWNvbXBvbmVudHMvdmVuZG9yL3Nob3dkb3duX2Zvcl9icm93c2VyaWZ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuICogYW5ndWxhci1tYXJrZG93bi1kaXJlY3RpdmUgdjAuMy4wXG4gKiAoYykgMjAxMy0yMDE0IEJyaWFuIEZvcmQgaHR0cDovL2JyaWFudGZvcmQuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdidGZvcmQubWFya2Rvd24nLCBbJ25nU2FuaXRpemUnXSkuXG4gIHByb3ZpZGVyKCdtYXJrZG93bkNvbnZlcnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IGZ1bmN0aW9uIChuZXdPcHRzKSB7XG4gICAgICAgIG9wdHMgPSBuZXdPcHRzO1xuICAgICAgfSxcbiAgICAgICRnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaG93ZG93bi5jb252ZXJ0ZXIob3B0cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkuXG4gIGRpcmVjdGl2ZSgnYnRmTWFya2Rvd24nLCBmdW5jdGlvbiAoJHNhbml0aXplLCBtYXJrZG93bkNvbnZlcnRlcikge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHJzLmJ0Zk1hcmtkb3duKSB7XG4gICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLmJ0Zk1hcmtkb3duLCBmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgICAgICB2YXIgaHRtbCA9IG5ld1ZhbCA/ICRzYW5pdGl6ZShtYXJrZG93bkNvbnZlcnRlci5tYWtlSHRtbChuZXdWYWwpKSA6ICcnO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKGh0bWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBodG1sID0gJHNhbml0aXplKG1hcmtkb3duQ29udmVydGVyLm1ha2VIdG1sKGVsZW1lbnQudGV4dCgpKSk7XG4gICAgICAgICAgZWxlbWVudC5odG1sKGh0bWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItbWFya2Rvd24tZGlyZWN0aXZlL21hcmtkb3duLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItbWFya2Rvd24tZGlyZWN0aXZlXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiBBbmd1bGFySlMgdjEuMi4xMFxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKHAsaCxxKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gRShhKXt2YXIgZT1bXTtzKGUsaC5ub29wKS5jaGFycyhhKTtyZXR1cm4gZS5qb2luKFwiXCIpfWZ1bmN0aW9uIGsoYSl7dmFyIGU9e307YT1hLnNwbGl0KFwiLFwiKTt2YXIgZDtmb3IoZD0wO2Q8YS5sZW5ndGg7ZCsrKWVbYVtkXV09ITA7cmV0dXJuIGV9ZnVuY3Rpb24gRihhLGUpe2Z1bmN0aW9uIGQoYSxiLGQsZyl7Yj1oLmxvd2VyY2FzZShiKTtpZih0W2JdKWZvcig7Zi5sYXN0KCkmJnVbZi5sYXN0KCldOyljKFwiXCIsZi5sYXN0KCkpO3ZbYl0mJmYubGFzdCgpPT1iJiZjKFwiXCIsYik7KGc9d1tiXXx8ISFnKXx8Zi5wdXNoKGIpO3ZhciBsPXt9O2QucmVwbGFjZShHLGZ1bmN0aW9uKGEsYixlLGMsZCl7bFtiXT1yKGV8fGN8fGR8fFwiXCIpfSk7ZS5zdGFydCYmZS5zdGFydChiLGwsZyl9ZnVuY3Rpb24gYyhhLGIpe3ZhciBjPTAsZDtpZihiPWgubG93ZXJjYXNlKGIpKWZvcihjPWYubGVuZ3RoLTE7MDw9YyYmZltjXSE9YjtjLS0pO1xuaWYoMDw9Yyl7Zm9yKGQ9Zi5sZW5ndGgtMTtkPj1jO2QtLSllLmVuZCYmZS5lbmQoZltkXSk7Zi5sZW5ndGg9Y319dmFyIGIsZyxmPVtdLGw9YTtmb3IoZi5sYXN0PWZ1bmN0aW9uKCl7cmV0dXJuIGZbZi5sZW5ndGgtMV19O2E7KXtnPSEwO2lmKGYubGFzdCgpJiZ4W2YubGFzdCgpXSlhPWEucmVwbGFjZShSZWdFeHAoXCIoLiopPFxcXFxzKlxcXFwvXFxcXHMqXCIrZi5sYXN0KCkrXCJbXj5dKj5cIixcImlcIiksZnVuY3Rpb24oYixhKXthPWEucmVwbGFjZShILFwiJDFcIikucmVwbGFjZShJLFwiJDFcIik7ZS5jaGFycyYmZS5jaGFycyhyKGEpKTtyZXR1cm5cIlwifSksYyhcIlwiLGYubGFzdCgpKTtlbHNle2lmKDA9PT1hLmluZGV4T2YoXCJcXHgzYyEtLVwiKSliPWEuaW5kZXhPZihcIi0tXCIsNCksMDw9YiYmYS5sYXN0SW5kZXhPZihcIi0tXFx4M2VcIixiKT09PWImJihlLmNvbW1lbnQmJmUuY29tbWVudChhLnN1YnN0cmluZyg0LGIpKSxhPWEuc3Vic3RyaW5nKGIrMyksZz0hMSk7ZWxzZSBpZih5LnRlc3QoYSkpe2lmKGI9YS5tYXRjaCh5KSlhPVxuYS5yZXBsYWNlKGJbMF0sXCJcIiksZz0hMX1lbHNlIGlmKEoudGVzdChhKSl7aWYoYj1hLm1hdGNoKHopKWE9YS5zdWJzdHJpbmcoYlswXS5sZW5ndGgpLGJbMF0ucmVwbGFjZSh6LGMpLGc9ITF9ZWxzZSBLLnRlc3QoYSkmJihiPWEubWF0Y2goQSkpJiYoYT1hLnN1YnN0cmluZyhiWzBdLmxlbmd0aCksYlswXS5yZXBsYWNlKEEsZCksZz0hMSk7ZyYmKGI9YS5pbmRleE9mKFwiPFwiKSxnPTA+Yj9hOmEuc3Vic3RyaW5nKDAsYiksYT0wPmI/XCJcIjphLnN1YnN0cmluZyhiKSxlLmNoYXJzJiZlLmNoYXJzKHIoZykpKX1pZihhPT1sKXRocm93IEwoXCJiYWRwYXJzZVwiLGEpO2w9YX1jKCl9ZnVuY3Rpb24gcihhKXtpZighYSlyZXR1cm5cIlwiO3ZhciBlPU0uZXhlYyhhKTthPWVbMV07dmFyIGQ9ZVszXTtpZihlPWVbMl0pbi5pbm5lckhUTUw9ZS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLGU9XCJ0ZXh0Q29udGVudFwiaW4gbj9uLnRleHRDb250ZW50Om4uaW5uZXJUZXh0O3JldHVybiBhK2UrZH1mdW5jdGlvbiBCKGEpe3JldHVybiBhLnJlcGxhY2UoLyYvZyxcblwiJmFtcDtcIikucmVwbGFjZShOLGZ1bmN0aW9uKGEpe3JldHVyblwiJiNcIithLmNoYXJDb2RlQXQoMCkrXCI7XCJ9KS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLnJlcGxhY2UoLz4vZyxcIiZndDtcIil9ZnVuY3Rpb24gcyhhLGUpe3ZhciBkPSExLGM9aC5iaW5kKGEsYS5wdXNoKTtyZXR1cm57c3RhcnQ6ZnVuY3Rpb24oYSxnLGYpe2E9aC5sb3dlcmNhc2UoYSk7IWQmJnhbYV0mJihkPWEpO2R8fCEwIT09Q1thXXx8KGMoXCI8XCIpLGMoYSksaC5mb3JFYWNoKGcsZnVuY3Rpb24oZCxmKXt2YXIgZz1oLmxvd2VyY2FzZShmKSxrPVwiaW1nXCI9PT1hJiZcInNyY1wiPT09Z3x8XCJiYWNrZ3JvdW5kXCI9PT1nOyEwIT09T1tnXXx8ITA9PT1EW2ddJiYhZShkLGspfHwoYyhcIiBcIiksYyhmKSxjKCc9XCInKSxjKEIoZCkpLGMoJ1wiJykpfSksYyhmP1wiLz5cIjpcIj5cIikpfSxlbmQ6ZnVuY3Rpb24oYSl7YT1oLmxvd2VyY2FzZShhKTtkfHwhMCE9PUNbYV18fChjKFwiPC9cIiksYyhhKSxjKFwiPlwiKSk7YT09ZCYmKGQ9ITEpfSxjaGFyczpmdW5jdGlvbihhKXtkfHxcbmMoQihhKSl9fX12YXIgTD1oLiQkbWluRXJyKFwiJHNhbml0aXplXCIpLEE9L148XFxzKihbXFx3Oi1dKykoKD86XFxzK1tcXHc6LV0rKD86XFxzKj1cXHMqKD86KD86XCJbXlwiXSpcIil8KD86J1teJ10qJyl8W14+XFxzXSspKT8pKilcXHMqKFxcLz8pXFxzKj4vLHo9L148XFxzKlxcL1xccyooW1xcdzotXSspW14+XSo+LyxHPS8oW1xcdzotXSspKD86XFxzKj1cXHMqKD86KD86XCIoKD86W15cIl0pKilcIil8KD86JygoPzpbXiddKSopJyl8KFtePlxcc10rKSkpPy9nLEs9L148LyxKPS9ePFxccypcXC8vLEg9L1xceDNjIS0tKC4qPyktLVxceDNlL2cseT0vPCFET0NUWVBFKFtePl0qPyk+L2ksST0vPCFcXFtDREFUQVxcWyguKj8pXV1cXHgzZS9nLE49LyhbXlxcIy1+fCB8IV0pL2csdz1rKFwiYXJlYSxicixjb2wsaHIsaW1nLHdiclwiKTtwPWsoXCJjb2xncm91cCxkZCxkdCxsaSxwLHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRyXCIpO3E9ayhcInJwLHJ0XCIpO3ZhciB2PWguZXh0ZW5kKHt9LHEscCksdD1oLmV4dGVuZCh7fSxwLGsoXCJhZGRyZXNzLGFydGljbGUsYXNpZGUsYmxvY2txdW90ZSxjYXB0aW9uLGNlbnRlcixkZWwsZGlyLGRpdixkbCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGVhZGVyLGhncm91cCxocixpbnMsbWFwLG1lbnUsbmF2LG9sLHByZSxzY3JpcHQsc2VjdGlvbix0YWJsZSx1bFwiKSksXG51PWguZXh0ZW5kKHt9LHEsayhcImEsYWJicixhY3JvbnltLGIsYmRpLGJkbyxiaWcsYnIsY2l0ZSxjb2RlLGRlbCxkZm4sZW0sZm9udCxpLGltZyxpbnMsa2JkLGxhYmVsLG1hcCxtYXJrLHEscnVieSxycCxydCxzLHNhbXAsc21hbGwsc3BhbixzdHJpa2Usc3Ryb25nLHN1YixzdXAsdGltZSx0dCx1LHZhclwiKSkseD1rKFwic2NyaXB0LHN0eWxlXCIpLEM9aC5leHRlbmQoe30sdyx0LHUsdiksRD1rKFwiYmFja2dyb3VuZCxjaXRlLGhyZWYsbG9uZ2Rlc2Msc3JjLHVzZW1hcFwiKSxPPWguZXh0ZW5kKHt9LEQsayhcImFiYnIsYWxpZ24sYWx0LGF4aXMsYmdjb2xvcixib3JkZXIsY2VsbHBhZGRpbmcsY2VsbHNwYWNpbmcsY2xhc3MsY2xlYXIsY29sb3IsY29scyxjb2xzcGFuLGNvbXBhY3QsY29vcmRzLGRpcixmYWNlLGhlYWRlcnMsaGVpZ2h0LGhyZWZsYW5nLGhzcGFjZSxpc21hcCxsYW5nLGxhbmd1YWdlLG5vaHJlZixub3dyYXAscmVsLHJldixyb3dzLHJvd3NwYW4scnVsZXMsc2NvcGUsc2Nyb2xsaW5nLHNoYXBlLHNpemUsc3BhbixzdGFydCxzdW1tYXJ5LHRhcmdldCx0aXRsZSx0eXBlLHZhbGlnbix2YWx1ZSx2c3BhY2Usd2lkdGhcIikpLFxubj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpLE09L14oXFxzKikoW1xcc1xcU10qPykoXFxzKikkLztoLm1vZHVsZShcIm5nU2FuaXRpemVcIixbXSkucHJvdmlkZXIoXCIkc2FuaXRpemVcIixmdW5jdGlvbigpe3RoaXMuJGdldD1bXCIkJHNhbml0aXplVXJpXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBkPVtdO0YoZSxzKGQsZnVuY3Rpb24oYyxiKXtyZXR1cm4hL151bnNhZmUvLnRlc3QoYShjLGIpKX0pKTtyZXR1cm4gZC5qb2luKFwiXCIpfX1dfSk7aC5tb2R1bGUoXCJuZ1Nhbml0aXplXCIpLmZpbHRlcihcImxpbmt5XCIsW1wiJHNhbml0aXplXCIsZnVuY3Rpb24oYSl7dmFyIGU9LygoZnRwfGh0dHBzPyk6XFwvXFwvfChtYWlsdG86KT9bQS1aYS16MC05Ll8lKy1dK0ApXFxTKlteXFxzLjssKCl7fTw+XS8sZD0vXm1haWx0bzovO3JldHVybiBmdW5jdGlvbihjLGIpe2Z1bmN0aW9uIGcoYSl7YSYmbS5wdXNoKEUoYSkpfWZ1bmN0aW9uIGYoYSxjKXttLnB1c2goXCI8YSBcIik7aC5pc0RlZmluZWQoYikmJlxuKG0ucHVzaCgndGFyZ2V0PVwiJyksbS5wdXNoKGIpLG0ucHVzaCgnXCIgJykpO20ucHVzaCgnaHJlZj1cIicpO20ucHVzaChhKTttLnB1c2goJ1wiPicpO2coYyk7bS5wdXNoKFwiPC9hPlwiKX1pZighYylyZXR1cm4gYztmb3IodmFyIGwsaz1jLG09W10sbixwO2w9ay5tYXRjaChlKTspbj1sWzBdLGxbMl09PWxbM10mJihuPVwibWFpbHRvOlwiK24pLHA9bC5pbmRleCxnKGsuc3Vic3RyKDAscCkpLGYobixsWzBdLnJlcGxhY2UoZCxcIlwiKSksaz1rLnN1YnN0cmluZyhwK2xbMF0ubGVuZ3RoKTtnKGspO3JldHVybiBhKG0uam9pbihcIlwiKSl9fV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItc2FuaXRpemUubWluLmpzLm1hcFxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLXNhbml0aXplL2FuZ3VsYXItc2FuaXRpemUubWluLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItc2FuaXRpemVcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qZ2xvYmFscyBhbmd1bGFyLCByZXF1aXJlKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNvbXBvbmVudHMgPSBbXG4gICdpdGVtTGlzdCcsXG4gICdzaW1wbGVEaWFsb2cnLFxuICAnaGllcmFyY2hpY2FsTWVudScsXG4gICdjb250ZXh0bWVudScsXG4gICdkcm9wZG93bk5hdmlnYXRvcicsXG4gICd0cmVlTmF2aWdhdG9yJ1xuXTtcblxucmVxdWlyZSggJy4uL2xpYnJhcnkvc2ltcGxlRGlhbG9nL2RvY3MvZGVtby5qcycgKTtcbnJlcXVpcmUoICcuLi9saWJyYXJ5L2hpZXJhcmNoaWNhbE1lbnUvZG9jcy9kZW1vLmpzJyApO1xucmVxdWlyZSggJy4uL2xpYnJhcnkvY29udGV4dG1lbnUvZG9jcy9kZW1vLmpzJyApO1xucmVxdWlyZSggJy4uL2xpYnJhcnkvZHJvcGRvd25OYXZpZ2F0b3IvZG9jcy9kZW1vLmpzJyApO1xucmVxdWlyZSggJy4uL2xpYnJhcnkvdHJlZU5hdmlnYXRvci9kb2NzL2RlbW8uanMnICk7XG5yZXF1aXJlKCAnLi4vbGlicmFyeS9pdGVtTGlzdC9kb2NzL2RlbW8uanMnICk7XG5cbnJlcXVpcmUoICdhbmd1bGFyLXNhbml0aXplJyApO1xud2luZG93LlNob3dkb3duID0gcmVxdWlyZSggJ3Nob3dkb3duJyApO1xucmVxdWlyZSggJ2FuZ3VsYXItbWFya2Rvd24tZGlyZWN0aXZlJyApO1xuXG5cbnZhciBkZW1vQXBwID0gYW5ndWxhci5tb2R1bGUoXG4gICdpc2lzLnVpLmRlbW9BcHAnLCBbXG4gICAgJ2lzaXMudWkuZGVtb0FwcC50ZW1wbGF0ZXMnLFxuICAgICdidGZvcmQubWFya2Rvd24nXG4gIF0uY29uY2F0KCBjb21wb25lbnRzLm1hcCggZnVuY3Rpb24gKCBlICkge1xuICAgIHJldHVybiAnaXNpcy51aS4nICsgZSArICcuZGVtbyc7XG4gIH0gKSApXG4pO1xuXG5kZW1vQXBwLnJ1biggZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyggJ0RlbW9BcHAgcnVuLi4uJyApO1xufSApO1xuXG5kZW1vQXBwLmNvbnRyb2xsZXIoXG4gICdVSUNvbXBvbmVudHNEZW1vQ29udHJvbGxlcicsXG4gIGZ1bmN0aW9uICggJHNjb3BlICkge1xuXG4gICAgJHNjb3BlLmNvbXBvbmVudHMgPSBjb21wb25lbnRzLm1hcCggZnVuY3Rpb24gKCBjb21wb25lbnQgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBjb21wb25lbnQsXG4gICAgICAgIHRlbXBsYXRlOiAnL2xpYnJhcnkvJyArIGNvbXBvbmVudCArICcvZG9jcy9kZW1vLmh0bWwnLFxuICAgICAgICBkb2NzOiAnL2xpYnJhcnkvJyArIGNvbXBvbmVudCArICcvZG9jcy9yZWFkbWUubWQnXG4gICAgICB9O1xuICAgIH0gKTtcblxuICB9ICk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RvY3NfYXBwLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypnbG9iYWxzIGNvbnNvbGUsIGFuZ3VsYXIqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkZW1vQXBwID0gYW5ndWxhci5tb2R1bGUoICdpc2lzLnVpLmNvbnRleHRtZW51LmRlbW8nLCBbICdpc2lzLnVpLmNvbnRleHRtZW51JyBdICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0NvbnRleHRtZW51RGVtb0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoICRzY29wZSwgY29udGV4dG1lbnVTZXJ2aWNlICkge1xuXG4gIHZhciBtZW51RGF0YSA9IFsge1xuICAgIGlkOiAndG9wJyxcbiAgICBpdGVtczogWyB7XG4gICAgICBpZDogJ25ld1Byb2plY3QnLFxuICAgICAgbGFiZWw6ICdOZXcgcHJvamVjdCAuLi4nLFxuICAgICAgaWNvbkNsYXNzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzJyxcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ05ldyBwcm9qZWN0IGNsaWNrZWQnICk7XG4gICAgICB9LFxuICAgICAgYWN0aW9uRGF0YToge31cbiAgICB9LCB7XG4gICAgICBpZDogJ2ltcG9ydFByb2plY3QnLFxuICAgICAgbGFiZWw6ICdJbXBvcnQgcHJvamVjdCAuLi4nLFxuICAgICAgaWNvbkNsYXNzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1pbXBvcnQnLFxuICAgICAgYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCAnSW1wb3J0IHByb2plY3QgY2xpY2tlZCcgKTtcbiAgICAgIH0sXG4gICAgICBhY3Rpb25EYXRhOiB7fVxuICAgIH0gXVxuICB9LCB7XG4gICAgaWQ6ICdwcm9qZWN0cycsXG4gICAgbGFiZWw6ICdSZWNlbnQgcHJvamVjdHMnLFxuICAgIHRvdGFsSXRlbXM6IDIwLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBzaG93QWxsSXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCAnUmVjZW50IHByb2plY3RzIGNsaWNrZWQnICk7XG4gICAgfVxuICB9LCB7XG4gICAgaWQ6ICdwcmVmZXJlbmNlcycsXG4gICAgbGFiZWw6ICdwcmVmZXJlbmNlcycsXG4gICAgaXRlbXM6IFsge1xuICAgICAgaWQ6ICdzaG93UHJlZmVyZW5jZXMnLFxuICAgICAgbGFiZWw6ICdTaG93IHByZWZlcmVuY2VzJyxcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ1Nob3cgcHJlZmVyZW5jZXMnICk7XG4gICAgICB9LFxuICAgICAgbWVudTogWyB7XG4gICAgICAgIGl0ZW1zOiBbIHtcbiAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDEnLFxuICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgIG1lbnU6IFsge1xuICAgICAgICAgICAgaXRlbXM6IFsge1xuICAgICAgICAgICAgICBpZDogJ3N1Yl9wcmVmZXJlbmNlcyAxJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDInXG4gICAgICAgICAgICB9IF1cbiAgICAgICAgICB9IF1cbiAgICAgICAgfSBdXG4gICAgICB9IF1cbiAgICB9IF1cbiAgfSBdO1xuXG4gICRzY29wZS5tZW51Q29uZmlnMSA9IHtcbiAgICB0cmlnZ2VyRXZlbnQ6ICdjbGljaycsXG4gICAgcG9zaXRpb246ICdyaWdodCBib3R0b20nXG4gIH07XG5cbiAgJHNjb3BlLm1lbnVDb25maWcyID0ge1xuICAgIHRyaWdnZXJFdmVudDogJ21vdXNlb3ZlcicsXG4gICAgcG9zaXRpb246ICdsZWZ0IGJvdHRvbScsXG4gICAgY29udGVudFRlbXBsYXRlVXJsOiAnY29udGV4dG1lbnUtY3VzdG9tLWNvbnRlbnQuaHRtbCcsXG4gICAgZG9Ob3RBdXRvQ2xvc2U6IHRydWVcbiAgfTtcblxuICAkc2NvcGUubWVudURhdGEgPSBtZW51RGF0YTtcblxuICAkc2NvcGUucHJlQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoIGUgKSB7XG4gICAgY29uc29sZS5sb2coICdJbiBwcmVDb250ZXh0TWVudSAnLCBlICk7XG4gIH07XG5cbiAgJHNjb3BlLmN1c3RvbURhdGEgPSB7XG5cbiAgICBjbG9zZUNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyggJ2Nsb3NpbmcgdGhpcyBtYW51eWFsbHknICk7XG4gICAgICBjb250ZXh0bWVudVNlcnZpY2UuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbn0gKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbGlicmFyeS9jb250ZXh0bWVudS9kb2NzL2RlbW8uanNcIixcIi8uLi9saWJyYXJ5L2NvbnRleHRtZW51L2RvY3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKmdsb2JhbHMgY29uc29sZSwgYW5ndWxhciovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkZW1vQXBwID0gYW5ndWxhci5tb2R1bGUoICdpc2lzLnVpLmRyb3Bkb3duTmF2aWdhdG9yLmRlbW8nLCBbICdpc2lzLnVpLmRyb3Bkb3duTmF2aWdhdG9yJyBdICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0Ryb3Bkb3duRGVtb0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoICRzY29wZSApIHtcbiAgdmFyIGZpcnN0TWVudSxcbiAgICBzZWNvbmRNZW51O1xuXG4gIGZpcnN0TWVudSA9IHtcbiAgICBpZDogJ3Jvb3QnLFxuICAgIGxhYmVsOiAnR01FJyxcbiAgICAvLyAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgaXRlbUNsYXNzOiAnZ21lLXJvb3QnLFxuICAgIG1lbnU6IFtdXG4gIH07XG5cbiAgc2Vjb25kTWVudSA9IHtcbiAgICBpZDogJ3NlY29uZEl0ZW0nLFxuICAgIGxhYmVsOiAnUHJvamVjdHMnLFxuICAgIG1lbnU6IFtdXG4gIH07XG5cbiAgZmlyc3RNZW51Lm1lbnUgPSBbIHtcbiAgICBpZDogJ3RvcCcsXG4gICAgaXRlbXM6IFsge1xuICAgICAgaWQ6ICduZXdQcm9qZWN0JyxcbiAgICAgIGxhYmVsOiAnTmV3IHByb2plY3QgLi4uJyxcbiAgICAgIGljb25DbGFzczogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdOZXcgcHJvamVjdCBjbGlja2VkJyApO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbkRhdGE6IHt9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbXBvcnRQcm9qZWN0JyxcbiAgICAgIGxhYmVsOiAnSW1wb3J0IHByb2plY3QgLi4uJyxcbiAgICAgIGljb25DbGFzczogJ2dseXBoaWNvbiBnbHlwaGljb24taW1wb3J0JyxcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ0ltcG9ydCBwcm9qZWN0IGNsaWNrZWQnICk7XG4gICAgICB9LFxuICAgICAgYWN0aW9uRGF0YToge31cbiAgICB9IF1cbiAgfSwge1xuICAgIGlkOiAncHJvamVjdHMnLFxuICAgIGxhYmVsOiAnUmVjZW50IHByb2plY3RzJyxcbiAgICB0b3RhbEl0ZW1zOiAyMCxcbiAgICBpdGVtczogW10sXG4gICAgc2hvd0FsbEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyggJ1JlY2VudCBwcm9qZWN0cyBjbGlja2VkJyApO1xuICAgIH1cbiAgfSwge1xuICAgIGlkOiAncHJlZmVyZW5jZXMnLFxuICAgIGxhYmVsOiAncHJlZmVyZW5jZXMnLFxuICAgIGl0ZW1zOiBbIHtcbiAgICAgIGlkOiAnc2hvd1ByZWZlcmVuY2VzJyxcbiAgICAgIGxhYmVsOiAnU2hvdyBwcmVmZXJlbmNlcycsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdTaG93IHByZWZlcmVuY2VzJyApO1xuICAgICAgfSxcbiAgICAgIG1lbnU6IFsge1xuICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAxJyxcbiAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICBtZW51OiBbIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbIHtcbiAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAyJ1xuICAgICAgICAgICAgfSBdXG4gICAgICAgICAgfSBdXG4gICAgICAgIH0gXVxuICAgICAgfSBdXG4gICAgfSBdXG4gIH0gXTtcblxuXG4gIHNlY29uZE1lbnUgPSB7XG4gICAgaWQ6ICdzZWNvbmRJdGVtJyxcbiAgICBsYWJlbDogJ1Byb2plY3RzJyxcbiAgICBtZW51OiBbXVxuICB9O1xuXG4gIHNlY29uZE1lbnUubWVudSA9IFsge1xuICAgIGlkOiAnc2Vjb25kTWVudU1lbnUnLFxuICAgIGl0ZW1zOiBbXG5cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzaG93UHJlZmVyZW5jZXMnLFxuICAgICAgICBsYWJlbDogJ1Nob3cgcHJlZmVyZW5jZXMnLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyggJ1Nob3cgcHJlZmVyZW5jZXMnICk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lbnU6IFsge1xuICAgICAgICAgIGl0ZW1zOiBbIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICAgIG1lbnU6IFsge1xuICAgICAgICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMSdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDInXG4gICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgfSBdXG4gICAgICAgICAgfSBdXG4gICAgICAgIH0gXVxuICAgICAgfVxuICAgIF1cbiAgfSBdO1xuXG4gICRzY29wZS5uYXZpZ2F0b3IgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIGZpcnN0TWVudSxcbiAgICAgIHNlY29uZE1lbnVcbiAgICBdLFxuICAgIHNlcGFyYXRvcjogdHJ1ZVxuICB9O1xuXG5cbn0gKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbGlicmFyeS9kcm9wZG93bk5hdmlnYXRvci9kb2NzL2RlbW8uanNcIixcIi8uLi9saWJyYXJ5L2Ryb3Bkb3duTmF2aWdhdG9yL2RvY3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKmdsb2JhbHMgY29uc29sZSwgYW5ndWxhciovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkZW1vQXBwID0gYW5ndWxhci5tb2R1bGUoICdpc2lzLnVpLmhpZXJhcmNoaWNhbE1lbnUuZGVtbycsIFsgJ3VpLmJvb3RzdHJhcCcsXG4gICdpc2lzLnVpLmhpZXJhcmNoaWNhbE1lbnUnXG5dICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0hpZXJhcmNoaWNhbE1lbnVEZW1vQ29udHJvbGxlcicsIGZ1bmN0aW9uICggJHNjb3BlICkge1xuXG4gIHZhciBtZW51O1xuXG4gIG1lbnUgPSBbIHtcbiAgICBpZDogJ3RvcCcsXG4gICAgaXRlbXM6IFsge1xuICAgICAgaWQ6ICduZXdQcm9qZWN0JyxcbiAgICAgIGxhYmVsOiAnTmV3IHByb2plY3QgLi4uJyxcbiAgICAgIGljb25DbGFzczogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdOZXcgcHJvamVjdCBjbGlja2VkJyApO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbkRhdGE6IHt9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbXBvcnRQcm9qZWN0JyxcbiAgICAgIGxhYmVsOiAnSW1wb3J0IHByb2plY3QgLi4uJyxcbiAgICAgIGljb25DbGFzczogJ2dseXBoaWNvbiBnbHlwaGljb24taW1wb3J0JyxcbiAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ0ltcG9ydCBwcm9qZWN0IGNsaWNrZWQnICk7XG4gICAgICB9LFxuICAgICAgYWN0aW9uRGF0YToge31cbiAgICB9IF1cbiAgfSwge1xuICAgIGlkOiAncHJvamVjdHMnLFxuICAgIGxhYmVsOiAnUmVjZW50IHByb2plY3RzJyxcbiAgICB0b3RhbEl0ZW1zOiAyMCxcbiAgICBpdGVtczogW10sXG4gICAgc2hvd0FsbEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyggJ1JlY2VudCBwcm9qZWN0cyBjbGlja2VkJyApO1xuICAgIH1cbiAgfSwge1xuICAgIGlkOiAncHJlZmVyZW5jZXMnLFxuICAgIGxhYmVsOiAncHJlZmVyZW5jZXMnLFxuICAgIGl0ZW1zOiBbIHtcbiAgICAgIGlkOiAnc2hvd1ByZWZlcmVuY2VzJyxcbiAgICAgIGxhYmVsOiAnU2hvdyBwcmVmZXJlbmNlcycsXG4gICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdTaG93IHByZWZlcmVuY2VzJyApO1xuICAgICAgfSxcbiAgICAgIG1lbnU6IFsge1xuICAgICAgICBpdGVtczogWyB7XG4gICAgICAgICAgaWQ6ICdwcmVmZXJlbmNlcyAxJyxcbiAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICBtZW51OiBbIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbIHtcbiAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAyJ1xuICAgICAgICAgICAgfSBdXG4gICAgICAgICAgfSBdXG4gICAgICAgIH0gXVxuICAgICAgfSBdXG4gICAgfSBdXG4gIH0gXTtcblxuICAkc2NvcGUubWVudSA9IG1lbnU7XG5cbn0gKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbGlicmFyeS9oaWVyYXJjaGljYWxNZW51L2RvY3MvZGVtby5qc1wiLFwiLy4uL2xpYnJhcnkvaGllcmFyY2hpY2FsTWVudS9kb2NzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypnbG9iYWxzIGFuZ3VsYXIqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKCAnaXNpcy51aS5pdGVtTGlzdC5kZW1vJywgWyAnaXNpcy51aS5pdGVtTGlzdCcgXSApO1xuXG5kZW1vQXBwLmNvbnRyb2xsZXIoICdJdGVtTGlzdERlbW9Db250cm9sbGVyJywgZnVuY3Rpb24gKCAkc2NvcGUgKSB7XG5cblxuICB2YXJcbiAgaSxcblxuICBpdGVtcyA9IFtdLFxuICBpdGVtR2VuZXJhdG9yLFxuICBnZXRJdGVtQ29udGV4dG1lbnUsXG4gIGNvbmZpZztcblxuICBpdGVtR2VuZXJhdG9yID0gZnVuY3Rpb24gKCBpZCApIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdGl0bGU6ICdMaXN0IGl0ZW0gJyArIGlkLFxuICAgICAgdG9vbFRpcDogJ09wZW4gaXRlbScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgZGVzY3JpcHRpb24gaGVyZScsXG4gICAgICBsYXN0VXBkYXRlZDoge1xuICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB1c2VyOiAnTi9BJ1xuXG4gICAgICB9LFxuICAgICAgc3RhdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICB0b29sdGlwOiAnT3JkZXJzJyxcbiAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1jdWJlcydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGhhc0RldGFpbHM6IE1hdGgucmFuZG9tKCkgPCAwLjUsXG4gICAgICBkZXRhaWxzOiBudWxsLFxuICAgICAgZGV0YWlsc0NvbGxhcHNpYmxlOiB0cnVlXG4gICAgfTtcbiAgfTtcblxuICBmb3IgKCBpID0gMDsgaSA8IDIwOyBpKysgKSB7XG4gICAgaXRlbXMucHVzaCggaXRlbUdlbmVyYXRvciggaSApICk7XG4gIH1cblxuICBnZXRJdGVtQ29udGV4dG1lbnUgPSBmdW5jdGlvbiAoIGl0ZW0gKSB7XG5cbiAgICB2YXIgZGVmYXVsdEl0ZW1Db250ZXh0bWVudSA9IFtcbiAgICAgIHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2NyZWF0ZScsXG4gICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZSBuZXcnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1wbHVzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZHVtbXknLFxuICAgICAgICAgICAgbGFiZWw6ICdKdXN0IGZvciB0ZXN0ICcgKyBpdGVtLmlkLFxuXG4gICAgICAgICAgICBhY3Rpb25EYXRhOiBpdGVtLFxuXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICggZGF0YSApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coICd0ZXN0aW5nICcsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdyZW5hbWUnLFxuICAgICAgICAgICAgbGFiZWw6ICdSZW5hbWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgICAgbGFiZWw6ICdQcmVmZXJlbmNlcyAzJyxcbiAgICAgICAgICAgIG1lbnU6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDEnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N1YiBwcmVmZXJlbmNlcyAxJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICggZGF0YSApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ3Rlc3RpbmcyICcsIGRhdGEgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gZGVmYXVsdEl0ZW1Db250ZXh0bWVudTtcblxuICB9O1xuXG4gIGNvbmZpZyA9IHtcblxuICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIHNlY29uZGFyeUl0ZW1NZW51OiB0cnVlLFxuXG4gICAgLy8gRXZlbnQgaGFuZGxlcnNcblxuICAgIGl0ZW1Tb3J0OiBmdW5jdGlvbiAoIGpRRXZlbnQsIHVpICkge1xuICAgICAgY29uc29sZS5sb2coICdTb3J0IGhhcHBlbmVkJywgalFFdmVudCwgdWkgKTtcbiAgICB9LFxuXG4gICAgaXRlbUNsaWNrOiBmdW5jdGlvbiAoIGV2ZW50LCBpdGVtICkge1xuICAgICAgY29uc29sZS5sb2coICdDbGlja2VkOiAnICsgaXRlbSApO1xuICAgIH0sXG5cbiAgICBpdGVtQ29udGV4dG1lbnVSZW5kZXJlcjogZnVuY3Rpb24gKCBlLCBpdGVtICkge1xuICAgICAgY29uc29sZS5sb2coICdDb250ZXh0bWVudSB3YXMgdHJpZ2dlcmVkIGZvciBub2RlOicsIGl0ZW0gKTtcblxuICAgICAgcmV0dXJuIGdldEl0ZW1Db250ZXh0bWVudSggaXRlbSApO1xuICAgIH0sXG5cbiAgICBkZXRhaWxzUmVuZGVyZXI6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZGV0YWlscyA9ICdNeSBkZXRhaWxzIGFyZSBoZXJlIG5vdyEnO1xuICAgIH0sXG5cbiAgICBuZXdJdGVtRm9ybToge1xuICAgICAgdGl0bGU6ICdDcmVhdGUgbmV3IGl0ZW0nLFxuICAgICAgaXRlbVRlbXBsYXRlVXJsOiAnL2xpYnJhcnkvaXRlbUxpc3QvZG9jcy9uZXdJdGVtVGVtcGxhdGUuaHRtbCcsXG4gICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoICRzY29wZSApIHtcbiAgICAgICAgJHNjb3BlLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAoIG5ld0l0ZW0gKSB7XG5cbiAgICAgICAgICBuZXdJdGVtLnVybCA9ICdzb21ldGhpbmcnO1xuICAgICAgICAgIG5ld0l0ZW0udG9vbFRpcCA9IG5ld0l0ZW0udGl0bGU7XG5cbiAgICAgICAgICBpdGVtcy5wdXNoKCBuZXdJdGVtICk7XG5cbiAgICAgICAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xuXG4gICAgICAgICAgY29uZmlnLm5ld0l0ZW1Gb3JtLmV4cGFuZGVkID0gZmFsc2U7IC8vIHRoaXMgaXMgaG93IHlvdSBjbG9zZSB0aGUgZm9ybSBpdHNlbGZcblxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaWx0ZXI6IHt9XG5cbiAgfTtcblxuICAkc2NvcGUubGlzdERhdGEgPSB7XG4gICAgaXRlbXM6IGl0ZW1zXG4gIH07XG5cbiAgJHNjb3BlLmNvbmZpZyA9IGNvbmZpZztcblxufSApO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9saWJyYXJ5L2l0ZW1MaXN0L2RvY3MvZGVtby5qc1wiLFwiLy4uL2xpYnJhcnkvaXRlbUxpc3QvZG9jc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qZ2xvYmFscyBjb25zb2xlLCBhbmd1bGFyKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNWYWxpZCxcbiAgZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlKCAnaXNpcy51aS5zaW1wbGVEaWFsb2cuZGVtbycsIFsgJ2lzaXMudWkuc2ltcGxlRGlhbG9nJyBdICksXG5cbiAgcGFyYW1ldGVyID0ge1xuICAgIHZhbHVlOiAxMCxcbiAgICBpbnZhbGlkOiB0cnVlXG4gIH07XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0NvbmZpcm1EaWFsb2dEZW1vQ29udHJvbGxlcicsIGZ1bmN0aW9uICggJHNjb3BlLCAkc2ltcGxlRGlhbG9nICkge1xuXG4gIGlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgcmVzdWx0ID0gKCBOdW1iZXIoIHBhcmFtZXRlci52YWx1ZSApID09PSA0ICk7XG5cbiAgICBjb25zb2xlLmxvZyggJ1ZhbGlkYXRvciB3YXMgY2FsbGVkJyApO1xuICAgIGNvbnNvbGUubG9nKCAnU3VtIGlzOiAnICsgcGFyYW1ldGVyLnZhbHVlLCByZXN1bHQgKTtcbiAgICBwYXJhbWV0ZXIuaW52YWxpZCA9ICFyZXN1bHQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gIH07XG5cblxuICAkc2NvcGUucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuXG4gICRzY29wZS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgIGlzVmFsaWQoKTtcbiAgICBpZiAoICEkc2NvcGUuJCRwaGFzZSApIHtcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAkc2ltcGxlRGlhbG9nLm9wZW4oIHtcbiAgICAgIGRpYWxvZ1RpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG4gICAgICBkaWFsb2dDb250ZW50VGVtcGxhdGU6ICdjb25maXJtLWNvbnRlbnQtdGVtcGxhdGUnLFxuICAgICAgb25PazogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ09LIHdhcyBwaWNrZWQnICk7XG4gICAgICB9LFxuICAgICAgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coICdUaGlzIHdhcyBjYW5jZWxlZCcgKTtcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0b3I6IGlzVmFsaWQsXG4gICAgICBzaXplOiAnbGcnLCAvLyBjYW4gYmUgc20gb3IgbGdcbiAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICB9ICk7XG5cbiAgfTtcblxuXG59ICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ0NvbmZpcm1EaWFsb2dEZW1vRGF0YUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoKSB7XG5cbn0gKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbGlicmFyeS9zaW1wbGVEaWFsb2cvZG9jcy9kZW1vLmpzXCIsXCIvLi4vbGlicmFyeS9zaW1wbGVEaWFsb2cvZG9jc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qZ2xvYmFscyBhbmd1bGFyKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGRlbW9BcHAgPSBhbmd1bGFyLm1vZHVsZSggJ2lzaXMudWkudHJlZU5hdmlnYXRvci5kZW1vJywgWyAnaXNpcy51aS50cmVlTmF2aWdhdG9yJyBdICk7XG5cbmRlbW9BcHAuY29udHJvbGxlciggJ1RyZWVOYXZpZ2F0b3JEZW1vQ29udHJvbGxlcicsIGZ1bmN0aW9uICggJHNjb3BlLCAkbG9nLCAkcSApIHtcblxuICB2YXIgY29uZmlnLFxuICAgIHRyZWVOb2RlcyA9IHt9LFxuXG4gICAgYWRkTm9kZSxcbiAgICByZW1vdmVOb2RlLFxuICAgIGdldE5vZGVDb250ZXh0bWVudSxcbiAgICBkdW1teVRyZWVEYXRhR2VuZXJhdG9yLFxuICAgIHNvcnRDaGlsZHJlbjtcblxuICBnZXROb2RlQ29udGV4dG1lbnUgPSBmdW5jdGlvbihub2RlKSB7XG5cbiAgICB2YXIgZGVmYXVsdE5vZGVDb250ZXh0bWVudSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnY3JlYXRlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGUgbmV3JyxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXBsdXMnLFxuICAgICAgICAgICAgICBtZW51OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdkdW1teScsXG4gICAgICAgICAgICAgIGxhYmVsOiAnSnVzdCBmb3IgdGVzdCAnICsgbm9kZS5pZCxcblxuICAgICAgICAgICAgICBhY3Rpb25EYXRhOiBub2RlLFxuXG4gICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKCAndGVzdGluZyAnLCBkYXRhICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdyZW5hbWUnLFxuICAgICAgICAgICAgICBsYWJlbDogJ1JlbmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1taW51cycsXG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogbm9kZS5pZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICggZGF0YSApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKCBkYXRhLmlkICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICAgIGxhYmVsOiAnUHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICAgIG1lbnU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiAnc3ViX3ByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDInLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5sb2coICd0ZXN0aW5nMiAnLCBkYXRhICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgcmV0dXJuIGRlZmF1bHROb2RlQ29udGV4dG1lbnU7XG5cbiAgfTtcblxuICBkdW1teVRyZWVEYXRhR2VuZXJhdG9yID0gZnVuY3Rpb24gKCB0cmVlTm9kZSwgbmFtZSwgbWF4Q291bnQsIGxldmVscyApIHtcbiAgICB2YXIgaSxcbiAgICAgIGlkLFxuICAgICAgY291bnQsXG4gICAgICBjaGlsZE5vZGU7XG5cbiAgICBsZXZlbHMgPSBsZXZlbHMgfHwgMDtcblxuICAgIGNvdW50ID0gTWF0aC5yb3VuZChcbiAgICAgIE1hdGgucmFuZG9tKCkgKiBtYXhDb3VudFxuICAgICkgKyAxO1xuXG4gICAgZm9yICggaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxICkge1xuICAgICAgaWQgPSBuYW1lICsgaTtcblxuICAgICAgY2hpbGROb2RlID0gYWRkTm9kZSggdHJlZU5vZGUsIGlkICk7XG5cbiAgICAgIGlmICggbGV2ZWxzID4gMCApIHtcbiAgICAgICAgZHVtbXlUcmVlRGF0YUdlbmVyYXRvciggY2hpbGROb2RlLCBpZCArICcuJywgbWF4Q291bnQsIGxldmVscyAtIDEgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYWRkTm9kZSA9IGZ1bmN0aW9uICggcGFyZW50VHJlZU5vZGUsIGlkICkge1xuICAgIHZhciBuZXdUcmVlTm9kZSxcbiAgICAgIGNoaWxkcmVuID0gW107XG5cblxuICAgIC8vIG5vZGUgc3RydWN0dXJlXG4gICAgbmV3VHJlZU5vZGUgPSB7XG4gICAgICBsYWJlbDogaWQsXG4gICAgICBleHRyYUluZm86ICdFeHRyYSBpbmZvJyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuQ291bnQ6IDAsXG4gICAgICBub2RlRGF0YToge30sXG4gICAgICBpY29uQ2xhc3M6ICdmYSBmYS1maWxlLW8nLFxuXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBkcmFnQ2hhbm5lbDogJ2EnLFxuICAgICAgZHJvcENoYW5uZWw6IChNYXRoLnJhbmRvbSgpID4gMC41KSA/ICdhJyA6ICdiJ1xuICAgIH07XG5cbiAgICBuZXdUcmVlTm9kZS5pZCA9IGlkO1xuXG4gICAgLy8gYWRkIHRoZSBuZXcgbm9kZSB0byB0aGUgbWFwXG4gICAgdHJlZU5vZGVzWyBuZXdUcmVlTm9kZS5pZCBdID0gbmV3VHJlZU5vZGU7XG5cblxuICAgIGlmICggcGFyZW50VHJlZU5vZGUgKSB7XG4gICAgICAvLyBpZiBhIHBhcmVudCB3YXMgZ2l2ZW4gYWRkIHRoZSBuZXcgbm9kZSBhcyBhIGNoaWxkIG5vZGVcbiAgICAgIHBhcmVudFRyZWVOb2RlLmljb25DbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgIHBhcmVudFRyZWVOb2RlLmNoaWxkcmVuLnB1c2goIG5ld1RyZWVOb2RlICk7XG5cblxuICAgICAgcGFyZW50VHJlZU5vZGUuY2hpbGRyZW5Db3VudCA9IHBhcmVudFRyZWVOb2RlLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgaWYgKCBuZXdUcmVlTm9kZS5jaGlsZHJlbkNvdW50ID09PSAwICkge1xuICAgICAgICBuZXdUcmVlTm9kZS5jaGlsZHJlbkNvdW50ID0gTWF0aC5yb3VuZCggTWF0aC5yYW5kb20oKSApO1xuICAgICAgfVxuXG5cbiAgICAgIGlmICggbmV3VHJlZU5vZGUuY2hpbGRyZW5Db3VudCApIHtcbiAgICAgICAgbmV3VHJlZU5vZGUuaWNvbkNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBzb3J0Q2hpbGRyZW4oIHBhcmVudFRyZWVOb2RlLmNoaWxkcmVuICk7XG5cbiAgICAgIG5ld1RyZWVOb2RlLnBhcmVudElkID0gcGFyZW50VHJlZU5vZGUuaWQ7XG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gaWYgbm8gcGFyZW50IGlzIGdpdmVuIHJlcGxhY2UgdGhlIGN1cnJlbnQgcm9vdCBub2RlIHdpdGggdGhpcyBub2RlXG4gICAgICAkc2NvcGUudHJlZURhdGEgPSBuZXdUcmVlTm9kZTtcbiAgICAgICRzY29wZS50cmVlRGF0YS51bkNvbGxhcHNpYmxlID0gdHJ1ZTtcbiAgICAgIG5ld1RyZWVOb2RlLnBhcmVudElkID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VHJlZU5vZGU7XG4gIH07XG5cbiAgcmVtb3ZlTm9kZSA9IGZ1bmN0aW9uICggaWQgKSB7XG4gICAgdmFyXG4gICAgICBwYXJlbnROb2RlLFxuICAgICAgbm9kZVRvRGVsZXRlID0gdHJlZU5vZGVzWyBpZCBdO1xuXG4gICAgJGxvZy5kZWJ1ZyggJ1JlbW92aW5nIGEgbm9kZSAnICsgaWQgKTtcblxuICAgIGlmICggbm9kZVRvRGVsZXRlICkge1xuICAgICAgaWYgKCBub2RlVG9EZWxldGUucGFyZW50SWQgIT09IG51bGwgJiYgdHJlZU5vZGVzWyBub2RlVG9EZWxldGUucGFyZW50SWQgXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAvLyBmaW5kIHBhcmVudCBub2RlXG4gICAgICAgIHBhcmVudE5vZGUgPSB0cmVlTm9kZXNbIG5vZGVUb0RlbGV0ZS5wYXJlbnRJZCBdO1xuXG4gICAgICAgIC8vIHJlbW92ZSBub2RlVG9EZWxldGUgZnJvbSBwYXJlbnQgbm9kZSdzIGNoaWxkcmVuXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4gPSBwYXJlbnROb2RlLmNoaWxkcmVuLmZpbHRlciggZnVuY3Rpb24gKCBlbCApIHtcbiAgICAgICAgICByZXR1cm4gZWwuaWQgIT09IGlkO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbkNvdW50ID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCBwYXJlbnROb2RlLmNoaWxkcmVuQ291bnQgPT09IDAgKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pY29uQ2xhc3MgPSAnZmEgZmEtZmlsZS1vJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdHJlZU5vZGVzWyBpZCBdO1xuICAgIH1cblxuICB9O1xuXG4gIHNvcnRDaGlsZHJlbiA9IGZ1bmN0aW9uICggdmFsdWVzICkge1xuICAgIHZhciBvcmRlckJ5ID0gWydsYWJlbCcsICdpZCddO1xuXG4gICAgdmFsdWVzLnNvcnQoIGZ1bmN0aW9uICggYSwgYiApIHtcbiAgICAgIHZhciBpLFxuICAgICAgICBrZXksXG4gICAgICAgIHJlc3VsdDtcblxuICAgICAgZm9yICggaSA9IDA7IGkgPCBvcmRlckJ5Lmxlbmd0aDsgaSArPSAxICkge1xuICAgICAgICBrZXkgPSBvcmRlckJ5W2ldO1xuICAgICAgICBpZiAoIGEuaGFzT3duUHJvcGVydHkoIGtleSApICYmIGIuaGFzT3duUHJvcGVydHkoIGtleSApICkge1xuICAgICAgICAgIHJlc3VsdCA9IGFba2V5XS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoIGJba2V5XS50b0xvd2VyQ2FzZSgpICk7XG4gICAgICAgICAgaWYgKCByZXN1bHQgIT09IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAgcmV0dXJuIDA7XG4gICAgfSApO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICBjb25maWcgPSB7XG5cbiAgICBzY29wZU1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3Byb2plY3QnLFxuICAgICAgICAgICAgbGFiZWw6ICdQcm9qZWN0IEhpZXJhcmNoeScsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpZy5zdGF0ZS5hY3RpdmVTY29wZSA9ICdwcm9qZWN0JztcbiAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpZy5zZWxlY3RlZFNjb3BlID0gJHNjb3BlLmNvbmZpZy5zY29wZU1lbnVbIDAgXS5pdGVtc1sgMCBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdjb21wb3NpdGlvbicsXG4gICAgICAgICAgICBsYWJlbDogJ0NvbXBvc2l0aW9uJyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkc2NvcGUuY29uZmlnLnN0YXRlLmFjdGl2ZVNjb3BlID0gJ2NvbXBvc2l0aW9uJztcbiAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpZy5zZWxlY3RlZFNjb3BlID0gJHNjb3BlLmNvbmZpZy5zY29wZU1lbnVbIDAgXS5pdGVtc1sgMSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgXSxcblxuICAgIHByZWZlcmVuY2VzTWVudTogW1xuICAgICAge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDInXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAncHJlZmVyZW5jZXMgMycsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWZlcmVuY2VzIDMnLFxuICAgICAgICAgICAgbWVudTogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdWJfcHJlZmVyZW5jZXMgMScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3ViIHByZWZlcmVuY2VzIDEnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3N1Yl9wcmVmZXJlbmNlcyAyJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdWIgcHJlZmVyZW5jZXMgMicsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cubG9nKCBkYXRhICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc2hvd1Jvb3RMYWJlbDogdHJ1ZSxcblxuICAgIC8vIFRyZWUgRXZlbnQgY2FsbGJhY2tzXG5cbiAgICBub2RlQ2xpY2s6IGZ1bmN0aW9uKGUsIG5vZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb2RlIHdhcyBjbGlja2VkOicsIG5vZGUpO1xuICAgIH0sXG5cbiAgICBub2RlRGJsY2xpY2s6IGZ1bmN0aW9uKGUsIG5vZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb2RlIHdhcyBkb3VibGUtY2xpY2tlZDonLCBub2RlKTtcbiAgICB9LFxuXG4gICAgbm9kZUNvbnRleHRtZW51UmVuZGVyZXI6IGZ1bmN0aW9uKGUsIG5vZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb250ZXh0bWVudSB3YXMgdHJpZ2dlcmVkIGZvciBub2RlOicsIG5vZGUpO1xuXG4gICAgICByZXR1cm4gZ2V0Tm9kZUNvbnRleHRtZW51KG5vZGUpO1xuXG4gICAgfSxcblxuICAgIG5vZGVFeHBhbmRlckNsaWNrOiBmdW5jdGlvbihlLCBub2RlLCBpc0V4cGFuZCkge1xuICAgICAgY29uc29sZS5sb2coJ0V4cGFuZGVyIHdhcyBjbGlja2VkIGZvciBub2RlOicsIG5vZGUsIGlzRXhwYW5kKTtcbiAgICB9LFxuXG4gICAgbG9hZENoaWxkcmVuOiBmdW5jdGlvbihlLCBub2RlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBkdW1teVRyZWVEYXRhR2VuZXJhdG9yKCBub2RlLCAnQXN5bmMgJyArIG5vZGUuaWQsIDUsIDAgKTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgfSxcbiAgICAgIDIwMDBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuXG4gIH07XG5cbiAgJHNjb3BlLmNvbmZpZyA9IGNvbmZpZztcbiAgJHNjb3BlLmNvbmZpZy5zZWxlY3RlZFNjb3BlID0gJHNjb3BlLmNvbmZpZy5zY29wZU1lbnVbIDAgXS5pdGVtc1sgMCBdO1xuICAkc2NvcGUudHJlZURhdGEgPSB7fTtcbiAgJHNjb3BlLmNvbmZpZy5zdGF0ZSA9IHtcbiAgICAvLyBpZCBvZiBhY3RpdmVOb2RlXG4gICAgYWN0aXZlTm9kZTogJ05vZGUgaXRlbSAwLjAnLFxuXG4gICAgLy8gaWRzIG9mIHNlbGVjdGVkIG5vZGVzXG4gICAgc2VsZWN0ZWROb2RlczogWydOb2RlIGl0ZW0gMC4wJ10sXG5cbiAgICBleHBhbmRlZE5vZGVzOiBbICdOb2RlIGl0ZW0gMCcsICdOb2RlIGl0ZW0gMC4xJ10sXG5cbiAgICAvLyBpZCBvZiBhY3RpdmUgc2NvcGVcbiAgICBhY3RpdmVTY29wZTogJ3Byb2plY3QnXG4gIH07XG5cblxuICBhZGROb2RlKCBudWxsLCAnUk9PVCcgKTtcbiAgZHVtbXlUcmVlRGF0YUdlbmVyYXRvciggJHNjb3BlLnRyZWVEYXRhLCAnTm9kZSBpdGVtICcsIDUsIDMgKTtcblxufSApO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9saWJyYXJ5L3RyZWVOYXZpZ2F0b3IvZG9jcy9kZW1vLmpzXCIsXCIvLi4vbGlicmFyeS90cmVlTmF2aWdhdG9yL2RvY3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG47X19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLy9cbi8vIHNob3dkb3duLmpzIC0tIEEgamF2YXNjcmlwdCBwb3J0IG9mIE1hcmtkb3duLlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwNyBKb2huIEZyYXNlci5cbi8vXG4vLyBPcmlnaW5hbCBNYXJrZG93biBDb3B5cmlnaHQgKGMpIDIwMDQtMjAwNSBKb2huIEdydWJlclxuLy8gICA8aHR0cDovL2RhcmluZ2ZpcmViYWxsLm5ldC9wcm9qZWN0cy9tYXJrZG93bi8+XG4vL1xuLy8gUmVkaXN0cmlidXRhYmxlIHVuZGVyIGEgQlNELXN0eWxlIG9wZW4gc291cmNlIGxpY2Vuc2UuXG4vLyBTZWUgbGljZW5zZS50eHQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4vL1xuLy8gVGhlIGZ1bGwgc291cmNlIGRpc3RyaWJ1dGlvbiBpcyBhdDpcbi8vXG4vL1x0XHRcdFx0QSBBIExcbi8vXHRcdFx0XHRUIEMgQVxuLy9cdFx0XHRcdFQgSyBCXG4vL1xuLy8gICA8aHR0cDovL3d3dy5hdHRhY2tsYWIubmV0Lz5cbi8vXG5cbi8vXG4vLyBXaGVyZXZlciBwb3NzaWJsZSwgU2hvd2Rvd24gaXMgYSBzdHJhaWdodCwgbGluZS1ieS1saW5lIHBvcnRcbi8vIG9mIHRoZSBQZXJsIHZlcnNpb24gb2YgTWFya2Rvd24uXG4vL1xuLy8gVGhpcyBpcyBub3QgYSBub3JtYWwgcGFyc2VyIGRlc2lnbjsgaXQncyBiYXNpY2FsbHkganVzdCBhXG4vLyBzZXJpZXMgb2Ygc3RyaW5nIHN1YnN0aXR1dGlvbnMuICBJdCdzIGhhcmQgdG8gcmVhZCBhbmRcbi8vIG1haW50YWluIHRoaXMgd2F5LCAgYnV0IGtlZXBpbmcgU2hvd2Rvd24gY2xvc2UgdG8gdGhlIG9yaWdpbmFsXG4vLyBkZXNpZ24gbWFrZXMgaXQgZWFzaWVyIHRvIHBvcnQgbmV3IGZlYXR1cmVzLlxuLy9cbi8vIE1vcmUgaW1wb3J0YW50bHksIFNob3dkb3duIGJlaGF2ZXMgbGlrZSBtYXJrZG93bi5wbCBpbiBtb3N0XG4vLyBlZGdlIGNhc2VzLiAgU28gd2ViIGFwcGxpY2F0aW9ucyBjYW4gZG8gY2xpZW50LXNpZGUgcHJldmlld1xuLy8gaW4gSmF2YXNjcmlwdCwgYW5kIHRoZW4gYnVpbGQgaWRlbnRpY2FsIEhUTUwgb24gdGhlIHNlcnZlci5cbi8vXG4vLyBUaGlzIHBvcnQgbmVlZHMgdGhlIG5ldyBSZWdFeHAgZnVuY3Rpb25hbGl0eSBvZiBFQ01BIDI2Mixcbi8vIDNyZCBFZGl0aW9uIChpLmUuIEphdmFzY3JpcHQgMS41KS4gIE1vc3QgbW9kZXJuIHdlYiBicm93c2Vyc1xuLy8gc2hvdWxkIGRvIGZpbmUuICBFdmVuIHdpdGggdGhlIG5ldyByZWd1bGFyIGV4cHJlc3Npb24gZmVhdHVyZXMsXG4vLyBXZSBkbyBhIGxvdCBvZiB3b3JrIHRvIGVtdWxhdGUgUGVybCdzIHJlZ2V4IGZ1bmN0aW9uYWxpdHkuXG4vLyBUaGUgdHJpY2t5IGNoYW5nZXMgaW4gdGhpcyBmaWxlIG1vc3RseSBoYXZlIHRoZSBcImF0dGFja2xhYjpcIlxuLy8gbGFiZWwuICBNYWpvciBvciBzZWxmLWV4cGxhbmF0b3J5IGNoYW5nZXMgZG9uJ3QuXG4vL1xuLy8gU21hcnQgZGlmZiB0b29scyBsaWtlIEFyYXhpcyBNZXJnZSB3aWxsIGJlIGFibGUgdG8gbWF0Y2ggdXBcbi8vIHRoaXMgZmlsZSB3aXRoIG1hcmtkb3duLnBsIGluIGEgdXNlZnVsIHdheS4gIEEgbGl0dGxlIHR3ZWFraW5nXG4vLyBoZWxwczogaW4gYSBjb3B5IG9mIG1hcmtkb3duLnBsLCByZXBsYWNlIFwiI1wiIHdpdGggXCIvL1wiIGFuZFxuLy8gcmVwbGFjZSBcIiR0ZXh0XCIgd2l0aCBcInRleHRcIi4gIEJlIHN1cmUgdG8gaWdub3JlIHdoaXRlc3BhY2Vcbi8vIGFuZCBsaW5lIGVuZGluZ3MuXG4vL1xuXG5cbi8vXG4vLyBTaG93ZG93biB1c2FnZTpcbi8vXG4vLyAgIHZhciB0ZXh0ID0gXCJNYXJrZG93biAqcm9ja3MqLlwiO1xuLy9cbi8vICAgdmFyIGNvbnZlcnRlciA9IG5ldyBTaG93ZG93bi5jb252ZXJ0ZXIoKTtcbi8vICAgdmFyIGh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwodGV4dCk7XG4vL1xuLy8gICBhbGVydChodG1sKTtcbi8vXG4vLyBOb3RlOiBtb3ZlIHRoZSBzYW1wbGUgY29kZSB0byB0aGUgYm90dG9tIG9mIHRoaXNcbi8vIGZpbGUgYmVmb3JlIHVuY29tbWVudGluZyBpdC5cbi8vXG5cblxuLy9cbi8vIFNob3dkb3duIG5hbWVzcGFjZVxuLy9cbnZhciBTaG93ZG93biA9IHsgZXh0ZW5zaW9uczoge30gfTtcblxuLy9cbi8vIGZvckVhY2hcbi8vXG52YXIgZm9yRWFjaCA9IFNob3dkb3duLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrKSB7XG5cdGlmICh0eXBlb2Ygb2JqLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcblx0XHRvYmouZm9yRWFjaChjYWxsYmFjayk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGksIGxlbiA9IG9iai5sZW5ndGg7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRjYWxsYmFjayhvYmpbaV0sIGksIG9iaik7XG5cdFx0fVxuXHR9XG59O1xuXG4vL1xuLy8gU3RhbmRhcmQgZXh0ZW5zaW9uIG5hbWluZ1xuLy9cbnZhciBzdGRFeHROYW1lID0gZnVuY3Rpb24ocykge1xuXHRyZXR1cm4gcy5yZXBsYWNlKC9bXy1dfHxcXHMvZywgJycpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vL1xuLy8gY29udmVydGVyXG4vL1xuLy8gV3JhcHMgYWxsIFwiZ2xvYmFsc1wiIHNvIHRoYXQgdGhlIG9ubHkgdGhpbmdcbi8vIGV4cG9zZWQgaXMgbWFrZUh0bWwoKS5cbi8vXG5TaG93ZG93bi5jb252ZXJ0ZXIgPSBmdW5jdGlvbihjb252ZXJ0ZXJfb3B0aW9ucykge1xuXG4vL1xuLy8gR2xvYmFsczpcbi8vXG5cbi8vIEdsb2JhbCBoYXNoZXMsIHVzZWQgYnkgdmFyaW91cyB1dGlsaXR5IHJvdXRpbmVzXG52YXIgZ191cmxzO1xudmFyIGdfdGl0bGVzO1xudmFyIGdfaHRtbF9ibG9ja3M7XG5cbi8vIFVzZWQgdG8gdHJhY2sgd2hlbiB3ZSdyZSBpbnNpZGUgYW4gb3JkZXJlZCBvciB1bm9yZGVyZWQgbGlzdFxuLy8gKHNlZSBfUHJvY2Vzc0xpc3RJdGVtcygpIGZvciBkZXRhaWxzKTpcbnZhciBnX2xpc3RfbGV2ZWwgPSAwO1xuXG4vLyBHbG9iYWwgZXh0ZW5zaW9uc1xudmFyIGdfbGFuZ19leHRlbnNpb25zID0gW107XG52YXIgZ19vdXRwdXRfbW9kaWZpZXJzID0gW107XG5cblxuLy9cbi8vIEF1dG9tYXRpYyBFeHRlbnNpb24gTG9hZGluZyAobm9kZSBvbmx5KTpcbi8vXG5cbi8qaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZCcgJiYgdHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmQnKSB7XG5cdHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cblx0aWYgKGZzKSB7XG5cdFx0Ly8gU2VhcmNoIGV4dGVuc2lvbnMgZm9sZGVyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSBmcy5yZWFkZGlyU3luYygoX19kaXJuYW1lIHx8ICcuJykrJy9leHRlbnNpb25zJykuZmlsdGVyKGZ1bmN0aW9uKGZpbGUpe1xuXHRcdFx0cmV0dXJuIH5maWxlLmluZGV4T2YoJy5qcycpO1xuXHRcdH0pLm1hcChmdW5jdGlvbihmaWxlKXtcblx0XHRcdHJldHVybiBmaWxlLnJlcGxhY2UoL1xcLmpzJC8sICcnKTtcblx0XHR9KTtcblx0XHQvLyBMb2FkIGV4dGVuc2lvbnMgaW50byBTaG93ZG93biBuYW1lc3BhY2Vcblx0XHRTaG93ZG93bi5mb3JFYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uKGV4dCl7XG5cdFx0XHR2YXIgbmFtZSA9IHN0ZEV4dE5hbWUoZXh0KTtcblx0XHRcdFNob3dkb3duLmV4dGVuc2lvbnNbbmFtZV0gPSByZXF1aXJlKCcuL2V4dGVuc2lvbnMvJyArIGV4dCk7XG5cdFx0fSk7XG5cdH1cbn0qL1xuXG50aGlzLm1ha2VIdG1sID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vIE1haW4gZnVuY3Rpb24uIFRoZSBvcmRlciBpbiB3aGljaCBvdGhlciBzdWJzIGFyZSBjYWxsZWQgaGVyZSBpc1xuLy8gZXNzZW50aWFsLiBMaW5rIGFuZCBpbWFnZSBzdWJzdGl0dXRpb25zIG5lZWQgdG8gaGFwcGVuIGJlZm9yZVxuLy8gX0VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXMoKSwgc28gdGhhdCBhbnkgKidzIG9yIF8ncyBpbiB0aGUgPGE+XG4vLyBhbmQgPGltZz4gdGFncyBnZXQgZW5jb2RlZC5cbi8vXG5cblx0Ly8gQ2xlYXIgdGhlIGdsb2JhbCBoYXNoZXMuIElmIHdlIGRvbid0IGNsZWFyIHRoZXNlLCB5b3UgZ2V0IGNvbmZsaWN0c1xuXHQvLyBmcm9tIG90aGVyIGFydGljbGVzIHdoZW4gZ2VuZXJhdGluZyBhIHBhZ2Ugd2hpY2ggY29udGFpbnMgbW9yZSB0aGFuXG5cdC8vIG9uZSBhcnRpY2xlIChlLmcuIGFuIGluZGV4IHBhZ2UgdGhhdCBzaG93cyB0aGUgTiBtb3N0IHJlY2VudFxuXHQvLyBhcnRpY2xlcyk6XG5cdGdfdXJscyA9IHt9O1xuXHRnX3RpdGxlcyA9IHt9O1xuXHRnX2h0bWxfYmxvY2tzID0gW107XG5cblx0Ly8gYXR0YWNrbGFiOiBSZXBsYWNlIH4gd2l0aCB+VFxuXHQvLyBUaGlzIGxldHMgdXMgdXNlIHRpbGRlIGFzIGFuIGVzY2FwZSBjaGFyIHRvIGF2b2lkIG1kNSBoYXNoZXNcblx0Ly8gVGhlIGNob2ljZSBvZiBjaGFyYWN0ZXIgaXMgYXJiaXRyYXk7IGFueXRoaW5nIHRoYXQgaXNuJ3Rcblx0Ly8gbWFnaWMgaW4gTWFya2Rvd24gd2lsbCB3b3JrLlxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+L2csXCJ+VFwiKTtcblxuXHQvLyBhdHRhY2tsYWI6IFJlcGxhY2UgJCB3aXRoIH5EXG5cdC8vIFJlZ0V4cCBpbnRlcnByZXRzICQgYXMgYSBzcGVjaWFsIGNoYXJhY3RlclxuXHQvLyB3aGVuIGl0J3MgaW4gYSByZXBsYWNlbWVudCBzdHJpbmdcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXFwkL2csXCJ+RFwiKTtcblxuXHQvLyBTdGFuZGFyZGl6ZSBsaW5lIGVuZGluZ3Ncblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7IC8vIERPUyB0byBVbml4XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcci9nLFwiXFxuXCIpOyAvLyBNYWMgdG8gVW5peFxuXG5cdC8vIE1ha2Ugc3VyZSB0ZXh0IGJlZ2lucyBhbmQgZW5kcyB3aXRoIGEgY291cGxlIG9mIG5ld2xpbmVzOlxuXHR0ZXh0ID0gXCJcXG5cXG5cIiArIHRleHQgKyBcIlxcblxcblwiO1xuXG5cdC8vIENvbnZlcnQgYWxsIHRhYnMgdG8gc3BhY2VzLlxuXHR0ZXh0ID0gX0RldGFiKHRleHQpO1xuXG5cdC8vIFN0cmlwIGFueSBsaW5lcyBjb25zaXN0aW5nIG9ubHkgb2Ygc3BhY2VzIGFuZCB0YWJzLlxuXHQvLyBUaGlzIG1ha2VzIHN1YnNlcXVlbnQgcmVnZXhlbiBlYXNpZXIgdG8gd3JpdGUsIGJlY2F1c2Ugd2UgY2FuXG5cdC8vIG1hdGNoIGNvbnNlY3V0aXZlIGJsYW5rIGxpbmVzIHdpdGggL1xcbisvIGluc3RlYWQgb2Ygc29tZXRoaW5nXG5cdC8vIGNvbnRvcnRlZCBsaWtlIC9bIFxcdF0qXFxuKy8gLlxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eWyBcXHRdKyQvbWcsXCJcIik7XG5cblx0Ly8gUnVuIGxhbmd1YWdlIGV4dGVuc2lvbnNcblx0U2hvd2Rvd24uZm9yRWFjaChnX2xhbmdfZXh0ZW5zaW9ucywgZnVuY3Rpb24oeCl7XG5cdFx0dGV4dCA9IF9FeGVjdXRlRXh0ZW5zaW9uKHgsIHRleHQpO1xuXHR9KTtcblxuXHQvLyBIYW5kbGUgZ2l0aHViIGNvZGVibG9ja3MgcHJpb3IgdG8gcnVubmluZyBIYXNoSFRNTCBzbyB0aGF0XG5cdC8vIEhUTUwgY29udGFpbmVkIHdpdGhpbiB0aGUgY29kZWJsb2NrIGdldHMgZXNjYXBlZCBwcm9wZXJ0bHlcblx0dGV4dCA9IF9Eb0dpdGh1YkNvZGVCbG9ja3ModGV4dCk7XG5cblx0Ly8gVHVybiBibG9jay1sZXZlbCBIVE1MIGJsb2NrcyBpbnRvIGhhc2ggZW50cmllc1xuXHR0ZXh0ID0gX0hhc2hIVE1MQmxvY2tzKHRleHQpO1xuXG5cdC8vIFN0cmlwIGxpbmsgZGVmaW5pdGlvbnMsIHN0b3JlIGluIGhhc2hlcy5cblx0dGV4dCA9IF9TdHJpcExpbmtEZWZpbml0aW9ucyh0ZXh0KTtcblxuXHR0ZXh0ID0gX1J1bkJsb2NrR2FtdXQodGV4dCk7XG5cblx0dGV4dCA9IF9VbmVzY2FwZVNwZWNpYWxDaGFycyh0ZXh0KTtcblxuXHQvLyBhdHRhY2tsYWI6IFJlc3RvcmUgZG9sbGFyIHNpZ25zXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL35EL2csXCIkJFwiKTtcblxuXHQvLyBhdHRhY2tsYWI6IFJlc3RvcmUgdGlsZGVzXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL35UL2csXCJ+XCIpO1xuXG5cdC8vIFJ1biBvdXRwdXQgbW9kaWZpZXJzXG5cdFNob3dkb3duLmZvckVhY2goZ19vdXRwdXRfbW9kaWZpZXJzLCBmdW5jdGlvbih4KXtcblx0XHR0ZXh0ID0gX0V4ZWN1dGVFeHRlbnNpb24oeCwgdGV4dCk7XG5cdH0pO1xuXG5cdHJldHVybiB0ZXh0O1xufTtcbi8vXG4vLyBPcHRpb25zOlxuLy9cblxuLy8gUGFyc2UgZXh0ZW5zaW9ucyBvcHRpb25zIGludG8gc2VwYXJhdGUgYXJyYXlzXG5pZiAoY29udmVydGVyX29wdGlvbnMgJiYgY29udmVydGVyX29wdGlvbnMuZXh0ZW5zaW9ucykge1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuXHQvLyBJdGVyYXRlIG92ZXIgZWFjaCBwbHVnaW5cblx0U2hvd2Rvd24uZm9yRWFjaChjb252ZXJ0ZXJfb3B0aW9ucy5leHRlbnNpb25zLCBmdW5jdGlvbihwbHVnaW4pe1xuXG5cdFx0Ly8gQXNzdW1lIGl0J3MgYSBidW5kbGVkIHBsdWdpbiBpZiBhIHN0cmluZyBpcyBnaXZlblxuXHRcdGlmICh0eXBlb2YgcGx1Z2luID09PSAnc3RyaW5nJykge1xuXHRcdFx0cGx1Z2luID0gU2hvd2Rvd24uZXh0ZW5zaW9uc1tzdGRFeHROYW1lKHBsdWdpbildO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBJdGVyYXRlIG92ZXIgZWFjaCBleHRlbnNpb24gd2l0aGluIHRoYXQgcGx1Z2luXG5cdFx0XHRTaG93ZG93bi5mb3JFYWNoKHBsdWdpbihzZWxmKSwgZnVuY3Rpb24oZXh0KXtcblx0XHRcdFx0Ly8gU29ydCBleHRlbnNpb25zIGJ5IHR5cGVcblx0XHRcdFx0aWYgKGV4dC50eXBlKSB7XG5cdFx0XHRcdFx0aWYgKGV4dC50eXBlID09PSAnbGFuZ3VhZ2UnIHx8IGV4dC50eXBlID09PSAnbGFuZycpIHtcblx0XHRcdFx0XHRcdGdfbGFuZ19leHRlbnNpb25zLnB1c2goZXh0KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGV4dC50eXBlID09PSAnb3V0cHV0JyB8fCBleHQudHlwZSA9PT0gJ2h0bWwnKSB7XG5cdFx0XHRcdFx0XHRnX291dHB1dF9tb2RpZmllcnMucHVzaChleHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBBc3N1bWUgbGFuZ3VhZ2UgZXh0ZW5zaW9uXG5cdFx0XHRcdFx0Z19vdXRwdXRfbW9kaWZpZXJzLnB1c2goZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IFwiRXh0ZW5zaW9uICdcIiArIHBsdWdpbiArIFwiJyBjb3VsZCBub3QgYmUgbG9hZGVkLiAgSXQgd2FzIGVpdGhlciBub3QgZm91bmQgb3IgaXMgbm90IGEgdmFsaWQgZXh0ZW5zaW9uLlwiO1xuXHRcdH1cblx0fSk7XG59XG5cblxudmFyIF9FeGVjdXRlRXh0ZW5zaW9uID0gZnVuY3Rpb24oZXh0LCB0ZXh0KSB7XG5cdGlmIChleHQucmVnZXgpIHtcblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKGV4dC5yZWdleCwgJ2cnKTtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKHJlLCBleHQucmVwbGFjZSk7XG5cdH0gZWxzZSBpZiAoZXh0LmZpbHRlcikge1xuXHRcdHJldHVybiBleHQuZmlsdGVyKHRleHQpO1xuXHR9XG59O1xuXG52YXIgX1N0cmlwTGlua0RlZmluaXRpb25zID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vIFN0cmlwcyBsaW5rIGRlZmluaXRpb25zIGZyb20gdGV4dCwgc3RvcmVzIHRoZSBVUkxzIGFuZCB0aXRsZXMgaW5cbi8vIGhhc2ggcmVmZXJlbmNlcy5cbi8vXG5cblx0Ly8gTGluayBkZWZzIGFyZSBpbiB0aGUgZm9ybTogXltpZF06IHVybCBcIm9wdGlvbmFsIHRpdGxlXCJcblxuXHQvKlxuXHRcdHZhciB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHRcdFx0XlsgXXswLDN9XFxbKC4rKVxcXTogIC8vIGlkID0gJDEgIGF0dGFja2xhYjogZ190YWJfd2lkdGggLSAxXG5cdFx0XHRcdCAgWyBcXHRdKlxuXHRcdFx0XHQgIFxcbj9cdFx0XHRcdC8vIG1heWJlICpvbmUqIG5ld2xpbmVcblx0XHRcdFx0ICBbIFxcdF0qXG5cdFx0XHRcdDw/KFxcUys/KT4/XHRcdFx0Ly8gdXJsID0gJDJcblx0XHRcdFx0ICBbIFxcdF0qXG5cdFx0XHRcdCAgXFxuP1x0XHRcdFx0Ly8gbWF5YmUgb25lIG5ld2xpbmVcblx0XHRcdFx0ICBbIFxcdF0qXG5cdFx0XHRcdCg/OlxuXHRcdFx0XHQgIChcXG4qKVx0XHRcdFx0Ly8gYW55IGxpbmVzIHNraXBwZWQgPSAkMyBhdHRhY2tsYWI6IGxvb2tiZWhpbmQgcmVtb3ZlZFxuXHRcdFx0XHQgIFtcIihdXG5cdFx0XHRcdCAgKC4rPylcdFx0XHRcdC8vIHRpdGxlID0gJDRcblx0XHRcdFx0ICBbXCIpXVxuXHRcdFx0XHQgIFsgXFx0XSpcblx0XHRcdFx0KT9cdFx0XHRcdFx0Ly8gdGl0bGUgaXMgb3B0aW9uYWxcblx0XHRcdFx0KD86XFxuK3wkKVxuXHRcdFx0ICAvZ20sXG5cdFx0XHQgIGZ1bmN0aW9uKCl7Li4ufSk7XG5cdCovXG5cblx0Ly8gYXR0YWNrbGFiOiBzZW50aW5lbCB3b3JrYXJvdW5kcyBmb3IgbGFjayBvZiBcXEEgYW5kIFxcWiwgc2FmYXJpXFxraHRtbCBidWdcblx0dGV4dCArPSBcIn4wXCI7XG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlsgXXswLDN9XFxbKC4rKVxcXTpbIFxcdF0qXFxuP1sgXFx0XSo8PyhcXFMrPyk+P1sgXFx0XSpcXG4/WyBcXHRdKig/OihcXG4qKVtcIihdKC4rPylbXCIpXVsgXFx0XSopPyg/Olxcbit8KD89fjApKS9nbSxcblx0XHRmdW5jdGlvbiAod2hvbGVNYXRjaCxtMSxtMixtMyxtNCkge1xuXHRcdFx0bTEgPSBtMS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Z191cmxzW20xXSA9IF9FbmNvZGVBbXBzQW5kQW5nbGVzKG0yKTsgIC8vIExpbmsgSURzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG5cdFx0XHRpZiAobTMpIHtcblx0XHRcdFx0Ly8gT29wcywgZm91bmQgYmxhbmsgbGluZXMsIHNvIGl0J3Mgbm90IGEgdGl0bGUuXG5cdFx0XHRcdC8vIFB1dCBiYWNrIHRoZSBwYXJlbnRoZXRpY2FsIHN0YXRlbWVudCB3ZSBzdG9sZS5cblx0XHRcdFx0cmV0dXJuIG0zK200O1xuXHRcdFx0fSBlbHNlIGlmIChtNCkge1xuXHRcdFx0XHRnX3RpdGxlc1ttMV0gPSBtNC5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZWx5IHJlbW92ZSB0aGUgZGVmaW5pdGlvbiBmcm9tIHRoZSB0ZXh0XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cdCk7XG5cblx0Ly8gYXR0YWNrbGFiOiBzdHJpcCBzZW50aW5lbFxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9+MC8sXCJcIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cblxudmFyIF9IYXNoSFRNTEJsb2NrcyA9IGZ1bmN0aW9uKHRleHQpIHtcblx0Ly8gYXR0YWNrbGFiOiBEb3VibGUgdXAgYmxhbmsgbGluZXMgdG8gcmVkdWNlIGxvb2thcm91bmRcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXFxuL2csXCJcXG5cXG5cIik7XG5cblx0Ly8gSGFzaGlmeSBIVE1MIGJsb2Nrczpcblx0Ly8gV2Ugb25seSB3YW50IHRvIGRvIHRoaXMgZm9yIGJsb2NrLWxldmVsIEhUTUwgdGFncywgc3VjaCBhcyBoZWFkZXJzLFxuXHQvLyBsaXN0cywgYW5kIHRhYmxlcy4gVGhhdCdzIGJlY2F1c2Ugd2Ugc3RpbGwgd2FudCB0byB3cmFwIDxwPnMgYXJvdW5kXG5cdC8vIFwicGFyYWdyYXBoc1wiIHRoYXQgYXJlIHdyYXBwZWQgaW4gbm9uLWJsb2NrLWxldmVsIHRhZ3MsIHN1Y2ggYXMgYW5jaG9ycyxcblx0Ly8gcGhyYXNlIGVtcGhhc2lzLCBhbmQgc3BhbnMuIFRoZSBsaXN0IG9mIHRhZ3Mgd2UncmUgbG9va2luZyBmb3IgaXNcblx0Ly8gaGFyZC1jb2RlZDpcblx0dmFyIGJsb2NrX3RhZ3NfYSA9IFwicHxkaXZ8aFsxLTZdfGJsb2NrcXVvdGV8cHJlfHRhYmxlfGRsfG9sfHVsfHNjcmlwdHxub3NjcmlwdHxmb3JtfGZpZWxkc2V0fGlmcmFtZXxtYXRofGluc3xkZWx8c3R5bGV8c2VjdGlvbnxoZWFkZXJ8Zm9vdGVyfG5hdnxhcnRpY2xlfGFzaWRlXCI7XG5cdHZhciBibG9ja190YWdzX2IgPSBcInB8ZGl2fGhbMS02XXxibG9ja3F1b3RlfHByZXx0YWJsZXxkbHxvbHx1bHxzY3JpcHR8bm9zY3JpcHR8Zm9ybXxmaWVsZHNldHxpZnJhbWV8bWF0aHxzdHlsZXxzZWN0aW9ufGhlYWRlcnxmb290ZXJ8bmF2fGFydGljbGV8YXNpZGVcIjtcblxuXHQvLyBGaXJzdCwgbG9vayBmb3IgbmVzdGVkIGJsb2NrcywgZS5nLjpcblx0Ly8gICA8ZGl2PlxuXHQvLyAgICAgPGRpdj5cblx0Ly8gICAgIHRhZ3MgZm9yIGlubmVyIGJsb2NrIG11c3QgYmUgaW5kZW50ZWQuXG5cdC8vICAgICA8L2Rpdj5cblx0Ly8gICA8L2Rpdj5cblx0Ly9cblx0Ly8gVGhlIG91dGVybW9zdCB0YWdzIG11c3Qgc3RhcnQgYXQgdGhlIGxlZnQgbWFyZ2luIGZvciB0aGlzIHRvIG1hdGNoLCBhbmRcblx0Ly8gdGhlIGlubmVyIG5lc3RlZCBkaXZzIG11c3QgYmUgaW5kZW50ZWQuXG5cdC8vIFdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgdGhlIG5leHQsIG1vcmUgbGliZXJhbCBtYXRjaCwgYmVjYXVzZSB0aGUgbmV4dFxuXHQvLyBtYXRjaCB3aWxsIHN0YXJ0IGF0IHRoZSBmaXJzdCBgPGRpdj5gIGFuZCBzdG9wIGF0IHRoZSBmaXJzdCBgPC9kaXY+YC5cblxuXHQvLyBhdHRhY2tsYWI6IFRoaXMgcmVnZXggY2FuIGJlIGV4cGVuc2l2ZSB3aGVuIGl0IGZhaWxzLlxuXHQvKlxuXHRcdHZhciB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHQoXHRcdFx0XHRcdFx0Ly8gc2F2ZSBpbiAkMVxuXHRcdFx0Xlx0XHRcdFx0XHQvLyBzdGFydCBvZiBsaW5lICAod2l0aCAvbSlcblx0XHRcdDwoJGJsb2NrX3RhZ3NfYSlcdC8vIHN0YXJ0IHRhZyA9ICQyXG5cdFx0XHRcXGJcdFx0XHRcdFx0Ly8gd29yZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQga2h0bWwvcGNyZSBidWcuLi5cblx0XHRcdFteXFxyXSo/XFxuXHRcdFx0Ly8gYW55IG51bWJlciBvZiBsaW5lcywgbWluaW1hbGx5IG1hdGNoaW5nXG5cdFx0XHQ8L1xcMj5cdFx0XHRcdC8vIHRoZSBtYXRjaGluZyBlbmQgdGFnXG5cdFx0XHRbIFxcdF0qXHRcdFx0XHQvLyB0cmFpbGluZyBzcGFjZXMvdGFic1xuXHRcdFx0KD89XFxuKylcdFx0XHRcdC8vIGZvbGxvd2VkIGJ5IGEgbmV3bGluZVxuXHRcdClcdFx0XHRcdFx0XHQvLyBhdHRhY2tsYWI6IHRoZXJlIGFyZSBzZW50aW5lbCBuZXdsaW5lcyBhdCBlbmQgb2YgZG9jdW1lbnRcblx0XHQvZ20sZnVuY3Rpb24oKXsuLi59fTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXig8KHB8ZGl2fGhbMS02XXxibG9ja3F1b3RlfHByZXx0YWJsZXxkbHxvbHx1bHxzY3JpcHR8bm9zY3JpcHR8Zm9ybXxmaWVsZHNldHxpZnJhbWV8bWF0aHxpbnN8ZGVsKVxcYlteXFxyXSo/XFxuPFxcL1xcMj5bIFxcdF0qKD89XFxuKykpL2dtLGhhc2hFbGVtZW50KTtcblxuXHQvL1xuXHQvLyBOb3cgbWF0Y2ggbW9yZSBsaWJlcmFsbHksIHNpbXBseSBmcm9tIGBcXG48dGFnPmAgdG8gYDwvdGFnPlxcbmBcblx0Ly9cblxuXHQvKlxuXHRcdHZhciB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHQoXHRcdFx0XHRcdFx0Ly8gc2F2ZSBpbiAkMVxuXHRcdFx0Xlx0XHRcdFx0XHQvLyBzdGFydCBvZiBsaW5lICAod2l0aCAvbSlcblx0XHRcdDwoJGJsb2NrX3RhZ3NfYilcdC8vIHN0YXJ0IHRhZyA9ICQyXG5cdFx0XHRcXGJcdFx0XHRcdFx0Ly8gd29yZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQga2h0bWwvcGNyZSBidWcuLi5cblx0XHRcdFteXFxyXSo/XHRcdFx0XHQvLyBhbnkgbnVtYmVyIG9mIGxpbmVzLCBtaW5pbWFsbHkgbWF0Y2hpbmdcblx0XHRcdDwvXFwyPlx0XHRcdFx0Ly8gdGhlIG1hdGNoaW5nIGVuZCB0YWdcblx0XHRcdFsgXFx0XSpcdFx0XHRcdC8vIHRyYWlsaW5nIHNwYWNlcy90YWJzXG5cdFx0XHQoPz1cXG4rKVx0XHRcdFx0Ly8gZm9sbG93ZWQgYnkgYSBuZXdsaW5lXG5cdFx0KVx0XHRcdFx0XHRcdC8vIGF0dGFja2xhYjogdGhlcmUgYXJlIHNlbnRpbmVsIG5ld2xpbmVzIGF0IGVuZCBvZiBkb2N1bWVudFxuXHRcdC9nbSxmdW5jdGlvbigpey4uLn19O1xuXHQqL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eKDwocHxkaXZ8aFsxLTZdfGJsb2NrcXVvdGV8cHJlfHRhYmxlfGRsfG9sfHVsfHNjcmlwdHxub3NjcmlwdHxmb3JtfGZpZWxkc2V0fGlmcmFtZXxtYXRofHN0eWxlfHNlY3Rpb258aGVhZGVyfGZvb3RlcnxuYXZ8YXJ0aWNsZXxhc2lkZSlcXGJbXlxccl0qPzxcXC9cXDI+WyBcXHRdKig/PVxcbispXFxuKS9nbSxoYXNoRWxlbWVudCk7XG5cblx0Ly8gU3BlY2lhbCBjYXNlIGp1c3QgZm9yIDxociAvPi4gSXQgd2FzIGVhc2llciB0byBtYWtlIGEgc3BlY2lhbCBjYXNlIHRoYW5cblx0Ly8gdG8gbWFrZSB0aGUgb3RoZXIgcmVnZXggbW9yZSBjb21wbGljYXRlZC5cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdChcdFx0XHRcdFx0XHQvLyBzYXZlIGluICQxXG5cdFx0XHRcXG5cXG5cdFx0XHRcdC8vIFN0YXJ0aW5nIGFmdGVyIGEgYmxhbmsgbGluZVxuXHRcdFx0WyBdezAsM31cblx0XHRcdCg8KGhyKVx0XHRcdFx0Ly8gc3RhcnQgdGFnID0gJDJcblx0XHRcdFxcYlx0XHRcdFx0XHQvLyB3b3JkIGJyZWFrXG5cdFx0XHQoW148Pl0pKj9cdFx0XHQvL1xuXHRcdFx0XFwvPz4pXHRcdFx0XHQvLyB0aGUgbWF0Y2hpbmcgZW5kIHRhZ1xuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KD89XFxuezIsfSlcdFx0XHQvLyBmb2xsb3dlZCBieSBhIGJsYW5rIGxpbmVcblx0XHQpXG5cdFx0L2csaGFzaEVsZW1lbnQpO1xuXHQqL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxuWyBdezAsM30oPChocilcXGIoW148Pl0pKj9cXC8/PilbIFxcdF0qKD89XFxuezIsfSkpL2csaGFzaEVsZW1lbnQpO1xuXG5cdC8vIFNwZWNpYWwgY2FzZSBmb3Igc3RhbmRhbG9uZSBIVE1MIGNvbW1lbnRzOlxuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHRcdFx0XHRcdC8vIHNhdmUgaW4gJDFcblx0XHRcdFxcblxcblx0XHRcdFx0Ly8gU3RhcnRpbmcgYWZ0ZXIgYSBibGFuayBsaW5lXG5cdFx0XHRbIF17MCwzfVx0XHRcdC8vIGF0dGFja2xhYjogZ190YWJfd2lkdGggLSAxXG5cdFx0XHQ8IVxuXHRcdFx0KC0tW15cXHJdKj8tLVxccyopK1xuXHRcdFx0PlxuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KD89XFxuezIsfSlcdFx0XHQvLyBmb2xsb3dlZCBieSBhIGJsYW5rIGxpbmVcblx0XHQpXG5cdFx0L2csaGFzaEVsZW1lbnQpO1xuXHQqL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxuXFxuWyBdezAsM308ISgtLVteXFxyXSo/LS1cXHMqKSs+WyBcXHRdKig/PVxcbnsyLH0pKS9nLGhhc2hFbGVtZW50KTtcblxuXHQvLyBQSFAgYW5kIEFTUC1zdHlsZSBwcm9jZXNzb3IgaW5zdHJ1Y3Rpb25zICg8Py4uLj8+IGFuZCA8JS4uLiU+KVxuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KD86XG5cdFx0XHRcXG5cXG5cdFx0XHRcdC8vIFN0YXJ0aW5nIGFmdGVyIGEgYmxhbmsgbGluZVxuXHRcdClcblx0XHQoXHRcdFx0XHRcdFx0Ly8gc2F2ZSBpbiAkMVxuXHRcdFx0WyBdezAsM31cdFx0XHQvLyBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoIC0gMVxuXHRcdFx0KD86XG5cdFx0XHRcdDwoWz8lXSlcdFx0XHQvLyAkMlxuXHRcdFx0XHRbXlxccl0qP1xuXHRcdFx0XHRcXDI+XG5cdFx0XHQpXG5cdFx0XHRbIFxcdF0qXG5cdFx0XHQoPz1cXG57Mix9KVx0XHRcdC8vIGZvbGxvd2VkIGJ5IGEgYmxhbmsgbGluZVxuXHRcdClcblx0XHQvZyxoYXNoRWxlbWVudCk7XG5cdCovXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/OlxcblxcbikoWyBdezAsM30oPzo8KFs/JV0pW15cXHJdKj9cXDI+KVsgXFx0XSooPz1cXG57Mix9KSkvZyxoYXNoRWxlbWVudCk7XG5cblx0Ly8gYXR0YWNrbGFiOiBVbmRvIGRvdWJsZSBsaW5lcyAoc2VlIGNvbW1lbnQgYXQgdG9wIG9mIHRoaXMgZnVuY3Rpb24pXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO1xuXHRyZXR1cm4gdGV4dDtcbn1cblxudmFyIGhhc2hFbGVtZW50ID0gZnVuY3Rpb24od2hvbGVNYXRjaCxtMSkge1xuXHR2YXIgYmxvY2tUZXh0ID0gbTE7XG5cblx0Ly8gVW5kbyBkb3VibGUgbGluZXNcblx0YmxvY2tUZXh0ID0gYmxvY2tUZXh0LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO1xuXHRibG9ja1RleHQgPSBibG9ja1RleHQucmVwbGFjZSgvXlxcbi8sXCJcIik7XG5cblx0Ly8gc3RyaXAgdHJhaWxpbmcgYmxhbmsgbGluZXNcblx0YmxvY2tUZXh0ID0gYmxvY2tUZXh0LnJlcGxhY2UoL1xcbiskL2csXCJcIik7XG5cblx0Ly8gUmVwbGFjZSB0aGUgZWxlbWVudCB0ZXh0IHdpdGggYSBtYXJrZXIgKFwifkt4S1wiIHdoZXJlIHggaXMgaXRzIGtleSlcblx0YmxvY2tUZXh0ID0gXCJcXG5cXG5+S1wiICsgKGdfaHRtbF9ibG9ja3MucHVzaChibG9ja1RleHQpLTEpICsgXCJLXFxuXFxuXCI7XG5cblx0cmV0dXJuIGJsb2NrVGV4dDtcbn07XG5cbnZhciBfUnVuQmxvY2tHYW11dCA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBUaGVzZSBhcmUgYWxsIHRoZSB0cmFuc2Zvcm1hdGlvbnMgdGhhdCBmb3JtIGJsb2NrLWxldmVsXG4vLyB0YWdzIGxpa2UgcGFyYWdyYXBocywgaGVhZGVycywgYW5kIGxpc3QgaXRlbXMuXG4vL1xuXHR0ZXh0ID0gX0RvSGVhZGVycyh0ZXh0KTtcblxuXHQvLyBEbyBIb3Jpem9udGFsIFJ1bGVzOlxuXHR2YXIga2V5ID0gaGFzaEJsb2NrKFwiPGhyIC8+XCIpO1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eWyBdezAsMn0oWyBdP1xcKlsgXT8pezMsfVsgXFx0XSokL2dtLGtleSk7XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL15bIF17MCwyfShbIF0/XFwtWyBdPyl7Myx9WyBcXHRdKiQvZ20sa2V5KTtcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlsgXXswLDJ9KFsgXT9cXF9bIF0/KXszLH1bIFxcdF0qJC9nbSxrZXkpO1xuXG5cdHRleHQgPSBfRG9MaXN0cyh0ZXh0KTtcblx0dGV4dCA9IF9Eb0NvZGVCbG9ja3ModGV4dCk7XG5cdHRleHQgPSBfRG9CbG9ja1F1b3Rlcyh0ZXh0KTtcblxuXHQvLyBXZSBhbHJlYWR5IHJhbiBfSGFzaEhUTUxCbG9ja3MoKSBiZWZvcmUsIGluIE1hcmtkb3duKCksIGJ1dCB0aGF0XG5cdC8vIHdhcyB0byBlc2NhcGUgcmF3IEhUTUwgaW4gdGhlIG9yaWdpbmFsIE1hcmtkb3duIHNvdXJjZS4gVGhpcyB0aW1lLFxuXHQvLyB3ZSdyZSBlc2NhcGluZyB0aGUgbWFya3VwIHdlJ3ZlIGp1c3QgY3JlYXRlZCwgc28gdGhhdCB3ZSBkb24ndCB3cmFwXG5cdC8vIDxwPiB0YWdzIGFyb3VuZCBibG9jay1sZXZlbCB0YWdzLlxuXHR0ZXh0ID0gX0hhc2hIVE1MQmxvY2tzKHRleHQpO1xuXHR0ZXh0ID0gX0Zvcm1QYXJhZ3JhcGhzKHRleHQpO1xuXG5cdHJldHVybiB0ZXh0O1xufTtcblxuXG52YXIgX1J1blNwYW5HYW11dCA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBUaGVzZSBhcmUgYWxsIHRoZSB0cmFuc2Zvcm1hdGlvbnMgdGhhdCBvY2N1ciAqd2l0aGluKiBibG9jay1sZXZlbFxuLy8gdGFncyBsaWtlIHBhcmFncmFwaHMsIGhlYWRlcnMsIGFuZCBsaXN0IGl0ZW1zLlxuLy9cblxuXHR0ZXh0ID0gX0RvQ29kZVNwYW5zKHRleHQpO1xuXHR0ZXh0ID0gX0VzY2FwZVNwZWNpYWxDaGFyc1dpdGhpblRhZ0F0dHJpYnV0ZXModGV4dCk7XG5cdHRleHQgPSBfRW5jb2RlQmFja3NsYXNoRXNjYXBlcyh0ZXh0KTtcblxuXHQvLyBQcm9jZXNzIGFuY2hvciBhbmQgaW1hZ2UgdGFncy4gSW1hZ2VzIG11c3QgY29tZSBmaXJzdCxcblx0Ly8gYmVjYXVzZSAhW2Zvb11bZl0gbG9va3MgbGlrZSBhbiBhbmNob3IuXG5cdHRleHQgPSBfRG9JbWFnZXModGV4dCk7XG5cdHRleHQgPSBfRG9BbmNob3JzKHRleHQpO1xuXG5cdC8vIE1ha2UgbGlua3Mgb3V0IG9mIHRoaW5ncyBsaWtlIGA8aHR0cDovL2V4YW1wbGUuY29tLz5gXG5cdC8vIE11c3QgY29tZSBhZnRlciBfRG9BbmNob3JzKCksIGJlY2F1c2UgeW91IGNhbiB1c2UgPCBhbmQgPlxuXHQvLyBkZWxpbWl0ZXJzIGluIGlubGluZSBsaW5rcyBsaWtlIFt0aGlzXSg8dXJsPikuXG5cdHRleHQgPSBfRG9BdXRvTGlua3ModGV4dCk7XG5cdHRleHQgPSBfRW5jb2RlQW1wc0FuZEFuZ2xlcyh0ZXh0KTtcblx0dGV4dCA9IF9Eb0l0YWxpY3NBbmRCb2xkKHRleHQpO1xuXG5cdC8vIERvIGhhcmQgYnJlYWtzOlxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8gICtcXG4vZyxcIiA8YnIgLz5cXG5cIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciBfRXNjYXBlU3BlY2lhbENoYXJzV2l0aGluVGFnQXR0cmlidXRlcyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBXaXRoaW4gdGFncyAtLSBtZWFuaW5nIGJldHdlZW4gPCBhbmQgPiAtLSBlbmNvZGUgW1xcIGAgKiBfXSBzbyB0aGV5XG4vLyBkb24ndCBjb25mbGljdCB3aXRoIHRoZWlyIHVzZSBpbiBNYXJrZG93biBmb3IgY29kZSwgaXRhbGljcyBhbmQgc3Ryb25nLlxuLy9cblxuXHQvLyBCdWlsZCBhIHJlZ2V4IHRvIGZpbmQgSFRNTCB0YWdzIGFuZCBjb21tZW50cy4gIFNlZSBGcmllZGwnc1xuXHQvLyBcIk1hc3RlcmluZyBSZWd1bGFyIEV4cHJlc3Npb25zXCIsIDJuZCBFZC4sIHBwLiAyMDAtMjAxLlxuXHR2YXIgcmVnZXggPSAvKDxbYS16XFwvISRdKFwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo+fDwhKC0tLio/LS1cXHMqKSs+KS9naTtcblxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHJlZ2V4LCBmdW5jdGlvbih3aG9sZU1hdGNoKSB7XG5cdFx0dmFyIHRhZyA9IHdob2xlTWF0Y2gucmVwbGFjZSgvKC4pPFxcLz9jb2RlPig/PS4pL2csXCIkMWBcIik7XG5cdFx0dGFnID0gZXNjYXBlQ2hhcmFjdGVycyh0YWcsXCJcXFxcYCpfXCIpO1xuXHRcdHJldHVybiB0YWc7XG5cdH0pO1xuXG5cdHJldHVybiB0ZXh0O1xufVxuXG52YXIgX0RvQW5jaG9ycyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBUdXJuIE1hcmtkb3duIGxpbmsgc2hvcnRjdXRzIGludG8gWEhUTUwgPGE+IHRhZ3MuXG4vL1xuXHQvL1xuXHQvLyBGaXJzdCwgaGFuZGxlIHJlZmVyZW5jZS1zdHlsZSBsaW5rczogW2xpbmsgdGV4dF0gW2lkXVxuXHQvL1xuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHRcdFx0XHRcdFx0Ly8gd3JhcCB3aG9sZSBtYXRjaCBpbiAkMVxuXHRcdFx0XFxbXG5cdFx0XHQoXG5cdFx0XHRcdCg/OlxuXHRcdFx0XHRcdFxcW1teXFxdXSpcXF1cdFx0Ly8gYWxsb3cgYnJhY2tldHMgbmVzdGVkIG9uZSBsZXZlbFxuXHRcdFx0XHRcdHxcblx0XHRcdFx0XHRbXlxcW11cdFx0XHQvLyBvciBhbnl0aGluZyBlbHNlXG5cdFx0XHRcdCkqXG5cdFx0XHQpXG5cdFx0XHRcXF1cblxuXHRcdFx0WyBdP1x0XHRcdFx0XHQvLyBvbmUgb3B0aW9uYWwgc3BhY2Vcblx0XHRcdCg/OlxcblsgXSopP1x0XHRcdFx0Ly8gb25lIG9wdGlvbmFsIG5ld2xpbmUgZm9sbG93ZWQgYnkgc3BhY2VzXG5cblx0XHRcdFxcW1xuXHRcdFx0KC4qPylcdFx0XHRcdFx0Ly8gaWQgPSAkM1xuXHRcdFx0XFxdXG5cdFx0KSgpKCkoKSgpXHRcdFx0XHRcdC8vIHBhZCByZW1haW5pbmcgYmFja3JlZmVyZW5jZXNcblx0XHQvZyxfRG9BbmNob3JzX2NhbGxiYWNrKTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcWygoPzpcXFtbXlxcXV0qXFxdfFteXFxbXFxdXSkqKVxcXVsgXT8oPzpcXG5bIF0qKT9cXFsoLio/KVxcXSkoKSgpKCkoKS9nLHdyaXRlQW5jaG9yVGFnKTtcblxuXHQvL1xuXHQvLyBOZXh0LCBpbmxpbmUtc3R5bGUgbGlua3M6IFtsaW5rIHRleHRdKHVybCBcIm9wdGlvbmFsIHRpdGxlXCIpXG5cdC8vXG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHRcdChcdFx0XHRcdFx0XHQvLyB3cmFwIHdob2xlIG1hdGNoIGluICQxXG5cdFx0XHRcdFxcW1xuXHRcdFx0XHQoXG5cdFx0XHRcdFx0KD86XG5cdFx0XHRcdFx0XHRcXFtbXlxcXV0qXFxdXHQvLyBhbGxvdyBicmFja2V0cyBuZXN0ZWQgb25lIGxldmVsXG5cdFx0XHRcdFx0fFxuXHRcdFx0XHRcdFteXFxbXFxdXVx0XHRcdC8vIG9yIGFueXRoaW5nIGVsc2Vcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdFx0XFxdXG5cdFx0XHRcXChcdFx0XHRcdFx0XHQvLyBsaXRlcmFsIHBhcmVuXG5cdFx0XHRbIFxcdF0qXG5cdFx0XHQoKVx0XHRcdFx0XHRcdC8vIG5vIGlkLCBzbyBsZWF2ZSAkMyBlbXB0eVxuXHRcdFx0PD8oLio/KT4/XHRcdFx0XHQvLyBocmVmID0gJDRcblx0XHRcdFsgXFx0XSpcblx0XHRcdChcdFx0XHRcdFx0XHQvLyAkNVxuXHRcdFx0XHQoWydcIl0pXHRcdFx0XHQvLyBxdW90ZSBjaGFyID0gJDZcblx0XHRcdFx0KC4qPylcdFx0XHRcdC8vIFRpdGxlID0gJDdcblx0XHRcdFx0XFw2XHRcdFx0XHRcdC8vIG1hdGNoaW5nIHF1b3RlXG5cdFx0XHRcdFsgXFx0XSpcdFx0XHRcdC8vIGlnbm9yZSBhbnkgc3BhY2VzL3RhYnMgYmV0d2VlbiBjbG9zaW5nIHF1b3RlIGFuZCApXG5cdFx0XHQpP1x0XHRcdFx0XHRcdC8vIHRpdGxlIGlzIG9wdGlvbmFsXG5cdFx0XHRcXClcblx0XHQpXG5cdFx0L2csd3JpdGVBbmNob3JUYWcpO1xuXHQqL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFxbKCg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dKSopXFxdXFwoWyBcXHRdKigpPD8oLio/KD86XFwoLio/XFwpLio/KT8pPj9bIFxcdF0qKChbJ1wiXSkoLio/KVxcNlsgXFx0XSopP1xcKSkvZyx3cml0ZUFuY2hvclRhZyk7XG5cblx0Ly9cblx0Ly8gTGFzdCwgaGFuZGxlIHJlZmVyZW5jZS1zdHlsZSBzaG9ydGN1dHM6IFtsaW5rIHRleHRdXG5cdC8vIFRoZXNlIG11c3QgY29tZSBsYXN0IGluIGNhc2UgeW91J3ZlIGFsc28gZ290IFtsaW5rIHRlc3RdWzFdXG5cdC8vIG9yIFtsaW5rIHRlc3RdKC9mb28pXG5cdC8vXG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHQoXHRcdCBcdFx0XHRcdFx0Ly8gd3JhcCB3aG9sZSBtYXRjaCBpbiAkMVxuXHRcdFx0XFxbXG5cdFx0XHQoW15cXFtcXF1dKylcdFx0XHRcdC8vIGxpbmsgdGV4dCA9ICQyOyBjYW4ndCBjb250YWluICdbJyBvciAnXSdcblx0XHRcdFxcXVxuXHRcdCkoKSgpKCkoKSgpXHRcdFx0XHRcdC8vIHBhZCByZXN0IG9mIGJhY2tyZWZlcmVuY2VzXG5cdFx0L2csIHdyaXRlQW5jaG9yVGFnKTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcWyhbXlxcW1xcXV0rKVxcXSkoKSgpKCkoKSgpL2csIHdyaXRlQW5jaG9yVGFnKTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxudmFyIHdyaXRlQW5jaG9yVGFnID0gZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMixtMyxtNCxtNSxtNixtNykge1xuXHRpZiAobTcgPT0gdW5kZWZpbmVkKSBtNyA9IFwiXCI7XG5cdHZhciB3aG9sZV9tYXRjaCA9IG0xO1xuXHR2YXIgbGlua190ZXh0ICAgPSBtMjtcblx0dmFyIGxpbmtfaWRcdCA9IG0zLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB1cmxcdFx0PSBtNDtcblx0dmFyIHRpdGxlXHQ9IG03O1xuXG5cdGlmICh1cmwgPT0gXCJcIikge1xuXHRcdGlmIChsaW5rX2lkID09IFwiXCIpIHtcblx0XHRcdC8vIGxvd2VyLWNhc2UgYW5kIHR1cm4gZW1iZWRkZWQgbmV3bGluZXMgaW50byBzcGFjZXNcblx0XHRcdGxpbmtfaWQgPSBsaW5rX3RleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gP1xcbi9nLFwiIFwiKTtcblx0XHR9XG5cdFx0dXJsID0gXCIjXCIrbGlua19pZDtcblxuXHRcdGlmIChnX3VybHNbbGlua19pZF0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR1cmwgPSBnX3VybHNbbGlua19pZF07XG5cdFx0XHRpZiAoZ190aXRsZXNbbGlua19pZF0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRpdGxlID0gZ190aXRsZXNbbGlua19pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHdob2xlX21hdGNoLnNlYXJjaCgvXFwoXFxzKlxcKSQvbSk+LTEpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbCBjYXNlIGZvciBleHBsaWNpdCBlbXB0eSB1cmxcblx0XHRcdFx0dXJsID0gXCJcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB3aG9sZV9tYXRjaDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1cmwgPSBlc2NhcGVDaGFyYWN0ZXJzKHVybCxcIipfXCIpO1xuXHR2YXIgcmVzdWx0ID0gXCI8YSBocmVmPVxcXCJcIiArIHVybCArIFwiXFxcIlwiO1xuXG5cdGlmICh0aXRsZSAhPSBcIlwiKSB7XG5cdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpO1xuXHRcdHRpdGxlID0gZXNjYXBlQ2hhcmFjdGVycyh0aXRsZSxcIipfXCIpO1xuXHRcdHJlc3VsdCArPSAgXCIgdGl0bGU9XFxcIlwiICsgdGl0bGUgKyBcIlxcXCJcIjtcblx0fVxuXG5cdHJlc3VsdCArPSBcIj5cIiArIGxpbmtfdGV4dCArIFwiPC9hPlwiO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxudmFyIF9Eb0ltYWdlcyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBUdXJuIE1hcmtkb3duIGltYWdlIHNob3J0Y3V0cyBpbnRvIDxpbWc+IHRhZ3MuXG4vL1xuXG5cdC8vXG5cdC8vIEZpcnN0LCBoYW5kbGUgcmVmZXJlbmNlLXN0eWxlIGxhYmVsZWQgaW1hZ2VzOiAhW2FsdCB0ZXh0XVtpZF1cblx0Ly9cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdChcdFx0XHRcdFx0XHQvLyB3cmFwIHdob2xlIG1hdGNoIGluICQxXG5cdFx0XHQhXFxbXG5cdFx0XHQoLio/KVx0XHRcdFx0Ly8gYWx0IHRleHQgPSAkMlxuXHRcdFx0XFxdXG5cblx0XHRcdFsgXT9cdFx0XHRcdC8vIG9uZSBvcHRpb25hbCBzcGFjZVxuXHRcdFx0KD86XFxuWyBdKik/XHRcdFx0Ly8gb25lIG9wdGlvbmFsIG5ld2xpbmUgZm9sbG93ZWQgYnkgc3BhY2VzXG5cblx0XHRcdFxcW1xuXHRcdFx0KC4qPylcdFx0XHRcdC8vIGlkID0gJDNcblx0XHRcdFxcXVxuXHRcdCkoKSgpKCkoKVx0XHRcdFx0Ly8gcGFkIHJlc3Qgb2YgYmFja3JlZmVyZW5jZXNcblx0XHQvZyx3cml0ZUltYWdlVGFnKTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKCFcXFsoLio/KVxcXVsgXT8oPzpcXG5bIF0qKT9cXFsoLio/KVxcXSkoKSgpKCkoKS9nLHdyaXRlSW1hZ2VUYWcpO1xuXG5cdC8vXG5cdC8vIE5leHQsIGhhbmRsZSBpbmxpbmUgaW1hZ2VzOiAgIVthbHQgdGV4dF0odXJsIFwib3B0aW9uYWwgdGl0bGVcIilcblx0Ly8gRG9uJ3QgZm9yZ2V0OiBlbmNvZGUgKiBhbmQgX1xuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0KFx0XHRcdFx0XHRcdC8vIHdyYXAgd2hvbGUgbWF0Y2ggaW4gJDFcblx0XHRcdCFcXFtcblx0XHRcdCguKj8pXHRcdFx0XHQvLyBhbHQgdGV4dCA9ICQyXG5cdFx0XHRcXF1cblx0XHRcdFxccz9cdFx0XHRcdFx0Ly8gT25lIG9wdGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyXG5cdFx0XHRcXChcdFx0XHRcdFx0Ly8gbGl0ZXJhbCBwYXJlblxuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KClcdFx0XHRcdFx0Ly8gbm8gaWQsIHNvIGxlYXZlICQzIGVtcHR5XG5cdFx0XHQ8PyhcXFMrPyk+P1x0XHRcdC8vIHNyYyB1cmwgPSAkNFxuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KFx0XHRcdFx0XHQvLyAkNVxuXHRcdFx0XHQoWydcIl0pXHRcdFx0Ly8gcXVvdGUgY2hhciA9ICQ2XG5cdFx0XHRcdCguKj8pXHRcdFx0Ly8gdGl0bGUgPSAkN1xuXHRcdFx0XHRcXDZcdFx0XHRcdC8vIG1hdGNoaW5nIHF1b3RlXG5cdFx0XHRcdFsgXFx0XSpcblx0XHRcdCk/XHRcdFx0XHRcdC8vIHRpdGxlIGlzIG9wdGlvbmFsXG5cdFx0XFwpXG5cdFx0KVxuXHRcdC9nLHdyaXRlSW1hZ2VUYWcpO1xuXHQqL1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oIVxcWyguKj8pXFxdXFxzP1xcKFsgXFx0XSooKTw/KFxcUys/KT4/WyBcXHRdKigoWydcIl0pKC4qPylcXDZbIFxcdF0qKT9cXCkpL2csd3JpdGVJbWFnZVRhZyk7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cbnZhciB3cml0ZUltYWdlVGFnID0gZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMixtMyxtNCxtNSxtNixtNykge1xuXHR2YXIgd2hvbGVfbWF0Y2ggPSBtMTtcblx0dmFyIGFsdF90ZXh0ICAgPSBtMjtcblx0dmFyIGxpbmtfaWRcdCA9IG0zLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB1cmxcdFx0PSBtNDtcblx0dmFyIHRpdGxlXHQ9IG03O1xuXG5cdGlmICghdGl0bGUpIHRpdGxlID0gXCJcIjtcblxuXHRpZiAodXJsID09IFwiXCIpIHtcblx0XHRpZiAobGlua19pZCA9PSBcIlwiKSB7XG5cdFx0XHQvLyBsb3dlci1jYXNlIGFuZCB0dXJuIGVtYmVkZGVkIG5ld2xpbmVzIGludG8gc3BhY2VzXG5cdFx0XHRsaW5rX2lkID0gYWx0X3RleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gP1xcbi9nLFwiIFwiKTtcblx0XHR9XG5cdFx0dXJsID0gXCIjXCIrbGlua19pZDtcblxuXHRcdGlmIChnX3VybHNbbGlua19pZF0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR1cmwgPSBnX3VybHNbbGlua19pZF07XG5cdFx0XHRpZiAoZ190aXRsZXNbbGlua19pZF0gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRpdGxlID0gZ190aXRsZXNbbGlua19pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHdob2xlX21hdGNoO1xuXHRcdH1cblx0fVxuXG5cdGFsdF90ZXh0ID0gYWx0X3RleHQucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKTtcblx0dXJsID0gZXNjYXBlQ2hhcmFjdGVycyh1cmwsXCIqX1wiKTtcblx0dmFyIHJlc3VsdCA9IFwiPGltZyBzcmM9XFxcIlwiICsgdXJsICsgXCJcXFwiIGFsdD1cXFwiXCIgKyBhbHRfdGV4dCArIFwiXFxcIlwiO1xuXG5cdC8vIGF0dGFja2xhYjogTWFya2Rvd24ucGwgYWRkcyBlbXB0eSB0aXRsZSBhdHRyaWJ1dGVzIHRvIGltYWdlcy5cblx0Ly8gUmVwbGljYXRlIHRoaXMgYnVnLlxuXG5cdC8vaWYgKHRpdGxlICE9IFwiXCIpIHtcblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIik7XG5cdFx0dGl0bGUgPSBlc2NhcGVDaGFyYWN0ZXJzKHRpdGxlLFwiKl9cIik7XG5cdFx0cmVzdWx0ICs9ICBcIiB0aXRsZT1cXFwiXCIgKyB0aXRsZSArIFwiXFxcIlwiO1xuXHQvL31cblxuXHRyZXN1bHQgKz0gXCIgLz5cIjtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbnZhciBfRG9IZWFkZXJzID0gZnVuY3Rpb24odGV4dCkge1xuXG5cdC8vIFNldGV4dC1zdHlsZSBoZWFkZXJzOlxuXHQvL1x0SGVhZGVyIDFcblx0Ly9cdD09PT09PT09XG5cdC8vXG5cdC8vXHRIZWFkZXIgMlxuXHQvL1x0LS0tLS0tLS1cblx0Ly9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXiguKylbIFxcdF0qXFxuPStbIFxcdF0qXFxuKy9nbSxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xKXtyZXR1cm4gaGFzaEJsb2NrKCc8aDEgaWQ9XCInICsgaGVhZGVySWQobTEpICsgJ1wiPicgKyBfUnVuU3BhbkdhbXV0KG0xKSArIFwiPC9oMT5cIik7fSk7XG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXiguKylbIFxcdF0qXFxuLStbIFxcdF0qXFxuKy9nbSxcblx0XHRmdW5jdGlvbihtYXRjaEZvdW5kLG0xKXtyZXR1cm4gaGFzaEJsb2NrKCc8aDIgaWQ9XCInICsgaGVhZGVySWQobTEpICsgJ1wiPicgKyBfUnVuU3BhbkdhbXV0KG0xKSArIFwiPC9oMj5cIik7fSk7XG5cblx0Ly8gYXR4LXN0eWxlIGhlYWRlcnM6XG5cdC8vICAjIEhlYWRlciAxXG5cdC8vICAjIyBIZWFkZXIgMlxuXHQvLyAgIyMgSGVhZGVyIDIgd2l0aCBjbG9zaW5nIGhhc2hlcyAjI1xuXHQvLyAgLi4uXG5cdC8vICAjIyMjIyMgSGVhZGVyIDZcblx0Ly9cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xuXHRcdFx0XihcXCN7MSw2fSlcdFx0XHRcdC8vICQxID0gc3RyaW5nIG9mICMnc1xuXHRcdFx0WyBcXHRdKlxuXHRcdFx0KC4rPylcdFx0XHRcdFx0Ly8gJDIgPSBIZWFkZXIgdGV4dFxuXHRcdFx0WyBcXHRdKlxuXHRcdFx0XFwjKlx0XHRcdFx0XHRcdC8vIG9wdGlvbmFsIGNsb3NpbmcgIydzIChub3QgY291bnRlZClcblx0XHRcdFxcbitcblx0XHQvZ20sIGZ1bmN0aW9uKCkgey4uLn0pO1xuXHQqL1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL14oXFwjezEsNn0pWyBcXHRdKiguKz8pWyBcXHRdKlxcIypcXG4rL2dtLFxuXHRcdGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIpIHtcblx0XHRcdHZhciBoX2xldmVsID0gbTEubGVuZ3RoO1xuXHRcdFx0cmV0dXJuIGhhc2hCbG9jayhcIjxoXCIgKyBoX2xldmVsICsgJyBpZD1cIicgKyBoZWFkZXJJZChtMikgKyAnXCI+JyArIF9SdW5TcGFuR2FtdXQobTIpICsgXCI8L2hcIiArIGhfbGV2ZWwgKyBcIj5cIik7XG5cdFx0fSk7XG5cblx0ZnVuY3Rpb24gaGVhZGVySWQobSkge1xuXHRcdHJldHVybiBtLnJlcGxhY2UoL1teXFx3XS9nLCAnJykudG9Mb3dlckNhc2UoKTtcblx0fVxuXHRyZXR1cm4gdGV4dDtcbn1cblxuLy8gVGhpcyBkZWNsYXJhdGlvbiBrZWVwcyBEb2pvIGNvbXByZXNzb3IgZnJvbSBvdXRwdXR0aW5nIGdhcmJhZ2U6XG52YXIgX1Byb2Nlc3NMaXN0SXRlbXM7XG5cbnZhciBfRG9MaXN0cyA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBGb3JtIEhUTUwgb3JkZXJlZCAobnVtYmVyZWQpIGFuZCB1bm9yZGVyZWQgKGJ1bGxldGVkKSBsaXN0cy5cbi8vXG5cblx0Ly8gYXR0YWNrbGFiOiBhZGQgc2VudGluZWwgdG8gaGFjayBhcm91bmQga2h0bWwvc2FmYXJpIGJ1Zzpcblx0Ly8gaHR0cDovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTEyMzFcblx0dGV4dCArPSBcIn4wXCI7XG5cblx0Ly8gUmUtdXNhYmxlIHBhdHRlcm4gdG8gbWF0Y2ggYW55IGVudGlyZWwgdWwgb3Igb2wgbGlzdDpcblxuXHQvKlxuXHRcdHZhciB3aG9sZV9saXN0ID0gL1xuXHRcdChcdFx0XHRcdFx0XHRcdFx0XHQvLyAkMSA9IHdob2xlIGxpc3Rcblx0XHRcdChcdFx0XHRcdFx0XHRcdFx0Ly8gJDJcblx0XHRcdFx0WyBdezAsM31cdFx0XHRcdFx0Ly8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aCAtIDFcblx0XHRcdFx0KFsqKy1dfFxcZCtbLl0pXHRcdFx0XHQvLyAkMyA9IGZpcnN0IGxpc3QgaXRlbSBtYXJrZXJcblx0XHRcdFx0WyBcXHRdK1xuXHRcdFx0KVxuXHRcdFx0W15cXHJdKz9cblx0XHRcdChcdFx0XHRcdFx0XHRcdFx0Ly8gJDRcblx0XHRcdFx0fjBcdFx0XHRcdFx0XHRcdC8vIHNlbnRpbmVsIGZvciB3b3JrYXJvdW5kOyBzaG91bGQgYmUgJFxuXHRcdFx0fFxuXHRcdFx0XHRcXG57Mix9XG5cdFx0XHRcdCg/PVxcUylcblx0XHRcdFx0KD8hXHRcdFx0XHRcdFx0XHQvLyBOZWdhdGl2ZSBsb29rYWhlYWQgZm9yIGFub3RoZXIgbGlzdCBpdGVtIG1hcmtlclxuXHRcdFx0XHRcdFsgXFx0XSpcblx0XHRcdFx0XHQoPzpbKistXXxcXGQrWy5dKVsgXFx0XStcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCkvZ1xuXHQqL1xuXHR2YXIgd2hvbGVfbGlzdCA9IC9eKChbIF17MCwzfShbKistXXxcXGQrWy5dKVsgXFx0XSspW15cXHJdKz8ofjB8XFxuezIsfSg/PVxcUykoPyFbIFxcdF0qKD86WyorLV18XFxkK1suXSlbIFxcdF0rKSkpL2dtO1xuXG5cdGlmIChnX2xpc3RfbGV2ZWwpIHtcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHdob2xlX2xpc3QsZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMikge1xuXHRcdFx0dmFyIGxpc3QgPSBtMTtcblx0XHRcdHZhciBsaXN0X3R5cGUgPSAobTIuc2VhcmNoKC9bKistXS9nKT4tMSkgPyBcInVsXCIgOiBcIm9sXCI7XG5cblx0XHRcdC8vIFR1cm4gZG91YmxlIHJldHVybnMgaW50byB0cmlwbGUgcmV0dXJucywgc28gdGhhdCB3ZSBjYW4gbWFrZSBhXG5cdFx0XHQvLyBwYXJhZ3JhcGggZm9yIHRoZSBsYXN0IGl0ZW0gaW4gYSBsaXN0LCBpZiBuZWNlc3Nhcnk6XG5cdFx0XHRsaXN0ID0gbGlzdC5yZXBsYWNlKC9cXG57Mix9L2csXCJcXG5cXG5cXG5cIik7O1xuXHRcdFx0dmFyIHJlc3VsdCA9IF9Qcm9jZXNzTGlzdEl0ZW1zKGxpc3QpO1xuXG5cdFx0XHQvLyBUcmltIGFueSB0cmFpbGluZyB3aGl0ZXNwYWNlLCB0byBwdXQgdGhlIGNsb3NpbmcgYDwvJGxpc3RfdHlwZT5gXG5cdFx0XHQvLyB1cCBvbiB0aGUgcHJlY2VkaW5nIGxpbmUsIHRvIGdldCBpdCBwYXN0IHRoZSBjdXJyZW50IHN0dXBpZFxuXHRcdFx0Ly8gSFRNTCBibG9jayBwYXJzZXIuIFRoaXMgaXMgYSBoYWNrIHRvIHdvcmsgYXJvdW5kIHRoZSB0ZXJyaWJsZVxuXHRcdFx0Ly8gaGFjayB0aGF0IGlzIHRoZSBIVE1MIGJsb2NrIHBhcnNlci5cblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9cXHMrJC8sXCJcIik7XG5cdFx0XHRyZXN1bHQgPSBcIjxcIitsaXN0X3R5cGUrXCI+XCIgKyByZXN1bHQgKyBcIjwvXCIrbGlzdF90eXBlK1wiPlxcblwiO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aG9sZV9saXN0ID0gLyhcXG5cXG58Xlxcbj8pKChbIF17MCwzfShbKistXXxcXGQrWy5dKVsgXFx0XSspW15cXHJdKz8ofjB8XFxuezIsfSg/PVxcUykoPyFbIFxcdF0qKD86WyorLV18XFxkK1suXSlbIFxcdF0rKSkpL2c7XG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSh3aG9sZV9saXN0LGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIsbTMpIHtcblx0XHRcdHZhciBydW51cCA9IG0xO1xuXHRcdFx0dmFyIGxpc3QgPSBtMjtcblxuXHRcdFx0dmFyIGxpc3RfdHlwZSA9IChtMy5zZWFyY2goL1sqKy1dL2cpPi0xKSA/IFwidWxcIiA6IFwib2xcIjtcblx0XHRcdC8vIFR1cm4gZG91YmxlIHJldHVybnMgaW50byB0cmlwbGUgcmV0dXJucywgc28gdGhhdCB3ZSBjYW4gbWFrZSBhXG5cdFx0XHQvLyBwYXJhZ3JhcGggZm9yIHRoZSBsYXN0IGl0ZW0gaW4gYSBsaXN0LCBpZiBuZWNlc3Nhcnk6XG5cdFx0XHR2YXIgbGlzdCA9IGxpc3QucmVwbGFjZSgvXFxuezIsfS9nLFwiXFxuXFxuXFxuXCIpOztcblx0XHRcdHZhciByZXN1bHQgPSBfUHJvY2Vzc0xpc3RJdGVtcyhsaXN0KTtcblx0XHRcdHJlc3VsdCA9IHJ1bnVwICsgXCI8XCIrbGlzdF90eXBlK1wiPlxcblwiICsgcmVzdWx0ICsgXCI8L1wiK2xpc3RfdHlwZStcIj5cXG5cIjtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL34wLyxcIlwiKTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxuX1Byb2Nlc3NMaXN0SXRlbXMgPSBmdW5jdGlvbihsaXN0X3N0cikge1xuLy9cbi8vICBQcm9jZXNzIHRoZSBjb250ZW50cyBvZiBhIHNpbmdsZSBvcmRlcmVkIG9yIHVub3JkZXJlZCBsaXN0LCBzcGxpdHRpbmcgaXRcbi8vICBpbnRvIGluZGl2aWR1YWwgbGlzdCBpdGVtcy5cbi8vXG5cdC8vIFRoZSAkZ19saXN0X2xldmVsIGdsb2JhbCBrZWVwcyB0cmFjayBvZiB3aGVuIHdlJ3JlIGluc2lkZSBhIGxpc3QuXG5cdC8vIEVhY2ggdGltZSB3ZSBlbnRlciBhIGxpc3QsIHdlIGluY3JlbWVudCBpdDsgd2hlbiB3ZSBsZWF2ZSBhIGxpc3QsXG5cdC8vIHdlIGRlY3JlbWVudC4gSWYgaXQncyB6ZXJvLCB3ZSdyZSBub3QgaW4gYSBsaXN0IGFueW1vcmUuXG5cdC8vXG5cdC8vIFdlIGRvIHRoaXMgYmVjYXVzZSB3aGVuIHdlJ3JlIG5vdCBpbnNpZGUgYSBsaXN0LCB3ZSB3YW50IHRvIHRyZWF0XG5cdC8vIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5cdC8vXG5cdC8vICAgIEkgcmVjb21tZW5kIHVwZ3JhZGluZyB0byB2ZXJzaW9uXG5cdC8vICAgIDguIE9vcHMsIG5vdyB0aGlzIGxpbmUgaXMgdHJlYXRlZFxuXHQvLyAgICBhcyBhIHN1Yi1saXN0LlxuXHQvL1xuXHQvLyBBcyBhIHNpbmdsZSBwYXJhZ3JhcGgsIGRlc3BpdGUgdGhlIGZhY3QgdGhhdCB0aGUgc2Vjb25kIGxpbmUgc3RhcnRzXG5cdC8vIHdpdGggYSBkaWdpdC1wZXJpb2Qtc3BhY2Ugc2VxdWVuY2UuXG5cdC8vXG5cdC8vIFdoZXJlYXMgd2hlbiB3ZSdyZSBpbnNpZGUgYSBsaXN0IChvciBzdWItbGlzdCksIHRoYXQgbGluZSB3aWxsIGJlXG5cdC8vIHRyZWF0ZWQgYXMgdGhlIHN0YXJ0IG9mIGEgc3ViLWxpc3QuIFdoYXQgYSBrbHVkZ2UsIGh1aD8gVGhpcyBpc1xuXHQvLyBhbiBhc3BlY3Qgb2YgTWFya2Rvd24ncyBzeW50YXggdGhhdCdzIGhhcmQgdG8gcGFyc2UgcGVyZmVjdGx5XG5cdC8vIHdpdGhvdXQgcmVzb3J0aW5nIHRvIG1pbmQtcmVhZGluZy4gUGVyaGFwcyB0aGUgc29sdXRpb24gaXMgdG9cblx0Ly8gY2hhbmdlIHRoZSBzeW50YXggcnVsZXMgc3VjaCB0aGF0IHN1Yi1saXN0cyBtdXN0IHN0YXJ0IHdpdGggYVxuXHQvLyBzdGFydGluZyBjYXJkaW5hbCBudW1iZXI7IGUuZy4gXCIxLlwiIG9yIFwiYS5cIi5cblxuXHRnX2xpc3RfbGV2ZWwrKztcblxuXHQvLyB0cmltIHRyYWlsaW5nIGJsYW5rIGxpbmVzOlxuXHRsaXN0X3N0ciA9IGxpc3Rfc3RyLnJlcGxhY2UoL1xcbnsyLH0kLyxcIlxcblwiKTtcblxuXHQvLyBhdHRhY2tsYWI6IGFkZCBzZW50aW5lbCB0byBlbXVsYXRlIFxcelxuXHRsaXN0X3N0ciArPSBcIn4wXCI7XG5cblx0Lypcblx0XHRsaXN0X3N0ciA9IGxpc3Rfc3RyLnJlcGxhY2UoL1xuXHRcdFx0KFxcbik/XHRcdFx0XHRcdFx0XHQvLyBsZWFkaW5nIGxpbmUgPSAkMVxuXHRcdFx0KF5bIFxcdF0qKVx0XHRcdFx0XHRcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZSA9ICQyXG5cdFx0XHQoWyorLV18XFxkK1suXSkgWyBcXHRdK1x0XHRcdC8vIGxpc3QgbWFya2VyID0gJDNcblx0XHRcdChbXlxccl0rP1x0XHRcdFx0XHRcdC8vIGxpc3QgaXRlbSB0ZXh0ICAgPSAkNFxuXHRcdFx0KFxcbnsxLDJ9KSlcblx0XHRcdCg/PSBcXG4qICh+MCB8IFxcMiAoWyorLV18XFxkK1suXSkgWyBcXHRdKykpXG5cdFx0L2dtLCBmdW5jdGlvbigpey4uLn0pO1xuXHQqL1xuXHRsaXN0X3N0ciA9IGxpc3Rfc3RyLnJlcGxhY2UoLyhcXG4pPyheWyBcXHRdKikoWyorLV18XFxkK1suXSlbIFxcdF0rKFteXFxyXSs/KFxcbnsxLDJ9KSkoPz1cXG4qKH4wfFxcMihbKistXXxcXGQrWy5dKVsgXFx0XSspKS9nbSxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xLG0yLG0zLG00KXtcblx0XHRcdHZhciBpdGVtID0gbTQ7XG5cdFx0XHR2YXIgbGVhZGluZ19saW5lID0gbTE7XG5cdFx0XHR2YXIgbGVhZGluZ19zcGFjZSA9IG0yO1xuXG5cdFx0XHRpZiAobGVhZGluZ19saW5lIHx8IChpdGVtLnNlYXJjaCgvXFxuezIsfS8pPi0xKSkge1xuXHRcdFx0XHRpdGVtID0gX1J1bkJsb2NrR2FtdXQoX091dGRlbnQoaXRlbSkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIFJlY3Vyc2lvbiBmb3Igc3ViLWxpc3RzOlxuXHRcdFx0XHRpdGVtID0gX0RvTGlzdHMoX091dGRlbnQoaXRlbSkpO1xuXHRcdFx0XHRpdGVtID0gaXRlbS5yZXBsYWNlKC9cXG4kLyxcIlwiKTsgLy8gY2hvbXAoaXRlbSlcblx0XHRcdFx0aXRlbSA9IF9SdW5TcGFuR2FtdXQoaXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAgXCI8bGk+XCIgKyBpdGVtICsgXCI8L2xpPlxcblwiO1xuXHRcdH1cblx0KTtcblxuXHQvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG5cdGxpc3Rfc3RyID0gbGlzdF9zdHIucmVwbGFjZSgvfjAvZyxcIlwiKTtcblxuXHRnX2xpc3RfbGV2ZWwtLTtcblx0cmV0dXJuIGxpc3Rfc3RyO1xufVxuXG5cbnZhciBfRG9Db2RlQmxvY2tzID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vICBQcm9jZXNzIE1hcmtkb3duIGA8cHJlPjxjb2RlPmAgYmxvY2tzLlxuLy9cblxuXHQvKlxuXHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UodGV4dCxcblx0XHRcdC8oPzpcXG5cXG58Xilcblx0XHRcdChcdFx0XHRcdFx0XHRcdFx0Ly8gJDEgPSB0aGUgY29kZSBibG9jayAtLSBvbmUgb3IgbW9yZSBsaW5lcywgc3RhcnRpbmcgd2l0aCBhIHNwYWNlL3RhYlxuXHRcdFx0XHQoPzpcblx0XHRcdFx0XHQoPzpbIF17NH18XFx0KVx0XHRcdC8vIExpbmVzIG11c3Qgc3RhcnQgd2l0aCBhIHRhYiBvciBhIHRhYi13aWR0aCBvZiBzcGFjZXMgLSBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoXG5cdFx0XHRcdFx0LipcXG4rXG5cdFx0XHRcdCkrXG5cdFx0XHQpXG5cdFx0XHQoXFxuKlsgXXswLDN9W14gXFx0XFxuXXwoPz1+MCkpXHQvLyBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoXG5cdFx0L2csZnVuY3Rpb24oKXsuLi59KTtcblx0Ki9cblxuXHQvLyBhdHRhY2tsYWI6IHNlbnRpbmVsIHdvcmthcm91bmRzIGZvciBsYWNrIG9mIFxcQSBhbmQgXFxaLCBzYWZhcmlcXGtodG1sIGJ1Z1xuXHR0ZXh0ICs9IFwifjBcIjtcblxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oPzpcXG5cXG58XikoKD86KD86WyBdezR9fFxcdCkuKlxcbispKykoXFxuKlsgXXswLDN9W14gXFx0XFxuXXwoPz1+MCkpL2csXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSxtMikge1xuXHRcdFx0dmFyIGNvZGVibG9jayA9IG0xO1xuXHRcdFx0dmFyIG5leHRDaGFyID0gbTI7XG5cblx0XHRcdGNvZGVibG9jayA9IF9FbmNvZGVDb2RlKCBfT3V0ZGVudChjb2RlYmxvY2spKTtcblx0XHRcdGNvZGVibG9jayA9IF9EZXRhYihjb2RlYmxvY2spO1xuXHRcdFx0Y29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL15cXG4rL2csXCJcIik7IC8vIHRyaW0gbGVhZGluZyBuZXdsaW5lc1xuXHRcdFx0Y29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL1xcbiskL2csXCJcIik7IC8vIHRyaW0gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXG5cdFx0XHRjb2RlYmxvY2sgPSBcIjxwcmU+PGNvZGU+XCIgKyBjb2RlYmxvY2sgKyBcIlxcbjwvY29kZT48L3ByZT5cIjtcblxuXHRcdFx0cmV0dXJuIGhhc2hCbG9jayhjb2RlYmxvY2spICsgbmV4dENoYXI7XG5cdFx0fVxuXHQpO1xuXG5cdC8vIGF0dGFja2xhYjogc3RyaXAgc2VudGluZWxcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvfjAvLFwiXCIpO1xuXG5cdHJldHVybiB0ZXh0O1xufTtcblxudmFyIF9Eb0dpdGh1YkNvZGVCbG9ja3MgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gIFByb2Nlc3MgR2l0aHViLXN0eWxlIGNvZGUgYmxvY2tzXG4vLyAgRXhhbXBsZTpcbi8vICBgYGBydWJ5XG4vLyAgZGVmIGhlbGxvX3dvcmxkKHgpXG4vLyAgICBwdXRzIFwiSGVsbG8sICN7eH1cIlxuLy8gIGVuZFxuLy8gIGBgYFxuLy9cblxuXG5cdC8vIGF0dGFja2xhYjogc2VudGluZWwgd29ya2Fyb3VuZHMgZm9yIGxhY2sgb2YgXFxBIGFuZCBcXFosIHNhZmFyaVxca2h0bWwgYnVnXG5cdHRleHQgKz0gXCJ+MFwiO1xuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyg/Ol58XFxuKWBgYCguKilcXG4oW1xcc1xcU10qPylcXG5gYGAvZyxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xLG0yKSB7XG5cdFx0XHR2YXIgbGFuZ3VhZ2UgPSBtMTtcblx0XHRcdHZhciBjb2RlYmxvY2sgPSBtMjtcblxuXHRcdFx0Y29kZWJsb2NrID0gX0VuY29kZUNvZGUoY29kZWJsb2NrKTtcblx0XHRcdGNvZGVibG9jayA9IF9EZXRhYihjb2RlYmxvY2spO1xuXHRcdFx0Y29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL15cXG4rL2csXCJcIik7IC8vIHRyaW0gbGVhZGluZyBuZXdsaW5lc1xuXHRcdFx0Y29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoL1xcbiskL2csXCJcIik7IC8vIHRyaW0gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXG5cdFx0XHRjb2RlYmxvY2sgPSBcIjxwcmU+PGNvZGVcIiArIChsYW5ndWFnZSA/IFwiIGNsYXNzPVxcXCJcIiArIGxhbmd1YWdlICsgJ1wiJyA6IFwiXCIpICsgXCI+XCIgKyBjb2RlYmxvY2sgKyBcIlxcbjwvY29kZT48L3ByZT5cIjtcblxuXHRcdFx0cmV0dXJuIGhhc2hCbG9jayhjb2RlYmxvY2spO1xuXHRcdH1cblx0KTtcblxuXHQvLyBhdHRhY2tsYWI6IHN0cmlwIHNlbnRpbmVsXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL34wLyxcIlwiKTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxudmFyIGhhc2hCbG9jayA9IGZ1bmN0aW9uKHRleHQpIHtcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKF5cXG4rfFxcbiskKS9nLFwiXCIpO1xuXHRyZXR1cm4gXCJcXG5cXG5+S1wiICsgKGdfaHRtbF9ibG9ja3MucHVzaCh0ZXh0KS0xKSArIFwiS1xcblxcblwiO1xufVxuXG52YXIgX0RvQ29kZVNwYW5zID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vICAgKiAgQmFja3RpY2sgcXVvdGVzIGFyZSB1c2VkIGZvciA8Y29kZT48L2NvZGU+IHNwYW5zLlxuLy9cbi8vICAgKiAgWW91IGNhbiB1c2UgbXVsdGlwbGUgYmFja3RpY2tzIGFzIHRoZSBkZWxpbWl0ZXJzIGlmIHlvdSB3YW50IHRvXG4vL1x0IGluY2x1ZGUgbGl0ZXJhbCBiYWNrdGlja3MgaW4gdGhlIGNvZGUgc3Bhbi4gU28sIHRoaXMgaW5wdXQ6XG4vL1xuLy9cdFx0IEp1c3QgdHlwZSBgYGZvbyBgYmFyYCBiYXpgYCBhdCB0aGUgcHJvbXB0LlxuLy9cbi8vXHQgICBXaWxsIHRyYW5zbGF0ZSB0bzpcbi8vXG4vL1x0XHQgPHA+SnVzdCB0eXBlIDxjb2RlPmZvbyBgYmFyYCBiYXo8L2NvZGU+IGF0IHRoZSBwcm9tcHQuPC9wPlxuLy9cbi8vXHRUaGVyZSdzIG5vIGFyYml0cmFyeSBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIGJhY2t0aWNrcyB5b3Vcbi8vXHRjYW4gdXNlIGFzIGRlbGltdGVycy4gSWYgeW91IG5lZWQgdGhyZWUgY29uc2VjdXRpdmUgYmFja3RpY2tzXG4vL1x0aW4geW91ciBjb2RlLCB1c2UgZm91ciBmb3IgZGVsaW1pdGVycywgZXRjLlxuLy9cbi8vICAqICBZb3UgY2FuIHVzZSBzcGFjZXMgdG8gZ2V0IGxpdGVyYWwgYmFja3RpY2tzIGF0IHRoZSBlZGdlczpcbi8vXG4vL1x0XHQgLi4uIHR5cGUgYGAgYGJhcmAgYGAgLi4uXG4vL1xuLy9cdCAgIFR1cm5zIHRvOlxuLy9cbi8vXHRcdCAuLi4gdHlwZSA8Y29kZT5gYmFyYDwvY29kZT4gLi4uXG4vL1xuXG5cdC8qXG5cdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvXG5cdFx0XHQoXnxbXlxcXFxdKVx0XHRcdFx0XHQvLyBDaGFyYWN0ZXIgYmVmb3JlIG9wZW5pbmcgYCBjYW4ndCBiZSBhIGJhY2tzbGFzaFxuXHRcdFx0KGArKVx0XHRcdFx0XHRcdC8vICQyID0gT3BlbmluZyBydW4gb2YgYFxuXHRcdFx0KFx0XHRcdFx0XHRcdFx0Ly8gJDMgPSBUaGUgY29kZSBibG9ja1xuXHRcdFx0XHRbXlxccl0qP1xuXHRcdFx0XHRbXmBdXHRcdFx0XHRcdC8vIGF0dGFja2xhYjogd29yayBhcm91bmQgbGFjayBvZiBsb29rYmVoaW5kXG5cdFx0XHQpXG5cdFx0XHRcXDJcdFx0XHRcdFx0XHRcdC8vIE1hdGNoaW5nIGNsb3NlclxuXHRcdFx0KD8hYClcblx0XHQvZ20sIGZ1bmN0aW9uKCl7Li4ufSk7XG5cdCovXG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKF58W15cXFxcXSkoYCspKFteXFxyXSo/W15gXSlcXDIoPyFgKS9nbSxcblx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xLG0yLG0zLG00KSB7XG5cdFx0XHR2YXIgYyA9IG0zO1xuXHRcdFx0YyA9IGMucmVwbGFjZSgvXihbIFxcdF0qKS9nLFwiXCIpO1x0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRjID0gYy5yZXBsYWNlKC9bIFxcdF0qJC9nLFwiXCIpO1x0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXHRcdFx0YyA9IF9FbmNvZGVDb2RlKGMpO1xuXHRcdFx0cmV0dXJuIG0xK1wiPGNvZGU+XCIrYytcIjwvY29kZT5cIjtcblx0XHR9KTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxudmFyIF9FbmNvZGVDb2RlID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vIEVuY29kZS9lc2NhcGUgY2VydGFpbiBjaGFyYWN0ZXJzIGluc2lkZSBNYXJrZG93biBjb2RlIHJ1bnMuXG4vLyBUaGUgcG9pbnQgaXMgdGhhdCBpbiBjb2RlLCB0aGVzZSBjaGFyYWN0ZXJzIGFyZSBsaXRlcmFscyxcbi8vIGFuZCBsb3NlIHRoZWlyIHNwZWNpYWwgTWFya2Rvd24gbWVhbmluZ3MuXG4vL1xuXHQvLyBFbmNvZGUgYWxsIGFtcGVyc2FuZHM7IEhUTUwgZW50aXRpZXMgYXJlIG5vdFxuXHQvLyBlbnRpdGllcyB3aXRoaW4gYSBNYXJrZG93biBjb2RlIHNwYW4uXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpO1xuXG5cdC8vIERvIHRoZSBhbmdsZSBicmFja2V0IHNvbmcgYW5kIGRhbmNlOlxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC88L2csXCImbHQ7XCIpO1xuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpO1xuXG5cdC8vIE5vdywgZXNjYXBlIGNoYXJhY3RlcnMgdGhhdCBhcmUgbWFnaWMgaW4gTWFya2Rvd246XG5cdHRleHQgPSBlc2NhcGVDaGFyYWN0ZXJzKHRleHQsXCJcXCpfe31bXVxcXFxcIixmYWxzZSk7XG5cbi8vIGpqIHRoZSBsaW5lIGFib3ZlIGJyZWFrcyB0aGlzOlxuLy8tLS1cblxuLy8qIEl0ZW1cblxuLy8gICAxLiBTdWJpdGVtXG5cbi8vICAgICAgICAgICAgc3BlY2lhbCBjaGFyOiAqXG4vLy0tLVxuXG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbnZhciBfRG9JdGFsaWNzQW5kQm9sZCA9IGZ1bmN0aW9uKHRleHQpIHtcblxuXHQvLyA8c3Ryb25nPiBtdXN0IGdvIGZpcnN0OlxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFwqXFwqfF9fKSg/PVxcUykoW15cXHJdKj9cXFNbKl9dKilcXDEvZyxcblx0XHRcIjxzdHJvbmc+JDI8L3N0cm9uZz5cIik7XG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKFxcKnxfKSg/PVxcUykoW15cXHJdKj9cXFMpXFwxL2csXG5cdFx0XCI8ZW0+JDI8L2VtPlwiKTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxuXG52YXIgX0RvQmxvY2tRdW90ZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHQoXHRcdFx0XHRcdFx0XHRcdC8vIFdyYXAgd2hvbGUgbWF0Y2ggaW4gJDFcblx0XHRcdChcblx0XHRcdFx0XlsgXFx0XSo+WyBcXHRdP1x0XHRcdC8vICc+JyBhdCB0aGUgc3RhcnQgb2YgYSBsaW5lXG5cdFx0XHRcdC4rXFxuXHRcdFx0XHRcdC8vIHJlc3Qgb2YgdGhlIGZpcnN0IGxpbmVcblx0XHRcdFx0KC4rXFxuKSpcdFx0XHRcdFx0Ly8gc3Vic2VxdWVudCBjb25zZWN1dGl2ZSBsaW5lc1xuXHRcdFx0XHRcXG4qXHRcdFx0XHRcdFx0Ly8gYmxhbmtzXG5cdFx0XHQpK1xuXHRcdClcblx0XHQvZ20sIGZ1bmN0aW9uKCl7Li4ufSk7XG5cdCovXG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvKCheWyBcXHRdKj5bIFxcdF0/LitcXG4oLitcXG4pKlxcbiopKykvZ20sXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSkge1xuXHRcdFx0dmFyIGJxID0gbTE7XG5cblx0XHRcdC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQgS29ucXVlcm9yIDMuNS40IGJ1Zzpcblx0XHRcdC8vIFwiLS0tLS0tLS0tLWJ1Z1wiLnJlcGxhY2UoL14tL2csXCJcIikgPT0gXCJidWdcIlxuXG5cdFx0XHRicSA9IGJxLnJlcGxhY2UoL15bIFxcdF0qPlsgXFx0XT8vZ20sXCJ+MFwiKTtcdC8vIHRyaW0gb25lIGxldmVsIG9mIHF1b3RpbmdcblxuXHRcdFx0Ly8gYXR0YWNrbGFiOiBjbGVhbiB1cCBoYWNrXG5cdFx0XHRicSA9IGJxLnJlcGxhY2UoL34wL2csXCJcIik7XG5cblx0XHRcdGJxID0gYnEucmVwbGFjZSgvXlsgXFx0XSskL2dtLFwiXCIpO1x0XHQvLyB0cmltIHdoaXRlc3BhY2Utb25seSBsaW5lc1xuXHRcdFx0YnEgPSBfUnVuQmxvY2tHYW11dChicSk7XHRcdFx0XHQvLyByZWN1cnNlXG5cblx0XHRcdGJxID0gYnEucmVwbGFjZSgvKF58XFxuKS9nLFwiJDEgIFwiKTtcblx0XHRcdC8vIFRoZXNlIGxlYWRpbmcgc3BhY2VzIHNjcmV3IHdpdGggPHByZT4gY29udGVudCwgc28gd2UgbmVlZCB0byBmaXggdGhhdDpcblx0XHRcdGJxID0gYnEucmVwbGFjZShcblx0XHRcdFx0XHQvKFxccyo8cHJlPlteXFxyXSs/PFxcL3ByZT4pL2dtLFxuXHRcdFx0XHRmdW5jdGlvbih3aG9sZU1hdGNoLG0xKSB7XG5cdFx0XHRcdFx0dmFyIHByZSA9IG0xO1xuXHRcdFx0XHRcdC8vIGF0dGFja2xhYjogaGFjayBhcm91bmQgS29ucXVlcm9yIDMuNS40IGJ1Zzpcblx0XHRcdFx0XHRwcmUgPSBwcmUucmVwbGFjZSgvXiAgL21nLFwifjBcIik7XG5cdFx0XHRcdFx0cHJlID0gcHJlLnJlcGxhY2UoL34wL2csXCJcIik7XG5cdFx0XHRcdFx0cmV0dXJuIHByZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBoYXNoQmxvY2soXCI8YmxvY2txdW90ZT5cXG5cIiArIGJxICsgXCJcXG48L2Jsb2NrcXVvdGU+XCIpO1xuXHRcdH0pO1xuXHRyZXR1cm4gdGV4dDtcbn1cblxuXG52YXIgX0Zvcm1QYXJhZ3JhcGhzID0gZnVuY3Rpb24odGV4dCkge1xuLy9cbi8vICBQYXJhbXM6XG4vLyAgICAkdGV4dCAtIHN0cmluZyB0byBwcm9jZXNzIHdpdGggaHRtbCA8cD4gdGFnc1xuLy9cblxuXHQvLyBTdHJpcCBsZWFkaW5nIGFuZCB0cmFpbGluZyBsaW5lczpcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlxcbisvZyxcIlwiKTtcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXFxuKyQvZyxcIlwiKTtcblxuXHR2YXIgZ3JhZnMgPSB0ZXh0LnNwbGl0KC9cXG57Mix9L2cpO1xuXHR2YXIgZ3JhZnNPdXQgPSBbXTtcblxuXHQvL1xuXHQvLyBXcmFwIDxwPiB0YWdzLlxuXHQvL1xuXHR2YXIgZW5kID0gZ3JhZnMubGVuZ3RoO1xuXHRmb3IgKHZhciBpPTA7IGk8ZW5kOyBpKyspIHtcblx0XHR2YXIgc3RyID0gZ3JhZnNbaV07XG5cblx0XHQvLyBpZiB0aGlzIGlzIGFuIEhUTUwgbWFya2VyLCBjb3B5IGl0XG5cdFx0aWYgKHN0ci5zZWFyY2goL35LKFxcZCspSy9nKSA+PSAwKSB7XG5cdFx0XHRncmFmc091dC5wdXNoKHN0cik7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHN0ci5zZWFyY2goL1xcUy8pID49IDApIHtcblx0XHRcdHN0ciA9IF9SdW5TcGFuR2FtdXQoc3RyKTtcblx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9eKFsgXFx0XSopL2csXCI8cD5cIik7XG5cdFx0XHRzdHIgKz0gXCI8L3A+XCJcblx0XHRcdGdyYWZzT3V0LnB1c2goc3RyKTtcblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIFVuaGFzaGlmeSBIVE1MIGJsb2Nrc1xuXHQvL1xuXHRlbmQgPSBncmFmc091dC5sZW5ndGg7XG5cdGZvciAodmFyIGk9MDsgaTxlbmQ7IGkrKykge1xuXHRcdC8vIGlmIHRoaXMgaXMgYSBtYXJrZXIgZm9yIGFuIGh0bWwgYmxvY2suLi5cblx0XHR3aGlsZSAoZ3JhZnNPdXRbaV0uc2VhcmNoKC9+SyhcXGQrKUsvKSA+PSAwKSB7XG5cdFx0XHR2YXIgYmxvY2tUZXh0ID0gZ19odG1sX2Jsb2Nrc1tSZWdFeHAuJDFdO1xuXHRcdFx0YmxvY2tUZXh0ID0gYmxvY2tUZXh0LnJlcGxhY2UoL1xcJC9nLFwiJCQkJFwiKTsgLy8gRXNjYXBlIGFueSBkb2xsYXIgc2lnbnNcblx0XHRcdGdyYWZzT3V0W2ldID0gZ3JhZnNPdXRbaV0ucmVwbGFjZSgvfktcXGQrSy8sYmxvY2tUZXh0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhZnNPdXQuam9pbihcIlxcblxcblwiKTtcbn1cblxuXG52YXIgX0VuY29kZUFtcHNBbmRBbmdsZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vLyBTbWFydCBwcm9jZXNzaW5nIGZvciBhbXBlcnNhbmRzIGFuZCBhbmdsZSBicmFja2V0cyB0aGF0IG5lZWQgdG8gYmUgZW5jb2RlZC5cblxuXHQvLyBBbXBlcnNhbmQtZW5jb2RpbmcgYmFzZWQgZW50aXJlbHkgb24gTmF0IElyb25zJ3MgQW1wdXRhdG9yIE1UIHBsdWdpbjpcblx0Ly8gICBodHRwOi8vYnVtcHBvLm5ldC9wcm9qZWN0cy9hbXB1dGF0b3IvXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYoPyEjP1t4WF0/KD86WzAtOWEtZkEtRl0rfFxcdyspOykvZyxcIiZhbXA7XCIpO1xuXG5cdC8vIEVuY29kZSBuYWtlZCA8J3Ncblx0dGV4dCA9IHRleHQucmVwbGFjZSgvPCg/IVthLXpcXC8/XFwkIV0pL2dpLFwiJmx0O1wiKTtcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxuXG52YXIgX0VuY29kZUJhY2tzbGFzaEVzY2FwZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gICBQYXJhbWV0ZXI6ICBTdHJpbmcuXG4vLyAgIFJldHVybnM6XHRUaGUgc3RyaW5nLCB3aXRoIGFmdGVyIHByb2Nlc3NpbmcgdGhlIGZvbGxvd2luZyBiYWNrc2xhc2hcbi8vXHRcdFx0ICAgZXNjYXBlIHNlcXVlbmNlcy5cbi8vXG5cblx0Ly8gYXR0YWNrbGFiOiBUaGUgcG9saXRlIHdheSB0byBkbyB0aGlzIGlzIHdpdGggdGhlIG5ld1xuXHQvLyBlc2NhcGVDaGFyYWN0ZXJzKCkgZnVuY3Rpb246XG5cdC8vXG5cdC8vIFx0dGV4dCA9IGVzY2FwZUNoYXJhY3RlcnModGV4dCxcIlxcXFxcIix0cnVlKTtcblx0Ly8gXHR0ZXh0ID0gZXNjYXBlQ2hhcmFjdGVycyh0ZXh0LFwiYCpfe31bXSgpPiMrLS4hXCIsdHJ1ZSk7XG5cdC8vXG5cdC8vIC4uLmJ1dCB3ZSdyZSBzaWRlc3RlcHBpbmcgaXRzIHVzZSBvZiB0aGUgKHNsb3cpIFJlZ0V4cCBjb25zdHJ1Y3RvclxuXHQvLyBhcyBhbiBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guICBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGEgTE9ULlxuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcXFwoXFxcXCkvZyxlc2NhcGVDaGFyYWN0ZXJzX2NhbGxiYWNrKTtcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXFxcXChbYCpfe31cXFtcXF0oKT4jKy0uIV0pL2csZXNjYXBlQ2hhcmFjdGVyc19jYWxsYmFjayk7XG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbnZhciBfRG9BdXRvTGlua3MgPSBmdW5jdGlvbih0ZXh0KSB7XG5cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvPCgoaHR0cHM/fGZ0cHxkaWN0KTpbXidcIj5cXHNdKyk+L2dpLFwiPGEgaHJlZj1cXFwiJDFcXFwiPiQxPC9hPlwiKTtcblxuXHQvLyBFbWFpbCBhZGRyZXNzZXM6IDxhZGRyZXNzQGRvbWFpbi5mb28+XG5cblx0Lypcblx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cblx0XHRcdDxcblx0XHRcdCg/Om1haWx0bzopP1xuXHRcdFx0KFxuXHRcdFx0XHRbLS5cXHddK1xuXHRcdFx0XHRcXEBcblx0XHRcdFx0Wy1hLXowLTldKyhcXC5bLWEtejAtOV0rKSpcXC5bYS16XStcblx0XHRcdClcblx0XHRcdD5cblx0XHQvZ2ksIF9Eb0F1dG9MaW5rc19jYWxsYmFjaygpKTtcblx0Ki9cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvPCg/Om1haWx0bzopPyhbLS5cXHddK1xcQFstYS16MC05XSsoXFwuWy1hLXowLTldKykqXFwuW2Etel0rKT4vZ2ksXG5cdFx0ZnVuY3Rpb24od2hvbGVNYXRjaCxtMSkge1xuXHRcdFx0cmV0dXJuIF9FbmNvZGVFbWFpbEFkZHJlc3MoIF9VbmVzY2FwZVNwZWNpYWxDaGFycyhtMSkgKTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cblxudmFyIF9FbmNvZGVFbWFpbEFkZHJlc3MgPSBmdW5jdGlvbihhZGRyKSB7XG4vL1xuLy8gIElucHV0OiBhbiBlbWFpbCBhZGRyZXNzLCBlLmcuIFwiZm9vQGV4YW1wbGUuY29tXCJcbi8vXG4vLyAgT3V0cHV0OiB0aGUgZW1haWwgYWRkcmVzcyBhcyBhIG1haWx0byBsaW5rLCB3aXRoIGVhY2ggY2hhcmFjdGVyXG4vL1x0b2YgdGhlIGFkZHJlc3MgZW5jb2RlZCBhcyBlaXRoZXIgYSBkZWNpbWFsIG9yIGhleCBlbnRpdHksIGluXG4vL1x0dGhlIGhvcGVzIG9mIGZvaWxpbmcgbW9zdCBhZGRyZXNzIGhhcnZlc3Rpbmcgc3BhbSBib3RzLiBFLmcuOlxuLy9cbi8vXHQ8YSBocmVmPVwiJiN4NkQ7JiM5NzsmIzEwNTsmIzEwODsmI3g3NDsmIzExMTs6JiMxMDI7JiMxMTE7JiMxMTE7JiM2NDsmIzEwMTtcbi8vXHQgICB4JiN4NjE7JiMxMDk7JiN4NzA7JiMxMDg7JiN4NjU7JiN4MkU7JiM5OTsmIzExMTsmIzEwOTtcIj4mIzEwMjsmIzExMTsmIzExMTtcbi8vXHQgICAmIzY0OyYjMTAxO3gmI3g2MTsmIzEwOTsmI3g3MDsmIzEwODsmI3g2NTsmI3gyRTsmIzk5OyYjMTExOyYjMTA5OzwvYT5cbi8vXG4vLyAgQmFzZWQgb24gYSBmaWx0ZXIgYnkgTWF0dGhldyBXaWNrbGluZSwgcG9zdGVkIHRvIHRoZSBCQkVkaXQtVGFsa1xuLy8gIG1haWxpbmcgbGlzdDogPGh0dHA6Ly90aW55dXJsLmNvbS95dTd1ZT5cbi8vXG5cblx0dmFyIGVuY29kZSA9IFtcblx0XHRmdW5jdGlvbihjaCl7cmV0dXJuIFwiJiNcIitjaC5jaGFyQ29kZUF0KDApK1wiO1wiO30sXG5cdFx0ZnVuY3Rpb24oY2gpe3JldHVybiBcIiYjeFwiK2NoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpK1wiO1wiO30sXG5cdFx0ZnVuY3Rpb24oY2gpe3JldHVybiBjaDt9XG5cdF07XG5cblx0YWRkciA9IFwibWFpbHRvOlwiICsgYWRkcjtcblxuXHRhZGRyID0gYWRkci5yZXBsYWNlKC8uL2csIGZ1bmN0aW9uKGNoKSB7XG5cdFx0aWYgKGNoID09IFwiQFwiKSB7XG5cdFx0ICAgXHQvLyB0aGlzICptdXN0KiBiZSBlbmNvZGVkLiBJIGluc2lzdC5cblx0XHRcdGNoID0gZW5jb2RlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV0oY2gpO1xuXHRcdH0gZWxzZSBpZiAoY2ggIT1cIjpcIikge1xuXHRcdFx0Ly8gbGVhdmUgJzonIGFsb25lICh0byBzcG90IG1haWx0bzogbGF0ZXIpXG5cdFx0XHR2YXIgciA9IE1hdGgucmFuZG9tKCk7XG5cdFx0XHQvLyByb3VnaGx5IDEwJSByYXcsIDQ1JSBoZXgsIDQ1JSBkZWNcblx0XHRcdGNoID0gIChcblx0XHRcdFx0XHRyID4gLjkgID9cdGVuY29kZVsyXShjaCkgICA6XG5cdFx0XHRcdFx0ciA+IC40NSA/XHRlbmNvZGVbMV0oY2gpICAgOlxuXHRcdFx0XHRcdFx0XHRcdGVuY29kZVswXShjaClcblx0XHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGNoO1xuXHR9KTtcblxuXHRhZGRyID0gXCI8YSBocmVmPVxcXCJcIiArIGFkZHIgKyBcIlxcXCI+XCIgKyBhZGRyICsgXCI8L2E+XCI7XG5cdGFkZHIgPSBhZGRyLnJlcGxhY2UoL1wiPi4rOi9nLFwiXFxcIj5cIik7IC8vIHN0cmlwIHRoZSBtYWlsdG86IGZyb20gdGhlIHZpc2libGUgcGFydFxuXG5cdHJldHVybiBhZGRyO1xufVxuXG5cbnZhciBfVW5lc2NhcGVTcGVjaWFsQ2hhcnMgPSBmdW5jdGlvbih0ZXh0KSB7XG4vL1xuLy8gU3dhcCBiYWNrIGluIGFsbCB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHdlJ3ZlIGhpZGRlbi5cbi8vXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL35FKFxcZCspRS9nLFxuXHRcdGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEpIHtcblx0XHRcdHZhciBjaGFyQ29kZVRvUmVwbGFjZSA9IHBhcnNlSW50KG0xKTtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlVG9SZXBsYWNlKTtcblx0XHR9XG5cdCk7XG5cdHJldHVybiB0ZXh0O1xufVxuXG5cbnZhciBfT3V0ZGVudCA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vXG4vLyBSZW1vdmUgb25lIGxldmVsIG9mIGxpbmUtbGVhZGluZyB0YWJzIG9yIHNwYWNlc1xuLy9cblxuXHQvLyBhdHRhY2tsYWI6IGhhY2sgYXJvdW5kIEtvbnF1ZXJvciAzLjUuNCBidWc6XG5cdC8vIFwiLS0tLS0tLS0tLWJ1Z1wiLnJlcGxhY2UoL14tL2csXCJcIikgPT0gXCJidWdcIlxuXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL14oXFx0fFsgXXsxLDR9KS9nbSxcIn4wXCIpOyAvLyBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoXG5cblx0Ly8gYXR0YWNrbGFiOiBjbGVhbiB1cCBoYWNrXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL34wL2csXCJcIilcblxuXHRyZXR1cm4gdGV4dDtcbn1cblxudmFyIF9EZXRhYiA9IGZ1bmN0aW9uKHRleHQpIHtcbi8vIGF0dGFja2xhYjogRGV0YWIncyBjb21wbGV0ZWx5IHJld3JpdHRlbiBmb3Igc3BlZWQuXG4vLyBJbiBwZXJsIHdlIGNvdWxkIGZpeCBpdCBieSBhbmNob3JpbmcgdGhlIHJlZ2V4cCB3aXRoIFxcRy5cbi8vIEluIGphdmFzY3JpcHQgd2UncmUgbGVzcyBmb3J0dW5hdGUuXG5cblx0Ly8gZXhwYW5kIGZpcnN0IG4tMSB0YWJzXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcdCg/PVxcdCkvZyxcIiAgICBcIik7IC8vIGF0dGFja2xhYjogZ190YWJfd2lkdGhcblxuXHQvLyByZXBsYWNlIHRoZSBudGggd2l0aCB0d28gc2VudGluZWxzXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcdC9nLFwifkF+QlwiKTtcblxuXHQvLyB1c2UgdGhlIHNlbnRpbmVsIHRvIGFuY2hvciBvdXIgcmVnZXggc28gaXQgZG9lc24ndCBleHBsb2RlXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL35CKC4rPyl+QS9nLFxuXHRcdGZ1bmN0aW9uKHdob2xlTWF0Y2gsbTEsbTIpIHtcblx0XHRcdHZhciBsZWFkaW5nVGV4dCA9IG0xO1xuXHRcdFx0dmFyIG51bVNwYWNlcyA9IDQgLSBsZWFkaW5nVGV4dC5sZW5ndGggJSA0OyAgLy8gYXR0YWNrbGFiOiBnX3RhYl93aWR0aFxuXG5cdFx0XHQvLyB0aGVyZSAqbXVzdCogYmUgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXM6XG5cdFx0XHRmb3IgKHZhciBpPTA7IGk8bnVtU3BhY2VzOyBpKyspIGxlYWRpbmdUZXh0Kz1cIiBcIjtcblxuXHRcdFx0cmV0dXJuIGxlYWRpbmdUZXh0O1xuXHRcdH1cblx0KTtcblxuXHQvLyBjbGVhbiB1cCBzZW50aW5lbHNcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvfkEvZyxcIiAgICBcIik7ICAvLyBhdHRhY2tsYWI6IGdfdGFiX3dpZHRoXG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL35CL2csXCJcIik7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cblxuLy9cbi8vICBhdHRhY2tsYWI6IFV0aWxpdHkgZnVuY3Rpb25zXG4vL1xuXG5cbnZhciBlc2NhcGVDaGFyYWN0ZXJzID0gZnVuY3Rpb24odGV4dCwgY2hhcnNUb0VzY2FwZSwgYWZ0ZXJCYWNrc2xhc2gpIHtcblx0Ly8gRmlyc3Qgd2UgaGF2ZSB0byBlc2NhcGUgdGhlIGVzY2FwZSBjaGFyYWN0ZXJzIHNvIHRoYXRcblx0Ly8gd2UgY2FuIGJ1aWxkIGEgY2hhcmFjdGVyIGNsYXNzIG91dCBvZiB0aGVtXG5cdHZhciByZWdleFN0cmluZyA9IFwiKFtcIiArIGNoYXJzVG9Fc2NhcGUucmVwbGFjZSgvKFtcXFtcXF1cXFxcXSkvZyxcIlxcXFwkMVwiKSArIFwiXSlcIjtcblxuXHRpZiAoYWZ0ZXJCYWNrc2xhc2gpIHtcblx0XHRyZWdleFN0cmluZyA9IFwiXFxcXFxcXFxcIiArIHJlZ2V4U3RyaW5nO1xuXHR9XG5cblx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZyxcImdcIik7XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsZXNjYXBlQ2hhcmFjdGVyc19jYWxsYmFjayk7XG5cblx0cmV0dXJuIHRleHQ7XG59XG5cblxudmFyIGVzY2FwZUNoYXJhY3RlcnNfY2FsbGJhY2sgPSBmdW5jdGlvbih3aG9sZU1hdGNoLG0xKSB7XG5cdHZhciBjaGFyQ29kZVRvRXNjYXBlID0gbTEuY2hhckNvZGVBdCgwKTtcblx0cmV0dXJuIFwifkVcIitjaGFyQ29kZVRvRXNjYXBlK1wiRVwiO1xufVxuXG59IC8vIGVuZCBvZiBTaG93ZG93bi5jb252ZXJ0ZXJcblxuXG47IGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKHR5cGVvZiBTaG93ZG93biAhPSBcInVuZGVmaW5lZFwiID8gU2hvd2Rvd24gOiB3aW5kb3cuU2hvd2Rvd24pO1xuXG59KS5jYWxsKGdsb2JhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vdmVuZG9yL3Nob3dkb3duX2Zvcl9icm93c2VyaWZ5LmpzXCIsXCIvLi4vLi4vdmVuZG9yXCIpIl19
