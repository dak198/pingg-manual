git add .
git commit -m "${commitMessage}"
git checkout master
git pull origin master
git merge ${devBranch}
git add .
git commit -m "${commitMessage}"
git push origin master
git checkout ${devBranch}
git merge master
git push origin ${devBranch}
