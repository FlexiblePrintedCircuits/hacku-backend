import RoomRepository from "../repositories/room"

const getRoomInfoUseCase = async (
    roomId: string
) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.read(roomId)
}

const createRoomUseCase = async () => {
    const roomRepository = new RoomRepository()
    return await roomRepository.create()
}

const joinRoomUseCase = async (
    roomId: string,
    name: string
) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.joinRoom(roomId, name)
}

const getJoinedUsersUseCase = async (roomId: string) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.getJoinedUsers(roomId)
}

const doActiveRoomUseCase = async (roomId: string) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.doActiveRoom(roomId)
}

const getActiveRoomUseCase = async (roomId: string) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.getActiveRoom(roomId)
}

const getNowTimestampUseCase = async (roomId: string) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.getNowTimestamp(roomId)
}

export {
    getRoomInfoUseCase,
    createRoomUseCase,
    joinRoomUseCase,
    getJoinedUsersUseCase,
    doActiveRoomUseCase,
    getActiveRoomUseCase,
    getNowTimestampUseCase
}
