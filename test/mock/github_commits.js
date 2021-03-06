'use strict';

angular.module('sandboxMocks', [])
    .value('MockGithubCommits',
        [
            {
                "sha": "a068126410a894798996c7a77424e30835d8fcb2",
                "commit": {
                    "author": {
                        "name": "Julio J. García Martín",
                        "email": "papajulio21@dummymail.com",
                        "date": "2013-11-12T21:44:01Z"
                    },
                    "committer": {
                        "name": "Julio J. García Martín",
                        "email": "papajulio21@dummymail.com",
                        "date": "2013-11-12T21:44:01Z"
                    },
                    "message": "Merge pull request #1 from ZagalesHacklab/hello_directive\n\nHello directive",
                    "tree": {
                        "sha": "4be08e5823210397a635a82dfae6c71155bdb9a5",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/trees/4be08e5823210397a635a82dfae6c71155bdb9a5"
                    },
                    "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/commits/a068126410a894798996c7a77424e30835d8fcb2",
                    "comment_count": 0
                },
                "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/a068126410a894798996c7a77424e30835d8fcb2",
                "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/a068126410a894798996c7a77424e30835d8fcb2",
                "comments_url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/a068126410a894798996c7a77424e30835d8fcb2/comments",
                "author": {
                    "login": "papajulio",
                    "id": 492577,
                    "avatar_url": "https://0.gravatar.com/avatar/01f5b2ae36dd1f52ed96debd9b1dfe29?d=https%3A%2F%2Fidenticons.github.com%2F2e2c0ef608a954223cde07daae9f4c34.png&r=x",
                    "gravatar_id": "01f5b2ae36dd1f52ed96debd9b1dfe29",
                    "url": "https://api.github.com/users/papajulio",
                    "html_url": "https://github.com/papajulio",
                    "followers_url": "https://api.github.com/users/papajulio/followers",
                    "following_url": "https://api.github.com/users/papajulio/following{/other_user}",
                    "gists_url": "https://api.github.com/users/papajulio/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/papajulio/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/papajulio/subscriptions",
                    "organizations_url": "https://api.github.com/users/papajulio/orgs",
                    "repos_url": "https://api.github.com/users/papajulio/repos",
                    "events_url": "https://api.github.com/users/papajulio/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/papajulio/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "papajulio",
                    "id": 492577,
                    "avatar_url": "https://0.gravatar.com/avatar/01f5b2ae36dd1f52ed96debd9b1dfe29?d=https%3A%2F%2Fidenticons.github.com%2F2e2c0ef608a954223cde07daae9f4c34.png&r=x",
                    "gravatar_id": "01f5b2ae36dd1f52ed96debd9b1dfe29",
                    "url": "https://api.github.com/users/papajulio",
                    "html_url": "https://github.com/papajulio",
                    "followers_url": "https://api.github.com/users/papajulio/followers",
                    "following_url": "https://api.github.com/users/papajulio/following{/other_user}",
                    "gists_url": "https://api.github.com/users/papajulio/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/papajulio/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/papajulio/subscriptions",
                    "organizations_url": "https://api.github.com/users/papajulio/orgs",
                    "repos_url": "https://api.github.com/users/papajulio/repos",
                    "events_url": "https://api.github.com/users/papajulio/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/papajulio/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "62872ae37726f66220a31f760091f3df15f13b2b",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/62872ae37726f66220a31f760091f3df15f13b2b",
                        "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/62872ae37726f66220a31f760091f3df15f13b2b"
                    },
                    {
                        "sha": "3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9",
                        "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9"
                    }
                ]
            },
            {
                "sha": "3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9",
                "commit": {
                    "author": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-11-07T22:18:33Z"
                    },
                    "committer": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-11-07T22:18:33Z"
                    },
                    "message": "jshint fix",
                    "tree": {
                        "sha": "4be08e5823210397a635a82dfae6c71155bdb9a5",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/trees/4be08e5823210397a635a82dfae6c71155bdb9a5"
                    },
                    "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/commits/3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9",
                    "comment_count": 0
                },
                "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9",
                "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9",
                "comments_url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/3cec5780ec15cb4c8ba55395a24c8e04ecdaacb9/comments",
                "author": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "9342b64bae1e043741f04ce75a532a7127bac79b",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/9342b64bae1e043741f04ce75a532a7127bac79b",
                        "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/9342b64bae1e043741f04ce75a532a7127bac79b"
                    }
                ]
            },
            {
                "sha": "9342b64bae1e043741f04ce75a532a7127bac79b",
                "commit": {
                    "author": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-11-07T18:40:16Z"
                    },
                    "committer": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-11-07T18:40:16Z"
                    },
                    "message": "Hello directive",
                    "tree": {
                        "sha": "27bf46ee0c32b33707c2d845fe8fecf325a4366b",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/trees/27bf46ee0c32b33707c2d845fe8fecf325a4366b"
                    },
                    "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/commits/9342b64bae1e043741f04ce75a532a7127bac79b",
                    "comment_count": 0
                },
                "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/9342b64bae1e043741f04ce75a532a7127bac79b",
                "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/9342b64bae1e043741f04ce75a532a7127bac79b",
                "comments_url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/9342b64bae1e043741f04ce75a532a7127bac79b/comments",
                "author": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "62872ae37726f66220a31f760091f3df15f13b2b",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/62872ae37726f66220a31f760091f3df15f13b2b",
                        "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/62872ae37726f66220a31f760091f3df15f13b2b"
                    }
                ]
            },
            {
                "sha": "62872ae37726f66220a31f760091f3df15f13b2b",
                "commit": {
                    "author": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-10-24T21:31:21Z"
                    },
                    "committer": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-10-24T21:31:21Z"
                    },
                    "message": "Update README.md",
                    "tree": {
                        "sha": "c5873b35e034138fb915219b51b76e75815a7903",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/trees/c5873b35e034138fb915219b51b76e75815a7903"
                    },
                    "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/commits/62872ae37726f66220a31f760091f3df15f13b2b",
                    "comment_count": 0
                },
                "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/62872ae37726f66220a31f760091f3df15f13b2b",
                "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/62872ae37726f66220a31f760091f3df15f13b2b",
                "comments_url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/62872ae37726f66220a31f760091f3df15f13b2b/comments",
                "author": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4",
                        "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4"
                    }
                ]
            },
            {
                "sha": "8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4",
                "commit": {
                    "author": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-10-24T21:14:24Z"
                    },
                    "committer": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-10-24T21:14:24Z"
                    },
                    "message": "Angular Scaffold",
                    "tree": {
                        "sha": "8458f0627540bf194c3db5dc12cfbdc5e6c36cd5",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/trees/8458f0627540bf194c3db5dc12cfbdc5e6c36cd5"
                    },
                    "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/commits/8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4",
                    "comment_count": 0
                },
                "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4",
                "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4",
                "comments_url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/8ab2a87193632066a5b2c8d4a1233ecfcb3aa5c4/comments",
                "author": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "6aa362116a41762106aeacba8517bb5783d6c2f7",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/6aa362116a41762106aeacba8517bb5783d6c2f7",
                        "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/6aa362116a41762106aeacba8517bb5783d6c2f7"
                    }
                ]
            },
            {
                "sha": "6aa362116a41762106aeacba8517bb5783d6c2f7",
                "commit": {
                    "author": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-10-24T17:43:54Z"
                    },
                    "committer": {
                        "name": "Francho",
                        "email": "lab@dummymail.com",
                        "date": "2013-10-24T17:43:54Z"
                    },
                    "message": "first commit",
                    "tree": {
                        "sha": "65ecbac954df9ccb6cd834b1988cb9b5047c6f2f",
                        "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/trees/65ecbac954df9ccb6cd834b1988cb9b5047c6f2f"
                    },
                    "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/git/commits/6aa362116a41762106aeacba8517bb5783d6c2f7",
                    "comment_count": 0
                },
                "url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/6aa362116a41762106aeacba8517bb5783d6c2f7",
                "html_url": "https://github.com/ZagalesHacklab/sandbox/commit/6aa362116a41762106aeacba8517bb5783d6c2f7",
                "comments_url": "https://api.github.com/repos/ZagalesHacklab/sandbox/commits/6aa362116a41762106aeacba8517bb5783d6c2f7/comments",
                "author": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "francho",
                    "id": 585421,
                    "avatar_url": "https://1.gravatar.com/avatar/23b0e33233c628451f0a430683e09a7f?d=https%3A%2F%2Fidenticons.github.com%2Ff8c63e9b5b817f0fa838e9ca360f9ef7.png&r=x",
                    "gravatar_id": "23b0e33233c628451f0a430683e09a7f",
                    "url": "https://api.github.com/users/francho",
                    "html_url": "https://github.com/francho",
                    "followers_url": "https://api.github.com/users/francho/followers",
                    "following_url": "https://api.github.com/users/francho/following{/other_user}",
                    "gists_url": "https://api.github.com/users/francho/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/francho/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/francho/subscriptions",
                    "organizations_url": "https://api.github.com/users/francho/orgs",
                    "repos_url": "https://api.github.com/users/francho/repos",
                    "events_url": "https://api.github.com/users/francho/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/francho/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [

                ]
            }
        ]
    );