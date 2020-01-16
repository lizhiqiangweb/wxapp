var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'select-page data-v-fa38f808'])
Z([3,'__e'])
Z([3,'scroll-list-panel data-v-fa38f808'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z(z[5])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'quickPanelData']])
Z(z[7])
Z([3,'__l'])
Z(z[1])
Z([3,'data-v-fa38f808'])
Z([[7],[3,'item']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^chooseItem']],[[4],[[5],[[4],[[5],[1,'chooseItem']]]]]]]]])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[7],[3,'getNavData']],[3,'length']],[1,0]])
Z([[7],[3,'getNavAttrEnable']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mescroll-uni-warp'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[2,'?:'],[1,true],[1,'mescroll-uni'],[1,'']]],[[2,'?:'],[[7],[3,'fixed']],[1,'mescroll-uni-fixed'],[1,'']]]])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchstartEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchmoveEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchendEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchcancel']],[[4],[[5],[[4],[[5],[[5],[1,'touchendEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z([[7],[3,'upOffset']])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'scrollAnim']])
Z([[7],[3,'scrollAble']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[7],[3,'padTop']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-bottom:'],[[7],[3,'padBottom']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'top:'],[[7],[3,'fixedTop']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'bottom:'],[[7],[3,'fixedBottom']]],[1,';']]])
Z([[7],[3,'optDown']])
Z([[7],[3,'optUp']])
Z([3,'mescroll-upwarp'])
Z([[7],[3,'isUpLoading']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isDownLoading']]],[[7],[3,'isUpNoMore']]])
Z([[7],[3,'optToTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'maskShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-2ecfe7fa vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirmCallback']],[[4],[[5],[[4],[[5],[1,'confirmCallback']]]]]]]]])
Z([3,'linkAddress'])
Z([[7],[3,'height']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'feature data-v-f81bb6cc'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([3,'uni-list data-v-f81bb6cc'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dynamicsList']])
Z(z[10])
Z([3,'evaluate-msg-in data-v-f81bb6cc'])
Z(z[2])
Z([3,'chat-info-people flexs data-v-f81bb6cc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'behaviorClick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dynamicsList']],[1,'']],[[7],[3,'index']]],[1,'circle_id']]]]]]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'is_parise']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_parise']],[1,1]])
Z([3,'index3'])
Z([3,'item3'])
Z([[6],[[7],[3,'item']],[3,'tourist_circle_dynamic_view_list']])
Z([3,'*this'])
Z([[7],[3,'isShow']])
Z(z[2])
Z(z[16])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'evaPraise']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'dynamicsList']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'tourist_circle_dynamic_view_list']],[1,'index2']],[[7],[3,'index2']]],[1,'dynamic_id']]]]]]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'item3']],[3,'is_parise']]])
Z([[2,'=='],[[6],[[7],[3,'item3']],[3,'is_parise']],[1,1]])
Z(z[24])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'details data-v-0237e54e'])
Z([[2,'!=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'village_img']],[1,'']])
Z([3,'__e'])
Z([3,'details-banner background-cover data-v-0237e54e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'setClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[7],[3,'detailsBg']]],[1,')']]],[1,';']])
Z([[2,'=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_village_admin']],[1,'1']])
Z([3,'details-location data-v-0237e54e'])
Z([3,'location-top data-v-0237e54e'])
Z([[2,'=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_villager']],[1,'1']])
Z([[2,'!=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_villager']],[1,'1']])
Z(z[2])
Z([3,'data-v-0237e54e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'locationClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'village_dis']],[1,'']])
Z(z[9])
Z([3,'details-introduce-p data-v-0237e54e'])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_villager']],[1,'1']],[[2,'!=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_villager']],[1,'']]])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_villager']],[1,'1']],[[2,'=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_villager']],[1,'']]])
Z([3,'details-introduce details-manage data-v-0237e54e'])
Z(z[6])
Z([[2,'!=='],[[6],[[6],[[7],[3,'detailsInfo']],[3,'village_view']],[3,'is_village_admin']],[1,'1']])
Z(z[21])
Z(z[6])
Z(z[6])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'villageListInfo']])
Z(z[25])
Z([[2,'!=='],[[6],[[7],[3,'villageListInfo']],[3,'length']],[1,0]])
Z(z[2])
Z([3,'details-info-people data-v-0237e54e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addVillageEvaluatinParise']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'villageListInfo']],[1,'']],[[7],[3,'index']]],[1,'circle_id']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'villageListInfo']],[1,'']],[[7],[3,'index']]],[1,'is_parise']]]]]]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'is_parise']]])
Z([[6],[[7],[3,'item']],[3,'is_parise']])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[6],[[7],[3,'evaluationList']],[3,'evaluate_list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'feature data-v-1fdcf7ab'])
Z([[2,'=='],[[7],[3,'isVillager']],[1,'1']])
Z([3,'data-v-1fdcf7ab'])
Z([[2,'!'],[[2,'=='],[[7],[3,'value']],[1,'2']]])
Z([3,'width:100%;margin-top:30px;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'videoInfo']])
Z(z[5])
Z([3,'information-in data-v-1fdcf7ab'])
Z([3,'__e'])
Z([3,'details-info-people data-v-1fdcf7ab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'praiseClick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'videoInfo']],[1,'']],[[7],[3,'index']]],[1,'video_id']]]]]]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'has_praise']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'has_praise']],[1,1]])
Z([3,'index3'])
Z([3,'item3'])
Z([[7],[3,'commentInfo']])
Z([3,'*this'])
Z([[7],[3,'isShow']])
Z(z[10])
Z([3,'chat-info-people flexs data-v-1fdcf7ab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'evaPraise']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'commentInfo']],[1,'index2']],[[7],[3,'index2']]],[1,'comment_id']]]]]]]]]]]]]]])
Z([[2,'!'],[[6],[[7],[3,'item3']],[3,'has_praise']]])
Z([[2,'=='],[[6],[[7],[3,'item3']],[3,'has_praise']],[1,1]])
Z(z[19])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index data-v-522d2e1a'])
Z([3,'index-first data-v-522d2e1a'])
Z([[2,'=='],[[6],[[7],[3,'indexInfo']],[3,'my_village']],[1,0]])
Z([[2,'!=='],[[6],[[7],[3,'indexInfo']],[3,'my_village']],[1,0]])
Z(z[3])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'indexInfo']],[3,'menu_view_list']])
Z(z[5])
Z([3,'__e'])
Z([3,'details-list-in data-v-522d2e1a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'listClick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'indexInfo.menu_view_list']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'un_read_number']],[1,0]])
Z([3,'__l'])
Z(z[9])
Z(z[9])
Z(z[9])
Z([3,'uni-list data-v-522d2e1a'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'me data-v-d2486ebc'])
Z([[2,'=='],[[6],[[7],[3,'memberInfo']],[3,'has_UnMessage']],[1,1]])
Z([3,'middle middle-service data-v-d2486ebc'])
Z([[2,'=='],[[6],[[7],[3,'memberInfo']],[3,'is_admin_village']],[1,'1']])
Z([[2,'=='],[[6],[[7],[3,'memberInfo']],[3,'is_admin_village']],[1,'0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'cu-form-group margin-top data-v-b9a5180c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showModal']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'RadioModal'])
Z([3,'flexs right data-v-b9a5180c'])
Z([[2,'=='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'imgList']])
Z(z[6])
Z([[2,'!=='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isHomestay']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'orderInfo']])
Z(z[0])
Z([3,'order-list-mid-msg-btm flexs data-v-51593ba8'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'order_state']],[1,10]],[[2,'=='],[[6],[[7],[3,'item']],[3,'order_state']],[1,20]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'order_state']],[1,40]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'order_state']],[1,30]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'order_state']],[1,10]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'isVillager']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-ee7896fc'])
Z([3,'content-top data-v-ee7896fc'])
Z([[2,'=='],[[7],[3,'proviceName']],[1,'']])
Z([3,'content-top-select data-v-ee7896fc'])
Z([[2,'!=='],[[7],[3,'proviceName']],[1,'']])
Z(z[4])
Z([[2,'!=='],[[7],[3,'cityName']],[1,'']])
Z(z[6])
Z([[2,'!=='],[[7],[3,'areaName']],[1,'']])
Z(z[8])
Z([[7],[3,'isSelect']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-ee7896fc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^chooseItem']],[[4],[[5],[[4],[[5],[1,'chooseItem']]]]]]]]])
Z([[7],[3,'selectSearch']])
Z([3,'1'])
Z([[2,'!=='],[[6],[[7],[3,'searchList']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'searchList']],[3,'length']],[1,0]],[[2,'=='],[[7],[3,'isSelect']],[1,false]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search data-v-43640a74'])
Z([[2,'!=='],[[6],[[7],[3,'selfList']],[3,'length']],[1,0]])
Z([[2,'!=='],[[6],[[7],[3,'selfList']],[1,0]],[1,'']])
Z([[2,'!=='],[[6],[[7],[3,'searchList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'providerList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'value'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[1])
Z([[6],[[7],[3,'value']],[3,'$orig']])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'apply-villager data-v-4c9f0145'])
Z([3,'apply-top data-v-4c9f0145'])
Z([[2,'=='],[[6],[[7],[3,'msgInfo']],[3,'doc_jump_type']],[1,'1']])
Z([[2,'!=='],[[6],[[7],[3,'msgInfo']],[3,'doc_jump_type']],[1,'1']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-4c9f0145 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirmCallback']],[[4],[[5],[[4],[[5],[1,'confirmCallback']]]]]]]]])
Z([3,'linkAddress'])
Z([[7],[3,'height']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/base-classes/base-classes.wxml','./components/lee-select/lee-select.wxml','./components/mescroll-uni/mescroll-uni.wxml','./components/xuan-linkAddress/xuan-linkAddress.wxml','./pages/addHometown/addHometown.wxml','./pages/addPic/addPic.wxml','./pages/chat/chatDeatils/chatDeatils.wxml','./pages/chat/chatDialogue/chatDialogue.wxml','./pages/chat/chatLine/chatLine.wxml','./pages/chat/chatList/chatList.wxml','./pages/chat/publishDynamic/publishDynamic.wxml','./pages/chat/villagerList/villagerList.wxml','./pages/contribution/contribution.wxml','./pages/contributionDeatils/contributionDeatils.wxml','./pages/details/details.wxml','./pages/entryLogin/entryLogin.wxml','./pages/evaluate/evaluate.wxml','./pages/feature/feature.wxml','./pages/h5/h5.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/me/me/me.wxml','./pages/meInfo/attention/attention.wxml','./pages/meInfo/fans/fans.wxml','./pages/meInfo/myComment/myComment.wxml','./pages/meInfo/myLike/myLike.wxml','./pages/meInfo/newsList/newsList.wxml','./pages/meInfo/nikeName/nikeName.wxml','./pages/meInfo/personInfo/personInfo.wxml','./pages/meInfo/villageNews/villageNews.wxml','./pages/modal/homestay/homestay.wxml','./pages/modal/homestayDetails/homestayDetails.wxml','./pages/order/orderEvaluate/orderEvaluate.wxml','./pages/order/orderList/orderList.wxml','./pages/publishEvaluate/publishEvaluate.wxml','./pages/ranking/ranking.wxml','./pages/scenery/scenery.wxml','./pages/search-in/search-in.wxml','./pages/serch/citySearch/citySearch.wxml','./pages/serch/serch.wxml','./pages/share/share.wxml','./pages/uploadPic/uploadPic.wxml','./pages/uploadVideo/uploadVideo.wxml','./pages/villageIntroduce/villageIntroduce.wxml','./pages/villageSet/applyVillager/applyVillager.wxml','./pages/villageSet/villageIntroduce/villageIntroduce.wxml','./pages/villageSet/villageLabel/villageLabel.wxml','./pages/villageSet/villageManager/villageManager.wxml','./pages/villageSet/villagePic/villagePic.wxml','./pages/villageSet/villageVideo/villageVideo.wxml','./pages/voteList/voteList.wxml','./static/colorui/components/cu-custom.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var cF=_mz(z,'scroll-view',['bindscroll',1,'class',1,'data-event-opts',2,'scrollTop',3,'scrollWithAnimation',4,'scrollY',5],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'base-classes',['bind:__l',11,'bind:chooseItem',1,'class',2,'classesAttr',3,'data-event-opts',4,'vueId',5],[],oJ,cI,gg)
_(lK,tM)
return lK
}
hG.wxXCkey=4
_2z(z,9,oH,e,s,gg,hG,'item','index','index')
_(xC,cF)
var oD=_v()
_(xC,oD)
if(_oz(z,17,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,18,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var bO=_n('view')
_rz(z,bO,'class',0,e,s,gg)
var xQ=_mz(z,'scroll-view',['bindscroll',1,'bindscrolltolower',1,'bindtouchcancel',2,'bindtouchend',3,'bindtouchmove',4,'bindtouchstart',5,'class',6,'data-event-opts',7,'enableBackToTop',8,'lowerThreshold',9,'scrollTop',10,'scrollWithAnimation',11,'scrollY',12,'style',13],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,15,e,s,gg)){oR.wxVkey=1
}
var cT=_n('slot')
_(xQ,cT)
var fS=_v()
_(xQ,fS)
if(_oz(z,16,e,s,gg)){fS.wxVkey=1
var hU=_n('view')
_rz(z,hU,'class',17,e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,18,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,19,e,s,gg)){cW.wxVkey=1
}
oV.wxXCkey=1
cW.wxXCkey=1
_(fS,hU)
}
oR.wxXCkey=1
fS.wxXCkey=1
_(bO,xQ)
var oP=_v()
_(bO,oP)
if(_oz(z,20,e,s,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
_(r,bO)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lY=_v()
_(r,lY)
if(_oz(z,0,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var t1=_mz(z,'link-address',['bind:__l',0,'bind:confirmCallback',1,'class',1,'data-event-opts',2,'data-ref',3,'height',4,'vueId',5],[],e,s,gg)
_(r,t1)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var b3=_v()
_(r,b3)
if(_oz(z,0,e,s,gg)){b3.wxVkey=1
}
b3.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var h9=_mz(z,'mescroll-uni',['bind:__l',1,'bind:down',1,'bind:init',2,'bind:up',3,'class',4,'data-event-opts',5,'fixed',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var o0=_v()
_(h9,o0)
var cAB=function(lCB,oBB,aDB,gg){
var eFB=_n('view')
_rz(z,eFB,'class',14,lCB,oBB,gg)
var bGB=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],lCB,oBB,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,18,lCB,oBB,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,19,lCB,oBB,gg)){xIB.wxVkey=1
}
oHB.wxXCkey=1
xIB.wxXCkey=1
_(eFB,bGB)
var oJB=_v()
_(eFB,oJB)
var fKB=function(hMB,cLB,oNB,gg){
var oPB=_v()
_(oNB,oPB)
if(_oz(z,24,hMB,cLB,gg)){oPB.wxVkey=1
var lQB=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2],[],hMB,cLB,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,28,hMB,cLB,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,29,hMB,cLB,gg)){tSB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
_(oPB,lQB)
}
oPB.wxXCkey=1
return oNB
}
oJB.wxXCkey=2
_2z(z,22,fKB,lCB,oBB,gg,oJB,'item3','index3','*this')
_(aDB,eFB)
return aDB
}
o0.wxXCkey=2
_2z(z,12,cAB,e,s,gg,o0,'item','index','index')
_(f7,h9)
var c8=_v()
_(f7,c8)
if(_oz(z,30,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(r,f7)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oVB=_v()
_(r,oVB)
if(_oz(z,0,e,s,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
}
else{o2B.wxVkey=2
var a6B=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,6,e,s,gg)){t7B.wxVkey=1
}
t7B.wxXCkey=1
_(o2B,a6B)
}
var e8B=_n('view')
_rz(z,e8B,'class',7,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',8,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,9,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,10,e,s,gg)){xAC.wxVkey=1
}
o0B.wxXCkey=1
xAC.wxXCkey=1
_(e8B,b9B)
var oBC=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,14,e,s,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
_(e8B,oBC)
_(h1B,e8B)
var c3B=_v()
_(h1B,c3B)
if(_oz(z,15,e,s,gg)){c3B.wxVkey=1
var cDC=_n('view')
_rz(z,cDC,'class',16,e,s,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,17,e,s,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(cDC,oFC)
if(_oz(z,18,e,s,gg)){oFC.wxVkey=1
}
hEC.wxXCkey=1
oFC.wxXCkey=1
_(c3B,cDC)
}
var cGC=_n('view')
_rz(z,cGC,'class',19,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,20,e,s,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,21,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,22,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(cGC,tKC)
if(_oz(z,23,e,s,gg)){tKC.wxVkey=1
}
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(h1B,cGC)
var o4B=_v()
_(h1B,o4B)
if(_oz(z,24,e,s,gg)){o4B.wxVkey=1
}
var eLC=_v()
_(h1B,eLC)
var bMC=function(xOC,oNC,oPC,gg){
var cRC=_v()
_(oPC,cRC)
if(_oz(z,29,xOC,oNC,gg)){cRC.wxVkey=1
var hSC=_mz(z,'view',['bindtap',30,'class',1,'data-event-opts',2],[],xOC,oNC,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,33,xOC,oNC,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,34,xOC,oNC,gg)){cUC.wxVkey=1
}
oTC.wxXCkey=1
cUC.wxXCkey=1
_(cRC,hSC)
}
cRC.wxXCkey=1
return oPC
}
eLC.wxXCkey=2
_2z(z,27,bMC,e,s,gg,eLC,'item','index','index')
var l5B=_v()
_(h1B,l5B)
if(_oz(z,35,e,s,gg)){l5B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
_(r,h1B)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var aXC=_v()
_(r,aXC)
if(_oz(z,0,e,s,gg)){aXC.wxVkey=1
}
aXC.wxXCkey=1
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var eZC=_n('view')
_rz(z,eZC,'class',0,e,s,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,1,e,s,gg)){b1C.wxVkey=1
}
var o2C=_mz(z,'view',['class',2,'hidden',1,'style',2],[],e,s,gg)
var f5C=_v()
_(o2C,f5C)
var c6C=function(o8C,h7C,c9C,gg){
var lAD=_n('view')
_rz(z,lAD,'class',9,o8C,h7C,gg)
var aBD=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],o8C,h7C,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,13,o8C,h7C,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,14,o8C,h7C,gg)){eDD.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
_(lAD,aBD)
var bED=_v()
_(lAD,bED)
var oFD=function(oHD,xGD,fID,gg){
var hKD=_v()
_(fID,hKD)
if(_oz(z,19,oHD,xGD,gg)){hKD.wxVkey=1
var oLD=_mz(z,'view',['bindtap',20,'class',1,'data-event-opts',2],[],oHD,xGD,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,23,oHD,xGD,gg)){cMD.wxVkey=1
}
var oND=_v()
_(oLD,oND)
if(_oz(z,24,oHD,xGD,gg)){oND.wxVkey=1
}
cMD.wxXCkey=1
oND.wxXCkey=1
_(hKD,oLD)
}
hKD.wxXCkey=1
return fID
}
bED.wxXCkey=2
_2z(z,17,oFD,o8C,h7C,gg,bED,'item3','index3','*this')
_(c9C,lAD)
return c9C
}
f5C.wxXCkey=2
_2z(z,7,c6C,e,s,gg,f5C,'item','index','index')
var x3C=_v()
_(o2C,x3C)
if(_oz(z,25,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,26,e,s,gg)){o4C.wxVkey=1
}
x3C.wxXCkey=1
o4C.wxXCkey=1
_(eZC,o2C)
b1C.wxXCkey=1
_(r,eZC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var bSD=_n('view')
_rz(z,bSD,'class',1,e,s,gg)
var oTD=_v()
_(bSD,oTD)
if(_oz(z,2,e,s,gg)){oTD.wxVkey=1
}
var xUD=_v()
_(bSD,xUD)
if(_oz(z,3,e,s,gg)){xUD.wxVkey=1
}
oTD.wxXCkey=1
xUD.wxXCkey=1
_(tQD,bSD)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,4,e,s,gg)){eRD.wxVkey=1
var oVD=_v()
_(eRD,oVD)
var fWD=function(hYD,cXD,oZD,gg){
var o2D=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],hYD,cXD,gg)
var l3D=_v()
_(o2D,l3D)
if(_oz(z,12,hYD,cXD,gg)){l3D.wxVkey=1
}
l3D.wxXCkey=1
_(oZD,o2D)
return oZD
}
oVD.wxXCkey=2
_2z(z,7,fWD,e,s,gg,oVD,'item','index','index')
}
var a4D=_mz(z,'mescroll-uni',['bind:__l',13,'bind:down',1,'bind:init',2,'bind:up',3,'class',4,'data-event-opts',5,'fixed',6,'vueId',7,'vueSlots',8],[],e,s,gg)
_(tQD,a4D)
eRD.wxXCkey=1
_(r,tQD)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var b7D=_n('view')
_rz(z,b7D,'class',0,e,s,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,1,e,s,gg)){o8D.wxVkey=1
}
var x9D=_n('view')
_rz(z,x9D,'class',2,e,s,gg)
var o0D=_v()
_(x9D,o0D)
if(_oz(z,3,e,s,gg)){o0D.wxVkey=1
}
var fAE=_v()
_(x9D,fAE)
if(_oz(z,4,e,s,gg)){fAE.wxVkey=1
}
o0D.wxXCkey=1
fAE.wxXCkey=1
_(b7D,x9D)
o8D.wxXCkey=1
_(r,b7D)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var tIE=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'data-target',2],[],e,s,gg)
var eJE=_n('view')
_rz(z,eJE,'class',4,e,s,gg)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,5,e,s,gg)){bKE.wxVkey=1
}
var oLE=_v()
_(eJE,oLE)
var xME=function(fOE,oNE,cPE,gg){
var oRE=_v()
_(cPE,oRE)
if(_oz(z,10,fOE,oNE,gg)){oRE.wxVkey=1
}
oRE.wxXCkey=1
return cPE
}
oLE.wxXCkey=2
_2z(z,8,xME,e,s,gg,oLE,'item','index','index')
bKE.wxXCkey=1
_(tIE,eJE)
_(r,tIE)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var lUE=_v()
_(r,lUE)
if(_oz(z,0,e,s,gg)){lUE.wxVkey=1
}
lUE.wxXCkey=1
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var eXE=_v()
_(r,eXE)
if(_oz(z,0,e,s,gg)){eXE.wxVkey=1
}
eXE.wxXCkey=1
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var oZE=_v()
_(r,oZE)
var x1E=function(f3E,o2E,c4E,gg){
var o6E=_n('view')
_rz(z,o6E,'class',4,f3E,o2E,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,5,f3E,o2E,gg)){c7E.wxVkey=1
}
var o8E=_v()
_(o6E,o8E)
if(_oz(z,6,f3E,o2E,gg)){o8E.wxVkey=1
}
var l9E=_v()
_(o6E,l9E)
if(_oz(z,7,f3E,o2E,gg)){l9E.wxVkey=1
}
var a0E=_v()
_(o6E,a0E)
if(_oz(z,8,f3E,o2E,gg)){a0E.wxVkey=1
}
c7E.wxXCkey=1
o8E.wxXCkey=1
l9E.wxXCkey=1
a0E.wxXCkey=1
_(c4E,o6E)
return c4E
}
oZE.wxXCkey=2
_2z(z,2,x1E,e,s,gg,oZE,'item','index','index')
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var eBF=_v()
_(r,eBF)
if(_oz(z,0,e,s,gg)){eBF.wxVkey=1
}
eBF.wxXCkey=1
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var xEF=_v()
_(r,xEF)
if(_oz(z,0,e,s,gg)){xEF.wxVkey=1
}
xEF.wxXCkey=1
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cHF=_n('view')
_rz(z,cHF,'class',0,e,s,gg)
var oLF=_n('view')
_rz(z,oLF,'class',1,e,s,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,2,e,s,gg)){lMF.wxVkey=1
}
var aNF=_n('view')
_rz(z,aNF,'class',3,e,s,gg)
var tOF=_v()
_(aNF,tOF)
if(_oz(z,4,e,s,gg)){tOF.wxVkey=1
}
var ePF=_v()
_(aNF,ePF)
if(_oz(z,5,e,s,gg)){ePF.wxVkey=1
var xSF=_v()
_(ePF,xSF)
if(_oz(z,6,e,s,gg)){xSF.wxVkey=1
}
xSF.wxXCkey=1
}
var bQF=_v()
_(aNF,bQF)
if(_oz(z,7,e,s,gg)){bQF.wxVkey=1
var oTF=_v()
_(bQF,oTF)
if(_oz(z,8,e,s,gg)){oTF.wxVkey=1
}
oTF.wxXCkey=1
}
var oRF=_v()
_(aNF,oRF)
if(_oz(z,9,e,s,gg)){oRF.wxVkey=1
}
tOF.wxXCkey=1
ePF.wxXCkey=1
bQF.wxXCkey=1
oRF.wxXCkey=1
_(oLF,aNF)
lMF.wxXCkey=1
_(cHF,oLF)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,10,e,s,gg)){hIF.wxVkey=1
var fUF=_mz(z,'uni-select',['bind:__l',11,'bind:chooseItem',1,'class',2,'data-event-opts',3,'listData',4,'vueId',5],[],e,s,gg)
_(hIF,fUF)
}
var oJF=_v()
_(cHF,oJF)
if(_oz(z,17,e,s,gg)){oJF.wxVkey=1
}
var cKF=_v()
_(cHF,cKF)
if(_oz(z,18,e,s,gg)){cKF.wxVkey=1
}
hIF.wxXCkey=1
hIF.wxXCkey=3
oJF.wxXCkey=1
cKF.wxXCkey=1
_(r,cHF)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var hWF=_n('view')
_rz(z,hWF,'class',0,e,s,gg)
var oXF=_v()
_(hWF,oXF)
if(_oz(z,1,e,s,gg)){oXF.wxVkey=1
var oZF=_v()
_(oXF,oZF)
if(_oz(z,2,e,s,gg)){oZF.wxVkey=1
}
oZF.wxXCkey=1
}
var cYF=_v()
_(hWF,cYF)
if(_oz(z,3,e,s,gg)){cYF.wxVkey=1
}
oXF.wxXCkey=1
cYF.wxXCkey=1
_(r,hWF)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var a2F=_v()
_(r,a2F)
if(_oz(z,0,e,s,gg)){a2F.wxVkey=1
var t3F=_v()
_(a2F,t3F)
var e4F=function(o6F,b5F,x7F,gg){
var f9F=_v()
_(x7F,f9F)
if(_oz(z,5,o6F,b5F,gg)){f9F.wxVkey=1
}
f9F.wxXCkey=1
return x7F
}
t3F.wxXCkey=2
_2z(z,3,e4F,e,s,gg,t3F,'value','index','index')
}
a2F.wxXCkey=1
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var hAG=_v()
_(r,hAG)
if(_oz(z,0,e,s,gg)){hAG.wxVkey=1
}
hAG.wxXCkey=1
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var cCG=_v()
_(r,cCG)
if(_oz(z,0,e,s,gg)){cCG.wxVkey=1
}
cCG.wxXCkey=1
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var aFG=_n('view')
_rz(z,aFG,'class',0,e,s,gg)
var tGG=_n('view')
_rz(z,tGG,'class',1,e,s,gg)
var eHG=_v()
_(tGG,eHG)
if(_oz(z,2,e,s,gg)){eHG.wxVkey=1
}
var bIG=_v()
_(tGG,bIG)
if(_oz(z,3,e,s,gg)){bIG.wxVkey=1
}
eHG.wxXCkey=1
bIG.wxXCkey=1
_(aFG,tGG)
var oJG=_mz(z,'link-address',['bind:__l',4,'bind:confirmCallback',1,'class',2,'data-event-opts',3,'data-ref',4,'height',5,'vueId',6],[],e,s,gg)
_(aFG,oJG)
_(r,aFG)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var hOG=_v()
_(r,hOG)
if(_oz(z,0,e,s,gg)){hOG.wxVkey=1
}
hOG.wxXCkey=1
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var cQG=_v()
_(r,cQG)
if(_oz(z,0,e,s,gg)){cQG.wxVkey=1
}
cQG.wxXCkey=1
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var aTG=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tUG=_v()
_(aTG,tUG)
if(_oz(z,2,e,s,gg)){tUG.wxVkey=1
var eVG=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var bWG=_n('slot')
_rz(z,bWG,'name',6,e,s,gg)
_(eVG,bWG)
_(tUG,eVG)
}
var oXG=_n('slot')
_rz(z,oXG,'name',7,e,s,gg)
_(aTG,oXG)
var xYG=_n('slot')
_rz(z,xYG,'name',8,e,s,gg)
_(aTG,xYG)
tUG.wxXCkey=1
_(r,aTG)
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/entryLogin/entryLogin","pages/evaluate/evaluate","pages/share/share","pages/chat/villagerList/villagerList","pages/chat/chatLine/chatLine","pages/index/index","pages/me/me/me","pages/chat/chatDialogue/chatDialogue","pages/chat/publishDynamic/publishDynamic","pages/addHometown/addHometown","pages/villageSet/applyVillager/applyVillager","pages/login/login","pages/details/details","pages/chat/chatList/chatList","pages/serch/serch","pages/serch/citySearch/citySearch","pages/meInfo/personInfo/personInfo","pages/order/orderList/orderList","pages/meInfo/villageNews/villageNews","pages/meInfo/myLike/myLike","pages/meInfo/myComment/myComment","pages/meInfo/newsList/newsList","pages/meInfo/fans/fans","pages/meInfo/attention/attention","pages/meInfo/nikeName/nikeName","pages/search-in/search-in","pages/ranking/ranking","pages/villageSet/villageLabel/villageLabel","pages/villageSet/villageVideo/villageVideo","pages/villageSet/villageManager/villageManager","pages/voteList/voteList","pages/contribution/contribution","pages/contributionDeatils/contributionDeatils","pages/uploadVideo/uploadVideo","pages/feature/feature","pages/addPic/addPic","pages/scenery/scenery","pages/uploadPic/uploadPic","pages/order/orderEvaluate/orderEvaluate","pages/publishEvaluate/publishEvaluate","pages/villageIntroduce/villageIntroduce","pages/villageSet/villagePic/villagePic","pages/villageSet/villageIntroduce/villageIntroduce","pages/modal/homestayDetails/homestayDetails","pages/modal/homestay/homestay","pages/chat/chatDeatils/chatDeatils","pages/h5/h5"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#666","selectedColor":"#F44336","backgroundColor":"#FFF","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/img/tab_icon-1@2x.png","selectedIconPath":"static/img/tab_icon-05@2x.png"},{"pagePath":"pages/chat/chatLine/chatLine","text":"动态","iconPath":"static/img/tab_icon-2@2x.png","selectedIconPath":"static/img/tab_icon-06@2x.png"},{"pagePath":"pages/chat/chatList/chatList","text":"村聊","iconPath":"static/img/tab_icon-3@2x.png","selectedIconPath":"static/img/tab_icon-07@2x.png"},{"pagePath":"pages/me/me/me","text":"我的","iconPath":"static/img/tab_icon-4@2x.png","selectedIconPath":"static/img/tab_icon-08@2x.png"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"令行禁止","compilerVersion":"2.3.3","usingComponents":{"md5":"/js_sdk/js-md5/build/md5.min","j-i-m":"/js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min","cu-custom":"/static/colorui/components/cu-custom"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/base-classes/base-classes.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/base-classes/base-classes.wxml']=$gwx('./components/base-classes/base-classes.wxml');

__wxAppCode__['components/lee-select/lee-select.json']={"usingComponents":{"base-classes":"/components/base-classes/base-classes"},"component":true};
__wxAppCode__['components/lee-select/lee-select.wxml']=$gwx('./components/lee-select/lee-select.wxml');

__wxAppCode__['components/mescroll-uni/mescroll-uni.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mescroll-uni/mescroll-uni.wxml']=$gwx('./components/mescroll-uni/mescroll-uni.wxml');

__wxAppCode__['components/xuan-linkAddress/xuan-linkAddress.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/xuan-linkAddress/xuan-linkAddress.wxml']=$gwx('./components/xuan-linkAddress/xuan-linkAddress.wxml');

__wxAppCode__['pages/addHometown/addHometown.json']={"navigationBarTitleText":"添加我的家乡","usingComponents":{"link-address":"/components/xuan-linkAddress/xuan-linkAddress"}};
__wxAppCode__['pages/addHometown/addHometown.wxml']=$gwx('./pages/addHometown/addHometown.wxml');

__wxAppCode__['pages/addPic/addPic.json']={"navigationBarTitleText":"添加图片","usingComponents":{}};
__wxAppCode__['pages/addPic/addPic.wxml']=$gwx('./pages/addPic/addPic.wxml');

__wxAppCode__['pages/chat/chatDeatils/chatDeatils.json']={"usingComponents":{}};
__wxAppCode__['pages/chat/chatDeatils/chatDeatils.wxml']=$gwx('./pages/chat/chatDeatils/chatDeatils.wxml');

__wxAppCode__['pages/chat/chatDialogue/chatDialogue.json']={"navigationBarTitleText":"聊天","usingComponents":{}};
__wxAppCode__['pages/chat/chatDialogue/chatDialogue.wxml']=$gwx('./pages/chat/chatDialogue/chatDialogue.wxml');

__wxAppCode__['pages/chat/chatLine/chatLine.json']={"navigationBarTitleText":"动态","usingComponents":{"mescroll-uni":"/components/mescroll-uni/mescroll-uni"}};
__wxAppCode__['pages/chat/chatLine/chatLine.wxml']=$gwx('./pages/chat/chatLine/chatLine.wxml');

__wxAppCode__['pages/chat/chatList/chatList.json']={"navigationBarTitleText":"村聊","usingComponents":{}};
__wxAppCode__['pages/chat/chatList/chatList.wxml']=$gwx('./pages/chat/chatList/chatList.wxml');

__wxAppCode__['pages/chat/publishDynamic/publishDynamic.json']={"navigationBarTitleText":"发表动态","usingComponents":{}};
__wxAppCode__['pages/chat/publishDynamic/publishDynamic.wxml']=$gwx('./pages/chat/publishDynamic/publishDynamic.wxml');

__wxAppCode__['pages/chat/villagerList/villagerList.json']={"navigationBarTitleText":"村民列表","usingComponents":{}};
__wxAppCode__['pages/chat/villagerList/villagerList.wxml']=$gwx('./pages/chat/villagerList/villagerList.wxml');

__wxAppCode__['pages/contribution/contribution.json']={"navigationBarTitleText":"赚贡献值","usingComponents":{}};
__wxAppCode__['pages/contribution/contribution.wxml']=$gwx('./pages/contribution/contribution.wxml');

__wxAppCode__['pages/contributionDeatils/contributionDeatils.json']={"navigationBarTitleText":"贡献值明细","usingComponents":{}};
__wxAppCode__['pages/contributionDeatils/contributionDeatils.wxml']=$gwx('./pages/contributionDeatils/contributionDeatils.wxml');

__wxAppCode__['pages/details/details.json']={"navigationBarTitleText":"详情","usingComponents":{}};
__wxAppCode__['pages/details/details.wxml']=$gwx('./pages/details/details.wxml');

__wxAppCode__['pages/entryLogin/entryLogin.json']={"navigationBarTitleText":"授权登陆","usingComponents":{}};
__wxAppCode__['pages/entryLogin/entryLogin.wxml']=$gwx('./pages/entryLogin/entryLogin.wxml');

__wxAppCode__['pages/evaluate/evaluate.json']={"navigationBarTitleText":"评价","usingComponents":{}};
__wxAppCode__['pages/evaluate/evaluate.wxml']=$gwx('./pages/evaluate/evaluate.wxml');

__wxAppCode__['pages/feature/feature.json']={"navigationBarTitleText":"特色风采","usingComponents":{}};
__wxAppCode__['pages/feature/feature.wxml']=$gwx('./pages/feature/feature.wxml');

__wxAppCode__['pages/h5/h5.json']={"navigationBarTitleText":"网页浏览","usingComponents":{}};
__wxAppCode__['pages/h5/h5.wxml']=$gwx('./pages/h5/h5.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","usingComponents":{"mescroll-uni":"/components/mescroll-uni/mescroll-uni"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"账户登陆","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/me/me/me.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/me/me/me.wxml']=$gwx('./pages/me/me/me.wxml');

__wxAppCode__['pages/meInfo/attention/attention.json']={"navigationBarTitleText":"关注","usingComponents":{}};
__wxAppCode__['pages/meInfo/attention/attention.wxml']=$gwx('./pages/meInfo/attention/attention.wxml');

__wxAppCode__['pages/meInfo/fans/fans.json']={"navigationBarTitleText":"粉丝","usingComponents":{}};
__wxAppCode__['pages/meInfo/fans/fans.wxml']=$gwx('./pages/meInfo/fans/fans.wxml');

__wxAppCode__['pages/meInfo/myComment/myComment.json']={"navigationBarTitleText":"评论我的","usingComponents":{}};
__wxAppCode__['pages/meInfo/myComment/myComment.wxml']=$gwx('./pages/meInfo/myComment/myComment.wxml');

__wxAppCode__['pages/meInfo/myLike/myLike.json']={"navigationBarTitleText":"点赞我的","usingComponents":{}};
__wxAppCode__['pages/meInfo/myLike/myLike.wxml']=$gwx('./pages/meInfo/myLike/myLike.wxml');

__wxAppCode__['pages/meInfo/newsList/newsList.json']={"navigationBarTitleText":"消息列表","usingComponents":{}};
__wxAppCode__['pages/meInfo/newsList/newsList.wxml']=$gwx('./pages/meInfo/newsList/newsList.wxml');

__wxAppCode__['pages/meInfo/nikeName/nikeName.json']={"navigationBarTitleText":"修改昵称","usingComponents":{}};
__wxAppCode__['pages/meInfo/nikeName/nikeName.wxml']=$gwx('./pages/meInfo/nikeName/nikeName.wxml');

__wxAppCode__['pages/meInfo/personInfo/personInfo.json']={"navigationBarTitleText":"编辑资料","usingComponents":{}};
__wxAppCode__['pages/meInfo/personInfo/personInfo.wxml']=$gwx('./pages/meInfo/personInfo/personInfo.wxml');

__wxAppCode__['pages/meInfo/villageNews/villageNews.json']={"navigationBarTitleText":"村消息","usingComponents":{}};
__wxAppCode__['pages/meInfo/villageNews/villageNews.wxml']=$gwx('./pages/meInfo/villageNews/villageNews.wxml');

__wxAppCode__['pages/modal/homestay/homestay.json']={"navigationBarTitleText":"民宿","usingComponents":{}};
__wxAppCode__['pages/modal/homestay/homestay.wxml']=$gwx('./pages/modal/homestay/homestay.wxml');

__wxAppCode__['pages/modal/homestayDetails/homestayDetails.json']={"navigationBarTitleText":"民宿","usingComponents":{}};
__wxAppCode__['pages/modal/homestayDetails/homestayDetails.wxml']=$gwx('./pages/modal/homestayDetails/homestayDetails.wxml');

__wxAppCode__['pages/order/orderEvaluate/orderEvaluate.json']={"navigationBarTitleText":"点评","usingComponents":{}};
__wxAppCode__['pages/order/orderEvaluate/orderEvaluate.wxml']=$gwx('./pages/order/orderEvaluate/orderEvaluate.wxml');

__wxAppCode__['pages/order/orderList/orderList.json']={"navigationBarTitleText":"我的订单","usingComponents":{}};
__wxAppCode__['pages/order/orderList/orderList.wxml']=$gwx('./pages/order/orderList/orderList.wxml');

__wxAppCode__['pages/publishEvaluate/publishEvaluate.json']={"navigationBarTitleText":"发表点评","usingComponents":{}};
__wxAppCode__['pages/publishEvaluate/publishEvaluate.wxml']=$gwx('./pages/publishEvaluate/publishEvaluate.wxml');

__wxAppCode__['pages/ranking/ranking.json']={"navigationBarTitleText":"村排名","navigationBarBackgroundColor":"#3c9ffc","backgroundColorTop":"#3c9ffc","navigationBarTextStyle":"white","titleNView":{"type":"transparent","titleColor":"#fff","backgroundColor":"#3c9ffc"},"usingComponents":{}};
__wxAppCode__['pages/ranking/ranking.wxml']=$gwx('./pages/ranking/ranking.wxml');

__wxAppCode__['pages/scenery/scenery.json']={"navigationBarTitleText":"村景","usingComponents":{}};
__wxAppCode__['pages/scenery/scenery.wxml']=$gwx('./pages/scenery/scenery.wxml');

__wxAppCode__['pages/search-in/search-in.json']={"navigationBarTitleText":"搜索","usingComponents":{}};
__wxAppCode__['pages/search-in/search-in.wxml']=$gwx('./pages/search-in/search-in.wxml');

__wxAppCode__['pages/serch/citySearch/citySearch.json']={"navigationBarTitleText":"精确查找","usingComponents":{"uni-select":"/components/lee-select/lee-select"}};
__wxAppCode__['pages/serch/citySearch/citySearch.wxml']=$gwx('./pages/serch/citySearch/citySearch.wxml');

__wxAppCode__['pages/serch/serch.json']={"navigationBarTitleText":"搜索","usingComponents":{}};
__wxAppCode__['pages/serch/serch.wxml']=$gwx('./pages/serch/serch.wxml');

__wxAppCode__['pages/share/share.json']={"navigationBarTitleText":"分享","usingComponents":{}};
__wxAppCode__['pages/share/share.wxml']=$gwx('./pages/share/share.wxml');

__wxAppCode__['pages/uploadPic/uploadPic.json']={"navigationBarTitleText":"上传村景","usingComponents":{}};
__wxAppCode__['pages/uploadPic/uploadPic.wxml']=$gwx('./pages/uploadPic/uploadPic.wxml');

__wxAppCode__['pages/uploadVideo/uploadVideo.json']={"navigationBarTitleText":"添加视频","usingComponents":{}};
__wxAppCode__['pages/uploadVideo/uploadVideo.wxml']=$gwx('./pages/uploadVideo/uploadVideo.wxml');

__wxAppCode__['pages/villageIntroduce/villageIntroduce.json']={"navigationBarTitleText":"村简介发表","usingComponents":{}};
__wxAppCode__['pages/villageIntroduce/villageIntroduce.wxml']=$gwx('./pages/villageIntroduce/villageIntroduce.wxml');

__wxAppCode__['pages/villageSet/applyVillager/applyVillager.json']={"navigationBarTitleText":"申请村管理","usingComponents":{"link-address":"/components/xuan-linkAddress/xuan-linkAddress"}};
__wxAppCode__['pages/villageSet/applyVillager/applyVillager.wxml']=$gwx('./pages/villageSet/applyVillager/applyVillager.wxml');

__wxAppCode__['pages/villageSet/villageIntroduce/villageIntroduce.json']={"navigationBarTitleText":"编辑乡村简介","usingComponents":{}};
__wxAppCode__['pages/villageSet/villageIntroduce/villageIntroduce.wxml']=$gwx('./pages/villageSet/villageIntroduce/villageIntroduce.wxml');

__wxAppCode__['pages/villageSet/villageLabel/villageLabel.json']={"navigationBarTitleText":"乡村标签","usingComponents":{}};
__wxAppCode__['pages/villageSet/villageLabel/villageLabel.wxml']=$gwx('./pages/villageSet/villageLabel/villageLabel.wxml');

__wxAppCode__['pages/villageSet/villageManager/villageManager.json']={"navigationBarTitleText":"村务管理","usingComponents":{}};
__wxAppCode__['pages/villageSet/villageManager/villageManager.wxml']=$gwx('./pages/villageSet/villageManager/villageManager.wxml');

__wxAppCode__['pages/villageSet/villagePic/villagePic.json']={"navigationBarTitleText":"家乡封面","usingComponents":{}};
__wxAppCode__['pages/villageSet/villagePic/villagePic.wxml']=$gwx('./pages/villageSet/villagePic/villagePic.wxml');

__wxAppCode__['pages/villageSet/villageVideo/villageVideo.json']={"navigationBarTitleText":"村头视频","usingComponents":{}};
__wxAppCode__['pages/villageSet/villageVideo/villageVideo.wxml']=$gwx('./pages/villageSet/villageVideo/villageVideo.wxml');

__wxAppCode__['pages/voteList/voteList.json']={"navigationBarTitleText":"为家乡打榜","usingComponents":{}};
__wxAppCode__['pages/voteList/voteList.wxml']=$gwx('./pages/voteList/voteList.wxml');

__wxAppCode__['static/colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['static/colorui/components/cu-custom.wxml']=$gwx('./static/colorui/components/cu-custom.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"126c":function(t,e,n){"use strict";n.r(e);var o=n("f27a");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("2495");var a,c,r=n("2877"),f=Object(r["a"])(o["default"],a,c,!1,null,null,null);e["default"]=f.exports},2495:function(t,e,n){"use strict";var o=n("d98d"),u=n.n(o);u.a},c3b1:function(t,e,n){"use strict";(function(t){n("fbf9"),n("921b");var e=r(n("66fd")),o=r(n("126c")),u=r(n("af7e")),a=r(n("4141")),c=r(n("275c"));function r(t){return t&&t.__esModule?t:{default:t}}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function(){return n.e("common/vendor").then(n.t.bind(null,"6382",7))};e.default.component("md5",i);var p=function(){return Promise.resolve().then(n.t.bind(null,"9b7a",7))};e.default.component("JIM",p);var s=function(){return n.e("static/colorui/components/cu-custom").then(n.bind(null,"e536"))};e.default.component("cu-custom",s),e.default.config.productionTip=!1,e.default.prototype.$request=u.default,e.default.prototype.$api=c.default,e.default.prototype.$env=a.default,o.default.mpType="app";var d=new e.default(f({},o.default));t(d).$mount()}).call(this,n("6e42")["createApp"])},d98d:function(t,e,n){},e9ad:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("66fd")),a=r(n("9b7a")),c=r(n("e1b1"));function r(t){return t&&t.__esModule?t:{default:t}}var f={onLaunch:function(){t.getSystemInfo({success:function(t){u.default.prototype.winHeight=t.windowHeight,u.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?u.default.prototype.CustomBar=t.statusBarHeight+50:u.default.prototype.CustomBar=t.statusBarHeight+45}}),u.default.prototype.JIM=new a.default({}),console.log(o("App Launch"," at App.vue:34"));var e="d8ce7a8f28afaced6f89b5af",n=this.$api.Key,r=(new Date).getTime(),f=(0,c.default)("appkey=d8ce7a8f28afaced6f89b5af&timestamp="+r+"&random_str=022cd9fd995849b66666&key="+n);console.log(o(f," at App.vue:40")),this.JIM.init({appkey:e,random_str:"022cd9fd995849b66666",signature:f,timestamp:r,flag:1}).onSuccess(function(t){console.log(o(t," at App.vue:48"))}).onFail(function(t){}),this.JIM.onDisconnect(function(){console.log(o("JIM断开链接"," at App.vue:54"))}),this.JIM.onMsgReceive(function(e){console.log(o("在线接受消息"," at App.vue:59")),console.log(o(e," at App.vue:60")),t.$emit("msg_ol",e.messages[0].content)}),u.default.prototype.onSyncConversation=null,t.$once("onSyncConversation",function(e){this.onSyncConversation=e,console.log(o("离线传递："," at App.vue:68")),console.log(o(e," at App.vue:69")),t.$off()})},onShow:function(){console.log(o("App Show"," at App.vue:78"))},onHide:function(){console.log(o("App Hide"," at App.vue:81"))}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},f27a:function(t,e,n){"use strict";n.r(e);var o=n("e9ad"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a}},[["c3b1","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, c = t[0], a = t[1], u = t[2], i = 0, p = []; i < c.length; i++) {
      o = c[i], s[o] && p.push(s[o][0]), s[o] = 0;
    }

    for (r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }

    f && f(t);

    while (p.length) {
      p.shift()();
    }

    return l.push.apply(l, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== s[c] && (r = !1);
      }

      r && (l.splice(t--, 1), e = a(a.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      l = [];

  function c(e) {
    return a.p + "" + e + ".js";
  }

  function a(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.e = function (e) {
    var t = [],
        n = {
      "components/mescroll-uni/mescroll-uni": 1,
      "components/xuan-linkAddress/xuan-linkAddress": 1,
      "components/lee-select/lee-select": 1,
      "components/base-classes/base-classes": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "static/colorui/components/cu-custom": "static/colorui/components/cu-custom",
        "components/mescroll-uni/mescroll-uni": "components/mescroll-uni/mescroll-uni",
        "components/xuan-linkAddress/xuan-linkAddress": "components/xuan-linkAddress/xuan-linkAddress",
        "components/lee-select/lee-select": "components/lee-select/lee-select",
        "components/base-classes/base-classes": "components/base-classes/base-classes"
      }[e] || e) + ".wxss", s = a.p + r, l = document.getElementsByTagName("link"), c = 0; c < l.length; c++) {
        var u = l[c],
            i = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (i === r || i === s)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (c = 0; c < p.length; c++) {
        u = p[c], i = u.getAttribute("data-href");
        if (i === r || i === s) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var r = t && t.target && t.target.src || s,
            l = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        l.request = r, delete o[e], f.parentNode.removeChild(f), n(l);
      }, f.href = s;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var r = s[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var l = new Promise(function (t, n) {
        r = s[e] = [t, n];
      });
      t.push(r[2] = l);
      var u,
          i = document.createElement("script");
      i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.src = c(e), u = function u(t) {
        i.onerror = i.onload = null, clearTimeout(p);
        var n = s[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                l = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            l.type = r, l.request = o, n[1](l);
          }

          s[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        u({
          type: "timeout",
          target: i
        });
      }, 12e4);
      i.onerror = i.onload = u, document.head.appendChild(i);
    }
    return Promise.all(t);
  }, a.m = e, a.c = r, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      a.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      i = u.push.bind(u);
  u.push = t, u = u.slice();

  for (var p = 0; p < u.length; p++) {
    t(u[p]);
  }

  var f = i;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0acf":function(t,e,n){},"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(r.length>1){var s=r.pop();i=r.join("---COMMA---"),0===s.indexOf(" at ")?i+=s:i+="---COMMA---"+s}else i=r[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"275c":function(t,e,n){"use strict";(function(t){var n;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="1.0.0",i=t.getStorageSync("userInfo"),s=i.key,a=(n={VERSION:r,CLIENT:"Other",Key:s,post:"post",get:"get",currentCity:"search/currentCity",getSmallProceduresIndex:"smallproduresindex/getSmallProceduresIndex",villageInfo:"villagedetails/villageInfo",getInformation:"smallproduresindex/getInformation",addVillageVoteNum:"smallproduresindex/addVillageVoteNum",getCharmingVillageRank:"smallproduresindex/getCharmingVillageRank",getVillageImageList:"villagedetails/getVillageImageList",fileUpload:"upload/fileUpload",UploadImage:"Upload.UploadImage",addVillageImgList:"villagedetails/addVillageImgList",getLabels:"dictionary/getLabels",getVillageCharacteristicImgList:"villagedetails/getVillageCharacteristicImgList",addCharacteristicImg:"villagedetails/addCharacteristicImg",getVillageInformatioinList:"villagedetails/getVillageInformatioinList",getVillageVideoList:"villagedetails/getVillageVideoList",addVillageVideo:"villagedetails/addVillageVideo",editVillageIntro:"villagedetails/editVillageIntro",getVillageIntegralRecord:"villagedetails/getVillageIntegralRecord",getVillageRanking:"villagedetails/getVillageRanking",dayliTask:"smallProduresContribution/dayliTask",myContribution:"account/myIntegralRecord",GetDocument:"Index.GetDocument",AskforAdmin:"Village.AskforAdmin",villageEdit:"villagedetails/villageEdit",GetAreaList:"Index.GetAreaList",addMyVillage:"villagedetails/addMyVillage",getSearchVillage:"smallproduressearch/getSearchVillage",GetMemberInfo:"Member.GetMemberInfo",editMember:"Member.EditMember",getFansNum:"member/getFansNum",getFriendList:"member/getFriendList",getSpMessageByType:"smallproduresMessage/getSpMessageByType",getSpMessageCenterInfo:"smallproduresMessage/getSpMessageCenterInfo",getOrderList:"order/getOrderList",cancelOrder:"order/cancelOrder",deleteOrder:"order/deleteOrder",Getopenid:"Login.Getopenid",ThirdLogin:"Login.ThirdLogin",getDynamicList:"smallproduresindex/getDynamicList",adddynamic:"Tourist.Adddynamic",evaPraise:"Tourist.EvaPraise",GetWxMobile:"Login.GetWxMobile",BindPhone:"Login.BindPhone",AddTourist:"Tourist.AddTourist",likeVideo:"video/likeVideo",viewVideo:"video/viewVideo",getVideoCommentList:"video/getVideoCommentList",commentVideo:"video/commentVideo"},o(n,"getFriendList","member/getFriendList"),o(n,"getChatroomVillagerList","smallProduresChat/getChatroomVillagerList"),o(n,"getSearchVillageByAreaId","smallproduressearch/getSearchVillageByAreaId"),o(n,"WxBindMobile","Login.WxBindMobile"),o(n,"getAddress","public/getAddress"),o(n,"getLogAndLat","public/getLogAndLat"),o(n,"Getopenid","Login.Getopenid"),o(n,"JoinVillage","member/JoinVillage"),o(n,"exitVillage","member/exitVillage"),o(n,"villageDynamics","villagedetails/villageDynamics"),o(n,"shareTouristCircle","tourist/shareTouristCircle"),o(n,"addVillageEvaluatinParise","villagedetails/addVillageEvaluatinParise"),o(n,"addAttention","attention/addAttention"),o(n,"getChatroomNum","smallProduresChat/getChatroomNum"),o(n,"getVillageEvaluation","villagedetails/getVillageEvaluation"),n);e.default=a}).call(this,n("6e42")["default"])},2877:function(t,e,n){"use strict";function o(t,e,n,o,r,i,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return o})},3181:function(t,e,n){"use strict";(function(t){function n(t){var e=this;e.version="1.1.0",e.options=t||{},e.isDownScrolling=!1,e.isUpScrolling=!1;var n=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&n&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,n.prototype.extendDownScroll=function(t){n.extend(t,{use:!0,auto:!1,autoShowLoading:!1,isLock:!1,isBoth:!0,offset:80,fps:40,inOffsetRate:10,outOffsetRate:10,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",inited:null,inOffset:null,outOffset:null,onMoving:null,beforeLoading:null,showLoading:null,afterLoading:null,endDownScroll:null,callback:function(t){t.resetUpScroll()}})},n.prototype.extendUpScroll=function(t){n.extend(t,{use:!0,auto:!1,isLock:!1,isBoth:!0,callback:null,page:{num:0,size:10,time:null},fps:40,noMoreSize:10,offset:80,textLoading:"加载中 ...",textNoMore:"-- END --",inited:null,showLoading:null,showNoMore:null,hideUpScroll:null,toTop:{src:null,offset:1e3,duration:300,btnClick:null,onShow:null},empty:{use:!0,icon:null,tip:"~ 暂无相关数据 ~",btnText:"",btnClick:null,onShow:null},onScroll:!1})},n.extend=function(t,e){if(!t)return e;for(var o in e)null==t[o]?t[o]=e[o]:"object"===typeof t[o]&&n.extend(t[o],e[o]);return t},n.prototype.initDownScroll=function(){var t=this;t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.downHight=0,t.optDown.use&&t.optDown.inited&&setTimeout(function(){t.optDown.inited(t)},0)},n.prototype.touchstartEvent=function(t){if(this.optDown.use){var e=this;e.startPoint=e.getPoint(t),e.lastPoint=e.startPoint,e.maxTouchmoveY=e.getBodyHeight()-e.optDown.bottomOffset,e.inTouchend=!1}},n.prototype.touchmoveEvent=function(t){if(this.optDown.use&&this.startPoint){var e=this,n=(new Date).getTime();if(!(e.moveTime&&n-e.moveTime<e.moveTimeDiff)){e.moveTime=n,e.moveTimeDiff=1e3/e.optDown.fps;var o=e.getScrollTop(),r=e.getPoint(t),i=r.y-e.startPoint.y;if(i>0&&o<=0&&e.optDown.use&&!e.inTouchend&&!e.isDownScrolling&&!e.optDown.isLock&&(!e.isUpScrolling||e.isUpScrolling&&e.optUp.isBoth)){var s=Math.abs(e.lastPoint.x-r.x),a=Math.abs(e.lastPoint.y-r.y),c=Math.sqrt(s*s+a*a);if(0!==c){var u=Math.asin(a/c)/Math.PI*180;if(u<e.optDown.minAngle)return}if(e.maxTouchmoveY>0&&r.y>=e.maxTouchmoveY)return e.inTouchend=!0,void e.touchendEvent();e.preventDefault(t);var p=r.y-e.lastPoint.y;e.downHight<e.optDown.offset?(1!==e.movetype&&(e.movetype=1,e.optDown.inOffset&&e.optDown.inOffset(e),e.isMoveDown=!0),e.downHight+=p*e.optDown.inOffsetRate):(2!==e.movetype&&(e.movetype=2,e.optDown.outOffset&&e.optDown.outOffset(e),e.isMoveDown=!0),e.downHight+=p>0?Math.round(p*e.optDown.outOffsetRate):p);var l=e.downHight/e.optDown.offset;e.optDown.onMoving&&e.optDown.onMoving(e,l,e.downHight)}e.lastPoint=r}}},n.prototype.touchendEvent=function(t){if(this.optDown.use&&this.isMoveDown){var e=this;e.downHight>=e.optDown.offset?e.triggerDownScroll():(e.downHight=0,e.optDown.endDownScroll&&e.optDown.endDownScroll(e)),e.movetype=0,e.isMoveDown=!1}},n.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},n.prototype.triggerDownScroll=function(){this.optDown.beforeLoading&&this.optDown.beforeLoading(this)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},n.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.downHight=this.optDown.offset,this.optDown.showLoading(this,this.downHight)},n.prototype.endDownScroll=function(){var t=this,e=function(){t.downHight=0,t.isDownScrolling=!1,t.optDown.endDownScroll&&t.optDown.endDownScroll(t)},n=0;t.optDown.afterLoading&&(n=t.optDown.afterLoading(t)),"number"===typeof n&&n>0?setTimeout(e,n):e()},n.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},n.prototype.initUpScroll=function(){var t=this;t.optUp=t.options.up||{use:!1},t.extendUpScroll(t.optUp),!1!==t.optUp.use&&(t.optUp.hasNext=!0,t.optUp.empty.btnText=t.optUp.empty.btnText||t.optUp.empty.btntext,t.optUp.inited&&setTimeout(function(){t.optUp.inited(t)},0))},n.prototype.onReachBottom=function(){console.warn(t("当前版本无需再调用mescroll.onReachBottom()"," at components/mescroll-uni/mescroll-uni.js:324"))},n.prototype.scrolltolower=function(){!this.isUpScrolling&&(!this.isDownScrolling||this.isDownScrolling&&this.optDown.isBoth)&&!this.optUp.isLock&&this.optUp.hasNext&&this.triggerUpScroll()},n.prototype.onPageScroll=function(){console.warn(t("当前版本无需再调用mescroll.onPageScroll(e)"," at components/mescroll-uni/mescroll-uni.js:336"))},n.prototype.scroll=function(t,e){var n=(new Date).getTime();if(!(this.scrollTime&&n-this.scrollTime<this.scrollTimeDiff)){this.scrollTime=n,this.scrollTimeDiff=1e3/this.optUp.fps;var o=this,r=t.scrollTop;r>0&&o.optUp.toTop.src&&(r>=o.optUp.toTop.offset?o.showTopBtn():o.hideTopBtn()),o.optUp.onScroll&&e&&(null==o.preScrollY&&(o.preScrollY=0),o.isScrollUp=r-o.preScrollY>0,o.preScrollY=r,e(o,r,o.isScrollUp)),o.setScrollTop(r)}},n.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.num=this.optUp.page.num,this.size=this.optUp.page.size,this.time=this.optUp.page.time,this.optUp.callback(this))},n.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.optUp.showLoading&&this.optUp.showLoading(this)},n.prototype.showNoMore=function(){this.optUp.hasNext=!1,this.optUp.showNoMore&&this.optUp.showNoMore(this)},n.prototype.hideUpScroll=function(){this.optUp.hideUpScroll&&this.optUp.hideUpScroll(this)},n.prototype.endUpScroll=function(t){null!=t&&(t?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},n.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var e=this.optUp.page;this.prePageNum=e.num,this.prePageTime=e.time,e.num=1,e.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.num=e.num,this.size=e.size,this.time=e.time,this.optUp.callback&&this.optUp.callback(this)}},n.prototype.setPageNum=function(t){this.optUp.page.num=t-1},n.prototype.setPageSize=function(t){this.optUp.page.size=t},n.prototype.endByPage=function(t,e,n){var o;this.optUp.use&&null!=e&&(o=this.optUp.page.num<e),this.endSuccess(t,o,n)},n.prototype.endBySize=function(t,e,n){var o;if(this.optUp.use&&null!=e){var r=(this.optUp.page.num-1)*this.optUp.page.size+t;o=r<e}this.endSuccess(t,o,n)},n.prototype.endSuccess=function(t,e,n){var o=this;if(o.isDownScrolling&&o.endDownScroll(),o.optUp.use){var r;if(null!=t){var i=o.optUp.page.num,s=o.optUp.page.size;if(1===i&&n&&(o.optUp.page.time=n),t<s||!1===e)if(o.optUp.hasNext=!1,0===t&&1===i)r=!1,o.showEmpty();else{var a=(i-1)*s+t;r=!(a<o.optUp.noMoreSize),o.removeEmpty()}else r=!1,o.optUp.hasNext=!0,o.removeEmpty()}o.endUpScroll(r)}},n.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1),this.scrollTo(this.getScrollTop()-1,0))},n.prototype.showEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!0)},n.prototype.removeEmpty=function(){this.optUp.empty.onShow&&this.optUp.empty.onShow(!1)},n.prototype.showTopBtn=function(){this.optUp.toTop.src&&!this.topBtnShow&&(this.topBtnShow=!0,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!0))},n.prototype.hideTopBtn=function(){this.optUp.toTop.src&&this.topBtnShow&&(this.topBtnShow=!1,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!1))},n.prototype.getScrollTop=function(){return this.scrollTop||0},n.prototype.setScrollTop=function(t){this.scrollTop=t},n.prototype.scrollTo=function(t,e){this.myScrollTo&&this.myScrollTo(t,e)},n.prototype.resetScrollTo=function(t){this.myScrollTo=t},n.prototype.getStep=function(t,e,n,o,r){var i=e-t;if(0!==o&&0!==i){o=o||300,r=r||30;var s=o/r,a=i/s,c=0,u=setInterval(function(){c<s-1?(t+=a,n&&n(t,u),c++):(n&&n(e,u),clearInterval(u))},r)}else n&&n(e)},n.prototype.getBodyHeight=function(){return this.bodyHeight||0},n.prototype.setBodyHeight=function(t){this.bodyHeight=t},n.prototype.preventDefault=function(t){t&&t.preventDefault()}}).call(this,n("0de9")["default"])},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="",r="",i="";var s={baseUrl:o,phpUrl:i,img1:r};e.default=s},4339:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pinyin=void 0;var o={a:"啊阿锕",ai:"埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",an:"鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",ang:"肮昂盎",ao:"凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",ba:"芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",bai:"白柏百摆佰败拜稗薜掰鞴",ban:"斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",bang:"邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",bao:"苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",bo:"剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",bei:"杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",ben:"奔苯本笨畚坌锛",beng:"崩绷甭泵蹦迸唪嘣甏",bi:"逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",bian:"鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",biao:"标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",bie:"鳖憋别瘪蹩鳘",bin:"彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",bing:"兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",bu:"捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",ca:"擦嚓礤",cai:"猜裁材才财睬踩采彩菜蔡",can:"餐参蚕残惭惨灿骖璨粲黪",cang:"苍舱仓沧藏伧",cao:"操糙槽曹草艹嘈漕螬艚",ce:"厕策侧册测刂帻恻",ceng:"层蹭噌",cha:"插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",chai:"拆柴豺侪茈瘥虿龇",chan:"搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",chang:"昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",chao:"超抄钞朝嘲潮巢吵炒怊绉晁耖",che:"车扯撤掣彻澈坼屮砗",chen:"郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",cheng:"撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",chi:"吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",chong:"充冲虫崇宠茺忡憧铳艟",chou:"抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",chu:"臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",chuan:"揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",chuang:"疮窗幢床闯创怆",chui:"吹炊捶锤垂陲棰槌",chun:"春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",chuo:"戳绰蔟辶辍镞踔龊",ci:"疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",cong:"聪葱囱匆从丛偬苁淙骢琮璁枞",cu:"凑粗醋簇猝殂蹙",cuan:"蹿篡窜汆撺昕爨",cui:"摧崔催脆瘁粹淬翠萃悴璀榱隹",cun:"村存寸磋忖皴",cuo:"撮搓措挫错厝脞锉矬痤鹾蹉躜",da:"搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",dai:"呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",dan:"耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",dang:"当挡党荡档谠凼菪宕砀铛裆",dao:"刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",de:"德得的锝",deng:"蹬灯登等瞪凳邓噔嶝戥磴镫簦",di:"堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",dian:"颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",diao:"碉叼雕凋刁掉吊钓调轺铞蜩粜貂",die:"跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",ding:"丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",dong:"东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",dou:"兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",du:"都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",duan:"端短锻段断缎彖椴煅簖",dui:"堆兑队对怼憝碓",dun:"墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",duo:"掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",e:"蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",en:"恩蒽摁唔嗯",er:"而儿耳尔饵洱二贰迩珥铒鸸鲕",fa:"发罚筏伐乏阀法珐垡砝",fan:"藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",fang:"坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",fei:"菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",fen:"芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",feng:"丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",fu:"佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",ga:"噶嘎蛤尬呷尕尜旮钆",gai:"该改概钙盖溉丐陔垓戤赅胲",gan:"干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",gang:"冈刚钢缸肛纲岗港戆罡颃筻",gong:"杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",gao:"篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",ge:"哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",gei:"给",gen:"根跟亘茛哏艮",geng:"耕更庚羹埂耿梗哽赓鲠",gou:"钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",gu:"辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",gua:"刮瓜剐寡挂褂卦诖呱栝鸹",guai:"乖拐怪哙",guan:"棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",guang:"光广逛犷桄胱疒",gui:"瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",gun:"辊滚棍丨衮绲磙鲧",guo:"锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",ha:"哈",hai:"骸孩海氦亥害骇咴嗨颏醢",han:"酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",hen:"夯痕很狠恨",hang:"杭航沆绗珩桁",hao:"壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",he:"呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",hei:"嘿黑",heng:"哼亨横衡恒訇蘅",hong:"轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",hou:"喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",hu:"呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",hua:"花哗华猾滑画划化话劐浍骅桦铧稞",huai:"槐徊怀淮坏还踝",huan:"欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",huang:"荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",hui:"灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",hun:"荤昏婚魂浑混诨馄阍溷缗",huo:"豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",ji:"击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",jia:"嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",jian:"歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",jiang:"僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",jiao:"蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",jie:"窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",jin:"巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",jing:"劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",jiong:"炯窘冂迥扃",jiu:"揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",ju:"鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",juan:"捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",jue:"撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",jun:"均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",ka:"喀咖卡佧咔胩",ke:"咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",kai:"开揩楷凯慨剀垲蒈忾恺铠锎",kan:"刊堪勘坎砍看侃凵莰莶戡龛瞰",kang:"康慷糠扛抗亢炕坑伉闶钪",kao:"考拷烤靠尻栲犒铐",ken:"肯啃垦恳垠裉颀",keng:"吭忐铿",kong:"空恐孔控倥崆箜",kou:"抠口扣寇芤蔻叩眍筘",ku:"枯哭窟苦酷库裤刳堀喾绔骷",kua:"夸垮挎跨胯侉",kuai:"块筷侩快蒯郐蒉狯脍",kuan:"宽款髋",kuang:"匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",kui:"亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",kun:"坤昆捆困悃阃琨锟醌鲲髡",kuo:"括扩廓阔蛞",la:"垃拉喇蜡腊辣啦剌摺邋旯砬瘌",lai:"莱来赖崃徕涞濑赉睐铼癞籁",lan:"蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",lang:"琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",lao:"捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",le:"勒乐肋仂叻嘞泐鳓",lei:"雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",ling:"棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",leng:"楞愣",li:"厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",lian:"俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",liang:"粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",liao:"撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",lie:"列裂烈劣猎冽埒洌趔躐鬣",lin:"琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",liu:"溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",long:"龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",lou:"楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",lu:"芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",lv:"驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",luan:"峦孪滦卵乱栾鸾銮",lue:"掠略锊",lun:"轮伦仑沦纶论囵",luo:"萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",ma:"妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",mai:"埋买麦卖迈脉劢荬咪霾",man:"瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",mang:"芒茫盲忙莽邙漭朦硭蟒",meng:"氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",miao:"猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",mao:"茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",me:"么",mei:"玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",men:"门闷们扪玟焖懑钔",mi:"眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",mian:"棉眠绵冕免勉娩缅面沔湎腼眄",mie:"蔑灭咩蠛篾",min:"民抿皿敏悯闽苠岷闵泯珉",ming:"明螟鸣铭名命冥茗溟暝瞑酩",miu:"谬",mo:"摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",mou:"谋牟某厶哞婺眸鍪",mu:"拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",na:"拿哪呐钠那娜纳内捺肭镎衲箬",nai:"氖乃奶耐奈鼐艿萘柰",nan:"南男难囊喃囡楠腩蝻赧",nao:"挠脑恼闹孬垴猱瑙硇铙蛲",ne:"淖呢讷",nei:"馁",nen:"嫩能枘恁",ni:"妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",nian:"蔫拈年碾撵捻念廿辇黏鲇鲶",niang:"娘酿",niao:"鸟尿茑嬲脲袅",nie:"捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",nin:"您柠",ning:"狞凝宁拧泞佞蓥咛甯聍",niu:"牛扭钮纽狃忸妞蚴",nong:"脓浓农侬",nu:"奴努怒呶帑弩胬孥驽",nv:"女恧钕衄",nuan:"暖",nuenue:"虐",nue:"疟谑",nuo:"挪懦糯诺傩搦喏锘",ou:"哦欧鸥殴藕呕偶沤怄瓯耦",pa:"啪趴爬帕怕琶葩筢",pai:"拍排牌徘湃派俳蒎",pan:"攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",pang:"乓庞旁耪胖滂逄",pao:"抛咆刨炮袍跑泡匏狍庖脬疱",pei:"呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",pen:"喷盆湓",peng:"砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",pi:"砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",pian:"篇偏片骗谝骈犏胼褊翩蹁",piao:"飘漂瓢票剽嘌嫖缥殍瞟螵",pie:"撇瞥丿苤氕",pin:"拼频贫品聘拚姘嫔榀牝颦",ping:"乒坪苹萍平凭瓶评屏俜娉枰鲆",po:"坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",pou:"剖裒踣",pu:"扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",qi:"期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",qia:"掐恰洽葜",qian:"牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",qiang:"枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",qiao:"橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",qie:"切茄且怯窃郄唼惬妾挈锲箧",qin:"钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",qing:"青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",qiong:"琼穷邛茕穹筇銎",qiu:"秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",qu:"趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",quan:"圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",que:"缺炔瘸却鹊榷确雀阙悫",qun:"裙群逡",ran:"然燃冉染苒髯",rang:"瓤壤攘嚷让禳穰",rao:"饶扰绕荛娆桡",ruo:"惹若弱",re:"热偌",ren:"壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",reng:"扔仍",ri:"日",rong:"戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",rou:"揉柔肉糅蹂鞣",ru:"茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",ruan:"软阮朊",rui:"蕊瑞锐芮蕤睿蚋",run:"闰润",sa:"撒洒萨卅仨挲飒",sai:"腮鳃塞赛噻",san:"三叁伞散彡馓氵毵糁霰",sang:"桑嗓丧搡磉颡",sao:"搔骚扫嫂埽臊瘙鳋",se:"瑟色涩啬铩铯穑",sen:"森",seng:"僧",sha:"莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",shai:"筛晒酾",shan:"珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",shang:"墒伤商赏晌上尚裳垧绱殇熵觞",shao:"梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",she:"奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",shen:"砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",sheng:"声生甥牲升绳省盛剩胜圣丞渑媵眚笙",shi:"师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",shou:"收手首守寿授售受瘦兽扌狩绶艏",shu:"蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",shua:"刷耍唰涮",shuai:"摔衰甩帅蟀",shuan:"栓拴闩",shuang:"霜双爽孀",shui:"谁水睡税",shun:"吮瞬顺舜恂",shuo:"说硕朔烁蒴搠嗍濯妁槊铄",si:"斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",song:"松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",sou:"搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",su:"苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",suan:"酸蒜算",sui:"虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",sun:"孙损笋荪狲飧榫跣隼",suo:"梭唆缩琐索锁所唢嗦娑桫睃羧",ta:"塌他它她塔獭挞蹋踏闼溻遢榻沓",tai:"胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",tan:"坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",tang:"汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",thang:"倘躺淌",theng:"趟烫",tao:"掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",te:"特",teng:"藤腾疼誊滕",ti:"梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",tian:"天添填田甜恬舔腆掭忝阗殄畋钿蚺",tiao:"条迢眺跳佻祧铫窕龆鲦",tie:"贴铁帖萜餮",ting:"厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",tong:"通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",tou:"偷投头透亠",tu:"凸秃突图徒途涂屠土吐兔堍荼菟钍酴",tuan:"湍团疃",tui:"推颓腿蜕褪退忒煺",tun:"吞屯臀饨暾豚窀",tuo:"拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",wa:"挖哇蛙洼娃瓦袜佤娲腽",wai:"歪外",wan:"豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",wang:"汪王亡枉网往旺望忘妄罔尢惘辋魍",wei:"威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",wen:"瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",weng:"嗡翁瓮蓊蕹",wo:"挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",wu:"巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",xi:"昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",xia:"瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",xian:"锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",xiang:"相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",xiao:"萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",xie:"楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",xin:"薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",xing:"星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",xiong:"兄凶胸匈汹雄熊芎",xiu:"休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",xu:"墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",xuan:"轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",xue:"靴薛学穴雪血噱泶鳕",xun:"勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",ya:"压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",yan:"焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",yang:"殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",yao:"邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",ye:"椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",yi:"一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",yin:"茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",ying:"英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",yo:"哟唷",yong:"拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",you:"幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",yu:"迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",yuan:"鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",yue:"曰约越跃钥岳粤月悦阅龠樾刖钺",yun:"耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",za:"匝砸杂拶咂",zai:"栽哉灾宰载再在咱崽甾",zan:"攒暂赞瓒昝簪糌趱錾",zang:"赃脏葬奘戕臧",zao:"遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",ze:"责择则泽仄赜啧迮昃笮箦舴",zei:"贼",zen:"怎谮",zeng:"增憎曾赠缯甑罾锃",zha:"扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",zhai:"摘斋宅窄债寨砦",zhan:"瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",zhang:"樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",zhao:"招昭找沼赵照罩兆肇召爪诏棹钊笊",zhe:"遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",zhen:"珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",zheng:"蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",zhi:"芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",zhong:"中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",zhou:"舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",zhu:"珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",zhua:"抓",zhuai:"拽",zhuan:"专砖转撰赚篆抟啭颛",zhuang:"桩庄装妆撞壮状丬",zhui:"椎锥追赘坠缀萑骓缒",zhun:"谆准",zhuo:"捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",zi:"兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",zong:"鬃棕踪宗综总纵腙粽",zou:"邹走奏揍鄹鲰",zu:"租足卒族祖诅阻组俎菹啐徂驵蹴",zuan:"钻纂攥缵",zui:"嘴醉最罪",zun:"尊遵撙樽鳟",zuo:"昨左佐柞做作坐座阝阼胙祚酢",cou:"薮楱辏腠",nang:"攮哝囔馕曩",o:"喔",dia:"嗲",chuai:"嘬膪踹",cen:"岑涔",diu:"铥",nou:"耨",fou:"缶",bia:"髟"};e.pinyin=o},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,o="/";e.cwd=function(){return o},e.chdir=function(e){t||(t=n("df7c")),o=t.resolve(e,o)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"61bd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={down:{textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",offset:80},up:{textLoading:"加载中 ...",textNoMore:"-- END --",offset:80,toTop:{src:"http://www.mescroll.com/img/mescroll-totop.png?v=1",offset:1e3,duration:300},empty:{use:!0,icon:"http://www.mescroll.com/img/mescroll-empty.png?v=1",tip:"~ 暂无相关数据 ~"}}},r=o;e.default=r},6382:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(n){return new t(!0).update(n)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var n=0;n<c.length;++n){var o=c[n];e[o]=b(o)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var o,i,s=0,c=t.length,u=this.blocks,p=this.buffer8;s<c;){if(this.hashed&&(this.hashed=!1,u[0]=u[16],u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),e)if(a)for(i=this.start;s<c&&i<64;++s)p[i++]=t[s];else for(i=this.start;s<c&&i<64;++s)u[i>>2]|=t[s]<<y[3&i++];else if(a)for(i=this.start;s<c&&i<64;++s)(o=t.charCodeAt(s))<128?p[i++]=o:o<2048?(p[i++]=192|o>>6,p[i++]=128|63&o):o<55296||o>=57344?(p[i++]=224|o>>12,p[i++]=128|o>>6&63,p[i++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),p[i++]=240|o>>18,p[i++]=128|o>>12&63,p[i++]=128|o>>6&63,p[i++]=128|63&o);else for(i=this.start;s<c&&i<64;++s)(o=t.charCodeAt(s))<128?u[i>>2]|=o<<y[3&i++]:o<2048?(u[i>>2]|=(192|o>>6)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]):o<55296||o>=57344?(u[i>>2]|=(224|o>>12)<<y[3&i++],u[i>>2]|=(128|o>>6&63)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),u[i>>2]|=(240|o>>18)<<y[3&i++],u[i>>2]|=(128|o>>12&63)<<y[3&i++],u[i>>2]|=(128|o>>6&63)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,n,o,r,i,s=this.blocks;this.first?e=((e=((t=((t=s[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(o=((o=(-1732584194^2004318071&t)+s[1]-117830708)<<12|o>>>20)+t<<0)&(-271733879^t))+s[2]-1126478375)<<17|n>>>15)+o<<0)&(o^t))+s[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((o=this.h3)^e&(n^o))+s[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(o=((o+=(n^t&(e^n))+s[1]-389564586)<<12|o>>>20)+t<<0)&(t^e))+s[2]+606105819)<<17|n>>>15)+o<<0)&(o^t))+s[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(o^e&(n^o))+s[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(o=((o+=(n^t&(e^n))+s[5]+1200080426)<<12|o>>>20)+t<<0)&(t^e))+s[6]-1473231341)<<17|n>>>15)+o<<0)&(o^t))+s[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(o^e&(n^o))+s[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(o=((o+=(n^t&(e^n))+s[9]-1958414417)<<12|o>>>20)+t<<0)&(t^e))+s[10]-42063)<<17|n>>>15)+o<<0)&(o^t))+s[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(o^e&(n^o))+s[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(o=((o+=(n^t&(e^n))+s[13]-40341101)<<12|o>>>20)+t<<0)&(t^e))+s[14]-1502002290)<<17|n>>>15)+o<<0)&(o^t))+s[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((o=((o+=(e^n&((t=((t+=(n^o&(e^n))+s[1]-165796510)<<5|t>>>27)+e<<0)^e))+s[6]-1069501632)<<9|o>>>23)+t<<0)^t&((n=((n+=(t^e&(o^t))+s[11]+643717713)<<14|n>>>18)+o<<0)^o))+s[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((o=((o+=(e^n&((t=((t+=(n^o&(e^n))+s[5]-701558691)<<5|t>>>27)+e<<0)^e))+s[10]+38016083)<<9|o>>>23)+t<<0)^t&((n=((n+=(t^e&(o^t))+s[15]-660478335)<<14|n>>>18)+o<<0)^o))+s[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((o=((o+=(e^n&((t=((t+=(n^o&(e^n))+s[9]+568446438)<<5|t>>>27)+e<<0)^e))+s[14]-1019803690)<<9|o>>>23)+t<<0)^t&((n=((n+=(t^e&(o^t))+s[3]-187363961)<<14|n>>>18)+o<<0)^o))+s[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((o=((o+=(e^n&((t=((t+=(n^o&(e^n))+s[13]-1444681467)<<5|t>>>27)+e<<0)^e))+s[2]-51403784)<<9|o>>>23)+t<<0)^t&((n=((n+=(t^e&(o^t))+s[7]+1735328473)<<14|n>>>18)+o<<0)^o))+s[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((i=(o=((o+=((r=e^n)^(t=((t+=(r^o)+s[5]-378558)<<4|t>>>28)+e<<0))+s[8]-2022574463)<<11|o>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[11]+1839030562)<<16|n>>>16)+o<<0))+s[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((i=(o=((o+=((r=e^n)^(t=((t+=(r^o)+s[1]-1530992060)<<4|t>>>28)+e<<0))+s[4]+1272893353)<<11|o>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[7]-155497632)<<16|n>>>16)+o<<0))+s[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((i=(o=((o+=((r=e^n)^(t=((t+=(r^o)+s[13]+681279174)<<4|t>>>28)+e<<0))+s[0]-358537222)<<11|o>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[3]-722521979)<<16|n>>>16)+o<<0))+s[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((i=(o=((o+=((r=e^n)^(t=((t+=(r^o)+s[9]-640364487)<<4|t>>>28)+e<<0))+s[12]-421815835)<<11|o>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[15]+530742520)<<16|n>>>16)+o<<0))+s[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((o=((o+=(e^((t=((t+=(n^(e|~o))+s[0]-198630844)<<6|t>>>26)+e<<0)|~n))+s[7]+1126891415)<<10|o>>>22)+t<<0)^((n=((n+=(t^(o|~e))+s[14]-1416354905)<<15|n>>>17)+o<<0)|~t))+s[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((o=((o+=(e^((t=((t+=(n^(e|~o))+s[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+s[3]-1894986606)<<10|o>>>22)+t<<0)^((n=((n+=(t^(o|~e))+s[10]-1051523)<<15|n>>>17)+o<<0)|~t))+s[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((o=((o+=(e^((t=((t+=(n^(e|~o))+s[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+s[15]-30611744)<<10|o>>>22)+t<<0)^((n=((n+=(t^(o|~e))+s[6]-1560198380)<<15|n>>>17)+o<<0)|~t))+s[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((o=((o+=(e^((t=((t+=(n^(e|~o))+s[4]-145523070)<<6|t>>>26)+e<<0)|~n))+s[11]-1120210379)<<10|o>>>22)+t<<0)^((n=((n+=(t^(o|~e))+s[2]+718787259)<<15|n>>>17)+o<<0)|~t))+s[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+o<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,o=this.h2,r=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[o>>4&15]+n[15&o]+n[o>>12&15]+n[o>>8&15]+n[o>>20&15]+n[o>>16&15]+n[o>>28&15]+n[o>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,n,o="",r=this.array(),i=0;i<15;)t=r[i++],e=r[i++],n=r[i++],o+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|n>>>6)]+p[63&n];return t=r[i],o+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function o(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function i(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function p(t){return"[object Object]"===u.call(t)}function l(t){return"[object RegExp]"===u.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function _(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),o=t.split(","),r=0;r<o.length;r++)n[o[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function E(t,e){return v.call(t,e)}function b(t){var e=Object.create(null);return function(n){var o=e[n];return o||(e[n]=t(n))}}var k=/-(\w)/g,S=b(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),w=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,O=b(function(t){return t.replace(T,"-$1").toLowerCase()});function A(t,e){function n(n){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function N(t,e){return t.bind(e)}var x=Function.prototype.bind?N:A;function R(t,e){e=e||0;var n=t.length-e,o=new Array(n);while(n--)o[n]=t[n+e];return o}function D(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function I(t,e,n){}var j=function(t,e,n){return!1},L=function(t){return t};function M(t,e){if(t===e)return!0;var n=c(t),o=c(e);if(!n||!o)return!n&&!o&&String(t)===String(e);try{var r=Array.isArray(t),i=Array.isArray(e);if(r&&i)return t.length===e.length&&t.every(function(t,n){return M(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||i)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every(function(n){return M(t[n],e[n])})}catch(u){return!1}}function P(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:I,parsePlatformTagName:L,mustUseProp:j,async:!0,_lifecycleHooks:$},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,o){Object.defineProperty(t,e,{value:n,enumerable:!!o,writable:!0,configurable:!0})}var q=new RegExp("[^"+F.source+".$_\\d]");function z(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y,J="__proto__"in{},X="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,W=K&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===W),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(X)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ot)}catch(nr){}var rt=function(){return void 0===Y&&(Y=!X&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Y},it=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function st(t){return"function"===typeof t&&/native code/.test(t.toString())}var at,ct="undefined"!==typeof Symbol&&st(Symbol)&&"undefined"!==typeof Reflect&&st(Reflect.ownKeys);at="undefined"!==typeof Set&&st(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=I,pt=0,lt=function(){this.id=pt++,this.subs=[]};function ht(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ft(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){m(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,o,r,i,s,a){this.tag=t,this.data=e,this.children=n,this.text=o,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,_t);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var vt=Array.prototype,Et=Object.create(vt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=vt[t];H(Et,t,function(){var n=[],o=arguments.length;while(o--)n[o]=arguments[o];var r,i=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&s.observeArray(r),s.dep.notify(),i})});var kt=Object.getOwnPropertyNames(Et),St=!0;function wt(t){St=t}var Tt=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?At(t,Et,kt):Ot(t,Et):At(t,Et,kt),this.observeArray(t)):this.walk(t)};function Ot(t,e){t.__proto__=e}function At(t,e,n){for(var o=0,r=n.length;o<r;o++){var i=n[o];H(t,i,e[i])}}function Nt(t,e){var n;if(c(t)&&!(t instanceof dt))return E(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:St&&!rt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function xt(t,e,n,o,r){var i=new lt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!r&&Nt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return lt.SharedObject.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var o=a?a.call(t):n;e===o||e!==e&&o!==o||a&&!c||(c?c.call(t,e):n=e,u=!r&&Nt(e),i.notify())}})}}function Rt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var o=t.__ob__;return t._isVue||o&&o.vmCount?n:o?(xt(o.value,e,n),o.dep.notify(),n):(t[e]=n,n)}function Dt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||E(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,o=t.length;n<o;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)xt(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Nt(t[e])};var It=V.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,o,r,i=ct?Reflect.ownKeys(e):Object.keys(e),s=0;s<i.length;s++)n=i[s],"__ob__"!==n&&(o=t[n],r=e[n],E(t,n)?o!==r&&p(o)&&p(r)&&jt(o,r):Rt(t,n,r));return t}function Lt(t,e,n){return n?function(){var o="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return o?jt(o,r):r}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Mt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Pt(n):n}function Pt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,o){var r=Object.create(t||null);return e?D(r,e):r}It.data=function(t,e,n){return n?Lt(t,e,n):e&&"function"!==typeof e?t:Lt(t,e)},$.forEach(function(t){It[t]=Mt}),B.forEach(function(t){It[t+"s"]=Ut}),It.watch=function(t,e,n,o){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var i in D(r,t),e){var s=r[i],a=e[i];s&&!Array.isArray(s)&&(s=[s]),r[i]=s?s.concat(a):Array.isArray(a)?a:[a]}return r},It.props=It.methods=It.inject=It.computed=function(t,e,n,o){if(!t)return e;var r=Object.create(null);return D(r,t),e&&D(r,e),r},It.provide=Lt;var Bt=function(t,e){return void 0===e?t:e};function $t(t,e){var n=t.props;if(n){var o,r,i,s={};if(Array.isArray(n)){o=n.length;while(o--)r=n[o],"string"===typeof r&&(i=S(r),s[i]={type:null})}else if(p(n))for(var a in n)r=n[a],i=S(a),s[i]=p(r)?r:{type:r};else 0;t.props=s}}function Vt(t,e){var n=t.inject;if(n){var o=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)o[n[r]]={from:n[r]};else if(p(n))for(var i in n){var s=n[i];o[i]=p(s)?D({from:i},s):{from:s}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var o=e[n];"function"===typeof o&&(e[n]={bind:o,update:o})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),$t(e,n),Vt(e,n),Ft(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var o=0,r=e.mixins.length;o<r;o++)t=Gt(t,e.mixins[o],n);var i,s={};for(i in t)a(i);for(i in e)E(t,i)||a(i);function a(o){var r=It[o]||Bt;s[o]=r(t[o],e[o],n,o)}return s}function Ht(t,e,n,o){if("string"===typeof n){var r=t[e];if(E(r,n))return r[n];var i=S(n);if(E(r,i))return r[i];var s=w(i);if(E(r,s))return r[s];var a=r[n]||r[i]||r[s];return a}}function qt(t,e,n,o){var r=e[t],i=!E(n,t),s=n[t],a=Xt(Boolean,r.type);if(a>-1)if(i&&!E(r,"default"))s=!1;else if(""===s||s===O(t)){var c=Xt(String,r.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=zt(o,r,t);var u=St;wt(!0),Nt(s),wt(u)}return s}function zt(t,e,n){if(E(e,"default")){var o=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof o&&"Function"!==Yt(e.type)?o.call(t):o}}function Yt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return Yt(t)===Yt(e)}function Xt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,o=e.length;n<o;n++)if(Jt(e[n],t))return n;return-1}function Kt(t,e,n){ht();try{if(e){var o=e;while(o=o.$parent){var r=o.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var s=!1===r[i].call(o,t,e,n);if(s)return}catch(nr){Zt(nr,o,"errorCaptured hook")}}}Zt(t,e,n)}finally{ft()}}function Wt(t,e,n,o,r){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&f(i)&&!i._handled&&(i.catch(function(t){return Kt(t,o,r+" (Promise/async)")}),i._handled=!0)}catch(nr){Kt(nr,o,r)}return i}function Zt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&Qt(nr,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!X&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function oe(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&st(Promise)){var re=Promise.resolve();te=function(){re.then(oe),et&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!st(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&st(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ie=1,se=new MutationObserver(oe),ae=document.createTextNode(String(ie));se.observe(ae,{characterData:!0}),te=function(){ie=(ie+1)%2,ae.data=String(ie)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(nr){Kt(nr,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new at;function pe(t){le(t,ue),ue.clear()}function le(t,e){var n,o,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(r){n=t.length;while(n--)le(t[n],e)}else{o=Object.keys(t),n=o.length;while(n--)le(t[o[n]],e)}}}var he=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var o="!"===t.charAt(0);return t=o?t.slice(1):t,{name:t,once:n,capture:o,passive:e}});function fe(t,e){function n(){var t=arguments,o=n.fns;if(!Array.isArray(o))return Wt(o,null,arguments,e,"v-on handler");for(var r=o.slice(),i=0;i<r.length;i++)Wt(r[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,s,a){var c,u,p,l;for(c in t)u=t[c],p=e[c],l=he(c),o(u)||(o(p)?(o(u.fns)&&(u=t[c]=fe(u,a)),i(l.once)&&(u=t[c]=s(l.name,u,l.capture)),n(l.name,u,l.capture,l.passive,l.params)):u!==p&&(p.fns=u,t[c]=p));for(c in e)o(t[c])&&(l=he(c),r(l.name,e[c],l.capture))}function _e(t,e,n){var i=e.options.props;if(!o(i)){var s={},a=t.attrs,c=t.props;if(r(a)||r(c))for(var u in i){var p=O(u);ge(s,c,u,p,!0)||ge(s,a,u,p,!1)}return s}}function ge(t,e,n,o,i){if(r(e)){if(E(e,n))return t[n]=e[n],i||delete e[n],!0;if(E(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return a(t)?[yt(t)]:Array.isArray(t)?Ee(t):void 0}function ve(t){return r(t)&&r(t.text)&&s(t.isComment)}function Ee(t,e){var n,s,c,u,p=[];for(n=0;n<t.length;n++)s=t[n],o(s)||"boolean"===typeof s||(c=p.length-1,u=p[c],Array.isArray(s)?s.length>0&&(s=Ee(s,(e||"")+"_"+n),ve(s[0])&&ve(u)&&(p[c]=yt(u.text+s[0].text),s.shift()),p.push.apply(p,s)):a(s)?ve(u)?p[c]=yt(u.text+s):""!==s&&p.push(yt(s)):ve(s)&&ve(u)?p[c]=yt(u.text+s.text):(i(t._isVList)&&r(s.tag)&&o(s.key)&&r(e)&&(s.key="__vlist"+e+"_"+n+"__"),p.push(s)));return p}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function ke(t){var e=Se(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(n){xt(t,n,e[n])}),wt(!0))}function Se(t,e){if(t){for(var n=Object.create(null),o=ct?Reflect.ownKeys(t):Object.keys(t),r=0;r<o.length;r++){var i=o[r];if("__ob__"!==i){var s=t[i].from,a=e;while(a){if(a._provided&&E(a._provided,s)){n[i]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function we(t,e){if(!t||!t.length)return{};for(var n={},o=0,r=t.length;o<r;o++){var i=t[o],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,i.context!==e&&i.fnContext!==e||!s||null==s.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Te)&&delete n[u];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Oe(t,e,o){var r,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&o&&o!==n&&a===o.$key&&!i&&!o.$hasNormal)return o;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=Ae(e,c,t[c]))}else r={};for(var u in e)u in r||(r[u]=Ne(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),H(r,"$stable",s),H(r,"$key",a),H(r,"$hasNormal",i),r}function Ae(t,e,n){var o=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:o,enumerable:!0,configurable:!0}),o}function Ne(t,e){return function(){return t[e]}}function xe(t,e){var n,o,i,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"===typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),p=u.next();while(!p.done)n.push(e(p.value,n.length)),p=u.next()}else for(s=Object.keys(t),n=new Array(s.length),o=0,i=s.length;o<i;o++)a=s[o],n[o]=e(t[a],a,o);return r(n)||(n=[]),n._isVList=!0,n}function Re(t,e,n,o){var r,i=this.$scopedSlots[t];i?(n=n||{},o&&(n=D(D({},o),n)),r=i(n)||e):r=this.$slots[t]||e;var s=n&&n.slot;return s?this.$createElement("template",{slot:s},r):r}function De(t){return Ht(this.$options,"filters",t,!0)||L}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,o,r){var i=V.keyCodes[e]||n;return r&&o&&!V.keyCodes[e]?Ce(r,o):i?Ce(i,t):o?O(o)!==e:void 0}function je(t,e,n,o,r){if(n)if(c(n)){var i;Array.isArray(n)&&(n=C(n));var s=function(s){if("class"===s||"style"===s||y(s))i=t;else{var a=t.attrs&&t.attrs.type;i=o||V.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(s),u=O(s);if(!(c in i)&&!(u in i)&&(i[s]=n[s],r)){var p=t.on||(t.on={});p["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function Le(t,e){var n=this._staticTrees||(this._staticTrees=[]),o=n[t];return o&&!e?o:(o=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Pe(o,"__static__"+t,!1),o)}function Me(t,e,n){return Pe(t,"__once__"+e+(n?"_"+n:""),!0),t}function Pe(t,e,n){if(Array.isArray(t))for(var o=0;o<t.length;o++)t[o]&&"string"!==typeof t[o]&&Ue(t[o],e+"_"+o,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(p(e)){var n=t.on=t.on?D({},t.on):{};for(var o in e){var r=n[o],i=e[o];n[o]=r?[].concat(r,i):i}}else;return t}function $e(t,e,n,o){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var i=t[r];Array.isArray(i)?$e(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return o&&(e.$key=o),e}function Ve(t,e){for(var n=0;n<e.length;n+=2){var o=e[n];"string"===typeof o&&o&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Ge(t){t._o=Me,t._n=_,t._s=d,t._l=xe,t._t=Re,t._q=M,t._i=P,t._m=Le,t._f=De,t._k=Ie,t._b=je,t._v=yt,t._e=gt,t._u=$e,t._g=Be,t._d=Ve,t._p=Fe}function He(t,e,o,r,s){var a,c=this,u=s.options;E(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var p=i(u._compiled),l=!p;this.data=t,this.props=e,this.children=o,this.parent=r,this.listeners=t.on||n,this.injections=Se(u.inject,r),this.slots=function(){return c.$slots||Oe(t.scopedSlots,c.$slots=we(o,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Oe(t.scopedSlots,this.slots())}}),p&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Oe(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,o){var i=on(a,t,e,n,o,l);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=r),i}:this._c=function(t,e,n,o){return on(a,t,e,n,o,l)}}function qe(t,e,o,i,s){var a=t.options,c={},u=a.props;if(r(u))for(var p in u)c[p]=qt(p,u,e||n);else r(o.attrs)&&Ye(c,o.attrs),r(o.props)&&Ye(c,o.props);var l=new He(o,c,s,i,t),h=a.render.call(null,l._c,l);if(h instanceof dt)return ze(h,o,l.parent,a,l);if(Array.isArray(h)){for(var f=me(h)||[],d=new Array(f.length),_=0;_<f.length;_++)d[_]=ze(f[_],o,l.parent,a,l);return d}}function ze(t,e,n,o,r){var i=mt(t);return i.fnContext=n,i.fnOptions=o,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ye(t,e){for(var n in e)t[S(n)]=e[n]}Ge(He.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var o=t.componentInstance=We(t,Sn);o.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,o=e.componentInstance=t.componentInstance;An(o,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Gn(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Rn(e,!0):e.$destroy())}},Xe=Object.keys(Je);function Ke(t,e,n,s,a){if(!o(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var p;if(o(t.cid)&&(p=t,t=dn(p,u),void 0===t))return fn(p,e,n,s,a);e=e||{},ho(t),r(e.model)&&tn(t.options,e);var l=_e(e,t,a);if(i(t.options.functional))return qe(t,l,e,n,s);var h=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var d=t.options.name||a,_=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:h,tag:a,children:s},p);return _}}}function We(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},o=t.data.inlineTemplate;return r(o)&&(n.render=o.render,n.staticRenderFns=o.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Xe.length;n++){var o=Xe[n],r=e[o],i=Je[o];r===i||r&&r._merged||(e[o]=r?Qe(i,r):i)}}function Qe(t,e){var n=function(n,o){t(n,o),e(n,o)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[o],a=e.model.callback;r(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[o]=[a].concat(s)):i[o]=a}var en=1,nn=2;function on(t,e,n,o,r,s){return(Array.isArray(n)||a(n))&&(r=o,o=n,n=void 0),i(s)&&(r=nn),rn(t,e,n,o,r)}function rn(t,e,n,o,i){if(r(n)&&r(n.__ob__))return gt();if(r(n)&&r(n.is)&&(e=n.is),!e)return gt();var s,a,c;(Array.isArray(o)&&"function"===typeof o[0]&&(n=n||{},n.scopedSlots={default:o[0]},o.length=0),i===nn?o=me(o):i===en&&(o=ye(o)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),s=V.isReservedTag(e)?new dt(V.parsePlatformTagName(e),n,o,void 0,void 0,t):n&&n.pre||!r(c=Ht(t.$options,"components",e))?new dt(e,n,o,void 0,void 0,t):Ke(c,n,t,o,e)):s=Ke(e,n,t,o);return Array.isArray(s)?s:r(s)?(r(a)&&sn(s,a),r(n)&&an(n),s):gt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];r(c.tag)&&(o(c.ns)||i(n)&&"svg"!==c.tag)&&sn(c,e,n)}}function an(t){c(t.style)&&pe(t.style),c(t.class)&&pe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,o=t.$vnode=e._parentVnode,r=o&&o.context;t.$slots=we(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,o,r){return on(t,e,n,o,r,!1)},t.$createElement=function(e,n,o,r){return on(t,e,n,o,r,!0)};var i=o&&o.data;xt(t,"$attrs",i&&i.attrs||n,null,!0),xt(t,"$listeners",e._parentListeners||n,null,!0)}var un,pn=null;function ln(t){Ge(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,o=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Oe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{pn=e,t=o.call(e._renderProxy,e.$createElement)}catch(nr){Kt(nr,e,"render"),t=e._vnode}finally{pn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=r,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function fn(t,e,n,o,r){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:o,tag:r},i}function dn(t,e){if(i(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=pn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var s=t.owners=[n],a=!0,u=null,p=null;n.$on("hook:destroyed",function(){return m(s,n)});var l=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==p&&(clearTimeout(p),p=null))},h=U(function(n){t.resolved=hn(n,e),a?s.length=0:l(!0)}),d=U(function(e){r(t.errorComp)&&(t.error=!0,l(!0))}),_=t(h,d);return c(_)&&(f(_)?o(t.resolved)&&_.then(h,d):f(_.component)&&(_.component.then(h,d),r(_.error)&&(t.errorComp=hn(_.error,e)),r(_.loading)&&(t.loadingComp=hn(_.loading,e),0===_.delay?t.loading=!0:u=setTimeout(function(){u=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))},_.delay||200)),r(_.timeout)&&(p=setTimeout(function(){p=null,o(t.resolved)&&d(null)},_.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function _n(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||_n(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function mn(t,e){un.$on(t,e)}function vn(t,e){un.$off(t,e)}function En(t,e){var n=un;return function o(){var r=e.apply(null,arguments);null!==r&&n.$off(t,o)}}function bn(t,e,n){un=t,de(e,n||{},mn,vn,En,t),un=void 0}function kn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var o=this;if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)o.$on(t[r],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function o(){n.$off(t,o),e.apply(n,arguments)}return o.fn=e,n.$on(t,o),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var o=0,r=t.length;o<r;o++)n.$off(t[o],e);return n}var i,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(i=s[a],i===e||i.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?R(n):n;for(var o=R(arguments,1),r='event handler for "'+t+'"',i=0,s=n.length;i<s;i++)Wt(n[i],e,o,e,r)}return e}}var Sn=null;function wn(t){var e=Sn;return Sn=t,function(){Sn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,o=n.$el,r=n._vnode,i=wn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),i(),o&&(o.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function An(t,e,o,r,i){var s=r.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key),u=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||n,t.$listeners=o||n,e&&t.$options.props){wt(!1);for(var p=t._props,l=t.$options._propKeys||[],h=0;h<l.length;h++){var f=l[h],d=t.$options.props;p[f]=qt(f,d,e,t)}wt(!0),t.$options.propsData=e}o=o||n;var _=t.$options._parentListeners;t.$options._parentListeners=o,bn(t,o,_),u&&(t.$slots=we(i,r.context),t.$forceUpdate())}function Nn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,Nn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Dn(t,"activated")}}function Rn(t,e){if((!e||(t._directInactive=!0,!Nn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Rn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){ht();var n=t.$options[e],o=e+" hook";if(n)for(var r=0,i=n.length;r<i;r++)Wt(n[r],t,null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Cn=[],In=[],jn={},Ln=!1,Mn=!1,Pn=0;function Un(){Pn=Cn.length=In.length=0,jn={},Ln=Mn=!1}var Bn=Date.now;if(X&&!Q){var $n=window.performance;$n&&"function"===typeof $n.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return $n.now()})}function Vn(){var t,e;for(Bn(),Mn=!0,Cn.sort(function(t,e){return t.id-e.id}),Pn=0;Pn<Cn.length;Pn++)t=Cn[Pn],t.before&&t.before(),e=t.id,jn[e]=null,t.run();var n=In.slice(),o=Cn.slice();Un(),Hn(n),Fn(o),it&&V.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],o=n.vm;o._watcher===n&&o._isMounted&&!o._isDestroyed&&Dn(o,"updated")}}function Gn(t){t._inactive=!1,In.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function qn(t){var e=t.id;if(null==jn[e]){if(jn[e]=!0,Mn){var n=Cn.length-1;while(n>Pn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Ln||(Ln=!0,ce(Vn))}}var zn=0,Yn=function(t,e,n,o,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new at,this.newDepIds=new at,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Yn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Kt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&pe(t),ft(),this.cleanupDeps()}return t},Yn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Yn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Yn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qn(this)},Yn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Kt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Yn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Yn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Yn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:I,set:I};function Xn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Wn(t,e.props),e.methods&&io(t,e.methods),e.data?Zn(t):Nt(t._data={},!0),e.computed&&eo(t,e.computed),e.watch&&e.watch!==nt&&so(t,e.watch)}function Wn(t,e){var n=t.$options.propsData||{},o=t._props={},r=t.$options._propKeys=[],i=!t.$parent;i||wt(!1);var s=function(i){r.push(i);var s=qt(i,e,n,t);xt(o,i,s),i in t||Xn(t,"_props",i)};for(var a in e)s(a);wt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},p(e)||(e={});var n=Object.keys(e),o=t.$options.props,r=(t.$options.methods,n.length);while(r--){var i=n[r];0,o&&E(o,i)||G(i)||Xn(t,"_data",i)}Nt(e,!0)}function Qn(t,e){ht();try{return t.call(e,e)}catch(nr){return Kt(nr,e,"data()"),{}}finally{ft()}}var to={lazy:!0};function eo(t,e){var n=t._computedWatchers=Object.create(null),o=rt();for(var r in e){var i=e[r],s="function"===typeof i?i:i.get;0,o||(n[r]=new Yn(t,s||I,I,to)),r in t||no(t,r,i)}}function no(t,e,n){var o=!rt();"function"===typeof n?(Jn.get=o?oo(e):ro(n),Jn.set=I):(Jn.get=n.get?o&&!1!==n.cache?oo(e):ro(n.get):I,Jn.set=n.set||I),Object.defineProperty(t,e,Jn)}function oo(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function ro(t){return function(){return t.call(this,this)}}function io(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:x(e[n],t)}function so(t,e){for(var n in e){var o=e[n];if(Array.isArray(o))for(var r=0;r<o.length;r++)ao(t,n,o[r]);else ao(t,n,o)}}function ao(t,e,n,o){return p(n)&&(o=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,o)}function co(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Rt,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,n){var o=this;if(p(e))return ao(o,t,e,n);n=n||{},n.user=!0;var r=new Yn(o,t,e,n);if(n.immediate)try{e.call(o,r.value)}catch(i){Kt(i,o,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var uo=0;function po(t){t.prototype._init=function(t){var e=this;e._uid=uo++,e._isVue=!0,t&&t._isComponent?lo(e,t):e.$options=Gt(ho(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),yn(e),cn(e),Dn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&ke(e),Kn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lo(t,e){var n=t.$options=Object.create(t.constructor.options),o=e._parentVnode;n.parent=e.parent,n._parentVnode=o;var r=o.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function ho(t){var e=t.options;if(t.super){var n=ho(t.super),o=t.superOptions;if(n!==o){t.superOptions=n;var r=fo(t);r&&D(t.extendOptions,r),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function fo(t){var e,n=t.options,o=t.sealedOptions;for(var r in n)n[r]!==o[r]&&(e||(e={}),e[r]=n[r]);return e}function _o(t){this._init(t)}function go(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=R(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yo(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function mo(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,o=n.cid,r=t._Ctor||(t._Ctor={});if(r[o])return r[o];var i=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Gt(n.options,t),s["super"]=n,s.options.props&&vo(s),s.options.computed&&Eo(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,B.forEach(function(t){s[t]=n[t]}),i&&(s.options.components[i]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=D({},s.options),r[o]=s,s}}function vo(t){var e=t.options.props;for(var n in e)Xn(t.prototype,"_props",n)}function Eo(t){var e=t.options.computed;for(var n in e)no(t.prototype,n,e[n])}function bo(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function ko(t){return t&&(t.Ctor.options.name||t.tag)}function So(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function wo(t,e){var n=t.cache,o=t.keys,r=t._vnode;for(var i in n){var s=n[i];if(s){var a=ko(s.componentOptions);a&&!e(a)&&To(n,i,o,r)}}}function To(t,e,n,o){var r=t[e];!r||o&&r.tag===o.tag||r.componentInstance.$destroy(),t[e]=null,m(n,e)}po(_o),co(_o),kn(_o),On(_o),ln(_o);var Oo=[String,RegExp,Array],Ao={name:"keep-alive",abstract:!0,props:{include:Oo,exclude:Oo,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)To(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){wo(t,function(t){return So(e,t)})}),this.$watch("exclude",function(e){wo(t,function(t){return!So(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var o=ko(n),r=this,i=r.include,s=r.exclude;if(i&&(!o||!So(i,o))||s&&o&&So(s,o))return e;var a=this,c=a.cache,u=a.keys,p=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[p]?(e.componentInstance=c[p].componentInstance,m(u,p),u.push(p)):(c[p]=e,u.push(p),this.max&&u.length>parseInt(this.max)&&To(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},No={KeepAlive:Ao};function xo(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:D,mergeOptions:Gt,defineReactive:xt},t.set=Rt,t.delete=Dt,t.nextTick=ce,t.observable=function(t){return Nt(t),t},t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,D(t.options.components,No),go(t),yo(t),mo(t),bo(t)}xo(_o),Object.defineProperty(_o.prototype,"$isServer",{get:rt}),Object.defineProperty(_o.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(_o,"FunctionalRenderContext",{value:He}),_o.version="2.6.10";var Ro="[object Array]",Do="[object Object]";function Co(t,e){var n={};return Io(t,e),jo(t,e,"",n),n}function Io(t,e){if(t!==e){var n=Mo(t),o=Mo(e);if(n==Do&&o==Do){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var i=t[r];void 0===i?t[r]=null:Io(i,e[r])}}else n==Ro&&o==Ro&&t.length>=e.length&&e.forEach(function(e,n){Io(t[n],e)})}}function jo(t,e,n,o){if(t!==e){var r=Mo(t),i=Mo(e);if(r==Do)if(i!=Do||Object.keys(t).length<Object.keys(e).length)Lo(o,n,t);else{var s=function(r){var i=t[r],s=e[r],a=Mo(i),c=Mo(s);if(a!=Ro&&a!=Do)i!=e[r]&&Lo(o,(""==n?"":n+".")+r,i);else if(a==Ro)c!=Ro?Lo(o,(""==n?"":n+".")+r,i):i.length<s.length?Lo(o,(""==n?"":n+".")+r,i):i.forEach(function(t,e){jo(t,s[e],(""==n?"":n+".")+r+"["+e+"]",o)});else if(a==Do)if(c!=Do||Object.keys(i).length<Object.keys(s).length)Lo(o,(""==n?"":n+".")+r,i);else for(var u in i)jo(i[u],s[u],(""==n?"":n+".")+r+"."+u,o)};for(var a in t)s(a)}else r==Ro?i!=Ro?Lo(o,n,t):t.length<e.length?Lo(o,n,t):t.forEach(function(t,r){jo(t,e[r],n+"["+r+"]",o)}):Lo(o,n,t)}}function Lo(t,e,n){t[e]=n}function Mo(t){return Object.prototype.toString.call(t)}function Po(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var o=0;o<n.length;o++)n[o]()}}function Uo(t){return Cn.find(function(e){return t._watcher===e})}function Bo(t,e){if(!t.__next_tick_pending&&!Uo(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var o=t.$scope;console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Kt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function $o(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vo=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var o=this.$scope,r=Object.create(null);try{r=$o(this)}catch(a){console.error(a)}r.__webviewId__=o.data.__webviewId__;var i=Object.create(null);Object.keys(r).forEach(function(t){i[t]=o.data[t]});var s=Co(r,i);Object.keys(s).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+this._uid+"]差量更新",JSON.stringify(s)),this.__next_tick_pending=!0,o.setData(s,function(){n.__next_tick_pending=!1,Po(n)})):Po(this)}};function Fo(){}function Go(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Fo),t.$options.render||(t.$options.render=Fo),"mp-toutiao"!==t.mpHost&&Dn(t,"beforeMount");var o=function(){t._update(t._render(),n)};return new Yn(t,o,I,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,t}function Ho(t,e){return r(t)||r(e)?qo(t,zo(e)):""}function qo(t,e){return t?e?t+" "+e:t:e||""}function zo(t){return Array.isArray(t)?Yo(t):c(t)?Jo(t):"string"===typeof t?t:""}function Yo(t){for(var e,n="",o=0,i=t.length;o<i;o++)r(e=zo(t[o]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jo(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xo=b(function(t){var e={},n=/;(?![^(]*\))/g,o=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(o);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ko(t){return Array.isArray(t)?C(t):"string"===typeof t?Xo(t):t}var Wo=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zo(t,e){var n=e.split("."),o=n[0];return 0===o.indexOf("__$n")&&(o=parseInt(o.replace("__$n",""))),1===n.length?t[o]:Zo(t[o],n.slice(1).join("."))}function Qo(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:R(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Bo(this,t)},Wo.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=ke,t.prototype.__call_hook=function(t,e){var n=this;ht();var o,r=n.$options[t],i=t+" hook";if(r)for(var s=0,a=r.length;s<a;s++)o=Wt(r[s],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ft(),o},t.prototype.__set_model=function(t,e,n,o){Array.isArray(o)&&(-1!==o.indexOf("trim")&&(n=n.trim()),-1!==o.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return p(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zo(e||this,t)},t.prototype.__get_class=function(t,e){return Ho(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ko(t),o=e?D(e,n):n;return Object.keys(o).map(function(t){return O(t)+":"+o[t]}).join(";")},t.prototype.__map=function(t,e){var n,o,r,i,s;if(Array.isArray(t)){for(n=new Array(t.length),o=0,r=t.length;o<r;o++)n[o]=e(t[o],o);return n}if(c(t)){for(i=Object.keys(t),n=Object.create(null),o=0,r=i.length;o<r;o++)s=i[o],n[s]=e(t[s],s,o);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,o=n.created;tr.forEach(function(t){n[t]=o}),t.prototype.__lifecycle_hooks__=tr}_o.prototype.__patch__=Vo,_o.prototype.$mount=function(t,e){return Go(this,t,e)},er(_o),Qo(_o),e["default"]=_o}.call(this,n("c8ba"))},"68d1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("4339"),r={chineseToPinYin:function(t){for(var e=t.length,n="",r=new RegExp("[a-zA-Z0-9]"),i=0;i<e;i++){var s=t.substr(i,1),a=this.arraySearch(s,o.pinyin);r.test(s)?n+=s:!1!==a&&(n+=a)}n=n.replace(/ /g,"-");while(n.indexOf("--")>0)n=n.replace("--","-");return n},arraySearch:function(t,e){for(var n in o.pinyin)if(-1!==o.pinyin[n].indexOf(t))return this.ucfirst(n);return!1},ucfirst:function(t){if(t.length>0){var e=t.substr(0,1).toUpperCase(),n=t.substr(1,t.length);return e+n}}};e.default=r},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=we,e.createPage=Se,e.default=void 0;var o=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||a(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done);o=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){r=!0,i=c}finally{try{o||null==a["return"]||a["return"]()}finally{if(r)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return f(t)||h(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function v(t,e){return _.call(t,e)}function E(){}function b(t){var e=Object.create(null);return function(n){var o=e[n];return o||(e[n]=t(n))}}var k=/-(\w)/g,S=b(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],T={},O={};function A(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?N(n):n}function N(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function x(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function R(t,e){Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&g(e[n])&&(t[n]=A(t[n],e[n]))})}function D(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&g(e[n])&&x(t[n],e[n])})}function C(t,e){"string"===typeof t&&m(e)?R(O[t]||(O[t]={}),e):m(t)&&R(T,t)}function I(t,e){"string"===typeof t?m(e)?D(O[t],e):delete O[t]:m(t)&&D(T,t)}function j(t){return function(e){return t(e)||e}}function L(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function M(t,e){for(var n=!1,o=0;o<t.length;o++){var r=t[o];if(n)n=Promise.then(j(r));else{var i=r(e);if(L(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var o=e[n];e[n]=function(e){M(t[n],e).then(function(t){return g(o)&&o(t)||t})}}}),e}function U(t,e){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,p(T.returnValue));var o=O[t];return o&&Array.isArray(o.returnValue)&&n.push.apply(n,p(o.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function B(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var n=O[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function $(t,e,n){for(var o=arguments.length,r=new Array(o>3?o-3:0),i=3;i<o;i++)r[i-3]=arguments[i];var s=B(t);if(s&&Object.keys(s).length){if(Array.isArray(s.invoke)){var a=M(s.invoke,n);return a.then(function(t){return e.apply(void 0,[P(s,t)].concat(r))})}return e.apply(void 0,[P(s,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var V={returnValue:function(t){return L(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,G=/^create|Manager$/,H=/^on/;function q(t){return G.test(t)}function z(t){return F.test(t)}function Y(t){return H.test(t)}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function X(t){return!(q(t)||z(t)||Y(t))}function K(t,e){return X(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return g(n.success)||g(n.fail)||g(n.complete)?U(t,$.apply(void 0,[t,e,n].concat(r))):U(t,J(new Promise(function(o,i){$.apply(void 0,[t,e,Object.assign({},n,{success:o,fail:i})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var W=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,o=t.windowWidth;tt=o,et=n,Q="ios"===e}function ot(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+W),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:V},it=Object.freeze({upx2px:ot,interceptors:rt,addInterceptor:C,removeInterceptor:I}),st={},at=[],ct=[],ut=["success","fail","cancel","complete"];function pt(t,e,n){return function(o){return e(ht(t,o,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var i=!0===r?e:{};for(var s in g(n)&&(n=n(e,i)||{}),e)if(v(n,s)){var a=n[s];g(a)&&(a=a(e[s],e,i)),a?y(a)?i[a]=e[s]:m(a)&&(i[a.name?a.name:s]=a.value):console.warn("app-plus ".concat(t,"暂不支持").concat(s))}else-1!==ut.indexOf(s)?i[s]=pt(t,e[s],o):r||(i[s]=e[s]);return i}return g(e)&&(e=pt(t,e,o)),e}function ht(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(st.returnValue)&&(e=st.returnValue(t,e)),lt(t,e,n,{},o)}function ft(t,e){if(v(st,t)){var n=st[t];return n?function(e,o){var r=n;g(n)&&(r=n(e)),e=lt(t,e,r.args,r.returnValue);var i=[e];"undefined"!==typeof o&&i.push(o);var s=wx[r.name||t].apply(wx,i);return z(t)?ht(t,s,r.returnValue,q(t)):s}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),_t=["subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,o=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(r),g(o)&&o(r)}}_t.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new o.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function vt(){return mt(yt(),"$on",Array.prototype.slice.call(arguments))}function Et(){return mt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return mt(yt(),"$once",Array.prototype.slice.call(arguments))}function kt(){return mt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:vt,$off:Et,$once:bt,$emit:kt});function wt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,o=plus.webview.getWebviewById(t.__uniapp_mask_id);o=o.parent()||o;var r=t.show,i=t.hide,s=t.close,a=function(){o.setStyle({mask:n})},c=function(){o.setStyle({mask:"none"})};t.show=function(){a();for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return s.apply(t,o)}}}function Tt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&wt(e),e}function Ot(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var At=Object.freeze({requireNativePlugin:Ot,getSubNVueById:Tt}),Nt=Page,xt=Component,Rt=/:/g,Dt=b(function(t){return S(t.replace(Rt,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return e.apply(t,[Dt(n)].concat(r))}}}function It(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),Nt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),xt(t)};var jt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Lt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function Mt(t,e){if(!e)return!0;if(o.default.options&&Array.isArray(o.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Mt(t,e)}):void 0}function Pt(t,e,n){e.forEach(function(e){Mt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ut(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Bt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function $t(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Vt(t,e){var n=t.data||{},o=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return m(n)||(n={}),Object.keys(o).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=o[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Gt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],o=t["extends"],r=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var s=[];return Array.isArray(n)&&n.forEach(function(t){s.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(o)&&o.props&&s.push(e({properties:zt(o.props,!0)})),Array.isArray(r)&&r.forEach(function(t){m(t)&&t.props&&s.push(e({properties:zt(t.props,!0)}))}),s}function qt(t,e,n,o){return Array.isArray(e)&&1===e.length?e[0]:e}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Gt(t)}}):m(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(m(o)){var r=o["default"];g(r)&&(r=r()),o.type=qt(e,o.type),n[e]={type:-1!==Ft.indexOf(o.type)?o.type:null,value:r,observer:Gt(e)}}else{var i=qt(e,o);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Gt(e)}}}),n}function Yt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=E,t.preventDefault=E,t.target=t.target||{},v(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var o=e[0],r=e[2];if(o||"undefined"!==typeof r){var i=e[1],s=e[3],a=o?t.__get_value(o,n):n;Number.isInteger(a)?n=r:i?Array.isArray(a)?n=a.find(function(e){return t.__get_value(i,e)===r}):m(a)?n=Object.keys(a).find(function(e){return t.__get_value(i,a[e])===r}):console.error("v-for 暂不支持循环数据：",a):n=a[r],s&&(n=t.__get_value(s,n))}}),n}function Xt(t,e,n){var o={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?o["$"+r]=n:0===e.indexOf("$event.")?o["$"+r]=t.__get_value(e.replace("$event.",""),n):o["$"+r]=t.__get_value(e):o["$"+r]=t:o["$"+r]=Jt(t,e)}),o}function Kt(t){for(var e={},n=1;n<t.length;n++){var o=t[n];e[o[0]]=o[1]}return e}function Wt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,s=!1;if(r&&(s=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return s?[e]:e.detail.__args__||e.detail;var a=Xt(t,o,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||r?r&&!s?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Kt(t)):"string"===typeof t&&v(a,t)?c.push(a[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Yt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var o=n.eventOpts||n["event-opts"];if(!o)return console.warn("事件信息不存在");var r=t.type,i=[];return o.forEach(function(n){var o=n[0],s=n[1],a=o.charAt(0)===Qt;o=a?o.slice(1):o;var c=o.charAt(0)===Zt;o=c?o.slice(1):o,s&&te(r,o)&&s.forEach(function(n){var o=n[0];if(o){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var s=r[o];if(!g(s))throw new Error(" _vm.".concat(o," is not a function"));if(c){if(s.once)return;s.once=!0}i.push(s.apply(r,Wt(e.$vm,t,n[1],n[2],a,o)))}})}),"input"===r&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function oe(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(o.default.prototype.$store=t.$options.store),o.default.prototype.mpHost="app-plus",o.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Lt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Pt(i,ne),i}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,o=n.find(function(t){return t.$scope._$vueId===e});if(o)return o;for(var r=n.length-1;r>=0;r--)if(o=ie(n[r],e),o)return o}function se(t){return Behavior(t)}function ae(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var o=e.selectAllComponents(".vue-ref-in-for");return o.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function pe(t){var e,n=t.detail||t.value,o=n.vuePid,r=n.vueOptions;o&&(e=ie(this.$vm,o)),e||(e=this.$vm),r.parent=e}function le(t){return oe(t,{mocks:re,initRefs:ue})}var he=["onUniNViewMessage"];function fe(t){var e=le(t);return Pt(e,he),e}function de(t){return App(fe(t)),t}function _e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,s=Ut(o.default,t),a=i(s,2),c=a[0],u=a[1],p={options:{multipleSlots:!0,addGlobalClass:!0},data:Vt(u,o.default.prototype),behaviors:Ht(u,se),properties:zt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};$t(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Bt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:pe,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,c]}function ge(t){return _e(t,{isPage:ae,initRelation:ce})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function ve(t,e){e.isPage,e.initRelation;var n=ye(t);return Pt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function Ee(t){return ve(t,{isPage:ae,initRelation:ce})}me.push.apply(me,jt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function ke(t){var e=Ee(t);return Pt(e.methods,be),e}function Se(t){return Component(ke(t))}function we(t){return Component(ye(t))}at.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var Te={};Object.keys(it).forEach(function(t){Te[t]=it[t]}),Object.keys(St).forEach(function(t){Te[t]=St[t]}),Object.keys(At).forEach(function(t){Te[t]=K(t,At[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(st,t))&&(Te[t]=K(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=we;var Oe=Te,Ae=Oe;e.default=Ae}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function o(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var l=e.version,h="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,_=300,g=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function v(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,m)}}return e}var E=function(t){var e=Object.keys(t),n=e.sort(),o={},r="";for(var i in n)o[n[i]]=t[n[i]],r+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},k=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},w=function(){var e="";return"wx"!==S()&&"qq"!==S()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===S()?plus.runtime.version:""},O=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},A=function(e){var n=S(),o="";return e||("wx"===n&&(o=t.getLaunchOptionsSync().scene),o)},N="First__Visit__Time",x="Last__Visit__Time",R=function(){var e=t.getStorageSync(N),n=0;return e?n=e:(n=k(),t.setStorageSync(N,n),t.removeStorageSync(x)),n},D=function(){var e=t.getStorageSync(x),n=0;return n=e||"",t.setStorageSync(x,k()),n},C="__page__residence__time",I=0,j=0,L=function(){return I=k(),"n"===S()&&t.setStorageSync(C,k()),I},M=function(){return j=k(),"n"===S()&&(I=t.getStorageSync(C)),j-I},P="Total__Visit__Count",U=function(){var e=t.getStorageSync(P),n=1;return e&&(n=e,n++),t.setStorageSync(P,n),n},B=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},$=0,V=0,F=function(){var t=(new Date).getTime();return $=t,V=0,t},G=function(){var t=(new Date).getTime();return V=t,t},H=function(t){var e=0;if(0!==$&&(e=V-$),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>_;return{residenceTime:e,overtime:n}}if("page"===t){var o=e>d;return{residenceTime:e,overtime:o}}return{residenceTime:e}},q=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(t){var e=getCurrentPages(),n=e[e.length-1],o=n.$vm,r=t._query,i=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===S()?o.$mp&&o.$mp.page.is+i:o.$scope&&o.$scope.route+i||o.$mp&&o.$mp.page.route+i},Y=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=n("b327").default,K=n("b729").default||n("b729"),W=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:v(),ut:S(),mpn:w(),ak:K.appid,usv:l,v:T(),ch:O(),cn:"",pn:"",ct:"",t:k(),tt:"",p:"android"===W.platform?"a":"i",brand:W.brand||"",md:W.model,sv:W.system.replace(/(Android|iOS)\s/,""),mpsdk:W.SDKVersion||"",mpv:W.version||"",lang:W.language,pr:W.pixelRatio,ww:W.windowWidth,wh:W.windowHeight,sw:W.screenWidth,sh:W.screenHeight}}return p(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){G();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,G();var n=H();F();var o=z(this);this._sendHideRequest({urlref:o,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=z(this),e=q();if(this._navigationBarTitle.config=X&&X.pages[e]&&X.pages[e].titleNView&&X.pages[e].titleNView.titleText||X&&X.pages[e]&&X.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);G(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){G();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=k(),this.statData.sc=A(t.scene),this.statData.fvts=R(),this.statData.lvts=D(),this.statData.tvc=U(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,o=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,o=t.value,r=void 0===o?"":o,i=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:k(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var o=this,r=k(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var s=this._reportingRequestData;if("n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")||{}),s[e.lt]||(s[e.lt]=[]),s[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",s),!(M()<g)||n){var a=this._reportingRequestData;"n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")),L();var c=[],u=[],p=[],h=function(t){var e=a[t];e.forEach(function(e){var n=b(e);0===t?c.push(n):3===t?p.push(n):u.push(n)})};for(var f in a)h(f);c.push.apply(c,u.concat(p));var d={usv:l,t:r,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){o._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=E(B(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return c(this,n),e=o(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return s(n,e),p(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),p(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,L(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,Y(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,Y(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function ot(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}ot()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,o=Object.prototype,r=o.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,p=e.regeneratorRuntime;if(p)u&&(t.exports=p);else{p=e.regeneratorRuntime=u?t.exports:{},p.wrap=E;var l="suspendedStart",h="suspendedYield",f="executing",d="completed",_={},g={};g[s]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(C([])));m&&m!==o&&r.call(m,s)&&(g=m);var v=w.prototype=k.prototype=Object.create(g);S.prototype=v.constructor=w,w.constructor=S,w[c]=S.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},p.awrap=function(t){return{__await:t}},T(O.prototype),O.prototype[a]=function(){return this},p.AsyncIterator=O,p.async=function(t,e,n,o){var r=new O(E(t,e,n,o));return p.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},T(v),v[c]="Generator",v[s]=function(){return this},v.toString=function(){return"[object Generator]"},p.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},p.values=C,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,r){return a.type="throw",a.arg=t,e.next=o,r&&(e.method="next",e.arg=n),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;R(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:C(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=n),_}}}function E(t,e,n,o){var r=e&&e.prototype instanceof k?e:k,i=Object.create(r.prototype),s=new D(o||[]);return i._invoke=A(t,n,s),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(o){return{type:"throw",arg:o}}}function k(){}function S(){}function w(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){function e(n,o,i,s){var a=b(t[n],t,o);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,s)})}s(a.arg)}var n;function o(t,o){function r(){return new Promise(function(n,r){e(t,o,n,r)})}return n=n?n.then(r,r):r()}this._invoke=o}function A(t,e,n){var o=l;return function(r,i){if(o===f)throw new Error("Generator is already running");if(o===d){if("throw"===r)throw i;return I()}n.method=r,n.arg=i;while(1){var s=n.delegate;if(s){var a=N(s,n);if(a){if(a===_)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===l)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var c=b(t,e,n);if("normal"===c.type){if(o=n.done?d:h,c.arg===_)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=d,n.method="throw",n.arg=c.arg)}}}function N(t,e){var o=t.iterator[e.method];if(o===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,N(t,e),"throw"===e.method))return _;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var r=b(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,_;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){while(++o<t.length)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b7a":function(t,e,n){"use strict";(function(e){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(18)},function(t,e,n){(function(o){function r(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return t;var o="color: "+this.color;t=[t[0],o,"color: inherit"].concat(Array.prototype.slice.call(t,1));var r=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(r++,"%c"===t&&(i=r))}),t.splice(i,0,o),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof o&&"env"in o)return o.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=n(34),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=r,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,n(38))},function(t,e,n){t.exports=n(25)},function(t,e,n){function o(t){if(t)return r(t)}function r(t){for(var e in o.prototype)t[e]=o.prototype[e];return t}t.exports=o,o.prototype.on=o.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},o.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},o.prototype.off=o.prototype.removeListener=o.prototype.removeAllListeners=o.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o,r=0;r<n.length;r++)if(o=n[r],o===e||o.fn===e){n.splice(r,1);break}return this},o.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var o=0,r=n.length;o<r;++o)n[o].apply(this,e)}return this},o.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},o.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){var n={SDK_VERSION:"2.6.0",WSS_ADDRESS:"wss://ws.im.jiguang.cn",UPLOAD_FILE:"https://sdk.im.jiguang.cn/resource",ALLOW_MSG_TYPE:["text","image","file","location","custom"],LOGIN_OUT_EVENT:[1,2],FROM_PLATFORM:"x",ACK_TIMEOUT:5e3,RESP_TIMEOUT:3e4,RETRY_TIMES:5,SYNC_INTERVAL:15e4,RECEIPT_REPORT_INTERVAL:2e3,RECEIPT_REPORT_MAX_SIZE:50,EVENT_KEY:"eve-k-",CONVERSATION_KEY:"conversations-",SYNC_TYPE_OPEN:1,SYNC_TYPE_CLOSE:0,FRIEND_INVITE:1,FRIEND_INVITED:2,PLAT_CHANNEL:"w",EVENTS:{ACK:"ack",INIT:"c_init",LOGIN:"login",REGISTER:"register",GET_USER_INFO:"get_across_user_info",GET_ACROSS_USER_INFO:"get_across_user_info",S_SINGLE_TEXT:"s_across_single_text",S_SINGLE_TEXT_:"s_single_text",MSG_SYNC:"msg_sync",MSG_RECV:"msg_recv",MSG_RECV_V2:"msg_recv_v2",SEND_GROUP_MSG:"send_group_msg",CREATE_GROUP:"create_group",GET_GROUPS_LIST:"get_groups_list",GET_GROUP_INFO:"get_group_info",ADD_GROUP_MEMBER:"add_group_member",ADD_ACROSS_GROUP_MEMBER:"add_across_group_member",DEL_GROUP_MEMBER:"del_group_member",DEL_ACROSS_GROUP_MEMBER:"del_across_group_member",GET_GROUP_MEMBERS:"get_group_members",UPDATE_GROUP_INFO:"update_group_info",EXIT_GROUP:"exit_group",EVENT_NOTIFICATION:"event_notification",GET_CONVERSATIONS:"get_conversations",GET_UPLOAD_TOKEN:"get_upload_token",NO_DISTURB:"no_disturb",ADD_MSG_NO_DISTURB_SINGLE:"add_msg_no_disturb_single",DELETE_MSG_NO_DISTURB_SINGLE:"delete_msg_no_disturb_single",ADD_MSG_NO_DISTURB_GROUP:"add_msg_no_disturb_group",DELETE_MSG_NO_DISTURB_GROUP:"delete_msg_no_disturb_group",ADD_MSG_NO_DISTURB_GLOBAL:"add_msg_no_disturb_global",DELETE_MSG_NO_DISTURB_GLOBAL:"delete_msg_no_disturb_global",DISCONNECT:"disconnect",GET_BLACK_LIST:"get_black_list",ADD_BLACK_LIST:"add_black_list",DEL_BLACK_LIST:"del_black_list",UPDATE_SELF_INFO:"update_user_inf",UPDATE_SELF_PWD:"update_user_pwd",ADD_MSG_SHIELD_GROUP:"add_msg_shield_group",DEL_MSG_SHIELD_GROUP:"del_msg_shield_group",ADD_FRIEND:"add_friend",DEL_FRIEND:"del_friend",UPDATE_FRIEND_MEMO:"update_friend_memo",GET_FRIEND_LIST:"get_friend_list",SYNC_CHECK:"sync_check",SYNC_CONVERSATION:"sync_conversation",SYNC_CONVERSATION_ACK:"sync_conversation_ack",MSG_RETRACT:"msg_retract",GET_RESOURCE:"get_resource",LIST_SHIELD_GROUP:"list_shield_group",SYNC_EVENT_CHECK:"sync_event_check",SYNC_EVENT:"sync_event",SYNC_EVENT_ACK:"sync_event_ack",RECEIPT_REPORT:"receipt_report",SYNC_RECEIPT_ACK:"sync_receipt_ack",SYNC_RECEIPT:"sync_receipt",RECEIPT_CHANGE:"receipt_change",UNREAD_GROUP_COUNT:"unread_group_count",UNREAD_SINGLE_COUNT:"unread_single_count",MSG_UNREAD_LIST:"msg_unread_list",TRANS_MSG_SINGLE:"trans_msg_single",TRANS_MSG_GROUP:"trans_msg_group",TRANS_MSG_PLATFORM:"trans_msg_platform",TRANS_MSG_REC:"trans_msg_rec",ADMIN_ADD_GROUP_MEMBER:"admin_add_group_member",APPLY_JOIN_GROUP:"apply_join_group",ROOM_LIST:"room_list",ROOM_LIST_SELF:"room_list_self",JOIN_ROOM:"join_room",EXIT_ROOM:"exit_room",ROOM_INFO:"room_info",SEND_ROOM_MSG:"send_room_msg",ROOM_MSG_SYNC:"room_msg_sync",GROUP_MEM_SILENCE:"group_mem_silence",ROOM_MSG_SYNC_HIS:"room_msg_sync_his",DISSOLVE_GROUP:"dissolve_group",ADD_GROUP_KEEPER:"add_group_keeper",DEL_GROUP_KEEPER:"del_group_keeper",CHANGE_GROUP_ADMIN:"change_group_admin",PUBLIC_GROUP_LIST:"public_group_list"}};t.exports=n},function(t,e,n){function o(){}function r(t){var n="",o=!1;return n+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(n+=t.attachments,n+="-"),t.nsp&&"/"!=t.nsp&&(o=!0,n+=t.nsp),null!=t.id&&(o&&(n+=",",o=!1),n+=t.id),null!=t.data&&(o&&(n+=","),n+=JSON.stringify(t.data)),l("encoded %j as %s",t,n),n}function i(t,e){function n(t){var n=f.deconstructPacket(t),o=r(n.packet),i=n.buffers;i.unshift(o),e(i)}f.removeBlobs(t,n)}function s(){this.reconstructor=null}function a(t){var n={},o=0;if(n.type=Number(t.charAt(0)),null==e.types[n.type])return p();if(e.BINARY_EVENT==n.type||e.BINARY_ACK==n.type){for(var r="";"-"!=t.charAt(++o)&&(r+=t.charAt(o),o!=t.length););if(r!=Number(r)||"-"!=t.charAt(o))throw new Error("Illegal attachments");n.attachments=Number(r)}if("/"==t.charAt(o+1))for(n.nsp="";++o;){var i=t.charAt(o);if(","==i)break;if(n.nsp+=i,o==t.length)break}else n.nsp="/";var s=t.charAt(o+1);if(""!==s&&Number(s)==s){for(n.id="";++o;){i=t.charAt(o);if(null==i||Number(i)!=i){--o;break}if(n.id+=t.charAt(o),o==t.length)break}n.id=Number(n.id)}return t.charAt(++o)&&(n=c(n,t.substr(o))),l("decoded %s as %j",t,n),n}function c(t,e){try{t.data=JSON.parse(e)}catch(t){return p()}return t}function u(t){this.reconPack=t,this.buffers=[]}function p(t){return{type:e.ERROR,data:"parser error"}}var l=n(1)("socket.io-parser"),h=n(40),f=n(39),d=n(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=o,e.Decoder=s,o.prototype.encode=function(t,n){if(l("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,n);else{var o=r(t);n([o])}},h(s.prototype),s.prototype.add=function(t){var n;if("string"==typeof t)n=a(t),e.BINARY_EVENT==n.type||e.BINARY_ACK==n.type?(this.reconstructor=new u(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!d(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=f.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function o(t,e){return this instanceof o?(t&&"object"==typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||2e3),this.reconnectionDelayMax(e.reconnectionDelayMax||2e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new h({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?3e3:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new a.Encoder,this.decoder=new a.Decoder,this.autoConnect=!1!==e.autoConnect,void(this.autoConnect&&this.open())):new o(t,e)}var r=n(27),i=n(8),s=n(3),a=n(5),c=n(7),u=n(11),p=n(1)("socket.io-client:manager"),l=n(12),h=n(32),f=Object.prototype.hasOwnProperty;t.exports=o,o.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)f.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},o.prototype.updateSocketIds=function(){for(var t in this.nsps)f.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},s(o.prototype),o.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},o.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},o.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},o.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},o.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},o.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},o.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},o.prototype.open=o.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=r(this.uri,this.opts);var n=this.engine,o=this;this.readyState="opening",this.skipReconnect=!1;var i=c(n,"open",function(){o.onopen(),t&&t()}),s=c(n,"error",function(e){if(p("connect_error"),o.cleanup(),o.readyState="closed",o.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else o.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var u=setTimeout(function(){p("connect attempt timed out after %d",a),i.destroy(),n.close(),n.emit("error","timeout"),o.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(s),this},o.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(c(t,"data",u(this,"ondata"))),this.subs.push(c(t,"ping",u(this,"onping"))),this.subs.push(c(t,"pong",u(this,"onpong"))),this.subs.push(c(t,"error",u(this,"onerror"))),this.subs.push(c(t,"close",u(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",u(this,"ondecoded")))},o.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},o.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},o.prototype.ondata=function(t){this.decoder.add(t)},o.prototype.ondecoded=function(t){this.emit("packet",t)},o.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},o.prototype.socket=function(t,e){function n(){~l(r.connecting,o)||r.connecting.push(o)}var o=this.nsps[t];if(!o){o=new i(this,t,e),this.nsps[t]=o;var r=this;o.on("connecting",n),o.on("connect",function(){o.id=r.engine.id}),this.autoConnect&&n()}return o},o.prototype.destroy=function(t){var e=l(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},o.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var o=0;o<n.length;o++)e.engine.write(n[o],t.options);e.encoding=!1,e.processPacketQueue()}))},o.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},o.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},o.prototype.close=o.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},o.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},o.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},o.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e){function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e,n){function o(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var r=n(5),i=n(3),s=n(41),a=n(7),c=n(11),u=n(1)("socket.io-client:socket"),p=n(35);t.exports=o;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},h=i.prototype.emit;i(o.prototype),o.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},o.prototype.open=o.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},o.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},o.prototype.emit=function(t){if(l.hasOwnProperty(t))return h.apply(this,arguments),this;var e=s(arguments),n=r.EVENT,o={type:n,data:e,options:{}};return o.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),o.id=this.ids++),this.connected?this.packet(o):this.sendBuffer.push(o),delete this.flags,this},o.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},o.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:r.CONNECT,query:this.query}):this.packet({type:r.CONNECT}))},o.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},o.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case r.CONNECT:this.onconnect();break;case r.EVENT:this.onevent(t);break;case r.BINARY_EVENT:this.onevent(t);break;case r.ACK:this.onack(t);break;case r.BINARY_ACK:this.onack(t);break;case r.DISCONNECT:this.ondisconnect();break;case r.ERROR:this.emit("error",t.data)}},o.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?h.apply(this,e):this.receiveBuffer.push(e)},o.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var o=s(arguments);u("sending ack %j",o);var i=p(o)?r.BINARY_ACK:r.ACK;e.packet({type:i,id:t,data:o})}}},o.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},o.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},o.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)h.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},o.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},o.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},o.prototype.close=o.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:r.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},o.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e,n){function o(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var r=n(2),i=n(3);t.exports=o,i(o.prototype),o.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},o.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},o.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},o.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},o.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},o.prototype.onData=function(t){var e=r.decodePacket(t,this.socket.binaryType);this.onPacket(e)},o.prototype.onPacket=function(t){this.emit("packet",t)},o.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){function o(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,r.call(this,t)}var r=n(9),i=n(2),s=n(14),a=n(33),c=n(42),u=n(1)("engine.io-client:websocket");t.exports=o,a(o,r),o.prototype.name="wx",o.prototype.supportsBinary=!0,o.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e={agent:this.agent,perMessageDeflate:this.perMessageDeflate};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(e.headers=this.extraHeaders),this.localAddress&&(e.localAddress=this.localAddress),this.isOk=!1,this.ws=wx,this.ws.connectSocket({url:t}),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},o.prototype.addEventListeners=function(){var t=this;this.ws.onSocketOpen(function(){t.onOpen(),t.isOk=!0}),this.ws.onSocketClose(function(){t.onClose(),t.isOk=!1}),this.ws.onSocketMessage(function(e){t.onData(e.data)}),this.ws.onSocketError(function(e){t.onError("websocket error",e)})},o.prototype.write=function(t){function e(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,r=0,s=o;r<s;r++)!function(t){i.encodePacket(t,n.supportsBinary,function(t){try{n.ws.sendSocketMessage({data:t})}catch(t){u("websocket closed before onclose event")}--o||e()})}(t[r])},o.prototype.onClose=function(){r.prototype.onClose.call(this)},o.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.closeSocket()},o.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||(t.b64=1),t=s.encode(t),t.length&&(t="?"+t);var o=-1!==this.hostname.indexOf(":");return e+"://"+(o?"["+this.hostname+"]":this.hostname)+n+this.path+t},o.prototype.check=function(){return!this.isOk}},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var o=n.call(arguments,2);return function(){return e.apply(t,o.concat(n.call(arguments)))}}},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var o=0;o<t.length;++o)if(t[o]===e)return o;return-1}},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),o=0,r=n.length;o<r;o++){var i=n[o].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,r=t.indexOf("["),i=t.indexOf("]");-1!=r&&-1!=i&&(t=t.substring(0,r)+t.substring(r,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[o[c]]=s[c]||"";return-1!=r&&-1!=i&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){(function(e){function n(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=n}).call(e,function(){return this}())},function(t,n,o){var r=o(3),i=o(28),s=o(4),a=function(t){this.init(t)};a.prototype.init=function(t){this.opts=t,this.dataCache={},this.memStore={},this.sync_key=0,this.sync_type=0,void 0!=this.client&&this.client.close(),this.client=i(this.opts.address,{transports:["websocket","polling"]});var e=this,n=r.prototype.emit,o=this.client.onevent;this.client.onevent=function(t){var r=t.data||[];o.call(e.client,t),n.apply(e.client,["*"].concat(r))},this.client.on("*",function(t,n){e.onReceive(t,n)})},a.prototype.onReceive=function(t,n){if(this.opts.debug&&console.log(e("---<- event:%s, data:%s",t,JSON.stringify(n)," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:1")),t!==s.EVENTS.EVENT_NOTIFICATION&&t!==s.EVENTS.MSG_SYNC&&t!==s.EVENTS.SYNC_CONVERSATION&&t!==s.EVENTS.SYNC_EVENT&&t!==s.EVENTS.SYNC_RECEIPT&&t!==s.EVENTS.RECEIPT_CHANGE&&t!==s.ROOM_MSG_SYNC&&t!==s.ROOM_MSG_SYNC_HIS){var o=this.dataCache[n.rid];delete n.rid,o&&(0===n.code&&t===s.EVENTS.GET_GROUP_MEMBERS?n.member_list.forEach(function(t){o.userInfoGet&&o.userInfoGet(t.uid,t.mtime),delete t.uid,delete t.mtime}):0===n.code&&t===s.EVENTS.GET_CONVERSATIONS?n.conversations.forEach(function(t){3===t.type&&(o.userInfoGet&&o.userInfoGet(t.key,t.utime),delete t.utime)}):0===n.code&&t===s.EVENTS.GET_FRIEND_LIST?n.friend_list.forEach(function(t){o.userInfoGet&&o.userInfoGet(t.uid,1e3*t.mtime),delete t.uid}):0===n.code&&t===s.EVENTS.GET_BLACK_LIST&&n.black_list.forEach(function(t){delete t.uid}),t===s.EVENTS.ACK?(o.ack&&o.ack({rid:n.rid,data:o.data}),o.cleanAckTimeout()):(o.cleanRespTimeout(),delete this.dataCache[o.rid],n.code&&0!==n.code?o.fail&&o.fail(n):t!=s.EVENTS.S_SINGLE_TEXT_&&t!=s.EVENTS.SEND_GROUP_MSG&&t!=s.EVENTS.SEND_ROOM_MSG?o.hook?o.hook(n,o.success):o.success&&o.success(n):(o.data.msg_id=n.msg_id,t===s.EVENTS.S_SINGLE_TEXT_&&(n.target_username=o.data.content.target_id,n.appkey=o.data.appkey),o.success&&o.success(n,o.data),o.innerCall&&o.innerCall(n.msg_id))))}},a.prototype.generateRid=function(){for(var t=Math.floor(-2147483646*Math.random()+2147483647);this.dataCache[t];)t=Math.floor(-2147483646*Math.random()+2147483647);return t},a.prototype.send=function(t,n){this.opts.debug&&console.log(e("---\x3e- event:%s, data:%s",t,JSON.stringify(n)," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:1")),this.client.emit(t,n)},t.exports=a},function(t,e,n){var o=n(19);t.exports=o},function(t,n,o){var r=o(31),i=o(17),s=o(4),a=o(21),c=o(23),u=o(22),p=o(20)(),l=o(24),h=function(t){var e=t||{};this.opts={address:e.address?e.address:s.WSS_ADDRESS,debug:!!e.debug},this.channel=new i(this.opts),this.syncTask=0,this.msgReceipTask=0};h.prototype.init=function(t){var e=this;return e.autoDiscon=!0,t.flag!==s.SYNC_TYPE_OPEN&&t.flag!==s.SYNC_TYPE_CLOSE||(e.channel.sync_type=t.flag),t.fromPlatForm=s.FROM_PLATFORM,new a(this.channel).setEvent(s.EVENTS.INIT).setData(t).send().addHook(function(n,o){e.current_appkey=t.appkey,o&&o(n)})},h.prototype.loginOut=function(){if(this.current_user){this.autoDiscon=!1,this.channel.client.close();var t=this.channel.dataCache;for(var e in t)t[e].cleanAckTimeout(),t[e].cleanRespTimeout();this.current_user=null,this.current_appkey=null,this.channel.init(this.channel.opts)}},h.prototype.login=function(t){this.__checkInit(),t.is_md5||(t.password=p(t.password)),t.version=s.SDK_VERSION;var e=this,n=new a(this.channel).setEvent(s.EVENTS.LOGIN).setData(t).addHook(function(n,o){e.current_user=t.username,l.StorageUtils.removeItems(e.current_user),e.channel.sync_key=0,e.channel.sync_event_key=0,e.channel.msg_receipt_key=0,e.channel.ses_key=s.SESSION_KEY+e.current_appkey+"-"+e.current_user,e.channel.conversations_key=s.CONVERSATION_KEY+e.current_appkey+"-"+e.current_user,e.channel.event_key=s.EVENT_KEY+e.current_appkey+"-"+e.current_user,e._syncCheckTask(),e._receiptReportTask(),e._initConversation(),e.lastMsgs={},e.channel.client.removeListener(s.EVENTS.LOGIN),e._addEventListen(),e.firstLogin=!1,o&&o(n)});return setTimeout(function(){n.send()},500),n},h.prototype._initConversation=function(){var t=this,e=l.StorageUtils.getItem(t.channel.conversations_key);null!==e&&""!==e||(e=JSON.stringify({}),l.StorageUtils.addItem(t.channel.conversations_key,e)),t.conversations=JSON.parse(e)},h.prototype._receiptReportTask=function(){var t=this;t.report=[],t.msgReceipTask=setInterval(function(){t._receiptReport()},s.RECEIPT_REPORT_INTERVAL)},h.prototype._syncCheckTask=function(){var t=this,e=l.StorageUtils.getItem(t.channel.event_key);null!=e&&(t.channel.sync_event_key=e),t._syncCheck({sync_key:t.channel.sync_key,sync_type:t.channel.sync_type,sync_event_key:t.channel.sync_event_key,msg_receipt_key:t.channel.msg_receipt_key}).onSuccess(function(e){e&&0===e.code&&(t.channel.sync_key=e.sync_key,t.channel.sync_type=e.sync_type,t.channel.sync_event_key=e.sync_event_key,t.channel.msg_receipt_key=e.msg_receipt_key,l.StorageUtils.addItem(t.channel.event_key,e.sync_event_key))}),t.syncTask=setInterval(function(){t._syncCheck({sync_key:t.channel.sync_key,sync_type:t.channel.sync_type,sync_event_key:t.channel.sync_event_key,msg_receipt_key:t.channel.msg_receipt_key}).onSuccess(function(e){e&&0===e.code&&(t.channel.sync_key=e.sync_key,t.channel.sync_type=e.sync_type,t.channel.sync_event_key=e.sync_event_key,t.channel.msg_receipt_key=e.msg_receipt_key,l.StorageUtils.addItem(t.channel.event_key,e.sync_event_key))})},s.SYNC_INTERVAL)},h.prototype._syncCheck=function(t){return new a(this.channel).setEvent(s.EVENTS.SYNC_CHECK).setData(t).send()},h.prototype.register=function(t){return this.__checkInit(),t.is_md5||(t.password=p(t.password)),new a(this.channel).setEvent(s.EVENTS.REGISTER).setData(t).send()},h.prototype.getUserInfo=function(t){return this.__checkLogin(),l.StringUtils.isBlack(t.appkey)&&(t.appkey=this.current_appkey),new a(this.channel).setEvent(s.EVENTS.GET_ACROSS_USER_INFO).setData(t).send()},h.prototype.updateSelfInfo=function(t){return this.__checkLogin(),l.StringUtils.isBlack(t.avatar)||delete t.avatar,new a(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO).setData(t).send()},h.prototype.updateSelfAvatar=function(t){this.__checkLogin();var e=new a(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO),n=this;return this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.avatar,type:"image"},function(t,n){return t?t.is_timeout?e.timeout&&e.timeout(t.data):e.fail&&e.fail(t.data):void e.setData({avatar:n.media_id}).send()}),e},h.prototype.updateSelfPwd=function(t){return this.__checkLogin(),t.is_md5||(t.old_pwd=p(t.old_pwd),t.new_pwd=p(t.new_pwd)),new a(this.channel).setEvent(s.EVENTS.UPDATE_SELF_PWD).setData(t).send()},h.prototype.getConversation=function(){var t=this;return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_CONVERSATIONS).setData({}).send().onUserInfoGet(function(e,n){t[e]=n}).addHook(function(e,n){e.conversations.forEach(function(e){var n;3===e.type?(t[e.key]=e.utime,delete e.utime,n=e.appkey+e.username):(n=e.key,e.gid=e.key),t.conversations[n]?(t.conversations[n].extras?e.extras=t.conversations[n].extras:e.extras={},e.unread_msg_count=t.conversations[n].unread_msg_count):(e.extras={},e.unread_msg_count=0,t.conversations[n]={},t.conversations[n].extras={},t.conversations[n].unread_msg_count=0,t.conversations[n].msg_time=[])}),l.StorageUtils.addItem(t.channel.conversations_key,JSON.stringify(t.conversations)),n&&n(e)})},h.prototype.resetUnreadCount=function(t){this.__checkLogin();var e,n=this;t.gid?e=String(t.gid):(t.appkey||(t.appkey=n.current_appkey),e=t.appkey+t.username),n.conversations[e]=void 0===n.conversations[e]?{}:n.conversations[e],t.gid?n._updateGroupUnreadCount({gid:t.gid}):n._updateSingleUnreadCount({appkey:t.appkey,username:t.username}),n.conversations[e].unread_msg_count=0,n.conversations[e].msg_time=[];var o=(new Date).getTime();n.lastMsgs[e]&&(o=n.lastMsgs[e].last_msg_time),n.conversations[e].recent_time=o,n.current_conversation=e,l.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations))},h.prototype.getUnreadMsgCnt=function(t){this.__checkLogin();var e,n=this;return t.gid?e=String(t.gid):(t.appkey||(t.appkey=n.current_appkey),e=t.appkey+t.username),n.conversations[e]||(n.conversations[e]={}),n.conversations[e]=void 0===n.conversations[e]?{}:n.conversations[e],n.conversations[e].unread_msg_count?n.conversations[e].unread_msg_count:0},h.prototype.msgRetract=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.MSG_RETRACT).setData(t).send()},h.prototype.sendSingleMsg=function(t){return this.__checkLogin(),this.__sendMsg({type:"single",target_id:t.target_username,target_name:t.target_nickname,content:t.content,extras:t.extras,msg_body:t.msg_body,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupMsg=function(t){return this.__checkLogin(),this.__sendMsg({type:"group",target_id:t.target_gid,target_name:t.target_gname,content:t.content,extras:t.extras,msg_body:t.msg_body,at_list:t.at_list,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendSinglePic=function(t){return this.__checkLogin(),this.__sendPic({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.image,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupPic=function(t){return this.__checkLogin(),this.__sendPic({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.image,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendSingleFile=function(t){return this.__sendVideoOrFile({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.file,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"file")},h.prototype.sendGroupFile=function(t){return this.__sendVideoOrFile({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.file,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"file")},h.prototype.sendSingleVedio=function(t){return this.__sendVideoOrFile({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.file,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"video")},h.prototype.sendGroupVedio=function(t){return this.__sendVideoOrFile({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.file,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"video")},h.prototype.sendSingleLocation=function(t){return this.__checkLogin(),this.__sendLocation({type:"single",target_id:t.target_username,target_name:t.target_nickname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupLocation=function(t){return this.__checkLogin(),this.__sendLocation({type:"group",target_id:t.target_gid,target_name:t.target_gname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendSingleCustom=function(t){return this.__checkLogin(),this.__sendCustom({type:"single",target_id:t.target_username,target_name:t.target_nickname,custom:t.custom,extras:t.extras,msg_body:t.msg_body,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupCustom=function(t){return this.__checkLogin(),this.__sendCustom({type:"group",target_id:t.target_gid,target_name:t.target_gname,custom:t.custom,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.createGroup=function(t){this.__checkLogin();var e=this,n=new a(this.channel).setEvent(s.EVENTS.CREATE_GROUP);return t.avatar?this.__uploadFile({appkey:e.current_appkey,username:e.current_user,file:t.avatar,type:"image"},function(e,o){return e?e.is_timeout?n.timeout&&n.timeout(e.data):n.fail&&n.fail(e.data):(delete t.avatar,t.media_id=o.media_id,void n.setData(t).send())}):n.setData(t).send(),n},h.prototype.exitGroup=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.EXIT_GROUP).setData(t).send()},h.prototype.getGroups=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_GROUPS_LIST).setData({}).send().addHook(function(t,e){t.group_list.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.getGroupInfo=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_GROUP_INFO).setData(t).send().addHook(function(t,e){t.group_info.group_type=t.group_info.flag,delete t.group_info.flag,e&&e(t)})},h.prototype.updateGroupInfo=function(t){this.__checkLogin();var e=this,n=new a(this.channel).setEvent(s.EVENTS.UPDATE_GROUP_INFO);return t.avatar?this.__uploadFile({appkey:e.current_appkey,username:e.current_user,file:t.avatar,type:"image"},function(e,o){return e?e.is_timeout?n.timeout&&n.timeout(e.data):n.fail&&n.fail(e.data):(delete t.avatar,t.media_id=o.media_id,void n.setData(t).send())}):n.setData(t).send(),n},h.prototype.getGroupMembers=function(t){var e=this;return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_GROUP_MEMBERS).setData(t).send().onUserInfoGet(function(t,n){e[t]=n})},h.prototype.addGroupMembers=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_ACROSS_GROUP_MEMBER).setData(t).send()},h.prototype.delGroupMembers=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_ACROSS_GROUP_MEMBER).setData(t).send()},h.prototype.getNoDisturb=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.NO_DISTURB).setData({version:0}).send().addHook(function(t,e){t.no_disturb.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.addSingleNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_SINGLE).setData(t).send()},h.prototype.delSingleNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_SINGLE).setData(t).send()},h.prototype.addGroupNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GROUP).setData(t).send()},h.prototype.delGroupNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GROUP).setData(t).send()},h.prototype.addGlobalNoDisturb=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GLOBAL).setData({version:0}).send()},h.prototype.delGlobalNoDisturb=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GLOBAL).setData({version:0}).send()},h.prototype.getBlacks=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_BLACK_LIST).setData({version:0}).send()},h.prototype.addSingleBlacks=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_BLACK_LIST).setData(t).send()},h.prototype.delSingleBlacks=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_BLACK_LIST).setData(t).send()},h.prototype.getFriendList=function(){var t=this;return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_FRIEND_LIST).setData({}).send().onUserInfoGet(function(e,n){t[e]=n})},h.prototype.addFriend=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send()},h.prototype.acceptFriend=function(t){return this.__checkLogin(),t.why="yes",t.from_type=s.FRIEND_INVITED,new a(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send()},h.prototype.declineFriend=function(t){return this.__checkLogin(),t.why&&""!=t.why.trim()||(t.why="no"),t.from_type=s.FRIEND_INVITED,new a(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send()},h.prototype.delFriend=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_FRIEND).setData(t).send()},h.prototype.updateFriendMemo=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.UPDATE_FRIEND_MEMO).setData(t).send()},h.prototype.addGroupShield=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_MSG_SHIELD_GROUP).setData(t).send()},h.prototype.delGroupShield=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_MSG_SHIELD_GROUP).setData(t).send()},h.prototype.groupShieldList=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.LIST_SHIELD_GROUP).setData(t).send().addHook(function(t,e){t.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.getResource=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_RESOURCE).setData(t).send()},h.prototype._updateGroupUnreadCount=function(t){this.__checkLogin(),t.type=4,new a(this.channel).setEvent(s.EVENTS.UNREAD_GROUP_COUNT).setData(t).send()},h.prototype._updateSingleUnreadCount=function(t){this.__checkLogin(),t.type=3,new a(this.channel).setEvent(s.EVENTS.UNREAD_SINGLE_COUNT).setData(t).send()},h.prototype.msgUnreadList=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.MSG_UNREAD_LIST).setData(t).send()},h.prototype.addGroupReceiptReport=function(t){this.__checkLogin();var n=this;if(t.msg_ids instanceof Array&&0!==t.msg_ids.length){t.key=t.gid,t.type=4;var o=new c(t);return n.report.push(o),setTimeout(function(){n._checkReportSize()>=s.RECEIPT_REPORT_MAX_SIZE&&n._receiptReport()},50),o}console.error(e("msg_ids is not Array type or msg_ids size=0"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:2"))},h.prototype.addSingleReceiptReport=function(t){this.__checkLogin();var n=this;if(t.msg_ids instanceof Array&&0!==t.msg_ids.length){t.appkey||(t.appkey=n.current_appkey),t.type=3,t.key=t.appkey+t.username;var o=new c(t);return n.report.push(o),setTimeout(function(){n._checkReportSize()>=s.RECEIPT_REPORT_MAX_SIZE&&n._receiptReport()},50),o}console.error(e("msg_ids is not Array type or msg_ids size=0"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:2"))},h.prototype._checkReportSize=function(){var t=this,e=0;return t.report.forEach(function(t){e+=t.args.msg_ids.length}),e},h.prototype.transSingleMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.TRANS_MSG_SINGLE).setData(t).send()},h.prototype.transGroupMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.TRANS_MSG_GROUP).setData(t).send()},h.prototype.transPlatMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.TRANS_MSG_PLATFORM).setData(t).send()},h.prototype.updateConversation=function(t){this.__checkLogin();var e,n=this;t.appkey||(t.appkey=n.current_appkey),t.gid?e=t.gid:t.username&&(e=t.appkey+t.username),e&&t.extras&&(n.conversations[e]||(n.conversations[e]={}),n.conversations[e].extras=t.extras),l.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations))},h.prototype.addGroupMemberResp=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADMIN_ADD_GROUP_MEMBER).setData(t).send()},h.prototype.joinGroup=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.APPLY_JOIN_GROUP).setData(t).send()},h.prototype.getAppkeyChatrooms=function(t){return this.__checkLogin(),!t&&(t={}),new a(this.channel).setEvent(s.EVENTS.ROOM_LIST).setData(t).send().addHook(function(t,e){t.result.rooms.forEach(function(t){l.Cache.rooms[t.id]=t}),e&&e(t)})},h.prototype.getSelfChatrooms=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ROOM_LIST_SELF).setData({}).send().addHook(function(t,e){t.chat_rooms.forEach(function(t){l.Cache.rooms[t.id]=t}),e&&e(t)})},h.prototype.getChatroomInfo=function(t){this.__checkLogin();var e=new a(this.channel);return l.Cache.rooms[t.id]?setTimeout(function(){var n={code:0,message:"success"};n.info=l.Cache.rooms[t.id],e.cleanRespTimeout(),e.success&&e.success(n)},100):e.setEvent(s.EVENTS.ROOM_INFO).setData(t).send().addHook(function(t,e){l.Cache.rooms[t.info.id]=t.info,e&&e(t)}),e},h.prototype.enterChatroom=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.JOIN_ROOM).setData(t).send()},h.prototype.exitChatroom=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.EXIT_ROOM).setData(t).send()},h.prototype.sendChatroomMsg=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===l.Cache.rooms[t.target_rid]?"":l.Cache.rooms[t.target_rid].name),this.__sendMsg({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,content:t.content,extras:t.extras,msg_body:t.msg_body})},h.prototype.sendChatroomPic=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===l.Cache.rooms[t.target_rid]?"":l.Cache.rooms[t.target_rid].name),this.__sendPic({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.image,extras:t.extras,msg_body:t.msg_body})},h.prototype.sendChatroomFile=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===l.Cache.rooms[t.target_rid]?"":l.Cache.rooms[t.target_rid].name),this.__sendVideoOrFile({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.file,extras:t.extras,msg_body:t.msg_body},"file")},h.prototype.sendChatroomVideo=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===l.Cache.rooms[t.target_rid]?"":l.Cache.rooms[t.target_rid].name),this.__sendVideoOrFile({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.file,msg_body:t.msg_body,extras:t.extras},"video")},h.prototype.sendChatroomCustom=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===l.Cache.rooms[t.target_rid]?"":l.Cache.rooms[t.target_rid].name),this.__sendCustom({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,custom:t.custom,extras:t.extras,msg_body:t.msg_body})},h.prototype.sendChatroomLocation=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===l.Cache.rooms[t.target_rid]?"":l.Cache.rooms[t.target_rid].name),this.__sendLocation({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,extras:t.extras,msg_body:t.msg_body})},h.prototype.addGroupMemSilence=function(t){return this.__checkLogin(),t.keep_silence=!0,new a(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send()},h.prototype.delGroupMemSilence=function(t){return this.__checkLogin(),t.keep_silence=!1,new a(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send()},h.prototype.dissolveGroup=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DISSOLVE_GROUP).setData(t).send()},h.prototype.addGroupKeeper=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_GROUP_KEEPER).setData(t).send()},h.prototype.delGroupKeeper=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_GROUP_KEEPER).setData(t).send()},h.prototype.changeGroupAdmin=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.CHANGE_GROUP_ADMIN).setData(t).send()},h.prototype.getAppkeyPublicGroups=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.PUBLIC_GROUP_LIST).setData(t).send().addHook(function(t,e){t.result.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.isInit=function(){return!!this.current_appkey},h.prototype.isLogin=function(){return!!this.current_user},h.prototype.isConnect=function(){return!!this.channel.client.connected},h.prototype._addEventListen=function(){var t=this;t.channel.client.on(s.EVENTS.MSG_SYNC,function(e){t._onMsgReceive(e)}),t.channel.client.on(s.EVENTS.EVENT_NOTIFICATION,function(e){t._onEventNotification(e)}),t.channel.client.on(s.EVENTS.SYNC_CONVERSATION,function(e){t._onSyncConversation(e)}),t.channel.client.on(s.EVENTS.SYNC_EVENT,function(e){t._onSyncEvent(e)}),t.channel.client.on(s.EVENTS.SYNC_RECEIPT,function(e){t._onSyncMsgReceipt(e)}),t.channel.client.on(s.EVENTS.RECEIPT_CHANGE,function(e){t._onMsgReceiptChange(e)}),t.channel.client.on(s.EVENTS.TRANS_MSG_REC,function(e){t._onTransMsgRec(e)}),t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC,function(e){t._onRoomMsg(e)}),t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC_HIS,function(e){t._onSyncRoomMsg(e)}),t.channel.client.on("disconnect",function(){t._onDisconnect()})},h.prototype.onRoomMsg=function(t){this._onRoomMsgFn=t},h.prototype._onRoomMsg=function(t){this._onRoomMsgFn&&this._onRoomMsgFn(t)},h.prototype._onSyncRoomMsg=function(t){var e=this;t.messages.forEach(function(n){l.Cache.rooms[n.room_id]||e.getChatroomInfo({id:t.room_id}),n.msgs&&n.msgs.forEach(function(t){e._onRoomMsgFn&&e._onRoomMsgFn(t)})})},h.prototype.onMsgReceive=function(t){this._onMsgReceiveFn=t},h.prototype._onMsgReceive=function(t){var e=[],n=this;Array.prototype.push.apply(e,t.messages.map(function(t){return{msg_id:t.msg_id,msg_type:t.msg_type,from_uid:t.from_uid,from_gid:t.from_gid}})),t.messages.forEach(function(t){if(t.content.sui_mtime&&n[t.from_uid]&&t.content.sui_mtime>new Date(n[t.from_uid]).getTime()/1e3){n[t.from_uid]=1e3*t.content.sui_mtime;var e={};e.from_username=t.content.from_id,e.from_appkey=t.content.from_appkey,e.mtime=t.content.sui_mtime,delete t.content.sui_mtime,n._updateInfoEventFun&&n._updateInfoEventFun(e)}var o;3===t.msg_type?(t.key=t.from_uid,t.from_username=t.content.from_id,t.from_appkey=t.content.from_appkey,o=t.from_appkey+t.from_username):(t.key=t.from_gid,o=String(t.from_gid)),0===t.msg_level?t.msg_level="normal":1===t.msg_level&&(t.msg_level="across");var r=!1;if(t.from_appkey===n.current_appkey&&t.from_username===n.current_user){r=!0;var i=void 0===t.content.target_appkey||""===t.content.target_appkey?t.content.from_appkey:t.content.target_appkey;o=i+t.content.target_id}n.lastMsgs[o]={last_msg_time:t.ctime_ms},n.conversations[o]||(n.conversations[o]={},n.conversations[o].extras={},n.conversations[o].unread_msg_count=0,n.conversations[o].msg_time=[]),n.current_conversation===o||r?(n.conversations[o].recent_time=t.ctime_ms,n.conversations[o].unread_msg_count=0,n.conversations[o].msg_time=[]):(n.conversations[o].unread_msg_count=n.conversations[o].unread_msg_count+1,n.conversations[o].msg_time.push(t.ctime_ms)),new a(n.channel).setEvent(s.EVENTS.MSG_RECV_V2).setData({msg_id:t.msg_id,msg_type:t.msg_type,from_uid:t.from_uid,from_gid:t.from_gid}).send()}),l.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations)),this._onMsgReceiveFn&&this._onMsgReceiveFn(t)},h.prototype.onEventNotification=function(t){this._onEventNotificationFn=t},h.prototype._onEventNotification=function(t){var e=this;if(200!==t.event_type){var n=e.__eventDateFilter(t);if(56===t.event_type&&10==t.extra?(n.by_self=!1,delete n.extra):56===t.event_type&&59==t.extra&&(n.by_self=!0,delete n.extra),1===t.event_type){var o={event_id:t.event_id,event_type:t.event_type,from_uid:t.from_uid,gid:t.gid};new a(e.channel).setEvent(s.EVENTS.EVENT_NOTIFICATION).setData(o).send()}e._onEventNotificationFn&&e._onEventNotificationFn(n),-1!=s.LOGIN_OUT_EVENT.indexOf(t.event_type)&&e.loginOut()}else 3===t.description.type?e._dealMutlReadEvent(t.description.type,t.ctime_ms,t.description.appkey,t.description.username):e._dealMutlReadEvent(t.description.type,t.ctime_ms,t.description.gid)},h.prototype.onSyncConversation=function(t){this._onSyncConversationFn=t},h.prototype._onSyncConversation=function(t){var e=this;e.channel.sync_key=t.sync_key,t.messages&&(t.messages.forEach(function(t){var n,o=0;n=3===t.msg_type?t.from_appkey+t.from_username:String(t.from_gid);var r=t.msgs[t.msgs.length-1].ctime_ms;if(e.current_conversation===n)e.conversations[n]=void 0===e.conversations[n]?{}:e.conversations[n],e.conversations[n].unread_msg_count=o,e.conversations[n].recent_time=r,e.conversations[n].msg_time=[];else if(e.conversations[n]&&e.conversations[n].recent_time){var i=e.conversations[n].recent_time;t.msgs.forEach(function(t){t.ctime_ms<=i||t.content.from_appkey===e.current_appkey&&t.content.from_id===e.current_user?(o=0,e.conversations[n].msg_time=[]):(o++,e.conversations[n].msg_time.push(t.ctime_ms))}),e.channel.sync_type===s.SYNC_TYPE_OPEN?e.conversations[n].unread_msg_count=o:e.conversations[n].unread_msg_count+=o}else o=t.unsync_count,e.conversations[n]=void 0===e.conversations[n]?{}:e.conversations[n],e.conversations[n].unread_msg_count=o,t.msgs.length-1-o<0?e.conversations[n].recent_time=-1:e.conversations[n].recent_time=t.msgs[t.msgs.length-1-o].ctime_ms,e.conversations[n].msg_time=[];e.lastMsgs[n]={last_msg_time:r},delete t.unsync_count,t.unread_msg_count=o}),l.StorageUtils.addItem(e.channel.conversations_key,JSON.stringify(e.conversations)),e._onSyncConversationFn&&t.messages.length>0&&e._onSyncConversationFn(t.messages));var n={sync_key:e.channel.sync_key};new a(e.channel).setEvent(s.EVENTS.SYNC_CONVERSATION_ACK).setData(n).send()},h.prototype.onSyncEvent=function(t){this._onSyncEventFn=t},h.prototype._onSyncEvent=function(t){var e=this;e.channel.sync_event_key=t.sync_key,l.StorageUtils.addItem(e.channel.event_key,t.sync_key);var n={sync_key:e.channel.sync_event_key};new a(e.channel).setEvent(s.EVENTS.SYNC_EVENT_ACK).setData(n).send(),setTimeout(function(){if(e._onSyncEventFn&&t.events&&t.events.length>0){var n=[];t.events.forEach(function(o){if(200===o.event_type)3===o.description.type?e._dealMutlReadEvent(o.description.type,o.ctime_ms,o.description.appkey,o.description.username):e._dealMutlReadEvent(o.description.type,o.ctime_ms,o.description.gid);else{var r=e.__eventDateFilter(o);56===t.event_type&&10==t.extra?(delete r.extra,r.by_self=!1):56===t.event_type&&59==t.extra&&(delete r.extra,r.by_self=!0),n.push(r)}}),e._onSyncEventFn(n)}},1700)},h.prototype.onSyncMsgReceipt=function(t){this._onSyncMsgReceiptFn=t},h.prototype._onSyncMsgReceipt=function(t){var e=this;if(e.channel.msg_receipt_key=t.sync_key,e._onSyncMsgReceiptFn&&t.receipts&&t.receipts.length>0){var n={},o=[];t.receipts.forEach(function(t){var e=t.gid;if(3===t.type&&(e=t.appkey+t.username),n[e]){var r=Number(n[e]);Array.prototype.push.apply(o[r].receipt_msgs,t.receipt_msgs)}else t.receipt_msgs.length>0&&(n[e]=String(o.length),o.push(t))}),setTimeout(function(){e._onSyncMsgReceiptFn&&o.length>0&&e._onSyncMsgReceiptFn(o)},1500)}var r={sync_key:e.channel.msg_receipt_key};new a(e.channel).setEvent(s.EVENTS.SYNC_RECEIPT_ACK).setData(r).send()},h.prototype.onMsgReceiptChange=function(t){this._onMsgReceiptChangeFn=t},h.prototype._onMsgReceiptChange=function(t){this._onMsgReceiptChangeFn&&this._onMsgReceiptChangeFn(t)},h.prototype.onUserInfUpdate=function(t){this._updateInfoEventFun=t},h.prototype.onMutiUnreadMsgUpdate=function(t){this._conversationUpdateFun=t},h.prototype.onTransMsgRec=function(t){this._onTransMsgRecFn=t},h.prototype._onTransMsgRec=function(t){this._onTransMsgRecFn&&this._onTransMsgRecFn(t)},h.prototype.onDisconnect=function(t){this._onDisconnectFn=t},h.prototype._onDisconnect=function(){var t=this;clearTimeout(t.syncTask),clearTimeout(t.msgReceipTask),t.autoDiscon&&(t.current_appkey=null,t.current_user=null,t._onDisconnectFn&&t._onDisconnectFn()),this.channel.init(this.channel.opts)},h.prototype._dealMutlReadEvent=function(t,e,n,o){var r,i=this,s={};if(s.type=t,3===t?(r=n+o,s.username=o,s.appkey=n):(r=String(n),s.gid=n),i.conversations[r]=void 0===i.conversations[r]?{msg_time:[],unread_msg_count:0}:i.conversations[r],i.conversations[r].recent_time=e,i.current_conversation===r)i.conversations[r].unread_msg_count=0,i.conversations[r].msg_time=[];else{var a=i.conversations[r].unread_msg_count,c=i.conversations[r].msg_time,u=[],p=0;c.forEach(function(t){t>e&&(p++,u.push(t))}),i.conversations[r].msg_time=u,p<a&&(i.conversations[r].unread_msg_count=p,s.unreadCount=p,l.StorageUtils.addItem(i.channel.conversations_key,JSON.stringify(i.conversations)),i._conversationUpdateFun&&i._conversationUpdateFun(s))}},h.prototype._receiptReport=function(){var t=this;if(t.report.length>0){var e={},n=[];t.report.forEach(function(t){if(e[t.args.key]){var o=Number(e[t.args.key]);Array.prototype.push.apply(n[o].result.msg_ids,t.args.msg_ids),n[o].msg_reports.push(t)}else e[t.args.key]=String(n.length),n.push({result:t.args,msg_reports:[t]})}),t.report=[];for(var o=0;o<n.length;o++)n[o].result.msg_ids=l.ArrayUtils.delRepeatItem(n[o].result.msg_ids),delete n[o].result.key,t._msgReceipt(n[o])}},h.prototype._msgReceipt=function(t){new a(this.channel).setEvent(s.EVENTS.RECEIPT_REPORT).setData({sessions:[t.result]}).send().onSuccess(function(e){t.msg_reports.forEach(function(t){t.success&&t.success(e,t.args.msg_ids)})}).onFail(function(e){t.msg_reports.forEach(function(t){t.fail&&t.fail(e,t.args.msg_ids)})}).onAck(function(e){t.msg_reports.forEach(function(t){t.ack&&t.ack(e,t.args.msg_ids)})}).onTimeout(function(e){t.msg_reports.forEach(function(t){t.timeout&&t.timeout(e,t.args.msg_ids)})})},h.prototype.__eventDateFilter=function(t){var e={};return e.event_id=t.event_id,e.event_type=t.event_type,e.from_username=t.from_username,e.gid=t.gid,e.to_usernames=t.to_usernames,e.ctime=t.ctime,e.extra=t.extra,e.return_code=t.return_code,e.from_appkey=t.from_appkey,e.msg_ids=t.msg_ids,e.from_gid=t.from_gid,e.msgid_list=t.msgid_list,e.to_groups=t.to_groups,e.new_owner=t.new_owner,e.group_name=t.group_name,e.ctime_ms=t.ctime_ms,e.media_id=t.media_id,e.from_nickname=t.from_nickname,e.from_eventid=t.from_eventid,100===t.event_type&&7===t.extra?e.description=JSON.parse(t.description):e.description=t.description,55===t.event_type&&0===t.from_gid?e.type=0:55===t.event_type&&0!=t.from_gid&&(e.type=1),e},h.prototype.__checkConnect=function(){if(!this.channel.client.connected)throw new Error("wss socket not connect")},h.prototype.__checkInit=function(){if(!this.current_appkey)throw new Error("必须执行init操作后能执行此动作")},h.prototype.__checkLogin=function(){if(!this.current_user)throw new Error("必须执行login操作后能执行此动作")},h.prototype.__getUploadToken=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_UPLOAD_TOKEN).setData({}).send()},h.prototype.__uploadFile0=function(t,n){wx.uploadFile({url:s.UPLOAD_FILE+"?type="+t.type,filePath:t.file,name:"file",header:{"X-App-Key":t.appkey,Authorization:"Basic "+r.btoa(t.username+":"+t.token),"jm-channel":s.PLAT_CHANNEL},success:function(t){if(200==t.statusCode)n(null,JSON.parse(t.data));else try{var e=JSON.parse(t.data);n(898061===e.error.code?{code:880210,message:"file size exceed limit"}:e)}catch(t){n({code:880210,message:"file size exceed the limit"})}},fail:function(t){console.error(e(JSON.parse(t)," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:2"))}})},h.prototype.__uploadFile=function(t,e){var n=this;n.__getUploadToken().onSuccess(function(o){n.__uploadFile0({type:t.type,file:t.file,appkey:t.appkey,username:t.username,token:o.uptoken},e)}).onFail(function(t){e({data:t})}).onTimeout(function(t){e({is_timeout:!0,data:t})})},h.prototype.__sendMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG).setData(new u(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setText(t.content?t.content:t.msg_body.text,t.content?t.extras:t.msg_body.extras).setAtList(t.at_list).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},h.prototype.__sendPic=function(t){this.__checkLogin();var e=new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG),n=this,o=new u(n.current_user,n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.file,type:"image"},function(n,r){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):void e.setData(o.setImage(r,t.extras).build()).send()}):e.setData(o.setImage(t.msg_body,t.msg_body.extras).build()).send(),e},h.prototype.__sendVideoOrFile=function(t,e){this.__checkLogin();var n=new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG),o=this,r=new u(o.current_user,o.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:o.current_appkey,username:o.current_user,file:t.file,type:"file"},function(o,i){return o?o.is_timeout?n.timeout&&n.timeout(o.data):n.fail&&n.fail(o.data):("video"===e&&(!t.extras&&(t.extras={}),t.extras.video=i.media_id.slice(i.media_id.lastIndexOf(".")+1)),void n.setData(r.setFile(i,t.extras).build()).send())}):n.setData(r.setFile(t.msg_body,t.msg_body.extras).build()).send(),n},h.prototype.__sendVoice=function(t){this.__checkLogin();var e=new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:s.EVENTS.SEND_GROUP_MSG),n=this,o=new u(n.current_user,n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.file,type:"voice"},function(n,r){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):void e.setData(o.setVoice(r,t.extras).build()).send()}):e.setData(o.setVoice(t.msg_body,t.msg_body.extras).build()).send(),e},h.prototype.__sendLocation=function(t){return this.__checkLogin(),new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG).setData(new u(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setLocation(t.latitude?t:t.msg_body,t.latitude?t.extras:t.msg_body.extras).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},h.prototype.__sendCustom=function(t){return this.__checkLogin(),new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG).setData(new u(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setCustom(t.custom?t.custom:t.msg_body,t.custom?t.extras:t.msg_body.extras).setCustom(t.custom).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},t.exports=h},function(t,e){t.exports=function(){function t(t,e){var n=(65535&t)+(65535&e),o=(t>>16)+(e>>16)+(n>>16);return o<<16|65535&n}function e(t,e){return t<<e|t>>>32-e}function n(n,o,r,i,s,a){return t(e(t(t(o,n),t(i,a)),s),r)}function o(t,e,o,r,i,s,a){return n(e&o|~e&r,t,e,i,s,a)}function r(t,e,o,r,i,s,a){return n(e&r|o&~r,t,e,i,s,a)}function i(t,e,o,r,i,s,a){return n(e^o^r,t,e,i,s,a)}function s(t,e,o,r,i,s,a){return n(o^(e|~r),t,e,i,s,a)}function a(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;var a,c,u,p,l,h=1732584193,f=-271733879,d=-1732584194,_=271733878;for(a=0;a<e.length;a+=16)c=h,u=f,p=d,l=_,h=o(h,f,d,_,e[a],7,-680876936),_=o(_,h,f,d,e[a+1],12,-389564586),d=o(d,_,h,f,e[a+2],17,606105819),f=o(f,d,_,h,e[a+3],22,-1044525330),h=o(h,f,d,_,e[a+4],7,-176418897),_=o(_,h,f,d,e[a+5],12,1200080426),d=o(d,_,h,f,e[a+6],17,-1473231341),f=o(f,d,_,h,e[a+7],22,-45705983),h=o(h,f,d,_,e[a+8],7,1770035416),_=o(_,h,f,d,e[a+9],12,-1958414417),d=o(d,_,h,f,e[a+10],17,-42063),f=o(f,d,_,h,e[a+11],22,-1990404162),h=o(h,f,d,_,e[a+12],7,1804603682),_=o(_,h,f,d,e[a+13],12,-40341101),d=o(d,_,h,f,e[a+14],17,-1502002290),f=o(f,d,_,h,e[a+15],22,1236535329),h=r(h,f,d,_,e[a+1],5,-165796510),_=r(_,h,f,d,e[a+6],9,-1069501632),d=r(d,_,h,f,e[a+11],14,643717713),f=r(f,d,_,h,e[a],20,-373897302),h=r(h,f,d,_,e[a+5],5,-701558691),_=r(_,h,f,d,e[a+10],9,38016083),d=r(d,_,h,f,e[a+15],14,-660478335),f=r(f,d,_,h,e[a+4],20,-405537848),h=r(h,f,d,_,e[a+9],5,568446438),_=r(_,h,f,d,e[a+14],9,-1019803690),d=r(d,_,h,f,e[a+3],14,-187363961),f=r(f,d,_,h,e[a+8],20,1163531501),h=r(h,f,d,_,e[a+13],5,-1444681467),_=r(_,h,f,d,e[a+2],9,-51403784),d=r(d,_,h,f,e[a+7],14,1735328473),f=r(f,d,_,h,e[a+12],20,-1926607734),h=i(h,f,d,_,e[a+5],4,-378558),_=i(_,h,f,d,e[a+8],11,-2022574463),d=i(d,_,h,f,e[a+11],16,1839030562),f=i(f,d,_,h,e[a+14],23,-35309556),h=i(h,f,d,_,e[a+1],4,-1530992060),_=i(_,h,f,d,e[a+4],11,1272893353),d=i(d,_,h,f,e[a+7],16,-155497632),f=i(f,d,_,h,e[a+10],23,-1094730640),h=i(h,f,d,_,e[a+13],4,681279174),_=i(_,h,f,d,e[a],11,-358537222),d=i(d,_,h,f,e[a+3],16,-722521979),f=i(f,d,_,h,e[a+6],23,76029189),h=i(h,f,d,_,e[a+9],4,-640364487),_=i(_,h,f,d,e[a+12],11,-421815835),d=i(d,_,h,f,e[a+15],16,530742520),f=i(f,d,_,h,e[a+2],23,-995338651),h=s(h,f,d,_,e[a],6,-198630844),_=s(_,h,f,d,e[a+7],10,1126891415),d=s(d,_,h,f,e[a+14],15,-1416354905),f=s(f,d,_,h,e[a+5],21,-57434055),h=s(h,f,d,_,e[a+12],6,1700485571),_=s(_,h,f,d,e[a+3],10,-1894986606),d=s(d,_,h,f,e[a+10],15,-1051523),f=s(f,d,_,h,e[a+1],21,-2054922799),h=s(h,f,d,_,e[a+8],6,1873313359),_=s(_,h,f,d,e[a+15],10,-30611744),d=s(d,_,h,f,e[a+6],15,-1560198380),f=s(f,d,_,h,e[a+13],21,1309151649),h=s(h,f,d,_,e[a+4],6,-145523070),_=s(_,h,f,d,e[a+11],10,-1120210379),d=s(d,_,h,f,e[a+2],15,718787259),f=s(f,d,_,h,e[a+9],21,-343485551),h=t(h,c),f=t(f,u),d=t(d,p),_=t(_,l);return[h,f,d,_]}function c(t){var e,n="";for(e=0;e<32*t.length;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function u(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;for(e=0;e<8*t.length;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function p(t){return c(a(u(t),8*t.length))}function l(t,e){var n,o,r=u(t),i=[],s=[];for(i[15]=s[15]=void 0,r.length>16&&(r=a(r,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^r[n],s[n]=1549556828^r[n];return o=a(i.concat(u(e)),512+8*e.length),c(a(s.concat(o),640))}function h(t){var e,n,o="0123456789abcdef",r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+=o.charAt(e>>>4&15)+o.charAt(15&e);return r}function f(t){return unescape(encodeURIComponent(t))}function d(t){return p(f(t))}function _(t){return h(d(t))}function g(t,e){return l(f(t),f(e))}function y(t,e){return h(g(t,e))}function m(t,e,n){return e?n?g(e,t):y(e,t):n?d(t):_(t)}return m}},function(t,n,o){var r=o(4),i=function(t){this.channel=t,this.rid=this.channel.generateRid(),this.times=1};i.prototype.setEvent=function(t){return this.event=t,this},i.prototype.setData=function(t){return this.data=t,this},i.prototype.onSuccess=function(t){return"function"==typeof t&&(this.success=t),this},i.prototype.onFail=function(t){return"function"==typeof t&&(this.fail=t),this},i.prototype.onTimeout=function(t){if("function"==typeof t){this.timeout=t;var e=this;this.respTimeoutTaskId=setTimeout(function(){e.respTimeoutTask()},r.RESP_TIMEOUT)}return this},i.prototype.onAck=function(t){return"function"==typeof t&&(this.ack=t),this},i.prototype.onInnerCall=function(t){return"function"==typeof t&&(this.innerCall=t),this},i.prototype.onUserInfoGet=function(t){return"function"==typeof t&&(this.userInfoGet=t),this},i.prototype.addHook=function(t){return"function"==typeof t&&(this.hook=t),this},i.prototype.ackTimeoutTask=function(){if(this.times<r.RETRY_TIMES){this.channel.send(this.event,this._data),this.times++;var t=this;this.ackTimeoutTaskId=setTimeout(function(){t.ackTimeoutTask()},r.ACK_TIMEOUT)}else this.timeout&&this.timeout({rid:this.rid,data:this.data,response_timeout:!1}),delete this.channel.dataCache[this.rid];return this},i.prototype.respTimeoutTask=function(){if(this.times<r.RETRY_TIMES){this.channel.send(this.event,this._data),this.times++;var t=this;this.respTimeoutTaskId=setTimeout(function(){t.respTimeoutTask()},r.RESP_TIMEOUT)}else this.timeout&&this.timeout({rid:this.rid,data:this.data,response_timeout:!0}),delete this.channel.dataCache[this.rid];return this},i.prototype.cleanAckTimeout=function(){return this.ackTimeoutTaskId&&clearTimeout(this.ackTimeoutTaskId),this},i.prototype.cleanRespTimeout=function(){return this.respTimeoutTaskId&&clearTimeout(this.respTimeoutTaskId),this},i.prototype.send=function(){if(this.event&&this.data){var t=this;return this.ackTimeoutTaskId=setTimeout(function(){t.ackTimeoutTask()},r.ACK_TIMEOUT),this._data=JSON.parse(JSON.stringify(this.data)),this._data.rid=this.rid,this.channel.send(this.event,this._data),this.channel.dataCache[this.rid]=this,this}console.error(e("发send fail，event and data can not empty"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))},t.exports=i},function(t,n){var o=function(t,e){this.current_user=t,this.current_appkey=e,this.version=1,this.from_platform="web"};o.prototype.setNeedReceipt=function(t){return this.need_receipt=t,this},o.prototype.setNoOffline=function(t){return this.no_offline=t,this},o.prototype.setNoNotification=function(t){return this.no_notification=t,this},o.prototype.setType=function(t){return this.type=t,this},o.prototype.setAtList=function(t){return this.at_list=t,this},o.prototype.setAppkey=function(t){return t&&(this.appkey=t),this},o.prototype.setTarget=function(t,e){return this.target_id=t.toString(),this.target_name=e,this},o.prototype.setFromName=function(t){return this.from_name=t,this},o.prototype.setText=function(t,e){return this.msg_type="text",this.msg_body={text:t},e&&(this.msg_body.extras=e),this},o.prototype.setImage=function(t,e){return this.msg_type="image",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,width:t.width,height:t.height,format:t.format,fsize:t.fsize},e&&(this.msg_body.extras=e),this},o.prototype.setFile=function(t,e){return this.msg_type="file",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,hash:t.hash,fsize:t.fsize,fname:t.fname},e&&(this.msg_body.extras=e),this},o.prototype.setVoice=function(t,e){return this.msg_type="voice",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,hash:t.hash,fsize:t.fsize,duration:t.duration,format:t.format},e&&(this.msg_body.extras=e),this},o.prototype.setCustomNotification=function(t){return t&&(this.custom_notification=t),this},o.prototype.setLocation=function(t,e){return this.msg_type="location",this.msg_body={latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label},e&&(this.msg_body.extras=e),this},o.prototype.setCustom=function(t){return this.msg_type="custom",this.msg_body=t,this},o.prototype.build=function(){var t=this.current_user;if("single"!=this.type&&"group"!=this.type&&"across_single"!=this.type&&"chatroom"!=this.type)return console.log(e("type must be single or group or chatroom"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.target_id)return console.error(e("target_id must not null"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if("text"==this.msg_type){if(!this.msg_body.text&&this.at_list&&"single"!=this.type)this.msg_body.text=" ";else if(!this.msg_body.text&&!this.at_list)return console.error(e("未设置文本消息内容"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))}else if("custom"==this.msg_type){if(!this.msg_body)return console.error(e("custom对象不能为空"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))}else if("image"==this.msg_type){if(!this.msg_body.media_id)return console.error(e("未设置image消息media_id字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.media_crc32)return console.error(e("未设置image消息media_crc32字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.width)return console.error(e("未设置image消息width字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.height)return console.error(e("未设置image消息height字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))}else if("file"==this.msg_type){if(!this.msg_body.media_id)return console.error(e("未设置file消息media_id字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.media_crc32)return console.error(e("未设置file消息media_crc32字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.fsize)return console.error(e("未设置file消息fsize字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.fname)return console.error(e("未设置file消息fname字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))}else if("location"==this.msg_type){if(!this.msg_body.latitude)return console.error(e("未设置location消息latitude字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.longitude)return console.error(e("未设置location消息longitude字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.scale)return console.error(e("未设置location消息scale字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.label)return console.error(e("未设置location消息label字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))}else{if("voice"!=this.msg_type)return console.error(e("请设置合法的msg_type"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.media_id)return console.error(e("未设置voice消息media_id字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));if(!this.msg_body.media_crc32)return console.error(e("未设置voice消息media_crc32字段"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"))}var n={version:this.version,target_type:this.type,from_platform:this.from_platform,target_id:this.target_id,target_name:this.target_name,from_id:t,from_name:this.from_name,create_time:(new Date).getTime(),msg_type:this.msg_type,msg_body:this.msg_body};this.appkey&&(n.target_appkey=this.appkey,n.from_appkey=this.current_appkey);var o={content:n};if(o.no_offline=this.no_offline,o.no_notification=this.no_notification,o.custom_notification=this.custom_notification,o.target_name=n.target_name,o.need_receipt=this.need_receipt,"single"==n.target_type)o.target_name=n.target_id;else if(o.target_gid=n.target_id,this.at_list&&this.at_list instanceof Array)o.users=this.at_list;else if(this.at_list&&!(this.at_list instanceof Array))return console.error(e("参数值不合法，at_list必须为数组类型"," at js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js:3"));return this.appkey?o.appkey=this.appkey:o.appkey=this.current_appkey,o},t.exports=o},function(t,e){var n=function(t){this.args=t};n.prototype.onSuccess=function(t){return"function"==typeof t&&(this.success=t),this},n.prototype.onFail=function(t){return"function"==typeof t&&(this.fail=t),this},n.prototype.onTimeout=function(t){return"function"==typeof t&&(this.timeout=t),this},n.prototype.onAck=function(t){return"function"==typeof t&&(this.ack=t),this},t.exports=n},function(t,e){var n={isBlack:function(t){return!(t&&"string"==typeof t&&t.length>0)}},o={addItem:function(t,e){wx.setStorage({key:t.toString(),data:e})},removeItems:function(t){wx.getStorageInfo({success:function(e){var n=e.keys,o=[];n.forEach(function(e){try{var n=wx.getStorageSync(e);n===t&&o.push(e)}catch(t){}}),o.forEach(function(t){wx.removeStorage({key:t,success:function(t){}})})}})},getItem:function(t){return wx.getStorageSync(t)}},r={delRepeatItem:function(t){var e=[];return t.forEach(function(t){-1===e.indexOf(t)&&null!=t&&e.push(t)}),e}},i={rooms:{}};t.exports={StringUtils:n,StorageUtils:o,ArrayUtils:r,Cache:i}},function(t,e,n){var o=n(26);e.protocol=3;var r=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},i=o(r),s={type:"error",data:"parser error"};e.encodePacket=function(t,e,n,o){"function"==typeof n&&(o=n,n=null);var i=r[t.type];return void 0!==t.data&&(i+=String(t.data)),o(""+i)},e.decodePacket=function(t,e,n){if(void 0===t)return s;if("string"==typeof t){var o=t.charAt(0);return Number(o)==o&&i[o]?t.length>1?{type:i[o],data:t.substring(1)}:{type:i[o]}:s}}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var o in t)n.call(t,o)&&e.push(o);return e}},function(t,e,n){t.exports=n(30),t.exports.parser=n(2)},function(t,e,n){function o(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,o=i(t),s=o.source,p=o.id,l=o.path,h=u[p]&&l in u[p].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||h;return f?(c("ignoring socket cache for %s",s),n=a(s,e)):(u[p]||(c("new io instance for %s",s),u[p]=a(s,e)),n=u[p]),o.query&&!e.query?e.query=o.query:e&&"object"==typeof e.query&&(e.query=r(e.query)),n.socket(o.path,e)}function r(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}var i=n(29),s=n(5),a=n(6),c=n(1)("socket.io-client");t.exports=e=o;var u=e.managers={};e.protocol=s.protocol,e.connect=o,e.Manager=n(6),e.Socket=n(8)},function(t,e,n){function o(t,e){var n=t;null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=r(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var o=-1!==n.host.indexOf(":"),s=o?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}var r=n(15),i=n(1)("socket.io-client:url");t.exports=o},function(t,e,n){function o(t,e){return this instanceof o?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=!0,this.port="443",this.agent=e.agent||!1,this.hostname=e.hostname,this.port=e.port,this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized?null:e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new o(t,e)}function r(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(10),s=n(3),a=n(1)("engine.io-client:socket"),c=n(12),u=n(2),p=n(15),l=n(37),h=n(14);t.exports=o,o.priorWebsocketSuccess=!1,s(o.prototype),o.protocol=u.protocol,o.Socket=o,o.Transport=n(9),o.transports=n(10),o.parser=n(2),o.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=r(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var n=new i({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return n},o.prototype.open=function(){var t="websocket";this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},o.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},o.prototype.probe=function(t){function e(){if(h.onlyBinaryUpgrades){var e=!this.supportsBinary&&h.transport.supportsBinary;l=l||e}l||(a('probe transport "%s" opened',t),p.send([{type:"ping",data:"probe"}]),p.once("packet",function(e){if(!l)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),h.upgrading=!0,h.emit("upgrading",p),!p)return;o.priorWebsocketSuccess="websocket"===p.name,a('pausing current transport "%s"',h.transport.name),h.transport.pause(function(){l||"closed"!==h.readyState&&(a("changing transport and sending upgrade packet"),u(),h.setTransport(p),p.send([{type:"upgrade"}]),h.emit("upgrade",p),p=null,h.upgrading=!1,h.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=p.name,h.emit("upgradeError",n)}}))}function n(){l||(l=!0,u(),p.close(),p=null)}function r(e){var o=new Error("probe error: "+e);o.transport=p.name,n(),a('probe transport "%s" failed because of error: %s',t,e),h.emit("upgradeError",o)}function i(){r("transport closed")}function s(){r("socket closed")}function c(t){p&&t.name!==p.name&&(a('"%s" works - aborting "%s"',t.name,p.name),n())}function u(){p.removeListener("open",e),p.removeListener("error",r),p.removeListener("close",i),h.removeListener("close",s),h.removeListener("upgrading",c)}a('probing transport "%s"',t);var p=this.createTransport(t,{probe:1}),l=!1,h=this;o.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",r),p.once("close",i),this.once("close",s),this.once("upgrading",c),p.open()},o.prototype.onOpen=function(){if(this.readyState="open",o.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},o.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(l(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},o.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},o.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},o.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},o.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},o.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},o.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},o.prototype.write=o.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},o.prototype.sendPacket=function(t,e,n,o){if("function"==typeof e&&(o=e,e=void 0),"function"==typeof n&&(o=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var r={type:t,data:e,options:n};this.emit("packetCreate",r),this.writeBuffer.push(r),o&&this.once("flush",o),this.flush()}},o.prototype.close=function(){function t(){o.onClose("forced close"),a("socket closing - telling transport to close"),o.transport.close()}function e(){o.removeListener("upgrade",e),o.removeListener("upgradeError",e),t()}function n(){o.once("upgrade",e),o.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var o=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},o.prototype.onError=function(t){a("socket error %j",t),o.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},o.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},o.prototype.filterUpgrades=function(t){for(var e=[],n=0,o=t.length;n<o;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){!function(){function t(t){this.message=t}var n=e,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=new Error,t.prototype.name="InvalidCharacterError",n.btoa||(n.btoa=function(e){for(var n,r,i=String(e),s=0,a=o,c="";i.charAt(0|s)||(a="=",s%1);c+=a.charAt(63&n>>8-s%1*8)){if(r=i.charCodeAt(s+=.75),r>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|r}return c}),n.atob||(n.atob=function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,i,s=0,a=0,c="";i=n.charAt(a++);~i&&(r=s%4?64*r+i:i,s++%4)?c+=String.fromCharCode(255&r>>(-2*s&6)):0)i=o.indexOf(i);return c})}()},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){function o(){return e.colors[p++%e.colors.length]}function r(t){function n(){}function r(){var t=r,n=+new Date,i=n-(u||n);t.diff=i,t.prev=u,t.curr=n,u=n,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=o());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(n,o){if("%%"===n)return n;c++;var r=e.formatters[o];if("function"==typeof r){var i=s[c];n=r.call(t,i),s.splice(c,1),c--}return n}),s=e.formatArgs.apply(t,s);var p=r.log||e.log||console.log.bind(console);p.apply(t,s)}n.enabled=!1,r.enabled=!0;var i=e.enabled(t)?r:n;return i.namespace=t,i}function i(t){e.save(t);for(var n=(t||"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&(t=n[r].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var n,o;for(n=0,o=e.skips.length;n<o;n++)if(e.skips[n].test(t))return!1;for(n=0,o=e.names.length;n<o;n++)if(e.names[n].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=r.debug=r,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=n(36),e.names=[],e.skips=[],e.formatters={};var u,p=0},function(t,e,n){(function(e){function o(t){function n(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(r(t)){for(var o=0;o<t.length;o++)if(n(t[o]))return!0}else if(t&&"object"==typeof t)for(var i in t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}return n(t)}var r=n(13);t.exports=o}).call(e,function(){return this}())},function(t,e){function n(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),o=(e[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function o(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function r(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,p=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&!1===isNaN(t))return e.long?r(t):o(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e){var n=/^\s+/,o=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(n,"").replace(o,""),JSON.parse(t)):null}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){_&&f&&(_=!1,f.length?d=f.concat(d):g=-1,d.length&&a())}function a(){if(!_){var t=r(s);_=!0;for(var e=d.length;e;){for(f=d,d=[];++g<e;)f&&f[g].run();g=-1,e=d.length}f=null,_=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var p,l,h=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(t){p=n}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(t){l=o}}();var f,d=[],_=!1,g=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||_||r(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e,n){(function(t){var o=n(13),r=n(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(r(t)){var i={_placeholder:!0,num:n.length};return n.push(t),i}if(o(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){s={};for(var c in t)s[c]=e(t[c]);return s}return t}var n=[],i=t.data,s=t;return s.data=e(i),s.attachments=n.length,{packet:s,buffers:n}},e.reconstructPacket=function(t,e){function n(t){if(t&&t._placeholder){var r=e[t.num];return r}if(o(t)){for(var i=0;i<t.length;i++)t[i]=n(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=n(t[s]);return t}return t}return t.data=n(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,n){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var p=new FileReader;p.onload=function(){u?u[c]=this.result:a=this.result,--s||n(a)},p.readAsArrayBuffer(e)}else if(o(e))for(var l=0;l<e.length;l++)i(e[l],l,e);else if(e&&"object"==typeof e&&!r(e))for(var h in e)i(e[h],h,e)}var s=0,a=e;i(a),s||n(a)}}).call(e,function(){return this}())},function(t,e){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){o.off(t,n),e.apply(this,arguments)}var o=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var o,r=0;r<n.length;r++)if(o=n[r],o===e||o.fn===e){n.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var o=0,r=n.length;o<r;++o)n[o].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){function n(t,e){var n=[];e=e||0;for(var o=e||0;o<t.length;o++)n[o-e]=t[o];return n}t.exports=n},function(t,e){function n(t){var e="";do{e=s[t%a]+e,t=Math.floor(t/a)}while(t>0);return e}function o(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function r(){var t=n(+new Date);return t!==i?(u=0,i=t):t+"."+n(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,p=0;p<a;p++)c[s[p]]=p;r.encode=n,r.decode=o,t.exports=r}])})}).call(this,n("0de9")["default"])},a34a:function(t,e,n){t.exports=n("bbdd")},af7e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("275c")),r=i(n("4141"));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(e,n,i){var s={url:r.default.baseUrl+e,data:i,method:n,header:"post"==method?{Version:o.default.versionCode,"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}:{Version:o.default.versionCode,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},a=new Promise(function(e,n){t.request(s).then(function(t){e(t[1])}).catch(function(t){n(t)})});return a},a=function(e,n,o){var i={url:r.default.baseUrl+e,data:o,method:n,header:"post"==n?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},s=new Promise(function(e,n){t.request(i).then(function(t){e(t[1])}).catch(function(t){n(t)})});return s},c=function(e,n,o){var i={url:r.default.phpUrl+e,data:o,method:n,header:"post"==n?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},dataType:"json"},s=new Promise(function(e,n){t.request(i).then(function(t){e(t[1])}).catch(function(t){n(t)})});return s},u={httpRequest:s,httpTokenRequest:a,phpTokenRequest:c};e.default=u}).call(this,n("6e42")["default"])},b327:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={pages:{"pages/entryLogin/entryLogin":{navigationBarTitleText:"授权登陆"},"pages/evaluate/evaluate":{navigationBarTitleText:"评价"},"pages/share/share":{navigationBarTitleText:"分享"},"pages/chat/villagerList/villagerList":{navigationBarTitleText:"村民列表"},"pages/chat/chatLine/chatLine":{navigationBarTitleText:"动态"},"pages/index/index":{navigationBarTitleText:"首页"},"pages/me/me/me":{navigationBarTitleText:"我的"},"pages/chat/chatDialogue/chatDialogue":{navigationBarTitleText:"聊天"},"pages/chat/publishDynamic/publishDynamic":{navigationBarTitleText:"发表动态"},"pages/addHometown/addHometown":{navigationBarTitleText:"添加我的家乡"},"pages/villageSet/applyVillager/applyVillager":{navigationBarTitleText:"申请村管理"},"pages/login/login":{navigationBarTitleText:"账户登陆"},"pages/details/details":{navigationBarTitleText:"详情"},"pages/chat/chatList/chatList":{navigationBarTitleText:"村聊"},"pages/serch/serch":{navigationBarTitleText:"搜索"},"pages/serch/citySearch/citySearch":{navigationBarTitleText:"精确查找"},"pages/meInfo/personInfo/personInfo":{navigationBarTitleText:"编辑资料"},"pages/order/orderList/orderList":{navigationBarTitleText:"我的订单"},"pages/meInfo/villageNews/villageNews":{navigationBarTitleText:"村消息"},"pages/meInfo/myLike/myLike":{navigationBarTitleText:"点赞我的"},"pages/meInfo/myComment/myComment":{navigationBarTitleText:"评论我的"},"pages/meInfo/newsList/newsList":{navigationBarTitleText:"消息列表"},"pages/meInfo/fans/fans":{navigationBarTitleText:"粉丝"},"pages/meInfo/attention/attention":{navigationBarTitleText:"关注"},"pages/meInfo/nikeName/nikeName":{navigationBarTitleText:"修改昵称"},"pages/search-in/search-in":{navigationBarTitleText:"搜索"},"pages/ranking/ranking":{navigationBarTitleText:"村排名",navigationBarBackgroundColor:"#3c9ffc",backgroundColorTop:"#3c9ffc",navigationBarTextStyle:"white",titleNView:{type:"transparent",titleColor:"#fff",backgroundColor:"#3c9ffc"}},"pages/villageSet/villageLabel/villageLabel":{navigationBarTitleText:"乡村标签"},"pages/villageSet/villageVideo/villageVideo":{navigationBarTitleText:"村头视频"},"pages/villageSet/villageManager/villageManager":{navigationBarTitleText:"村务管理"},"pages/voteList/voteList":{navigationBarTitleText:"为家乡打榜"},"pages/contribution/contribution":{navigationBarTitleText:"赚贡献值"},"pages/contributionDeatils/contributionDeatils":{navigationBarTitleText:"贡献值明细"},"pages/uploadVideo/uploadVideo":{navigationBarTitleText:"添加视频"},"pages/feature/feature":{navigationBarTitleText:"特色风采"},"pages/addPic/addPic":{navigationBarTitleText:"添加图片"},"pages/scenery/scenery":{navigationBarTitleText:"村景"},"pages/uploadPic/uploadPic":{navigationBarTitleText:"上传村景"},"pages/order/orderEvaluate/orderEvaluate":{navigationBarTitleText:"点评"},"pages/publishEvaluate/publishEvaluate":{navigationBarTitleText:"发表点评"},"pages/villageIntroduce/villageIntroduce":{navigationBarTitleText:"村简介发表"},"pages/villageSet/villagePic/villagePic":{navigationBarTitleText:"家乡封面"},"pages/villageSet/villageIntroduce/villageIntroduce":{navigationBarTitleText:"编辑乡村简介"},"pages/modal/homestayDetails/homestayDetails":{navigationBarTitleText:"民宿"},"pages/modal/homestay/homestay":{navigationBarTitleText:"民宿"},"pages/chat/chatDeatils/chatDeatils":{},"pages/h5/h5":{navigationBarTitleText:"网页浏览"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=o},b729:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={appid:"__UNI__98270A3"};e.default=o},bbdd:function(t,e,n){var o=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,i=r&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=n("96cf"),r)o.regeneratorRuntime=i;else try{delete o.regeneratorRuntime}catch(s){o.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,o=t.length-1;o>=0;o--){var r=t[o];"."===r?t.splice(o,1):".."===r?(t.splice(o,1),n++):n&&(t.splice(o,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return o.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],o=0;o<t.length;o++)e(t[o],o,t)&&n.push(t[o]);return n}e.resolve=function(){for(var e="",o=!1,r=arguments.length-1;r>=-1&&!o;r--){var s=r>=0?arguments[r]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,o="/"===s.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var o=e.isAbsolute(t),r="/"===s(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!o).join("/"),t||o||(t="."),t&&r&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function o(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=o(t.split("/")),i=o(n.split("/")),s=Math.min(r.length,i.length),a=s,c=0;c<s;c++)if(r[c]!==i[c]){a=c;break}var u=[];for(c=a;c<r.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),n=e[0],o=e[1];return n||o?(o&&(o=o.substr(0,o.length-1)),n+o):"."},e.basename=function(t,e){var n=r(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return r(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e1b1:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var n=OUTPUT_TYPES[e];t[n]=createOutputMethod(n)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var o,r,i=0,s=t.length,a=this.blocks,c=this.buffer8;while(i<s){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(ARRAY_BUFFER)for(r=this.start;i<s&&r<64;++i)c[r++]=t[i];else for(r=this.start;i<s&&r<64;++i)a[r>>2]|=t[i]<<SHIFT[3&r++];else if(ARRAY_BUFFER)for(r=this.start;i<s&&r<64;++i)o=t.charCodeAt(i),o<128?c[r++]=o:o<2048?(c[r++]=192|o>>6,c[r++]=128|63&o):o<55296||o>=57344?(c[r++]=224|o>>12,c[r++]=128|o>>6&63,c[r++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++i)),c[r++]=240|o>>18,c[r++]=128|o>>12&63,c[r++]=128|o>>6&63,c[r++]=128|63&o);else for(r=this.start;i<s&&r<64;++i)o=t.charCodeAt(i),o<128?a[r>>2]|=o<<SHIFT[3&r++]:o<2048?(a[r>>2]|=(192|o>>6)<<SHIFT[3&r++],a[r>>2]|=(128|63&o)<<SHIFT[3&r++]):o<55296||o>=57344?(a[r>>2]|=(224|o>>12)<<SHIFT[3&r++],a[r>>2]|=(128|o>>6&63)<<SHIFT[3&r++],a[r>>2]|=(128|63&o)<<SHIFT[3&r++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++i)),a[r>>2]|=(240|o>>18)<<SHIFT[3&r++],a[r>>2]|=(128|o>>12&63)<<SHIFT[3&r++],a[r>>2]|=(128|o>>6&63)<<SHIFT[3&r++],a[r>>2]|=(128|63&o)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,n,o,r,i,s=this.blocks;this.first?(t=s[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,o=(-1732584194^2004318071&t)+s[1]-117830708,o=(o<<12|o>>>20)+t<<0,n=(-271733879^o&(-271733879^t))+s[2]-1126478375,n=(n<<17|n>>>15)+o<<0,e=(t^n&(o^t))+s[3]-1316259209,e=(e<<22|e>>>10)+n<<0):(t=this.h0,e=this.h1,n=this.h2,o=this.h3,t+=(o^e&(n^o))+s[0]-680876936,t=(t<<7|t>>>25)+e<<0,o+=(n^t&(e^n))+s[1]-389564586,o=(o<<12|o>>>20)+t<<0,n+=(e^o&(t^e))+s[2]+606105819,n=(n<<17|n>>>15)+o<<0,e+=(t^n&(o^t))+s[3]-1044525330,e=(e<<22|e>>>10)+n<<0),t+=(o^e&(n^o))+s[4]-176418897,t=(t<<7|t>>>25)+e<<0,o+=(n^t&(e^n))+s[5]+1200080426,o=(o<<12|o>>>20)+t<<0,n+=(e^o&(t^e))+s[6]-1473231341,n=(n<<17|n>>>15)+o<<0,e+=(t^n&(o^t))+s[7]-45705983,e=(e<<22|e>>>10)+n<<0,t+=(o^e&(n^o))+s[8]+1770035416,t=(t<<7|t>>>25)+e<<0,o+=(n^t&(e^n))+s[9]-1958414417,o=(o<<12|o>>>20)+t<<0,n+=(e^o&(t^e))+s[10]-42063,n=(n<<17|n>>>15)+o<<0,e+=(t^n&(o^t))+s[11]-1990404162,e=(e<<22|e>>>10)+n<<0,t+=(o^e&(n^o))+s[12]+1804603682,t=(t<<7|t>>>25)+e<<0,o+=(n^t&(e^n))+s[13]-40341101,o=(o<<12|o>>>20)+t<<0,n+=(e^o&(t^e))+s[14]-1502002290,n=(n<<17|n>>>15)+o<<0,e+=(t^n&(o^t))+s[15]+1236535329,e=(e<<22|e>>>10)+n<<0,t+=(n^o&(e^n))+s[1]-165796510,t=(t<<5|t>>>27)+e<<0,o+=(e^n&(t^e))+s[6]-1069501632,o=(o<<9|o>>>23)+t<<0,n+=(t^e&(o^t))+s[11]+643717713,n=(n<<14|n>>>18)+o<<0,e+=(o^t&(n^o))+s[0]-373897302,e=(e<<20|e>>>12)+n<<0,t+=(n^o&(e^n))+s[5]-701558691,t=(t<<5|t>>>27)+e<<0,o+=(e^n&(t^e))+s[10]+38016083,o=(o<<9|o>>>23)+t<<0,n+=(t^e&(o^t))+s[15]-660478335,n=(n<<14|n>>>18)+o<<0,e+=(o^t&(n^o))+s[4]-405537848,e=(e<<20|e>>>12)+n<<0,t+=(n^o&(e^n))+s[9]+568446438,t=(t<<5|t>>>27)+e<<0,o+=(e^n&(t^e))+s[14]-1019803690,o=(o<<9|o>>>23)+t<<0,n+=(t^e&(o^t))+s[3]-187363961,n=(n<<14|n>>>18)+o<<0,e+=(o^t&(n^o))+s[8]+1163531501,e=(e<<20|e>>>12)+n<<0,t+=(n^o&(e^n))+s[13]-1444681467,t=(t<<5|t>>>27)+e<<0,o+=(e^n&(t^e))+s[2]-51403784,o=(o<<9|o>>>23)+t<<0,n+=(t^e&(o^t))+s[7]+1735328473,n=(n<<14|n>>>18)+o<<0,e+=(o^t&(n^o))+s[12]-1926607734,e=(e<<20|e>>>12)+n<<0,r=e^n,t+=(r^o)+s[5]-378558,t=(t<<4|t>>>28)+e<<0,o+=(r^t)+s[8]-2022574463,o=(o<<11|o>>>21)+t<<0,i=o^t,n+=(i^e)+s[11]+1839030562,n=(n<<16|n>>>16)+o<<0,e+=(i^n)+s[14]-35309556,e=(e<<23|e>>>9)+n<<0,r=e^n,t+=(r^o)+s[1]-1530992060,t=(t<<4|t>>>28)+e<<0,o+=(r^t)+s[4]+1272893353,o=(o<<11|o>>>21)+t<<0,i=o^t,n+=(i^e)+s[7]-155497632,n=(n<<16|n>>>16)+o<<0,e+=(i^n)+s[10]-1094730640,e=(e<<23|e>>>9)+n<<0,r=e^n,t+=(r^o)+s[13]+681279174,t=(t<<4|t>>>28)+e<<0,o+=(r^t)+s[0]-358537222,o=(o<<11|o>>>21)+t<<0,i=o^t,n+=(i^e)+s[3]-722521979,n=(n<<16|n>>>16)+o<<0,e+=(i^n)+s[6]+76029189,e=(e<<23|e>>>9)+n<<0,r=e^n,t+=(r^o)+s[9]-640364487,t=(t<<4|t>>>28)+e<<0,o+=(r^t)+s[12]-421815835,o=(o<<11|o>>>21)+t<<0,i=o^t,n+=(i^e)+s[15]+530742520,n=(n<<16|n>>>16)+o<<0,e+=(i^n)+s[2]-995338651,e=(e<<23|e>>>9)+n<<0,t+=(n^(e|~o))+s[0]-198630844,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~n))+s[7]+1126891415,o=(o<<10|o>>>22)+t<<0,n+=(t^(o|~e))+s[14]-1416354905,n=(n<<15|n>>>17)+o<<0,e+=(o^(n|~t))+s[5]-57434055,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~o))+s[12]+1700485571,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~n))+s[3]-1894986606,o=(o<<10|o>>>22)+t<<0,n+=(t^(o|~e))+s[10]-1051523,n=(n<<15|n>>>17)+o<<0,e+=(o^(n|~t))+s[1]-2054922799,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~o))+s[8]+1873313359,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~n))+s[15]-30611744,o=(o<<10|o>>>22)+t<<0,n+=(t^(o|~e))+s[6]-1560198380,n=(n<<15|n>>>17)+o<<0,e+=(o^(n|~t))+s[13]+1309151649,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~o))+s[4]-145523070,t=(t<<6|t>>>26)+e<<0,o+=(e^(t|~n))+s[11]-1120210379,o=(o<<10|o>>>22)+t<<0,n+=(t^(o|~e))+s[2]+718787259,n=(n<<15|n>>>17)+o<<0,e+=(o^(n|~t))+s[9]-343485551,e=(e<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+o<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,o=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,n,o="",r=this.array(),i=0;i<15;)t=r[i++],e=r[i++],n=r[i++],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|n>>>6)]+BASE64_ENCODE_CHAR[63&n];return t=r[i],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",o};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},fbf9:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/base-classes/base-classes';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/base-classes/base-classes.js';

define('components/base-classes/base-classes.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/base-classes/base-classes"], {
  2671: function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("a486"),
        s = n("89a5");

    for (var i in s) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return s[t];
        });
      }(i);
    }

    n("f6c5");
    var u = n("2877"),
        c = Object(u["a"])(s["default"], r["a"], r["b"], !1, null, "339a4d90", null);
    e["default"] = c.exports;
  },
  "5dca": function dca(t, e, n) {},
  "89a5": function a5(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("971f"),
        s = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = s.a;
  },
  "971f": function f(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          classesAttr: {
            type: Object,
            default: function _default() {
              return {};
            }
          }
        },
        computed: {
          getData: function getData() {
            return this.classesAttr.data || [];
          },
          getTitle: function getTitle() {
            return this.classesAttr.title || "模块标题";
          },
          getTitleColor: function getTitleColor() {
            return this.classesAttr.titleColor || "#333";
          },
          getTitleFontSize: function getTitleFontSize() {
            return t.upx2px(this.classesAttr.titleFontSize || 24) + "px";
          },
          getTitleHeight: function getTitleHeight() {
            return t.upx2px(this.classesAttr.titleHeight || 60) + "px";
          },
          getTitleBackground: function getTitleBackground() {
            return this.classesAttr.titleBackground || "#ccc";
          },
          getTitlePadding: function getTitlePadding() {
            return t.upx2px(this.classesAttr.titlePadding || 20) + "px";
          },
          getHeight: function getHeight() {
            return t.upx2px(this.classesAttr.height || 350) + "px";
          },
          getContentPadding: function getContentPadding() {
            return "0 " + t.upx2px(this.classesAttr.contentPadding || 20) + "px";
          },
          getItemWidth: function getItemWidth() {
            return t.upx2px(this.classesAttr.itemWidth || 200) + "px";
          },
          getItemHeight: function getItemHeight() {
            return t.upx2px(this.classesAttr.itemHeight || 50) + "px";
          },
          getItemFontSize: function getItemFontSize() {
            return t.upx2px(this.classesAttr.itemFontSize || 28) + "px";
          },
          getItemColor: function getItemColor() {
            return this.classesAttr.itemColor || "#333";
          },
          getItemBackgroundColor: function getItemBackgroundColor() {
            return this.classesAttr.itemBackgroundColor || "";
          },
          getItemBorder: function getItemBorder() {
            return this.classesAttr.itemBorder || "1px solid rgba(0, 0, 0, 0.1)";
          },
          getItemBorderRadius: function getItemBorderRadius() {
            return t.upx2px(this.classesAttr.itemBorderRadius || 20) + "px";
          },
          getItemMarginTop: function getItemMarginTop() {
            return t.upx2px(this.classesAttr.itemMarginTop || 20) + "px";
          }
        },
        methods: {
          chooseItem: function chooseItem(t) {
            this.$emit("chooseItem", t);
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  a486: function a486(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return s;
    });
  },
  f6c5: function f6c5(t, e, n) {
    "use strict";

    var r = n("5dca"),
        s = n.n(r);
    s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/base-classes/base-classes-create-component', {
  'components/base-classes/base-classes-create-component': function componentsBaseClassesBaseClassesCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2671"));
  }
}, [['components/base-classes/base-classes-create-component']]]);
});
require('components/base-classes/base-classes.js');
__wxRoute = 'components/lee-select/lee-select';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/lee-select/lee-select.js';

define('components/lee-select/lee-select.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/lee-select/lee-select"], {
  "0d3c": function d3c(t, r, i) {
    "use strict";

    i.r(r);
    var n = i("6ad6"),
        e = i.n(n);

    for (var a in n) {
      "default" !== a && function (t) {
        i.d(r, t, function () {
          return n[t];
        });
      }(a);
    }

    r["default"] = e.a;
  },
  "4e5b": function e5b(t, r, i) {},
  "6ad6": function ad6(t, r, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n = function n() {
        return i.e("components/base-classes/base-classes").then(i.bind(null, "2671"));
      },
          e = {
        components: {
          baseClasses: n
        },
        data: function data() {
          return {
            index: "",
            scrollTop: 0,
            disArray: [0],
            activeIndex: 0,
            fadeFlag: !1,
            Timer: null
          };
        },
        props: {
          listData: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          quickPanelData: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          navAttr: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          listAttr: {
            type: Object,
            default: function _default() {
              return {};
            }
          }
        },
        computed: {
          getNavData: function getNavData() {
            var t = [];
            return this.quickPanelData.forEach(function (r, i) {
              var n = r.navName || r.title || "标题";
              t.push(n);
            }), this.listData.forEach(function (r, i) {
              t.push(r.initial);
            }), t;
          },
          getListAttrListBackgroundColor: function getListAttrListBackgroundColor() {
            return this.listAttr.listBackgroundColor || "transport";
          },
          getListAttrTitleColor: function getListAttrTitleColor() {
            return this.listAttr.titleColor || "#333";
          },
          getListAttrTitleFontSize: function getListAttrTitleFontSize() {
            return t.upx2px(this.listAttr.titleFontSize || 24) + "px";
          },
          getListAttrTitleHeight: function getListAttrTitleHeight() {
            return t.upx2px(this.listAttr.titleHeight || 60) + "px";
          },
          getListAttrTitleBackground: function getListAttrTitleBackground() {
            return this.listAttr.titleBackground || "#ccc";
          },
          getListAttrTitlePadding: function getListAttrTitlePadding() {
            return t.upx2px(this.listAttr.titlePadding || 20) + "px";
          },
          getListAttrItemHeight: function getListAttrItemHeight() {
            return t.upx2px(this.listAttr.itemHeight || 80) + "px";
          },
          getListAttrItemFontSize: function getListAttrItemFontSize() {
            return t.upx2px(this.listAttr.itemFontSize || 28) + "px";
          },
          getListAttrItemColor: function getListAttrItemColor() {
            return this.listAttr.itemColor || "#333";
          },
          getListAttrItemBackgroundColor: function getListAttrItemBackgroundColor() {
            return this.listAttr.itemBackgroundColor || "";
          },
          getListAttrItemBorderBottom: function getListAttrItemBorderBottom() {
            return this.listAttr.itemBorderBottom || "1px solid rgba(0, 0, 0, 0.1)";
          },
          getListAttrItemMargin: function getListAttrItemMargin() {
            return "0 " + t.upx2px(this.listAttr.itemFontSize || 20) + "px";
          },
          getNavAttrEnable: function getNavAttrEnable() {
            return !this.navAttr.hasOwnProperty("enable") || this.navAttr.enable;
          },
          getNavAttrbackgroundColor: function getNavAttrbackgroundColor() {
            return this.navAttr.backgroundColor || "rgba(0, 0, 0, 0.4)";
          },
          getNavAttrColor: function getNavAttrColor() {
            return this.navAttr.color || "#333";
          },
          getNavAttrActiveColor: function getNavAttrActiveColor() {
            return this.navAttr.activeColor || "#fff";
          },
          getNavAttrFontSize: function getNavAttrFontSize() {
            return t.upx2px(this.navAttr.fontSize || 24) + "px";
          },
          getNavAttrItemPadding: function getNavAttrItemPadding() {
            if (this.navAttr.itemPadding) {
              var r = "",
                  i = this.navAttr.itemPadding.split(" ");
              return i.forEach(function (i, n) {
                r += t.upx2px(i) + "px ";
              }), r;
            }

            return t.upx2px(6) + "px " + t.upx2px(0) + "px";
          },
          getNavAttrBorderRadius: function getNavAttrBorderRadius() {
            return t.upx2px(this.navAttr.borderRadius || 100) + "px";
          },
          getNavAttrPadding: function getNavAttrPadding() {
            if (this.navAttr.itemPadding) {
              var r = "",
                  i = this.navAttr.padding.split(" ");
              return i.forEach(function (i, n) {
                r += t.upx2px(i) + "px ";
              }), r;
            }

            return t.upx2px(0) + "px " + t.upx2px(0) + "px";
          }
        },
        mounted: function mounted() {
          this.getDisArray();
        },
        watch: {
          listData: function listData(t, r) {
            t.length > 0 && this.getDisArray();
          }
        },
        methods: {
          scrollSelect: function scrollSelect(t) {
            var r = this;
            clearTimeout(this.Timer), this.scrollTop = this.disArray[t], this.activeIndex = t, this.fadeFlag = !0, this.Timer = setTimeout(function () {
              r.fadeFlag = !1;
            }, 1e3);
          },
          scroll: function scroll(t) {
            for (var r = this.disArray.length, i = 0; i < r; i++) {
              this.disArray[i] < t.detail.scrollTop && this.disArray[i + 1] > t.detail.scrollTop && (this.activeIndex = i);
            }
          },
          getDisArray: function getDisArray() {
            var r = this;
            this.disArray = [0];
            var i = this.disArray[0];
            this.quickPanelData.forEach(function (n, e) {
              i += t.upx2px(n.height || 350), r.disArray.push(i);
            }), this.listData.forEach(function (t, n) {
              var e = r.disArray.length - 1;
              i = r.disArray[e] + (parseInt(r.getListAttrTitleHeight) + parseInt(r.getListAttrItemHeight) * t.list.length), r.disArray.push(i);
            });
          },
          chooseItem: function chooseItem(t) {
            this.$emit("chooseItem", t);
          }
        }
      };

      r.default = e;
    }).call(this, i("6e42")["default"]);
  },
  8376: function _(t, r, i) {
    "use strict";

    var n = function n() {
      var t = this,
          r = t.$createElement;
      t._self._c;
    },
        e = [];

    i.d(r, "a", function () {
      return n;
    }), i.d(r, "b", function () {
      return e;
    });
  },
  ecd2: function ecd2(t, r, i) {
    "use strict";

    var n = i("4e5b"),
        e = i.n(n);
    e.a;
  },
  f485: function f485(t, r, i) {
    "use strict";

    i.r(r);
    var n = i("8376"),
        e = i("0d3c");

    for (var a in e) {
      "default" !== a && function (t) {
        i.d(r, t, function () {
          return e[t];
        });
      }(a);
    }

    i("ecd2");
    var o = i("2877"),
        s = Object(o["a"])(e["default"], n["a"], n["b"], !1, null, "fa38f808", null);
    r["default"] = s.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/lee-select/lee-select-create-component', {
  'components/lee-select/lee-select-create-component': function componentsLeeSelectLeeSelectCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f485"));
  }
}, [['components/lee-select/lee-select-create-component']]]);
});
require('components/lee-select/lee-select.js');
__wxRoute = 'components/mescroll-uni/mescroll-uni';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mescroll-uni/mescroll-uni.js';

define('components/mescroll-uni/mescroll-uni.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mescroll-uni/mescroll-uni"], {
  1028: function _(o, t, n) {
    "use strict";

    n.r(t);
    var i = n("5aee"),
        e = n.n(i);

    for (var l in i) {
      "default" !== l && function (o) {
        n.d(t, o, function () {
          return i[o];
        });
      }(l);
    }

    t["default"] = e.a;
  },
  "5aee": function aee(o, t, n) {
    "use strict";

    (function (o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = l(n("3181")),
          e = l(n("61bd"));

      function l(o) {
        return o && o.__esModule ? o : {
          default: o
        };
      }

      var s = {
        data: function data() {
          return {
            mescroll: null,
            downHight: 0,
            downRotate: 0,
            downText: "",
            isDownReset: !1,
            isDownLoading: !1,
            isUpLoading: !1,
            isUpNoMore: !1,
            isShowEmpty: !1,
            isShowToTop: !1,
            scrollAble: !0,
            scrollTop: 0,
            scrollAnim: !1,
            windowTop: 0,
            windowBottom: 0
          };
        },
        props: {
          down: Object,
          up: Object,
          top: [String, Number],
          bottom: [String, Number],
          fixed: {
            type: Boolean,
            default: function _default() {
              return !0;
            }
          }
        },
        computed: {
          optDown: function optDown() {
            return this.mescroll ? this.mescroll.optDown : null;
          },
          optUp: function optUp() {
            return this.mescroll ? this.mescroll.optUp : null;
          },
          optEmpty: function optEmpty() {
            return this.mescroll ? this.mescroll.optUp.empty : null;
          },
          optToTop: function optToTop() {
            return this.mescroll ? this.mescroll.optUp.toTop : null;
          },
          numTop: function numTop() {
            return o.upx2px(Number(this.top || 0));
          },
          fixedTop: function fixedTop() {
            return this.fixed ? this.numTop + this.windowTop + "px" : 0;
          },
          padTop: function padTop() {
            return this.fixed ? 0 : this.numTop + "px";
          },
          numBottom: function numBottom() {
            return o.upx2px(Number(this.bottom || 0));
          },
          fixedBottom: function fixedBottom() {
            return this.fixed ? this.numBottom + this.windowBottom + "px" : 0;
          },
          padBottom: function padBottom() {
            return this.fixed ? 0 : this.numBottom + "px";
          },
          upOffset: function upOffset() {
            return this.mescroll ? this.mescroll.optUp.offset : 50;
          }
        },
        methods: {
          scrolltolower: function scrolltolower() {
            this.mescroll && this.mescroll.scrolltolower();
          },
          scroll: function scroll(o) {
            var t = this;
            this.mescroll && this.mescroll.scroll(o.detail, function () {
              t.$emit("scroll", t.mescroll);
            });
          },
          touchstartEvent: function touchstartEvent(o) {
            this.mescroll && this.mescroll.touchstartEvent(o);
          },
          touchmoveEvent: function touchmoveEvent(o) {
            this.mescroll && this.mescroll.touchmoveEvent(o);
          },
          touchendEvent: function touchendEvent(o) {
            this.mescroll && this.mescroll.touchendEvent(o);
          },
          emptyClick: function emptyClick() {
            this.$emit("emptyclick", this.mescroll);
          },
          toTopClick: function toTopClick() {
            this.isShowToTop = !1, this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration), this.$emit("topclick", this.mescroll);
          }
        },
        mounted: function mounted() {
          var t = this,
              n = {
            down: {
              inOffset: function inOffset(o) {
                t.scrollAble = !1, t.isDownReset = !1, t.isDownLoading = !1, t.downText = o.optDown.textInOffset;
              },
              outOffset: function outOffset(o) {
                t.scrollAble = !1, t.isDownReset = !1, t.isDownLoading = !1, t.downText = o.optDown.textOutOffset;
              },
              onMoving: function onMoving(o, n, i) {
                t.downHight = i, t.downRotate = 360 * n;
              },
              showLoading: function showLoading(o, n) {
                t.scrollAble = !0, t.isDownReset = !0, t.isDownLoading = !0, t.downHight = n, t.downText = o.optDown.textLoading;
              },
              endDownScroll: function endDownScroll(o) {
                t.scrollAble = !0, t.isDownReset = !0, t.isDownLoading = !1, t.downHight = 0;
              },
              callback: function callback(o) {
                t.$emit("down", o);
              }
            },
            up: {
              showLoading: function showLoading() {
                t.isUpLoading = !0, t.isUpNoMore = !1;
              },
              showNoMore: function showNoMore() {
                t.isUpLoading = !1, t.isUpNoMore = !0;
              },
              hideUpScroll: function hideUpScroll() {
                t.isUpLoading = !1, t.isUpNoMore = !1;
              },
              empty: {
                onShow: function onShow(o) {
                  t.isShowEmpty != o && (t.isShowEmpty = o);
                }
              },
              toTop: {
                onShow: function onShow(o) {
                  t.isShowToTop != o && (t.isShowToTop = o);
                }
              },
              callback: function callback(o) {
                t.$emit("up", o);
              }
            }
          };
          i.default.extend(n, e.default);
          var l = i.default.extend({
            down: t.down ? JSON.parse(JSON.stringify(t.down)) : t.down,
            up: t.up ? JSON.parse(JSON.stringify(t.up)) : t.up
          }, n);
          t.mescroll = new i.default(l), t.$emit("init", t.mescroll), o.getSystemInfo({
            success: function success(o) {
              o.windowTop && (t.windowTop = o.windowTop), o.windowBottom && (t.windowBottom = o.windowBottom), t.mescroll.setBodyHeight(o.windowHeight);
            }
          }), t.mescroll.resetScrollTo(function (o, n) {
            var i = t.mescroll.getScrollTop();
            0 === n ? (t.scrollAnim = !1, t.scrollTop = i, t.$nextTick(function () {
              t.scrollTop = o;
            })) : (t.scrollAnim = !0, t.mescroll.getStep(i, o, function (o) {
              t.scrollTop = o;
            }, n));
          });
        }
      };
      t.default = s;
    }).call(this, n("6e42")["default"]);
  },
  "678c": function c(o, t, n) {
    "use strict";

    var i = function i() {
      var o = this,
          t = o.$createElement;
      o._self._c;
    },
        e = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return e;
    });
  },
  "6a1c": function a1c(o, t, n) {
    "use strict";

    var i = n("c47e"),
        e = n.n(i);
    e.a;
  },
  b5ca: function b5ca(o, t, n) {
    "use strict";

    n.r(t);
    var i = n("678c"),
        e = n("1028");

    for (var l in e) {
      "default" !== l && function (o) {
        n.d(t, o, function () {
          return e[o];
        });
      }(l);
    }

    n("6a1c");
    var s = n("2877"),
        c = Object(s["a"])(e["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  c47e: function c47e(o, t, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mescroll-uni/mescroll-uni-create-component', {
  'components/mescroll-uni/mescroll-uni-create-component': function componentsMescrollUniMescrollUniCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b5ca"));
  }
}, [['components/mescroll-uni/mescroll-uni-create-component']]]);
});
require('components/mescroll-uni/mescroll-uni.js');
__wxRoute = 'components/xuan-linkAddress/xuan-linkAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/xuan-linkAddress/xuan-linkAddress.js';

define('components/xuan-linkAddress/xuan-linkAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/xuan-linkAddress/xuan-linkAddress"], {
  "62aa": function aa(s, i, e) {},
  "9d1e": function d1e(s, i, e) {
    "use strict";

    (function (s) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var e = {
        data: function data() {
          return {
            newActive: "",
            newTransition: !0,
            ParentId: 0,
            linkAddress_area: [{
              current: null,
              info: [],
              clickfun: "province_txt_click"
            }, {
              current: null,
              info: [],
              clickfun: "city_txt_click"
            }, {
              current: null,
              info: [],
              clickfun: "district_txt_click"
            }, {
              current: null,
              info: [],
              clickfun: "town_txt_click"
            }, {
              current: null,
              info: [],
              clickfun: "village_txt_click"
            }],
            user_address: {
              province: "",
              Provice_id: "",
              city: "",
              City_id: "",
              district: "",
              Area_id: "",
              town: "",
              Town_id: "",
              village: ""
            },
            selected_address: ""
          };
        },
        props: {
          active: {
            type: Boolean,
            default: !1
          },
          height: {
            type: [String],
            default: "100%"
          },
          maskShow: {
            type: Boolean,
            default: !0
          },
          maskClick: {
            type: Boolean,
            default: !0
          },
          callback: {
            type: Function,
            default: function _default() {}
          }
        },
        computed: {
          popuplayoutClass: function popuplayoutClass() {
            var s = "";
            return this.newActive && (s += "popup-layout-active"), s += " popup-layout-bottom", s;
          },
          popupContentClass: function popupContentClass() {
            var s = "";
            return this.newTransition && "none" !== this.transition && (s += "popup-layout-transition-slider"), s;
          }
        },
        methods: {
          show: function show() {
            this.get_linkAddress(this, "province", this.ParentId, function (s) {}), this.newActive = !0;
            var s = this;
            setTimeout(function () {
              s.newTransition = !1;
            }, 50);
          },
          close: function close(s) {
            var i = s || !0;

            if (i) {
              this.newTransition = !0;
              var e = this;
              setTimeout(function () {
                e.newActive = !1;
              }, 300);
            }
          },
          choosefun: function choosefun(s, i, e) {
            this[s](i, e);
          },
          province_txt_click: function province_txt_click(s, i) {
            var e;
            this.linkAddress_area[2].info = [], this.linkAddress_area[3].info = [], this.linkAddress_area[4].info = [], this.linkAddress_area[1].current = null, this.linkAddress_area[2].current = null, this.linkAddress_area[3].current = null, this.linkAddress_area[4].current = null;

            for (var t = 0; t < this.linkAddress_area[0].info.length; t++) {
              if (this.linkAddress_area[0].info[t].id === s) {
                this.linkAddress_area[0].current = t, e = this.linkAddress_area[0].info[t].area_name;
                break;
              }
            }

            this.user_address = {
              province: e,
              Provice_id: "",
              city: "",
              City_id: "",
              district: "",
              Area_id: "",
              town: "",
              Town_id: "",
              village: "",
              village_id: ""
            }, this.selected_address = this.user_address.province, this.user_address.Provice_id = i, this.get_linkAddress(this, "city", i, function (s) {});
          },
          city_txt_click: function city_txt_click(s, i) {
            var e;
            this.linkAddress_area[3].info = [], this.linkAddress_area[4].info = [], this.linkAddress_area[2].current = null;

            for (var t = 0; t < this.linkAddress_area[1].info.length; t++) {
              if (this.linkAddress_area[1].info[t].id === s) {
                this.linkAddress_area[1].current = t, e = this.linkAddress_area[1].info[t].area_name;
                break;
              }
            }

            this.user_address.city = e, this.user_address.City_id = i, this.user_address.district = "", this.selected_address = this.user_address.province + "-" + this.user_address.city, this.get_linkAddress(this, "district", i, function (s) {});
          },
          district_txt_click: function district_txt_click(s, i) {
            var e;
            this.linkAddress_area[4].info = [], this.linkAddress_area[3].current = null;

            for (var t = 0; t < this.linkAddress_area[2].info.length; t++) {
              if (this.linkAddress_area[2].info[t].id === s) {
                this.linkAddress_area[2].current = t, e = this.linkAddress_area[2].info[t].area_name;
                break;
              }
            }

            this.user_address.district = e, this.user_address.Area_id = i, this.user_address.town = "", this.selected_address = this.user_address.province + "-" + this.user_address.city + "-" + this.user_address.district, this.get_linkAddress(this, "town", i, function (s) {});
          },
          town_txt_click: function town_txt_click(s, i) {
            var e;
            this.linkAddress_area[4].current = null;

            for (var t = 0; t < this.linkAddress_area[3].info.length; t++) {
              if (this.linkAddress_area[3].info[t].id === s) {
                this.linkAddress_area[3].current = t, e = this.linkAddress_area[3].info[t].area_name;
                break;
              }
            }

            this.user_address.town = e, this.user_address.Town_id = i, this.user_address.village = "", this.selected_address = this.user_address.province + "-" + this.user_address.city + "-" + this.user_address.district + "-" + this.user_address.town, this.get_linkAddress(this, "village", i, function (s) {});
          },
          village_txt_click: function village_txt_click(s, i) {
            for (var e, t = 0; t < this.linkAddress_area[4].info.length; t++) {
              if (this.linkAddress_area[4].info[t].id === s) {
                this.linkAddress_area[4].current = t, e = this.linkAddress_area[4].info[t].area_name;
                break;
              }
            }

            this.user_address.village = e, this.user_address.village_id = i, this.selected_address = this.user_address.province + "-" + this.user_address.city + "-" + this.user_address.district + "-" + this.user_address.town + "-" + this.user_address.village;
          },
          btn_cancel: function btn_cancel() {
            this.close(), this.linkAddress_area[1].info = [], this.linkAddress_area[2].info = [], this.linkAddress_area[3].info = [], this.linkAddress_area[4].info = [], this.linkAddress_area[0].current = null, this.linkAddress_area[1].current = null, this.linkAddress_area[2].current = null, this.linkAddress_area[3].current = null, this.linkAddress_area[4].current = null, this.selected_address = "";
          },
          btn_confirm: function btn_confirm() {
            this.close(), s.setStorageSync("commit_address", this.user_address), this.$emit("confirmCallback");
          },
          get_linkAddress: function get_linkAddress(i, e, t, r) {
            var n = this;
            n.$request.phpTokenRequest(n.$api.GetAreaList, n.$api.get, {
              Key: n.$api.Key,
              Client: n.$api.CLIENT,
              Version: n.$api.VERSION,
              ParentID: t
            }).then(function (t) {
              var n = t.data.data;
              200 === t.data.flag ? ("province" === e && (i.linkAddress_area[0].info = n, r(!0)), "city" === e && (i.linkAddress_area[1].info = n, r(!0)), "district" === e && (i.linkAddress_area[2].info = n, r(!0)), "town" === e && (i.linkAddress_area[3].info = n, r(!0)), "village" === e && (i.linkAddress_area[4].info = n, r(!0))) : s.showToast({
                title: t.data.msg,
                icon: "none"
              });
            });
          }
        }
      };
      i.default = e;
    }).call(this, e("6e42")["default"]);
  },
  a082: function a082(s, i, e) {
    "use strict";

    e.r(i);
    var t = e("a878"),
        r = e("c2a5");

    for (var n in r) {
      "default" !== n && function (s) {
        e.d(i, s, function () {
          return r[s];
        });
      }(n);
    }

    e("cfa2");
    var a = e("2877"),
        d = Object(a["a"])(r["default"], t["a"], t["b"], !1, null, null, null);
    i["default"] = d.exports;
  },
  a878: function a878(s, i, e) {
    "use strict";

    var t = function t() {
      var s = this,
          i = s.$createElement;
      s._self._c;
    },
        r = [];

    e.d(i, "a", function () {
      return t;
    }), e.d(i, "b", function () {
      return r;
    });
  },
  c2a5: function c2a5(s, i, e) {
    "use strict";

    e.r(i);
    var t = e("9d1e"),
        r = e.n(t);

    for (var n in t) {
      "default" !== n && function (s) {
        e.d(i, s, function () {
          return t[s];
        });
      }(n);
    }

    i["default"] = r.a;
  },
  cfa2: function cfa2(s, i, e) {
    "use strict";

    var t = e("62aa"),
        r = e.n(t);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/xuan-linkAddress/xuan-linkAddress-create-component', {
  'components/xuan-linkAddress/xuan-linkAddress-create-component': function componentsXuanLinkAddressXuanLinkAddressCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a082"));
  }
}, [['components/xuan-linkAddress/xuan-linkAddress-create-component']]]);
});
require('components/xuan-linkAddress/xuan-linkAddress.js');
__wxRoute = 'static/colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'static/colorui/components/cu-custom.js';

define('static/colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["static/colorui/components/cu-custom"], {
  "4f3b": function f3b(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("8e6d"),
        u = n.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    e["default"] = u.a;
  },
  "8e6d": function e6d(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                e = this.CustomBar,
                n = this.bgImage,
                a = "height:".concat(e, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (a = "".concat(a, "background-image:url(").concat(n, ");")), a;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            if (getCurrentPages().length < 2 && "undefined" !== typeof __wxConfig) {
              var e = "/" + __wxConfig.pages[0];
              return t.redirectTo({
                url: e
              });
            }

            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  d6b0: function d6b0(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  e536: function e536(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("d6b0"),
        u = n("4f3b");

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    var o = n("2877"),
        c = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['static/colorui/components/cu-custom-create-component', {
  'static/colorui/components/cu-custom-create-component': function staticColoruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e536"));
  }
}, [['static/colorui/components/cu-custom-create-component']]]);
});
require('static/colorui/components/cu-custom.js');

__wxRoute = 'pages/entryLogin/entryLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entryLogin/entryLogin.js';

define('pages/entryLogin/entryLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entryLogin/entryLogin"],{"18b0":function(n,t,e){},"1af5":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},"4a10":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("0acf");var a={data:function(){return{logo:"".concat(this.$env.img1,"beauty_icon@2x.png"),iv:"",encryptedData:""}},methods:{wxGetUserInfo:function(){var t=this;n.getUserInfo({provider:"weixin",success:function(n){t.iv=n.iv,t.encryptedData=n.encryptedData,t.login()},fail:function(n){}})},login:function(){var t=this;n.showLoading({title:"登录中..."}),n.login({provider:"weixin",success:function(e){var a=e.code;t.$request.phpTokenRequest(t.$api.GetWxMobile,t.$api.get,{Client:t.$api.CLIENT,Version:t.$api.VERSION,code:a,Iv:t.iv,EncryptedData:t.encryptedData}).then(function(e){var a=JSON.parse(e.data.data);200===e.data.flag?(t.ThirdLogin(a.unionId),n.setStorageSync("dataInfo",a)):n.showToast({title:e.data.msg,icon:"none"})})}})},ThirdLogin:function(t){var e=this;e.$request.phpTokenRequest(e.$api.ThirdLogin,e.$api.get,{Client:e.$api.CLIENT,Version:e.$api.VERSION,ThirdType:2,ThirdToken:t}).then(function(t){200===t.data.flag?(n.setStorageSync("userInfo",t.data.data),n.switchTab({url:"../index/index"})):430===t.data.flag?n.switchTab({url:"../me/me/me"}):n.showToast({title:t.data.msg,icon:"none"})})}},onShow:function(){void 0!==this.$api.Key&&n.switchTab({url:"../index/index",success:function(n){var t=getCurrentPages().pop();void 0!=t&&null!=t&&t.onLoad()}})}};t.default=a}).call(this,e("6e42")["default"])},"81ea":function(n,t,e){"use strict";e.r(t);var a=e("1af5"),i=e("aa39");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("99bb");var r=e("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"9a64d4fc",null);t["default"]=c.exports},"99bb":function(n,t,e){"use strict";var a=e("18b0"),i=e.n(a);i.a},aa39:function(n,t,e){"use strict";e.r(t);var a=e("4a10"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},c275:function(n,t,e){"use strict";(function(n){e("fbf9"),e("921b");a(e("66fd"));var t=a(e("81ea"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["c275","common/runtime","common/vendor"]]]);
});
require('pages/entryLogin/entryLogin.js');
__wxRoute = 'pages/evaluate/evaluate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/evaluate/evaluate.js';

define('pages/evaluate/evaluate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/evaluate/evaluate"],{"0e39":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("0acf");var n={data:function(){return{comment:"".concat(this.$env.img1,"pd_no_comment@2x.png"),write:"".concat(this.$env.img1,"pen@2x.png"),good:"".concat(this.$env.img1,"help@2x.png"),isCard:!1,isShow:!1,villageId:"",evaluationList:{}}},methods:{IsCard:function(t){this.isCard=t.detail.value},publishEvaluate:function(){t.navigateTo({url:"../publishEvaluate/publishEvaluate"})},getVillageEvaluation:function(){var e=this;e.$request.httpTokenRequest(e.$api.getVillageEvaluation,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId}).then(function(a){200===a.data.flag?e.evaluationList=a.data.data:t.showToast({title:a.data.msg,icon:"none"})})}},onLoad:function(t){this.villageId=t.villageId,this.getVillageEvaluation()}};e.default=n}).call(this,a("6e42")["default"])},"21e2":function(t,e,a){"use strict";var n=a("e518"),i=a.n(n);i.a},"3c93":function(t,e,a){"use strict";a.r(e);var n=a("77ad"),i=a("e6a6");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("51de"),a("21e2");var o=a("2877"),l=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"ec00ccd6",null);e["default"]=l.exports},"51de":function(t,e,a){"use strict";var n=a("fd94"),i=a.n(n);i.a},"5e45":function(t,e,a){"use strict";(function(t){a("fbf9"),a("921b");n(a("66fd"));var e=n(a("3c93"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"77ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},e518:function(t,e,a){},e6a6:function(t,e,a){"use strict";a.r(e);var n=a("0e39"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},fd94:function(t,e,a){}},[["5e45","common/runtime","common/vendor"]]]);
});
require('pages/evaluate/evaluate.js');
__wxRoute = 'pages/share/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/share/share.js';

define('pages/share/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/share/share"],{1918:function(e,t,a){"use strict";a.r(t);var s=a("84e0"),n=a("f8c5");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("d137");var i=a("2877"),o=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"93640abe",null);t["default"]=o.exports},"84e0":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=(e._self._c,e.__map(e.providerList,function(t,a){var s=e.isDisableButton(t);return{$orig:e.__get_orig(t),m0:s}}));e.$mp.data=Object.assign({},{$root:{l0:a}})},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},"91ad":function(e,t,a){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,s,n,r,i){try{var o=e[r](i),c=o.value}catch(u){return void a(u)}o.done?t(c):Promise.resolve(c).then(s,n)}function o(e){return function(){var t=this,a=arguments;return new Promise(function(s,n){var r=e.apply(t,a);function o(e){i(r,s,n,o,c,"next",e)}function c(e){i(r,s,n,o,c,"throw",e)}o(void 0)})}}var c={data:function(){return{logo:"".concat(this.$env.img1,"beauty_icon@2x.png"),title:"share",shareText:"游遍乡村",href:"".concat(this.$env.img1,"beauty_icon@2x.png"),image:"".concat(this.$env.img1,"share_image.png"),shareType:1,url:"",circleID:"",providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:""==this.url?"/pages/index/index":"/pages/"+this.url,imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",success:function(t){if("shareAppMessage:ok"==t.errMsg){var a=this;a.$request.httpTokenRequest(a.$api.getDynamicList,a.$api.get,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,circleId:a.circleID}).then(function(t){200===t.data.flag?console.log(e("分享成功"," at pages/share/share.vue:91")):mescroll&&mescroll.endErr()})}},fail:function(){"shareAppMessage:fail cancel"==res.errMsg||res.errMsg}}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(t){var a=this;this.userInfo=s.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.title=t.title,this.circleID=t.circleID,this.url=t.url,console.log(e(url," at pages/share/share.vue:122")),s.getProvider({service:"share",success:function(t){console.log(e("success",t," at pages/share/share.vue:126"));for(var s=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":s.push({name:"分享到微信好友",id:"weixin",sort:0}),s.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":s.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":s.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}a.providerList=s.sort(function(e,t){return e.sort-t.sort})},fail:function(t){console.log(e("获取分享通道失败",t," at pages/share/share.vue:166")),s.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(){var t=o(n.default.mark(function t(a){var r;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e("分享通道:"+a.id+"； 分享类型:"+this.shareType," at pages/share/share.vue:176")),this.shareText||1!==this.shareType&&0!==this.shareType){t.next=4;break}return s.showModal({content:"分享内容不能为空",showCancel:!1}),t.abrupt("return");case 4:if(this.image||2!==this.shareType&&0!==this.shareType){t.next=7;break}return s.showModal({content:"分享图片不能为空",showCancel:!1}),t.abrupt("return");case 7:r={provider:a.id,scene:a.type&&"WXSenceTimeline"===a.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(t){console.log(e("success",t," at pages/share/share.vue:199")),s.showModal({content:"分享成功",showCancel:!1})},fail:function(t){console.log(e("fail",t," at pages/share/share.vue:206")),s.showModal({content:t.errMsg,showCancel:!1})},complete:function(){console.log(e("分享操作结束!"," at pages/share/share.vue:213"))}},t.t0=this.shareType,t.next=0===t.t0?11:1===t.t0?16:2===t.t0?18:5===t.t0?20:24;break;case 11:return r.summary=this.shareText,r.imageUrl=this.image,r.title="欢迎体验uniapp",r.href="https://uniapp.dcloud.io",t.abrupt("break",25);case 16:return r.summary=this.shareText,t.abrupt("break",25);case 18:return r.imageUrl=this.image,t.abrupt("break",25);case 20:return r.imageUrl=this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",r.title="欢迎体验uniapp",r.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},t.abrupt("break",25);case 24:return t.abrupt("break",25);case 25:if(0!==r.type||"iOS"!==plus.os.name){t.next=29;break}return t.next=28,this.compress();case 28:r.imageUrl=t.sent;case 29:1===r.type&&"qq"===r.provider&&(r.href="https://uniapp.dcloud.io",r.title="欢迎体验uniapp"),s.share(r);case 31:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}(),radioChange:function(t){console.log(e("type:"+t.detail.value," at pages/share/share.vue:254")),this.shareType=parseInt(t.detail.value)},chooseImage:function(){var e=this;s.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(t){e.image=t.tempFilePaths[0]},fail:function(e){}})},compress:function(){console.log(e("开始压缩"," at pages/share/share.vue:288"));var t=this.image;return new Promise(function(a){var n=plus.io.convertAbsoluteFileSystem(t.replace("file://",""));console.log(e("after"+n," at pages/share/share.vue:292")),plus.io.resolveLocalFileSystemURL(n,function(n){n.file(function(n){console.log(e("getFile:"+JSON.stringify(n)," at pages/share/share.vue:296")),n.size>20480&&plus.zip.compressImage({src:t,dst:t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(s){console.log(e("success zip****"+s.size," at pages/share/share.vue:306"));var n=t.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");a(n)},function(e){s.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(t){console.log(e("Resolve file URL failed: "+t.message," at pages/share/share.vue:318")),s.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};t.default=c}).call(this,a("0de9")["default"],a("6e42")["default"])},bafc:function(e,t,a){},d137:function(e,t,a){"use strict";var s=a("bafc"),n=a.n(s);n.a},e095:function(e,t,a){"use strict";(function(e){a("fbf9"),a("921b");s(a("66fd"));var t=s(a("1918"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},f8c5:function(e,t,a){"use strict";a.r(t);var s=a("91ad"),n=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,function(){return s[e]})}(r);t["default"]=n.a}},[["e095","common/runtime","common/vendor"]]]);
});
require('pages/share/share.js');
__wxRoute = 'pages/chat/villagerList/villagerList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/villagerList/villagerList.js';

define('pages/chat/villagerList/villagerList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/villagerList/villagerList"],{"05f1":function(t,e,n){},"1e41":function(t,e,n){"use strict";(function(t){n("fbf9"),n("921b");a(n("66fd"));var e=a(n("ceff"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2a09":function(t,e,n){"use strict";var a=n("05f1"),i=n.n(a);i.a},ab5a:function(t,e,n){"use strict";n.r(e);var a=n("b927"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},ae2c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b927:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("0acf");a(n("e1b1"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{Conversation:null,TabCur:0,scrollLeft:0,value:"0",relateBg:"".concat(this.$env.img1,"ranking.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),click:"".concat(this.$env.img1,"help@2x.png"),add:"".concat(this.$env.img1,"weixin_add@2x.png"),weixin_icon:"".concat(this.$env.img1,"weixin_icon@2x.png"),chat_p:"".concat(this.$env.img1,"chat_p@2x.png"),PageIndex:1,PageSize:10,chatInfo:[]}},methods:{getChatroomVillagerList:function(){var e=this;e.$request.httpTokenRequest(e.$api.getChatroomVillagerList,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,PageIndex:e.PageIndex,PageSize:e.PageSize}).then(function(n){200===n.data.flag?e.chatInfo=n.data.data.data_list:t.showToast({title:n.data.msg,icon:"none"})})},shareSumbit:function(){t.navigateTo({url:"../../share/share"})}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.getChatroomVillagerList()}};e.default=i}).call(this,n("6e42")["default"])},ceff:function(t,e,n){"use strict";n.r(e);var a=n("ae2c"),i=n("ab5a");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("2a09");var c=n("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"06488a62",null);e["default"]=r.exports}},[["1e41","common/runtime","common/vendor"]]]);
});
require('pages/chat/villagerList/villagerList.js');
__wxRoute = 'pages/chat/chatLine/chatLine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chatLine/chatLine.js';

define('pages/chat/chatLine/chatLine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chatLine/chatLine"],{27325:function(t,e,n){"use strict";n.r(e);var a=n("59b3"),i=n("bb82");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("7fd4");var c=n("2877"),s=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"f81bb6cc",null);e["default"]=s.exports},"576a":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("0acf");var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"b5ca"))},o={components:{MescrollUni:i},data:function(){return{InputBottom:0,TabCur:0,scrollLeft:0,value:"0",relateBg:"".concat(this.$env.img1,"ranking.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),unclick:"".concat(this.$env.img1,"help@2x.png"),click:"".concat(this.$env.img1,"red_help.png"),isShow:!1,Longitude:"",Latitude:"",inputContent:"",page_info:{page_count:0,page_no:0,page_size:10,total_size:0},mescroll:null,dynamicsType:"1",dynamicsList:[],contentId:"",nav:[{name:"最新"},{name:"热门"},{name:"关注"}]}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},setNews:function(){var e=this,n=this;n.$request.phpTokenRequest(n.$api.adddynamic,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,DynamicContent:n.inputContent,CircleID:n.contentId,DynamicType:1}).then(function(a){console.log(t(a," at pages/chat/chatLine/chatLine.vue:172")),200===a.data.flag&&(n.isShow=!1,n.downCallback(e.mescroll))})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.dynamicsType=this.TabCur+1,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.downCallback(this.mescroll)},goUpload:function(e){console.log(t("33333"," at pages/chat/chatLine/chatLine.vue:186")),a.navigateTo({url:"../publishDynamic/publishDynamic"})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.page_info.page_no=0,this.dynamicsList=[],this.upCallback(this.mescroll)},upCallback:function(t){var e=this;e.Latitude=a.getStorageSync("getLatitude"),e.Longitude=a.getStorageSync("getLongitude"),e.$request.httpTokenRequest(e.$api.getDynamicList,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,PageIndex:e.page_info.page_no+1,PageSize:e.page_info.page_size,dynamicsType:e.dynamicsType,Longitude:e.Longitude,Latitude:e.Latitude}).then(function(n){if(200===n.data.flag){for(var a=0;a<n.data.data.data_list.length;a++)e.dynamicsList.push(n.data.data.data_list[a]);e.page_info=n.data.data.page_info,t&&t.endBySize(n.data.data.data_list.length,e.page_info.total_size,null)}else t&&t.endErr()})},behaviorClick:function(t){this.addParise(t)},commentClick:function(e){this.contentId=e,console.log(t(e+this.contentId," at pages/chat/chatLine/chatLine.vue:241")),this.isShow=!this.isShow},addParise:function(e){var n=this,a=this;a.$request.phpTokenRequest(a.$api.adddynamic,a.$api.get,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,CircleID:e,DynamicType:2}).then(function(e){console.log(t(e," at pages/chat/chatLine/chatLine.vue:255")),200===e.data.flag&&n.downCallback(n.mescroll)})},evaPraise:function(t){var e=this;e.$request.phpTokenRequest(e.$api.evaPraise,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,DynamicID:t}).then(function(t){t.data.flag})},shareClick:function(t){a.navigateTo({url:"../../share/share?url=chat/chatLine/chatLine&circleID="+t})}},onShow:function(){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.downCallback(this.mescroll)}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"59b3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"79bd":function(t,e,n){},"7fd4":function(t,e,n){"use strict";var a=n("79bd"),i=n.n(a);i.a},bb82:function(t,e,n){"use strict";n.r(e);var a=n("576a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},ef89:function(t,e,n){"use strict";(function(t){n("fbf9"),n("921b");a(n("66fd"));var e=a(n("27325"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["ef89","common/runtime","common/vendor"]]]);
});
require('pages/chat/chatLine/chatLine.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0653":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},4329:function(t,e,i){"use strict";i.r(e);var n=i("a7a7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},7194:function(t,e,i){"use strict";i.r(e);var n=i("0653"),a=i("4329");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("f047");var l=i("2877"),c=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"522d2e1a",null);e["default"]=c.exports},a7a7:function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0acf");var a=function(){return Promise.all([i.e("common/vendor"),i.e("components/mescroll-uni/mescroll-uni")]).then(i.bind(null,"b5ca"))},o={components:{MescrollUni:a},data:function(){return{village_1:"".concat(this.$env.img1,"village_1.png"),village_2:"".concat(this.$env.img1,"village_2.png"),village_3:"".concat(this.$env.img1,"village_3.png"),village_font2:"".concat(this.$env.img1,"village_font2.png"),village_font1:"".concat(this.$env.img1,"village_font1.png"),villager:"".concat(this.$env.img1,"village_banner@2x.png"),village_con_02:"".concat(this.$env.img1,"village_con_02@2x.png"),ivillage_message:"".concat(this.$env.img1,"ivillage_message@2x.png"),village_icon_04:"".concat(this.$env.img1,"village_icon_04@2x.png"),isVillager:!0,isRanking:!0,longitude:0,latitude:0,cuIcon:[{name:"appreciate",isShow:!0},{name:"check",isShow:!0}],list:[{img:"".concat(this.$env.img1,"icon_01@2x.png"),font:"村景"},{img:"".concat(this.$env.img1,"icon_01@2x.png"),font:"特色风采"},{img:"".concat(this.$env.img1,"icon_01@2x.png"),font:"聊天室"}],bannerPic:"",indexInfo:{},beautyInfo:[],page_info:{page_count:0,page_no:0,page_size:10,total_size:0},mescroll:null}},onShow:function(){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.getLocation(),this.upCallback()},methods:{pagesClick:function(e){var i="https://m.ncweilv.com/h5/find/article.html?ids="+e;t.navigateTo({url:"../h5/h5?url="+i})},voteList:function(){t.navigateTo({url:"../voteList/voteList"})},villageClick:function(e){t.navigateTo({url:"../details/details?villageId="+e})},scroll:function(t){console.log(n(t," at pages/index/index.vue:237")),this.old.scrollTop=t.detail.scrollTop},search:function(){t.navigateTo({url:"../serch/serch"})},listClick:function(e){74==e?t.navigateTo({url:"../feature/feature?villageId="+this.indexInfo.village_id}):77==e?t.switchTab({url:"../chat/chatLine/chatLine"}):78==e&&t.switchTab({url:"../chat/chatList/chatList"})},voteClick:function(e){t.navigateTo({url:"../details/details?villageId="+e+"&longitude="+this.longitude+"&latitude="+this.latitude})},detailsClick:function(){t.navigateTo({url:"../details/details?villageId="+this.indexInfo.village_id+"&longitude="+this.longitude+"&latitude="+this.latitude})},getLocation:function(e){var i=this;t.getLocation({type:"gcj02",success:function(e){i.latitude=e.latitude,i.longitude=e.longitude,t.setStorageSync("getLatitude",i.latitude),t.setStorageSync("getLongitude",i.longitude),i.$request.httpTokenRequest(i.$api.currentCity,i.$api.get,{latitude:i.latitude,longitude:i.longitude,Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION,searchType:1}).then(function(t){200===t.data.flag&&i.getIndex(i.latitude,i.longitude,t.data.data.area_id)})}})},getIndex:function(e,i,n){var a=this;a.$request.httpTokenRequest(a.$api.getSmallProceduresIndex,a.$api.get,{latitude:e,longitude:a.longitude,areaId:n,Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION}).then(function(e){200===e.data.flag?(a.bannerPic=e.data.data.top_img_url,a.indexInfo=e.data.data):t.showToast({title:e.data.msg,icon:"none"})})},vote:function(e){var i=this;console.log(n(i.latitude,e," at pages/index/index.vue:325")),i.$request.httpTokenRequest(i.$api.addVillageVoteNum,i.$api.get,{latitude:i.latitude,longitude:i.longitude,areaId:e,Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION}).then(function(e){console.log(n(e," at pages/index/index.vue:334")),200===e.data.flag?(t.showToast({title:e.data.data,icon:"none"}),i.getLocation()):t.showToast({title:e.data.msg,icon:"none"})})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.page_info.page_no=0,this.beautyInfo=[],this.upCallback(this.mescroll)},upCallback:function(t){var e=this;this.$request.httpTokenRequest(this.$api.getInformation,this.$api.get,{pageIndex:e.page_info.page_no+1,pageSize:e.page_info.page_size,Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION}).then(function(i){if(200===i.data.flag){for(var n=0;n<i.data.data.data_list.length;n++)e.beautyInfo.push(i.data.data.data_list[n]);e.page_info=i.data.data.page_info,t&&t.endBySize(i.data.data.data_list.length,e.page_info.total_size,null)}else t&&t.endErr()})}}};e.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])},b1e3:function(t,e,i){"use strict";(function(t){i("fbf9"),i("921b");n(i("66fd"));var e=n(i("7194"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},f047:function(t,e,i){"use strict";var n=i("fd8c"),a=i.n(n);a.a},fd8c:function(t,e,i){}},[["b1e3","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/me/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me/me.js';

define('pages/me/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me/me"],{"267f":function(n,e,i){"use strict";i.r(e);var t=i("4016"),a=i.n(t);for(var o in t)"default"!==o&&function(n){i.d(e,n,function(){return t[n]})}(o);e["default"]=a.a},"335b":function(n,e,i){},4016:function(n,e,i){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0acf");var a={data:function(){return{no_homestay:"".concat(this.$env.img1,"no_homestay@2x.png"),meMsg:"".concat(this.$env.img1,"me-msg.png"),memberInfo:{},name:"",head:"",top:[{p:"我的动态",num:0,id:"1"},{p:"我的关注",num:0,id:"2"},{p:" 我的粉丝",num:0,id:"3"}],order:[{img:"".concat(this.$env.img1,"me-icon-1@2x.png"),p:"待付款",id:"1",num:0},{img:"".concat(this.$env.img1,"me-icon-2@2x.png"),p:"待消费",id:"2",num:0},{img:"".concat(this.$env.img1,"me-icon-3@2x.png"),p:" 待点评",id:"3",num:0},{img:"".concat(this.$env.img1,"me-icon-4@2x.png"),p:" 退款/售后",id:"4"}],functions:[{img:"".concat(this.$env.img1,"me-icon-01@2x.png"),p:"我的故里",id:"1"},{img:"".concat(this.$env.img1,"me-icon-02@2x.png"),p:"我的发布",id:"2"},{img:"".concat(this.$env.img1,"me-icon-03@2x.png"),p:" 我的贡献值",id:"3"},{img:"".concat(this.$env.img1,"me-icon-04@2x.png"),p:" 邀请好友",id:"4"}],service:[{img:"".concat(this.$env.img1,"me-icon-05@2x.png"),p:"信息管理",id:"1",msg:""},{img:"".concat(this.$env.img1,"me-icon-06@2x.png"),p:"我是村管理",id:"2",msg:""},{img:"".concat(this.$env.img1,"me-icon-07@2x.png"),p:" 我是房主",id:"3",msg:"发布房源"},{img:"".concat(this.$env.img1,"me-icon-08@2x.png"),p:" 我是商户",id:"4",msg:"发布景点农家乐"},{img:"".concat(this.$env.img1,"me-icon-09@2x.png"),p:" 联系客服",id:"5",msg:""}],serviceTwo:[{img:"".concat(this.$env.img1,"me-icon-05@2x.png"),p:"信息管理",id:"1",msg:""},{img:"".concat(this.$env.img1,"me-icon-07@2x.png"),p:" 我是房主",id:"3",msg:"发布房源"},{img:"".concat(this.$env.img1,"me-icon-08@2x.png"),p:" 我是商户",id:"4",msg:"发布景点农家乐"},{img:"".concat(this.$env.img1,"me-icon-09@2x.png"),p:" 联系客服",id:"5",msg:""}]}},methods:{newsClick:function(){n.navigateTo({url:"../../meInfo/newsList/newsList"})},nameClick:function(e){n.navigateTo({url:"../../meInfo/nikeName/nikeName?name="+e})},memberInit:function(){var n=this;n.$request.phpTokenRequest(n.$api.GetMemberInfo,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION}).then(function(e){200===e.data.flag&&(n.memberInfo=e.data.data,n.head=n.memberInfo.member_head,n.name=n.memberInfo.member_nickname,console.log(t(n.memberInfo.is_villager," at pages/me/me/me.vue:239")),n.order[0].num=n.memberInfo.order_count_pay,n.order[1].num=n.memberInfo.order_count_checkin,n.order[2].num=n.memberInfo.order_count_end)})},friendClick:function(e){"2"==e?n.navigateTo({url:"../../meInfo/attention/attention"}):"3"==e&&n.navigateTo({url:"../../meInfo/fans/fans"})},editClick:function(e,i){n.navigateTo({url:"../../meInfo/personInfo/personInfo?name="+e+"&head="+i})},fansInit:function(){var n=this;n.$request.httpTokenRequest(n.$api.getFansNum,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION}).then(function(e){200===e.data.flag&&(n.top[0].num=e.data.data.my_dynamic_count,n.top[1].num=e.data.data.attention_num,n.top[2].num=e.data.data.fans_num)})},orderClick:function(){n.navigateTo({url:"../../order/orderList/orderList"})},functionsClick:function(e){if("1"==e){var i=this;"1"==i.memberInfo.is_villager?n.navigateTo({url:"../../details/details?villageId="+i.memberInfo.village_id}):n.navigateTo({url:"../../serch/serch"})}else"2"==e?n.navigateTo({url:"../../chat/publishDynamic/publishDynamic"}):"3"==e?n.navigateTo({url:"../../ranking/ranking?villageId="+this.memberInfo.village_id}):"4"==e&&n.navigateTo({url:"../../share/share?url=me/me/me"})},moreClick:function(e){var i="https://m.ncweilv.com/h5/cooperation/publicity.html";"1"==e?n.navigateTo({url:"../../meInfo/personInfo/personInfo?name="+this.name+"&head="+this.head}):"2"==e?n.navigateTo({url:"../../villageSet/villageManager/villageManager"}):"3"==e?n.navigateTo({url:"../../h5/h5?url="+i}):"4"==e?n.navigateTo({url:"../../h5/h5?url="+i}):"5"==e&&n.makePhoneCall({phoneNumber:"0731-84788888"})}},onShow:function(){this.userInfo=n.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,void 0!==this.$api.Key?(this.memberInit(),this.fansInit()):n.navigateTo({url:"../../login/login"})}};e.default=a}).call(this,i("6e42")["default"],i("0de9")["default"])},"4ad8":function(n,e,i){"use strict";var t=i("9efa"),a=i.n(t);a.a},"99a8":function(n,e,i){"use strict";(function(n){i("fbf9"),i("921b");t(i("66fd"));var e=t(i("c2c5"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("6e42")["createPage"])},"9efa":function(n,e,i){},b3fa:function(n,e,i){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=n.functionsClick(n.item.id))},a=[];i.d(e,"a",function(){return t}),i.d(e,"b",function(){return a})},c2c5:function(n,e,i){"use strict";i.r(e);var t=i("b3fa"),a=i("267f");for(var o in a)"default"!==o&&function(n){i.d(e,n,function(){return a[n]})}(o);i("e947"),i("4ad8");var m=i("2877"),c=Object(m["a"])(a["default"],t["a"],t["b"],!1,null,"d2486ebc",null);e["default"]=c.exports},e947:function(n,e,i){"use strict";var t=i("335b"),a=i.n(t);a.a}},[["99a8","common/runtime","common/vendor"]]]);
});
require('pages/me/me/me.js');
__wxRoute = 'pages/chat/chatDialogue/chatDialogue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chatDialogue/chatDialogue.js';

define('pages/chat/chatDialogue/chatDialogue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chatDialogue/chatDialogue"],{"577b":function(t,n,u){"use strict";u.r(n);var e=u("d88f"),o=u.n(e);for(var f in e)"default"!==f&&function(t){u.d(n,t,function(){return e[t]})}(f);n["default"]=o.a},6653:function(t,n,u){"use strict";var e=u("be19"),o=u.n(e);o.a},"990f":function(t,n,u){"use strict";(function(t){u("fbf9"),u("921b");e(u("66fd"));var n=e(u("c1b2"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,u("6e42")["createPage"])},be19:function(t,n,u){},c1b2:function(t,n,u){"use strict";u.r(n);var e=u("e72f"),o=u("577b");for(var f in o)"default"!==f&&function(t){u.d(n,t,function(){return o[t]})}(f);u("6653");var a=u("2877"),c=Object(a["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},d88f:function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},getInfo:function(){}},onLoad:function(){}};n.default=e},e72f:function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return o})}},[["990f","common/runtime","common/vendor"]]]);
});
require('pages/chat/chatDialogue/chatDialogue.js');
__wxRoute = 'pages/chat/publishDynamic/publishDynamic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/publishDynamic/publishDynamic.js';

define('pages/chat/publishDynamic/publishDynamic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/publishDynamic/publishDynamic"],{1605:function(t,e,i){"use strict";i.r(e);var a=i("80d1"),n=i("2ec4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("61d4");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"7dc07e8e",null);e["default"]=u.exports},"2ec4":function(t,e,i){"use strict";i.r(e);var a=i("393c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"393c":function(t,e,i){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0acf");var n={data:function(){return{modalName:null,textareaAValue:"",imgList:[],picUrl:"",Longitude:"",Latitude:"",pic:[{name:"相册",id:"1"},{name:"拍照",id:"2"}],locationName:""}},methods:{textareaAInput:function(t){this.textareaAValue=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},selectPic:function(e){var i=this;if(1==e)this.hideModal(),t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=i.imgList.length?(i.imgList=i.imgList.concat(t.tempFilePaths),i.upload(i.imgList[0])):(i.imgList=t.tempFilePaths,i.upload(i.imgList[0]))}});else if(2==e){var n=this;this.hideModal(),t.chooseImage({count:1,sourceType:["camera"],success:function(e){var i=e.tempFilePaths;t.saveFile({tempFilePath:i[0],success:function(t){var e=t.savedFilePath;console.log(a(e," at pages/chat/publishDynamic/publishDynamic.vue:117")),n.imgList.length,n.imgList.push(e),n.upload(n.imgList[0])}})}})}},upload:function(e){var i=this;t.uploadFile({url:i.$env.baseUrl+i.$api.fileUpload+"?type=grouptour",filePath:e,name:"file",success:function(t){var e=JSON.parse(t.data);i.picUrl=e.data[0]}})},ViewImage:function(e){t.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var i=this;t.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&i.imgList.splice(e.currentTarget.dataset.index,1)}})},sumbit:function(){if(""==this.textareaAValue)t.showToast({title:"请填写动态内容",icon:"none"});else if(0==this.imgList.length)t.showToast({title:"请添加照片",icon:"none"});else if(""==this.locationName)t.showToast({title:"请选择你所在位置",icon:"none"});else{var e=this;e.Latitude=t.getStorageSync("getLatitude"),e.Longitude=t.getStorageSync("getLongitude"),e.$request.httpTokenRequest(e.$api.AddTourist,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,CircleContent:e.textareaAValue,ImageUrl:e.picUrl,Longitude:e.Latitude,Latitude:e.Longitude}).then(function(e){200===e.data.flag?(t.showToast({title:e.data.msg,icon:"none"}),t.navigateBack()):t.showToast({title:e.data.msg,icon:"none"})})}},getLocation:function(){t.chooseLocation({success:function(t){console.log(a(t," at pages/chat/publishDynamic/publishDynamic.vue:216")),this.locationName=t.address}})},getAddress:function(e,i){var n=this;n.$request.httpTokenRequest(n.$api.getAddress,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,Longitude:i,Latitude:e}).then(function(e){console.log(a(e," at pages/chat/publishDynamic/publishDynamic.vue:230")),200===e.data.flag?(n.locationName=e.data.data.address,console.log(a(n.locationName," at pages/chat/publishDynamic/publishDynamic.vue:233"))):t.showToast({title:e.data.msg,icon:"none"})})}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key;var e=this;t.getLocation({type:"gcj02",success:function(t){e.Latitude=t.latitude,e.Longitude=t.longitude,e.getAddress(e.Latitude,e.Longitude)}})}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},"61d4":function(t,e,i){"use strict";var a=i("956b"),n=i.n(a);n.a},"7b5c":function(t,e,i){"use strict";(function(t){i("fbf9"),i("921b");a(i("66fd"));var e=a(i("1605"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"80d1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"956b":function(t,e,i){}},[["7b5c","common/runtime","common/vendor"]]]);
});
require('pages/chat/publishDynamic/publishDynamic.js');
__wxRoute = 'pages/addHometown/addHometown';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/addHometown/addHometown.js';

define('pages/addHometown/addHometown.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addHometown/addHometown"],{4297:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},5995:function(t,a,e){"use strict";e.r(a);var i=e("b3b9"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},6834:function(t,a,e){"use strict";var i=e("786d"),n=e.n(i);n.a},"786d":function(t,a,e){},9957:function(t,a,e){"use strict";e.r(a);var i=e("4297"),n=e("5995");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("6834");var d=e("2877"),o=Object(d["a"])(n["default"],i["a"],i["b"],!1,null,"2ecfe7fa",null);a["default"]=o.exports},b3b9:function(t,a,e){"use strict";(function(t,i){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("0acf");var n=function(){return e.e("components/xuan-linkAddress/xuan-linkAddress").then(e.bind(null,"a082"))},s={components:{linkAddress:n},data:function(){return{pull:"".concat(this.$env.img1,"village-pull@2x.png"),height:"500px",provinceAddress:"",cityAddress:"",areaAddress:"",townAddress:"",villageAddress:"",ads:{},title:"map",sss:"",latitude:39.909,longitude:116.39742,covers:[{latitude:39.909,longitude:116.39742,iconPath:"".concat(this.$env.img1,"map-location.png"),width:30,height:58},{latitude:39.9,longitude:116.39,iconPath:"".concat(this.$env.img1,"map-location.png"),width:30,height:58}],name:""}},methods:{getName:function(t){this.name=t.target.value},popup_bottom:function(){this.height="550rpx",this.show_popup()},show_popup:function(){this.$refs.linkAddress.show()},confirmCallback:function(){this.ads=t.getStorageSync("commit_address"),this.provinceAddress=this.ads.province,this.cityAddress=this.ads.city,this.areaAddress=this.ads.city,this.townAddress=this.ads.town,this.villageAddress=this.ads.village;var a=this.ads.province+this.ads.city+this.ads.district+this.ads.town+this.ads.city+this.ads.village;this.getLogAndLat(a)},getMap:function(){var t=this.ads.province+this.ads.city+this.ads.district+this.ads.town+this.ads.city+this.ads.village+this.name;this.getLogAndLat(t)},addSumbit:function(){var t=this;t.$request.httpTokenRequest(t.$api.addMyVillage,t.$api.get,{Key:t.$api.Key||userInfo.key,Client:t.$api.CLIENT,Version:t.$api.VERSION,proviceId:t.ads.Provice_id,cityId:t.ads.City_id,areaId:t.ads.Area_id,townId:t.ads.Town_id,villageId:t.ads.village_id,villageName:t.name||t.villageAddress}).then(function(t){console.log(i(t," at pages/addHometown/addHometown.vue:133")),t.data.flag})},getLogAndLat:function(a){var e=this;e.$request.httpTokenRequest(e.$api.getLogAndLat,e.$api.get,{Key:e.$api.Key||userInfo.key,Client:e.$api.CLIENT,Version:e.$api.VERSION,address:a}).then(function(a){console.log(i(a," at pages/addHometown/addHometown.vue:149")),200===a.data.flag?(e.covers[0].latitude=parseFloat(a.data.data.lat),e.covers[0].longitude=parseFloat(a.data.data.lng),e.covers[1].latitude=parseFloat(a.data.data.lat),e.covers[1].longitude=parseFloat(a.data.data.lng),e.latitude=parseFloat(a.data.data.lat),e.longitude=parseFloat(a.data.data.lng)):t.showToast({title:a.data.msg,icon:"none"})})}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),t.removeStorageSync("commit_address")}};a.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},fbb1:function(t,a,e){"use strict";(function(t){e("fbf9"),e("921b");i(e("66fd"));var a=i(e("9957"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])}},[["fbb1","common/runtime","common/vendor"]]]);
});
require('pages/addHometown/addHometown.js');
__wxRoute = 'pages/villageSet/applyVillager/applyVillager';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageSet/applyVillager/applyVillager.js';

define('pages/villageSet/applyVillager/applyVillager.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageSet/applyVillager/applyVillager"],{"0eac":function(t,n,e){"use strict";var a=e("d072"),i=e.n(a);i.a},"3a91":function(t,n,e){"use strict";e.r(n);var a=e("bb18"),i=e("de95");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("0eac");var s=e("2877"),c=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"4c9f0145",null);n["default"]=c.exports},6343:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("0acf");var i=function(){return e.e("components/xuan-linkAddress/xuan-linkAddress").then(e.bind(null,"a082"))},o={components:{linkAddress:i},data:function(){return{uncheck:!0,apply_check:"".concat(this.$env.img1,"apply_check.png"),apply_uncheck:"".concat(this.$env.img1,"apply_uncheck.png"),modalName:null,msgInfo:{},height:"500px",address:"",ads:{},unbtm:!0,info:{}}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},showMsg:function(t){this.modalName=t.currentTarget.dataset.target,this.msgInit(13)},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},watchClick:function(){t.navigateTo({url:"../../h5/h5?url="+this.msgInfo.doc_content})},msgInit:function(n){var e=this;e.$request.phpTokenRequest(e.$api.GetDocument,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,Type:n}).then(function(n){200===n.data.flag?(e.msgInfo=n.data.data,console.log(a(e.msgInfo.doc_content+e.msgInfo.doc_contentdoc_jump_type," at pages/villageSet/applyVillager/applyVillager.vue:129"))):t.showToast({title:n.data.msg,icon:"none"})})},popup_bottom:function(){this.height="550rpx",this.show_popup()},show_popup:function(){this.$refs.linkAddress.show()},confirmCallback:function(){this.ads=t.getStorageSync("commit_address"),this.address=this.ads.province+this.ads.city+this.ads.district+this.ads.town+this.ads.city+this.ads.village},btmSumbit:function(){if(""!=this.address)if(this.uncheck)t.showToast({title:"请勾选村管理员协议",icon:"none"});else{this.unbtm=!1;var n=this;n.$request.phpTokenRequest(n.$api.AskforAdmin,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,VillageID:n.villageId,Provice_id:n.ads.Provice_id,City_id:n.ads.City_id,Area_id:n.ads.Area_id,Town_id:n.ads.Town_id}).then(function(n){200===n.data.flag?(t.showToast({title:n.data.msg,icon:"none"}),t.navigateBack()):t.showToast({title:n.data.msg,icon:"none"})})}else t.showToast({title:"请选择地区",icon:"none"})}},onLoad:function(n){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=n.villageId,this.info=t.getStorageSync("dataInfo"),this.msgInit(12)}};n.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},"9c94":function(t,n,e){"use strict";(function(t){e("fbf9"),e("921b");a(e("66fd"));var n=a(e("3a91"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},bb18:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.uncheck=!t.uncheck})},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},d072:function(t,n,e){},de95:function(t,n,e){"use strict";e.r(n);var a=e("6343"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a}},[["9c94","common/runtime","common/vendor"]]]);
});
require('pages/villageSet/applyVillager/applyVillager.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"02e4":function(e,n,t){"use strict";t.r(n);var a=t("900c"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=i.a},6815:function(e,n,t){"use strict";var a=t("e886"),i=t.n(a);i.a},"8fa7":function(e,n,t){"use strict";(function(e){t("fbf9"),t("921b");a(t("66fd"));var n=a(t("c4e6"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"900c":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("0acf");var i={data:function(){return{logo:"".concat(this.$env.img1,"beauty_icon@2x.png"),font:"".concat(this.$env.img1,"village_beauty@2x.png"),isCanUse:e.getStorageSync("isCanUse")||!0,modalName:null,msgInfo:{},openid:"",session_key:"",userInfo:{},loginInfo:{}}},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},msgInit:function(){var n=this;n.$request.phpTokenRequest(n.$api.GetDocument,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,Type:37}).then(function(t){200===t.data.flag?n.msgInfo=t.data.data:e.showToast({title:t.data.msg,icon:"none"})})},getPhoneNumber:function(n){var t=this;"getPhoneNumber:fail user deny"==n.detail.errMsg||(e.showLoading({title:"登录中..."}),e.login({provider:"weixin",success:function(a){var i=a.code;t.$request.phpTokenRequest(t.$api.GetWxMobile,t.$api.get,{Client:t.$api.CLIENT,Version:t.$api.VERSION,EncryptedData:n.detail.encryptedData,Iv:n.detail.iv,code:i}).then(function(n){if(e.hideLoading(),200===n.data.flag){var a=JSON.parse(n.data.data);t.updateUserInfo(a.phoneNumber)}else e.showToast({title:n.data.msg,icon:"none"})})}}))},updateUserInfo:function(n){var t=this;t.$request.phpTokenRequest(t.$api.WxBindMobile,t.$api.get,{Client:t.$api.CLIENT,Version:t.$api.VERSION,ThirdType:2,ThirdToken:t.userInfo.unionId,MemberPhone:n,MemberNickName:t.userInfo.nickName,MemberHead:t.userInfo.avatarUrl}).then(function(n){200===n.data.flag?(e.setStorageSync("userInfo",n.data.data),e.switchTab({url:"../index/index"})):e.showToast({title:n.data.msg,icon:"none"})})}},onLoad:function(){console.log(a(this.$api.Getopenid," at pages/login/login.vue:150")),this.userInfo=e.getStorageSync("dataInfo")}};n.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])},c4e6:function(e,n,t){"use strict";t.r(n);var a=t("e808"),i=t("02e4");for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);t("6815");var u=t("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"9ec337a8",null);n["default"]=r.exports},e808:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})},e886:function(e,n,t){}},[["8fa7","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/details/details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/details/details.js';

define('pages/details/details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"0480":function(i,e,t){},"0512":function(i,e,t){"use strict";(function(i,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("0acf");var n={data:function(){return{background:["color1","color2","color3"],current:0,modalName:null,thing_manager:"".concat(this.$env.img1,"thing_manager.png"),detailsBg:"".concat(this.$env.img1,"details_pic.png"),relateBg:"".concat(this.$env.img1,"ranking.png"),location:"".concat(this.$env.img1,"Location@2x.png"),returns:"".concat(this.$env.img1,"return@2x.png"),people:"".concat(this.$env.img1,"villager@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),vote:"".concat(this.$env.img1,"vote@2x.png"),manage:"".concat(this.$env.img1,"plus@2x.png"),mark:"".concat(this.$env.img1,"goldl_03@2x.png"),bg:"".concat(this.$env.img1,"jx@2x.png"),arrow:"".concat(this.$env.img1,"More@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),unclick:"".concat(this.$env.img1,"help@2x.png"),click:"".concat(this.$env.img1,"red_help.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),cancel:"".concat(this.$env.img1,"x@2x.png"),noComment:"".concat(this.$env.img1,"pd_no_comment@2x.png"),villageId:"",longitude:"",latitude:"",detailsInfo:[],unAttention:!0,str:"关注",videoImage:"",villageListInfo:{},list:[{img:"".concat(this.$env.img1,"icon_01@2x.png"),font:"村景",id:"1"},{img:"".concat(this.$env.img1,"details_2.png"),font:"特色风采",id:"2"},{img:"".concat(this.$env.img1,"details_3.png"),font:"民宿",id:"3"},{img:"".concat(this.$env.img1,"details_4.png"),font:"景点",id:"4"},{img:"".concat(this.$env.img1,"details_5.png"),font:"村动态",id:"5"},{img:"".concat(this.$env.img1,"details_6.png"),font:"土特产",id:"6"},{img:"".concat(this.$env.img1,"details_7.png"),font:"农家乐",id:"7"}]}},methods:{evaluteListClick:function(){i.navigateTo({url:"../evaluate/evaluate?villageId="+this.villageId})},addVillageEvaluatinParise:function(e,t){var a=this;1==t?a.$request.httpTokenRequest(a.$api.addVillageEvaluatinParise,a.$api.get,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,evaluateId:e,num:-1}).then(function(e){200===e.data.flag?a.villageDynamics():i.showToast({title:e.data.msg,icon:"none"})}):a.$request.httpTokenRequest(a.$api.addVillageEvaluatinParise,a.$api.get,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,evaluateId:e,num:1}).then(function(e){200===e.data.flag?a.villageDynamics():i.showToast({title:e.data.msg,icon:"none"})})},shareClick:function(e){i.navigateTo({url:"../share/share?url=chat/chatLine/chatLine&circleID="+e})},voteListClick:function(){i.navigateTo({url:"../voteList/voteList?villageId="+this.villageId})},menuClick:function(e){65==e?i.navigateTo({url:"../scenery/scenery?villageId="+this.villageId+"&isVillager="+this.detailsInfo.village_view.is_villager}):66==e?i.navigateTo({url:"../feature/feature?villageId="+this.villageId+"&isVillager="+this.detailsInfo.village_view.is_villager}):67==e?i.switchTab({url:"../chat/chatList/chatList"}):68==e?i.switchTab({url:"../chat/chatList/chatList"}):69==e?i.navigateTo({url:"../modal/homestay/homestay"}):i.showToast({title:"完善中，耐心等待",icon:"none"})},listClick:function(e){"1"==e?(i.navigateTo({url:"../scenery/scenery?villageId="+this.villageId+"&isVillager="+this.detailsInfo.village_view.is_villager}),this.hideModal()):"2"==e?(i.navigateTo({url:"../feature/feature?villageId="+this.villageId+"&isVillager="+this.detailsInfo.village_view.is_villager}),this.hideModal()):"3"==e?(i.navigateTo({url:"../modal/homestay/homestay?villageId="+this.villageId+"&isVillager="+this.detailsInfo.village_view.is_villager}),this.hideModal()):"4"==e?i.showToast({title:"完善中，耐心等待",icon:"none"}):"5"==e?(i.navigateTo({url:"../chat/publishDynamic/publishDynamic"}),this.hideModal()):i.showToast({title:"完善中，耐心等待",icon:"none"})},setClick:function(){""==detailsInfo.village_view.is_villager?i.showToast({title:"您还不是村管理哦",icon:"none"}):i.navigateTo({url:"../villageManager/villageManager"})},manageClick:function(){i.navigateTo({url:"../villageSet/villageManager/villageManager?villageId="+this.detailsInfo.village_view.village_id})},locationClick:function(){var e=parseFloat(this.detailsInfo.village_view.latitude),t=parseFloat(this.detailsInfo.village_view.longitude);i.openLocation({latitude:e,longitude:t,success:function(){}})},reviseClick:function(){var e=this.detailsInfo.village_view.village_name;i.navigateTo({url:"../villageIntroduce/villageIntroduce?villageId="+this.villageId+"&villageName="+e+"&villageContent="+this.detailsInfo.village_view.village_intro})},applyVillager:function(){i.navigateTo({url:"../villageSet/applyVillager/applyVillager"})},attentionClick:function(e){var t=this;t.$request.httpTokenRequest(t.$api.addAttention,t.$api.post,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,attentionMemberId:e}).then(function(e){200===e.data.flag?t.villageDynamics():i.showToast({title:e.data.msg,icon:"none"})})},showModal:function(i){this.modalName=i.currentTarget.dataset.target},hideModal:function(i){this.modalName=null},detailsInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.villageInfo,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude),villageId:e.villageId}).then(function(t){200===t.data.flag?(e.detailsInfo=t.data.data,e.videoImage=""==e.detailsInfo.village_view.village_video_url?"".concat(e.$env.img1,"details_upload_video.png"):"".concat(e.$env.img1,"details_video@2x.png")):i.showToast({title:t.data.msg,icon:"none"})})},villageDynamics:function(){var e=this;e.$request.httpTokenRequest(e.$api.villageDynamics,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,Latitude:e.latitude,Longitude:e.longitude,villageId:e.villageId}).then(function(t){200===t.data.flag?(e.villageListInfo=t.data.data.data_list,console.log(a(e.villageListInfo.length," at pages/details/details.vue:628"))):i.showToast({title:t.data.msg,icon:"none"})})},joinVillage:function(){var e=this;i.showModal({content:"确定要加入本村？",cancelText:"再考虑下",confirmText:"确定",success:function(t){if(t.confirm){var n=e;n.$request.httpTokenRequest(n.$api.JoinVillage,n.$api.post,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,villageId:n.villageId}).then(function(e){200===e.data.flag?n.detailsInit():i.showToast({title:e.data.msg,icon:"none"})})}else t.cancel&&console.log(a("用户点击取消"," at pages/details/details.vue:669"))}})},exitVillage:function(){var e=this;i.showModal({content:"确定要退出本村？",cancelText:"再考虑下",confirmText:"确定",success:function(t){var a=e;a.$request.httpTokenRequest(a.$api.exitVillage,a.$api.post,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION}).then(function(e){200===e.data.flag?a.detailsInit():i.showToast({title:e.data.msg,icon:"none"})})}})},villagerListClick:function(){i.navigateTo({url:"../chat/villagerList/villagerList"})},commentClick:function(){i.switchTab({url:"../chat/chatLine/chatLine"})}},onLoad:function(e){var t=this;t.userInfo=i.getStorageSync("userInfo"),t.latitude=i.getStorageSync("getLatitude")||e.latitude,t.longitude=i.getStorageSync("getLongitude")||e.longitude,t.$api.Key=t.userInfo.key,t.villageId=e.villageId},onShow:function(){this.detailsInit(),this.villageDynamics()}};e.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},"1b3d":function(i,e,t){"use strict";var a=function(){var i=this,e=i.$createElement;i._self._c},n=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return n})},6812:function(i,e,t){"use strict";(function(i){t("fbf9"),t("921b");a(t("66fd"));var e=a(t("6fc5"));function a(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,t("6e42")["createPage"])},"6fc5":function(i,e,t){"use strict";t.r(e);var a=t("1b3d"),n=t("d40a");for(var l in n)"default"!==l&&function(i){t.d(e,i,function(){return n[i]})}(l);t("fa55");var o=t("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"0237e54e",null);e["default"]=s.exports},d40a:function(i,e,t){"use strict";t.r(e);var a=t("0512"),n=t.n(a);for(var l in a)"default"!==l&&function(i){t.d(e,i,function(){return a[i]})}(l);e["default"]=n.a},fa55:function(i,e,t){"use strict";var a=t("0480"),n=t.n(a);n.a}},[["6812","common/runtime","common/vendor"]]]);
});
require('pages/details/details.js');
__wxRoute = 'pages/chat/chatList/chatList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chatList/chatList.js';

define('pages/chat/chatList/chatList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chatList/chatList"],{"1b2a":function(t,e,a){},"3d3d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"61e4":function(t,e,a){"use strict";(function(t){a("fbf9"),a("921b");n(a("66fd"));var e=n(a("d723"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"70ca":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("0acf");i(a("e1b1"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{Conversation:null,TabCur:0,scrollLeft:0,value:"0",relateBg:"".concat(this.$env.img1,"ranking.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),click:"".concat(this.$env.img1,"help@2x.png"),add:"".concat(this.$env.img1,"weixin_add@2x.png"),weixin_icon:"".concat(this.$env.img1,"weixin_icon@2x.png"),chat_p:"".concat(this.$env.img1,"chat_p@2x.png"),PageIndex:1,PageSize:10,chatInfo:[],nav:[{name:"聊天"},{name:"好友"},{name:"关注"},{name:"粉丝"}]}},methods:{getConversation:function(){var e=t.getStorageSync("userInfo");this.JIM.login({username:e.member_nickname,password:"12"}).onSuccess(function(e){console.log(n("55555555555555"," at pages/chat/chatList/chatList.vue:134")),console.log(n("%c%s","color: red; font-size: 24px;","登录成功"," at pages/chat/chatList/chatList.vue:135")),console.log(n(e," at pages/chat/chatList/chatList.vue:136")),t.showToast({title:"登录成功"}),t.setStorage({key:"username",data:a.$data.username,success:function(){t.reLaunch({url:"../index/index"})}})}).onFail(function(e){console.log(n("JIM -登录失败"," at pages/chat/chatList/chatList.vue:153")),t.showToast({title:"登录失败"})});var a=this;this.JIM.getConversation().onSuccess(function(e){console.log(n("消息列表："," at pages/chat/chatList/chatList.vue:160")),console.log(n(e.conversations," at pages/chat/chatList/chatList.vue:161")),a.$data.Conversation=e.conversations.reverse();for(var i=0;i<e.conversations.length;i++)a.get_message_time(e.conversations[i].mtime,i),a.get_avatar(e.conversations[i].avatar,i);t.hideLoading()}).onFail(function(e){t.hideLoading()}),this.JIM.onSyncConversation(function(t){console.log(n("离线消息:"," at pages/chat/chatList/chatList.vue:193")),console.log(n(t," at pages/chat/chatList/chatList.vue:194"))}),this.JIM.onEventNotification(function(t){console.log(n(t," at pages/chat/chatList/chatList.vue:198"))}),this.JIM.onUserInfUpdate(function(t){console.log(n("onUserInfUpdate : "," at pages/chat/chatList/chatList.vue:202")),console.log(n(t," at pages/chat/chatList/chatList.vue:203"))})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),"1"==t.currentTarget.dataset.id?(this.value="1",this.listInfo(1)):"0"==t.currentTarget.dataset.id?this.value="0":"2"==t.currentTarget.dataset.id?(this.value="2",this.listInfo(2)):"3"==t.currentTarget.dataset.id&&(this.value="3",this.listInfo(3))},goUpload:function(e){t.navigateTo({url:"../addPic/addPic"})},listInfo:function(e){var a=this;a.$request.httpTokenRequest(a.$api.getFriendList,a.$api.get,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,PageIndex:a.PageIndex,PageSize:a.PageSize,friendType:e}).then(function(e){200===e.data.flag?a.chatInfo=e.data.data.data_list:t.showToast({title:e.data.msg,icon:"none"})})},getChatroomVillagerList:function(){var e=this;e.$request.httpTokenRequest(e.$api.getChatroomVillagerList,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,PageIndex:e.PageIndex,PageSize:e.PageSize}).then(function(a){200===a.data.flag?e.chatInfo=a.data.data.data_list:t.showToast({title:a.data.msg,icon:"none"})})},getChatroomNum:function(){var e=this;e.$request.httpTokenRequest(e.$api.getChatroomNum,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION}).then(function(e){200===e.data.flag||t.showToast({title:e.data.msg,icon:"none"})})},shareClick:function(){t.navigateTo({url:"../../share/share"})}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.getChatroomVillagerList(),this.getChatroomNum()}};e.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},"815e":function(t,e,a){"use strict";a.r(e);var n=a("70ca"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},d723:function(t,e,a){"use strict";a.r(e);var n=a("3d3d"),i=a("815e");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("f66f");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"335c401e",null);e["default"]=c.exports},f66f:function(t,e,a){"use strict";var n=a("1b2a"),i=a.n(n);i.a}},[["61e4","common/runtime","common/vendor"]]]);
});
require('pages/chat/chatList/chatList.js');
__wxRoute = 'pages/serch/serch';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/serch/serch.js';

define('pages/serch/serch.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serch/serch"],{"1fb8":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"20e3":function(e,t,a){"use strict";(function(e,n){function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("0acf");var r={data:function(){var e;return e={name:"",PageIndex:"1"},i(e,"PageIndex","1"),i(e,"PageSize","10"),i(e,"searchList",[]),i(e,"selfList",[]),i(e,"myvillage",""),e},methods:{citySearch:function(){e.navigateTo({url:"citySearch/citySearch"})},getName:function(e){this.name=e.target.value},nameClick:function(e){this.name=e,this.myvillage=e,this.nameSearch()},searchClick:function(t){e.navigateTo({url:"../details/details?villageId="+t})},nameSearch:function(){if(""!=this.name){var t=this;e.showLoading(),t.$request.httpTokenRequest(t.$api.getSearchVillage,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,keyword:t.name,PageIndex:t.PageIndex,PageSize:t.PageSize}).then(function(a){e.setStorageSync("nameHistory",t.name),200===a.data.flag&&(t.searchList=a.data.data.data_list,0==t.searchList.length&&e.navigateTo({url:"../search-in/search-in"}),e.hideLoading(t.searchList))})}}},onLoad:function(){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key;var t=e.getStorageSync("nameHistory");this.selfList.push(t),console.log(n(this.selfList," at pages/serch/serch.vue:130"))}};t.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"315d":function(e,t,a){},3757:function(e,t,a){"use strict";var n=a("315d"),i=a.n(n);i.a},"5e26":function(e,t,a){"use strict";a.r(t);var n=a("20e3"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"79c7":function(e,t,a){"use strict";(function(e){a("fbf9"),a("921b");n(a("66fd"));var t=n(a("c269"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},c269:function(e,t,a){"use strict";a.r(t);var n=a("1fb8"),i=a("5e26");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("3757");var c=a("2877"),s=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"43640a74",null);t["default"]=s.exports}},[["79c7","common/runtime","common/vendor"]]]);
});
require('pages/serch/serch.js');
__wxRoute = 'pages/serch/citySearch/citySearch';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/serch/citySearch/citySearch.js';

define('pages/serch/citySearch/citySearch.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serch/citySearch/citySearch"],{"0976":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"0cd3":function(t,i,e){"use strict";e.r(i);var a=e("259b"),n=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(i,t,function(){return a[t]})}(l);i["default"]=n.a},"259b":function(t,i,e){"use strict";(function(t,a){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=l(e("68d1"));function l(t){return t&&t.__esModule?t:{default:t}}e("0acf");var s=function(){return e.e("components/lee-select/lee-select").then(e.bind(null,"f485"))},c={components:{uniSelect:s},data:function(){return{quickPanelData:[{title:"当前城市",navName:"当前",data:["上海"],height:150},{title:"热门城市",navName:"热",data:["上海","北京","成都","昆明","西安"],height:224}],proviceName:"",cityName:"",areaName:"",townName:"",isSelect:!0,no_house:"".concat(this.$env.img1,"no_house@2x.png"),searchList:[],selectSearch:[],pyList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],cityData:[{initial:"A",list:[]},{initial:"B",list:[]},{initial:"C",list:[]},{initial:"D",list:[]},{initial:"E",list:[]},{initial:"F",list:[]},{initial:"G",list:[]},{initial:"H",list:[]},{initial:"I",list:[]},{initial:"J",list:[]},{initial:"K",list:[]},{initial:"L",list:[]},{initial:"M",list:[]},{initial:"N",list:[]},{initial:"O",list:[]},{initial:"P",list:[]},{initial:"Q",list:[]},{initial:"R",list:[]},{initial:"S",list:[]},{initial:"T",list:[]},{initial:"U",list:[]},{initial:"V",list:[]},{initial:"W",list:[]},{initial:"X",list:[]},{initial:"Y",list:[]},{initial:"Z",list:[]}]}},methods:{chooseItem:function(i){this.linkAddress(i.code),console.log(t(i.label,i.name," at pages/serch/citySearch/citySearch.vue:199")),"1"==i.label?this.proviceName=i.name:"2"==i.label?this.cityName=i.name:"3"==i.label?this.areaName=i.name:"4"==i.label&&(this.townName=i.name,this.getSearchVillageByAreaId(i.code),this.isSelect=!1)},linkAddress:function(t){var i=this;i.$request.phpTokenRequest(i.$api.GetAreaList,i.$api.get,{Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION,ParentID:t}).then(function(t){if(200===t.data.flag){if("5"==t.data.data[0].area_deep)return;i.operationData(t.data.data)}else a.showToast({title:t.data.msg,icon:"none"})})},operationData:function(t){for(var i=this,e=0;e<i.cityData.length;e++)i.cityData[e].list=[];for(e=0;e<t.length;e++){var a=t[e].area_name,l=n.default.chineseToPinYin(a),s=l.substring(0,1);-1!=i.pyList.indexOf(s)&&i.cityData[i.pyList.indexOf(s)].list.push({code:t[e].area_id,name:a,pinyin:l,label:t[e].area_deep})}i.selectSearch=i.cityData.filter(function(t){return 0!==t.list.length})},getSearchVillageByAreaId:function(i){var e=this;e.$request.httpTokenRequest(e.$api.getSearchVillageByAreaId,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,townId:i}).then(function(i){200===i.data.flag?(e.searchList=i.data.data,console.log(t(e.searchList," at pages/serch/citySearch/citySearch.vue:269"))):a.showToast({title:i.data.msg,icon:"none"})})},addSumbit:function(){a.navigateTo({url:"../../addHometown/addHometown"})}},onLoad:function(){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.linkAddress(0)}};i.default=c}).call(this,e("0de9")["default"],e("6e42")["default"])},2914:function(t,i,e){"use strict";(function(t){e("fbf9"),e("921b");a(e("66fd"));var i=a(e("4e33"));function a(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},"4b73":function(t,i,e){"use strict";var a=e("cca1"),n=e.n(a);n.a},"4e33":function(t,i,e){"use strict";e.r(i);var a=e("0976"),n=e("0cd3");for(var l in n)"default"!==l&&function(t){e.d(i,t,function(){return n[t]})}(l);e("4b73");var s=e("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"ee7896fc",null);i["default"]=c.exports},cca1:function(t,i,e){}},[["2914","common/runtime","common/vendor"]]]);
});
require('pages/serch/citySearch/citySearch.js');
__wxRoute = 'pages/meInfo/personInfo/personInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/personInfo/personInfo.js';

define('pages/meInfo/personInfo/personInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/personInfo/personInfo"],{"07b3":function(e,t,n){"use strict";var i=n("62c1"),a=n.n(i);a.a},"213b":function(e,t,n){"use strict";var i=n("befb"),a=n.n(i);a.a},"435b":function(e,t,n){"use strict";n.r(t);var i=n("798b"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"62c1":function(e,t,n){},"6ab8":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"798b":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0acf");var a={data:function(){return{picList:[{name:"拍照",id:"1"},{name:"从手机相册选择",id:"2"}],imgList:[],picUrl:"",modalName:null,nikeName:"",head:""}},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},villageIntroduce:function(){e.navigateTo({url:"../../meInfo/nikeName/nikeName?name="+this.nikeName})},selectPic:function(t){var n=this;if(1==t)this.hideModal(),e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=n.imgList.length?(n.imgList=n.imgList.concat(e.tempFilePaths),n.upload(n.imgList[0])):(n.imgList=e.tempFilePaths,n.upload(n.imgList[0]))}});else if(2==t){var a=this;this.hideModal(),e.chooseImage({count:1,sourceType:["camera"],success:function(t){var n=t.tempFilePaths;e.saveFile({tempFilePath:n[0],success:function(e){var t=e.savedFilePath;console.log(i(t," at pages/meInfo/personInfo/personInfo.vue:110")),a.imgList.length,a.imgList.push(t),a.upload(a.imgList[0])}})}})}},upload:function(t){var n=this;e.uploadFile({url:n.$env.baseUrl+n.$api.fileUpload+"?type=grouptour",filePath:t,name:"file",success:function(e){var t=JSON.parse(e.data);n.picUrl=t.data[0],n.pucSumbit(n.picUrl)}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var n=this;e.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&n.imgList.splice(t.currentTarget.dataset.index,1)}})},pucSumbit:function(t){var n=this;n.$request.phpTokenRequest(n.$api.editMember,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,MemberHead:t}).then(function(t){console.log(i(t," at pages/meInfo/personInfo/personInfo.vue:168")),200===t.data.flag&&(e.showToast({title:t.data.msg,icon:"none"}),e.navigateBack())})}},onLoad:function(t){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.nikeName=t.name,this.head=t.head}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},befb:function(e,t,n){},c16f:function(e,t,n){"use strict";(function(e){n("fbf9"),n("921b");i(n("66fd"));var t=i(n("c317"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c317:function(e,t,n){"use strict";n.r(t);var i=n("6ab8"),a=n("435b");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("07b3"),n("213b");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"b9a5180c",null);t["default"]=u.exports}},[["c16f","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/personInfo/personInfo.js');
__wxRoute = 'pages/order/orderList/orderList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/orderList/orderList.js';

define('pages/order/orderList/orderList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderList/orderList"],{"34b4":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("0acf");var r={data:function(){return{TabCur:0,scrollLeft:0,value:"0",nav:[{name:"待付款"},{name:"待消费"},{name:"待点评"},{name:"退款/售后"}],PageIndex:1,PageSize:10,OrderState:0,orderInfo:[],payFont:"待付款"}},methods:{modalClick:function(t,a,r){var i=this;e.showModal({content:"确定需要取消吗?",success:function(e){e.confirm?10==r||20==r?i.cancelOrder(t,a):30==r&&i.deleteOrder(t,a):e.cancel&&console.log(n("用户点击取消"," at pages/order/orderList/orderList.vue:106"))}})},tabSelect:function(e){this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1),"1"==e.currentTarget.dataset.id?this.value="1":"0"==e.currentTarget.dataset.id?(this.value="0",this.OrderState=10,this.orderInit(this.OrderState)):"2"==e.currentTarget.dataset.id&&(this.value="2")},orderInit:function(e){var t=this;t.$request.httpTokenRequest(t.$api.getOrderList,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,PageIndex:t.PageIndex,PageSize:t.PageSize}).then(function(e){200===e.data.flag&&(t.orderInfo=e.data.data.data_list)})},cancelOrder:function(t,a){var n=this;n.$request.httpTokenRequest(n.$api.cancelOrder,n.$api.post,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,PageIndex:n.PageIndex,PageSize:n.PageSize,orderType:t,orderId:a}).then(function(t){200===t.data.flag&&e.showToast({title:t.data.data,icon:"none"})})},deleteOrder:function(t,a){var n=this;n.$request.httpTokenRequest(n.$api.deleteOrder,n.$api.post,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,PageIndex:n.PageIndex,PageSize:n.PageSize,orderType:t,orderId:a}).then(function(t){200===t.data.flag&&e.showToast({title:t.data.data,icon:"none"})})}},onLoad:function(){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.orderInit(10)}};t.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"50ff":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},6560:function(e,t,a){},"67bc":function(e,t,a){"use strict";var n=a("6560"),r=a.n(n);r.a},"95ab":function(e,t,a){"use strict";a.r(t);var n=a("50ff"),r=a("bf90");for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);a("ab98"),a("67bc");var o=a("2877"),d=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"51593ba8",null);t["default"]=d.exports},"96dd":function(e,t,a){},ab98:function(e,t,a){"use strict";var n=a("96dd"),r=a.n(n);r.a},bf90:function(e,t,a){"use strict";a.r(t);var n=a("34b4"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=r.a},ec0a:function(e,t,a){"use strict";(function(e){a("fbf9"),a("921b");n(a("66fd"));var t=n(a("95ab"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["ec0a","common/runtime","common/vendor"]]]);
});
require('pages/order/orderList/orderList.js');
__wxRoute = 'pages/meInfo/villageNews/villageNews';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/villageNews/villageNews.js';

define('pages/meInfo/villageNews/villageNews.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/villageNews/villageNews"],{2549:function(e,t,n){"use strict";(function(e){n("fbf9"),n("921b");a(n("66fd"));var t=a(n("9868"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3a42":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"6b03":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0acf");var i={data:function(){return{PageIndex:1,PageSize:10,commentList:[]}},methods:{newsInit:function(){var t=this;t.$request.httpTokenRequest(t.$api.getSpMessageByType,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,type:5,PageIndex:t.PageIndex,PageSize:t.PageSize}).then(function(n){200===n.data.flag&&(t.commentList=n.data.data.data.data_list,console.log(e(t.commentList," at pages/meInfo/villageNews/villageNews.vue:50")))})}},onLoad:function(){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.newsInit()}};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},"6d09":function(e,t,n){},9868:function(e,t,n){"use strict";n.r(t);var a=n("3a42"),i=n("d6c7");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("f9bc"),n("ec8b");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"36b8dd63",null);t["default"]=c.exports},a015:function(e,t,n){},d6c7:function(e,t,n){"use strict";n.r(t);var a=n("6b03"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=i.a},ec8b:function(e,t,n){"use strict";var a=n("6d09"),i=n.n(a);i.a},f9bc:function(e,t,n){"use strict";var a=n("a015"),i=n.n(a);i.a}},[["2549","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/villageNews/villageNews.js');
__wxRoute = 'pages/meInfo/myLike/myLike';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/myLike/myLike.js';

define('pages/meInfo/myLike/myLike.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/myLike/myLike"],{"15d0":function(e,t,n){"use strict";n.r(t);var a=n("a88c"),i=n("2732");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("5cc4"),n("231d");var c=n("2877"),f=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"feeb4aee",null);t["default"]=f.exports},"231d":function(e,t,n){"use strict";var a=n("fc51"),i=n.n(a);i.a},2732:function(e,t,n){"use strict";n.r(t);var a=n("2ed8"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=i.a},"2ed8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0acf");var a={data:function(){return{PageIndex:1,PageSize:10,likeList:[]}},methods:{newsInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.getSpMessageByType,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,type:7,PageIndex:e.PageIndex,PageSize:e.PageSize}).then(function(t){200===t.data.flag&&(e.likeList=t.data.data.data.data_list)})}},onLoad:function(){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.newsInit()}};t.default=a}).call(this,n("6e42")["default"])},"5cc4":function(e,t,n){"use strict";var a=n("a423"),i=n.n(a);i.a},a423:function(e,t,n){},a88c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},d349:function(e,t,n){"use strict";(function(e){n("fbf9"),n("921b");a(n("66fd"));var t=a(n("15d0"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fc51:function(e,t,n){}},[["d349","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/myLike/myLike.js');
__wxRoute = 'pages/meInfo/myComment/myComment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/myComment/myComment.js';

define('pages/meInfo/myComment/myComment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/myComment/myComment"],{"0c76":function(e,t,n){"use strict";var a=n("32b7"),i=n.n(a);i.a},"1be1":function(e,t,n){},"25d3":function(e,t,n){"use strict";n.r(t);var a=n("b4a7"),i=n("e175");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("0c76"),n("97f6");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"1cc2f84b",null);t["default"]=c.exports},3131:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0acf");var a={data:function(){return{PageIndex:1,PageSize:10,commentList:[]}},methods:{newsInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.getSpMessageByType,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,type:6,PageIndex:e.PageIndex,PageSize:e.PageSize}).then(function(t){200===t.data.flag&&(e.commentList=t.data.data.data.data_list)})}},onLoad:function(){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.newsInit()}};t.default=a}).call(this,n("6e42")["default"])},"32b7":function(e,t,n){},"97f6":function(e,t,n){"use strict";var a=n("1be1"),i=n.n(a);i.a},b4a7:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},e175:function(e,t,n){"use strict";n.r(t);var a=n("3131"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=i.a},e41d:function(e,t,n){"use strict";(function(e){n("fbf9"),n("921b");a(n("66fd"));var t=a(n("25d3"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["e41d","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/myComment/myComment.js');
__wxRoute = 'pages/meInfo/newsList/newsList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/newsList/newsList.js';

define('pages/meInfo/newsList/newsList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/newsList/newsList"],{"0778":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("0acf");var s={data:function(){return{newsList:[{title:"评论",content:"",img:"".concat(this.$env.img1,"news_comment@2x.png"),id:1,num:0,time:""},{title:"点赞",content:"",img:"".concat(this.$env.img1,"news_help@2x.png"),id:2,num:0,time:""},{title:"粉丝",content:"",img:"".concat(this.$env.img1,"news_fans@2x.png"),id:3,num:0,time:""},{title:"本村消息",content:"",img:"".concat(this.$env.img1,"news_news@2x.png"),id:4,num:0,time:""},{title:"系统消息",content:"",img:"".concat(this.$env.img1,"news_system@2x.png"),id:5,num:0,time:""}],newsInfo:{}}},methods:{newsInit:function(){var n=this;n.$request.httpTokenRequest(n.$api.getSpMessageCenterInfo,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION}).then(function(e){200===e.data.flag&&(n.newsInfo=e.data.data,n.newsList[0].num=n.newsInfo.comment_count,n.newsList[0].content=n.newsInfo.neares_comment_message_info.content,n.newsList[0].time=n.newsInfo.neares_comment_message_info.date_desc,n.newsList[1].num=n.newsInfo.like_count,n.newsList[1].content=n.newsInfo.neares_like_message_info.content,n.newsList[1].time=n.newsInfo.neares_like_message_info.date_desc,n.newsList[2].num=n.newsInfo.fans_count,n.newsList[2].content=n.newsInfo.neares_fans_count_message_info.content,n.newsList[2].time=n.newsInfo.neares_fans_count_message_info.date_desc,n.newsList[3].num=n.newsInfo.village_count,n.newsList[3].content=n.newsInfo.neares_villaget_message_info.content,n.newsList[3].time=n.newsInfo.neares_villaget_message_info.date_desc,n.newsList[4].num=n.newsInfo.system_count,n.newsList[4].content=n.newsInfo.neares_system_count_message_info.content,n.newsList[4].time=n.newsInfo.neares_system_count_message_info.date_desc)})},newsClick:function(e){1==e?n.navigateTo({url:"../myComment/myComment"}):2==e?n.navigateTo({url:"../myLike/myLike"}):3==e?n.navigateTo({url:"../fans/fans"}):4==e&&n.navigateTo({url:"../villageNews/villageNews"})}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.newsInit()}};e.default=s}).call(this,t("6e42")["default"])},3205:function(n,e,t){"use strict";var s=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"a",function(){return s}),t.d(e,"b",function(){return i})},"3d5c":function(n,e,t){},"9cab":function(n,e,t){"use strict";var s=t("3d5c"),i=t.n(s);i.a},b996:function(n,e,t){"use strict";t.r(e);var s=t("0778"),i=t.n(s);for(var o in s)"default"!==o&&function(n){t.d(e,n,function(){return s[n]})}(o);e["default"]=i.a},c45d:function(n,e,t){"use strict";t.r(e);var s=t("3205"),i=t("b996");for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);t("9cab");var a=t("2877"),c=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,"da6ca4ec",null);e["default"]=c.exports},ffe4:function(n,e,t){"use strict";(function(n){t("fbf9"),t("921b");s(t("66fd"));var e=s(t("c45d"));function s(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])}},[["ffe4","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/newsList/newsList.js');
__wxRoute = 'pages/meInfo/fans/fans';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/fans/fans.js';

define('pages/meInfo/fans/fans.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/fans/fans"],{"0baa":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("0acf");var a={data:function(){return{TabCur:0,scrollLeft:0,value:"0",relateBg:"".concat(this.$env.img1,"ranking.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),click:"".concat(this.$env.img1,"help@2x.png"),add:"".concat(this.$env.img1,"weixin_add@2x.png"),weixin_icon:"".concat(this.$env.img1,"weixin_icon@2x.png"),chat_p:"".concat(this.$env.img1,"chat_p@2x.png"),PageIndex:1,PageSize:10,listInfo:[]}},methods:{listInit:function(){var n=this;n.$request.httpTokenRequest(n.$api.getFriendList,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,PageIndex:n.PageIndex,PageSize:n.PageSize,friendType:2}).then(function(t){200===t.data.flag&&(n.listInfo=t.data.data.data_list)})}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.listInit()}};t.default=a}).call(this,e("6e42")["default"])},1204:function(n,t,e){},"457f":function(n,t,e){"use strict";e.r(t);var a=e("5341"),i=e("956d");for(var c in i)"default"!==c&&function(n){e.d(t,n,function(){return i[n]})}(c);e("8185"),e("c505");var o=e("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"6f8e2b00",null);t["default"]=u.exports},5341:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},8185:function(n,t,e){"use strict";var a=e("1204"),i=e.n(a);i.a},"956d":function(n,t,e){"use strict";e.r(t);var a=e("0baa"),i=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=i.a},a38d:function(n,t,e){},c505:function(n,t,e){"use strict";var a=e("a38d"),i=e.n(a);i.a},d80a:function(n,t,e){"use strict";(function(n){e("fbf9"),e("921b");a(e("66fd"));var t=a(e("457f"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["d80a","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/fans/fans.js');
__wxRoute = 'pages/meInfo/attention/attention';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/attention/attention.js';

define('pages/meInfo/attention/attention.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/attention/attention"],{"43aa":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},4824:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("0acf");var a={data:function(){return{TabCur:0,scrollLeft:0,value:"0",relateBg:"".concat(this.$env.img1,"ranking.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),click:"".concat(this.$env.img1,"help@2x.png"),add:"".concat(this.$env.img1,"weixin_add@2x.png"),chat_p:"".concat(this.$env.img1,"chat_p@2x.png"),PageIndex:1,PageSize:10,listInfo:[]}},methods:{listInit:function(){var t=this;t.$request.httpTokenRequest(t.$api.getFriendList,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,PageIndex:t.PageIndex,PageSize:t.PageSize,friendType:1}).then(function(n){200===n.data.flag&&(t.listInfo=n.data.data.data_list)})}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.listInit()}};n.default=a}).call(this,e("6e42")["default"])},"48eb":function(t,n,e){"use strict";(function(t){e("fbf9"),e("921b");a(e("66fd"));var n=a(e("f314"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"88d3":function(t,n,e){"use strict";var a=e("bfe1"),i=e.n(a);i.a},a379:function(t,n,e){"use strict";e.r(n);var a=e("4824"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=i.a},bfe1:function(t,n,e){},d76f:function(t,n,e){"use strict";var a=e("ec82"),i=e.n(a);i.a},ec82:function(t,n,e){},f314:function(t,n,e){"use strict";e.r(n);var a=e("43aa"),i=e("a379");for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);e("d76f"),e("88d3");var o=e("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"c3086638",null);n["default"]=u.exports}},[["48eb","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/attention/attention.js');
__wxRoute = 'pages/meInfo/nikeName/nikeName';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/meInfo/nikeName/nikeName.js';

define('pages/meInfo/nikeName/nikeName.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/nikeName/nikeName"],{"085e":function(e,n,t){"use strict";t.r(n);var a=t("912c"),i=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=i.a},6148:function(e,n,t){"use strict";var a=t("f1ea"),i=t.n(a);i.a},"8a5e":function(e,n,t){},"912c":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("0acf");var i={data:function(){return{user:{},wordChange:"",nikeName:""}},methods:{setUserRealName:function(e){this.user.real_name=e.detail.value},canelClick:function(){this.wordChange=""},nameClick:function(){var n=this;n.$request.phpTokenRequest(n.$api.editMember,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,MemberNickName:n.user.real_name}).then(function(n){console.log(e(n," at pages/meInfo/nikeName/nikeName.vue:40")),200===n.data.flag&&(a.showToast({title:n.data.msg,icon:"none"}),a.navigateBack())})}},onLoad:function(n){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.nikeName=n.name,this.wordChange=this.nikeName,console.log(e(this.nikeName," at pages/meInfo/nikeName/nikeName.vue:57"))}};n.default=i}).call(this,t("0de9")["default"],t("6e42")["default"])},"98b2":function(e,n,t){"use strict";(function(e){t("fbf9"),t("921b");a(t("66fd"));var n=a(t("e1c9"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},e1c9:function(e,n,t){"use strict";t.r(n);var a=t("f3d1"),i=t("085e");for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);t("f28f"),t("6148");var o=t("2877"),f=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"6527e525",null);n["default"]=f.exports},f1ea:function(e,n,t){},f28f:function(e,n,t){"use strict";var a=t("8a5e"),i=t.n(a);i.a},f3d1:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})}},[["98b2","common/runtime","common/vendor"]]]);
});
require('pages/meInfo/nikeName/nikeName.js');
__wxRoute = 'pages/search-in/search-in';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search-in/search-in.js';

define('pages/search-in/search-in.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search-in/search-in"],{"22ad":function(n,t,e){},"59b1":function(n,t,e){"use strict";e.r(t);var u=e("88c1"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},"677e":function(n,t,e){"use strict";var u=e("22ad"),a=e.n(u);a.a},"732a":function(n,t,e){"use strict";e.r(t);var u=e("7dd3"),a=e("59b1");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("677e"),e("7bb7");var c=e("2877"),r=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,"62a9a968",null);t["default"]=r.exports},"7bb7":function(n,t,e){"use strict";var u=e("d418"),a=e.n(u);a.a},"7c7c":function(n,t,e){"use strict";(function(n){e("fbf9"),e("921b");u(e("66fd"));var t=u(e("732a"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7dd3":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"88c1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("0acf");var u={data:function(){return{no_house:"".concat(this.$env.img1,"no_house@2x.png")}},methods:{addSumbit:function(){n.navigateTo({url:"../addHometown/addHometown"})}},onLoad:function(){this.userInfo=n.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key}};t.default=u}).call(this,e("6e42")["default"])},d418:function(n,t,e){}},[["7c7c","common/runtime","common/vendor"]]]);
});
require('pages/search-in/search-in.js');
__wxRoute = 'pages/ranking/ranking';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ranking/ranking.js';

define('pages/ranking/ranking.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ranking/ranking"],{"14e7":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"4f1b0":function(t,n,e){"use strict";(function(t){e("fbf9"),e("921b");a(e("66fd"));var n=a(e("f5e5"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},5232:function(t,n,e){"use strict";e.r(n);var a=e("fc80"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=i.a},"70cd":function(t,n,e){},"847f":function(t,n,e){"use strict";var a=e("70cd"),i=e.n(a);i.a},f5e5:function(t,n,e){"use strict";e.r(n);var a=e("14e7"),i=e("5232");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("847f");var o=e("2877"),g=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"866eadb6",null);n["default"]=g.exports},fc80:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("0acf");var i={data:function(){return{TabCur:0,scrollLeft:0,value:"0",isTriangle:!0,bj:"".concat(this.$env.img1,"back_j.png"),arrow:"".concat(this.$env.img1,"More@2x.png"),triagle:"".concat(this.$env.img1,"triagle@2x.png"),list_btn:"".concat(this.$env.img1,"list_btn@2x.png"),list_ranking:"".concat(this.$env.img1,"contorbute_list.png"),nav:[{name:"微豆总榜",img:"".concat(this.$env.img1,"More@2x.png")},{name:"本月",img:"".concat(this.$env.img1,"More@2x.png")},{name:"本周",img:"".concat(this.$env.img1,"More@2x.png")}],PageIndex:"1",PageSize:"10",rankingInfo:[],rankingTotal:{}}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),"0"==t.currentTarget.dataset.id?(this.value="0",this.rankingInit("1")):"1"==t.currentTarget.dataset.id?(this.value="1",this.rankingInit("2")):"2"==t.currentTarget.dataset.id&&(this.value="2",this.rankingInit("3"))},contribution:function(){t.navigateTo({url:"../contribution/contribution?villageId="+this.villageId})},rankingInit:function(n){var e=this;e.$request.httpTokenRequest(e.$api.getVillageIntegralRecord,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId,PageIndex:e.PageIndex,PageSize:e.PageSize,type:n}).then(function(n){200===n.data.flag?(e.rankingInfo=n.data.data.data_list,console.log(a(e.rankingInfo," at pages/ranking/ranking.vue:136"))):t.showToast({title:n.data.msg,icon:"none"})})},getVillageRanking:function(){var n=this;n.$request.httpTokenRequest(n.$api.getVillageRanking,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,villageId:n.villageId}).then(function(e){200===e.data.flag?n.rankingTotal=e.data.data:t.showToast({title:e.data.msg,icon:"none"})})}},onLoad:function(n){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=n.villageId,this.rankingInit("1"),this.getVillageRanking()}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["4f1b0","common/runtime","common/vendor"]]]);
});
require('pages/ranking/ranking.js');
__wxRoute = 'pages/villageSet/villageLabel/villageLabel';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageSet/villageLabel/villageLabel.js';

define('pages/villageSet/villageLabel/villageLabel.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageSet/villageLabel/villageLabel"],{1809:function(t,e,a){"use strict";a.r(e);var n=a("8e6a"),i=a("8556");for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);a("8df9");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"0b0edfc0",null);e["default"]=u.exports},"2db7":function(t,e,a){"use strict";(function(t){a("fbf9"),a("921b");n(a("66fd"));var e=n(a("1809"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"32df":function(t,e,a){},8556:function(t,e,a){"use strict";a.r(e);var n=a("d5ff"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=i.a},"8df9":function(t,e,a){"use strict";var n=a("32df"),i=a.n(n);i.a},"8e6a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},d5ff:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("0acf");var n={data:function(){return{imgList:[],modalName:null,textareaAValue:"",TabCur:0,labelInfo:[],src:""}},methods:{labelInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.getLabels,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,labelType:6}).then(function(a){200===a.data.flag?(e.labelInfo=a.data.data,e.TabCur=e.labelInfo[0].label_id):t.showToast({title:a.data.msg,icon:"none"})})},labelBtm:function(){var e=this;e.$request.httpTokenRequest(e.$api.villageEdit,e.$api.post,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId,lableId:e.TabCur}).then(function(e){200===e.data.flag?(t.showToast({title:e.data.data,icon:"none"}),t.navigateBack()):t.showToast({title:e.data.data,icon:"none"})})},tabSelect:function(t){this.TabCur=t}},onLoad:function(e){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=e.villageId,this.labelInit()}};e.default=n}).call(this,a("6e42")["default"])}},[["2db7","common/runtime","common/vendor"]]]);
});
require('pages/villageSet/villageLabel/villageLabel.js');
__wxRoute = 'pages/villageSet/villageVideo/villageVideo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageSet/villageVideo/villageVideo.js';

define('pages/villageSet/villageVideo/villageVideo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageSet/villageVideo/villageVideo"],{"1de7":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement;e._self._c},n=[];t.d(a,"a",function(){return i}),t.d(a,"b",function(){return n})},"5f42":function(e,a,t){"use strict";t.r(a);var i=t("1de7"),n=t("df5b");for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);t("c64a");var l=t("2877"),c=Object(l["a"])(n["default"],i["a"],i["b"],!1,null,"081370ef",null);a["default"]=c.exports},"61db":function(e,a,t){"use strict";(function(e,i){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("0acf");var n={data:function(){return{imgList:[],TabCur:0,src:"",picUrl:"",villager_video:"".concat(this.$env.img1,"villager_video@2x.png"),info:{}}},methods:{videoErrorCallback:function(a){e.showModal({content:a.target.errMsg,showCancel:!1})},videoAdd:function(){var a=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(t){console.log(i(t," at pages/villageSet/villageVideo/villageVideo.vue:58")),a.info=t,a.upload(a.info.thumbTempFilePath),e.showLoading(),e.uploadFile({url:a.$env.phpUrl+a.$api.UploadImage,filePath:t.tempFilePath,name:"file[]",formData:{Type:"video",Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION},success:function(t){var n=JSON.parse(t.data);console.log(i(n.data[0]," at pages/villageSet/villageVideo/villageVideo.vue:75"));var o="";o=n.data[0],a.imgList.push(o),e.hideLoading()}})}})},upload:function(a){var t=this;e.uploadFile({url:t.$env.baseUrl+t.$api.fileUpload+"?type=grouptour",filePath:a,name:"file",success:function(e){var a=JSON.parse(e.data);t.picUrl=a.data[0]}})},DelImg:function(a){var t=this;e.showModal({content:"确定要删除这个视频吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&t.imgList.splice(a.currentTarget.dataset.index,1)}})},videoBtm:function(){var a=this;a.$request.httpTokenRequest(a.$api.villageEdit,a.$api.post,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,villageId:a.villageId,videoUrl:a.src}).then(function(a){200===a.data.flag?(e.showToast({title:a.data.data,icon:"none"}),e.navigateBack()):e.showToast({title:a.data.data,icon:"none"})})}},onLoad:function(a){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=a.villageId}};a.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},"7cb9":function(e,a,t){"use strict";(function(e){t("fbf9"),t("921b");i(t("66fd"));var a=i(t("5f42"));function i(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},8554:function(e,a,t){},c64a:function(e,a,t){"use strict";var i=t("8554"),n=t.n(i);n.a},df5b:function(e,a,t){"use strict";t.r(a);var i=t("61db"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);a["default"]=n.a}},[["7cb9","common/runtime","common/vendor"]]]);
});
require('pages/villageSet/villageVideo/villageVideo.js');
__wxRoute = 'pages/villageSet/villageManager/villageManager';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageSet/villageManager/villageManager.js';

define('pages/villageSet/villageManager/villageManager.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageSet/villageManager/villageManager"],{"1dbc":function(e,l,a){"use strict";(function(e){a("fbf9"),a("921b");i(a("66fd"));var l=i(a("d5b7"));function i(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},6362:function(e,l,a){"use strict";var i=a("ec22"),t=a.n(i);t.a},"8ae1":function(e,l,a){"use strict";var i=function(){var e=this,l=e.$createElement;e._self._c},t=[];a.d(l,"a",function(){return i}),a.d(l,"b",function(){return t})},b50a:function(e,l,a){"use strict";a.r(l);var i=a("fd05"),t=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(l,e,function(){return i[e]})}(n);l["default"]=t.a},d5b7:function(e,l,a){"use strict";a.r(l);var i=a("8ae1"),t=a("b50a");for(var n in t)"default"!==n&&function(e){a.d(l,e,function(){return t[e]})}(n);a("6362");var u=a("2877"),o=Object(u["a"])(t["default"],i["a"],i["b"],!1,null,null,null);l["default"]=o.exports},ec22:function(e,l,a){},fd05:function(e,l,a){"use strict";(function(e,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i={data:function(){return{}},methods:{villageIntroduce:function(){e.navigateTo({url:"../villageIntroduce/villageIntroduce?villageId="+this.villageId})},villageVideo:function(){e.navigateTo({url:"../villageVideo/villageVideo?villageId="+this.villageId})},villageLabel:function(){e.navigateTo({url:"../villageLabel/villageLabel?villageId="+this.villageId})},villagePic:function(){e.navigateTo({url:"../villagePic/villagePic?villageId="+this.villageId})}},onLoad:function(l){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=l.villageId,console.log(a(this.villageId," at pages/villageSet/villageManager/villageManager.vue:57"))}};l.default=i}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["1dbc","common/runtime","common/vendor"]]]);
});
require('pages/villageSet/villageManager/villageManager.js');
__wxRoute = 'pages/voteList/voteList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/voteList/voteList.js';

define('pages/voteList/voteList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/voteList/voteList"],{4562:function(t,e,a){"use strict";(function(t){a("fbf9"),a("921b");i(a("66fd"));var e=i(a("af42"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"4f1b":function(t,e,a){},"61e5":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("0acf");var n={data:function(){return{village_2:"".concat(this.$env.img1,"village_2.png"),longitude:"",latitude:"",pageIndex:1,pageSize:10,voteInfo:{},modalName:null,radio:"radio1",cuIcon:[{name:"appreciate",isShow:!0},{name:"check",isShow:!0}],bannerPic:"",indexInfo:{},msgInfo:{}}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},villageClick:function(){console.log(t("他乡"," at pages/voteList/voteList.vue:120"))},scroll:function(e){console.log(t(e," at pages/voteList/voteList.vue:123")),this.old.scrollTop=e.detail.scrollTop},nameSearch:function(){i.navigateTo({url:"../serch/serch"})},msgInit:function(){var t=this;t.$request.phpTokenRequest(t.$api.GetDocument,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,Type:37}).then(function(e){200===e.data.flag?t.msgInfo=e.data.data:i.showToast({title:e.data.msg,icon:"none"})})},searchIcon:function(t){for(var e=t.detail.value.toLowerCase(),a=this.cuIcon,i=0;i<a.length;i++){var n=e,o=a[i].name.toLowerCase();-1!=o.search(n)?a[i].isShow=!0:a[i].isShow=!1}this.cuIcon=a},upper:function(e){console.log(t(e," at pages/voteList/voteList.vue:167"))},lower:function(e){console.log(t(e," at pages/voteList/voteList.vue:170"))},getLocation:function(t){var e=this;i.getLocation({type:"gcj02",success:function(t){e.latitude=t.latitude,e.longitude=t.longitude,e.$request.httpTokenRequest(e.$api.currentCity,e.$api.get,{latitude:e.latitude,longitude:e.longitude,key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,searchType:1}).then(function(t){200===t.data.flag&&e.getVoteList(e.latitude,e.longitude)})}})},getVoteList:function(e,a){var n=this;n.$request.httpTokenRequest(n.$api.getSmallProceduresIndex,n.$api.get,{latitude:e,longitude:a,Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,pageIndex:n.pageIndex,pageSize:n.pageSize}).then(function(e){console.log(t(e.data.data," at pages/voteList/voteList.vue:207")),200===e.data.flag?n.voteInfo=e.data.data:i.showToast({title:e.data.msg,icon:"none"})})},enterVillage:function(t){i.navigateTo({url:"../details/details?villageId="+t+"&longitude="+this.longitude+"&latitude="+this.latitude})},voteClick:function(t){this.votes(t)},votes:function(e){var a=this;this.$request.httpTokenRequest(this.$api.addVillageVoteNum,this.$api.get,{Key:this.$api.Key,Client:this.$api.CLIENT,Version:this.$api.VERSION,latitude:this.latitude,longitude:this.longitude,areaId:e}).then(function(e){console.log(t(e," at pages/voteList/voteList.vue:250")),200===e.data.flag?(i.showToast({title:e.data.msg,icon:"none"}),a.getLocation()):i.showToast({title:e.data.data,icon:"none"})})}},onLoad:function(){this.userInfo=i.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.getLocation(),this.msgInit()}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},6298:function(t,e,a){"use strict";var i=a("4f1b"),n=a.n(i);n.a},"78c4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},af42:function(t,e,a){"use strict";a.r(e);var i=a("78c4"),n=a("e0e2");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("6298");var s=a("2877"),u=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"9dd2d952",null);e["default"]=u.exports},e0e2:function(t,e,a){"use strict";a.r(e);var i=a("61e5"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a}},[["4562","common/runtime","common/vendor"]]]);
});
require('pages/voteList/voteList.js');
__wxRoute = 'pages/contribution/contribution';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/contribution/contribution.js';

define('pages/contribution/contribution.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/contribution/contribution"],{"032b":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},1574:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("0acf");var e={data:function(){return{contribution_bg:"".concat(this.$env.img1,"contribution_bg.png"),doubt:"".concat(this.$env.img1,"doubt@2x.png"),contributionInfo:{},modalName:null,radio:"radio1",msgInfo:{}}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.radio=t.detail.value},contributionDeatils:function(){t.navigateTo({url:"../contributionDeatils/contributionDeatils?villageId="+this.village_id})},contributionInit:function(){var n=this;n.$request.httpTokenRequest(n.$api.dayliTask,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION}).then(function(i){200===i.data.flag?n.contributionInfo=i.data.data:t.showToast({title:i.data.msg,icon:"none"})})},myContributionInit:function(){var n=this;n.$request.phpTokenRequest(n.$api.GetDocument,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,Type:38}).then(function(i){200===i.data.flag?n.msgInfo=i.data.data:t.showToast({title:i.data.msg,icon:"none"})})}},onLoad:function(n){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.village_id=n.villageId,this.contributionInit(),this.myContributionInit()}};n.default=e}).call(this,i("6e42")["default"])},"4bcf":function(t,n,i){"use strict";var e=i("7783"),o=i.n(e);o.a},"6f1e":function(t,n,i){"use strict";(function(t){i("fbf9"),i("921b");e(i("66fd"));var n=e(i("775b"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("6e42")["createPage"])},"775b":function(t,n,i){"use strict";i.r(n);var e=i("032b"),o=i("bb8f");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("4bcf");var u=i("2877"),r=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,"55013bf0",null);n["default"]=r.exports},7783:function(t,n,i){},bb8f:function(t,n,i){"use strict";i.r(n);var e=i("1574"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a}},[["6f1e","common/runtime","common/vendor"]]]);
});
require('pages/contribution/contribution.js');
__wxRoute = 'pages/contributionDeatils/contributionDeatils';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/contributionDeatils/contributionDeatils.js';

define('pages/contributionDeatils/contributionDeatils.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/contributionDeatils/contributionDeatils"],{"3a7b":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"41ed":function(t,n,e){},6605:function(t,n,e){"use strict";var i=e("41ed"),a=e.n(i);a.a},7028:function(t,n,e){"use strict";e.r(n);var i=e("db7e"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},a417:function(t,n,e){"use strict";e.r(n);var i=e("3a7b"),a=e("7028");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("6605");var u=e("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"376e1b15",null);n["default"]=r.exports},db7e:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("0acf");var i={data:function(){return{contribution_bg:"".concat(this.$env.img1,"contribution_bg.png"),doubt:"".concat(this.$env.img1,"doubt@2x.png"),PageIndex:1,PageSize:10,myInfo:{}}},methods:{myContribution:function(){var n=this;n.$request.httpTokenRequest(n.$api.myContribution,n.$api.get,{Key:n.$api.Key,Client:n.$api.CLIENT,Version:n.$api.VERSION,PageIndex:n.PageIndex,PageSize:n.PageSize,villageId:n.village_id}).then(function(e){200===e.data.flag?n.myInfo=e.data.data:t.showToast({title:e.data.msg,icon:"none"})})}},onLoad:function(n){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.village_id=n.villageId,this.myContribution()}};n.default=i}).call(this,e("6e42")["default"])},ec4d:function(t,n,e){"use strict";(function(t){e("fbf9"),e("921b");i(e("66fd"));var n=i(e("a417"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["ec4d","common/runtime","common/vendor"]]]);
});
require('pages/contributionDeatils/contributionDeatils.js');
__wxRoute = 'pages/uploadVideo/uploadVideo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/uploadVideo/uploadVideo.js';

define('pages/uploadVideo/uploadVideo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uploadVideo/uploadVideo"],{"10d4":function(e,a,t){"use strict";var o=t("baa9"),i=t.n(o);i.a},b0d6:function(e,a,t){"use strict";(function(e,o){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("0acf");var i={data:function(){return{imgList:[],modalName:null,textareaAValue:"",TabCur:0,labelInfo:[],src:"",nav:[{name:"乡村美食"},{name:"民俗文化"},{name:"古建筑"},{name:"人物传记"}],pic:[{name:"相册",id:"1"},{name:"拍摄",id:"2"}]}},methods:{labelInit:function(){var a=this;a.$request.httpTokenRequest(a.$api.getLabels,a.$api.get,{Key:a.$api.Key,Client:a.$api.CLIENT,Version:a.$api.VERSION,labelType:5}).then(function(t){200===t.data.flag?(a.labelInfo=t.data.data,console.log(e(a.labelInfo," at pages/uploadVideo/uploadVideo.vue:100")),a.TabCur=a.labelInfo[0].label_id):o.showToast({title:t.data.msg,icon:"none"})})},videoErrorCallback:function(e){o.showModal({content:e.target.errMsg,showCancel:!1})},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},selectPic:function(a){var t=this;if(1==a)this.hideModal(),o.chooseVideo({sourceType:["album"],success:function(a){console.log(e(a," at pages/uploadVideo/uploadVideo.vue:133")),console.log(e(a.tempFilePath," at pages/uploadVideo/uploadVideo.vue:134")),0!=t.imgList.length?(t.imgList=t.imgList.concat(a.tempFilePath),t.uploadVideo(a.tempFilePath)):t.uploadVideo(a.tempFilePath)}});else if(2==a){var i=this;this.hideModal(),o.chooseVideo({sourceType:["camera"],success:function(a){o.showLoading();var t=a.tempFilePath;o.saveFile({tempFilePath:t,success:function(a){var t=a.savedFilePath;console.log(e(t," at pages/uploadVideo/uploadVideo.vue:159")),i.imgList.length,i.imgList.push(t),i.uploadVideo(i.imgList[0])}})}})}},uploadVideo:function(a){var t=this;o.uploadFile({url:t.$env.baseUrl+t.$api.fileUpload+"?type=video",filePath:a,name:"file",success:function(a){var t;console.log(e(a.data," at pages/uploadVideo/uploadVideo.vue:197")),t=a.data,console.log(e(t," at pages/uploadVideo/uploadVideo.vue:200")),o.hideLoading()}})},videoAdd:function(){var a=this;o.chooseVideo({count:1,sourceType:["camera","album"],success:function(t){console.log(e(t," at pages/uploadVideo/uploadVideo.vue:211")),o.showLoading(),o.uploadFile({url:a.$env.baseUrl+a.$api.fileUpload+"?type=video",filePath:t.tempFilePath,name:"file",success:function(e){var t="";t=e.data,a.imgList.push(t),o.hideLoading()}})}})},ViewImage:function(e){o.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var a=this;o.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(t){t.confirm&&a.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(e){this.textareaAValue=e.detail.value},tabSelect:function(e){this.TabCur=e}},onLoad:function(e){this.userInfo=o.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=e.villageId,this.labelInit()}};a.default=i}).call(this,t("0de9")["default"],t("6e42")["default"])},baa9:function(e,a,t){},e114:function(e,a,t){"use strict";(function(e){t("fbf9"),t("921b");o(t("66fd"));var a=o(t("e4fe"));function o(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},e2ae:function(e,a,t){"use strict";t.r(a);var o=t("b0d6"),i=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,function(){return o[e]})}(n);a["default"]=i.a},e4fe:function(e,a,t){"use strict";t.r(a);var o=t("f429"),i=t("e2ae");for(var n in i)"default"!==n&&function(e){t.d(a,e,function(){return i[e]})}(n);t("10d4");var l=t("2877"),u=Object(l["a"])(i["default"],o["a"],o["b"],!1,null,"576b9d04",null);a["default"]=u.exports},f429:function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement;e._self._c},i=[];t.d(a,"a",function(){return o}),t.d(a,"b",function(){return i})}},[["e114","common/runtime","common/vendor"]]]);
});
require('pages/uploadVideo/uploadVideo.js');
__wxRoute = 'pages/feature/feature';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/feature/feature.js';

define('pages/feature/feature.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feature/feature"],{"2ab3":function(t,e,i){},3744:function(t,e,i){"use strict";(function(t,a){function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0acf");var o={data:function(){var t;return t={TabCur:0,scrollLeft:0,value:"0",picInfo:[],msgInfo:[],videoInfo:[],isShow:!1,relateBg:"".concat(this.$env.img1,"ranking.png"),publish:"".concat(this.$env.img1,"publish@2x.png"),share:"".concat(this.$env.img1,"relay@2x.png"),msg:"".concat(this.$env.img1,"comment@2x.png"),unclick:"".concat(this.$env.img1,"help@2x.png"),click:"".concat(this.$env.img1,"red_help.png"),play:"".concat(this.$env.img1,"play@2x.png"),PageIndex:1,PageSize:10,InputBottom:0},n(t,"isShow",!1),n(t,"commentId",0),n(t,"commentInfo",[]),n(t,"isVillager","0"),n(t,"nav",[{name:"照片"},{name:"资讯"},{name:"视频"}]),t},methods:{videoErrorCallback:function(e){t.showModal({content:e.target.errMsg,showCancel:!1})},goVideo:function(e){t.navigateTo({url:"../uploadVideo/uploadVideo"})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),"1"==t.currentTarget.dataset.id?this.value="1":"0"==t.currentTarget.dataset.id?this.value="0":"2"==t.currentTarget.dataset.id&&(this.value="2")},goPicUpload:function(e){t.navigateTo({url:"../addPic/addPic?villageId="+this.villageId})},articleClick:function(e){var i="https://m.ncweilv.com/h5/find/article.html?ids="+e;t.navigateTo({url:"../h5/h5?url="+i})},featureInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.getVillageCharacteristicImgList,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId}).then(function(i){200===i.data.flag?e.picInfo=i.data.data:t.showToast({title:i.data.msg,icon:"none"})})},infoInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.getVillageInformatioinList,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId}).then(function(i){200===i.data.flag?e.msgInfo=i.data.data:t.showToast({title:i.data.msg,icon:"none"})})},videoInit:function(){var e=this;e.$request.httpTokenRequest(e.$api.getVillageVideoList,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId}).then(function(i){200===i.data.flag?e.videoInfo=i.data.data.data_list:t.showToast({title:i.data.msg,icon:"none"})})},videoClick:function(e){var i=this;i.$request.httpTokenRequest(i.$api.viewVideo,i.$api.post,{Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION,videoId:e}).then(function(e){console.log(a(e," at pages/feature/feature.vue:277")),200===e.data.flag?i.videoInit():t.showToast({title:e.data.msg,icon:"none"})})},praiseClick:function(e){var i=this;i.$request.httpTokenRequest(i.$api.likeVideo,i.$api.post,{Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION,videoId:e}).then(function(e){console.log(a(e," at pages/feature/feature.vue:297")),200===e.data.flag?(t.showToast({title:e.data.data,icon:"none"}),i.videoInit()):t.showToast({title:e.data.data,icon:"none"})})},commentClick:function(t){this.isShow=!this.isShow,this.commentId=t,this.getVideoCommentList(t)},getVideoCommentList:function(e){var i=this;i.$request.httpTokenRequest(i.$api.getVideoCommentList,i.$api.get,{Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION,videoId:e,PageIndex:i.PageIndex,PageSize:i.PageSize}).then(function(e){console.log(a(e," at pages/feature/feature.vue:328")),200===e.data.flag?i.commentInfo=e.data.data.data_list:t.showToast({title:e.data.data,icon:"none"})})},sendClick:function(){var e=this;e.$request.httpTokenRequest(e.$api.commentVideo,e.$api.post,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,videoId:e.commentId,comment:e.InputBottom}).then(function(i){console.log(a(i," at pages/feature/feature.vue:349")),200===i.data.flag?(e.isShow=!1,e.videoInit()):t.showToast({title:i.data.data,icon:"none"})})},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}},onLoad:function(e){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.isVillager=e.isVillager,this.villageId=e.villageId},onShow:function(){this.featureInit(),this.infoInit(),this.videoInit()}};e.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])},4220:function(t,e,i){"use strict";i.r(e);var a=i("e039"),n=i("6fa4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("5d4c");var s=i("2877"),l=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"1fdcf7ab",null);e["default"]=l.exports},"5d4c":function(t,e,i){"use strict";var a=i("2ab3"),n=i.n(a);n.a},"6fa4":function(t,e,i){"use strict";i.r(e);var a=i("3744"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"78e0":function(t,e,i){"use strict";(function(t){i("fbf9"),i("921b");a(i("66fd"));var e=a(i("4220"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},e039:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}},[["78e0","common/runtime","common/vendor"]]]);
});
require('pages/feature/feature.js');
__wxRoute = 'pages/addPic/addPic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/addPic/addPic.js';

define('pages/addPic/addPic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addPic/addPic"],{"4bfd":function(e,t,a){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("0acf");var n={data:function(){return{imgList:[],modalName:null,textareaAValue:"",labelInfo:[],TabCur:0,picUrl:"",nav:[{name:"乡村美食"},{name:"民俗文化"},{name:"古建筑"},{name:"人物传记"}],pic:[{name:"相册",id:"1"},{name:"拍照",id:"2"}]}},methods:{labelInit:function(){var t=this;t.$request.httpTokenRequest(t.$api.getLabels,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,labelType:5}).then(function(a){200===a.data.flag?(t.labelInfo=a.data.data,console.log(e(t.labelInfo," at pages/addPic/addPic.vue:98")),t.TabCur=t.labelInfo[0].label_id):i.showToast({title:a.data.msg,icon:"none"})})},picSumbit:function(){if(0==this.imgList.length)i.showToast({title:"请添加照片",icon:"none"});else if(""==this.textareaAValue)i.showToast({title:"请添加照片描述",icon:"none"});else{var e=this;e.$request.httpTokenRequest(e.$api.addCharacteristicImg,e.$api.get,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId,villageImg:e.picUrl,imgDes:e.textareaAValue,labelId:e.TabCur}).then(function(e){200===e.data.flag?(i.showToast({title:e.data.msg,icon:"none"}),i.navigateBack()):i.showToast({title:e.data.msg,icon:"none"})})}},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},selectPic:function(t){var a=this;if(1==t)this.hideModal(),i.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=a.imgList.length?(a.imgList=a.imgList.concat(e.tempFilePaths),a.upload(a.imgList[0])):(a.imgList=e.tempFilePaths,a.upload(a.imgList[0]))}});else if(2==t){var n=this;this.hideModal(),i.chooseImage({count:1,sourceType:["camera"],success:function(t){var a=t.tempFilePaths;i.saveFile({tempFilePath:a[0],success:function(t){var a=t.savedFilePath;console.log(e(a," at pages/addPic/addPic.vue:187")),n.imgList.length,n.imgList.push(a),n.upload(n.imgList[0])}})}})}},upload:function(e){var t=this;i.uploadFile({url:t.$env.baseUrl+t.$api.fileUpload+"?type=grouptour",filePath:e,name:"file",success:function(e){var a=JSON.parse(e.data);t.picUrl=a.data[0]}})},ViewImage:function(e){i.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},DelImg:function(e){var t=this;i.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(a){a.confirm&&t.imgList.splice(e.currentTarget.dataset.index,1)}})},textareaAInput:function(e){this.textareaAValue=e.detail.value},tabSelect:function(e){this.TabCur=e}},onLoad:function(e){this.userInfo=i.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=e.villageId,this.labelInit()}};t.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},"82eb":function(e,t,a){"use strict";(function(e){a("fbf9"),a("921b");i(a("66fd"));var t=i(a("cdf3"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"94d1":function(e,t,a){"use strict";a.r(t);var i=a("4bfd"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},9715:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},a586:function(e,t,a){"use strict";var i=a("f4c4"),n=a.n(i);n.a},cdf3:function(e,t,a){"use strict";a.r(t);var i=a("9715"),n=a("94d1");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("a586");var s=a("2877"),l=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"51499291",null);t["default"]=l.exports},f4c4:function(e,t,a){}},[["82eb","common/runtime","common/vendor"]]]);
});
require('pages/addPic/addPic.js');
__wxRoute = 'pages/scenery/scenery';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/scenery/scenery.js';

define('pages/scenery/scenery.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scenery/scenery"],{"0318":function(e,t,n){"use strict";(function(e){n("fbf9"),n("921b");i(n("66fd"));var t=i(n("e019"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"0b18":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0acf");var i={data:function(){return{publish:"".concat(this.$env.img1,"publish@2x.png"),sceneryInfo:"",isVillager:"0"}},methods:{goPic:function(t){e.navigateTo({url:"../uploadPic/uploadPic?villageId="+this.villageId})},sceneryInit:function(){var t=this;t.$request.httpTokenRequest(t.$api.getVillageImageList,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,villageId:t.villageId}).then(function(n){200===n.data.flag?t.sceneryInfo=n.data.data:e.showToast({title:n.data.msg,icon:"none"})})}},onLoad:function(t){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=t.villageId,this.isVillager=t.isVillager},onShow:function(){this.sceneryInit()}};t.default=i}).call(this,n("6e42")["default"])},"43f1":function(e,t,n){"use strict";n.r(t);var i=n("0b18"),a=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);t["default"]=a.a},"62a7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},e019:function(e,t,n){"use strict";n.r(t);var i=n("62a7"),a=n("43f1");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("e6b8");var o=n("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"60a0f012",null);t["default"]=r.exports},e6b8:function(e,t,n){"use strict";var i=n("fe26"),a=n.n(i);a.a},fe26:function(e,t,n){}},[["0318","common/runtime","common/vendor"]]]);
});
require('pages/scenery/scenery.js');
__wxRoute = 'pages/uploadPic/uploadPic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/uploadPic/uploadPic.js';

define('pages/uploadPic/uploadPic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uploadPic/uploadPic"],{"044b":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"6a9c":function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{imgList:[],modalName:null,arr:[],pic:[{name:"相册",id:"1"},{name:"拍照",id:"2"}]}},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},selectPic:function(t){var a=this;if(1==t)this.hideModal(),e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=a.imgList.length?(a.imgList=a.imgList.concat(e.tempFilePaths),a.upload(a.imgList[0])):(a.imgList=e.tempFilePaths,a.upload(a.imgList[0]))}});else if(2==t){var n=this;this.hideModal(),e.chooseImage({count:1,sourceType:["camera"],success:function(t){var a=t.tempFilePaths;e.saveFile({tempFilePath:a[0],success:function(e){var t=e.savedFilePath;console.log(i(t," at pages/uploadPic/uploadPic.vue:97")),n.imgList.length,n.imgList.push(t),n.upload(n.imgList[0])}})}})}},upload:function(t){var a=this,n=this;e.uploadFile({url:n.$env.baseUrl+n.$api.fileUpload+"?type=grouptour",filePath:t,name:"file",success:function(e){var t=JSON.parse(e.data);console.log(i(t," at pages/uploadPic/uploadPic.vue:122")),a.arr.push(t.data[0])}})},submit:function(){var t=this.arr.join(","),i=this;i.$request.httpTokenRequest(i.$api.addVillageImgList,i.$api.get,{Key:i.$api.Key,Client:i.$api.CLIENT,Version:i.$api.VERSION,villageId:i.villageId,imgList:t}).then(function(t){200===t.data.code?e.navigateBack():e.showToast({title:t.data.msg,icon:"none"})})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var i=this;e.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&i.imgList.splice(t.currentTarget.dataset.index,1)}})}},onLoad:function(t){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=t.villageId}};t.default=a}).call(this,i("6e42")["default"],i("0de9")["default"])},"6e42b":function(e,t,i){"use strict";var a=i("d6d2"),n=i.n(a);n.a},"822b":function(e,t,i){"use strict";i.r(t);var a=i("6a9c"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"8f6c":function(e,t,i){"use strict";(function(e){i("fbf9"),i("921b");a(i("66fd"));var t=a(i("c366"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},c366:function(e,t,i){"use strict";i.r(t);var a=i("044b"),n=i("822b");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("6e42b");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"0eb2e206",null);t["default"]=u.exports},d6d2:function(e,t,i){}},[["8f6c","common/runtime","common/vendor"]]]);
});
require('pages/uploadPic/uploadPic.js');
__wxRoute = 'pages/order/orderEvaluate/orderEvaluate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/orderEvaluate/orderEvaluate.js';

define('pages/order/orderEvaluate/orderEvaluate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderEvaluate/orderEvaluate"],{"0dd0":function(t,e,n){"use strict";n.r(e);var a=n("152e"),i=n("c784");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("47bb");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"5c51d40e",null);e["default"]=o.exports},"152e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"47bb":function(t,e,n){"use strict";var a=n("a508"),i=n.n(a);i.a},"8d9f":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("0acf");var i={data:function(){return{list:[0,1,2,3,4],stara:"".concat(this.$env.img1,"light_start@2x.png"),starb:"".concat(this.$env.img1,"gray_start@2x.png"),xing:0,modalName:null,textareaAValue:"",remnant:0,imgList:[]}},methods:{star:function(e){this.xing=e+1,console.log(t("点击了"+(e+1)+"颗星"," at pages/order/orderEvaluate/orderEvaluate.vue:51"))},textareaAInput:function(t){this.textareaAValue=t.detail.value},ChooseImage:function(){var t=this;a.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},ViewImage:function(t){a.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var e=this;a.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(n){n.confirm&&e.imgList.splice(t.currentTarget.dataset.index,1)}})}},onLoad:function(){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},a508:function(t,e,n){},c784:function(t,e,n){"use strict";n.r(e);var a=n("8d9f"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},f46e:function(t,e,n){"use strict";(function(t){n("fbf9"),n("921b");a(n("66fd"));var e=a(n("0dd0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f46e","common/runtime","common/vendor"]]]);
});
require('pages/order/orderEvaluate/orderEvaluate.js');
__wxRoute = 'pages/publishEvaluate/publishEvaluate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/publishEvaluate/publishEvaluate.js';

define('pages/publishEvaluate/publishEvaluate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publishEvaluate/publishEvaluate"],{"177f":function(t,e,n){"use strict";(function(t){n("fbf9"),n("921b");a(n("66fd"));var e=a(n("f79b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2f6d":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("0acf");var i={data:function(){return{list:[0,1,2,3,4],stara:"".concat(this.$env.img1,"light_start@2x.png"),starb:"".concat(this.$env.img1,"gray_start@2x.png"),xing:0,modalName:null,textareaAValue:"",remnant:0,imgList:[]}},methods:{star:function(e){this.xing=e+1,console.log(t("点击了"+(e+1)+"颗星"," at pages/publishEvaluate/publishEvaluate.vue:57"))},textareaAInput:function(t){this.textareaAValue=t.detail.value},ChooseImage:function(){var t=this;a.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},ViewImage:function(t){a.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var e=this;a.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(n){n.confirm&&e.imgList.splice(t.currentTarget.dataset.index,1)}})}},onLoad:function(){this.userInfo=a.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},"71c6":function(t,e,n){"use strict";var a=n("7420"),i=n.n(a);i.a},7420:function(t,e,n){},a025:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},eec4:function(t,e,n){"use strict";n.r(e);var a=n("2f6d"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},f79b:function(t,e,n){"use strict";n.r(e);var a=n("a025"),i=n("eec4");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("71c6");var s=n("2877"),c=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"1c1ef683",null);e["default"]=c.exports}},[["177f","common/runtime","common/vendor"]]]);
});
require('pages/publishEvaluate/publishEvaluate.js');
__wxRoute = 'pages/villageIntroduce/villageIntroduce';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageIntroduce/villageIntroduce.js';

define('pages/villageIntroduce/villageIntroduce.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageIntroduce/villageIntroduce"],{"143e":function(e,t,n){"use strict";(function(e){n("fbf9"),n("921b");a(n("66fd"));var t=a(n("efe0"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b0b3:function(e,t,n){},ba22:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("0acf");var a={data:function(){return{remnant:0,modalName:null,villageName:"",textareaAValue:"",villageContent:""}},methods:{textareaAInput:function(e){this.remnant=e.detail.value.length},videoInit:function(){var t=this;t.$request.httpTokenRequest(t.$api.editVillageIntro,t.$api.get,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,villageId:t.villageId,villageIntro:t.villageContent}).then(function(t){200===t.data.flag?(e.showToast({title:t.data.msg,icon:"none"}),e.navigateBack()):e.showToast({title:t.data.msg,icon:"none"})})}},onLoad:function(t){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=t.villageId,this.villageName=t.villageName,this.villageContent=t.villageContent}};t.default=a}).call(this,n("6e42")["default"])},e432:function(e,t,n){"use strict";n.r(t);var a=n("ba22"),i=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);t["default"]=i.a},efe0:function(e,t,n){"use strict";n.r(t);var a=n("f258"),i=n("e432");for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);n("fd83");var o=n("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"3e7607ba",null);t["default"]=u.exports},f258:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},fd83:function(e,t,n){"use strict";var a=n("b0b3"),i=n.n(a);i.a}},[["143e","common/runtime","common/vendor"]]]);
});
require('pages/villageIntroduce/villageIntroduce.js');
__wxRoute = 'pages/villageSet/villagePic/villagePic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageSet/villagePic/villagePic.js';

define('pages/villageSet/villagePic/villagePic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageSet/villagePic/villagePic"],{"6dab":function(e,t,a){"use strict";var i=a("9e05"),n=a.n(i);n.a},"9e05":function(e,t,a){},a40d:function(e,t,a){"use strict";a.r(t);var i=a("ad82"),n=a.n(i);for(var l in i)"default"!==l&&function(e){a.d(t,e,function(){return i[e]})}(l);t["default"]=n.a},a752:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},ad82:function(e,t,a){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("0acf");var n={data:function(){return{imgList:[],modalName:null,picUrl:"",villager_cover:"".concat(this.$env.img1,"villager_cover@2x.png"),pic:[{name:"相册",id:"1"},{name:"拍照",id:"2"}]}},methods:{showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},RadioChange:function(e){this.radio=e.detail.value},selectPic:function(t){var a=this;if(1==t)this.hideModal(),e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=a.imgList.length?(a.imgList=a.imgList.concat(e.tempFilePaths),a.upload(a.imgList[0])):(a.imgList=e.tempFilePaths,a.upload(a.imgList[0]))}});else if(2==t){var n=this;this.hideModal(),e.chooseImage({count:1,sourceType:["camera"],success:function(t){var a=t.tempFilePaths;e.saveFile({tempFilePath:a[0],success:function(e){var t=e.savedFilePath;console.log(i(t," at pages/villageSet/villagePic/villagePic.vue:99")),n.imgList.length,n.imgList.push(t),n.upload(n.imgList[0])}})}})}},upload:function(t){var a=this;e.uploadFile({url:a.$env.baseUrl+a.$api.fileUpload+"?type=grouptour",filePath:t,name:"file",success:function(e){var t=JSON.parse(e.data);a.picUrl=t.data[0]}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var a=this;e.showModal({content:"确定要删除这张照片吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&a.imgList.splice(t.currentTarget.dataset.index,1)}})},getPic:function(){var t=this;t.$request.httpTokenRequest(t.$api.villageEdit,t.$api.post,{Key:t.$api.Key,Client:t.$api.CLIENT,Version:t.$api.VERSION,villageId:t.villageId,villageImg:t.picUrl}).then(function(t){200===t.data.flag?(e.showToast({title:t.data.data,icon:"none"}),e.navigateBack()):e.showToast({title:t.data.data,icon:"none"})})}},onLoad:function(t){this.userInfo=e.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=t.villageId}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},c60a:function(e,t,a){"use strict";a.r(t);var i=a("a752"),n=a("a40d");for(var l in n)"default"!==l&&function(e){a.d(t,e,function(){return n[e]})}(l);a("6dab");var o=a("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"0861bb22",null);t["default"]=s.exports},fbb2:function(e,t,a){"use strict";(function(e){a("fbf9"),a("921b");i(a("66fd"));var t=i(a("c60a"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["fbb2","common/runtime","common/vendor"]]]);
});
require('pages/villageSet/villagePic/villagePic.js');
__wxRoute = 'pages/villageSet/villageIntroduce/villageIntroduce';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/villageSet/villageIntroduce/villageIntroduce.js';

define('pages/villageSet/villageIntroduce/villageIntroduce.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/villageSet/villageIntroduce/villageIntroduce"],{"1e4a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"43ad":function(t,e,a){"use strict";a.r(e);var n=a("e870"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},7632:function(t,e,a){},cffe:function(t,e,a){"use strict";(function(t){a("fbf9"),a("921b");n(a("66fd"));var e=n(a("eda9"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},df93:function(t,e,a){},e870:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{modalName:null,textareaAValue:""}},methods:{textareaAInput:function(t){this.textareaAValue=t.detail.value},introduce:function(){var e=this;e.$request.httpTokenRequest(e.$api.villageEdit,e.$api.post,{Key:e.$api.Key,Client:e.$api.CLIENT,Version:e.$api.VERSION,villageId:e.villageId,villageIntro:e.textareaAValue}).then(function(e){200===e.data.flag?(t.showToast({title:e.data.data,icon:"none"}),t.navigateBack()):t.showToast({title:e.data.data,icon:"none"})})}},onLoad:function(e){this.userInfo=t.getStorageSync("userInfo"),this.$api.Key=this.userInfo.key,this.villageId=e.villageId}};e.default=a}).call(this,a("6e42")["default"])},eda9:function(t,e,a){"use strict";a.r(e);var n=a("1e4a"),i=a("43ad");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("f32c"),a("fda4");var o=a("2877"),l=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"6612f124",null);e["default"]=l.exports},f32c:function(t,e,a){"use strict";var n=a("df93"),i=a.n(n);i.a},fda4:function(t,e,a){"use strict";var n=a("7632"),i=a.n(n);i.a}},[["cffe","common/runtime","common/vendor"]]]);
});
require('pages/villageSet/villageIntroduce/villageIntroduce.js');
__wxRoute = 'pages/modal/homestayDetails/homestayDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modal/homestayDetails/homestayDetails.js';

define('pages/modal/homestayDetails/homestayDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modal/homestayDetails/homestayDetails"],{"0826":function(n,t,e){"use strict";var o=e("6c71"),i=e.n(o);i.a},"1eab":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("0acf");var o={data:function(){return{no_homestay:"".concat(this.$env.img1,"no_homestay@2x.png"),homestay_red:"".concat(this.$env.img1,"love_add@2x.png"),homestay_gray:"".concat(this.$env.img1,"love_unadd@2x.png"),village_icon:"".concat(this.$env.img1,"village_icon@2x.png"),eve_1:"".concat(this.$env.img1,"eve_1@2x.png"),eve_2:"".concat(this.$env.img1,"eve_2@2x.png"),eve_3:"".concat(this.$env.img1,"eve_3@2x.png"),owner:"".concat(this.$env.img1,"owner.png"),eve_5:"".concat(this.$env.img1,"eve_5@2x.png"),eve_4:"".concat(this.$env.img1,"eve_4@2x.png"),tel:"".concat(this.$env.img1,"dianhua@2x.png"),news:"".concat(this.$env.img1,"xiaoxi@2x.png"),star:0,isCollect:!1,roomList:[{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1}],serviceList:[{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1},{icon:"".concat(this.$env.img1,"room_1@2x.png"),p:"独立单间",id:1}]}},computed:{starScore:function(){for(var n=[],t=Math.floor(2*this.star)/2,e=Math.floor(t),o=0;o<e;o++)n.push("on");while(n.length<5)n.push("off");return n}},onLoad:function(){this.star=4}};t.default=o},"6c71":function(n,t,e){},"809b":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},a321:function(n,t,e){"use strict";e.r(t);var o=e("1eab"),i=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=i.a},a466:function(n,t,e){},e53d:function(n,t,e){"use strict";var o=e("a466"),i=e.n(o);i.a},f7e0:function(n,t,e){"use strict";e.r(t);var o=e("809b"),i=e("a321");for(var c in i)"default"!==c&&function(n){e.d(t,n,function(){return i[n]})}(c);e("e53d"),e("0826");var a=e("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"254174d4",null);t["default"]=r.exports},f8c1:function(n,t,e){"use strict";(function(n){e("fbf9"),e("921b");o(e("66fd"));var t=o(e("f7e0"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f8c1","common/runtime","common/vendor"]]]);
});
require('pages/modal/homestayDetails/homestayDetails.js');
__wxRoute = 'pages/modal/homestay/homestay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modal/homestay/homestay.js';

define('pages/modal/homestay/homestay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modal/homestay/homestay"],{"086e":function(t,n,e){"use strict";(function(t){e("fbf9"),e("921b");o(e("66fd"));var n=o(e("bcbb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"0ca0":function(t,n,e){},"178b":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"1d0c":function(t,n,e){"use strict";var o=e("0ca0"),a=e.n(o);a.a},"36c9":function(t,n,e){},"3e14":function(t,n,e){"use strict";var o=e("36c9"),a=e.n(o);a.a},"70de":function(t,n,e){"use strict";e.r(n);var o=e("9d68"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},"9d68":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("0acf");var o={data:function(){return{no_homestay:"".concat(this.$env.img1,"no_homestay@2x.png"),homestay_red:"".concat(this.$env.img1,"homestay_red.png"),homestay_gray:"".concat(this.$env.img1,"homestay_gray.png"),isHomestay:!1,isCollect:!1,InputBottom:0,index:-1,picker:["喵喵喵","汪汪汪","哼唧哼唧"]}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0},PickerChange:function(t){this.index=t.detail.value}}};n.default=o},bcbb:function(t,n,e){"use strict";e.r(n);var o=e("178b"),a=e("70de");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("3e14"),e("1d0c");var c=e("2877"),i=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"f3ed776a",null);n["default"]=i.exports}},[["086e","common/runtime","common/vendor"]]]);
});
require('pages/modal/homestay/homestay.js');
__wxRoute = 'pages/chat/chatDeatils/chatDeatils';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chatDeatils/chatDeatils.js';

define('pages/chat/chatDeatils/chatDeatils.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chatDeatils/chatDeatils"],{1453:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},2778:function(t,n,e){"use strict";e.r(n);var a=e("e168"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=u.a},ca2f:function(t,n,e){"use strict";(function(t){e("fbf9"),e("921b");a(e("66fd"));var n=a(e("da45"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},da45:function(t,n,e){"use strict";e.r(n);var a=e("1453"),u=e("2778");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);var c=e("2877"),f=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=f.exports},e168:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}}};n.default=a}},[["ca2f","common/runtime","common/vendor"]]]);
});
require('pages/chat/chatDeatils/chatDeatils.js');
__wxRoute = 'pages/h5/h5';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/h5/h5.js';

define('pages/h5/h5.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/h5/h5"],{"43ba":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},url:""}},onLoad:function(t){t&&t.url&&(this.url=t.url)},methods:{}};e.default=u},"9df7":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},b27e:function(t,e,n){"use strict";n.r(e);var u=n("43ba"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},ca6b:function(t,e,n){"use strict";(function(t){n("fbf9"),n("921b");u(n("66fd"));var e=u(n("cc5e"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},cc5e:function(t,e,n){"use strict";n.r(e);var u=n("9df7"),r=n("b27e");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);var c=n("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports}},[["ca6b","common/runtime","common/vendor"]]]);
});
require('pages/h5/h5.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

