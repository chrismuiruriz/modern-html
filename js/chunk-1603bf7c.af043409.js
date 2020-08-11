(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1603bf7c"],{"2e98":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper buses-page"},[s("AppHeader",{attrs:{layoutType:"layout-2"}}),s("section",{staticClass:"viewport-h-min-100"},[t.show_Loader?s("AppLoader"):t._e(),t._m(0),s("div",{staticClass:"container p-1 pos-relative"},[t.busSeatLoadingComplete?t._e():s("div",{staticClass:"bus-progress-loader flexbox align-items-center justify-center zindex-10"},[t._m(1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_Loader,expression:"show_Loader"}],staticClass:"loader bus-progress-loader flexbox align-items-center justify-center zindex-10"},[t._m(2)]),t._m(3),s("div",{staticClass:"row seat-layout-row p-t-1 pos-relative"},[s("div",{staticClass:"bus-seat-wrapper for-desktop p-b-2"},[s("table",{staticClass:"bus-body w-100",attrs:{border:"0",cellpadding:"2",cellspacing:"1"}},t._l(t.activeTableCols,(function(e,a){return s("tr",{key:a},t._l(t.activeTableRows,(function(a,i){return s("td",{key:i},t._l(t.seats,(function(i,o){return s("div",{key:o},[e==i.seat_col&&a==i.seat_row?s("div",{class:{"seat-item":!0,business:"Business"===i.seat_type,vip:"VIP"===i.seat_type,"first-class":"First Class"===i.seat_type}},[s("input",{staticClass:"seat-checkbox",attrs:{type:"checkbox",id:"seat-"+i.seat_col+"-"+i.seat_row,disabled:"Dr"==i.seat_number||"reserved"==i.seat_status},domProps:{checked:t.isSeatSelected(i.seat_number)},on:{change:function(e){return t.seatSelected(i,e)}}}),s("label",{attrs:{for:"seat-"+i.seat_col+"-"+i.seat_row,title:i.seat_number+" | "+i.seat_type+" | "+i.price.price_kes_amount}},[s("span",{staticClass:"seat-text"},[t._v(t._s(i.seat_number))]),s("span",{staticClass:"armrest-right arm"}),s("span",{staticClass:"armrest-left arm"}),s("span",{staticClass:"backrest"})])]):t._e()])})),0)})),0)})),0)]),s("div",{staticClass:"bus-seat-wrapper for-mobile p-b-2"},[s("table",{staticClass:"bus-body w-100",attrs:{border:"0",cellpadding:"2",cellspacing:"1"}},t._l(t.activeTableRows,(function(e,a){return s("tr",{key:a},t._l(t.activeTableCols,(function(a,i){return s("td",{key:i},t._l(t.seats,(function(i,o){return s("div",{key:o},[e==i.seat_row&&a==i.seat_col?s("div",{class:{"seat-item":!0,business:"Business"===i.seat_type,vip:"VIP"===i.seat_type,"first-class":"First Class"===i.seat_type}},[s("input",{staticClass:"seat-checkbox",attrs:{type:"checkbox",id:"seat-mobile-"+i.seat_col+"-"+i.seat_row,disabled:"Dr"==i.seat_number||"reserved"==i.seat_status},domProps:{checked:t.isSeatSelected(i.seat_number)},on:{change:function(e){return t.seatSelected(i,e)}}}),s("label",{attrs:{for:"seat-mobile-"+i.seat_col+"-"+i.seat_row}},[s("span",{staticClass:"seat-text"},[t._v(t._s(i.seat_number))]),s("span",{staticClass:"armrest-right arm"}),s("span",{staticClass:"armrest-left arm"}),s("span",{staticClass:"backrest"})])]):t._e()])})),0)})),0)})),0)]),s("div",{staticClass:"current-trip-details-panel w-33 mobile-w-100 mobile-mr-t-1"},[s("div",{staticClass:"inline-form-wrapper"},[s("form",{staticClass:"inline-form",attrs:{method:"post",action:"#"},on:{submit:function(e){return e.preventDefault(),t.busSeatSelectedEvent({boarding_point:t.trip.returning_boarding_point,dropping_point:t.trip.returning_dropping_point,selected_seats:t.return_selected_seats,is_return:!0})}}},[s("div",{staticClass:"form-group p-0 mr-b-1"},[s("label",{attrs:{id:"boading-point"}},[t._v("Boarding Point")]),s("v-select",{staticClass:"modern-selector is-inline",attrs:{placeholder:"Select Boading Point",label:"branch_name",id:"boading-point",options:t.trip.return_selected_bus.pickup_branches,required:""},on:{change:function(e){t.trip.returning_boarding_point=""}},model:{value:t.trip.returning_boarding_point,callback:function(e){t.$set(t.trip,"returning_boarding_point",e)},expression:"trip.returning_boarding_point"}})],1),s("div",{staticClass:"form-group p-0 mr-b-1"},[s("label",{attrs:{id:"dropping-point"}},[t._v("Dropping Point")]),s("v-select",{staticClass:"modern-selector is-inline",attrs:{placeholder:"Select Dropping Point",label:"branch_name",id:"dropping-point",options:t.trip.return_selected_bus.dropoff_branches,required:""},on:{change:function(e){t.trip.returning_dropping_point=""}},model:{value:t.trip.returning_dropping_point,callback:function(e){t.$set(t.trip,"returning_dropping_point",e)},expression:"trip.returning_dropping_point"}})],1),s("div",{staticClass:"form-group pricing-total-wrapper"},[s("div",{staticClass:"row-item selected-seat-wrapper flexbox justify-between align-items-center p-b-1"},[s("span",{staticClass:"label font-semibold"},[t._v("Selected Seats")]),s("span",{staticClass:"value font-bold"},t._l(t.return_selected_seats,(function(e,a){return s("span",{key:a},[t._v(t._s(e.seat_number)+",")])})),0)]),s("div",{staticClass:"row-item total-amount-wrapper flexbox justify-between align-items-center p-b-1"},[s("span",{staticClass:"label font-semibold"},[t._v("Total Amount")]),s("span",{staticClass:"value font-bold"},[t._v("KES "+t._s(t._f("formatCurrency")(t.return_total_amount)))])])]),s("div",{staticClass:"form-group form-message text-center bg-white hidden"},[t._v("Enter some form feedback here or error message")]),t._m(4)])])])])])],1),s("AppFooter"),t.showModal?s("AppModal",{on:{close:function(e){t.showModal=!1},demoModalContinue:t.modalClosedEvent}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seat-labels"},[a("div",{staticClass:"container"},[a("div",{staticClass:"flexbox align-items-center"},[a("img",{attrs:{src:s("402a"),alt:""}}),a("span",[t._v("Business")])]),a("div",{staticClass:"flexbox align-items-center"},[a("img",{attrs:{src:s("3ec3"),alt:""}}),a("span",[t._v("First Class")])]),a("div",{staticClass:"flexbox align-items-center"},[a("img",{attrs:{src:s("6cf2"),alt:""}}),a("span",[t._v("VIP")])]),a("div",{staticClass:"flexbox align-items-center"},[a("img",{attrs:{src:s("567f"),alt:""}}),a("span",[t._v("Selected")])]),a("div",{staticClass:"flexbox align-items-center"},[a("img",{attrs:{src:s("bad1"),alt:""}}),a("span",[t._v("Booked")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-primary"},[s("i",{staticClass:"fas fa-spinner fa-pulse fa-5x"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-primary"},[s("i",{staticClass:"fas fa-spinner fa-pulse fa-5x"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-wrapper with-icon pos-relative flexbox justify-center align-items-center p-t-xs p-b-xs mr-t-2 mr-b-2 mobile-mr-t-1 mobile-mr-b-1"},[a("span",{staticClass:"p-l-2 p-r-2 mobile-p-l-0 mobile-p-r-0 align-items-center zindex-5"},[a("img",{attrs:{src:s("46f4"),alt:"Book Bus"}}),a("h3",{staticClass:"title font-h-2 mobile-font-sm"},[t._v("Select your seats")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn",attrs:{id:"continue-btn"}},[t._v("CONTINUE")])])}],o=(s("99af"),s("45fc"),s("d3b7"),s("5530")),n=s("2f62"),r=s("a4ce"),l=s("d2ca"),c=s("f657"),u=s("41df"),p={name:"AppReturnBusSeats",components:{AppHeader:r["a"],AppLoader:l["a"],AppFooter:c["a"],AppModal:u["a"]},data:function(){return{busSeatLoadingComplete:!1,activeTableCols:5,activeTableRows:3,buseData:{},seats:null,max_seats:0}},computed:Object(n["c"])(["trip","return_selected_seats","selected_seats","return_total_amount","show_Loader","showModal"]),methods:Object(o["a"])({},Object(n["b"])(["getBusSeats","getSelectedSeats","removeUnSelectedSeats","getTotalAmount","busSeatSelectedEvent","modalClosedEvent","hideModal","showWarning","showError","getActiveReturningSeat"]),{isSeatSelected:function(t){return this.return_selected_seats.some((function(e){return e["seat_number"]===t}))},seatSelected:function(t,e){if(e.target.checked){if(this.max_seats+=1,this.max_seats>=2)return e.target.checked=!1,this.showWarning("Sorry, maximum number of seats selected"),!1;if(this.selected_seats.length<=this.return_selected_seats.length)return e.target.checked=!1,this.showWarning("Your return seats are more that your onward seats."),!1;this.getSelectedSeats({seat:t,is_return:!0}),this.getTotalAmount({is_return:!0}),this.getActiveReturningSeat({seat:t})}else this.max_seats=0,this.removeUnSelectedSeats({seat:t,is_return:!0}),this.getTotalAmount({is_return:!0})},getBusDetailsRequest:function(){var t=this,e=this,s={method:"GET",redirect:"follow"};fetch("http://193.200.241.91:8001/api/v2/schedules/".concat(e.trip.return_selected_bus.schedule_id,"/seats?town_from_id=").concat(e.trip.town_from_return.id,"&town_to_id=").concat(e.trip.town_to_return.id),s).then((function(t){return t.json()})).then((function(s){t.getBusSeats({seats:s,is_return:!0});var a=s.bus_type;e.seats=s.seats,e.buseData=s.bus_type,e.activeTableCols=a.bus_type_cols,e.activeTableRows=a.bus_type_rows,e.busSeatLoadingComplete=!0})).catch((function(e){t.showError("Sorry, error occured!"),console.log("Server error ".concat(e))}))}}),mounted:function(){this.getBusDetailsRequest(),window.scrollTo(0,0)}},d=p,m=s("2877"),f=Object(m["a"])(d,a,i,!1,null,null,null);e["default"]=f.exports},"3e79":function(t,e,s){t.exports=s.p+"img/close-icon.5e99999c.svg"},"3ec3":function(t,e,s){t.exports=s.p+"img/seat-first-class.0a771026.svg"},"402a":function(t,e,s){t.exports=s.p+"img/seat-business.7d45678c.svg"},"41df":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"flexbox align-items-center w-100"},[a("div",{staticClass:"modal-container mr-auto p-1 bg-white"},["default"==t.modalLayout?a("div",{staticClass:"default-layout layout_ flexbox flex-dir-col"},[a("div",{staticClass:"header flexbox justify-between align-items-center p-1 mobile-p-sm"},[a("button",{staticClass:"btn btn-plain w-auto invisible"},[a("i",{staticClass:"fa fa-arrow-left"})]),a("h4",{staticClass:"title font-h-2 mobile-font-sm"},[t._v("Join Modern Account")]),a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){return t.$emit("close")}}},[a("img",{staticStyle:{width:"25px"},attrs:{src:s("3e79"),alt:"Close Icon"}})])]),a("div",{staticClass:"body flex-1 flex-dir-col flexbox justify-center align-items-center p-2 mobile-p-1"},[a("button",{staticClass:"btn btn-outline btn-inline mr-b-1",attrs:{disabled:""},on:{click:function(e){t.modalLayout="signupform"}}},[t._v("Sign up with email")]),a("button",{staticClass:"btn btn-outline btn-inline mr-b-1",attrs:{disabled:""},on:{click:function(e){t.modalLayout="loginform"}}},[t._v("Sign in")]),a("div",{staticClass:"separator"},[t._v("OR")]),a("button",{staticClass:"text-btn",on:{click:function(e){return t.$emit("demoModalContinue")}}},[t._v("Continue as Guest")])])]):t._e(),"loginform"==t.modalLayout?a("form",{staticClass:"login-form layout_",attrs:{action:"#",method:"post"}},[a("div",{staticClass:"header flexbox justify-between align-items-center p-1 mobile-p-sm"},[a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){t.modalLayout="default"}}},[a("img",{staticStyle:{width:"40px"},attrs:{src:s("a821"),alt:"Left Arrow Icon"}})]),a("h4",{staticClass:"title font-h-2 mobile-font-sm"},[t._v("Sign In")]),a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){return t.$emit("close")}}},[a("img",{staticStyle:{width:"25px"},attrs:{src:s("3e79"),alt:"Close Icon"}})])]),a("div",{staticClass:"body flex-1 flex-dir-col flexbox justify-center align-items-center p-2 mobile-p-1"},[a("div",{staticClass:"block"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group w-100 p-0 mr-b-1"},[a("label",{staticClass:"sr-only",attrs:{for:"login_phone"}},[t._v("Phone Number")]),a("div",{staticClass:"input-pair"},[a("select",{staticClass:"form-control country-code selector"},[a("option",{attrs:{value:"254"}},[t._v("+254")]),a("option",{attrs:{value:"255"}},[t._v("+255")]),a("option",{attrs:{value:"253"}},[t._v("+253")])]),a("input",{staticClass:"form-control",attrs:{type:"tel",id:"login_phone",placeholder:"Phone Number",required:""}})])])]),a("div",{staticClass:"form-group p-0 mr-b-1"},[a("label",{staticClass:"sr-only",attrs:{for:"login_password"}},[t._v("Password")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"login_password",placeholder:"Password",required:""}})]),a("div",{staticClass:"form-group mr-b-1"},[a("button",{staticClass:"btn w-100",attrs:{type:"button"},on:{click:function(e){return t.$emit("demoModalContinue")}}},[t._v("SIGN IN")])]),a("div",{staticClass:"flexbox justify-between align-items-center"},[a("a",{staticClass:"display-inline-block",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modalLayout="resetPasswordform"}}},[t._v("Forgot Password")]),a("a",{staticClass:"display-inline-block",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modalLayout="signupform"}}},[t._v("Sign Up")])])])])]):t._e(),"signupform"==t.modalLayout?a("form",{staticClass:"signup-form layout_",attrs:{action:"#",method:"post"}},[a("div",{staticClass:"header flexbox justify-between align-items-center p-1 mobile-p-sm"},[a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){t.modalLayout="default"}}},[a("img",{staticStyle:{width:"40px"},attrs:{src:s("a821"),alt:"Left Arrow Icon"}})]),a("h4",{staticClass:"title font-h-2 mobile-font-sm"},[t._v("Sign Up")]),a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){return t.$emit("close")}}},[a("img",{staticStyle:{width:"25px"},attrs:{src:s("3e79"),alt:"Close Icon"}})])]),a("div",{staticClass:"body flex-1 flex-dir-col flexbox justify-center align-items-center p-2 mobile-p-1"},[a("div",{staticClass:"inline"},[a("div",{staticClass:"form-row flexbox justify-between align-items-center"},[a("div",{staticClass:"form-group p-0 mr-b-1 w-50-gap mobile-w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"signup_name"}},[t._v("Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"signup_name",placeholder:"Name",required:""}})]),a("div",{staticClass:"form-group p-0 mr-b-1 w-50-gap mobile-w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"signup_email"}},[t._v("Email")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"signup_email",placeholder:"Email",required:""}})])]),a("div",{staticClass:"form-row flexbox justify-between align-items-center"},[a("div",{staticClass:"form-group p-0 mr-b-1 w-50-gap mobile-w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"signup_dob"}},[t._v("Gender")]),a("select",{staticClass:"form-control"},[a("option",{attrs:{value:""}},[t._v("Select Gender")]),a("option",{attrs:{value:"Male"}},[t._v("Male")]),a("option",{attrs:{value:"Female"}},[t._v("Female")])])]),a("div",{staticClass:"form-group p-0 mr-b-1 w-50-gap mobile-w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"signup_dob"}},[t._v("Date of Birth")]),a("input",{staticClass:"form-control",attrs:{type:"date",id:"signup_dob",placeholder:"Date of Birth",required:""}})])]),a("div",{staticClass:"form-row flexbox justify-between align-items-center"},[a("div",{staticClass:"form-group p-0 mr-b-1 w-50-gap mobile-w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"signup_phone"}},[t._v("Phone Number")]),a("div",{staticClass:"input-pair"},[a("select",{staticClass:"form-control country-code selector"},[a("option",{attrs:{value:"254"}},[t._v("+254")]),a("option",{attrs:{value:"255"}},[t._v("+255")]),a("option",{attrs:{value:"253"}},[t._v("+253")])]),a("input",{staticClass:"form-control",attrs:{type:"tel",id:"signup_phone",placeholder:"Phone Number",required:""}})])]),a("div",{staticClass:"form-group p-0 mr-b-1 w-50-gap mobile-w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"signup_password"}},[t._v("Password")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"signup_password",placeholder:"Password",required:""}})])]),a("div",{staticClass:"form-group p-0 mr-b-1 text-center p-t-1 p-b-snm"},[a("button",{staticClass:"btn btn-inline mr-auto",attrs:{type:"button"},on:{click:function(e){return t.$emit("demoModalContinue")}}},[t._v("SIGN UP")])]),a("div",{staticClass:"p-sm flexbox justify-center align-items-center text-center"},[a("span",{staticClass:"display-inline-block mr-l-sm"},[t._v("Already have an account")]),a("a",{staticClass:"display-inline-block mr-l-sm",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modalLayout="loginform"}}},[t._v("Sign In")])])])])]):t._e(),"resetPasswordform"==t.modalLayout?a("form",{staticClass:"resetpassword-form layout_",attrs:{action:"#",method:"post"}},[a("div",{staticClass:"header flexbox justify-between align-items-center p-1 mobile-p-sm"},[a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){t.modalLayout="default"}}},[a("img",{staticStyle:{width:"40px"},attrs:{src:s("a821"),alt:"Left Arrow Icon"}})]),a("h4",{staticClass:"title font-h-2 mobile-font-sm"},[t._v("Reset Password")]),a("button",{staticClass:"btn btn-plain w-auto",on:{click:function(e){return t.$emit("close")}}},[a("img",{staticStyle:{width:"25px"},attrs:{src:s("3e79"),alt:"Close Icon"}})])]),a("div",{staticClass:"body flex-1 flex-dir-col flexbox justify-center align-items-center p-2 mobile-p-1"},[a("div",{staticClass:"block"},[a("div",{staticClass:"form-row flexbox justify-between align-items-center"},[a("div",{staticClass:"form-group w-100"},[a("label",{staticClass:"sr-only",attrs:{for:"reset_phone"}},[t._v("Phone Number")]),a("div",{staticClass:"input-pair"},[a("select",{staticClass:"form-control country-code selector"},[a("option",{attrs:{value:"254"}},[t._v("+254")]),a("option",{attrs:{value:"255"}},[t._v("+255")]),a("option",{attrs:{value:"253"}},[t._v("+253")])]),a("input",{staticClass:"form-control",attrs:{type:"tel",id:"reset_phone",placeholder:"Phone Number",required:""}})])])]),a("div",{staticClass:"form-group p-0 mr-b-1 mr-t-1"},[a("button",{staticClass:"btn w-100",attrs:{type:"button"},on:{click:function(e){return t.$emit("demoModalContinue")}}},[t._v("SEND CODE")])]),a("div",{staticClass:"flexbox justify-center align-items-center"},[a("a",{staticClass:"display-inline-block",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modalLayout="loginform"}}},[t._v("Sign In Here")])])])])]):t._e()])])])])},i=[],o={name:"AppModal",data:function(){return{modalLayout:"default",travelDate:null}},methods:{loginRequest:function(t){t.preventDefault()}},mounted:function(){console.log("Loader")}},n=o,r=s("2877"),l=Object(r["a"])(n,a,i,!1,null,null,null);e["a"]=l.exports},"45fc":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").some,o=s("a640"),n=s("ae40"),r=o("some"),l=n("some");a({target:"Array",proto:!0,forced:!r||!l},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"46f4":function(t,e,s){t.exports=s.p+"img/bus-icon-blue.d59d3339.svg"},"567f":function(t,e,s){t.exports=s.p+"img/seat-selected.d424b186.svg"},"6cf2":function(t,e,s){t.exports=s.p+"img/seat-vip.c2683b11.svg"},a821:function(t,e,s){t.exports=s.p+"img/arrow-left-icon.f5ef02ab.svg"},bad1:function(t,e,s){t.exports=s.p+"img/booked.56fff563.svg"},d2ca:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline-progress-loader"},[s("div",{staticClass:"line-page-loader is-loading"})])}],o={name:"AppLoader"},n=o,r=s("2877"),l=Object(r["a"])(n,a,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-1603bf7c.af043409.js.map