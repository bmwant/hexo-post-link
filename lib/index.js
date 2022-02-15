'use strict';

const { encodeURL } = require('hexo-util');
const { resolve } = require('url');

hexo.extend.filter.register('marked:renderer', function(renderer) {
  const { config, database } = this;
  renderer._link_orig = renderer.link;
  renderer.link = function(href, title, text) {
    if (href.includes('://')) {
      return renderer._link_orig(href, title, text);
    }

    const error = `<a href="#">INVALID POST SLUG PROVIDED ${href}</a>`;

    const Post = database.model('Post');
    const post = Post.findOne({slug: href});

    if (!post) return error;

    const link = encodeURL(resolve(config.root, post.path));

    return `<a href="${link}" title="${title}">${text}</a>`;
  }
});
