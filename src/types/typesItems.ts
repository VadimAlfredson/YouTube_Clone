import {mkdtemp} from "fs";

export type videosItemType = {
    id: {
        kind: string
        videoId: string
        channelId: string
    }
    kind: string
    snippet: {
        channelId: string
        channelTitle:
            string
        description: string
        liveBroadcastContent: string
        publishTime: string
        publishedAt: string

        thumbnails: {
            default: { url: string, width: number, height: number }
            high: { url: string, width: number, height: number }
            medium: { url: string, width: number, height: number }
        }
        title: string
    }
}

export type channelDetailsType = {
    brandingSettings: {
        channel: {
            country: string
            description: string
            keywords: string
            title: string
            unsubscribedTrailer: string
        }
        image: {
            bannerExternalUrl: string
        }
    }
    contentDetails: {
        relatedPlaylists: {
            likes: string
            uploads: string
        }
    }
    id: {
        kind: string
        videoId: string
        channelId: string
    }
    kind: string
    snippet: {
        country: string
        customUrl: string
        description: string
        localized: {
            description: string
            title: string
        }
        publishedAt: string
        thumbnails: {
            default: { url: string, width: number, height: number }
            high: { url: string, width: number, height: number }
            medium: { url: string, width: number, height: number }
        }
        title: string
    }
    statistics: {
        hiddenSubscriberCount: boolean
        subscriberCount: string
        videoCount: string
        viewCount: string
    }
}

export type videoDetailsType = {
    contentDetails: {
        caption: string
        contentRating: {}
        definition: string
        dimension: string
        duration: string
        licensedContent: boolean
        projection: string
    }
    id: string
    kind: string
    snippet: {
        categoryId: string
        channelId: string
        channelTitle: string
        defaultAudioLanguage: string
        description: string
        liveBroadcastContent: string
        localized: {
            title: string
            description: string
        }
        publishedAt: string
        tags: []
        thumbnails: {
            default:
                { url: string, width: number, height: number }
            high:
                { url: string, width: number, height: number }
            maxres:
                { url: string, width: number, height: number }
            medium:
                { url: string, width: number, height: number }
            standard:
                { url: string, width: number, height: number }
        }
        title: string
    }
    statistics: {
        commentCount: string
        favoriteCount: string
        likeCount: string
        viewCount: string
    }
}

export type commentType = {
    id: string
    kind: string
    snippet: {
        canReply: boolean
        isPublic: boolean
        topLevelComment: {
            id: string
            kind: string
            snippet: {
                authorChannelId: {
                    value: string
                }
                authorChannelUrl: string
                authorDisplayName: string
                authorProfileImageUrl: string
                canRate: boolean
                likeCount: number
                publishedAt: string
                textDisplay: string
                textOriginal: string
                updatedAt: string
                videoId: string
                viewerRating: string
            }
        }
        totalReplyCount: number
        videoId: string
    }
}