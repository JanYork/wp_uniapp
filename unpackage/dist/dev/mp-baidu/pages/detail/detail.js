(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 57:
/*!***************************************************************!*\
  !*** D:/WordPress/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 58:
/*!********************************************!*\
  !*** D:/WordPress/pages/detail/detail.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4& */ 59);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 61);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ 63);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/*!***************************************************************************!*\
  !*** D:/WordPress/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4& */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 60:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WordPress/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uiSys: function() {
      return Promise.all(/*! import() | ui/components/ui-sys/ui-sys */[__webpack_require__.e("common/vendor"), __webpack_require__.e("ui/components/ui-sys/ui-sys")]).then(__webpack_require__.bind(null, /*! @/ui/components/ui-sys/ui-sys.vue */ 167))
    },
    mpHtml: function() {
      return Promise.all(/*! import() | components/mp-html/mp-html */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mp-html/mp-html")]).then(__webpack_require__.bind(null, /*! @/components/mp-html/mp-html */ 195))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 61:
/*!*********************************************************************!*\
  !*** D:/WordPress/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 62);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WordPress/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























































































var _config = _interopRequireDefault(__webpack_require__(/*! ../../utils/config.js */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var Api = __webpack_require__(/*! ../../utils/api.js */ 33);

var util = __webpack_require__(/*! ../../utils/util.js */ 34);

var Auth = __webpack_require__(/*! ../../utils/auth.js */ 46);

var wxApi = __webpack_require__(/*! ../../utils/wxApi.js */ 35);

var wxRequest = __webpack_require__(/*! ../../utils/wxRequest.js */ 36);

var Adapter = __webpack_require__(/*! ../../utils/adapter.js */ 37);

var innerAudioContext = uni.createInnerAudioContext();
var ctx = uni.createCanvasContext('mycanvas');
var app = getApp();
var isFocusing = false;
var pageCount = _config.default.getPageCount;
var webSiteName = _config.default.getWebsiteName;
var domain = _config.default.getDomain;

var wechat = _config.default.getWecat;
var rewardedVideoAd = null;var _default =
{
  data: function data() {var _ref;
    return _ref = {
      target: '',
      title: '????????????',
      webSiteName: webSiteName,
      wechat: wechat,
      detail: {
        category_name: "",
        detailAdId: "",
        detailAd: "",

        title: {
          rendered: "" },


        pageviews: "",

        content: {
          rendered: "" },


        previous_post_id: "",
        next_post_id: "",
        previous_post_title: "",
        next_post_title: "",
        videoAdId: "",
        id: "" },


      commentsList: [],
      ChildrenCommentsList: [],
      commentCount: '',
      detailDate: '',
      commentValue: '',
      display: 'none',
      showerror: 'none',
      page: 1,
      isLastPage: false,
      parentID: "0",
      focus: false,
      placeholder: "????????????????????????...",
      postID: null,
      scrollHeight: 0,
      postList: [],
      link: '',

      dialog: {
        title: '',
        content: '',
        hidden: true },


      content: '',
      isShow: true,

      //??????menubox????????????
      isLoad: true,

      //??????menubox????????????  
      menuBackgroup: false,

      likeImag: "/static/pages/detail/like.png",
      likeList: [],
      likeCount: 0,
      displayLike: 'none',
      userid: "",
      toFromId: "",
      commentdate: "",
      flag: 1,
      logo: uni.getStorageSync('logoImageurl'),
      enableComment: true,
      isLoading: false,
      system: '',
      downloadFileDomain: uni.getStorageSync('downloadfileDomain'),
      businessDomain: uni.getStorageSync('businessDomain'),
      isPlayAudio: false,
      audioSeek: 0,
      audioDuration: 0,
      showTime1: '00:00',
      showTime2: '00:00',
      audioTime: 0,
      displayAudio: 'none',
      shareImagePath: '',
      detailSummaryHeight: '',
      detailAdsuccess: true,
      detailTopAdsuccess: true,
      fristOpen: false,
      domain: domain }, _defineProperty(_ref, "detailSummaryHeight",
    ''), _defineProperty(_ref, "platform",
    ''), _defineProperty(_ref, "errMessage",
    ""), _defineProperty(_ref, "postImageUrl",
    ""), _defineProperty(_ref, "posterConfig",
    ""), _ref;



  },

  onLoad: function onLoad(options) {
    var that = this;










    that.fetchDetailData(options.id);
    uni.getSystemInfo({
      success: function success(t) {
        var system = t.system.indexOf("iOS") != -1 ? "iOS" : "Android";
        that.setData({
          system: system,
          platform: t.platform });

      } });


  },
  onUnload: function onUnload() {
    //??????????????????????????????


    if (rewardedVideoAd && rewardedVideoAd.destroy) {
      rewardedVideoAd.destroy();
    }

    innerAudioContext.destroy();
    ctx = null;
  },
  onShareAppMessage: function onShareAppMessage(res) {

    console.log(res);
    return {
      title: '??????"' + webSiteName + '"????????????' + this.data.detail.title.rendered,
      path: 'pages/detail/detail?id=' + this.data.detail.id,
      imageUrl: this.data.detail.post_full_image,
      success: function success(res) {
        // ????????????
        console.log(res);
      },
      fail: function fail(res) {
        console.log(res); // ????????????
      } };

  },
  // ????????????????????????
  onShareTimeline: function onShareTimeline() {
    var imageUrl = this.data.detail.post_full_image;
    return {
      title: this.data.detail.title.rendered,
      query: {
        id: this.data.detail.id },

      imageUrl: imageUrl };

  },
  methods: {
    onLoadClone3389: function onLoadClone3389(options) {},

    showLikeImg: function showLikeImg() {
      var that = this;
      var flag = false;
      var _likes = that.data.detail.avatarurls;

      if (!_likes) {
        return;
      }

      var likes = [];

      for (var i = 0; i < _likes.length; i++) {
        var avatarurl = "/static/images/gravatar.png";

        if (_likes[i].avatarurl.indexOf('wx.qlogo.cn') != -1) {
          avatarurl = _likes[i].avatarurl;
        }

        likes[i] = avatarurl;
      }

      var temp = likes;
      that.setData({
        likeList: likes });

    },

    // ??????????????????
    fristOpenComment: function fristOpenComment() {
      this.setData({
        page: 1,
        commentsList: [],
        isLastPage: false });

      this.fetchCommentData();
      this.setData({
        page: this.data.page + 1 });

    },

    gotowebpage: function gotowebpage() {
      var that = this;


      var url = '';

      if (enterpriseMinapp == "1") {
        var url = '../webpage/webpage';
        uni.navigateTo({
          url: url + '?url=' + self.link });

      } else {
        that.copyLink(self.link);
      }
    },

    copyLink: function copyLink(url) {
      uni.setClipboardData({
        data: url,
        success: function success(res) {
          uni.getClipboardData({
            success: function success(res) {
              uni.showToast({
                title: '???????????????',
                duration: 2000 });

            } });

        } });

    },


    goHome: function goHome() {
      uni.switchTab({
        url: '../index/index' });

    },

    //??????????????????
    fetchDetailData: function fetchDetailData(id) {
      var self = this;
      var getPostDetailRequest = wxRequest.getRequest(Api.getPostByID(id));
      var res;
      getPostDetailRequest.then(function (response) {
        res = response;

        if (response.data.code && response.data.data.status == "404") {
          self.setData({
            showerror: 'block',
            display: 'none',
            errMessage: response.data.message });

          return false;
        } // ?????????????????????????????????


        uni.setNavigationBarTitle({
          title: res.data.category_name });

        //WxParse.wxParse('article', 'html', response.data.content.rendered, self, 5)
        setTimeout(function () {
          self.article_article = response.data.content.rendered;
        }, 200);


        // ????????????????????????




        self.setData({
          detail: response.data,
          postID: id,
          link: response.data.link,
          detailDate: util.cutstr(response.data.date, 10, 1),
          display: 'block' });

        return response.data;
      }).then(function (response) {
        var tagsArr = [];
        tagsArr = res.data.tags;

        if (!tagsArr) {
          return false;
        }

        var tags = "";

        for (var i = 0; i < tagsArr.length; i++) {
          if (i == 0) {
            tags += tagsArr[i];
          } else {
            tags += "," + tagsArr[i];
          }
        }

        if (tags != "") {
          var getPostTagsRequest = wxRequest.getRequest(Api.getPostsByTags(id, tags));
          getPostTagsRequest.then(function (response) {
            self.setData({
              postList: response.data });

          });
        }
      }).catch(function (error) {
        console.log('error: ' + error);
      });
    },

    //?????????????????????
    sliderChange: function sliderChange(e) {
      var that = this;
      innerAudioContext.src = this.data.detail.audios[0].src; //????????????????????????

      var value = e.detail.value;
      this.setData({
        audioTime: value });

      var duration = this.data.audioDuration; //????????????????????????????????????????????????????????????????????????

      value = parseInt(value * duration / 100); //????????????

      this.setData({
        audioSeek: value,
        isPlayAudio: true });
      //??????seek????????????????????????

      innerAudioContext.seek(value); //????????????

      innerAudioContext.play();
    },

    //???????????????????????????duration
    InitializationAudio: function InitializationAudio(audiosrc) {
      var that = this; //??????src

      innerAudioContext.src = audiosrc; //????????????
      //innerAudioContext.play();

      innerAudioContext.autoplay = false;
      innerAudioContext.pause();
      innerAudioContext.onCanplay(function () {
        //?????????duration
        innerAudioContext.duration;
        setTimeout(function () {
          //???????????????????????????duration
          var duration = innerAudioContext.duration;
          var min = parseInt(duration / 60);
          var sec = parseInt(duration % 60);

          if (min.toString().length == 1) {
            min = "0".concat(min);
          }

          if (sec.toString().length == 1) {
            sec = "0".concat(sec);
          }

          that.setData({
            audioDuration: innerAudioContext.duration,
            showTime2: "".concat(min, ":").concat(sec) });

        }, 1000);
      });
    },

    loadAudio: function loadAudio() {
      var that = this; //?????????????????????

    },

    playAudio: function playAudio() {
      //???????????????????????????????????????  
      var that = this;
      var isPlayAudio = that.data.isPlayAudio;
      var seek = that.data.audioSeek;
      innerAudioContext.pause(); //??????????????????

      that.setData({
        isPlayAudio: !isPlayAudio });


      if (isPlayAudio) {
        //???????????????????????????????????????seek?????????
        that.setData({
          audioSeek: innerAudioContext.currentTime });

      } else {
        //???????????????????????????????????????????????????
        innerAudioContext.src = that.data.detail.audios[0].src;

        if (innerAudioContext.duration != 0) {
          that.setData({
            audioDuration: innerAudioContext.duration });

        } //???????????????????????????


        innerAudioContext.seek(seek);
        innerAudioContext.play();
      }
    },

    //???a???????????????????????????????????????
    wxParseTagATap: function wxParseTagATap(e) {
      var that = this;
      var href = e.detail.src || e.detail.href;
      var domain = _config.default.getDomain;
      var appid = e.detail.appid;
      var redirectype = e.detail.redirectype;
      var path = e.detail.path; // ??????a??????src?????????????????????????????????

      var isDoc = /\.(doc|docx|xls|xlsx|ppt|pptx|pdf)$/.test(href);

      if (isDoc) {
        this.openLinkDoc(e);
        return;
      }

      if (redirectype) {
        if (redirectype == 'apppage') {
          //??????????????????????????????         
          uni.navigateTo({
            url: path });

        } else {
          if (redirectype == 'webpage') //?????????web-view???????????????
            {
              href = '../webpage/webpage?url=' + href;
              uni.navigateTo({
                url: href });

            } else {
            if (redirectype == 'miniapp') //?????????????????????
              {
                uni.navigateToMiniProgram({
                  appId: appid,
                  path: path });

              }
          }
        }

        return;
      }

      var enterpriseMinapp = that.data.detail.enterpriseMinapp; //???????????????????????????????????????

      if (href.indexOf(domain) == -1) {
        var n = 0;

        for (var i = 0; i < that.data.businessDomain.length; i++) {
          if (href.indexOf(that.data.businessDomain[i].domain) != -1) {
            n++;
            break;
          }
        }

        if (n > 0) {
          var url = '../webpage/webpage';

          if (enterpriseMinapp == "1") {
            url = '../webpage/webpage';
            uni.navigateTo({
              url: url + '?url=' + href });

          } else {
            that.copyLink(href);
          }
        } else {
          that.copyLink(href);
        }
      } else {
        var slug = util.GetUrlFileName(href, domain);

        if (slug == "") {
          var url = '../webpage/webpage';

          if (enterpriseMinapp == "1") {
            url = '../webpage/webpage';
            uni.navigateTo({
              url: url + '?url=' + href });

          } else {
            that.copyLink(href);
          }

          return;
        }

        if (slug == 'index') {
          uni.switchTab({
            url: '../index/index' });

        } else {
          var getPostSlugRequest = wxRequest.getRequest(Api.getPostBySlug(slug));
          getPostSlugRequest.then(function (res) {
            if (res.statusCode == 200) {
              if (res.data.length != 0) {
                var postID = res.data[0].id;
                var openLinkCount = uni.getStorageSync('openLinkCount') || 0;

                if (openLinkCount > 4) {
                  uni.redirectTo({
                    url: '../detail/detail?id=' + postID });

                } else {
                  uni.navigateTo({
                    url: '../detail/detail?id=' + postID });

                  openLinkCount++;
                  uni.setStorageSync('openLinkCount', openLinkCount);
                }
              } else {
                var url = '../webpage/webpage';

                if (enterpriseMinapp == "1") {
                  url = '../webpage/webpage';
                  uni.navigateTo({
                    url: url + '?url=' + href });

                } else {
                  that.copyLink(href);
                }
              }
            }
          }).catch(function (res) {
            console.log(response.data.message);
          });
        }
      }
    },

    // ????????????
    openLinkDoc: function openLinkDoc(e) {
      var self = this;
      var url;
      var fileType; // ?????????a??????href??????????????????

      var src = e.currentTarget.dataset.src;
      var n = 0;

      for (var i = 0; i < self.data.downloadFileDomain.length; i++) {
        if (src.indexOf(self.data.downloadFileDomain[i]) != -1) {
          n++;
          break;
        }
      }

      if (n == 0) {
        self.copyLink(src);
        return;
      }

      var docType;
      var isDoc = /\.(doc|docx|xls|xlsx|ppt|pptx|pdf)$/.test(src);

      if (src && isDoc) {
        url = src;
        fileType = /doc|docx|xls|xlsx|ppt|pptx|pdf$/.exec(src)[0];
      } else {
        url = e.currentTarget.dataset.filelink;
        fileType = e.currentTarget.dataset.filetype;
      }

      uni.downloadFile({
        url: url,
        success: function success(res) {
          var filePath = res.tempFilePath;
          uni.openDocument({
            filePath: filePath,
            fieldType: fileType });

        },
        fail: function fail(error) {
          console.log('??????????????????:' + error);
        } });

    },

    success: function success(res) {var

      detail =
      res.detail;
      console.log(detail);
    },

    showCustomizeModal: function showCustomizeModal(e) {
      this.setData({
        target: e.currentTarget.dataset.key });

    },



    //????????????
    loadMore: function loadMore(e) {
      var that = this;

      if (!that.data.isLastPage) {
        that.setData({
          page: that.data.page + 1 });

        console.log('?????????' + that.data.page);
        this.fetchCommentData();
      } else {
        uni.showToast({
          title: '??????????????????',
          mask: false,
          duration: 1000 });

      }
    },

    confirm: function confirm() {
      this.setData({
        "dialog.hidden": true,
        "dialog.title": '',
        "dialog.content": '' });

    },






    adbinderror: function adbinderror(e) {
      var that = this;
      console.log(e.detail.errCode);
      console.log(e.detail.errMsg);

      if (e.detail.errCode) {
        that.setData({
          detailAdsuccess: false });

      }
    },

    adTopbinderror: function adTopbinderror(e) {
      var that = this;
      console.log(e.detail.errCode);
      console.log(e.detail.errMsg);

      if (e.detail.errCode) {
        that.setData({
          detailTopAdsuccess: false });

      }
    },

    // ????????????
    readMore: function readMore() {
      var that = this;
      var platform = that.data.platform;

      if (platform == 'devtools') {
        uni.showToast({
          title: "????????????????????????????????????",
          icon: "none",
          duration: 2000 });

        that.setData({
          detailSummaryHeight: '' });

      } else {
        rewardedVideoAd.show().catch(function () {
          rewardedVideoAd.load().then(function () {return rewardedVideoAd.show();}).catch(function (err) {
            console.log('???????????? ??????????????????');
            that.setData({
              detailSummaryHeight: '' });

          });
        });
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 63:
/*!*****************************************************************************!*\
  !*** D:/WordPress/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=css& */ 64);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WordPress/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[57,"common/runtime","common/vendor"]]]);