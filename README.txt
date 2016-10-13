FILE STRUCTURE

WORKFLOW
- webpack
- webpack dev-server

DEPENDENCIES
- react-slick for slider (link)


DEPLOYMENT

In order to push changes to live, take the following steps

1. Commit and push changes to master
2. QA TeamCity build will kick off automatically and deploy to QA through Octopus
	a. http://teamcity.eftours.com/project.html?projectId=Web_TechUxRecruiting&tab=projectOverview
4. Confirm changes in deployed QA
	a. http://etus.toursqa.com/careers
5. Log into Octopus and promote changes from QA to Production
	a. https://octopus.eftours.com/app#/projects/tech-recruiting-microsite
	b. Uses the same basic environments as the web team (Prod is for soft live, Prod_Release for every server in the LB)
