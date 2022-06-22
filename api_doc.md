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
    "isActive":false,"changeTimestamo":1,"createdAt":"2022-06-21T06:37:49.305Z","updatedAt":"2022-06-21T06:37:49.305Z"
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

# 