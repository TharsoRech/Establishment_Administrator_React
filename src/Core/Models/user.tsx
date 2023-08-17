export type User = {
    token?: number;
    refreshToken: string;
    establishmentId: string;
    razaoSocial: string;
    endereco: string;
    numero: string;
    complemento:string;
    bairro:string;
    cidade:string;
    cep:string;
    uf:string;
    IsDeleted: boolean;
    phoneNumber:string;
    cnpj?: string;
    createAt:Date;
}