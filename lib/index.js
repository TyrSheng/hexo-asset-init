module.exports = function (data) {
  // 处理 Markdown 图片语法
  data.content = data.content.replace(
    /\!\[(.*?)\]\((.*?)\)/g,
    (match, text, url) => {
      if (/^\.\/(.*)/.test(url)) {
        const asset = url.replace(/\.\/(?:[^/]*\/)?(.*)/, '$1');
        return `{% asset_img ${text}${asset ? ` ${asset}` : ''} %}`;
      } else if (/^(.*)/.test(url)) {
        const asset = url.replace(/(?:[^/]*\/)?(.*)/, '$1');
        return `{% asset_img ${text}${asset ? ` ${asset}` : ''} %}`;
      } else {
        return match;
      }
    }
  );

  // 处理 HTML 图片标签，只替换 src 属性值
  data.content = data.content.replace(
    /<img([^>]+)src="([^"]+)"([^>]*)>/g,
    (match, beforeSrc, url, afterSrc) => {
      if (/^\.\/(.*)/.test(url)) {
        const asset = url.replace(/\.\/(?:[^/]*\/)?(.*)/, '$1');
        return `<img${beforeSrc}src="{% asset_path ${asset} %}"${afterSrc}>`;
      } else if (/^(.*)/.test(url)) {
        const asset = url.replace(/(?:[^/]*\/)?(.*)/, '$1');
        return `<img${beforeSrc}src="{% asset_path ${asset} %}"${afterSrc}>`;
      } else {
        return match;
      }
    }
  );

  return data;
};
