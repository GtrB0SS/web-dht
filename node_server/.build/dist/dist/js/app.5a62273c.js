"use strict";
(function (e) { function t(t) { for (var a, l, o = t[0], i = t[1], c = t[2], u = 0, f = []; u < o.length; u++)
    l = o[u], Object.prototype.hasOwnProperty.call(n, l) && n[l] && f.push(n[l][0]), n[l] = 0; for (a in i)
    Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]); d && d(t); while (f.length)
    f.shift()(); return s.push.apply(s, c || []), r(); } function r() { for (var e, t = 0; t < s.length; t++) {
    for (var r = s[t], a = !0, o = 1; o < r.length; o++) {
        var i = r[o];
        0 !== n[i] && (a = !1);
    }
    a && (s.splice(t--, 1), e = l(l.s = r[0]));
} return e; } var a = {}, n = { app: 0 }, s = []; function l(t) { if (a[t])
    return a[t].exports; var r = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, l), r.l = !0, r.exports; } l.m = e, l.c = a, l.d = function (e, t, r) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, l.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, l.t = function (e, t) { if (1 & t && (e = l(e)), 8 & t)
    return e; if (4 & t && "object" === typeof e && e && e.__esModule)
    return e; var r = Object.create(null); if (l.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var a in e)
        l.d(r, a, function (t) { return e[t]; }.bind(null, a)); return r; }, l.n = function (e) { var t = e && e.__esModule ? function () { return e["default"]; } : function () { return e; }; return l.d(t, "a", t), t; }, l.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, l.p = "/"; var o = window["webpackJsonp"] = window["webpackJsonp"] || [], i = o.push.bind(o); o.push = t, o = o.slice(); for (var c = 0; c < o.length; c++)
    t(o[c]); var d = i; s.push([0, "chunk-vendors"]), r(); })({ 0: function (e, t, r) { e.exports = r("56d7"); }, 1535: function (e, t, r) {
        "use strict";
        var a = r("e28d"), n = r.n(a);
        n.a;
    }, "56d7": function (e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var a = r("2b0e"), n = r("ce5b"), s = r.n(n);
        r("bf40");
        a["default"].use(s.a);
        var l = { theme: { themes: { light: { primary: "#e91e63", darkPink: "#6c000a" } } } }, o = new s.a(l), i = function () { var e = this, t = e.$createElement, r = e._self._c || t; return r("div", { attrs: { id: "app" } }, [r("router-view")], 1); }, c = [], d = (r("be3c"), r("2877")), u = {}, f = Object(d["a"])(u, i, c, !1, null, "7ce212f2", null), p = f.exports, v = r("8c4f"), h = function () { var e = this, t = e.$createElement, r = e._self._c || t; return r("div", { staticClass: "dash" }, [r("v-app-bar", { attrs: { fixed: "" } }, [r("v-toolbar", { staticClass: " toolbar hidden-md-and-up", attrs: { dark: "", color: "#d3d3d3", id: "toolbar" } }, [r("v-spacer"), r("v-toolbar-items", [r("v-col", { attrs: { cols: "12", sm: "3" } }, [r("v-btn", { staticClass: "toolbar", attrs: { text: "", color: "#0f1c41", to: "/filesTreatment" } }, [e._v(" Files ")])], 1), r("v-col", { attrs: { cols: "12", sm: "5" } }, [r("v-btn", { staticClass: "toolbar", attrs: { text: "", color: "#0f1c41", to: "/statusDownloadingFiles" } }, [e._v(" Download Status ")])], 1), r("v-col", { attrs: { cols: "12", sm: "3" } }, [r("v-btn", { staticClass: "toolbar", attrs: { text: "", color: "#0f1c41", to: "/statusUploadingFiles" } }, [e._v(" Upload Status ")])], 1)], 1)], 1)], 1), r("router-view")], 1); }, g = [], m = { data: function () { return { items: [{ path: "/#/", title: "Download Status" }, { path: "/#/statusUploadingFiles", title: "Upload Status" }, { path: "/#/filesTreatment", title: "Files" }], locationWindow: null, on: !1 }; }, methods: { onClickMenu: function (e) { window.location.href = e.path; } } }, b = m, x = Object(d["a"])(b, h, g, !1, null, null, null), w = x.exports, _ = function () { var e = this, t = e.$createElement, r = e._self._c || t; return r("div", { attrs: { id: "searchTable" } }, [r("v-container", { attrs: { "grid-list-xl": "", "text-xs-center": "" } }, [r("v-layout", { attrs: { row: "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-file-input", { attrs: { id: "inputFile", type: "file", label: "Click here to select file for upload", outlined: "" }, model: { value: e.file, callback: function (t) { e.file = t; }, expression: "file" } })], 1), r("v-flex", { attrs: { xs12: "" } }, [r("v-btn", { staticClass: "futura", attrs: { id: "okFileButton", text: "", color: "#0f1c41", left: "" }, on: { click: function (t) { return e.onUploadClick(); } } }, [e._v(" Upload File ")])], 1), r("v-flex", { attrs: { xs12: "" } }, [r("v-alert", { attrs: { value: e.fileErrorFlag, "v-bind": e.fileErrorMessage, type: "error" } }, [e._v(" " + e._s(e.fileErrorMessage) + " ")])], 1)], 1)], 1), r("v-container", { attrs: { "grid-list-xl": "", "text-xs-center": "" } }, [r("v-layout", { attrs: { row: "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-file-input", { attrs: { id: "inputTorrent", type: "file", label: "Click here to select torrent for fownload", outlined: "" }, model: { value: e.torrentFile, callback: function (t) { e.torrentFile = t; }, expression: "torrentFile" } })], 1), r("v-flex", { attrs: { xs12: "" } }, [r("v-btn", { staticClass: "futura", attrs: { id: "okFileButton", text: "", color: "#0f1c41", left: "" }, on: { click: function (t) { return e.onDownloadClick(); } } }, [e._v(" Download File ")])], 1), r("v-flex", { attrs: { xs12: "" } }, [r("v-alert", { attrs: { value: e.torrentErrorFlag, "v-bind": e.torrentErrorMessage, type: "error" } }, [e._v(" " + e._s(e.torrentErrorMessage) + " ")])], 1)], 1)], 1)], 1); }, k = [], F = "http://localhost", y = "80", D = { data: function () { return { file: null, fileErrorMessage: null, fileErrorFlag: !1, torrentFile: null, torrentErrorMessage: null, torrentErrorFlag: null }; }, methods: { onDownloadClick: function () { if (this.torrentErrorMessage = null, this.torrentErrorFlag = !1, null == this.torrentFile)
                    return this.torrentErrorMessage = "Debe seleccionar un .torrent para poder descargar", void (this.torrentErrorFlag = !0); console.log(this.torrentFile.type); var e = new XMLHttpRequest, t = new FormData; if (t.append("file", this.file), e.open("POST", F + ":" + y + "/download/create", !1), e.send(t), 200 != e.status)
                    return this.torrentErrorMessage = "El archivo que se quiere descargar no es correcto", void (this.torrentErrorFlag = !0); console.log(e.response); }, onUploadClick: function () { if (this.fileErrorMessage = null, this.fileErrorFlag = !1, null == this.file)
                    return this.fileErrorMessage = "Debe seleccionar un archivo para subir", void (this.fileErrorFlag = !0); if (this.file.size > 1e6)
                    return this.fileErrorMessage = "No es posible subir archivo de un tamaño superior a 1MB", void (this.fileErrorFlag = !0); var e = new XMLHttpRequest, t = new FormData; t.append("file", this.file), e.open("POST", F + ":" + y + "/upload/create", !1), e.send(t), 200 == e.status && console.log(e.response); } } }, E = D, C = Object(d["a"])(E, _, k, !1, null, null, null), M = C.exports, S = function () { var e = this, t = e.$createElement, r = e._self._c || t; return r("div", { attrs: { id: "firstTable" } }, [r("v-container", { attrs: { "grid-list-xl": "", "text-xs-center": "" } }, [r("v-layout", { attrs: { row: "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-card", { staticClass: "mx-auto" }, [r("v-card-title", { attrs: { color: "#0f1c41" } }, [e._v(" Downloading Files "), r("v-spacer"), r("v-text-field", { attrs: { "append-icon": "mdi-magnify", label: "Search", "single-line": "", "hide-details": "" }, model: { value: e.search, callback: function (t) { e.search = t; }, expression: "search" } })], 1), r("v-data-table", { staticClass: "downloadingFiles", attrs: { headers: e.headers, items: e.files, "items-per-page": 10 }, scopedSlots: e._u([{ key: "item", fn: function (t) { return [r("tr", [r("td", [e._v(e._s(t.item.nombre))]), r("td", [e._v(e._s(t.item.porcentajeDescargado) + "%")])])]; } }]) })], 1)], 1), e._v("> ")], 1)], 1), r("v-container", { attrs: { "grid-list-xl": "", "text-xs-center": "" } }, [r("v-layout", { attrs: { row: "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-card", { staticClass: "mx-auto" }, [r("v-card-title", { attrs: { color: "#0f1c41" } }, [e._v(" Downloaded Files "), r("v-spacer"), r("v-text-field", { attrs: { "append-icon": "mdi-magnify", label: "Search", "single-line": "", "hide-details": "" }, model: { value: e.search, callback: function (t) { e.search = t; }, expression: "search" } })], 1), r("v-data-table", { staticClass: "downloadedFiles", attrs: { headers: e.headersDownloaded, items: e.filesDownloaded, "items-per-page": 10 }, scopedSlots: e._u([{ key: "item", fn: function (t) { return [r("tr", [r("td", [e._v(e._s(t.item.name))]), r("td", [r("v-btn", { staticClass: "mx-2", attrs: { color: "#000000", dark: "", icon: "", left: "", small: "" }, on: { click: function (r) { return e.onButtonClick(t.item); } } }, [r("v-icon", [e._v(e._s(e.icons.mdiDelete))]), e._v(" Delete ")], 1)], 1)])]; } }]) })], 1)], 1), e._v("> ")], 1)], 1)], 1); }, O = [], T = (r("fb6a"), r("94ed")), U = { data: function () { return { search: "", icons: { mdiDelete: T["a"] }, headers: [{ text: "Nombre", align: "start", sortable: !1, value: "name" }, { text: "Descargado (%)", value: "percentage" }], files: [], headersDownloaded: [{ text: "Nombre", align: "start", sortable: !1, value: "name" }], filesDownloaded: [] }; }, mounted: function () { var e = new XMLHttpRequest; if (e.open("GET", F + ":" + y + "/download/status", !1), e.send(), console.log("He enviado petición"), 200 == e.status) {
                console.log(e.response);
                var t = e.response;
                if (t.length > 0)
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        100 == a.percentage ? this.filesDownloaded.push(a) : this.files.push(a);
                    }
                this.intervalRetreaving();
            } }, methods: { onButtonClick: function (e) { console.log("click on " + e.nombre); var t = new XMLHttpRequest; if (t.open("POST", F + ":" + y + "/download/delete", !1), t.send(JSON.stringify(e.id)), console.log("He enviado petición para eliminar"), 200 == t.status && 1 == t.response) {
                    console.log("He recibido confirmación");
                    for (var r = -1, a = 0; a < this.filesDownloaded.length; a++)
                        if (this.filesDownloaded[a].id == e.id) {
                            r = a;
                            break;
                        }
                    this.filesDownloaded.slice(r, 1);
                } }, intervalRetreaving: function () { var e = this.files, t = this.filesDownloaded; setInterval((function () { var r = new XMLHttpRequest; if (r.open("GET", F + ":" + y + "/download/status", !1), r.send(), 200 == r.status) {
                    console.log(r.response);
                    var a = r.response;
                    if (a.length > 0)
                        for (var n = 0; n < a.length; n++) {
                            var s = a[n];
                            if (100 == s.percentage) {
                                var l = -1;
                                if (t.length > 0)
                                    for (var o = 0; o < t.length; o++)
                                        if (t[o].id == s.id) {
                                            l = o;
                                            break;
                                        }
                                if (-1 == l) {
                                    if (e.length > 0)
                                        for (var i = 0; i < e.length; i++)
                                            if (e[i].id == s.id) {
                                                l = i;
                                                break;
                                            }
                                    -1 != l && e.slice(l, 1), t.push(s);
                                }
                            }
                            else {
                                var c = -1;
                                if (e.length > 0)
                                    for (var d = 0; o < e.length; d++)
                                        if (e[d].id == s.id) {
                                            c = d;
                                            break;
                                        }
                                -1 == c ? e.push(s) : e[c] = s;
                            }
                        }
                } }), 2e3); } } }, j = U, H = (r("1535"), Object(d["a"])(j, S, O, !1, null, null, null)), P = H.exports, R = function () { var e = this, t = e.$createElement, r = e._self._c || t; return r("div", { attrs: { id: "firstTable" } }, [r("v-container", { attrs: { "grid-list-xl": "", "text-xs-center": "" } }, [r("v-layout", { attrs: { row: "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-card", { staticClass: "mx-auto" }, [r("v-card-title", { attrs: { color: "#0f1c41" } }, [e._v(" Uploading Files "), r("v-spacer"), r("v-text-field", { attrs: { "append-icon": "mdi-magnify", label: "Search", "single-line": "", "hide-details": "" }, model: { value: e.search, callback: function (t) { e.search = t; }, expression: "search" } })], 1), r("v-data-table", { staticClass: "uploadingFiles", attrs: { headers: e.headers, items: e.files, "items-per-page": 10 }, scopedSlots: e._u([{ key: "item", fn: function (t) { return [r("tr", [r("td", [e._v(e._s(t.item.nombre))]), r("td", [e._v(e._s(t.item.porcentajeSubido) + "%")])])]; } }]) })], 1)], 1), e._v("> ")], 1)], 1), r("v-container", { attrs: { "grid-list-xl": "", "text-xs-center": "" } }, [r("v-layout", { attrs: { row: "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-card", { staticClass: "mx-auto" }, [r("v-card-title", { attrs: { color: "#0f1c41" } }, [e._v(" Uploaded Files "), r("v-spacer"), r("v-text-field", { attrs: { "append-icon": "mdi-magnify", label: "Search", "single-line": "", "hide-details": "" }, model: { value: e.search, callback: function (t) { e.search = t; }, expression: "search" } })], 1), r("v-data-table", { staticClass: "uploadedFiles", attrs: { headers: e.headersUploaded, items: e.filesUploaded, "items-per-page": 10 }, scopedSlots: e._u([{ key: "item", fn: function (t) { return [r("tr", [r("td", [e._v(e._s(t.item.name))]), r("td", [r("v-btn", { staticClass: "mx-2", attrs: { color: "#000000", dark: "", icon: "", left: "", small: "" }, on: { click: function (r) { return e.onButtonClick(t.item); } } }, [r("v-icon", [e._v(e._s(e.icons.mdiDelete))]), e._v(" Delete ")], 1)], 1)])]; } }]) })], 1)], 1), e._v("> ")], 1)], 1)], 1); }, q = [], L = { data: function () { return { search: "", icons: { mdiDelete: T["a"] }, headers: [{ text: "Nombre", align: "start", sortable: !1, value: "name" }, { text: "Subido (%)", value: "percentage" }], files: [], headersUploaded: [{ text: "Nombre", align: "start", sortable: !1, value: "name" }], filesUploaded: [] }; }, mounted: function () { var e = new XMLHttpRequest; if (e.open("GET", F + ":" + y + "/upload/status", !1), e.send(), console.log("He enviado petición"), 200 == e.status) {
                console.log(e.response);
                var t = e.response;
                if (t.length > 0)
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        100 == a.percentage ? this.filesDownloaded.push(a) : this.files.push(a);
                    }
                this.intervalRetreaving();
            } }, methods: { onButtonClick: function (e) { console.log("click on " + e.nombre); var t = new XMLHttpRequest; if (t.open("POST", F + ":" + y + "/upload/delete", !1), t.send(JSON.stringify(e.id)), console.log("He enviado petición para eliminar"), 200 == t.status && 1 == t.response) {
                    console.log("He recibido confirmación");
                    for (var r = -1, a = 0; a < this.filesUploaded.length; a++)
                        if (this.filesUploaded[a].id == e.id) {
                            r = a;
                            break;
                        }
                    this.filesUploaded.slice(r, 1);
                } }, intervalRetreaving: function () { var e = this.files, t = this.filesUploaded; setInterval((function () { var r = new XMLHttpRequest; if (r.open("GET", F + ":" + y + "/upload/status", !1), r.send(), 200 == r.status) {
                    console.log(r.response);
                    var a = r.response;
                    if (a.length > 0)
                        for (var n = 0; n < a.length; n++) {
                            var s = a[n];
                            if (100 == s.percentage) {
                                var l = -1;
                                if (t.length > 0)
                                    for (var o = 0; o < t.length; o++)
                                        if (t[o].id == s.id) {
                                            l = o;
                                            break;
                                        }
                                if (-1 == l) {
                                    if (e.length > 0)
                                        for (var i = 0; i < e.length; i++)
                                            if (e[i].id == s.id) {
                                                l = i;
                                                break;
                                            }
                                    -1 != l && e.slice(l, 1), t.push(s);
                                }
                            }
                            else {
                                var c = -1;
                                if (e.length > 0)
                                    for (var d = 0; d < e.length; d++)
                                        if (e[d].id == s.id) {
                                            c = d;
                                            break;
                                        }
                                -1 == c ? e.push(s) : e[c] = s;
                            }
                        }
                } }), 2e3); } } }, X = L, B = (r("8cbf"), Object(d["a"])(X, R, q, !1, null, null, null)), N = B.exports;
        a["default"].use(v["a"]);
        var $ = new v["a"]({ routes: [{ path: "/", name: "home", redirect: { name: "dash" } }, { path: "/dash", name: "dash", redirect: { name: "statusDownloadingFiles" }, component: w, children: [{ path: "/statusDownloadingFiles", name: "statusDownloadingFiles", component: P }, { path: "/statusUploadingFiles", name: "statusUploadingFiles", component: N }, { path: "/filesTreatment", name: "filesTreatment", component: M }] }] }), G = $;
        a["default"].config.productionTip = !1, new a["default"]({ vuetify: o, router: G, render: function (e) { return e(p); } }).$mount("#app");
    }, "78fa": function (e, t, r) { }, "8cbf": function (e, t, r) {
        "use strict";
        var a = r("dc8b"), n = r.n(a);
        n.a;
    }, be3c: function (e, t, r) {
        "use strict";
        var a = r("78fa"), n = r.n(a);
        n.a;
    }, dc8b: function (e, t, r) { }, e28d: function (e, t, r) { } });
//# sourceMappingURL=app.5a62273c.js.map
