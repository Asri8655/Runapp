(this.webpackJsonpdesign=this.webpackJsonpdesign||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(18),r=a.n(n),l=(a(31),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))}),i=a(5),o=a(6),d=a(8),j=a(7),m=a(12),h=a(2),b=(a(14),a(0));var u=function(){return Object(b.jsx)("div",{})};var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg topbar mb-4 static-top shadow navv",style:{background:"#325ca9",color:"#fff"},children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("div",{className:"input-group size",children:[Object(b.jsx)("i",{class:"fa fa-twitter fa-2x mt-2","aria-hidden":"true"}),Object(b.jsx)("h5",{className:"ml-2 mt-2",style:{fontFamily:"fantasy"},children:"blockovile"}),Object(b.jsxs)("p",{className:"ml-5 mt-2",style:{fontFamily:"fantasy"},children:["Balance",Object(b.jsx)("p",{children:"\u20b9\xa03.55"})]})]}),Object(b.jsxs)("div",{className:"nav-link pr-74",children:[Object(b.jsx)("h6",{children:Object(b.jsxs)("span",{children:[Object(b.jsx)(b.Fragment,{children:"Exchange"}),"\xa0\xa0\xa0",Object(b.jsx)(b.Fragment,{children:"Margin"}),"\xa0\xa0\xa0"]})}),Object(b.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(b.jsx)("span",{className:"badge badge-danger badge-counter",children:"3+"})]}),"\xa0\xa0\xa0",Object(b.jsx)("i",{className:"fa fa-bell ","aria-hidden":"true"}),Object(b.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(b.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown","aria-expanded":"false",children:[Object(b.jsx)("i",{className:"fa fa-user-circle fa-2x text-light ","aria-hidden":"true"})," ",Object(b.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small text-light",children:"Trader"})]})]})})})})},p=[{id:"1",name:"btc",bal:"1200",api:"0.02%",at:"no",int:"4%"},{id:"2",name:"bust",bal:"1500",api:"0.04%",at:"yes",int:"4%"},{id:"3",name:"btc",bal:"1200",api:"0.04%",at:"yes",int:"7%"},{id:"4",name:"bust",bal:"1500",api:"0.04%",at:"no",int:"7%"},{id:"5",name:"btc",bal:"1200",api:"0.02%",at:"yes",int:"7%"},{id:"6",name:"bust",bal:"1500",api:"0.02%",at:"no",int:"4%"}],O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleOnchange=function(e){var t;t=p.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})),s.setState({data2:t}),console.log(e.target.value)},s.state={data2:p},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"card shadow mb-4",children:[Object(b.jsx)("div",{className:"card-header py-3     ",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-9",children:Object(b.jsxs)("nav",{class:"nav",children:[Object(b.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"Flexible"}),Object(b.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Fixed"})]})}),Object(b.jsx)("div",{className:"col-lg-3 d-flex justify-content-end",children:Object(b.jsx)("nav",{class:"nav",children:Object(b.jsx)("input",{placeholder:"search ",className:"round",onChange:function(t){return e.handleOnchange(t)}})})})]})}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-9 col-md-9 col-sm-9",children:Object(b.jsxs)("div",{className:"table-responsive",children:[Object(b.jsxs)("table",{className:"table table-bordered",id:"dataTable",width:"100%",cellSpacing:"0",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Coins "}),Object(b.jsx)("th",{children:"Balance"}),Object(b.jsx)("th",{children:"7Days API"}),Object(b.jsx)("th",{children:"Intrest per 1000"}),Object(b.jsx)("th",{children:"Auto Transfer"}),Object(b.jsx)("th",{children:"View All"})]})}),Object(b.jsx)("tbody",{children:this.state.data2.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.bal}),Object(b.jsx)("td",{children:e.api}),Object(b.jsx)("td",{children:e.int}),"yes"===e.at?Object(b.jsx)("td",{children:Object(b.jsx)("i",{class:"fa fa-check text-success","aria-hidden":"true"})}):Object(b.jsx)("td",{children:Object(b.jsx)("i",{class:"fa fa-times  text-danger","aria-hidden":"true"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{type:"button",class:"btn btn-success mr-1",children:"Transfer"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-danger",children:"Withdraw"})]})]})}))})]}),Object(b.jsx)("nav",{"aria-label":"Page navigation example",children:Object(b.jsxs)("ul",{className:"pagination justify-content-end",children:[Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"h","aria-label":"Previous",children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"d",children:"1"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"d",children:"2"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"e",children:"3"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"he","aria-label":"Next",children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})]})}),Object(b.jsxs)("div",{className:"col-lg-3 col-md-3 col-sm-3",children:[" ",Object(b.jsxs)("div",{className:"text-light",style:{background:"#325ca9"},children:[Object(b.jsx)("div",{className:"text-left",children:Object(b.jsx)("p",{className:"",style:{fontFamily:"fantasy"},children:"Portfolio Balance  \xa0\xa0\u20b9\xa06500"})}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"text-left",children:[" ",Object(b.jsx)("p",{className:"",style:{fontFamily:"fantasy"},children:"Intrest Earned\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u20b9\xa02000"})]})]}),Object(b.jsxs)("div",{className:"text-left",children:[" ",Object(b.jsxs)("p",{className:"",style:{fontFamily:"serif"},children:[Object(b.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"}),"\xa0\xa0Exchange"]})]}),Object(b.jsxs)("div",{className:"text-left",children:[" ",Object(b.jsxs)("p",{className:"",style:{fontFamily:"serif"},children:[Object(b.jsx)("i",{class:"fa fa-plus","aria-hidden":"true"}),"\xa0\xa0Topup"]})]}),Object(b.jsxs)("div",{className:"text-left",children:[" ",Object(b.jsxs)("p",{className:"",style:{fontFamily:"serif"},children:[Object(b.jsx)("i",{class:"fa fa-plus-square-o","aria-hidden":"true"}),"\xa0\xa0Advanced"]})]}),Object(b.jsxs)("div",{className:"text-left",children:[" ",Object(b.jsxs)("p",{className:"",style:{fontFamily:"serif"},children:[Object(b.jsx)("i",{class:"fa fa-calculator","aria-hidden":"true"}),"\xa0\xa0Calculator"]})]})]})]})})]})]})}}]),a}(c.a.Component),f=(a(33),a(17),a(19)),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={validateUser:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)("footer",{className:"sticky-footer bg-white",children:Object(b.jsx)("div",{className:"container my-auto",children:Object(b.jsx)("div",{className:"copyright text-center my-auto",children:Object(b.jsx)("span",{children:"Copyright \xa9 Your Website 2020"})})})})]})}}]),a}(c.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"charts",children:Object(b.jsxs)("div",{style:{display:"flex",maxWidth:900},children:[Object(b.jsx)(f.a,{width:"700px",height:"500px",chartType:"Bar",loader:Object(b.jsx)("div",{children:"Loading Chart"}),data:[["Year","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350]],options:{chart:{title:"Company Performance",subtitle:"Sales, Expenses, and Profit: 2014-2017"}},rootProps:{"data-testid":"2"}}),Object(b.jsx)(f.a,{width:"700px",height:"500px",chartType:"PieChart",loader:Object(b.jsx)("div",{children:"Loading Chart"}),data:[["Task","Hours per Day"],["Work",12],["Eat",1],["Commute",2],["Watch TV",1],["Sleep",8]],options:{title:"My Daily Activities"},rootProps:{"data-testid":"1"}})]})})]})}}]),a}(c.a.Component),v=a(13),w=a(3);w.a.configure();var y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.setState({pwd:localStorage.getItem("Password")})},s.handleChange=function(e){var t=e.target.name;s.setState(Object(v.a)({},t,e.target.value))},s.handleLogin=function(e){e.preventDefault(),null!==s.state.pwd?"hireAngunathan@gmail.com"===s.state.mail&&s.state.password===s.state.pwd?(localStorage.setItem("validUser","ValidUser"),s.props.history.push("/Dashboard")):w.a.error("Use hireAngunathan@gmail.com && "+s.state.pwd):"hireAngunathan@gmail.com"===s.state.mail&&"Demo@123"===s.state.password?(localStorage.setItem("validUser","ValidUser"),s.props.history.push("/Dashboard")):w.a.error("Use hireAngunathan@gmail.com && Demo@123")},s.state={mail:"",password:"",pwd:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"forgot",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-xl-10 col-lg-12 col-md-9",children:Object(b.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(b.jsx)("div",{className:"card-body p-0",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-lg-6 d-none d-lg-block bg-login-image",children:[" ",Object(b.jsx)("img",{className:"imageSize",src:"Images\\0a16a19c1f13eb9282ec74524189ea3c.jpg",alt:""})]}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("h1",{className:"h4 text-gray-900 mb-4",children:"Welcome Back!"})}),Object(b.jsxs)("form",{className:"user",children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",onChange:function(t){e.handleChange(t)},name:"mail"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"password",className:"form-control form-control-user rounded-pill",id:"exampleInputPassword",placeholder:"Password",onChange:function(t){e.handleChange(t)},name:"password"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("div",{className:"custom-control custom-checkbox small",children:[Object(b.jsx)("input",{type:"checkbox",className:"custom-control-input rounded-pill ",id:"customCheck"}),Object(b.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck",children:"Remember Me"})]})}),Object(b.jsx)("button",{onClick:function(t){return e.handleLogin(t)},className:"btn btn-primary btn-user btn-block Login rounded-pill",children:"Login"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("a",{href:"index.html",className:"btn btn-google btn-user btn-block rounded-pill btn ",id:"fb-button",children:[Object(b.jsx)("i",{className:"fa fa-google fa-fw"})," Login with Google"]}),Object(b.jsxs)("a",{href:"index.html",className:"btn btn-blue btn-user btn-block rounded-pill",id:"fb-button",children:[Object(b.jsx)("i",{className:"fa fa-facebook-f fa-fw"})," Login with Facebook"]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)(m.b,{to:"/Forgot",children:[" ",Object(b.jsx)("a",{className:"small",href:"forgot-password.html",children:"Forgot Password?"})]})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)(m.b,{to:"/Register",children:["    ",Object(b.jsx)("a",{className:"small",href:"register.html",children:"Create an Account!"})]})})]})})]})})})})})})})}}]),a}(c.a.Component);a(42);w.a.configure();var C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getAllPosts=function(){},s.handleChange=function(e){var t=e.target.name;s.setState(Object(v.a)({},t,e.target.value))},s.validateEmail=function(e){return!!e.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||(w.a.warn("You have entered an invalid email address!"),!1)},s.validateName=function(e,t){var a=/^[a-zA-Z\s]+$/;return console.log(typeof s.state.questionNo),console.log(typeof s.state.questionNo2),!(!e.match(a)||!t.match(a))||(w.a.error("Name is Invalid!"),!1)},s.matchPassword=function(e,t){return e===t||(w.a.warn("Password is not matching"),!1)},s.validatePassword=function(e,t){var a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;return e.match(a)&&t.match(a)?(s.setState({passwordStatus:""}),!0):(s.setState({passwordStatus:"Password is Not a Required Type See Above"}),!1)},s.validateQues=function(e,t){if(e!==t)return s.setState({qresult:""}),!0;s.setState({qresult:"Select Different Questions"})},s.ValidateAns=function(e,t){if(console.log("Number"+Number(s.state.questionNo)),console.log("2Number"+Number(s.state.questionNo2)),e.length>0&&t.length>0)return!0;w.a.warn("Answer is Not Empty")},s.handleSubmit=function(e){if(e.preventDefault(),s.ValidateAns(s.state.answer,s.state.answer2)&&s.validateName(s.state.firstName,s.state.lastName)&&s.validateQues(s.state.questionNo,s.state.questionNo2)&&s.validateEmail(s.state.email)&&s.validatePassword(s.state.passWord,s.state.cnfmpassWord)&&s.matchPassword(s.state.passWord,s.state.cnfmpassWord))s.state.firstName,s.state.lastName,s.state.email,s.state.passWord,s.state.answer,Number(s.state.questionNo),s.state.answer2,Number(s.state.questionNo2)},s.state={firstName:"",lastName:"",email:"",passWord:"",alert1:"",alert2:"",loginDetails:[],userDetails:[],res:1,res1:1,cnfmpassWord:"",showPassword:!1,SecurityQuestions:[],answer:"",answer2:"",questionNo:0,questionNo2:0,qresult:"",passwordStatus:""},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getAllPosts()}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"forgot",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(b.jsx)("div",{className:"card-body p-0",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-lg-5 d-none d-lg-block bg-register-image",children:[" ",Object(b.jsx)("img",{className:"imageSize1",src:"Images\\0a16a19c1f13eb9282ec74524189ea3c.jpg",alt:""})]}),Object(b.jsx)("div",{className:"col-lg-7",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("h1",{className:"h4 text-gray-900 mb-4",children:"Create an Account!"})}),Object(b.jsxs)("form",{className:"user",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("div",{className:"col-sm-6 mb-3 mb-sm-0",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-user rounded-pill  ",id:"exampleFirstName lg",placeholder:"First Name",onChange:function(t){e.handleChange(t)},name:"firstName"})}),Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-user rounded-pill",id:"exampleLastName",placeholder:"Last Name",onChange:function(t){e.handleChange(t)},name:"lastName"})})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"email",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail",placeholder:"Email Address",onChange:function(t){e.handleChange(t)},name:"email"})}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("div",{className:"col-sm-6 mb-3 mb-sm-0",children:Object(b.jsx)("input",{type:"password",className:"form-control form-control-user rounded-pill",id:"exampleInputPassword",placeholder:"Password",onChange:function(t){e.handleChange(t)},name:"passWord"})}),Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("input",{type:"password",className:"form-control form-control-user rounded-pill",id:"exampleRepeatPassword",placeholder:"Confirm Password",onChange:function(t){e.handleChange(t)},name:"cnfmpassWord"})}),Object(b.jsx)("small",{className:"note",children:"Note: Password Contains Min 8 characters, at least one letter, one number and one special character"}),Object(b.jsx)("small",{className:"passwordresult",children:this.state.passwordStatus})]}),Object(b.jsx)("select",{id:"inputState",required:!0,className:"form-control ",name:"questionNo",onChange:function(t){e.handleChange(t)},children:this.state.SecurityQuestions.map((function(e){return Object(b.jsxs)("option",{value:e.questionNo,children:[" ",e.question," "]},e.questionNo)}))}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"col-sm-13",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-user rounded-pill",id:"exampleAnswer",placeholder:"Answer",onChange:function(t){e.handleChange(t)},name:"answer"})}),Object(b.jsx)("br",{}),Object(b.jsx)("select",{id:"inputState",required:!0,className:"form-control",name:"questionNo2",onChange:function(t){e.handleChange(t)},children:this.state.SecurityQuestions.map((function(e){return Object(b.jsxs)("option",{value:e.questionNo,children:[" ",e.question," "]},e.questionNo)}))}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"col-sm-13",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-user rounded-pill",id:"exampleAnswer2",placeholder:"Answer",onChange:function(t){e.handleChange(t)},name:"answer2"})}),Object(b.jsx)("small",{className:"questionresult",children:this.state.qresult}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-user btn-block rounded-pill",children:"Register Account"}),Object(b.jsx)("hr",{})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)(m.b,{to:"/Forgot",children:["  ",Object(b.jsx)("a",{className:"small",href:"forgot-password.html",children:"Forgot Password?"})]})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)(m.b,{to:"/",children:[" ",Object(b.jsx)("a",{className:"small",href:"login.html",children:"Already have an account? Login!"})]})})]})})]})})})})})}}]),a}(c.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).getAllPosts=function(){},s.handleLogin=function(e){"hireAngunathan@gmail.com"===s.state.mail?s.props.history.push("/ForgotScreen2"):w.a.error("Use hireAngunathan@gmail.com")},s.handleUsername=function(e){s.setState({mail:e.target.value})},s.state={mail:"",password:"",det:[]},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"forgot",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row justify-content-center forgottop",children:Object(b.jsx)("div",{className:"col-xl-10 col-lg-12 col-md-9",children:Object(b.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(b.jsx)("div",{className:"card-body p-0",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-6 d-none d-lg-block bg-password-image",children:Object(b.jsx)("img",{className:"imageSize3",src:"Images\\0a16a19c1f13eb9282ec74524189ea3c.jpg",alt:""})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h1",{className:"h4 text-gray-900 mb-2",children:"Forgot Your Password?"}),Object(b.jsx)("p",{className:"mb-4",children:"We get it, stuff happens. Just enter your email address below and well send you a link to reset your password!"})]}),Object(b.jsxs)("form",{className:"user",children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"email",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",name:"mail",onInput:function(t){return e.handleUsername(t)}})}),Object(b.jsx)("button",{onClick:function(t){return e.handleLogin(t)},className:"btn btn-primary btn-user btn-block Login rounded-pill",children:"Forgot Password"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("a",{className:"small",href:"/Register",children:"Create an Account!"})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("a",{className:"small",href:"/",children:"Already have an account? Login!"})})]})})]})})})})})})})}}]),a}(c.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleUsername=function(e){var t=e.target.name;s.setState(Object(v.a)({},t,e.target.value))},s.getAllPosts=function(){},s.validateAnswer=function(e,t){if(e.length>0&&t.length>0)return!0;w.a.warn("Answer is not Empty")},s.handleUser=function(e){e.preventDefault(),console.log(s.state.answer),console.log(s.state.answer2);s.state.answer,Number(s.state.questionId),s.state.answer2,Number(s.state.questionId2);s.validateAnswer(s.state.answer,s.state.answer2)},s.state={response:[],SecurityQuestions:[],questionForOutputBox:"",questionForOutputBox2:"",questionId:0,questionId2:0,answer:"",answer2:""},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("result");this.setState({response:e});var t=JSON.parse(e);this.setState({questionForOutputBox:t[0].question}),this.setState({questionForOutputBox2:t[1].question}),this.setState({questionId:t[0].questionNo}),this.setState({questionId2:t[1].questionNo})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"forgot",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row justify-content-center forgottop",children:Object(b.jsx)("div",{className:"col-xl-10 col-lg-12 col-md-9",children:Object(b.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(b.jsx)("div",{className:"card-body p-0",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-6 d-none d-lg-block bg-password-image",children:Object(b.jsx)("img",{className:"imageSize4",src:"Images\\0a16a19c1f13eb9282ec74524189ea3c.jpg",alt:""})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h1",{className:"h4 text-gray-900 mb-2",children:"Forgot Your Password?"}),Object(b.jsx)("p",{className:"mb-4",children:"We get it, stuff happens. Just enter your email address below and well send you a link to reset your password!"})]}),Object(b.jsxs)("form",{className:"user",children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("output",{className:"form-control form-control-user rounded-pill",children:[" ",this.state.questionForOutputBox]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"email",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter the Answer",onInput:function(t){return e.handleUsername(t)},name:"answer"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("output",{className:"form-control form-control-user rounded-pill",children:this.state.questionForOutputBox2})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"email",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter the Answer",name:"answer2",onInput:function(t){return e.handleUsername(t)}})}),Object(b.jsx)("button",{onClick:function(t){return e.handleUser(t)},className:"btn btn-primary btn-user btn-block Login rounded-pill",children:"Get Password"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("a",{className:"small",href:"/Register",children:"Create an Account!"})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("a",{className:"small",href:"/",children:"Already have an account? Login!"})})]})})]})})})})})})})}}]),a}(s.Component),A=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).matchPassword=function(e,t){return e===t||(w.a.warn("Password is not matching"),!1)},s.validatePassword=function(e,t){var a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;return e.match(a)&&t.match(a)?(s.setState({passwordStatus:""}),!0):e.length<=0||t.length<=0?void w.a.warn("Password Required"):(s.setState({passwordStatus:"Password is Not a Required Type See Above"}),!1)},s.validateEmail=function(e){return!!e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(e.length<=0?void w.a.warn("Please Use hireAngunathan@gmail.com!"):(w.a.warn("You have entered an invalid email address!"),!1))},s.handleLogin=function(e){e.preventDefault();s.state.mail,s.state.cnfmpassWord;s.validateEmail(s.state.mail)&&s.validatePassword(s.state.passWord,s.state.cnfmpassWord)&&s.matchPassword(s.state.passWord,s.state.cnfmpassWord)?(localStorage.setItem("Password",s.state.cnfmpassWord),w.a.success("Password Updated Successfully"),setTimeout((function(){s.callLogin()}),5e3)):w.a.error("Something Went Wrong !")},s.callLogin=function(){s.props.history.push("/")},s.handleUsername=function(e){var t=e.target.name;s.setState(Object(v.a)({},t,e.target.value))},s.state={mail:"",passWord:"",cnfmpassWord:"",passwordStatus:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"forgot",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row justify-content-center forgottop",children:Object(b.jsx)("div",{className:"col-xl-10 col-lg-12 col-md-9",children:Object(b.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(b.jsx)("div",{className:"card-body p-0",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-6 d-none d-lg-block bg-password-image",children:Object(b.jsx)("img",{className:"imageSize5",src:"Images\\0a16a19c1f13eb9282ec74524189ea3c.jpg",alt:""})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("div",{className:"p-5",children:[Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("h1",{className:"h4 text-gray-900 mb-2",children:"Change Your Password"})}),Object(b.jsxs)("form",{className:"user",children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"mail",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter the Existing E-Mail",name:"mail",onInput:function(t){return e.handleUsername(t)}})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"password",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter New Password",name:"passWord",onInput:function(t){return e.handleUsername(t)}})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"password",className:"form-control form-control-user rounded-pill",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Confirm New Password",name:"cnfmpassWord",onInput:function(t){return e.handleUsername(t)}})}),Object(b.jsx)("small",{className:"passwordresult",children:this.state.passwordStatus}),Object(b.jsx)("button",{onClick:function(t){return e.handleLogin(t)},className:"btn btn-primary btn-user btn-block Login rounded-pill",children:"Change Password"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("a",{className:"small",href:"/Register",children:"Create an Account!"})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("a",{className:"small",href:"/",children:"Already have an account? Login!"})})]})})]})})})})})})})}}]),a}(s.Component),P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.setState({validateUser:localStorage.getItem("validUser")})},s.state={validateUser:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.validateUser;return Object(b.jsx)(m.a,{children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/login",component:y}),Object(b.jsx)(h.a,{path:"/table",component:O}),Object(b.jsx)(h.a,{path:"/charts",component:N}),"ValidUser"===e?Object(b.jsx)(h.a,{path:"/Dashboard",component:g}):Object(b.jsx)(h.a,{exact:!0,path:"/",component:y}),Object(b.jsx)(h.a,{path:"/Register",component:C}),Object(b.jsx)(h.a,{path:"/Forgot",component:S}),Object(b.jsx)(h.a,{path:"/ForgotScreen1",component:k}),Object(b.jsx)(h.a,{path:"/ForgotScreen2",component:A})]})})}}]),a}(c.a.Component);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),l()}},[[43,1,2]]]);
//# sourceMappingURL=main.4627cd6d.chunk.js.map