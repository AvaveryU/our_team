import { ArrayToUnion } from "../../utils/types";

export type UsersActions = ArrayToUnion<
    [
        {
            type: "SET_USER";
            user: any
        },
    ]
>

interface IUsersState {
    user: any
}

const usersState: IUsersState = {
    user: {}
}

export const userReducer = (state = usersState, action: UsersActions): IUsersState => {
    switch (action.type) {

        default: return state;
    }
};