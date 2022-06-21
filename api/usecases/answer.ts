import AnswerRepository from "../repositories/answer"

const getAnswersFindByRoomIdUsecase = async (themeId: string) => {
    const themeRepository = new AnswerRepository()
    return await themeRepository.findByThemeId(themeId)
}

const createAnswerUseCase = async (
    themeId: string,
    newAnswer: string, 
    userName: string
) => {
    const answerRepository = new AnswerRepository()
    return await answerRepository.createAnswer(themeId, newAnswer, userName)
}

const voteAnswerUseCase = async (answerId: string) => {
    const answerRepository = new AnswerRepository()
    return await answerRepository.voteAnswer(answerId)
}

export {
    getAnswersFindByRoomIdUsecase,
    createAnswerUseCase,
    voteAnswerUseCase
}