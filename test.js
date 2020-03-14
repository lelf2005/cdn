function getSign(e) {
	console.log("getsign");
                    function t(e, t) {
                        return e << t | e >>> 32 - t;
                    }
                    function n(e, t) {
                        var n, r, o, i, a;
                        return o = 2147483648 & e, i = 2147483648 & t, a = (1073741823 & e) + (1073741823 & t), (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
                    }
                    function r(e, r, o, i, a, s, l) {
                        return e = n(e, n(n(function (e, t, n) {
                            return e & t | ~e & n;
                        }(r, o, i), a), l)), n(t(e, s), r);
                    }
                    function o(e, r, o, i, a, s, l) {
                        return e = n(e, n(n(function (e, t, n) {
                            return e & n | t & ~n;
                        }(r, o, i), a), l)), n(t(e, s), r);
                    }
                    function i(e, r, o, i, a, s, l) {
                        return e = n(e, n(n(function (e, t, n) {
                            return e ^ t ^ n;
                        }(r, o, i), a), l)), n(t(e, s), r);
                    }
                    function a(e, r, o, i, a, s, l) {
                        return e = n(e, n(n(function (e, t, n) {
                            return t ^ (e | ~n);
                        }(r, o, i), a), l)), n(t(e, s), r);
                    }
                    function s(e) {
                        var t, n = "", r = "";
                        for (t = 0; 3 >= t; t++)
                            n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
                        return n;
                    }
                    var l, c, u, p, d, f, m, h, b, g;
                    for (g = function (e) {
                        for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, s = 0; n > s;)
                            a = s % 4 * 8, i[t = (s - s % 4) / 4] = i[t] | e.charCodeAt(s) << a, s++;
                        return a = s % 4 * 8, i[t = (s - s % 4) / 4] = i[t] | 128 << a, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i;
                    }(e = function (e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128));
                        }
                        return t;
                    }(e)), f = 1732584193, m = 4023233417, h = 2562383102, b = 271733878, l = 0; l < g.length; l += 16)
                        c = f, u = m, p = h, d = b, f = r(f, m, h, b, g[l + 0], 7, 3614090360), b = r(b, f, m, h, g[l + 1], 12, 3905402710), h = r(h, b, f, m, g[l + 2], 17, 606105819), m = r(m, h, b, f, g[l + 3], 22, 3250441966), f = r(f, m, h, b, g[l + 4], 7, 4118548399), b = r(b, f, m, h, g[l + 5], 12, 1200080426), h = r(h, b, f, m, g[l + 6], 17, 2821735955), m = r(m, h, b, f, g[l + 7], 22, 4249261313), f = r(f, m, h, b, g[l + 8], 7, 1770035416), b = r(b, f, m, h, g[l + 9], 12, 2336552879), h = r(h, b, f, m, g[l + 10], 17, 4294925233), m = r(m, h, b, f, g[l + 11], 22, 2304563134), f = r(f, m, h, b, g[l + 12], 7, 1804603682), b = r(b, f, m, h, g[l + 13], 12, 4254626195), h = r(h, b, f, m, g[l + 14], 17, 2792965006), f = o(f, m = r(m, h, b, f, g[l + 15], 22, 1236535329), h, b, g[l + 1], 5, 4129170786), b = o(b, f, m, h, g[l + 6], 9, 3225465664), h = o(h, b, f, m, g[l + 11], 14, 643717713), m = o(m, h, b, f, g[l + 0], 20, 3921069994), f = o(f, m, h, b, g[l + 5], 5, 3593408605), b = o(b, f, m, h, g[l + 10], 9, 38016083), h = o(h, b, f, m, g[l + 15], 14, 3634488961), m = o(m, h, b, f, g[l + 4], 20, 3889429448), f = o(f, m, h, b, g[l + 9], 5, 568446438), b = o(b, f, m, h, g[l + 14], 9, 3275163606), h = o(h, b, f, m, g[l + 3], 14, 4107603335), m = o(m, h, b, f, g[l + 8], 20, 1163531501), f = o(f, m, h, b, g[l + 13], 5, 2850285829), b = o(b, f, m, h, g[l + 2], 9, 4243563512), h = o(h, b, f, m, g[l + 7], 14, 1735328473), f = i(f, m = o(m, h, b, f, g[l + 12], 20, 2368359562), h, b, g[l + 5], 4, 4294588738), b = i(b, f, m, h, g[l + 8], 11, 2272392833), h = i(h, b, f, m, g[l + 11], 16, 1839030562), m = i(m, h, b, f, g[l + 14], 23, 4259657740), f = i(f, m, h, b, g[l + 1], 4, 2763975236), b = i(b, f, m, h, g[l + 4], 11, 1272893353), h = i(h, b, f, m, g[l + 7], 16, 4139469664), m = i(m, h, b, f, g[l + 10], 23, 3200236656), f = i(f, m, h, b, g[l + 13], 4, 681279174), b = i(b, f, m, h, g[l + 0], 11, 3936430074), h = i(h, b, f, m, g[l + 3], 16, 3572445317), m = i(m, h, b, f, g[l + 6], 23, 76029189), f = i(f, m, h, b, g[l + 9], 4, 3654602809), b = i(b, f, m, h, g[l + 12], 11, 3873151461), h = i(h, b, f, m, g[l + 15], 16, 530742520), f = a(f, m = i(m, h, b, f, g[l + 2], 23, 3299628645), h, b, g[l + 0], 6, 4096336452), b = a(b, f, m, h, g[l + 7], 10, 1126891415), h = a(h, b, f, m, g[l + 14], 15, 2878612391), m = a(m, h, b, f, g[l + 5], 21, 4237533241), f = a(f, m, h, b, g[l + 12], 6, 1700485571), b = a(b, f, m, h, g[l + 3], 10, 2399980690), h = a(h, b, f, m, g[l + 10], 15, 4293915773), m = a(m, h, b, f, g[l + 1], 21, 2240044497), f = a(f, m, h, b, g[l + 8], 6, 1873313359), b = a(b, f, m, h, g[l + 15], 10, 4264355552), h = a(h, b, f, m, g[l + 6], 15, 2734768916), m = a(m, h, b, f, g[l + 13], 21, 1309151649), f = a(f, m, h, b, g[l + 4], 6, 4149444226), b = a(b, f, m, h, g[l + 11], 10, 3174756917), h = a(h, b, f, m, g[l + 2], 15, 718787259), m = a(m, h, b, f, g[l + 9], 21, 3951481745), f = n(f, c), m = n(m, u), h = n(h, p), b = n(b, d);
                    return (s(f) + s(m) + s(h) + s(b)).toLowerCase();
                }