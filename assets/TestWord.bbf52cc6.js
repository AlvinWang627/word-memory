import{_ as N,u as I,r as y,a as T,o as v,c as h,w as r,v as l,b as D,d as t,e as k,f as g,F as x,g as K,h as f,t as w,i as m,p as W,j as V}from"./index.47294286.js";const j=i=>(W("data-v-8e344898"),i=i(),V(),i),q=f(" \u76EE\u524D\u6C92\u55AE\u5B57\u53EF\u4EE5\u6E2C\u8A66\uFF0C\u8FD4\u56DE"),A=f("\u9996\u9801"),F={class:"text-center bg-secondary fs-2 h-100 my-auto d-flex flex-column justify-content-between"},G={class:"text-center fs-2 bg-dark py-2 position-relative"},U=j(()=>t("i",{class:"bi bi-chevron-left",id:"arrow"},null,-1)),E={class:"button-group"},L=["onClick"],M=["onClick"],R=["onClick"],$={props:{doNotKnow:{type:Array,required:!0},unfamiliar:{type:Array,required:!0}},emits:["emitGotIt","emitUnfamiliar","emitDoNotKnow"],setup(i,{emit:d}){const b=i,C=I(),e=y(!0),o=y([]);function B(){o.value.push(...b.doNotKnow,...b.unfamiliar)}B();let p=o.value.length;function _(u,c){const s=c.target.innerText;s==="\u6211\u6703\u4E86"?(o.value.splice(0,1),d("emitGotIt",u)):s==="\u4E0D\u719F"?(o.value.splice(0,1),d("emitUnfamiliar",u)):s==="\u6211\u4E0D\u6703"&&(o.value.splice(0,1),d("emitDoNotKnow",u)),p--,p===0&&(alert("words are tested"),C.push({name:"homeStartBtn"})),e.value=!e.value}return(u,c)=>{const s=T("router-link");return v(),h(x,null,[r(t("div",null,[q,k(s,{to:{name:"homeStartBtn"}},{default:g(()=>[A]),_:1})],512),[[l,D(p)===0]]),(v(!0),h(x,null,K(o.value,(n,S)=>r((v(),h("div",{class:"container-md text-white vh-100",key:n.id},[t("div",F,[t("div",G,[k(s,{to:{name:"homeStartBtn"},style:{color:"white"}},{default:g(()=>[U]),_:1}),f(" "+w(n.en),1)]),r(t("div",{class:"h-100",id:"translate",onClick:c[0]||(c[0]=a=>e.value=!e.value)}," \u9EDE\u9019\u88E1\u770B\u7FFB\u8B6F ",512),[[l,e.value]]),r(t("div",null,w(n.ch),513),[[l,!e.value]]),r(t("div",E,[t("button",{type:"button",class:"btn btn-primary rounded-pill w-25",onClick:m(a=>_(n,a),["stop","prevent"])}," \u6211\u6703\u4E86 ",8,L),t("button",{type:"button",class:"btn btn-danger rounded-pill w-25",onClick:m(a=>_(n,a),["stop","prevent"])}," \u4E0D\u719F ",8,M),t("button",{type:"button",class:"btn btn-success rounded-pill w-25",onClick:m(a=>_(n,a),["stop","prevent"])}," \u6211\u4E0D\u6703 ",8,R)],512),[[l,!e.value]])])])),[[l,S===0]])),128))],64)}}};var H=N($,[["__scopeId","data-v-8e344898"]]);export{H as default};
