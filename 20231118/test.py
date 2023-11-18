from github import Github, Auth

g = Github(auth=Auth.Token('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'))
user = g.get_user()

for repo in user.get_repos():
    print(repo.html_url)