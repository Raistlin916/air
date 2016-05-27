alert(window.WeixinJSBridge)
if (window.WeixinJSBridge) {
  WeixinJSBridge.on('menu:share:timeline', function(argv) {
    WeixinJSBridge.invoke('shareTimeline', {
      img_url: '',
      img_width: '640',
      img_height: '640',
      link: location.href,
      desc: 'test2',
      title: 'test1'
    });
  });
}
