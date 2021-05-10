  
import {$authHost, $host} from "./index";

export const createType = async (type) => { // function for create type
    const {data} = await $authHost.post('api/type', type) // user status must be admin, to create type
    return data
}

export const fetchTypes = async () => { // function for receive types
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => { // function for create brand
    const {data} = await $authHost.post('api/brand', brand) // user status must be admin, to create brand
    return data
}

export const fetchBrands = async () => { // function for receive brands
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => { // function for create device
    const {data} = await $authHost.post('api/device', device) // user status must be admin, to create device
    return data
}

export const fetchDevices = async () => { // function for receive devices
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => { // function for receive one device
    const {data} = await $host.get('api/device/' + id)
    return data
}