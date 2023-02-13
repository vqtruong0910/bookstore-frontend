"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3064],{561:function(e,n,r){var t=r(184);n.Z=function(){return(0,t.jsxs)("svg",{className:"inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}},8222:function(e,n,r){var t=r(8182),i=r(561),a=r(184);n.Z=function(e){var n=e.style,r=e.backGroundColor,l=void 0===r?"bg-slate-700":r,s=e.hoverBackGroundColor,o=void 0===s?"hover:bg-slate-800":s,c=e.textColor,d=void 0===c?"text-slate-50":c,h=e.padding,u=void 0===h?"p-3":h,m=e.marginY,g=e.marginX,p=e.children,v=e.loading;return(0,a.jsx)("div",{className:"flex flex-col",children:v?(0,a.jsxs)("button",{className:(0,t.W)("rounded-lg transition-all text-lg font-bold opacity-60",l,d,u,m,g,n),disabled:!0,children:[(0,a.jsx)(i.Z,{})," Processing..."]}):(0,a.jsx)("button",{className:(0,t.W)("rounded-lg transition-all text-lg font-bold",l,o,d,u,m,g,n),children:p})})}},6509:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(1413),i=r(8182),a=r(1134),l="style_none-spin__nSKr4",s=r(184);var o=function(e){var n=e.marginX,r=e.marginY,o=e.marginT,c=e.marginB,d=e.rounded,h=void 0===d?"rounded-lg":d,u=e.style,m=e.type,g=e.placeholder,p=void 0===g?"H\xe3y vi\u1ebft g\xec \u0111\xf3...":g,v=e.disabled,f=e.control,x=e.name,b=e.rules,C=(0,a.bc)({control:f,name:x,rules:b}),k=C.field,y=C.fieldState;return(0,s.jsxs)("div",{className:(0,i.Z)("flex flex-col",r,n,o,c),children:[(0,s.jsx)("input",(0,t.Z)((0,t.Z)({type:m,className:(0,i.Z)(y.error&&"border-red-600",l,"p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block",h,u),placeholder:p},k),{},{disabled:v&&!0})),y.error&&(0,s.jsxs)("span",{className:"px-2 italic text-sm text-red-500",children:[y.error.message,"*"]})]})}},8664:function(e,n,r){r.d(n,{s:function(){return t}});var t={email:{required:"Xin nh\u1eadp v\xe0o email c\u1ee7a b\u1ea1n",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Email sai \u0111\u1ecbnh d\u1ea1ng"}},password:{required:"Xin nh\u1eadp v\xe0o m\u1eadt kh\u1ea9u",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,message:"T\u1ed1i thi\u1ec3u t\xe1m k\xfd t\u1ef1, \xedt nh\u1ea5t m\u1ed9t ch\u1eef hoa, m\u1ed9t ch\u1eef th\u01b0\u1eddng v\xe0 m\u1ed9t s\u1ed1"}},confirmPassword:function(e,n){return{required:"Xin nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",validate:function(r){if(r!==n(e))return"M\u1eadt kh\u1ea9u kh\xf4ng tr\xf9ng kh\u1edbp"}}},date:{required:"Ng\xe0y sinh c\u1ee7a b\u1ea1n ?",pattern:{value:/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,message:"DD/MM/YYYY"}},name:{required:"Nh\u1eadp t\xean s\u1ea3n ph\u1ea9m"},gender:{required:"Gi\u1edbi t\xednh c\u1ee7a b\u1ea1n l\xe0 g\xec ?"},unit:{required:"Nh\u1eadp \u0111\u01a1n v\u1ecb t\xednh c\u1ee7a s\u1ea3n ph\u1ea9m",min:{value:1,message:"Xin vui l\xf2ng nh\u1eadp gi\xe1 l\u1edbn h\u01a1n 1"}},price:{required:"Nh\u1eadp gi\xe1 b\xe1n s\u1ea3n ph\u1ea9m th\xeam v\xe0o"},count:{required:"Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m th\xeam v\xe0o",min:{value:1,message:"Xin vui l\xf2ng nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng l\u1edbn h\u01a1n 0"}},category:{required:"Ch\u1ecdn danh m\u1ee5c cho s\u1ea3n ph\u1ea9m"},typeof:{required:"Ch\u1ecdn th\u1ec3 lo\u1ea1i cho s\u1ea3n ph\u1ea9m"},publishing:{required:"Ch\u1ecdn nh\xe0 xu\u1ea5t b\u1ea3n cho s\u1ea3n ph\u1ea9m"},author:{required:"Ch\u1ecdn t\xe1c gi\u1ea3 cho s\u1ea3n ph\u1ea9m"},discount:{required:"Nh\u1eadp ph\u1ea7m tr\u0103m gi\xe1 gi\u1ea3m cho s\u1ea3n ph\u1ea9m",min:{value:0,message:"Xin vui l\xf2ng nh\u1eadp gi\xe1 l\u1edbn h\u01a1n ho\u1eb7c b\u1eb1ng 0"}},numberPage:{required:"Nh\u1eadp s\u1ed1 trang c\u1ee7a s\u1ea3n ph\u1ea9m",min:{value:1,message:"Xin vui l\xf2ng nh\u1eadp gi\xe1 l\u1edbn h\u01a1n 0"}},content:{required:"Vi\u1ebft v\xe0i d\xf2ng m\xf4 t\u1ea3 ng\u1eafn v\u1ec1 n\u1ed9i dung"},image:{required:"Th\xeam 1 \u1ea3nh cho s\u1ea3n ph\u1ea9m",validate:{acceptedFormats:function(e){if(null!==e&&void 0!==e&&e.type)return["image/jpeg","image/jpg","image/png","image/gif"].includes(null===e||void 0===e?void 0:e.type)||"\u0110\u1ecbnh d\u1ea1ng \u1ea3nh l\xe0 PNG, JPEG, JPG, GIF"},lessThan10MB:function(e){if(null!==e&&void 0!==e&&e.size)return(null===e||void 0===e?void 0:e.size)<10485760||"K\xedch th\u01b0\u1edbc \u1ea3nh t\u1ed1i \u0111a l\xe0 10MB"}}},filterDate:{pattern:{value:/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,message:"DD/MM/YYYY"}}}},3064:function(e,n,r){r.r(n);var t=r(4165),i=r(5861),a=r(885),l=r(2791),s=r(1134),o=r(3504),c=r(8222),d=r(6509),h=r(859),u=r(5548),m=r(1904),g=r(8664),p=r(184);n.default=function(){var e=(0,l.useState)(!1),n=(0,a.Z)(e,2),r=n[0],v=n[1],f=(0,s.cI)({mode:"onBlur",defaultValues:{Email:""}}),x=f.control,b=f.setError,C=f.handleSubmit,k=(0,l.useCallback)(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var r,i,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,h.Z.post(u.b.SENDEMAILRESETPASSWORD,n);case 4:return r=e.sent,e.next=7,r.data;case 7:e.sent.error||window.alert("Ch\xfang t\xf4i \u0111\xe3 g\u1eedi 1 email x\xe1c th\u1ef1c \u0111\u1ebfn t\xe0i kho\u1ea3n email c\u1ee7a b\u1ea1n\n L\u01b0u \xfd b\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c g\u1eedi \u0111\u01b0\u1eddng link n\xe0y cho b\u1ea5t c\u1ee9 ai!!!"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),null!==e.t0&&void 0!==e.t0&&null!==(i=e.t0.response)&&void 0!==i&&null!==(a=i.data)&&void 0!==a&&a.error?b("Email",{type:"custom",message:"T\xe0i kho\u1ea3n email kh\xf4ng t\u1ed3n t\u1ea1i"},{shouldFocus:!0}):window.alert("X\xe1c nh\u1eadn th\u1ea5t b\u1ea1i!");case 14:return e.prev=14,v(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,p.jsxs)("div",{className:"flex flex-col rounded-lg bg-white shadow-xl border",children:[(0,p.jsx)("h3",{className:"text-center p-5 text-lg font-normal",children:"X\xe1c nh\u1eadn Email"}),(0,p.jsxs)("form",{method:"post",onSubmit:C(k),className:"space-y-2",children:[(0,p.jsx)(d.Z,{type:"text",marginX:"mx-4",placeholder:"Email",control:x,name:"Email",rules:g.s.email}),(0,p.jsx)(c.Z,{marginY:"my-2",marginX:"mx-4",loading:r,children:"X\xe1c nh\u1eadn"})]}),(0,p.jsxs)("div",{className:"text-center text-base p-2 mb-4",children:[(0,p.jsx)(o.rU,{to:m.m.login,className:"text-slate-700 hover:underline",children:"\u0110\u0103ng nh\u1eadp"}),(0,p.jsx)("span",{children:" \xb7 "}),(0,p.jsx)(o.rU,{to:m.m.register,className:"text-slate-700 hover:underline",children:"\u0110\u0103ng k\xfd Bookstore"})]})]})}}}]);
//# sourceMappingURL=3064.98872871.chunk.js.map