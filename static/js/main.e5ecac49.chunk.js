(this.webpackJsonpRunapp=this.webpackJsonpRunapp||[]).push([[0],{173:function(e,t,a){},205:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(17),c=a.n(n),r=(a(173),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,316)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))}),l=a(22),o=a(23),d=a(29),j=a(28),h=a(50),b=a(27),x=(a(60),a(6)),m=a(1);var u=function(){return Object(m.jsx)("div",{})},p=a(16),g=a(10),O=a(151),f=a(308),v=a(304),w=a(309),y=a(303),C=a(305),N=a(295),S=a(299),P=a(296),R=a(294),k=a(131),W=a.n(k),T=a(132),A=a.n(T),_=a(130),E=a.n(_),L=a(129),M=a.n(L),I=a(112),F=a.n(I),U=a(134),D=a.n(U),B=a(107),H=a.n(B),z=a(133),K=a.n(z),$=Object(g.a)("div")((function(e){var t=e.theme;return Object(x.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(O.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),q=Object(g.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),V=Object(g.a)(N.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(x.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));var G=function(){var e=i.a.useState(1),t=Object(p.a)(e,2),a=t[0],s=(t[1],i.a.useState(1)),n=Object(p.a)(s,2),c=n[0],r=(n[1],Boolean(a),Boolean(c),"primary-search-account-menu"),l=(R.a,P.a,P.a,"primary-search-account-menu-mobile");return R.a,P.a,y.a,S.a,M.a,P.a,y.a,S.a,F.a,P.a,y.a,E.a,Object(m.jsx)(v.a,{sx:{flexGrow:1},children:Object(m.jsx)(f.a,{position:"static",children:Object(m.jsxs)(w.a,{children:[Object(m.jsx)(y.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(m.jsx)(W.a,{})}),Object(m.jsx)(C.a,{className:"ml-3 mr-3",variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block",cursor:"pointer"}},children:"NEWEST MEMBERS"}),Object(m.jsx)(C.a,{className:"ml-3 mr-3",variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block",cursor:"pointer"}},children:"IN YOUR AREA"})," ",Object(m.jsx)(C.a,{className:"ml-3 mr-3",variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block",cursor:"pointer"}},children:"CHAT"}),Object(m.jsx)(v.a,{sx:{flexGrow:1}}),Object(m.jsxs)(v.a,{sx:{display:{xs:"none",md:"flex"}},children:[Object(m.jsxs)($,{children:[Object(m.jsx)(q,{children:Object(m.jsx)(A.a,{})}),Object(m.jsx)(V,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(m.jsx)(y.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(m.jsx)(H.a,{})}),Object(m.jsx)(y.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(m.jsx)(S.a,{badgeContent:17,color:"error",children:Object(m.jsx)(F.a,{})})}),Object(m.jsx)(y.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":r,"aria-haspopup":"true",color:"inherit",children:Object(m.jsx)(K.a,{})})]}),Object(m.jsx)(v.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(m.jsx)(y.a,{size:"large","aria-label":"show more","aria-controls":l,"aria-haspopup":"true",color:"inherit",children:Object(m.jsx)(D.a,{})})})]})})})},J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={list:["$100","$500","$9,999","$1","$60","$1,000","$4.44","$0","$333"],radius:75,rotate:0,easeOut:0,angle:0,top:null,offset:null,net:null,result:null,spinning:!1},e.topPosition=function(t,a){var s=null,i=null;9===t?(s=7,i=Math.PI/2-2*a):8===t?(s=6,i=0):t<=7&&t>4?(s=t-1,i=Math.PI/2-a):4===t?(s=t-1,i=0):t<=3&&(s=t,i=Math.PI/2),e.setState({top:s-1,offset:i})},e.spin=function(){var t=Math.floor(900*Math.random())+500;e.setState({rotate:t,easeOut:2,spinning:!0}),setTimeout((function(){e.getResult(t)}),2e3)},e.getResult=function(t){for(var a,s=e.state,i=s.angle,n=s.top,c=s.offset,r=s.list,l=t%360*Math.PI/180,o=l+c,d=n+1;o>0;)o-=i,d--;a=d>=0?d:r.length+d,e.setState({net:l,result:a})},e.reset=function(){e.setState({rotate:0,easeOut:0,result:null,spinning:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.renderWheel()}},{key:"renderWheel",value:function(){var e=this.state.list.length,t=2*Math.PI/e;this.setState({angle:t}),this.topPosition(e,t);for(var a=0,s=0;s<e;s++){var i=this.state.list[s];this.renderSector(s+1,i,a,t,this.getColor()),a+=t}}},{key:"renderSector",value:function(e,t,a,s,i){var n=document.getElementById("wheel"),c=n.getContext("2d"),r=n.width/2,l=n.height/2,o=this.state.radius,d=a,j=a+s,h=e*s,b=3.33*o,x=b-150;c.beginPath(),c.arc(r,l,o,d,j,!1),c.lineWidth=2*o,c.strokeStyle=i,c.font="17px Arial",c.fillStyle="black",c.stroke(),c.save(),c.translate(b+Math.cos(h-s/2)*x,b+Math.sin(h-s/2)*x),c.rotate(h-s/2+Math.PI/2),c.fillText(t,-c.measureText(t).width/2,0),c.restore()}},{key:"getColor",value:function(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random());return"rgba(".concat(e,",").concat(t,",").concat(a,",0.4)")}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Spinning Prize Wheel React"}),Object(m.jsx)("span",{id:"selector",children:"\u25bc"}),Object(m.jsx)("canvas",{id:"wheel",width:"500",height:"500",style:{WebkitTransform:"rotate(".concat(this.state.rotate,"deg)"),WebkitTransition:"-webkit-transform ".concat(this.state.easeOut,"s ease-out")}}),Object(m.jsx)("button",{className:"rounded-circle",type:"button",id:"spin",onClick:this.spin,children:"spin"}),Object(m.jsx)("div",{class:"display",children:Object(m.jsxs)("span",{id:"readout",children:["BONUS POINTS:","  ",Object(m.jsx)("span",{id:"result",children:this.state.list[this.state.result]})]})})]})}}]),a}(i.a.Component),Z=a(306),Y=a(307),Q=a(15),X=a(310),ee=a(311),te=Object(Q.a)(Object(Q.a)({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"}),{},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),ae=(Object(Q.a)({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object(Q.a)({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object(Q.a)({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object(Q.a)({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object(Q.a)({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object(Q.a)({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object(Q.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),se=(Object(Q.a)(Object(Q.a)({},ae),{},{marginTop:".625rem"}),{imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}}),ie=Object(Q.a)(Object(Q.a)({container:te,profile:{textAlign:"center","& img":{maxWidth:"160px",width:"100%",margin:"0 auto",transform:"translate3d(0, -50%, 0)",height:"10rem"}},description:{margin:"1.071rem auto 0",maxWidth:"600px",color:"#999",textAlign:"center !important"},name:{marginTop:"-80px",color:"black"}},se),{},{main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},title:Object(Q.a)(Object(Q.a)({},ae),{},{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),socials:{marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px",color:"#999"},navWrapper:{margin:"20px auto 50px auto",textAlign:"center"}}),ne=a(24),ce=a.n(ne),re=a(286),le=a(292),oe=a(313),de=a(298);a(95),a(289),Object(re.a)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}});Object(re.a)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}});var je=a(148),he=a(301),be=a(293),xe=a(83),me=a.n(xe),ue=a(18),pe=a(291),ge=a(139),Oe=a(302),fe=a.p+"static/media/2103 087.ecf3c73c.jpg",ve=Object(g.a)(pe.a)((function(e){var t,a=e.theme;return t={height:10,borderRadius:5},Object(x.a)(t,"&.".concat(ge.a.colorSuccess),{backgroundColor:a.palette.grey["light"===a.palette.mode?200:800]}),Object(x.a)(t,"& .".concat(ge.a.bar),{borderRadius:5,backgroundColor:"light"===a.palette.mode?"green":"#308fe8"}),t})),we=Object(re.a)(ie),ye=[Object(m.jsx)(X.a,{className:"bg-success",children:Object(m.jsx)("i",{class:"fa fa-heart text-light","aria-hidden":"true"})},"one"),Object(m.jsx)(X.a,{className:"bg-warning",children:Object(m.jsx)("i",{class:"fa fa-thumbs-up text-light","aria-hidden":"true"})},"two"),Object(m.jsx)(X.a,{className:"bg-primary",children:Object(m.jsx)("p",{className:"text-light",children:"300+"})},"three"),Object(m.jsx)(X.a,{className:"bg-secondary",children:Object(m.jsx)("p",{className:"text-light",children:"20+"})},"three")],Ce=[Object(m.jsx)(X.a,{className:"bg-success",children:Object(m.jsx)("i",{class:"fa fa-heart text-light","aria-hidden":"true"})},"one")];function Ne(){var e=we(),t=i.a.useState({file:"",imagePreviewUrl:""}),a=Object(p.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)({name:"",mail:""}),l=Object(p.a)(r,2),o=l[0],d=l[1],j=Object(s.useState)(""),h=Object(p.a)(j,2),b=h[0],u=h[1],g=Object(s.useState)({userName:"",imageType:"",personImage:"",lastLogin:""}),O=Object(p.a)(g,2),f=(O[0],O[1]),w=Object(s.useState)(""),y=Object(p.a)(w,2),C=y[0],N=y[1],S=Object(s.useState)({newPassword:"",confirmPassword:""}),P=Object(p.a)(S,2),R=P[0],k=P[1],W=Object(s.useState)({showNewPassword:!1,showConfirmPassword:!1}),T=Object(p.a)(W,2),A=T[0],_=T[1];Object(s.useEffect)((function(){var e=localStorage.getItem("token");N(e),E(e)}),[]);var E=function(e){me()({method:"get",url:Object({NODE_ENV:"production",PUBLIC_URL:"/Runapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/users/getUser",headers:{Authorization:"Bearer "+e}}).then((function(e){console.log("ProfileData",e.data.data.currentLogin),f({userName:e.data.data.userName,imageType:e.data.data.imageType,personImage:e.data.data.userImg,lastLogin:e.data.data.currentLogin})}))},L=Object(s.useState)(!1),M=Object(p.a)(L,2),I=M[0],F=M[1],U=Object(s.useState)(!1),D=Object(p.a)(U,2),B=D[0],H=D[1],z=Object(s.useState)(""),K=Object(p.a)(z,2),$=K[0],q=K[1],V=Object(s.useState)(""),G=Object(p.a)(V,2),J=G[0],Z=G[1],Y=function(){F(!1),H(!1),X()},X=function(){d({name:"",mail:""}),c({file:"",imagePreviewUrl:""}),u("")},te=ce()(e.imgRaised,e.imgRoundedCircle,e.imgFluid),ae=function(e){return function(t){console.log(e),d(Object(Q.a)(Object(Q.a)({},o),{},Object(x.a)({},e,t.target.value))),k(Object(Q.a)(Object(Q.a)({},R),{},Object(x.a)({},e,t.target.value)))}},se=function(e){return function(t){console.log(e),"showConfirmPassword"===e?A.showConfirmPassword?_(Object(Q.a)(Object(Q.a)({},A),{},{showConfirmPassword:!1})):_(Object(Q.a)(Object(Q.a)({},A),{},{showConfirmPassword:!0})):A.showNewPassword?_(Object(Q.a)(Object(Q.a)({},A),{},{showNewPassword:!1})):_(Object(Q.a)(Object(Q.a)({},A),{},{showNewPassword:!0}))}},ie=function(e){e.preventDefault()},ne=Object(Oe.a)().t,re=localStorage.getItem("theme");return Object(m.jsxs)("div",{className:"dark"===re?"dark-mode":"light-mode",children:[Object(m.jsx)("div",{className:" d-flex justify-content-center",children:Object(m.jsxs)(he.a,{className:"d-flex rounded-corners profile-details",style:{width:"40rem"},children:[Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsx)(v.a,{className:"mt-5",sx:{display:"flex","& > *":{m:1}},children:Object(m.jsx)(ee.a,{orientation:"vertical","aria-label":"vertical outlined button group",children:ye})}),Object(m.jsx)(je.a,{onDrop:function(e){return function(e){var t=new FileReader,a=e[0];t.onloadend=function(){c({file:a,imagePreviewUrl:t.result})},t.readAsDataURL(a)}(e)},children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(m.jsxs)("section",{className:" mt-2",children:[Object(m.jsxs)("div",Object(Q.a)(Object(Q.a)({},t({className:"imgDropZone"})),{},{children:[Object(m.jsx)("input",Object(Q.a)({},a())),""!==n.imagePreviewUrl?Object(m.jsx)("img",{className:te,src:n.imagePreviewUrl,alt:"",style:{width:"223px",height:"223px"}}):Object(m.jsx)("img",{className:te,src:fe,alt:"...",style:{width:"223px",height:"223px"}})]})),Object(m.jsx)("aside",{children:Object(m.jsx)("ul",{})})]})}}),Object(m.jsx)(v.a,{className:"mt-5",sx:{display:"flex","& > *":{m:1}},children:Object(m.jsx)(ee.a,{orientation:"vertical","aria-label":"vertical outlined button group",children:Ce})})]}),""!==n.imagePreviewUrl?Object(m.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(m.jsx)("h6",{type:"button",className:"text-primary d-inline",onClick:function(){!function(){var e=new FormData;e.append("file",n.file),me()({method:"put",url:Object({NODE_ENV:"production",PUBLIC_URL:"/Runapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/users/updateImageUser",data:e,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+C}}).then((function(e){e.data.status?(ue.a.success("Profile Picture Updated Successfully !"),E(C),window.location.reload(),c({imagePreviewUrl:""}),setTimeout((function(){Y()}),2e3)):ue.a.success("Something Went Wrong")}))}()},children:"Save"}),Object(m.jsx)("h6",{type:"button",className:"text-secondary d-inline ml-3",onClick:function(){return c({imagePreviewUrl:""})},children:"Cancel"})]}):"",Object(m.jsx)(he.a.Body,{children:Object(m.jsxs)(he.a.Text,{children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h6",{className:"d-inline text-center ",children:"ANGUNATHAN K"}),Object(m.jsx)("i",{class:"fa fa-pencil-square-o ml-3 d-inline justify-content-end edit-profile",title:"Edit Profile",onClick:function(){return F(!0)},"aria-hidden":"true"}),Object(m.jsx)(ve,{variant:"determinate",value:50})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-12 text-left",style:{fontWeight:"bold"},children:["Basic Information ",Object(m.jsx)("i",{class:"fa fa-pencil-square-o pull-right mt-2"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Location:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"Sivagangai,Tamilnadu"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Mobile:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"+91 9994139531"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Gender:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"Male"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Birthday:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"16/07/1998"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Status:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"Single"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Age:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"23"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Looking For:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"Women"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Email:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"contactme@gmail.com"})]}),Object(m.jsxs)("div",{className:"col-12 text-left",style:{fontWeight:"bold"},children:["Physical Apperance",Object(m.jsx)("i",{class:"fa fa-pencil-square-o pull-right mt-2"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Height:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"5.6"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Hair Color:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"Black"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Weight:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"56"})]}),Object(m.jsxs)("div",{className:"col-6 text-left",style:{fontWeight:"bold"},children:["Eye Color:",Object(m.jsx)("p",{style:{fontWeight:"lighter"},children:"Brown"})]}),Object(m.jsxs)("div",{className:"col-12 text-left",style:{fontWeight:"bold"},children:["About Me",Object(m.jsx)("i",{class:"fa fa-pencil-square-o pull-right mt-2"})]}),Object(m.jsx)("div",{className:"col-12 text-left",children:"Software Developer Currently Lookin Job Change"}),Object(m.jsxs)("div",{className:"col-6 text-left mt-2",style:{fontWeight:"bold"},children:["Current Level: ",Object(m.jsx)("span",{className:"bg-danger text-light rounded",children:"12"})]}),Object(m.jsxs)("div",{className:"col-6 text-left mt-2",style:{fontWeight:"bold"},children:["Current Level: ",Object(m.jsx)("span",{className:"bg-success text-light rounded",children:"5"})]})]})]})})]})}),Object(m.jsxs)(be.a,{show:I,onHide:Y,backdrop:"static",className:"dark"===re?"dark-mode":"light-mode",centered:!0,children:[Object(m.jsx)(be.a.Header,{closeButton:!0,children:Object(m.jsx)(be.a.Title,{id:"example-modal-sizes-title-sm",children:ne("editProfileLabel")})}),Object(m.jsxs)(be.a.Body,{children:[Object(m.jsx)("form",{className:"Model-Form d-flex justify-content-center",noValidate:!0,autoComplete:"off",children:Object(m.jsx)("div",{children:Object(m.jsx)(le.a,{id:"outlined-basic",value:o.name,onChange:ae("name"),InputProps:{startAdornment:Object(m.jsx)(oe.a,{position:"start",children:Object(m.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})})},type:"text",label:ne("fullNameLabel"),variant:"outlined"})})}),Object(m.jsx)("form",{className:"Model-Form d-flex justify-content-center",autoComplete:"off",children:Object(m.jsx)("div",{children:Object(m.jsx)(le.a,{id:"outlined-basic",value:o.mail,onChange:ae("mail"),InputProps:{startAdornment:Object(m.jsx)(oe.a,{position:"start",children:Object(m.jsx)("i",{class:"fa fa-envelope","aria-hidden":"true"})})},type:"email",label:ne("e-mailLabel"),variant:"outlined"})})}),Object(m.jsxs)("span",{className:"ml-5 text-danger",children:[" ",b]})]}),Object(m.jsx)(be.a.Footer,{children:Object(m.jsx)("button",{className:"theme-btn style-one",onClick:function(){return function(e){var t=!1;""!==o.mail&&(o.mail.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")?(t=!0,u("")):u("E-Mail is Not Valid !"));var a={userName:o.name,loginId:o.mail};(t||""===o.mail)&&me.a.put(Object({NODE_ENV:"production",PUBLIC_URL:"/Runapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/users/updateUser",a,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){!0===e.data.status&&(t?(ue.a.success("Details Updated Successfully"),setTimeout((function(){ue.a.warning("Session Expired !")}),1e3),setTimeout((function(){window.history.pushState({},"","/")}),2e3),setTimeout((function(){window.location.reload()}),2e3)):(ue.a.success("Details Updated Successfully"),E(C),setTimeout((function(){Y()}),2e3)))}))}(C)},children:"Save"})})]}),Object(m.jsxs)(be.a,{show:B,onHide:Y,backdrop:"static",className:"dark"===re?"dark-mode":"light-mode",centered:!0,children:[Object(m.jsx)(be.a.Header,{closeButton:!0,children:Object(m.jsx)(be.a.Title,{id:"example-modal-sizes-title-sm",children:ne("changePasswordOption")})}),Object(m.jsxs)(be.a.Body,{children:[Object(m.jsx)("form",{className:"Model-Form d-flex justify-content-center",noValidate:!0,autoComplete:"off",children:Object(m.jsx)("div",{children:Object(m.jsx)(le.a,{id:"outlined-basic",value:R.newPassword,onChange:ae("newPassword"),InputProps:{startAdornment:Object(m.jsx)(oe.a,{position:"start",children:Object(m.jsx)("i",{class:"fa fa-lock","aria-hidden":"true"})}),endAdornment:Object(m.jsx)(oe.a,{position:"end",children:Object(m.jsx)(de.a,{"aria-label":"toggle password visibility",onClick:se("showNewPassword"),onMouseDown:ie,edge:"end",children:A.showNewPassword?Object(m.jsx)("i",{class:"fa fa-eye","aria-hidden":"true"}):Object(m.jsx)("i",{class:"fa fa-eye-slash","aria-hidden":"true"})})})},type:A.showNewPassword?"text":"password",label:ne("newPasswordLabel"),variant:"outlined",helperText:$})})}),Object(m.jsx)("form",{className:"Model-Form d-flex justify-content-center",noValidate:!0,autoComplete:"off",children:Object(m.jsx)("div",{children:Object(m.jsx)(le.a,{id:"outlined-basic",value:R.confirmPassword,onChange:ae("confirmPassword"),InputProps:{startAdornment:Object(m.jsx)(oe.a,{position:"start",children:Object(m.jsx)("i",{class:"fa fa-lock","aria-hidden":"true"})}),endAdornment:Object(m.jsx)(oe.a,{position:"end",children:Object(m.jsx)(de.a,{"aria-label":"toggle password visibility",onClick:se("showConfirmPassword"),onMouseDown:ie,edge:"end",children:A.showConfirmPassword?Object(m.jsx)("i",{class:"fa fa-eye","aria-hidden":"true"}):Object(m.jsx)("i",{class:"fa fa-eye-slash","aria-hidden":"true"})})})},type:A.showConfirmPassword?"text":"password",label:ne("confirmPasswordLabel"),variant:"outlined",helperText:J})})})]}),Object(m.jsx)(be.a.Footer,{children:Object(m.jsx)("button",{className:"theme-btn style-one",onClick:function(){!function(){var e=!1,t=!1,a=!1;if(R.newPassword===R.confirmPassword&&(a=!0),R.newPassword.length<=0?q("New Password Required !"):R.newPassword.length>1&&R.newPassword.length<=7?q("Min 8 Character is Required !"):(e=!0,q("")),R.confirmPassword.length<=0?Z("Confirm Password Required !"):R.confirmPassword.length>1&&R.confirmPassword.length<=7?Z("Min 8 Character is Required !"):(t=!0,Z("")),e&&t&&a){var s={password:R.confirmPassword};me.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"/Runapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/users/changepassword",s).then((function(e){console.log(e.data.status),e.data.status?(ue.a.success("Password Successfully Changed"),Y()):ue.a.error("Something went wrong")}))}else R.confirmPassword.length>1&&R.newPassword.length>1&&!a&&ue.a.error("Password Not Matching")}()},children:"Reset"})})]})]})}var Se=Object(g.a)(pe.a)((function(e){var t,a=e.theme;return t={height:10,borderRadius:5},Object(x.a)(t,"&.".concat(ge.a.colorSuccess),{backgroundColor:a.palette.grey["light"===a.palette.mode?200:800]}),Object(x.a)(t,"& .".concat(ge.a.bar),{borderRadius:5,backgroundColor:"light"===a.palette.mode?"green":"#308fe8"}),t})),Pe=[{id:"1",name:"btc",bal:"1200",api:"0.02%",at:"no",int:"4%"},{id:"2",name:"bust",bal:"1500",api:"0.04%",at:"yes",int:"4%"},{id:"3",name:"btc",bal:"1200",api:"0.04%",at:"yes",int:"7%"},{id:"4",name:"bust",bal:"1500",api:"0.04%",at:"no",int:"7%"},{id:"5",name:"btc",bal:"1200",api:"0.02%",at:"yes",int:"7%"},{id:"6",name:"bust",bal:"1500",api:"0.02%",at:"no",int:"4%"}],Re=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleClick=function(e){s.setState({anchorEl:e.currentTarget})},s.handleClose=function(){s.setState({anchorEl:null})},s.handleOnchange=function(e){var t;t=Pe.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})),s.setState({data2:t}),console.log(e.target.value)},s.setActiveContent=function(e){return function(){s.setState({activeContent:e}),console.log(e)}},s.state={activeContent:"profile",data2:Pe},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(G,{}),Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)(v.a,{className:"p-5 ml-5 mr-5 mt-3 round",sx:{borderRadius:"15px",height:"3rem",display:"flex",alignItems:"center",textAlign:"center",background:"aliceblue"},children:[Object(m.jsx)("h5",{className:"mr-5 ".concat("profile"===this.state.activeContent?"activeContent":""),onClick:this.setActiveContent("profile"),sx:{minWidth:100},children:"Profile"}),Object(m.jsx)("h5",{className:"mr-5 ".concat("spin"===this.state.activeContent?"activeContent":""),onClick:this.setActiveContent("spin"),sx:{minWidth:100},children:"Spin The Wheel"}),Object(m.jsx)("h5",{className:"mr-5 ".concat("gallery"===this.state.activeContent?"activeContent":""),onClick:this.setActiveContent("gallery"),sx:{minWidth:100},children:"My Gallery"}),Object(m.jsx)("h5",{className:"mr-5 ".concat("favourite"===this.state.activeContent?"activeContent":""),onClick:this.setActiveContent("favourite"),sx:{minWidth:100},children:"My Favorites"}),Object(m.jsx)("h5",{className:"mr-5 ".concat("member"===this.state.activeContent?"activeContent":""),onClick:this.setActiveContent("member"),sx:{minWidth:100},children:"Member History"}),Object(m.jsx)("h5",{className:"mr-5 ".concat("user"===this.state.activeContent?"activeContent":""),onClick:this.setActiveContent("user"),sx:{minWidth:100},children:"User Visitors"})]})}),Object(m.jsxs)("div",{className:"row p-5 d-flex justify-content-between",children:[Object(m.jsx)("div",{className:"col-lg-4 col-sm-4 col-md-4 ",children:Object(m.jsx)(Ne,{})}),Object(m.jsx)("div",{className:"col-lg-8 col-sm-8 col-md-8  bg-white",children:Object(m.jsx)(Z.a,{variant:"outlined",sx:{minWidth:275},children:Object(m.jsx)(Y.a,{children:Object(m.jsx)(J,{})})})})]}),Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)(v.a,{className:"p-5 ml-5 mr-5 round",sx:{borderRadius:"15px",height:"3rem",display:"flex",alignItems:"center",textAlign:"center",background:"aliceblue"},children:Object(m.jsxs)("div",{className:"p-5 d-flex justify-content-between",children:[Object(m.jsxs)("h6",{className:"",children:["Current Meassage: ",Object(m.jsx)("span",{className:"bg-danger text-light rounded",children:"12"})]}),Object(m.jsxs)("h6",{className:"ml-5 mr-5",children:["Your Chest: ",Object(m.jsx)("span",{className:"bg-danger text-light rounded",children:"12"})]}),Object(m.jsxs)("h6",{className:"ml-5 mr-5",children:["Current Level: ",Object(m.jsx)("span",{className:"bg-danger text-light rounded",children:"12"})]}),Object(m.jsxs)("h6",{className:"ml-5 mr-5",children:["Progress: ",Object(m.jsxs)("span",{children:["   ",Object(m.jsx)(Se,{variant:"determinate",value:50})]})]}),Object(m.jsxs)("h6",{className:"ml-5 mr-5",children:["Coins: ",Object(m.jsx)("span",{className:"bg-warning text-light rounded",children:"12"})]})]})})})]})}}]),a}(i.a.Component),ke=(a(205),a(86),a(93)),We=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={validateUser:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App ",children:[Object(m.jsx)(Re,{}),Object(m.jsxs)("footer",{class:"bg-white",children:[Object(m.jsx)("div",{class:"container py-5",children:Object(m.jsxs)("div",{class:"row py-4",children:[Object(m.jsxs)("div",{class:"col-lg-4 col-md-6 mb-4 mb-lg-0",children:[Object(m.jsx)("img",{src:"img/logo.png",alt:"",width:"180",class:"mb-3"}),Object(m.jsx)("p",{class:"font-italic text-muted",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."}),Object(m.jsxs)("ul",{class:"list-inline mt-4",children:[Object(m.jsx)("li",{class:"list-inline-item",children:Object(m.jsx)("a",{href:"#",target:"_blank",title:"twitter",children:Object(m.jsx)("i",{class:"fa fa-twitter"})})}),Object(m.jsx)("li",{class:"list-inline-item",children:Object(m.jsx)("a",{href:"#",target:"_blank",title:"facebook",children:Object(m.jsx)("i",{class:"fa fa-facebook"})})}),Object(m.jsx)("li",{class:"list-inline-item",children:Object(m.jsx)("a",{href:"#",target:"_blank",title:"instagram",children:Object(m.jsx)("i",{class:"fa fa-instagram"})})}),Object(m.jsx)("li",{class:"list-inline-item",children:Object(m.jsx)("a",{href:"#",target:"_blank",title:"pinterest",children:Object(m.jsx)("i",{class:"fa fa-pinterest"})})}),Object(m.jsx)("li",{class:"list-inline-item",children:Object(m.jsx)("a",{href:"#",target:"_blank",title:"vimeo",children:Object(m.jsx)("i",{class:"fa fa-vimeo"})})})]})]}),Object(m.jsxs)("div",{class:"col-lg-2 col-md-6 mb-4 mb-lg-0",children:[Object(m.jsx)("h6",{class:"text-uppercase font-weight-bold mb-4",children:"Shop"}),Object(m.jsxs)("ul",{class:"list-unstyled mb-0",children:[Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"For Women"})}),Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"For Men"})}),Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"Stores"})}),Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"Our Blog"})})]})]}),Object(m.jsxs)("div",{class:"col-lg-2 col-md-6 mb-4 mb-lg-0",children:[Object(m.jsx)("h6",{class:"text-uppercase font-weight-bold mb-4",children:"Company"}),Object(m.jsxs)("ul",{class:"list-unstyled mb-0",children:[Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"Login"})}),Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"Register"})}),Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"Wishlist"})}),Object(m.jsx)("li",{class:"mb-2",children:Object(m.jsx)("a",{href:"#",class:"text-muted",children:"Our Products"})})]})]}),Object(m.jsxs)("div",{class:"col-lg-4 col-md-6 mb-lg-0",children:[Object(m.jsx)("h6",{class:"text-uppercase font-weight-bold mb-4",children:"Newsletter"}),Object(m.jsx)("p",{class:"text-muted mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus."}),Object(m.jsx)("div",{class:"p-1 rounded border",children:Object(m.jsxs)("div",{class:"input-group",children:[Object(m.jsx)("input",{type:"email",placeholder:"Enter your email address","aria-describedby":"button-addon1",class:"form-control border-0 shadow-0"}),Object(m.jsx)("div",{class:"input-group-append",children:Object(m.jsx)("button",{id:"button-addon1",type:"submit",class:"btn btn-link",children:Object(m.jsx)("i",{class:"fa fa-paper-plane"})})})]})})]})]})}),Object(m.jsx)("div",{class:"bg-light py-4",children:Object(m.jsx)("div",{class:"container text-center",children:Object(m.jsx)("p",{class:"text-muted mb-0 py-2",children:"\xa9 2019 Bootstrapious All rights reserved."})})})]})]})}}]),a}(i.a.Component);i.a.Component;ue.a.configure();i.a.Component,a(210);ue.a.configure();i.a.Component,i.a.Component,s.Component,s.Component;var Te=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.setState({validateUser:localStorage.getItem("validUser")})},s.state={validateUser:""},s}return Object(o.a)(a,[{key:"render",value:function(){this.state.validateUser;return Object(m.jsx)(h.a,{children:Object(m.jsx)(b.c,{children:Object(m.jsx)(b.a,{exact:!0,path:"/Runapp",component:We})})})}}]),a}(i.a.Component);c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Te,{})}),document.getElementById("root")),r()}},[[211,1,2]]]);
//# sourceMappingURL=main.e5ecac49.chunk.js.map