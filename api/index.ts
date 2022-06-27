import express from 'express'
import bodyParser from 'body-parser'

import {
    getRoomInfoUseCase,
    createRoomUseCase,
    joinRoomUseCase,
    getJoinedUsersUseCase,
    doActiveRoomUseCase,
    getActiveRoomUseCase,
    getNowTimestampUseCase
} from './usecases/room'

import {
    getThemesFindByRoomIdUsecase,
    createThemeUseCase,
    getMaxThemes,
    voteThemeUseCase
} from './usecases/theme'

import {
    getAnswersFindByRoomIdUsecase,
    createAnswerUseCase,
    voteAnswerUseCase,
    getMaxAnswerUseCase
} from './usecases/answer'


const app: express.Express = express()
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.get(
	'/healthcheck',
	async (req: express.Request, res: express.Response) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        const roomInfoResult = "health checck OK"
        res.status(200)
        res.json(roomInfoResult)
	}
)

app.post(
	'/room/create',
	async (req: express.Request, res: express.Response) => {
        const createResult = await createRoomUseCase()
        res.status(200)
        res.json(createResult)
	}
)

app.post(
	'/room/active/:roomId',
	async (req: express.Request, res: express.Response) => {
        const activeResult = await doActiveRoomUseCase(req.params.roomId)
        res.status(200)
        res.json(activeResult)
	}
)

app.get(
	'/room/active/:roomId',
	async (req: express.Request, res: express.Response) => {
        const activeResult = await getActiveRoomUseCase(req.params.roomId)
        res.status(200)
        res.json(activeResult)
	}
)

app.get(
	'/room/guests/:roomId',
	async (req: express.Request, res: express.Response) => {
        const joinGuestsResult = await getJoinedUsersUseCase(req.params.roomId)
        res.status(200)
        res.json(joinGuestsResult)
	}
)

app.post(
	'/room/guests/:roomId',
	async (req: express.Request, res: express.Response) => {
        const joinResult = await joinRoomUseCase(req.params.roomId, req.body.name)
        res.status(200)
        res.json(joinResult)
	}
)

app.get(
  '/room/timestamps/:roomId',
	async (req: express.Request, res: express.Response) => {
        const timestampResult = await getNowTimestampUseCase(req.params.roomId)
        res.status(200)
        res.json(timestampResult)
	}
)

app.get(
	'/room/:roomId',
	async (req: express.Request, res: express.Response) => {
        const roomInfoResult = await getRoomInfoUseCase(req.params.roomId)
        res.status(200)
        res.json(roomInfoResult)
	}
)

app.post(
	'/theme/create/:roomId',
	async (req: express.Request, res: express.Response) => {
        const createThemeResult = await createThemeUseCase(
            req.params.roomId,
            req.body.theme,
            req.body.name
        )
        res.status(200)
        res.json(createThemeResult)
	}
)

app.get(
	'/theme/read/:roomId',
	async (req: express.Request, res: express.Response) => {
        const readThemesResult = await getThemesFindByRoomIdUsecase(req.params.roomId)
        res.status(200)
        res.json(readThemesResult)
	}
)

app.get(
    '/theme/max/:roomId',
	async (req: express.Request, res: express.Response) => {
        const readThemesResult = await getMaxThemes(req.params.roomId)
        res.status(200)
        res.json(readThemesResult)
	}
)

app.post(
	'/theme/vote/:themeId',
	async (req: express.Request, res: express.Response) => {
        const voteResult = await voteThemeUseCase(req.params.themeId)
        res.status(200)
        res.json(voteResult)
	}
)

app.post(
	'/answer/create/:themeId',
	async (req: express.Request, res: express.Response) => {
        const createThemeResult = await createAnswerUseCase(
            req.params.themeId,
            req.body.answer,
            req.body.name
        )
        res.status(200)
        res.json(createThemeResult)
	}
)

app.get(
	'/answer/read/:themeId',
	async (req: express.Request, res: express.Response) => {
        const readThemesResult = await getAnswersFindByRoomIdUsecase(req.params.themeId)
        res.status(200)
        res.json(readThemesResult)
	}
)

app.get(
    '/answer/max/:themeId',
	async (req: express.Request, res: express.Response) => {
        const voteResult = await getMaxAnswerUseCase(req.params.themeId)
        res.status(200)
        res.json(voteResult)
	}
)

app.post(
	'/answer/vote/:answerId',
	async (req: express.Request, res: express.Response) => {
        const voteResult = await voteAnswerUseCase(req.params.answerId)
        res.status(200)
        res.json(voteResult)
	}
)

const port: number = 3000
app.listen(port)