import TehemeRepository from "../repositories/theme";

const getThemesFindByRoomIdUsecase = async (roomId: string) => {
    const themeRepository = new TehemeRepository()
    return await themeRepository.findByRoomId(roomId)
}

const createThemeUseCase = async (
    roomId: string,
    newTheme: string, 
    userName: string
) => {
    const themeRepository = new TehemeRepository()
    return await themeRepository.createTheme(roomId, newTheme, userName)
}

const voteThemeUseCase = async (themeId: string) => {
    const themeRepository = new TehemeRepository()
    return await themeRepository.voteTheme(themeId)
}

export {
    getThemesFindByRoomIdUsecase,
    createThemeUseCase,
    voteThemeUseCase
}