export class UserProfile {
    
    constructor(
        public name: string,
        public address: string,
        public phoneNumber: string,
        public city: string,
        public province: string,
        public postalCode: string,
        public occupation?: string,
        public subject?: string,
    ) {}
}
