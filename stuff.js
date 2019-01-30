var app = angular.module('app',['ngRoute','ngAnimate']);

const {remote} = require('electron');

const main = remote.require('./index.js');


app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: `${__dirname}/component/home/example4.html`,
        controller: 'headCtrl'
    }).when('/sumurl/:tt/:a/:b/:c/:d/:e/:f/:g/:h/:i/:j/:k/:l/:m/:n/:o/:p/:q/:r/:s/:t/:u/:v/:w/:x/:y/:z',{
        templateUrl: `${__dirname}/component/home/home2.html`,
        controller: 'message1'
    }).when('/second-msg',{
        templateUrl: `${__dirname}/component/home/directory.html`,
        controller: 'message2'
    }).when('/third-msg',{
        templateUrl: `${__dirname}/component/home/pearson.html`,
        controller: 'message3'
    }).when('/conurl/:tt/:a/:b/:c/:d/:e/:f/:g/:h/:i/:j/:k/:l/:m/:n/:o/:p/:q/:r/:s/:t/:u/:v/:w/:x/:y/:z',{
        templateUrl: `${__dirname}/component/home/pearsco.html`,
        controller: 'message4'
    }).when('/fifth/:tt/:a/:b/:c/:d/:e/:f/:g/:h/:i/:j/:k/:l/:m/:n/:o/:p/:q/:r/:s/:t/:u/:v/:w/:x/:y/:z',{
        templateUrl: `${__dirname}/component/home/solve.html`,
        controller: 'message5'
    }).when('/note', {
        templateUrl: `${__dirname}/component/home/note.html`,
        controller: 'headCtrl'
    }).when('/about', {
        templateUrl: `${__dirname}/component/home/about.html`,
        controller: 'headCtrl'
    }).when('/contact', {
        templateUrl: `${__dirname}/component/home/contact.html`,
        controller: 'headCtrl'
    })
    .otherwise({
        templateUrl: '404.html'
            
    })
});
    

