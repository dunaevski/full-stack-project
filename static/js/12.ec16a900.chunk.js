(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{799:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return o});var a=n(158),r=function(){return{type:a.c}},c=function(){return{type:a.b}},o=function(){return{type:a.a}}},804:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=n(23),r=n(40),c=n(797),o=n.n(c),s=function(e){if(e)return Object.entries(e).map(function(e){return Object.assign(e[1],{id:e[0]})})},i=function(e,t,n,c){return c.date=o()(c.date).toDate(),Object(r.a)({},c,{hostUid:e.uid,hostedBy:n,hostPhotoURL:t||"/full-stack-project/assets/user.png",created:Date.now(),attendees:Object(a.a)({},e.uid,{going:!0,joinDate:Date.now(),photoURL:t||"/full-stack-project/assets/user.png",displayName:n,host:!0})})},u=function(e){var t=Object.create(null);e.forEach(function(e){return t[e.id]=Object(r.a)({},e,{childNodes:[]})});var n=[];return e.forEach(function(e){e.parentId?t[e.parentId].childNodes.push(t[e.id]):n.push(t[e.id])}),n}},809:function(e,t,n){"use strict";n.d(t,"h",function(){return b}),n.d(t,"i",function(){return g}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return w}),n.d(t,"e",function(){return y}),n.d(t,"a",function(){return j}),n.d(t,"d",function(){return x}),n.d(t,"c",function(){return O}),n.d(t,"g",function(){return k});var a=n(40),r=n(23),c=n(795),o=n.n(c),s=n(808),i=n(796),u=n(797),l=n.n(u),d=n(822),p=n.n(d),h=n(156),m=n(126),f=n(799),v=n(219),b=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirebase,i=c(),e.isLoaded,e.isEmpty,(u=Object(s.a)(e,["isLoaded","isEmpty"])).dateOfBirth!==a().firebase.profile.dateOfBirth&&(u.dateOfBirth=l()(u.dateOfBirth).toDate()),t.prev=4,t.next=7,i.updateProfile(u);case 7:h.toastr.success("\u0423\u0440\u0430 \ud83c\udf89","\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0431\u044b\u043b \u0438\u0437\u043c\u0435\u043d\u0435\u043d \ud83d\udc4d"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,a){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i,u,l,d,h,m,v,b;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirebase,s=r.getFirestore,i=c(),u=s(),l=i.auth().currentUser,d="".concat(l.uid,"/user_image"),h=p()(),m={name:h},t.prev=7,n(Object(f.c)()),t.next=11,i.uploadFile(d,e,null,m);case 11:return v=t.sent,t.next=14,v.uploadTaskSnapshot.downloadURL;case 14:return b=t.sent,t.next=17,u.get("users/".concat(l.uid));case 17:if(t.sent.data().photoURL){t.next=23;break}return t.next=21,i.updateProfile({photoURL:b});case 21:return t.next=23,l.updateProfile({photoURL:b});case 23:return t.next=25,u.add({collection:"users",doc:l.uid,subcollections:[{collection:"photos"}]},{name:h,url:b});case 25:n(Object(f.b)()),t.next=33;break;case 28:throw t.prev=28,t.t0=t.catch(7),console.log(t.t0),n(Object(f.a)()),new Error("Houston, we have a problem with upload");case 33:case"end":return t.stop()}},t,this,[[7,28]])}));return function(e,n,a){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i,u,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirebase,s=r.getFirestore,i=c(),u=s(),l=i.auth().currentUser,t.prev=4,t.next=7,i.deleteFile("".concat(l.uid,"/user_image/").concat(e.name));case 7:return t.next=9,u.delete({collection:"users",doc:l.uid,subcollections:[{collection:"photos",doc:e.id}]});case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t.catch(4),console.log(t.t0),new Error("Houston, we have a problem with delete");case 15:case"end":return t.stop()}},t,this,[[4,11]])}));return function(e,n,a){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a){var c,s,i,u,l,d,p,h,m,b;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.c)()),c=v.a.firestore(),s=v.a.auth().currentUser,i=new Date(Date.now()),u=c.collection("users").doc(s.uid),l=c.collection("event_attendee"),t.prev=6,d=c.batch(),t.next=10,d.update(u,{photoURL:e.url});case 10:return t.next=12,l.where("userUid","==",s.uid).where("eventDate",">",i);case 12:return p=t.sent,t.next=15,p.get();case 15:h=t.sent,m=0;case 17:if(!(m<h.docs.length)){t.next=28;break}return t.next=20,c.collection("events").doc(h.docs[m].data().eventId);case 20:return b=t.sent,t.next=23,b.get();case 23:t.sent.data().hostUid===s.uid?d.update(b,Object(r.a)({hostPhotoURL:e.url},"attendees.".concat(s.uid,".photoURL"),e.url)):d.update(b,Object(r.a)({},"attendees.".concat(s.uid,".photoURL"),e.url));case 25:m++,t.next=17;break;case 28:return console.log(d),t.next=31,d.commit();case 31:n(Object(f.b)()),t.next=39;break;case 34:throw t.prev=34,t.t0=t.catch(6),console.log(t.t0),n(Object(f.a)()),new Error("Houston, we have a problem set photo");case 39:case"end":return t.stop()}},t,this,[[6,34]])}));return function(e,n){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a){var c,s,u,l,d,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.c)()),c=v.a.firestore(),s=v.a.auth().currentUser,u=a().firebase.profile,l={going:!0,joinDate:Date.now(),photoURL:u.photoURL||"/full-stack-project/assets/user.png",displayName:u.displayName,host:!1},t.prev=5,d=c.collection("events").doc(e.id),p=c.collection("event_attendee").doc("".concat(e.id,"_").concat(s.uid)),t.next=10,c.runTransaction(function(){var t=Object(i.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get(d);case 2:return t.next=4,n.update(d,Object(r.a)({},"attendees.".concat(s.uid),l));case 4:return t.next=6,n.set(p,{eventId:e.id,userUid:s.uid,eventDate:e.date,host:!1});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 10:n(Object(f.b)()),h.toastr.success("\u0423\u0440\u0430 \ud83c\udf89","\u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435"),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(5),console.log(t.t0),n(Object(f.a)()),h.toastr.error("\u0423\u043f\u0441...","\u0423 \u043d\u0430\u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c");case 19:case"end":return t.stop()}},t,this,[[5,14]])}));return function(e,n){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,c){var s,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.getFirestore,i=s(),u=i.auth().currentUser,t.prev=3,t.next=6,i.update("events/".concat(e.id),Object(r.a)({},"attendees.".concat(u.uid),i.FieldValue.delete()));case 6:return t.next=8,i.delete("event_attendee/".concat(e.id,"_").concat(u.uid));case 8:h.toastr.success("\u0423\u0440\u0430 \ud83c\udf89","\u0412\u044b \u043e\u0442\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u043e\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0),h.toastr.error("\u0423\u043f\u0441...","\u0423 \u043d\u0430\u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043e\u0442\u043f\u0438\u0441\u043a\u043e\u0439");case 15:case"end":return t.stop()}},t,this,[[3,11]])}));return function(e,n,a){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(i.a)(o.a.mark(function n(r,c){var s,i,u,l,d,p,h,b;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r(Object(f.c)()),s=v.a.firestore(),i=new Date(Date.now()),u=s.collection("event_attendee"),n.t0=t,n.next=1===n.t0?7:2===n.t0?9:3===n.t0?11:13;break;case 7:return l=u.where("userUid","==",e).where("eventDate","<=",i).orderBy("eventDate","desc"),n.abrupt("break",14);case 9:return l=u.where("userUid","==",e).where("eventDate",">=",i).orderBy("eventDate"),n.abrupt("break",14);case 11:return l=u.where("userUid","==",e).where("host","==",!0).orderBy("eventDate","desc"),n.abrupt("break",14);case 13:l=u.where("userUid","==",e).orderBy("eventDate","desc");case 14:return n.prev=14,n.next=17,l.get();case 17:d=n.sent,p=[],h=0;case 20:if(!(h<d.docs.length)){n.next=28;break}return n.next=23,s.collection("events").doc(d.docs[h].data().eventId).get();case 23:b=n.sent,p.push(Object(a.a)({},b.data(),{id:b.id}));case 25:h++,n.next=20;break;case 28:r({type:m.c,payload:{events:p}}),r(Object(f.b)()),n.next=36;break;case 32:n.prev=32,n.t1=n.catch(14),console.log(n.t1),r(Object(f.a)());case 36:case"end":return n.stop()}},n,this,[[14,32]])}));return function(e,t){return n.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirestore,s=c(),i=s.auth().currentUser,t.prev=3,t.next=6,s.set({collection:"users",doc:i.uid,subcollections:[{collection:"following",doc:e.id}]},{city:e.city||"\u0411\u0435\u0437 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",displayName:e.displayName,photoURL:e.photoURL||"/full-stack-project/assets/user.png"});case 6:t.next=13;break;case 8:throw t.prev=8,t.t0=t.catch(3),console.log(t.t0),n(Object(f.a)()),new Error("Houston, we have a problem with upload");case 13:case"end":return t.stop()}},t,this,[[3,8]])}));return function(e,n,a){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirestore,s=c(),i=s.auth().currentUser,t.prev=3,t.next=6,s.delete({collection:"users",doc:i.uid,subcollections:[{collection:"following",doc:e.id}]});case 6:t.next=13;break;case 8:throw t.prev=8,t.t0=t.catch(3),console.log(t.t0),n(Object(f.a)()),new Error("Houston, we have a problem with upload");case 13:case"end":return t.stop()}},t,this,[[3,8]])}));return function(e,n,a){return t.apply(this,arguments)}}()}},815:function(e,t,n){"use strict";n.d(t,"c",function(){return v}),n.d(t,"e",function(){return b}),n.d(t,"b",function(){return g}),n.d(t,"d",function(){return E}),n.d(t,"a",function(){return w});var a=n(40),r=n(795),c=n.n(r),o=n(796),s=n(156),i=n(126),u=n(799),l=n(797),d=n.n(l),p=n(804),h=n(219),m=n(805),f=n.n(m),v=function(e){return function(){var t=Object(o.a)(c.a.mark(function t(n,a,r){var o,i,u,l,d,h,m;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.getFirestore,i=o(),u=i.auth().currentUser,l=a().firebase.profile.photoURL,d=a().firebase.profile.displayName,h=Object(p.b)(u,l,d,e),t.prev=6,t.next=9,i.add("events",h);case 9:return m=t.sent,t.next=12,i.set("event_attendee/".concat(m.id,"_").concat(u.uid,"}"),{eventId:m.id,userUid:u.uid,eventDate:e.date,host:!0});case 12:s.toastr.success("\u0423\u0441\u043f\u0435\u0445!","\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \ud83d\udc4d"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(6),s.toastr.error("\u0423\u043f\u0441...","\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a \ud83d\ude0c");case 18:case"end":return t.stop()}},t,this,[[6,15]])}));return function(e,n,a){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(c.a.mark(function t(n,a){var r,o,i,l,p,m,v,b;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n(Object(u.c)()),r=h.a.firestore(),e.date!==a().firestore.ordered.events[0].date&&(e.date=d()(e.date).toDate()),t.prev=3,o=r.collection("events").doc(e.id),0===f()(a().firestore.ordered.events[0].date.toDate(),e.date)){t.next=31;break}return i=r.batch(),t.next=10,i.update(o,e);case 10:return l=r.collection("event_attendee"),t.next=13,l.where("eventId","==",e.id);case 13:return p=t.sent,t.next=16,p.get();case 16:m=t.sent,v=0;case 18:if(!(v<m.docs.length)){t.next=27;break}return t.next=21,r.collection("event_attendee").doc(m.docs[v].id);case 21:return b=t.sent,t.next=24,i.update(b,{eventDate:e.date});case 24:v++,t.next=18;break;case 27:return t.next=29,i.commit();case 29:t.next=33;break;case 31:return t.next=33,o.update(e);case 33:n(Object(u.b)()),s.toastr.success("\u0423\u0441\u043f\u0435\u0445!","\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e \ud83d\udc4d"),t.next=41;break;case 37:t.prev=37,t.t0=t.catch(3),n(Object(u.a)()),s.toastr.error("\u0423\u043f\u0441...","\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a \ud83d\ude0c");case 41:case"end":return t.stop()}},t,this,[[3,37]])}));return function(e,n){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(o.a)(c.a.mark(function n(a,r,o){var i,u,l;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:i=o.getFirestore,u=i(),l=e?"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435?":"\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e, \u0432\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?";try{s.toastr.confirm(l,{onOk:function(){return u.update("events/".concat(t),{cancelled:e})}})}catch(a){console.log(a)}case 4:case"end":return n.stop()}},n,this)}));return function(e,t,a){return n.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(c.a.mark(function t(n,r){var o,s,l,d,p,m,f,v,b;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=new Date(Date.now()),s=h.a.firestore(),l=s.collection("events"),t.prev=3,n(Object(u.c)()),t.t0=e,!t.t0){t.next=10;break}return t.next=9,s.collection("events").doc(e.id).get();case 9:t.t0=t.sent;case 10:return d=t.t0,p=e?l.where("date",">=",o).orderBy("date").startAfter(d).limit(2):l.where("date",">=",o).orderBy("date").limit(2),t.next=14,p.get();case 14:if(0!==(m=t.sent).docs.length){t.next=18;break}return n(Object(u.b)()),t.abrupt("return",m);case 18:for(f=[],v=0;v<m.docs.length;v++)b=Object(a.a)({},m.docs[v].data(),{id:m.docs[v].id}),f.push(b);return n({type:i.c,payload:{events:f}}),n(Object(u.b)()),t.abrupt("return",m);case 25:t.prev=25,t.t1=t.catch(3),console.log(t.t1),n(Object(u.a)());case 29:case"end":return t.stop()}},t,this,[[3,25]])}));return function(e,n){return t.apply(this,arguments)}}()},w=function(e,t,n){return function(){var a=Object(o.a)(c.a.mark(function a(r,o,i){var u,l,d,p,h;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u=i.getFirebase,l=u(),d=o().firebase.profile,p=l.auth().currentUser,h={parentId:n,displayName:d.displayName,photoURL:d.photoURL||"/full-stack-project/assets/user.png",uid:p.uid,text:t.comment,date:Date.now()},a.prev=5,a.next=8,l.push("event_chat/".concat(e),h);case 8:a.next=14;break;case 10:a.prev=10,a.t0=a.catch(5),console.log(a.t0),s.toastr.error("\u0423\u043f\u0441...","\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a \ud83d\ude0c");case 14:case"end":return a.stop()}},a,this,[[5,10]])}));return function(e,t,n){return a.apply(this,arguments)}}()}},816:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(124);t.a=function(e){var t=e.input,n=e.rows,a=(e.type,e.placeholder),o=e.meta,s=o.touched,i=o.error;return r.a.createElement(c.i.Field,{error:s&&!!i},r.a.createElement("textarea",Object.assign({},t,{placeholder:a,rows:n})),s&&i&&r.a.createElement(c.o,{basic:!0,color:"red"},i))}},994:function(e,t,n){"use strict";n.r(t);var a=n(795),r=n.n(a),c=n(796),o=n(150),s=n(151),i=n(154),u=n(152),l=n(155),d=n(0),p=n.n(d),h=n(153),m=n(156),f=n(125),v=n(72),b=n(124),g=n(821),E=n.n(g),w=n(806),y=n.n(w),j=n(303),x={filter:"brightness(30%)"},O={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},k=function(e){var t,n=e.event,a=e.isHost,r=e.isGoing,c=e.goingToEvent,o=e.loading,s=e.cancelGoingToEvent,i=e.authenticated,u=e.openModal;return n.date&&(t=n.date.toDate()),p.a.createElement(b.t.Group,null,p.a.createElement(b.t,{basic:!0,attached:"top",style:{padding:"0"}},p.a.createElement(b.m,{src:"/full-stack-project/assets/categoryImages/".concat(n.category,".jpg"),fluid:!0,style:x}),p.a.createElement(b.t,{basic:!0,style:O},p.a.createElement(b.n.Group,null,p.a.createElement(b.n,null,p.a.createElement(b.n.Content,null,p.a.createElement(b.k,{size:"huge",content:n.title,style:{color:"white"}}),p.a.createElement("p",null,E()(t,"ddd DD MMM YYYY",{locale:y.a})),p.a.createElement("p",null,"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440: ",p.a.createElement("strong",null,n.hostedBy))))))),p.a.createElement(b.t,{attached:"bottom"},!a&&p.a.createElement("div",null,r&&!n.cancelled&&p.a.createElement(b.a,{onClick:function(){return s(n)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),!r&&i&&!n.cancelled&&p.a.createElement(b.a,{loading:o,onClick:function(){return c(n)},color:"teal"},"\u041f\u0420\u0418\u0421\u041e\u0415\u0414\u0418\u041d\u0418\u0422\u042c\u0421\u042f \u041a \u0421\u041e\u0411\u042b\u0422\u0418\u042e"),!i&&!n.cancelled&&p.a.createElement(b.a,{loading:o,onClick:function(){return u("UnauthModal")},color:"teal"},"\u041f\u0420\u0418\u0421\u041e\u0415\u0414\u0418\u041d\u0418\u0422\u042c\u0421\u042f \u041a \u0421\u041e\u0411\u042b\u0422\u0418\u042e"),n.cancelled&&!a&&p.a.createElement(b.o,{size:"large",color:"red",content:"\u042d\u0442\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043e"})),a&&p.a.createElement(b.a,{as:j.a,to:"/manage/".concat(n.id),color:"orange"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435")))},C=n(971),U=function(e){var t=e.lat,n=e.lng,a=[t,n];return p.a.createElement(b.t,{attached:"bottom",style:{padding:0}},p.a.createElement(C.Map,{onAPIAvailable:function(){console.log("API loaded")},style:{height:"100px",width:"100%"},center:a,zoom:14},p.a.createElement(C.Marker,{lat:t,lon:n})))},D=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showMap:!1},n.showMapToggle=function(){n.setState(function(e){return{showMap:!e.showMap}})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({showMap:!1})}},{key:"render",value:function(){var e,t=this.props.event;return t.date&&(e=t.date.toDate()),p.a.createElement(b.t.Group,null,p.a.createElement(b.t,{attached:"top"},p.a.createElement(b.j,null,p.a.createElement(b.j.Column,{width:1},p.a.createElement(b.l,{size:"large",color:"teal",name:"info"})),p.a.createElement(b.j.Column,{width:15},p.a.createElement("p",null,t.description)))),p.a.createElement(b.t,{attached:!0},p.a.createElement(b.j,{verticalAlign:"middle"},p.a.createElement(b.j.Column,{width:1},p.a.createElement(b.l,{name:"calendar",size:"large",color:"teal"})),p.a.createElement(b.j.Column,{width:15},p.a.createElement("span",null,E()(e,"dddd Do MMMM",{locale:y.a})," \u0432"," ",E()(e,"HH:mm"))))),p.a.createElement(b.t,{attached:!0},p.a.createElement(b.j,{verticalAlign:"middle"},p.a.createElement(b.j.Column,{width:1},p.a.createElement(b.l,{name:"marker",size:"large",color:"teal"})),p.a.createElement(b.j.Column,{width:11},p.a.createElement("span",null,t.venue," ")),p.a.createElement(b.j.Column,{width:4},p.a.createElement(b.a,{onClick:this.showMapToggle,color:"teal",size:"tiny",content:this.state.showMap?"\u0421\u043f\u0440\u044f\u0442\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443"})))),this.state.showMap&&p.a.createElement(U,{lat:t.venueLatLng.lat,lng:t.venueLatLng.lng}))}}]),t}(d.Component),L=n(306),F=n(305),R=n(816),I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleCommentSubmit=function(e){var t=n.props,a=t.addEventComment,r=t.reset,c=t.eventId,o=t.closeForm,s=t.parentId;a(c,e,s),r(),0!==s&&o()},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement(b.i,{onSubmit:this.props.handleSubmit(this.handleCommentSubmit)},p.a.createElement(L.a,{name:"comment",type:"text",component:R.a,rows:2}),p.a.createElement(b.a,{content:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c",labelPosition:"left",icon:"edit",primary:!0}))}}]),t}(d.Component),M=Object(F.a)({Fields:"comment"})(I),A=n(888),_=n.n(A),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showReplyForm:!1,selectedCommentId:null},n.handleOpenReplyForm=function(e){return function(){n.setState({showReplyForm:!0,selectedCommentId:e})}},n.handleCloseReplyForm=function(){n.setState({showReplyForm:!1})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.addEventComment,a=t.eventId,r=t.eventChat,c=this.state,o=c.showReplyForm,s=c.selectedCommentId;return p.a.createElement("div",null,p.a.createElement(b.t,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"}},p.a.createElement(b.k,null,"\u0427\u0430\u0442")),p.a.createElement(b.t,{attached:!0},p.a.createElement(b.c.Group,null,r&&r.map(function(t){return p.a.createElement(b.c,{key:t.id},p.a.createElement(b.c.Avatar,{src:t.photoURL||"/full-stack-project/assets/user.png"}),p.a.createElement(b.c.Content,null,p.a.createElement(b.c.Author,{as:j.a,to:"/profile/".concat(t.uid)},t.displayName),p.a.createElement(b.c.Metadata,null,p.a.createElement("div",null,_()(t.date,Date.now(),{locale:y.a})," ","\u0442\u043e\u043c\u0443 \u043d\u0430\u0437\u0430\u0434")),p.a.createElement(b.c.Text,null,t.text),p.a.createElement(b.c.Actions,null,p.a.createElement(b.c.Action,{onClick:e.handleOpenReplyForm(t.id)},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"),o&&s===t.id&&p.a.createElement(M,{addEventComment:n,eventId:a,form:"reply_".concat(t.id),closeForm:e.handleCloseReplyForm,parentId:t.id}))),t.childNodes&&t.childNodes.map(function(t){return p.a.createElement(b.c.Group,null,p.a.createElement(b.c,{key:t.id},p.a.createElement(b.c.Avatar,{src:t.photoURL||"/full-stack-project/assets/user.png"}),p.a.createElement(b.c.Content,null,p.a.createElement(b.c.Author,{as:j.a,to:"/profile/".concat(t.uid)},t.displayName),p.a.createElement(b.c.Metadata,null,p.a.createElement("div",null,_()(t.date,Date.now(),{locale:y.a})," ","\u0442\u043e\u043c\u0443 \u043d\u0430\u0437\u0430\u0434")),p.a.createElement(b.c.Text,null,t.text),p.a.createElement(b.c.Actions,null,p.a.createElement(b.c.Action,{onClick:e.handleOpenReplyForm(t.id)},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"),o&&s===t.id&&p.a.createElement(M,{addEventComment:n,eventId:a,form:"reply_".concat(t.id),closeForm:e.handleCloseReplyForm,parentId:t.parentId})))))}))})),p.a.createElement(M,{parentId:0,addEventComment:n,eventId:a,form:"newComment"})))}}]),t}(d.Component),T=function(e){var t=e.attendees;return p.a.createElement("div",null,p.a.createElement(b.t,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal"},t&&t.length," ",t&&1===t.length?"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a":"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"),p.a.createElement(b.t,{attached:!0},p.a.createElement(b.p,{relaxed:!0,divided:!0},t&&t.map(function(e){return p.a.createElement(b.n,{key:e.id,style:{position:"relative"}},e.host&&p.a.createElement(b.o,{style:{position:"absolute"},color:"orange",ribbon:"right"},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"),p.a.createElement(b.n.Image,{size:"tiny",src:e.photoURL}),p.a.createElement(b.n.Content,{verticalAlign:"middle"},p.a.createElement(b.n.Header,{as:"h3"},p.a.createElement(j.a,{to:"/profile/".concat(e.id)},e.displayName))))}))))},B=n(55),G=n(804),H=n(809),S=n(815),z=n(300),P={goingToEvent:H.e,cancelGoingToEvent:H.a,addEventComment:S.a,openModal:z.b},Y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={initialLoading:!0},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.firestore,a=t.match,e.next=3,n.get("events/".concat(a.params.id));case 3:return e.sent.exists||(m.toastr.error("\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e","\u042d\u0442\u043e \u043d\u0435 \u0442\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0438\u0441\u043a\u0430\u043b\u0438 \ud83e\udd7a"),this.props.history.push("/error")),e.next=7,n.setListener("events/".concat(a.params.id));case 7:this.setState({initialLoading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.firestore,a=t.match,e.next=3,n.unsetListener("events/".concat(a.params.id));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.event,n=e.auth,a=e.goingToEvent,r=e.cancelGoingToEvent,c=e.addEventComment,o=e.eventChat,s=e.loading,i=e.openModal,u=e.requesting,l=e.match,d=t&&t.attendees&&Object(G.c)(t.attendees).sort(function(e,t){return e.joinDate-t.joinDate}),h=t.hostUid===n.uid,m=d&&d.some(function(e){return e.id===n.uid}),v=!Object(f.isEmpty)(o)&&Object(G.a)(o),g=n.isLoaded&&!n.isEmpty;return u["events/".concat(l.params.id)]||this.state.initialLoading?p.a.createElement(B.a,{inverted:!0}):p.a.createElement(b.j,null,p.a.createElement(b.j.Column,{width:11},p.a.createElement(k,{event:t,isHost:h,loading:s,isGoing:m,goingToEvent:a,cancelGoingToEvent:r,authenticated:g,openModal:i}),p.a.createElement(D,{event:t}),g&&p.a.createElement(N,{addEventComment:c,eventId:t.id,eventChat:v})),p.a.createElement(b.j.Column,{width:5},p.a.createElement(T,{attendees:d})))}}]),t}(d.Component);t.default=Object(v.compose)(f.withFirestore,Object(h.connect)(function(e,t){var n={};return e.firestore.ordered.events&&e.firestore.ordered.events[0]&&(n=e.firestore.ordered.events[0]),{requesting:e.firestore.status.requesting,event:n,loading:e.async.loading,auth:e.firebase.auth,eventChat:!Object(f.isEmpty)(e.firebase.data.event_chat)&&Object(G.c)(e.firebase.data.event_chat[t.match.params.id])}},P),Object(f.firebaseConnect)(function(e){return e.auth.isLoaded&&!e.auth.isEmpty&&["event_chat/".concat(e.match.params.id)]}))(Y)}}]);
//# sourceMappingURL=12.ec16a900.chunk.js.map