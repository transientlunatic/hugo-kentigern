#
JS            = _webpack/js/*.js
SCSS          = _webpack/scss/*.scss
STUFF         = webpack.config.js
# Put it first so that "make" without argument is like "make help".
_site/index.html: assets/js/main-bundle.js index.html
	hugo build


assets/js/main-bundle.js: $(JS) $(SCSS) $(STUFF)
	npm install
	npm run build:webpack

