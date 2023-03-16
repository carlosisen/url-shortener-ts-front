interface IUrl {
    _id: string,
    notes: string,
    url: string,
    createdAt: Date | string,
    updatedAt: Date | string,
    idUser: string,
    uses: number,
}

interface IUser {
    _id: string,
    name: string
    email: string
    createdAt: Date | string,
    updatedAt: Date | string,
    password?: string
    token?: string
}
type ILoginUser = Omit<IUser, "_id" | "createdAt" | "updatedAt" | "token" | "name">;
type IRegisterUser = Omit<IUser, "_id" | "createdAt" | "updatedAt" | "token">;
type IRegisterUrl= Omit<IUrl, "_id" | "createdAt" | "updatedAt" | "idUser" | "uses">;
type IAction = {
    type: "handleUser",
    payload : {
        inputName: string,
        inputValue : string
    } 
    } | {
    type: "insertUser" | "insertUrls"
    payload:  IUser | IUrl | IUrl[] 
    } |{
        type: "clear"
    } | {
        type: "handleUrls",
        payload: {
            inputName: string,
            inputValue: string,
            elementID : string
        }
    }

export interface elementsStates{
    iUrl: IUrl,
    iUser: IUser,
    iRegisterUser: IRegisterUser,
    iLoginUser: ILoginUser
    iRegisterUrl: IRegisterUrl,
    iAction : IAction,
}
export interface IappStates{
    user: IUser | null,
    urlsData: IUrl[],
}
export interface IGlobalContext{
    appState: IappStates,
    dispatch: Dispatch<IAction>
}

