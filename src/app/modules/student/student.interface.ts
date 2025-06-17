
export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: "male"|"female";
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: "A+"| "A-"| "B+"| "B-"| "AB+"| "AB-"| "O+"| "O-";
    presentAddress: string;
    parmanentAddress: string;
    guardian: {
        fatherName: string; 
        fatherOccupation: string;
        fatherContactNo: string;
        motherName: string; 
        motherOccupation: string;
        motherContactNo: string;
    }
    localGuardian: LocalGuardian;
    profileImage?: string; 
    isActive: "active"|"inActive";
}