"use strict";(self.webpackChunkpayload_template_ts_blog=self.webpackChunkpayload_template_ts_blog||[]).push([[599],{77070:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(26793),r=a(12049),o=a(28960);a(14120);const s="field-description",i=e=>{const{className:t,description:a,value:i}=e,{i18n:c}=(0,n.$)();if((0,r.isComponent)(a)){const e=a;return l.createElement(e,{value:i})}return a?l.createElement("div",{className:[s,t].filter(Boolean).join(" ")},"function"==typeof a?a({value:i}):(0,o.i)(a,c)):null}},12049:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isComponent=void 0;const n=l(a(67294));t.isComponent=function(e){return n.default.isValidElement(e)}},28571:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(67294),n=a(26793),r=a(90546),o=a.n(r),s=a(48170),i=a(953),c=a(90666),d=a(77070),m=a(35193),u=a(28960);a(25786);const p=o()((e=>{const{name:t,path:a,required:r,validate:o=m.email,admin:{readOnly:p,style:E,className:f,width:h,placeholder:g,autoComplete:v,description:b,condition:w}={},label:_}=e,{i18n:y}=(0,n.$)(),Z=a||t,k=(0,l.useCallback)(((e,t)=>o(e,{...t,required:r})),[o,r]),C=(0,s.Z)({path:Z,validate:k,condition:w}),{value:$,showError:N,setValue:P,errorMessage:L}=C,j=["field-type","email",f,N&&"error",p&&"read-only"].filter(Boolean).join(" ");return l.createElement("div",{className:j,style:{...E,width:h}},l.createElement(c.Z,{showError:N,message:L}),l.createElement(i.Z,{htmlFor:`field-${Z.replace(/\./gi,"__")}`,label:_,required:r}),l.createElement("input",{id:`field-${Z.replace(/\./gi,"__")}`,value:$||"",onChange:P,disabled:Boolean(p),placeholder:(0,u.i)(g,y),type:"email",name:Z,autoComplete:v}),l.createElement(d.Z,{value:$,description:b}))}))},47599:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(67294),n=a(73727),r=a(39249),o=a(26793),s=a(89116),i=a(9980),c=a(28630),d=a(39599),m=a(26644),u=a(28571),p=a(46268),E=a(77329),f=a(37276);a(55514);const h="forgot-password",g=()=>{const[e,t]=(0,l.useState)(!1),{user:a}=(0,c.a)(),{t:g}=(0,o.$)("authentication"),{admin:{user:v},serverURL:b,routes:{admin:w,api:_}}=(0,i.Z)();return a?l.createElement(d.Z,{className:h},l.createElement(f.Z,{title:g("forgotPassword"),description:g("forgotPassword"),keywords:g("forgotPassword")}),l.createElement("h1",null,g("alreadyLoggedIn")),l.createElement("p",null,l.createElement(s.c,{i18nKey:"loggedInChangePassword",t:g},l.createElement(n.Link,{to:`${w}/account`},"account"))),l.createElement("br",null),l.createElement(E.Z,{el:"link",buttonStyle:"secondary",to:w},g("general:backToDashboard"))):e?l.createElement(d.Z,{className:h},l.createElement("h1",null,g("emailSent")),l.createElement("p",null,g("checkYourEmailForPasswordReset"))):l.createElement(d.Z,{className:h},l.createElement(m.Z,{handleResponse:e=>{e.json().then((()=>{t(!0)}),(()=>{r.Am.error(g("emailNotValid"))}))},method:"post",action:`${b}${_}/${v}/forgot-password`},l.createElement("h1",null,g("forgotPassword")),l.createElement("p",null,g("forgotPasswordEmailInstructions")),l.createElement(u.Z,{label:g("general:emailAddress"),name:"email",admin:{autoComplete:"email"},required:!0}),l.createElement(p.Z,null,g("general:submit"))),l.createElement(n.Link,{to:`${w}/login`},g("backToLogin")))}}}]);