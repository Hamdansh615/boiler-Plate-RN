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

export default class AuthActions {
    static SignUpCall() {
        return {
            type: SIGN_UP_CALL,
        }
    }
    static SignUpSuccess(data) {
        return {
            type: SIGN_UP_SUCCESS,
            payload: data
        }
    }
    static SignUpFail(data) {
        return {
            type: SIGN_UP_FAIL,
            payload: data
        }
    }
    static SignInCall() {
        return {
            type: SIGN_IN_CALL,
        }
    }
    static SignInSuccess(data) {
        return {
            type: SIGN_IN_SUCCESS,
            payload: data
        }
    }
    static SignInFail(data) {
        return {
            type: SIGN_IN_FAIL,
            payload: data
        }
    }
    static SignOutCall() {
        return {
            type: SIGN_OUT_CALL,
        }
    }
    static SignOutSuccess() {
        return {
            type: SIGN_OUT_SUCCESS,
            payload: data
        }
    }
    static SignOutFail(data) {
        return {
            type: SIGN_OUT_FAIL,
            
        }
    }
    static CheckUserCall() {
        return {
            type: CHECK_USER_CALL,
        }
    }
    static CheckUserSuccess(data) {
        return {
            type: CHECK_USER_SUCCESS,
        }
    }
    static CheckUserFail(data) {
        return {
            type: CHECK_USER_FAIL,
        }
    }
    static ForgotPasswordCall() {
        return {
            type: FORGOT_PASSWORD_CALL,
        }
    }
    static ForgotPasswordSuccess(data) {
        return {
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        }
    }
    static ForgotPasswordFail() {
        return {
            type: FORGOT_PASSWORD_FAIL,
        }
    }
    static ResetPasswordCall() {
        return {
            type: RESET_PASSWORD_CALL,
        }
    }
    static ResetPasswordSuccess(data) {
        return {
            type: RESET_PASSWORD_SUCCESS,
            payload: data
        }
    }
    static ResetPasswordFail() {
        return {
            type: RESET_PASSWORD_FAIL,
        }
    }
    static ChangePasswordCall() {
        return {
            type: CHANGE_PASSWORD_CALL,
        }
    }
    static ChangePasswordSuccess(data) {
        return {
            type: CHANGE_PASSWORD_SUCCESS,
            payload: data
        }
    }
    static ChangePasswordFail() {
        return {
            type: CHANGE_PASSWORD_FAIL,
        }
    }
}