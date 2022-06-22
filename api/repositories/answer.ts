import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  rejectOnNotFound: true,
})

export default class AnswerRepository {
    async findByThemeId(themeId: string) {
        return await prisma.theme.findMany({
            where: {
                id: themeId
            },
            select: {
                linkedAnser: {
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

    async createAnswer(themeId: string, newAnswer: string, userName: string) {
        return await prisma.answer.create({
            data: {
                title: newAnswer,
                createdUserName: userName,
                numberOfVotes: 0,
                linkedTheme: {
                    connect: {
                        id: themeId
                    }
                }
            }
        })
    }

    async voteAnswer(answerId: string) {
        const votes = await prisma.answer.findUnique({
            where: {
                id: answerId
            },
            select: {
                numberOfVotes: true
            }
        })
        const NextNumberOfVotes = votes.numberOfVotes + 1
        const newNumberOfVotes =  await prisma.answer.update({
            where: {
                id: answerId
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