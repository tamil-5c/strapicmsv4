"use strict";(self.webpackChunkstrapicms=self.webpackChunkstrapicms||[]).push([[1495],{91043:(L,m,t)=>{t.r(m),t.d(m,{default:()=>F});var e=t(27279),s=t(65e3),g=t(42925),h=t(35750),p=t(33110),M=t(68263),d=t(19915),f=t(86049),u=t(25667),E=t(54095),b=t(5007),j=t(551),n=t(6854),a=t(5816),r=t(32612),i=t(61020),o=t(40464),c=t(72450),y=t(31350),S=t(47853);const C=S.Ry().shape({email:S.Z_().email(a.I0.email).required(a.I0.required)}),Z=c.ZP.a`
  color: ${({theme:R})=>R.colors.primary600};
`,O=()=>e.createElement(a.O4,{permissions:y._.settings},e.createElement(W,null)),W=()=>{const R=(0,a.lm)(),{formatMessage:l}=(0,i.Z)(),{lockApp:K,unlockApp:U}=(0,a.o1)(),{get:k,post:w}=(0,a.kY)(),{data:T,isLoading:I}=(0,o.useQuery)(["email","settings"],async()=>{const{data:{config:x}}=await k("/email/settings");return x}),P=(0,o.useMutation)(x=>w("/email/test",x),{onError(){R({type:"warning",message:l({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:v})})},onSuccess(){R({type:"success",message:l({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:v})})}},{retry:!1});(0,a.go)();const[A,H]=e.useState({}),[v,$]=e.useState(""),[z,D]=e.useState(!1);e.useEffect(()=>{C.validate({email:v},{abortEarly:!1}).then(()=>D(!0)).catch(()=>D(!1))},[v]);const V=x=>{$(()=>x.target.value)},N=async x=>{x.preventDefault();try{await C.validate({email:v},{abortEarly:!1})}catch(G){H((0,a.CJ)(G))}K(),P.mutate({to:v}),U()};return e.createElement(s.o,{labelledBy:"title","aria-busy":I||P.isLoading},e.createElement(a.SL,{name:l({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),e.createElement(g.T,{id:"title",title:l({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:l({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),e.createElement(h.D,null,I?e.createElement(a.dO,null):e.createElement("form",{onSubmit:N},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(M.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(d.Z,{variant:"delta",as:"h2"},l({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})),e.createElement(d.Z,null,l({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(Z,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},l({id:"email.link",defaultMessage:"Link"}))}))),e.createElement(f.r,{gap:5},e.createElement(u.P,{col:6,s:12},e.createElement(E.o,{name:"shipper-email",label:l({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:l({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:T.settings.defaultFrom})),e.createElement(u.P,{col:6,s:12},e.createElement(E.o,{name:"response-email",label:l({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:l({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:T.settings.defaultReplyTo})),e.createElement(u.P,{col:6,s:12},e.createElement(b.P,{name:"email-provider",label:l({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:T.provider},e.createElement(j.W,{value:T.provider},T.provider)))))),e.createElement(p.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(d.Z,{variant:"delta",as:"h2"},l({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})),e.createElement(f.r,{gap:5,alignItems:"end"},e.createElement(u.P,{col:6,s:12},e.createElement(E.o,{id:"test-address-input",name:"test-address",onChange:V,label:l({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:v,error:A.email?.id&&l({id:`email.${A.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:l({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})),e.createElement(u.P,{col:7,s:12},e.createElement(n.z,{loading:P.isLoading,disabled:!z,type:"submit",startIcon:e.createElement(r.Z,null)},l({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})))))))))},F=O},35750:(L,m,t)=>{t.d(m,{D:()=>g});var e=t(74081),s=t(68263);const g=({children:h})=>(0,e.jsx)(s.x,{paddingLeft:10,paddingRight:10,children:h})},42925:(L,m,t)=>{t.d(m,{A:()=>j,T:()=>E});var e=t(74081),s=t(27279),g=t(72450);const h=n=>{const a=(0,s.useRef)(null),[r,i]=(0,s.useState)(!0),o=([c])=>{i(c.isIntersecting)};return(0,s.useEffect)(()=>{const c=a.current,y=new IntersectionObserver(o,n);return c&&y.observe(a.current),()=>{c&&y.disconnect()}},[a,n]),[a,r]};var p=t(66705);const M=(n,a)=>{const r=(0,p.W)(a);(0,s.useLayoutEffect)(()=>{const i=new ResizeObserver(r);return Array.isArray(n)?n.forEach(o=>{o.current&&i.observe(o.current)}):n.current&&i.observe(n.current),()=>{i.disconnect()}},[n,r])};var d=t(68263),f=t(33110),u=t(19915);const E=n=>{const a=(0,s.useRef)(null),[r,i]=(0,s.useState)(null),[o,c]=h({root:null,rootMargin:"0px",threshold:0});return M(o,()=>{o.current&&i(o.current.getBoundingClientRect())}),(0,s.useEffect)(()=>{a.current&&i(a.current.getBoundingClientRect())},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:r?.height},ref:o,children:c&&(0,e.jsx)(j,{ref:a,...n})}),!c&&(0,e.jsx)(j,{...n,sticky:!0,width:r?.width})]})};E.displayName="HeaderLayout";const b=(0,g.ZP)(d.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,j=s.forwardRef(({navigationAction:n,primaryAction:a,secondaryAction:r,subtitle:i,title:o,sticky:c,width:y,...S},B)=>{const C=typeof i=="string";return c?(0,e.jsx)(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{children:[n&&(0,e.jsx)(d.x,{paddingRight:3,children:n}),(0,e.jsxs)(d.x,{children:[(0,e.jsx)(u.Z,{variant:"beta",as:"h1",...S,children:o}),C?(0,e.jsx)(u.Z,{variant:"pi",textColor:"neutral600",children:i}):i]}),r?(0,e.jsx)(d.x,{paddingLeft:4,children:r}):null]}),(0,e.jsx)(f.k,{children:a?(0,e.jsx)(d.x,{paddingLeft:2,children:a}):void 0})]})}):(0,e.jsxs)(d.x,{ref:B,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(d.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{minWidth:0,children:[(0,e.jsx)(u.Z,{as:"h1",variant:"alpha",...S,children:o}),r?(0,e.jsx)(d.x,{paddingLeft:4,children:r}):null]}),a]}),C?(0,e.jsx)(u.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:i}):i]})})},65e3:(L,m,t)=>{t.d(m,{o:()=>p});var e=t(74081),s=t(72450),g=t(68263);const h=(0,s.ZP)(g.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,p=({labelledBy:M="main-content-title",...d})=>(0,e.jsx)(h,{"aria-labelledby":M,as:"main",id:"main-content",tabIndex:-1,...d})},32612:(L,m,t)=>{t.d(m,{Z:()=>g});var e=t(74081);const s=h=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),g=s}}]);
