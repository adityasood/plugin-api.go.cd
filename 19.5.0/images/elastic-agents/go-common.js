var centerOn=function(t,n){var e=t.bbox(),r=e.x+e.width/2,i=e.y+e.height/2;return n.center(r,i),draw.group().add(t).add(n)},centerYOf=function(t){var n=t.bbox();return n.y+n.height/2},centerXOf=function(t){var n=t.bbox();return n.x+n.width/2},leftXOf=function(t){return t.bbox().x},rightXOf=function(t){var n=t.bbox();return n.x+n.width},box=function(t,n,e,r){var r=r||{},i=draw.rect(n,e).attr({fill:r.fill||"#bad"});return centerOn(i,draw.plain(t))},drawArrow=function(t,n){var e=(t.bbox(),n.bbox(),leftXOf(t)),r=rightXOf(n),i=centerYOf(t),a=centerYOf(n),o=new SVG.PathArray([["M",e,i],["L",r,a]]),d=draw.path(o.toString()),f=d.pointAt(10),x=d.pointAt(d.length()-40),c=new SVG.PathArray([["M",f.x,f.y],["L",x.x,x.y]]);return d.plot(c.toString()).stroke({width:3}).marker("end",arrowHead)},sendMessage=function(t,n,e,r){var r=r||{},i=r.radius||40,a=r.duration||Tweene.defaultDuration,o=(r.complete,draw.circle(i).attr({fill:r.fill||"#faee0f"})),d=draw[-1==n.indexOf("\n")?"plain":"text"](n).font({size:10}),f=centerOn(o,d),x=f.center(t.pointAt(0).x,t.pointAt(0).y).hide(),c="#"+x.id(),h=x.rbox().width/2,u=x.rbox().height/2,l=t.pointAt(0).x-h,w=t.pointAt(0).y-u,g=t.pointAt(t.length()).x-h,b=t.pointAt(t.length()).y-u,s=Tweene.line(),p=Tweene.get(c).from({x:l,y:w}).to({translateX:g,translateY:b}).options({duration:a,begin:function(){d.text(n),x.show()}});r.chain&&r.chain(s);var O=Tweene.get(c).to({translateX:l,translateY:w}).options({duration:a,begin:function(){d.text(e)},complete:function(){x.hide()}});return s.add(p),s.add(O),r.forChaining?[p,O]:s},elasticAgentPing=function(t,n,e,r,i,a){var o=sendMessage(t,e,r,$.extend({},{forChaining:!0})),d=sendMessage(n,i,a,$.extend({},{forChaining:!0})),f=Tweene.line();return f.add(o[0]),f.add(d[0]),f.add(d[1]),f.add(o[1]),f},showText=function(t,n){return t[-1==n.indexOf("\n")?"plain":"text"](n).x(Math.max(25,200-t.rbox().width/2))};