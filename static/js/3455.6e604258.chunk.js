"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3455],{0:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(8182),i=t(184);var a=function(){return(0,i.jsxs)("svg",{className:"inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})};var s=function(e){var n=e.style,t=e.backGroundColor,s=void 0===t?"bg-slate-700":t,l=e.hoverBackGroundColor,o=void 0===l?"hover:bg-slate-800":l,d=e.textColor,c=void 0===d?"text-slate-50":d,h=e.padding,u=void 0===h?"p-3":h,m=e.marginY,g=e.marginX,p=e.children,x=e.loading;return(0,i.jsx)("div",{className:"flex flex-col",children:x?(0,i.jsxs)("button",{className:(0,r.W)("rounded-lg transition-all text-lg font-bold opacity-60",s,c,u,m,g,n),disabled:!0,children:[(0,i.jsx)(a,{})," Processing..."]}):(0,i.jsx)("button",{className:(0,r.W)("rounded-lg transition-all text-lg font-bold",s,o,c,u,m,g,n),children:p})})}},6509:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),i=t(8182),a=t(1134),s="style_none-spin__nSKr4",l=t(184);var o=function(e){var n=e.marginX,t=e.marginY,o=e.marginT,d=e.marginB,c=e.rounded,h=void 0===c?"rounded-lg":c,u=e.style,m=e.type,g=e.placeholder,p=void 0===g?"H\xe3y vi\u1ebft g\xec \u0111\xf3...":g,x=e.disabled,v=e.control,f=e.name,b=e.rules,N=(0,a.bc)({control:v,name:f,rules:b}),j=N.field,y=N.fieldState;return(0,l.jsxs)("div",{className:(0,i.Z)("flex flex-col",t,n,o,d),children:[(0,l.jsx)("input",(0,r.Z)((0,r.Z)({type:m,className:(0,i.Z)(y.error&&"border-red-600",s,"p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block",h,u),placeholder:p},j),{},{disabled:x&&!0})),y.error&&(0,l.jsxs)("span",{className:"px-2 italic text-sm text-red-500",children:[y.error.message,"*"]})]})}},8664:function(e,n,t){t.d(n,{s:function(){return r}});var r={email:{required:"Xin nh\u1eadp v\xe0o email c\u1ee7a b\u1ea1n",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Email sai \u0111\u1ecbnh d\u1ea1ng"}},password:{required:"Xin nh\u1eadp v\xe0o m\u1eadt kh\u1ea9u",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,message:"T\u1ed1i thi\u1ec3u t\xe1m k\xfd t\u1ef1, \xedt nh\u1ea5t m\u1ed9t ch\u1eef hoa, m\u1ed9t ch\u1eef th\u01b0\u1eddng v\xe0 m\u1ed9t s\u1ed1"}},confirmPassword:function(e,n){return{required:"Xin nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",validate:function(t){if(t!==n(e))return"M\u1eadt kh\u1ea9u kh\xf4ng tr\xf9ng kh\u1edbp"}}},date:{required:"Ng\xe0y sinh c\u1ee7a b\u1ea1n ?",pattern:{value:/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,message:"DD/MM/YYYY"}},name:{required:"Nh\u1eadp t\xean s\u1ea3n ph\u1ea9m"},gender:{required:"Gi\u1edbi t\xednh c\u1ee7a b\u1ea1n l\xe0 g\xec ?"},unit:{required:"Nh\u1eadp \u0111\u01a1n v\u1ecb t\xednh c\u1ee7a s\u1ea3n ph\u1ea9m",min:{value:1,message:"Xin vui l\xf2ng nh\u1eadp gi\xe1 l\u1edbn h\u01a1n 1"}},price:{required:"Nh\u1eadp gi\xe1 b\xe1n s\u1ea3n ph\u1ea9m th\xeam v\xe0o"},count:{required:"Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m th\xeam v\xe0o",min:{value:1,message:"Xin vui l\xf2ng nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng l\u1edbn h\u01a1n 0"}},category:{required:"Ch\u1ecdn danh m\u1ee5c cho s\u1ea3n ph\u1ea9m"},typeof:{required:"Ch\u1ecdn th\u1ec3 lo\u1ea1i cho s\u1ea3n ph\u1ea9m"},publishing:{required:"Ch\u1ecdn nh\xe0 xu\u1ea5t b\u1ea3n cho s\u1ea3n ph\u1ea9m"},author:{required:"Ch\u1ecdn t\xe1c gi\u1ea3 cho s\u1ea3n ph\u1ea9m"},discount:{required:"Nh\u1eadp ph\u1ea7m tr\u0103m gi\xe1 gi\u1ea3m cho s\u1ea3n ph\u1ea9m",min:{value:0,message:"Xin vui l\xf2ng nh\u1eadp gi\xe1 l\u1edbn h\u01a1n ho\u1eb7c b\u1eb1ng 0"}},numberPage:{required:"Nh\u1eadp s\u1ed1 trang c\u1ee7a s\u1ea3n ph\u1ea9m",min:{value:1,message:"Xin vui l\xf2ng nh\u1eadp gi\xe1 l\u1edbn h\u01a1n 0"}},content:{required:"Vi\u1ebft v\xe0i d\xf2ng m\xf4 t\u1ea3 ng\u1eafn v\u1ec1 n\u1ed9i dung"},image:{required:"Th\xeam 1 \u1ea3nh cho s\u1ea3n ph\u1ea9m",validate:{acceptedFormats:function(e){if(null!==e&&void 0!==e&&e.type)return["image/jpeg","image/jpg","image/png","image/gif"].includes(null===e||void 0===e?void 0:e.type)||"\u0110\u1ecbnh d\u1ea1ng \u1ea3nh l\xe0 PNG, JPEG, JPG, GIF"},lessThan10MB:function(e){if(null!==e&&void 0!==e&&e.size)return(null===e||void 0===e?void 0:e.size)<10485760||"K\xedch th\u01b0\u1edbc \u1ea3nh t\u1ed1i \u0111a l\xe0 10MB"}}},filterDate:{pattern:{value:/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,message:"DD/MM/YYYY"}}}},3455:function(e,n,t){t.r(n);var r=t(1413),i=t(4165),a=t(5861),s=t(885),l=t(2791),o=t(1134),d=t(6871),c=t(3504),h=t(0),u=t(6509),m=t(859),g=t(5548),p=t(1904),x=t(8664),v=t(184);n.default=function(){var e=(0,l.useMemo)((function(){var e=new Date;return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)}),[]),n=(0,l.useState)(!1),t=(0,s.Z)(n,2),f=t[0],b=t[1],N=(0,d.s0)(),j=(0,o.cI)({mode:"onBlur",defaultValues:{HoTen:"",Email:"",MatKhau:"",NgaySinh:e,GioiTinh:"1"}}),y=j.register,C=j.control,k=j.handleSubmit,w=j.setError,Z=j.formState.errors,q=(0,l.useCallback)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t,r,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,b(!0),e.next=5,m.Z.post(g.b.REGISTER,n);case 5:return t=e.sent,e.next=8,t.data;case 8:e.sent.error||(m.Z.post(g.b.SENDVERIFYEMAIL,{Email:n.Email}),N(p.m.verifyemail,{state:{Email:n.Email}})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),"0"===(s=null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||"Email already use"===s?w("Email",{type:"custom",message:"Email n\xe0y \u0111\xe3 t\u1ed3n t\u1ea1i"},{shouldFocus:!0}):window.alert("\u0110\u0103ng k\xfd th\u1ea5t b\u1ea1i!!!");case 16:return e.prev=16,b(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,v.jsxs)("div",{className:"flex flex-col rounded-lg bg-white shadow-xl border",children:[(0,v.jsx)("h2",{className:"text-center pt-2 text-2xl font-bold",children:"T\u1ea1o t\xe0i kho\u1ea3n m\u1edbi"}),(0,v.jsx)("h3",{className:"text-center pb-2 text-base font-normal text-slate-600",children:"Nhanh ch\xf3ng v\xe0 d\u1ec5 d\xe0ng."}),(0,v.jsx)("hr",{}),(0,v.jsxs)("form",{action:"",method:"post",onSubmit:k(q),children:[(0,v.jsx)(u.Z,{marginX:"mx-4",marginT:"mt-4",placeholder:"H\u1ecd v\xe0 t\xean",control:C,name:"HoTen",rules:{required:"Xin nh\u1eadp v\xe0o \u0111\u1ea7y \u0111\u1ee7 h\u1ecd t\xean"}}),(0,v.jsx)(u.Z,{marginX:"mx-4",marginT:"mt-4",placeholder:"Email",control:C,name:"Email",rules:x.s.email}),(0,v.jsx)(u.Z,{type:"password",marginX:"mx-4",marginT:"mt-4",marginB:"mb-2",placeholder:"M\u1eadt kh\u1ea9u m\u1edbi",control:C,name:"MatKhau",rules:x.s.password}),(0,v.jsxs)("div",{className:"flex",children:[(0,v.jsxs)("div",{className:"basis-1/2 mx-4",children:[(0,v.jsx)("label",{htmlFor:"date",className:"pt-2 hover:cursor-pointer block text-xs text-slate-600",children:"Ng\xe0y th\xe1ng n\u0103m sinh"}),(0,v.jsx)("input",(0,r.Z)({type:"date",name:"date",className:"p-3 my-2 text-base border rounded-lg transition-colors focus:outline-none block w-full"},y("NgaySinh",x.s.date))),Z.NgaySinh&&(0,v.jsxs)("span",{className:"px-2 italic text-xs text-red-600",children:[Z.NgaySinh.message,"*"]})]}),(0,v.jsxs)("div",{className:"basis-1/2 mx-4",children:[(0,v.jsx)("label",{htmlFor:"",className:"pt-2 hover:cursor-pointer block text-xs text-slate-600",children:"Gi\u1edbi t\xednh"}),(0,v.jsxs)("select",(0,r.Z)((0,r.Z)({className:"p-3 my-2 border rounded-lg text-base transition-colors focus:outline-none focus:placeholder-slate-300 block w-full"},y("GioiTinh",x.s.gender)),{},{children:[(0,v.jsx)("option",{value:"1",children:"Nam"}),(0,v.jsx)("option",{value:"0",children:"N\u1eef"})]})),Z.GioiTinh&&(0,v.jsxs)("span",{className:"px-2 italic text-sm text-red-500",children:[Z.GioiTinh.message,"*"]})]})]}),(0,v.jsx)(h.Z,{marginY:"my-2",marginX:"mx-4",loading:f,children:"\u0110\u0103ng k\xfd"}),(0,v.jsx)("div",{className:"text-center text-base p-2 mb-4",children:(0,v.jsx)(c.rU,{to:p.m.login,className:"text-slate-700 hover:underline",children:"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n \u01b0?"})})]})]})}}}]);
//# sourceMappingURL=3455.6e604258.chunk.js.map