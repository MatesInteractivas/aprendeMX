var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;


function kochFractal(A, B){
    this.pointA = A;
    this.pointB = B;
    this.ant = [-10000,-10000];
};
var protoF =  kochFractal.prototype;



protoF.draw = function(depth,pointArray){
    this.drawAux(this.pointA,this.pointB,depth,pointArray);
} 


protoF.drawAux = function(A,B,depth,pointArray){

    if(depth == 0){
        this.DrawLine(A, B, pointArray);
        return;
    }
    

    var C = this.divide(this.add(this.multiply(A, 2), B), 3);
    var D = this.divide(this.add(this.multiply(B, 2), A), 3);
    var F = this.divide(this.add(A, B), 2);
    
    var V1 = this.divide(this.minus(F, A), this.length(F, A));
    var V2 = [V1[1], -V1[0]];

    var E = this.add(this.multiply(V2, Math.sqrt(3)/6 * this.length(B, A)), F);

    
    depth--;
    
    
    
    
    this.drawAux(A, C, depth, pointArray);
    this.drawAux(C, E, depth, pointArray);
    this.drawAux(E, D, depth, pointArray);
    this.drawAux(D, B, depth, pointArray);
    
    
    
}




protoF.multiply = function(v, num){
    return [v[0]*num, v[1]*num];
};

protoF.divide = function(v, num){
    return [v[0]/num, v[1]/num];
};
 
protoF.add = function(a, b){
    return [a[0]+b[0], a[1]+b[1]];
};

protoF.minus = function(a, b){
    return [a[0]-b[0], a[1]-b[1]];
};

protoF.length = function(a, b){
    return Math.sqrt(Math.pow(a[0] - b[0],2) + 
                     Math.pow(a[1] - b[1],2));
};

protoF.DrawLine = function(a, b, pointArray){
    if(this.ant[0] != b[0] && this.ant[0] != b[0])
        pointArray.push([a[0], a[1], 1]);
    pointArray.push([b[0], b[1], 0]);
    
    this.ant = b;
};



function init(){
    main_canvas = document.getElementById("imageView");
    mcontext = main_canvas.getContext('2d');


    var margen = 10
    var tmpW = main_canvas.width-2*margen;
    var tmpH = main_canvas.width-2*margen;

    
    var  fact = 41.5/48;
    tmp2W=tmpW*fact;
    tmp2H=tmpH*fact;
    
    x1=margen + (tmpW-tmp2W)/2;
    y1=margen + (tmpH-tmp2H)/2+(10/48)*tmp2H-10;
    var A = [x1,        y1];
    var B = [x1 + tmp2W, y1];
    

    var dist = Math.sqrt(
            tmp2W*tmp2W*(3/4)
            );
    var C = [(A[0]+B[0])/2, A[1]+dist];


    var fractalList = [
        new kochFractal(A,B),
        new kochFractal(B,C),
        new kochFractal(C,A),     
    ];

    var depth = 0;
    var scale = document.getElementById("scale");
    var $main_canvas = $(main_canvas);
    scale.value = 1;
    var mouseA = false;
    var deltas = [0,0,scale.value];
    var pointArray = [];

    var imgPattern = document.getElementById('pattern');

    function reDraw(updateFractal) {

        mcontext.save();
            if(updateFractal){
                pointArray = [];
                var pAnt = fractalList[0].ant;
                for (var i = 0; i < fractalList.length ; i++) {
                    fractalList[i].ant = pAnt;
                    fractalList[i].draw(depth,pointArray);
                     var pAnt = fractalList[i].ant;
                };
                var pArray2 = [pointArray[0],pointArray[1]];
                var pAnt = pointArray[1];
                for (var i = 2; i < pointArray.length ; i++) {
                    var cP = pointArray[i];
                    var Dx = Math.abs(cP[0] - pAnt[0])+Math.abs(cP[1] - pAnt[1]);
                    if(Dx > 0.0000001){
                        cP[2] = 0;
                        pArray2.push(cP);
                    } else {
                        pAnt=cP;
                    }

                };
                pointArray = pArray2;
                
            }


        window.requestAnimationFrame(function(timer){
            mcontext.save();
                mcontext.setTransform(1, 0, 0, 1, 0, 0);
                mcontext.clearRect(0, 0, main_canvas.width, main_canvas.height);
            mcontext.restore();
            
            mcontext.save();
                var scale = deltas[2];
                mcontext.scale(scale,scale);
                mcontext.translate(deltas[0]/scale,deltas[1]/scale);
                mcontext.beginPath();
                for (var i = 0; i < pointArray.length; i++) {
                       var cPoint = pointArray[i];
                       if(cPoint[2]==1){
                        mcontext.moveTo(cPoint[0],cPoint[1]);
                       } else {
                        mcontext.lineTo(cPoint[0],cPoint[1]);
                       }
                   };   
                mcontext.closePath();
                var pat = mcontext.createPattern(imgPattern,"repeat");
                mcontext.fillStyle = pat;
                mcontext.fill(); 
            mcontext.restore();

            mcontext.save();
                mcontext.strokeStyle = '#000000';
                mcontext.lineWidth = 2;
                mcontext.stroke();
            mcontext.restore();
        });
    }

    reDraw(true);


   setScale = function (scale){
        var W2 = main_canvas.width/2; 
        var H2 = main_canvas.height/2; 
        var tX = (W2-deltas[0])/deltas[2];
        var tY = (H2-deltas[1])/deltas[2];


        var Dx = W2 - (W2-deltas[0])*(scale/deltas[2]);
        var Dy = H2 - (H2-deltas[1])*(scale/deltas[2]);

        deltas[0] = Dx;
        deltas[1] = Dy;

        deltas[2] = scale;
        reDraw();
   }

    
    scale.addEventListener("change", function(e) {
        

        var tmpS = e.target.value;

        setScale(tmpS);
    })

    

   
    $main_canvas.on('mousedown',function(event){
        mouseA = [event.offsetX,event.offsetY];
    });

    $main_canvas.on('mouseup mouseleave',function(event){
        mouseA = false;
    });

    $main_canvas.on('mousemove',function(event){
        if(!mouseA) return;
        deltas[0] = deltas[0] + event.offsetX - mouseA[0]; 
        deltas[1] = deltas[1] + event.offsetY - mouseA[1];
        mouseA[0] = event.offsetX;
        mouseA[1] = event.offsetY;
        reDraw();
        event.stopPropagation();
    });



    function receiveMessage(event){ 
        // data = {name : '<functionToExec>',type : '<exec|update>', value: '<coma.separated-params>'}
        if(!event.data || !event.data.type )
            return;
        if(event.data.type = 'exec'){
            switch (event.data.name){
                case 'setIterations' :
                    var val2 = event.data.value+'';
                    var val = val2.split(',');
                    tmpDepth = val[0];
                    depth = tmpDepth;
                    reDraw(true);
                    break;
                case 'setScale':
                    var val2 = event.data.value+'';
                    var val = val2.split(',');
                    setScale(val[0]);
                    break;
                 case 'reInitDisplay':
                    deltas = [0,0,1];
                    reDraw(false);
                    break;
                default:
                    console.log('No se reconoce el mensaje : ',event.data);
            }
        }
    }
    window.addEventListener("message", receiveMessage, false);
 
};

window.addEventListener('load', init, false);