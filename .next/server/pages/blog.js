"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,209,313];
exports.modules = {

/***/ 6762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_blog),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./pages/header.js
var header = __webpack_require__(5861);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./pages/api/blog.js
var blog = __webpack_require__(4587);
;// CONCATENATED MODULE: external "react-paginate"
const external_react_paginate_namespaceObject = require("react-paginate");
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_namespaceObject);
;// CONCATENATED MODULE: ./pages/blog/index.js







/* export const getStaticProps = async () => {
    return {
        props: {
            data: bloglist
        }
    }
} */ const getServerSideProps = async (context)=>{
    return {
        props: {
            data: blog/* bloglist */.f
        }
    };
};
function Blog({ data  }) {
    const router = (0,router_.useRouter)();
    let { page  } = router.query;
    if (page && page !== "" && page !== 0) {
        page = page;
    } else {
        page = 1;
    }
    const itemsPerPage = 10;
    //const total_records = data.length;
    const slice_end = page * itemsPerPage;
    const slice_start = Number(slice_end) - Number(itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = (event)=>{
        //alert(event.selected);
        const nexpage = Number(1) + Number(event.selected);
        if (event.selected && event.selected !== "" && event.selected !== 0) {
            router.push(`/blog?page=${nexpage}`);
        } else {
            router.push("/blog");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "This is Blog Main Page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "This is blog main page description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    marginTop: "5px",
                    marginBottom: "10px",
                    fontSize: "25px",
                    fontWeight: "bold",
                    textAlign: "center"
                },
                children: "Blogs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                style: {
                    width: "75%",
                    marginBottom: "20px"
                },
                children: data.slice(slice_start, slice_end).map((item)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                        onClick: ()=>router.push({
                                pathname: `/blog/${item.id}`,
                                query: {
                                    page: page
                                }
                            }),
                        style: {
                            cursor: "pointer"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                            style: {
                                border: "solid gray 1px",
                                fontSize: "17px",
                                padding: "5px"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                    children: [
                                        item.id,
                                        " -"
                                    ]
                                }),
                                " ",
                                item.title
                            ]
                        })
                    }, item.id);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_paginate_default()), {
                    previousLabel: "previous",
                    nextLabel: "next",
                    breakLabel: "...",
                    breakClassName: "break-me",
                    containerClassName: "pagination",
                    subContainerClassName: "pages pagination",
                    previousLinkClassName: "pagination__link",
                    nextLinkClassName: "pagination__link",
                    disabledClassName: "pagination__link--disabled",
                    activeClassName: "pagination__link--active",
                    onPageChange: handlePageClick,
                    pageRangeDisplayed: 5,
                    pageCount: pageCount,
                    renderOnZeroPageCount: null
                })
            })
        ]
    });
}
/* harmony default export */ const pages_blog = (Blog);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,861,587], () => (__webpack_exec__(6762)));
module.exports = __webpack_exports__;

})();