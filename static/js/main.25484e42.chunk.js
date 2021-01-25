(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(23),n(1)),c=n.n(r),o=n(8),i=n.n(o),u=n(10),s=n(4),l=n(5),h=n(7),p=n(6),d=(n(27),n(19)),m=n.n(d),j=function(e){var t=e.query,n=void 0===t?"":t,a=e.page,r=void 0===a?1:a;return m.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=19059245-b594f8376705d9c7e4f842c86&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=(n(46),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.changeQuery=function(t){e.setState({query:t.currentTarget.value})},e.onSubmitQuery=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmitQuery,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.changeQuery})]})})}}]),n}(r.Component)),f=(n(47),n(48),function(e){var t=e.id,n=e.url,r=e.large,c=e.onOpen;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{src:n,alt:"",className:"ImageGalleryItem-image",onClick:function(){return c(r)}})},t)}),g=function(e){var t=e.data,n=e.open;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL;return Object(a.jsx)(f,{url:r,large:c,onOpen:n},t)}))})},y=(n(49),function(e){var t=e.onClick;return Object(a.jsx)("button",{className:"Button",type:"button",onClick:function(){return t()},children:"Load more"})}),O=n(20),v=n.n(O),x=(n(71),function(){return Object(a.jsx)("div",{className:"Loader",children:Object(a.jsx)(v.a,{type:"Bars",color:"#3f51b5",height:50,width:50})})}),k=(n(72),document.querySelector("#modal-root")),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).keyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.clickOnBackDrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.clickOnBackDrop,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:this.props.children,alt:""})})}),k)}}]),n}(r.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={picturs:[],page:1,query:"",loading:!1,modal:!1,large:""},e.onChangeQuery=function(t){e.setState({query:t,picturs:[],page:1})},e.fetchPictures=function(){var t=e.state,n={query:t.query,page:t.page};e.setState({loading:!0}),j(n).then((function(t){return e.setState((function(e){return{picturs:[].concat(Object(u.a)(e.picturs),Object(u.a)(t)),page:e.page+1}}))})).finally((function(){return e.setState({loading:!1})}))},e.toogleModal=function(t){e.setState((function(e){return{modal:!e.modal,large:t}}))},e.openPictur=function(t){e.toogleModal(t)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchPictures(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.picturs,n=e.loading,r=e.modal,c=e.large;return Object(a.jsxs)(a.Fragment,{children:[r&&Object(a.jsx)(S,{onClose:this.toogleModal,children:c}),Object(a.jsx)(b,{onSubmit:this.onChangeQuery}),Object(a.jsx)(g,{data:t,open:this.openPictur}),n&&Object(a.jsx)(x,{}),t.length>0&&!n&&Object(a.jsx)(y,{onClick:this.fetchPictures})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.25484e42.chunk.js.map