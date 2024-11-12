import{a as X,c as N,d as J}from"./chunk-HOLNC4VV.mjs";import"./chunk-BWM7Q77P.mjs";import"./chunk-OI75NVUV.mjs";import"./chunk-ZWGF5XML.mjs";import"./chunk-7H6T7AZC.mjs";import"./chunk-U6LOUQAF.mjs";import"./chunk-3SVD6B67.mjs";import{a as O}from"./chunk-BOP2KBYH.mjs";import{a as F}from"./chunk-6XGRHI2A.mjs";import{m as U}from"./chunk-JCRXNOLL.mjs";import"./chunk-TI4EEUUG.mjs";import{Ca as R,Ga as W,L as z,M as P,X as t,b,fa as L}from"./chunk-XP6OA2RL.mjs";import"./chunk-BKDDFIKN.mjs";import"./chunk-YPUTD6PB.mjs";import"./chunk-6BY5RJGC.mjs";import{a as g}from"./chunk-GTKDMUJJ.mjs";var A={},Z=g((e,n)=>{A[e]=n},"set"),K=g(e=>A[e],"get"),Y=g(()=>Object.keys(A),"keys"),Q=g(()=>Y().length,"size"),v={get:K,set:Z,keys:Y,size:Q};var V=g(e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),"drawStartState"),D=g(e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),"drawDivider"),tt=g((e,n)=>{let s=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(n.id),d=s.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",d.width+2*t().state.padding).attr("height",d.height+2*t().state.padding).attr("rx",t().state.radius),s},"drawSimpleState"),et=g((e,n)=>{let s=g(function(p,y,w){let k=p.append("tspan").attr("x",2*t().state.padding).text(y);w||k.attr("dy",t().state.textHeight)},"addTspan"),r=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(n.descriptions[0]).node().getBBox(),h=r.height,x=e.append("text").attr("x",t().state.padding).attr("y",h+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description"),i=!0,o=!0;n.descriptions.forEach(function(p){i||(s(x,p,o),o=!1),i=!1});let m=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+h+t().state.dividerMargin/2).attr("y2",t().state.padding+h+t().state.dividerMargin/2).attr("class","descr-divider"),f=x.node().getBBox(),c=Math.max(f.width,r.width);return m.attr("x2",c+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c+2*t().state.padding).attr("height",f.height+h+2*t().state.padding).attr("rx",t().state.radius),e},"drawDescrState"),$=g((e,n,s)=>{let d=t().state.padding,r=2*t().state.padding,h=e.node().getBBox(),x=h.width,i=h.x,o=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(n.id),f=o.node().getBBox().width+r,c=Math.max(f,x);c===x&&(c=c+r);let p,y=e.node().getBBox();n.doc,p=i-d,f>x&&(p=(x-c)/2+d),Math.abs(i-y.x)<d&&f>x&&(p=i-(f-x)/2);let w=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",p).attr("y",w).attr("class",s?"alt-composit":"composit").attr("width",c).attr("height",y.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),o.attr("x",p+d),f<=x&&o.attr("x",i+(c-r)/2-f/2+d),e.insert("rect",":first-child").attr("x",p).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",p).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",y.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},"addTitleAndBox"),it=g(e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),"drawEndState"),nt=g((e,n)=>{let s=t().state.forkWidth,d=t().state.forkHeight;if(n.parentId){let r=s;s=d,d=r}return e.append("rect").style("stroke","black").style("fill","black").attr("width",s).attr("height",d).attr("x",t().state.padding).attr("y",t().state.padding)},"drawForkJoinState");var at=g((e,n,s,d)=>{let r=0,h=d.append("text");h.style("text-anchor","start"),h.attr("class","noteText");let x=e.replace(/\r\n/g,"<br/>");x=x.replace(/\n/g,"<br/>");let i=x.split(z.lineBreakRegex),o=1.25*t().state.noteMargin;for(let m of i){let f=m.trim();if(f.length>0){let c=h.append("tspan");if(c.text(f),o===0){let p=c.node().getBBox();o+=p.height}r+=o,c.attr("x",n+t().state.noteMargin),c.attr("y",s+r+1.25*t().state.noteMargin)}}return{textWidth:h.node().getBBox().width,textHeight:r}},"_drawLongText"),rt=g((e,n)=>{n.attr("class","state-note");let s=n.append("rect").attr("x",0).attr("y",t().state.padding),d=n.append("g"),{textWidth:r,textHeight:h}=at(e,0,0,d);return s.attr("height",h+2*t().state.noteMargin),s.attr("width",r+t().state.noteMargin*2),s},"drawNote"),C=g(function(e,n){let s=n.id,d={id:s,label:n.id,width:0,height:0},r=e.append("g").attr("id",s).attr("class","stateGroup");n.type==="start"&&V(r),n.type==="end"&&it(r),(n.type==="fork"||n.type==="join")&&nt(r,n),n.type==="note"&&rt(n.note.text,r),n.type==="divider"&&D(r),n.type==="default"&&n.descriptions.length===0&&tt(r,n),n.type==="default"&&n.descriptions.length>0&&et(r,n);let h=r.node().getBBox();return d.width=h.width+2*t().state.padding,d.height=h.height+2*t().state.padding,v.set(s,d),d},"drawState"),I=0,_=g(function(e,n,s){let d=g(function(o){switch(o){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}},"getRelationType");n.points=n.points.filter(o=>!Number.isNaN(o.y));let r=n.points,h=R().x(function(o){return o.x}).y(function(o){return o.y}).curve(W),x=e.append("path").attr("d",h(r)).attr("id","edge"+I).attr("class","transition"),i="";if(t().state.arrowMarkerAbsolute&&(i=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,i=i.replace(/\(/g,"\\("),i=i.replace(/\)/g,"\\)")),x.attr("marker-end","url("+i+"#"+d(N.relationType.DEPENDENCY)+"End)"),s.title!==void 0){let o=e.append("g").attr("class","stateLabel"),{x:m,y:f}=U.calcLabelPosition(n.points),c=z.getRows(s.title),p=0,y=[],w=0,k=0;for(let a=0;a<=c.length;a++){let u=o.append("text").attr("text-anchor","middle").text(c[a]).attr("x",m).attr("y",f+p),l=u.node().getBBox();w=Math.max(w,l.width),k=Math.min(k,l.x),b.info(l.x,m,f+p),p===0&&(p=u.node().getBBox().height,b.info("Title height",p,f)),y.push(u)}let M=p*c.length;if(c.length>1){let a=(c.length-1)*p*.5;y.forEach((u,l)=>u.attr("y",f+l*p-a)),M=p*c.length}let H=o.node().getBBox();o.insert("rect",":first-child").attr("class","box").attr("x",m-w/2-t().state.padding/2).attr("y",f-M/2-t().state.padding/2-3.5).attr("width",w+t().state.padding).attr("height",M+t().state.padding),b.info(H)}I++},"drawEdge");var S,G={},ot=g(function(){},"setConf"),st=g(function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),dt=g(function(e,n,s,d){S=t().state;let r=t().securityLevel,h;r==="sandbox"&&(h=L("#i"+n));let x=r==="sandbox"?L(h.nodes()[0].contentDocument.body):L("body"),i=r==="sandbox"?h.nodes()[0].contentDocument:document;b.debug("Rendering diagram "+e);let o=x.select(`[id='${n}']`);st(o);let m=d.db.getRootDoc();j(m,o,void 0,!1,x,i,d);let f=S.padding,c=o.node().getBBox(),p=c.width+f*2,y=c.height+f*2,w=p*1.75;P(o,y,w,S.useMaxWidth),o.attr("viewBox",`${c.x-S.padding}  ${c.y-S.padding} `+p+" "+y)},"draw"),ct=g(e=>e?e.length*S.fontSizeFactor:1,"getLabelWidth"),j=g((e,n,s,d,r,h,x)=>{let i=new F({compound:!0,multigraph:!0}),o,m=!0;for(o=0;o<e.length;o++)if(e[o].stmt==="relation"){m=!1;break}s?i.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:m?1:S.edgeLengthFactor,nodeSep:m?1:50,isMultiGraph:!0}):i.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:m?1:S.edgeLengthFactor,nodeSep:m?1:50,ranker:"tight-tree",isMultiGraph:!0}),i.setDefaultEdgeLabel(function(){return{}}),x.db.extract(e);let f=x.db.getStates(),c=x.db.getRelations(),p=Object.keys(f),y=!0;for(let a of p){let u=f[a];s&&(u.parentId=s);let l;if(u.doc){let B=n.append("g").attr("id",u.id).attr("class","stateGroup");if(l=j(u.doc,B,u.id,!d,r,h,x),y){B=$(B,u,d);let E=B.node().getBBox();l.width=E.width,l.height=E.height+S.padding/2,G[u.id]={y:S.compositTitleSize}}else{let E=B.node().getBBox();l.width=E.width,l.height=E.height}}else l=C(n,u,i);if(u.note){let B={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},E=C(n,B,i);u.note.position==="left of"?(i.setNode(l.id+"-note",E),i.setNode(l.id,l)):(i.setNode(l.id,l),i.setNode(l.id+"-note",E)),i.setParent(l.id,l.id+"-group"),i.setParent(l.id+"-note",l.id+"-group")}else i.setNode(l.id,l)}b.debug("Count=",i.nodeCount(),i);let w=0;c.forEach(function(a){w++,b.debug("Setting edge",a),i.setEdge(a.id1,a.id2,{relation:a,width:ct(a.title),height:S.labelHeight*z.getRows(a.title).length,labelpos:"c"},"id"+w)}),O(i),b.debug("Graph after layout",i.nodes());let k=n.node();i.nodes().forEach(function(a){a!==void 0&&i.node(a)!==void 0?(b.warn("Node "+a+": "+JSON.stringify(i.node(a))),r.select("#"+k.id+" #"+a).attr("transform","translate("+(i.node(a).x-i.node(a).width/2)+","+(i.node(a).y+(G[a]?G[a].y:0)-i.node(a).height/2)+" )"),r.select("#"+k.id+" #"+a).attr("data-x-shift",i.node(a).x-i.node(a).width/2),h.querySelectorAll("#"+k.id+" #"+a+" .divider").forEach(l=>{let B=l.parentElement,E=0,T=0;B&&(B.parentElement&&(E=B.parentElement.getBBox().width),T=parseInt(B.getAttribute("data-x-shift"),10),Number.isNaN(T)&&(T=0)),l.setAttribute("x1",0-T+8),l.setAttribute("x2",E-T-8)})):b.debug("No Node "+a+": "+JSON.stringify(i.node(a)))});let M=k.getBBox();i.edges().forEach(function(a){a!==void 0&&i.edge(a)!==void 0&&(b.debug("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(i.edge(a))),_(n,i.edge(a),i.edge(a).relation))}),M=k.getBBox();let H={id:s||"root",label:s||"root",width:0,height:0};return H.width=M.width+2*S.padding,H.height=M.height+2*S.padding,b.debug("Doc rendered",H,i),H},"renderDoc"),q={setConf:ot,draw:dt};var Rt={parser:X,db:N,renderer:q,styles:J,init:g(e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()},"init")};export{Rt as diagram};
