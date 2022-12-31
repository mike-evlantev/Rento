export interface AppContextType {
    isAuthorized: boolean;
    authorize: (isAuthorized: boolean) => void;
}