app.controller('headCtrl',function($scope){
    var win = remote.getCurrentWindow();

    $scope.close = function(){
        win.close();
    };
    $scope.maximize = function(){
        win.isMaximized() ? win.unmaximize() : win.maximize();
    };
    $scope.minimize = function(){
        win.minimize();
    }
    });

   
        
    app.controller('message1',['$scope','$routeParams',function($scope,$routeParams){
            var tt = parseInt($routeParams.tt);
            $scope.tt = tt;
            var a =  parseInt($routeParams.a);
            $scope.a = a;
            var b = parseInt($routeParams.b);
            $scope.b = b;
            var c = parseInt($routeParams.c);
            $scope.c = c;
            var d = parseInt($routeParams.d);
            $scope.d = d;
            var e = parseInt($routeParams.e);
            $scope.e = e;
            var f = parseInt($routeParams.f);
            $scope.f = f;
            var g = parseInt($routeParams.g);
            $scope.g = g;
            var h = parseInt($routeParams.h);
            $scope.h = h;
            var i = parseInt($routeParams.i);
            $scope.i = i;
            var j = parseInt($routeParams.j);
            $scope.j = j;
            var k = parseInt($routeParams.k);
            $scope.k = k;
            var l = parseInt($routeParams.l);
            $scope.l = l;
            var m = parseInt($routeParams.m);
            $scope.m = m;
            var n = parseInt($routeParams.n);
            $scope.n = n;
            var o = parseInt($routeParams.o);
            $scope.o = o;
            var p = parseInt($routeParams.p);
            $scope.p = p;
            var q = parseInt($routeParams.q);
            $scope.q = q;
            var r = parseInt($routeParams.r);
            $scope.r = r;
            var s = parseInt($routeParams.s);
            $scope.s = s;
            var t = parseInt($routeParams.t);
            $scope.t = t;
            var u = parseInt($routeParams.u);
            $scope.u = u;
            var v = parseInt($routeParams.v);
            $scope.v = v;
            var w = parseInt($routeParams.w);
            $scope.w = w;
            var x = parseInt($routeParams.x);
            $scope.x = x;
            var y = parseInt($routeParams.y);
            $scope.y = y;
            var z = parseInt($routeParams.z);
            $scope.z = z;


            var sumX = (parseInt(a + c + e + g + i + k + m + o + q + s + u + w + y));
            $scope.xr = sumX;
    
    
            var sumY = (parseInt(b + d + f + h + j + l + n + p + r + t + v + x + z));
            $scope.yr = sumY;
                
    
                var xx = ((Math.pow(a,2))+(Math.pow(c,2))+(Math.pow(e,2))+(Math.pow(g,2))+(Math.pow(i,2))+
                            (Math.pow(k,2))+(Math.pow(m,2))+(Math.pow(o,2))+(Math.pow(q,2))+(Math.pow(s,2))+
                            (Math.pow(u,2))+(Math.pow(w,2))+(Math.pow(y,2)));
                $scope.xx = xx;
                
                var xy = ((a*b)+(c*d)+(e*f)+(g*h)+(i*j)+(k*l)+(m*n)+(o*p)+(q*r)+(s*t)+(u*v)+(w*x)+(y*z));
                $scope.xy = xy;
                //m = (tt)*(xy) - (xr)(xy)/(tt)*(xx) - (xr)(xr)
                //Stage one scopes
                var one = (parseInt((tt))*(xy));
                $scope.one = one;
                var two = (parseInt((sumX)*(sumY)));
                $scope.two = two;
                var three = (parseInt((tt)*(xx)));
                $scope.three = three;
                var four = (parseInt((sumX)*(sumX)));
                $scope.four = four;

                
                //Stage two scopes
                var five = (one - two);
                $scope.five = five;
                var six = (three - four);
                $scope.six = six;

                //Stage three scopes
                $scope.seven = (five/six);

            



        $scope.linear = function(){
            var url = $interpolate('/fifth/{{tt}}/{{a}}/{{b}}/{{c}}/{{d}}/{{e}}/{{f}}/{{g}}/{{h}}/{{i}}/{{j}}/{{k}}/{{l}}/{{m}}/{{n}}/{{o}}/{{p}}/{{q}}/{{r}}/{{s}}/{{t}}/{{u}}/{{v}}/{{w}}/{{x}}/{{y}}/{{z}}')($scope);
                $location.path(url);
        }  
        }])

        app.controller('message2',['$scope','$location','$interpolate',function($scope,$location,$interpolate){
            $scope.tt = 0;
            $scope.a = 0;
            $scope.b = 0;
            $scope.c = 0;
            $scope.d = 0;
            $scope.e = 0;
            $scope.f = 0;
            $scope.g = 0;
            $scope.h = 0;
            $scope.i = 0;
            $scope.j = 0;
            $scope.k = 0;
            $scope.l = 0;
            $scope.m = 0;
            $scope.n = 0;
            $scope.o = 0;
            $scope.p = 0;
            $scope.q = 0;
            $scope.r = 0;
            $scope.s = 0;
            $scope.t = 0;
            $scope.u = 0;
            $scope.v = 0;
            $scope.w = 0;
            $scope.x = 0;
            $scope.y = 0;
            $scope.z = 0;
    
            
                $scope.doSum = function(){
                    var url = $interpolate('/sumurl/{{tt}}/{{a}}/{{b}}/{{c}}/{{d}}/{{e}}/{{f}}/{{g}}/{{h}}/{{i}}/{{j}}/{{k}}/{{l}}/{{m}}/{{n}}/{{o}}/{{p}}/{{q}}/{{r}}/{{s}}/{{t}}/{{u}}/{{v}}/{{w}}/{{x}}/{{y}}/{{z}}')($scope);
                    $location.path(url);
                
                }
        }])
        
        app.controller('message3',['$scope','$location','$interpolate',function($scope,$location,$interpolate){
            $scope.tt = 0;
            $scope.a = 0;
            $scope.b = 0;
            $scope.c = 0;
            $scope.d = 0;
            $scope.e = 0;
            $scope.f = 0;
            $scope.g = 0;
            $scope.h = 0;
            $scope.i = 0;
            $scope.j = 0;
            $scope.k = 0;
            $scope.l = 0;
            $scope.m = 0;
            $scope.n = 0;
            $scope.o = 0;
            $scope.p = 0;
            $scope.q = 0;
            $scope.r = 0;
            $scope.s = 0;
            $scope.t = 0;
            $scope.u = 0;
            $scope.v = 0;
            $scope.w = 0;
            $scope.x = 0;
            $scope.y = 0;
            $scope.z = 0;
    
            
                $scope.doCal = function(){
                    var url = $interpolate('/conurl/{{tt}}/{{a}}/{{b}}/{{c}}/{{d}}/{{e}}/{{f}}/{{g}}/{{h}}/{{i}}/{{j}}/{{k}}/{{l}}/{{m}}/{{n}}/{{o}}/{{p}}/{{q}}/{{r}}/{{s}}/{{t}}/{{u}}/{{v}}/{{w}}/{{x}}/{{y}}/{{z}}')($scope);
                    $location.path(url);
                }
        }])
    
        app.controller('message4',['$scope','$routeParams','$location','$interpolate',function($scope,$routeParams,$location,$interpolate){
            $scope.tt = $routeParams.tt;
            $scope.a = $routeParams.a;
            $scope.b = $routeParams.b;
            $scope.c = $routeParams.c;
            $scope.d = $routeParams.d;
            $scope.e = $routeParams.e;
            $scope.f = $routeParams.f;
            $scope.g = $routeParams.g;
            $scope.h = $routeParams.h;
            $scope.i = $routeParams.i;
            $scope.j = $routeParams.j;
            $scope.k = $routeParams.k;
            $scope.l = $routeParams.l;
            $scope.m = $routeParams.m;
            $scope.n = $routeParams.n;
            $scope.o = $routeParams.o;
            $scope.p = $routeParams.p;
            $scope.q = $routeParams.q;
            $scope.r = $routeParams.r;
            $scope.s = $routeParams.s;
            $scope.t = $routeParams.t;
            $scope.u = $routeParams.u;
            $scope.v = $routeParams.v;
            $scope.w = $routeParams.w;
            $scope.x = $routeParams.x;
            $scope.y = $routeParams.y;
            $scope.z = $routeParams.z;
    //Creating variables
            var tt = $routeParams.tt;
            var a = parseInt($routeParams.a);
            var b = parseInt($routeParams.b);
            var c = parseInt($routeParams.c);
            var d = parseInt($routeParams.d);
            var e = parseInt($routeParams.e);
            var f = parseInt($routeParams.f);
            var g = parseInt($routeParams.g);
            var h = parseInt($routeParams.h);
            var i = parseInt($routeParams.i);
            var j = parseInt($routeParams.j);
            var k = parseInt($routeParams.k);
            var l = parseInt($routeParams.l);
            var m = parseInt($routeParams.m);
            var n = parseInt($routeParams.n);
            var o = parseInt($routeParams.o);
            var p = parseInt($routeParams.p);
            var q = parseInt($routeParams.q);
            var r = parseInt($routeParams.r);
            var s = parseInt($routeParams.s);
            var t = parseInt($routeParams.t);
            var u = parseInt($routeParams.u);
            var v = parseInt($routeParams.v);
            var w = parseInt($routeParams.w);
            var x = parseInt($routeParams.x);
            var y = parseInt($routeParams.y);
            var z = parseInt($routeParams.z);
    
    
            $scope.pearson = function(){
                var sumX = (parseInt(a + c + e + g + i + k + m + o + q + s + u + w + y));
                $scope.xr = sumX;
    
    
                var sumY = (parseInt(b + d + f + h + j + l + n + p + r + t + v + x + z));
                $scope.yr = sumY;
                
    
                var xx = ((Math.pow(a,2))+(Math.pow(c,2))+(Math.pow(e,2))+(Math.pow(g,2))+(Math.pow(i,2))+
                            (Math.pow(k,2))+(Math.pow(m,2))+(Math.pow(o,2))+(Math.pow(q,2))+(Math.pow(s,2))+
                            (Math.pow(u,2))+(Math.pow(w,2))+(Math.pow(y,2)));
                $scope.xx = xx;
                
    
                var yy = ((Math.pow(b,2))+(Math.pow(d,2))+(Math.pow(f,2))+(Math.pow(h,2))+(Math.pow(j,2))+
                            (Math.pow(l,2))+(Math.pow(n,2))+(Math.pow(p,2))+(Math.pow(r,2))+(Math.pow(t,2))+
                            (Math.pow(v,2))+(Math.pow(x,2))+(Math.pow(z,2)));
                $scope.yy = yy;
            
    
                var xy = ((a*b)+(c*d)+(e*f)+(g*h)+(i*j)+(k*l)+(m*n)+(o*p)+(q*r)+(s*t)+(u*v)+(w*x)+(y*z));
                $scope.xy = xy;
                 
                
                 //m = (n.sumxy - sumx.sumy)/sqrt((n.sumxx - sumx*sumx)(n.sumyy - sumy*y))
                
                //Stage one scopes
                var one = (parseInt((tt))*(xy));
                $scope.one = one;
                var two = (parseInt((sumX)*(sumY)));
                $scope.two = two;
                var three = (parseInt((tt)*(xx)));
                $scope.three = three;
                var four = (parseInt((sumX)*(sumX)));
                $scope.four = four;
                var five = (parseInt((tt)*(yy)));
                $scope.five = five;
                var six = (parseInt((sumY)*(sumY)));
                $scope.six = six;
                //Stage two scopes
                var seven = (one - two);
                $scope.seven = seven;
                var eight = (three - four);
                $scope.eight = eight;
                var nine = (five - six);
                $scope.nine = nine;
                //Stage three scopes
                var ten = ((eight)*(nine));
                $scope.ten = ten;
                //Stage four scopes
                var eleven = (Math.sqrt(ten));
                $scope.eleven = eleven;
                //final stage
                var twelve = (seven/eleven);
                $scope.twelve = twelve;
                
                if(twelve < 0){
                    $scope.thirteen = "The answer shows a negative coorelation";
                } else if(twelve == 0){
                    $scope.thirteen = "The answer shows no correlation";
                } else if(twelve > 0){
                    $scope.thirteen = "The answer shows a positive correlation";
                } else {
                    $scope.thirteen = "The answer shows an unknown correlation";
                }
    
            }
            $scope.pearson();


            $scope.solve = function(){
                var url = $interpolate('/fifth/{{tt}}/{{a}}/{{b}}/{{c}}/{{d}}/{{e}}/{{f}}/{{g}}/{{h}}/{{i}}/{{j}}/{{k}}/{{l}}/{{m}}/{{n}}/{{o}}/{{p}}/{{q}}/{{r}}/{{s}}/{{t}}/{{u}}/{{v}}/{{w}}/{{x}}/{{y}}/{{z}}')($scope);
                    $location.path(url);
            }


           
        }])











        // fifth/method for solve 
        app.controller('message5',['$scope','$routeParams',function($scope,$routeParams){
            $scope.tt = $routeParams.tt;
            $scope.a = $routeParams.a;
            $scope.b = $routeParams.b;
            $scope.c = $routeParams.c;
            $scope.d = $routeParams.d;
            $scope.e = $routeParams.e;
            $scope.f = $routeParams.f;
            $scope.g = $routeParams.g;
            $scope.h = $routeParams.h;
            $scope.i = $routeParams.i;
            $scope.j = $routeParams.j;
            $scope.k = $routeParams.k;
            $scope.l = $routeParams.l;
            $scope.m = $routeParams.m;
            $scope.n = $routeParams.n;
            $scope.o = $routeParams.o;
            $scope.p = $routeParams.p;
            $scope.q = $routeParams.q;
            $scope.r = $routeParams.r;
            $scope.s = $routeParams.s;
            $scope.t = $routeParams.t;
            $scope.u = $routeParams.u;
            $scope.v = $routeParams.v;
            $scope.w = $routeParams.w;
            $scope.x = $routeParams.x;
            $scope.y = $routeParams.y;
            $scope.z = $routeParams.z;
    //Creating variables
            var tt = $routeParams.tt;
            var a = parseInt($routeParams.a);
            var b = parseInt($routeParams.b);
            var c = parseInt($routeParams.c);
            var d = parseInt($routeParams.d);
            var e = parseInt($routeParams.e);
            var f = parseInt($routeParams.f);
            var g = parseInt($routeParams.g);
            var h = parseInt($routeParams.h);
            var i = parseInt($routeParams.i);
            var j = parseInt($routeParams.j);
            var k = parseInt($routeParams.k);
            var l = parseInt($routeParams.l);
            var m = parseInt($routeParams.m);
            var n = parseInt($routeParams.n);
            var o = parseInt($routeParams.o);
            var p = parseInt($routeParams.p);
            var q = parseInt($routeParams.q);
            var r = parseInt($routeParams.r);
            var s = parseInt($routeParams.s);
            var t = parseInt($routeParams.t);
            var u = parseInt($routeParams.u);
            var v = parseInt($routeParams.v);
            var w = parseInt($routeParams.w);
            var x = parseInt($routeParams.x);
            var y = parseInt($routeParams.y);
            var z = parseInt($routeParams.z);
    
    
            $scope.pearson = function(){
                var sumX = (parseInt(a + c + e + g + i + k + m + o + q + s + u + w + y));
                $scope.xr = sumX;
    
    
                var sumY = (parseInt(b + d + f + h + j + l + n + p + r + t + v + x + z));
                $scope.yr = sumY;
                
    
                var xx = ((Math.pow(a,2))+(Math.pow(c,2))+(Math.pow(e,2))+(Math.pow(g,2))+(Math.pow(i,2))+
                            (Math.pow(k,2))+(Math.pow(m,2))+(Math.pow(o,2))+(Math.pow(q,2))+(Math.pow(s,2))+
                            (Math.pow(u,2))+(Math.pow(w,2))+(Math.pow(y,2)));
                $scope.xx = xx;
                
    
                var yy = ((Math.pow(b,2))+(Math.pow(d,2))+(Math.pow(f,2))+(Math.pow(h,2))+(Math.pow(j,2))+
                            (Math.pow(l,2))+(Math.pow(n,2))+(Math.pow(p,2))+(Math.pow(r,2))+(Math.pow(t,2))+
                            (Math.pow(v,2))+(Math.pow(x,2))+(Math.pow(z,2)));
                $scope.yy = yy;
            
    
                var xy = ((a*b)+(c*d)+(e*f)+(g*h)+(i*j)+(k*l)+(m*n)+(o*p)+(q*r)+(s*t)+(u*v)+(w*x)+(y*z));
                $scope.xy = xy;
                 
                
                 //m = (n.sumxy - sumx.sumy)/sqrt((n.sumxx - sumx*sumx)(n.sumyy - sumy*y))
                
                //Stage one scopes
                var one = (parseInt((tt))*(xy));
                $scope.one = one;
                var two = (parseInt((sumX)*(sumY)));
                $scope.two = two;
                var three = (parseInt((tt)*(xx)));
                $scope.three = three;
                var four = (parseInt((sumX)*(sumX)));
                $scope.four = four;
                var five = (parseInt((tt)*(yy)));
                $scope.five = five;
                var six = (parseInt((sumY)*(sumY)));
                $scope.six = six;
                //Stage two scopes
                var seven = (one - two);
                $scope.seven = seven;
                var eight = (three - four);
                $scope.eight = eight;
                var nine = (five - six);
                $scope.nine = nine;
                //Stage three scopes
                var ten = ((eight)*(nine));
                $scope.ten = ten;
                //Stage four scopes
                var eleven = (Math.sqrt(ten));
                $scope.eleven = eleven;
                //final stage
                var twelve = (seven/eleven);
                $scope.twelve = twelve;
                
                if(twelve < 0){
                    $scope.thirteen = "The answer shows a negative coorelation";
                } else if(twelve == 0){
                    $scope.thirteen = "The answer shows no correlation";
                } else if(twelve > 0){
                    $scope.thirteen = "The answer shows a positive correlation";
                } else {
                    $scope.thirteen = "The answer shows an unknown correlation";
                }
    
            }
            $scope.pearson();
        
        }
    ]
        )