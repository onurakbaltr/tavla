(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const kl="182",Or={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xf=0,Dc=1,qf=2,fa=1,iu=2,fs=3,zi=0,dn=1,On=2,gi=0,Br=1,Lc=2,Ic=3,Nc=4,Yf=5,nr=100,Zf=101,Kf=102,$f=103,Jf=104,jf=200,Qf=201,td=202,ed=203,Ro=204,Po=205,nd=206,id=207,rd=208,sd=209,ad=210,od=211,ld=212,cd=213,hd=214,Do=0,Lo=1,Io=2,Hr=3,No=4,Uo=5,Fo=6,Oo=7,ru=0,ud=1,fd=2,ti=0,su=1,au=2,ou=3,Vl=4,lu=5,cu=6,hu=7,uu=300,fr=301,Wr=302,Bo=303,zo=304,La=306,pi=1e3,_i=1001,ko=1002,Ke=1003,dd=1004,Vs=1005,en=1006,za=1007,rr=1008,bn=1009,fu=1010,du=1011,Es=1012,Gl=1013,ii=1014,Jn=1015,Mi=1016,Hl=1017,Wl=1018,Ts=1020,pu=35902,mu=35899,_u=1021,gu=1022,Xn=1023,Si=1026,sr=1027,xu=1028,Xl=1029,Xr=1030,ql=1031,Yl=1033,da=33776,pa=33777,ma=33778,_a=33779,Vo=35840,Go=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Ko=37489,$o=37490,Jo=37491,jo=37808,Qo=37809,tl=37810,el=37811,nl=37812,il=37813,rl=37814,sl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,fl=36492,dl=36494,pl=36495,ml=36283,_l=36284,gl=36285,xl=36286,pd=3200,vu=0,md=1,Di="",En="srgb",qr="srgb-linear",ya="linear",ue="srgb",xr=7680,Uc=519,_d=512,gd=513,xd=514,Zl=515,vd=516,Md=517,Kl=518,Sd=519,Fc=35044,Oc="300 es",jn=2e3,Ea=2001;function Mu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ta(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yd(){const r=Ta("canvas");return r.style.display="block",r}const Bc={};function zc(...r){const t="THREE."+r.shift();console.log(t,...r)}function qt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function re(...r){const t="THREE."+r.shift();console.error(t,...r)}function bs(...r){const t=r.join(" ");t in Bc||(Bc[t]=!0,qt(...r))}function Ed(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,vl=180/Math.PI;function es(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[r&255]+je[r>>8&255]+je[r>>16&255]+je[r>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function jt(r,t,e){return Math.max(t,Math.min(e,r))}function Td(r,t){return(r%t+t)%t}function ka(r,t,e){return(1-e)*r+e*t}function rs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bd={DEG2RAD:ga};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),y=Math.sin(S);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y,l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new O,kc=new dr;class Kt{constructor(t,e,n,i,s,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],M=i[7],E=i[2],A=i[5],C=i[8];return s[0]=a*_+o*S+l*E,s[3]=a*m+o*y+l*A,s[6]=a*p+o*M+l*C,s[1]=c*_+h*S+u*E,s[4]=c*m+h*y+u*A,s[7]=c*p+h*M+u*C,s[2]=f*_+d*S+g*E,s[5]=f*m+d*y+g*A,s[8]=f*p+d*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Kt,Vc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ue&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}const ae=Ad();function xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vr===void 0&&(vr=Ta("canvas")),vr.width=t.width,vr.height=t.height;const i=vr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ta("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cd=0;class $l{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ha(i[a].image)):s.push(Ha(i[a]))}else s=Ha(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ha(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let Rd=0;const Wa=new O;class nn extends mr{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=_i,i=_i,s=en,a=rr,o=Xn,l=bn,c=nn.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=es(),this.name="",this.source=new $l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pi:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pi:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=uu;nn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,i=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(d+1)/2,E=(p+1)/2,A=(h+f)/4,C=(u+_)/4,I=(g+m)/4;return y>M&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=C/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=I/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=C/s,i=I/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pd extends mr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new nn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new $l(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Su extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Hs.subVectors(this.max,ss),Mr.subVectors(t.a,ss),Sr.subVectors(t.b,ss),yr.subVectors(t.c,ss),Ti.subVectors(Sr,Mr),bi.subVectors(yr,Sr),qi.subVectors(Mr,yr);let e=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-qi.z,qi.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,qi.z,0,-qi.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-qi.y,qi.x,0];return!Xa(e,Mr,Sr,yr,Hs)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Mr,Sr,yr,Hs))?!1:(Ws.crossVectors(Ti,bi),e=[Ws.x,Ws.y,Ws.z],Xa(e,Mr,Sr,yr,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const li=[new O,new O,new O,new O,new O,new O,new O,new O],Vn=new O,Gs=new Bs,Mr=new O,Sr=new O,yr=new O,Ti=new O,bi=new O,qi=new O,ss=new O,Hs=new O,Ws=new O,Yi=new O;function Xa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Yi.fromArray(r,s);const o=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),l=t.dot(Yi),c=e.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ld=new Bs,as=new O,qa=new O;class Jl{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(qa)),this.expandByPoint(as.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ci=new O,Ya=new O,Xs=new O,Ai=new O,Za=new O,qs=new O,Ka=new O;class jl{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ya.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(Ya);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Xs),o=Ai.dot(this.direction),l=-Ai.dot(Xs),c=Ai.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ya).addScaledVector(Xs,f),d}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,i,s){Za.subVectors(e,t),qs.subVectors(n,t),Ka.crossVectors(Za,qs);let a=this.direction.dot(Ka),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,t);const l=o*this.direction.dot(qs.crossVectors(Ai,qs));if(l<0)return null;const c=o*this.direction.dot(Za.cross(Ai));if(c<0||l+c>a)return null;const h=-o*Ai.dot(Ka);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,s,a,o,l,c,h,u,f,d,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,s,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),a=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Nd)}lookAt(t,e,n){const i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),wi.crossVectors(n,Sn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),wi.crossVectors(n,Sn)),wi.normalize(),Ys.crossVectors(Sn,wi),i[0]=wi.x,i[4]=Ys.x,i[8]=Sn.x,i[1]=wi.y,i[5]=Ys.y,i[9]=Sn.y,i[2]=wi.z,i[6]=Ys.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],M=n[11],E=n[15],A=i[0],C=i[4],I=i[8],v=i[12],b=i[1],L=i[5],V=i[9],k=i[13],$=i[2],W=i[6],N=i[10],z=i[14],J=i[3],ft=i[7],ht=i[11],P=i[15];return s[0]=a*A+o*b+l*$+c*J,s[4]=a*C+o*L+l*W+c*ft,s[8]=a*I+o*V+l*N+c*ht,s[12]=a*v+o*k+l*z+c*P,s[1]=h*A+u*b+f*$+d*J,s[5]=h*C+u*L+f*W+d*ft,s[9]=h*I+u*V+f*N+d*ht,s[13]=h*v+u*k+f*z+d*P,s[2]=g*A+_*b+m*$+p*J,s[6]=g*C+_*L+m*W+p*ft,s[10]=g*I+_*V+m*N+p*ht,s[14]=g*v+_*k+m*z+p*P,s[3]=S*A+y*b+M*$+E*J,s[7]=S*C+y*L+M*W+E*ft,s[11]=S*I+y*V+M*N+E*ht,s[15]=S*v+y*k+M*z+E*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],S=l*d-c*f,y=o*d-c*u,M=o*f-l*u,E=a*d-c*h,A=a*f-l*h,C=a*u-o*h;return e*(_*S-m*y+p*M)-n*(g*S-m*E+p*A)+i*(g*y-_*E+p*C)-s*(g*M-_*A+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,y=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,M=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,E=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=e*S+n*y+i*M+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*C,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*C,t[4]=y*C,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*C,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*C,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*d+e*l*d)*C,t[8]=M*C,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*C,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*d-e*o*d)*C,t[12]=E*C,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,S=l*c,y=l*h,M=l*u,E=n.x,A=n.y,C=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+M)*E,i[2]=(g-y)*E,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+y)*C,i[9]=(m-S)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Er.set(i[0],i[1],i[2]).length();const a=Er.set(i[4],i[5],i[6]).length(),o=Er.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Gn.copy(this);const c=1/s,h=1/a,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=jn,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===jn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ea)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=jn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===jn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ea)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new O,Gn=new Ae,Id=new O(0,0,0),Nd=new O(1,1,1),wi=new O,Ys=new O,Sn=new O,Hc=new Ae,Wc=new dr;class ri{constructor(t=0,e=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const Xc=new O,Tr=new dr,hi=new Ae,Zs=new O,os=new O,Fd=new O,Od=new dr,qc=new O(1,0,0),Yc=new O(0,1,0),Zc=new O(0,0,1),Kc={type:"added"},Bd={type:"removed"},br={type:"childadded",child:null},$a={type:"childremoved",child:null};class $e extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new O,e=new ri,n=new dr,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Kt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(os,Zs,this.up):hi.lookAt(Zs,os,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),Tr.setFromRotationMatrix(hi),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),br.child=t,this.dispatchEvent(br),br.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bd),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new O(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,ui=new O,Ja=new O,fi=new O,Ar=new O,wr=new O,$c=new O,ja=new O,Qa=new O,to=new O,eo=new Ne,no=new Ne,io=new Ne;class Wn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hn.subVectors(t,e),i.cross(Hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Hn.subVectors(i,e),ui.subVectors(n,e),Ja.subVectors(t,e);const a=Hn.dot(Hn),o=Hn.dot(ui),l=Hn.dot(Ja),c=ui.dot(ui),h=ui.dot(Ja),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(t,e,n,i){return Hn.subVectors(n,e),ui.subVectors(t,e),Hn.cross(ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Hn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ar.subVectors(i,n),wr.subVectors(s,n),ja.subVectors(t,n);const l=Ar.dot(ja),c=wr.dot(ja);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,i);const h=Ar.dot(Qa),u=wr.dot(Qa);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ar,a);to.subVectors(t,s);const d=Ar.dot(to),g=wr.dot(to);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wr,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return $c.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector($c,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Ar,a).addScaledVector(wr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function ro(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=Td(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ro(a,s,t+1/3),this.g=ro(a,s,t),this.b=ro(a,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=En){function n(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return ae.workingToColorSpace(Qe.copy(this),t),Math.round(jt(Qe.r*255,0,255))*65536+Math.round(jt(Qe.g*255,0,255))*256+Math.round(jt(Qe.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Qe.copy(this),e);const n=Qe.r,i=Qe.g,s=Qe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=En){ae.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,i=Qe.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Ks);const n=ka(Ci.h,Ks.h,e),i=ka(Ci.s,Ks.s,e),s=ka(Ci.l,Ks.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new se;se.NAMES=yu;let zd=0;class zs extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Br,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Po,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tc extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new O,$s=new at;let kd=0;class ni{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Eu extends ni{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tu extends ni{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ke extends ni{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const Nn=new Ae,so=new $e,Cr=new O,yn=new Bs,ls=new Bs,Xe=new O;class Ln extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?Tu:Eu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(yn.min,ls.min),yn.expandByPoint(Xe),Xe.addVectors(yn.max,ls.max),yn.expandByPoint(Xe)):(yn.expandByPoint(ls.min),yn.expandByPoint(ls.max))}yn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(t,c),Xe.add(Cr)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new O,l[I]=new O;const c=new O,h=new O,u=new O,f=new at,d=new at,g=new at,_=new O,m=new O;function p(I,v,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[I].add(_),o[v].add(_),o[b].add(_),l[I].add(m),l[v].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,v=S.length;I<v;++I){const b=S[I],L=b.start,V=b.count;for(let k=L,$=L+V;k<$;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new O,M=new O,E=new O,A=new O;function C(I){E.fromBufferAttribute(i,I),A.copy(E);const v=o[I];y.copy(v),y.sub(E.multiplyScalar(E.dot(v))).normalize(),M.crossVectors(A,v);const L=M.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,v=S.length;I<v;++I){const b=S[I],L=b.start,V=b.count;for(let k=L,$=L+V;k<$;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ni(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ni(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new Ae,Zi=new jl,Js=new Jl,jc=new O,js=new O,Qs=new O,ta=new O,ao=new O,ea=new O,Qc=new O,na=new O;class Fe extends $e{constructor(t=new Ln,e=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ao.fromBufferAttribute(u,t),a?ea.addScaledVector(ao,h):ea.addScaledVector(ao.sub(e),h))}e.add(ea)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Zi.copy(t.ray).recast(t.near),!(Js.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Js,jc)===null||Zi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Jc.copy(s).invert(),Zi.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=y;M<E;M+=3){const A=o.getX(M),C=o.getX(M+1),I=o.getX(M+2);i=ia(this,p,t,n,c,h,u,A,C,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=ia(this,a,t,n,c,h,u,S,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=y;M<E;M+=3){const A=M,C=M+1,I=M+2;i=ia(this,p,t,n,c,h,u,A,C,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,M=m+2;i=ia(this,a,t,n,c,h,u,S,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Gd(r,t,e,n,i,s,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===zi,o),l===null)return null;na.copy(o),na.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:r}}function ia(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,js),r.getVertexPosition(l,Qs),r.getVertexPosition(c,ta);const h=Gd(r,t,e,n,js,Qs,ta,Qc);if(h){const u=new O;Wn.getBarycoord(Qc,js,Qs,ta,u),i&&(h.uv=Wn.getInterpolatedAttribute(i,o,l,c,u,new at)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,o,l,c,u,new at)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Wn.getNormal(js,Qs,ta,f.normal),h.face=f,h.barycoord=u}return h}class vi extends Ln{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function g(_,m,p,S,y,M,E,A,C,I,v){const b=M/C,L=E/I,V=M/2,k=E/2,$=A/2,W=C+1,N=I+1;let z=0,J=0;const ft=new O;for(let ht=0;ht<N;ht++){const P=ht*L-k;for(let lt=0;lt<W;lt++){const Vt=lt*b-V;ft[_]=Vt*S,ft[m]=P*y,ft[p]=$,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=A>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(lt/C),u.push(1-ht/I),z+=1}}for(let ht=0;ht<I;ht++)for(let P=0;P<C;P++){const lt=f+P+W*ht,Vt=f+P+W*(ht+1),$t=f+(P+1)+W*(ht+1),Qt=f+(P+1)+W*ht;l.push(lt,Vt,Qt),l.push(Vt,$t,Qt),J+=6}o.addGroup(d,J,v),d+=J,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function on(r){const t={};for(let e=0;e<r.length;e++){const n=Yr(r[e]);for(const i in n)t[i]=n[i]}return t}function Hd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function bu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Wd={clone:Yr,merge:on};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Au extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new O,th=new at,eh=new at;class Fn extends Au{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ga*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rr=-90,Pr=1;class Yd extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(Rr,Pr,t,e);i.layers=this.layers,this.add(i);const s=new Fn(Rr,Pr,t,e);s.layers=this.layers,this.add(s);const a=new Fn(Rr,Pr,t,e);a.layers=this.layers,this.add(a);const o=new Fn(Rr,Pr,t,e);o.layers=this.layers,this.add(o);const l=new Fn(Rr,Pr,t,e);l.layers=this.layers,this.add(l);const c=new Fn(Rr,Pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ec extends nn{constructor(t=[],e=fr,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wu extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ec(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vi(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:gi});s.uniforms.tEquirect.value=e;const a=new Fe(i,s),o=e.minFilter;return e.minFilter===rr&&(e.minFilter=en),new Yd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class ds extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zd={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class nc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=e}clone(){return new nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kd extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $d extends nn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Ke,h=Ke,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lo=new O,Jd=new O,jd=new Kt;class Pi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=lo.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jd.getNormalMatrix(t),i=this.coplanarPoint(lo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Jl,Qd=new at(.5,.5),ra=new O;class ic{constructor(t=new Pi,e=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],S=s[12],y=s[13],M=s[14],E=s[15];if(i[0].setComponents(c-a,d-h,p-g,E-S).normalize(),i[1].setComponents(c+a,d+h,p+g,E+S).normalize(),i[2].setComponents(c+o,d+u,p+_,E+y).normalize(),i[3].setComponents(c-o,d-u,p-_,E-y).normalize(),n)i[4].setComponents(l,f,m,M).normalize(),i[5].setComponents(c-l,d-f,p-m,E-M).normalize();else if(i[4].setComponents(c-l,d-f,p-m,E-M).normalize(),e===jn)i[5].setComponents(c+l,d+f,p+m,E+M).normalize();else if(e===Ea)i[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);const e=Qd.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ra.x=i.normal.x>0?t.max.x:t.min.x,ra.y=i.normal.y>0?t.max.y:t.min.y,ra.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $i extends nn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class As extends nn{constructor(t,e,n=ii,i,s,a,o=Ke,l=Ke,c,h=Si,u=1){if(h!==Si&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $l(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tp extends As{constructor(t,e=ii,n=fr,i,s,a=Ke,o=Ke,l,c=Si){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cu extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new at:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,i=[],s=[],a=[],o=new O,l=new Ae;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(jt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(jt(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rc extends oi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ep extends rc{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sc(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const sa=new O,co=new sc,ho=new sc,uo=new sc;class np extends oi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(sa.subVectors(i[0],i[1]).add(i[0]),c=sa);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(sa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),co.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),ho.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),uo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(co.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ho.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),uo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(co.calc(l),ho.calc(l),uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nh(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function ip(r,t){const e=1-r;return e*e*t}function rp(r,t){return 2*(1-r)*r*t}function sp(r,t){return r*r*t}function xs(r,t,e,n){return ip(r,t)+rp(r,e)+sp(r,n)}function ap(r,t){const e=1-r;return e*e*e*t}function op(r,t){const e=1-r;return 3*e*e*r*t}function lp(r,t){return 3*(1-r)*r*r*t}function cp(r,t){return r*r*r*t}function vs(r,t,e,n,i){return ap(r,t)+op(r,e)+lp(r,n)+cp(r,i)}class Ru extends oi{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,i.x,s.x,a.x,o.x),vs(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hp extends oi{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,i.x,s.x,a.x,o.x),vs(t,i.y,s.y,a.y,o.y),vs(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pu extends oi{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends oi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends oi{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(xs(t,i.x,s.x,a.x),xs(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends oi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(xs(t,i.x,s.x,a.x),xs(t,i.y,s.y,a.y),xs(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(nh(o,l.x,c.x,h.x,u.x),nh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var Ml=Object.freeze({__proto__:null,ArcCurve:ep,CatmullRomCurve3:np,CubicBezierCurve:Ru,CubicBezierCurve3:hp,EllipseCurve:rc,LineCurve:Pu,LineCurve3:up,QuadraticBezierCurve:Du,QuadraticBezierCurve3:fp,SplineCurve:Lu});class dp extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ml[i.type]().fromJSON(i))}return this}}class ih extends dp{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pu(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Du(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Ru(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Lu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new rc(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Iu extends ih{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ih().fromJSON(i))}return this}}function pp(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Nu(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=vp(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,u=l;for(let f=e;f<i;f+=e){const d=r[f],g=r[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ws(s,a,e,o,l,c,0),a}function Nu(r,t,e,n,i){let s;if(i===Pp(r,t,e,n)>0)for(let a=t;a<e;a+=n)s=rh(a/n|0,r[a],r[a+1],s);else for(let a=e-n;a>=t;a-=n)s=rh(a/n|0,r[a],r[a+1],s);return s&&Zr(s,s.next)&&(Rs(s),s=s.next),s}function pr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Zr(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Tp(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?_p(r,n,i,s):mp(r)){t.push(l.i,r.i,c.i),Rs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=gp(pr(r),t),ws(r,t,e,n,i,s,2)):a===2&&xp(r,t,e,n,i,s):ws(pr(r),t,e,n,i,s,1);break}}}function mp(r){const t=r.prev,e=r,n=r.next;if(Pe(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),f=Math.max(i,s,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ps(i,o,s,l,a,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _p(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Pe(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),p=Sl(d,g,t,e,n),S=Sl(_,m,t,e,n);let y=r.prevZ,M=r.nextZ;for(;y&&y.z>=p&&M&&M.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ps(o,h,l,u,c,f,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&ps(o,h,l,u,c,f,M.x,M.y)&&Pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ps(o,h,l,u,c,f,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&ps(o,h,l,u,c,f,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function gp(r,t){let e=r;do{const n=e.prev,i=e.next.next;!Zr(n,i)&&Fu(n,e,e.next,i)&&Cs(n,i)&&Cs(i,n)&&(t.push(n.i,e.i,i.i),Rs(e),Rs(e.next),e=r=i),e=e.next}while(e!==r);return pr(e)}function xp(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wp(a,o)){let l=Ou(a,o);a=pr(a,a.next),l=pr(l,l.next),ws(a,t,e,n,i,s,0),ws(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function vp(r,t,e,n){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=Nu(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ap(c))}i.sort(Mp);for(let s=0;s<i.length;s++)e=Sp(i[s],e);return e}function Mp(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Sp(r,t){const e=yp(r,t);if(!e)return t;const n=Ou(e,r);return pr(n,n.next),pr(e,e.next)}function yp(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;if(Zr(r,e))return e;do{if(Zr(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Uu(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Cs(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ep(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ep(r,t){return Pe(r.prev,r,t.prev)<0&&Pe(t.next,r,r.next)<0}function Tp(r,t,e,n){let i=r;do i.z===0&&(i.z=Sl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,bp(i)}function bp(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,e*=2}while(t>1);return r}function Sl(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Ap(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Uu(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function ps(r,t,e,n,i,s,a,o){return!(r===a&&t===o)&&Uu(r,t,e,n,i,s,a,o)}function wp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Cp(r,t)&&(Cs(r,t)&&Cs(t,r)&&Rp(r,t)&&(Pe(r.prev,r,t.prev)||Pe(r,t.prev,t))||Zr(r,t)&&Pe(r.prev,r,r.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Zr(r,t){return r.x===t.x&&r.y===t.y}function Fu(r,t,e,n){const i=oa(Pe(r,t,e)),s=oa(Pe(r,t,n)),a=oa(Pe(e,n,r)),o=oa(Pe(e,n,t));return!!(i!==s&&a!==o||i===0&&aa(r,e,t)||s===0&&aa(r,n,t)||a===0&&aa(e,r,n)||o===0&&aa(e,t,n))}function aa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function oa(r){return r>0?1:r<0?-1:0}function Cp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Fu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Cs(r,t){return Pe(r.prev,r,r.next)<0?Pe(r,t,r.next)>=0&&Pe(r,r.prev,t)>=0:Pe(r,t,r.prev)<0||Pe(r,r.next,t)<0}function Rp(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Ou(r,t){const e=yl(r.i,r.x,r.y),n=yl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function rh(r,t,e,n){const i=yl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yl(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pp(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Dp{static triangulate(t,e,n=2){return pp(t,e,n)}}class Nr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];sh(t),ah(n,t);let a=t.length;e.forEach(sh);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ah(n,e[l]);const o=Dp.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function sh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ah(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ac extends Ln{constructor(t=new Iu([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ke(i,3)),this.setAttribute("uv",new ke(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Lp;let y,M=!1,E,A,C,I;if(p){y=p.getSpacedPoints(h),M=!0,f=!1;const nt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,nt),A=new O,C=new O,I=new O}f||(m=0,d=0,g=0,_=0);const v=o.extractPoints(c);let b=v.shape;const L=v.holes;if(!Nr.isClockWise(b)){b=b.reverse();for(let nt=0,rt=L.length;nt<rt;nt++){const Q=L[nt];Nr.isClockWise(Q)&&(L[nt]=Q.reverse())}}function k(nt){const Q=10000000000000001e-36;let Mt=nt[0];for(let R=1;R<=nt.length;R++){const Bt=R%nt.length,vt=nt[Bt],Nt=vt.x-Mt.x,ut=vt.y-Mt.y,w=Nt*Nt+ut*ut,x=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(Mt.x),Math.abs(Mt.y)),U=Q*x*x;if(w<=U){nt.splice(Bt,1),R--;continue}Mt=vt}}k(b),L.forEach(k);const $=L.length,W=b;for(let nt=0;nt<$;nt++){const rt=L[nt];b=b.concat(rt)}function N(nt,rt,Q){return rt||re("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(rt,Q)}const z=b.length;function J(nt,rt,Q){let Mt,R,Bt;const vt=nt.x-rt.x,Nt=nt.y-rt.y,ut=Q.x-nt.x,w=Q.y-nt.y,x=vt*vt+Nt*Nt,U=vt*w-Nt*ut;if(Math.abs(U)>Number.EPSILON){const K=Math.sqrt(x),tt=Math.sqrt(ut*ut+w*w),H=rt.x-Nt/K,Ct=rt.y+vt/K,dt=Q.x-w/tt,Pt=Q.y+ut/tt,zt=((dt-H)*w-(Pt-Ct)*ut)/(vt*w-Nt*ut);Mt=H+vt*zt-nt.x,R=Ct+Nt*zt-nt.y;const st=Mt*Mt+R*R;if(st<=2)return new at(Mt,R);Bt=Math.sqrt(st/2)}else{let K=!1;vt>Number.EPSILON?ut>Number.EPSILON&&(K=!0):vt<-Number.EPSILON?ut<-Number.EPSILON&&(K=!0):Math.sign(Nt)===Math.sign(w)&&(K=!0),K?(Mt=-Nt,R=vt,Bt=Math.sqrt(x)):(Mt=vt,R=Nt,Bt=Math.sqrt(x/2))}return new at(Mt/Bt,R/Bt)}const ft=[];for(let nt=0,rt=W.length,Q=rt-1,Mt=nt+1;nt<rt;nt++,Q++,Mt++)Q===rt&&(Q=0),Mt===rt&&(Mt=0),ft[nt]=J(W[nt],W[Q],W[Mt]);const ht=[];let P,lt=ft.concat();for(let nt=0,rt=$;nt<rt;nt++){const Q=L[nt];P=[];for(let Mt=0,R=Q.length,Bt=R-1,vt=Mt+1;Mt<R;Mt++,Bt++,vt++)Bt===R&&(Bt=0),vt===R&&(vt=0),P[Mt]=J(Q[Mt],Q[Bt],Q[vt]);ht.push(P),lt=lt.concat(P)}let Vt;if(m===0)Vt=Nr.triangulateShape(W,L);else{const nt=[],rt=[];for(let Q=0;Q<m;Q++){const Mt=Q/m,R=d*Math.cos(Mt*Math.PI/2),Bt=g*Math.sin(Mt*Math.PI/2)+_;for(let vt=0,Nt=W.length;vt<Nt;vt++){const ut=N(W[vt],ft[vt],Bt);kt(ut.x,ut.y,-R),Mt===0&&nt.push(ut)}for(let vt=0,Nt=$;vt<Nt;vt++){const ut=L[vt];P=ht[vt];const w=[];for(let x=0,U=ut.length;x<U;x++){const K=N(ut[x],P[x],Bt);kt(K.x,K.y,-R),Mt===0&&w.push(K)}Mt===0&&rt.push(w)}}Vt=Nr.triangulateShape(nt,rt)}const $t=Vt.length,Qt=g+_;for(let nt=0;nt<z;nt++){const rt=f?N(b[nt],lt[nt],Qt):b[nt];M?(C.copy(E.normals[0]).multiplyScalar(rt.x),A.copy(E.binormals[0]).multiplyScalar(rt.y),I.copy(y[0]).add(C).add(A),kt(I.x,I.y,I.z)):kt(rt.x,rt.y,0)}for(let nt=1;nt<=h;nt++)for(let rt=0;rt<z;rt++){const Q=f?N(b[rt],lt[rt],Qt):b[rt];M?(C.copy(E.normals[nt]).multiplyScalar(Q.x),A.copy(E.binormals[nt]).multiplyScalar(Q.y),I.copy(y[nt]).add(C).add(A),kt(I.x,I.y,I.z)):kt(Q.x,Q.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const rt=nt/m,Q=d*Math.cos(rt*Math.PI/2),Mt=g*Math.sin(rt*Math.PI/2)+_;for(let R=0,Bt=W.length;R<Bt;R++){const vt=N(W[R],ft[R],Mt);kt(vt.x,vt.y,u+Q)}for(let R=0,Bt=L.length;R<Bt;R++){const vt=L[R];P=ht[R];for(let Nt=0,ut=vt.length;Nt<ut;Nt++){const w=N(vt[Nt],P[Nt],Mt);M?kt(w.x,w.y+y[h-1].y,y[h-1].x+Q):kt(w.x,w.y,u+Q)}}}j(),it();function j(){const nt=i.length/3;if(f){let rt=0,Q=z*rt;for(let Mt=0;Mt<$t;Mt++){const R=Vt[Mt];Rt(R[2]+Q,R[1]+Q,R[0]+Q)}rt=h+m*2,Q=z*rt;for(let Mt=0;Mt<$t;Mt++){const R=Vt[Mt];Rt(R[0]+Q,R[1]+Q,R[2]+Q)}}else{for(let rt=0;rt<$t;rt++){const Q=Vt[rt];Rt(Q[2],Q[1],Q[0])}for(let rt=0;rt<$t;rt++){const Q=Vt[rt];Rt(Q[0]+z*h,Q[1]+z*h,Q[2]+z*h)}}n.addGroup(nt,i.length/3-nt,0)}function it(){const nt=i.length/3;let rt=0;wt(W,rt),rt+=W.length;for(let Q=0,Mt=L.length;Q<Mt;Q++){const R=L[Q];wt(R,rt),rt+=R.length}n.addGroup(nt,i.length/3-nt,1)}function wt(nt,rt){let Q=nt.length;for(;--Q>=0;){const Mt=Q;let R=Q-1;R<0&&(R=nt.length-1);for(let Bt=0,vt=h+m*2;Bt<vt;Bt++){const Nt=z*Bt,ut=z*(Bt+1),w=rt+Mt+Nt,x=rt+R+Nt,U=rt+R+ut,K=rt+Mt+ut;ee(w,x,U,K)}}}function kt(nt,rt,Q){l.push(nt),l.push(rt),l.push(Q)}function Rt(nt,rt,Q){le(nt),le(rt),le(Q);const Mt=i.length/3,R=S.generateTopUV(n,i,Mt-3,Mt-2,Mt-1);xt(R[0]),xt(R[1]),xt(R[2])}function ee(nt,rt,Q,Mt){le(nt),le(rt),le(Mt),le(rt),le(Q),le(Mt);const R=i.length/3,Bt=S.generateSideWallUV(n,i,R-6,R-3,R-2,R-1);xt(Bt[0]),xt(Bt[1]),xt(Bt[3]),xt(Bt[1]),xt(Bt[2]),xt(Bt[3])}function le(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function xt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ip(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ml[i.type]().fromJSON(i)),new ac(n,t.options)}}const Lp={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new at(s,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-u),new at(f,1-g),new at(_,1-p)]:[new at(o,1-l),new at(h,1-u),new at(d,1-g),new at(m,1-p)]}};function Ip(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class oc extends Ln{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=jt(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,u=new O,f=new at,d=new O,g=new O,_=new O;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*i,M=Math.sin(y),E=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*E,a.push(u.x,u.y,u.z),f.x=S/e,f.y=A/(t.length-1),o.push(f.x,f.y);const C=l[3*A+0]*M,I=l[3*A+1],v=l[3*A+0]*E;c.push(C,I,v)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const M=y+S*t.length,E=M,A=M+t.length,C=M+t.length+1,I=M+1;s.push(E,A,I),s.push(C,I,A)}this.setIndex(s),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.points,t.segments,t.phiStart,t.phiLength)}}class or extends Ln{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let y=0;y<c;y++){const M=y*u-s;g.push(M,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,M=S+c*(p+1),E=S+1+c*(p+1),A=S+1+c*p;d.push(y,M,A),d.push(M,E,A)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.width,t.height,t.widthSegments,t.heightSegments)}}class lc extends Ln{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new O,g=new at;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,M=S+n+1,E=S+n+2,A=S+1;o.push(y,M,A),o.push(M,E,A)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class cc extends Ln{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new O,u=new O,f=new O;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,S=(i+1)*d+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Np extends si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kn extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Up extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hc extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Op extends hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const fo=new Ae,oh=new O,lh=new O;class Bp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uc extends Au{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zp extends Bp{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ch extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new zp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class kp extends hc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vp extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const hh=new Ae;class Gp{constructor(t,e,n=0,i=1/0){this.ray=new jl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,n=[]){return El(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)El(t[i],this,n,e);return n.sort(uh),n}}function uh(r,t){return r.distance-t.distance}function El(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)El(s[a],t,e,!0)}}class fh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hp extends mr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){qt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function dh(r,t,e,n){const i=Wp(n);switch(e){case _u:return r*t;case xu:return r*t/i.components*i.byteLength;case Xl:return r*t/i.components*i.byteLength;case Xr:return r*t*2/i.components*i.byteLength;case ql:return r*t*2/i.components*i.byteLength;case gu:return r*t*3/i.components*i.byteLength;case Xn:return r*t*4/i.components*i.byteLength;case Yl:return r*t*4/i.components*i.byteLength;case da:case pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ma:case _a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:case Wo:return Math.max(r,16)*Math.max(t,8)/4;case Vo:case Ho:return Math.max(r,8)*Math.max(t,8)/2;case Xo:case qo:case Zo:case Ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yo:case $o:case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fl:case dl:case pl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ml:case _l:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gl:case xl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(r){switch(r){case bn:case fu:return{byteLength:1,components:1};case Es:case du:case Mi:return{byteLength:2,components:1};case Hl:case Wl:return{byteLength:2,components:4};case ii:case Gl:case Jn:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);function Bu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Xp(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,am=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,S_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:Kp,alphatest_fragment:$p,alphatest_pars_fragment:Jp,aomap_fragment:jp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:sm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:fm,color_pars_vertex:dm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:vm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:ym,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Am,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Bm,envmap_vertex:Cm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:Dm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Nm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:zm,lights_toon_pars_fragment:km,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Jm,map_fragment:jm,map_pars_fragment:Qm,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:r_,morphcolor_vertex:s_,morphnormal_vertex:a_,morphtarget_pars_vertex:o_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:h_,normal_pars_fragment:u_,normal_pars_vertex:f_,normal_vertex:d_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:g_,iridescence_pars_fragment:x_,opaque_fragment:v_,packing:M_,premultiplied_alpha_fragment:S_,project_vertex:y_,dithering_fragment:E_,dithering_pars_fragment:T_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:A_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:C_,shadowmap_vertex:R_,shadowmask_pars_fragment:P_,skinbase_vertex:D_,skinning_pars_vertex:L_,skinning_vertex:I_,skinnormal_vertex:N_,specularmap_fragment:U_,specularmap_pars_fragment:F_,tonemapping_fragment:O_,tonemapping_pars_fragment:B_,transmission_fragment:z_,transmission_pars_fragment:k_,uv_pars_fragment:V_,uv_pars_vertex:G_,uv_vertex:H_,worldpos_vertex:W_,background_vert:X_,background_frag:q_,backgroundCube_vert:Y_,backgroundCube_frag:Z_,cube_vert:K_,cube_frag:$_,depth_vert:J_,depth_frag:j_,distance_vert:Q_,distance_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:r0,meshbasic_vert:s0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:_0,meshtoon_vert:g0,meshtoon_frag:x0,points_vert:v0,points_frag:M0,shadow_vert:S0,shadow_frag:y0,sprite_vert:E0,sprite_frag:T0},Tt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Zn={basic:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:on([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:on([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:on([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new se(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:on([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:on([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:on([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:on([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:on([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:on([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:on([Tt.common,Tt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:on([Tt.lights,Tt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Zn.physical={uniforms:on([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const la={r:0,b:0,g:0},Ji=new ri,b0=new Ae;function A0(r,t,e,n,i,s,a){const o=new se(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const E=g(y);E===null?p(o,l):E&&E.isColor&&(p(E,1),M=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===La)?(h===void 0&&(h=new Fe(new vi(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Yr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ji.copy(M.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Ji)),h.material.toneMapped=ae.getTransfer(E.colorSpace)!==ue,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Fe(new or(2,2),new si({name:"BackgroundMaterial",uniforms:Yr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ae.getTransfer(E.colorSpace)!==ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(la,bu(r)),n.buffers.color.setClear(la.r,la.g,la.b,M,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m,dispose:S}}function w0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(b,L,V,k,$){let W=!1;const N=u(k,V,L);s!==N&&(s=N,c(s.object)),W=d(b,k,V,$),W&&g(b,k,V,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(b,L,V,k),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,L,V){const k=V.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let W=$[L.id];W===void 0&&(W={},$[L.id]=W);let N=W[k];return N===void 0&&(N=f(l()),W[k]=N),N}function f(b){const L=[],V=[],k=[];for(let $=0;$<e;$++)L[$]=0,V[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,L,V,k){const $=s.attributes,W=L.attributes;let N=0;const z=V.getAttributes();for(const J in z)if(z[J].location>=0){const ht=$[J];let P=W[J];if(P===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(P=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(P=b.instanceColor)),ht===void 0||ht.attribute!==P||P&&ht.data!==P.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function g(b,L,V,k){const $={},W=L.attributes;let N=0;const z=V.getAttributes();for(const J in z)if(z[J].location>=0){let ht=W[J];ht===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const P={};P.attribute=ht,ht&&ht.data&&(P.data=ht.data),$[J]=P,N++}s.attributes=$,s.attributesNum=N,s.index=k}function _(){const b=s.newAttributes;for(let L=0,V=b.length;L<V;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){const V=s.newAttributes,k=s.enabledAttributes,$=s.attributeDivisors;V[b]=1,k[b]===0&&(r.enableVertexAttribArray(b),k[b]=1),$[b]!==L&&(r.vertexAttribDivisor(b,L),$[b]=L)}function S(){const b=s.newAttributes,L=s.enabledAttributes;for(let V=0,k=L.length;V<k;V++)L[V]!==b[V]&&(r.disableVertexAttribArray(V),L[V]=0)}function y(b,L,V,k,$,W,N){N===!0?r.vertexAttribIPointer(b,L,V,$,W):r.vertexAttribPointer(b,L,V,k,$,W)}function M(b,L,V,k){_();const $=k.attributes,W=V.getAttributes(),N=L.defaultAttributeValues;for(const z in W){const J=W[z];if(J.location>=0){let ft=$[z];if(ft===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ft!==void 0){const ht=ft.normalized,P=ft.itemSize,lt=t.get(ft);if(lt===void 0)continue;const Vt=lt.buffer,$t=lt.type,Qt=lt.bytesPerElement,j=$t===r.INT||$t===r.UNSIGNED_INT||ft.gpuType===Gl;if(ft.isInterleavedBufferAttribute){const it=ft.data,wt=it.stride,kt=ft.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<J.locationSize;Rt++)p(J.location+Rt,it.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<J.locationSize;Rt++)m(J.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let Rt=0;Rt<J.locationSize;Rt++)y(J.location+Rt,P/J.locationSize,$t,ht,wt*Qt,(kt+P/J.locationSize*Rt)*Qt,j)}else{if(ft.isInstancedBufferAttribute){for(let it=0;it<J.locationSize;it++)p(J.location+it,ft.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let it=0;it<J.locationSize;it++)m(J.location+it);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let it=0;it<J.locationSize;it++)y(J.location+it,P/J.locationSize,$t,ht,P*Qt,P/J.locationSize*it*Qt,j)}}else if(N!==void 0){const ht=N[z];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(J.location,ht);break;case 3:r.vertexAttrib3fv(J.location,ht);break;case 4:r.vertexAttrib4fv(J.location,ht);break;default:r.vertexAttrib1fv(J.location,ht)}}}}S()}function E(){I();for(const b in n){const L=n[b];for(const V in L){const k=L[V];for(const $ in k)h(k[$].object),delete k[$];delete L[V]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const V in L){const k=L[V];for(const $ in k)h(k[$].object),delete k[$];delete L[V]}delete n[b.id]}function C(b){for(const L in n){const V=n[L];if(V[b.id]===void 0)continue;const k=V[b.id];for(const $ in k)h(k[$].object),delete k[$];delete V[b.id]}}function I(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function C0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Xn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jn&&!I)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:A}}function P0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Pi,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,y=S*4;let M=p.clippingState||null;l.value=M,M=h(g,f,y,d);for(let E=0;E!==y;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=d;y!==_;++y,M+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function D0(r){let t=new WeakMap;function e(a,o){return o===Bo?a.mapping=fr:o===zo&&(a.mapping=Wr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bo||o===zo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wu(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ii=4,ph=[.125,.215,.35,.446,.526,.582],ir=20,L0=256,cs=new uc,mh=new se;let po=null,mo=0,_o=0,go=!1;const I0=new O;class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=I0}=s;po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(po,mo,_o),this._renderer.xr.enabled=go,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Mi,format:Xn,colorSpace:qr,depthBuffer:!1},i=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N0(s)),this._blurMaterial=F0(s,t,e),this._ggxMaterial=U0(s,t,e)}return i}_compileMaterial(t){const e=new Fe(new Ln,t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,i,s){const l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(mh),u.toneMapping=ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new vi,new tc({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(mh),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const E=this._cubeSize;Dr(i,M*E,y>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(_,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===fr||t.mapping===Wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ii?n-g+Ii:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Dr(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,cs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Dr(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,cs)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ir-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ir;m>ir&&qt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const p=[];let S=0;for(let C=0;C<ir;++C){const I=C/_,v=Math.exp(-I*I/2);p.push(v),C===0?S+=v:C<m&&(S+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const M=this._sizeLods[i],E=3*M*(i>y-Ii?i-y+Ii:0),A=4*(this._cubeSize-M);Dr(e,E,A,3*M,2*M),l.setRenderTarget(e),l.render(u,cs)}}function N0(r){const t=[],e=[],n=[];let i=r;const s=r-Ii+1+ph.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ii?l=ph[a-r+Ii-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),y=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,I=A>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(v,_*g*A),y.set(f,m*g*A);const b=[A,A,A,A,A,A];M.set(b,p*g*A)}const E=new Ln;E.setAttribute("position",new ni(S,_)),E.setAttribute("uv",new ni(y,m)),E.setAttribute("faceIndex",new ni(M,p)),n.push(new Fe(E,null)),i>Ii&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function gh(r,t,e){const n=new ei(r,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function U0(r,t,e){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function F0(r,t,e){const n=new Float32Array(ir),i=new O(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xh(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function vh(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bo||l===zo,h=l===fr||l===Wr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _h(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new _h(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&bs("WebGLRenderer: "+n+" extension not supported."),i}}}function z0(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,M=S.length;y<M;y+=3){const E=S[y+0],A=S[y+1],C=S[y+2];f.push(E,A,A,C,C,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const E=y+0,A=y+1,C=y+2;f.push(E,A,A,C,C,E)}}else return;const m=new(Mu(f)?Tu:Eu)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function k0(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function G0(r,t,e){const n=new WeakMap,i=new Ne;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let E=o.attributes.position.count*M,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const C=new Float32Array(E*A*4*u),I=new Su(C,E,A,u);I.type=Jn,I.needsUpdate=!0;const v=M*4;for(let L=0;L<u;L++){const V=p[L],k=S[L],$=y[L],W=E*A*4*L;for(let N=0;N<V.count;N++){const z=N*v;g===!0&&(i.fromBufferAttribute(V,N),C[W+z+0]=i.x,C[W+z+1]=i.y,C[W+z+2]=i.z,C[W+z+3]=0),_===!0&&(i.fromBufferAttribute(k,N),C[W+z+4]=i.x,C[W+z+5]=i.y,C[W+z+6]=i.z,C[W+z+7]=0),m===!0&&(i.fromBufferAttribute($,N),C[W+z+8]=i.x,C[W+z+9]=i.y,C[W+z+10]=i.z,C[W+z+11]=$.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new at(E,A)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function H0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const W0={[su]:"LINEAR_TONE_MAPPING",[au]:"REINHARD_TONE_MAPPING",[ou]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[cu]:"AGX_TONE_MAPPING",[hu]:"NEUTRAL_TONE_MAPPING",[lu]:"CUSTOM_TONE_MAPPING"};function X0(r,t,e,n,i){const s=new ei(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new ei(t,e,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),o=new Ln;o.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ke([0,2,0,0,2,0],2));const l=new Np({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Fe(o,l),h=new uc(-1,1,1,-1,0,1);let u=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(S,y){s.setSize(S,y),a.setSize(S,y);for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(S,y)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,M=s.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(y,M)}},this.begin=function(S,y){if(d||S.toneMapping===ti&&m.length===0)return!1;if(_=y,y!==null){const M=y.width,E=y.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return p===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=ti,!0},this.hasRenderPass=function(){return p},this.end=function(S,y){S.toneMapping=g,d=!0;let M=s,E=a;for(let A=0;A<m.length;A++){const C=m[A];if(C.enabled!==!1&&(C.render(S,E,M,y),C.needsSwap!==!1)){const I=M;M=E,E=I}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,l.defines={},ae.getTransfer(u)===ue&&(l.defines.SRGB_TRANSFER="");const A=W0[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(_),S.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zu=new nn,Tl=new As(1,1),ku=new Su,Vu=new Dd,Gu=new ec,Mh=[],Sh=[],yh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function ns(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Mh[i];if(s===void 0&&(s=new Float32Array(i),Mh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function He(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Na(r,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function q0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2fv(this.addr,t),He(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;r.uniform3fv(this.addr,t),He(e,t)}}function K0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4fv(this.addr,t),He(e,t)}}function $0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Th.set(n),r.uniformMatrix2fv(this.addr,!1,Th),He(e,n)}}function J0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Eh.set(n),r.uniformMatrix3fv(this.addr,!1,Eh),He(e,n)}}function j0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;yh.set(n),r.uniformMatrix4fv(this.addr,!1,yh),He(e,n)}}function Q0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2iv(this.addr,t),He(e,t)}}function eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3iv(this.addr,t),He(e,t)}}function ng(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4iv(this.addr,t),He(e,t)}}function ig(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2uiv(this.addr,t),He(e,t)}}function sg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3uiv(this.addr,t),He(e,t)}}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4uiv(this.addr,t),He(e,t)}}function og(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Tl.compareFunction=e.isReversedDepthBuffer()?Kl:Zl,s=Tl):s=zu,e.setTexture2D(t||s,i)}function lg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vu,i)}function cg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gu,i)}function hg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ku,i)}function ug(r){switch(r){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return K0;case 35674:return $0;case 35675:return J0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function fg(r,t){r.uniform1fv(this.addr,t)}function dg(r,t){const e=ns(t,this.size,2);r.uniform2fv(this.addr,e)}function pg(r,t){const e=ns(t,this.size,3);r.uniform3fv(this.addr,e)}function mg(r,t){const e=ns(t,this.size,4);r.uniform4fv(this.addr,e)}function _g(r,t){const e=ns(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function gg(r,t){const e=ns(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xg(r,t){const e=ns(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vg(r,t){r.uniform1iv(this.addr,t)}function Mg(r,t){r.uniform2iv(this.addr,t)}function Sg(r,t){r.uniform3iv(this.addr,t)}function yg(r,t){r.uniform4iv(this.addr,t)}function Eg(r,t){r.uniform1uiv(this.addr,t)}function Tg(r,t){r.uniform2uiv(this.addr,t)}function bg(r,t){r.uniform3uiv(this.addr,t)}function Ag(r,t){r.uniform4uiv(this.addr,t)}function wg(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),He(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Tl:a=zu;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Cg(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Vu,s[a])}function Rg(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Gu,s[a])}function Pg(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ku,s[a])}function Dg(r){switch(r){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return _g;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return yg;case 5125:return Eg;case 36294:return Tg;case 36295:return bg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function bh(r,t){r.seq.push(t),r.map[t.id]=t}function Ug(r,t,e){const n=r.name,i=n.length;for(xo.lastIndex=0;;){const s=xo.exec(n),a=xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bh(e,c===void 0?new Lg(o,r,t):new Ig(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Ng(o),bh(e,u)),e=u}}}class xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ug(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ah(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Fg=37297;let Og=0;function Bg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wh=new Kt;function zg(r){ae._getMatrix(wh,ae.workingColorSpace,r);const t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case ya:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ch(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Bg(r.getShaderSource(t),o)}else return s}function kg(r,t){const e=zg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Vg={[su]:"Linear",[au]:"Reinhard",[ou]:"Cineon",[Vl]:"ACESFilmic",[cu]:"AgX",[hu]:"Neutral",[lu]:"Custom"};function Gg(r,t){const e=Vg[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new O;function Hg(){ae.getLuminanceCoefficients(ca);const r=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Xg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ms(r){return r!==""}function Rh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(r){return r.replace(Yg,Kg)}const Zg=new Map;function Kg(r,t){let e=Jt[t];if(e===void 0){const n=Zg.get(t);if(n!==void 0)e=Jt[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bl(e)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(r){return r.replace($g,Jg)}function Jg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const jg={[fa]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function Qg(r){return jg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tx={[fr]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function ex(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":tx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nx={[Wr]:"ENVMAP_MODE_REFRACTION"};function ix(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rx={[ru]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function sx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":rx[r.combine]||"ENVMAP_BLENDING_NONE"}function ax(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ox(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qg(e),c=ex(e),h=ix(e),u=sx(e),f=ax(e),d=Wg(e),g=Xg(s),_=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,kg("linearToOutputTexel",e.outputColorSpace),Hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=bl(a),a=Rh(a,e),a=Ph(a,e),o=bl(o),o=Rh(o,e),o=Ph(o,e),a=Dh(a),o=Dh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,M=S+p+o,E=Ah(i,i.VERTEX_SHADER,y),A=Ah(i,i.FRAGMENT_SHADER,M);i.attachShader(_,E),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(E)||"",$=i.getShaderInfoLog(A)||"",W=V.trim(),N=k.trim(),z=$.trim();let J=!0,ft=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const ht=Ch(i,E,"vertex"),P=Ch(i,A,"fragment");re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ht+`
`+P)}else W!==""?qt("WebGLProgram: Program Info Log:",W):(N===""||z==="")&&(ft=!1);ft&&(L.diagnostics={runnable:J,programLog:W,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(E),i.deleteShader(A),I=new xa(i,_),v=qg(i,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Fg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Og++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hx(t),e.set(t,n)),n}}class hx{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function ux(r,t,e,n,i,s,a){const o=new Ql,l=new cx,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,L,V,k){const $=V.fog,W=k.geometry,N=v.isMeshStandardMaterial?V.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||N),J=z&&z.mapping===La?z.image.height:null,ft=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,P=ht!==void 0?ht.length:0;let lt=0;W.morphAttributes.position!==void 0&&(lt=1),W.morphAttributes.normal!==void 0&&(lt=2),W.morphAttributes.color!==void 0&&(lt=3);let Vt,$t,Qt,j;if(ft){const q=Zn[ft];Vt=q.vertexShader,$t=q.fragmentShader}else Vt=v.vertexShader,$t=v.fragmentShader,l.update(v),Qt=l.getVertexShaderID(v),j=l.getFragmentShaderID(v);const it=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),kt=k.isInstancedMesh===!0,Rt=k.isBatchedMesh===!0,ee=!!v.map,le=!!v.matcap,xt=!!z,nt=!!v.aoMap,rt=!!v.lightMap,Q=!!v.bumpMap,Mt=!!v.normalMap,R=!!v.displacementMap,Bt=!!v.emissiveMap,vt=!!v.metalnessMap,Nt=!!v.roughnessMap,ut=v.anisotropy>0,w=v.clearcoat>0,x=v.dispersion>0,U=v.iridescence>0,K=v.sheen>0,tt=v.transmission>0,H=ut&&!!v.anisotropyMap,Ct=w&&!!v.clearcoatMap,dt=w&&!!v.clearcoatNormalMap,Pt=w&&!!v.clearcoatRoughnessMap,zt=U&&!!v.iridescenceMap,st=U&&!!v.iridescenceThicknessMap,_t=K&&!!v.sheenColorMap,Lt=K&&!!v.sheenRoughnessMap,Ut=!!v.specularMap,gt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,F=tt&&!!v.transmissionMap,Et=tt&&!!v.thicknessMap,ct=!!v.gradientMap,At=!!v.alphaMap,ot=v.alphaTest>0,et=!!v.alphaHash,pt=!!v.extensions;let D=ti;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(D=r.toneMapping);const X={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:Vt,fragmentShader:$t,defines:v.defines,customVertexShaderID:Qt,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&k._colorsTexture!==null,instancing:kt,instancingColor:kt&&k.instanceColor!==null,instancingMorph:kt&&k.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qr,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:le,envMap:xt,envMapMode:xt&&z.mapping,envMapCubeUVHeight:J,aoMap:nt,lightMap:rt,bumpMap:Q,normalMap:Mt,displacementMap:R,emissiveMap:Bt,normalMapObjectSpace:Mt&&v.normalMapType===md,normalMapTangentSpace:Mt&&v.normalMapType===vu,metalnessMap:vt,roughnessMap:Nt,anisotropy:ut,anisotropyMap:H,clearcoat:w,clearcoatMap:Ct,clearcoatNormalMap:dt,clearcoatRoughnessMap:Pt,dispersion:x,iridescence:U,iridescenceMap:zt,iridescenceThicknessMap:st,sheen:K,sheenColorMap:_t,sheenRoughnessMap:Lt,specularMap:Ut,specularColorMap:gt,specularIntensityMap:Yt,transmission:tt,transmissionMap:F,thicknessMap:Et,gradientMap:ct,opaque:v.transparent===!1&&v.blending===Br&&v.alphaToCoverage===!1,alphaMap:At,alphaTest:ot,alphaHash:et,combine:v.combine,mapUv:ee&&_(v.map.channel),aoMapUv:nt&&_(v.aoMap.channel),lightMapUv:rt&&_(v.lightMap.channel),bumpMapUv:Q&&_(v.bumpMap.channel),normalMapUv:Mt&&_(v.normalMap.channel),displacementMapUv:R&&_(v.displacementMap.channel),emissiveMapUv:Bt&&_(v.emissiveMap.channel),metalnessMapUv:vt&&_(v.metalnessMap.channel),roughnessMapUv:Nt&&_(v.roughnessMap.channel),anisotropyMapUv:H&&_(v.anisotropyMap.channel),clearcoatMapUv:Ct&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(v.sheenRoughnessMap.channel),specularMapUv:Ut&&_(v.specularMap.channel),specularColorMapUv:gt&&_(v.specularColorMap.channel),specularIntensityMapUv:Yt&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:Et&&_(v.thicknessMap.channel),alphaMapUv:At&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||ut),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(ee||At),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:D,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&ae.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&v.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return X.vertexUv1s=c.has(1),X.vertexUv2s=c.has(2),X.vertexUv3s=c.has(3),c.clear(),X}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(S(b,v),y(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const b=g[v.type];let L;if(b){const V=Zn[b];L=Wd.clone(V.uniforms)}else L=v.uniforms;return L}function E(v,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new ox(r,b,v,s),h.push(L),u.set(b,L)),L}function A(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function fx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function dx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ih(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Nh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||dx),n.length>1&&n.sort(f||Ih),i.length>1&&i.sort(f||Ih)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function px(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Nh,r.set(n,[a])):i>=s.length?(a=new Nh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function mx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new se};break;case"SpotLight":e={position:new O,direction:new O,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function _x(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let gx=0;function xx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vx(r){const t=new mx,e=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new Ae,a=new Ae;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,y=0,M=0,E=0,A=0,C=0;c.sort(xx);for(let v=0,b=c.length;v<b;v++){const L=c[v],V=L.color,k=L.intensity,$=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Xr?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*k,u+=V.g*k,f+=V.b*k;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],k);C++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,J=e.get(L);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=L.shadow.matrix,S++}n.directional[d]=N,d++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(V).multiplyScalar(k),N.distance=$,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[_]=N;const z=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=z.matrix,L.castShadow){const J=e.get(L);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=W,M++}_++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(V).multiplyScalar(k),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=N,m++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const z=L.shadow,J=e.get(L);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=N,g++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(k),N.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=N,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==E||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=E,I.numLightProbes=C,n.version=gx++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Uh(r){const t=new vx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Mx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Uh(r),t.set(i,[o])):s>=a.length?(o=new Uh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ex=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Tx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Fh=new Ae,hs=new O,vo=new O;function bx(r,t,e){let n=new ic;const i=new at,s=new at,a=new Ne,o=new Up,l=new Fp,c={},h=e.maxTextureSize,u={[zi]:dn,[dn]:zi,[On]:On},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Sx,fragmentShader:yx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===iu&&(qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=fa);const v=r.getRenderTarget(),b=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),V=r.state;V.setBlending(gi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==this.type;k&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(W=>W.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,W=A.length;$<W;$++){const N=A[$],z=N.shadow;if(z===void 0){qt("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();if(i.multiply(J),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,z.mapSize.y=s.y)),z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===fs){if(N.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ei(i.x,i.y,{format:Xr,type:Mi,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new As(i.x,i.y,Jn),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=Si,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ke,z.map.depthTexture.magFilter=Ke}else{N.isPointLight?(z.map=new wu(i.x),z.map.depthTexture=new tp(i.x,ii)):(z.map=new ei(i.x,i.y),z.map.depthTexture=new As(i.x,i.y,ii)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=Si;const ht=r.state.buffers.depth.getReversed();this.type===fa?(z.map.depthTexture.compareFunction=ht?Kl:Zl,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ke,z.map.depthTexture.magFilter=Ke)}z.camera.updateProjectionMatrix()}const ft=z.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ft;ht++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,ht),r.clear();else{ht===0&&(r.setRenderTarget(z.map),r.clear());const P=z.getViewport(ht);a.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),V.viewport(a)}if(N.isPointLight){const P=z.camera,lt=z.matrix,Vt=N.distance||P.far;Vt!==P.far&&(P.far=Vt,P.updateProjectionMatrix()),hs.setFromMatrixPosition(N.matrixWorld),P.position.copy(hs),vo.copy(P.position),vo.add(Ex[ht]),P.up.copy(Tx[ht]),P.lookAt(vo),P.updateMatrixWorld(),lt.makeTranslation(-hs.x,-hs.y,-hs.z),Fh.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Fh,P.coordinateSystem,P.reversedDepth)}else z.updateMatrices(N);n=z.getFrustum(),M(C,I,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===fs&&S(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,b,L)};function S(A,C){const I=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ei(i.x,i.y,{format:Xr,type:Mi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,I,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,I,d,_,null)}function y(A,C,I,v){let b=null;const L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=b.uuid,k=C.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let W=$[k];W===void 0&&(W=b.clone(),$[k]=W,C.addEventListener("dispose",E)),b=W}if(b.visible=C.visible,b.wireframe=C.wireframe,v===fs?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=r.properties.get(b);V.light=I}return b}function M(A,C,I,v,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===fs)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=t.update(A),$=A.material;if(Array.isArray($)){const W=k.groups;for(let N=0,z=W.length;N<z;N++){const J=W[N],ft=$[J.materialIndex];if(ft&&ft.visible){const ht=y(A,ft,v,b);A.onBeforeShadow(r,A,C,I,k,ht,J),r.renderBufferDirect(I,null,k,ht,A,J),A.onAfterShadow(r,A,C,I,k,ht,J)}}}else if($.visible){const W=y(A,$,v,b);A.onBeforeShadow(r,A,C,I,k,W,null),r.renderBufferDirect(I,null,k,W,A,null),A.onAfterShadow(r,A,C,I,k,W,null)}}const V=A.children;for(let k=0,$=V.length;k<$;k++)M(V[k],C,I,v,b)}function E(A){A.target.removeEventListener("dispose",E);for(const I in c){const v=c[I],b=A.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const Ax={[Do]:Lo,[Io]:Fo,[No]:Oo,[Hr]:Uo,[Lo]:Do,[Fo]:Io,[Oo]:No,[Uo]:Hr};function wx(r,t){function e(){let F=!1;const Et=new Ne;let ct=null;const At=new Ne(0,0,0,0);return{setMask:function(ot){ct!==ot&&!F&&(r.colorMask(ot,ot,ot,ot),ct=ot)},setLocked:function(ot){F=ot},setClear:function(ot,et,pt,D,X){X===!0&&(ot*=D,et*=D,pt*=D),Et.set(ot,et,pt,D),At.equals(Et)===!1&&(r.clearColor(ot,et,pt,D),At.copy(Et))},reset:function(){F=!1,ct=null,At.set(-1,0,0,0)}}}function n(){let F=!1,Et=!1,ct=null,At=null,ot=null;return{setReversed:function(et){if(Et!==et){const pt=t.get("EXT_clip_control");et?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),Et=et;const D=ot;ot=null,this.setClear(D)}},getReversed:function(){return Et},setTest:function(et){et?it(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(et){ct!==et&&!F&&(r.depthMask(et),ct=et)},setFunc:function(et){if(Et&&(et=Ax[et]),At!==et){switch(et){case Do:r.depthFunc(r.NEVER);break;case Lo:r.depthFunc(r.ALWAYS);break;case Io:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case No:r.depthFunc(r.EQUAL);break;case Uo:r.depthFunc(r.GEQUAL);break;case Fo:r.depthFunc(r.GREATER);break;case Oo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}At=et}},setLocked:function(et){F=et},setClear:function(et){ot!==et&&(Et&&(et=1-et),r.clearDepth(et),ot=et)},reset:function(){F=!1,ct=null,At=null,ot=null,Et=!1}}}function i(){let F=!1,Et=null,ct=null,At=null,ot=null,et=null,pt=null,D=null,X=null;return{setTest:function(q){F||(q?it(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(q){Et!==q&&!F&&(r.stencilMask(q),Et=q)},setFunc:function(q,mt,Ft){(ct!==q||At!==mt||ot!==Ft)&&(r.stencilFunc(q,mt,Ft),ct=q,At=mt,ot=Ft)},setOp:function(q,mt,Ft){(et!==q||pt!==mt||D!==Ft)&&(r.stencilOp(q,mt,Ft),et=q,pt=mt,D=Ft)},setLocked:function(q){F=q},setClear:function(q){X!==q&&(r.clearStencil(q),X=q)},reset:function(){F=!1,Et=null,ct=null,At=null,ot=null,et=null,pt=null,D=null,X=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,y=null,M=null,E=null,A=null,C=new se(0,0,0),I=0,v=!1,b=null,L=null,V=null,k=null,$=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),N=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),N=z>=2);let ft=null,ht={};const P=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Vt=new Ne().fromArray(P),$t=new Ne().fromArray(lt);function Qt(F,Et,ct,At){const ot=new Uint8Array(4),et=r.createTexture();r.bindTexture(F,et),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<ct;pt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,At,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(Et+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return et}const j={};j[r.TEXTURE_2D]=Qt(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Hr),Q(!1),Mt(Dc),it(r.CULL_FACE),nt(gi);function it(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function wt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function kt(F,Et){return u[F]!==Et?(r.bindFramebuffer(F,Et),u[F]=Et,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Et),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Rt(F,Et){let ct=d,At=!1;if(F){ct=f.get(Et),ct===void 0&&(ct=[],f.set(Et,ct));const ot=F.textures;if(ct.length!==ot.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let et=0,pt=ot.length;et<pt;et++)ct[et]=r.COLOR_ATTACHMENT0+et;ct.length=ot.length,At=!0}}else ct[0]!==r.BACK&&(ct[0]=r.BACK,At=!0);At&&r.drawBuffers(ct)}function ee(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const le={[nr]:r.FUNC_ADD,[Zf]:r.FUNC_SUBTRACT,[Kf]:r.FUNC_REVERSE_SUBTRACT};le[$f]=r.MIN,le[Jf]=r.MAX;const xt={[jf]:r.ZERO,[Qf]:r.ONE,[td]:r.SRC_COLOR,[Ro]:r.SRC_ALPHA,[ad]:r.SRC_ALPHA_SATURATE,[rd]:r.DST_COLOR,[nd]:r.DST_ALPHA,[ed]:r.ONE_MINUS_SRC_COLOR,[Po]:r.ONE_MINUS_SRC_ALPHA,[sd]:r.ONE_MINUS_DST_COLOR,[id]:r.ONE_MINUS_DST_ALPHA,[od]:r.CONSTANT_COLOR,[ld]:r.ONE_MINUS_CONSTANT_COLOR,[cd]:r.CONSTANT_ALPHA,[hd]:r.ONE_MINUS_CONSTANT_ALPHA};function nt(F,Et,ct,At,ot,et,pt,D,X,q){if(F===gi){_===!0&&(wt(r.BLEND),_=!1);return}if(_===!1&&(it(r.BLEND),_=!0),F!==Yf){if(F!==m||q!==v){if((p!==nr||M!==nr)&&(r.blendEquation(r.FUNC_ADD),p=nr,M=nr),q)switch(F){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lc:r.blendFunc(r.ONE,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:re("WebGLState: Invalid blending: ",F);break}else switch(F){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ic:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",F);break}S=null,y=null,E=null,A=null,C.set(0,0,0),I=0,m=F,v=q}return}ot=ot||Et,et=et||ct,pt=pt||At,(Et!==p||ot!==M)&&(r.blendEquationSeparate(le[Et],le[ot]),p=Et,M=ot),(ct!==S||At!==y||et!==E||pt!==A)&&(r.blendFuncSeparate(xt[ct],xt[At],xt[et],xt[pt]),S=ct,y=At,E=et,A=pt),(D.equals(C)===!1||X!==I)&&(r.blendColor(D.r,D.g,D.b,X),C.copy(D),I=X),m=F,v=!1}function rt(F,Et){F.side===On?wt(r.CULL_FACE):it(r.CULL_FACE);let ct=F.side===dn;Et&&(ct=!ct),Q(ct),F.blending===Br&&F.transparent===!1?nt(gi):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const At=F.stencilWrite;o.setTest(At),At&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){b!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),b=F)}function Mt(F){F!==Xf?(it(r.CULL_FACE),F!==L&&(F===Dc?r.cullFace(r.BACK):F===qf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),L=F}function R(F){F!==V&&(N&&r.lineWidth(F),V=F)}function Bt(F,Et,ct){F?(it(r.POLYGON_OFFSET_FILL),(k!==Et||$!==ct)&&(r.polygonOffset(Et,ct),k=Et,$=ct)):wt(r.POLYGON_OFFSET_FILL)}function vt(F){F?it(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Nt(F){F===void 0&&(F=r.TEXTURE0+W-1),ft!==F&&(r.activeTexture(F),ft=F)}function ut(F,Et,ct){ct===void 0&&(ft===null?ct=r.TEXTURE0+W-1:ct=ft);let At=ht[ct];At===void 0&&(At={type:void 0,texture:void 0},ht[ct]=At),(At.type!==F||At.texture!==Et)&&(ft!==ct&&(r.activeTexture(ct),ft=ct),r.bindTexture(F,Et||j[F]),At.type=F,At.texture=Et)}function w(){const F=ht[ft];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(F){re("WebGLState:",F)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(F){re("WebGLState:",F)}}function K(){try{r.texSubImage2D(...arguments)}catch(F){re("WebGLState:",F)}}function tt(){try{r.texSubImage3D(...arguments)}catch(F){re("WebGLState:",F)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(F){re("WebGLState:",F)}}function Ct(){try{r.compressedTexSubImage3D(...arguments)}catch(F){re("WebGLState:",F)}}function dt(){try{r.texStorage2D(...arguments)}catch(F){re("WebGLState:",F)}}function Pt(){try{r.texStorage3D(...arguments)}catch(F){re("WebGLState:",F)}}function zt(){try{r.texImage2D(...arguments)}catch(F){re("WebGLState:",F)}}function st(){try{r.texImage3D(...arguments)}catch(F){re("WebGLState:",F)}}function _t(F){Vt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Vt.copy(F))}function Lt(F){$t.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),$t.copy(F))}function Ut(F,Et){let ct=c.get(Et);ct===void 0&&(ct=new WeakMap,c.set(Et,ct));let At=ct.get(F);At===void 0&&(At=r.getUniformBlockIndex(Et,F.name),ct.set(F,At))}function gt(F,Et){const At=c.get(Et).get(F);l.get(Et)!==At&&(r.uniformBlockBinding(Et,At,F.__bindingPointIndex),l.set(Et,At))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ft=null,ht={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,y=null,M=null,E=null,A=null,C=new se(0,0,0),I=0,v=!1,b=null,L=null,V=null,k=null,$=null,Vt.set(0,0,r.canvas.width,r.canvas.height),$t.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:wt,bindFramebuffer:kt,drawBuffers:Rt,useProgram:ee,setBlending:nt,setMaterial:rt,setFlipSided:Q,setCullFace:Mt,setLineWidth:R,setPolygonOffset:Bt,setScissorTest:vt,activeTexture:Nt,bindTexture:ut,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:zt,texImage3D:st,updateUBOMapping:Ut,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:Pt,texSubImage2D:K,texSubImage3D:tt,compressedTexSubImage2D:H,compressedTexSubImage3D:Ct,scissor:_t,viewport:Lt,reset:Yt}}function Cx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return d?new OffscreenCanvas(w,x):Ta("canvas")}function _(w,x,U){let K=1;const tt=ut(w);if((tt.width>U||tt.height>U)&&(K=U/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(K*tt.width),Ct=Math.floor(K*tt.height);u===void 0&&(u=g(H,Ct));const dt=x?g(H,Ct):u;return dt.width=H,dt.height=Ct,dt.getContext("2d").drawImage(w,0,0,H,Ct),qt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+H+"x"+Ct+")."),dt}else return"data"in w&&qt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(w,x,U,K,tt=!1){if(w!==null){if(r[w]!==void 0)return r[w];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=x;if(x===r.RED&&(U===r.FLOAT&&(H=r.R32F),U===r.HALF_FLOAT&&(H=r.R16F),U===r.UNSIGNED_BYTE&&(H=r.R8)),x===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(H=r.R8UI),U===r.UNSIGNED_SHORT&&(H=r.R16UI),U===r.UNSIGNED_INT&&(H=r.R32UI),U===r.BYTE&&(H=r.R8I),U===r.SHORT&&(H=r.R16I),U===r.INT&&(H=r.R32I)),x===r.RG&&(U===r.FLOAT&&(H=r.RG32F),U===r.HALF_FLOAT&&(H=r.RG16F),U===r.UNSIGNED_BYTE&&(H=r.RG8)),x===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(H=r.RG8UI),U===r.UNSIGNED_SHORT&&(H=r.RG16UI),U===r.UNSIGNED_INT&&(H=r.RG32UI),U===r.BYTE&&(H=r.RG8I),U===r.SHORT&&(H=r.RG16I),U===r.INT&&(H=r.RG32I)),x===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(H=r.RGB8UI),U===r.UNSIGNED_SHORT&&(H=r.RGB16UI),U===r.UNSIGNED_INT&&(H=r.RGB32UI),U===r.BYTE&&(H=r.RGB8I),U===r.SHORT&&(H=r.RGB16I),U===r.INT&&(H=r.RGB32I)),x===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(H=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(H=r.RGBA16UI),U===r.UNSIGNED_INT&&(H=r.RGBA32UI),U===r.BYTE&&(H=r.RGBA8I),U===r.SHORT&&(H=r.RGBA16I),U===r.INT&&(H=r.RGBA32I)),x===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(H=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(H=r.R11F_G11F_B10F)),x===r.RGBA){const Ct=tt?ya:ae.getTransfer(K);U===r.FLOAT&&(H=r.RGBA32F),U===r.HALF_FLOAT&&(H=r.RGBA16F),U===r.UNSIGNED_BYTE&&(H=Ct===ue?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(H=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(H=r.RGB5_A1)}return(H===r.R16F||H===r.R32F||H===r.RG16F||H===r.RG32F||H===r.RGBA16F||H===r.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function M(w,x){let U;return w?x===null||x===ii||x===Ts?U=r.DEPTH24_STENCIL8:x===Jn?U=r.DEPTH32F_STENCIL8:x===Es&&(U=r.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===Ts?U=r.DEPTH_COMPONENT24:x===Jn?U=r.DEPTH_COMPONENT32F:x===Es&&(U=r.DEPTH_COMPONENT16),U}function E(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ke&&w.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&h.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),b(x)}function I(w){const x=n.get(w);if(x.__webglInit===void 0)return;const U=w.source,K=f.get(U);if(K){const tt=K[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&v(w),Object.keys(K).length===0&&f.delete(U)}n.remove(w)}function v(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const U=w.source,K=f.get(U);delete K[x.__cacheKey],a.memory.textures--}function b(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let tt=0;tt<x.__webglFramebuffer[K].length;tt++)r.deleteFramebuffer(x.__webglFramebuffer[K][tt]);else r.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)r.deleteFramebuffer(x.__webglFramebuffer[K]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=w.textures;for(let K=0,tt=U.length;K<tt;K++){const H=n.get(U[K]);H.__webglTexture&&(r.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(U[K])}n.remove(w)}let L=0;function V(){L=0}function k(){const w=L;return w>=i.maxTextures&&qt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w}function $(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function W(w,x){const U=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const K=w.image;if(K===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,w,x);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+x)}function N(w,x){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){j(U,w,x);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+x)}function z(w,x){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){j(U,w,x);return}e.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+x)}function J(w,x){const U=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){it(U,w,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+x)}const ft={[pi]:r.REPEAT,[_i]:r.CLAMP_TO_EDGE,[ko]:r.MIRRORED_REPEAT},ht={[Ke]:r.NEAREST,[dd]:r.NEAREST_MIPMAP_NEAREST,[Vs]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[za]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},P={[_d]:r.NEVER,[Sd]:r.ALWAYS,[gd]:r.LESS,[Zl]:r.LEQUAL,[xd]:r.EQUAL,[Kl]:r.GEQUAL,[vd]:r.GREATER,[Md]:r.NOTEQUAL};function lt(w,x){if(x.type===Jn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===za||x.magFilter===Vs||x.magFilter===rr||x.minFilter===en||x.minFilter===za||x.minFilter===Vs||x.minFilter===rr)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ft[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ft[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ft[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ht[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,P[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==Vs&&x.minFilter!==rr||x.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(w,x){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const K=x.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const H=$(x);if(H!==w.__cacheKey){tt[H]===void 0&&(tt[H]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),tt[H].usedTimes++;const Ct=tt[w.__cacheKey];Ct!==void 0&&(tt[w.__cacheKey].usedTimes--,Ct.usedTimes===0&&v(x)),w.__cacheKey=H,w.__webglTexture=tt[H].texture}return U}function $t(w,x,U){return Math.floor(Math.floor(w/U)/x)}function Qt(w,x,U,K){const H=w.updateRanges;if(H.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,U,K,x.data);else{H.sort((st,_t)=>st.start-_t.start);let Ct=0;for(let st=1;st<H.length;st++){const _t=H[Ct],Lt=H[st],Ut=_t.start+_t.count,gt=$t(Lt.start,x.width,4),Yt=$t(_t.start,x.width,4);Lt.start<=Ut+1&&gt===Yt&&$t(Lt.start+Lt.count-1,x.width,4)===gt?_t.count=Math.max(_t.count,Lt.start+Lt.count-_t.start):(++Ct,H[Ct]=Lt)}H.length=Ct+1;const dt=r.getParameter(r.UNPACK_ROW_LENGTH),Pt=r.getParameter(r.UNPACK_SKIP_PIXELS),zt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let st=0,_t=H.length;st<_t;st++){const Lt=H[st],Ut=Math.floor(Lt.start/4),gt=Math.ceil(Lt.count/4),Yt=Ut%x.width,F=Math.floor(Ut/x.width),Et=gt,ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),e.texSubImage2D(r.TEXTURE_2D,0,Yt,F,Et,ct,U,K,x.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,zt)}}function j(w,x,U){let K=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=r.TEXTURE_3D);const tt=Vt(w,x),H=x.source;e.bindTexture(K,w.__webglTexture,r.TEXTURE0+U);const Ct=n.get(H);if(H.version!==Ct.__version||tt===!0){e.activeTexture(r.TEXTURE0+U);const dt=ae.getPrimaries(ae.workingColorSpace),Pt=x.colorSpace===Di?null:ae.getPrimaries(x.colorSpace),zt=x.colorSpace===Di||dt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let st=_(x.image,!1,i.maxTextureSize);st=Nt(x,st);const _t=s.convert(x.format,x.colorSpace),Lt=s.convert(x.type);let Ut=y(x.internalFormat,_t,Lt,x.colorSpace,x.isVideoTexture);lt(K,x);let gt;const Yt=x.mipmaps,F=x.isVideoTexture!==!0,Et=Ct.__version===void 0||tt===!0,ct=H.dataReady,At=E(x,st);if(x.isDepthTexture)Ut=M(x.format===sr,x.type),Et&&(F?e.texStorage2D(r.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Ut,st.width,st.height,0,_t,Lt,null));else if(x.isDataTexture)if(Yt.length>0){F&&Et&&e.texStorage2D(r.TEXTURE_2D,At,Ut,Yt[0].width,Yt[0].height);for(let ot=0,et=Yt.length;ot<et;ot++)gt=Yt[ot],F?ct&&e.texSubImage2D(r.TEXTURE_2D,ot,0,0,gt.width,gt.height,_t,Lt,gt.data):e.texImage2D(r.TEXTURE_2D,ot,Ut,gt.width,gt.height,0,_t,Lt,gt.data);x.generateMipmaps=!1}else F?(Et&&e.texStorage2D(r.TEXTURE_2D,At,Ut,st.width,st.height),ct&&Qt(x,st,_t,Lt)):e.texImage2D(r.TEXTURE_2D,0,Ut,st.width,st.height,0,_t,Lt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&Et&&e.texStorage3D(r.TEXTURE_2D_ARRAY,At,Ut,Yt[0].width,Yt[0].height,st.depth);for(let ot=0,et=Yt.length;ot<et;ot++)if(gt=Yt[ot],x.format!==Xn)if(_t!==null)if(F){if(ct)if(x.layerUpdates.size>0){const pt=dh(gt.width,gt.height,x.format,x.type);for(const D of x.layerUpdates){const X=gt.data.subarray(D*pt/gt.data.BYTES_PER_ELEMENT,(D+1)*pt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,D,gt.width,gt.height,1,_t,X)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,st.depth,_t,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,Ut,gt.width,gt.height,st.depth,0,gt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ct&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,st.depth,_t,Lt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ot,Ut,gt.width,gt.height,st.depth,0,_t,Lt,gt.data)}else{F&&Et&&e.texStorage2D(r.TEXTURE_2D,At,Ut,Yt[0].width,Yt[0].height);for(let ot=0,et=Yt.length;ot<et;ot++)gt=Yt[ot],x.format!==Xn?_t!==null?F?ct&&e.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,ot,Ut,gt.width,gt.height,0,gt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ct&&e.texSubImage2D(r.TEXTURE_2D,ot,0,0,gt.width,gt.height,_t,Lt,gt.data):e.texImage2D(r.TEXTURE_2D,ot,Ut,gt.width,gt.height,0,_t,Lt,gt.data)}else if(x.isDataArrayTexture)if(F){if(Et&&e.texStorage3D(r.TEXTURE_2D_ARRAY,At,Ut,st.width,st.height,st.depth),ct)if(x.layerUpdates.size>0){const ot=dh(st.width,st.height,x.format,x.type);for(const et of x.layerUpdates){const pt=st.data.subarray(et*ot/st.data.BYTES_PER_ELEMENT,(et+1)*ot/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,_t,Lt,pt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Lt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,_t,Lt,st.data);else if(x.isData3DTexture)F?(Et&&e.texStorage3D(r.TEXTURE_3D,At,Ut,st.width,st.height,st.depth),ct&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Lt,st.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,_t,Lt,st.data);else if(x.isFramebufferTexture){if(Et)if(F)e.texStorage2D(r.TEXTURE_2D,At,Ut,st.width,st.height);else{let ot=st.width,et=st.height;for(let pt=0;pt<At;pt++)e.texImage2D(r.TEXTURE_2D,pt,Ut,ot,et,0,_t,Lt,null),ot>>=1,et>>=1}}else if(Yt.length>0){if(F&&Et){const ot=ut(Yt[0]);e.texStorage2D(r.TEXTURE_2D,At,Ut,ot.width,ot.height)}for(let ot=0,et=Yt.length;ot<et;ot++)gt=Yt[ot],F?ct&&e.texSubImage2D(r.TEXTURE_2D,ot,0,0,_t,Lt,gt):e.texImage2D(r.TEXTURE_2D,ot,Ut,_t,Lt,gt);x.generateMipmaps=!1}else if(F){if(Et){const ot=ut(st);e.texStorage2D(r.TEXTURE_2D,At,Ut,ot.width,ot.height)}ct&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Lt,st)}else e.texImage2D(r.TEXTURE_2D,0,Ut,_t,Lt,st);m(x)&&p(K),Ct.__version=H.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function it(w,x,U){if(x.image.length!==6)return;const K=Vt(w,x),tt=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+U);const H=n.get(tt);if(tt.version!==H.__version||K===!0){e.activeTexture(r.TEXTURE0+U);const Ct=ae.getPrimaries(ae.workingColorSpace),dt=x.colorSpace===Di?null:ae.getPrimaries(x.colorSpace),Pt=x.colorSpace===Di||Ct===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const zt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!zt&&!st?_t[et]=_(x.image[et],!0,i.maxCubemapSize):_t[et]=st?x.image[et].image:x.image[et],_t[et]=Nt(x,_t[et]);const Lt=_t[0],Ut=s.convert(x.format,x.colorSpace),gt=s.convert(x.type),Yt=y(x.internalFormat,Ut,gt,x.colorSpace),F=x.isVideoTexture!==!0,Et=H.__version===void 0||K===!0,ct=tt.dataReady;let At=E(x,Lt);lt(r.TEXTURE_CUBE_MAP,x);let ot;if(zt){F&&Et&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,Yt,Lt.width,Lt.height);for(let et=0;et<6;et++){ot=_t[et].mipmaps;for(let pt=0;pt<ot.length;pt++){const D=ot[pt];x.format!==Xn?Ut!==null?F?ct&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,D.width,D.height,Ut,D.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Yt,D.width,D.height,0,D.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,D.width,D.height,Ut,gt,D.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Yt,D.width,D.height,0,Ut,gt,D.data)}}}else{if(ot=x.mipmaps,F&&Et){ot.length>0&&At++;const et=ut(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,At,Yt,et.width,et.height)}for(let et=0;et<6;et++)if(st){F?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Ut,gt,_t[et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Yt,_t[et].width,_t[et].height,0,Ut,gt,_t[et].data);for(let pt=0;pt<ot.length;pt++){const X=ot[pt].image[et].image;F?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,X.width,X.height,Ut,gt,X.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Yt,X.width,X.height,0,Ut,gt,X.data)}}else{F?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,gt,_t[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Yt,Ut,gt,_t[et]);for(let pt=0;pt<ot.length;pt++){const D=ot[pt];F?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ut,gt,D.image[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Yt,Ut,gt,D.image[et])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),H.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function wt(w,x,U,K,tt,H){const Ct=s.convert(U.format,U.colorSpace),dt=s.convert(U.type),Pt=y(U.internalFormat,Ct,dt,U.colorSpace),zt=n.get(x),st=n.get(U);if(st.__renderTarget=x,!zt.__hasExternalTextures){const _t=Math.max(1,x.width>>H),Lt=Math.max(1,x.height>>H);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,H,Pt,_t,Lt,x.depth,0,Ct,dt,null):e.texImage2D(tt,H,Pt,_t,Lt,0,Ct,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),Bt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,tt,st.__webglTexture,0,R(x)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,tt,st.__webglTexture,H),e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(w,x,U){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const K=x.depthTexture,tt=K&&K.isDepthTexture?K.type:null,H=M(x.stencilBuffer,tt),Ct=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Bt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R(x),H,x.width,x.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,R(x),H,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,H,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,w)}else{const K=x.textures;for(let tt=0;tt<K.length;tt++){const H=K[tt],Ct=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),Pt=y(H.internalFormat,Ct,dt,H.colorSpace);Bt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R(x),Pt,x.width,x.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,R(x),Pt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(w,x,U){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),tt.__webglTexture===void 0){tt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),lt(r.TEXTURE_CUBE_MAP,x.depthTexture);const zt=s.convert(x.depthTexture.format),st=s.convert(x.depthTexture.type);let _t;x.depthTexture.format===Si?_t=r.DEPTH_COMPONENT24:x.depthTexture.format===sr&&(_t=r.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,_t,x.width,x.height,0,zt,st,null)}}else W(x.depthTexture,0);const H=tt.__webglTexture,Ct=R(x),dt=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Pt=x.depthTexture.format===sr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Si)Bt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pt,dt,H,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,Pt,dt,H,0);else if(x.depthTexture.format===sr)Bt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pt,dt,H,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,Pt,dt,H,0);else throw new Error("Unknown depthTexture format")}function ee(w){const x=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=K}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)Rt(x.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?Rt(x.__webglFramebuffer[0],w,0):Rt(x.__webglFramebuffer,w,0)}else if(U){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=r.createRenderbuffer(),kt(x.__webglDepthbuffer[K],w,!1);else{const tt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,H)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),kt(x.__webglDepthbuffer,w,!1);else{const tt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,H)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function le(w,x,U){const K=n.get(w);x!==void 0&&wt(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&ee(w)}function xt(w){const x=w.texture,U=n.get(w),K=n.get(x);w.addEventListener("dispose",C);const tt=w.textures,H=w.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=x.version,a.memory.textures++),H){U.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[dt]=[];for(let Pt=0;Pt<x.mipmaps.length;Pt++)U.__webglFramebuffer[dt][Pt]=r.createFramebuffer()}else U.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let dt=0;dt<x.mipmaps.length;dt++)U.__webglFramebuffer[dt]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(Ct)for(let dt=0,Pt=tt.length;dt<Pt;dt++){const zt=n.get(tt[dt]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&Bt(w)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const Pt=tt[dt];U.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[dt]);const zt=s.convert(Pt.format,Pt.colorSpace),st=s.convert(Pt.type),_t=y(Pt.internalFormat,zt,st,Pt.colorSpace,w.isXRRenderTarget===!0),Lt=R(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,_t,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,U.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(U.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(H){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),lt(r.TEXTURE_CUBE_MAP,x);for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pt=0;Pt<x.mipmaps.length;Pt++)wt(U.__webglFramebuffer[dt][Pt],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Pt);else wt(U.__webglFramebuffer[dt],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let dt=0,Pt=tt.length;dt<Pt;dt++){const zt=tt[dt],st=n.get(zt);let _t=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_t=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),lt(_t,zt),wt(U.__webglFramebuffer,w,zt,r.COLOR_ATTACHMENT0+dt,_t,0),m(zt)&&p(_t)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),lt(dt,x),x.mipmaps&&x.mipmaps.length>0)for(let Pt=0;Pt<x.mipmaps.length;Pt++)wt(U.__webglFramebuffer[Pt],w,x,r.COLOR_ATTACHMENT0,dt,Pt);else wt(U.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,dt,0);m(x)&&p(dt),e.unbindTexture()}w.depthBuffer&&ee(w)}function nt(w){const x=w.textures;for(let U=0,K=x.length;U<K;U++){const tt=x[U];if(m(tt)){const H=S(w),Ct=n.get(tt).__webglTexture;e.bindTexture(H,Ct),p(H),e.unbindTexture()}}}const rt=[],Q=[];function Mt(w){if(w.samples>0){if(Bt(w)===!1){const x=w.textures,U=w.width,K=w.height;let tt=r.COLOR_BUFFER_BIT;const H=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=n.get(w),dt=x.length>1;if(dt)for(let zt=0;zt<x.length;zt++)e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Pt=w.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let zt=0;zt<x.length;zt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[zt]);const st=n.get(x[zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,U,K,0,0,U,K,tt,r.NEAREST),l===!0&&(rt.length=0,Q.length=0,rt.push(r.COLOR_ATTACHMENT0+zt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(H),Q.push(H),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let zt=0;zt<x.length;zt++){e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[zt]);const st=n.get(x[zt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,st,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function R(w){return Math.min(i.maxSamples,w.samples)}function Bt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Nt(w,x){const U=w.colorSpace,K=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==qr&&U!==Di&&(ae.getTransfer(U)===ue?(K!==Xn||tt!==bn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",U)),x}function ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=le,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rx(r,t){function e(n,i=Di){let s;const a=ae.getTransfer(i);if(n===bn)return r.UNSIGNED_BYTE;if(n===Hl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===fu)return r.BYTE;if(n===du)return r.SHORT;if(n===Es)return r.UNSIGNED_SHORT;if(n===Gl)return r.INT;if(n===ii)return r.UNSIGNED_INT;if(n===Jn)return r.FLOAT;if(n===Mi)return r.HALF_FLOAT;if(n===_u)return r.ALPHA;if(n===gu)return r.RGB;if(n===Xn)return r.RGBA;if(n===Si)return r.DEPTH_COMPONENT;if(n===sr)return r.DEPTH_STENCIL;if(n===xu)return r.RED;if(n===Xl)return r.RED_INTEGER;if(n===Xr)return r.RG;if(n===ql)return r.RG_INTEGER;if(n===Yl)return r.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===_a)if(a===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Go||n===Ho||n===Wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===Ko||n===$o||n===Jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xo||n===qo)return a===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return s.COMPRESSED_R11_EAC;if(n===Ko)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$o)return s.COMPRESSED_RG11_EAC;if(n===Jo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jo)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===dl||n===pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fl)return a===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===_l||n===gl||n===xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ml)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Cu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:Px,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends mr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Lx,p={},S=e.getContextAttributes();let y=null,M=null;const E=[],A=[],C=new at;let I=null;const v=new Fn;v.viewport=new Ne;const b=new Fn;b.viewport=new Ne;const L=[v,b],V=new Vp;let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=E[j];return it===void 0&&(it=new oo,E[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=E[j];return it===void 0&&(it=new oo,E[j]=it),it.getGripSpace()},this.getHand=function(j){let it=E[j];return it===void 0&&(it=new oo,E[j]=it),it.getHandSpace()};function W(j){const it=A.indexOf(j.inputSource);if(it===-1)return;const wt=E[it];wt!==void 0&&(wt.update(j.inputSource,j.frame,c||a),wt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",z);for(let j=0;j<E.length;j++){const it=A[j];it!==null&&(A[j]=null,E[j].disconnect(it))}k=null,$=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(y),d=null,f=null,u=null,i=null,M=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",N),i.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,kt=null,Rt=null;S.depth&&(Rt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?sr:Si,kt=S.stencil?Ts:ii);const ee={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ei(f.textureWidth,f.textureHeight,{format:Xn,type:bn,depthTexture:new As(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ei(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let it=0;it<j.removed.length;it++){const wt=j.removed[it],kt=A.indexOf(wt);kt>=0&&(A[kt]=null,E[kt].disconnect(wt))}for(let it=0;it<j.added.length;it++){const wt=j.added[it];let kt=A.indexOf(wt);if(kt===-1){for(let ee=0;ee<E.length;ee++)if(ee>=A.length){A.push(wt),kt=ee;break}else if(A[ee]===null){A[ee]=wt,kt=ee;break}if(kt===-1)break}const Rt=E[kt];Rt&&Rt.connect(wt)}}const J=new O,ft=new O;function ht(j,it,wt){J.setFromMatrixPosition(it.matrixWorld),ft.setFromMatrixPosition(wt.matrixWorld);const kt=J.distanceTo(ft),Rt=it.projectionMatrix.elements,ee=wt.projectionMatrix.elements,le=Rt[14]/(Rt[10]-1),xt=Rt[14]/(Rt[10]+1),nt=(Rt[9]+1)/Rt[5],rt=(Rt[9]-1)/Rt[5],Q=(Rt[8]-1)/Rt[0],Mt=(ee[8]+1)/ee[0],R=le*Q,Bt=le*Mt,vt=kt/(-Q+Mt),Nt=vt*-Q;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Nt),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const ut=le+vt,w=xt+vt,x=R-Nt,U=Bt+(kt-Nt),K=nt*xt/w*ut,tt=rt*xt/w*ut;j.projectionMatrix.makePerspective(x,U,K,tt,ut,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function P(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let it=j.near,wt=j.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),V.near=b.near=v.near=it,V.far=b.far=v.far=wt,(k!==V.near||$!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,$=V.far),V.layers.mask=j.layers.mask|6,v.layers.mask=V.layers.mask&3,b.layers.mask=V.layers.mask&5;const kt=j.parent,Rt=V.cameras;P(V,kt);for(let ee=0;ee<Rt.length;ee++)P(Rt[ee],kt);Rt.length===2?ht(V,v,b):V.projectionMatrix.copy(v.projectionMatrix),lt(j,V,kt)};function lt(j,it,wt){wt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(wt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return p[j]};let Vt=null;function $t(j,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let kt=!1;wt.length!==V.cameras.length&&(V.cameras.length=0,kt=!0);for(let xt=0;xt<wt.length;xt++){const nt=wt[xt];let rt=null;if(d!==null)rt=d.getViewport(nt);else{const Mt=u.getViewSubImage(f,nt);rt=Mt.viewport,xt===0&&(t.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(M))}let Q=L[xt];Q===void 0&&(Q=new Fn,Q.layers.enable(xt),Q.viewport=new Ne,L[xt]=Q),Q.matrix.fromArray(nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(rt.x,rt.y,rt.width,rt.height),xt===0&&(V.matrix.copy(Q.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),kt===!0&&V.cameras.push(Q)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const xt=u.getDepthInformation(wt[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,i.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let xt=0;xt<wt.length;xt++){const nt=wt[xt].camera;if(nt){let rt=p[nt];rt||(rt=new Cu,p[nt]=rt);const Q=u.getCameraImage(nt);rt.sourceTexture=Q}}}}for(let wt=0;wt<E.length;wt++){const kt=A[wt],Rt=E[wt];kt!==null&&Rt!==void 0&&Rt.update(kt,it,c||a)}Vt&&Vt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Qt=new Bu;Qt.setAnimationLoop($t),this.setAnimationLoop=function(j){Vt=j},this.dispose=function(){}}}const ji=new ri,Nx=new Ae;function Ux(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,M=S.envMapRotation;y&&(m.envMap.value=y,ji.copy(M),ji.x*=-1,ji.y*=-1,ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(ji)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(S,E);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const y=u();S.__bindingPointIndex=y;const M=r.createBuffer(),E=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],M=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,C=M.length;A<C;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,b=I.length;v<b;v++){const L=I[v];if(d(L,A,v,E)===!0){const V=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let W=0;W<k.length;W++){const N=k[W],z=_(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,V+$,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,$),$+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,y,M,E){const A=S.value,C=y+"_"+M;if(E[C]===void 0)return typeof A=="number"||typeof A=="boolean"?E[C]=A:E[C]=A.clone(),!0;{const I=E[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return E[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(S){const y=S.uniforms;let M=0;const E=16;for(let C=0,I=y.length;C<I;C++){const v=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,L=v.length;b<L;b++){const V=v[b],k=Array.isArray(V.value)?V.value:[V.value];for(let $=0,W=k.length;$<W;$++){const N=k[$],z=_(N),J=M%E,ft=J%z.boundary,ht=J+ft;M+=ft,ht!==0&&E-ht<z.storage&&(M+=E-ht),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=z.storage}}}const A=M%E;return A>0&&(M+=E-A),S.__size=M,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qt("WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function Bx(){return qn===null&&(qn=new $d(Ox,16,16,Xr,Mi),qn.name="DFG_LUT",qn.minFilter=en,qn.magFilter=en,qn.wrapS=_i,qn.wrapT=_i,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class zx{constructor(t={}){const{canvas:e=yd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([Yl,ql,Xl]),p=new Set([bn,ii,Es,Ts,Hl,Wl]),S=new Uint32Array(4),y=new Int32Array(4);let M=null,E=null;const A=[],C=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=En;let L=0,V=0,k=null,$=-1,W=null;const N=new Ne,z=new Ne;let J=null;const ft=new se(0);let ht=0,P=e.width,lt=e.height,Vt=1,$t=null,Qt=null;const j=new Ne(0,0,P,lt),it=new Ne(0,0,P,lt);let wt=!1;const kt=new ic;let Rt=!1,ee=!1;const le=new Ae,xt=new O,nt=new Ne,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function Mt(){return k===null?Vt:1}let R=n;function Bt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",q,!1),R===null){const B="webgl2";if(R=Bt(B,T),R===null)throw Bt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw re("WebGLRenderer: "+T.message),T}let vt,Nt,ut,w,x,U,K,tt,H,Ct,dt,Pt,zt,st,_t,Lt,Ut,gt,Yt,F,Et,ct,At,ot;function et(){vt=new B0(R),vt.init(),ct=new Rx(R,vt),Nt=new R0(R,vt,t,ct),ut=new wx(R,vt),Nt.reversedDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),w=new V0(R),x=new fx,U=new Cx(R,vt,ut,x,Nt,ct,w),K=new D0(v),tt=new O0(v),H=new Xp(R),At=new w0(R,H),Ct=new z0(R,H,w,At),dt=new H0(R,Ct,H,w),Yt=new G0(R,Nt,U),Lt=new P0(x),Pt=new ux(v,K,tt,vt,Nt,At,Lt),zt=new Ux(v,x),st=new px,_t=new Mx(vt),gt=new A0(v,K,tt,ut,dt,g,l),Ut=new bx(v,dt,Nt),ot=new Fx(R,w,Nt,ut),F=new C0(R,vt,w),Et=new k0(R,vt,w),w.programs=Pt.programs,v.capabilities=Nt,v.extensions=vt,v.properties=x,v.renderLists=st,v.shadowMap=Ut,v.state=ut,v.info=w}et(),_!==bn&&(I=new X0(_,e.width,e.height,i,s));const pt=new Ix(v,R);this.xr=pt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Vt},this.setPixelRatio=function(T){T!==void 0&&(Vt=T,this.setSize(P,lt,!1))},this.getSize=function(T){return T.set(P,lt)},this.setSize=function(T,B,Z=!0){if(pt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,lt=B,e.width=Math.floor(T*Vt),e.height=Math.floor(B*Vt),Z===!0&&(e.style.width=T+"px",e.style.height=B+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(P*Vt,lt*Vt).floor()},this.setDrawingBufferSize=function(T,B,Z){P=T,lt=B,Vt=Z,e.width=Math.floor(T*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(_===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,B,Z,Y){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,B,Z,Y),ut.viewport(N.copy(j).multiplyScalar(Vt).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,B,Z,Y){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,B,Z,Y),ut.scissor(z.copy(it).multiplyScalar(Vt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(T){ut.setScissorTest(wt=T)},this.setOpaqueSort=function(T){$t=T},this.setTransparentSort=function(T){Qt=T},this.getClearColor=function(T){return T.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Z=!0){let Y=0;if(T){let G=!1;if(k!==null){const yt=k.texture.format;G=m.has(yt)}if(G){const yt=k.texture.type,Dt=p.has(yt),bt=gt.getClearColor(),It=gt.getClearAlpha(),Ot=bt.r,Wt=bt.g,Gt=bt.b;Dt?(S[0]=Ot,S[1]=Wt,S[2]=Gt,S[3]=It,R.clearBufferuiv(R.COLOR,0,S)):(y[0]=Ot,y[1]=Wt,y[2]=Gt,y[3]=It,R.clearBufferiv(R.COLOR,0,y))}else Y|=R.COLOR_BUFFER_BIT}B&&(Y|=R.DEPTH_BUFFER_BIT),Z&&(Y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",q,!1),gt.dispose(),st.dispose(),_t.dispose(),x.dispose(),K.dispose(),tt.dispose(),dt.dispose(),At.dispose(),ot.dispose(),Pt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",fe),pt.removeEventListener("sessionend",sn),_e.stop()};function D(T){T.preventDefault(),zc("WebGLRenderer: Context Lost."),b=!0}function X(){zc("WebGLRenderer: Context Restored."),b=!1;const T=w.autoReset,B=Ut.enabled,Z=Ut.autoUpdate,Y=Ut.needsUpdate,G=Ut.type;et(),w.autoReset=T,Ut.enabled=B,Ut.autoUpdate=Z,Ut.needsUpdate=Y,Ut.type=G}function q(T){re("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mt(T){const B=T.target;B.removeEventListener("dispose",mt),Ft(B)}function Ft(T){St(T),x.remove(T)}function St(T){const B=x.get(T).programs;B!==void 0&&(B.forEach(function(Z){Pt.releaseProgram(Z)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Z,Y,G,yt){B===null&&(B=rt);const Dt=G.isMesh&&G.matrixWorld.determinant()<0,bt=Ze(T,B,Z,Y,G);ut.setMaterial(Y,Dt);let It=Z.index,Ot=1;if(Y.wireframe===!0){if(It=Ct.getWireframeAttribute(Z),It===void 0)return;Ot=2}const Wt=Z.drawRange,Gt=Z.attributes.position;let te=Wt.start*Ot,pe=(Wt.start+Wt.count)*Ot;yt!==null&&(te=Math.max(te,yt.start*Ot),pe=Math.min(pe,(yt.start+yt.count)*Ot)),It!==null?(te=Math.max(te,0),pe=Math.min(pe,It.count)):Gt!=null&&(te=Math.max(te,0),pe=Math.min(pe,Gt.count));const Le=pe-te;if(Le<0||Le===1/0)return;At.setup(G,Y,bt,Z,It);let Ie,ve=F;if(It!==null&&(Ie=H.get(It),ve=Et,ve.setIndex(Ie)),G.isMesh)Y.wireframe===!0?(ut.setLineWidth(Y.wireframeLinewidth*Mt()),ve.setMode(R.LINES)):ve.setMode(R.TRIANGLES);else if(G.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),ut.setLineWidth(Ht*Mt()),G.isLineSegments?ve.setMode(R.LINES):G.isLineLoop?ve.setMode(R.LINE_LOOP):ve.setMode(R.LINE_STRIP)}else G.isPoints?ve.setMode(R.POINTS):G.isSprite&&ve.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ve.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ht=G._multiDrawStarts,he=G._multiDrawCounts,oe=G._multiDrawCount,vn=It?H.get(It).bytesPerElement:1,gr=x.get(Y).currentProgram.getUniforms();for(let Mn=0;Mn<oe;Mn++)gr.setValue(R,"_gl_DrawID",Mn),ve.render(Ht[Mn]/vn,he[Mn])}else if(G.isInstancedMesh)ve.renderInstances(te,Le,G.count);else if(Z.isInstancedBufferGeometry){const Ht=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,he=Math.min(Z.instanceCount,Ht);ve.renderInstances(te,Le,he)}else ve.render(te,Le)};function Zt(T,B,Z){T.transparent===!0&&T.side===On&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,Xt(T,B,Z),T.side=zi,T.needsUpdate=!0,Xt(T,B,Z),T.side=On):Xt(T,B,Z)}this.compile=function(T,B,Z=null){Z===null&&(Z=T),E=_t.get(Z),E.init(B),C.push(E),Z.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==Z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const Y=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const yt=G.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){const bt=yt[Dt];Zt(bt,Z,G),Y.add(bt)}else Zt(yt,Z,G),Y.add(yt)}),E=C.pop(),Y},this.compileAsync=function(T,B,Z=null){const Y=this.compile(T,B,Z);return new Promise(G=>{function yt(){if(Y.forEach(function(Dt){x.get(Dt).currentProgram.isReady()&&Y.delete(Dt)}),Y.size===0){G(T);return}setTimeout(yt,10)}vt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ne=null;function kn(T){ne&&ne(T)}function fe(){_e.stop()}function sn(){_e.start()}const _e=new Bu;_e.setAnimationLoop(kn),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(T){ne=T,pt.setAnimationLoop(T),T===null?_e.stop():_e.start()},pt.addEventListener("sessionstart",fe),pt.addEventListener("sessionend",sn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Z=pt.enabled===!0&&pt.isPresenting===!0,Y=I!==null&&(k===null||Z)&&I.begin(v,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(B),B=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,k),E=_t.get(T,C.length),E.init(B),C.push(E),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),kt.setFromProjectionMatrix(le,jn,B.reversedDepth),ee=this.localClippingEnabled,Rt=Lt.init(this.clippingPlanes,ee),M=st.get(T,A.length),M.init(),A.push(M),pt.enabled===!0&&pt.isPresenting===!0){const Dt=v.xr.getDepthSensingMesh();Dt!==null&&We(Dt,B,-1/0,v.sortObjects)}We(T,B,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort($t,Qt),Q=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Q&&gt.addToRenderList(M,T),this.info.render.frame++,Rt===!0&&Lt.beginShadows();const G=E.state.shadowsArray;if(Ut.render(G,T,B),Rt===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&I.hasRenderPass())===!1){const Dt=M.opaque,bt=M.transmissive;if(E.setupLights(),B.isArrayCamera){const It=B.cameras;if(bt.length>0)for(let Ot=0,Wt=It.length;Ot<Wt;Ot++){const Gt=It[Ot];ce(Dt,bt,T,Gt)}Q&&gt.render(T);for(let Ot=0,Wt=It.length;Ot<Wt;Ot++){const Gt=It[Ot];ye(M,T,Gt,Gt.viewport)}}else bt.length>0&&ce(Dt,bt,T,B),Q&&gt.render(T),ye(M,T,B)}k!==null&&V===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),Y&&I.end(v),T.isScene===!0&&T.onAfterRender(v,T,B),At.resetDefaultState(),$=-1,W=null,C.pop(),C.length>0?(E=C[C.length-1],Rt===!0&&Lt.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function We(T,B,Z,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||kt.intersectsSprite(T)){Y&&nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const Dt=dt.update(T),bt=T.material;bt.visible&&M.push(T,Dt,bt,Z,nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||kt.intersectsObject(T))){const Dt=dt.update(T),bt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),nt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),nt.copy(Dt.boundingSphere.center)),nt.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(bt)){const It=Dt.groups;for(let Ot=0,Wt=It.length;Ot<Wt;Ot++){const Gt=It[Ot],te=bt[Gt.materialIndex];te&&te.visible&&M.push(T,Dt,te,Z,nt.z,Gt)}}else bt.visible&&M.push(T,Dt,bt,Z,nt.z,null)}}const yt=T.children;for(let Dt=0,bt=yt.length;Dt<bt;Dt++)We(yt[Dt],B,Z,Y)}function ye(T,B,Z,Y){const{opaque:G,transmissive:yt,transparent:Dt}=T;E.setupLightsView(Z),Rt===!0&&Lt.setGlobalState(v.clippingPlanes,Z),Y&&ut.viewport(N.copy(Y)),G.length>0&&de(G,B,Z),yt.length>0&&de(yt,B,Z),Dt.length>0&&de(Dt,B,Z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ce(T,B,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const te=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:te?Mi:bn,minFilter:rr,samples:Nt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const yt=E.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||N;yt.setSize(Dt.z*v.transmissionResolutionScale,Dt.w*v.transmissionResolutionScale);const bt=v.getRenderTarget(),It=v.getActiveCubeFace(),Ot=v.getActiveMipmapLevel();v.setRenderTarget(yt),v.getClearColor(ft),ht=v.getClearAlpha(),ht<1&&v.setClearColor(16777215,.5),v.clear(),Q&&gt.render(Z);const Wt=v.toneMapping;v.toneMapping=ti;const Gt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),Rt===!0&&Lt.setGlobalState(v.clippingPlanes,Y),de(T,Z,Y),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let pe=0,Le=B.length;pe<Le;pe++){const Ie=B[pe],{object:ve,geometry:Ht,material:he,group:oe}=Ie;if(he.side===On&&ve.layers.test(Y.layers)){const vn=he.side;he.side=dn,he.needsUpdate=!0,we(ve,Z,Y,Ht,he,oe),he.side=vn,he.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}v.setRenderTarget(bt,It,Ot),v.setClearColor(ft,ht),Gt!==void 0&&(Y.viewport=Gt),v.toneMapping=Wt}function de(T,B,Z){const Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,yt=T.length;G<yt;G++){const Dt=T[G],{object:bt,geometry:It,group:Ot}=Dt;let Wt=Dt.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),bt.layers.test(Z.layers)&&we(bt,B,Z,It,Wt,Ot)}}function we(T,B,Z,Y,G,yt){T.onBeforeRender(v,B,Z,Y,G,yt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,B,Z,Y,T,yt),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,v.renderBufferDirect(Z,B,Y,G,T,yt),G.side=zi,G.needsUpdate=!0,v.renderBufferDirect(Z,B,Y,G,T,yt),G.side=On):v.renderBufferDirect(Z,B,Y,G,T,yt),T.onAfterRender(v,B,Z,Y,G,yt)}function Xt(T,B,Z){B.isScene!==!0&&(B=rt);const Y=x.get(T),G=E.state.lights,yt=E.state.shadowsArray,Dt=G.state.version,bt=Pt.getParameters(T,G.state,yt,B,Z),It=Pt.getProgramCacheKey(bt);let Ot=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?tt:K).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",mt),Ot=new Map,Y.programs=Ot);let Wt=Ot.get(It);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===Dt)return Ye(T,bt),Wt}else bt.uniforms=Pt.getUniforms(T),T.onBeforeCompile(bt,v),Wt=Pt.acquireProgram(bt,It),Ot.set(It,Wt),Y.uniforms=bt.uniforms;const Gt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=Lt.uniform),Ye(T,bt),Y.needsLights=xe(T),Y.lightsStateVersion=Dt,Y.needsLights&&(Gt.ambientLightColor.value=G.state.ambient,Gt.lightProbe.value=G.state.probe,Gt.directionalLights.value=G.state.directional,Gt.directionalLightShadows.value=G.state.directionalShadow,Gt.spotLights.value=G.state.spot,Gt.spotLightShadows.value=G.state.spotShadow,Gt.rectAreaLights.value=G.state.rectArea,Gt.ltc_1.value=G.state.rectAreaLTC1,Gt.ltc_2.value=G.state.rectAreaLTC2,Gt.pointLights.value=G.state.point,Gt.pointLightShadows.value=G.state.pointShadow,Gt.hemisphereLights.value=G.state.hemi,Gt.directionalShadowMap.value=G.state.directionalShadowMap,Gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Gt.spotShadowMap.value=G.state.spotShadowMap,Gt.spotLightMatrix.value=G.state.spotLightMatrix,Gt.spotLightMap.value=G.state.spotLightMap,Gt.pointShadowMap.value=G.state.pointShadowMap,Gt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function ge(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=xa.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ye(T,B){const Z=x.get(T);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Ze(T,B,Z,Y,G){B.isScene!==!0&&(B=rt),U.resetTextureUnits();const yt=B.fog,Dt=Y.isMeshStandardMaterial?B.environment:null,bt=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qr,It=(Y.isMeshStandardMaterial?tt:K).get(Y.envMap||Dt),Ot=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Wt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Gt=!!Z.morphAttributes.position,te=!!Z.morphAttributes.normal,pe=!!Z.morphAttributes.color;let Le=ti;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Le=v.toneMapping);const Ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=Ie!==void 0?Ie.length:0,Ht=x.get(Y),he=E.state.lights;if(Rt===!0&&(ee===!0||T!==W)){const an=T===W&&Y.id===$;Lt.setState(Y,T,an)}let oe=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==he.state.version||Ht.outputColorSpace!==bt||G.isBatchedMesh&&Ht.batching===!1||!G.isBatchedMesh&&Ht.batching===!0||G.isBatchedMesh&&Ht.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ht.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ht.instancing===!1||!G.isInstancedMesh&&Ht.instancing===!0||G.isSkinnedMesh&&Ht.skinning===!1||!G.isSkinnedMesh&&Ht.skinning===!0||G.isInstancedMesh&&Ht.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ht.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ht.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ht.instancingMorph===!1&&G.morphTexture!==null||Ht.envMap!==It||Y.fog===!0&&Ht.fog!==yt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Lt.numPlanes||Ht.numIntersection!==Lt.numIntersection)||Ht.vertexAlphas!==Ot||Ht.vertexTangents!==Wt||Ht.morphTargets!==Gt||Ht.morphNormals!==te||Ht.morphColors!==pe||Ht.toneMapping!==Le||Ht.morphTargetsCount!==ve)&&(oe=!0):(oe=!0,Ht.__version=Y.version);let vn=Ht.currentProgram;oe===!0&&(vn=Xt(Y,B,G));let gr=!1,Mn=!1,is=!1;const Ee=vn.getUniforms(),cn=Ht.uniforms;if(ut.useProgram(vn.program)&&(gr=!0,Mn=!0,is=!0),Y.id!==$&&($=Y.id,Mn=!0),gr||W!==T){ut.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ee.setValue(R,"projectionMatrix",T.projectionMatrix),Ee.setValue(R,"viewMatrix",T.matrixWorldInverse);const hn=Ee.map.cameraPosition;hn!==void 0&&hn.setValue(R,xt.setFromMatrixPosition(T.matrixWorld)),Nt.logarithmicDepthBuffer&&Ee.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Mn=!0,is=!0)}if(Ht.needsLights&&(he.state.directionalShadowMap.length>0&&Ee.setValue(R,"directionalShadowMap",he.state.directionalShadowMap,U),he.state.spotShadowMap.length>0&&Ee.setValue(R,"spotShadowMap",he.state.spotShadowMap,U),he.state.pointShadowMap.length>0&&Ee.setValue(R,"pointShadowMap",he.state.pointShadowMap,U)),G.isSkinnedMesh){Ee.setOptional(R,G,"bindMatrix"),Ee.setOptional(R,G,"bindMatrixInverse");const an=G.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ee.setValue(R,"boneTexture",an.boneTexture,U))}G.isBatchedMesh&&(Ee.setOptional(R,G,"batchingTexture"),Ee.setValue(R,"batchingTexture",G._matricesTexture,U),Ee.setOptional(R,G,"batchingIdTexture"),Ee.setValue(R,"batchingIdTexture",G._indirectTexture,U),Ee.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(R,"batchingColorTexture",G._colorsTexture,U));const In=Z.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Yt.update(G,Z,vn),(Mn||Ht.receiveShadow!==G.receiveShadow)&&(Ht.receiveShadow=G.receiveShadow,Ee.setValue(R,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(cn.envMap.value=It,cn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(cn.envMapIntensity.value=B.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Bx()),Mn&&(Ee.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Te(cn,is),yt&&Y.fog===!0&&zt.refreshFogUniforms(cn,yt),zt.refreshMaterialUniforms(cn,Y,Vt,lt,E.state.transmissionRenderTarget[T.id]),xa.upload(R,ge(Ht),cn,U)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xa.upload(R,ge(Ht),cn,U),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(R,"center",G.center),Ee.setValue(R,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(R,"normalMatrix",G.normalMatrix),Ee.setValue(R,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let hn=0,Ba=an.length;hn<Ba;hn++){const Xi=an[hn];ot.update(Xi,vn),ot.bind(Xi,vn)}}return vn}function Te(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function xe(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,B,Z){const Y=x.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=B,x.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const Z=x.get(T);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0};const Wi=R.createFramebuffer();this.setRenderTarget=function(T,B=0,Z=0){k=T,L=B,V=Z;let Y=null,G=!1,yt=!1;if(T){const bt=x.get(T);if(bt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(R.FRAMEBUFFER,bt.__webglFramebuffer),N.copy(T.viewport),z.copy(T.scissor),J=T.scissorTest,ut.viewport(N),ut.scissor(z),ut.setScissorTest(J),$=-1;return}else if(bt.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(bt.__hasExternalTextures)U.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Wt=T.depthTexture;if(bt.__boundDepthTexture!==Wt){if(Wt!==null&&x.has(Wt)&&(T.width!==Wt.image.width||T.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(yt=!0);const Ot=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?Y=Ot[B][Z]:Y=Ot[B],G=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?Y=x.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?Y=Ot[Z]:Y=Ot,N.copy(T.viewport),z.copy(T.scissor),J=T.scissorTest}else N.copy(j).multiplyScalar(Vt).floor(),z.copy(it).multiplyScalar(Vt).floor(),J=wt;if(Z!==0&&(Y=Wi),ut.bindFramebuffer(R.FRAMEBUFFER,Y)&&ut.drawBuffers(T,Y),ut.viewport(N),ut.scissor(z),ut.setScissorTest(J),G){const bt=x.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,Z)}else if(yt){const bt=B;for(let It=0;It<T.textures.length;It++){const Ot=x.get(T.textures[It]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+It,Ot.__webglTexture,Z,bt)}}else if(T!==null&&Z!==0){const bt=x.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bt.__webglTexture,Z)}$=-1},this.readRenderTargetPixels=function(T,B,Z,Y,G,yt,Dt,bt=0){if(!(T&&T.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){ut.bindFramebuffer(R.FRAMEBUFFER,It);try{const Ot=T.textures[bt],Wt=Ot.format,Gt=Ot.type;if(!Nt.textureFormatReadable(Wt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Gt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&Z>=0&&Z<=T.height-G&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+bt),R.readPixels(B,Z,Y,G,ct.convert(Wt),ct.convert(Gt),yt))}finally{const Ot=k!==null?x.get(k).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,B,Z,Y,G,yt,Dt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(B>=0&&B<=T.width-Y&&Z>=0&&Z<=T.height-G){ut.bindFramebuffer(R.FRAMEBUFFER,It);const Ot=T.textures[bt],Wt=Ot.format,Gt=Ot.type;if(!Nt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,te),R.bufferData(R.PIXEL_PACK_BUFFER,yt.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+bt),R.readPixels(B,Z,Y,G,ct.convert(Wt),ct.convert(Gt),0);const pe=k!==null?x.get(k).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,pe);const Le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ed(R,Le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,te),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,yt),R.deleteBuffer(te),R.deleteSync(Le),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Z=0){const Y=Math.pow(2,-Z),G=Math.floor(T.image.width*Y),yt=Math.floor(T.image.height*Y),Dt=B!==null?B.x:0,bt=B!==null?B.y:0;U.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,Dt,bt,G,yt),ut.unbindTexture()};const Hf=R.createFramebuffer(),Wf=R.createFramebuffer();this.copyTextureToTexture=function(T,B,Z=null,Y=null,G=0,yt=null){yt===null&&(G!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=G,G=0):yt=0);let Dt,bt,It,Ot,Wt,Gt,te,pe,Le;const Ie=T.isCompressedTexture?T.mipmaps[yt]:T.image;if(Z!==null)Dt=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,Ot=Z.min.x,Wt=Z.min.y,Gt=Z.isBox3?Z.min.z:0;else{const In=Math.pow(2,-G);Dt=Math.floor(Ie.width*In),bt=Math.floor(Ie.height*In),T.isDataArrayTexture?It=Ie.depth:T.isData3DTexture?It=Math.floor(Ie.depth*In):It=1,Ot=0,Wt=0,Gt=0}Y!==null?(te=Y.x,pe=Y.y,Le=Y.z):(te=0,pe=0,Le=0);const ve=ct.convert(B.format),Ht=ct.convert(B.type);let he;B.isData3DTexture?(U.setTexture3D(B,0),he=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),he=R.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),he=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const oe=R.getParameter(R.UNPACK_ROW_LENGTH),vn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),gr=R.getParameter(R.UNPACK_SKIP_PIXELS),Mn=R.getParameter(R.UNPACK_SKIP_ROWS),is=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ie.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ot),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Gt);const Ee=T.isDataArrayTexture||T.isData3DTexture,cn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const In=x.get(T),an=x.get(B),hn=x.get(In.__renderTarget),Ba=x.get(an.__renderTarget);ut.bindFramebuffer(R.READ_FRAMEBUFFER,hn.__webglFramebuffer),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let Xi=0;Xi<It;Xi++)Ee&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(T).__webglTexture,G,Gt+Xi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(B).__webglTexture,yt,Le+Xi)),R.blitFramebuffer(Ot,Wt,Dt,bt,te,pe,Dt,bt,R.DEPTH_BUFFER_BIT,R.NEAREST);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||x.has(T)){const In=x.get(T),an=x.get(B);ut.bindFramebuffer(R.READ_FRAMEBUFFER,Hf),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,Wf);for(let hn=0;hn<It;hn++)Ee?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,In.__webglTexture,G,Gt+hn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,In.__webglTexture,G),cn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,an.__webglTexture,yt,Le+hn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,an.__webglTexture,yt),G!==0?R.blitFramebuffer(Ot,Wt,Dt,bt,te,pe,Dt,bt,R.COLOR_BUFFER_BIT,R.NEAREST):cn?R.copyTexSubImage3D(he,yt,te,pe,Le+hn,Ot,Wt,Dt,bt):R.copyTexSubImage2D(he,yt,te,pe,Ot,Wt,Dt,bt);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else cn?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(he,yt,te,pe,Le,Dt,bt,It,ve,Ht,Ie.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(he,yt,te,pe,Le,Dt,bt,It,ve,Ie.data):R.texSubImage3D(he,yt,te,pe,Le,Dt,bt,It,ve,Ht,Ie):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,yt,te,pe,Dt,bt,ve,Ht,Ie.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,yt,te,pe,Ie.width,Ie.height,ve,Ie.data):R.texSubImage2D(R.TEXTURE_2D,yt,te,pe,Dt,bt,ve,Ht,Ie);R.pixelStorei(R.UNPACK_ROW_LENGTH,oe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,gr),R.pixelStorei(R.UNPACK_SKIP_ROWS,Mn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,is),yt===0&&B.generateMipmaps&&R.generateMipmap(he),ut.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){L=0,V=0,k=null,ut.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Oh={type:"change"},fc={type:"start"},Hu={type:"end"},ha=new jl,Bh=new Pi,kx=Math.cos(70*bd.DEG2RAD),Ve=new O,fn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class Vx extends Hp{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new dr,this._lastTargetPosition=new O,this._quat=new dr().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fh,this._sphericalDelta=new fh,this._scale=1,this._panOffset=new O,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new O,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hx.bind(this),this._onPointerDown=Gx.bind(this),this._onPointerUp=Wx.bind(this),this._onContextMenu=Jx.bind(this),this._onMouseWheel=Yx.bind(this),this._onKeyDown=Zx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=$x.bind(this),this._onMouseDown=Xx.bind(this),this._onMouseMove=qx.bind(this),this._interceptControlDown=jx.bind(this),this._interceptControlUp=Qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oh),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ve.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<kx?this.object.lookAt(this.target):(Bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(Bh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(Oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ve.copy(i).sub(this.target);let s=Ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Gx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Hx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Wx(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hu),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Xx(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=me.DOLLY;break;case Or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=me.ROTATE}break;case Or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(fc)}function qx(r){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Yx(r){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(r.preventDefault(),this.dispatchEvent(fc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Hu))}function Zx(r){this.enabled!==!1&&this._handleKeyDown(r)}function Kx(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=me.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=me.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(fc)}function $x(r){switch(this._trackPointer(r),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=me.NONE}}function Jx(r){this.enabled!==!1&&r.preventDefault()}function jx(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qx(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kr={duration:.5,overwrite:!1,delay:0},dc,Je,be,Bn=1e8,Se=1/Bn,Al=Math.PI*2,tv=Al/4,ev=0,Xu=Math.sqrt,nv=Math.cos,iv=Math.sin,qe=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},yi=function(t){return typeof t=="number"},pc=function(t){return typeof t>"u"},ai=function(t){return typeof t=="object"},pn=function(t){return t!==!1},mc=function(){return typeof window<"u"},ua=function(t){return Ue(t)||qe(t)},qu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,rv=/random\([^)]+\)/g,sv=/,\s*/g,zh=/(?:-?\.?\d|\.)+/gi,Yu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,So=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,av=/[^,'"\[\]\s]+/gi,ov=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,Yn,wl,_c,Pn={},ba={},Ku,$u=function(t){return(ba=$r(t,Pn))&&xn},gc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ps=function(t,e){return!e&&console.warn(t)},Ju=function(t,e){return t&&(Pn[t]=e)&&ba&&(ba[t]=e)||Pn},Ds=function(){return 0},lv={suppressEvents:!0,isStart:!0,kill:!1},va={suppressEvents:!0,kill:!1},cv={suppressEvents:!0},xc={},Oi=[],Cl={},ju,Tn={},yo={},kh=30,Ma=[],vc="",Mc=function(t){var e=t[0],n,i;if(ai(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ma.length;i--&&!Ma[i].targetTest(e););n=Ma[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ef(t[i],n)))||t.splice(i,1);return t},lr=function(t){return t._gsap||Mc(zn(t))[0]._gsap},Qu=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():pc(n)&&t.getAttribute&&t.getAttribute(e)||n},mn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},kr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},hv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Aa=function(){var t=Oi.length,e=Oi.slice(0),n,i;for(Cl={},Oi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sc=function(t){return!!(t._initted||t._startAt||t.add)},tf=function(t,e,n,i){Oi.length&&!Je&&Aa(),t.render(e,n,!!(Je&&e<0&&Sc(t))),Oi.length&&!Je&&Aa()},ef=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(av).length<2?e:qe(t)?t.trim():t},nf=function(t){return t},Dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},uv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},$r=function(t,e){for(var n in e)t[n]=e[n];return t},Vh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ai(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ms=function(t){var e=t.parent||Re,n=t.keyframes?uv(rn(t.keyframes)):Dn;if(pn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},fv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rf=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ua=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ki=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},cr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},dv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Rl=function(t,e,n,i){return t._startAt&&(Je?t._startAt.revert(va):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},pv=function r(t){return!t||t._ts&&r(t.parent)},Gh=function(t){return t._repeat?Jr(t._tTime,t=t.duration()+t._rDelay)*t:0},Jr=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},Ca=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fa=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Oa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fa(t),n._dirty||cr(n,t)),t},sf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ca(t.rawTime(),e),(!e._dur||ks(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),cr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},$n=function(t,e,n,i){return e.parent&&ki(e),e._start=Ce((yi(n)?n:n||t!==Re?Un(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rf(t,e,"_first","_last",t._sort?"_start":0),Pl(e)||(t._recent=e),i||sf(t,e),t._ts<0&&Oa(t,t._tTime),t},af=function(t,e){return(Pn.ScrollTrigger||gc("scrollTrigger",e))&&Pn.ScrollTrigger.create(e,t)},of=function(t,e,n,i,s){if(Ec(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ju!==An.frame)return Oi.push(t),t._lazy=[s,i],1},mv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Pl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},_v=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&mv(t)&&!(!t._initted&&Pl(t))||(t._ts<0||t._dp._ts<0)&&!Pl(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ks(0,t._tDur,e),h=Jr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Jr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Je||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&of(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Rl(t,e,n,!0),t._onUpdate&&!n&&wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ki(t,1),!n&&!Je&&(wn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},gv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},jr=function(t,e,n,i){var s=t._repeat,a=Ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Oa(t,t._tTime=t._tDur*o),t.parent&&Fa(t),n||cr(t.parent,t),t},Hh=function(t){return t instanceof ln?cr(t):jr(t,t._dur)},xv={_start:0,endTime:Ds,totalDuration:Ds},Un=function r(t,e,n){var i=t.labels,s=t._recent||xv,a=t.duration()>=Bn?s.endTime(!1):t._dur,o,l,c;return qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ss=function(t,e,n){var i=yi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;a.immediateRender=pn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ze(e[0],a,e[s+1])},Hi=function(t,e){return t||t===0?e(t):e},ks=function(t,e,n){return n<t?t:n>e?e:n},tn=function(t,e){return!qe(t)||!(e=ov.exec(t))?"":e[1]},vv=function(t,e,n){return Hi(n,function(i){return ks(t,e,i)})},Dl=[].slice,lf=function(t,e){return t&&ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ai(t[0]))&&!t.nodeType&&t!==Yn},Mv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return qe(i)&&!e||lf(i,1)?(s=n).push.apply(s,zn(i)):n.push(i)})||n},zn=function(t,e,n){return be&&!e&&be.selector?be.selector(t):qe(t)&&!n&&(wl||!Qr())?Dl.call((e||_c).querySelectorAll(t),0):rn(t)?Mv(t,n):lf(t)?Dl.call(t,0):t?[t]:[]},Ll=function(t){return t=zn(t)[0]||Ps("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return zn(e,n.querySelectorAll?n:n===t?Ps("Invalid scope")||_c.createElement("div"):t)}},cf=function(t){return t.sort(function(){return .5-Math.random()})},hf=function(t){if(Ue(t))return t;var e=ai(t)?t:{each:t},n=hr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return qe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=a[_],p,S,y,M,E,A,C,I,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Bn])[1],!v){for(C=-Bn;C<(C=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],p=l?Math.min(v,_)*h-.5:i%v,S=v===Bn?0:l?_*u/v-.5:i/v|0,C=0,I=Bn,A=0;A<_;A++)y=A%v-p,M=S-(A/v|0),m[A]=E=c?Math.abs(c==="y"?M:y):Xu(y*y+M*M),E>C&&(C=E),E<I&&(I=E);i==="random"&&cf(m),m.max=C-I,m.min=I,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(e.amount||e.each)||0,n=n&&_<0?Mf(n):n}return _=(m[f]-m.min)/m.max||0,Ce(m.b+(n?n(_):_)*m.v)+m.u}},Il=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(yi(n)?0:tn(n))}},uf=function(t,e){var n=rn(t),i,s;return!n&&ai(t)&&(i=n=t.radius||Bn,t.values?(t=zn(t.values),(s=!yi(t[0]))&&(i*=i)):t=Il(t.increment)),Hi(e,n?Ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Bn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||yi(a)?h:h+tn(a)}:Il(t))},ff=function(t,e,n,i){return Hi(rn(t)?!e:n===!0?!!(n=0):!i,function(){return rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Sv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},yv=function(t,e){return function(n){return t(parseFloat(n))+(e||tn(n))}},Ev=function(t,e,n){return pf(t,e,0,1,n)},df=function(t,e,n){return Hi(n,function(i){return t[~~e(i)]})},Tv=function r(t,e,n){var i=e-t;return rn(t)?df(t,r(0,t.length),e):Hi(n,function(s){return(i+(s-t)%i)%i+t})},bv=function r(t,e,n){var i=e-t,s=i*2;return rn(t)?df(t,r(0,t.length-1),e):Hi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ls=function(t){return t.replace(rv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(sv);return ff(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},pf=function(t,e,n,i,s){var a=e-t,o=i-n;return Hi(s,function(l){return n+((l-t)/a*o||0)})},Av=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=qe(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(rn(t)&&!rn(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=$r(rn(t)?[]:{},t));if(!h){for(l in e)yc.call(o,t,l,"get",e[l]);s=function(g){return Ac(g,o)||(a?t.p:t)}}}return Hi(n,s)},Wh=function(t,e,n){var i=t.labels,s=Bn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},wn=function(t,e,n){var i=t.vars,s=i[e],a=be,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Oi.length&&Aa(),o&&(be=o),h=l?s.apply(c,l):s.call(c),be=a,h},_s=function(t){return ki(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Je),t.progress()<1&&wn(t,"onInterrupt"),t},Fr,mf=[],_f=function(t){if(t)if(t=!t.name&&t.default||t,mc()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ds,render:Ac,add:yc,kill:Gv,modifier:Vv,rawVars:0},a={targetTest:0,get:0,getSetter:bc,aliases:{},register:0};if(Qr(),t!==i){if(Tn[e])return;Dn(i,Dn(wa(t,s),a)),$r(i.prototype,$r(s,wa(t,a))),Tn[i.prop=e]=i,t.targetTest&&(Ma.push(i),xc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ju(e,i),t.register&&t.register(xn,i,_n)}else mf.push(t)},Me=255,gs={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},Eo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},gf=function(t,e,n){var i=t?yi(t)?[t>>16,t>>8&Me,t&Me]:0:gs.black,s,a,o,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),gs[t])i=gs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(zh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Eo(l+1/3,s,a),i[1]=Eo(l,s,a),i[2]=Eo(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Yu),n&&i.length<4&&(i[3]=1),i}else i=t.match(zh)||gs.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Me,a=i[1]/Me,o=i[2]/Me,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},xf=function(t){var e=[],n=[],i=-1;return t.split(Bi).forEach(function(s){var a=s.match(Ur)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Xh=function(t,e,n){var i="",s=(t+i).match(Bi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=gf(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=xf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Bi,"1").split(Ur),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Bi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Bi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in gs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),wv=/hsl[a]?\(/,vf=function(t){var e=t.join(" "),n;if(Bi.lastIndex=0,Bi.test(e))return n=wv.test(e),t[1]=Xh(t[1],n),t[0]=Xh(t[0],n,xf(t[1])),!0},Is,An=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,S=m===!0,y,M,E,A;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,y=E-a,(y>0||S)&&(A=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=y+(y>=s?4:s-y),M=1),S||(l=c(_)),M)for(d=0;d<o.length;d++)o[d](E,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ku&&(!wl&&mc()&&(Yn=wl=window,_c=Yn.document||{},Pn.gsap=xn,(Yn.gsapVersions||(Yn.gsapVersions=[])).push(xn.version),$u(ba||Yn.GreenSockGlobals||!Yn.gsap&&Yn||{}),mf.forEach(_f)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Is=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Is=0,c=Ds},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,S){var y=p?function(M,E,A,C){m(M,E,A,C),u.remove(y)}:m;return u.remove(m),o[S?"unshift":"push"](y),Qr(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u})(),Qr=function(){return!Is&&An.wake()},ie={},Cv=/^[\d.\-M][\d.\-,\s]/,Rv=/["']/g,Pv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Rv,"").trim():+c,i=l.substr(o+1).trim();return e},Dv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Lv=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Pv(e[1])]:Dv(t).split(",").map(ef)):ie._CE&&Cv.test(t)?ie._CE("",t):n},Mf=function(t){return function(e){return 1-t(1-e)}},Sf=function r(t,e){for(var n=t._first,i;n;)n instanceof ln?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},hr=function(t,e){return t&&(Ue(t)?t:ie[t]||Lv(t))||e},_r=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return mn(t,function(o){ie[o]=Pn[o]=s,ie[a=o.toLowerCase()]=n;for(var l in s)ie[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[o+"."+l]=s[l]}),s},yf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},To=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Al*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*iv((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:yf(o);return s=Al/s,l.config=function(c,h){return r(t,c,h)},l},bo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:yf(n);return i.config=function(s){return r(t,s)},i};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;_r(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;_r("Elastic",To("in"),To("out"),To());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};_r("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);_r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});_r("Circ",function(r){return-(Xu(1-r*r)-1)});_r("Sine",function(r){return r===1?1:-nv(r*tv)+1});_r("Back",bo("in"),bo("out"),bo());ie.SteppedEase=ie.steps=Pn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Se;return function(o){return((i*ks(0,a,o)|0)+s)*n}}};Kr.ease=ie["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vc+=r+","+r+"Params,"});var Ef=function(t,e){this.id=ev++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Qu,this.set=e?e.getSetter:bc},Ns=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,jr(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),Is||An.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,jr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oa(this,n),!s._dp||s.parent||sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Jr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ca(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(ks(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fa(this),dv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$n(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ca(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=cv);var i=Je;return Je=n,Sc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Je=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Un(this,n),pn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,pn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ue(n)?n:nf,l=function(){var h=i.then;i.then=null,s&&s(),Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){_s(this)},r})();Dn(Ns.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var ln=(function(r){Wu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=pn(n.sortChildren),Re&&$n(n.parent||Re,di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&af(di(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ss(0,arguments,this),this},e.from=function(i,s,a){return Ss(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ss(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Ms(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ze(i,s,Un(this,a),1),this},e.call=function(i,s,a){return $n(this,ze.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ze(i,a,Un(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Ms(a).immediateRender=pn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Ms(o).immediateRender=pn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ce(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,y,M,E,A,C;if(this!==Re&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,M=this._start,y=this._ts,p=!y,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Ce(h%m),h===l?(_=this._repeat,f=c):(E=Ce(h/m),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=Jr(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,C=1),_!==E&&!this._lock){var I=A&&E&1,v=I===(A&&_&1);if(_<E&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(C?0:Ce(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Sf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=gv(this,Ce(o),Ce(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!E&&(wn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-Se);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||Je&&Sc(d)),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=b?-Se:Se);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Se)._zTime=f>=o?1:-1,this._ts))return this._start=M,Fa(this),this.render(i,s,a);this._onUpdate&&!s&&wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ki(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(wn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(yi(s)||(s=Un(this,s,i)),!(i instanceof Ns)){if(rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(qe(i))return this.addLabel(i,s);if(Ue(i))i=ze.delayedCall(0,i);else return this}return this!==i?$n(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Bn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ze?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return qe(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&Ua(this,i),i===this._recent&&(this._recent=this._last),cr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(An.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Un(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ze.delayedCall(0,s||Ds,a);return o.data="isPause",this._hasPause=1,$n(this,o,Un(this,i))},e.removePause=function(i){var s=this._first;for(i=Un(this,i);s;)s._start===i&&s.data==="isPause"&&ki(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ni!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=zn(i),l=this._first,c=yi(s),h;l;)l instanceof ze?hv(l._targets,o)&&(c?(!Ni||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Un(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=ze.to(a,Dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Se,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&jr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Dn({startAt:{time:Un(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wh(this,Un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wh(this,Un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return cr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),cr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Bn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$n(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Ce(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;jr(a,a===Re&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Re._ts&&(tf(Re,Ca(i,Re)),ju=An.frame),An.frame>=kh){kh+=Rn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&Rn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},t})(Ns);Dn(ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var Iv=function(t,e,n,i,s,a,o){var l=new _n(this._pt,t,e,0,1,Rf,null,s),c=0,h=0,u,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ls(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(So)||[];u=So.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?kr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=So.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zu.test(i)||p)&&(l.e=0),this._pt=l,l},yc=function(t,e,n,i,s,a,o,l,c,h){Ue(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:Ue(u)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ue(u)?c?Bv:wf:Tc,g;if(qe(i)&&(~i.indexOf("random(")&&(i=Ls(i)),i.charAt(1)==="="&&(g=kr(f,i)+(tn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Nl)return!isNaN(f*i)&&i!==""?(g=new _n(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?kv:Cf,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&gc(e,i),Iv.call(this,t,e,f,i,d,l||Rn.stringFilter,c))},Nv=function(t,e,n,i,s){if(Ue(t)&&(t=ys(t,s,e,n,i)),!ai(t)||t.style&&t.nodeType||rn(t)||qu(t))return qe(t)?ys(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ys(t[o],s,e,n,i);return a},Tf=function(t,e,n,i,s,a){var o,l,c,h;if(Tn[t]&&(o=new Tn[t]).init(s,o.rawVars?e[t]:Nv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new _n(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ni,Nl,Ec=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!dc,M=t.timeline,E,A,C,I,v,b,L,V,k,$,W,N,z;if(M&&(!f||!s)&&(s="none"),t._ease=hr(s,Kr.ease),t._yEase=u?Mf(hr(u===!0?s:u,Kr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(V=m[0]?lr(m[0]).harness:0,N=V&&i[V.prop],E=wa(i,xc),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?va:lv),_._lazy=0),a){if(ki(t._startAt=ze.set(m,Dn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return wn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je||!o&&!d)&&t._startAt.revert(va),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),C=Dn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&pn(l),immediateRender:o,stagger:0,parent:p},E),N&&(C[V.prop]=N),ki(t._startAt=ze.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je?t._startAt.revert(va):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&pn(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],L=v._gsap||Mc(m)[A]._gsap,t._ptLookup[A]=$={},Cl[L.id]&&Oi.length&&Aa(),W=S===m?A:S.indexOf(v),V&&(k=new V).init(v,N||E,t,W,S)!==!1&&(t._pt=I=new _n(t._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(J){$[J]=I}),k.priority&&(b=1)),!V||N)for(C in E)Tn[C]&&(k=Tf(C,E,t,W,v,S))?k.priority&&(b=1):$[C]=I=yc.call(t,v,C,"get",E[C],W,S,0,i.stringFilter);t._op&&t._op[A]&&t.kill(v,t._op[A]),y&&t._pt&&(Ni=t,Re.killTweensOf(v,$,t.globalTime(e)),z=!t.parent,Ni=0),t._pt&&l&&(Cl[L.id]=1)}b&&Pf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,f&&e<=0&&M.render(Bn,!0,!0)},Uv=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Nl=1,t.vars[e]="+=0",Ec(t,o),Nl=0,l?Ps(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Oe(n)+tn(u.e)),u.b&&(u.b=h.s+tn(u.b))},Fv=function(t,e){var n=t[0]?lr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=$r({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ov=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(rn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ys=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):qe(t)&&~t.indexOf("random(")?Ls(t):t},bf=vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Af={};mn(bf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Af[r]=1});var ze=(function(r){Wu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ms(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Re,y=(rn(n)||qu(n)?yi(n[0]):"length"in i)?[n]:zn(n),M,E,A,C,I,v,b,L;if(o._targets=y.length?Mc(y):Ps("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||ua(c)||ua(h)){if(i=o.vars,M=o.timeline=new ln({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),M.kill(),M.parent=M._dp=di(o),M._start=0,f||ua(c)||ua(h)){if(C=y.length,b=f&&hf(f),ai(f))for(I in f)~bf.indexOf(I)&&(L||(L={}),L[I]=f[I]);for(E=0;E<C;E++)A=wa(i,Af),A.stagger=0,p&&(A.yoyoEase=p),L&&$r(A,L),v=y[E],A.duration=+ys(c,di(o),E,v,y),A.delay=(+ys(h,di(o),E,v,y)||0)-o._delay,!f&&C===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),M.to(v,A,b?b(E,v,y):0),M._ease=ie.none;M.duration()?c=h=0:o.timeline=0}else if(g){Ms(Dn(M.vars.defaults,{ease:"none"})),M._ease=hr(g.ease||i.ease||"none");var V=0,k,$,W;if(rn(g))g.forEach(function(N){return M.to(y,N,">")}),M.duration();else{A={};for(I in g)I==="ease"||I==="easeEach"||Ov(I,g[I],A,g.easeEach);for(I in A)for(k=A[I].sort(function(N,z){return N.t-z.t}),V=0,E=0;E<k.length;E++)$=k[E],W={ease:$.e,duration:($.t-(E?k[E-1].t:0))/100*c},W[I]=$.v,M.to(y,W,V),V+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!dc&&(Ni=di(o),Re.killTweensOf(y),Ni=0),$n(S,di(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Ce(S._time)&&pn(u)&&pv(di(o))&&S.data!=="nested")&&(o._tTime=-Se,o.render(Math.max(0,-h)||0)),m&&af(di(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Se&&!h?l:i<Se?0:i,f,d,g,_,m,p,S,y,M;if(!c)_v(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=Ce(u%_),u===l?(g=this._repeat,f=c):(m=Ce(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,f=c-f),m=Jr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(y&&this._yEase&&Sf(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Ce(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(of(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&u&&!s&&!m&&(wn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Rl(this,i,s,a),wn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&wn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Rl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ki(this,1),!s&&!(h&&!o)&&(u||o||p)&&(wn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Is||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ec(this,c),h=this._ease(c/this._dur),Uv(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Oa(this,0),this.parent||rf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Je),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ni&&Ni.vars.overwrite!==!0)._first||_s(this),this.parent&&a!==this.timeline.totalDuration()&&jr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?zn(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&fv(o,l))return s==="all"&&(this._pt=0),_s(this);for(u=this._op=this._op||[],s!=="all"&&(qe(s)&&(_={},mn(s,function(S){return _[S]=1}),s=_),s=Fv(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ua(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&_s(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ss(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ss(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Re.killTweensOf(i,s,a)},t})(Ns);Dn(ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(r){ze[r]=function(){var t=new ln,e=Dl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Tc=function(t,e,n){return t[e]=n},wf=function(t,e,n){return t[e](n)},Bv=function(t,e,n,i){return t[e](i.fp,n)},zv=function(t,e,n){return t.setAttribute(e,n)},bc=function(t,e){return Ue(t[e])?wf:pc(t[e])&&t.setAttribute?zv:Tc},Cf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},kv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ac=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Vv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Gv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ua(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Hv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Pf=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},_n=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Cf,this.d=l||this,this.set=c||Tc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Hv,this.m=n,this.mt=s,this.tween=i},r})();mn(vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xc[r]=1});Pn.TweenMax=Pn.TweenLite=ze;Pn.TimelineLite=Pn.TimelineMax=ln;Re=new ln({sortChildren:!1,defaults:Kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=vf;var ur=[],Sa={},Wv=[],qh=0,Xv=0,Ao=function(t){return(Sa[t]||Wv).map(function(e){return e()})},Ul=function(){var t=Date.now(),e=[];t-qh>2&&(Ao("matchMediaInit"),ur.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Yn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ao("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qh=t,Ao("matchMedia"))},Df=(function(){function r(e,n){this.selector=n&&Ll(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Xv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var a=this,o=function(){var c=be,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ll(s)),be=a,u=i.apply(a,arguments),Ue(u)&&a._r.push(u),be=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ze)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ur.length;a--;)ur[a].id===this.id&&ur.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),qv=(function(){function r(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ai(n)||(n={matches:n});var a=new Df(0,s||this.scope),o=a.conditions={},l,c,h;be&&!a.selector&&(a.selector=be.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Yn.matchMedia(n[c]),l&&(ur.indexOf(a)<0&&ur.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ul):l.addEventListener("change",Ul)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _f(i)})},timeline:function(t){return new ln(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){qe(t)&&(t=zn(t)[0]);var s=lr(t||{}).get,a=n?nf:ef;return n==="native"&&(n=""),t&&(e?a((Tn[e]&&Tn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Tn[o]&&Tn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=zn(t),t.length>1){var i=t.map(function(h){return xn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Tn[e],o=lr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Fr._pt=0,u.init(t,n?h+n:h,Fr,0,[t]),u.render(1,u),Fr._pt&&Ac(1,Fr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=xn.to(t,Dn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hr(t.ease,Kr.ease)),Vh(Kr,t||{})},config:function(t){return Vh(Rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Pn[o]&&Ps(e+" effect requires "+o+" plugin.")}),yo[e]=function(o,l,c){return n(zn(o),Dn(l||{},s),c)},a&&(ln.prototype[e]=function(o,l,c){return this.add(yo[e](o,ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ie[t]=hr(e)},parseEase:function(t,e){return arguments.length?hr(t,e):ie},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ln(t),i,s;for(n.smoothChildTiming=pn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ze&&i.vars.onComplete===i._targets[0]))&&$n(n,i,i._start-i._delay),i=s;return $n(Re,n,0),n},context:function(t,e){return t?new Df(t,e):be},matchMedia:function(t){return new qv(t)},matchMediaRefresh:function(){return ur.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ul()},addEventListener:function(t,e){var n=Sa[t]||(Sa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Sa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Tv,wrapYoyo:bv,distribute:hf,random:ff,snap:uf,normalize:Ev,getUnit:tn,clamp:vv,splitColor:gf,toArray:zn,selector:Ll,mapRange:pf,pipe:Sv,unitize:yv,interpolate:Av,shuffle:cf},install:$u,effects:yo,ticker:An,updateRoot:ln.updateRoot,plugins:Tn,globalTimeline:Re,core:{PropTween:_n,globals:Ju,Tween:ze,Timeline:ln,Animation:Ns,getCache:lr,_removeLinkedListItem:Ua,reverting:function(){return Je},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return dc=t}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ra[r]=ze[r]});An.add(ln.updateRoot);Fr=Ra.to({},{duration:0});var Yv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Zv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Yv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},wo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(qe(s)&&(l={},mn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Zv(o,s)}}}},xn=Ra.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wo("roundProps",Il),wo("modifiers"),wo("snap",uf))||Ra;ze.version=ln.version=xn.version="3.14.2";Ku=1;mc()&&Qr();ie.Power0;ie.Power1;ie.Power2;ie.Power3;ie.Power4;ie.Linear;ie.Quad;ie.Cubic;ie.Quart;ie.Quint;ie.Strong;ie.Elastic;ie.Back;ie.SteppedEase;ie.Bounce;ie.Sine;ie.Expo;ie.Circ;var Yh,Ui,Vr,wc,ar,Zh,Cc,Kv=function(){return typeof window<"u"},Ei={},er=180/Math.PI,Gr=Math.PI/180,Lr=Math.atan2,Kh=1e8,Rc=/([A-Z])/g,$v=/(left|right|width|margin|padding|x)/i,Jv=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Qv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},tM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},eM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Lf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},If=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},nM=function(t,e,n){return t.style[e]=n},iM=function(t,e,n){return t.style.setProperty(e,n)},rM=function(t,e,n){return t._gsap[e]=n},sM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},aM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},oM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},De="transform",gn=De+"Origin",lM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ei&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=mi(i,o)}):this.tfm[t]=a.x?a[t]:mi(i,t),t===gn&&(this.tfm.zOrigin=a.zOrigin);else return Qn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(De)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(gn,e,"")),t=De}(s||e)&&this.props.push(t,e,s[t])},Nf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Rc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cc(),(!s||!s.isStart)&&!n[De]&&(Nf(n),i.zOrigin&&n[gn]&&(n[gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Uf=function(t,e){var n={target:t,props:[],revert:cM,save:lM};return t._gsap||xn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ff,Ol=function(t,e){var n=Ui.createElementNS?Ui.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ui.createElement(t);return n&&n.style?n:Ui.createElement(t)},Cn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Rc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ts(e)||e,1)||""},$h="O,Moz,ms,Ms,Webkit".split(","),ts=function(t,e,n){var i=e||ar,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!($h[a]+t in s););return a<0?null:(a===3?"ms":a>=0?$h[a]:"")+t},Bl=function(){Kv()&&window.document&&(Yh=window,Ui=Yh.document,Vr=Ui.documentElement,ar=Ol("div")||{style:{}},Ol("div"),De=ts(De),gn=De+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ff=!!ts("perspective"),Cc=xn.core.reverting,wc=1)},Jh=function(t){var e=t.ownerSVGElement,n=Ol("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Vr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Vr.removeChild(n),s},jh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Of=function(t){var e,n;try{e=t.getBBox()}catch{e=Jh(t),n=1}return e&&(e.width||e.height)||n||(e=Jh(t)),e&&!e.width&&!e.x&&!e.y?{x:+jh(t,["x","cx","x1"])||0,y:+jh(t,["y","cy","y1"])||0,width:0,height:0}:e},Bf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Of(t))},Vi=function(t,e){if(e){var n=t.style,i;e in Ei&&e!==gn&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Rc,"-$1").toLowerCase())):n.removeAttribute(e)}},Fi=function(t,e,n,i,s,a){var o=new _n(t._pt,e,n,0,1,a?If:Lf);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Qh={deg:1,rad:1,turn:1},hM={grid:1,flex:1},Gi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ar.style,l=$v.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Qh[i]||Qh[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Bf(t),(d||a==="%")&&(Ei[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Oe(d?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ui||!_.appendChild)&&(_=Ui.body),m=_._gsap,m&&d&&m.width&&l&&m.time===An.time&&!m.uncache)return Oe(s/m.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,g=t[h],S?t.style[e]=S:Vi(t,e)}else(d||a==="%")&&!hM[Cn(_,"display")]&&(o.position=Cn(t,"position")),_===t&&(o.position="static"),_.appendChild(ar),g=ar[h],_.removeChild(ar),o.position="absolute";return l&&d&&(m=lr(_),m.time=An.time,m.width=_[h]),Oe(f?g*s/u:g&&s?u/g*s:0)},mi=function(t,e,n,i){var s;return wc||Bl(),e in Qn&&e!=="transform"&&(e=Qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ei[e]&&e!=="transform"?(s=Fs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Da(Cn(t,gn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pa[e]&&Pa[e](t,e,n)||Cn(t,e)||Qu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Gi(t,e,s,n)+n:s},uM=function(t,e,n,i){if(!n||n==="none"){var s=ts(e,t,1),a=s&&Cn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Cn(t,"borderTopColor"))}var o=new _n(this._pt,t.style,e,0,1,Rf),l=0,c=0,h,u,f,d,g,_,m,p,S,y,M,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Cn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Cn(t,e)||i,_?t.style[e]=_:Vi(t,e)),h=[n,i],vf(h),n=h[0],i=h[1],f=n.match(Ur)||[],E=i.match(Ur)||[],E.length){for(;u=Ur.exec(i);)m=u[0],S=i.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=kr(d,m)+M),p=parseFloat(m),y=m.substr((p+"").length),l=Ur.lastIndex-y.length,y||(y=y||Rn.units[e]||M,l===i.length&&(i+=y,o.e+=y)),M!==y&&(d=Gi(t,e,_,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?If:Lf;return Zu.test(i)&&(o.e=0),this._pt=o,o},tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=tu[n]||n,e[1]=tu[i]||i,e.join(" ")},dM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ei[o]&&(l=1,o=o==="transformOrigin"?gn:De),Vi(n,o);l&&(Vi(n,De),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fs(n,1),a.uncache=1,Nf(i)))}},Pa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new _n(t._pt,e,n,0,0,dM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Us=[1,0,0,1,0,0],zf={},kf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},eu=function(t){var e=Cn(t,De);return kf(e)?Us:e.substr(7).match(Yu).map(Oe)},Pc=function(t,e){var n=t._gsap||lr(t),i=t.style,s=eu(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Us:s):(s===Us&&!t.offsetParent&&t!==Vr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Vr.appendChild(t)),s=eu(t),l?i.display=l:Vi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Vr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zl=function(t,e,n,i,s,a){var o=t._gsap,l=s||Pc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],y=e.split(" "),M=parseFloat(y[0])||0,E=parseFloat(y[1])||0,A,C,I,v;n?l!==Us&&(C=d*m-g*_)&&(I=M*(m/C)+E*(-_/C)+(_*S-m*p)/C,v=M*(-g/C)+E*(d/C)-(d*S-g*p)/C,M=I,E=v):(A=Of(t),M=A.x+(~y[0].indexOf("%")?M/100*A.width:M),E=A.y+(~(y[1]||y[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=M-c,S=E-h,o.xOffset=u+(p*d+S*_)-p,o.yOffset=f+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[gn]="0px 0px",a&&(Fi(a,o,"xOrigin",c,M),Fi(a,o,"yOrigin",h,E),Fi(a,o,"xOffset",u,o.xOffset),Fi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+E)},Fs=function(t,e){var n=t._gsap||new Ef(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Cn(t,gn)||"0",h,u,f,d,g,_,m,p,S,y,M,E,A,C,I,v,b,L,V,k,$,W,N,z,J,ft,ht,P,lt,Vt,$t,Qt;return h=u=f=_=m=p=S=y=M=0,d=g=1,n.svg=!!(t.getCTM&&Bf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),C=Pc(t,n.svg),n.svg&&(n.uncache?(J=t.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),zl(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,C)),E=n.xOrigin||0,A=n.yOrigin||0,C!==Us&&(L=C[0],V=C[1],k=C[2],$=C[3],h=W=C[4],u=N=C[5],C.length===6?(d=Math.sqrt(L*L+V*V),g=Math.sqrt($*$+k*k),_=L||V?Lr(V,L)*er:0,S=k||$?Lr(k,$)*er+_:0,S&&(g*=Math.abs(Math.cos(S*Gr))),n.svg&&(h-=E-(E*L+A*k),u-=A-(E*V+A*$))):(Qt=C[6],Vt=C[7],ht=C[8],P=C[9],lt=C[10],$t=C[11],h=C[12],u=C[13],f=C[14],I=Lr(Qt,lt),m=I*er,I&&(v=Math.cos(-I),b=Math.sin(-I),z=W*v+ht*b,J=N*v+P*b,ft=Qt*v+lt*b,ht=W*-b+ht*v,P=N*-b+P*v,lt=Qt*-b+lt*v,$t=Vt*-b+$t*v,W=z,N=J,Qt=ft),I=Lr(-k,lt),p=I*er,I&&(v=Math.cos(-I),b=Math.sin(-I),z=L*v-ht*b,J=V*v-P*b,ft=k*v-lt*b,$t=$*b+$t*v,L=z,V=J,k=ft),I=Lr(V,L),_=I*er,I&&(v=Math.cos(I),b=Math.sin(I),z=L*v+V*b,J=W*v+N*b,V=V*v-L*b,N=N*v-W*b,L=z,W=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Oe(Math.sqrt(L*L+V*V+k*k)),g=Oe(Math.sqrt(N*N+Qt*Qt)),I=Lr(W,N),S=Math.abs(I)>2e-4?I*er:0,M=$t?1/($t<0?-$t:$t):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!kf(Cn(t,De)),z&&t.setAttribute("transform",z))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Oe(d),n.scaleY=Oe(g),n.rotation=Oe(_)+o,n.rotationX=Oe(m)+o,n.rotationY=Oe(p)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[gn]=Da(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?mM:Ff?Vf:pM,n.uncache=0,n},Da=function(t){return(t=t.split(" "))[0]+" "+t[1]},Co=function(t,e,n){var i=tn(e);return Oe(parseFloat(e)+parseFloat(Gi(t,"x",n+"px",i)))+i},pM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vf(t,e)},Qi="0deg",us="0px",tr=") ",Vf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,M="",E=p==="auto"&&t&&t!==1||p===!0;if(y&&(u!==Qi||h!==Qi)){var A=parseFloat(h)*Gr,C=Math.sin(A),I=Math.cos(A),v;A=parseFloat(u)*Gr,v=Math.cos(A),a=Co(S,a,C*v*-y),o=Co(S,o,-Math.sin(A)*-y),l=Co(S,l,I*v*-y+y)}m!==us&&(M+="perspective("+m+tr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||a!==us||o!==us||l!==us)&&(M+=l!==us||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+tr),c!==Qi&&(M+="rotate("+c+tr),h!==Qi&&(M+="rotateY("+h+tr),u!==Qi&&(M+="rotateX("+u+tr),(f!==Qi||d!==Qi)&&(M+="skew("+f+", "+d+tr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+tr),S.style[De]=M||"translate(0, 0)"},mM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(a),M=parseFloat(o),E,A,C,I,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Gr,c*=Gr,E=Math.cos(l)*u,A=Math.sin(l)*u,C=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(h*=Gr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),C*=v,I*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),E*=v,A*=v)),E=Oe(E),A=Oe(A),C=Oe(C),I=Oe(I)):(E=u,I=f,A=C=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Gi(d,"x",a,"px"),M=Gi(d,"y",o,"px")),(g||_||m||p)&&(y=Oe(y+g-(g*E+_*C)+m),M=Oe(M+_-(g*A+_*I)+p)),(i||s)&&(v=d.getBBox(),y=Oe(y+i/100*v.width),M=Oe(M+s/100*v.height)),v="matrix("+E+","+A+","+C+","+I+","+y+","+M+")",d.setAttribute("transform",v),S&&(d.style[De]=v)},_M=function(t,e,n,i,s){var a=360,o=qe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?er:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Kh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Kh)%a-~~(c/a)*a)),t._pt=f=new _n(t._pt,e,n,i,c,jv),f.e=h,f.u="deg",t._props.push(n),f},nu=function(t,e){for(var n in e)t[n]=e[n];return t},gM=function(t,e,n){var i=nu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[De]=e,o=Fs(n,1),Vi(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],a[De]=e,o=Fs(n,1),a[De]=c);for(l in Ei)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=tn(c),g=tn(h),u=d!==g?Gi(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new _n(t._pt,o,l,u,f-u,Fl),t._pt.u=g||0,t._props.push(l));nu(o,i)};mn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Pa[t>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return mi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var Gf={name:"css",register:Bl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,S,y,M,E,A,C,I,v;wc||Bl(),this.styles=this.styles||Uf(t),I=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Tn[_]&&Tf(_,e,n,i,t,s)))){if(d=typeof h,g=Pa[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ls(h)),g)g(this,t,_,h,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Bi.lastIndex=0,Bi.test(c)||(m=tn(c),p=tn(h),p?m!==p&&(c=Gi(t,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),I.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],qe(c)&&~c.indexOf("random(")&&(c=Ls(c)),tn(c+"")||c==="auto"||(c+=Rn.units[_]||tn(mi(t,_))||""),(c+"").charAt(1)==="="&&(c=mi(t,_))):c=mi(t,_),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Qn&&(_==="autoAlpha"&&(f===1&&mi(t,"visibility")==="hidden"&&u&&(f=0),I.push("visibility",0,o.visibility),Fi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Qn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Ei,y){if(this.styles.save(_),v=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Cn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=h,h=Cn(t,"perspective"),b?t.style.perspective=b:Vi(t,"perspective")}u=parseFloat(h)}if(M||(E=t._gsap,E.renderTransform&&!e.parseTransform||Fs(t,e.parseTransform),A=e.smoothOrigin!==!1&&E.smooth,M=this._pt=new _n(this._pt,o,De,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new _n(this._pt,E,"scaleY",E.scaleY,(S?kr(E.scaleY,S+u):u)-E.scaleY||0,Fl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(gn,0,o[gn]),h=fM(h),E.svg?zl(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&Fi(this,E,"zOrigin",E.zOrigin,p),Fi(this,o,_,Da(c),Da(h)));continue}else if(_==="svgOrigin"){zl(t,h,1,A,0,this);continue}else if(_ in zf){_M(this,E,_,f,S?kr(f,S+h):h);continue}else if(_==="smoothOrigin"){Fi(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){gM(this,h,t);continue}}else _ in o||(_=ts(_)||_);if(y||(u||u===0)&&(f||f===0)&&!Jv.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),p=tn(h)||(_ in Rn.units?Rn.units[_]:m),m!==p&&(f=Gi(t,_,c,p)),this._pt=new _n(this._pt,y?E:o,_,f,(S?kr(f,S+u):u)-f,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?eM:Fl),this._pt.u=p||0,y&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=tM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Qv);else if(_ in o)uM.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,s);else if(_!=="parseTransform"){gc(_,h);continue}y||(_ in o?I.push(_,0,o[_]):typeof t[_]=="function"?I.push(_,2,t[_]()):I.push(_,1,c||t[_])),a.push(_)}}C&&Pf(this)},render:function(t,e){if(e.tween._time||!Cc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:mi,aliases:Qn,getSetter:function(t,e,n){var i=Qn[e];return i&&i.indexOf(",")<0&&(e=i),e in Ei&&e!==gn&&(t._gsap.x||mi(t,"x"))?n&&Zh===n?e==="scale"?sM:rM:(Zh=n||{})&&(e==="scale"?aM:oM):t.style&&!pc(t.style[e])?nM:~e.indexOf("-")?iM:bc(t,e)},core:{_removeProperty:Vi,_getMatrix:Pc}};xn.utils.checkPrefix=ts;xn.core.getStyleSaver=Uf;(function(r,t,e,n){var i=mn(r+","+t+","+e,function(s){Ei[s]=1});mn(t,function(s){Rn.units[s]="deg",zf[s]=1}),Qn[i[13]]=r+","+t,mn(n,function(s){var a=s.split(":");Qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Rn.units[r]="px"});xn.registerPlugin(Gf);var Os=xn.registerPlugin(Gf)||xn;Os.core.Tween;class Li{static createWoodTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,1024*.3);i.addColorStop(0,"#5c3a1e"),i.addColorStop(.3,"#6b4226"),i.addColorStop(.5,"#7a4a2a"),i.addColorStop(.7,"#6b4226"),i.addColorStop(1,"#5c3a1e"),n.fillStyle=i,n.fillRect(0,0,1024,1024);for(let l=0;l<600;l++){const c=Math.random()*1024,h=.5+Math.random()*3,u=.03+Math.random()*.08,f=Math.random()>.5;n.strokeStyle=f?`rgba(30, 15, 5, ${u})`:`rgba(120, 70, 30, ${u})`,n.lineWidth=h,n.beginPath(),n.moveTo(0,c);for(let d=0;d<1024;d+=20){const g=Math.sin(d*.005+l*.3)*(2+Math.random()*4);n.lineTo(d,c+g)}n.stroke()}for(let l=0;l<40;l++){const c=Math.random()*1024,h=2+Math.random()*8;n.fillStyle=`rgba(30, 15, 5, ${.05+Math.random()*.06})`,n.fillRect(0,c,1024,h)}for(let l=0;l<20;l++){const c=Math.random()*1024,h=1+Math.random()*4;n.fillStyle=`rgba(180, 120, 60, ${.04+Math.random()*.04})`,n.fillRect(0,c,1024,h)}const s=2+Math.floor(Math.random()*3);for(let l=0;l<s;l++){const c=100+Math.random()*824,h=100+Math.random()*824,u=8+Math.random()*15;for(let f=u;f>0;f-=1){const d=f/u;n.beginPath(),n.arc(c,h,f,0,Math.PI*2),n.fillStyle=`rgba(40, 20, 8, ${.15*d})`,n.fill()}for(let f=0;f<6;f++)n.beginPath(),n.arc(c,h,u+f*5,0,Math.PI*2),n.strokeStyle=`rgba(50, 25, 10, ${.06-f*.008})`,n.lineWidth=1,n.stroke()}const a=n.getImageData(0,0,1024,1024);for(let l=0;l<a.data.length;l+=4){const c=(Math.random()-.5)*12;a.data[l]=Math.max(0,Math.min(255,a.data[l]+c)),a.data[l+1]=Math.max(0,Math.min(255,a.data[l+1]+c*.8)),a.data[l+2]=Math.max(0,Math.min(255,a.data[l+2]+c*.5))}n.putImageData(a,0,0);const o=new $i(e);return o.wrapS=pi,o.wrapT=pi,o.repeat.set(2,2),o.anisotropy=8,o}static createWoodNormalMap(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#8080ff",n.fillRect(0,0,512,512);for(let s=0;s<300;s++){const a=Math.random()*512;n.strokeStyle=`rgba(${120+Math.random()*16}, ${128+(Math.random()-.5)*8}, 255, ${.1+Math.random()*.1})`,n.lineWidth=.5+Math.random()*2,n.beginPath(),n.moveTo(0,a);for(let o=0;o<512;o+=15)n.lineTo(o,a+Math.sin(o*.01+s)*2);n.stroke()}const i=new $i(e);return i.wrapS=pi,i.wrapT=pi,i.repeat.set(2,2),i}static createFeltTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#1a5c3a",n.fillRect(0,0,512,512);for(let a=0;a<8e3;a++){const o=Math.random()*512,l=Math.random()*512,c=1+Math.random()*4,h=Math.random()*Math.PI*2,u=.04+Math.random()*.06,f=Math.random()>.5;n.strokeStyle=f?`rgba(40, 120, 70, ${u})`:`rgba(10, 50, 25, ${u})`,n.lineWidth=.5+Math.random()*1,n.beginPath(),n.moveTo(o,l),n.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),n.stroke()}for(let a=0;a<12;a++){const o=Math.random()*512,l=Math.random()*512,c=30+Math.random()*60,h=n.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(30, 110, 60, 0.06)"),h.addColorStop(1,"rgba(30, 110, 60, 0)"),n.fillStyle=h,n.fillRect(o-c,l-c,c*2,c*2)}const i=n.getImageData(0,0,512,512);for(let a=0;a<i.data.length;a+=4){const o=(Math.random()-.5)*15;i.data[a]=Math.max(0,Math.min(255,i.data[a]+o*.4)),i.data[a+1]=Math.max(0,Math.min(255,i.data[a+1]+o)),i.data[a+2]=Math.max(0,Math.min(255,i.data[a+2]+o*.5))}n.putImageData(i,0,0);const s=new $i(e);return s.wrapS=pi,s.wrapT=pi,s}static createCheckerTexture(t){const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d"),s=t==="#222222"||t==="#111111"||t==="#1a1a1a";if(i.fillStyle=t,i.fillRect(0,0,512,512),s)for(let c=0;c<200;c++){const h=Math.random()*512;i.strokeStyle=`rgba(60, 50, 40, ${.03+Math.random()*.04})`,i.lineWidth=.5+Math.random()*2,i.beginPath(),i.moveTo(0,h);for(let u=0;u<512;u+=10)i.lineTo(u,h+Math.sin(u*.02+c*.5)*2);i.stroke()}else{for(let h=0;h<8;h++){i.strokeStyle=`rgba(180, 160, 130, ${.06+Math.random()*.06})`,i.lineWidth=1+Math.random()*3,i.beginPath();let u=Math.random()*512,f=Math.random()*512;i.moveTo(u,f);for(let d=0;d<15;d++)u+=(Math.random()-.5)*80,f+=(Math.random()-.5)*80,i.lineTo(u,f);i.stroke()}const c=i.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);c.addColorStop(0,"rgba(255, 248, 230, 0.1)"),c.addColorStop(1,"rgba(200, 180, 150, 0.08)"),i.fillStyle=c,i.fillRect(0,0,512,512)}const a=512/2,o=512/2;for(let c=512*.4;c>512*.1;c-=512*.06)i.beginPath(),i.arc(a,o,c,0,Math.PI*2),i.strokeStyle=s?`rgba(100, 80, 60, ${.08})`:`rgba(160, 140, 110, ${.12})`,i.lineWidth=1.5,i.stroke();i.beginPath(),i.arc(a,o,512*.04,0,Math.PI*2),i.fillStyle=s?"rgba(80, 60, 40, 0.15)":"rgba(180, 160, 130, 0.2)",i.fill();const l=i.getImageData(0,0,512,512);for(let c=0;c<l.data.length;c+=4){const h=(Math.random()-.5)*8;l.data[c]=Math.max(0,Math.min(255,l.data[c]+h)),l.data[c+1]=Math.max(0,Math.min(255,l.data[c+1]+h)),l.data[c+2]=Math.max(0,Math.min(255,l.data[c+2]+h))}return i.putImageData(l,0,0),new $i(n)}static createPointTexture(t){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");if(t){const a=i.createLinearGradient(0,0,0,256);a.addColorStop(0,"#6b1a1a"),a.addColorStop(.5,"#7a2020"),a.addColorStop(1,"#5c1515"),i.fillStyle=a}else{const a=i.createLinearGradient(0,0,0,256);a.addColorStop(0,"#d4c5a0"),a.addColorStop(.5,"#e0d4b0"),a.addColorStop(1,"#c8b890"),i.fillStyle=a}i.fillRect(0,0,256,256);for(let a=0;a<80;a++){const o=Math.random()*256,l=.02+Math.random()*.04;i.strokeStyle=t?`rgba(30, 5, 5, ${l})`:`rgba(100, 80, 50, ${l})`,i.lineWidth=.5+Math.random()*1.5,i.beginPath(),i.moveTo(0,o),i.lineTo(256,o+(Math.random()-.5)*6),i.stroke()}const s=i.getImageData(0,0,256,256);for(let a=0;a<s.data.length;a+=4){const o=(Math.random()-.5)*10;s.data[a]=Math.max(0,Math.min(255,s.data[a]+o)),s.data[a+1]=Math.max(0,Math.min(255,s.data[a+1]+o)),s.data[a+2]=Math.max(0,Math.min(255,s.data[a+2]+o))}return i.putImageData(s,0,0),new $i(n)}static createDiceTexture(t,e="#f5f0e8"){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,256);const a=s.createRadialGradient(256*.4,256*.4,0,256/2,256/2,256*.7);a.addColorStop(0,"rgba(255, 255, 255, 0.15)"),a.addColorStop(1,"rgba(0, 0, 0, 0.05)"),s.fillStyle=a,s.fillRect(0,0,256,256);const o="#1a1a1a",l=256*.065,c=256/2,h=256*.27,u=256*.73,f=(d,g)=>{s.beginPath(),s.arc(d,g+1,l+1,0,Math.PI*2),s.fillStyle="rgba(0,0,0,0.15)",s.fill(),s.beginPath(),s.arc(d,g,l,0,Math.PI*2),s.fillStyle=o,s.fill(),s.beginPath(),s.arc(d-l*.2,g-l*.2,l*.3,0,Math.PI*2),s.fillStyle="rgba(80, 80, 80, 0.4)",s.fill()};return(t===1||t===3||t===5)&&f(c,c),t>=2&&(f(h,h),f(u,u)),t>=4&&(f(u,h),f(h,u)),t===6&&(f(h,c),f(u,c)),new $i(i)}static createEnvMap(){const e=[];for(let i=0;i<6;i++){const s=document.createElement("canvas");s.width=128,s.height=128;const a=s.getContext("2d"),o=a.createLinearGradient(0,0,0,128);i===2?(o.addColorStop(0,"#2a1a0a"),o.addColorStop(1,"#1a1008")):i===3?(o.addColorStop(0,"#0a0806"),o.addColorStop(1,"#060404")):(o.addColorStop(0,"#1a1208"),o.addColorStop(1,"#0f0a05")),a.fillStyle=o,a.fillRect(0,0,128,128),e.push(s)}e.map(i=>new $i(i));const n=new ec(e);return n.needsUpdate=!0,n}}class xM{constructor(t,e){this.scene=t,this.boardGroup=e,this.checkers=[];const n=Li.createCheckerTexture("#f0e8d0"),i=Li.createCheckerTexture("#1a1a1a"),s=[],a=1,o=.4,l=.06;s.push(new at(0,0)),s.push(new at(a-l,0)),s.push(new at(a,l)),s.push(new at(a,o-l)),s.push(new at(a-l,o));for(let c=0;c<=8;c++){const h=c/8,u=(a-l)*(1-h),f=o-Math.sin(h*Math.PI*.5)*.015;s.push(new at(u,f))}this.geo=new oc(s,32),this.geo.computeVertexNormals(),this.checkerRadius=a,this.checkerHeight=o,this.ringGeo=new cc(a*.65,.015,6,32),this.whiteMat=new Kn({map:n,color:16775400,roughness:.25,metalness:.05}),this.blackMat=new Kn({map:i,color:2763306,roughness:.2,metalness:.15}),this.whiteRingMat=new Kn({color:13942928,roughness:.3,metalness:.2}),this.blackRingMat=new Kn({color:4473924,roughness:.3,metalness:.3})}createChecker(t,e){const n=t==="W"?this.whiteMat:this.blackMat,i=new Fe(this.geo,n);i.castShadow=!0,i.receiveShadow=!0;const s=t==="W"?this.whiteRingMat:this.blackRingMat,a=new Fe(this.ringGeo,s);return a.rotation.x=Math.PI/2,a.position.y=this.checkerHeight-.01,i.add(a),i.userData={isChecker:!0,color:t,index:e},this.boardGroup.add(i),this.checkers.push(i),i}clear(){this.checkers.forEach(t=>{this.boardGroup.remove(t)}),this.checkers=[]}_getPointX(t){return t>=1&&t<=6?13.5-(t-1)*2.2:t>=7&&t<=12?-2.5-(t-7)*2.2:t>=13&&t<=18?-13.5+(t-13)*2.2:2.5+(t-19)*2.2}getPositionForStack(t,e){const n=this.checkerRadius*2*.92,i=-1.15+this.checkerHeight*.05;if(t==="bar")return new O(0,1+e*(this.checkerHeight+.05),0);if(t==="off")return new O(17,i+e*(this.checkerHeight+.02),0);const s=Number(t);if(isNaN(s))return new O(0,0,0);const a=s>=13&&s<=24,o=this._getPointX(s),l=a?-12:12,c=a?1:-1;if(e>=5){const u=e-5,f=l+c*(n*.6+4*n);return new O(o,i+(u+1)*(this.checkerHeight+.05),f)}const h=l+c*(n*.6+e*n);return new O(o,i,h)}getTopChecker(t){const e=this.checkers.filter(n=>n.userData.index==t);return e.length===0?null:e[e.length-1]}getStackHeight(t){return this.checkers.filter(e=>e.userData.index==t).length}}class vM{constructor(t,e){this.scene=t,this.boardGroup=e,this.diceMeshes=[],this.cubeGeo=this._createRoundedBoxGeo(1.4,1.4,1.4,.12,4)}_createRoundedBoxGeo(t,e,n,i,s){const a=new vi(t,e,n,s,s,s),o=a.attributes.position,l=t/2-i,c=e/2-i,h=n/2-i;for(let u=0;u<o.count;u++){let f=o.getX(u),d=o.getY(u),g=o.getZ(u);const _=Math.max(-l,Math.min(l,f)),m=Math.max(-c,Math.min(c,d)),p=Math.max(-h,Math.min(h,g)),S=f-_,y=d-m,M=g-p,E=Math.sqrt(S*S+y*y+M*M);if(E>.001){const A=i/E;f=_+S*A,d=m+y*A,g=p+M*A,o.setXYZ(u,f,d,g)}}return a.computeVertexNormals(),a}update(t){this.diceMeshes.forEach(e=>this.boardGroup.remove(e)),this.diceMeshes=[],!(!t||t.length===0)&&t.forEach((e,n)=>{const i=this._createDiceMaterials(e),s=new Fe(this.cubeGeo,i),a=5+n*2.5,o=-1+n*2;s.position.set(a,.75,o),s.rotation.x=(Math.random()-.5)*.1,s.rotation.y=Math.random()*Math.PI*2,s.rotation.z=(Math.random()-.5)*.1,s.castShadow=!0,s.receiveShadow=!0,this.boardGroup.add(s),this.diceMeshes.push(s),s.scale.set(0,0,0),Os.to(s.scale,{duration:.5,x:1,y:1,z:1,ease:"back.out(1.7)",delay:n*.1})})}_createDiceMaterials(t){const e=7-t,n=[1,2,3,4,5,6].filter(s=>s!==t&&s!==e);for(let s=n.length-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[n[s],n[a]]=[n[a],n[s]]}return[n[0],n[1],t,e,n[2],n[3]].map(s=>{const a=Li.createDiceTexture(s);return new Kn({map:a,color:16777215,roughness:.15,metalness:.02})})}animateRoll(t){this.diceMeshes.forEach(e=>this.boardGroup.remove(e)),this.diceMeshes=[],!(!t||t.length===0)&&t.forEach((e,n)=>{const i=this._createDiceMaterials(e),s=new Fe(this.cubeGeo,i),a=5+n*2.5,o=-1+n*2;s.position.set(a+3,8,o-3),s.rotation.set(Math.random()*Math.PI*4,Math.random()*Math.PI*4,Math.random()*Math.PI*4),s.castShadow=!0,s.receiveShadow=!0,s.scale.set(1,1,1),this.boardGroup.add(s),this.diceMeshes.push(s);const l=Os.timeline();l.to(s.position,{duration:.6,x:a,y:.75,z:o,ease:"bounce.out",delay:n*.15}),l.to(s.rotation,{duration:.6,x:(Math.random()-.5)*.1,y:Math.random()*Math.PI*2,z:(Math.random()-.5)*.1,ease:"power2.out",delay:n*.15},0)})}}class MM{constructor(){this.container=null,this.renderer=null,this.scene=null,this.camera=null,this.controls=null,this.raycaster=new Gp,this.mouse=new at,this.boardGroup=new ds,this.checkersManager=null,this.diceManager=null,this.points=[],this.callbacks={onPointClick:()=>{},onRollClick:()=>{}}}async animateMove(t,e){if(!this.checkersManager)return;const n=this.checkersManager.getTopChecker(e.from);if(!n){console.warn("No checker found at",e.from);return}const i=this.checkersManager.getStackHeight(e.to),s=this.checkersManager.getPositionForStack(e.to,i);return new Promise(a=>{n.position.y,Os.to(n.position,{duration:.55,x:s.x,z:s.z,ease:"power2.inOut"}),Os.to(n.position,{duration:.275,y:12,ease:"power2.out",yoyo:!0,repeat:1,onComplete:()=>{n.position.y=s.y,a()}})})}init(t){if(this.renderer)return;this.container=t,this.scene=new Kd,this.scene.background=new se(855309),this.scene.fog=new nc(855309,.012);const e=this.container.clientWidth,n=this.container.clientHeight;this.camera=new Fn(42,e/n,.1,500),this.camera.position.set(0,55,0),this.camera.lookAt(0,0,0),this.renderer=new zx({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=iu,this.renderer.toneMapping=Vl,this.renderer.toneMappingExposure=1.5,this.renderer.outputColorSpace=En,this.container.appendChild(this.renderer.domElement),this.controls=new Vx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enableRotate=!1,this.controls.minDistance=20,this.controls.maxDistance=100,this.controls.target.set(0,0,0),this.controls.enablePan=!1,this.setupLighting(),this.createBoard(),this.createEnvironment(),this.checkersManager=new xM(this.scene,this.boardGroup),this.diceManager=new vM(this.scene,this.boardGroup),window.addEventListener("resize",this.onWindowResize.bind(this)),this.renderer.domElement.style.touchAction="none",this.renderer.domElement.style.pointerEvents="auto",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.zIndex="1",this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown.bind(this)),this.renderer.setAnimationLoop(this.animate.bind(this));try{this.onWindowResize(),console.log("Backgammon3D initialized (Top-Down Mode)")}catch(i){console.error("Backgammon3D init error:",i)}}setupLighting(){const t=new kp(16772829,.9);this.scene.add(t);const e=new ch(16764040,3);e.position.set(10,55,15),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-5e-4,this.scene.add(e);const n=new ch(8952268,1);n.position.set(-20,30,-15),this.scene.add(n);const i=new Op(13413e3,4469538,.5);this.scene.add(i)}createEnvironment(){const t=new or(200,200),e=new Kn({color:1709328,roughness:.85,metalness:.05}),n=new Fe(t,e);n.rotation.x=-Math.PI/2,n.position.y=-2.2,n.receiveShadow=!0,this.scene.add(n)}createBoard(){this.scene.add(this.boardGroup);const t=Li.createWoodTexture(),e=Li.createWoodNormalMap(),n=Li.createFeltTexture(),i=34,s=28,a=2.5,o=1.5,l=new Kn({map:t,normalMap:e,normalScale:new at(.3,.3),color:9132587,roughness:.45,metalness:.05}),c=new vi(i,.8,s),h=new Fe(c,l);h.position.y=-1.6,h.castShadow=!0,h.receiveShadow=!0,this.boardGroup.add(h);const u=(E,A,C,I,v,b)=>{const L=new vi(E,A,C),V=new Fe(L,l);return V.position.set(I,v,b),V.castShadow=!0,V.receiveShadow=!0,this.boardGroup.add(V),V},f=-.35;u(o,a,s,-i/2+o/2,f,0),u(o,a,s,i/2-o/2,f,0),u(i,a,o,0,f,-s/2+o/2),u(i,a,o,0,f,s/2-o/2);const d=1.8;u(d,a,s-o*2,0,f,0);const g=(i-d)/2-o,_=s-o*2,m=new Kn({map:n,color:1731386,roughness:.92,metalness:0,side:On}),p=new or(g,_),S=new Fe(p,m);S.rotation.x=-Math.PI/2,S.position.set(-8.200000000000001,-1.18,0),S.receiveShadow=!0,this.boardGroup.add(S);const y=new or(g,_),M=new Fe(y,m);M.rotation.x=-Math.PI/2,M.position.set(d/2+g/2,-1.18,0),M.receiveShadow=!0,this.boardGroup.add(M),this.createPoints(),this.createInlayDetails()}createPoints(){const s=Li.createPointTexture(!0),a=Li.createPointTexture(!1),o=(l,c,h)=>{const u=l%2===0,f=new Iu;f.moveTo(-2/2,0),f.lineTo(0,10),f.lineTo(2/2,0),f.lineTo(-2/2,0);const d={depth:.15,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2},g=new ac(f,d),_=new Kn({map:u?s:a,color:u?11149858:14734512,roughness:.6,metalness:.05,side:On}),m=new Fe(g,_);m.rotation.x=-Math.PI/2,m.receiveShadow=!0,m.castShadow=!0;const p=-1.16;h?(m.position.set(c,p,-12.5),m.rotation.z=Math.PI):m.position.set(c,p,12.5),m.userData={isPoint:!0,index:l},this.boardGroup.add(m),this.points.push(m)};for(let l=0;l<6;l++){const c=13.5-l*2.2;o(1+l,c,!1),o(24-l,c,!0)}for(let l=0;l<6;l++){const c=-2.5-l*2.2;o(7+l,c,!1),o(18-l,c,!0)}}createInlayDetails(){const t=new Kn({color:13150286,roughness:.3,metalness:.6}),e=.05,n=(o,l,c,h,u)=>{const f=new vi(o,e,l),d=new Fe(f,t);d.position.set(c,h,u),this.boardGroup.add(d)},i=-1.1,s=12.6,a=14.5;n(a,.1,-8.5,i,s),n(a,.1,-8.5,i,-s),n(a,.1,8.5,i,s),n(a,.1,8.5,i,-s)}syncState(t){if(this.checkersManager){this.checkersManager.clear(),this._highlightMarkers&&this._highlightMarkers.forEach(e=>this.boardGroup.remove(e)),this._highlightMarkers=[];for(let e=1;e<=24;e++){const n=t.points[e]||0;if(n===0)continue;const i=n>0?"W":"B",s=Math.abs(n);for(let a=0;a<s;a++){const o=this.checkersManager.createChecker(i,e),l=this.checkersManager.getPositionForStack(e,a);o.position.copy(l)}}if(t.bar.W>0)for(let e=0;e<t.bar.W;e++){const n=this.checkersManager.createChecker("W","bar"),i=this.checkersManager.getPositionForStack("bar",e);n.position.copy(i)}if(t.bar.B>0)for(let e=0;e<t.bar.B;e++){const n=this.checkersManager.createChecker("B","bar"),i=this.checkersManager.getPositionForStack("bar",e);n.position.copy(i)}if(this.points.forEach(e=>{const n=e.userData.index%2===0;e.material.color.setHex(n?11149858:14734512),e.material.emissive.setHex(0),e.material.emissiveIntensity=0}),t.selectedFrom){const e=this.points.find(n=>n.userData.index===t.selectedFrom);if(e&&(e.material.emissive.setHex(65382),e.material.emissiveIntensity=.8),this._addHighlightRing(t.selectedFrom,65382),t.legalTargets instanceof Map)for(const[n]of t.legalTargets){if(n==="off")continue;const i=this.points.find(s=>s.userData.index===n);i&&(i.material.emissive.setHex(16768256),i.material.emissiveIntensity=.7),this._addHighlightRing(n,16768256)}}this.diceManager&&this.diceManager.update(t.availableDice)}}_addHighlightRing(t,e){if(!this.checkersManager)return;const n=this.checkersManager._getPointX(t);if(n===void 0)return;const s=t>=13&&t<=24?-10:10,a=new lc(1.1,1.4,32),o=new tc({color:e,side:On,transparent:!0,opacity:.7,depthWrite:!1}),l=new Fe(a,o);l.rotation.x=-Math.PI/2,l.position.set(n,-.9,s),this.boardGroup.add(l),this._highlightMarkers.push(l)}onWindowResize(){if(!this.container)return;const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.camera.position.set(0,55,0),this.camera.lookAt(0,0,0)}onPointerDown(t){const e=this.renderer.domElement.getBoundingClientRect();if(this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.checkersManager){const i=this.raycaster.intersectObjects(this.checkersManager.checkers,!0);if(i.length>0){let s=i[0].object;for(;s&&!s.userData?.isChecker;)s=s.parent;if(s&&s.userData?.index!=null){this.callbacks.onPointClick(s.userData.index);return}}}const n=this.raycaster.intersectObjects(this.points);if(n.length>0){const i=n[0].object;if(this.callbacks.onPointClick&&i.userData.index){this.callbacks.onPointClick(i.userData.index);return}}}animate(){this.controls.update(),this.renderer.render(this.scene,this.camera)}}(()=>{console.log("game.js loaded successfully");const r={WHITE:"W",BLACK:"B"},t={NEED_ROLL:"NEED_ROLL",MOVING:"MOVING",AI_THINKING:"AI_THINKING",GAME_OVER:"GAME_OVER"};let e=!1,n=null,i=null,s=null;const a=new MM,o={board:"assets/board.svg",checkerWhite:"assets/checker-white.svg",checkerBlack:"assets/checker-black.svg",dice:D=>`assets/dice-${D}.svg`},l={aiStepMs:1e3},c=(()=>{let D=null;function X(){if(D)return D;const fe=window.AudioContext||window.webkitAudioContext;return fe?(D=new fe,D):null}async function q(){const fe=X();if(fe&&fe.state==="suspended")try{await fe.resume()}catch{}}function mt({type:fe="sine",freq:sn=440,dur:_e=.08,gain:We=.06,when:ye=0,ramp:ce=!0}={}){const de=X();if(!de||de.state!=="running")return;const we=de.currentTime+ye,Xt=de.createOscillator(),ge=de.createGain();Xt.type=fe,Xt.frequency.setValueAtTime(sn,we),ge.gain.setValueAtTime(1e-4,we),ce?ge.gain.exponentialRampToValueAtTime(We,we+.01):ge.gain.setValueAtTime(We,we),ge.gain.exponentialRampToValueAtTime(1e-4,we+_e),Xt.connect(ge).connect(de.destination),Xt.start(we),Xt.stop(we+_e+.01)}function Ft({dur:fe=.1,gain:sn=.06,when:_e=0,hp:We=1200}={}){const ye=X();if(!ye||ye.state!=="running")return;const ce=ye.currentTime+_e,de=Math.max(1,Math.floor(ye.sampleRate*fe)),we=ye.createBuffer(1,de,ye.sampleRate),Xt=we.getChannelData(0);for(let Te=0;Te<de;Te++)Xt[Te]=(Math.random()*2-1)*.8;const ge=ye.createBufferSource();ge.buffer=we;const Ye=ye.createBiquadFilter();Ye.type="highpass",Ye.frequency.setValueAtTime(We,ce);const Ze=ye.createGain();Ze.gain.setValueAtTime(1e-4,ce),Ze.gain.exponentialRampToValueAtTime(sn,ce+.005),Ze.gain.exponentialRampToValueAtTime(1e-4,ce+fe),ge.connect(Ye).connect(Ze).connect(ye.destination),ge.start(ce),ge.stop(ce+fe+.01)}function St({bodyFreq:fe=220,clickFreq:sn=1400,dur:_e=.1,gain:We=.07,when:ye=0}={}){const ce=X();if(!ce||ce.state!=="running")return;const de=ce.currentTime+ye,we=Math.max(1,Math.floor(ce.sampleRate*Math.min(.05,_e))),Xt=ce.createBuffer(1,we,ce.sampleRate),ge=Xt.getChannelData(0);for(let xe=0;xe<we;xe++){const Wi=1-xe/we;ge[xe]=(Math.random()*2-1)*Wi}const Ye=ce.createBufferSource();Ye.buffer=Xt;const Ze=ce.createBiquadFilter();Ze.type="bandpass",Ze.frequency.setValueAtTime(sn,de),Ze.Q.setValueAtTime(2.2,de);const Te=ce.createGain();Te.gain.setValueAtTime(1e-4,de),Te.gain.exponentialRampToValueAtTime(We*.55,de+.004),Te.gain.exponentialRampToValueAtTime(1e-4,de+Math.min(.05,_e)),Ye.connect(Ze).connect(Te).connect(ce.destination),Ye.start(de),Ye.stop(de+Math.min(.06,_e)+.01),mt({type:"sine",freq:fe,dur:_e,gain:We*.55,when:ye,ramp:!0}),mt({type:"triangle",freq:fe*2.02,dur:_e*.85,gain:We*.18,when:ye+.002,ramp:!0})}function Zt(){St({bodyFreq:240,clickFreq:1600,dur:.09,gain:.07,when:0}),St({bodyFreq:210,clickFreq:1500,dur:.09,gain:.06,when:.06}),St({bodyFreq:260,clickFreq:1750,dur:.09,gain:.065,when:.12}),Ft({dur:.13,gain:.02,when:.02,hp:2200})}function ne(){St({bodyFreq:200,clickFreq:1350,dur:.1,gain:.065,when:0})}function kn(){St({bodyFreq:140,clickFreq:950,dur:.14,gain:.11,when:0}),St({bodyFreq:180,clickFreq:1200,dur:.11,gain:.06,when:.03}),Ft({dur:.16,gain:.03,when:0,hp:900})}return{unlock:q,dice:Zt,move:ne,hit:kn}})();function h(){const D=new Array(25).fill(0);return D[24]=2,D[13]=5,D[8]=3,D[6]=5,D[1]=-2,D[12]=-5,D[17]=-3,D[19]=-5,{points:D,bar:{W:0,B:0},off:{W:0,B:0},turn:r.WHITE,phase:t.NEED_ROLL,dice:[],availableDice:[],selectedFrom:null,legalTargets:new Map,history:[],message:"Your turn. Click Roll.",winner:null}}async function u(D,X){let q=!1;if(typeof X.to=="number"){const Ft=f(D),St=_(P.points,X.to),Zt=g(P.points,X.to);q=!!(St&&St===Ft&&Zt===1)}xt(),c.move(),await a.animateMove(D,X),b(P,D,X);const mt=P.availableDice.indexOf(X.die);mt>=0&&P.availableDice.splice(mt,1),q&&(c.hit(),N.board.classList.add("is-hit"),window.setTimeout(()=>N.board.classList.remove("is-hit"),280)),xt(),e&&Ut(X),e?(n==="W"&&D===r.WHITE||n==="B"&&D===r.BLACK)&&vt():D===r.WHITE&&vt()}function f(D){return D===r.WHITE?r.BLACK:r.WHITE}function d(D){return D===r.WHITE?1:-1}function g(D,X){return Math.abs(D[X]??0)}function _(D,X){const q=D[X]??0;return q>0?r.WHITE:q<0?r.BLACK:null}function m(){const D=1+Math.floor(Math.random()*6),X=1+Math.floor(Math.random()*6);return[D,X]}function p([D,X]){return D===X?[D,D,D,D]:[D,X]}function S(D){return D===r.WHITE?{start:1,end:6}:{start:19,end:24}}function y(D,X){const q=S(D);return X>=q.start&&X<=q.end}function M(D,X){if(D.bar[X]>0)return!1;const q=d(X);for(let mt=1;mt<=24;mt++)if(D.points[mt]*q>0&&!y(X,mt))return!1;return!0}function E(D,X){return D===r.WHITE?25-X:X}function A(D,X,q){return D===r.WHITE?X-q:X+q}function C(D,X,q){if(q<1||q>24)return!1;const mt=_(X.points,q);return!mt||mt===D?!1:g(X.points,q)>=2}function I(D,X,q,mt){if(!M(X,D))return!1;const Ft=A(D,q,mt);if(D===r.WHITE){if(Ft===0)return!0;if(Ft<0){for(let St=q+1;St<=6;St++)if(X.points[St]>0)return!1;return!0}return!1}if(Ft===25)return!0;if(Ft>25){for(let St=q-1;St>=19;St--)if(X.points[St]<0)return!1;return!0}return!1}function v(D,X,q){const mt=[];if(D.bar[X]>0){const St=E(X,q);return C(X,D,St)||mt.push({from:"bar",to:St,die:q}),mt}const Ft=d(X);for(let St=1;St<=24;St++){if(D.points[St]*Ft<=0)continue;const ne=A(X,St,q);ne>=1&&ne<=24?C(X,D,ne)||mt.push({from:St,to:ne,die:q}):I(X,D,St,q)&&mt.push({from:St,to:"off",die:q})}return mt}function b(D,X,q){const mt=d(X),Ft=f(X);if(q.from==="bar"?D.bar[X]-=1:D.points[q.from]-=mt,q.to==="off"){D.off[X]+=1;return}const St=q.to,Zt=_(D.points,St),ne=g(D.points,St);Zt&&Zt===Ft&&ne===1&&(D.points[St]=0,D.bar[Ft]+=1),D.points[St]+=mt}function L(D,X,q){for(const mt of q)if(v(D,X,mt).length>0)return!0;return!1}function V(D,X,q){const mt=[];function Ft(ne,kn,fe){let sn=!1;for(let _e=0;_e<kn.length;_e++){const We=kn[_e],ye=v(ne,X,We);if(ye.length!==0){sn=!0;for(const ce of ye){const de={points:ne.points.slice(),bar:{...ne.bar},off:{...ne.off}};b(de,X,ce);const we=kn.slice();we.splice(_e,1),Ft(de,we,fe.concat([ce]))}}}sn||mt.push({seq:fe,end:ne})}if(Ft({points:D.points.slice(),bar:{...D.bar},off:{...D.off}},q.slice(),[]),mt.length===0)return[];const St=Math.max(...mt.map(ne=>ne.seq.length));let Zt=mt.filter(ne=>ne.seq.length===St);if(St===1&&q.length===2&&q[0]!==q[1]){const ne=Math.max(q[0],q[1]);Zt.some(fe=>fe.seq[0]?.die===ne)&&(Zt=Zt.filter(fe=>fe.seq[0]?.die===ne))}return Zt}function k(D){return D.off.W>=15?r.WHITE:D.off.B>=15?r.BLACK:null}function $(D){const X=D.points;let q=0;q+=D.off.B*140,q-=D.off.W*140,q+=D.bar.W*60,q-=D.bar.B*80;for(let St=1;St<=24;St++){const Zt=X[St];if(Zt<0){const ne=-Zt;ne>=2&&(q+=8),ne===1&&(q-=10)}else if(Zt>0){const ne=Zt;ne===1&&(q+=6),ne>=2&&(q-=4)}}let mt=0,Ft=0;for(let St=1;St<=24;St++){const Zt=X[St];Zt<0&&(mt+=-Zt*(25-St)),Zt>0&&(Ft+=Zt*St)}return q+=(Ft-mt)*.05,q}function W(D){const X=D.availableDice.slice(),q=V(D,r.BLACK,X);if(q.length===0)return[];let mt=q[0],Ft=-1/0;for(const St of q){const Zt=$(St.end);Zt>Ft&&(Ft=Zt,mt=St)}return mt.seq}const N={board:document.getElementById("board"),overlay:document.getElementById("boardOverlay"),statusText:document.getElementById("statusText"),turnPill:document.getElementById("turnPill"),phasePill:document.getElementById("phasePill"),rollBtn:document.getElementById("rollBtn"),undoBtn:document.getElementById("undoBtn"),newGameBtn:document.getElementById("newGameBtn"),dieA:document.getElementById("dieA"),dieB:document.getElementById("dieB"),youLabel:document.getElementById("youLabel"),aiLabel:document.getElementById("aiLabel"),opponentLabel:document.getElementById("opponentLabel"),barText:document.getElementById("barText"),offText:document.getElementById("offText"),modal:document.getElementById("modal"),modalTitle:document.getElementById("modalTitle"),modalBody:document.getElementById("modalBody"),modalPrimaryBtn:document.getElementById("modalPrimaryBtn"),fullscreenBtn:document.getElementById("fullscreenBtn"),multiplayerBtn:document.getElementById("multiplayerBtn"),multiplayerModal:document.getElementById("multiplayerModal"),multiplayerModalTitle:document.getElementById("multiplayerModalTitle"),playerNameInput:document.getElementById("playerNameInput"),roomCodeInput:document.getElementById("roomCodeInput"),createRoomBtn:document.getElementById("createRoomBtn"),joinRoomBtn:document.getElementById("joinRoomBtn"),leaveRoomBtn:document.getElementById("leaveRoomBtn"),currentRoomCode:document.getElementById("currentRoomCode"),opponentName:document.getElementById("opponentName"),roomInfo:document.getElementById("roomInfo"),multiplayerModalClose:document.getElementById("multiplayerModalClose")},z=new Map,J={W:null,B:null},ft={W:null,B:null};function ht(){N.overlay.innerHTML="",z.clear();const D=document.querySelector(".boardWrap");D&&(D.style.display="none");const X=document.getElementById("board-container");a.init(X),a.callbacks.onPointClick=Xt=>{le(Xt)},J.W=null,J.B=null,ft.W=null,ft.B=null;const q=920,mt=640,Ft=72,St=488,Zt=60,ne=248,kn=72,fe=320,sn=Xt=>Xt/q*100,_e=Xt=>Xt/mt*100,We=Xt=>Xt/q*100,ye=Xt=>Xt/mt*100;function ce(Xt,ge,Ye,Ze){const Te=document.createElement("div");Te.className=`point ${Ze?"point--top":"point--bot"}`,Te.dataset.point=String(Xt),Te.style.left=`${sn(ge)}%`,Te.style.top=`${_e(Ye)}%`,Te.style.width=`${We(Zt)}%`,Te.style.height=`${ye(ne)}%`,Te.addEventListener("click",Mt),N.overlay.appendChild(Te),z.set(Xt,Te)}for(let Xt=0;Xt<6;Xt++){const ge=Ft+Xt*Zt;ce(13+Xt,ge,kn,!0),ce(12-Xt,ge,fe,!1)}for(let Xt=0;Xt<6;Xt++){const ge=St+Xt*Zt;ce(19+Xt,ge,kn,!0),ce(6-Xt,ge,fe,!1)}function de(Xt,ge,Ye,Ze,Te){const xe=document.createElement("div");xe.className="offZone",xe.dataset.off=Xt,xe.style.left=`${sn(ge)}%`,xe.style.top=`${_e(Ye)}%`,xe.style.width=`${We(Ze)}%`,xe.style.height=`${ye(Te)}%`,xe.textContent="OFF",xe.addEventListener("click",wt),N.overlay.appendChild(xe),J[Xt]=xe}de(r.WHITE,72,520,80,48),de(r.BLACK,768,72,80,48);function we(Xt,ge,Ye,Ze,Te){const xe=document.createElement("div");xe.className="barZone",xe.dataset.bar=Xt,xe.style.left=`${sn(ge)}%`,xe.style.top=`${_e(Ye)}%`,xe.style.width=`${We(Ze)}%`,xe.style.height=`${ye(Te)}%`;const Wi=document.createElement("div");Wi.className="barZone__label",Wi.textContent="ÇUBUK",xe.appendChild(Wi),N.overlay.appendChild(xe),ft[Xt]=xe}we(r.BLACK,440,72,40,240),we(r.WHITE,440,328,40,240)}let P=h();function lt(D){P.message=D,N.statusText.textContent=D}function Vt(D,X){N.modalTitle.textContent=D,N.modalBody.textContent=X,N.modal.classList.add("is-open"),N.modal.setAttribute("aria-hidden","false")}function $t(){N.modal.classList.remove("is-open"),N.modal.setAttribute("aria-hidden","true")}function Qt(D){return o.dice(Math.min(6,Math.max(1,D)))}function j(){const D=P.dice[0]??1,X=P.dice[1]??1;N.dieA.src=Qt(D),N.dieB.src=Qt(X);const q=e?P.turn===n:P.turn===r.WHITE,mt=P.phase===t.NEED_ROLL&&q;N.rollBtn.disabled=!mt}function it(){for(let q=1;q<=24;q++){const mt=z.get(q);mt&&mt.classList.remove("is-selectable","is-target")}const D=e?n:r.WHITE;if(P.turn!==D||P.phase!==t.MOVING)return;const X=nt();for(const q of X){if(q==="bar")continue;const mt=z.get(q);mt&&mt.classList.add("is-selectable")}for(const[q]of P.legalTargets.entries()){if(q==="off"){D==="W"&&J.W&&J.W.classList.add("is-target"),D==="B"&&J.B&&J.B.classList.add("is-target");continue}const mt=z.get(q);mt&&mt.classList.add("is-target")}}function wt(){if(P.phase!==t.MOVING)return;const D=e?n:r.WHITE;if(P.turn!==D||P.selectedFrom==null)return;const X=P.legalTargets.get("off");if(!X)return;const q=Q(X);R(),u(D,q).then(()=>{P.selectedFrom=null,P.legalTargets=new Map,vt()})}function kt(){e?(n==="W"?(N.turnPill.textContent=P.turn===r.WHITE?"Sen (Beyaz)":"Rakip (Siyah)",N.youLabel.textContent="Beyaz",N.aiLabel.textContent="Siyah"):(N.turnPill.textContent=P.turn===r.BLACK?"Sen (Siyah)":"Rakip (Beyaz)",N.youLabel.textContent="Siyah",N.aiLabel.textContent="Beyaz"),N.opponentLabel.textContent=s||"Rakip"):(N.turnPill.textContent=P.turn===r.WHITE?"Sen (Beyaz)":"Bilgisayar (Siyah)",N.youLabel.textContent="Beyaz",N.aiLabel.textContent="Siyah",N.opponentLabel.textContent="Bilgisayar"),N.phasePill.textContent=P.phase,N.barText.textContent=`W ${P.bar.W} — B ${P.bar.B}`,N.offText.textContent=`W ${P.off.W} — B ${P.off.B}`,N.undoBtn.disabled=P.history.length===0||P.turn!==r.WHITE||P.phase!==t.MOVING}function Rt(){return{...P,legalTargets:{}}}function ee(D){P=D,P.legalTargets=new Map,e=!0,xt(),lt("Oyun başladı! İyi eğlenceler!")}window.openMultiplayerModal=dt,window.createRoom=Yt,window.joinRoom=F,window.leaveRoom=Et,window.closeMultiplayerModal=Pt,window.getGameState=Rt,window.initializeGame=ee,window.updateOpponentName=x;function le(D){if(P.phase!==t.MOVING)return;const X=e?n:r.WHITE;if(P.turn!==X)return;if(P.bar[X]>0){const St=rt("bar").get(D);if(!St)return;const Zt=Q(St);R(),u(X,Zt).then(()=>{P.selectedFrom=null,P.legalTargets=new Map,vt()});return}const q=_(P.points,D);if(P.selectedFrom==null){if(q!==X)return;const Ft=rt(D);if(Ft.size===0)return;P.selectedFrom=D,P.legalTargets=Ft,lt("Choose a highlighted destination."),xt();return}const mt=P.legalTargets.get(D);if(mt){const Ft=Q(mt);R(),u(X,Ft).then(()=>{P.selectedFrom=null,P.legalTargets=new Map,vt()});return}if(P.selectedFrom!==D&&q===X){const Ft=rt(D);Ft.size>0&&(P.selectedFrom=D,P.legalTargets=Ft,xt());return}}function xt(){j(),it(),kt(),a.syncState(P),e&&n==="B"?N.board.classList.add("board--black-view"):N.board.classList.remove("board--black-view");const D=k(P);if(D&&P.phase!==t.GAME_OVER){P.winner=D,P.phase=t.GAME_OVER;const X=D===r.WHITE?"You won!":"AI won.";Vt("Game Over",X),lt(X)}}function nt(){const D=e?n:r.WHITE;if(P.bar[D]>0)return new Set(["bar"]);const X=new Set,q=P.availableDice;for(const mt of q){const Ft=v(P,D,mt);for(const St of Ft)St.from!=="bar"&&X.add(St.from)}return X}function rt(D){const X=e?n:r.WHITE,q=new Map;for(const mt of P.availableDice){const Ft=v(P,X,mt);for(const St of Ft){if(St.from!==D)continue;const Zt=St.to;q.has(Zt)||q.set(Zt,[]),q.get(Zt).push(St)}}return q}function Q(D){return D.slice().sort((X,q)=>q.die-X.die)[0]}function Mt(D){if(P.phase!==t.MOVING)return;const X=e?n:r.WHITE;if(P.turn!==X)return;const q=Number(D.currentTarget.dataset.point);if(P.bar[X]>0){const Zt=rt("bar").get(q);if(!Zt)return;const ne=Q(Zt);R(),u(X,ne).then(()=>{P.selectedFrom=null,P.legalTargets=new Map,vt()});return}const mt=_(P.points,q);if(P.selectedFrom==null){if(mt!==X)return;const St=rt(q);if(St.size===0)return;P.selectedFrom=q,P.legalTargets=St,lt("Choose a highlighted destination."),xt();return}const Ft=P.legalTargets.get(q);if(Ft){const St=Q(Ft);R(),u(X,St).then(()=>{P.selectedFrom=null,P.legalTargets=new Map,vt()});return}if(P.selectedFrom!==q&&mt===X){const St=rt(q);St.size>0&&(P.selectedFrom=q,P.legalTargets=St,xt());return}}function R(){P.history.push({points:P.points.slice(),bar:{...P.bar},off:{...P.off},availableDice:P.availableDice.slice(),selectedFrom:P.selectedFrom})}function Bt(){if(P.history.length===0)return;const D=P.history.pop();P.points=D.points,P.bar=D.bar,P.off=D.off,P.availableDice=D.availableDice,P.selectedFrom=D.selectedFrom,P.legalTargets=new Map,lt("Undone. Continue your move."),xt()}function vt(){if(k(P)){xt();return}if(P.availableDice.length===0){e?(P.turn=P.turn===r.WHITE?r.BLACK:r.WHITE,Nt(P.turn)):U();return}if(L(P,P.turn,P.availableDice)||(e?(P.turn=f(P.turn),Nt(P.turn)):U()),e&&P.turn===r.BLACK){if(!L(P,r.BLACK,P.availableDice)){lt("Rakip geçerli hamle yok. Sıra sende."),xt(),window.setTimeout(()=>{P.turn=r.WHITE,P.phase=t.NEED_ROLL,lt("Sıra sende. Zar at.")},450);return}P.phase=t.MOVING,lt("Rakip hamle yapıyor."),xt();return}if(e&&P.turn===r.WHITE){if(!L(P,r.WHITE,P.availableDice)){lt("Rakip geçerli hamle yok. Sıra sende."),xt(),window.setTimeout(()=>{P.turn=r.BLACK,P.phase=t.NEED_ROLL,lt("Sıra sende. Zar at.")},450);return}P.phase=t.MOVING,lt("Rakip hamle yapıyor."),xt();return}lt("Devam et."),xt()}function Nt(D){P.turn=D,P.phase=t.NEED_ROLL,P.dice=[],P.availableDice=[],P.selectedFrom=null,P.legalTargets=new Map,P.history=[],D===r.WHITE?lt("Sıra sende. Zar at."):lt(e?"Rakip sırası":"Bilgisayar sırası. Zar atılıyor…"),xt()}function ut(){if(P.phase!==t.NEED_ROLL)return;if(e&&!(n==="W"&&P.turn===r.WHITE||n==="B"&&P.turn===r.BLACK)){lt("Rakibin sırası");return}if(e){if(c.dice(),!H||H.readyState!==WebSocket.OPEN){lt("Sunucuya bağlı değil");return}gt(),lt("Zar isteniyor...");return}c.dice();const D=m();if(P.dice=D,P.availableDice=p(D),P.turn===r.WHITE){if(!L(P,r.WHITE,P.availableDice)){lt("Geçerli hamle yok. Rakibe geçiliyor."),xt(),window.setTimeout(()=>{e?Nt(f(P.turn)):U()},450);return}P.phase=t.MOVING,lt("Hamlen."),xt();return}if(e&&P.turn===r.BLACK){if(!L(P,r.BLACK,P.availableDice)){lt("Rakip geçerli hamle yok. Sıra sende."),xt(),window.setTimeout(()=>{P.turn=r.WHITE,P.phase=t.NEED_ROLL,lt("Sıra sende. Zar at.")},450);return}P.phase=t.MOVING,lt("Rakip hamle yapıyor."),xt();return}if(e&&P.turn===r.WHITE){if(!L(P,r.WHITE,P.availableDice)){lt("Rakip geçerli hamle yok. Sıra sende."),xt(),window.setTimeout(()=>{P.turn=r.BLACK,P.phase=t.NEED_ROLL,lt("Sıra sende. Zar at.")},450);return}P.phase=t.MOVING,lt("Rakip hamle yapıyor."),xt();return}P.turn===r.BLACK&&(P.phase=t.AI_THINKING,xt(),window.setTimeout(tt,l.aiStepMs))}function w(){$t(),P=h(),e?(n=Ct?"W":"B",Nt(r.WHITE),H&&H.readyState===WebSocket.OPEN&&H.send(JSON.stringify({type:"NEW_GAME"}))):Nt(r.WHITE)}function x(D){s=D,N.opponentName.textContent=D}function U(){P.selectedFrom=null,P.legalTargets=new Map,Nt(r.BLACK),window.setTimeout(ut,250)}function K(){Nt(r.WHITE)}function tt(){if(P.turn!==r.BLACK||P.phase!==t.AI_THINKING)return;if(!L(P,r.BLACK,P.availableDice)){lt("AI has no legal moves. Your turn."),xt(),window.setTimeout(K,500);return}const D=W(P);(async()=>{for(const q of D)await u(r.BLACK,q),await new Promise(mt=>window.setTimeout(mt,l.aiStepMs));if(k(P)){xt();return}lt("Your turn."),xt(),window.setTimeout(K,450)})()}let H=null,Ct=!1;function dt(){console.log("Opening multiplayer modal"),N.multiplayerModal.classList.add("is-open"),N.multiplayerModal.setAttribute("aria-hidden","false")}function Pt(){N.multiplayerModal.classList.remove("is-open"),N.multiplayerModal.setAttribute("aria-hidden","true")}function zt(D,X){N.currentRoomCode.textContent=D,N.opponentName.textContent=X||"Bekleniyor...",N.roomInfo.style.display="block"}function st(){N.roomInfo.style.display="none"}function _t(){if(H&&H.readyState===WebSocket.OPEN)return;const D=location.protocol==="https:"?"wss":"ws",X=location.hostname||"localhost",q=location.port?`:${location.port}`:"",mt=`${D}://${X}${q}`;H=new WebSocket(mt),H.addEventListener("open",()=>{console.log("WebSocket connected to",mt),lt("Sunucuya bağlandı")}),H.addEventListener("message",Ft=>{try{const St=JSON.parse(Ft.data);Lt(St)}catch(St){console.error("Invalid WS message",St)}}),H.addEventListener("close",()=>{console.log("WebSocket closed"),lt("Rakip bağlantısı kesildi"),ct(),H=null}),H.addEventListener("error",Ft=>{console.error("WebSocket error",Ft),lt("WebSocket hatası")})}function Lt(D){switch(D.type){case"ROOM_CREATED":i=D.roomCode,n=D.player==="W"?"W":"B",Ct=D.player==="W",P=D.gameState||h(),e=!0,zt(i,"Bekleniyor..."),lt(`Oda oluşturuldu: ${i}. Rakip bekleniyor...`),xt();break;case"JOINED":i=D.roomCode,n=D.player,Ct=!1,P=D.gameState||h(),e=!0,zt(i,"Bekleniyor..."),lt(`Odaya katıldınız: ${i}`),xt();break;case"PLAYER_JOINED":P=D.gameState||P,e=!0,lt("Rakip katıldı, oyun başlıyor"),zt(i,"Rakip"),xt();break;case"DICE_ROLLED":D.gameState&&(P=D.gameState,P.legalTargets=new Map),xt(),lt("Zar atıldı: "+(P.dice?P.dice.join(", "):""));break;case"MOVE_MADE":D.move&&(D.gameState?(P=D.gameState,P.legalTargets=new Map):At(D.move,D.player||(n==="W"?"B":"W")),xt(),lt("Rakip hamle yaptı"));break;case"MOVE_UNDONE":case"NEW_GAME":D.gameState&&(P=D.gameState,P.legalTargets=new Map,xt());break;case"ERROR":alert(D.message||"Sunucu hatası");break;default:console.log("Unhandled server message",D.type)}}function Ut(D){!H||H.readyState!==WebSocket.OPEN||H.send(JSON.stringify({type:"MAKE_MOVE",move:D}))}function gt(){!H||H.readyState!==WebSocket.OPEN||H.send(JSON.stringify({type:"ROLL_DICE"}))}function Yt(){const D=N.playerNameInput.value.trim();if(!D){alert("Lütfen isminizi girin");return}_t();const X=()=>{if(!H||H.readyState!==WebSocket.OPEN){setTimeout(X,150);return}H.send(JSON.stringify({type:"CREATE_ROOM",playerName:D}))};X(),Ct=!0,Pt()}function F(){const D=N.roomCodeInput.value.trim(),X=N.playerNameInput.value.trim();if(!X){alert("Lütfen isminizi girin");return}if(!D){alert("Lütfen oda kodunu girin");return}if(!/^\d{2}$/.test(D)){alert("Oda kodu iki rakam olmalıdır (ör. 42)");return}_t();const q=()=>{if(!H||H.readyState!==WebSocket.OPEN){setTimeout(q,150);return}H.send(JSON.stringify({type:"JOIN_ROOM",roomCode:D,playerName:X})),i=D,Ct=!1,Pt()};q()}function Et(){if(H){try{H.close()}catch{}H=null}ct(),lt("Çok oyunculu moddan çıkıldı"),P=h(),xt()}function ct(){e=!1,n=null,i=null,s=null,Ct=!1,st()}function At(D,X){const q=X==="W"?r.WHITE:r.BLACK;b(P,q,D);const mt=P.availableDice.indexOf(D.die);mt>=0&&P.availableDice.splice(mt,1),xt(),lt("Rakip hamle yaptı"),X===(n==="W"?"B":"W")&&(P.availableDice.length===0||!L(P,q,P.availableDice)?(P.turn=n==="W"?r.WHITE:r.BLACK,Nt(P.turn)):(lt("Rakip hamle yapmaya devam ediyor"),xt()))}function ot(){const D=document.documentElement;if(document.fullscreenElement){const X=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen;X&&X.call(document).catch(q=>{console.warn("Failed to exit fullscreen:",q)})}else{const X=D.requestFullscreen||D.webkitRequestFullscreen||D.mozRequestFullScreen||D.msRequestFullscreen;X&&X.call(D).catch(q=>{console.warn("Failed to enter fullscreen:",q)})}}document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?N.fullscreenBtn.textContent="Çıkış":N.fullscreenBtn.textContent="Tam Ekran"}),document.addEventListener("webkitfullscreenchange",()=>{document.webkitFullscreenElement?N.fullscreenBtn.textContent="Çıkış":N.fullscreenBtn.textContent="Tam Ekran"}),N.rollBtn.addEventListener("click",()=>{P.phase===t.NEED_ROLL&&ut()}),N.undoBtn.addEventListener("click",()=>{Bt()}),N.newGameBtn.addEventListener("click",()=>{w()}),N.modalPrimaryBtn.addEventListener("click",()=>{w()}),N.fullscreenBtn.addEventListener("click",ot),N.multiplayerBtn.addEventListener("click",dt),N.multiplayerModalClose.addEventListener("click",Pt),N.createRoomBtn.addEventListener("click",Yt),N.joinRoomBtn.addEventListener("click",F),N.leaveRoomBtn.addEventListener("click",Et),window.addEventListener("pointerdown",()=>{c.unlock()},{once:!0});function et(D,X=120){let q=null;return function(...mt){q&&clearTimeout(q),q=setTimeout(()=>{q=null,D.apply(this,mt)},X)}}const pt=et(()=>{ht(),xt()},140);window.addEventListener("resize",pt),window.addEventListener("orientationchange",()=>{setTimeout(pt,80)}),ht(),P=h(),Nt(r.WHITE)})();
