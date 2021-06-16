export namespace DemoModule {
    interface User {
        id: number | string;
        name: string;
    }
    export type State = {
        user: User;
    }
}
