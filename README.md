## hexo-post-link

🔗 Refer to your internal posts with a native markdown syntax.

No need to include ugly tags like [post_link](https://hexo.io/docs/tag-plugins.html#Include-Posts) anymore.

### Before

```markdown
{% post_link your-post-slug 'Your link to post text' %}
```

### With plugin installed

```markdown
[Your link to post text](your-post-slug)
```

Both will be rendered as

```html
<a href="/your-post-slug/">Your link to post text</a>
```

### Installation

```bash
$ npm i hexo-post-link
# or
$ npm install hexo-post-link --save
```

### Acknowledgement

* [hexo-filter-link-post plugin](https://github.com/tcatche/hexo-filter-link-post) which was used as a boilerplate code
* [Nice article on Hexo plugins](https://dustinpfister.github.io/2018/01/03/hexo-plugins/)
