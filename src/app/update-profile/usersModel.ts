export class UsersModel {
    constructor(
        public fname: string,
        public lname: string,
        public email: string,
        public newPassword: string,
        public newConfirmPassword: string,
        public mobileNo: string
    ) { }

}
