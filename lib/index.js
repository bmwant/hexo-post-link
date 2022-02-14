'use strict';

hexo.extend.filter.register('before_post_render', function(data) {
  console.log(data);
  return data;
});

// hexo.extend.filter.register("after_render:html", (str) => {
//   const re = /<a[^>]*href[=\"\'\s]+([^\"\']*)[\"\']?[^>]*>/g;
//   return str.replace(re, function(p1, p2) {
//     const fileName = p2.replace(/..\/|.\//g, '').replace(/.md#[\w]+/, '.md');
//     if (cachedPost[fileName]) {
//       const toBeReplacedContent = p2.replace(/.md#[\w]+/, '.md');
//       return p1.replace(toBeReplacedContent, `/${cachedPost[fileName]}`);
//     }
//     return p1;
//   });
// });
