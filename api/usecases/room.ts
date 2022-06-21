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

const activeRoomUseCase = async (roomId: string) => {
    const roomRepository = new RoomRepository()
    return await roomRepository.activeRoom(roomId)
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
    activeRoomUseCase,
    getNowTimestampUseCase
}
