import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  rejectOnNotFound: true,
})

export default class TehemeRepository {
    async findByRoomId(roomId: string) {
        return await prisma.room.findUnique({
            where: {
                id: roomId
            },
            select: {
                themes: {
                    select: {
                        id: true,
                        title: true,
                        createdUserName: true,
                        numberOfVotes: true,
                    }
                }
            }
        })
    }
    async MaxThemefindByRoomId(roomId: string) {
        return await prisma.room.findFirst({
            where: {
                id: roomId
            },
            select: {
                themes: {
                    orderBy: {
                        numberOfVotes: 'desc'
                    },
                    select:{
                        id: true,
                        title: true,
                        createdUserName: true,
                        numberOfVotes: true
                    }
                }
            }
        })
    }

    async createTheme(roomId: string, newTheme: string, userName: string) {
        const theme = await prisma.theme.create({
            data: {
                roomId: roomId,
                title: newTheme,
                createdUserName: userName,
                numberOfVotes: 0,
            }
        })

        const themeId = theme.id

        await prisma.room.update({
            where: {
                id: roomId,
            },
            data: {
                themes: {
                    connect: {
                        id: themeId
                    }
                }
            }
        })

        return theme
    }

    async voteTheme(themeId: string) {
        const votes = await prisma.theme.findUnique({
            where: {
                id: themeId
            },
            select: {
                numberOfVotes: true
            }
        })
        const NextNumberOfVotes = votes.numberOfVotes + 1
        const newNumberOfVotes =  await prisma.theme.update({
            where: {
                id: themeId
            },
            data: {
                numberOfVotes: NextNumberOfVotes
            }
        })

        return {
            number_of_votes: newNumberOfVotes.numberOfVotes
        }
    }
}