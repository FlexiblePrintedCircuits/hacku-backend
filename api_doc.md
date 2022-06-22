# /room/create

ルームを新規作成

req
```
```

res 
```
{"room_id":"d6284330-f283-4587-a95b-b7892e0b8563"}
```

# 【POST】 /room/guests/:roomId

ルームにゲストをjoin

req
```
"name": "ゲストの名前"
```

res
```
{
    "id":"d6284330-f283-4587-a95b-b7892e0b8563",
    "isActive":false,
    "changeTimestamo":1,
    "createdAt":"2022-06-21T06:37:49.305Z","updatedAt":"2022-06-21T06:37:49.305Z"
}
```

＊ ID はルームID

# 【GET】 /room/guests/:roomId

ルームに入っているゲストの一覧情報を取得

req
```
```

res
```
[
    {
        "guests": [
            {
                "id":"2a96e56e-42f0-4f2c-be02-417db3533381","name":"hogehogehoge"
            }
        ]
    }
]
```

# 【GET】 /room/active/:roomId

roomId の部屋をアクティブ化（仕様上アクティブにしてもしなくても何も変わらない）

req

```
```

res

```
{
    "timestamp":"2022-06-22T09:38:53.391Z"
}
```

# 【GET】 /room/timestamps/:roomId

部屋が作られてから現在までのタイムスタンプを取得

req

```
```

res

```
{
    "timestamp":"2022-06-22T09:35:08.994Z"
}
```

# 【GET】 /room/:roomId

ルームの情報を取得


req

```
```

res 

```
{
    "isActive": true,
    "guests": [
        {
            "id":"2a96e56e-42f0-4f2c-be02-417db3533381","name":"hogehogehoge"
        }
    ]
}
```

# 【POST】 /theme/create/:roomId

お題を作成

req

```
{
    "theme": "お題hoge",
    "name": "お題を作ったユーザーのニックネーム"
}
```

res

```
{
    "id": "ef6c951c-3949-4cf1-8990-4607e44849f7",
    "title": "お題hoge",
    "createdUserName": "hogehogehoge",
    "numberOfVotes": 0,"roomId":"d6284330-f283-4587-a95b-b7892e0b8563"
}
```

# 【GET】 /theme/read/:roomId

お題一覧を取得

req

```
```

res

```
{
    "themes": [
        {
            "id":"ef6c951c-3949-4cf1-8990-4607e44849f7",
            "title":"お題hoge", 
            "createdUserName":"hogehogehoge", 
            "numberOfVotes":0
        }
    ]
}
```

# 【POST】 /theme/vote/:themeId

お題に投票

req

```
```

res

```
{
    "number_of_votes": 1
}
```

# 【POST】 /answer/create/:themeId

お題に対する回答を作成

req

```
{
    "answer": "回答",
    "name": "回答を作成したユーザーのニックネーム"
}
```

res

```
{
    "id": "9dd0ae52-1b3d-4326-8dd8-b7c9e57504a7",
    "title": "回答",
    "createdUserName":"hogehogehoge",
    "numberOfVotes": 0,"themeId": "ef6c951c-3949-4cf1-8990-4607e44849f7"
}
```

# 【GET】 /answer/read/:themeId

お題に対する回答一覧を取得

req

```
```

res

```
[
    {
        "linkedAnser": [      
            {
                "id": "9dd0ae52-1b3d-4326-8dd8-b7c9e57504a7","title": "回答",
                "createdUserName": "hogehogehoge","numberOfVotes":0
            }
        ]
    }
]
```

# 【POST】 /answer/vote/:answerId

answerId の回答に投票

req

```
```

res

```
{
    "number_of_votes": 1
}
```