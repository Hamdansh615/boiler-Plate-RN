import {
    SIGN_UP_CALL,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_IN_CALL,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT_CALL,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAIL,
    CHECK_USER_CALL,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAIL,
    FORGOT_PASSWORD_CALL,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_CALL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
} from '../constants'

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    netStatus:false,
    is_completed: false,
    userDetails: {},
    getProgram:{},
    accessToReasetPW: false,
    passwordReset: false,
    changePassword: false,
}

export default function Auth(state = initialState, action){
    switch (action.type) {
        case SIGN_UP_CALL:
            state = {
                ...state,
                isLoading: true,
                isAuthenticated:false
            }
            break;
            case SIGN_UP_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                userDetails: action.payload
            }
            break;
        case SIGN_UP_FAIL:
            state = {
                ...state,
                isLoading: false,
                isAuthenticated: false
            }
            break;
        case SIGN_IN_CALL:
            state = {
                ...state,
                isLoading: true,
                isAuthenticated: false
            }
            break;
        case SIGN_IN_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                userDetails: action.payload
            }
            break;
        case SIGN_IN_FAIL:
            state = {
                ...state,
                isLoading: false,
                isAuthenticated: false
            }
            break;
        case SIGN_OUT_CALL:
            state = {
                ...state,
                isLoading: true,
                isAuthenticated: true
            }
            break;
        case SIGN_OUT_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                userDetails: action.payload
            }
            break;
        case SIGN_OUT_FAIL:
            state = {
                ...state,
                isLoading: false,
                isAuthenticated: true
            }
            break;
        case CHECK_USER_CALL:
            state = {
                ...state,
                // isLoading: true,
                netStatus: false
            }
            break;
        case CHECK_USER_SUCCESS:
            state = {
                ...state,
                // isLoading: false,
                netStatus: true,
            }
            break;
        case CHECK_USER_FAIL:
            state = {
                ...state,
                // isLoading: false,
                netStatus: false

            }
            break;
        case FORGOT_PASSWORD_CALL:
            state = {
                ...state,
                isLoading: true,
                accessToReasetPW: false
            }
            break;
        case FORGOT_PASSWORD_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                accessToReasetPW: true,
                ATEP_User: action.payload
            }
            break;
        case FORGOT_PASSWORD_FAIL:
            state = {
                ...state,
                isLoading: false,
                accessToReasetPW: false
            }
            break;
        case RESET_PASSWORD_CALL:
            state = {
                ...state,
                isLoading: true,
                passwordRested: false
            }
            break;
        case RESET_PASSWORD_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                passwordRested: true,
            }
            break;
        case RESET_PASSWORD_FAIL:
            state = {
                ...state,
                isLoading: false,
                passwordRested: false
            }
            break;
        default:
            break;
    }
    return state;
}