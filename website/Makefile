help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

start-development: ## start dev server
	npm start

build: ## build static files
	npm build

release: ## release to github pages
	GIT_USER=Packebusch CURRENT_BRANCH=master npm run publish-gh-pages
