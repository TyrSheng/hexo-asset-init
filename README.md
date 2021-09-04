# hexo-asset-pro

This project was forked from [cnzsb/hexo-asset](https://github.com/cnzsb/hexo-asset).

Add new support case : `path/asset.jpg`

Support original markdown image expressions when **enabling `post_asset_folder`**, and no need to use private hexo tags anymore.

## Detail

`./path/asset.jpg` and `path/asset.jpg` will be replaced to `your_post_path/asset.jpg`

URLs started with `http`, `https`, `//`, `/` or plain string(`path/asset.jpg`) will keep.



## Adapt to typora editor

You can directly use typora editor to add pictures locally, which will automatically adapt to hexo.
