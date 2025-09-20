# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = .
BUILDDIR      = _site
DEPLOY_LOCATION =  dreamhost:/home/danwilliams/central.daniel-williams.co.uk

# Put it first so that "make" without argument is like "make help".
_site/index.html: assets/js/main-bundle.js index.html
	hugo build


assets/js/main-bundle.js:
	npm install
	npm run build:webpack



.PHONY: deploy renew papers _data/papers.yml
