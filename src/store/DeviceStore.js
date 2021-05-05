/* Global State */

import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() { // it calls when object created by this class
        this._types = [ // "_" means this variable can't change
            { id: 1, name: "DVD Players" },
            { id: 2, name: "Smartphones" },
            { id: 3, name: "Notebooks" },
            { id: 4, name: "TVs" },
        ]

        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "Lenovo" },
            { id: 4, name: "Asuss" },



        ]

        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' },
            { id: 2, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' },
            { id: 3, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' },
            { id: 4, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' },
            { id: 5, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' },
            { id: 6, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' },

        ]
        this._selectedType = {} // add object for selected type
        this._selectedBrand = {} // add object for selected brand
        makeAutoObservable(this) // with this function mobx will listen changes on this variables and will render components If changes occur
    }

    /* Actions are funtions which change the state */
    setTypes(types) { // <-- Action
        this._tipes = types
    }
    setBrands(brands) { // <-- Action
        this._brands = brands
    }
    setDevices(devices) { // <-- Action
        this._devices = devices
    }
    setSelectedType(type) { // add Action for selected type
        this._selectedType = type
    }
    setSelectedBrand(brand) { // add Action for selected brand
        this._selectedBrand = brand
    }


    /* Getters for this variables, to archive this variables from state (Computed function) */
    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() { // add Getter for selected type
        return this._selectedType
    }
    get selectedBrand() { // add Getter for selected brand
        return this._selectedBrand
    }


}