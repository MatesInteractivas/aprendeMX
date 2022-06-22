function Galeria(opts){
    
    this.options = jQuery.extend({}, Galeria.DEFAULT_OPTIONS, opts || {});
    this.fctrX = 0;
    this.firstTime = true;
}

Galeria.DEFAULT_OPTIONS = {
    
    'numPicsInView' : 3,
    'numTotalPics' : 8,
    'imgExtension': 'jpg'
}

Galeria.prototype = {
	
    init: function(){
        this.setupGaleria();
    },
    
    setupGaleria: function(){
        
        var _this = this;
        
        jQuery('<a/>', { class: 'sliderBt left inactive' } ).appendTo($('.slider'));
        $('.sliderBt.left').bind('click',function(){
            var _x = parseInt($('.sliderInnerDiv').css('left'))<0?parseInt($('.sliderInnerDiv').css('left'))+_this.fctrX:parseInt($('.sliderInnerDiv').css('left'));
            $('.sliderInnerDiv').css('left',_x);
            if(_x==0){
                $('.sliderBt.left').addClass('inactive');
            }
            $('.sliderBt.right').removeClass('inactive');
        });
        
        jQuery('<div/>', { class: 'sliderDiv' } ).appendTo($('.slider'));
        jQuery('<div/>', { class: 'sliderInnerDiv' } ).appendTo($('.sliderDiv'));
        for(var i=1;i<=this.options.numTotalPics;i++){
            jQuery('<div/>', { id: 'div'  + i, class: 'pic_div' } ).appendTo($('.sliderInnerDiv'));
            jQuery('<img/>', { class: 'pic', src : 'pics/img' + i + '.' + this.options.imgExtension } ).appendTo($('#div'+i));
        }
        
        this.fctrX = (parseInt($('.pic_div').width()) + 6)*3;
        
        
        jQuery('<a/>', { class: 'sliderBt right' } ).appendTo($('.slider'));
        $('.sliderBt.right').bind('click',function(){
            var _x = parseInt($('.sliderInnerDiv').css('left'))>(_this.options.numTotalPics*-(_this.fctrX/3))?parseInt($('.sliderInnerDiv').css('left'))-_this.fctrX:parseInt($('.sliderInnerDiv').css('left'));
            $('.sliderInnerDiv').css('left',_x);
            if(_x<=((_this.options.numTotalPics-2)*-(_this.fctrX/3))){
                $('.sliderBt.right').addClass('inactive');
                if(_this.firstTime){
                    _this.firstTime=false;
                    $('.bt_seguir').removeClass('inactive');
                    $('.bt_seguir').on('click',function(){
                        nextQ();
                    });
                    
                }
            }
            $('.sliderBt.left').removeClass('inactive');
        });
        
    } 
    
}

    