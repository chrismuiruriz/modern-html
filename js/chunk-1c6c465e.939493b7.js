(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c6c465e"],{"3f24":function(t,e,s){t.exports=s.p+"img/caret-down.fed15399.svg"},"5f95":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper buses-page"},[a("AppHeader",{attrs:{layoutType:"layout-2"}}),a("section",{staticClass:"viewport-h-min-100"},[t.show_Loader?a("AppLoader"):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show_Loader,expression:"show_Loader"}],staticClass:"loader bus-progress-loader flexbox align-items-center justify-center zindex-10"},[t._m(0)]),a("div",{staticStyle:{background:"#fff"}},[a("div",{staticClass:"container p-2 flexbox align-items-center justify-between mobile-p-1"},[t._m(1),a("div",[a("h1",{staticClass:"title mobile-font-sm"},[a("span",{staticClass:"mr-r-sm display-inline-block"},[t._v("Total:")]),a("span",{staticClass:"display-inline-block"},[a("em",{staticClass:"label-currency font-bold"},[t._v("KES")]),a("em",{staticClass:"label-amount font-bold"},[t._v(t._s(t._f("formatCurrency")(t.total_amount+t.return_total_amount)))])])])])])]),a("div",{staticClass:"line-divider"}),a("div",{staticClass:"container p-3 mobile-p-1 bg-white mr-b-2"},[a("div",{staticClass:"flexbox justify-between mobile-flex-wrap"},[a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.payment_status,expression:"payment_status == 2"}],staticClass:"w-50-gap mobile-w-100 text-center"},[a("h2",{staticClass:"title mr-b-1"},[t._v("You have Successfully booked your ticket.")]),a("img",{staticClass:"mr-auto",staticStyle:{width:"40%"},attrs:{src:s("6e54"),alt:"Passaner Icon"}}),a("div",{staticClass:"card p-1 mr-b-1 mr-t-1"},[a("h4",{staticClass:"mr-b-sm bold title"},[t._v("Amount KES "+t._s(t._f("formatCurrency")(t.total_amount+t.return_total_amount)))]),a("p",[t._v("Your ticket & booking details will be sent via SMS")])]),a("div"),t._m(2)]),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.payment_status,expression:"payment_status == 3"}],staticClass:"w-50-gap mobile-w-100",staticStyle:{display:"none"}},[a("h2",{staticClass:"title mr-b-1"},[t._v("MPESA STK push not successful.")]),a("ul",{staticClass:"mr-b-1 mobile-mr-l-1 p-l-2"},[a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Go to the MPESA menu on your phone.")]),a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Select PayBill option. Enter Business Number: 525600")]),a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("You will get a receipt from MPESA and an SMS confirmation from MODERN COAST.")]),a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Enter "+t._s(t.trip_info.payment.payment_unique_number)+" as the Account Number")]),a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Enter the EXACT Amount (KSH. "+t._s(t._f("formatCurrency")(t.total_amount+t.return_total_amount))+")")]),a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Complete your transaction on your phone.")]),a("li",{staticClass:"text color-dark mr-b-sm"},[t._v("You will receive a transaction confirmation SMS from MPESA.")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.payment_status,expression:"payment_status == 0"}],staticClass:"w-50-gap mobile-w-100"},[a("h2",{staticClass:"title mr-b-1"},[t._v("Payment Instructions")]),t._m(3),a("p",{staticClass:"text color-dark font-h-1 mr-b-1"},[t._v(" To complete the payment you will receive a prompt from MPESA on the mobile number below ")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.getStkPush(e)}}},[a("div",{staticClass:"form-group w-100"},[a("label",{staticClass:"font-h-1"},[t._v("Phone Number")]),a("div",{staticClass:"input-pair"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.passenger_details[0].passenger_phone_code,expression:"passenger_details[0].passenger_phone_code"}],staticClass:"form-control country-code selector",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.passenger_details[0],"passenger_phone_code",e.target.multiple?s:s[0])}}},t._l(t.bus_seats.countries,(function(e,s){return a("option",{key:s,domProps:{value:e.country_phonecode}},[t._v(t._s(e.country_name_phonecode))])})),0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passenger_details[0].passenger_phone_number,expression:"passenger_details[0].passenger_phone_number"}],staticClass:"form-control",attrs:{type:"tel",name:"p_phone[]",placeholder:"Phone Number",required:""},domProps:{value:t.passenger_details[0].passenger_phone_number},on:{blur:function(e){return t.validatePhoneNumber(t.passenger_details[0].passenger_phone_number)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.validatePhoneNumber(t.passenger_details[0].passenger_phone_number)},input:function(e){e.target.composing||t.$set(t.passenger_details[0],"passenger_phone_number",e.target.value)}}})])]),a("div",{staticClass:"form-group form-message hidden"},[t._v("Enter some form feedback here or error message")]),t._m(4)])]),a("div",{staticClass:"w-50-gap mobile-w-100 mobile-mr-t-2"},[a("h2",{staticClass:"title mr-b-1"},[t._v("Trip Details")]),a("div",{staticClass:"card with-dropdown p-2 mobile-p-1"},[a("a",{staticClass:"flexbox justify-between align-items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toogleTripDetails(e)}}},[a("span",{staticClass:"title font-h-1 font-light color-dark"},[t._v("Ongoing Trip")]),a("img",{staticStyle:{width:"20px"},attrs:{src:s("3f24"),alt:"Passaner Icon"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTripDetails,expression:"showTripDetails"}],staticClass:"content p-t-2"},[a("div",{staticClass:"flexbox align-items-center justify-between mr-b-sm"},[a("span",[t._v("Bus")]),a("span",[t._v(t._s(t.trip.selected_bus.route_code))])]),a("div",{staticClass:"flexbox align-items-center justify-between mr-b-sm"},[a("span",[t._v("Booking Date")]),a("span",[t._v(t._s(t._f("formatDate")(t.trip.travelling_on)))])]),a("div",{staticClass:"flexbox align-items-center justify-between mr-b-sm"},[a("span",[t._v("Departure Time")]),a("span",[t._v(t._s(t.trip.selected_bus.latest_departure_time))])])])]),t.return_selected_seats.length>0?a("div",{staticClass:"card mr-t-2 with-dropdown p-2 mobile-p-1"},[a("a",{staticClass:"flexbox justify-between align-items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toogleTripDetails(e)}}},[a("span",{staticClass:"title font-h-1 font-light color-dark"},[t._v("Returning Trip")]),a("img",{staticStyle:{width:"20px"},attrs:{src:s("3f24"),alt:"Passaner Icon"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTripDetails,expression:"showTripDetails"}],staticClass:"content p-t-2"},[a("div",{staticClass:"flexbox align-items-center justify-between mr-b-sm"},[a("span",[t._v("Bus")]),a("span",[t._v(t._s(t.trip.return_selected_bus.route_code))])]),a("div",{staticClass:"flexbox align-items-center justify-between mr-b-sm"},[a("span",[t._v("Booking Date")]),a("span",[t._v(t._s(t._f("formatDate")(t.trip.returning_on)))])]),a("div",{staticClass:"flexbox align-items-center justify-between mr-b-sm"},[a("span",[t._v("Departure Time")]),a("span",[t._v(t._s(t.trip.return_selected_bus.latest_departure_time))])])])]):t._e(),a("div",{staticClass:"card mr-t-2 mr-b-1"},[t._m(5),t._l(t.selected_seats,(function(e,s){return a("div",{key:s,staticClass:"row flexbox align-items-center justify-between p-t-sm p-b-1 p-r-2 p-l-2 mobile-p-1"},[a("span",{staticClass:"font-h-1"},[t._v("Onward Fare")]),a("span",{staticClass:"font-h-1"},[t._v("KES "+t._s(t._f("formatCurrency")(t.total_amount)))])])})),t._l(t.return_selected_seats,(function(e){return a("div",{key:e.seat_number,staticClass:"row flexbox align-items-center justify-between p-t-sm p-b-1 p-r-2 p-l-2 mobile-p-1"},[a("span",{staticClass:"font-h-1"},[t._v("Returning Fare")]),a("span",{staticClass:"font-h-1"},[t._v("KES "+t._s(t._f("formatCurrency")(t.return_total_amount)))])])})),a("div",{staticClass:"footer flexbox align-items-center justify-between bg-secondary p-2 mobile-p-1"},[a("h1",{staticClass:"text-white font-bold font-h-2"},[t._v("Total Amount")]),a("h1",{staticClass:"text-white font-bold font-h-2"},[a("em",{staticClass:"label-currency"},[t._v("KES")]),a("em",{staticClass:"label-amount"},[t._v(t._s(t._f("formatCurrency")(t.total_amount+t.return_total_amount)))])])])],2)])])]),a("div",{staticClass:"container p-3 mobile-p-2 bg-white"},[a("div",{staticClass:"navigation-wrapper flexbox justify-between align-items-center"},[a("router-link",{staticClass:"nav-prev flexbox justify-between align-items-center",attrs:{to:"/Passangers"}},[a("img",{staticClass:"mr-r-1",staticStyle:{width:"30px"},attrs:{src:s("a821"),alt:"Arrow"}}),a("span",{staticClass:"color-primary mobile-hidden"},[t._v("BACK")])]),t._m(6)],1)])],1),a("AppFooter")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-primary"},[s("i",{staticClass:"fas fa-spinner fa-pulse fa-5x"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flexbox align-items-center p-t-1 p-b-1"},[a("img",{staticStyle:{width:"25px"},attrs:{src:s("801a"),alt:"Passaner Icon"}}),a("h2",{staticClass:"title mr-l-1 font-semibold font-h-1 mobile-font-sm"},[t._v("Payment Options")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-1"},[s("h4",{staticClass:"mr-b-sm bold title"},[t._v("Need Help?")]),s("p",[t._v("Have queries regarding your booking?")]),s("p",{staticClass:"mr-b-1"},[t._v("Contact our tean.")]),s("a",{attrs:{href:"tel:0709897000"}},[t._v("Call us now +254 709 897 000")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"mr-b-1 mobile-mr-l-1 p-l-2"},[s("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Payment request will be pushed to your phone.")]),s("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Enter your MPESA PIN on your phone to complete payment.")]),s("li",{staticClass:"text color-dark mr-b-sm"},[t._v("You will get a receipt from MPESA and an SMS confirmation from MODERN COAST.")]),s("li",{staticClass:"text color-dark mr-b-sm"},[t._v("Didn't get the prompt on your phone? Kindly dial *234*1*6# to force SIM update. For SIM cards MORE THAN 2 YEARS OLD a SIM swap may be necessary.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group text-center mr-p-t-sm -p-b-sm"},[s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("SUBMIT")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row header flexbox align-items-center justify-between p-b-sm p-t-2 p-r-2 p-l-2 mobile-p-1"},[s("span",{staticClass:"title color-dark font-h-1"},[t._v("Price Breakdown")]),s("span",{staticClass:"title color-dark font-h-1"},[t._v("Summary")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-next flexbox justify-between align-items-center hidden",attrs:{href:"#"}},[a("span",{staticClass:"color-primary mobile-hidden"},[t._v("NEXT")]),a("img",{staticClass:"mr-l-1 rotated-arrow",staticStyle:{width:"30px"},attrs:{src:s("a821"),alt:"Arrow"}})])}],i=s("5530"),n=s("2f62"),o=s("a4ce"),l=s("d2ca"),c=s("f657"),m={name:"AppPayment",components:{AppHeader:o["a"],AppLoader:l["a"],AppFooter:c["a"]},computed:Object(n["c"])(["trip","selected_seats","passenger_details","total_amount","bus_seats","show_Loader","return_selected_seats","return_bus_seats","return_total_amount","payment_status","trip_info"]),data:function(){return{showTripDetails:!1}},methods:Object(i["a"])({},Object(n["b"])(["getStkPush","showWarning"]),{toogleTripDetails:function(){this.showTripDetails=!this.showTripDetails},validatePhoneNumber:function(t){var e=/^(?:254|\+254|0)?(7(?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/,s=e.test(t);s||this.showWarning("Incorrect phone number format")}}),mounted:function(){window.scrollTo(0,0)}},p=m,u=s("2877"),_=Object(u["a"])(p,a,r,!1,null,null,null);e["default"]=_.exports},"6e54":function(t,e,s){t.exports=s.p+"img/booked.20465fdb.png"},"801a":function(t,e,s){t.exports=s.p+"img/passanger-icon.5691b01b.svg"},a821:function(t,e,s){t.exports=s.p+"img/arrow-left-icon.f5ef02ab.svg"},d2ca:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline-progress-loader"},[s("div",{staticClass:"line-page-loader is-loading"})])}],i={name:"AppLoader"},n=i,o=s("2877"),l=Object(o["a"])(n,a,r,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-1c6c465e.939493b7.js.map