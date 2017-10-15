$(document).ready(function() {
    var flag = false; //代表 $('.qbh-list .qbh-list-search-finish')未运动
    var flag1 = false; //.qbh-buy-rotate-sofa代表未运动
    var flag2 = false; //代表未运动
    $('#dowebok').fullpage({
        navigation: true,
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#fff'],
        afterLoad: function(anchorLink, index) {
            //在加载当前index所指的屏时触发
            //anchorLink 是锚链接的名称，index 是序号，从1开始计算

            //切到下一屏
            $('.down').on('click', function() {
                $.fn.fullpage.moveSectionDown();
            })

            //第一屏
            if (index == 1) {
                $('.down').fadeIn();
            }

            //第二屏
            if (index == 2 && flag == false) {
                $('.qbh-list .qbh-list-search').show().animate({
                    "right": 383
                }, 1000, function() {
                    $('.qbh-list .qbh-list-search .qbh-list-search-font').animate({
                        "opacity": 1
                    }, 1000, function() {
                        $('.qbh-list .qbh-list-search').hide()
                        $('.qbh-list .qbh-list-search-finish').show().animate({
                            "bottom": 449,
                            "right": 250,
                            "height": 30
                        }, 1000, function() {
                            flag = true; //代表 $('.qbh-list .qbh-list-search-finish')已运动
                            $('.down').fadeIn();
                        })
                        $('.qbh-list .qbh-list-wordb').animate({
                            opacity: 1
                        }, 1000)
                        $('.qbh-list .qbh-list-sofas').show().animate({
                            "height": 218
                        }, 1000)
                    })
                })
            }
            //第八屏
            if (index == 8) {
                $(document).mousemove(function(e) {
                    var x = e.pageX - 85;
                    var y = e.pageY + 10;
                    var yy = $(window).height() - 449
                    if (y < yy) {
                        $('.qbh-shopping .qbh-shopping-hands').css({
                            left: x,
                            top: yy
                        })
                    } else {
                        $('.qbh-shopping .qbh-shopping-hands').css({
                            left: x,
                            top: y
                        })
                    }

                })
                $('.qbh-shopping .qbh-shopping-start-shopping').mouseenter(function() {
                    $('.qbh-shopping .qhb-shopping-dong').show().mouseleave(function() {
                        $(this).hide();
                    });
                })
            }
        },
        onLeave: function(index, nextIndex, direction) {

            // 离开当前页滚动至下一页时触发的回调函数
            //index 是离开的“页面”的序号，从1开始计算；
            // nextIndex 是滚动到的“页面”的序号，从1开始计算；
            // direction 判断往上滚动还是往下滚动，值是 up 或 down。

            //只有滚至下一屏当前屏幕中的继续向下按钮就要消失
            $('.down').fadeOut();

            var wHeight = $(window).height() //屏幕的高度

            //第二屏到第三屏
            if (index == 2 && nextIndex == 3 && flag == true) {
                $('.qbh-list .qbh-list-sofa-pic').show().animate({
                    "bottom": -(wHeight - 250),
                    "right": 518,
                    "width": 204
                }, 1000, function() {
                    $('.qbh-buy .qbh-buy-choose-end,.qbh-buy .qbh-buy-add-cart-end').animate({
                        opacity: 1
                    }, function() {
                        $('.down').fadeIn();
                    })
                })
            }

            //第三屏到第四屏
            if (index == 3 && nextIndex == 4 && flag1 == false) {
                $('.qbh-buy .qbh-buy-rotate-sofa').show().animate({
                    "bottom": -((wHeight - 250) + 50),
                    "right": 260
                }, 1000, function() {
                    flag1 = true;
                    $('.qbh-buy .qbh-buy-rotate-sofa').hide();
                    $('.qbh-info .qbh-info-rotate-sofa').show();
                    $('.qbh-info .qbh-info-cart-box').animate({
                        "left": 2000
                    }, 1500, function() {
                        $('.qbh-info .qbh-info-address').animate({
                            opacity: 1
                        }, 1000, function() {
                            $('.qbh-info .qbh-info-address-font,.qbh-info .qbh-info-wordb').animate({
                                opacity: 1
                            }, function() {
                                $('.down').fadeIn();
                            })
                        })

                    })
                })
            }


            //第四屏到第五屏
            if (index == 4 && nextIndex == 5) {
                $('.qbh-payment .qbh-payment-hands').show().animate({
                    "bottom": 0
                }, 500, function() {
                    $('.qbh-payment .qbh-payment-mouse-end').animate({
                        "opacity": 1
                    }, 10, function() {
                        $('.qbh-payment .qbh-payment-rotate-sofa-start').show().animate({
                            "bottom": 230
                        }, 1000, function() {
                            $('.qbh-payment-bill').animate({
                                "bottom": 370
                            })
                            $('.qbh-payment .qbh-payment-rotate-sofa-end').animate({
                                "bottom": 70
                            }, function() {
                                $('.down').fadeIn();
                            })
                        })
                    })
                })
            }

            //第五屏到第六屏
            if (index == 5 && nextIndex == 6 && flag2 == false) {
                $('.qbh-payment .qbh-payment-rotate-sofa-continue').show().animate({
                    bottom: -243,
                    width: 80
                }, 1000)
                $('.qbh-delivery .qbh-delivery-box').show().animate({
                    left: 360,
                    bottom: 500
                }, 800, function() {
                    flag2 = true;
                    $('.qbh-payment .qbh-payment-rotate-sofa-continue').hide();
                    $('.qbh-delivery .qbh-delivery-box').animate({
                        left: 485,
                        bottom: 56,
                        width: 40
                    }, 1000, function() {
                        $('.qbh-delivery .qbh-delivery-box').hide();
                        $('.qbh-delivery').animate({
                            backgroundPositionX: "100%"
                        }, 2000, function() {
                            $('.qbh-delivery .qbh-delivery-font-end ').animate({
                                opacity: 1
                            }, 1000)
                            $('.qbh-delivery .qbh-delivery-deliveryman').animate({
                                width: 252,
                                bottom: 116,
                                right: 600
                            }, 1500, function() {
                                $(".qbh-delivery .qbh-delivery-shouhuo").show();
                                $('.qbh-delivery .qbh-delivery-door').show()
                                $('.qbh-delivery .qbh-delivery-buyer').animate({
                                    width: 87
                                }, function() {
                                    $('.down').fadeIn();
                                })
                            })
                        })

                        $('.qbh-delivery .qbh-delivery-shangjia').animate({
                            opacity: 1
                        }, 100)
                        $('.qbh-delivery .qbh-delivery-truck-font').animate({
                            opacity: 1
                        }, 1000)

                    })
                })
            }

            //第六屏到第七屏
            if (index == 6 && nextIndex == 7) {
                $('.qbh-appraise .qbh-appraise-star').animate({
                    width: 100
                }, 1500, function() {
                    $('.qbh-appraise .qbh-appraise-haoping').show().animate({
                        left: 482
                    }, 800, function() {
                        $('.qbh-appraise .qbh-appraise-haoping').animate({
                            width: 72
                        }, 1000, function() {
                            $('.down').fadeIn();
                        })
                    })
                })
            }
        }
    });

    $('.qbh-shopping-again').on('click', function() {
        $('#dowebok').fullpage.moveTo(1);
        $("img").attr("style", "");
    })
});