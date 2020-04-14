(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b671adc"],{"0d62":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper buses-page"},[r("AppHeader",{attrs:{layoutType:"layout-2"}}),r("section",{staticClass:"viewport-h-min-100"},[t.show_Loader?r("AppLoader"):t._e(),r("div",{staticClass:"container p-1 p-b-2"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show_Loader,expression:"show_Loader"}],staticClass:"loader bus-progress-loader flexbox align-items-center justify-center zindex-10"},[t._m(0)]),r("AppReturnTripFilter"),t.return_town_schedules.length<1?r("div",{staticClass:"title-wrapper with-icon pos-relative flexbox justify-center align-items-center mobile-justify-start p-t-xs p-b-xs"},[t._m(1)]):t._e(),t.return_town_schedules.length>0?r("div",{staticClass:"title-wrapper with-icon pos-relative flexbox justify-center align-items-center mobile-justify-start p-t-xs p-b-xs"},[r("span",{staticClass:"p-l-2 p-r-2 mobile-p-l-0 mobile-p-r-0 align-items-center zindex-5"},[r("img",{attrs:{src:s("46f4"),alt:"Book Bus"}}),r("h3",{staticClass:"title font-h-1 mobile-font-sm"},[t._v("Leaving from "+t._s(t.trip.town_from_return.town_name)+" to "+t._s(t.trip.town_to_return.town_name))])])]):t._e(),t.return_town_schedules.length>0?r("div",{staticClass:"heading mr-t-1 p-t-1 p-b-1 mobile-flex-wrap flexbox align-items-center pos-relative"},[r("h3",{staticClass:"trip-date mr-0 font-bold color-secondary font-h-1 mobile-font-sm"},[t._v(t._s(t._f("formatDate")(t.trip.returning_on)))]),r("div",{staticClass:"instructions font-h-1 pos-absolute mr-0 color-primary mobile-pos-relative"},[t._v("Select Bus by choosing the price")])]):t._e(),t.return_town_schedules.length>0?r("div",{staticClass:"bus-list-container"},t._l(t.return_town_schedules,(function(e,s){return r("div",{key:e.schedule_id,staticClass:"bus-list-card-container pos-relative p-t-1 p-b-1"},[r("div",{staticClass:"bus-card-wrapper flexbox pos-relative mobile-flex-wrap",class:{is_active_bus:t.isSelectedBus(e.schedule_id)}},[r("div",{staticClass:"bus-info"},[r("div",{staticClass:"header p-1 flexbox justify-between color-secondary font-bold font-xs"},[r("div",{staticClass:"bus-number"},[t._v(t._s(s+1))]),r("div",{staticClass:"bus-type"},[t._v(t._s(e.bus_type_name)+" Bus")]),t._m(2,!0)]),r("div",{staticClass:"content p-1"},[r("div",{staticClass:"row flexbox justify-between align-items-center color-seondary font-sm font-regular"},[r("span",[t._v(t._s(t.trip.town_from_return.town_name))]),r("span",[t._v(t._s(t.trip.town_to_return.town_name))])]),r("div",{staticClass:"row flexbox justify-between align-items-center color-seondary font-sm font-regular"},[r("span",[t._v("Departure Time")]),r("span",[t._v(t._s(e.latest_departure_time))])]),r("div",{staticClass:"row flexbox justify-between align-items-center color-seondary font-sm font-regular"},[r("span",[t._v("Avaialable Seats")]),r("span",[t._v(t._s(e.available_vip+e.available_first_class+e.available_business))])])])]),r("div",{staticClass:"bus-price-wrapper flex-1 flexbox"},t._l(e.prices,(function(s,i){return r("a",{key:i,staticClass:"price-label flex-1 flexbox flex-dir-col justify-center align-items-center p-1",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.busSelectedEvent({bus:e,is_return:!0})}}},[r("div",[r("span",{staticClass:"mr-b-sm"},[t._v(t._s(s.seat_type_name))]),r("span",{staticClass:"mr-b-sm"},[r("em",{staticClass:"currency"},[t._v("KES")]),t._v(" "+t._s(t._f("formatCurrency")(s.price_kes_amount))+" ")])])])})),0)]),1==e.is_highway?r("div",{staticClass:"notice-label"},[t._v("This bus might delay")]):t._e()])})),0):t._e()],1)],1),r("AppFooter")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-primary"},[s("i",{staticClass:"fas fa-spinner fa-pulse fa-5x"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"p-l-2 p-r-2 mobile-p-l-0 mobile-p-r-0 align-items-center zindex-5"},[r("img",{attrs:{src:s("46f4"),alt:"Book Bus"}}),r("h3",{staticClass:"title font-h-1 mobile-font-sm"},[t._v("Sorry, no buses available")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bus-rating"},[s("div",{staticClass:"ratings-bar"},[s("span",[s("i",{staticClass:"fa fa-star"})]),s("span",[s("i",{staticClass:"fa fa-star"})]),s("span",[s("i",{staticClass:"fa fa-star"})]),s("span",[s("i",{staticClass:"fa fa-star"})]),s("span",[s("i",{staticClass:"fa fa-star-half"})])])])}],a=s("5530"),n=s("2f62"),l=s("a4ce"),o=s("d2ca"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container zindex-10"},[r("div",{staticClass:"filter-row flexbox align-items-center justify-between p-1 mobile-flex-wrap mobile-p-t-2"},[r("div",{staticClass:"title-wrapper flexbox align-items-center justify-between pos-relative mobile-w-100 no-line"},[t._m(0),r("a",{staticClass:"hidden mobile-display-inline-block",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleReturnFilterForm(e)}}},[r("img",{staticStyle:{width:"20px"},attrs:{src:s("3f24"),alt:"Passaner Icon"}})])]),t.showReturnFilterForm?r("div",{staticClass:"flex-1 flexbox align-items-center mobile-flex-wrap mobile-p-t-1 mobile-p-b-1"},[r("form",{staticClass:"inline-form w-100 flexbox align-items-center justify-end mobile-flex-wrap",on:{submit:function(e){return e.preventDefault(),t.getSubRequest({town_from:t.trip.town_from_return,town_to:t.trip.town_to_return,travelling_on:t.trip.returning_on,is_return:!0})}}},[r("div",{staticClass:"form-group w-20 mr-r-1 mobile-mr-r-0 mobile-w-100"},[r("label",{attrs:{id:"filter-travelling-form"}},[t._v("Returning From")]),r("v-select",{staticClass:"modern-selector is-inline",attrs:{placeholder:"Returning From",label:"town_name",id:"filter-travelling-form",options:t.all_towns},model:{value:t.trip.town_from_return,callback:function(e){t.$set(t.trip,"town_from_return",e)},expression:"trip.town_from_return"}})],1),r("div",{staticClass:"form-group w-20 mr-r-1 mobile-mr-r-0 mobile-w-100"},[r("label",{attrs:{id:"filter-travelling-to"}},[t._v("Returning To")]),r("v-select",{staticClass:"modern-selector is-inline",attrs:{placeholder:"Travelling To",label:"town_name",id:"filter-travelling-to",options:t.all_towns},model:{value:t.trip.town_to_return,callback:function(e){t.$set(t.trip,"town_to_return",e)},expression:"trip.town_to_return"}})],1),r("div",{staticClass:"form-group w-20 mr-r-1 mobile-mr-r-0 mobile-w-100"},[r("label",{attrs:{id:"filter-travelling-date"}},[t._v("Returning On")]),r("DatePicker",{attrs:{"min-date":new Date,"max-date":t.maxTravelDate,"input-props":{id:"filter-travelling-date",class:"vc-calendar-custom is-inline",placeholder:"Travelling On",readonly:!0}},model:{value:t.trip.returning_on,callback:function(e){t.$set(t.trip,"returning_on",e)},expression:"trip.returning_on"}})],1),t._m(1)])]):t._e()])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flexbox align-items-center"},[r("img",{staticClass:"mr-r-1",attrs:{src:s("46f4"),alt:"Book Bus"}}),r("span",{staticClass:"title"},[t._v("Return Buses")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group w-20 mobile-w-100"},[s("label",{staticClass:"m-invisible mobile-hidden",attrs:{for:"filter-btn"}},[t._v("Filter")]),s("button",{staticClass:"btn",attrs:{id:"filter-btn"}},[t._v("FILTER")])])}],p=function(){var t=new Date,e=new Date(t);return e.setDate(e.getDate()+4)},f={name:"AppReturnTripFilter",data:function(){return{travelDate:null,showReturnFilterForm:!0,maxTravelDate:p(),formData:{to:"",from:""}}},methods:Object(a["a"])({},Object(n["b"])(["fetchTowns","getSubRequest"]),{toggleReturnFilterForm:function(){this.showReturnFilterForm=!this.showReturnFilterForm},isOkay:function(){return!0}}),computed:Object(n["c"])(["all_towns","trip"]),created:function(){this.fetchTowns()},mounted:function(){var t=this;window.scrollTo(0,0);var e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e&&(t.showReturnFilterForm=!1)}},m=f,_=s("2877"),d=Object(_["a"])(m,c,u,!1,null,null,null),b=d.exports,v=s("f657"),w={name:"AppReturnBusResults",components:{AppHeader:l["a"],AppReturnTripFilter:b,AppLoader:o["a"],AppFooter:v["a"]},data:function(){return{currentDate:new Date}},computed:Object(n["c"])(["return_town_schedules","trip","show_Loader"]),methods:Object(a["a"])({},Object(n["b"])(["busSelectedEvent"]),{isSelectedBus:function(t){return this.trip.return_selected_bus.schedule_id==t}}),mounted:function(){window.scrollTo(0,0)}},g=w,h=Object(_["a"])(g,r,i,!1,null,null,null);e["default"]=h.exports},"3f24":function(t,e,s){t.exports=s.p+"img/caret-down.fed15399.svg"},"46f4":function(t,e,s){t.exports=s.p+"img/bus-icon-blue.d59d3339.svg"},d2ca:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline-progress-loader"},[s("div",{staticClass:"line-page-loader is-loading"})])}],a={name:"AppLoader"},n=a,l=s("2877"),o=Object(l["a"])(n,r,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-1b671adc.cbf54e1d.js.map