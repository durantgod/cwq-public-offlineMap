window.TILE_VERSION = {
  ditu: {
    normal: {
      version: '088',
      updateDate: '20180829',
    },
    satellite: {
      version: '009',
      updateDate: '20180829',
    },
    normalTraffic: {
      version: '081',
      updateDate: '20180829',
    },
    satelliteTraffic: {
      version: '083',
      updateDate: '20180829',
    },
    mapJS: {
      version: '104',
      updateDate: '20180829',
    },
    satelliteStreet: {
      version: '083',
      updateDate: '20180829',
    },
    panoClick: {
      version: '1033',
      updateDate: '20180816',
    },
    panoUdt: {
      version: '20180816',
      updateDate: '20180816',
    },
    panoSwfAPI: {
      version: '20150123',
      updateDate: '20150123',
    },
    panoSwfPlace: {
      version: '20141112',
      updateDate: '20141112',
    },
    earthVector: {
      version: '001',
      updateDate: '20180829',
    },
  },
  webapp: {
    high_normal: {
      version: '001',
      updateDate: '20180829',
    },
    lower_normal: {
      version: '002',
      updateDate: '20180829',
    },
  },
  api_for_mobile: {
    vector: {
      version: '002',
      updateDate: '20180829',
    },
    vectorIcon: {
      version: '002',
      updateDate: '20180829',
    },
  },
}
window.BMAP_AUTHENTIC_KEY = 'M91jbSPmqFAEdEOL9H3Cf4kXhQjR5KL5'
;(function () {
  function aa(a) {
    throw a
  }
  var l = void 0,
    q = !0,
    s = null,
    t = !1
  function u() {
    return function () {}
  }
  function ba(a) {
    return function (b) {
      this[a] = b
    }
  }
  function w(a) {
    return function () {
      return this[a]
    }
  }
  function ca(a) {
    return function () {
      return a
    }
  }
  var da,
    ea = []
  function ga(a) {
    return function () {
      return ea[a].apply(this, arguments)
    }
  }
  function ha(a, b) {
    return (ea[a] = b)
  }
  var ia,
    z = (ia = z || {
      version: '1.3.4',
    })
  z.aa = '$BAIDU$'
  window[z.aa] = window[z.aa] || {}
  z.object = z.object || {}
  z.extend = z.object.extend = function (a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    return a
  }
  z.D = z.D || {}
  z.D.$ = function (a) {
    return 'string' == typeof a || a instanceof String
      ? document.getElementById(a)
      : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType)
      ? a
      : s
  }
  z.$ = z.Fc = z.D.$
  z.D.U = function (a) {
    a = z.D.$(a)
    if (a === s) return a
    a.style.display = 'none'
    return a
  }
  z.U = z.D.U
  z.lang = z.lang || {}
  z.lang.wg = function (a) {
    return '[object String]' == Object.prototype.toString.call(a)
  }
  z.wg = z.lang.wg
  z.D.Oj = function (a) {
    return z.lang.wg(a) ? document.getElementById(a) : a
  }
  z.Oj = z.D.Oj
  z.D.getElementsByClassName = function (a, b) {
    var c
    if (a.getElementsByClassName) c = a.getElementsByClassName(b)
    else {
      var e = a
      e == s && (e = document)
      c = []
      var e = e.getElementsByTagName('*'),
        f = e.length,
        g = RegExp('(^|\\s)' + b + '(\\s|$)'),
        i,
        k
      for (k = i = 0; i < f; i++) g.test(e[i].className) && ((c[k] = e[i]), k++)
    }
    return c
  }
  z.getElementsByClassName = z.D.getElementsByClassName
  z.D.contains = function (a, b) {
    var c = z.D.Oj,
      a = c(a),
      b = c(b)
    return a.contains
      ? a != b && a.contains(b)
      : !!(a.compareDocumentPosition(b) & 16)
  }
  z.ca = z.ca || {}
  ;/msie (\d+\.\d)/i.test(navigator.userAgent) &&
    (z.ca.ia = z.ia = document.documentMode || +RegExp.$1)
  var ja = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    valign: 'vAlign',
    usemap: 'useMap',
    frameborder: 'frameBorder',
  }
  8 > z.ca.ia
    ? ((ja['for'] = 'htmlFor'), (ja['class'] = 'className'))
    : ((ja.htmlFor = 'for'), (ja.className = 'class'))
  z.D.RG = ja
  z.D.BF = function (a, b, c) {
    a = z.D.$(a)
    if (a === s) return a
    if ('style' == b) a.style.cssText = c
    else {
      b = z.D.RG[b] || b
      a.setAttribute(b, c)
    }
    return a
  }
  z.BF = z.D.BF
  z.D.CF = function (a, b) {
    a = z.D.$(a)
    if (a === s) return a
    for (var c in b) z.D.BF(a, c, b[c])
    return a
  }
  z.CF = z.D.CF
  z.Wk = z.Wk || {}
  ;(function () {
    var a = RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)', 'g')
    z.Wk.trim = function (b) {
      return ('' + b).replace(a, '')
    }
  })()
  z.trim = z.Wk.trim
  z.Wk.Wo = function (a, b) {
    var a = '' + a,
      c = Array.prototype.slice.call(arguments, 1),
      e = Object.prototype.toString
    if (c.length) {
      c =
        c.length == 1
          ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b))
            ? b
            : c
          : c
      return a.replace(/#\{(.+?)\}/g, function (a, b) {
        var i = c[b]
        '[object Function]' == e.call(i) && (i = i(b))
        return 'undefined' == typeof i ? '' : i
      })
    }
    return a
  }
  z.Wo = z.Wk.Wo
  z.D.Pb = function (a, b) {
    a = z.D.$(a)
    if (a === s) return a
    for (
      var c = a.className.split(/\s+/),
        e = b.split(/\s+/),
        f,
        g = e.length,
        i,
        k = 0;
      k < g;
      ++k
    ) {
      i = 0
      for (f = c.length; i < f; ++i)
        if (c[i] == e[k]) {
          c.splice(i, 1)
          break
        }
    }
    a.className = c.join(' ')
    return a
  }
  z.Pb = z.D.Pb
  z.D.Vx = function (a, b, c) {
    a = z.D.$(a)
    if (a === s) return a
    var e
    if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c)
    else {
      e = a.ownerDocument.createRange()
      b = b.toUpperCase()
      if (b == 'AFTERBEGIN' || b == 'BEFOREEND') {
        e.selectNodeContents(a)
        e.collapse(b == 'AFTERBEGIN')
      } else {
        b = b == 'BEFOREBEGIN'
        e[b ? 'setStartBefore' : 'setEndAfter'](a)
        e.collapse(b)
      }
      e.insertNode(e.createContextualFragment(c))
    }
    return a
  }
  z.Vx = z.D.Vx
  z.D.show = function (a) {
    a = z.D.$(a)
    if (a === s) return a
    a.style.display = ''
    return a
  }
  z.show = z.D.show
  z.D.QD = function (a) {
    a = z.D.$(a)
    return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
  }
  z.D.Ua = function (a, b) {
    a = z.D.$(a)
    if (a === s) return a
    for (
      var c = b.split(/\s+/),
        e = a.className,
        f = ' ' + e + ' ',
        g = 0,
        i = c.length;
      g < i;
      g++
    )
      f.indexOf(' ' + c[g] + ' ') < 0 && (e = e + (' ' + c[g]))
    a.className = e
    return a
  }
  z.Ua = z.D.Ua
  z.D.PB = z.D.PB || {}
  z.D.Ol = z.D.Ol || []
  z.D.Ol.filter = function (a, b, c) {
    for (var e = 0, f = z.D.Ol, g; (g = f[e]); e++) if ((g = g[c])) b = g(a, b)
    return b
  }
  z.Wk.RO = function (a) {
    return a.indexOf('-') < 0 && a.indexOf('_') < 0
      ? a
      : a.replace(/[-_][^-_]/g, function (a) {
          return a.charAt(1).toUpperCase()
        })
  }
  z.D.m0 = function (a) {
    z.D.it(a, 'expand') ? z.D.Pb(a, 'expand') : z.D.Ua(a, 'expand')
  }
  z.D.it = function (a) {
    if (arguments.length <= 0 || typeof a === 'function') return this
    if (this.size() <= 0) return t
    var a = a.replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/\s+/g, ' '),
      b = a.split(' '),
      c
    z.forEach(this, function (a) {
      for (var a = a.className, f = 0; f < b.length; f++)
        if (!~(' ' + a + ' ').indexOf(' ' + b[f] + ' ')) {
          c = t
          return
        }
      c !== t && (c = q)
    })
    return c
  }
  z.D.oj = function (a, b) {
    var c = z.D,
      a = c.$(a)
    if (a === s) return a
    var b = z.Wk.RO(b),
      e = a.style[b]
    if (!e)
      var f = c.PB[b],
        e = a.currentStyle || (z.ca.ia ? a.style : getComputedStyle(a, s)),
        e = f && f.get ? f.get(a, e) : e[f || b]
    if ((f = c.Ol)) e = f.filter(b, e, 'get')
    return e
  }
  z.oj = z.D.oj
  ;/opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.opera = +RegExp.$1)
  z.ca.HM = /webkit/i.test(navigator.userAgent)
  z.ca.VY =
    /gecko/i.test(navigator.userAgent) &&
    !/like gecko/i.test(navigator.userAgent)
  z.ca.DE = 'CSS1Compat' == document.compatMode
  z.D.ga = function (a) {
    a = z.D.$(a)
    if (a === s) return a
    var b = z.D.QD(a),
      c = z.ca,
      e = z.D.oj
    c.VY > 0 && b.getBoxObjectFor && e(a, 'position')
    var f = {
        left: 0,
        top: 0,
      },
      g
    if (a == (c.ia && !c.DE ? b.body : b.documentElement)) return f
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect()
      f.left =
        Math.floor(a.left) +
        Math.max(b.documentElement.scrollLeft, b.body.scrollLeft)
      f.top =
        Math.floor(a.top) +
        Math.max(b.documentElement.scrollTop, b.body.scrollTop)
      f.left = f.left - b.documentElement.clientLeft
      f.top = f.top - b.documentElement.clientTop
      a = b.body
      b = parseInt(e(a, 'borderLeftWidth'))
      e = parseInt(e(a, 'borderTopWidth'))
      if (c.ia && !c.DE) {
        f.left = f.left - (isNaN(b) ? 2 : b)
        f.top = f.top - (isNaN(e) ? 2 : e)
      }
    } else {
      g = a
      do {
        f.left = f.left + g.offsetLeft
        f.top = f.top + g.offsetTop
        if (c.HM > 0 && e(g, 'position') == 'fixed') {
          f.left = f.left + b.body.scrollLeft
          f.top = f.top + b.body.scrollTop
          break
        }
        g = g.offsetParent
      } while (g && g != a)
      if (c.opera > 0 || (c.HM > 0 && e(a, 'position') == 'absolute'))
        f.top = f.top - b.body.offsetTop
      for (g = a.offsetParent; g && g != b.body; ) {
        f.left = f.left - g.scrollLeft
        if (!c.opera || g.tagName != 'TR') f.top = f.top - g.scrollTop
        g = g.offsetParent
      }
    }
    return f
  }
  ;/firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.Te = +RegExp.$1)
  ;/BIDUBrowser/i.test(navigator.userAgent) && (z.ca.n2 = q)
  var ka = navigator.userAgent
  ;/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) &&
    !/chrome/i.test(ka) &&
    (z.ca.Iy = +(RegExp.$1 || RegExp.$2))
  ;/chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ca.Qw = +RegExp.$1)
  z.mc = z.mc || {}
  z.mc.Fb = function (a, b) {
    var c,
      e,
      f = a.length
    if ('function' == typeof b)
      for (e = 0; e < f; e++) {
        c = a[e]
        c = b.call(a, c, e)
        if (c === t) break
      }
    return a
  }
  z.Fb = z.mc.Fb
  z.lang.aa = function () {
    return 'TANGRAM__' + (window[z.aa]._counter++).toString(36)
  }
  window[z.aa]._counter = window[z.aa]._counter || 1
  window[z.aa]._instances = window[z.aa]._instances || {}
  z.lang.wt = function (a) {
    return '[object Function]' == Object.prototype.toString.call(a)
  }
  z.lang.Ca = function (a) {
    this.aa = a || z.lang.aa()
    window[z.aa]._instances[this.aa] = this
  }
  window[z.aa]._instances = window[z.aa]._instances || {}
  z.lang.Ca.prototype.ci = ga(0)
  z.lang.Ca.prototype.toString = function () {
    return '[object ' + (this.UQ || 'Object') + ']'
  }
  z.lang.Ju = function (a, b) {
    this.type = a
    this.returnValue = q
    this.target = b || s
    this.currentTarget = s
  }
  z.lang.Ca.prototype.addEventListener = function (a, b, c) {
    if (z.lang.wt(b)) {
      !b.fl && (b.fl = {})
      !this.Ci && (this.Ci = {})
      var e = this.Ci,
        f
      if (typeof c == 'string' && c) {
        ;/[^\w\-]/.test(c) && aa('nonstandard key:' + c)
        f = b.Nx = c
      }
      a.indexOf('on') != 0 && (a = 'on' + a)
      typeof e[a] != 'object' && (e[a] = {})
      typeof b.fl[a] != 'object' && (b.fl[a] = {})
      f = f || z.lang.aa()
      b.fl[a].Nx = f
      e[a][f] = b
    }
  }
  z.lang.Ca.prototype.removeEventListener = function (a, b) {
    a.indexOf('on') != 0 && (a = 'on' + a)
    if (z.lang.wt(b)) {
      if (!b.fl || !b.fl[a]) return
      b = b.fl[a].Nx
    } else if (!z.lang.wg(b)) return
    !this.Ci && (this.Ci = {})
    var c = this.Ci
    c[a] && c[a][b] && delete c[a][b]
  }
  z.lang.Ca.prototype.dispatchEvent = function (a, b) {
    z.lang.wg(a) && (a = new z.lang.Ju(a))
    !this.Ci && (this.Ci = {})
    var b = b || {},
      c
    for (c in b) a[c] = b[c]
    var e = this.Ci,
      f = a.type
    a.target = a.target || this
    a.currentTarget = this
    f.indexOf('on') != 0 && (f = 'on' + f)
    z.lang.wt(this[f]) && this[f].apply(this, arguments)
    if (typeof e[f] == 'object') for (c in e[f]) e[f][c].apply(this, arguments)
    return a.returnValue
  }
  z.lang.ta = function (a, b, c) {
    var e,
      f,
      g = a.prototype
    f = new Function()
    f.prototype = b.prototype
    f = a.prototype = new f()
    for (e in g) f[e] = g[e]
    a.prototype.constructor = a
    a.b0 = b.prototype
    if ('string' == typeof c) f.UQ = c
  }
  z.ta = z.lang.ta
  z.lang.Nc = function (a) {
    return window[z.aa]._instances[a] || s
  }
  z.platform = z.platform || {}
  z.platform.AM = /macintosh/i.test(navigator.userAgent)
  z.platform.h4 = /MicroMessenger/i.test(navigator.userAgent)
  z.platform.IM = /windows/i.test(navigator.userAgent)
  z.platform.cZ = /x11/i.test(navigator.userAgent)
  z.platform.Jm = /android/i.test(navigator.userAgent)
  ;/android (\d+\.\d)/i.test(navigator.userAgent) &&
    (z.platform.dK = z.dK = RegExp.$1)
  z.platform.XY = /ipad/i.test(navigator.userAgent)
  z.platform.zE = /iphone/i.test(navigator.userAgent)
  function la(a, b) {
    a.domEvent = b = window.event || b
    a.clientX = b.clientX || b.pageX
    a.clientY = b.clientY || b.pageY
    a.offsetX = b.offsetX || b.layerX
    a.offsetY = b.offsetY || b.layerY
    a.screenX = b.screenX
    a.screenY = b.screenY
    a.ctrlKey = b.ctrlKey || b.metaKey
    a.shiftKey = b.shiftKey
    a.altKey = b.altKey
    if (b.touches) {
      a.touches = []
      for (var c = 0; c < b.touches.length; c++)
        a.touches.push({
          clientX: b.touches[c].clientX,
          clientY: b.touches[c].clientY,
          screenX: b.touches[c].screenX,
          screenY: b.touches[c].screenY,
          pageX: b.touches[c].pageX,
          pageY: b.touches[c].pageY,
          target: b.touches[c].target,
          identifier: b.touches[c].identifier,
        })
    }
    if (b.changedTouches) {
      a.changedTouches = []
      for (c = 0; c < b.changedTouches.length; c++)
        a.changedTouches.push({
          clientX: b.changedTouches[c].clientX,
          clientY: b.changedTouches[c].clientY,
          screenX: b.changedTouches[c].screenX,
          screenY: b.changedTouches[c].screenY,
          pageX: b.changedTouches[c].pageX,
          pageY: b.changedTouches[c].pageY,
          target: b.changedTouches[c].target,
          identifier: b.changedTouches[c].identifier,
        })
    }
    if (b.targetTouches) {
      a.targetTouches = []
      for (c = 0; c < b.targetTouches.length; c++)
        a.targetTouches.push({
          clientX: b.targetTouches[c].clientX,
          clientY: b.targetTouches[c].clientY,
          screenX: b.targetTouches[c].screenX,
          screenY: b.targetTouches[c].screenY,
          pageX: b.targetTouches[c].pageX,
          pageY: b.targetTouches[c].pageY,
          target: b.targetTouches[c].target,
          identifier: b.targetTouches[c].identifier,
        })
    }
    a.rotation = b.rotation
    a.scale = b.scale
    return a
  }
  z.lang.hx = function (a) {
    var b = window[z.aa]
    b.eT && delete b.eT[a]
  }
  z.event = {}
  z.M = z.event.M = function (a, b, c) {
    if (!(a = z.$(a))) return a
    b = b.replace(/^on/, '')
    a.addEventListener
      ? a.addEventListener(b, c, t)
      : a.attachEvent && a.attachEvent('on' + b, c)
    return a
  }
  z.ed = z.event.ed = function (a, b, c) {
    if (!(a = z.$(a))) return a
    b = b.replace(/^on/, '')
    a.removeEventListener
      ? a.removeEventListener(b, c, t)
      : a.detachEvent && a.detachEvent('on' + b, c)
    return a
  }
  z.D.it = function (a, b) {
    if (!a || !a.className || typeof a.className != 'string') return t
    var c = -1
    try {
      c =
        a.className == b ||
        a.className.search(RegExp('(\\s|^)' + b + '(\\s|$)'))
    } catch (e) {
      return t
    }
    return c > -1
  }
  z.iL = (function () {
    function a(a) {
      document.addEventListener &&
        ((this.element = a),
        (this.lL = this.Dk ? 'touchstart' : 'mousedown'),
        (this.xD = this.Dk ? 'touchmove' : 'mousemove'),
        (this.wD = this.Dk ? 'touchend' : 'mouseup'),
        (this.oh = t),
        (this.mu = this.lu = 0),
        this.element.addEventListener(this.lL, this, t),
        ia.M(this.element, 'mousedown', u()),
        this.handleEvent(s))
    }
    a.prototype = {
      Dk: 'ontouchstart' in window || 'createTouch' in document,
      start: function (a) {
        ma(a)
        this.oh = t
        this.lu = this.Dk ? a.touches[0].clientX : a.clientX
        this.mu = this.Dk ? a.touches[0].clientY : a.clientY
        this.element.addEventListener(this.xD, this, t)
        this.element.addEventListener(this.wD, this, t)
      },
      move: function (a) {
        na(a)
        var c = this.Dk ? a.touches[0].clientY : a.clientY
        if (
          10 <
            Math.abs((this.Dk ? a.touches[0].clientX : a.clientX) - this.lu) ||
          10 < Math.abs(c - this.mu)
        )
          this.oh = q
      },
      end: function (a) {
        na(a)
        this.oh ||
          ((a = document.createEvent('Event')),
          a.initEvent('tap', t, q),
          this.element.dispatchEvent(a))
        this.element.removeEventListener(this.xD, this, t)
        this.element.removeEventListener(this.wD, this, t)
      },
      handleEvent: function (a) {
        if (a)
          switch (a.type) {
            case this.lL:
              this.start(a)
              break
            case this.xD:
              this.move(a)
              break
            case this.wD:
              this.end(a)
          }
      },
    }
    return function (b) {
      return new a(b)
    }
  })()
  var B = window.BMap || {}
  B.version = '3.0'
  B.gV = 0.34 > Math.random()
  0 <= B.version.indexOf('#') && (B.version = '3.0')
  B.Fr = []
  B.Ye = function (a) {
    this.Fr.push(a)
  }
  B.ur = []
  B.Tm = function (a) {
    this.ur.push(a)
  }
  B.vV = B.apiLoad || u()
  B.Q0 =
    B.verify ||
    function () {
      B.version &&
        B.version >= 1.5 &&
        oa(B.Wc + '?qt=verify&ak=' + qa, function (a) {
          if (a && a.error !== 0) {
            if (typeof map !== 'undefined') {
              map.La().innerHTML = ''
              map.Ci = {}
            }
            B = s
            var b =
              '\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002'
            switch (a.error) {
              case 101:
                b =
                  '\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002'
                break
              case 102:
                b =
                  '\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002'
            }
            alert(b)
          }
        })
    }
  var qa = window.BMAP_AUTHENTIC_KEY
  window.BMAP_AUTHENTIC_KEY = s
  var ra = window.BMap_loadScriptTime,
    sa = new Date().getTime(),
    ta = s,
    ua = q,
    va = 5042,
    xa = 5002,
    ya = 5003,
    za = 'load_mapclick',
    Aa = 5038,
    Ba = 5041,
    Ca = 5047,
    Da = 5036,
    Ea = 5039,
    Fa = 5037,
    Ga = 5040,
    Ha = 5011,
    Ia = 7e3
  var Ja = 0
  function Ka(a, b) {
    if ((a = z.$(a))) {
      var c = this
      z.lang.Ca.call(c)
      b = b || {}
      c.K = {
        tC: 200,
        Wb: q,
        px: t,
        nD: q,
        To: q,
        Uo: b.enableWheelZoom || t,
        gL: q,
        pD: q,
        Ns: q,
        nx: q,
        tD: q,
        Ro: b.enable3DBuilding || t,
        Ic: 25,
        b1: 240,
        iV: 450,
        Vb: G.Vb,
        Hd: G.Hd,
        Yx: !!b.Yx,
        gc: Math.round(b.minZoom) || 1,
        Yb: Math.round(b.maxZoom) || 19,
        Hb: b.mapType || La,
        e5: t,
        cL: b.drawer || Ja,
        ox: q,
        lx: 500,
        aX: b.enableHighResolution !== t,
        fj: b.enableMapClick !== t,
        devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
        fG: 99,
        ye: b.mapStyle || s,
        jZ: b.logoControl === t ? t : q,
        DV: [],
        Kw: b.beforeClickIcon || s,
        Ms: t,
        qN: q,
      }
      c.K.ye && (this.LY(c.K.ye.controls), this.sM(c.K.ye.geotableId))
      c.K.ye && c.K.ye.styleId && c.O3(c.K.ye.styleId)
      c.K.fm = {
        dark: {
          backColor: '#2D2D2D',
          textColor: '#bfbfbf',
          iconUrl: 'dicons',
        },
        normal: {
          backColor: '#F3F1EC',
          textColor: '#c61b1b',
          iconUrl: 'icons',
        },
        light: {
          backColor: '#EBF8FC',
          textColor: '#017fb4',
          iconUrl: 'licons',
        },
      }
      b.enableAutoResize && (c.K.nx = b.enableAutoResize)
      b.enableStreetEntrance === t && (c.K.tD = b.enableStreetEntrance)
      b.enableDeepZoom === t && (c.K.gL = b.enableDeepZoom)
      var e = c.K.DV
      if (H())
        for (var f = 0, g = e.length; f < g; f++)
          if (z.ca[e[f]]) {
            c.K.devicePixelRatio = 1
            break
          }
      e = -1 < navigator.userAgent.toLowerCase().indexOf('android')
      f = -1 < navigator.userAgent.toLowerCase().indexOf('mqqbrowser')
      if (
        -1 < navigator.userAgent.toLowerCase().indexOf('UCBrowser') ||
        (e && f)
      )
        c.K.fG = 99
      c.Wa = a
      c.IB(a)
      a.unselectable = 'on'
      a.innerHTML = ''
      a.appendChild(c.va())
      b.size && this.Ce(b.size)
      e = c.cb()
      c.width = e.width
      c.height = e.height
      c.offsetX = 0
      c.offsetY = 0
      c.platform = a.firstChild
      c.ze = c.platform.firstChild
      c.ze.style.width = c.width + 'px'
      c.ze.style.height = c.height + 'px'
      c.Yd = {}
      c.re = new J(0, 0)
      c.fc = new J(0, 0)
      c.Oa = 3
      c.Oc = 0
      c.LC = s
      c.KC = s
      c.Ub = ''
      c.Rw = ''
      c.Jh = {}
      c.Jh.custom = {}
      c.Sa = 0
      b.useWebGL === t && Na(t)
      c.P = new Oa(a, {
        of: 'api',
        jT: q,
      })
      c.P.U()
      c.P.GF(c)
      b = b || {}
      e = c.Hb = c.K.Hb
      c.cd = e.wm()
      e === Qa && Ra(xa)
      e === Sa && Ra(ya)
      e = c.K
      e.hP = Math.round(b.minZoom)
      e.gP = Math.round(b.maxZoom)
      c.bv()
      c.R = {
        Jc: t,
        nc: 0,
        Bt: 0,
        MM: 0,
        l4: 0,
        lC: t,
        pF: -1,
        Qe: [],
      }
      c.platform.style.cursor = c.K.Vb
      for (f = 0; f < B.Fr.length; f++) B.Fr[f](c)
      c.R.pF = f
      c.ba()
      K.load('map', function () {
        c.ib()
      })
      c.K.fj &&
        (setTimeout(function () {
          Ra(za)
        }, 1e3),
        K.load(
          'mapclick',
          function () {
            window.MPC_Mgr = window.MPC_Mgr || {}
            window.MPC_Mgr[c.aa] = new Ta(c)
          },
          q
        ))
      Ua() &&
        K.load('oppc', function () {
          c.Dz()
        })
      H() &&
        K.load('opmb', function () {
          c.Dz()
        })
      a = s
      c.WB = []
    }
  }
  z.lang.ta(Ka, z.lang.Ca, 'Map')
  z.extend(Ka.prototype, {
    va: function () {
      var a = L('div'),
        b = a.style
      b.overflow = 'visible'
      b.position = 'absolute'
      b.zIndex = '0'
      b.top = b.left = '0px'
      var b = L('div', {
          class: 'BMap_mask',
        }),
        c = b.style
      c.position = 'absolute'
      c.top = c.left = '0px'
      c.zIndex = '9'
      c.overflow = 'hidden'
      c.WebkitUserSelect = 'none'
      a.appendChild(b)
      return a
    },
    IB: function (a) {
      var b = a.style
      b.overflow = 'hidden'
      'absolute' !== Va(a).position &&
        ((b.position = 'relative'), (b.zIndex = 0))
      b.backgroundColor = '#F3F1EC'
      b.color = '#000'
      b.textAlign = 'left'
    },
    ba: function () {
      var a = this
      a.as = function () {
        var b = a.cb()
        if (a.width !== b.width || a.height !== b.height) {
          var c = new O(a.width, a.height),
            e = new P('onbeforeresize')
          e.size = c
          a.dispatchEvent(e)
          a.ik((b.width - a.width) / 2, (b.height - a.height) / 2)
          a.ze.style.width = (a.width = b.width) + 'px'
          a.ze.style.height = (a.height = b.height) + 'px'
          c = new P('onresize')
          c.size = b
          a.dispatchEvent(c)
        }
      }
      a.K.nx && (a.R.es = setInterval(a.as, 80))
    },
    ik: function (a, b, c, e) {
      var f = this.oa().dc(this.fa()),
        g = this.cd,
        i = q
      c && J.yM(c) && ((this.re = new J(c.lng, c.lat)), (i = t))
      if ((c = c && e ? g.vj(c, this.Ub) : this.fc))
        if (
          ((this.fc = new J(c.lng + a * f, c.lat - b * f)),
          (a = g.nh(this.fc, this.Ub)) && i)
        )
          this.re = a
    },
    Gg: function (a, b) {
      if (
        Wa(a) &&
        (this.bv(),
        this.dispatchEvent(new P('onzoomstart')),
        (a = this.Yn(a).zoom),
        a !== this.Oa)
      ) {
        this.Oc = this.Oa
        this.Oa = a
        var c
        b ? (c = b) : this.hh() && (c = this.hh().ga())
        c &&
          ((c = this.$b(c, this.Oc)),
          this.ik(
            this.width / 2 - c.x,
            this.height / 2 - c.y,
            this.xb(c, this.Oc),
            q
          ))
        this.dispatchEvent(new P('onzoomstartcode'))
      }
    },
    Qc: function (a) {
      this.Gg(a)
    },
    kG: function (a) {
      this.Gg(this.Oa + 1, a)
    },
    lG: function (a) {
      this.Gg(this.Oa - 1, a)
    },
    qi: function (a) {
      a instanceof J &&
        ((this.fc = this.cd.vj(a, this.Ub)),
        (this.re = J.yM(a)
          ? new J(a.lng, a.lat)
          : this.cd.nh(this.fc, this.Ub)))
    },
    Ag: function (a, b) {
      a = Math.round(a) || 0
      b = Math.round(b) || 0
      this.ik(-a, -b)
    },
    Aw: function (a) {
      a &&
        Xa(a.He) &&
        (a.He(this), this.dispatchEvent(new P('onaddcontrol', a)))
    },
    VN: function (a) {
      a &&
        Xa(a.remove) &&
        (a.remove(), this.dispatchEvent(new P('onremovecontrol', a)))
    },
    yo: function (a) {
      a &&
        Xa(a.na) &&
        (a.na(this), this.dispatchEvent(new P('onaddcontextmenu', a)))
    },
    Cp: function (a) {
      a &&
        Xa(a.remove) &&
        (this.dispatchEvent(new P('onremovecontextmenu', a)), a.remove())
    },
    Ga: function (a) {
      a &&
        Xa(a.He) &&
        (a.He(this), this.dispatchEvent(new P('onaddoverlay', a)))
    },
    Qb: function (a) {
      a &&
        Xa(a.remove) &&
        (a.remove(), this.dispatchEvent(new P('onremoveoverlay', a)))
    },
    yK: function () {
      this.dispatchEvent(new P('onclearoverlays'))
    },
    Oe: function (a) {
      a && this.dispatchEvent(new P('onaddtilelayer', a))
    },
    Yf: function (a) {
      a && this.dispatchEvent(new P('onremovetilelayer', a))
    },
    Dg: function (a) {
      if (this.Hb !== a) {
        var b = new P('onsetmaptype')
        b.V4 = this.Hb
        this.Hb = this.K.Hb = a
        this.cd = this.Hb.wm()
        this.ik(0, 0, this.Ka(), q)
        this.bv()
        var c = this.Yn(this.fa()).zoom
        this.Gg(c)
        this.dispatchEvent(b)
        b = new P('onmaptypechange')
        b.Oa = c
        b.Hb = a
        this.dispatchEvent(b)
        ;(a === Ya || a === Sa) && Ra(ya)
      }
    },
    Zf: function (a) {
      var b = this
      if (a instanceof J)
        b.qi(a, {
          noAnimation: q,
        })
      else if ($a(a))
        if (b.Hb === Qa) {
          var c = G.pC[a]
          c && ((pt = c.k), b.Zf(pt))
        } else {
          var e = this.WH()
          e.JF(function (c) {
            0 === e.xm() &&
              2 === e.Ia.result.type &&
              (b.Zf(c.Ak(0).point), Qa.wk(a) && b.DF(a))
          })
          e.search(a, {
            log: 'center',
          })
        }
    },
    Fd: function (a, b) {
      '[object Undefined]' !== Object.prototype.toString.call(b) &&
        (b = parseInt(b))
      B.Fn('cus.fire', 'time', {
        z_loadscripttime: sa - ra,
      })
      var c = this
      if ($a(a))
        if (c.Hb === Qa) {
          var e = G.pC[a]
          e && ((pt = e.k), c.Fd(pt, b))
        } else {
          var f = c.WH()
          f.JF(function (e) {
            if (
              0 === f.xm() &&
              (2 === f.Ia.result.type || 11 === f.Ia.result.type)
            ) {
              var e = e.Ak(0).point,
                g = b || ab.tx(f.Ia.content.level, c)
              c.Fd(e, g)
              Qa.wk(a) && c.DF(a)
            }
          })
          f.search(a, {
            log: 'center',
          })
        }
      else if (a instanceof J && b) {
        b = c.Yn(b).zoom
        c.Oc = c.Oa || b
        c.Oa = b
        e = c.re
        c.re = new J(a.lng, a.lat)
        c.fc = c.cd.vj(c.re, c.Ub)
        c.LC = c.LC || c.Oa
        c.KC = c.KC || c.re
        var g = new P('onload'),
          i = new P('onloadcode')
        g.point = new J(a.lng, a.lat)
        g.pixel = c.$b(c.re, c.Oa)
        g.zoom = b
        c.loaded || ((c.loaded = q), c.dispatchEvent(g), ta || (ta = bb()))
        c.dispatchEvent(i)
        g = new P('onmoveend')
        g.mv = 'centerAndZoom'
        e.pb(c.re) || c.dispatchEvent(g)
        c.dispatchEvent(new P('onmoveend'))
        c.Oc !== c.Oa &&
          ((e = new P('onzoomend')),
          (e.mv = 'centerAndZoom'),
          c.dispatchEvent(e))
        c.K.Ro && c.Ro()
      }
    },
    WH: function () {
      this.R.YM || (this.R.YM = new cb(1))
      return this.R.YM
    },
    reset: function () {
      this.Fd(this.KC, this.LC, q)
    },
    enableDragging: function () {
      this.K.Wb = q
    },
    disableDragging: function () {
      this.K.Wb = t
    },
    enableInertialDragging: function () {
      this.K.ox = q
    },
    disableInertialDragging: function () {
      this.K.ox = t
    },
    enableScrollWheelZoom: function () {
      this.K.Uo = q
    },
    disableScrollWheelZoom: function () {
      this.K.Uo = t
    },
    enableContinuousZoom: function () {
      this.K.To = q
    },
    disableContinuousZoom: function () {
      this.K.To = t
    },
    enableDoubleClickZoom: function () {
      this.K.nD = q
    },
    disableDoubleClickZoom: function () {
      this.K.nD = t
    },
    enableKeyboard: function () {
      this.K.px = q
    },
    disableKeyboard: function () {
      this.K.px = t
    },
    enablePinchToZoom: function () {
      this.K.Ns = q
    },
    disablePinchToZoom: function () {
      this.K.Ns = t
    },
    enableAutoResize: function () {
      this.K.nx = q
      this.as()
      this.R.es || (this.R.es = setInterval(this.as, 80))
    },
    disableAutoResize: function () {
      this.K.nx = t
      this.R.es && (clearInterval(this.R.es), (this.R.es = s))
    },
    Ro: function () {
      this.K.Ro = q
      this.Nn ||
        ((this.Nn = new db({
          pL: q,
        })),
        this.Oe(this.Nn))
    },
    KW: function () {
      this.K.Ro = t
      this.Nn && (this.Yf(this.Nn), (this.Nn = s), delete this.Nn)
    },
    cb: function () {
      return this.xs && this.xs instanceof O
        ? new O(this.xs.width, this.xs.height)
        : new O(this.Wa.clientWidth, this.Wa.clientHeight)
    },
    Ce: function (a) {
      a && a instanceof O
        ? ((this.xs = a),
          (this.Wa.style.width = a.width + 'px'),
          (this.Wa.style.height = a.height + 'px'))
        : (this.xs = s)
    },
    Ka: w('re'),
    fa: w('Oa'),
    ZV: function () {
      this.as()
    },
    Yn: function (a) {
      var b = this.K.gc,
        c = this.K.Yb,
        e = t,
        a = Math.round(a)
      a < b && ((e = q), (a = b))
      a > c && ((e = q), (a = c))
      return {
        zoom: a,
        yD: e,
      }
    },
    La: w('Wa'),
    $b: function (a, b) {
      b = b || this.fa()
      return this.cd.$b(a, b, this.fc, this.cb(), this.Ub)
    },
    xb: function (a, b) {
      b = b || this.fa()
      return this.cd.xb(a, b, this.fc, this.cb(), this.Ub)
    },
    Xe: function (a, b) {
      if (a) {
        var c = this.$b(new J(a.lng, a.lat), b)
        c.x -= this.offsetX
        c.y -= this.offsetY
        return c
      }
    },
    JN: function (a, b) {
      if (a) {
        var c = new Q(a.x, a.y)
        c.x += this.offsetX
        c.y += this.offsetY
        return this.xb(c, b)
      }
    },
    pointToPixelFor3D: function (a, b) {
      var c = map.Ub
      this.Hb === Qa && c && eb.EK(a, this, b)
    },
    P4: function (a, b) {
      var c = map.Ub
      this.Hb === Qa && c && eb.DK(a, this, b)
    },
    Q4: function (a, b) {
      var c = this,
        e = map.Ub
      c.Hb === Qa &&
        e &&
        eb.EK(a, c, function (a) {
          a.x -= c.offsetX
          a.y -= c.offsetY
          b && b(a)
        })
    },
    L4: function (a, b) {
      var c = map.Ub
      this.Hb === Qa &&
        c &&
        ((a.x += this.offsetX), (a.y += this.offsetY), eb.DK(a, this, b))
    },
    ve: function (a) {
      if (!this.Xx()) return new fb()
      var b = a || {},
        a = b.margins || [0, 0, 0, 0],
        c = b.zoom || s,
        b = this.xb(
          {
            x: a[3],
            y: this.height - a[2],
          },
          c
        ),
        a = this.xb(
          {
            x: this.width - a[1],
            y: a[0],
          },
          c
        )
      return new fb(b, a)
    },
    Xx: function () {
      return !!this.loaded
    },
    nS: function (a, b) {
      for (
        var c = this.oa(),
          e = b.margins || [10, 10, 10, 10],
          f = b.zoomFactor || 0,
          g = e[1] + e[3],
          e = e[0] + e[2],
          i = c.bp(),
          k = (c = c.sm());
        k >= i;
        k--
      ) {
        var m = this.oa().dc(k)
        if (a.YF().lng / m < this.width - g && a.YF().lat / m < this.height - e)
          break
      }
      k += f
      k < i && (k = i)
      k > c && (k = c)
      return k
    },
    ht: function (a, b) {
      var c = {
        center: this.Ka(),
        zoom: this.fa(),
      }
      if (
        !a ||
        (!a instanceof fb && 0 === a.length) ||
        (a instanceof fb && a.tj())
      )
        return c
      var e = []
      a instanceof fb ? (e.push(a.Rf()), e.push(a.Ve())) : (e = a.slice(0))
      for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++)
        f.push(this.cd.vj(e[g], this.Ub))
      e = new fb()
      for (g = f.length - 1; 0 <= g; g--) e.extend(f[g])
      if (e.tj()) return c
      c = e.Ka()
      f = this.nS(e, b)
      b.margins &&
        ((e = b.margins),
        (g = (e[1] - e[3]) / 2),
        (e = (e[0] - e[2]) / 2),
        (i = this.oa().dc(f)),
        b.offset && ((g = b.offset.width), (e = b.offset.height)),
        (c.lng += i * g),
        (c.lat += i * e))
      c = this.cd.nh(c, this.Ub)
      return {
        center: c,
        zoom: f,
      }
    },
    yh: function (a, b) {
      var c
      c = a && a.center ? a : this.ht(a, b)
      var b = b || {},
        e = b.delay || 200
      if (c.zoom === this.Oa && b.enableAnimation !== t) {
        var f = this
        setTimeout(function () {
          f.qi(c.center, {
            duration: 210, 
          })
        }, e)
      } else this.Fd(c.center, c.zoom)
    },
    Tf: w('Yd'),
    hh: function () {
      return this.R.qb && this.R.qb.Xa() ? this.R.qb : s
    },
    getDistance: function (a, b) {
      if (a && b) {
        if (a.pb(b)) return 0
        var c = 0,
          c = S.$o(a, b)
        if (c === s || c === l) c = 0
        return c
      }
    },
    Hx: function () {
      var a = [],
        b = this.ya,
        c = this.Ee
      if (b) for (var e in b) b[e] instanceof gb && a.push(b[e])
      if (c) {
        e = 0
        for (b = c.length; e < b; e++) a.push(c[e])
      }
      return a
    },
    oa: w('Hb'),
    Dz: function () {
      for (var a = this.R.pF; a < B.Fr.length; a++) B.Fr[a](this)
      this.R.pF = a
    },
    DF: function (a) {
      //修改   setCurrentCity
      //i_setCurrentCity(this, a);
      this.Ub = Qa.wk(a)
      this.Rw = Qa.BL(this.Ub)
      this.Hb === Qa && this.cd instanceof hb && (this.cd.$i = this.Ub)
    },
    setDefaultCursor: function (a) {
      this.K.Vb = a
      this.platform && (this.platform.style.cursor = this.K.Vb)
    },
    getDefaultCursor: function () {
      return this.K.Vb
    },
    setDraggingCursor: function (a) {
      this.K.Hd = a
    },
    getDraggingCursor: function () {
      return this.K.Hd
    },
    Sx: function () {
      return this.K.aX && 1.5 <= this.K.devicePixelRatio
    },
    Cw: function (a, b) {
      b ? this.Jh[b] || (this.Jh[b] = {}) : (b = 'custom')
      a.tag = b
      a instanceof ib && ((this.Jh[b][a.aa] = a), a.na(this))
      var c = this
      K.load(
        'hotspot',
        function () {
          c.Dz()
        },
        q
      )
    },
    VZ: function (a, b) {
      b || (b = 'custom')
      this.Jh[b][a.aa] && delete this.Jh[b][a.aa]
    },
    dm: function (a) {
      a || (a = 'custom')
      this.Jh[a] = {}
    },
    bv: function () {
      var a = this.Hb.bp(),
        b = this.Hb.sm(),
        c = this.K
      c.gc = c.hP || a
      c.Yb = c.gP || b
      c.gc < a && (c.gc = a)
      c.Yb > b && (c.Yb = b)
    },
    setMinZoom: function (a) {
      a = Math.round(a)
      a > this.K.Yb && (a = this.K.Yb)
      this.K.hP = a
      this.HJ()
    },
    setMaxZoom: function (a) {
      a = Math.round(a)
      a < this.K.gc && (a = this.K.gc)
      this.K.gP = a
      this.HJ()
    },
    HJ: function () {
      this.bv()
      var a = this.K
      this.Oa < a.gc ? this.Qc(a.gc) : this.Oa > a.Yb && this.Qc(a.Yb)
      var b = new P('onzoomspanchange')
      b.gc = a.gc
      b.Yb = a.Yb
      this.dispatchEvent(b)
    },
    Q3: w('WB'),
    getKey: function () {
      return qa
    },
    Zt: function (a) {
      var b = this
      window.MPC_Mgr && window.MPC_Mgr[b.aa] && window.MPC_Mgr[b.aa].close()
      b.K.fj = t
      B.Fn('cus.fire', 'count', 'z_setmapstylecount')
      if (a) {
        b = this
        a.styleJson && (a.styleStr = b.Z_(a.styleJson))
        H() && z.ca.Iy
          ? setTimeout(function () {
              b.K.ye = a
              b.dispatchEvent(new P('onsetcustomstyles', a))
            }, 50)
          : ((this.K.ye = a),
            this.dispatchEvent(new P('onsetcustomstyles', a)),
            this.sM(b.K.ye.geotableId))
        var c = {
          style: a.style,
        }
        a.features && 0 < a.features.length && (c.features = q)
        a.styleJson && 0 < a.styleJson.length && (c.styleJson = q)
        Ra(5050, c)
        a.style &&
          (c = b.K.fm[a.style]
            ? b.K.fm[a.style].backColor
            : b.K.fm.normal.backColor) &&
          (this.La().style.backgroundColor = c)
      }
    },
    LY: function (a) {
      this.controls ||
        (this.controls = {
          navigationControl: new jb(),
          scaleControl: new kb(),
          overviewMapControl: new lb(),
          mapTypeControl: new mb(),
        })
      var b = this,
        c
      for (c in this.controls) b.VN(b.controls[c])
      a = a || []
      z.mc.Fb(a, function (a) {
        b.Aw(b.controls[a])
      })
    },
    sM: function (a) {
      a
        ? (this.vs && this.vs.Cf === a) ||
          (this.Yf(this.vs),
          (this.vs = new nb({
            geotableId: a,
          })),
          this.Oe(this.vs))
        : this.Yf(this.vs)
    },
    Sb: function () {
      var a = this.fa() >= this.K.fG && this.oa() === La && 18 >= this.fa(),
        b = t
      try {
        document.createElement('canvas').getContext('2d'), (b = q)
      } catch (c) {
        b = t
      }
      return a && b
    },
    getCurrentCity: function () {
      return {
        name: this.$g,
        code: this.fs,
      }
    },
    tm: function () {
      this.P.co()
      return this.P
    },
    PY: function (a) {
      B.alog('cus.fire', 'count', 'z_loadindoormapcount')
      La.setMaxZoom(a.maxZoom || 19)
      var b = new P('oninitindoorlayer')
      b.vf = a
      this.dispatchEvent(b)
      this.K.Ms = t
    },
    D_: function (a) {
      this.K.qN = a
      this.Va.Jb.parentElement.style.display = a ? 'block' : 'none'
    },
    setPanorama: function (a) {
      this.P = a
      this.P.GF(this)
    },
    Z_: function (a) {
      for (
        var b = {
            featureType: 't',
            elementType: 'e',
            visibility: 'v',
            color: 'c',
            lightness: 'l',
            saturation: 's',
            weight: 'w',
            zoom: 'z',
            hue: 'h',
          },
          c = {
            all: 'all',
            geometry: 'g',
            'geometry.fill': 'g.f',
            'geometry.stroke': 'g.s',
            labels: 'l',
            'labels.text.fill': 'l.t.f',
            'labels.text.stroke': 'l.t.s',
            'lables.text': 'l.t',
            'labels.icon': 'l.i',
          },
          e = [],
          f = 0,
          g;
        (g = a[f]);
        f++
      ) {
        var i = g.stylers
        delete g.stylers
        z.extend(g, i)
        var i = [],
          k
        for (k in b)
          if (g[k])
            if ('elementType' === k) i.push(b[k] + ':' + c[g[k]])
            else {
              switch (g[k]) {
                case 'poilabel':
                  g[k] = 'poi'
                  break
                case 'districtlabel':
                  g[k] = 'label'
              }
              i.push(b[k] + ':' + g[k])
            }
        2 < i.length && e.push(i.join('|'))
      }
      return e.join(',')
    },
  })
  function Ra(a, b) {
    if (a) {
      var b = b || {},
        c = '',
        e
      for (e in b) c = c + '&' + e + '=' + encodeURIComponent(b[e])
      var f = function (a) {
          a &&
            ((ob = q),
            setTimeout(function () {
              pb.src = B.Wc + 'images/blank.gif?' + a.src
            }, 50))
        },
        g = function () {
          var a = qb.shift()
          a && f(a)
        }
      e = (1e8 * Math.random()).toFixed(0)
      ob
        ? qb.push({
            src:
              'product=jsapi&sub_product=jsapi&v=' +
              B.version +
              '&sub_product_v=' +
              B.version +
              '&t=' +
              e +
              '&code=' +
              a +
              '&da_src=' +
              a +
              c,
          })
        : f({
            src:
              'product=jsapi&sub_product=jsapi&v=' +
              B.version +
              '&sub_product_v=' +
              B.version +
              '&t=' +
              e +
              '&code=' +
              a +
              '&da_src=' +
              a +
              c,
          })
      rb ||
        (z.M(pb, 'load', function () {
          ob = t
          g()
        }),
        z.M(pb, 'error', function () {
          ob = t
          g()
        }),
        (rb = q))
    }
  }
  var ob,
    rb,
    qb = [],
    pb = new Image()
  Ra(5e3, {
    device_pixel_ratio: window.devicePixelRatio,
    platform: navigator.platform,
  })
  B.mM = {
    TILE_BASE_URLS: [
      'gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu',
      'gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu',
    ],
    TILE_ONLINE_URLS: [
      'gss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv',
      'gss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv',
      'gss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv',
      'gss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv',
      'gss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv',
    ],
    TIlE_PERSPECT_URLS: [
      'gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a',
      'gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a',
      'gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a',
      'gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a',
    ],
    geolocControl: 'gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3',
    TILES_YUN_HOST: [
      'gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy',
      'gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy',
      'gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy',
      'gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy',
    ],
    traffic: 'gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa',
    iw_pano: 'gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_',
    message: 'gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K',
    baidumap: 'gsp0.baidu.com/80MWsjip0QIZ8tyhnq',
    wuxian: 'gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a',
    pano: [
      'gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_',
      'gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_',
      'gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_',
    ],
    main_domain_nocdn: {
      baidu: 'gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3',
      other: 'api.map.baidu.com',
    },
    main_domain_cdn: {
      baidu: [
        'gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv',
        'gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv',
        'gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv',
      ],
      other: ['api.map.baidu.com'],
      webmap: ['gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv'],
    },
    map_click: 'gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK',
    vector_traffic: 'gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a',
  }
  B.DY = {
    TILE_BASE_URLS: [
      'shangetu0.map.bdimg.com',
      'shangetu1.map.bdimg.com',
      'shangetu2.map.bdimg.com',
      'shangetu3.map.bdimg.com',
      'shangetu4.map.bdimg.com',
    ],
    TILE_ONLINE_URLS: [
      'online0.map.bdimg.com',
      'online1.map.bdimg.com',
      'online2.map.bdimg.com',
      'online3.map.bdimg.com',
      'online4.map.bdimg.com',
    ],
    TIlE_PERSPECT_URLS: [
      'd0.map.baidu.com',
      'd1.map.baidu.com',
      'd2.map.baidu.com',
      'd3.map.baidu.com',
    ],
    geolocControl: 'loc.map.baidu.com',
    TILES_YUN_HOST: [
      'g0.api.map.baidu.com',
      'g1.api.map.baidu.com',
      'g2.api.map.baidu.com',
      'g3.api.map.baidu.com',
    ],
    traffic: 'its.map.baidu.com:8002',
    iw_pano: 'pcsv0.map.bdimg.com',
    message: 'j.map.baidu.com',
    baidumap: 'map.baidu.com',
    wuxian: 'wuxian.baidu.com',
    pano: ['pcsv0.map.bdimg.com', 'pcsv1.map.bdimg.com', 'pcsv2.map.bdimg.com'],
    main_domain_nocdn: {
      baidu: 'api.map.baidu.com',
    },
    main_domain_cdn: {
      baidu: ['api0.map.bdimg.com', 'api1.map.bdimg.com', 'api2.map.bdimg.com'],
      webmap: ['webmap0.map.bdimg.com'],
    },
    map_click: 'mapclick.map.baidu.com',
    vector_traffic: 'or.map.bdimg.com',
  }
  B.F0 = {
    0: {
      proto: 'http://',
      domain: B.DY,
    },
    1: {
      proto: 'https://',
      domain: B.mM,
    },
    2: {
      proto: 'https://',
      domain: B.mM,
    },
  }
  window.BMAP_PROTOCOL &&
    'https' === window.BMAP_PROTOCOL &&
    (window.HOST_TYPE = 2)
  B.xu = window.HOST_TYPE || '0'
  B.url = B.F0[B.xu]
  // B.vp = B.url.proto + B.url.domain.baidumap + '/'
  B.vp =bmapcfg.home;  //修改，本地工具资源引用(离线路径)
  // B.Wc =
  //   B.url.proto +
  //   ('2' == B.xu
  //     ? B.url.domain.main_domain_nocdn.other
  //     : B.url.domain.main_domain_nocdn.baidu) +
  //   '/'
  B.Wc =bmapcfg.home;  //修改，本地工具资源引用(离线路径)
  //B.ka=B.url.proto+("2"==B.xu?B.url.domain.main_domain_cdn.other[0]:B.url.domain.main_domain_cdn.baidu[0])+"/";
  B.ka = bmapcfg.home //修改，本地工具资源引用(离线路径)
  console.log(bmapcfg.home, '=============')
  // B.Yi = B.url.proto + B.url.domain.main_domain_cdn.webmap[0] + '/'
  B.Yi =bmapcfg.home;  //修改，本地工具资源引用(离线路径)
  B.vg = function (a, b) {
    var c,
      e,
      b = b || ''
    switch (a) {
      case 'main_domain_nocdn':
        c = B.Wc + b
        break
      case 'main_domain_cdn':
        c = B.ka + b
        break
      default:
        ;(e = B.url.domain[a]),
          '[object Array]' == Object.prototype.toString.call(e)
            ? ((c = []),
              z.mc.Fb(e, function (a, e) {
                c[e] = B.url.proto + a + '/' + b
              }))
            : (c = B.url.proto + B.url.domain[a] + '/' + b)
    }
    return c
  }
  function tb(a) {
    var b = {
      duration: 1e3,
      Ic: 30,
      No: 0,
      kc: ub.UM,
      Kt: u(),
    }
    this.dg = []
    if (a) for (var c in a) b[c] = a[c]
    this.j = b
    if (Wa(b.No)) {
      var e = this
      setTimeout(function () {
        e.start()
      }, b.No)
    } else b.No != vb && this.start()
  }
  var vb = 'INFINITE'
  tb.prototype.start = function () {
    this.Uu = bb()
    this.gA = this.Uu + this.j.duration
    wb(this)
  }
  tb.prototype.add = function (a) {
    this.dg.push(a)
  }
  function wb(a) {
    var b = bb()
    b >= a.gA
      ? (Xa(a.j.va) && a.j.va(a.j.kc(1)),
        Xa(a.j.finish) && a.j.finish(),
        0 < a.dg.length &&
          ((b = a.dg[0]), (b.dg = [].concat(a.dg.slice(1))), b.start()))
      : ((a.Jy = a.j.kc((b - a.Uu) / a.j.duration)),
        Xa(a.j.va) && a.j.va(a.Jy),
        a.TF ||
          (a.Yr = setTimeout(function () {
            wb(a)
          }, 1e3 / a.j.Ic)))
  }
  tb.prototype.stop = function (a) {
    this.TF = q
    for (var b = 0; b < this.dg.length; b++) this.dg[b].stop(), (this.dg[b] = s)
    this.dg.length = 0
    this.Yr && (clearTimeout(this.Yr), (this.Yr = s))
    this.j.Kt(this.Jy)
    a && ((this.gA = this.Uu), wb(this))
  }
  tb.prototype.cancel = ga(1)
  var ub = {
    UM: function (a) {
      return a
    },
    reverse: function (a) {
      return 1 - a
    },
    iD: function (a) {
      return a * a
    },
    hD: function (a) {
      return Math.pow(a, 3)
    },
    Ks: function (a) {
      return -(a * (a - 2))
    },
    eL: function (a) {
      return Math.pow(a - 1, 3) + 1
    },
    dL: function (a) {
      return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
    },
    R2: function (a) {
      return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
    },
    S2: function (a) {
      return (1 - Math.cos(Math.PI * a)) / 2
    },
  }
  ub['ease-in'] = ub.iD
  ub['ease-out'] = ub.Ks
  var G = {
    oG: 34,
    pG: 21,
    qG: new O(21, 32),
    wP: new O(10, 32),
    vP: new O(24, 36),
    uP: new O(12, 36),
    mG: new O(13, 1),
    qa: B.ka + 'images/',
    a4: 'http://api0.map.bdimg.com/images/',
    nG: B.ka + 'images/markers_new.png',
    sP: 24,
    tP: 73,
    pC: {
      '\u5317\u4eac': {
        yy: 'bj',
        k: new J(116.403874, 39.914889),
      },
      '\u4e0a\u6d77': {
        yy: 'sh',
        k: new J(121.487899, 31.249162),
      },
      '\u6df1\u5733': {
        yy: 'sz',
        k: new J(114.025974, 22.546054),
      },
      '\u5e7f\u5dde': {
        yy: 'gz',
        k: new J(113.30765, 23.120049),
      },
    },
    fontFamily: 'arial,sans-serif',
  }
  z.ca.Te
    ? (z.extend(G, {
        TK: 'url(' + G.qa + 'ruler.cur),crosshair',
        Vb: '-moz-grab',
        Hd: '-moz-grabbing',
      }),
      z.platform.IM && (G.fontFamily = 'arial,simsun,sans-serif'))
    : z.ca.Qw || z.ca.Iy
    ? z.extend(G, {
        TK: 'url(' + G.qa + 'ruler.cur) 2 6,crosshair',
        Vb: 'url(' + G.qa + 'openhand.cur) 8 8,default',
        Hd: 'url(' + G.qa + 'closedhand.cur) 8 8,move',
      })
    : z.extend(G, {
        TK: 'url(' + G.qa + 'ruler.cur),crosshair',
        Vb: 'url(' + G.qa + 'openhand.cur),default',
        Hd: 'url(' + G.qa + 'closedhand.cur),move',
      })
  function xb(a, b) {
    var c = a.style
    c.left = b[0] + 'px'
    c.top = b[1] + 'px'
  }
  function yb(a) {
    0 < z.ca.ia ? (a.unselectable = 'on') : (a.style.MozUserSelect = 'none')
  }
  function zb(a) {
    return a && a.parentNode && 11 !== a.parentNode.nodeType
  }
  function Ab(a, b) {
    z.D.Vx(a, 'beforeEnd', b)
    return a.lastChild
  }
  function Bb(a) {
    for (
      var b = {
        left: 0,
        top: 0,
      };
      a && a.offsetParent;

    )
      (b.left += a.offsetLeft), (b.top += a.offsetTop), (a = a.offsetParent)
    return b
  }
  function ma(a) {
    a = window.event || a
    a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = q)
  }
  function Cb(a) {
    a = window.event || a
    a.preventDefault ? a.preventDefault() : (a.returnValue = t)
    return t
  }
  function na(a) {
    ma(a)
    return Cb(a)
  }
  function Eb() {
    var a = document.documentElement,
      b = document.body
    return a && (a.scrollTop || a.scrollLeft)
      ? [a.scrollTop, a.scrollLeft]
      : b
      ? [b.scrollTop, b.scrollLeft]
      : [0, 0]
  }
  function Fb(a, b) {
    if (a && b)
      return Math.round(
        Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
      )
  }
  function Gb(a, b) {
    var c = [],
      b =
        b ||
        function (a) {
          return a
        },
      e
    for (e in a) c.push(e + '=' + b(a[e]))
    return c.join('&')
  }
  function L(a, b, c) {
    var e = document.createElement(a)
    c && (e = document.createElementNS(c, a))
    return z.D.CF(e, b || {})
  }
  function Va(a) {
    if (a.currentStyle) return a.currentStyle
    if (a.ownerDocument && a.ownerDocument.defaultView)
      return a.ownerDocument.defaultView.getComputedStyle(a, s)
  }
  function Xa(a) {
    return 'function' === typeof a
  }
  function Wa(a) {
    return 'number' === typeof a
  }
  function $a(a) {
    return 'string' == typeof a
  }
  function Hb(a) {
    return 'undefined' != typeof a
  }
  function Ib(a) {
    return 'object' == typeof a
  }
  var Jb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  function Kb(a) {
    for (var b = '', c = 0; c < a.length; c++) {
      var e = a.charCodeAt(c) << 1,
        f = (e = e.toString(2))
      8 > e.length && ((f = '00000000' + e), (f = f.substr(e.length, 8)))
      b += f
    }
    a = 5 - (b.length % 5)
    e = []
    for (c = 0; c < a; c++) e[c] = '0'
    b = e.join('') + b
    f = []
    for (c = 0; c < b.length / 5; c++)
      (e = b.substr(5 * c, 5)), f.push(String.fromCharCode(parseInt(e, 2) + 50))
    return f.join('') + a.toString()
  }
  function Lb(a) {
    var b = '',
      c,
      e,
      f = '',
      g,
      i = '',
      k = 0
    g = /[^A-Za-z0-9\+\/\=]/g
    if (!a || g.exec(a)) return a
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, '')
    do
      (c = Jb.indexOf(a.charAt(k++))),
        (e = Jb.indexOf(a.charAt(k++))),
        (g = Jb.indexOf(a.charAt(k++))),
        (i = Jb.indexOf(a.charAt(k++))),
        (c = (c << 2) | (e >> 4)),
        (e = ((e & 15) << 4) | (g >> 2)),
        (f = ((g & 3) << 6) | i),
        (b += String.fromCharCode(c)),
        64 != g && (b += String.fromCharCode(e)),
        64 != i && (b += String.fromCharCode(f))
    while (k < a.length)
    return b
  }
  var P = z.lang.Ju
  function H() {
    return !(!z.platform.zE && !z.platform.XY && !z.platform.Jm)
  }
  function Ua() {
    return !(!z.platform.IM && !z.platform.AM && !z.platform.cZ)
  }
  function bb() {
    return new Date().getTime()
  }
  function Mb() {
    var a = document.body.appendChild(L('div'))
    a.innerHTML = '<v:shape id="vml_tester1" adj="1" />'
    var b = a.firstChild
    if (!b.style) return t
    b.style.behavior = 'url(#default#VML)'
    b = b ? 'object' === typeof b.adj : q
    a.parentNode.removeChild(a)
    return b
  }
  function Nb() {
    return !!document.implementation.hasFeature(
      'http://www.w3.org/TR/SVG11/feature#Shape',
      '1.1'
    )
  }
  function Ob() {
    return !!L('canvas').getContext
  }
  function Pb(a) {
    return (a * Math.PI) / 180
  }
  B.iZ = (function () {
    var a = q,
      b = q,
      c = q,
      e = q,
      f = 0,
      g = 0,
      i = 0,
      k = 0
    return {
      eR: function () {
        f += 1
        a &&
          ((a = t),
          setTimeout(function () {
            Ra(5054, {
              pic: f,
            })
            a = q
            f = 0
          }, 1e4))
      },
      v1: function () {
        g += 1
        b &&
          ((b = t),
          setTimeout(function () {
            Ra(5055, {
              move: g,
            })
            b = q
            g = 0
          }, 1e4))
      },
      x1: function () {
        i += 1
        c &&
          ((c = t),
          setTimeout(function () {
            Ra(5056, {
              zoom: i,
            })
            c = q
            i = 0
          }, 1e4))
      },
      w1: function (a) {
        k += a
        e &&
          ((e = t),
          setTimeout(function () {
            Ra(5057, {
              tile: k,
            })
            e = q
            k = 0
          }, 5e3))
      },
    }
  })()
  B.iq = {
    DG: '#83a1ff',
    kq: '#808080',
  }
  function Qb(a, b, c) {
    b.Om || ((b.Om = []), (b.handle = {}))
    b.Om.push({
      filter: c,
      nm: a,
    })
    b.addEventListener ||
      (b.addEventListener = function (a, c) {
        b.attachEvent('on' + a, c)
      })
    b.handle.click ||
      (b.addEventListener(
        'click',
        function (a) {
          for (var c = a.target || a.srcElement; c != b; ) {
            Rb(b.Om, function (b, i) {
              RegExp(i.filter).test(c.getAttribute('filter')) &&
                i.nm.call(c, a, c.getAttribute('filter'))
            })
            c = c.parentNode
          }
        },
        t
      ),
      (b.handle.click = q))
  }
  function Rb(a, b) {
    for (var c = 0, e = a.length; c < e; c++) b(c, a[c])
  }
  void (function (a, b, c) {
    void (function (a, b, c) {
      function i(a) {
        if (!a.Mo) {
          for (var c = q, e = [], g = a.ZZ, k = 0; g && k < g.length; k++) {
            var m = g[k],
              n = (pa[m] = pa[m] || {})
            if (n.Mo || n == a) e.push(n.Nc)
            else {
              c = t
              if (
                !n.DW &&
                ((m = (Ma.get('alias') || {})[m] || m + '.js'), !R[m])
              ) {
                R[m] = q
                var o = b.createElement('script'),
                  p = b.getElementsByTagName('script')[0]
                o.async = q
                o.src = m
                p.parentNode.insertBefore(o, p)
              }
              n.bz = n.bz || {}
              n.bz[a.name] = a
            }
          }
          if (c) {
            a.Mo = q
            a.KK && (a.Nc = a.KK.apply(a, e))
            for (var v in a.bz) i(a.bz[v])
          }
        }
      }
      function k(a) {
        return (a || new Date()) - F
      }
      function m(a, b, c) {
        if (a) {
          'string' == typeof a && ((c = b), (b = a), (a = M))
          try {
            a == M
              ? ((N[b] = N[b] || []), N[b].unshift(c))
              : a.addEventListener
              ? a.addEventListener(b, c, t)
              : a.attachEvent && a.attachEvent('on' + b, c)
          } catch (e) {}
        }
      }
      function n(a, b, c) {
        if (a) {
          'string' == typeof a && ((c = b), (b = a), (a = M))
          try {
            if (a == M) {
              var e = N[b]
              if (e) for (var f = e.length; f--; ) e[f] === c && e.splice(f, 1)
            } else
              a.removeEventListener
                ? a.removeEventListener(b, c, t)
                : a.detachEvent && a.detachEvent('on' + b, c)
          } catch (g) {}
        }
      }
      function o(a) {
        var b = N[a],
          c = 0
        if (b) {
          for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g])
          for (g = b.length; g--; ) b[g].apply(this, e) && c++
          return c
        }
      }
      function p(a, b) {
        if (a && b) {
          var c = new Image(1, 1),
            e = [],
            f = 'img_' + +new Date(),
            g
          for (g in b) b[g] && e.push(g + '=' + encodeURIComponent(b[g]))
          M[f] = c
          c.onload = c.onerror = function () {
            M[f] = c = c.onload = c.onerror = s
            delete M[f]
          }
          c.src = a + '?' + e.join('&')
        }
      }
      function v() {
        var a = arguments,
          b = a[0]
        if (this.JK || /^(on|un|set|get|create)$/.test(b)) {
          for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++)
            c.push(a[e])
          'function' == typeof b && b.apply(this, c)
        } else this.iK.push(a)
      }
      function x(a, b) {
        var c = {},
          e
        for (e in a) a.hasOwnProperty(e) && (c[e] = a[e])
        for (e in b) b.hasOwnProperty(e) && (c[e] = b[e])
        return c
      }
      function y(a) {
        this.name = a
        this.Ps = {
          protocolParameter: {
            postUrl: s,
            protocolParameter: s,
          },
        }
        this.iK = []
        this.alog = M
      }
      function A(a) {
        a = a || 'default'
        if ('*' == a) {
          var a = [],
            b
          for (b in fa) a.push(fa[b])
          return a
        }
        ;(b = fa[a]) || (b = fa[a] = new y(a))
        return b
      }
      var E = c.alog
      if (!E || !E.Mo) {
        var C = b.all && a.attachEvent,
          F = (E && E.IE) || +new Date(),
          D =
            a.o4 ||
            (+new Date()).toString(36) +
              Math.random().toString(36).substr(2, 3),
          I = 0,
          R = {},
          M = function (a) {
            var b = arguments,
              c,
              e,
              f,
              g
            if ('define' == a || 'require' == a) {
              for (e = 1; e < b.length; e++)
                switch (typeof b[e]) {
                  case 'string':
                    c = b[e]
                    break
                  case 'object':
                    f = b[e]
                    break
                  case 'function':
                    g = b[e]
                }
              'require' == a && (c && !f && (f = [c]), (c = s))
              c = !c ? '#' + I++ : c
              e = pa[c] = pa[c] || {}
              e.Mo ||
                ((e.name = c),
                (e.ZZ = f),
                (e.KK = g),
                'define' == a && (e.DW = q),
                i(e))
            } else
              'function' == typeof a
                ? a(M)
                : ('' + a).replace(
                    /^(?:([\w$_]+)\.)?(\w+)$/,
                    function (a, c, e) {
                      b[0] = e
                      v.apply(M.bG(c), b)
                    }
                  )
          },
          N = {},
          fa = {},
          pa = {
            i2: {
              name: 'alog',
              Mo: q,
              Nc: M,
            },
          }
        y.prototype.start = y.prototype.create = function (a) {
          if (!this.JK) {
            'object' == typeof a && this.set(a)
            this.JK = new Date()
            for (this.Qs('create', this); (a = this.iK.shift()); )
              v.apply(this, a)
          }
        }
        y.prototype.send = function (a, b) {
          var c = x(
            {
              ts: k().toString(36),
              t: a,
              sid: D,
            },
            this.Ps
          )
          if ('object' == typeof b) c = x(c, b)
          else {
            var e = arguments
            switch (a) {
              case 'pageview':
                e[1] && (c.page = e[1])
                e[2] && (c.title = e[2])
                break
              case 'event':
                e[1] && (c.eventCategory = e[1])
                e[2] && (c.eventAction = e[2])
                e[3] && (c.eventLabel = e[3])
                e[4] && (c.eventValue = e[4])
                break
              case 'timing':
                e[1] && (c.timingCategory = e[1])
                e[2] && (c.timingVar = e[2])
                e[3] && (c.timingValue = e[3])
                e[4] && (c.timingLabel = e[4])
                break
              case 'exception':
                e[1] && (c.exDescription = e[1])
                e[2] && (c.exFatal = e[2])
                break
              default:
                return
            }
          }
          this.Qs('send', c)
          var f
          if ((e = this.Ps.protocolParameter)) {
            var g = {}
            for (f in c) e[f] !== s && (g[e[f] || f] = c[f])
            f = g
          } else f = c
          p(this.Ps.postUrl, f)
        }
        y.prototype.set = function (a, b) {
          if ('string' == typeof a)
            'protocolParameter' == a &&
              (b = x(
                {
                  postUrl: s,
                  protocolParameter: s,
                },
                b
              )),
              (this.Ps[a] = b)
          else if ('object' == typeof a) for (var c in a) this.set(c, a[c])
        }
        y.prototype.get = function (a, b) {
          var c = this.Ps[a]
          'function' == typeof b && b(c)
          return c
        }
        y.prototype.Qs = function (a, b) {
          return M.Qs(this.name + '.' + a, b)
        }
        y.prototype.M = function (a, b) {
          M.M(this.name + '.' + a, b)
        }
        y.prototype.ed = function (a, b) {
          M.ed(this.name + '.' + a, b)
        }
        M.name = 'alog'
        M.BO = D
        M.Mo = q
        M.timestamp = k
        M.ed = n
        M.M = m
        M.Qs = o
        M.bG = A
        M('init')
        var wa = y.prototype
        T(wa, {
          start: wa.start,
          create: wa.create,
          send: wa.send,
          set: wa.set,
          get: wa.get,
          on: wa.M,
          un: wa.ed,
          fire: wa.Qs,
        })
        var Ma = A()
        Ma.set('protocolParameter', {
          h2: s,
        })
        if (E) {
          wa = [].concat(E.wb || [], E.Wm || [])
          E.wb = E.Wm = s
          for (var sb in M) M.hasOwnProperty(sb) && (E[sb] = M[sb])
          M.wb = M.Wm = {
            push: function (a) {
              M.apply(M, a)
            },
          }
          for (E = 0; E < wa.length; E++) M.apply(M, wa[E])
        }
        c.alog = M
        C &&
          m(b, 'mouseup', function (a) {
            a = a.target || a.srcElement
            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
          })
        var Za = t
        a.onerror = function (a, b, e, f) {
          var i = q
          !b && /^script error/i.test(a) && (Za ? (i = t) : (Za = q))
          i &&
            c.alog('exception.send', 'exception', {
              Ht: a,
              HE: b,
              Dt: e,
              hs: f,
            })
          return t
        }
        c.alog('exception.on', 'catch', function (a) {
          c.alog('exception.send', 'exception', {
            Ht: a.Ht,
            HE: a.path,
            Dt: a.Dt,
            method: a.method,
            rL: 'catch',
          })
        })
      }
    })(a, b, c)
    void (function (a, b, c) {
      var i = '18_3'
      H() && (i = '18_4')
      var k = 'http://static.tieba.baidu.com'
      'https:' === a.location.protocol &&
        (k = 'https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK')
      var m = Math.random,
        k = k + '/tb/pms/img/st.gif',
        n = {
          wh: '0.1',
        },
        o = {
          wh: '0.1',
        },
        p = {
          wh: '0.1',
        },
        v = {
          wh: '0',
        }
      if (n && n.wh && m() < n.wh) {
        var x = c.alog.bG('monkey'),
          y,
          n = a.screen,
          A = b.referrer
        x.set('ver', 5)
        x.set('pid', 241)
        n && x.set('px', n.width + '*' + n.height)
        x.set('ref', A)
        c.alog('monkey.on', 'create', function () {
          y = c.alog.timestamp
          x.set('protocolParameter', {
            reports: s,
          })
        })
        c.alog('monkey.on', 'send', function (a) {
          'pageview' == a.t && (a.cmd = 'open')
          a.now && ((a.ts = y(a.now).toString(36)), (a.now = ''))
        })
        c.alog('monkey.create', {
          page: i,
          pid: '241',
          p: '18',
          dv: 6,
          postUrl: k,
          reports: {
            refer: 1,
          },
        })
        c.alog('monkey.send', 'pageview', {
          now: +new Date(),
        })
      }
      if (o && o.wh && m() < o.wh) {
        var E = t
        a.onerror = function (a, b, e, f) {
          var i = q
          !b && /^script error/i.test(a) && (E ? (i = t) : (E = q))
          i &&
            c.alog('exception.send', 'exception', {
              Ht: a,
              HE: b,
              Dt: e,
              hs: f,
            })
          return t
        }
        c.alog('exception.on', 'catch', function (a) {
          c.alog('exception.send', 'exception', {
            Ht: a.Ht,
            HE: a.path,
            Dt: a.Dt,
            method: a.method,
            rL: 'catch',
          })
        })
        c.alog('exception.create', {
          postUrl: k,
          dv: 7,
          page: i,
          pid: '170',
          p: '18',
        })
      }
      p &&
        p.wh &&
        m() < p.wh &&
        (c.alog('cus.on', 'time', function (a) {
          var b = {},
            e = t,
            f
          if ('[object Object]' === a.toString()) {
            for (var i in a)
              'page' == i
                ? (b.page = a[i])
                : ((f = parseInt(a[i])),
                  0 < f && /^z_/.test(i) && ((e = q), (b[i] = f)))
            e && c.alog('cus.send', 'time', b)
          }
        }),
        c.alog('cus.on', 'count', function (a) {
          var b = {},
            e = t
          'string' === typeof a && (a = [a])
          if (a instanceof Array)
            for (var f = 0; f < a.length; f++)
              /^z_/.test(a[f])
                ? ((e = q), (b[a[f]] = 1))
                : /^page:/.test(a[f]) && (b.page = a[f].substring(5))
          e && c.alog('cus.send', 'count', b)
        }),
        c.alog('cus.create', {
          dv: 3,
          postUrl: k,
          page: i,
          p: '18',
        }))
      if (v && v.wh && m() < v.wh) {
        var C = ['Moz', 'O', 'ms', 'Webkit'],
          F = ['-webkit-', '-moz-', '-o-', '-ms-'],
          D = function () {
            return typeof b.createElement !== 'function'
              ? b.createElement(arguments[0])
              : b.createElement.apply(b, arguments)
          },
          I = D('dpFeatureTest').style,
          R = function (a) {
            return M(a, l, l)
          },
          M = function (a, b, c) {
            var e = a.charAt(0).toUpperCase() + a.slice(1),
              f = (a + ' ' + C.join(e + ' ') + e).split(' ')
            if (typeof b === 'string' || typeof b === 'undefined')
              return N(f, b)
            f = (a + ' ' + C.join(e + ' ') + e).split(' ')
            a: {
              var a = f,
                g
              for (g in a)
                if (a[g] in b) {
                  if (c === t) {
                    b = a[g]
                    break a
                  }
                  g = b[a[g]]
                  b = typeof g === 'function' ? fnBind(g, c || b) : g
                  break a
                }
              b = t
            }
            return b
          },
          N = function (a, b) {
            var c, e, f
            e = a.length
            for (c = 0; c < e; c++) {
              f = a[c]
              ~('' + f).indexOf('-') && (f = fa(f))
              if (I[f] !== l) return b == 'pfx' ? f : q
            }
            return t
          },
          fa = function (a) {
            return a
              .replace(/([a-z])-([a-z])/g, function (a, b, c) {
                return b + c.toUpperCase()
              })
              .replace(/^-/, '')
          },
          pa = function (a, b, c) {
            if (a.indexOf('@') === 0) return atRule(a)
            a.indexOf('-') != -1 && (a = fa(a))
            return !b ? M(a, 'pfx') : M(a, b, c)
          },
          wa = function () {
            var a = D('canvas')
            return !(!a.getContext || !a.getContext('2d'))
          },
          Ma = function () {
            var a = D('div')
            return 'draggable' in a || ('ondragstart' in a && 'ondrop' in a)
          },
          sb = function () {
            try {
              localStorage.setItem('localStorage', 'localStorage')
              localStorage.removeItem('localStorage')
              return q
            } catch (a) {
              return t
            }
          },
          Za = function () {
            return 'content' in b.createElement('template')
          },
          Pa = function () {
            return 'createShadowRoot' in b.createElement('a')
          },
          oi = function () {
            return 'registerElement' in b
          },
          pi = function () {
            return 'import' in b.createElement('link')
          },
          qi = function () {
            return 'getItems' in b
          },
          ri = function () {
            return 'EventSource' in window
          },
          re = function (a, b) {
            var c = new Image()
            c.onload = function () {
              b(a, c.width > 0 && c.height > 0)
            }
            c.onerror = function () {
              b(a, t)
            }
            c.src =
              'data:image/webp;base64,' +
              {
                r4: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
                q4: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
                alpha:
                  'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
                kk: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
              }[a]
          },
          se = function (a, b) {
            return (Tb.ei['WebP-' + a] = b)
          },
          si = function () {
            return 'openDatabase' in a
          },
          ti = function () {
            return 'performance' in a && 'timing' in a.performance
          },
          ui = function () {
            return 'performance' in a && 'mark' in a.performance
          },
          vi = function () {
            return !(
              !Array.prototype ||
              !Array.prototype.every ||
              !Array.prototype.filter ||
              !Array.prototype.forEach ||
              !Array.prototype.indexOf ||
              !Array.prototype.lastIndexOf ||
              !Array.prototype.map ||
              !Array.prototype.some ||
              !Array.prototype.reduce ||
              !Array.prototype.reduceRight ||
              !Array.isArray
            )
          },
          wi = function () {
            return (
              'Promise' in a &&
              'cast' in a.lq &&
              'resolve' in a.lq &&
              'reject' in a.lq &&
              'all' in a.lq &&
              'race' in a.lq &&
              (function () {
                var b
                new a.lq(function (a) {
                  b = a
                })
                return typeof b === 'function'
              })()
            )
          },
          xi = function () {
            var b = !!a.i1,
              c = a.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
            return !!a.l1 && b && c
          },
          yi = function () {
            return 'geolocation' in navigator
          },
          zi = function () {
            var b = D('canvas'),
              c =
                'probablySupportsContext' in b
                  ? 'probablySupportsContext'
                  : 'supportsContext'
            return c in b
              ? b[c]('webgl') || b[c]('experimental-webgl')
              : 'WebGLRenderingContext' in a
          },
          Ai = function () {
            return (
              !!b.createElementNS &&
              !!b.createElementNS('http://www.w3.org/2000/svg', 'svg').A2
            )
          },
          Bi = function () {
            return !!a.s1
          },
          Ci = function () {
            return 'WebSocket' in a && a.p1.f1 === 2
          },
          Di = function () {
            return !!b.createElement('video').canPlayType
          },
          Ei = function () {
            return !!b.createElement('audio').canPlayType
          },
          Fi = function () {
            return !!(a.history && 'pushState' in a.history)
          },
          Gi = function () {
            return !(!a.g1 || !a.h1)
          },
          Hi = function () {
            return 'postMessage' in window
          },
          Ii = function () {
            return (
              !!a.webkitNotifications ||
              ('Notification' in a &&
                'permission' in a.PP &&
                'requestPermission' in a.PP)
            )
          },
          Ji = function () {
            for (
              var b = ['webkit', 'moz', 'o', 'ms'],
                c = a.requestAnimationFrame,
                f = 0;
              f < b.length && !c;
              ++f
            )
              c = a[b[f] + 'RequestAnimationFrame']
            return !!c
          },
          Ki = function () {
            return 'JSON' in a && 'parse' in JSON && 'stringify' in JSON
          },
          Li = function () {
            return !(
              !pa('exitFullscreen', b, t) && !pa('cancelFullScreen', b, t)
            )
          },
          Mi = function () {
            return !!pa('Intl', a)
          },
          Ni = function () {
            return R('flexBasis')
          },
          Oi = function () {
            return !!R('perspective')
          },
          Pi = function () {
            return R('shapeOutside')
          },
          Qi = function () {
            var a = D('div')
            a.style.cssText = F.join('filter:blur(2px); ')
            return (
              !!a.style.length && (b.documentMode === l || b.documentMode > 9)
            )
          },
          Ri = function () {
            return (
              'XMLHttpRequest' in a && 'withCredentials' in new XMLHttpRequest()
            )
          },
          Si = function () {
            return D('progress').max !== l
          },
          Ti = function () {
            return D('meter').max !== l
          },
          Ui = function () {
            return 'sendBeacon' in navigator
          },
          Vi = function () {
            return R('borderRadius')
          },
          Wi = function () {
            return R('boxShadow')
          },
          Xi = function () {
            var a = D('div').style
            a.cssText = F.join('opacity:.55;')
            return /^0.55$/.test(a.opacity)
          },
          Yi = function () {
            return N(['textShadow'], l)
          },
          Zi = function () {
            return R('animationName')
          },
          $i = function () {
            return R('transition')
          },
          aj = function () {
            return (
              navigator.userAgent.indexOf('Android 2.') === -1 && R('transform')
            )
          },
          Tb = {
            ei: {},
            pa: function (a, b, c) {
              this.ei[a] = b.apply(this, [].slice.call(arguments, 2))
            },
            Ed: function (a, b) {
              a.apply(this, [].slice.call(arguments, 1))
            },
            f_: function () {
              this.pa('bdrs', Vi)
              this.pa('bxsd', Wi)
              this.pa('opat', Xi)
              this.pa('txsd', Yi)
              this.pa('anim', Zi)
              this.pa('trsi', $i)
              this.pa('trfm', aj)
              this.pa('flex', Ni)
              this.pa('3dtr', Oi)
              this.pa('shpe', Pi)
              this.pa('fltr', Qi)
              this.pa('cavs', wa)
              this.pa('dgdp', Ma)
              this.pa('locs', sb)
              this.pa('wctem', Za)
              this.pa('wcsdd', Pa)
              this.pa('wccse', oi)
              this.pa('wchti', pi)
              this.Ed(re, 'lossy', se)
              this.Ed(re, 'lossless', se)
              this.Ed(re, 'alpha', se)
              this.Ed(re, 'animation', se)
              this.pa('wsql', si)
              this.pa('natm', ti)
              this.pa('ustm', ui)
              this.pa('arra', vi)
              this.pa('prms', wi)
              this.pa('xhr2', xi)
              this.pa('wbgl', zi)
              this.pa('geol', yi)
              this.pa('svg', Ai)
              this.pa('work', Bi)
              this.pa('wbsk', Ci)
              this.pa('vido', Di)
              this.pa('audo', Ei)
              this.pa('hsty', Fi)
              this.pa('file', Gi)
              this.pa('psmg', Hi)
              this.pa('wknf', Ii)
              this.pa('rqaf', Ji)
              this.pa('json', Ki)
              this.pa('flsc', Li)
              this.pa('i18n', Mi)
              this.pa('cors', Ri)
              this.pa('prog', Si)
              this.pa('metr', Ti)
              this.pa('becn', Ui)
              this.pa('mcrd', qi)
              this.pa('esrc', ri)
            },
          },
          x = c.alog.bG('feature')
        x.M('commit', function () {
          Tb.f_()
          var a = setInterval(function () {
            if (
              'WebP-lossy' in Tb.ei &&
              'WebP-lossless' in Tb.ei &&
              'WebP-alpha' in Tb.ei &&
              'WebP-animation' in Tb.ei
            ) {
              for (var b in Tb.ei) Tb.ei[b] = Tb.ei[b] ? 'y' : 'n'
              x.send('feature', Tb.ei)
              clearInterval(a)
            }
          }, 500)
        })
        c.alog('feature.create', {
          P2: 4,
          R4: k,
          page: i,
          wb: '18',
        })
        c.alog('feature.fire', 'commit')
      }
    })(a, b, c)
  })(window, document, B)
  B.Fn = B.alog || u()
  B.alog('cus.fire', 'count', 'z_loadscriptcount')
  'https:' === location.protocol && B.alog('cus.fire', 'count', 'z_httpscount')
  function Sb(a) {
    var b = window.TILE_VERSION,
      c = '20170927'
    b &&
      b.ditu &&
      ((b = b.ditu), b[a] && b[a].updateDate && (c = b[a].updateDate))
    return c
  }
  function oa(a, b) {
    if (/^http/.test(a)) return //修改  屏蔽ak验证，若调用外部资源直接返回

    if (b) {
      var c = (1e5 * Math.random()).toFixed(0)
      B._rd['_cbk' + c] = function (a) {
        b && b(a)
        delete B._rd['_cbk' + c]
      }
      a += '&callback=BMap._rd._cbk' + c
    }
    var e = L('script', {
      type: 'text/javascript',
    })
    e.charset = 'utf-8'
    e.src = a
    e.addEventListener
      ? e.addEventListener(
          'load',
          function (a) {
            a = a.target
            a.parentNode.removeChild(a)
          },
          t
        )
      : e.attachEvent &&
        e.attachEvent('onreadystatechange', function () {
          var a = window.event.srcElement
          a &&
            ('loaded' == a.readyState || 'complete' == a.readyState) &&
            a.parentNode.removeChild(a)
        })
    setTimeout(function () {
      document.getElementsByTagName('head')[0].appendChild(e)
      e = s
    }, 1)
  }
  var Ub = {
    //修改，这里是所有的模块，用到时自动加载（在线），离线的话要先下载下来放到本地，如http://api0.map.bdimg.com/getmodules?v=3.0&mod=模块1,模块2
    //模块命名格式是map_dbwcej，直接拼接起来
    map: 'dbwcej',
    common: 'wkrfcz',
    style: 'fkofpc',
    tile: 'ok3b3m',
    vectordrawlib: '4pdipq',
    newvectordrawlib: 'wbnuee',
    groundoverlay: 'ekozhc',
    pointcollection: 'feabuc',
    marker: '00uyqy',
    symbol: 'cq3a5n',
    canvablepath: 'dia5aw',
    vmlcontext: 'phwtog',
    markeranimation: 'rfnmxu',
    poly: 'r52vuo',
    draw: 'jb4osz',
    drawbysvg: 'vxyn51',
    drawbyvml: 'whxmqq',
    drawbycanvas: 'ufwkvb',
    infowindow: 'wtflsn',
    oppc: '10riq5',
    opmb: '2c1ejz',
    menu: '152mop',
    control: 'hlzh1t',
    navictrl: 'h32mnb',
    geoctrl: 'xprajs',
    copyrightctrl: 'gmc2ps',
    citylistcontrol: 'ms3ahy',
    scommon: 'oadc3d',
    local: 'k0pcpi',
    route: 'v4yyam',
    othersearch: 'pwg4ey',
    mapclick: 'e40viw',
    buslinesearch: 'vxmb31',
    hotspot: 'vuwxs4',
    autocomplete: 'punr3o',
    coordtrans: 'lmf5kv',
    coordtransutils: 'd33qf1',
    convertor: 'd0ze2w',
    clayer: '0hwrfx',
    pservice: 'j5tlrp',
    pcommon: 'yqek4k',
    panorama: 'jbqj24',
    panoramaflash: 'dm4xq2',
    vector: '2hrruc',
  }
  z.Wy = (function () {
    function a(a) {
      return e && !!c[b + a + '_' + Ub[a]]
    }
    var b = 'BMap_',
      c = window.localStorage,
      e = 'localStorage' in window && c !== s && c !== l
    return {
      ZY: e,
      set: function (a, g) {
        if (e) {
          for (var i = b + a + '_', k = c.length, m; k--; )
            (m = c.key(k)), -1 < m.indexOf(i) && c.removeItem(m)
          try {
            c.setItem(b + a + '_' + Ub[a], g)
          } catch (n) {
            c.clear()
          }
        }
      },
      get: function (f) {
        return e && a(f) ? c.getItem(b + f + '_' + Ub[f]) : t
      },
      uK: a,
    }
  })()
  function K() {}
  z.object.extend(K, {
    Cj: {
      EG: -1,
      cQ: 0,
      cq: 1,
    },
    GL: function () {
      var a = 'canvablepath',
        b = B.gV ? 'newvectordrawlib' : 'vectordrawlib'
      if (!H() || !Ob()) Nb() || (Mb() ? (a = 'vmlcontext') : Ob())
      return {
        tile: [b, 'style'],
        control: [],
        marker: ['symbol'],
        symbol: ['canvablepath', 'common'],
        canvablepath: 'canvablepath' === a ? [] : [a],
        vmlcontext: [],
        style: [],
        poly: ['marker', 'drawbycanvas', 'drawbysvg', 'drawbyvml'],
        drawbysvg: ['draw'],
        drawbyvml: ['draw'],
        drawbycanvas: ['draw'],
        infowindow: ['common', 'marker'],
        menu: [],
        oppc: [],
        opmb: [],
        scommon: [],
        local: ['scommon'],
        route: ['scommon'],
        othersearch: ['scommon'],
        autocomplete: ['scommon'],
        citylistcontrol: ['autocomplete'],
        mapclick: ['scommon'],
        buslinesearch: ['route'],
        hotspot: [],
        coordtransutils: ['coordtrans'],
        convertor: [],
        clayer: ['tile'],
        pservice: [],
        pcommon: ['style', 'pservice'],
        panorama: ['pcommon'],
        panoramaflash: ['pcommon'],
      }
    },
    U4: {},
    wG: {
      tQ: B.ka + 'getmodules?v=3.0',
      WU: 5e3,
    },
    MC: t,
    Rd: {
      xl: {},
      Hn: [],
      cw: [],
    },
    load: function (a, b, c) {
      var e = this.kb(a)
      if (e.Me == this.Cj.cq) c && b()
      else {
        if (e.Me == this.Cj.EG) {
          this.AK(a)
          this.SN(a)
          var f = this
          f.MC == t &&
            ((f.MC = q),
            setTimeout(function () {
              for (var a = [], b = 0, c = f.Rd.Hn.length; b < c; b++) {
                var e = f.Rd.Hn[b],
                  n = ''
                ia.Wy.uK(e)
                  ? (n = ia.Wy.get(e))
                  : ((n = ''), a.push(e + '_' + Ub[e]))
                f.Rd.cw.push({
                  jN: e,
                  ZE: n,
                })
              }
              f.MC = t
              f.Rd.Hn.length = 0
              //0 == a.length ? f.kL() : oa(f.wG.tQ + "&mod=" + a.join(","))
              // 修改 加载本地模块文件，在 modules 目录下
              console.log(a) //打印所需模块
              if (a.length > 0) {
                for (i = 0; i < a.length; i++) {
                  mf = bmapcfg.home + 'modules/' + a[i] + '.js'
                  oa(mf)
                  console.log('加载模块文件:' + mf) //IE error
                }
              } else {
                f.kL()
              }
              //就到这
            }, 1))
          e.Me = this.Cj.cQ
        }
        e.Yu.push(b)
      }
    },
    AK: function (a) {
      if (a && this.GL()[a])
        for (var a = this.GL()[a], b = 0; b < a.length; b++)
          this.AK(a[b]), this.Rd.xl[a[b]] || this.SN(a[b])
    },
    SN: function (a) {
      for (var b = 0; b < this.Rd.Hn.length; b++) if (this.Rd.Hn[b] == a) return
      this.Rd.Hn.push(a)
    },
    e_: function (a, b) {
      var c = this.kb(a)
      try {
        eval(b)
      } catch (e) {
        return
      }
      c.Me = this.Cj.cq
      for (var f = 0, g = c.Yu.length; f < g; f++) c.Yu[f]()
      c.Yu.length = 0
    },
    uK: function (a, b) {
      var c = this
      c.timeout = setTimeout(function () {
        c.Rd.xl[a].Me != c.Cj.cq
          ? (c.remove(a), c.load(a, b))
          : clearTimeout(c.timeout)
      }, c.wG.WU)
    },
    kb: function (a) {
      this.Rd.xl[a] ||
        ((this.Rd.xl[a] = {}),
        (this.Rd.xl[a].Me = this.Cj.EG),
        (this.Rd.xl[a].Yu = []))
      return this.Rd.xl[a]
    },
    remove: function (a) {
      delete this.kb(a)
    },
    WV: function (a, b) {
      for (var c = this.Rd.cw, e = q, f = 0, g = c.length; f < g; f++)
        '' == c[f].ZE && (c[f].jN == a ? (c[f].ZE = b) : (e = t))
      e && this.kL()
    },
    kL: function () {
      for (var a = this.Rd.cw, b = 0, c = a.length; b < c; b++)
        this.e_(a[b].jN, a[b].ZE)
      this.Rd.cw.length = 0
    },
  })
  function Q(a, b) {
    this.x = a || 0
    this.y = b || 0
    this.x = this.x
    this.y = this.y
  }
  Q.prototype.pb = function (a) {
    return a && a.x == this.x && a.y == this.y
  }
  function O(a, b) {
    this.width = a || 0
    this.height = b || 0
  }
  O.prototype.pb = function (a) {
    return a && this.width == a.width && this.height == a.height
  }
  function ib(a, b) {
    a &&
      ((this.Lb = a),
      (this.aa = 'spot' + ib.aa++),
      (b = b || {}),
      (this.Wg = b.text || ''),
      (this.Jv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5]),
      (this.JJ = b.userData || s),
      (this.Lh = b.minZoom || s),
      (this.Hf = b.maxZoom || s))
  }
  ib.aa = 0
  z.extend(ib.prototype, {
    na: function (a) {
      this.Lh == s && (this.Lh = a.K.gc)
      this.Hf == s && (this.Hf = a.K.Yb)
    },
    sa: function (a) {
      a instanceof J && (this.Lb = a)
    },
    ga: w('Lb'),
    cu: ba('Wg'),
    eE: w('Wg'),
    setUserData: ba('JJ'),
    getUserData: w('JJ'),
  })
  function Vb() {
    this.B = s
    this.Mb = 'control'
    this.Qa = this.nK = q
  }
  z.lang.ta(Vb, z.lang.Ca, 'Control')
  z.extend(Vb.prototype, {
    initialize: function (a) {
      this.B = a
      if (this.C) return a.Wa.appendChild(this.C), this.C
    },
    He: function (a) {
      !this.C &&
        this.initialize &&
        Xa(this.initialize) &&
        (this.C = this.initialize(a))
      this.j = this.j || {
        Cg: t,
      }
      this.IB()
      this.Nr()
      this.C && (this.C.mr = this)
    },
    IB: function () {
      var a = this.C
      if (a) {
        var b = a.style
        b.position = 'absolute'
        b.zIndex = this.Hz || '10'
        b.MozUserSelect = 'none'
        b.WebkitTextSizeAdjust = 'none'
        this.j.Cg || z.D.Ua(a, 'BMap_noprint')
        H() || z.M(a, 'contextmenu', na)
      }
    },
    remove: function () {
      this.B = s
      this.C &&
        (this.C.parentNode && this.C.parentNode.removeChild(this.C),
        (this.C = this.C.mr = s))
    },
    Aa: function () {
      this.C = Ab(this.B.Wa, "<div unselectable='on'></div>")
      this.Qa == t && z.D.U(this.C)
      return this.C
    },
    Nr: function () {
      this.uc(this.j.anchor)
    },
    uc: function (a) {
      if (this.j2 || !Wa(a) || isNaN(a) || a < Wb || 3 < a)
        a = this.defaultAnchor
      this.j = this.j || {
        Cg: t,
      }
      this.j.za = this.j.za || this.defaultOffset
      var b = this.j.anchor
      this.j.anchor = a
      if (this.C) {
        var c = this.C,
          e = this.j.za.width,
          f = this.j.za.height
        c.style.left = c.style.top = c.style.right = c.style.bottom = 'auto'
        switch (a) {
          case Wb:
            c.style.top = f + 'px'
            c.style.left = e + 'px'
            break
          case Xb:
            c.style.top = f + 'px'
            c.style.right = e + 'px'
            break
          case Yb:
            c.style.bottom = f + 'px'
            c.style.left = e + 'px'
            break
          case 3:
            ;(c.style.bottom = f + 'px'), (c.style.right = e + 'px')
        }
        c = ['TL', 'TR', 'BL', 'BR']
        z.D.Pb(this.C, 'anchor' + c[b])
        z.D.Ua(this.C, 'anchor' + c[a])
      }
    },
    HD: function () {
      return this.j.anchor
    },
    getContainer: w('C'),
    Ze: function (a) {
      a instanceof O &&
        ((this.j = this.j || {
          Cg: t,
        }),
        (this.j.za = new O(a.width, a.height)),
        this.C && this.uc(this.j.anchor))
    },
    Sf: function () {
      return this.j.za
    },
    Jd: w('C'),
    show: function () {
      this.Qa != q && ((this.Qa = q), this.C && z.D.show(this.C))
    },
    U: function () {
      this.Qa != t && ((this.Qa = t), this.C && z.D.U(this.C))
    },
    isPrintable: function () {
      return !!this.j.Cg
    },
    jh: function () {
      return !this.C && !this.B ? t : !!this.Qa
    },
  })
  var Wb = 0,
    Xb = 1,
    Yb = 2
  function jb(a) {
    Vb.call(this)
    a = a || {}
    this.j = {
      Cg: t,
      OF: a.showZoomInfo || q,
      anchor: a.anchor,
      za: a.offset,
      type: a.type,
      $W: a.enableGeolocation || t,
    }
    this.defaultAnchor = H() ? 3 : Wb
    this.defaultOffset = new O(10, 10)
    this.uc(a.anchor)
    this.hn(a.type)
    this.De()
  }
  z.lang.ta(jb, Vb, 'NavigationControl')
  z.extend(jb.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    hn: function (a) {
      this.j.type = Wa(a) && 0 <= a && 3 >= a ? a : 0
    },
    ip: function () {
      return this.j.type
    },
    De: function () {
      var a = this
      K.load('navictrl', function () {
        a.zf()
      })
    },
  })
  function Zb(a) {
    Vb.call(this)
    a = a || {}
    this.j = {
      anchor: a.anchor || Yb,
      za: a.offset || new O(10, 30),
      O_: a.showAddressBar !== t,
      U2: a.enableAutoLocation || t,
      bN: a.locationIcon || s,
    }
    var b = this
    this.Hz = 1200
    b.I0 = []
    this.pe = []
    K.load('geoctrl', function () {
      ;(function e() {
        if (0 !== b.pe.length) {
          var a = b.pe.shift()
          b[a.method].apply(b, a.arguments)
          e()
        }
      })()
      b.sQ()
    })
    Ra(Ia)
  }
  z.lang.ta(Zb, Vb, 'GeolocationControl')
  z.extend(Zb.prototype, {
    location: function () {
      this.pe.push({
        method: 'location',
        arguments: arguments,
      })
    },
    getAddressComponent: ca(s),
  })
  function $b(a) {
    Vb.call(this)
    a = a || {}
    this.j = {
      Cg: t,
      anchor: a.anchor,
      za: a.offset,
    }
    this.cc = []
    this.defaultAnchor = Yb
    this.defaultOffset = new O(5, 2)
    this.uc(a.anchor)
    this.nK = t
    this.De()
  }
  z.lang.ta($b, Vb, 'CopyrightControl')
  z.object.extend($b.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    Bw: function (a) {
      if (a && Wa(a.id) && !isNaN(a.id)) {
        var b = {
            bounds: s,
            content: '',
          },
          c
        for (c in a) b[c] = a[c]
        if ((a = this.pm(a.id))) for (var e in b) a[e] = b[e]
        else this.cc.push(b)
      }
    },
    pm: function (a) {
      for (var b = 0, c = this.cc.length; b < c; b++)
        if (this.cc[b].id == a) return this.cc[b]
    },
    PD: w('cc'),
    qF: function (a) {
      for (var b = 0, c = this.cc.length; b < c; b++)
        this.cc[b].id == a &&
          ((r = this.cc.splice(b, 1)), b--, (c = this.cc.length))
    },
    De: function () {
      var a = this
      K.load('copyrightctrl', function () {
        a.zf()
      })
    },
  })
  function lb(a) {
    Vb.call(this)
    a = a || {}
    this.j = {
      Cg: t,
      size: a.size || new O(150, 150),
      padding: 5,
      Xa: a.isOpen === q ? q : t,
      $0: 4,
      za: a.offset,
      anchor: a.anchor,
    }
    this.defaultAnchor = 3
    this.defaultOffset = new O(0, 0)
    this.Bq = this.Cq = 13
    this.uc(a.anchor)
    this.Ce(this.j.size)
    this.De()
  }
  z.lang.ta(lb, Vb, 'OverviewMapControl')
  z.extend(lb.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    uc: function (a) {
      Vb.prototype.uc.call(this, a)
    },
    se: function () {
      this.se.mo = q
      this.j.Xa = !this.j.Xa
      this.C || (this.se.mo = t)
    },
    Ce: function (a) {
      a instanceof O || (a = new O(150, 150))
      a.width = 0 < a.width ? a.width : 150
      a.height = 0 < a.height ? a.height : 150
      this.j.size = a
    },
    cb: function () {
      return this.j.size
    },
    Xa: function () {
      return this.j.Xa
    },
    De: function () {
      var a = this
      K.load('control', function () {
        a.zf()
      })
    },
  })
  function ac(a) {
    Vb.call(this)
    a = a || {}
    this.defaultAnchor = Wb
    this.TV = a.canCheckSize === t ? t : q
    this.$i = ''
    this.defaultOffset = new O(10, 10)
    this.onChangeBefore = []
    this.onChangeAfter = []
    this.onChangeSuccess = []
    this.j = {
      Cg: t,
      za: a.offset || this.defaultOffset,
      anchor: a.anchor || this.defaultAnchor,
      expand: !!a.expand,
    }
    a.onChangeBefore &&
      Xa(a.onChangeBefore) &&
      this.onChangeBefore.push(a.onChangeBefore)
    a.onChangeAfter &&
      Xa(a.onChangeAfter) &&
      this.onChangeAfter.push(a.onChangeAfter)
    a.onChangeSuccess &&
      Xa(a.onChangeSuccess) &&
      this.onChangeSuccess.push(a.onChangeSuccess)
    this.uc(a.anchor)
    this.De()
  }
  z.lang.ta(ac, Vb, 'CityListControl')
  z.object.extend(ac.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    De: function () {
      var a = this
      K.load(
        'citylistcontrol',
        function () {
          a.zf()
        },
        q
      )
    },
  })
  function kb(a) {
    Vb.call(this)
    a = a || {}
    this.j = {
      Cg: t,
      color: 'black',
      fd: 'metric',
      za: a.offset,
    }
    this.defaultAnchor = Yb
    this.defaultOffset = new O(81, 18)
    this.uc(a.anchor)
    this.Uh = {
      metric: {
        name: 'metric',
        CK: 1,
        rM: 1e3,
        bP: '\u7c73',
        cP: '\u516c\u91cc',
      },
      us: {
        name: 'us',
        CK: 3.2808,
        rM: 5280,
        bP: '\u82f1\u5c3a',
        cP: '\u82f1\u91cc',
      },
    }
    this.Uh[this.j.fd] || (this.j.fd = 'metric')
    this.gJ = s
    this.GI = {}
    this.De()
  }
  z.lang.ta(kb, Vb, 'ScaleControl')
  z.object.extend(kb.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    Pk: function (a) {
      this.j.color = a + ''
    },
    n3: function () {
      return this.j.color
    },
    LF: function (a) {
      this.j.fd = (this.Uh[a] && this.Uh[a].name) || this.j.fd
    },
    sY: function () {
      return this.j.fd
    },
    De: function () {
      var a = this
      K.load('control', function () {
        a.zf()
      })
    },
  })
  var bc = 0
  function mb(a) {
    Vb.call(this)
    a = a || {}
    this.defaultAnchor = Xb
    this.defaultOffset = new O(10, 10)
    this.j = {
      Cg: t,
      mh: [La, Ya, Sa, Qa],
      BW: ['B_DIMENSIONAL_MAP', 'B_SATELLITE_MAP', 'B_NORMAL_MAP'],
      type: a.type || bc,
      za: a.offset || this.defaultOffset,
      dX: q,
    }
    this.uc(a.anchor)
    '[object Array]' == Object.prototype.toString.call(a.mapTypes) &&
      (this.j.mh = a.mapTypes.slice(0))
    this.De()
  }
  z.lang.ta(mb, Vb, 'MapTypeControl')
  z.object.extend(mb.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    Xy: function (a) {
      this.B.ao = a
    },
    De: function () {
      var a = this
      K.load(
        'control',
        function () {
          a.zf()
        },
        q
      )
    },
  })
  function cc(a) {
    Vb.call(this)
    a = a || {}
    this.j = {
      Cg: t,
      za: a.offset,
      anchor: a.anchor,
    }
    this.Ni = t
    this.hw = s
    this.QI = new dc({
      of: 'api',
    })
    this.RI = new ec(s, {
      of: 'api',
    })
    this.defaultAnchor = Xb
    this.defaultOffset = new O(10, 10)
    this.uc(a.anchor)
    this.De()
    Ra(va)
  }
  z.lang.ta(cc, Vb, 'PanoramaControl')
  z.extend(cc.prototype, {
    initialize: function (a) {
      this.B = a
      return this.C
    },
    De: function () {
      var a = this
      K.load('control', function () {
        a.zf()
      })
    },
  })
  function fc(a) {
    z.lang.Ca.call(this)
    this.j = {
      Wa: s,
      cursor: 'default',
    }
    this.j = z.extend(this.j, a)
    this.Mb = 'contextmenu'
    this.B = s
    this.xa = []
    this.Kf = []
    this.Fe = []
    this.fx = this.qs = s
    this.Kh = t
    var b = this
    K.load('menu', function () {
      b.ib()
    })
  }
  z.lang.ta(fc, z.lang.Ca, 'ContextMenu')
  z.object.extend(fc.prototype, {
    na: function (a, b) {
      this.B = a
      this.Cl = b || s
    },
    remove: function () {
      this.B = this.Cl = s
    },
    Dw: function (a) {
      if (a && !('menuitem' != a.Mb || '' == a.Wg || 0 >= a.Vi)) {
        for (var b = 0, c = this.xa.length; b < c; b++)
          if (this.xa[b] === a) return
        this.xa.push(a)
        this.Kf.push(a)
      }
    },
    removeItem: function (a) {
      if (a && 'menuitem' == a.Mb) {
        for (var b = 0, c = this.xa.length; b < c; b++)
          this.xa[b] === a && (this.xa[b].remove(), this.xa.splice(b, 1), c--)
        b = 0
        for (c = this.Kf.length; b < c; b++)
          this.Kf[b] === a && (this.Kf[b].remove(), this.Kf.splice(b, 1), c--)
      }
    },
    bC: function () {
      this.xa.push({
        Mb: 'divider',
        Lj: this.Fe.length,
      })
      this.Fe.push({
        D: s,
      })
    },
    sF: function (a) {
      if (this.Fe[a]) {
        for (var b = 0, c = this.xa.length; b < c; b++)
          this.xa[b] &&
            'divider' == this.xa[b].Mb &&
            this.xa[b].Lj == a &&
            (this.xa.splice(b, 1), c--),
            this.xa[b] &&
              'divider' == this.xa[b].Mb &&
              this.xa[b].Lj > a &&
              this.xa[b].Lj--
        this.Fe.splice(a, 1)
      }
    },
    Jd: w('C'),
    show: function () {
      this.Kh != q && (this.Kh = q)
    },
    U: function () {
      this.Kh != t && (this.Kh = t)
    },
    t_: function (a) {
      a && (this.j.cursor = a)
    },
    getItem: function (a) {
      return this.Kf[a]
    },
  })
  var gc = G.qa + 'menu_zoom_in.png',
    hc = G.qa + 'menu_zoom_out.png'
  function ic(a, b, c) {
    if (a && Xa(b)) {
      z.lang.Ca.call(this)
      this.j = {
        width: 100,
        id: '',
        Dm: '',
      }
      c = c || {}
      this.j.width = 1 * c.width ? c.width : 100
      this.j.id = c.id ? c.id : ''
      this.j.Dm = c.iconUrl ? c.iconUrl : ''
      this.Wg = a + ''
      this.Kz = b
      this.B = s
      this.Mb = 'menuitem'
      this.Ur = this.yv = this.C = this.Eh = s
      this.Ih = q
      var e = this
      K.load('menu', function () {
        e.ib()
      })
    }
  }
  z.lang.ta(ic, z.lang.Ca, 'MenuItem')
  z.object.extend(ic.prototype, {
    na: function (a, b) {
      this.B = a
      this.Eh = b
    },
    remove: function () {
      this.B = this.Eh = s
    },
    cu: function (a) {
      a && (this.Wg = a + '')
    },
    Rb: function (a) {
      a && (this.j.Dm = a)
    },
    Jd: w('C'),
    enable: function () {
      this.Ih = q
    },
    disable: function () {
      this.Ih = t
    },
  })
  function fb(a, b) {
    a && !b && (b = a)
    this.Ie = this.Xd = this.Ne = this.Zd = this.Pl = this.Al = s
    a &&
      ((this.Pl = new J(a.lng, a.lat)),
      (this.Al = new J(b.lng, b.lat)),
      (this.Ne = a.lng),
      (this.Zd = a.lat),
      (this.Ie = b.lng),
      (this.Xd = b.lat))
  }
  z.object.extend(fb.prototype, {
    tj: function () {
      return !this.Pl || !this.Al
    },
    pb: function (a) {
      return !(a instanceof fb) || this.tj()
        ? t
        : this.Ve().pb(a.Ve()) && this.Rf().pb(a.Rf())
    },
    Ve: w('Pl'),
    Rf: w('Al'),
    kW: function (a) {
      return !(a instanceof fb) || this.tj() || a.tj()
        ? t
        : a.Ne > this.Ne && a.Ie < this.Ie && a.Zd > this.Zd && a.Xd < this.Xd
    },
    Ka: function () {
      return this.tj()
        ? s
        : new J((this.Ne + this.Ie) / 2, (this.Zd + this.Xd) / 2)
    },
    ot: function (a) {
      if (
        !(a instanceof fb) ||
        Math.max(a.Ne, a.Ie) < Math.min(this.Ne, this.Ie) ||
        Math.min(a.Ne, a.Ie) > Math.max(this.Ne, this.Ie) ||
        Math.max(a.Zd, a.Xd) < Math.min(this.Zd, this.Xd) ||
        Math.min(a.Zd, a.Xd) > Math.max(this.Zd, this.Xd)
      )
        return s
      var b = Math.max(this.Ne, a.Ne),
        c = Math.min(this.Ie, a.Ie),
        e = Math.max(this.Zd, a.Zd),
        a = Math.min(this.Xd, a.Xd)
      return new fb(new J(b, e), new J(c, a))
    },
    js: function (a) {
      return !(a instanceof J) || this.tj()
        ? t
        : a.lng >= this.Ne &&
            a.lng <= this.Ie &&
            a.lat >= this.Zd &&
            a.lat <= this.Xd
    },
    extend: function (a) {
      if (a instanceof J) {
        var b = a.lng,
          a = a.lat
        this.Pl || (this.Pl = new J(0, 0))
        this.Al || (this.Al = new J(0, 0))
        if (!this.Ne || this.Ne > b) this.Pl.lng = this.Ne = b
        if (!this.Ie || this.Ie < b) this.Al.lng = this.Ie = b
        if (!this.Zd || this.Zd > a) this.Pl.lat = this.Zd = a
        if (!this.Xd || this.Xd < a) this.Al.lat = this.Xd = a
      }
    },
    YF: function () {
      return this.tj()
        ? new J(0, 0)
        : new J(Math.abs(this.Ie - this.Ne), Math.abs(this.Xd - this.Zd))
    },
  })
  function J(a, b) {
    isNaN(a) && ((a = Lb(a)), (a = isNaN(a) ? 0 : a))
    $a(a) && (a = parseFloat(a))
    isNaN(b) && ((b = Lb(b)), (b = isNaN(b) ? 0 : b))
    $a(b) && (b = parseFloat(b))
    this.lng = a
    this.lat = b
  }
  J.yM = function (a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
  }
  J.prototype.pb = function (a) {
    return a && this.lat == a.lat && this.lng == a.lng
  }
  function jc() {}
  jc.prototype.kh = function () {
    aa('lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0')
  }
  jc.prototype.xj = function () {
    aa('pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0')
  }
  function kc() {}
  var eb = {
    EK: function (a, b, c) {
      K.load(
        'coordtransutils',
        function () {
          eb.AV(a, b, c)
        },
        q
      )
    },
    DK: function (a, b, c) {
      K.load(
        'coordtransutils',
        function () {
          eb.zV(a, b, c)
        },
        q
      )
    },
  }
  function lc() {
    this.Pa = []
    var a = this
    K.load('convertor', function () {
      a.qQ()
    })
  }
  z.ta(lc, z.lang.Ca, 'Convertor')
  z.extend(lc.prototype, {
    translate: function (a, b, c, e) {
      this.Pa.push({
        method: 'translate',
        arguments: [a, b, c, e],
      })
    },
  })
  T(lc.prototype, {
    translate: lc.prototype.translate,
  })
  function S() {}
  S.prototype = new jc()
  z.extend(S, {
    GP: 6370996.81,
    IG: [1.289059486e7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    Nu: [75, 60, 45, 30, 15, 0],
    MP: [
      [
        1.410526172116255e-8, 8.98305509648872e-6, -1.9939833816331,
        200.9824383106796, -187.2403703815547, 91.6087516669843,
        -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812e7,
      ],
      [
        -7.435856389565537e-9, 8.983055097726239e-6, -0.78625201886289,
        96.32687599759846, -1.85204757529826, -59.36935905485877,
        47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486e7,
      ],
      [
        -3.030883460898826e-8, 8.98305509983578e-6, 0.30071316287616,
        59.74293618442277, 7.357984074871, -25.38371002664745,
        13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37,
      ],
      [
        -1.981981304930552e-8, 8.983055099779535e-6, 0.03278182852591,
        40.31678527705744, 0.65659298677277, -4.44255534477492,
        0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06,
      ],
      [
        3.09191371068437e-9, 8.983055096812155e-6, 6.995724062e-5,
        23.10934304144901, -2.3663490511e-4, -0.6321817810242,
        -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4,
      ],
      [
        2.890871144776878e-9, 8.983055095805407e-6, -3.068298e-8,
        7.47137025468032, -3.53937994e-6, -0.02145144861037, -1.234426596e-5,
        1.0322952773e-4, -3.23890364e-6, 826088.5,
      ],
    ],
    FG: [
      [
        -0.0015702102444, 111320.7020616939, 1704480524535203,
        -10338987376042340, 26112667856603880, -35149669176653700,
        26595700718403920, -10725012454188240, 1800819912950474, 82.5,
      ],
      [
        8.277824516172526e-4, 111320.7020463578, 6.477955746671607e8,
        -4.082003173641316e9, 1.077490566351142e10, -1.517187553151559e10,
        1.205306533862167e10, -5.124939663577472e9, 9.133119359512032e8, 67.5,
      ],
      [
        0.00337398766765, 111320.7020202162, 4481351.045890365,
        -2.339375119931662e7, 7.968221547186455e7, -1.159649932797253e8,
        9.723671115602145e7, -4.366194633752821e7, 8477230.501135234, 52.5,
      ],
      [
        0.00220636496208, 111320.7020209128, 51751.86112841131,
        3796837.749470245, 992013.7397791013, -1221952.21711287,
        1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5,
      ],
      [
        -3.441963504368392e-4, 111320.7020576856, 278.2353980772752,
        2485758.690035394, 6070.750963243378, 54821.18345352118,
        9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5,
      ],
      [
        -3.218135878613132e-4, 111320.7020701615, 0.00369383431289,
        823725.6402795718, 0.46104986909093, 2351.343141331292,
        1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45,
      ],
    ],
    t3: function (a, b) {
      if (!a || !b) return 0
      var c,
        e,
        a = this.Tb(a)
      if (!a) return 0
      c = this.Xk(a.lng)
      e = this.Xk(a.lat)
      b = this.Tb(b)
      return !b ? 0 : this.pf(c, this.Xk(b.lng), e, this.Xk(b.lat))
    },
    $o: function (a, b) {
      if (!a || !b) return 0
      a.lng = this.WD(a.lng, -180, 180)
      a.lat = this.aE(a.lat, -74, 74)
      b.lng = this.WD(b.lng, -180, 180)
      b.lat = this.aE(b.lat, -74, 74)
      return this.pf(
        this.Xk(a.lng),
        this.Xk(b.lng),
        this.Xk(a.lat),
        this.Xk(b.lat)
      )
    },
    Tb: function (a) {
      if (a === s || a === l) return new J(0, 0)
      var b, c
      b = new J(Math.abs(a.lng), Math.abs(a.lat))
      for (var e = 0; e < this.IG.length; e++)
        if (b.lat >= this.IG[e]) {
          c = this.MP[e]
          break
        }
      a = this.FK(a, c)
      return (a = new J(a.lng.toFixed(6), a.lat.toFixed(6)))
    },
    Eb: function (a) {
      if (
        a === s ||
        a === l ||
        180 < a.lng ||
        -180 > a.lng ||
        90 < a.lat ||
        -90 > a.lat
      )
        return new J(0, 0)
      var b, c
      a.lng = this.WD(a.lng, -180, 180)
      a.lat = this.aE(a.lat, -74, 74)
      b = new J(a.lng, a.lat)
      for (var e = 0; e < this.Nu.length; e++)
        if (b.lat >= this.Nu[e]) {
          c = this.FG[e]
          break
        }
      if (!c)
        for (e = 0; e < this.Nu.length; e++)
          if (b.lat <= -this.Nu[e]) {
            c = this.FG[e]
            break
          }
      a = this.FK(a, c)
      return (a = new J(a.lng.toFixed(2), a.lat.toFixed(2)))
    },
    FK: function (a, b) {
      if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng),
          e = Math.abs(a.lat) / b[9],
          e =
            b[2] +
            b[3] * e +
            b[4] * e * e +
            b[5] * e * e * e +
            b[6] * e * e * e * e +
            b[7] * e * e * e * e * e +
            b[8] * e * e * e * e * e * e,
          c = c * (0 > a.lng ? -1 : 1),
          e = e * (0 > a.lat ? -1 : 1)
        return new J(c, e)
      }
    },
    pf: function (a, b, c, e) {
      return (
        this.GP *
        Math.acos(
          Math.sin(c) * Math.sin(e) +
            Math.cos(c) * Math.cos(e) * Math.cos(b - a)
        )
      )
    },
    Xk: function (a) {
      return (Math.PI * a) / 180
    },
    B5: function (a) {
      return (180 * a) / Math.PI
    },
    aE: function (a, b, c) {
      b != s && (a = Math.max(a, b))
      c != s && (a = Math.min(a, c))
      return a
    },
    WD: function (a, b, c) {
      for (; a > c; ) a -= c - b
      for (; a < b; ) a += c - b
      return a
    },
  })
  z.extend(S.prototype, {
    vj: function (a) {
      return S.Eb(a)
    },
    kh: function (a) {
      a = S.Eb(a)
      return new Q(a.lng, a.lat)
    },
    nh: function (a) {
      return S.Tb(a)
    },
    xj: function (a) {
      a = new J(a.x, a.y)
      return S.Tb(a)
    },
    $b: function (a, b, c, e, f) {
      if (a)
        return (
          (a = this.vj(a, f)),
          (b = this.dc(b)),
          new Q(
            Math.round((a.lng - c.lng) / b + e.width / 2),
            Math.round((c.lat - a.lat) / b + e.height / 2)
          )
        )
    },
    xb: function (a, b, c, e, f) {
      if (a)
        return (
          (b = this.dc(b)),
          this.nh(
            new J(
              c.lng + b * (a.x - e.width / 2),
              c.lat - b * (a.y - e.height / 2)
            ),
            f
          )
        )
    },
    dc: function (a) {
      return Math.pow(2, 18 - a)
    },
  })
  function hb() {
    this.$i = 'bj'
  }
  hb.prototype = new S()
  z.extend(hb.prototype, {
    vj: function (a, b) {
      return this.bR(b, S.Eb(a))
    },
    nh: function (a, b) {
      return S.Tb(this.cR(b, a))
    },
    lngLatToPointFor3D: function (a, b) {
      var c = this,
        e = S.Eb(a)
      K.load(
        'coordtrans',
        function () {
          var a = kc.ZD(c.$i || 'bj', e),
            a = new Q(a.x, a.y)
          b && b(a)
        },
        q
      )
    },
    pointToLngLatFor3D: function (a, b) {
      var c = this,
        e = new J(a.x, a.y)
      K.load(
        'coordtrans',
        function () {
          var a = kc.XD(c.$i || 'bj', e),
            a = new J(a.lng, a.lat),
            a = S.Tb(a)
          b && b(a)
        },
        q
      )
    },
    bR: function (a, b) {
      if (K.kb('coordtrans').Me == K.Cj.cq) {
        var c = kc.ZD(a || 'bj', b)
        return new J(c.x, c.y)
      }
      K.load('coordtrans', u())
      return new J(0, 0)
    },
    cR: function (a, b) {
      if (K.kb('coordtrans').Me == K.Cj.cq) {
        var c = kc.XD(a || 'bj', b)
        return new J(c.lng, c.lat)
      }
      K.load('coordtrans', u())
      return new J(0, 0)
    },
    dc: function (a) {
      return Math.pow(2, 20 - a)
    },
  })
  function mc() {
    this.Mb = 'overlay'
  }
  z.lang.ta(mc, z.lang.Ca, 'Overlay')
  mc.Ck = function (a) {
    a *= 1
    return !a ? 0 : (-1e5 * a) << 1
  }
  z.extend(mc.prototype, {
    He: function (a) {
      if (!this.V && Xa(this.initialize) && (this.V = this.initialize(a)))
        this.V.style.WebkitUserSelect = 'none'
      this.draw()
    },
    initialize: function () {
      aa('initialize\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    draw: function () {
      aa('draw\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    remove: function () {
      this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V)
      this.V = s
      this.dispatchEvent(new P('onremove'))
    },
    U: function () {
      this.V && z.D.U(this.V)
    },
    show: function () {
      this.V && z.D.show(this.V)
    },
    jh: function () {
      return !this.V ||
        'none' == this.V.style.display ||
        'hidden' == this.V.style.visibility
        ? t
        : q
    },
  })
  B.Ye(function (a) {
    function b(a, b) {
      var c = L('div'),
        i = c.style
      i.position = 'absolute'
      i.top = i.left = i.width = i.height = '0'
      i.zIndex = b
      a.appendChild(c)
      return c
    }
    var c = a.R
    c.rd = a.rd = b(a.platform, 200)
    a.Yd.BD = b(c.rd, 800)
    a.Yd.RE = b(c.rd, 700)
    a.Yd.sL = b(c.rd, 600)
    a.Yd.KE = b(c.rd, 500)
    a.Yd.fN = b(c.rd, 400)
    a.Yd.gN = b(c.rd, 300)
    a.Yd.nP = b(c.rd, 201)
    a.Yd.Et = b(c.rd, 200)
  })
  function gb() {
    z.lang.Ca.call(this)
    mc.call(this)
    this.map = s
    this.Qa = q
    this.zb = s
    this.vH = 0
  }
  z.lang.ta(gb, mc, 'OverlayInternal')
  z.extend(gb.prototype, {
    initialize: function (a) {
      this.map = a
      z.lang.Ca.call(this, this.aa)
      return s
    },
    Dx: w('map'),
    draw: u(),
    Ej: u(),
    remove: function () {
      this.map = s
      z.lang.hx(this.aa)
      mc.prototype.remove.call(this)
    },
    U: function () {
      this.Qa !== t && (this.Qa = t)
    },
    show: function () {
      this.Qa !== q && (this.Qa = q)
    },
    jh: function () {
      return !this.V ? t : !!this.Qa
    },
    La: w('V'),
    lO: function (a) {
      var a = a || {},
        b
      for (b in a) this.z[b] = a[b]
    },
    Sp: ba('zIndex'),
    gj: function () {
      this.z.gj = q
    },
    MW: function () {
      this.z.gj = t
    },
    yo: ba('lg'),
    Cp: function () {
      this.lg = s
    },
  })
  function nc() {
    this.map = s
    this.ya = {}
    this.Ee = []
  }
  B.Ye(function (a) {
    var b = new nc()
    b.map = a
    a.ya = b.ya
    a.Ee = b.Ee
    a.addEventListener('load', function (a) {
      b.draw(a)
    })
    a.addEventListener('moveend', function (a) {
      b.draw(a)
    })
    ;(z.ca.ia && 8 > z.ca.ia) || 'BackCompat' === document.compatMode
      ? a.addEventListener('zoomend', function (a) {
          setTimeout(function () {
            b.draw(a)
          }, 20)
        })
      : a.addEventListener('zoomend', function (a) {
          b.draw(a)
        })
    a.addEventListener('maptypechange', function (a) {
      b.draw(a)
    })
    a.addEventListener('addoverlay', function (a) {
      a = a.target
      if (a instanceof gb) b.ya[a.aa] || (b.ya[a.aa] = a)
      else {
        for (var e = t, f = 0, g = b.Ee.length; f < g; f++)
          if (b.Ee[f] === a) {
            e = q
            break
          }
        e || b.Ee.push(a)
      }
    })
    a.addEventListener('removeoverlay', function (a) {
      a = a.target
      if (a instanceof gb) delete b.ya[a.aa]
      else
        for (var e = 0, f = b.Ee.length; e < f; e++)
          if (b.Ee[e] === a) {
            b.Ee.splice(e, 1)
            break
          }
    })
    a.addEventListener('clearoverlays', function () {
      this.Yc()
      for (var a in b.ya) b.ya[a].z.gj && (b.ya[a].remove(), delete b.ya[a])
      a = 0
      for (var e = b.Ee.length; a < e; a++)
        b.Ee[a].enableMassClear !== t &&
          (b.Ee[a].remove(), (b.Ee[a] = s), b.Ee.splice(a, 1), a--, e--)
    })
    a.addEventListener('infowindowopen', function () {
      var a = this.zb
      a && (z.D.U(a.Ac), z.D.U(a.ac))
    })
    a.addEventListener('movestart', function () {
      this.hh() && this.hh().mJ()
    })
    a.addEventListener('moveend', function () {
      this.hh() && this.hh().cJ()
    })
  })
  nc.prototype.draw = function (a) {
    if (B.hq) {
      var b = B.hq.Ws(this.map)
      'canvas' === b.Mb && b.canvas && b.XQ(b.canvas.getContext('2d'))
    }
    for (var c in this.ya) this.ya[c].draw(a)
    z.mc.Fb(this.Ee, function (a) {
      a.draw()
    })
    this.map.R.qb && this.map.R.qb.sa()
    B.hq && b.IF()
  }
  function oc(a) {
    gb.call(this)
    a = a || {}
    this.z = {
      strokeColor: a.strokeColor || '#3a6bdb',
      rc: a.strokeWeight || 5,
      td: a.strokeOpacity || 0.65,
      strokeStyle: a.strokeStyle || 'solid',
      gj: a.enableMassClear === t ? t : q,
      zk: s,
      um: s,
      mf: a.enableEditing === q ? q : t,
      kN: 5,
      G0: t,
      jf: a.enableClicking === t ? t : q,
      ji: a.icons && 0 < a.icons.length ? a.icons : s,
    }
    0 >= this.z.rc && (this.z.rc = 5)
    if (0 > this.z.td || 1 < this.z.td) this.z.td = 0.65
    if (0 > this.z.tg || 1 < this.z.tg) this.z.tg = 0.65
    'solid' != this.z.strokeStyle &&
      'dashed' != this.z.strokeStyle &&
      (this.z.strokeStyle = 'solid')
    this.V = s
    this.Vu = new fb(0, 0)
    this.gf = []
    this.tc = []
    this.Ra = {}
  }
  z.lang.ta(oc, gb, 'Graph')
  oc.yx = function (a) {
    var b = []
    if (!a) return b
    $a(a) &&
      z.mc.Fb(a.split(';'), function (a) {
        a = a.split(',')
        b.push(new J(a[0], a[1]))
      })
    '[object Array]' == Object.prototype.toString.apply(a) &&
      0 < a.length &&
      (b = a)
    return b
  }
  oc.eF = [0.09, 0.005, 1.0e-4, 1.0e-5]
  z.extend(oc.prototype, {
    initialize: function (a) {
      this.map = a
      return s
    },
    draw: u(),
    Mr: function (a) {
      this.gf.length = 0
      this.ja = oc.yx(a).slice(0)
      this.Bh()
    },
    ke: function (a) {
      this.Mr(a)
    },
    Bh: function () {
      if (this.ja) {
        var a = this
        a.Vu = new fb()
        z.mc.Fb(this.ja, function (b) {
          a.Vu.extend(b)
        })
      }
    },
    Ue: w('ja'),
    gn: function (a, b) {
      b &&
        this.ja[a] &&
        ((this.gf.length = 0), (this.ja[a] = new J(b.lng, b.lat)), this.Bh())
    },
    setStrokeColor: function (a) {
      this.z.strokeColor = a
    },
    jY: function () {
      return this.z.strokeColor
    },
    Rp: function (a) {
      0 < a && (this.z.rc = a)
    },
    WL: function () {
      return this.z.rc
    },
    Pp: function (a) {
      a == l || 1 < a || 0 > a || (this.z.td = a)
    },
    kY: function () {
      return this.z.td
    },
    Xt: function (a) {
      1 < a || 0 > a || (this.z.tg = a)
    },
    HX: function () {
      return this.z.tg
    },
    Qp: function (a) {
      ;('solid' != a && 'dashed' != a) || (this.z.strokeStyle = a)
    },
    VL: function () {
      return this.z.strokeStyle
    },
    setFillColor: function (a) {
      this.z.fillColor = a || ''
    },
    GX: function () {
      return this.z.fillColor
    },
    ve: w('Vu'),
    remove: function () {
      this.map && this.map.removeEventListener('onmousemove', this.vv)
      gb.prototype.remove.call(this)
      this.gf.length = 0
    },
    mf: function () {
      if (!(2 > this.ja.length)) {
        this.z.mf = q
        var a = this
        K.load(
          'poly',
          function () {
            a.Ul()
          },
          q
        )
      }
    },
    LW: function () {
      this.z.mf = t
      var a = this
      K.load(
        'poly',
        function () {
          a.nk()
        },
        q
      )
    },
    DX: function () {
      return this.z.mf
    },
  })
  function pc(a) {
    gb.call(this)
    this.V = this.map = s
    this.z = {
      width: 0,
      height: 0,
      za: new O(0, 0),
      opacity: 1,
      background: 'transparent',
      ey: 1,
      SM: '#000',
      hZ: 'solid',
      point: s,
    }
    this.lO(a)
    this.point = this.z.point
  }
  z.lang.ta(pc, gb, 'Division')
  z.extend(pc.prototype, {
    Ej: function () {
      var a = this.z,
        b = this.content,
        c = ['<div class="BMap_Division" style="position:absolute;']
      c.push('width:' + a.width + 'px;display:block;')
      c.push('overflow:hidden;')
      'none' != a.borderColor &&
        c.push('border:' + a.ey + 'px ' + a.hZ + ' ' + a.SM + ';')
      c.push(
        'opacity:' + a.opacity + '; filter:(opacity=' + 100 * a.opacity + ')'
      )
      c.push('background:' + a.background + ';')
      c.push('z-index:60;">')
      c.push(b)
      c.push('</div>')
      this.V = Ab(this.map.Tf().RE, c.join(''))
    },
    initialize: function (a) {
      this.map = a
      this.Ej()
      this.V &&
        z.M(this.V, H() ? 'touchstart' : 'mousedown', function (a) {
          ma(a)
        })
      return this.V
    },
    draw: function () {
      var a = this.map.Xe(this.z.point)
      this.z.za = new O(
        -Math.round(this.z.width / 2) - Math.round(this.z.ey),
        -Math.round(this.z.height / 2) - Math.round(this.z.ey)
      )
      this.V.style.left = a.x + this.z.za.width + 'px'
      this.V.style.top = a.y + this.z.za.height + 'px'
    },
    ga: function () {
      return this.z.point
    },
    L1: function () {
      return this.map.$b(this.ga())
    },
    sa: function (a) {
      this.z.point = a
      this.draw()
    },
    u_: function (a, b) {
      this.z.width = Math.round(a)
      this.z.height = Math.round(b)
      this.V &&
        ((this.V.style.width = this.z.width + 'px'),
        (this.V.style.height = this.z.height + 'px'),
        this.draw())
    },
  })
  function qc(a, b, c) {
    a &&
      b &&
      ((this.imageUrl = a),
      (this.size = b),
      (a = new O(Math.floor(b.width / 2), Math.floor(b.height / 2))),
      (c = c || {}),
      (a = c.anchor || a),
      (b = c.imageOffset || new O(0, 0)),
      (this.imageSize = c.imageSize),
      (this.anchor = a),
      (this.imageOffset = b),
      (this.infoWindowAnchor = c.infoWindowAnchor || this.anchor),
      (this.printImageUrl = c.printImageUrl || ''))
  }
  z.extend(qc.prototype, {
    mO: function (a) {
      a && (this.imageUrl = a)
    },
    K_: function (a) {
      a && (this.printImageUrl = a)
    },
    Ce: function (a) {
      a && (this.size = new O(a.width, a.height))
    },
    uc: function (a) {
      a && (this.anchor = new O(a.width, a.height))
    },
    Yt: function (a) {
      a && (this.imageOffset = new O(a.width, a.height))
    },
    z_: function (a) {
      a && (this.infoWindowAnchor = new O(a.width, a.height))
    },
    w_: function (a) {
      a && (this.imageSize = new O(a.width, a.height))
    },
    toString: ca('Icon'),
  })
  function rc(a, b) {
    if (a) {
      b = b || {}
      this.style = {
        anchor: b.anchor || new O(0, 0),
        fillColor: b.fillColor || '#000',
        tg: b.fillOpacity || 0,
        scale: b.scale || 1,
        rotation: b.rotation || 0,
        strokeColor: b.strokeColor || '#000',
        td: b.strokeOpacity || 1,
        rc: b.strokeWeight,
      }
      this.Mb = 'number' === typeof a ? a : 'UserDefined'
      this.Di = this.style.anchor
      this.rr = new O(0, 0)
      this.anchor = s
      this.vB = a
      var c = this
      K.load(
        'symbol',
        function () {
          c.Mn()
        },
        q
      )
    }
  }
  z.extend(rc.prototype, {
    setPath: ba('vB'),
    setAnchor: function (a) {
      this.Di = this.style.anchor = a
    },
    setRotation: function (a) {
      this.style.rotation = a
    },
    setScale: function (a) {
      this.style.scale = a
    },
    setStrokeWeight: function (a) {
      this.style.rc = a
    },
    setStrokeColor: function (a) {
      a = z.is.AC(a, this.style.td)
      this.style.strokeColor = a
    },
    setStrokeOpacity: function (a) {
      this.style.td = a
    },
    setFillOpacity: function (a) {
      this.style.tg = a
    },
    setFillColor: function (a) {
      this.style.fillColor = a
    },
  })
  function sc(a, b, c, e) {
    a &&
      ((this.Ov = {}),
      (this.qL = e ? !!e : t),
      (this.Vc = []),
      (this.c0 = a instanceof rc ? a : s),
      (this.WI = b === l ? q : !!(b.indexOf('%') + 1)),
      (this.Zj = isNaN(parseFloat(b))
        ? 1
        : this.WI
        ? parseFloat(b) / 100
        : parseFloat(b)),
      (this.XI = !!(c.indexOf('%') + 1)),
      (this.repeat =
        c != l ? (this.XI ? parseFloat(c) / 100 : parseFloat(c)) : 0))
  }
  function tc(a, b) {
    z.lang.Ca.call(this)
    this.content = a
    this.map = s
    b = b || {}
    this.z = {
      width: b.width || 0,
      height: b.height || 0,
      maxWidth: b.maxWidth || 730,
      za: b.offset || new O(0, 0),
      title: b.title || '',
      SE: b.maxContent || '',
      dh: b.enableMaximize || t,
      Ls: b.enableAutoPan === t ? t : q,
      lD: b.enableCloseOnClick === t ? t : q,
      margin: b.margin || [10, 10, 40, 10],
      vC: b.collisions || [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
      GY: t,
      AZ: b.onClosing || ca(q),
      hL: t,
      qD: b.enableParano === q ? q : t,
      message: b.message,
      sD: b.enableSearchTool === q ? q : t,
      Ox: b.headerContent || '',
      mD: b.enableContentScroll || t,
    }
    if (
      0 != this.z.width &&
      (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)
    )
      this.z.width = 730
    if (
      0 != this.z.height &&
      (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)
    )
      this.z.height = 650
    if (
      0 != this.z.maxWidth &&
      (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)
    )
      this.z.maxWidth = 730
    this.de = t
    this.yi = G.qa
    this.fb = s
    var c = this
    K.load('infowindow', function () {
      c.ib()
    })
  }
  z.lang.ta(tc, z.lang.Ca, 'InfoWindow')
  z.extend(tc.prototype, {
    setWidth: function (a) {
       (!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
        (this.z.width = a))
    },
    setHeight: function (a) {
      (!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)),
        (this.z.height = a))
    },
    qO: function (a) {
       (!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
        (this.z.maxWidth = a))
    },
    Ec: function (a) {
      this.z.title = a
    },
    getTitle: function () {
      return this.z.title
    },
    dd: ba('content'),
    xk: w('content'),
    $t: function (a) {
      this.z.SE = a + ''
    },
    je: u(),
    Ls: function () {
      this.z.Ls = q
    },
    disableAutoPan: function () {
      this.z.Ls = t
    },
    enableCloseOnClick: function () {
      this.z.lD = q
    },
    disableCloseOnClick: function () {
      this.z.lD = t
    },
    dh: function () {
      this.z.dh = q
    },
    kx: function () {
      this.z.dh = t
    },
    show: function () {
      this.Qa = q
    },
    U: function () {
      this.Qa = t
    },
    close: function () {
      this.U()
    },
    hy: function () {
      this.de = q
    },
    restore: function () {
      this.de = t
    },
    jh: function () {
      return this.Xa()
    },
    Xa: ca(t),
    ga: function () {
      if (this.fb && this.fb.ga) return this.fb.ga()
    },
    Sf: function () {
      return this.z.za
    },
  })
  Ka.prototype.pc = function (a, b) {
    if (a instanceof tc && b instanceof J) {
      var c = this.R
      c.Nm
        ? c.Nm.sa(b)
        : ((c.Nm = new U(b, {
            icon: new qc(G.qa + 'blank.gif', {
              width: 1,
              height: 1,
            }),
            offset: new O(0, 0),
            clickable: t,
          })),
          (c.Nm.bS = 1))
      this.Ga(c.Nm)
      c.Nm.pc(a)
    }
  }
  Ka.prototype.Yc = function () {
    var a = this.R.qb || this.R.rl
    a && a.fb && a.fb.Yc()
  }
  gb.prototype.pc = function (a) {
    this.map &&
      (this.map.Yc(),
      (a.Qa = q),
      (this.map.R.rl = a),
      (a.fb = this),
      z.lang.Ca.call(a, a.aa))
  }
  gb.prototype.Yc = function () {
    this.map &&
      this.map.R.rl &&
      ((this.map.R.rl.Qa = t), z.lang.hx(this.map.R.rl.aa), (this.map.R.rl = s))
  }
  function uc(a, b) {
    gb.call(this)
    this.content = a
    this.V = this.map = s
    b = b || {}
    this.z = {
      width: 0,
      za: b.offset || new O(0, 0),
      Wp: {
        backgroundColor: '#fff',
        border: '1px solid #f00',
        padding: '1px',
        whiteSpace: 'nowrap',
        font: '12px ' + G.fontFamily,
        zIndex: '80',
        MozUserSelect: 'none',
      },
      position: b.position || s,
      gj: b.enableMassClear === t ? t : q,
      jf: q,
    }
    0 > this.z.width && (this.z.width = 0)
    Hb(b.enableClicking) && (this.z.jf = b.enableClicking)
    this.point = this.z.position
    var c = this
    K.load('marker', function () {
      c.ib()
    })
  }
  z.lang.ta(uc, gb, 'Label')
  z.extend(uc.prototype, {
    ga: function () {
      return this.Dv ? this.Dv.ga() : this.point
    },
    sa: function (a) {
      a instanceof J &&
        !this.Ex() &&
        (this.point = this.z.position = new J(a.lng, a.lat))
    },
    dd: ba('content'),
    HF: function (a) {
      0 <= a && 1 >= a && (this.z.opacity = a)
    },
    Ze: function (a) {
      a instanceof O && (this.z.za = new O(a.width, a.height))
    },
    Sf: function () {
      return this.z.za
    },
    Md: function (a) {
      a = a || {}
      this.z.Wp = z.extend(this.z.Wp, a)
    },
    ti: function (a) {
      return this.Md(a)
    },
    Ec: function (a) {
      this.z.title = a || ''
    },
    getTitle: function () {
      return this.z.title
    },
    pO: function (a) {
      this.point = (this.Dv = a)
        ? (this.z.position = a.ga())
        : (this.z.position = s)
    },
    Ex: function () {
      return this.Dv || s
    },
    xk: w('content'),
  })
  function vc(a, b) {
    if (0 !== arguments.length) {
      gb.apply(this, arguments)
      b = b || {}
      this.z = {
        bb: a,
        opacity: b.opacity || 1,
        Gm: b.Gm || '',
        Bs: b.displayOnMinLevel || 1,
        gj: b.enableMassClear === t ? t : q,
        As: b.displayOnMaxLevel || 19,
        X_: b.stretch || t,
      }
      var c = this
      K.load('groundoverlay', function () {
        c.ib()
      })
    }
  }
  z.lang.ta(vc, gb, 'GroundOverlay')
  z.extend(vc.prototype, {
    setBounds: function (a) {
      this.z.bb = a
    },
    getBounds: function () {
      return this.z.bb
    },
    setOpacity: function (a) {
      this.z.opacity = a
    },
    getOpacity: function () {
      return this.z.opacity
    },
    setImageURL: function (a) {
      this.z.Gm = a
    },
    getImageURL: function () {
      return this.z.Gm
    },
    setDisplayOnMinLevel: function (a) {
      this.z.Bs = a
    },
    getDisplayOnMinLevel: function () {
      return this.z.Bs
    },
    setDisplayOnMaxLevel: function (a) {
      this.z.As = a
    },
    getDisplayOnMaxLevel: function () {
      return this.z.As
    },
  })
  var wc = 3,
    xc = 4
  function yc() {
    var a = document.createElement('canvas')
    return !(!a.getContext || !a.getContext('2d'))
  }
  function zc(a, b) {
    var c = this
    yc() &&
      (a === l && aa(Error('\u6ca1\u6709\u4f20\u5165points\u6570\u636e')),
      '[object Array]' !== Object.prototype.toString.call(a) &&
        aa(Error('points\u6570\u636e\u4e0d\u662f\u6570\u7ec4')),
      (b = b || {}),
      gb.apply(c, arguments),
      (c.ea = {
        ja: a,
      }),
      (c.z = {
        shape: b.shape || wc,
        size: b.size || xc,
        color: b.color || '#fa937e',
        gj: q,
      }),
      (this.sB = []),
      (this.pe = []),
      K.load('pointcollection', function () {
        for (var a = 0, b; (b = c.sB[a]); a++) c[b.method].apply(c, b.arguments)
        for (a = 0; (b = c.pe[a]); a++) c[b.method].apply(c, b.arguments)
      }))
  }
  z.lang.ta(zc, gb, 'PointCollection')
  z.extend(zc.prototype, {
    initialize: function (a) {
      this.sB &&
        this.sB.push({
          method: 'initialize',
          arguments: arguments,
        })
    },
    setPoints: function (a) {
      this.pe &&
        this.pe.push({
          method: 'setPoints',
          arguments: arguments,
        })
    },
    setStyles: function (a) {
      this.pe &&
        this.pe.push({
          method: 'setStyles',
          arguments: arguments,
        })
    },
    clear: function () {
      this.pe &&
        this.pe.push({
          method: 'clear',
          arguments: arguments,
        })
    },
    remove: function () {
      this.pe &&
        this.pe.push({
          method: 'remove',
          arguments: arguments,
        })
    },
  })
  var Ac = new qc(G.qa + 'marker_red_sprite.png', new O(19, 25), {
      anchor: new O(10, 25),
      infoWindowAnchor: new O(10, 0),
    }),
    Bc = new qc(G.qa + 'marker_red_sprite.png', new O(20, 11), {
      anchor: new O(6, 11),
      imageOffset: new O(-19, -13),
    })
  function U(a, b) {
    gb.call(this)
    b = b || {}
    this.point = a
    this.yq = this.map = s
    this.z = {
      za: b.offset || new O(0, 0),
      rj: b.icon || Ac,
      Sk: Bc,
      title: b.title || '',
      label: s,
      lK: b.baseZIndex || 0,
      jf: q,
      X5: t,
      EE: t,
      gj: b.enableMassClear === t ? t : q,
      Wb: t,
      UN: b.raiseOnDrag === q ? q : t,
      aO: t,
      Hd: b.draggingCursor || G.Hd,
      rotation: b.rotation || 0,
    }
    b.icon && !b.shadow && (this.z.Sk = s)
    b.enableDragging && (this.z.Wb = b.enableDragging)
    Hb(b.enableClicking) && (this.z.jf = b.enableClicking)
    var c = this
    K.load('marker', function () {
      c.ib()
    })
  }
  U.Qu = mc.Ck(-90) + 1e6
  U.AG = U.Qu + 1e6
  z.lang.ta(U, gb, 'Marker')
  z.extend(U.prototype, {
    Rb: function (a) {
      if (a instanceof qc || a instanceof rc) this.z.rj = a
    },
    ap: function () {
      return this.z.rj
    },
    Oy: function (a) {
      a instanceof qc && (this.z.Sk = a)
    },
    getShadow: function () {
      return this.z.Sk
    },
    dn: function (a) {
      this.z.label = a || s
    },
    VD: function () {
      return this.z.label
    },
    Wb: function () {
      this.z.Wb = q
    },
    TC: function () {
      this.z.Wb = t
    },
    ga: w('point'),
    sa: function (a) {
      a instanceof J && (this.point = new J(a.lng, a.lat))
    },
    ui: function (a, b) {
      this.z.EE = !!a
      a && (this.XG = b || 0)
    },
    Ec: function (a) {
      this.z.title = a + ''
    },
    getTitle: function () {
      return this.z.title
    },
    Ze: function (a) {
      a instanceof O && (this.z.za = a)
    },
    Sf: function () {
      return this.z.za
    },
    bn: ba('yq'),
    Op: function (a) {
      this.z.rotation = a
    },
    TL: function () {
      return this.z.rotation
    },
  })
  function Cc(a) {
    this.options = a || {}
    this.GZ = this.options.paneName || 'labelPane'
    this.zIndex = this.options.zIndex || 0
  }
  z.lang.ta(Cc, gb, 'CanvasLayer')
  Cc.prototype.initialize = function (a) {
    this.B = a
    var b = (this.canvas = document.createElement('canvas')),
      c = this.canvas.getContext('2d')
    b.style.cssText =
      'position:absolute;left:0;top:0;z-index:' + this.zIndex + ';'
    Dc(this)
    Ec(c)
    a.getPanes()[this.GZ].appendChild(b)
    var e = this
    a.addEventListener('resize', function () {
      Dc(e)
      e.ib()
    })
    return this.canvas
  }
  function Dc(a) {
    var b = a.B.cb(),
      a = a.canvas
    a.width = b.width
    a.height = b.height
    a.style.width = a.width + 'px'
    a.style.height = a.height + 'px'
  }
  function Ec(a) {
    var b =
        (window.devicePixelRatio || 1) /
        (a.CV || a.T5 || a.x4 || a.y4 || a.B4 || a.CV || 1),
      c = a.canvas.width,
      e = a.canvas.height
    a.canvas.width = c * b
    a.canvas.height = e * b
    a.canvas.style.width = c + 'px'
    a.canvas.style.height = e + 'px'
    a.scale(b, b)
  }
  Cc.prototype.draw = function () {
    var a = this,
      b = arguments
    clearTimeout(a.j0)
    a.j0 = setTimeout(function () {
      a.ib.apply(a, b)
    }, 15)
  }
  da = Cc.prototype
  da.ib = function () {
    var a = this.B
    this.canvas.style.left = -a.offsetX + 'px'
    this.canvas.style.top = -a.offsetY + 'px'
    this.dispatchEvent('draw')
    this.options.update && this.options.update.apply(this, arguments)
  }
  da.La = w('canvas')
  da.show = function () {
    this.canvas || this.B.Ga(this)
    this.canvas.style.display = 'block'
  }
  da.U = function () {
    this.canvas.style.display = 'none'
  }
  da.Sp = function (a) {
    this.canvas.style.zIndex = a
  }
  da.Ck = w('zIndex')
  function Fc(a, b) {
    oc.call(this, b)
    b = b || {}
    this.z.tg = b.fillOpacity ? b.fillOpacity : 0.65
    this.z.fillColor =
      '' == b.fillColor ? '' : b.fillColor ? b.fillColor : '#fff'
    this.ke(a)
    var c = this
    K.load('poly', function () {
      c.ib()
    })
  }
  z.lang.ta(Fc, oc, 'Polygon')
  z.extend(Fc.prototype, {
    ke: function (a, b) {
      this.vo = oc.yx(a).slice(0)
      var c = oc.yx(a).slice(0)
      1 < c.length && c.push(new J(c[0].lng, c[0].lat))
      oc.prototype.ke.call(this, c, b)
    },
    gn: function (a, b) {
      this.vo[a] &&
        ((this.vo[a] = new J(b.lng, b.lat)),
        (this.ja[a] = new J(b.lng, b.lat)),
        0 == a &&
          !this.ja[0].pb(this.ja[this.ja.length - 1]) &&
          (this.ja[this.ja.length - 1] = new J(b.lng, b.lat)),
        this.Bh())
    },
    Ue: function () {
      var a = this.vo
      0 == a.length && (a = this.ja)
      return a
    },
  })
  function Gc(a, b) {
    oc.call(this, b)
    this.Mr(a)
    var c = this
    K.load('poly', function () {
      c.ib()
    })
  }
  z.lang.ta(Gc, oc, 'Polyline')
  function Hc(a, b, c) {
    this.point = a
    this.wa = Math.abs(b)
    Fc.call(this, [], c)
  }
  Hc.eF = [0.01, 1.0e-4, 1.0e-5, 4.0e-6]
  z.lang.ta(Hc, Fc, 'Circle')
  z.extend(Hc.prototype, {
    initialize: function (a) {
      this.map = a
      this.ja = this.qv(this.point, this.wa)
      this.Bh()
      return s
    },
    Ka: w('point'),
    Zf: function (a) {
      a && (this.point = a)
    },
    RL: w('wa'),
    xf: function (a) {
      this.wa = Math.abs(a)
    },
    qv: function (a, b) {
      if (!a || !b || !this.map) return []
      for (
        var c = [],
          e = b / 6378800,
          f = (Math.PI / 180) * a.lat,
          g = (Math.PI / 180) * a.lng,
          i = 0;
        360 > i;
        i += 9
      ) {
        var k = (Math.PI / 180) * i,
          m = Math.asin(
            Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)
          ),
          k = new J(
            (((g -
              Math.atan2(
                Math.sin(k) * Math.sin(e) * Math.cos(f),
                Math.cos(e) - Math.sin(f) * Math.sin(m)
              ) +
              Math.PI) %
              (2 * Math.PI)) -
              Math.PI) *
              (180 / Math.PI),
            m * (180 / Math.PI)
          )
        c.push(k)
      }
      e = c[0]
      c.push(new J(e.lng, e.lat))
      return c
    },
  })
  var Ic = {}
  function Jc(a) {
    this.map = a
    this.Mm = []
    this.$f = []
    this.Fg = []
    this.OV = 300
    this.oF = 0
    this.yg = {}
    this.Zi = {}
    this.ph = 0
    this.yE = q
    this.MK = {}
    this.eo = this.Kj(1)
    this.od = this.Kj(2)
    this.Bl = this.Kj(3)
    this.Ki = this.Kj(4)
    a.platform.appendChild(this.eo)
    a.platform.appendChild(this.od)
    a.platform.appendChild(this.Bl)
    a.platform.appendChild(this.Ki)
    var b = 256 * Math.pow(2, 15),
      c = 3 * b,
      a = S.Eb(new J(180, 0)).lng,
      c = c - a,
      b = -3 * b,
      e = S.Eb(new J(-180, 0)).lng
    this.yI = a
    this.zI = e
    this.ZA = c + (e - b)
    this.AI = a - e
  }
  B.Ye(function (a) {
    var b = new Jc(a)
    b.na()
    a.Va = b
  })
  z.extend(Jc.prototype, {
    na: function () {
      var a = this,
        b = a.map
      b.addEventListener('loadcode', function () {
        a.up()
      })
      b.addEventListener('addtilelayer', function (b) {
        a.Oe(b)
      })
      b.addEventListener('removetilelayer', function (b) {
        a.Yf(b)
      })
      b.addEventListener('setmaptype', function (b) {
        a.Dg(b)
      })
      b.addEventListener('zoomstartcode', function (b) {
        a.Mc(b)
      })
      b.addEventListener('setcustomstyles', function (b) {
        a.Zt(b.target)
        a.Wf(q)
      })
      b.addEventListener('initindoorlayer', function (b) {
        a.tE(b)
      })
    },
    up: function () {
      var a = this
      if (z.ca.ia)
        try {
          document.execCommand('BackgroundImageCache', t, q)
        } catch (b) {}
      this.loaded || a.Ux()
      a.Wf()
      this.loaded ||
        ((this.loaded = q),
        K.load('tile', function () {
          a.rQ()
        }))
    },
    tE: function (a) {
      this.zu = new Kc(this)
      this.zu.Oe(new Lc(this.map, this.zu, a.vf))
    },
    Ux: function () {
      for (var a = this.map.oa().ff, b = 0; b < a.length; b++) {
        var c = new Mc()
        z.extend(c, a[b])
        this.Mm.push(c)
        c.na(this.map, this.eo)
      }
      this.Zt()
    },
    Kj: function (a) {
      var b = L('div')
      b.style.position = 'absolute'
      b.style.overflow = 'visible'
      b.style.left = b.style.top = '0'
      b.style.zIndex = a
      return b
    },
    Af: function () {
      this.ph--
      var a = this
      this.yE &&
        (this.map.dispatchEvent(new P('onfirsttileloaded')), (this.yE = t))
      0 == this.ph &&
        (this.Hi && (clearTimeout(this.Hi), (this.Hi = s)),
        (this.Hi = setTimeout(function () {
          if (a.ph == 0) {
            a.map.dispatchEvent(new P('ontilesloaded'))
            a.yE = q
          }
          a.Hi = s
        }, 80)))
    },
    fE: function (a, b) {
      return 'TILE-' + b.aa + '-' + a[0] + '-' + a[1] + '-' + a[2]
    },
    Rx: function (a) {
      var b = a.Gb
      b && zb(b) && b.parentNode.removeChild(b)
      delete this.yg[a.name]
      a.loaded || (Nc(a), (a.Gb = s), (a.Pm = s))
    },
    pj: function (a, b, c) {
      var e = this.map,
        f = e.oa(),
        g = e.Oa,
        i = e.fc,
        k = f.dc(g),
        m = this.DL(),
        n = m[0],
        o = m[1],
        p = m[2],
        v = m[3],
        x = m[4],
        c = 'undefined' != typeof c ? c : 0,
        f = f.$c(),
        m = e.aa.replace(/^TANGRAM_/, '')
      for (this.hc ? (this.hc.length = 0) : (this.hc = []); n < p; n++)
        for (var y = o; y < v; y++) {
          var A = n,
            E = y
          this.hc.push([A, E])
          A = m + '_' + b + '_' + A + '_' + E + '_' + g
          this.MK[A] = A
        }
      this.hc.sort(
        (function (a) {
          return function (b, c) {
            return (
              0.4 * Math.abs(b[0] - a[0]) +
              0.6 * Math.abs(b[1] - a[1]) -
              (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            )
          }
        })([x[0] - 1, x[1] - 1])
      )
      i = [Math.round(-i.lng / k), Math.round(i.lat / k)]
      n = -e.offsetY + e.height / 2
      a.style.left = -e.offsetX + e.width / 2 + 'px'
      a.style.top = n + 'px'
      this.Cc ? (this.Cc.length = 0) : (this.Cc = [])
      n = 0
      for (e = a.childNodes.length; n < e; n++)
        (y = a.childNodes[n]), (y.Sj = t), this.Cc.push(y)
      if ((n = this.qh)) for (var C in n) delete n[C]
      else this.qh = {}
      this.Dc ? (this.Dc.length = 0) : (this.Dc = [])
      n = 0
      for (e = this.hc.length; n < e; n++) {
        C = this.hc[n][0]
        k = this.hc[n][1]
        y = 0
        for (o = this.Cc.length; y < o; y++)
          if (
            ((p = this.Cc[y]),
            p.id == m + '_' + b + '_' + C + '_' + k + '_' + g)
          ) {
            p.Sj = q
            this.qh[p.id] = p
            break
          }
      }
      n = 0
      for (e = this.Cc.length; n < e; n++)
        (p = this.Cc[n]), p.Sj || this.Dc.push(p)
      this.nn = []
      y = (f + c) * this.map.K.devicePixelRatio
      n = 0
      for (e = this.hc.length; n < e; n++)
        (C = this.hc[n][0]),
          (k = this.hc[n][1]),
          (v = C * f + i[0] - c / 2),
          (x = (-1 - k) * f + i[1] - c / 2),
          (A = m + '_' + b + '_' + C + '_' + k + '_' + g),
          (o = this.qh[A]),
          (p = s),
          o
            ? ((p = o.style),
              (p.left = v + 'px'),
              (p.top = x + 'px'),
              o.yd || this.nn.push([C, k, o]))
            : (0 < this.Dc.length
                ? ((o = this.Dc.shift()),
                  o.getContext('2d').clearRect(-c / 2, -c / 2, y, y),
                  (p = o.style))
                : ((o = document.createElement('canvas')),
                  (p = o.style),
                  (p.position = 'absolute'),
                  (p.width = f + c + 'px'),
                  (p.height = f + c + 'px'),
                  this.Zx() && (p.WebkitTransform = 'scale(1.001)'),
                  o.setAttribute('width', y),
                  o.setAttribute('height', y),
                  a.appendChild(o)),
              (o.id = A),
              (p.left = v + 'px'),
              (p.top = x + 'px'),
              -1 < A.indexOf('bg') &&
                ((v = '#F3F1EC'),
                this.map.K.Eo && (v = this.map.K.Eo),
                (p.background = v ? v : '')),
              this.nn.push([C, k, o])),
          (o.style.visibility = '')
      n = 0
      for (e = this.Dc.length; n < e; n++)
        this.Dc[n].style.visibility = 'hidden'
      return this.nn
    },
    Zx: function () {
      return /M040/i.test(navigator.userAgent)
    },
    DL: function () {
      var a = this.map,
        b = a.oa(),
        c = b.mE(a.Oa),
        e = a.fc,
        f = Math.ceil(e.lng / c),
        g = Math.ceil(e.lat / c),
        b = b.$c(),
        c = [f, g, ((e.lng - f * c) / c) * b, ((e.lat - g * c) / c) * b]
      return [
        c[0] - Math.ceil((a.width / 2 - c[2]) / b),
        c[1] - Math.ceil((a.height / 2 - c[3]) / b),
        c[0] + Math.ceil((a.width / 2 + c[2]) / b),
        c[1] + Math.ceil((a.height / 2 + c[3]) / b),
        c,
      ]
    },
    R_: function (a, b, c, e) {
      var f = this
      f.u2 = b
      var g = this.map.oa(),
        i = f.fE(a, c),
        k = g.$c(),
        b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
        m = this.yg[i]
      if (this.map.oa() !== Ya && this.map.oa() !== Sa) {
        var n = this.Lw(a[0], a[2]).offsetX
        b[0] += n
        b.Q1 = n
      }
      m && m.Gb
        ? (xb(m.Gb, b),
          e &&
            ((e = new Q(a[0], a[1])),
            (g = this.map.K.ye ? this.map.K.ye.style : 'normal'),
            (e = c.getTilesUrl(e, a[2], g)),
            (m.loaded = t),
            Oc(m, e)),
          m.loaded
            ? this.Af()
            : Pc(m, function () {
                f.Af()
              }))
        : (m = this.Zi[i]) && m.Gb
        ? (c.Jb.insertBefore(m.Gb, c.Jb.lastChild),
          (this.yg[i] = m),
          xb(m.Gb, b),
          e &&
            ((e = new Q(a[0], a[1])),
            (g = this.map.K.ye ? this.map.K.ye.style : 'normal'),
            (e = c.getTilesUrl(e, a[2], g)),
            (m.loaded = t),
            Oc(m, e)),
          m.loaded
            ? this.Af()
            : Pc(m, function () {
                f.Af()
              }))
        : ((m = k * Math.pow(2, g.sm() - a[2])),
          new J(a[0] * m, a[1] * m),
          (e = new Q(a[0], a[1])),
          (g = this.map.K.ye ? this.map.K.ye.style : 'normal'),
          (e = c.getTilesUrl(e, a[2], g)),
          (m = new Qc(this, e, b, a, c)),
          Pc(m, function () {
            f.Af()
          }),
          m.co(),
          (this.yg[i] = m))
    },
    Af: function () {
      this.ph--
      var a = this
      0 == this.ph &&
        (this.Hi && (clearTimeout(this.Hi), (this.Hi = s)),
        (this.Hi = setTimeout(function () {
          if (a.ph == 0) {
            a.map.dispatchEvent(new P('ontilesloaded'))
            if (ua) {
              if (ra && sa && ta) {
                var b = bb(),
                  c = a.map.cb()
                setTimeout(function () {
                  Ra(5030, {
                    load_script_time: sa - ra,
                    load_tiles_time: b - ta,
                    map_width: c.width,
                    map_height: c.height,
                    map_size: c.width * c.height,
                  })
                }, 1e4)
                B.Fn('cus.fire', 'time', {
                  z_imgfirstloaded: b - ta,
                })
              }
              ua = t
            }
          }
          a.Hi = s
        }, 80)))
    },
    fE: function (a, b) {
      return this.map.oa() === Qa
        ? 'TILE-' +
            b.aa +
            '-' +
            this.map.Rw +
            '-' +
            a[0] +
            '-' +
            a[1] +
            '-' +
            a[2]
        : 'TILE-' + b.aa + '-' + a[0] + '-' + a[1] + '-' + a[2]
    },
    Rx: function (a) {
      var b = a.Gb
      b && (Rc(b), zb(b) && b.parentNode.removeChild(b))
      delete this.yg[a.name]
      a.loaded || (Rc(b), Nc(a), (a.Gb = s), (a.Pm = s))
    },
    Lw: function (a, b) {
      for (
        var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2;
        a > f;

      )
        (a -= e), (c -= this.ZA)
      for (; a < g; ) (a += e), (c += this.ZA)
      c = Math.round(c / Math.pow(2, 18 - b))
      return {
        offsetX: c,
        hs: a,
      }
    },
    QV: function (a) {
      for (var b = a.lng; b > this.yI; ) b -= this.AI
      for (; b < this.zI; ) b += this.AI
      a.lng = b
      return a
    },
    RV: function (a, b) {
      for (
        var c = 256 * Math.pow(2, 18 - b),
          e = Math.floor(this.yI / c),
          f = Math.floor(this.zI / c),
          c = Math.floor(this.ZA / c),
          g = [],
          i = 0;
        i < a.length;
        i++
      ) {
        var k = a[i],
          m = k[0],
          k = k[1]
        if (m >= e) {
          var m = m + c,
            n = 'id_' + m + '_' + k + '_' + b
          a[n] || ((a[n] = q), g.push([m, k]))
        } else
          m <= f &&
            ((m -= c),
            (n = 'id_' + m + '_' + k + '_' + b),
            a[n] || ((a[n] = q), g.push([m, k])))
      }
      for (i = 0; i < g.length; i++) a.push(g[i])
      return a
    },
    Wf: function (a) {
      var b = this
      if (b.map.oa() == Qa)
        K.load(
          'coordtrans',
          function () {
            b.map.Ub ||
              ((b.map.Ub = Qa.wk(b.map.$g)), (b.map.Rw = Qa.BL(b.map.Ub)))
            b.CI()
          },
          q
        )
      else {
        if (a && a) for (var c in this.Zi) delete this.Zi[c]
        b.CI(a)
      }
    },
    CI: function (a) {
      var b = this.Mm.concat(this.$f),
        c = b.length,
        e = this.map,
        f = e.oa(),
        g = e.fc
      this.map.oa() !== Ya && this.map.oa() !== Sa && (g = this.QV(g))
      for (var i = 0; i < c; i++) {
        var k = b[i]
        if (k.gc && e.Oa < k.gc) break
        if (k.Jw) {
          var m = (this.Jb = k.Jb)
          if (a) {
            var n = m
            if (n && n.childNodes)
              for (var o = n.childNodes.length, p = o - 1; 0 <= p; p--)
                (o = n.childNodes[p]), n.removeChild(o), (o = s)
          }
          if (this.map.Sb()) {
            this.od.style.display = 'block'
            m.style.display = 'none'
            this.map.dispatchEvent(new P('vectorchanged'), {
              isvector: q,
            })
            continue
          } else
            (m.style.display = 'block'),
              (this.od.style.display = 'none'),
              this.map.dispatchEvent(new P('vectorchanged'), {
                isvector: t,
              })
        }
        if (!k.pI && !((k.pp && !this.map.Sb()) || (k.GM && this.map.Sb()))) {
          e = this.map
          f = e.oa()
          m = f.wm()
          o = e.Oa
          g = e.fc
          f == Qa && g.pb(new J(0, 0)) && (g = e.fc = m.vj(e.re, e.Ub))
          var v = f.dc(o),
            m = f.mE(o),
            n = Math.ceil(g.lng / m),
            x = Math.ceil(g.lat / m),
            y = f.$c(),
            m = [n, x, ((g.lng - n * m) / m) * y, ((g.lat - x * m) / m) * y],
            p = m[0] - Math.ceil((e.width / 2 - m[2]) / y),
            n = m[1] - Math.ceil((e.height / 2 - m[3]) / y),
            x = m[0] + Math.ceil((e.width / 2 + m[2]) / y),
            A = 0
          f === Qa && 15 == e.fa() && (A = 1)
          f = m[1] + Math.ceil((e.height / 2 + m[3]) / y) + A
          this.gK = new J(g.lng, g.lat)
          var E = this.yg,
            y = -this.gK.lng / v,
            A = this.gK.lat / v,
            v = [Math.ceil(y), Math.ceil(A)],
            g = e.fa(),
            C
          for (C in E) {
            var F = E[C],
              D = F.info
            ;(D[2] != g ||
              (D[2] == g &&
                (p > D[0] || x <= D[0] || n > D[1] || f <= D[1]))) &&
              this.Rx(F)
          }
          E = -e.offsetX + e.width / 2
          F = -e.offsetY + e.height / 2
          k.Jb &&
            ((k.Jb.style.left = Math.ceil(y + E) - v[0] + 'px'),
            (k.Jb.style.top = Math.ceil(A + F) - v[1] + 'px'),
            (k.Jb.style.WebkitTransform = 'translate3d(0,0,0)'))
          y = []
          for (e.WB = []; p < x; p++)
            for (A = n; A < f; A++)
              y.push([p, A]),
                e.WB.push({
                  x: p,
                  y: A,
                })
          this.map.oa() !== Ya && this.map.oa() !== Sa && (y = this.RV(y, o))
          y.sort(
            (function (a) {
              return function (b, c) {
                return (
                  0.4 * Math.abs(b[0] - a[0]) +
                  0.6 * Math.abs(b[1] - a[1]) -
                  (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                )
              }
            })([m[0] - 1, m[1] - 1])
          )
          o = y.length
          this.ph += o
          for (p = 0; p < o; p++) this.R_([y[p][0], y[p][1], g], v, k, a)
        }
      }
    },
    Oe: function (a) {
      var b = this,
        c = a.target,
        a = b.map.Sb()
      if (c instanceof db) a && !c.Im && (c.na(this.map, this.od), (c.Im = q))
      else if ((c.ag && this.map.Oe(c.ag), c.pp)) {
        for (a = 0; a < b.Fg.length; a++) if (b.Fg[a] == c) return
        K.load(
          'vector',
          function () {
            c.na(b.map, b.od)
            b.Fg.push(c)
          },
          q
        )
      } else {
        for (a = 0; a < b.$f.length; a++) if (b.$f[a] == c) return
        c.na(this.map, this.Bl)
        b.$f.push(c)
      }
    },
    Yf: function (a) {
      var a = a.target,
        b = this.map.Sb()
      if (a instanceof db) b && a.Im && (a.remove(), (a.Im = t))
      else {
        a.ag && this.map.Yf(a.ag)
        if (a.pp)
          for (var b = 0, c = this.Fg.length; b < c; b++)
            a == this.Fg[b] && this.Fg.splice(b, 1)
        else {
          b = 0
          for (c = this.$f.length; b < c; b++)
            a == this.$f[b] && this.$f.splice(b, 1)
        }
        a.remove()
      }
    },
    Dg: function () {
      for (var a = this.Mm, b = 0, c = a.length; b < c; b++) a[b].remove()
      delete this.Jb
      this.Mm = []
      this.Zi = this.yg = {}
      this.Ux()
      this.Wf()
    },
    Mc: function () {
      var a = this
      a.vd && z.D.U(a.vd)
      setTimeout(function () {
        a.Wf()
        a.map.dispatchEvent(new P('onzoomend'))
      }, 10)
    },
    L5: u(),
    Zt: function (a) {
      var b = this.map.oa()
      if (!this.map.Sb() && (a ? (this.map.K.$_ = a) : (a = this.map.K.$_), a))
        for (
          var c = s,
            c =
              '2' == B.xu
                ? [B.url.proto + B.url.domain.main_domain_cdn.other[0] + '/']
                : [
                    B.url.proto + B.url.domain.main_domain_cdn.baidu[0] + '/',
                    B.url.proto + B.url.domain.main_domain_cdn.baidu[1] + '/',
                    B.url.proto + B.url.domain.main_domain_cdn.baidu[2] + '/',
                  ],
            e = 0,
            f;
          (f = this.Mm[e]);
          e++
        )
          if (f.M_ == q) {
            b.j.Yb = 18
            f.getTilesUrl = function (b, e) {
              var f = b.x,
                f = this.map.Va.Lw(f, e).hs,
                m = b.y,
                n = Sb('normal'),
                o = 1
              this.map.Sx() && (o = 2)
              n =
                'customimage/tile?&x=' +
                f +
                '&y=' +
                m +
                '&z=' +
                e +
                '&udt=' +
                n +
                '&scale=' +
                o +
                '&ak=' +
                qa
              n = a.styleStr
                ? n + ('&styles=' + encodeURIComponent(a.styleStr))
                : n + ('&customid=' + a.style)
              return c[Math.abs(f + m) % c.length] + n
            }
            break
          }
    },
  })
  function Qc(a, b, c, e, f) {
    this.Pm = a
    this.position = c
    this.$u = []
    this.name = a.fE(e, f)
    this.info = e
    this.GJ = f.zt()
    e = L('img')
    yb(e)
    e.uL = t
    var g = e.style,
      a = a.map.oa()
    g.position = 'absolute'
    g.border = 'none'
    g.width = a.$c() + 'px'
    g.height = a.$c() + 'px'
    g.left = c[0] + 'px'
    g.top = c[1] + 'px'
    g.maxWidth = 'none'
    this.Gb = e
    this.src = b
    Sc && (this.Gb.style.opacity = 0)
    var i = this
    this.Gb.onload = function () {
      B.iZ.eR()
      i.loaded = q
      if (i.Pm) {
        var a = i.Pm,
          b = a.Zi
        if (!b[i.name]) {
          a.oF++
          b[i.name] = i
        }
        if (i.Gb && !zb(i.Gb) && f.Jb) {
          f.Jb.appendChild(i.Gb)
          if (z.ca.ia <= 6 && z.ca.ia > 0 && i.GJ)
            i.Gb.style.cssText =
              i.Gb.style.cssText +
              (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                i.src +
                '",sizingMethod=scale);')
        }
        var c = a.oF - a.OV,
          e
        for (e in b) {
          if (c <= 0) break
          if (!a.yg[e]) {
            b[e].Pm = s
            var g = b[e].Gb
            if (g && g.parentNode) {
              g.parentNode.removeChild(g)
              Rc(g)
            }
            g = s
            b[e].Gb = s
            delete b[e]
            a.oF--
            c--
          }
        }
        Sc &&
          new tb({
            Ic: 20,
            duration: 200,
            va: function (a) {
              if (i.Gb && i.Gb.style) i.Gb.style.opacity = a * 1
            },
            finish: function () {
              i.Gb && i.Gb.style && delete i.Gb.style.opacity
            },
          })
        Nc(i)
      }
    }
    this.Gb.onerror = function () {
      Nc(i)
      if (i.Pm) {
        var a = i.Pm.map.oa()
        if (a.j.vD) {
          i.error = q
          i.Gb.src = a.j.vD
          i.Gb && !zb(i.Gb) && f.Jb.appendChild(i.Gb)
        }
      }
    }
    e = s
  }
  function Pc(a, b) {
    a.$u.push(b)
  }
  Qc.prototype.co = function () {
    this.Gb.src =
      0 < z.ca.ia && 6 >= z.ca.ia && this.GJ
        ? G.qa + 'blank.gif'
        : '' !== this.src && this.Gb.src == this.src
        ? this.src + '&t = ' + Date.now()
        : this.src
  }
  function Nc(a) {
    for (var b = 0; b < a.$u.length; b++) a.$u[b]()
    a.$u.length = 0
  }
  function Rc(a) {
    if (a) {
      a.onload = a.onerror = s
      var b = a.attributes,
        c,
        e,
        f
      if (b) {
        e = b.length
        for (c = 0; c < e; c += 1) (f = b[c].name), Xa(a[f]) && (a[f] = s)
      }
      if ((b = a.children)) {
        e = b.length
        for (c = 0; c < e; c += 1) Rc(a.children[c])
      }
    }
  }
  function Oc(a, b) {
    a.src = b
    a.co()
  }
  var Sc = !z.ca.ia || 8 < z.ca.ia
  function Mc(a) {
    this.vf = a || {}
    this.mW = this.vf.copyright || s
    this.B0 = this.vf.transparentPng || t
    this.Jw = this.vf.baseLayer || t
    this.zIndex = this.vf.zIndex || 0
    this.aa = Mc.SS++
  }
  Mc.SS = 0
  z.lang.ta(Mc, z.lang.Ca, 'TileLayer')
  z.extend(Mc.prototype, {
    na: function (a, b) {
      this.Jw && (this.zIndex = -100)
      this.map = a
      if (!this.Jb) {
        var c = L('div'),
          e = c.style
        e.position = 'absolute'
        e.overflow = 'visible'
        e.zIndex = this.zIndex
        e.left = Math.ceil(-a.offsetX + a.width / 2) + 'px'
        e.top = Math.ceil(-a.offsetY + a.height / 2) + 'px'
        b.appendChild(c)
        this.Jb = c
      }
    },
    remove: function () {
      this.Jb &&
        this.Jb.parentNode &&
        ((this.Jb.innerHTML = ''), this.Jb.parentNode.removeChild(this.Jb))
      delete this.Jb
    },
    zt: w('B0'),
    getTilesUrl: function (a, b) {
      if (this.map.oa() !== Ya && this.map.oa() !== Sa)
        var c = this.map.Va.Lw(a.x, b).hs
      var e = ''
      this.vf.tileUrlTemplate &&
        ((e = this.vf.tileUrlTemplate.replace(/\{X\}/, c)),
        (e = e.replace(/\{Y\}/, a.y)),
        (e = e.replace(/\{Z\}/, b)))
      return e
    },
    pm: w('mW'),
    oa: function () {
      return this.Hb || La
    },
  })
  function Tc(a, b) {
    Ib(a) ? (b = a || {}) : ((b = b || {}), (b.databoxId = a))
    this.j = {
      OK: b.databoxId,
      eh: b.geotableId,
      Wm: b.q || '',
      pu: b.tags || '',
      filter: b.filter || '',
      Vy: b.sortby || '',
      Y_: b.styleId || '',
      Vl: b.ak || qa,
      Gw: b.age || 36e5,
      zIndex: 11,
      fZ: 'VectorCloudLayer',
      Fk: b.hotspotName || 'vector_md_' + (1e5 * Math.random()).toFixed(0),
      uV: 'LBS\u4e91\u9ebb\u70b9\u5c42',
    }
    this.pp = q
    Mc.call(this, this.j)
    this.GW = B.Wc + 'geosearch/detail/'
    this.HW = B.Wc + 'geosearch/v2/detail/'
    this.lp = {}
  }
  z.ta(Tc, Mc, 'VectorCloudLayer')
  function Uc(a) {
    a = a || {}
    this.j = z.extend(a, {
      zIndex: 1,
      fZ: 'VectorTrafficLayer',
      uV: '\u77e2\u91cf\u8def\u51b5\u5c42',
    })
    this.pp = q
    Mc.call(this, this.j)
    this.x0 =
      B.url.proto +
      B.url.domain.vector_traffic +
      '/gvd/?qt=lgvd&styles=pl&layers=tf'
    this.Db = {
      0: [2, 1354709503, 2, 2, 0, [], 0, 0],
      1: [2, 1354709503, 3, 2, 0, [], 0, 0],
      10: [2, -231722753, 2, 2, 0, [], 0, 0],
      11: [2, -231722753, 3, 2, 0, [], 0, 0],
      12: [2, -231722753, 4, 2, 0, [], 0, 0],
      13: [2, -231722753, 5, 2, 0, [], 0, 0],
      14: [2, -231722753, 6, 2, 0, [], 0, 0],
      15: [2, -1, 4, 0, 0, [], 0, 0],
      16: [2, -1, 5.5, 0, 0, [], 0, 0],
      17: [2, -1, 7, 0, 0, [], 0, 0],
      18: [2, -1, 8.5, 0, 0, [], 0, 0],
      19: [2, -1, 10, 0, 0, [], 0, 0],
      2: [2, 1354709503, 4, 2, 0, [], 0, 0],
      3: [2, 1354709503, 5, 2, 0, [], 0, 0],
      4: [2, 1354709503, 6, 2, 0, [], 0, 0],
      5: [2, -6350337, 2, 2, 0, [], 0, 0],
      6: [2, -6350337, 3, 2, 0, [], 0, 0],
      7: [2, -6350337, 4, 2, 0, [], 0, 0],
      8: [2, -6350337, 5, 2, 0, [], 0, 0],
      9: [2, -6350337, 6, 2, 0, [], 0, 0],
    }
  }
  z.ta(Uc, Mc, 'VectorTrafficLayer')
  function db(a) {
    this.PV = [
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[1] + '/gvd/?',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[2] + '/gvd/?',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[3] + '/gvd/?',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[4] + '/gvd/?',
    ]
    this.j = {
      pL: t,
    }
    for (var b in a) this.j[b] = a[b]
    this.Th = this.Fh = this.Ya = this.C = this.B = s
    this.LM = 0
    var c = this
    K.load('vector', function () {
      c.De()
    })
  }
  z.extend(db.prototype, {
    na: function (a, b) {
      this.B = a
      this.C = b
    },
    remove: function () {
      this.C = this.B = s
    },
  })
  function Vc(a) {
    Mc.call(this, a)
    this.j = a || {}
    this.GM = q
    this.ag = new Uc()
    this.ag.$y = this
    if (this.j.predictDate) {
      if (1 > this.j.predictDate.weekday || 7 < this.j.predictDate.weekday)
        this.j.predictDate = 1
      if (0 > this.j.predictDate.hour || 23 < this.j.predictDate.hour)
        this.j.predictDate.hour = 0
    }
    this.VU = B.url.proto + B.url.domain.traffic + '/traffic/'
  }
  Vc.prototype = new Mc()
  Vc.prototype.na = function (a, b) {
    Mc.prototype.na.call(this, a, b)
    this.B = a
  }
  Vc.prototype.zt = ca(q)
  Vc.prototype.getTilesUrl = function (a, b) {
    var c = ''
    this.j.predictDate
      ? (c =
          'HistoryService?day=' +
          (this.j.predictDate.weekday - 1) +
          '&hour=' +
          this.j.predictDate.hour +
          '&t=' +
          new Date().getTime() +
          '&')
      : ((c = 'TrafficTileService?time=' + new Date().getTime() + '&'),
        (c += 'label=web2D&v=016&'))
    var c = this.VU + c + 'level=' + b + '&x=' + a.x + '&y=' + a.y,
      e = 1
    this.B.Sx() && (e = 2)
    return (c + '&scaler=' + e).replace(/-(\d+)/gi, 'M$1')
  }
  var Wc = [
      B.url.proto + B.url.domain.TILES_YUN_HOST[0] + '/georender/gss',
      B.url.proto + B.url.domain.TILES_YUN_HOST[1] + '/georender/gss',
      B.url.proto + B.url.domain.TILES_YUN_HOST[2] + '/georender/gss',
      B.url.proto + B.url.domain.TILES_YUN_HOST[3] + '/georender/gss',
    ],
    Xc =
      B.url.proto +
      B.url.domain.main_domain_nocdn.baidu +
      '/style/poi/rangestyle',
    Yc = 100
  function nb(a, b) {
    Mc.call(this)
    var c = this
    this.GM = q
    var e = t
    try {
      document.createElement('canvas').getContext('2d'), (e = q)
    } catch (f) {
      e = t
    }
    e && ((this.ag = new Tc(a, b)), (this.ag.$y = this))
    Ib(a) ? (b = a || {}) : ((c.Rn = a), (b = b || {}))
    b.geotableId && (c.Cf = b.geotableId)
    b.databoxId && (c.Rn = b.databoxId)
    e = B.Wc + 'geosearch'
    c.ub = {
      ON: b.pointDensity || Yc,
      BY: e + '/detail/',
      CY: e + '/v2/detail/',
      Gw: b.age || 36e5,
      Wm: b.q || '',
      i0: 'png',
      X3: [5, 5, 5, 5],
      eZ: {
        backgroundColor: '#FFFFD5',
        borderColor: '#808080',
      },
      Vl: b.ak || qa,
      pu: b.tags || '',
      filter: b.filter || '',
      Vy: b.sortby || '',
      Fk: b.hotspotName || 'tile_md_' + (1e5 * Math.random()).toFixed(0),
      dG: q,
    }
    K.load('clayer', function () {
      c.Sd()
    })
  }
  nb.prototype = new Mc()
  nb.prototype.na = function (a, b) {
    Mc.prototype.na.call(this, a, b)
    this.B = a
  }
  nb.prototype.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = this.ub,
      c =
        Wc[Math.abs(c + e) % Wc.length] +
        '/image?grids=' +
        c +
        '_' +
        e +
        '_' +
        b +
        '&q=' +
        f.Wm +
        '&tags=' +
        f.pu +
        '&filter=' +
        f.filter +
        '&sortby=' +
        f.Vy +
        '&ak=' +
        this.ub.Vl +
        '&age=' +
        f.Gw +
        '&page_size=' +
        f.ON +
        '&format=' +
        f.i0
    f.dG || ((f = (1e5 * Math.random()).toFixed(0)), (c += '&timeStamp=' + f))
    this.Cf
      ? (c += '&geotable_id=' + this.Cf)
      : this.Rn && (c += '&databox_id=' + this.Rn)
    return c
  }
  nb.prototype.enableUseCache = function () {
    this.ub.dG = q
  }
  nb.prototype.disableUseCache = function () {
    this.ub.dG = t
  }
  nb.tU = /^point\(|\)$/gi
  nb.uU = /\s+/
  nb.wU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  var Zc = {}
  function $c(a, b) {
    this.kd = a
    this.uQ = 18
    this.j = {
      le: 256,
      cd: new S(),
    }
    z.extend(this.j, b || {})
  }
  var ad = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
    bd = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
    cd = [
      0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19,
      19,
    ],
    dd = [
      0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512,
      512, 1024, 512, 1024, 2048, 4096,
    ]
  $c.prototype = {
    getName: w('kd'),
    $c: function (a) {
      return 'na' === this.kd ? dd[a] : this.j.le
    },
    FL: function (a) {
      return 'na' === this.kd ? cd[a] : a
    },
    wm: function () {
      return this.j.cd
    },
    dc: function (a) {
      return Math.pow(2, this.uQ - a)
    },
    RX: function (a) {
      return 'na' === this.kd ? bd[ad[a]] : this.dc(a) * this.$c(a)
    },
  }
  P = z.lang.Ju
  function Lc(a, b, c) {
    this.B = a
    this.cV = b
    this.Cd = b.qc
    this.ub = {
      h0: 'na',
      zIndex: 0,
      OO: c.tileUrls,
      AO: q,
    }
    this.UB = ''
    this.qT = {}
    var c = c.urlOpts || {},
      e
    for (e in c)
      c.hasOwnProperty(e) && (this.UB = this.UB + '&' + e + '=' + c[e])
    this.GC = []
    this.JE = 0
    this.zM = t
    a = this.ub.h0
    Zc[a] ? (a = Zc[a]) : ((b = new $c(a, l)), (a = Zc[a] = b))
    this.Wr = a
  }
  window.VectorIndoorTileLayer = 'VectorIndoorTileLayer'
  da = Lc.prototype
  da.na = function () {
    var a = this.B,
      b = a.Va
    if (!this.Vh) {
      var c = b.Kj(this.ub.zIndex)
      c.style.WebkitTransform = 'translate3d(0px, 0px, 0)'
      this.Vh = c
    }
    b.Ki.appendChild(this.Vh)
    b.b4 = c
    if (this.ub.AO) {
      ed(this)
      var e = this
      a.addEventListener('checkvectorclick', function (a) {
        var b
        a: {
          b = a.offsetX
          var c = a.offsetY,
            k = e.GC.N4
          if (k)
            for (var m = 0; m < k.length; m++)
              for (var n = k[m], o = 0; o < n.length; o++)
                if (
                  ((a = n[o]),
                  !a.f4 && a.EY && b > a.WE && b < a.TE && c > a.XE && c < a.UE)
                ) {
                  b = a.EY
                  b = {
                    type: 9,
                    name: a.name,
                    uid: a.uid,
                    point: {
                      x: b.H2 + b.width / 2,
                      y: b.I2 + 6,
                    },
                  }
                  break a
                }
          b = s
        }
        b &&
          ((a = new P('onvectorclick')),
          (a.Y3 = b),
          (a.of = 'base'),
          this.dispatchEvent(a))
      })
    }
  }
  function ed(a) {
    var b = a.B,
      c = b.Va,
      e = a.Cd,
      f = b.cb(),
      g = f.width,
      f = f.height,
      i = L('canvas')
    i.style.cssText =
      'position: absolute;left:0;top:0;width:' +
      g +
      'px;height:' +
      f +
      'px;z-index:2;'
    i.width = g * e
    i.height = f * e
    a.by = i
    a.At = i.getContext('2d')
    a.At.scale(e, e)
    a.At.textBaseline = 'top'
    c.Ki.appendChild(i)
    b.ZS = i
  }
  da.update = function (a, b) {
    b = b || {}
    if (this.ub.AO && (b.Tw && this.Tw(), b.S_)) {
      var c = this.Cd,
        e = this.B.cb(),
        f = e.width,
        e = e.height,
        g = this.by,
        i = g.style
      i.width = f + 'px'
      i.height = e + 'px'
      g.width = f * c
      g.height = e * c
      this.At.scale(c, c)
      this.At.textBaseline = 'top'
    }
    if (b.M5) {
      c = this.Vh
      f = 0
      for (e = c.childNodes.length; f < e; f++) c.childNodes[f].yd = t
    }
    this.NK = a
    this.up(a)
  }
  da.up = function (a) {
    this.GC = []
    var b = this.B,
      c = b.fa(),
      e = b.cd.vj(b.re),
      f = this.Wr.dc(c),
      e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
      f = this.Wr.$c(c),
      g = b.aa.replace(/^TANGRAM_/, ''),
      i = this.Wr.FL(c),
      b = this.B,
      k = -b.offsetY + b.height / 2,
      m = this.Vh
    m.style.left = -b.offsetX + b.width / 2 + 'px'
    m.style.top = k + 'px'
    this.Cc ? (this.Cc.length = 0) : (this.Cc = [])
    b = 0
    for (k = m.childNodes.length; b < k; b++) {
      var n = m.childNodes[b]
      n.Sj = t
      this.Cc.push(n)
    }
    if ((b = this.qh)) for (var o in b) delete b[o]
    else this.qh = {}
    this.Dc ? (this.Dc.length = 0) : (this.Dc = [])
    b = 0
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        p = a[b][1]
      o = 0
      for (var v = this.Cc.length; o < v; o++) {
        var x = this.Cc[o]
        if (x.id === g + '_' + n + '_' + p + '_' + i + '_' + c) {
          x.Sj = q
          this.qh[x.id] = x
          break
        }
      }
    }
    b = 0
    for (k = this.Cc.length; b < k; b++)
      (x = this.Cc[b]),
        x.Sj || ((x.Lc = s), delete x.Lc, (x.yd = t), this.Dc.push(x))
    o = []
    v = f * this.Cd
    b = 0
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        p = a[b][1],
        x = n * f + e[0],
        y = (-1 - p) * f + e[1],
        A = g + '_' + n + '_' + p + '_' + i + '_' + c,
        E = this.qh[A],
        C = s
      if (E)
        (C = E.style),
          (C.left = x + 'px'),
          (C.top = y + 'px'),
          (C.width = f + 'px'),
          (C.height = f + 'px'),
          E.yd
            ? E.MO && E.MO && this.GC.push(E.MO)
            : ((E.NR = q), (E.Lc = s), delete E.Lc, o.push([n, p, E]))
      else {
        if (0 < this.Dc.length) {
          var E = this.Dc.shift(),
            F = E.getContext('2d')
          E.getAttribute('width') !== v && (E._scale = t)
          E.setAttribute('width', v)
          E.setAttribute('height', v)
          C = E.style
          C.width = f + 'px'
          C.height = f + 'px'
          F.clearRect(0, 0, v, v)
        } else
          (E = document.createElement('canvas')),
            (C = E.style),
            (C.position = 'absolute'),
            this.ub.backgroundColor && (C.background = this.ub.backgroundColor),
            (C.width = f + 'px'),
            (C.height = f + 'px'),
            E.setAttribute('width', v),
            E.setAttribute('height', v),
            m.appendChild(E)
        E.id = A
        C.left = x + 'px'
        C.top = y + 'px'
        o.push([n, p, E])
      }
      E.style.visibility = ''
    }
    b = 0
    for (k = this.Dc.length; b < k; b++) this.Dc[b].style.visibility = 'hidden'
    if (0 === o.length) fd(this)
    else {
      this.JE = o.length
      this.zM = t
      c = this.Wr.FL(this.B.fa())
      for (e = 0; e < a.length; e++) a[e][3] = c
      for (e = 0; e < o.length; e++)
        (a = o[e][2]),
          (f = o[e][0]),
          (g = o[e][1]),
          (o[e][3] = c),
          (a.yd = t),
          (a.NR = t),
          gd(this, f, g, c, a)
    }
  }
  function gd(a, b, c, e, f) {
    var g = b + '_' + c + '_' + e,
      i = a.qT
    if (i[g]) {
      if ('loading' === i[g].status) return
    } else
      i[g] = {
        status: 'init',
        bO: 0,
      }
    var k = a,
      m = k.B,
      n = [],
      n = '0' === B.xu ? k.ub.OO.http : k.ub.OO.https,
      o = Math.abs(b + c) % n.length,
      p = 'x=' + b + '&y=' + c + '&z=' + e,
      v = hd(a.cV),
      x = v.O0,
      v = v.C0,
      y =
        '_' +
        (0 > b ? '_' : '') +
        (0 > c ? '$' : '') +
        parseInt(Math.abs(b) + '' + Math.abs(c) + '' + e, 10).toString(36),
      p = p + a.UB + 'v=' + x + '&udt=' + v + '&fn=window.' + y,
      x = n[o] + '&' + p,
      x = n[o] + '&param=' + window.encodeURIComponent(Kb(p))
    window[y] = function (a) {
      clearTimeout(i[g].Od)
      i[g] = s
      if (a) {
        m.fa()
        var n
        a: {
          for (n = 0; n < k.NK.length; n++) {
            var o = k.NK[n]
            if (o[0] === b && o[1] === c && o[3] === e) {
              n = q
              break a
            }
          }
          n = t
        }
        n !== t &&
          ((n = new P('updateindoor')),
          (n.IndoorCanvas = []),
          n.IndoorCanvas.push({
            canvasDom: f,
            data: a,
            canvasID: f.id,
            ratio: k.Cd,
          }),
          m.dispatchEvent(n),
          k.JE--,
          (0 === k.JE || k.zM === q) && fd(k),
          delete window[y])
      }
    }
    oa(x)
    i[g].status = 'loading'
    k = a
    i[g].Od = setTimeout(function () {
      3 > i[g].bO
        ? (i[g].bO++, (i[g].status = 'init'), gd(k, b, c, e, f))
        : (i[g] = s)
    }, 4e3)
  }
  function fd(a) {
    if (a.by) {
      var b = a.B
      a.by.style.left = -b.offsetX + 'px'
      a.by.style.top = -b.offsetY + 'px'
      a = new P('updateindoorlabel')
      a.labelCanvasDom = b.ZS
      b.dispatchEvent(a)
    }
  }
  da.Tw = function () {
    var a = this.B.cb(),
      b = this.Cd
    this.At.clearRect(0, 0, a.width * b, a.height * b)
  }
  da.remove = function () {
    var a = this.B.Va
    this.Vh && a.Ki.removeChild(this.Vh)
  }
  function Kc(a) {
    this.B = a.map
    this.ff = []
    this.Xr = {}
    this.qc = this.B.K.devicePixelRatio
    this.na()
  }
  window.VectorIndoorTileMgr = 'VectorIndoorTileMgr'
  da = Kc.prototype
  da.na = function () {
    var a = this,
      b = this.B
    b.addEventListener('addtilelayer', function (b) {
      a.Oe(b.target)
    })
    b.addEventListener('removetilelayer', function (b) {
      a.Yf(b.target)
    })
    setTimeout(function () {
      b.addEventListener('onmoveend', function (b) {
        'centerAndZoom' !== b.mv && a.update()
      })
      b.addEventListener('onzoomend', function (b) {
        'centerAndZoom' !== b.mv &&
          a.update({
            Tw: q,
          })
      })
      b.addEventListener('centerandzoom', function () {
        a.update({
          Tw: q,
        })
      })
    }, 1)
    b.addEventListener('indoor_data_refresh', u())
    b.addEventListener('onresize', function () {
      a.update({
        S_: q,
      })
    })
    a.update()
  }
  da.Oe = function (a) {
    if (a instanceof Lc) {
      for (var b = 0; b < this.ff.length; b++) if (this.ff[b] === a) return
      this.ff.push(a)
      a.na()
      this.B.loaded && this.update()
    }
  }
  da.Yf = function (a) {
    if (a instanceof Lc) {
      for (var b = 0; b < this.ff.length; b++)
        if (this.ff[b] === a) {
          this.ff.splice(b, 1)
          break
        }
      a.remove()
    }
  }
  da.pj = function (a) {
    var b = a.getName()
    if (this.Xr[b]) return this.Xr[b]
    var c = this.B,
      e = c.fa(),
      f = c.fc,
      g = a.RX(e)
    c.aa.replace(/^TANGRAM_/, '')
    var i = Math.ceil(f.lng / g),
      k = Math.ceil(f.lat / g),
      a = a.$c(e),
      m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
      e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
      f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
      g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
      c = m[1] + Math.ceil((c.height / 2 + m[3]) / a)
    this.hc ? (this.hc.length = 0) : (this.hc = [])
    for (a = e; a < g; a++) for (e = f; e < c; e++) this.hc.push([a, e])
    this.hc.sort(
      (function (a) {
        return function (b, c) {
          return (
            0.4 * Math.abs(b[0] - a[0]) +
            0.6 * Math.abs(b[1] - a[1]) -
            (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
          )
        }
      })([i, k])
    )
    this.Xr[b] = this.hc.slice(0)
    return this.Xr[b]
  }
  function hd(a) {
    if (a.gG) return a.gG
    var b = 'undefined' !== typeof TVC ? TVC.K2.z4 : {}
    a.gG = {
      O0: b.version ? b.version : '001',
      C0: b.wn ? b.wn : '20171110',
    }
    return a.gG
  }
  da.update = function (a) {
    this.Xr = {}
    for (var b = 0; b < this.ff.length; b++) {
      var c = this.ff[b],
        e = this.pj(c.Wr)
      c.update(e, a)
    }
  }
  function id(a, b, c) {
    this.kd = a
    this.ff = b instanceof Mc ? [b] : b.slice(0)
    c = c || {}
    this.j = {
      k0: c.tips || '',
      LE: '',
      gc: c.minZoom || 3,
      Yb: c.maxZoom || 18,
      W3: c.minZoom || 3,
      V3: c.maxZoom || 18,
      le: 256,
      UF: c.textColor || 'black',
      vD: c.errorImageUrl || '',
      bb: new fb(new J(-21364736, -16023552), new J(23855104, 19431424)),
      cd: c.projection || new S(),
    }
    1 <= this.ff.length && (this.ff[0].Jw = q)
    z.extend(this.j, c)
  }
  z.extend(id.prototype, {
    getName: w('kd'),
    gt: function () {
      return this.j.k0
    },
    B3: function () {
      return this.j.LE
    },
    oY: function () {
      return this.ff[0]
    },
    P3: w('ff'),
    $c: function () {
      return this.j.le
    },
    bp: function () {
      return this.j.gc
    },
    sm: function () {
      return this.j.Yb
    },
    setMaxZoom: function (a) {
      this.j.Yb = a
    },
    zm: function () {
      return this.j.UF
    },
    wm: function () {
      return this.j.cd
    },
    u3: function () {
      return this.j.vD
    },
    $c: function () {
      return this.j.le
    },
    dc: function (a) {
      return Math.pow(2, 18 - a)
    },
    mE: function (a) {
      return this.dc(a) * this.$c()
    },
  })
  var jd = [
      B.url.proto + B.url.domain.TILE_BASE_URLS[0] + '/it/',
      B.url.proto + B.url.domain.TILE_BASE_URLS[1] + '/it/',
      B.url.proto + B.url.domain.TILE_BASE_URLS[2] + '/it/',
      B.url.proto + B.url.domain.TILE_BASE_URLS[3] + '/it/',
      B.url.proto + B.url.domain.TILE_BASE_URLS[4] + '/it/',
    ],
    kd = [
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[0] + '/tile/',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[1] + '/tile/',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[2] + '/tile/',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[3] + '/tile/',
      B.url.proto + B.url.domain.TILE_ONLINE_URLS[4] + '/tile/',
    ],
    ld = {
      dark: 'dl',
      light: 'll',
      normal: 'pl',
    },
    md = new Mc()
  md.M_ = q
  md.getTilesUrl = function (a, b, c) {
    var e = a.x,
      a = a.y,
      f = Sb('normal'),
      g = 1,
      c = ld[c]
    // this.map.Sx() && (g = 2);  //修改
    // e = this.map.Va.Lw(e, b).hs;
    // return (kd[Math.abs(e + a) % kd.length] + "?qt=tile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == z.ca.ia ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
debugger
    var tdir =
      bmapcfg.tiles_path ? (bmapcfg.tiles_path + bmapcfg.tiles_dir) : bmapcfg.tiles_dir
      console.log(tdir + '/' + b + '/' + e + '/' + a + bmapcfg.imgext)
      return tdir + '/' + b + '/' + e + '/' + a + bmapcfg.imgext // 使用本地的瓦片
  }
  var La = new id('\u5730\u56fe', md, {
      tips: '\u663e\u793a\u666e\u901a\u5730\u56fe',
      maxZoom: 19,
    }),
    nd = new Mc()
  nd.NO = [
    B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[0] + '/resource/mappic/',
    B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[1] + '/resource/mappic/',
    B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[2] + '/resource/mappic/',
    B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[3] + '/resource/mappic/',
  ]
  nd.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = 256 * Math.pow(2, 20 - b),
      e = Math.round((9998336 - f * e) / f) - 1
      debugger
    var tdir = bmapcfg.tiles_hybrid.length > 0 ? (bmapcfg.tiles_path + bmapcfg.tiles_hybrid) : bmapcfg.home + "tiles_hybrid";//修改 使用本地卫星的瓦片 
  tdir = tdir + "/" + b + "/" + c + "/" + e + bmapcfg.imgext; //修改 使用本地卫星的瓦片 
    return tdir;
  }
  var Qa = new id('\u4e09\u7ef4', nd, {
    tips: '\u663e\u793a\u4e09\u7ef4\u5730\u56fe',
    minZoom: 15,
    maxZoom: 20,
    textColor: 'white',
    projection: new hb(),
  })
  Qa.dc = function (a) {
    return Math.pow(2, 20 - a)
  }
  Qa.wk = function (a) {
    if (!a) return ''
    var b = G.pC,
      c
    for (c in b) if (-1 < a.search(c)) return b[c].yy
    return ''
  }
  Qa.BL = function (a) {
    return {
      bj: 2,
      gz: 1,
      sz: 14,
      sh: 4,
    }[a]
  }
  var od = new Mc({
    Jw: q,
  })
  od.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y
       //说明：卫星图 只有底图，没有标注
        //改成了调用我们的瓦片的地址
        var timg = bmapcfg.satellite_path.length>0?(bmapcfg.tiles_path + bmapcfg.satellite_path) :bmapcfg.home + "satellite";
        timg = timg + "/" + b + "/" + c + "/" + e + bmapcfg.imgext; //修改 使用本地卫星的瓦片 
        return timg;
        //return (Ed[Math.abs(c + e) % Ed.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Sb("satellite")).replace(/-(\d+)/gi, "M$1")
  }
  var Ya = new id('\u536b\u661f', od, {
      tips: '\u663e\u793a\u536b\u661f\u5f71\u50cf',
      minZoom: 1,
      maxZoom: 19,
      textColor: 'white',
    }),
    pd = new Mc({
      transparentPng: q,
    })
  pd.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = Sb('satelliteStreet')
     //说明：混合卫星图 在卫星图上叠加了一个透明图层，显示地址标注
        //改成了调用我们的瓦片的地址
        var timg =bmapcfg.tiles_hybrid.length>0? (bmapcfg.tiles_path +bmapcfg.tiles_hybrid + "/" + b + "/" + c + "/" + e + bmapcfg.imgext):(bmapcfg.home +"tiles_hybrid"+ "/" + b + "/" + c + "/" + e + bmapcfg.imgext);
        return timg;
  }
  var Sa = new id('\u6df7\u5408', [od, pd], {
    tips: '\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf',
    labelText: '\u8def\u7f51',
    minZoom: 1,
    maxZoom: 19,
    textColor: 'white',
  })
  var qd = 1,
    V = {}
  window.c1 = V
  function W(a, b) {
    z.lang.Ca.call(this)
    this.Ad = {}
    this.fn(a)
    b = b || {}
    b.la = b.renderOptions || {}
    this.j = {
      la: {
        Ma: b.la.panel || s,
        map: b.la.map || s,
        Zg: b.la.autoViewport || q,
        Ut: b.la.selectFirstResult,
        kt: b.la.highlightMode,
        Wb: b.la.enableDragging || t,
      },
      py: b.onSearchComplete || u(),
      BN: b.onMarkersSet || u(),
      AN: b.onInfoHtmlSet || u(),
      DN: b.onResultsHtmlSet || u(),
      zN: b.onGetBusListComplete || u(),
      yN: b.onGetBusLineComplete || u(),
      wN: b.onBusListHtmlSet || u(),
      vN: b.onBusLineHtmlSet || u(),
      bF: b.onPolylinesSet || u(),
      Dp: b.reqFrom || '',
    }
    this.j.la.Zg =
      'undefined' != typeof b &&
      'undefined' != typeof b.renderOptions &&
      'undefined' != typeof b.renderOptions.autoViewport
        ? b.renderOptions.autoViewport
        : q
    this.j.la.Ma = z.Fc(this.j.la.Ma)
  }
  z.ta(W, z.lang.Ca)
  z.extend(W.prototype, {
    getResults: function () {
      return this.Hc ? this.Ei : this.ha
    },
    enableAutoViewport: function () {
      this.j.la.Zg = q
    },
    disableAutoViewport: function () {
      this.j.la.Zg = t
    },
    fn: function (a) {
      a && (this.Ad.src = a)
    },
    JF: function (a) {
      this.j.py = a || u()
    },
    setMarkersSetCallback: function (a) {
      this.j.BN = a || u()
    },
    setPolylinesSetCallback: function (a) {
      this.j.bF = a || u()
    },
    setInfoHtmlSetCallback: function (a) {
      this.j.AN = a || u()
    },
    setResultsHtmlSetCallback: function (a) {
      this.j.DN = a || u()
    },
    xm: w('Me'),
  })
  var rd = {
    KG: B.Wc,
    ab: function (a, b, c, e, f) {
      this.SZ(b)
      var g = (1e5 * Math.random()).toFixed(0)
      B._rd['_cbk' + g] = function (b) {
        b.result && b.result.error && 202 === b.result.error
          ? alert(
              '\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01'
            )
          : ((c = c || {}), a && a(b, c), delete B._rd['_cbk' + g])
      }
      e = e || ''
      b = c && c.H0 ? Gb(b, encodeURI) : Gb(b, encodeURIComponent)
      this.KG = c && c.jL ? (c.$N ? c.$N : B.vp) : B.Wc
      e = this.KG + e + '?' + b + '&ie=utf-8&oue=1&fromproduct=jsapi'
      f || (e += '&res=api')
      e = e + ('&callback=BMap._rd._cbk' + g) + ('&ak=' + qa)
      oa(e)
    },
    SZ: function (a) {
      if (a.qt) {
        var b = ''
        switch (a.qt) {
          case 'bt':
            b = 'z_qt|bt'
            break
          case 'nav':
            b = 'z_qt|nav'
            break
          case 'walk':
            b = 'z_qt|walk'
            break
          case 'bse':
            b = 'z_qt|bse'
            break
          case 'nse':
            b = 'z_qt|nse'
            break
          case 'drag':
            b = 'z_qt|drag'
        }
        '' !== b && B.alog('cus.fire', 'count', b)
      }
    },
  }
  window.o1 = rd
  B._rd = {}
  var ab = {}
  window.n1 = ab
  ab.WN = function (a) {
    a = a.replace(/<\/?[^>]*>/g, '')
    return (a = a.replace(/[ | ]* /g, ' '))
  }
  ab.JZ = function (a) {
    return a.replace(
      /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
      '$1,$2;'
    )
  }
  ab.KZ = function (a, b) {
    return a.replace(
      RegExp(
        '(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){' +
          b +
          '}',
        'ig'
      ),
      '$1'
    )
  }
  var sd = 2,
    td = 6,
    ud = 8,
    vd = 2,
    wd = 3,
    xd = 6,
    yd = 0,
    zd = 'bt',
    Ad = 'nav',
    Bd = 'walk',
    Cd = 'bl',
    Dd = 'bsl',
    Ed = 'ride',
    Fd = 15,
    Gd = 18
  B.I = window.Instance = z.lang.Nc
  function Hd(a, b, c) {
    z.lang.Ca.call(this)
    if (a) {
      this.Wa = 'object' == typeof a ? a : z.Fc(a)
      this.page = 1
      this.Kd = 100
      this.hK = 'pg'
      this.Xf = 4
      this.qK = b
      this.update = q
      a = {
        page: 1,
        $e: 100,
        Kd: 100,
        Xf: 4,
        hK: 'pg',
        update: q,
      }
      c || (c = a)
      for (var e in c) 'undefined' != typeof c[e] && (this[e] = c[e])
      this.va()
    }
  }
  z.extend(Hd.prototype, {
    va: function () {
      this.na()
    },
    na: function () {
      this.YV()
      this.Wa.innerHTML = this.uW()
    },
    YV: function () {
      isNaN(parseInt(this.page)) && (this.page = 1)
      isNaN(parseInt(this.Kd)) && (this.Kd = 1)
      1 > this.page && (this.page = 1)
      1 > this.Kd && (this.Kd = 1)
      this.page > this.Kd && (this.page = this.Kd)
      this.page = parseInt(this.page)
      this.Kd = parseInt(this.Kd)
    },
    G3: function () {
      location.search.match(RegExp('[?&]?' + this.hK + '=([^&]*)[&$]?', 'gi'))
      this.page = RegExp.$1
    },
    uW: function () {
      var a = [],
        b = this.page - 1,
        c = this.page + 1
      a.push('<p style="margin:0;padding:0;white-space:nowrap">')
      if (!(1 > b)) {
        if (this.page >= this.Xf) {
          var e
          a.push(
            '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace(
              '{temp1}',
              "BMap.I('" + this.aa + "').toPage(1);"
            )
          )
        }
        a.push(
          '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace(
            '{temp2}',
            "BMap.I('" + this.aa + "').toPage(" + b + ');'
          )
        )
      }
      if (this.page < this.Xf)
        (e =
          0 == this.page % this.Xf
            ? this.page - this.Xf - 1
            : this.page - (this.page % this.Xf) + 1),
          (b = e + this.Xf - 1)
      else {
        e = Math.floor(this.Xf / 2)
        var f = (this.Xf % 2) - 1,
          b = this.Kd > this.page + e ? this.page + e : this.Kd
        e = this.page - e - f
      }
      this.page > this.Kd - this.Xf &&
        this.page >= this.Xf &&
        ((e = this.Kd - this.Xf + 1), (b = this.Kd))
      for (f = e; f <= b; f++)
        0 < f &&
          (f == this.page
            ? a.push('<span style="margin-right:3px">' + f + '</span>')
            : 1 <= f &&
              f <= this.Kd &&
              ((e =
                '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' +
                f +
                ']</a></span>'),
              a.push(
                e.replace(
                  '{temp3}',
                  "BMap.I('" + this.aa + "').toPage(" + f + ');'
                )
              )))
      c > this.Kd ||
        a.push(
          '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace(
            '{temp4}',
            "BMap.I('" + this.aa + "').toPage(" + c + ');'
          )
        )
      a.push('</p>')
      return a.join('')
    },
    toPage: function (a) {
      a = a ? a : 1
      'function' == typeof this.qK && (this.qK(a), (this.page = a))
      this.update && this.va()
    },
  })
  function cb(a, b) {
    W.call(this, a, b)
    b = b || {}
    b.renderOptions = b.renderOptions || {}
    this.Np(b.pageCapacity)
    'undefined' != typeof b.renderOptions.selectFirstResult &&
    !b.renderOptions.selectFirstResult
      ? this.UC()
      : this.oD()
    this.ya = []
    this.yf = []
    this.mb = -1
    this.Pa = []
    var c = this
    K.load(
      'local',
      function () {
        c.Nz()
      },
      q
    )
  }
  z.ta(cb, W, 'LocalSearch')
  cb.fq = 10
  cb.k1 = 1
  cb.En = 100
  cb.zG = 2e3
  cb.HG = 1e5
  z.extend(cb.prototype, {
    search: function (a, b) {
      this.Pa.push({
        method: 'search',
        arguments: [a, b],
      })
    },
    an: function (a, b, c) {
      this.Pa.push({
        method: 'searchInBounds',
        arguments: [a, b, c],
      })
    },
    Jp: function (a, b, c, e) {
      this.Pa.push({
        method: 'searchNearby',
        arguments: [a, b, c, e],
      })
    },
    Pe: function () {
      delete this.Ia
      delete this.Me
      delete this.ha
      delete this.ua
      this.mb = -1
      this.Ta()
      this.j.la.Ma && (this.j.la.Ma.innerHTML = '')
    },
    Am: u(),
    oD: function () {
      this.j.la.Ut = q
    },
    UC: function () {
      this.j.la.Ut = t
    },
    Np: function (a) {
      this.j.Jk =
        'number' == typeof a && !isNaN(a)
          ? 1 > a
            ? cb.fq
            : a > cb.En
            ? cb.fq
            : a
          : cb.fq
    },
    qf: function () {
      return this.j.Jk
    },
    toString: ca('LocalSearch'),
  })
  var Id = cb.prototype
  T(Id, {
    clearResults: Id.Pe,
    setPageCapacity: Id.Np,
    getPageCapacity: Id.qf,
    gotoPage: Id.Am,
    searchNearby: Id.Jp,
    searchInBounds: Id.an,
    search: Id.search,
    enableFirstResultSelection: Id.oD,
    disableFirstResultSelection: Id.UC,
  })
  function Jd(a, b) {
    W.call(this, a, b)
  }
  z.ta(Jd, W, 'BaseRoute')
  z.extend(Jd.prototype, {
    Pe: u(),
  })
  function Kd(a, b) {
    W.call(this, a, b)
    b = b || {}
    this.bu(b.policy)
    this.oO(b.intercityPolicy)
    this.xO(b.transitTypePolicy)
    this.Np(b.pageCapacity)
    this.Ab = zd
    this.mq = qd
    this.ya = []
    this.mb = -1
    this.j.Vn = b.enableTraffic || t
    this.Pa = []
    var c = this
    K.load('route', function () {
      c.Sd()
    })
  }
  Kd.En = 100
  Kd.HP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1]
  Kd.IP = [0, 3, 4, 0, 0, 0, 5]
  z.ta(Kd, Jd, 'TransitRoute')
  z.extend(Kd.prototype, {
    bu: function (a) {
      this.j.ie = 0 <= a && 5 >= a ? a : 0
    },
    oO: function (a) {
      this.j.Hm = 0 <= a && 2 >= a ? a : 0
    },
    xO: function (a) {
      this.j.tn = 0 <= a && 2 >= a ? a : 0
    },
    NA: function (a, b) {
      this.Pa.push({
        method: '_internalSearch',
        arguments: [a, b],
      })
    },
    search: function (a, b) {
      this.Pa.push({
        method: 'search',
        arguments: [a, b],
      })
    },
    Np: function (a) {
      if ('string' === typeof a && ((a = parseInt(a, 10)), isNaN(a))) {
        this.j.Jk = Kd.En
        return
      }
      this.j.Jk =
        'number' !== typeof a
          ? Kd.En
          : 1 <= a && a <= Kd.En
          ? Math.round(a)
          : Kd.En
    },
    toString: ca('TransitRoute'),
    Z1: function (a) {
      return a.replace(/\(.*\)/, '')
    },
  })
  var Ld = Kd.prototype
  T(Ld, {
    _internalSearch: Ld.NA,
  })
  function Md(a, b) {
    W.call(this, a, b)
    this.ya = []
    this.mb = -1
    this.Pa = []
    var c = this,
      e = this.j.la
    1 !== e.kt && 2 !== e.kt && (e.kt = 1)
    this.kv = this.j.la.Wb ? q : t
    K.load('route', function () {
      c.Sd()
    })
    this.vE && this.vE()
  }
  Md.WP =
    ' \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053'.split(
      ' '
    )
  z.ta(Md, Jd, 'DWRoute')
  z.extend(Md.prototype, {
    search: function (a, b, c) {
      this.Pa.push({
        method: 'search',
        arguments: [a, b, c],
      })
    },
  })
  function Nd(a, b) {
    Md.call(this, a, b)
    b = b || {}
    this.j.Vn = b.enableTraffic || t
    this.bu(b.policy)
    this.Ab = Ad
    this.mq = wd
  }
  z.ta(Nd, Md, 'DrivingRoute')
  Nd.prototype.bu = function (a) {
    this.j.ie = 0 <= a && 5 >= a ? a : 0
  }
  function Od(a, b) {
    Md.call(this, a, b)
    this.Ab = Bd
    this.mq = vd
    this.kv = t
  }
  z.ta(Od, Md, 'WalkingRoute')
  function Pd(a, b) {
    Md.call(this, a, b)
    this.Ab = Ed
    this.mq = xd
    this.kv = t
  }
  z.ta(Pd, Md, 'RidingRoute')
  function Qd(a, b) {
    z.lang.Ca.call(this)
    this.Vf = []
    this.Kk = []
    this.j = b
    this.uj = a
    this.map = this.j.la.map || s
    this.hO = this.j.hO
    this.zb = s
    this.pk = 0
    this.SF = ''
    this.nf = 1
    this.uD = ''
    this.Ep = [0, 0, 0, 0, 0, 0, 0]
    this.XM = []
    this.os = [1, 1, 1, 1, 1, 1, 1]
    this.VO = [1, 1, 1, 1, 1, 1, 1]
    this.Fp = [0, 0, 0, 0, 0, 0, 0]
    this.Zm = [0, 0, 0, 0, 0, 0, 0]
    this.Ib = [
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
      {
        m: '',
        Ed: 0,
        vn: 0,
        x: 0,
        y: 0,
        pa: -1,
      },
    ]
    this.bi = -1
    this.ru = []
    this.aG = []
    K.load('route', u())
  }
  z.lang.ta(Qd, z.lang.Ca, 'RouteAddr')
  var Rd = navigator.userAgent
  ;/ipad|iphone|ipod|iph/i.test(Rd)
  var Sd = /android/i.test(Rd)
  function Td(a) {
    this.vf = a || {}
  }
  z.extend(Td.prototype, {
    gO: function (a, b, c) {
      var e = this
      K.load('route', function () {
        e.Sd(a, b, c)
      })
    },
  })
  function Ud(a) {
    this.j = {}
    z.extend(this.j, a)
    this.Pa = []
    var b = this
    K.load('othersearch', function () {
      b.Sd()
    })
  }
  z.ta(Ud, z.lang.Ca, 'Geocoder')
  z.extend(Ud.prototype, {
    vm: function (a, b, c) {
      this.Pa.push({
        method: 'getPoint',
        arguments: [a, b, c],
      })
    },
    rm: function (a, b, c) {
      this.Pa.push({
        method: 'getLocation',
        arguments: [a, b, c],
      })
    },
    toString: ca('Geocoder'),
  })
  var Vd = Ud.prototype
  T(Vd, {
    getPoint: Vd.vm,
    getLocation: Vd.rm,
  })
  function Geolocation(a) {
    a = a || {}
    this.K = {
      timeout: a.timeout || 1e4,
      maximumAge: a.maximumAge || 6e5,
      enableHighAccuracy: a.enableHighAccuracy || t,
      zi: a.SDKLocation || t,
    }
    this.pe = []
    var b = this
    K.load('othersearch', function () {
      for (var a = 0, e; (e = b.pe[a]); a++) b[e.method].apply(b, e.arguments)
    })
  }
  z.extend(Geolocation.prototype, {
    getCurrentPosition: function (a, b) {
      this.pe.push({
        method: 'getCurrentPosition',
        arguments: arguments,
      })
    },
    getStatus: function () {
      return sd
    },
    enableSDKLocation: function () {
      H() && (this.K.zi = q)
    },
    disableSDKLocation: function () {
      this.K.zi = t
    },
  })
  function Wd(a) {
    a = a || {}
    a.la = a.renderOptions || {}
    this.j = {
      la: {
        map: a.la.map || s,
      },
    }
    this.Pa = []
    var b = this
    K.load('othersearch', function () {
      b.Sd()
    })
  }
  z.ta(Wd, z.lang.Ca, 'LocalCity')
  z.extend(Wd.prototype, {
    get: function (a) {
      this.Pa.push({
        method: 'get',
        arguments: [a],
      })
    },
    toString: ca('LocalCity'),
  })
  function Xd() {
    this.Pa = []
    var a = this
    K.load('othersearch', function () {
      a.Sd()
    })
  }
  z.ta(Xd, z.lang.Ca, 'Boundary')
  z.extend(Xd.prototype, {
    get: function (a, b) {
      this.Pa.push({
        method: 'get',
        arguments: [a, b],
      })
    },
    toString: ca('Boundary'),
  })
  function Yd(a, b) {
    W.call(this, a, b)
    this.TP = Cd
    this.VP = Fd
    this.SP = Dd
    this.UP = Gd
    this.Pa = []
    var c = this
    K.load('buslinesearch', function () {
      c.Sd()
    })
  }
  Yd.zv = G.qa + 'iw_plus.gif'
  Yd.YS = G.qa + 'iw_minus.gif'
  Yd.RU = G.qa + 'stop_icon.png'
  z.ta(Yd, W)
  z.extend(Yd.prototype, {
    getBusList: function (a) {
      this.Pa.push({
        method: 'getBusList',
        arguments: [a],
      })
    },
    getBusLine: function (a) {
      this.Pa.push({
        method: 'getBusLine',
        arguments: [a],
      })
    },
    setGetBusListCompleteCallback: function (a) {
      this.j.zN = a || u()
    },
    setGetBusLineCompleteCallback: function (a) {
      this.j.yN = a || u()
    },
    setBusListHtmlSetCallback: function (a) {
      this.j.wN = a || u()
    },
    setBusLineHtmlSetCallback: function (a) {
      this.j.vN = a || u()
    },
    setPolylinesSetCallback: function (a) {
      this.j.bF = a || u()
    },
  })
  function Zd(a) {
    W.call(this, a)
    a = a || {}
    this.ub = {
      input: a.input || s,
      gC: a.baseDom || s,
      types: a.types || [],
      py: a.onSearchComplete || u(),
    }
    this.Ad.src = a.location || '\u5168\u56fd'
    this.Wi = ''
    this.pg = s
    this.lI = ''
    this.Mi()
    Ra(Ha)
    var b = this
    K.load('autocomplete', function () {
      b.Sd()
    })
  }
  z.ta(Zd, W, 'Autocomplete')
  z.extend(Zd.prototype, {
    Mi: u(),
    show: u(),
    U: u(),
    KF: function (a) {
      this.ub.types = a
    },
    fn: function (a) {
      this.Ad.src = a
    },
    search: ba('Wi'),
    Ly: ba('lI'),
  })
  var Ta
  function Oa(a, b) {
    function c() {
      f.j.visible
        ? ('inter' === f.Ke && f.j.haveBreakId && f.j.indoorExitControl === q
            ? z.D.show(f.GA)
            : z.D.U(f.GA),
          this.j.closeControl && this.Bf && this.B && this.B.La() === this.C
            ? z.D.show(f.Bf)
            : z.D.U(f.Bf),
          this.j.forceCloseControl && z.D.show(f.Bf))
        : (z.D.U(f.Bf), z.D.U(f.GA))
    }
    this.C = 'string' == typeof a ? z.$(a) : a
    this.aa = $d++
    this.j = {
      enableScrollWheelZoom: q,
      panoramaRenderer: 'flash',
      swfSrc: B.vg('main_domain_nocdn', 'res/swf/') + 'APILoader.swf',
      visible: q,
      indoorExitControl: q,
      indoorFloorControl: t,
      linksControl: q,
      clickOnRoad: q,
      navigationControl: q,
      closeControl: q,
      indoorSceneSwitchControl: q,
      albumsControl: t,
      albumsControlOptions: {},
      copyrightControlOptions: {},
      forceCloseControl: t,
      haveBreakId: t,
    }
    var b = b || {},
      e
    for (e in b) this.j[e] = b[e]
    b.closeControl === q && (this.j.forceCloseControl = q)
    b.useWebGL === t && Na(t)
    this.Da = {
      heading: 0,
      pitch: 0,
    }
    this.bo = []
    this.Lb = this.Za = s
    this.dk = this.er()
    this.ya = []
    this.Mc = 1
    this.Ke = this.xT = this.jl = ''
    this.Je = {}
    this.Of = s
    this.Sg = []
    this.xr = []
    'cvsRender' == this.dk || Na()
      ? ((this.Vj = 90), (this.Xj = -90))
      : 'cssRender' == this.dk && ((this.Vj = 45), (this.Xj = -45))
    this.Br = t
    var f = this
    this.co = function () {
      this.dk === 'flashRender'
        ? K.load(
            'panoramaflash',
            function () {
              f.Mi()
            },
            q
          )
        : K.load(
            'panorama',
            function () {
              f.ib()
            },
            q
          )
      b.of == 'api' ? Ra(Da) : Ra(Ea)
      this.co = u()
    }
    this.j.jT !== q &&
      (this.co(), B.Fn('cus.fire', 'count', 'z_loadpanoramacount'))
    this.aU(this.C)
    this.addEventListener('id_changed', function () {
      Ra(Ca, {
        from: b.of,
      })
    })
    this.mQ()
    this.addEventListener('indoorexit_options_changed', c)
    this.addEventListener('scene_type_changed', c)
    this.addEventListener('onclose_options_changed', c)
    this.addEventListener('onvisible_changed', c)
  }
  var ae = 4,
    be = 1,
    $d = 0
  z.lang.ta(Oa, z.lang.Ca, 'Panorama')
  z.extend(Oa.prototype, {
    mQ: function () {
      var a = this,
        b = (this.Bf = L('div'))
      b.className = 'pano_close'
      b.style.cssText = 'z-index: 1201;display: none'
      b.title = '\u9000\u51fa\u5168\u666f'
      b.onclick = function () {
        a.U()
      }
      this.C.appendChild(b)
      var c = (this.GA = L('a'))
      c.className = 'pano_pc_indoor_exit'
      c.style.cssText = 'z-index: 1201;display: none'
      c.innerHTML =
        '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>'
      c.title = '\u9000\u51fa\u5ba4\u5185\u666f'
      c.onclick = function () {
        a.Vo()
      }
      this.C.appendChild(c)
      window.ActiveXObject &&
        !document.addEventListener &&
        ((b.style.backgroundColor = 'rgb(37,37,37)'),
        (c.style.backgroundColor = 'rgb(37,37,37)'))
    },
    Vo: u(),
    aU: function (a) {
      var b, c
      b = a.style
      c = Va(a).position
      'absolute' != c &&
        'relative' != c &&
        ((b.position = 'relative'), (b.zIndex = 0))
      if ('absolute' === c || 'relative' === c)
        if (((a = Va(a).zIndex), !a || 'auto' === a)) b.zIndex = 0
    },
    OX: w('bo'),
    Xb: w('Za'),
    pY: w('jw'),
    wO: w('jw'),
    ga: w('Lb'),
    Ea: w('Da'),
    fa: w('Mc'),
    jj: w('jl'),
    I3: function () {
      return this.U1 || []
    },
    D3: w('xT'),
    ft: w('Ke'),
    Ny: function (a) {
      a !== this.Ke &&
        ((this.Ke = a), this.dispatchEvent(new P('onscene_type_changed')))
    },
    vc: function (a, b, c) {
      'object' === typeof b && ((c = b), (b = l))
      a != this.Za &&
        ((this.ul = this.Za),
        (this.vl = this.Lb),
        (this.Za = a),
        (this.Ke = b || 'street'),
        (this.Lb = s),
        c && c.pov && this.Pc(c.pov))
    },
    sa: function (a) {
      a.pb(this.Lb) ||
        ((this.ul = this.Za), (this.vl = this.Lb), (this.Lb = a), (this.Za = s))
    },
    Pc: function (a) {
      a &&
        ((this.Da = a),
        (a = this.Da.pitch),
        a > this.Vj ? (a = this.Vj) : a < this.Xj && (a = this.Xj),
        (this.Br = q),
        (this.Da.pitch = a))
    },
    H_: function (a, b) {
      this.Xj = 0 <= a ? 0 : a
      this.Vj = 0 >= b ? 0 : b
    },
    Qc: function (a) {
      a != this.Mc &&
        (a > ae && (a = ae),
        a < be && (a = be),
        a != this.Mc && (this.Mc = a),
        'cssRender' === this.dk && this.Pc(this.Da))
    },
    GB: function () {
      if (this.B)
        for (var a = this.B.Hx(), b = 0; b < a.length; b++)
          (a[b] instanceof U || a[b] instanceof uc) &&
            a[b].point &&
            this.ya.push(a[b])
    },
    GF: ba('B'),
    au: function (a) {
      this.Of = a || 'none'
    },
    Qk: function (a) {
      for (var b in a) {
        if ('object' == typeof a[b]) for (var c in a[b]) this.j[b][c] = a[b][c]
        else this.j[b] = a[b]
        a.closeControl === q && (this.j.forceCloseControl = q)
        a.closeControl === t && (this.j.forceCloseControl = t)
        switch (b) {
          case 'linksControl':
            this.dispatchEvent(new P('onlinks_visible_changed'))
            break
          case 'clickOnRoad':
            this.dispatchEvent(new P('onclickonroad_changed'))
            break
          case 'navigationControl':
            this.dispatchEvent(new P('onnavigation_visible_changed'))
            break
          case 'indoorSceneSwitchControl':
            this.dispatchEvent(new P('onindoor_default_switch_mode_changed'))
            break
          case 'albumsControl':
            this.dispatchEvent(new P('onalbums_visible_changed'))
            break
          case 'albumsControlOptions':
            this.dispatchEvent(new P('onalbums_options_changed'))
            break
          case 'copyrightControlOptions':
            this.dispatchEvent(new P('oncopyright_options_changed'))
            break
          case 'closeControl':
            this.dispatchEvent(new P('onclose_options_changed'))
            break
          case 'indoorExitControl':
            this.dispatchEvent(new P('onindoorexit_options_changed'))
            break
          case 'indoorFloorControl':
            this.dispatchEvent(new P('onindoorfloor_options_changed'))
        }
      }
    },
    Ek: function () {
      this.Dl.style.visibility = 'hidden'
    },
    Ry: function () {
      this.Dl.style.visibility = 'visible'
    },
    cX: function () {
      this.j.enableScrollWheelZoom = q
    },
    NW: function () {
      this.j.enableScrollWheelZoom = t
    },
    show: function () {
      this.j.visible = q
    },
    U: function () {
      this.j.visible = t
    },
    er: function () {
      return Ua() && !H() && 'javascript' != this.j.panoramaRenderer
        ? 'flashRender'
        : !H() && Ob()
        ? 'cvsRender'
        : 'cssRender'
    },
    Ga: function (a) {
      this.Je[a.ld] = a
    },
    Qb: function (a) {
      delete this.Je[a]
    },
    kE: function () {
      return this.j.visible
    },
    fh: function () {
      return new O(this.C.clientWidth, this.C.clientHeight)
    },
    La: w('C'),
    yL: function () {
      var a = B.vg('baidumap', '?'),
        b = this.Xb()
      if (b) {
        var b = {
            panotype: this.ft(),
            heading: this.Ea().heading,
            pitch: this.Ea().pitch,
            pid: b,
            panoid: b,
            from: 'api',
          },
          c
        for (c in b) a += c + '=' + b[c] + '&'
      }
      return a.slice(0, -1)
    },
    Px: function () {
      this.Qk({
        copyrightControlOptions: {
          logoVisible: t,
        },
      })
    },
    NF: function () {
      this.Qk({
        copyrightControlOptions: {
          logoVisible: q,
        },
      })
    },
    aC: function (a) {
      function b(a, b) {
        return function () {
          a.xr.push({
            iN: b,
            hN: arguments,
          })
        }
      }
      for (
        var c = a.getPanoMethodList(), e = '', f = 0, g = c.length;
        f < g;
        f++
      )
        (e = c[f]), (this[e] = b(this, e))
      this.Sg.push(a)
    },
    rF: function (a) {
      for (var b = this.Sg.length; b--; )
        this.Sg[b] === a && this.Sg.splice(b, 1)
    },
    FF: u(),
  })
  var ce = Oa.prototype
  T(ce, {
    setId: ce.vc,
    setPosition: ce.sa,
    setPov: ce.Pc,
    setZoom: ce.Qc,
    setOptions: ce.Qk,
    getId: ce.Xb,
    getPosition: ce.ga,
    getPov: ce.Ea,
    getZoom: ce.fa,
    getLinks: ce.OX,
    getBaiduMapUrl: ce.yL,
    hideMapLogo: ce.Px,
    showMapLogo: ce.NF,
    enableDoubleClickZoom: ce.W2,
    disableDoubleClickZoom: ce.J2,
    enableScrollWheelZoom: ce.cX,
    disableScrollWheelZoom: ce.NW,
    show: ce.show,
    hide: ce.U,
    addPlugin: ce.aC,
    removePlugin: ce.rF,
    getVisible: ce.kE,
    addOverlay: ce.Ga,
    removeOverlay: ce.Qb,
    getSceneType: ce.ft,
    setPanoramaPOIType: ce.au,
    exitInter: ce.Vo,
    setInteractiveState: ce.FF,
  })
  T(window, {
    BMAP_PANORAMA_POI_HOTEL: 'hotel',
    BMAP_PANORAMA_POI_CATERING: 'catering',
    BMAP_PANORAMA_POI_MOVIE: 'movie',
    BMAP_PANORAMA_POI_TRANSIT: 'transit',
    BMAP_PANORAMA_POI_INDOOR_SCENE: 'indoor_scene',
    BMAP_PANORAMA_POI_NONE: 'none',
    BMAP_PANORAMA_INDOOR_SCENE: 'inter',
    BMAP_PANORAMA_STREET_SCENE: 'street',
  })
  function de() {
    z.lang.Ca.call(this)
    this.ld = 'PanoramaOverlay_' + this.aa
    this.P = s
    this.Qa = q
  }
  z.lang.ta(de, z.lang.Ca, 'PanoramaOverlayBase')
  z.extend(de.prototype, {
    E3: w('ld'),
    na: function () {
      aa('initialize\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    remove: function () {
      aa('remove\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    Nf: function () {
      aa('_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
  })
  function ee(a, b) {
    de.call(this)
    var c = {
        position: s,
        altitude: 2,
        displayDistance: q,
      },
      b = b || {},
      e
    for (e in b) c[e] = b[e]
    this.Lb = c.position
    this.Ij = a
    this.xq = c.altitude
    this.zR = c.displayDistance
    this.UF = c.color
    this.kM = c.hoverColor
    this.backgroundColor = c.backgroundColor
    this.jK = c.backgroundHoverColor
    this.borderColor = c.borderColor
    this.oK = c.borderHoverColor
    this.fontSize = c.fontSize
    this.padding = c.padding
    this.pE = c.imageUrl
    this.size = c.size
    this.xe = c.image
    this.width = c.width
    this.height = c.height
    this.HY = c.imageData
    this.borderWidth = c.borderWidth
  }
  z.lang.ta(ee, de, 'PanoramaLabel')
  z.extend(ee.prototype, {
    j3: w('borderWidth'),
    getImageData: w('HY'),
    zm: w('UF'),
    y3: w('kM'),
    f3: w('backgroundColor'),
    g3: w('jK'),
    h3: w('borderColor'),
    i3: w('oK'),
    w3: w('fontSize'),
    F3: w('padding'),
    z3: w('pE'),
    cb: w('size'),
    zx: w('xe'),
    sa: function (a) {
      this.Lb = a
      this.Nf('position', a)
    },
    ga: w('Lb'),
    dd: function (a) {
      this.Ij = a
      this.Nf('content', a)
    },
    xk: w('Ij'),
    AF: function (a) {
      this.xq = a
      this.Nf('altitude', a)
    },
    Yo: w('xq'),
    Ea: function () {
      var a = this.ga(),
        b = s,
        c = s
      this.P && (c = this.P.ga())
      if (a && c)
        if (a.pb(c)) b = this.P.Ea()
        else {
          b = {}
          b.heading = fe(a.lng - c.lng, a.lat - c.lat) || 0
          var a = b,
            c = this.Yo(),
            e = this.Xn()
          a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
        }
      return b
    },
    Xn: function () {
      var a = 0,
        b,
        c
      this.P &&
        ((b = this.P.ga()), (c = this.ga()) && !c.pb(b) && (a = S.$o(b, c)))
      return a
    },
    U: function () {
      aa('hide\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    show: function () {
      aa('show\u65b9\u6cd5\u672a\u5b9e\u73b0')
    },
    Nf: u(),
  })
  var ge = ee.prototype
  T(ge, {
    setPosition: ge.sa,
    getPosition: ge.ga,
    setContent: ge.dd,
    getContent: ge.xk,
    setAltitude: ge.AF,
    getAltitude: ge.Yo,
    getPov: ge.Ea,
    show: ge.show,
    hide: ge.U,
  })
  function he(a, b) {
    de.call(this)
    var c = {
        icon: '',
        title: '',
        panoInfo: s,
        altitude: 2,
      },
      b = b || {},
      e
    for (e in b) c[e] = b[e]
    this.Lb = a
    this.gI = c.icon
    this.DJ = c.title
    this.xq = c.altitude
    this.OT = c.panoInfo
    this.Da = {
      heading: 0,
      pitch: 0,
    }
  }
  z.lang.ta(he, de, 'PanoramaMarker')
  z.extend(he.prototype, {
    sa: function (a) {
      this.Lb = a
      this.Nf('position', a)
    },
    ga: w('Lb'),
    Ec: function (a) {
      this.DJ = a
      this.Nf('title', a)
    },
    gp: w('DJ'),
    Rb: function (a) {
      this.gI = icon
      this.Nf('icon', a)
    },
    ap: w('gI'),
    AF: function (a) {
      this.xq = a
      this.Nf('altitude', a)
    },
    Yo: w('xq'),
    $D: w('OT'),
    Ea: function () {
      var a = s
      if (this.P) {
        var a = this.P.ga(),
          b = this.ga(),
          a = fe(b.lng - a.lng, b.lat - a.lat)
        isNaN(a) && (a = 0)
        a = {
          heading: a,
          pitch: 0,
        }
      } else a = this.Da
      return a
    },
    Nf: u(),
  })
  var ie = he.prototype
  T(ie, {
    setPosition: ie.sa,
    getPosition: ie.ga,
    setTitle: ie.Ec,
    getTitle: ie.gp,
    setAltitude: ie.AF,
    getAltitude: ie.Yo,
    getPanoInfo: ie.$D,
    getIcon: ie.ap,
    setIcon: ie.Rb,
    getPov: ie.Ea,
  })
  function fe(a, b) {
    var c = 0
    if (0 !== a && 0 !== b) {
      var c = 180 * (Math.atan(a / b) / Math.PI),
        e = 0
      0 < a && 0 > b && (e = 90)
      0 > a && 0 > b && (e = 180)
      0 > a && 0 < b && (e = 270)
      c = ((c + 90) % 90) + e
    } else 0 === a ? (c = 0 > b ? 180 : 0) : 0 === b && (c = 0 < a ? 90 : 270)
    return Math.round(c)
  }
  function Na(a) {
    if ('boolean' === typeof je) return je
    if (a === t || !window.WebGLRenderingContext) return (je = t)
    if (z.platform.Jm) {
      a = 0
      try {
        a = navigator.userAgent.split('Android ')[1].charAt(0)
      } catch (b) {}
      if (5 > a) return (je = t)
    }
    var a = document.createElement('canvas'),
      c = s
    try {
      c = a.getContext('webgl')
    } catch (e) {
      je = t
    }
    return (je = c === s ? t : q)
  }
  var je
  function ke() {
    if ('boolean' === typeof le) return le
    le = q
    if (z.platform.zE) return q
    var a = navigator.userAgent
    return -1 < a.indexOf('Chrome') || -1 < a.indexOf('SAMSUNG-GT-I9508')
      ? q
      : (le = t)
  }
  var le
  function ec(a, b) {
    this.P = a || s
    var c = this
    c.P && c.ba()
    K.load('pservice', function () {
      c.SQ()
    })
    'api' == (b || {}).of ? Ra(Fa) : Ra(Ga)
    this.xd = {
      getPanoramaById: [],
      getPanoramaByLocation: [],
      getVisiblePOIs: [],
      getRecommendPanosById: [],
      getPanoramaVersions: [],
      checkPanoSupportByCityCode: [],
      getPanoramaByPOIId: [],
      getCopyrightProviders: [],
    }
  }
  B.Tm(function (a) {
    'flashRender' !== a.er() &&
      new ec(a, {
        of: 'api',
      })
  })
  z.extend(ec.prototype, {
    ba: function () {
      function a(a) {
        if (a) {
          if (a.id != b.jw) {
            b.wO(a.id)
            b.ea = a
            ke() || b.dispatchEvent(new P('onthumbnail_complete'))
            b.Za != s && (b.vl = b._position)
            for (var c in a)
              if (a.hasOwnProperty(c))
                switch (((b['_' + c] = a[c]), c)) {
                  case 'position':
                    b.Lb = a[c]
                    break
                  case 'id':
                    b.Za = a[c]
                    break
                  case 'links':
                    b.bo = a[c]
                    break
                  case 'zoom':
                    b.Mc = a[c]
                }
            if (b.vl) {
              var g = b.vl,
                i = b._position
              c = g.lat
              var k = i.lat,
                m = Pb(k - c),
                g = Pb(i.lng - g.lng)
              c =
                Math.sin(m / 2) * Math.sin(m / 2) +
                Math.cos(Pb(c)) *
                  Math.cos(Pb(k)) *
                  Math.sin(g / 2) *
                  Math.sin(g / 2)
              b.wH = 6371e3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
            }
            c = new P('ondataload')
            c.data = a
            b.dispatchEvent(c)
            b.dispatchEvent(new P('onposition_changed'))
            b.dispatchEvent(new P('onlinks_changed'))
            b.dispatchEvent(new P('oncopyright_changed'), {
              copyright: a.copyright,
            })
            a.bm && b.j.closeControl ? z.D.show(b.WR) : z.D.U(b.WR)
          }
        } else
          (b.Za = b.ul), (b.Lb = b.vl), b.dispatchEvent(new P('onnoresult'))
      }
      var b = this.P,
        c = this
      b.addEventListener('id_changed', function () {
        c.ep(b.Xb(), a)
      })
      b.addEventListener('iid_changed', function () {
        c.Tg(ec.el + 'qt=idata&iid=' + b.CA + '&fn=', function (b) {
          if (b && b.result && 0 == b.result.error) {
            var b = b.content[0].interinfo,
              f = {}
            f.bm = b.BreakID
            for (var g = b.Defaultfloor, i = s, k = 0; k < b.Floors.length; k++)
              if (b.Floors[k].Floor == g) {
                i = b.Floors[k]
                break
              }
            f.id = i.StartID || i.Points[0].PID
            c.ep(f.id, a, f)
          }
        })
      })
      b.addEventListener('position_changed_inner', function () {
        c.kj(b.ga(), a)
      })
    },
    ep: function (a, b) {
      this.xd.getPanoramaById.push(arguments)
    },
    kj: function (a, b, c) {
      this.xd.getPanoramaByLocation.push(arguments)
    },
    lE: function (a, b, c, e) {
      this.xd.getVisiblePOIs.push(arguments)
    },
    Kx: function (a, b) {
      this.xd.getRecommendPanosById.push(arguments)
    },
    Jx: function (a) {
      this.xd.getPanoramaVersions.push(arguments)
    },
    nC: function (a, b) {
      this.xd.checkPanoSupportByCityCode.push(arguments)
    },
    Ix: function (a, b) {
      this.xd.getPanoramaByPOIId.push(arguments)
    },
    CL: function (a) {
      this.xd.getCopyrightProviders.push(arguments)
    },
  })
  var ne = ec.prototype
  T(ne, {
    getPanoramaById: ne.ep,
    getPanoramaByLocation: ne.kj,
    getPanoramaByPOIId: ne.Ix,
  })
  function dc(a) {
    Mc.call(this)
    'api' == (a || {}).of ? Ra(Aa) : Ra(Ba)
  }
  dc.OG = B.vg('pano', 'tile/')
  dc.prototype = new Mc()
  dc.prototype.getTilesUrl = function (a, b) {
    var c =
      dc.OG[(a.x + a.y) % dc.OG.length] +
      '?udt=20150114&qt=tile&styles=pl&x=' +
      a.x +
      '&y=' +
      a.y +
      '&z=' +
      b
    z.ca.ia && 6 >= z.ca.ia && (c += '&color_dep=32')
    return c
  }
  dc.prototype.zt = ca(q)
  oe.Wd = new S()
  function oe() {}
  z.extend(oe, {
    OW: function (a, b, c) {
      c = z.lang.Nc(c)
      b = {
        data: b,
      }
      'position_changed' == a &&
        (b.data = oe.Wd.xj(new Q(b.data.mercatorX, b.data.mercatorY)))
      c.dispatchEvent(new P('on' + a), b)
    },
  })
  var pe = oe
  T(pe, {
    dispatchFlashEvent: pe.OW,
  })
  var qe = {
    KP: 50,
  }
  qe.Ou = B.vg('pano')[0]
  qe.Mu = {
    width: 220,
    height: 60,
  }
  z.extend(qe, {
    tM: function (a, b, c, e) {
      if (!b || !c || !c.lngLat || !c.panoInstance) e()
      else {
        this.jo === l &&
          (this.jo = new ec(s, {
            of: 'api',
          }))
        var f = this
        this.jo.nC(b, function (b) {
          b
            ? f.jo.kj(c.lngLat, qe.KP, function (b) {
                if (b && b.id) {
                  var g = b.id,
                    m = b.rh,
                    b = b.th,
                    n = ec.Wd.kh(c.lngLat),
                    o = f.AS(n, {
                      x: m,
                      y: b,
                    }),
                    m = f.PL(g, o, 0, qe.Mu.width, qe.Mu.height)
                  a.content = f.BS(a.content, m, c.titleTip, c.beforeDomId)
                  a.addEventListener('open', function () {
                    ia.M(z.Fc('infoWndPano'), 'click', function () {
                      c.panoInstance.vc(g)
                      c.panoInstance.show()
                      c.panoInstance.Pc({
                        heading: o,
                        pitch: 0,
                      })
                    })
                  })
                }
                e()
              })
            : e()
        })
      }
    },
    BS: function (a, b, c, e) {
      var c = c || '',
        f
      !e || !a.split(e)[0]
        ? ((e = a), (a = ''))
        : ((e = a.split(e)[0]),
          (f = e.lastIndexOf('<')),
          (e = a.substring(0, f)),
          (a = a.substring(f)))
      f = []
      var g = qe.Mu.width,
        i = qe.Mu.height
      f.push(e)
      f.push(
        "<div id='infoWndPano' class='panoInfoBox' style='height:" +
          i +
          'px;width:' +
          g +
          "px; margin-top: -19px;'>"
      )
      f.push(
        "<img class='pano_thumnail_img' width='" +
          g +
          "' height='" +
          i +
          "' border='0' alt='" +
          c +
          "\u5916\u666f' title='" +
          c +
          "\u5916\u666f' src='" +
          b +
          "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " +
          g +
          ', ' +
          i +
          ");' />"
      )
      f.push(
        "<div class='panoInfoBoxTitleBg' style='width:" +
          g +
          "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>"
      )
      f.push('</div>')
      f.push(a)
      return f.join('')
    },
    AS: function (a, b) {
      var c = 90 - (180 * Math.atan2(a.y - b.y, a.x - b.x)) / Math.PI
      0 > c && (c += 360)
      return c
    },
    PL: function (a, b, c, e, f) {
      var g = {
        panoId: a,
        panoHeading: b || 0,
        panoPitch: c || 0,
        width: e,
        height: f,
      }
      return (
        qe.Ou +
        '?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}'
      ).replace(/\{(.*?)\}/g, function (a, b) {
        return g[b]
      })
    },
  })
  var te = document,
    ue = Math,
    ve = te.createElement('div').style,
    we
  a: {
    for (
      var xe = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
        ye,
        ze = 0,
        Ae = xe.length;
      ze < Ae;
      ze++
    )
      if (((ye = xe[ze] + 'ransform'), ye in ve)) {
        we = xe[ze].substr(0, xe[ze].length - 1)
        break a
      }
    we = t
  }
  var Be = we ? '-' + we.toLowerCase() + '-' : '',
    De = Ce('transform'),
    Ee = Ce('transitionProperty'),
    Fe = Ce('transitionDuration'),
    Ge = Ce('transformOrigin'),
    He = Ce('transitionTimingFunction'),
    Ie = Ce('transitionDelay'),
    Sd = /android/gi.test(navigator.appVersion),
    Je = /iphone|ipad/gi.test(navigator.appVersion),
    Ke = /hp-tablet/gi.test(navigator.appVersion),
    Le = Ce('perspective') in ve,
    Me = 'ontouchstart' in window && !Ke,
    Ne = we !== t,
    Oe = Ce('transition') in ve,
    Pe = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    Qe = Me ? 'touchstart' : 'mousedown',
    Re = Me ? 'touchmove' : 'mousemove',
    Se = Me ? 'touchend' : 'mouseup',
    Te = Me ? 'touchcancel' : 'mouseup',
    Ue =
      we === t
        ? t
        : {
            '': 'transitionend',
            webkit: 'webkitTransitionEnd',
            Moz: 'transitionend',
            O: 'otransitionend',
            ms: 'MSTransitionEnd',
          }[we],
    Ve =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (a) {
        return setTimeout(a, 1)
      },
    We =
      window.cancelRequestAnimationFrame ||
      window.U5 ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout,
    Xe = Le ? ' translateZ(0)' : ''
  function Ye(a, b) {
    var c = this,
      e
    c.zn = 'object' == typeof a ? a : te.getElementById(a)
    c.zn.style.overflow = 'hidden'
    c.Nb = c.zn.children[0]
    c.options = {
      kp: q,
      xn: q,
      x: 0,
      y: 0,
      Go: q,
      LV: t,
      iy: q,
      OE: q,
      Yk: q,
      wi: t,
      n0: 0,
      Pw: t,
      Mx: q,
      ii: q,
      xi: q,
      AD: Sd,
      Qx: Je,
      kX: Je && Le,
      xF: '',
      zoom: t,
      $k: 1,
      aq: 4,
      QW: 2,
      qP: 'scroll',
      iu: t,
      Uy: 1,
      CN: s,
      uN: function (a) {
        a.preventDefault()
      },
      FN: s,
      tN: s,
      EN: s,
      sN: s,
      oy: s,
      GN: s,
      xN: s,
      zp: s,
      HN: s,
      yp: s,
    }
    for (e in b) c.options[e] = b[e]
    c.x = c.options.x
    c.y = c.options.y
    c.options.Yk = Ne && c.options.Yk
    c.options.ii = c.options.kp && c.options.ii
    c.options.xi = c.options.xn && c.options.xi
    c.options.zoom = c.options.Yk && c.options.zoom
    c.options.wi = Oe && c.options.wi
    c.options.zoom && Sd && (Xe = '')
    c.Nb.style[Ee] = c.options.Yk ? Be + 'transform' : 'top left'
    c.Nb.style[Fe] = '0'
    c.Nb.style[Ge] = '0 0'
    c.options.wi && (c.Nb.style[He] = 'cubic-bezier(0.33,0.66,0.66,1)')
    c.options.Yk
      ? (c.Nb.style[De] = 'translate(' + c.x + 'px,' + c.y + 'px)' + Xe)
      : (c.Nb.style.cssText +=
          ';position:absolute;top:' + c.y + 'px;left:' + c.x + 'px')
    c.options.wi && (c.options.AD = q)
    c.refresh()
    c.ba(Pe, window)
    c.ba(Qe)
    !Me &&
      'none' != c.options.qP &&
      (c.ba('DOMMouseScroll'), c.ba('mousewheel'))
    c.options.Pw &&
      (c.XV = setInterval(function () {
        c.PQ()
      }, 500))
    this.options.Mx &&
      (Event.prototype.stopImmediatePropagation ||
        ((document.body.removeEventListener = function (a, b, c) {
          var e = Node.prototype.removeEventListener
          a === 'click'
            ? e.call(document.body, a, b.iM || b, c)
            : e.call(document.body, a, b, c)
        }),
        (document.body.addEventListener = function (a, b, c) {
          var e = Node.prototype.addEventListener
          a === 'click'
            ? e.call(
                document.body,
                a,
                b.iM ||
                  (b.iM = function (a) {
                    a.RZ || b(a)
                  }),
                c
              )
            : e.call(document.body, a, b, c)
        })),
      c.ba('click', document.body, q))
  }
  Ye.prototype = {
    enabled: q,
    x: 0,
    y: 0,
    yj: [],
    scale: 1,
    HC: 0,
    IC: 0,
    We: [],
    wf: [],
    fC: s,
    cz: 0,
    handleEvent: function (a) {
      switch (a.type) {
        case Qe:
          if (!Me && 0 !== a.button) break
          this.aw(a)
          break
        case Re:
          this.zT(a)
          break
        case Se:
        case Te:
          this.lv(a)
          break
        case Pe:
          this.zB()
          break
        case 'DOMMouseScroll':
        case 'mousewheel':
          this.eV(a)
          break
        case Ue:
          this.$U(a)
          break
        case 'click':
          this.$Q(a)
      }
    },
    PQ: function () {
      !this.oh &&
        !this.al &&
        !(
          this.Yl ||
          (this.Ky == this.Nb.offsetWidth * this.scale &&
            this.Ip == this.Nb.offsetHeight * this.scale)
        ) &&
        this.refresh()
    },
    Sv: function (a) {
      var b
      this[a + 'Scrollbar']
        ? (this[a + 'ScrollbarWrapper'] ||
            ((b = te.createElement('div')),
            this.options.xF
              ? (b.className = this.options.xF + a.toUpperCase())
              : (b.style.cssText =
                  'position:absolute;z-index:100;' +
                  ('h' == a
                    ? 'height:7px;bottom:1px;left:2px;right:' +
                      (this.xi ? '7' : '2') +
                      'px'
                    : 'width:7px;bottom:' +
                      (this.ii ? '7' : '2') +
                      'px;top:2px;right:1px')),
            (b.style.cssText +=
              ';pointer-events:none;' +
              Be +
              'transition-property:opacity;' +
              Be +
              'transition-duration:' +
              (this.options.kX ? '350ms' : '0') +
              ';overflow:hidden;opacity:' +
              (this.options.Qx ? '0' : '1')),
            this.zn.appendChild(b),
            (this[a + 'ScrollbarWrapper'] = b),
            (b = te.createElement('div')),
            this.options.xF ||
              (b.style.cssText =
                'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' +
                Be +
                'background-clip:padding-box;' +
                Be +
                'box-sizing:border-box;' +
                ('h' == a ? 'height:100%' : 'width:100%') +
                ';' +
                Be +
                'border-radius:3px;border-radius:3px'),
            (b.style.cssText +=
              ';pointer-events:none;' +
              Be +
              'transition-property:' +
              Be +
              'transform;' +
              Be +
              'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' +
              Be +
              'transition-duration:0;' +
              Be +
              'transform: translate(0,0)' +
              Xe),
            this.options.wi &&
              (b.style.cssText +=
                ';' +
                Be +
                'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)'),
            this[a + 'ScrollbarWrapper'].appendChild(b),
            (this[a + 'ScrollbarIndicator'] = b)),
          'h' == a
            ? ((this.fM = this.gM.clientWidth),
              (this.yY = ue.max(ue.round((this.fM * this.fM) / this.Ky), 8)),
              (this.xY.style.width = this.yY + 'px'))
            : ((this.iP = this.jP.clientHeight),
              (this.L0 = ue.max(ue.round((this.iP * this.iP) / this.Ip), 8)),
              (this.K0.style.height = this.L0 + 'px')),
          this.AB(a, q))
        : this[a + 'ScrollbarWrapper'] &&
          (Ne && (this[a + 'ScrollbarIndicator'].style[De] = ''),
          this[a + 'ScrollbarWrapper'].parentNode.removeChild(
            this[a + 'ScrollbarWrapper']
          ),
          (this[a + 'ScrollbarWrapper'] = s),
          (this[a + 'ScrollbarIndicator'] = s))
    },
    zB: function () {
      var a = this
      setTimeout(
        function () {
          a.refresh()
        },
        Sd ? 200 : 0
      )
    },
    Ar: function (a, b) {
      this.al ||
        ((a = this.kp ? a : 0),
        (b = this.xn ? b : 0),
        this.options.Yk
          ? (this.Nb.style[De] =
              'translate(' +
              a +
              'px,' +
              b +
              'px) scale(' +
              this.scale +
              ')' +
              Xe)
          : ((a = ue.round(a)),
            (b = ue.round(b)),
            (this.Nb.style.left = a + 'px'),
            (this.Nb.style.top = b + 'px')),
        (this.x = a),
        (this.y = b),
        this.AB('h'),
        this.AB('v'))
    },
    AB: function (a, b) {
      var c = 'h' == a ? this.x : this.y
      this[a + 'Scrollbar'] &&
        ((c *= this[a + 'ScrollbarProp']),
        0 > c
          ? (this.options.AD ||
              ((c = this[a + 'ScrollbarIndicatorSize'] + ue.round(3 * c)),
              8 > c && (c = 8),
              (this[a + 'ScrollbarIndicator'].style[
                'h' == a ? 'width' : 'height'
              ] = c + 'px')),
            (c = 0))
          : c > this[a + 'ScrollbarMaxScroll'] &&
            (this.options.AD
              ? (c = this[a + 'ScrollbarMaxScroll'])
              : ((c =
                  this[a + 'ScrollbarIndicatorSize'] -
                  ue.round(3 * (c - this[a + 'ScrollbarMaxScroll']))),
                8 > c && (c = 8),
                (this[a + 'ScrollbarIndicator'].style[
                  'h' == a ? 'width' : 'height'
                ] = c + 'px'),
                (c =
                  this[a + 'ScrollbarMaxScroll'] +
                  (this[a + 'ScrollbarIndicatorSize'] - c)))),
        (this[a + 'ScrollbarWrapper'].style[Ie] = '0'),
        (this[a + 'ScrollbarWrapper'].style.opacity =
          b && this.options.Qx ? '0' : '1'),
        (this[a + 'ScrollbarIndicator'].style[De] =
          'translate(' + ('h' == a ? c + 'px,0)' : '0,' + c + 'px)') + Xe))
    },
    $Q: function (a) {
      if (a.XR === q) return (this.YB = a.target), (this.sx = Date.now()), q
      if (this.YB && this.sx) {
        if (600 < Date.now() - this.sx) return (this.sx = this.YB = s), q
      } else {
        for (var b = a.target; b != this.Nb && b != document.body; )
          b = b.parentNode
        if (b == document.body) return q
      }
      for (b = a.target; 1 != b.nodeType; ) b = b.parentNode
      b = b.tagName.toLowerCase()
      if ('select' != b && 'input' != b && 'textarea' != b)
        return (
          a.stopImmediatePropagation
            ? a.stopImmediatePropagation()
            : (a.RZ = q),
          a.stopPropagation(),
          a.preventDefault(),
          (this.sx = this.YB = s),
          t
        )
    },
    aw: function (a) {
      var b = Me ? a.touches[0] : a,
        c,
        e
      if (this.enabled) {
        this.options.uN && this.options.uN.call(this, a)
        ;(this.options.wi || this.options.zoom) && this.FJ(0)
        this.al = this.Yl = this.oh = t
        this.RC = this.QC = this.vw = this.uw = this.XC = this.WC = 0
        this.options.zoom &&
          Me &&
          1 < a.touches.length &&
          ((e = ue.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (c = ue.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.p0 = ue.sqrt(e * e + c * c)),
          (this.qy =
            ue.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.iG) / 2 -
            this.x),
          (this.ty =
            ue.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.jG) / 2 -
            this.y),
          this.options.zp && this.options.zp.call(this, a))
        if (
          this.options.iy &&
          (this.options.Yk
            ? ((c = getComputedStyle(this.Nb, s)
                [De].replace(/[^0-9\-.,]/g, '')
                .split(',')),
              (e = +(c[12] || c[4])),
              (c = +(c[13] || c[5])))
            : ((e = +getComputedStyle(this.Nb, s).left.replace(/[^0-9-]/g, '')),
              (c = +getComputedStyle(this.Nb, s).top.replace(/[^0-9-]/g, ''))),
          e != this.x || c != this.y)
        )
          this.options.wi ? this.$d(Ue) : We(this.fC),
            (this.yj = []),
            this.Ar(e, c),
            this.options.oy && this.options.oy.call(this)
        this.ww = this.x
        this.xw = this.y
        this.lu = this.x
        this.mu = this.y
        this.rh = b.pageX
        this.th = b.pageY
        this.startTime = a.timeStamp || Date.now()
        this.options.FN && this.options.FN.call(this, a)
        this.ba(Re, window)
        this.ba(Se, window)
        this.ba(Te, window)
      }
    },
    zT: function (a) {
      var b = Me ? a.touches[0] : a,
        c = b.pageX - this.rh,
        e = b.pageY - this.th,
        f = this.x + c,
        g = this.y + e,
        i = a.timeStamp || Date.now()
      this.options.tN && this.options.tN.call(this, a)
      if (this.options.zoom && Me && 1 < a.touches.length)
        (f = ue.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (g = ue.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.o0 = ue.sqrt(f * f + g * g)),
          (this.al = q),
          (b = (1 / this.p0) * this.o0 * this.scale),
          b < this.options.$k
            ? (b = 0.5 * this.options.$k * Math.pow(2, b / this.options.$k))
            : b > this.options.aq &&
              (b = 2 * this.options.aq * Math.pow(0.5, this.options.aq / b)),
          (this.rp = b / this.scale),
          (f = this.qy - this.qy * this.rp + this.x),
          (g = this.ty - this.ty * this.rp + this.y),
          (this.Nb.style[De] =
            'translate(' + f + 'px,' + g + 'px) scale(' + b + ')' + Xe),
          this.options.HN && this.options.HN.call(this, a)
      else {
        this.rh = b.pageX
        this.th = b.pageY
        if (0 < f || f < this.he)
          f = this.options.Go
            ? this.x + c / 2
            : 0 <= f || 0 <= this.he
            ? 0
            : this.he
        if (g > this.sf || g < this.qd)
          g = this.options.Go
            ? this.y + e / 2
            : g >= this.sf || 0 <= this.qd
            ? this.sf
            : this.qd
        this.WC += c
        this.XC += e
        this.uw = ue.abs(this.WC)
        this.vw = ue.abs(this.XC)
        ;(6 > this.uw && 6 > this.vw) ||
          (this.options.OE &&
            (this.uw > this.vw + 5
              ? ((g = this.y), (e = 0))
              : this.vw > this.uw + 5 && ((f = this.x), (c = 0))),
          (this.oh = q),
          this.Ar(f, g),
          (this.QC = 0 < c ? -1 : 0 > c ? 1 : 0),
          (this.RC = 0 < e ? -1 : 0 > e ? 1 : 0),
          300 < i - this.startTime &&
            ((this.startTime = i), (this.lu = this.x), (this.mu = this.y)),
          this.options.EN && this.options.EN.call(this, a))
      }
    },
    lv: function (a) {
      if (!(Me && 0 !== a.touches.length)) {
        var b = this,
          c = Me ? a.changedTouches[0] : a,
          e,
          f,
          g = {
            Ba: 0,
            time: 0,
          },
          i = {
            Ba: 0,
            time: 0,
          },
          k = (a.timeStamp || Date.now()) - b.startTime
        e = b.x
        f = b.y
        b.$d(Re, window)
        b.$d(Se, window)
        b.$d(Te, window)
        b.options.sN && b.options.sN.call(b, a)
        if (b.al)
          (e = b.scale * b.rp),
            (e = Math.max(b.options.$k, e)),
            (e = Math.min(b.options.aq, e)),
            (b.rp = e / b.scale),
            (b.scale = e),
            (b.x = b.qy - b.qy * b.rp + b.x),
            (b.y = b.ty - b.ty * b.rp + b.y),
            (b.Nb.style[Fe] = '200ms'),
            (b.Nb.style[De] =
              'translate(' +
              b.x +
              'px,' +
              b.y +
              'px) scale(' +
              b.scale +
              ')' +
              Xe),
            (b.al = t),
            b.refresh(),
            b.options.yp && b.options.yp.call(b, a)
        else {
          if (b.oh) {
            if (300 > k && b.options.iy) {
              g = e
                ? b.BI(
                    e - b.lu,
                    k,
                    -b.x,
                    b.Ky - b.Cu + b.x,
                    b.options.Go ? b.Cu : 0
                  )
                : g
              i = f
                ? b.BI(
                    f - b.mu,
                    k,
                    -b.y,
                    0 > b.qd ? b.Ip - b.An + b.y - b.sf : 0,
                    b.options.Go ? b.An : 0
                  )
                : i
              e = b.x + g.Ba
              f = b.y + i.Ba
              if ((0 < b.x && 0 < e) || (b.x < b.he && e < b.he))
                g = {
                  Ba: 0,
                  time: 0,
                }
              if ((b.y > b.sf && f > b.sf) || (b.y < b.qd && f < b.qd))
                i = {
                  Ba: 0,
                  time: 0,
                }
            }
            g.Ba || i.Ba
              ? ((c = ue.max(ue.max(g.time, i.time), 10)),
                b.options.iu &&
                  ((g = e - b.ww),
                  (i = f - b.xw),
                  ue.abs(g) < b.options.Uy && ue.abs(i) < b.options.Uy
                    ? b.scrollTo(b.ww, b.xw, 200)
                    : ((g = b.vJ(e, f)),
                      (e = g.x),
                      (f = g.y),
                      (c = ue.max(g.time, c)))),
                b.scrollTo(ue.round(e), ue.round(f), c))
              : b.options.iu
              ? ((g = e - b.ww),
                (i = f - b.xw),
                ue.abs(g) < b.options.Uy && ue.abs(i) < b.options.Uy
                  ? b.scrollTo(b.ww, b.xw, 200)
                  : ((g = b.vJ(b.x, b.y)),
                    (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time)))
              : b.lo(200)
          } else {
            if (Me)
              if (b.VK && b.options.zoom)
                clearTimeout(b.VK),
                  (b.VK = s),
                  b.options.zp && b.options.zp.call(b, a),
                  b.zoom(b.rh, b.th, 1 == b.scale ? b.options.QW : 1),
                  b.options.yp &&
                    setTimeout(function () {
                      b.options.yp.call(b, a)
                    }, 200)
              else if (this.options.Mx) {
                for (e = c.target; 1 != e.nodeType; ) e = e.parentNode
                f = e.tagName.toLowerCase()
                'select' != f && 'input' != f && 'textarea' != f
                  ? ((f = te.createEvent('MouseEvents')),
                    f.initMouseEvent(
                      'click',
                      q,
                      q,
                      a.view,
                      1,
                      c.screenX,
                      c.screenY,
                      c.clientX,
                      c.clientY,
                      a.ctrlKey,
                      a.altKey,
                      a.shiftKey,
                      a.metaKey,
                      0,
                      s
                    ),
                    (f.XR = q),
                    e.dispatchEvent(f))
                  : e.focus()
              }
            b.lo(400)
          }
          b.options.GN && b.options.GN.call(b, a)
        }
      }
    },
    lo: function (a) {
      var b = 0 <= this.x ? 0 : this.x < this.he ? this.he : this.x,
        c =
          this.y >= this.sf || 0 < this.qd
            ? this.sf
            : this.y < this.qd
            ? this.qd
            : this.y
      if (b == this.x && c == this.y) {
        if (
          (this.oh &&
            ((this.oh = t), this.options.oy && this.options.oy.call(this)),
          this.ii &&
            this.options.Qx &&
            ('webkit' == we && (this.gM.style[Ie] = '300ms'),
            (this.gM.style.opacity = '0')),
          this.xi && this.options.Qx)
        )
          'webkit' == we && (this.jP.style[Ie] = '300ms'),
            (this.jP.style.opacity = '0')
      } else this.scrollTo(b, c, a || 0)
    },
    eV: function (a) {
      var b = this,
        c,
        e
      if ('wheelDeltaX' in a) (c = a.wheelDeltaX / 12), (e = a.wheelDeltaY / 12)
      else if ('wheelDelta' in a) c = e = a.wheelDelta / 12
      else if ('detail' in a) c = e = 3 * -a.detail
      else return
      if ('zoom' == b.options.qP) {
        if (
          ((e = b.scale * Math.pow(2, (1 / 3) * (e ? e / Math.abs(e) : 0))),
          e < b.options.$k && (e = b.options.$k),
          e > b.options.aq && (e = b.options.aq),
          e != b.scale)
        )
          !b.cz && b.options.zp && b.options.zp.call(b, a),
            b.cz++,
            b.zoom(a.pageX, a.pageY, e, 400),
            setTimeout(function () {
              b.cz--
              !b.cz && b.options.yp && b.options.yp.call(b, a)
            }, 400)
      } else
        (c = b.x + c),
          (e = b.y + e),
          0 < c ? (c = 0) : c < b.he && (c = b.he),
          e > b.sf ? (e = b.sf) : e < b.qd && (e = b.qd),
          0 > b.qd && b.scrollTo(c, e, 0)
    },
    $U: function (a) {
      a.target == this.Nb && (this.$d(Ue), this.MB())
    },
    MB: function () {
      var a = this,
        b = a.x,
        c = a.y,
        e = Date.now(),
        f,
        g,
        i
      a.Yl ||
        (a.yj.length
          ? ((f = a.yj.shift()),
            f.x == b && f.y == c && (f.time = 0),
            (a.Yl = q),
            (a.oh = q),
            a.options.wi)
            ? (a.FJ(f.time),
              a.Ar(f.x, f.y),
              (a.Yl = t),
              f.time ? a.ba(Ue) : a.lo(0))
            : ((i = function () {
                var k = Date.now(),
                  m
                if (k >= e + f.time) {
                  a.Ar(f.x, f.y)
                  a.Yl = t
                  a.options.zZ && a.options.zZ.call(a)
                  a.MB()
                } else {
                  k = (k - e) / f.time - 1
                  g = ue.sqrt(1 - k * k)
                  k = (f.x - b) * g + b
                  m = (f.y - c) * g + c
                  a.Ar(k, m)
                  if (a.Yl) a.fC = Ve(i)
                }
              }),
              i())
          : a.lo(400))
    },
    FJ: function (a) {
      a += 'ms'
      this.Nb.style[Fe] = a
      this.ii && (this.xY.style[Fe] = a)
      this.xi && (this.K0.style[Fe] = a)
    },
    BI: function (a, b, c, e, f) {
      var b = ue.abs(a) / b,
        g = (b * b) / 0.0012
      0 < a && g > c
        ? ((c += f / (6 / (6.0e-4 * (g / b)))), (b = (b * c) / g), (g = c))
        : 0 > a &&
          g > e &&
          ((e += f / (6 / (6.0e-4 * (g / b)))), (b = (b * e) / g), (g = e))
      return {
        Ba: g * (0 > a ? -1 : 1),
        time: ue.round(b / 6.0e-4),
      }
    },
    Zj: function (a) {
      for (var b = -a.offsetLeft, c = -a.offsetTop; (a = a.offsetParent); )
        (b -= a.offsetLeft), (c -= a.offsetTop)
      a != this.zn && ((b *= this.scale), (c *= this.scale))
      return {
        left: b,
        top: c,
      }
    },
    vJ: function (a, b) {
      var c, e, f
      f = this.We.length - 1
      c = 0
      for (e = this.We.length; c < e; c++)
        if (a >= this.We[c]) {
          f = c
          break
        }
      f == this.HC && 0 < f && 0 > this.QC && f--
      a = this.We[f]
      e = (e = ue.abs(a - this.We[this.HC]))
        ? 500 * (ue.abs(this.x - a) / e)
        : 0
      this.HC = f
      f = this.wf.length - 1
      for (c = 0; c < f; c++)
        if (b >= this.wf[c]) {
          f = c
          break
        }
      f == this.IC && 0 < f && 0 > this.RC && f--
      b = this.wf[f]
      c = (c = ue.abs(b - this.wf[this.IC]))
        ? 500 * (ue.abs(this.y - b) / c)
        : 0
      this.IC = f
      f = ue.round(ue.max(e, c)) || 200
      return {
        x: a,
        y: b,
        time: f,
      }
    },
    ba: function (a, b, c) {
      ;(b || this.Nb).addEventListener(a, this, !!c)
    },
    $d: function (a, b, c) {
      ;(b || this.Nb).removeEventListener(a, this, !!c)
    },
    NC: ga(2),
    refresh: function () {
      var a,
        b,
        c,
        e = 0
      b = 0
      this.scale < this.options.$k && (this.scale = this.options.$k)
      this.Cu = this.zn.clientWidth || 1
      this.An = this.zn.clientHeight || 1
      this.sf = -this.options.n0 || 0
      this.Ky = ue.round(this.Nb.offsetWidth * this.scale)
      this.Ip = ue.round((this.Nb.offsetHeight + this.sf) * this.scale)
      this.he = this.Cu - this.Ky
      this.qd = this.An - this.Ip + this.sf
      this.RC = this.QC = 0
      this.options.CN && this.options.CN.call(this)
      this.kp = this.options.kp && 0 > this.he
      this.xn =
        this.options.xn && ((!this.options.LV && !this.kp) || this.Ip > this.An)
      this.ii = this.kp && this.options.ii
      this.xi = this.xn && this.options.xi && this.Ip > this.An
      a = this.Zj(this.zn)
      this.iG = -a.left
      this.jG = -a.top
      if ('string' == typeof this.options.iu) {
        this.We = []
        this.wf = []
        c = this.Nb.querySelectorAll(this.options.iu)
        a = 0
        for (b = c.length; a < b; a++)
          (e = this.Zj(c[a])),
            (e.left += this.iG),
            (e.top += this.jG),
            (this.We[a] = e.left < this.he ? this.he : e.left * this.scale),
            (this.wf[a] = e.top < this.qd ? this.qd : e.top * this.scale)
      } else if (this.options.iu) {
        for (this.We = []; e >= this.he; ) (this.We[b] = e), (e -= this.Cu), b++
        this.he % this.Cu &&
          (this.We[this.We.length] =
            this.he - this.We[this.We.length - 1] + this.We[this.We.length - 1])
        b = e = 0
        for (this.wf = []; e >= this.qd; ) (this.wf[b] = e), (e -= this.An), b++
        this.qd % this.An &&
          (this.wf[this.wf.length] =
            this.qd - this.wf[this.wf.length - 1] + this.wf[this.wf.length - 1])
      }
      this.Sv('h')
      this.Sv('v')
      this.al || ((this.Nb.style[Fe] = '0'), this.lo(400))
    },
    scrollTo: function (a, b, c, e) {
      var f = a
      this.stop()
      f.length ||
        (f = [
          {
            x: a,
            y: b,
            time: c,
            TZ: e,
          },
        ])
      a = 0
      for (b = f.length; a < b; a++)
        f[a].TZ && ((f[a].x = this.x - f[a].x), (f[a].y = this.y - f[a].y)),
          this.yj.push({
            x: f[a].x,
            y: f[a].y,
            time: f[a].time || 0,
          })
      this.MB()
    },
    disable: function () {
      this.stop()
      this.lo(0)
      this.enabled = t
      this.$d(Re, window)
      this.$d(Se, window)
      this.$d(Te, window)
    },
    enable: function () {
      this.enabled = q
    },
    stop: function () {
      this.options.wi ? this.$d(Ue) : We(this.fC)
      this.yj = []
      this.Yl = this.oh = t
    },
    zoom: function (a, b, c, e) {
      var f = c / this.scale
      this.options.Yk &&
        ((this.al = q),
        (e = e === l ? 200 : e),
        (a = a - this.iG - this.x),
        (b = b - this.jG - this.y),
        (this.x = a - a * f + this.x),
        (this.y = b - b * f + this.y),
        (this.scale = c),
        this.refresh(),
        (this.x = 0 < this.x ? 0 : this.x < this.he ? this.he : this.x),
        (this.y =
          this.y > this.sf ? this.sf : this.y < this.qd ? this.qd : this.y),
        (this.Nb.style[Fe] = e + 'ms'),
        (this.Nb.style[De] =
          'translate(' + this.x + 'px,' + this.y + 'px) scale(' + c + ')' + Xe),
        (this.al = t))
    },
  }
  function Ce(a) {
    if ('' === we) return a
    a = a.charAt(0).toUpperCase() + a.substr(1)
    return we + a
  }
  ve = s
  function Ze(a) {
    this.j = {
      anchor: Yb,
      offset: new O(0, 0),
      maxWidth: '100%',
      imageHeight: 80,
    }
    var a = a || {},
      b
    for (b in a) this.j[b] = a[b]
    this.Ll = new ec(s, {
      of: 'api',
    })
    this.bk = []
    this.P = s
    this.ig = {
      height: this.j.imageHeight,
      width: this.j.imageHeight * $e,
    }
    this.Rc = this.BB = this.bm = this.Zc = s
  }
  var af = [
      0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9,
      10,
    ],
    bf =
      '\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd'.split(
        ' '
      )
  B.Tm(function (a) {
    var b = s
    a.addEventListener('position_changed', function () {
      a.j.visible &&
        a.j.albumsControl === q &&
        (b ? b.Ey(a.Xb()) : ((b = new Ze(a.j.albumsControlOptions)), b.na(a)))
    })
    a.addEventListener('albums_visible_changed', function () {
      a.j.albumsControl === q
        ? (b ? b.Ey(a.Xb()) : ((b = new Ze(a.j.albumsControlOptions)), b.na(a)),
          b.show())
        : b.U()
    })
    a.addEventListener('albums_options_changed', function () {
      b && b.Qk(a.j.albumsControlOptions)
    })
    a.addEventListener('visible_changed', function () {
      b &&
        (a.kE()
          ? a.j.albumsControl === q && (b.C.style.visibility = 'visible')
          : (b.C.style.visibility = 'hidden'))
    })
  })
  var $e = 1.8
  H() && ($e = 1)
  z.extend(Ze.prototype, {
    Qk: function (a) {
      for (var b in a) this.j[b] = a[b]
      a = this.j.imageHeight + 'px'
      this.uc(this.j.anchor)
      this.C.style.width =
        isNaN(Number(this.j.maxWidth)) === q
          ? this.j.maxWidth
          : this.j.maxWidth + 'px'
      this.C.style.height = a
      this.gk.style.height = a
      this.Rh.style.height = a
      this.ig = {
        height: this.j.imageHeight,
        width: this.j.imageHeight * $e,
      }
      this.fk.style.height = this.ig.height - 6 + 'px'
      this.fk.style.width = this.ig.width - 6 + 'px'
      this.Ey(this.P.Xb(), q)
    },
    na: function (a) {
      this.P = a
      this.ls()
      this.yQ()
      this.OY()
      this.Ey(a.Xb())
    },
    ls: function () {
      var a = this.j.imageHeight + 'px'
      this.C = L('div')
      var b = this.C.style
      b.cssText = 'background:rgb(37,37,37);background:rgba(37,37,37,0.9);'
      b.position = 'absolute'
      b.zIndex = '2000'
      b.width =
        isNaN(Number(this.j.maxWidth)) === q
          ? this.j.maxWidth
          : this.j.maxWidth + 'px'
      b.padding = '8px 0'
      b.visibility = 'hidden'
      b.height = a
      this.gk = L('div')
      b = this.gk.style
      b.position = 'absolute'
      b.overflow = 'hidden'
      b.width = '100%'
      b.height = a
      this.Rh = L('div')
      b = this.Rh.style
      b.height = a
      this.gk.appendChild(this.Rh)
      this.C.appendChild(this.gk)
      this.P.C.appendChild(this.C)
      this.fk = L('div', {
        class: 'pano_photo_item_seleted',
      })
      this.fk.style.height = this.ig.height - 6 + 'px'
      this.fk.style.width = this.ig.width - 6 + 'px'
      this.uc(this.j.anchor)
    },
    RH: function (a) {
      for (var b = this.bk, c = b.length - 1; 0 <= c; c--)
        if (b[c].panoId == a) return c
      return -1
    },
    Ey: function (a, b) {
      if (
        b ||
        !this.bk[this.Zc] ||
        !(this.bk[this.Zc].panoId == a && 3 !== this.bk[this.Zc].recoType)
      ) {
        var c = this,
          e = this.RH(a)
        !b && -1 !== e && this.bk[e] && 3 !== this.bk[e].recoType
          ? this.Mp(e)
          : this.dY(function (a) {
              for (
                var b = {}, e, k, m = t, n = [], o = 0, p = a.length;
                o < p;
                o++
              )
                (e = a[o].catlog),
                  (k = a[o].floor),
                  l !== e &&
                    ('' === e && l !== k
                      ? ((m = q), b[k] || (b[k] = []), b[k].push(a[o]))
                      : (b[af[e]] || (b[af[e]] = []), b[af[e]].push(a[o])))
              for (var v in b)
                m
                  ? n.push({
                      data: v + 'F',
                      index: v,
                    })
                  : n.push({
                      data: bf[v],
                      index: v,
                    })
              c.jH = b
              c.Ji = n
              c.Il(a)
              0 == a.length ? c.U() : c.show()
            })
      }
    },
    vW: function () {
      if (!this.Gi) {
        var a = this.SX(this.Ji),
          b = L('div')
        b.style.cssText = [
          'width:' + 134 * this.Ji.length + 'px;',
          'overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;',
        ].join('')
        b.innerHTML = a
        a = L('div')
        a.appendChild(b)
        a.style.cssText =
          'position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0'
        new Ye(a, {
          Go: t,
          iy: q,
          ii: t,
          xi: t,
          xn: t,
          OE: q,
          Pw: q,
          Mx: q,
        })
        this.C.appendChild(a)
        for (
          var c = this, e = b.getElementsByTagName('span'), f = 0, g = e.length;
          f < g;
          f++
        )
          (b = e[f]),
            z.M(b, 'click', function () {
              if (this.getAttribute('dataindex')) {
                c.Il(c.jH[this.getAttribute('dataindex')])
                for (var a = 0, b = e.length; a < b; a++)
                  e[a].style.color = '#FFFFFF'
                this.style.color = '#3383FF'
              }
            })
        this.Gi = a
      }
    },
    sW: function () {
      if (this.Gi) (a = this.AL(this.Ji)), (this.OQ.innerHTML = a)
      else {
        var a = this.AL(this.Ji),
          b = L('ul'),
          c = this
        b.style.cssText =
          'list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px'
        b.innerHTML = a
        z.M(b, 'click', function (a) {
          if ((a = (a.srcElement || a.target).getAttribute('dataindex'))) {
            c.Il(c.jH[a])
            for (
              var e = b.getElementsByTagName('li'), f = 0, g = e.length;
              f < g;
              f++
            )
              e[f].childNodes[0].getAttribute('dataindex') === a
                ? z.D.Ua(e[f], 'pano_catlogLiActive')
                : z.D.Pb(e[f], 'pano_catlogLiActive')
          }
        })
        var a = L('div'),
          e = L('a'),
          f = L('span'),
          g = L('a'),
          i = L('span'),
          k = [
            'background:url(' + G.qa + 'panorama/catlog_icon.png) no-repeat;',
            'display:block;width:10px;height:7px;margin:0 auto;',
          ].join('')
        f.style.cssText = k + 'background-position:-18px 0;'
        e.style.cssText =
          'background:#1C1C1C;display:block;position:absolute;width:58px;'
        i.style.cssText = k + 'background-position:0 0;'
        g.style.cssText =
          'background:#1C1C1C;display:block;position:absolute;width:58px;'
        g.style.top = this.j.imageHeight - 7 + 'px'
        a.style.cssText = 'position:absolute;top:0px;left:0px;width:60px;'
        e.appendChild(f)
        g.appendChild(i)
        z.M(e, 'mouseover', function () {
          var a = parseInt(b.style.top, 10)
          7 !== a && (f.style.backgroundPosition = '-27px 0')
          new tb({
            Ic: 60,
            kc: ub.Ks,
            duration: 300,
            va: function (c) {
              b.style.top = a + (7 - a) * c + 'px'
            },
          })
        })
        z.M(e, 'mouseout', function () {
          f.style.backgroundPosition = '-18px 0'
        })
        z.M(g, 'mouseover', function () {
          var a = parseInt(b.style.top, 10),
            e = c.j.imageHeight - 14
          if (!(parseInt(b.offsetHeight, 10) < e)) {
            var f = e - parseInt(b.offsetHeight, 10) + 7
            f !== a && (i.style.backgroundPosition = '-9px 0')
            new tb({
              Ic: 60,
              kc: ub.Ks,
              duration: 300,
              va: function (c) {
                b.style.top = a + (f - a) * c + 'px'
              },
            })
          }
        })
        z.M(g, 'mouseout', function () {
          i.style.backgroundPosition = '0 0'
        })
        a.appendChild(e)
        a.appendChild(g)
        e = L('div')
        e.style.cssText = [
          'position:absolute;z-index:2001;left:20px;',
          'height:' + this.j.imageHeight + 'px;',
          'width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);',
        ].join('')
        e.appendChild(b)
        e.appendChild(a)
        this.Gi = e
        this.OQ = b
        this.C.appendChild(e)
      }
    },
    tW: function () {
      if (this.Ji && !(0 >= this.Ji.length)) {
        var a = L('div')
        a.innerHTML = this.hA
        a.style.cssText = 'position:absolute;background:#252525'
        this.C.appendChild(a)
        this.Os = a
        this.Rc.jg.style.left = this.ig.width + 8 + 'px'
        this.Gi &&
          (this.Gi.style.left =
            parseInt(this.Gi.style.left, 10) + this.ig.width + 8 + 'px')
        var b = this
        z.M(a, 'click', function () {
          b.P.vc(b.gX)
        })
      }
    },
    Il: function (a) {
      this.bk = a
      this.j.showCatalog &&
        (0 < this.Ji.length
          ? (Ua() ? this.sW() : this.vW(), (this.Rc.offsetLeft = 60))
          : (this.Os &&
              (this.C.removeChild(this.Os),
              (this.Os = s),
              (this.Rc.jg.style.left = '0px')),
            this.Gi && (this.C.removeChild(this.Gi), (this.Gi = s)),
            (this.Rc.offsetLeft = 0)))
      var b = this.LX(a)
      Ua() &&
        this.Ji &&
        0 < this.Ji.length &&
        this.j.showExit &&
        this.hA &&
        ((this.Rc.offsetLeft += this.ig.width + 8),
        this.Os ? (this.Os.innerHTML = this.hA) : this.tW())
      this.Rh.innerHTML = b
      this.Rh.style.width = (this.ig.width + 8) * a.length + 8 + 'px'
      a = this.C.offsetWidth
      b = this.Rh.offsetWidth
      this.Rc.Vs && (b += this.Rc.Vs())
      b < a - 2 * this.Rc.Ai - this.Rc.offsetLeft
        ? (this.C.style.width = b + this.Rc.offsetLeft + 'px')
        : ((this.C.style.width =
            isNaN(Number(this.j.maxWidth)) === q
              ? this.j.maxWidth
              : this.j.maxWidth + 'px'),
          b < this.C.offsetWidth - 2 * this.Rc.Ai - this.Rc.offsetLeft &&
            (this.C.style.width = b + this.Rc.offsetLeft + 'px'))
      this.Rc.refresh()
      this.BB = this.Rh.children
      this.Rh.appendChild(this.fk)
      this.fk.style.left = '-100000px'
      a = this.RH(this.P.Xb(), this.Y1)
      ;-1 !== a && this.Mp(a)
    },
    SX: function (a) {
      for (var b = '', c, e = 0, f = a.length; e < f; e++)
        (c =
          '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' +
          a[e].index +
          '">' +
          a[e].data +
          '</span></div>'),
          (b += c)
      return b
    },
    AL: function (a) {
      for (var b = '', c, e = 0, f = a.length; e < f; e++)
        (c =
          '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' +
          a[e].index +
          '">' +
          a[e].data +
          '</span></li>'),
          (b += c)
      return b
    },
    LX: function (a) {
      for (
        var b, c, e, f, g = [], i = this.ig.height, k = this.ig.width, m = 0;
        m < a.length;
        m++
      )
        (b = a[m]),
          (recoType = b.recoType),
          (e = b.panoId),
          (f = b.name),
          (c = b.heading),
          (b = b.pitch),
          (c = qe.PL(e, c, b, 198, 108)),
          (b =
            '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
            m +
            '"><img style="width:' +
            (k - 2) +
            'px;height:' +
            (i - 2) +
            'px;" data-index="' +
            m +
            '" name="' +
            f +
            '" src="' +
            c +
            '" alt="' +
            f +
            '"/><span class="pano_photo_decs" data-index="' +
            m +
            '" style="width:' +
            k +
            'px;font-size:' +
            Math.floor(i / 6) +
            'px; line-height:' +
            Math.floor(i / 6) +
            'px;"><em class="pano_poi_' +
            recoType +
            '"></em>' +
            f +
            '</span></a>'),
          3 === recoType
            ? Ua()
              ? ((this.hA = b), (this.gX = e), a.splice(m, 1), m--)
              : ((b =
                  '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
                  m +
                  '"><img style="width:' +
                  (k - 2) +
                  'px;height:' +
                  (i - 2) +
                  'px;" data-index="' +
                  m +
                  '" name="' +
                  f +
                  '" src="' +
                  c +
                  '" alt="' +
                  f +
                  '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' +
                  this.j.imageHeight +
                  'px;" data-index="' +
                  m +
                  '"><img src="' +
                  G.qa +
                  'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' +
                  m +
                  '" alt=""/></div></a>'),
                g.push(b))
            : g.push(b)
      return g.join('')
    },
    dY: function (a) {
      var b = this,
        c = this.P.Xb()
      c &&
        this.Ll.Kx(c, function (e) {
          b.P.Xb() === c && a(e)
        })
    },
    uc: function (a) {
      if (!Wa(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor
      var b = this.C,
        c = this.j.offset.width,
        e = this.j.offset.height
      b.style.left = b.style.top = b.style.right = b.style.bottom = 'auto'
      switch (a) {
        case Wb:
          b.style.top = e + 'px'
          b.style.left = c + 'px'
          break
        case Xb:
          b.style.top = e + 'px'
          b.style.right = c + 'px'
          break
        case Yb:
          b.style.bottom = e + 'px'
          b.style.left = c + 'px'
          break
        case 3:
          ;(b.style.bottom = e + 'px'), (b.style.right = c + 'px')
      }
    },
    yQ: function () {
      this.wQ()
    },
    wQ: function () {
      var a = this
      z.M(this.C, 'touchstart', function (a) {
        a.stopPropagation()
      })
      z.M(this.gk, 'click', function (b) {
        if (
          (b = (b.srcElement || b.target).getAttribute('data-index')) &&
          b != a.Zc
        )
          a.Mp(b), a.P.vc(a.bk[b].panoId)
      })
      z.M(this.Rh, 'mouseover', function (b) {
        b = (b.srcElement || b.target).getAttribute('data-index')
        b !== s && a.BK(b, q)
      })
      this.P.addEventListener('size_changed', function () {
        isNaN(Number(a.j.maxWidth)) &&
          a.Qk({
            maxWidth: a.j.maxWidth,
          })
      })
    },
    Mp: function (a) {
      this.fk.style.left = this.BB[a].offsetLeft + 8 + 'px'
      this.fk.setAttribute('data-index', this.BB[a].getAttribute('data-index'))
      this.Zc = a
      this.BK(a)
    },
    BK: function (a, b) {
      var c = this.ig.width + 8,
        e = 0
      this.Rc.Vs && (e = this.Rc.Vs() / 2)
      var f = this.gk.offsetWidth - 2 * e,
        g = this.Rh.offsetLeft || this.Rc.x,
        g = g - e,
        i = -a * c
      i > g && this.Rc.scrollTo(i + e)
      c = i - c
      g -= f
      c < g && (!b || (b && 8 < i - g)) && this.Rc.scrollTo(c + f + e)
    },
    OY: function () {
      this.Rc = H()
        ? new Ye(this.gk, {
            Go: t,
            iy: q,
            ii: t,
            xi: t,
            xn: t,
            OE: q,
            Pw: q,
            Mx: q,
          })
        : new cf(this.gk)
    },
    U: function () {
      this.C.style.visibility = 'hidden'
    },
    show: function () {
      this.C.style.visibility = 'visible'
    },
  })
  function cf(a) {
    this.C = a
    this.Vg = a.children[0]
    this.Pr = s
    this.Ai = 20
    this.offsetLeft = 0
    this.na()
  }
  cf.prototype = {
    na: function () {
      this.Vg.style.position = 'relative'
      this.refresh()
      this.ls()
      this.$l()
    },
    refresh: function () {
      this.ho = this.C.offsetWidth - this.Vs()
      this.aB = -(this.Vg.offsetWidth - this.ho - this.Ai)
      this.Ev = this.Ai + this.offsetLeft
      this.Vg.style.left = this.Ev + 'px'
      this.Vg.children[0] && (this.Pr = this.Vg.children[0].offsetWidth)
      this.jg &&
        (this.jg.children[0].style.marginTop =
          this.Hr.children[0].style.marginTop =
            this.jg.offsetHeight / 2 -
            this.jg.children[0].offsetHeight / 2 +
            'px')
    },
    Vs: function () {
      return 2 * this.Ai
    },
    ls: function () {
      this.Tv = L('div')
      this.Tv.innerHTML =
        '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>'
      this.jg = this.Tv.children[0]
      this.Hr = this.Tv.children[1]
      this.C.appendChild(this.Tv)
      this.jg.children[0].style.marginTop =
        this.Hr.children[0].style.marginTop =
          this.jg.offsetHeight / 2 - this.jg.children[0].offsetHeight / 2 + 'px'
    },
    $l: function () {
      var a = this
      z.M(this.jg, 'click', function () {
        a.scrollTo(a.Vg.offsetLeft + a.ho)
      })
      z.M(this.Hr, 'click', function () {
        a.scrollTo(a.Vg.offsetLeft - a.ho)
      })
    },
    aV: function () {
      z.D.Pb(this.jg, 'pano_arrow_disable')
      z.D.Pb(this.Hr, 'pano_arrow_disable')
      var a = this.Vg.offsetLeft
      a >= this.Ev && z.D.Ua(this.jg, 'pano_arrow_disable')
      a - this.ho <= this.aB && z.D.Ua(this.Hr, 'pano_arrow_disable')
    },
    scrollTo: function (a) {
      a =
        a < this.Vg.offsetLeft
          ? Math.ceil((a - this.Ai - this.ho) / this.Pr) * this.Pr +
            this.ho +
            this.Ai -
            8
          : Math.ceil((a - this.Ai) / this.Pr) * this.Pr + this.Ai
      a < this.aB ? (a = this.aB) : a > this.Ev && (a = this.Ev)
      var b = this.Vg.offsetLeft,
        c = this
      new tb({
        Ic: 60,
        kc: ub.Ks,
        duration: 300,
        va: function (e) {
          c.Vg.style.left = b + (a - b) * e + 'px'
        },
        finish: function () {
          c.aV()
        },
      })
    },
  }
  B.Map = Ka
  B.Hotspot = ib
  B.MapType = id
  B.Point = J
  B.Pixel = Q
  B.Size = O
  B.Bounds = fb
  B.TileLayer = Mc
  B.Projection = jc
  B.MercatorProjection = S
  B.PerspectiveProjection = hb
  B.Copyright = function (a, b, c) {
    this.id = a
    this.bb = b
    this.content = c
  }
  B.Overlay = mc
  B.Label = uc
  B.GroundOverlay = vc
  B.PointCollection = zc
  B.Marker = U
  B.CanvasLayer = Cc
  B.Icon = qc
  B.IconSequence = sc
  B.Symbol = rc
  B.Polyline = Gc
  B.Polygon = Fc
  B.InfoWindow = tc
  B.Circle = Hc
  B.Control = Vb
  B.NavigationControl = jb
  B.GeolocationControl = Zb
  B.OverviewMapControl = lb
  B.CopyrightControl = $b
  B.ScaleControl = kb
  B.MapTypeControl = mb
  B.CityListControl = ac
  B.PanoramaControl = cc
  B.TrafficLayer = Vc
  B.CustomLayer = nb
  B.ContextMenu = fc
  B.MenuItem = ic
  B.LocalSearch = cb
  B.TransitRoute = Kd
  B.DrivingRoute = Nd
  B.WalkingRoute = Od
  B.RidingRoute = Pd
  B.Autocomplete = Zd
  B.RouteSearch = Td
  B.Geocoder = Ud
  B.LocalCity = Wd
  B.Geolocation = Geolocation
  B.Convertor = lc
  B.BusLineSearch = Yd
  B.Boundary = Xd
  B.VectorCloudLayer = Tc
  B.VectorTrafficLayer = Uc
  B.Panorama = Oa
  B.PanoramaLabel = ee
  B.PanoramaService = ec
  B.PanoramaCoverageLayer = dc
  B.PanoramaFlashInterface = oe
  function T(a, b) {
    for (var c in b) {
      a[c] = b[c]

      // if(c === 'BMap'){
      //   console.log("BMap", b.BMap)
      //   console.log(window.BMap)
      // }
    }
  }
  T(window, {
    BMap: B,
    _jsload2: function (a, b) {
      ia.Wy.ZY && ia.Wy.set(a, b)
      K.WV(a, b)
    },
    BMAP_API_VERSION: '2.0',
  })
  var X = Ka.prototype
  T(X, {
    getBounds: X.ve,
    getCenter: X.Ka,
    getMapType: X.oa,
    getSize: X.cb,
    setSize: X.Ce,
    getViewport: X.ht,
    getZoom: X.fa,
    centerAndZoom: X.Fd,
    panTo: X.qi,
    panBy: X.Ag,
    setCenter: X.Zf,
    setCurrentCity: X.DF,
    setMapType: X.Dg,
    setViewport: X.yh,
    setZoom: X.Qc,
    highResolutionEnabled: X.Sx,
    zoomTo: X.Gg,
    zoomIn: X.kG,
    zoomOut: X.lG,
    addHotspot: X.Cw,
    removeHotspot: X.VZ,
    clearHotspots: X.dm,
    checkResize: X.ZV,
    addControl: X.Aw,
    removeControl: X.VN,
    getContainer: X.La,
    addContextMenu: X.yo,
    removeContextMenu: X.Cp,
    addOverlay: X.Ga,
    removeOverlay: X.Qb,
    clearOverlays: X.yK,
    openInfoWindow: X.pc,
    closeInfoWindow: X.Yc,
    pointToOverlayPixel: X.Xe,
    overlayPixelToPoint: X.JN,
    getInfoWindow: X.hh,
    getOverlays: X.Hx,
    getPanes: function () {
      return {
        floatPane: this.Yd.BD,
        markerMouseTarget: this.Yd.RE,
        floatShadow: this.Yd.sL,
        labelPane: this.Yd.KE,
        markerPane: this.Yd.fN,
        markerShadow: this.Yd.gN,
        mapPane: this.Yd.Et,
        vertexPane: this.Yd.nP,
      }
    },
    addTileLayer: X.Oe,
    removeTileLayer: X.Yf,
    pixelToPoint: X.xb,
    pointToPixel: X.$b,
    setFeatureStyle: X.Lp,
    selectBaseElement: X.j5,
    setMapStyle: X.Zt,
    enable3DBuilding: X.Ro,
    disable3DBuilding: X.KW,
    getPanorama: X.tm,
    initIndoorLayer: X.PY,
    setNormalMapDisplay: X.D_,
  })
  var df = id.prototype
  T(df, {
    getTileLayer: df.oY,
    getMinZoom: df.bp,
    getMaxZoom: df.sm,
    getProjection: df.wm,
    getTextColor: df.zm,
    getTips: df.gt,
  })
  T(window, {
    BMAP_NORMAL_MAP: La,
    BMAP_PERSPECTIVE_MAP: Qa,
    BMAP_SATELLITE_MAP: Ya,
    BMAP_HYBRID_MAP: Sa,
  })
  var ef = S.prototype
  T(ef, {
    lngLatToPoint: ef.kh,
    pointToLngLat: ef.xj,
  })
  var ff = hb.prototype
  T(ff, {
    lngLatToPoint: ff.kh,
    pointToLngLat: ff.xj,
  })
  var gf = fb.prototype
  T(gf, {
    equals: gf.pb,
    containsPoint: gf.js,
    containsBounds: gf.kW,
    intersects: gf.ot,
    extend: gf.extend,
    getCenter: gf.Ka,
    isEmpty: gf.tj,
    getSouthWest: gf.Ve,
    getNorthEast: gf.Rf,
    toSpan: gf.YF,
  })
  var hf = mc.prototype
  T(hf, {
    isVisible: hf.jh,
    show: hf.show,
    hide: hf.U,
  })
  mc.getZIndex = mc.Ck
  var jf = gb.prototype
  T(jf, {
    openInfoWindow: jf.pc,
    closeInfoWindow: jf.Yc,
    enableMassClear: jf.gj,
    disableMassClear: jf.MW,
    show: jf.show,
    hide: jf.U,
    getMap: jf.Dx,
    addContextMenu: jf.yo,
    removeContextMenu: jf.Cp,
  })
  var kf = U.prototype
  T(kf, {
    setIcon: kf.Rb,
    getIcon: kf.ap,
    setPosition: kf.sa,
    getPosition: kf.ga,
    setOffset: kf.Ze,
    getOffset: kf.Sf,
    getLabel: kf.VD,
    setLabel: kf.dn,
    setTitle: kf.Ec,
    setTop: kf.ui,
    enableDragging: kf.Wb,
    disableDragging: kf.TC,
    setZIndex: kf.Sp,
    getMap: kf.Dx,
    setAnimation: kf.bn,
    setShadow: kf.Oy,
    hide: kf.U,
    setRotation: kf.Op,
    getRotation: kf.TL,
  })
  T(window, {
    BMAP_ANIMATION_DROP: 1,
    BMAP_ANIMATION_BOUNCE: 2,
  })
  var lf = uc.prototype
  T(lf, {
    setStyle: lf.Md,
    setStyles: lf.ti,
    setContent: lf.dd,
    setPosition: lf.sa,
    getPosition: lf.ga,
    setOffset: lf.Ze,
    getOffset: lf.Sf,
    setTitle: lf.Ec,
    setZIndex: lf.Sp,
    getMap: lf.Dx,
    getContent: lf.xk,
  })
  var mf = qc.prototype
  T(mf, {
    setImageUrl: mf.mO,
    setSize: mf.Ce,
    setAnchor: mf.uc,
    setImageOffset: mf.Yt,
    setImageSize: mf.w_,
    setInfoWindowAnchor: mf.z_,
    setPrintImageUrl: mf.K_,
  })
  var nf = tc.prototype
  T(nf, {
    redraw: nf.je,
    setTitle: nf.Ec,
    setContent: nf.dd,
    getContent: nf.xk,
    getPosition: nf.ga,
    enableMaximize: nf.dh,
    disableMaximize: nf.kx,
    isOpen: nf.Xa,
    setMaxContent: nf.$t,
    maximize: nf.hy,
    enableAutoPan: nf.Ls,
  })
  var of = oc.prototype
  T(of, {
    getPath: of.Ue,
    setPath: of.ke,
    setPositionAt: of.gn,
    getStrokeColor: of.jY,
    setStrokeWeight: of.Rp,
    getStrokeWeight: of.WL,
    setStrokeOpacity: of.Pp,
    getStrokeOpacity: of.kY,
    setFillOpacity: of.Xt,
    getFillOpacity: of.HX,
    setStrokeStyle: of.Qp,
    getStrokeStyle: of.VL,
    getFillColor: of.GX,
    getBounds: of.ve,
    enableEditing: of.mf,
    disableEditing: of.LW,
    getEditing: of.DX,
  })
  var pf = Hc.prototype
  T(pf, {
    setCenter: pf.Zf,
    getCenter: pf.Ka,
    getRadius: pf.RL,
    setRadius: pf.xf,
  })
  var qf = Fc.prototype
  T(qf, {
    getPath: qf.Ue,
    setPath: qf.ke,
    setPositionAt: qf.gn,
  })
  var rf = ib.prototype
  T(rf, {
    getPosition: rf.ga,
    setPosition: rf.sa,
    getText: rf.eE,
    setText: rf.cu,
  })
  J.prototype.equals = J.prototype.pb
  Q.prototype.equals = Q.prototype.pb
  O.prototype.equals = O.prototype.pb
  T(window, {
    BMAP_ANCHOR_TOP_LEFT: Wb,
    BMAP_ANCHOR_TOP_RIGHT: Xb,
    BMAP_ANCHOR_BOTTOM_LEFT: Yb,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
  })
  var sf = Vb.prototype
  T(sf, {
    setAnchor: sf.uc,
    getAnchor: sf.HD,
    setOffset: sf.Ze,
    getOffset: sf.Sf,
    show: sf.show,
    hide: sf.U,
    isVisible: sf.jh,
    toString: sf.toString,
  })
  var tf = jb.prototype
  T(tf, {
    getType: tf.ip,
    setType: tf.hn,
  })
  T(window, {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
  })
  var uf = lb.prototype
  T(uf, {
    changeView: uf.se,
    setSize: uf.Ce,
    getSize: uf.cb,
  })
  var vf = kb.prototype
  T(vf, {
    getUnit: vf.sY,
    setUnit: vf.LF,
  })
  T(window, {
    BMAP_UNIT_METRIC: 'metric',
    BMAP_UNIT_IMPERIAL: 'us',
  })
  var wf = $b.prototype
  T(wf, {
    addCopyright: wf.Bw,
    removeCopyright: wf.qF,
    getCopyright: wf.pm,
    getCopyrightCollection: wf.PD,
  })
  T(window, {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: bc,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
  })
  var xf = Mc.prototype
  T(xf, {
    getMapType: xf.oa,
    getCopyright: xf.pm,
    isTransparentPng: xf.zt,
  })
  var yf = fc.prototype
  T(yf, {
    addItem: yf.Dw,
    addSeparator: yf.bC,
    removeSeparator: yf.sF,
  })
  var zf = ic.prototype
  T(zf, {
    setText: zf.cu,
  })
  var Af = W.prototype
  T(Af, {
    getStatus: Af.xm,
    setSearchCompleteCallback: Af.JF,
    getPageCapacity: Af.qf,
    setPageCapacity: Af.Np,
    setLocation: Af.fn,
    disableFirstResultSelection: Af.UC,
    enableFirstResultSelection: Af.oD,
    gotoPage: Af.Am,
    searchNearby: Af.Jp,
    searchInBounds: Af.an,
    search: Af.search,
  })
  T(window, {
    BMAP_STATUS_SUCCESS: 0,
    BMAP_STATUS_CITY_LIST: 1,
    BMAP_STATUS_UNKNOWN_LOCATION: sd,
    BMAP_STATUS_UNKNOWN_ROUTE: 3,
    BMAP_STATUS_INVALID_KEY: 4,
    BMAP_STATUS_INVALID_REQUEST: 5,
    BMAP_STATUS_PERMISSION_DENIED: td,
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
    BMAP_STATUS_TIMEOUT: ud,
  })
  T(window, {
    BMAP_POI_TYPE_NORMAL: 0,
    BMAP_POI_TYPE_BUSSTOP: 1,
    BMAP_POI_TYPE_BUSLINE: 2,
    BMAP_POI_TYPE_SUBSTOP: 3,
    BMAP_POI_TYPE_SUBLINE: 4,
  })
  T(window, {
    BMAP_TRANSIT_POLICY_RECOMMEND: 0,
    BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
    BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
    BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
    BMAP_LINE_TYPE_BUS: 0,
    BMAP_LINE_TYPE_SUBWAY: 1,
    BMAP_LINE_TYPE_FERRY: 2,
    BMAP_LINE_TYPE_TRAIN: 3,
    BMAP_LINE_TYPE_AIRPLANE: 4,
    BMAP_LINE_TYPE_COACH: 5,
  })
  T(window, {
    BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
    BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
    BMAP_TRANSIT_TYPE_POLICY_COACH: 2,
  })
  T(window, {
    BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
    BMAP_INTERCITY_POLICY_EARLY_START: 1,
    BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2,
  })
  T(window, {
    BMAP_TRANSIT_TYPE_IN_CITY: 0,
    BMAP_TRANSIT_TYPE_CROSS_CITY: 1,
  })
  T(window, {
    BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
    BMAP_TRANSIT_PLAN_TYPE_LINE: 1,
  })
  var Bf = Jd.prototype
  T(Bf, {
    clearResults: Bf.Pe,
  })
  Ld = Kd.prototype
  T(Ld, {
    setPolicy: Ld.bu,
    toString: Ld.toString,
    setPageCapacity: Ld.Np,
    setIntercityPolicy: Ld.oO,
    setTransitTypePolicy: Ld.xO,
  })
  T(window, {
    BMAP_DRIVING_POLICY_DEFAULT: 0,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
    BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
    BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4,
  })
  T(window, {
    BMAP_MODE_DRIVING: 'driving',
    BMAP_MODE_TRANSIT: 'transit',
    BMAP_MODE_WALKING: 'walking',
    BMAP_MODE_NAVIGATION: 'navigation',
  })
  var Cf = Td.prototype
  T(Cf, {
    routeCall: Cf.gO,
  })
  T(window, {
    BMAP_HIGHLIGHT_STEP: 1,
    BMAP_HIGHLIGHT_ROUTE: 2,
  })
  T(window, {
    BMAP_ROUTE_TYPE_DRIVING: wd,
    BMAP_ROUTE_TYPE_WALKING: vd,
    BMAP_ROUTE_TYPE_RIDING: xd,
  })
  T(window, {
    BMAP_ROUTE_STATUS_NORMAL: yd,
    BMAP_ROUTE_STATUS_EMPTY: 1,
    BMAP_ROUTE_STATUS_ADDRESS: 2,
  })
  var Df = Nd.prototype
  T(Df, {
    setPolicy: Df.bu,
  })
  var Ef = Zd.prototype
  T(Ef, {
    show: Ef.show,
    hide: Ef.U,
    setTypes: Ef.KF,
    setLocation: Ef.fn,
    search: Ef.search,
    setInputValue: Ef.Ly,
  })
  T(nb.prototype, {})
  var Ff = Xd.prototype
  T(Ff, {
    get: Ff.get,
  })
  T(dc.prototype, {})
  T(db.prototype, {})
  T(window, {
    BMAP_POINT_DENSITY_HIGH: 200,
    BMAP_POINT_DENSITY_MEDIUM: Yc,
    BMAP_POINT_DENSITY_LOW: 50,
  })
  T(window, {
    BMAP_POINT_SHAPE_STAR: 1,
    BMAP_POINT_SHAPE_WATERDROP: 2,
    BMAP_POINT_SHAPE_CIRCLE: wc,
    BMAP_POINT_SHAPE_SQUARE: 4,
    BMAP_POINT_SHAPE_RHOMBUS: 5,
  })
  T(window, {
    BMAP_POINT_SIZE_TINY: 1,
    BMAP_POINT_SIZE_SMALLER: 2,
    BMAP_POINT_SIZE_SMALL: 3,
    BMAP_POINT_SIZE_NORMAL: xc,
    BMAP_POINT_SIZE_BIG: 5,
    BMAP_POINT_SIZE_BIGGER: 6,
    BMAP_POINT_SIZE_HUGE: 7,
  })
  T(window, {
    BMap_Symbol_SHAPE_CAMERA: 11,
    BMap_Symbol_SHAPE_WARNING: 12,
    BMap_Symbol_SHAPE_SMILE: 13,
    BMap_Symbol_SHAPE_CLOCK: 14,
    BMap_Symbol_SHAPE_POINT: 9,
    BMap_Symbol_SHAPE_PLANE: 10,
    BMap_Symbol_SHAPE_CIRCLE: 1,
    BMap_Symbol_SHAPE_RECTANGLE: 2,
    BMap_Symbol_SHAPE_RHOMBUS: 3,
    BMap_Symbol_SHAPE_STAR: 4,
    BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
    BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
    BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
    BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8,
  })
  T(window, {
    BMAP_CONTEXT_MENU_ICON_ZOOMIN: gc,
    BMAP_CONTEXT_MENU_ICON_ZOOMOUT: hc,
  })
  T(window, {
    BMAP_SYS_DRAWER: Ja,
    BMAP_SVG_DRAWER: 1,
    BMAP_VML_DRAWER: 2,
    BMAP_CANVAS_DRAWER: 3,
    BMAP_SVG_DRAWER_FIRST: 4,
  })
  B.vV()
  B.Q0()
})()
window.myBMap = window.BMap
console.log(window.BMap)