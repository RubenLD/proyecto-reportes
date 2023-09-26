import { type } from "os";

export type Entity<ID extends number | string> = {
    id: ID;
};

export type TPagination = {
    orderBy?: string;
    page?: number;
    offset?: number;
    limit?: number;
    order?: string;
    filter?: string;
};

export type JSON = {
    [x:string]: any;
};

export type JSONArray = JSON[];

export type TStatus = Entity<number> & {
    description?: string;
}

export enum Error {
    MISSING_FIELDS = 'MissingFields',
    RECORD_NOT_REGISTERED = 'RecordNotRegistered',
    RECORD_NOT_UPDATED = 'RecordNotUpdated',
    NO_DATA_FOUND = 'NoDataFound',
    CREDENTIALS_MISMATCH = 'CredentialMismatch',
    UNAUTHORIZED = 'Unauthorized',
}