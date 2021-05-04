/* Global State */

import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        // it calls when object created by this class
        this._isAuth = false; // "_" means this variable can't change
        this._user = {};
        makeAutoObservable(this); // with this function mobx will listen changes on this variables and will render components If changes occur
    }

    /* Actions are funtions which change the state */
    setIsAuth(bool) {
        // <-- Action
        this._isAuth = bool;
    }
    setUser(user) {
        // <-- Action
        this._user = user;
    }

    /* Getters for this variables, to archive this variables from state (Computed function) */
    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}
