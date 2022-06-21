import TehemeRepository from "../repositories/answer";

const getThemesFindByRoomIdUsecase = async (roomId: string) => {
    const themeRepository = new TehemeRepository()
    return await themeRepository.findByThemeId(roomId)
}

const createThemeUseCase = async (
    roomId: string,
    newTheme: string, 
    userName: string
) => {
    const themeRepository = new TehemeRepository()
    return await themeRepository.createAnswer(roomId, newTheme, userName)
}

const voteThemeUseCase = async (themeId: string) => {
    const themeRepository = new TehemeRepository()
    return await themeRepository.voteAnswer(themeId)
}

export {
    getThemesFindByRoomIdUsecase,
    createThemeUseCase,
    voteThemeUseCase
}