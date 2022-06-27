import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
	rejectOnNotFound: true,
})

export default class RoomRepository {
    async read(roomId: string) {
        return await prisma.room.findUnique({
            where: {
                id: roomId,
            },
            select: {
                isActive: true,
                guests: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
    }

    async create() {
        const room = await prisma.room.create({
            data: {
                isActive: false
            }
        })

        return { room_id: room.id }
    }

    async joinRoom(roomId: string, name: string) {
        console.log(name)
        const guest = await prisma.guest.create({
            data: {
                name: name,
                roomId: roomId
            }
        })

        return await prisma.room.update({
            where: {
                id: roomId
            },
            data: {
                guests: {
                    connect: {
                        id: guest.id,
                    }
                }
            },
        })
    }

    async doActiveRoom(roomId: string) {
        await prisma.room.update({
            where: {
                id: roomId
            },
            data: {
                isActive: true
            }
        })

        const startedTimestamp = await prisma.room.findUnique({
            where: {
                id: roomId
            },
            select: {
                updatedAt: true
            }
        })

        return await {
            isActive: true,
            timestamp: startedTimestamp.updatedAt
        }
    }

    async getActiveRoom(roomId: string){
        const nowRoomState = await prisma.room.findUnique({
            where: {
                id: roomId
            },
            select: {
                updatedAt: true,
                isActive: true
            }
        })
        return {
                isActive: nowRoomState.isActive,
                timestamp: nowRoomState.updatedAt
        }
    }

    async getJoinedUsers(roomId: string) {
        return await prisma.room.findMany({
            where: {
                id: roomId
            },
            select: {
                guests: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
    }

    async getNowTimestamp(roomId: string) {
        await prisma.room.update({
            where: {
                id: roomId
            },
            data: {
                changeTimestamo: Math.floor(Math.random() * (199 - 100)) + 100
            }
        })
        const nowTimestamp = await prisma.room.findUnique({
            where: {
                id: roomId
            },
            select: {
                updatedAt: true
            }
        })

        return { 
            timestamp: nowTimestamp.updatedAt 
        }
    }
}