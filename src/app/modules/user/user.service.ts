import User from "./user.model"

const createUserInDB = async(studentData) =>{
    const result = await User.create(studentData);
    return result
}

export const UserServices = {
    createStudentInDB,
}