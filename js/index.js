
$(document).ready(function () {
  $(function () {
    var $uLi = $('.slider-pic li');//图片li
    var $oLi = $('.slider-pages li');//圆点li
    var $tLi = $('.slider-info li');//文字描述li
    $oLi.first().addClass('selected');  // 默认给第一个小圆点添加类

    $oLi.mouseover(function () {
      $(this).addClass('selected').siblings().removeClass('selected');
      index = $(this).index();
      $uLi.eq(index).fadeIn().siblings().fadeOut();
      $tLi.eq(index).fadeIn().siblings().fadeOut();
    });

    var count = 0;
    
    $('.arr-r').click(function(){
      count++;
      if (count == $uLi.length) {
        count = 0;
      }
      $tLi.eq(count).fadeIn().siblings("li").fadeOut();
      $uLi.eq(count).fadeIn().siblings("li").fadeOut();
      $oLi.eq(count).addClass('selected').siblings().removeClass('selected');
    });

    $('.arr-l').click(function () {
      count--;
      if (count == -1) {
        count = $uLi.length - 1;
      }
      $tLi.eq(count).fadeIn().siblings("li").fadeOut();
      $uLi.eq(count).fadeIn().siblings("li").fadeOut();
    });
  });


  $(".brief li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var idx = $(this).index();
    $(".brief div").eq(idx).addClass("selected").siblings().removeClass("selected");
  });

  //这是要遍历时间轴的数据
  var dimeAxis = [{
    date: '16:00',
    ico: '',
    host: '[主持人]',
    achievement: '各位记者朋友，上午好！'
  },
  {
    date: '15:08',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，新闻发布会新闻发布会新闻发布会新闻发布会新闻发布会新闻发布会新闻发布会新闻发布会新闻发布会'
  },
  {
    date: '14:42',
    ico: '',
    host: '[司法部副部长、党组成员 熊选国]',
    achievement: '各位记者朋友，上午好！非常感谢，现在正好是“两会”非常繁忙的时期，大家能来参加司法部今天的法律援助工作新闻发布会，感谢各位记者朋友一直以来对法律援助工作的关注和大力支持。'
  }];

  $(function () {
    $.each(dimeAxis, function (_i, e) {
      var html = '<li class="time-axis-item">' +
        '<span>' + e.ico + '</span>' +
        '<div class="time-axis-item-left"></div>' +
        '<div class="time-axis-item-right">' +
        '<div class="time-axis-item-top">' +
        '<div class="time-axis-date">' + e.date + '</div>' +
        '<div class="time-axis-host">' + e.host + '</div>' +
        '</div>' +
        '<p class="time-axis-achievement">' + e.achievement + '</p>' +
        '</div>'
      '</li>';
      $('.time-axis').append(html);
    });
  });
});
