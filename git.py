import requests

username = "pruthvill"
url = f"https://api.github.com/users/{username}/starred"

response = requests.get(url)

if response.status_code == 200:
    starred_repos = response.json()
    for repo in starred_repos:
        repo_name = repo["name"]
        repo_author = repo["owner"]["login"]
        repo_description = repo["description"]
        repo_language = repo["language"]
        repo_stars = repo["stargazers_count"]
        repo_forks = repo["forks_count"]

        print("Repository:", repo_name)
        print("Author:", repo_author)
        print("Description:", repo_description)
        print("Language:", repo_language)
        print("Stars:", repo_stars)
        print("Forks:", repo_forks)
        print("-" * 50)
else:
    print("Failed to retrieve starred repositories")
