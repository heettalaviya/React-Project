export const AddMenData = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}

export const DeleteMenData = (data) => {
    return {
        type: "DELETE",
        payload: data
    }
}
export const GetOneMenData = (id) => {
    return {
        type: "GET_ONE",
        payload: id
    }
}
export const UpdateMenData = (data) => {
    return {
        type: "UPDATE",
        payload: data
    }
}
export const filterData = (data) => {
    return {
        type: "FILTER_MEN",
        payload: data
    }
}

