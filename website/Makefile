help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

start: ## start dev server
	yarn start

save: ## save changes
	git add . 
	git commit -m "Luise changed stuff" 
	git push 

release: ## release to github pages
	GIT_USER=Packebusch CURRENT_BRANCH=master yarn publish-gh-pages

