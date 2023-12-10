import {ActionContext, Mutation} from "vuex";

interface IPost{
    id: number,
    userId: number,
    title: string,
    body: string,
}

export default {
    state: {
        posts: [],
    },
    getters: {
        allPosts(state: any):Array<IPost>{
            return state.posts
        }
    },
    mutations: {
        updatePosts(state: any, posts: [IPost]):void{
            state.posts = posts;
        }
    },
    actions: {
        async getPosts(ctx: ActionContext<Mutation<string>, [IPost]>): Promise<void>{
            const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5')
            const data: [IPost] = await response.json();
            ctx.commit('updatePosts', data);
        }
    },
}
