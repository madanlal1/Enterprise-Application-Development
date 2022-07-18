# Enterprise

## Git

Git clone repositoryURL		//clone of existing repository from github	
  
// --------------------------------------------------------------------------
  
Git add .		                    //”.” use for all
  
Git status		                  //check status
  
Git commit -m “message”	        //for for commit what changes we have made
  
Git status		                  //check status again
  
Git push 		                    //push data
  
// --------------------------------------------------------------------------
  
Git commit -am ‘add file’		    //add and commit both at the same time.
  
  
git config --global user.email "you@example.com" 	//access gitHub (optional)
  
// --------------------------------------------------------------------------
  
Git log 				                //will tell us about who done the changes (press enter to bring commits)
  
Wq 				                      //exit from log file (optional)
  
// --------------------------------------------------------------------------
  
Git reset –hard <commit id>	    //revert  changes
  
// --------------------------------------------------------------------------
  
Git branch <branchName>	        //create new branch
  
Git checkout master		          //switch to the master branch
  
Git branch 			                //list of branches
  
Git merge <branchName>	        //go to master branch and add the branch into 
  
Git branch -d <branchName>	    //delete branch
  
// --------------------------------------------------------------------------
  
Git fetch			                  //auto merge with my changes (needed when we have remote changes)
  
Git pull				//pull data and resolve conflict
  
Git add .

Git commit -m <message>

Git push

// --------------------------------------------------------------------------

Push Data in new Repository 

git init
git add -A
git commit -m 'Added my project'
git remote add origin git@github.com:sammy/my-new-project.git
git push -u -f origin master
