jQuery(document).ready(function ($) {
    "use strict";
    

    $(document).ready(function () {
		var p = window.location.pathname;
		if(p.indexOf("index.html") >=0 || p == "/"){
			var catid = getUrlParam("catid");
			if (catid == null) catid="main";
			else catid = "subcat/"+catid;
			getHomeJson(catid);
			setLastUpdate();
		}else if(p.indexOf("coupon.html") >=0){
			getRec();
		}
        
		renderMenu();
		
    });
    function vereesa_init_menu_toggle() {
        var contain = '.vereesa-nav-toggle';
        $(contain).each(function () {
            var _main = $(this);
            _main.children('.menu-item.parent').each(function () {
                var curent = $(this).find('.submenu');

                $(this).children('.toggle-submenu').on('click', function () {
                    $(this).parent().children('.submenu').slideToggle(500);
                    _main.find('.submenu').not(curent).slideUp(500);

                    $(this).parent().toggleClass('show-submenu');
                    _main.find('.menu-item.parent').not($(this).parent()).removeClass('show-submenu');
                });

                var next_curent = $(this).find('.submenu');

                next_curent.children('.menu-item.parent').each(function () {

                    var child_curent = $(this).find('.submenu');
                    $(this).children('.toggle-submenu').on('click', function () {
                        $(this).parent().parent().find('.submenu').not(child_curent).slideUp(500);
                        $(this).parent().children('.submenu').slideToggle(500);

                        $(this).parent().parent().find('.menu-item.parent').not($(this).parent()).removeClass('show-submenu');
                        $(this).parent().toggleClass('show-submenu');
                    })
                });
            });
        });
    };
    // click menu
    $(document).on('click', '.bar-open-menu', function () {
        $(this).toggleClass('active');
        $(this).closest('.main-header').find('.header-nav').toggleClass('show-menu');
        return false;
    });
    // vertical-menu
    $(document).on('click', '.block-title', function () {
        $(this).closest('.block-nav-categori').toggleClass('active');
        $(this).closest('.block-nav-categori').find('.verticalmenu-content').toggleClass('show-up');
        return false;
    });
    $(document).on('click', '.bar-open-menu,.vertical-menu-overlay', function () {
        $('body').toggleClass('vertical-menu-open');
        return false;
    })
    $(document).on('click', '.error-404 .toggle-hightlight', function () {
        $(this).closest('.text-404').find('.search-form').toggleClass('open');
        return false;
    });
    


    // --------------------remove_class_equal--------------------------
    function vereesa_remove_class_review() {
        var _winw = $(window).innerWidth();
        if (_winw < 992) {
            $('.sevice-item.style-1').removeClass('equal-container').find('.equal-element').removeAttr('style');
        }
        else {
            $('.sevice-item.style-1').addClass('equal-container');
        }
    }


    /* TOGGLE */
    function vereesa_dropdown() {
        $(document).on('click', '.header-control .close', function () {
            $(this).closest('.vereesa-dropdown').removeClass('open');
        });
        $(document).on('click', function (event) {
            var _target = $(event.target).closest('.vereesa-dropdown');
            var _allparent = $('.vereesa-dropdown');

            if (_target.length > 0) {
                _allparent.not(_target).removeClass('open');
                if (
                    $(event.target).is('[data-vereesa="vereesa-dropdown"]') ||
                    $(event.target).closest('[data-vereesa="vereesa-dropdown"]').length > 0
                ) {
                    _target.toggleClass('open');
                    return false;
                }
            } else {
                $('.vereesa-dropdown').removeClass('open');
            }
        });
    }

    function vereesa_mobile_block() {
        $(document).on('click', '.header-device-mobile .item.has-sub>a', function () {
            $(this).closest('.header-device-mobile').find('.item').removeClass('open');

            $(this).closest('.item').addClass('open');
            return false;
        })
        $(document).on('click', '.header-device-mobile .item .close', function () {
            $(this).closest('.item').removeClass('open');
            return false;
        })
        $(document).on('click', '*', function (event) {
            if (!$(event.target).closest(".header-device-mobile").length) {
                $(".header-device-mobile").find('.item').removeClass('open');
            }
        })
    }

    

    /* ---------------------------------------------
     TAB EFFECT
     --------------------------------------------- */
    function vereesa_tab_fade_effect() {
        // effect click
        $(document).on('click', '.vereesa-tabs .tab-link a', function () {
            var tab_id = $(this).attr('href');
            var tab_animated = $(this).data('animate');

            tab_animated = ( tab_animated == undefined || tab_animated == "" ) ? '' : tab_animated;
            if (tab_animated == "") {
                return false;
            }

            $(tab_id).find('.product-list-owl .owl-item.active, .product-list-grid .product-item').each(function (i) {

                var t = $(this);
                var style = $(this).attr("style");
                style = ( style == undefined ) ? '' : style;
                var delay = i * 400;
                t.attr("style", style +
                    ";-webkit-animation-delay:" + delay + "ms;"
                    + "-moz-animation-delay:" + delay + "ms;"
                    + "-o-animation-delay:" + delay + "ms;"
                    + "animation-delay:" + delay + "ms;"
                ).addClass(tab_animated + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    t.removeClass(tab_animated + ' animated');
                    t.attr("style", style);
                });
            })
        })
    }

    // -------------------------newletter-----------------------------
    function newletter_popup() {
        var window_size = parseFloat(jQuery('body').innerWidth());
        window_size += kt_get_scrollbar_width();
        if (window_size > 991) {
            if ($('body').hasClass('home-newletter')) {
                var _content = $('.kt-popup-newsletter');
                $.magnificPopup.open({
                    items: {
                        src: _content,
                        type: 'inline'
                    }
                });
            }
        }
    }

    // ------------------------Quick view----------------------------------------
    function quickview_popup() {
        var window_size = parseFloat(jQuery('body').innerWidth());
        window_size += kt_get_scrollbar_width();
        if (window_size > 992) {
            $(document).on('click', '.quick-wiew-button', function () {
                $.magnificPopup.open({
                    items: {
                        src: '<div class="kt-popup-quickview "><div class="details-thumb"><div class="slider-product slider-for"><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div></div><div class="slider-product-button slider-nav nav-center"><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div><div class="details-item"><img src="assets/images/popup-quickview-item-1.jpg" alt="img"></div></div></div><div class="details-infor"><h1 class="product-title">Eclipse Pendant Light</h1><div class="stars-rating"><div class="star-rating"><span class="star-5"></span></div><div class="count-star">(7)</div></div><div class="availability">availability:<a href="#">in Stock</a></div><div class="price"><span>€45</span></div><div class="product-details-description"><ul><li>Vestibulum tortor quam</li><li>Imported</li><li>Art.No. 06-7680</li></ul></div><div class="variations"><div class="attribute attribute_color"><div class="color-text text-attribute">Color:<span>White/</span><span>Black/</span><span>Teal/</span><span>Brown</span></div><div class="list-color list-item"><a href="#" class="color1"></a><a href="#" class="color2"></a><a href="#" class="color3 active"></a><a href="#" class="color4"></a></div></div><div class="attribute attribute_size"><div class="size-text text-attribute">Size:</div><div class="list-size list-item"><a href="#" class="">xs</a><a href="#" class="">s</a><a href="#" class="active">m</a><a href="#" class="">l</a><a href="#" class="">xl</a><a href="#" class="">xxl</a></div></div></div><div class="group-button"><div class="yith-wcwl-add-to-wishlist"><div class="yith-wcwl-add-button"><a href="#">Add to Wishlist</a></div></div><div class="size-chart-wrapp"><div class="btn-size-chart"><a id="size_chart" href="assets/images/size-chart.jpg" class="fancybox"  target="_blank">View Size Chart</a></div></div><div class="quantity-add-to-cart"><div class="quantity"><div class="control"><a class="btn-number qtyminus quantity-minus" href="#">-</a><input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-qty qty" size="4"><a href="#" class="btn-number qtyplus quantity-plus">+</a></div></div><button class="single_add_to_cart_button button">Add to cart</button></div></div></div></div>',
                        type: 'inline'
                    }
                });
                slick_quickview_popup();
                return false;
            });
        }
    }

    function slick_quickview_popup() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            infinite: true,
            prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right " aria-hidden="true"></i>',
        });
    }

    // --------------------------------BACK TO TOP-----------------------------
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1000) {
            $('.backtotop').addClass('show');
        }
        else {
            $('.backtotop').removeClass('show');
        }
    });
    $(document).on('click', 'a.backtotop', function () {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    //----------------Woocommerce plus and minius-------------------------
    $(document).on('click', '.quantity .quantity-plus, .quantity .quantity-minus', function (e) {
        // Get values
        var $qty = $(this).closest('.quantity').find('.qty'),
            currentVal = parseFloat($qty.val()),
            max = parseFloat($qty.attr('max')),
            min = parseFloat($qty.attr('min')),
            step = $qty.attr('step');
        // Format values
        if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
        if (max === '' || max === 'NaN') max = '';
        if (min === '' || min === 'NaN') min = 0;
        if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;
        // Change the value
        if ($(this).is('.quantity-plus')) {
            if (max && ( max == currentVal || currentVal > max )) {
                $qty.val(max);
            } else {
                $qty.val(currentVal + parseFloat(step));
            }
        } else {
            if (min && ( min == currentVal || currentVal < min )) {
                $qty.val(min);
            } else if (currentVal > 0) {
                $qty.val(currentVal - parseFloat(step));
            }
        }
        // Trigger change event
        $qty.trigger('change');
        e.preventDefault();
    });
//------------------------EQUAL ELEM----------------------------
    function better_equal_elems() {
        setTimeout(function () {
            $('.equal-container').each(function () {
                var $this = $(this);
                if ($this.find('.equal-element').length) {
                    $this.find('.equal-element').css({
                        'height': 'auto'
                    });
                    var elem_height = 0;
                    $this.find('.equal-element').each(function () {
                        var this_elem_h = $(this).height();
                        if (elem_height < this_elem_h) {
                            elem_height = this_elem_h;
                        }
                    });
                    $this.find('.equal-element').height(elem_height);
                }
            });
        }, 1000);
    }

    $(window).load(function () {
		
        better_equal_elems();
    });
    $(window).on("resize", function () {
        better_equal_elems();
    });


    // --------------------------------------------------------------------------            
    function kt_get_scrollbar_width() {
        var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
            $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
            inner = $inner[0],
            outer = $outer[0];
        jQuery('body').append(outer);
        var width1 = parseFloat(inner.offsetWidth);
        $outer.css('overflow', 'scroll');
        var width2 = parseFloat(outer.clientWidth);
        $outer.remove();
        return (width1 - width2);
    }

    // -----------------------------mega-menu------------------
    kt_resizeMegamenu();
    function kt_resizeMegamenu() {
        var window_size = parseFloat(jQuery('body').innerWidth());
        window_size += kt_get_scrollbar_width();
        if (window_size > 990) {
            if ($('.container-wapper .main-menu').length > 0) {
                var container = $('.main-menu-wapper');
                if (container != 'undefined') {
                    var container_width = 0;
                    container_width = parseFloat(container.innerWidth());
                    var container_offset = 0;
                    container_offset = container.offset();
                    setTimeout(function () {
                        $('.main-menu .menu-item-has-children').each(function (index, element) {
                            $(element).children('.mega-menu').css({'width': container_width + 'px'});
                            var sub_menu_width = parseFloat($(element).children('.mega-menu').outerWidth());
                            var item_width = parseFloat($(element).outerWidth());
                            $(element).children('.mega-menu').css({'left': '-' + (sub_menu_width / 2 - item_width / 2) + 'px'});
                            var container_left = container_offset.left;
                            var container_right = (container_left + container_width);
                            var item_left = $(element).offset().left;
                            var overflow_left = (sub_menu_width / 2 > (item_left - container_left));
                            var overflow_right = ((sub_menu_width / 2 + item_left) > container_right);
                            if (overflow_left) {
                                var left = (item_left - container_left);
                                $(element).children('.mega-menu').css({'left': -left + 'px'});
                            }
                            if (overflow_right && !overflow_left) {
                                var left = (item_left - container_left);
                                left = left - ( container_width - sub_menu_width );
                                $(element).children('.mega-menu').css({'left': -left + 'px'});
                            }
                        })
                    }, 100);
                }
            }
        }
    }

	
	//-----------------get url arg-------------------------------
	function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
            var r = window.location.search.substr(1).match(reg);  
            if (r != null) return unescape(r[2]); return null; 
       }
		
	// -----------------render json data -------------------------------
	
	function getHomeJson(name){
		$.getJSON("/assets/json/"+name+".json", function (data){
			renderHtml(data);
		}) 
	}
					function renderHtml(data){
						var $jsontabs = $("#cat_tabs");
						var $jsonItemss = $("#items");
						var strHtml = "";
						var strItemsHtml = "";
						$jsontabs.empty();
						$jsonItemss.empty();
						$.each(data, function (infoIndex, info){
							if(infoIndex == 0){
								strHtml += '<li class="active"><a data-toggle="tab" aria-expanded="true" href="#'+info["cat_id"]+'" style="margin:7px;">'+info["category"]+'</a></li>';
								strItemsHtml += '<div id="'+info["cat_id"]+'" class="tab-panel active"><div class="vereesa-product">';
								strItemsHtml += '<ul class="row list-products auto-clear equal-container product-grid">';
							}else{
								strHtml += '<li class=""><a data-toggle="tab" aria-expanded="true" href="#'+info["cat_id"]+'" style="margin:7px;">'+info["category"]+'</a></li>';
								strItemsHtml += '<div id="'+info["cat_id"]+'" class="tab-panel"><div class="vereesa-product">';
								strItemsHtml += '<ul class="row list-products auto-clear equal-container product-grid">';
							}
							var items = info["items"];
								for(var x in items){
									strItemsHtml += '<li class="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">';
									strItemsHtml += '<div class="product-inner equal-element"><div class="product-thumb"><div class="thumb-inner">';
									strItemsHtml += '<a href="'+items[x]["item_url"]+'" target="_blank">';
									strItemsHtml += '<img src="'+items[x]["pic_url"]+'_300x300q90.jpg" alt="img"></a></div></div>';
									strItemsHtml += '<div class="product-info"><h5 class="product-name product_title">';
									strItemsHtml += '<a href="'+items[x]["item_url"]+'" target="_blank">'+(items[x]["title"]).substring(0,30)+'</a></h5>';
									strItemsHtml += '<div class="group-info"><div class="coupon-item"><div class="style-four"><div class="info-box">';
									strItemsHtml += '<div class="coupon-money">';
									if(items[x]["coupon_amount"] > 0){
										strItemsHtml += '<div class="has-coupon">券后价</div>';
									}else{
										strItemsHtml += '<div class="">现价</div>';
									}
									strItemsHtml += '<div class="lay of">￥<span>'+Math.round(((items[x]["current_price"]-items[x]["coupon_amount"])*100))/100+'</span></div></div>';
									if(items[x]["coupon_amount"] > 0){
										strItemsHtml += '<div class="coupon-money"><div class="del">现价 ￥<span>'+items[x]["current_price"]+'</span></div>';
										strItemsHtml += '<div class="coupon lelf-coupon"><span>'+items[x]["coupon_amount"]+'元券</span></div></div>';
									}
									strItemsHtml += '</div><div class="sold">已售'+items[x]["sales_30d"]+'件</div>';
									strItemsHtml += '</div></div></div></div></div></li>';
								}
								strItemsHtml += '</div></div></div>';
							
						}) 
						
						$jsontabs.html(strHtml);
						$jsonItemss.html(strItemsHtml);
					}
		// -----------------render menu -------------------------------
		function renderMenu(){
			$.getJSON("/assets/json/categories.json", function (data){
				var $jsonMenus = $("#menu-main-menu");
				var strItemsHtml = "";
				$jsonMenus.empty();
				
				$.each(data, function (infoIndex, info){
					
					strItemsHtml += '<li class="menu-item  menu-item-has-children">';
					strItemsHtml += '<a href="#" class="vereesa-menu-item-title" title="分类">'+info["name"]+'</a>';
					strItemsHtml += '<span class="toggle-submenu"></span>';
					strItemsHtml += '<ul class="submenu">';
					
					var subMenus = info["items"];
					for(var x in subMenus){
						
						strItemsHtml += '<li class="menu-item">';
						strItemsHtml += '<a href="index.html?catid='+subMenus[x].catid+'">'+subMenus[x].catname+'</a>';
						strItemsHtml += '</li>';
					}
					strItemsHtml += '</ul></li>';
				})
				$jsonMenus.html(strItemsHtml);
			}) 
		}
		
		
	// -----------------last update -------------------------------
		function setLastUpdate(){
			$.getJSON("/assets/json/updated.json", function (data){
				var $lastUpdate = $("#last_update");
				var strHtml = "";
				$lastUpdate.empty();
				strHtml = data.updated;
				$lastUpdate.html(strHtml);
			});
				
		}
	// -----------------render recommend -------------------------------
		function getRec(){
			$.getJSON("/assets/json/recommend.json", function (data){
				var $rec = $("#rec");
				var strHtml = "";
				$rec.empty();
				for(var i in data){
					strHtml += '<div class="item"><span class="icon"><img src="'+data[i].pic_url+'_50x50q90.jpg"></span><span class="text" id="rec1"><a href="'+data[i].item_url+'" target="_blank">'+data[i].title+'</a></span></div>';
				}
				
				$rec.html(strHtml);
			});
				
		}
	// -----------------coupon query-------------------------------
	queryCoupon();
	function queryCoupon(){
		$("#ctn_clear").click(function(){
			$("#t_content").val("");
		});
		$("#coupon_query").click(function(){
			var t = $("#t_content").val().trim();
			var name = "id";
			if(t.indexOf("item.taobao.com")>=0 || t.indexOf("detail.tmall.com")>=0 || t.indexOf("detail.m.tmall.com")>=0){
				t = t.substring(t.indexOf("?")+1);
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
				var r = t.match(reg); 
				if (r != null){
					
					$.ajax({
					  url: 'https://honey-jewelry.com/taobao/getItemDetailInfo/'+r[2],
					  type: 'GET',
					  dataType: 'json', 
					  success: function(data) {
						  setProd(data);
					  },
					  error: function(jqXHR, textStatus) { 
						  setMsg("查询出错，请稍后再试。");
					  }
					});

				}else{
					setMsg("链接不能识别，请检查一下。");
				}
			}else if(XRegExp('([\\p{Sc}])\\w{8,12}([\\p{Sc}])').test(t)){
				var tkls = XRegExp.matchChain(t,[XRegExp('([\\p{Sc}])\\w{8,12}([\\p{Sc}])')]);
				$.ajax({
				  url: 'https://honey-jewelry.com/taobao/getItemDetailInfoFromTKL/'+tkls[0],
				  type: 'GET',
				  dataType: 'json', 
				  success: function(data) {
					  setProd(data);
				  },
				  error: function(jqXHR, textStatus) { 
					  setMsg("查询出错，请稍后再试。");
				  }
				});
			}else{
				setMsg("输入的链接或淘口令有误，请检查一下。");
			}
			
		});
	}
	function setMsg(msg){
		var $msg = $("#qmsg");
		$msg.empty();
		$("#prod").empty();
		var strHtml = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span>'+msg+'<span></div>';
		$msg.html(strHtml);
	}
	function setProd(json){
		var $prod = $("#prod");
		var url = (json.coupon_share_url == null)?'https:'+json.url.substring(0,json.url.indexOf("&scm")) : 'https:'+json.coupon_share_url.substring(0,json.coupon_share_url.indexOf("&&app"));
		var coupon_amount = (json.coupon_amount == null)?0:json.coupon_amount;
		var current_price = json.zk_final_price;
		var d_price = current_price - coupon_amount;
		var volume = json.volume;
		var strcoupon = '';
		var strprice = '<div class="price">￥<span>'+current_price+'</span></div>';
		var btn_name = '查看商品';
		
		var tkl = json.tkl;
		var strtkl = '';
		if(tkl != null && XRegExp('([\\p{Sc}])\\w{8,12}([\\p{Sc}])').test(tkl)){
			var clipboard = new ClipboardJS('#cptkl');
			clipboard.on('success', function(e) {
				$('#tklcopied').tooltip('show');
				setTimeout(function(){$('#tklcopied').tooltip('hide');},2000);
				
			});
			strtkl = '<div style="margin-top:10px;display:flex;"><span id="tklcopied" style="font-size:16px;padding-top:8px;color:#cc00cc" data-toggle="tooltip" data-trigger="manual" data-placement="bottom" title="复制成功">淘口令：'+tkl+'</span><button class="button" id="cptkl" style="margin-left:15px;padding:5px 10px" data-clipboard-text="'+tkl+'"><img class="clippy" width="16px" src="assets/images/clippy.svg"></button></div>';
		}
			
		
		if(coupon_amount > 0 ){
			strcoupon = '<div class="coupon lelf-coupon" style="display:inline-block"><span>'+coupon_amount+'元券</span></div>&nbsp;&nbsp;'+json.coupon_info;
			strprice = '<div class="price"><div class="has-coupon">券后价</div>￥<span>'+Math.round(((current_price-coupon_amount)*100))/100+'</span></div>';
			btn_name= '去领券';
		} 
		var strbtn = '<div class="group-button"><div class="yith-wcwl-add-to-wishlist"><div class="yith-wcwl-add-button">'+strcoupon+'</div></div><div class="quantity-add-to-cart"><button class="single_add_to_cart_button button" id="btn_detail">'+btn_name+'</button></div></div>';
		
		var strlist = '<div class="product-details-description"><ul><li>30天销售<span style="color:#ff00ff">'+volume+'</span>件</li><li>'+json.level_one_category_name+' >>> '+json.category_name+'</li><li>'+json.shop_title+'   '+json.provcity+'</li></ul></div>';
		$prod.empty();
		$("#qmsg").empty();
		
		var strHtml = '<div class="details-product"><div class="details-thumd"><img src="'+json.pict_url+'" alt="img">'+strtkl+'</div><div class="details-infor"><h5 class="product-title">'+json.title+'</h5>'+strprice+''+strlist+''+strbtn+''+'</div></div>';
		$prod.html(strHtml);
		$("#btn_detail").click(function(){
			window.open(url);
		});
	}
	
    // --------------------------------------------------------
    $(window).scroll(function () {
    });
    $(window).resize(function () {
        quickview_popup();
        kt_resizeMegamenu();
        vereesa_remove_class_review();
    });
    $(window).load(function () {
        newletter_popup();
        quickview_popup();
        vereesa_mobile_block();
        vereesa_remove_class_review();
    });
    vereesa_dropdown();
    vereesa_remove_class_review();
    vereesa_tab_fade_effect();
    kt_resizeMegamenu();
    vereesa_init_menu_toggle();
	
}); 